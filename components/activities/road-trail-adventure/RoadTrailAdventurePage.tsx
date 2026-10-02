import Navbar from "@/components/layout/Navbar";
import AdventureCategoryGrid from "./AdventureCategoryGrid";
import AdventureDestinationGrid from "./AdventureDestinationGrid";
import AdventureDestinationHighlight from "./AdventureDestinationHighlight";
import AdventureFAQ from "./AdventureFAQ";
import AdventureFinalCTA from "./AdventureFinalCTA";
import AdventureGallery from "./AdventureGallery";
import AdventureHero from "./AdventureHero";
import AdventureInquiryForm from "./AdventureInquiryForm";
import AdventureItineraries from "./AdventureItineraries";
import AdventurePreparation from "./AdventurePreparation";
import AdventureSubNav from "./AdventureSubNav";
import AdventureTravelStyles from "./AdventureTravelStyles";
import AdventureWhyKarvaahh from "./AdventureWhyKarvaahh";
import FeaturedRoadTrips from "./FeaturedRoadTrips";
import MotorcycleAdventureSection from "./MotorcycleAdventureSection";
import OffRoadAdventureSection from "./OffRoadAdventureSection";
import ResponsibleAdventureSection from "./ResponsibleAdventureSection";
import ScrollProgress from "./ScrollProgress";
import TrekkingTrailSection from "./TrekkingTrailSection";
import "./road-trail.css";
import Footer from "@/components/layout/Footer";

/**
 * Road & Trail Adventure page.
 *
 * Journey: inspire (hero, overview) → choose (experiences, destinations,
 * road trips, trails, ride, 4x4, travel style) → trust (samples, preparation,
 * why Karvaahh, gallery, responsible travel, FAQ) → convert (inquiry, CTA).
 *
 * Navbar and Footer are rendered by the site layout, not here.
 */
export default function RoadTrailAdventurePage() {
  return (
    <main className="rt-page">
      {/* Content shows immediately when JS is unavailable. */}
      <noscript>
        <style>{`.rt-reveal{opacity:1!important;transform:none!important}`}</style>
      </noscript>
<Navbar />
      <ScrollProgress />
      <AdventureHero />
      <AdventureSubNav />
      <AdventureDestinationHighlight />
      <AdventureCategoryGrid />
      <AdventureDestinationGrid />
      <FeaturedRoadTrips />
      <TrekkingTrailSection />
      <MotorcycleAdventureSection />
      <OffRoadAdventureSection />
      <AdventureTravelStyles />
      <AdventureItineraries />
      <AdventurePreparation />
      <AdventureWhyKarvaahh />
      <AdventureGallery />
      <ResponsibleAdventureSection />
      <AdventureFAQ />
      <AdventureInquiryForm />
      <AdventureFinalCTA />
      <Footer />
    </main>
  );
}
