import type { ReactNode } from "react";
import { InquiryPrefillProvider } from "./shared/InquiryPrefill";
import WellnessHero from "./WellnessHero";
import WellnessIntroduction from "./WellnessIntroduction";
import WellnessExperienceGrid from "./WellnessExperienceGrid";
import FeaturedWellnessDestinations from "./FeaturedWellnessDestinations";
import WellnessActivities from "./WellnessActivities";
import RetreatStyleSelector from "./RetreatStyleSelector";
import TravelerWellnessSection from "./TravelerWellnessSection";
import SampleWellnessItineraries from "./SampleWellnessItineraries";
import WellnessComparison from "./WellnessComparison";
import WhyChooseKarvaahh from "./WhyChooseKarvaahh";
import WellnessPlanningProcess from "./WellnessPlanningProcess";
import WellnessGallery from "./WellnessGallery";
import WellnessFAQ from "./WellnessFAQ";
import WellnessInquiryForm from "./WellnessInquiryForm";
import WellnessFinalCTA from "./WellnessFinalCTA";
import "./yoga-wellness-tokens.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

/**
 * Page assembly. Navbar and Footer are rendered by the site layout, not here.
 * Section order follows the user journey: inspire → understand → choose →
 * reassure → convert (form) → close.
 */
export default function YogaWellnessPage({ children }: { children?: ReactNode }) {
  return (
  
    <InquiryPrefillProvider>
      <main className="ykw" id="main-content">
          <Navbar/>
        <WellnessHero />
        <WellnessIntroduction />
        <WellnessExperienceGrid />
        <FeaturedWellnessDestinations />
        <WellnessActivities />
        <RetreatStyleSelector />
        <TravelerWellnessSection />
        <SampleWellnessItineraries />
        <WellnessComparison />
        <WhyChooseKarvaahh />
        <WellnessPlanningProcess />
        <WellnessGallery />
        <WellnessFAQ />
        <WellnessInquiryForm />
        <WellnessFinalCTA />
        {children}
        <Footer/>
      </main>
    </InquiryPrefillProvider>
  );
}
