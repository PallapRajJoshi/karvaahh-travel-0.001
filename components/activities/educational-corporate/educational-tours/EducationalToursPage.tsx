import Navbar from "@/components/layout/Navbar";
import "./educational-tours.css";
import { ConfidenceSection } from "./sections/ConfidenceSection";
import { CustomizationSection } from "./sections/CustomizationSection";
import { EducationalBreadcrumb } from "./sections/EducationalBreadcrumb";
import { EducationalDestinations } from "./sections/EducationalDestinations";
import { EducationalFAQ } from "./sections/EducationalFAQ";
import { EducationalGallery } from "./sections/EducationalGallery";
import { EducationalHero } from "./sections/EducationalHero";
import { EducationalIntro } from "./sections/EducationalIntro";
import { EducationalPackages } from "./sections/EducationalPackages";
import { FinalCTA } from "./sections/FinalCTA";
import { InquiryForm } from "./sections/InquiryForm";
import { LearningActivities } from "./sections/LearningActivities";
import { LearningJourney } from "./sections/LearningJourney";
import { PlanningProcess } from "./sections/PlanningProcess";
import { SafetySection } from "./sections/SafetySection";
import { SampleItineraries } from "./sections/SampleItineraries";
import { StudentSkills } from "./sections/StudentSkills";
import { SubjectConnections } from "./sections/SubjectConnections";
import { Testimonials } from "./sections/Testimonials";
import { TourCategories } from "./sections/TourCategories";
import { WhyKarvaahh } from "./sections/WhyKarvaahh";
import Footer from "@/components/layout/Footer";

/**
 * Educational Tours page.
 * Navbar and Footer are rendered by the site layout, not here.
 * Story: Inspiration → Learning value → Destinations → Activities → Safety → Customization → Inquiry.
 */
export function EducationalToursPage() {
  return (
    <main className="et-page">
      <Navbar/>
      <EducationalHero />
      <EducationalBreadcrumb />
      <EducationalIntro />
      <LearningJourney />
      <WhyKarvaahh />
      <TourCategories />
      <EducationalDestinations />
      <LearningActivities />
      <SubjectConnections />
      <StudentSkills />
      <SampleItineraries />
      <SafetySection />
      <PlanningProcess />
      <CustomizationSection />
      <ConfidenceSection />
      <EducationalPackages />
      <EducationalGallery />
      <Testimonials />
      <EducationalFAQ />
      <InquiryForm />
      <FinalCTA />
      <Footer />
    </main>
  );
}
