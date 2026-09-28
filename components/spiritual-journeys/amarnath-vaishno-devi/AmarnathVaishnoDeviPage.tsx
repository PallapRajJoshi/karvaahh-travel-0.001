import "./avd-base.css";
import { BREADCRUMBS } from "./seo/structuredData";
import { Hero } from "./sections/Hero";
import { SectionNav } from "./sections/SectionNav";
import { Introduction } from "./sections/Introduction";
import { JourneyOverview } from "./sections/JourneyOverview";
import { SacredDestinations } from "./sections/SacredDestinations";
import { SpiritualExperiences } from "./sections/SpiritualExperiences";
import { AmarnathRoutes } from "./sections/AmarnathRoutes";
import { VaishnoDeviJourney } from "./sections/VaishnoDeviJourney";
import { PilgrimageTransport } from "./sections/PilgrimageTransport";
import { Registration } from "./sections/Registration";
import { BestTime, FitnessPreparation, SafetyGuidelines } from "./sections/Preparation";
import { TravelTips } from "./sections/TravelTips";
import { SuggestedItinerary } from "./sections/SuggestedItinerary";
import { Accommodation, Transportation } from "./sections/StayAndTravel";
import { PackageDetails } from "./sections/PackageDetails";
import { PilgrimageComparison, SuitableTravellers } from "./sections/Audience";
import { FAQ } from "./sections/FAQ";
import { EnquirySection } from "./sections/EnquirySection";
import { RelatedJourneys } from "./sections/RelatedJourneys";
import { MobileEnquiryBar } from "./sections/MobileEnquiryBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

/**
 * Journey order: why → what → how it works → rules → preparation → plan → cost boundaries → decide → ask.
 * Navbar/Footer render at layout level.
 */
export function AmarnathVaishnoDeviPage() {
  return (
    <div className="avd-page">
      <Navbar />
      <Hero crumbs={BREADCRUMBS} />
      <SectionNav />
      <div className="avd-main">
        {/* Why visit */}
        <Introduction />
        <JourneyOverview />
        {/* What to see */}
        <SacredDestinations />
        <SpiritualExperiences />
        {/* How the pilgrimage works */}
        <AmarnathRoutes />
        <VaishnoDeviJourney />
        <PilgrimageTransport />
        {/* Rules */}
        <Registration />
        {/* Preparation & safety */}
        <FitnessPreparation />
        <SafetyGuidelines />
        <BestTime />
        <TravelTips />
        {/* Plan */}
        <SuggestedItinerary />
        <Accommodation />
        <Transportation />
        <PackageDetails />
        {/* Decide */}
        <SuitableTravellers />
        <PilgrimageComparison />
        <FAQ />
        {/* Ask */}
        <EnquirySection />
        <RelatedJourneys />
      </div>
      <MobileEnquiryBar />
      <Footer />
    </div>
  );
}
