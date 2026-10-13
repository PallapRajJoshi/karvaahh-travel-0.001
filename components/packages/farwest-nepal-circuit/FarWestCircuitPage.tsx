import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "@/components/shared/reveal.css";
import "@/components/shared/breadcrumb.css";
import "@/components/activities/experience/heli.css";
import { BookingProvider } from "@/components/activities/experience/booking";
import type { ResolvedBooking } from "@/components/activities/experience/format";
import MotionProvider from "@/components/activities/experience/MotionProvider";
import HeliStickyCta from "@/components/activities/experience/product/HeliStickyCta";
import HeliTrustBar from "@/components/activities/experience/product/HeliTrustBar";
import ProductCta from "@/components/activities/experience/product/ProductCta";
import ProductFaq from "@/components/activities/experience/product/ProductFaq";
import RelatedTours from "@/components/activities/experience/product/RelatedTours";
import { resolveImages } from "@/components/activities/experience/resolve-images";
import { serializeJsonLd } from "@/components/activities/experience/structured-data";
import { DESTINATIONS, FAQS, INITIAL_DESTINATIONS, PACKAGES, PAGE_TITLE, RELATED } from "@/data/farwest-nepal/content";
import * as I from "@/data/farwest-nepal/images";
import DestinationGrid from "./DestinationGrid";
import FarWestHero from "./FarWestHero";
import { Gateways, Intro, Itinerary, KoltiCorridor, Packages, Permits, Seasons } from "./sections";
import { buildFarWestStructuredData } from "./structured-data";

const BOOKING: ResolvedBooking = {
  destination: "Far-West Nepal",
  departures: ["Kathmandu", "Nepalgunj", "Dhangadhi", "India border (Banbasa)", "Other"],
  travelerOptions: ["1 Adult", "2 Adults", "3–4 Adults", "Family (5+)", "Group (10+)"],
  tourTypes: [...PACKAGES.map((p) => p.title), "Custom Far-West expedition"],
  defaults: {
    date: "",
    travelers: "2 Adults",
    departure: "Kathmandu",
    tourType: "Custom Far-West expedition",
    message: "We would like to plan a private Far-West Nepal journey.",
  },
  sample: false,
  sampleNotice: "",
  labels: { departure: "Starting point", tourType: "Journey" },
};

/**
 * Exclusive Far-West Nepal Circuit. Content lives in data/farwest-nepal;
 * every CTA opens the shared enquiry form (sent via WhatsApp), and every
 * internal link points to an existing page.
 */
export default function FarWestCircuitPage() {
  const destinations = resolveImages(DESTINATIONS);
  const rara = resolveImages(I.rara);
  const dolpo = resolveImages(I.dolpo);

  return (
    <>
      {buildFarWestStructuredData(destinations, FAQS).map((data, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(data) }} />
      ))}
      <MotionProvider>
        <BookingProvider booking={BOOKING} tourTitle={PAGE_TITLE}>
          <Navbar />
          <main className="overflow-x-clip font-[family-name:var(--font-inter)] text-[#0B2942] antialiased">
            <FarWestHero background={rara} />
            <HeliTrustBar />
            <Intro image={rara.src ? rara : dolpo} />
            <DestinationGrid destinations={destinations} initial={INITIAL_DESTINATIONS} />
            <Packages />
            <KoltiCorridor />
            <Itinerary />
            <Gateways nepalgunj={resolveImages(I.nepalgunj)} />
            <Seasons />
            <Permits />
            <ProductFaq tour={{ title: PAGE_TITLE, faqs: FAQS }} />
            <ProductCta
              tour={{
                cta: {
                  title: "Your Far-West Expedition Starts Here",
                  text: "Tell us which lakes, trails and sacred heights call you. We will shape a private route around your dates, fitness and travel style — and verify every stage locally before you set out.",
                  image: dolpo,
                  animated: true,
                  primaryLabel: "Choose Your Experience",
                  primaryHref: "#packages",
                  quoteLabel: "Contact Karvaahh",
                  quoteHref: "/contact",
                  whatsappLabel: "WhatsApp Karvaahh",
                  planMessage: "Hello Karvaahh, I'd like to plan the Exclusive Far-West Nepal Circuit.",
                  quoteSubject: "Far-West Nepal Circuit enquiry",
                },
              }}
            />
            <RelatedTours tour={{ relatedTours: resolveImages(RELATED), labels: { related: "Continue Exploring", relatedTitle: "Related Journeys & Destinations" } }} />
          </main>
          <Footer />
          <HeliStickyCta titled={{ title: "Far-West Nepal Circuit", mobileTitle: "Far-West Nepal", desktop: "Plan My Expedition", mobile: "Enquire" }} />
        </BookingProvider>
      </MotionProvider>
    </>
  );
}
