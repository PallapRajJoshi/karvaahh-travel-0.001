import "./jyotirlinga-page.css";

import BestTime from "./BestTime";
import ComparisonTable from "./ComparisonTable";
import DarshanExperience from "./DarshanExperience";
import FAQ from "./FAQ";
import FestivalSection from "./FestivalSection";
import Gallery from "./Gallery";
import HealthSafety from "./HealthSafety";
import IndiaRoute from "./IndiaRoute";
import IntroSection from "./IntroSection";
import JourneyFacts from "./JourneyFacts";
import JourneyTimeline from "./JourneyTimeline";
import JyotirlingaExplorer from "./JyotirlingaExplorer";
import JyotirlingaHero from "./JyotirlingaHero";
import JyotirlingaSections from "./JyotirlingaSections";
import KarvaahhApproach from "./KarvaahhApproach";
import KarvaahhCTA from "./KarvaahhCTA";
import KedarnathAltitude from "./KedarnathAltitude";
import PackageOverview from "./PackageOverview";
import PackageTerms from "./PackageTerms";
import PackingChecklist from "./PackingChecklist";
import PageIndex from "./PageIndex";
import PilgrimageExperience from "./PilgrimageExperience";
import RegionalJourney from "./RegionalJourney";
import ResponsibleTravel from "./ResponsibleTravel";
import StayAndMeals from "./StayAndMeals";
import TransportOptions from "./TransportOptions";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

/**
 * 12 Jyotirlinga Yatra — page assembly (server component).
 * Client islands: ExplorerFilter (region state) and IndiaRouteGraphic (active stop + draw).
 * Navbar and Footer are rendered by the root layout, not here.
 */
export default function JyotirlingaYatraPage() {
  return (
    <div className="jyl-page">
      <Navbar/>
      <JyotirlingaHero />
      <PageIndex />
      <JourneyFacts />
      <IntroSection />
      <JyotirlingaExplorer />
      <JyotirlingaSections />
      <ComparisonTable />
      <RegionalJourney />
      <IndiaRoute />
      <TransportOptions />
      <JourneyTimeline />
      <PilgrimageExperience />
      <DarshanExperience />
      <FestivalSection />
      <BestTime />
      <KedarnathAltitude />
      <PackingChecklist />
      <HealthSafety />
      <StayAndMeals />
      <ResponsibleTravel />
      <PackageOverview />
      <PackageTerms />
      <Gallery />
      <FAQ />
      <KarvaahhApproach />
      <KarvaahhCTA />
      <Footer/>
    </div>
  );
}
