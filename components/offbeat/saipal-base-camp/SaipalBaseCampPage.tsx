import Hero from "./sections/Hero/Hero";
import Breadcrumb from "./sections/Breadcrumb/Breadcrumb";
import DestinationHighlight from "./sections/DestinationHighlight/DestinationHighlight";
import QuickFacts from "./sections/QuickFacts/QuickFacts";
import WhyExplore from "./sections/WhyExplore/WhyExplore";
import RegionGallery from "./sections/RegionGallery/RegionGallery";
import TrekkingExperience from "./sections/TrekkingExperience/TrekkingExperience";
import ItineraryTimeline from "./sections/ItineraryTimeline/ItineraryTimeline";
import NatureLandscapes from "./sections/NatureLandscapes/NatureLandscapes";
import CultureHeritage from "./sections/CultureHeritage/CultureHeritage";
import SeasonGuide from "./sections/SeasonGuide/SeasonGuide";
import HowToReach from "./sections/HowToReach/HowToReach";
import AccommodationLogistics from "./sections/AccommodationLogistics/AccommodationLogistics";
import SafetyPermits from "./sections/SafetyPermits/SafetyPermits";
import TravelPackages from "./sections/TravelPackages/TravelPackages";
import PhotoGallery from "./sections/PhotoGallery/PhotoGallery";
import FAQ from "./sections/FAQ/FAQ";
import FinalCTA from "./sections/FinalCTA/FinalCTA";
import "./tokens.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

/**
 * Assembly component for the Saipal Base Camp destination page.
 * Mirrors the Rara Lake / Tsho Rolpa Lake pattern: a top-level page class
 * (`saipal-page`) scopes the page-specific design tokens, and each section
 * is a self-contained component with co-located CSS.
 *
 * The existing site Navbar/Footer are rendered at the layout level and are
 * NOT included here — see the route file and README.
 */
export default function SaipalBaseCampPage() {
  return (
    <main className="saipal-page">
      <Navbar />
      <Breadcrumb />
      <Hero />
      <DestinationHighlight />
      <QuickFacts />
      <WhyExplore />
      <RegionGallery />
      <TrekkingExperience />
      <ItineraryTimeline />
      <NatureLandscapes />
      <CultureHeritage />
      <SeasonGuide />
      <HowToReach />
      <AccommodationLogistics />
      <SafetyPermits />
      <TravelPackages />
      <PhotoGallery />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
