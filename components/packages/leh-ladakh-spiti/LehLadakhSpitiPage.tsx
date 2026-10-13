import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "@/components/shared/reveal.css";
import "@/components/shared/breadcrumb.css";
import "@/components/activities/experience/heli.css";
import { BookingProvider } from "@/components/activities/experience/booking";
import type { ResolvedBooking } from "@/components/activities/experience/format";
import MotionProvider from "@/components/activities/experience/MotionProvider";
import ProductFaq from "@/components/activities/experience/product/ProductFaq";
import HeliStickyCta from "@/components/activities/experience/product/HeliStickyCta";
import { resolveImages } from "@/components/activities/experience/resolve-images";
import { BRAND_NAME, SITE_URL, pageUrl } from "@/components/activities/experience/site";
import { serializeJsonLd } from "@/components/activities/experience/structured-data";
import { DESTINATIONS, FAQS, PAGE_PATH, PAGE_TITLE, REGIONS, ROUTES } from "@/data/leh-ladakh-spiti/content";
import * as I from "@/data/leh-ladakh-spiti/images";
import CircuitHero from "./CircuitHero";
import RoutePlanner from "./RoutePlanner";
import { Destinations, InquiryCta, Overview, RouteMap, Safety, Seasons, TravelStyles } from "./sections";

const BOOKING: ResolvedBooking = {
  destination: PAGE_TITLE,
  departures: ["Delhi", "Chandigarh", "Leh", "Other"],
  travelerOptions: ["1 Adult", "2 Adults", "3–4 Adults", "Family (5+)", "Group (10+)"],
  tourTypes: [...ROUTES.map((r) => `Route ${r.number} — ${r.name}`), "Not sure yet — help me choose"],
  defaults: {
    date: "",
    travelers: "2 Adults",
    departure: "Delhi",
    tourType: "Not sure yet — help me choose",
    message: "We would like to plan the Leh–Ladakh, Zanskar & Spiti circuit.",
  },
  sample: false,
  sampleNotice: "",
  labels: { departure: "Starting point", tourType: "Preferred route" },
};

/** Breadcrumb + FAQPage only — no prices, offers or ratings are published. */
function structuredData() {
  const url = pageUrl(PAGE_PATH);
  return [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Packages", item: `${SITE_URL}/packages` },
        { "@type": "ListItem", position: 3, name: PAGE_TITLE, item: url },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })),
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: `${PAGE_TITLE} — route options`,
      itemListElement: ROUTES.map((r, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "TouristTrip",
          name: `Route ${r.number}: ${r.name}`,
          description: r.summary,
          provider: { "@type": "TravelAgency", name: BRAND_NAME, url: SITE_URL },
          itinerary: { "@type": "ItemList", itemListElement: r.stops.map((s, j) => ({ "@type": "ListItem", position: j + 1, item: { "@type": "Place", name: s.name } })) },
        },
      })),
    },
  ];
}

/**
 * Leh–Ladakh, Zanskar & Spiti Grand Himalayan Circuit. Content lives in
 * data/leh-ladakh-spiti; the enquiry form is the shared WhatsApp booking
 * dialog used by the other package pages.
 */
export default function LehLadakhSpitiPage() {
  const routes = resolveImages(ROUTES);

  return (
    <>
      {structuredData().map((data, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(data) }} />
      ))}
      <MotionProvider>
        <BookingProvider booking={BOOKING} tourTitle={PAGE_TITLE}>
          <Navbar />
          <main className="overflow-x-clip font-[family-name:var(--font-inter)] text-[#0B2942] antialiased">
            <CircuitHero background={resolveImages(I.hero)} />
            <Overview regions={resolveImages(REGIONS)} />
            <RoutePlanner routes={routes} />
            <Destinations items={resolveImages(DESTINATIONS)} />
            <RouteMap routes={routes} />
            <Safety />
            <Seasons />
            <TravelStyles />
            <ProductFaq tour={{ title: PAGE_TITLE, faqs: FAQS }} />
            <InquiryCta image={resolveImages(I.cta)} />
          </main>
          <Footer />
          <HeliStickyCta titled={{ title: "Ladakh & Spiti Circuit", mobileTitle: "Plan Your Expedition", desktop: "Plan My Expedition", mobile: "Enquire" }} />
        </BookingProvider>
      </MotionProvider>
    </>
  );
}
