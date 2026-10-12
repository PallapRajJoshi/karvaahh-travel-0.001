import type { ReactNode } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "@/components/shared/reveal.css";
import "@/components/shared/breadcrumb.css";
import "./heli.css";
import { BookingProvider } from "./booking";
import { resolveBooking } from "./format";
import MotionProvider from "./MotionProvider";
import type { HelicopterTour, SectionKey } from "./product-types";
import { serializeJsonLd } from "./structured-data";
import Altitude from "./product/Altitude";
import BookingOptions from "./product/BookingOptions";
import { ANCHOR, MIN_GALLERY_PHOTOS, TOUR_NAV } from "./product/constants";
import Comparison from "./product/Comparison";
import DhamCards from "./product/DhamCards";
import EnquiryForm from "./product/EnquiryForm";
import FlightTimeline from "./product/FlightTimeline";
import PeakShowcase from "./product/PeakShowcase";
import StatsBar from "./product/StatsBar";
import Documents from "./product/Documents";
import Extensions from "./product/Extensions";
import Gallery from "./product/Gallery";
import HeliAvailability from "./product/HeliAvailability";
import HeliBookingWidget from "./product/HeliBookingWidget";
import HeliCulture from "./product/HeliCulture";
import HeliDestinationExplorer from "./product/HeliDestinationExplorer";
import HeliDestinationStory from "./product/HeliDestinationStory";
import HeliFeature from "./product/HeliFeature";
import HeliFlightJourney from "./product/HeliFlightJourney";
import HeliHero from "./product/HeliHero";
import HeliInteractiveMap from "./product/HeliInteractiveMap";
import HeliItinerary from "./product/HeliItinerary";
import HeliLandscapes from "./product/HeliLandscapes";
import HeliStats from "./product/HeliStats";
import HeliStickyCta from "./product/HeliStickyCta";
import HeliTrustBar from "./product/HeliTrustBar";
import HeliVideo from "./product/HeliVideo";
import HeliWhyCards from "./product/HeliWhyCards";
import Highlights from "./product/Highlights";
import HowToBook from "./product/HowToBook";
import Inclusions from "./product/Inclusions";
import Itinerary from "./product/Itinerary";
import Overview from "./product/Overview";
import Pilgrimage from "./product/Pilgrimage";
import Preparation from "./product/Preparation";
import ProductCta from "./product/ProductCta";
import ProductFaq from "./product/ProductFaq";
import QuickFacts from "./product/QuickFacts";
import RelatedTours from "./product/RelatedTours";
import RouteMap from "./product/RouteMap";
import Safety from "./product/Safety";
import Seasons from "./product/Seasons";
import Significance from "./product/Significance";
import Spotlight from "./product/Spotlight";
import Story from "./product/Story";
import { buildProductStructuredData } from "./product/structured-data";
import TourNav from "./product/TourNav";
import TravelerTypes from "./product/TravelerTypes";
import Trust from "./product/Trust";
import WhyHelicopter from "./product/WhyHelicopter";

/** The standard flow; a tour can reorder it with `layout`. Absent data renders nothing. */
const DEFAULT_LAYOUT: SectionKey[] = [
  "hero",
  "booking",
  "nav",
  "facts",
  "trust-bar",
  "overview",
  "story",
  "significance",
  "stats",
  "why",
  "dhams",
  "highlights",
  "classic-story",
  "explorer",
  "map",
  "journey",
  "itinerary",
  "altitude",
  "feature",
  "pilgrimage",
  "culture",
  "landscapes",
  "seasons",
  "dates",
  "book",
  "travelers",
  "inclusions",
  "documents",
  "preparation",
  "safety",
  "gallery",
  "video",
  "trust",
  "faq",
  "cta",
  "related",
];

/**
 * The single page template behind every experience page (helicopter tours,
 * Char Dham Yatra, ...). Sections are looked up in a registry and rendered
 * in the order given by the tour's `layout`, so each destination tells its
 * own story from data alone.
 */
export default function ExperiencePage({ tour }: { tour: HelicopterTour }) {
  const booking = resolveBooking(tour);
  const photoCount = tour.gallery.items.filter((g) => g.image.src).length;
  // Spotlights not placed explicitly in the layout go after the landscapes.
  let layout = tour.layout ?? DEFAULT_LAYOUT;
  const placed = new Set(layout);
  const loose = (tour.spotlights ?? []).filter((s) => !placed.has(`spotlight:${s.id}`)).map((s) => `spotlight:${s.id}` as SectionKey);
  if (loose.length) {
    const at = layout.indexOf("landscapes") + 1 || layout.length;
    layout = [...layout.slice(0, at), ...loose, ...layout.slice(at)];
  }

  // A nav tab shows only when its section is in the layout and has data.
  const has = (...keys: SectionKey[]) => keys.some((k) => layout.includes(k));
  const present: Record<string, boolean> = {
    overview: (has("overview") && Boolean(tour.overview)) || (has("story") && Boolean(tour.editorial)),
    highlights: (has("highlights") && Boolean(tour.highlights)) || (has("explorer") && Boolean(tour.explorer && tour.places?.length)),
    dhams: has("dhams") && Boolean(tour.dhams),
    route: has("map"),
    journey: has("journey") && Boolean(tour.journey),
    itinerary: (has("itinerary") && Boolean(tour.itinerary || tour.timeline)) || (has("flight-steps") && Boolean(tour.flightSteps)),
    peaks: has("peaks") && Boolean(tour.peaks),
    dates: has("dates") && Boolean(tour.departures),
    inclusions: has("inclusions"),
    safety: has("safety"),
    gallery: has("gallery") && photoCount >= MIN_GALLERY_PHOTOS,
    faqs: has("faq"),
    book: has("book") || (has("enquiry") && Boolean(tour.enquiry)),
  };
  const navItems = TOUR_NAV.filter((n) => present[n.id] ?? true).map((n) => ({ ...n, label: tour.labels?.nav?.[n.id] ?? n.label }));
  const photoWhy = tour.whyHelicopter.items.every((w) => w.image?.src);
  const hero = tour.hero.secondaryCta || !tour.journey ? tour.hero : { ...tour.hero, secondaryCta: { label: "Explore the Journey", href: "#journey" } };

  const sections: Record<Exclude<SectionKey, `spotlight:${string}`>, () => ReactNode> = {
    hero: () => <HeliHero tour={{ ...tour, hero }} />,
    booking: () => <HeliBookingWidget />,
    nav: () => <TourNav items={navItems} />,
    facts: () => <QuickFacts tour={tour} />,
    "trust-bar": () => <HeliTrustBar />,
    overview: () => <Overview tour={tour} />,
    story: () => <HeliDestinationStory tour={tour} anchorId={tour.overview ? undefined : "overview"} />,
    significance: () => <Significance tour={tour} />,
    stats: () => <HeliStats tour={tour} />,
    why: () => (photoWhy ? <HeliWhyCards tour={tour} /> : <WhyHelicopter tour={tour} />),
    dhams: () => <DhamCards tour={tour} />,
    highlights: () => <Highlights tour={tour} />,
    "classic-story": () => <Story tour={tour} />,
    explorer: () => <HeliDestinationExplorer tour={tour} anchorId={tour.highlights ? undefined : "highlights"} />,
    map: () => (tour.map && tour.places?.length ? <HeliInteractiveMap tour={tour} /> : <RouteMap tour={tour} />),
    journey: () => <HeliFlightJourney tour={tour} />,
    itinerary: () => (tour.itinerary ? <Itinerary tour={tour} /> : <HeliItinerary tour={tour} />),
    altitude: () => <Altitude tour={tour} />,
    feature: () => <HeliFeature tour={tour} />,
    pilgrimage: () => <Pilgrimage tour={tour} />,
    culture: () => <HeliCulture tour={tour} />,
    landscapes: () => <HeliLandscapes tour={tour} />,
    seasons: () => <Seasons tour={tour} />,
    dates: () => <HeliAvailability tour={tour} />,
    // One anchor for the booking area so the tour nav stays on "Book / Enquire".
    book: () => (
      <div id="book" className={ANCHOR}>
        <BookingOptions tour={tour} />
        <Extensions tour={tour} />
        <HowToBook tour={tour} />
      </div>
    ),
    travelers: () => <TravelerTypes tour={tour} />,
    inclusions: () => <Inclusions tour={tour} />,
    documents: () => <Documents tour={tour} />,
    preparation: () => <Preparation tour={tour} />,
    safety: () => <Safety tour={tour} />,
    gallery: () => <Gallery tour={tour} />,
    video: () => <HeliVideo tour={tour} />,
    trust: () => <Trust tour={tour} />,
    faq: () => <ProductFaq tour={tour} />,
    cta: () => <ProductCta tour={tour} />,
    related: () => <RelatedTours tour={tour} />,
    "stats-bar": () => <StatsBar tour={tour} />,
    "flight-steps": () => <FlightTimeline tour={tour} />,
    peaks: () => <PeakShowcase tour={tour} />,
    comparison: () => <Comparison tour={tour} />,
    enquiry: () => <EnquiryForm tour={tour} />,
  };

  const render = (key: SectionKey) => {
    if (key.startsWith("spotlight:")) {
      const s = tour.spotlights?.find((sp) => `spotlight:${sp.id}` === key);
      return s ? <Spotlight key={key} spotlight={s} /> : null;
    }
    const fn = sections[key as keyof typeof sections];
    return fn ? <SectionSlot key={key}>{fn()}</SectionSlot> : null;
  };

  return (
    <>
      {buildProductStructuredData(tour).map((data, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(data) }} />
      ))}
      <MotionProvider>
        <BookingProvider booking={booking} tourTitle={tour.title}>
          <Navbar />
          <main className="font-[family-name:var(--font-inter)] text-[#0B2942] antialiased">{layout.map(render)}</main>
          <Footer />
          <HeliStickyCta plan={tour.stickyPlan} titled={tour.stickyCta} />
        </BookingProvider>
      </MotionProvider>
    </>
  );
}

function SectionSlot({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
