import "./haridwar-rishikesh-page.css";
import AccommodationTransport from "./AccommodationTransport";
import BestTimeToVisit from "./BestTimeToVisit";
import JourneyBreadcrumbs from "./JourneyBreadcrumbs";
import JourneyEnquiry from "./JourneyEnquiry";
import JourneyFAQ from "./JourneyFAQ";
import JourneyIntroduction from "./JourneyIntroduction";
import JourneyItinerary from "./JourneyItinerary";
import JourneyOverview from "./JourneyOverview";
import MobileEnquiryBar from "./MobileEnquiryBar";
import PackageScope from "./PackageScope";
import RelatedJourneys from "./RelatedJourneys";
import SacredDestinations from "./SacredDestinations";
import SectionNav from "./SectionNav";
import SpiritualExperiences from "./SpiritualExperiences";
import SpiritualJourneyHero from "./SpiritualJourneyHero";
import SuitableTravellers from "./SuitableTravellers";
import TravelTips from "./TravelTips";
import { NAV_ITEMS } from "./data/config";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

/** Assembly component. Section order follows the brief (sections 1–16). */
export default function HaridwarRishikeshPage() {
  return (
    <div className="hry-page">
      <Navbar />
      <JourneyBreadcrumbs />
      <SpiritualJourneyHero />
      <SectionNav items={NAV_ITEMS} />
      <JourneyIntroduction />
      <JourneyOverview />
      <SacredDestinations />
      <SpiritualExperiences />
      <JourneyItinerary />
      <AccommodationTransport />
      <PackageScope />
      <BestTimeToVisit />
      <TravelTips />
      <SuitableTravellers />
      <JourneyFAQ />
      <JourneyEnquiry />
      <RelatedJourneys />
      <div id="hry-end" aria-hidden="true" />
      <MobileEnquiryBar />
      <Footer />
    </div>
  );
}
