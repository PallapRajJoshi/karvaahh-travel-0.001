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
import { WaveDivider } from "@/components/packages/beach-cruise/ui";
import * as C from "@/data/coastal-south-india/content";
import CoastalHero from "./CoastalHero";
import { DestinationGrid, FinalCta, IslandExtension, Packages, Planning, RoutePreview, Regions, Seasons } from "./sections";

/**
 * Coastal Getaways of South India. All copy lives in
 * data/coastal-south-india/content.ts. Packages are route concepts
 * enquired through the shared booking dialog — no prices or
 * guaranteed availability are shown.
 */
export default function CoastalSouthIndiaPage() {
  const regions = resolveImages(C.REGIONS);
  const packages = resolveImages(C.PACKAGES);
  const destinations = resolveImages(C.DESTINATIONS);
  const islandImage = resolveImages(C.ISLAND_IMAGE);
  const url = pageUrl(C.PAGE_PATH);

  const booking: ResolvedBooking = {
    destination: "South India coastal journey",
    departures: ["Delhi", "Mumbai", "Bengaluru", "Chennai", "Kochi", "Goa", "Kathmandu", "Other"],
    travelerOptions: ["1 Adult", "2 Adults", "Couple", "Family (3–5)", "Group (6+)"],
    tourTypes: [...C.PACKAGES.map((p) => p.title), "Andaman island extension", "Custom South India journey"],
    defaults: { date: "", travelers: "2 Adults", departure: "Delhi", tourType: "Custom South India journey", message: "We would like to plan a South India coastal journey." },
    sample: false,
    sampleNotice: "",
    labels: { departure: "Starting from", tourType: "Journey" },
  };

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Packages", item: `${SITE_URL}/packages` },
        { "@type": "ListItem", position: 3, name: C.PAGE_TITLE, item: url },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: `${C.PAGE_TITLE} — packages`,
      itemListElement: C.PACKAGES.map((p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "TouristTrip",
          name: p.title,
          description: p.summary,
          url: `${url}#${p.id}`,
          itinerary: { "@type": "ItemList", itemListElement: p.route.map((stop, k) => ({ "@type": "ListItem", position: k + 1, name: stop })) },
          provider: { "@type": "TravelAgency", name: BRAND_NAME, url: SITE_URL },
        },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: C.FAQS.map((f) => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })),
    },
  ];

  return (
    <>
      {jsonLd.map((data, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(data) }} />
      ))}
      <MotionProvider>
        <BookingProvider booking={booking} tourTitle={C.PAGE_TITLE}>
          <Navbar />
          <main className="overflow-x-clip font-[family-name:var(--font-inter)] text-[#0B2942] antialiased">
            <CoastalHero background={C.HERO_IMAGE} highlights={C.HERO_HIGHLIGHTS} info={C.INFO_STRIP} />
            <Regions items={regions} />
            <WaveDivider from="#F7F1E6" to="#FFFFFF" />
            <Packages items={packages} />
            <DestinationGrid items={destinations} />
            <RoutePreview stages={C.ROUTE_STAGES} />
            <IslandExtension image={islandImage} stops={C.ISLAND_STOPS} activities={C.ISLAND_ACTIVITIES} />
            <Seasons items={C.SEASONS} note={C.SEASON_NOTE} />
            <Planning planning={C.PLANNING} why={C.WHY_KARVAAHH} />
            <ProductFaq tour={{ title: C.PAGE_TITLE, faqs: C.FAQS }} />
            <FinalCta image={C.CTA_IMAGE} contactHref={C.enquiryHref()} related={C.RELATED} />
          </main>
          <Footer />
          <HeliStickyCta titled={{ title: "South India Coastal", mobileTitle: "Plan Your Journey", desktop: "Plan Your Journey", mobile: "Enquire" }} />
        </BookingProvider>
      </MotionProvider>
    </>
  );
}
