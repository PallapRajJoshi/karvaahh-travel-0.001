import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "@/components/shared/reveal.css";
import "@/components/shared/breadcrumb.css";
import "@/components/activities/experience/heli.css";
import "./combined.css";
import { BookingProvider } from "@/components/activities/experience/booking";
import type { ResolvedBooking } from "@/components/activities/experience/format";
import MotionProvider from "@/components/activities/experience/MotionProvider";
import HeliStickyCta from "@/components/activities/experience/product/HeliStickyCta";
import { resolveImages } from "@/components/activities/experience/resolve-images";
import { serializeJsonLd } from "@/components/activities/experience/structured-data";
import * as C from "@/data/nepal-india-combined/content";
import CombinedHero from "./CombinedHero";
import { Benefits, Circuits, Destinations, FinalCta, GrandTour, Inclusions, Practical, TravelThemes } from "./sections";
import { buildCombinedStructuredData } from "./structured-data";

const RELATED = [
  { href: "/packages/spiritual-pilgrimage", label: "Spiritual & Pilgrimage Tours" },
  { href: "/packages/north-india", label: "North India Packages" },
  { href: "/packages/uttarakhand", label: "Uttarakhand Packages" },
  { href: "/destinations/lumbini-province", label: "Lumbini Province" },
  { href: "/destinations/gandaki-province", label: "Pokhara & Gandaki" },
  { href: "/packages", label: "All Packages" },
];

/**
 * Nepal–India Combined Tours. Content lives in data/nepal-india-combined.
 * Every CTA opens the shared booking dialog (WhatsApp enquiry) with the
 * circuit pre-selected. Server-rendered except the hero and theme picker.
 */
export default function NepalIndiaCombinedPage() {
  const { IMAGES, CIRCUITS, DESTINATIONS } = resolveImages({ IMAGES: C.IMAGES, CIRCUITS: C.CIRCUITS, DESTINATIONS: C.DESTINATIONS });

  const booking: ResolvedBooking = {
    destination: C.PAGE_TITLE,
    departures: ["Delhi", "Kathmandu", "Other / international arrival"],
    travelerOptions: ["1 Adult", "2 Adults", "Family (3–5)", "Group (6+)"],
    tourTypes: [...CIRCUITS.map((c) => c.title), C.GRAND_TOUR.title, C.CUSTOM_JOURNEY],
    defaults: { date: "", travelers: "2 Adults", departure: "Delhi", tourType: C.CUSTOM_JOURNEY, message: "We would like to plan a combined India and Nepal journey." },
    sample: false,
    sampleNotice: "",
    labels: { departure: "Arriving in", tourType: "Journey" },
  };

  return (
    <>
      {buildCombinedStructuredData(CIRCUITS).map((data, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(data) }} />
      ))}
      <MotionProvider>
        <BookingProvider booking={booking} tourTitle={C.PAGE_TITLE}>
          <Navbar />
          <main className="nic-page overflow-x-clip font-[family-name:var(--font-inter)] text-[#1F2A33] antialiased">
            <CombinedHero background={IMAGES.hero} />
            <Circuits items={CIRCUITS} />
            <GrandTour tour={C.GRAND_TOUR} image={IMAGES.kathmandu} />
            <Destinations items={DESTINATIONS} />
            <TravelThemes themes={C.THEMES} circuits={CIRCUITS} />
            <Practical items={C.PRACTICAL} />
            <Inclusions included={C.INCLUSIONS} excluded={C.EXCLUSIONS} />
            <Benefits items={C.BENEFITS} />
            <FinalCta image={IMAGES.closing} related={RELATED} />
          </main>
          <Footer />
          <HeliStickyCta titled={{ title: C.PAGE_TITLE, mobileTitle: "Plan Your Journey", desktop: "Plan My Journey", mobile: "Enquire" }} />
        </BookingProvider>
      </MotionProvider>
    </>
  );
}
