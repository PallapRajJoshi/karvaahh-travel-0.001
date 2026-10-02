import ScrollProgress from "./shared/ScrollProgress";
import CultureHero from "./sections/CultureHero";
import DestinationHighlight from "./sections/DestinationHighlight";
import FestivalGrid from "./sections/FestivalGrid";
import HeritageDestinations from "./sections/HeritageDestinations";
import CulturalCommunities from "./sections/CulturalCommunities";
import CulturalPerformances from "./sections/CulturalPerformances";
import CulturalExperiences from "./sections/CulturalExperiences";
import CulturalItineraries from "./sections/CulturalItineraries";
import WhyKarvaahh from "./sections/WhyKarvaahh";
import CultureGallery from "./sections/CultureGallery";
import ResponsibleTourism from "./sections/ResponsibleTourism";
import CultureFAQ from "./sections/CultureFAQ";
import CultureInquiryForm from "./sections/CultureInquiryForm";
import CultureFinalCTA from "./sections/CultureFinalCTA";
import "./culture-page.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

/**
 * Culture & Festival Experiences landing page.
 * Navbar and Footer are rendered by the site layout, not here.
 *
 * Journey: inspire (hero, highlight) → discover (festivals, cities,
 * communities, performances, experiences) → decide (journeys, why us,
 * gallery, respect, FAQ) → convert (inquiry, final CTA).
 */
export default function CultureFestivalPage() {
  return (
    <main className="culture-page">
      <Navbar />
      <ScrollProgress />
      <CultureHero />
      <DestinationHighlight />
      <FestivalGrid />
      <HeritageDestinations />
      <CulturalCommunities />
      <CulturalPerformances />
      <CulturalExperiences />
      <CulturalItineraries />
      <WhyKarvaahh />
      <CultureGallery />
      <ResponsibleTourism />
      <CultureFAQ />
      <CultureInquiryForm />
      <CultureFinalCTA />
      <Footer />
    </main>
  );
}
