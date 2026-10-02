import "./wildlife-nature.css";
import { WildlifeHero } from "./WildlifeHero";
import { SectionNav } from "./SectionNav";
import { WildlifeIntroduction } from "./WildlifeIntroduction";
import { NatureExperienceGrid } from "./NatureExperienceGrid";
import { FeaturedWildlifeDestinations } from "./FeaturedWildlifeDestinations";
import { WildlifeEncounterSection } from "./WildlifeEncounterSection";
import { NatureActivities } from "./NatureActivities";
import { NatureTravelStyleSelector } from "./NatureTravelStyleSelector";
import { TravelerNatureSection } from "./TravelerNatureSection";
import { SampleNatureItineraries } from "./SampleNatureItineraries";
import { DestinationComparison } from "./DestinationComparison";
import { ResponsibleTourismSection } from "./ResponsibleTourismSection";
import { WhyChooseKarvaahh } from "./WhyChooseKarvaahh";
import { NaturePlanningProcess } from "./NaturePlanningProcess";
import { WildlifeGallery } from "./WildlifeGallery";
import { WildlifeFAQ } from "./WildlifeFAQ";
import { NatureInquiryForm } from "./NatureInquiryForm";
import { WildlifeFinalCTA } from "./WildlifeFinalCTA";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

/**
 * Page assembly. Navbar and Footer are rendered by the site layout, not here.
 * Order follows the user journey: inspire → choose → understand → trust → act.
 */
export function WildlifeNaturePage() {
  return (
    <div className="wn-page">
      <Navbar />
      <WildlifeHero />
      <SectionNav />
      {/* A <div>, not <main>: the site layout is expected to own the single <main> landmark. */}
      <div id="wn-main">
        <WildlifeIntroduction />
        <NatureExperienceGrid />
        <FeaturedWildlifeDestinations />
        <WildlifeEncounterSection />
        <NatureActivities />
        <NatureTravelStyleSelector />
        <TravelerNatureSection />
        <SampleNatureItineraries />
        <DestinationComparison />
        <ResponsibleTourismSection />
        <WhyChooseKarvaahh />
        <NaturePlanningProcess />
        <WildlifeGallery />
        <WildlifeFAQ />
        <NatureInquiryForm />
        <WildlifeFinalCTA />
        <Footer />
      </div>
    </div>
  );
}
