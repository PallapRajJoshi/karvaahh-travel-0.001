import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "@/components/shared/reveal.css";
import "@/components/shared/breadcrumb.css";
import MotionProvider from "../MotionProvider";
import type { HelicopterProductTour } from "../product-types";
import Hero from "../sections/Hero";
import { serializeJsonLd } from "../structured-data";
import Altitude from "./Altitude";
import BookingOptions from "./BookingOptions";
import DeparturePicker from "./DeparturePicker";
import { ANCHOR, MIN_GALLERY_PHOTOS, TOUR_NAV } from "./constants";
import Documents from "./Documents";
import Gallery from "./Gallery";
import Highlights from "./Highlights";
import HowToBook from "./HowToBook";
import Inclusions from "./Inclusions";
import Itinerary from "./Itinerary";
import MobileCta from "./MobileCta";
import Overview from "./Overview";
import Preparation from "./Preparation";
import ProductCta from "./ProductCta";
import ProductFaq from "./ProductFaq";
import QuickFacts from "./QuickFacts";
import RelatedTours from "./RelatedTours";
import RouteMap from "./RouteMap";
import Safety from "./Safety";
import Seasons from "./Seasons";
import Significance from "./Significance";
import { buildProductStructuredData } from "./structured-data";
import TourNav from "./TourNav";
import TravelerTypes from "./TravelerTypes";
import Trust from "./Trust";
import WhyHelicopter from "./WhyHelicopter";

/**
 * Full helicopter-tour product page. Section order follows the sticky tour
 * navigation (see constants.ts) so the active tab tracks scrolling; optional
 * sections (significance, documents, day-wise plan, booking steps) render
 * only when the tour data provides them.
 */
export default function ProductTourPage({ tour }: { tour: HelicopterProductTour }) {
  const photoCount = tour.gallery.items.filter((g) => g.image.src).length;
  const navItems = TOUR_NAV.filter((n) => {
    if (n.id === "gallery") return photoCount >= MIN_GALLERY_PHOTOS;
    if (n.id === "documents") return Boolean(tour.documents);
    return true;
  });

  return (
    <>
      {buildProductStructuredData(tour).map((data, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(data) }} />
      ))}
      <Navbar />
      <MotionProvider>
        <main className="font-[family-name:var(--font-inter)] text-[#0B2942] antialiased">
          <Hero hero={tour.hero} breadcrumbLabel={tour.breadcrumbLabel} />
          <TourNav items={navItems} />
          <QuickFacts tour={tour} />
          <Overview tour={tour} />
          <Significance tour={tour} />
          <WhyHelicopter tour={tour} />
          <Highlights tour={tour} />
          <Itinerary tour={tour} />
          <RouteMap tour={tour} />
          <Gallery tour={tour} />
          <Inclusions tour={tour} />
          <Documents tour={tour} />
          <Preparation tour={tour} />
          <Altitude tour={tour} />
          <Seasons tour={tour} />
          <Safety tour={tour} />
          <TravelerTypes tour={tour} />
          <Trust tour={tour} />
          <ProductFaq tour={tour} />
          {/* One anchor for the whole booking area so the tour nav stays on "Book / Enquire". */}
          <div id="book" className={ANCHOR}>
            <BookingOptions tour={tour} />
            <DeparturePicker tour={tour} />
            <HowToBook tour={tour} />
          </div>
          <ProductCta tour={tour} />
          <RelatedTours tour={tour} />
        </main>
      </MotionProvider>
      <Footer />
      <MobileCta title={tour.title} />
    </>
  );
}
