import { breadcrumbTrail } from "@/data/dhorpatan";
import Breadcrumb from "@/components/shared/Breadcrumb";
import DhorpatanHero from "./DhorpatanHero";
import DhorpatanOverview from "./DhorpatanOverview";
import WhyVisitDhorpatan from "./WhyVisitDhorpatan";
import TopAttractions from "./TopAttractions";
import ExperiencesActivities from "./ExperiencesActivities";
import TrekkingHiking from "./TrekkingHiking";
import SuggestedItineraries from "./SuggestedItineraries";
import WildlifeBiodiversity from "./WildlifeBiodiversity";
import CultureLocalLife from "./CultureLocalLife";
import BestTimeToVisit from "./BestTimeToVisit";
import HowToReach from "./HowToReach";
import AccommodationStay from "./AccommodationStay";
import TravelEssentialsSafety from "./TravelEssentialsSafety";
import TourPackages from "./TourPackages";
import PhotoGallery from "./PhotoGallery";
import FAQSection from "./FAQSection";
import FinalCTA from "./FinalCTA";
import "./dhorpatan-tokens.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

/**
 * Top-level assembly for the Dhorpatan Hunting Reserve destination page.
 * Mirrors the existing province-page pattern: one assembly component
 * composing section components in order, wrapped in a page-scoped class
 * for design-token isolation. The global Navbar/Footer render at the
 * layout level and are intentionally NOT included here.
 */
export default function DhorpatanAssembly() {
  return (
    <div className="dhorpatan-page">
      <Navbar />
      <DhorpatanHero />

      <div className="dhorpatan-page__container">
        <Breadcrumb trail={breadcrumbTrail} />
      </div>

      <DhorpatanOverview />
      <WhyVisitDhorpatan />
      <TopAttractions />
      <ExperiencesActivities />
      <TrekkingHiking />
      <SuggestedItineraries />
      <WildlifeBiodiversity />
      <CultureLocalLife />
      <BestTimeToVisit />
      <HowToReach />
      <AccommodationStay />
      <TravelEssentialsSafety />
      <TourPackages />
      <PhotoGallery />
      <FAQSection />
      <FinalCTA />
      <Footer />
    </div>
  );
}
