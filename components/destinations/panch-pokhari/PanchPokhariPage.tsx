import ScrollProgress from "@/components/shared/ScrollProgress";
import Hero from "./Hero";
import DestinationHighlight from "./DestinationHighlight";
import QuickFacts from "./QuickFacts";
import WhyVisit from "./WhyVisit";
import Attractions from "./Attractions";
import TrekkingExperience from "./TrekkingExperience";
import ItineraryTimeline from "./ItineraryTimeline";
import SpiritualSignificance from "./SpiritualSignificance";
import NatureLandscapes from "./NatureLandscapes";
import BestTimeToVisit from "./BestTimeToVisit";
import HowToReach from "./HowToReach";
import Accommodation from "./Accommodation";
import PreparationSafety from "./PreparationSafety";
import TravelPackages from "./TravelPackages";
import Gallery from "./Gallery";
import FAQ from "./FAQ";
import FinalCTA from "./FinalCTA";

import "./panch-pokhari-tokens.css";
import "@/components/shared/reveal.css";
import "@/components/shared/safe-image.css";
import "@/components/shared/section-heading.css";
import "@/components/shared/breadcrumb.css";
import "@/components/shared/scroll-progress.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

/**
 * Assembly component for the Panch Pokhari destination page.
 * Route: /offbeat-unexplored/panch-pokhari
 *
 * Section order matches the approved brief (sections 2–19). The shared
 * Navbar/Footer are rendered at the layout level and are intentionally
 * NOT included here, per project convention.
 */
export default function PanchPokhariPage() {
  return (
    <div className="panch-pokhari-page">
      <Navbar />
      <ScrollProgress />
      <Hero />
      <main>
        <DestinationHighlight />
        <QuickFacts />
        <WhyVisit />
        <Attractions />
        <TrekkingExperience />
        <ItineraryTimeline />
        <SpiritualSignificance />
        <NatureLandscapes />
        <BestTimeToVisit />
        <HowToReach />
        <Accommodation />
        <PreparationSafety />
        <TravelPackages />
        <Gallery />
        <FAQ />
        <FinalCTA />
        <Footer />
      </main>
    </div>
  );
}
