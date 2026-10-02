import "./cruise.tokens.css";
import CruiseHero from "./sections/CruiseHero";
import CruiseIntroduction from "./sections/CruiseIntroduction";
import CruiseCategoryGrid from "./sections/CruiseCategoryGrid";
import FeaturedCruiseDestinations from "./sections/FeaturedCruiseDestinations";
import CruiseExperienceHighlights from "./sections/CruiseExperienceHighlights";
import CruiseStyleSelector from "./sections/CruiseStyleSelector";
import TravelerExperienceSection from "./sections/TravelerExperienceSection";
import SampleCruiseItineraries from "./sections/SampleCruiseItineraries";
import CruiseComparison from "./sections/CruiseComparison";
import WhyChooseKarvaahh from "./sections/WhyChooseKarvaahh";
import CruisePlanningProcess from "./sections/CruisePlanningProcess";
import CruiseGallery from "./sections/CruiseGallery";
import CruiseFAQ from "./sections/CruiseFAQ";
import CruiseInquiryForm from "./sections/CruiseInquiryForm";
import CruiseFinalCTA from "./sections/CruiseFinalCTA";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

/** Navbar/Footer come from the root layout — not rendered here. */
export default function CruiseExperiencesPage() {
  return (
    <main className="cruise-page">
      <Navbar />
      <CruiseHero />
      <CruiseIntroduction />
      <CruiseCategoryGrid />
      <FeaturedCruiseDestinations />
      <CruiseExperienceHighlights />
      <CruiseStyleSelector />
      <TravelerExperienceSection />
      <SampleCruiseItineraries />
      <CruiseComparison />
      <WhyChooseKarvaahh />
      <CruisePlanningProcess />
      <CruiseGallery />
      <CruiseFAQ />
      <CruiseInquiryForm />
      <CruiseFinalCTA />
      <Footer />
    </main>
  );
}
