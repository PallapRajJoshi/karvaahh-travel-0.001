import Hero from "./Hero";
import Breadcrumb from "./Breadcrumb";
import SectionNav from "./SectionNav";
import Overview from "./Overview";
import ThreePasses from "./ThreePasses";
import Highlights from "./Highlights";
import Experiences from "./Experiences";
import Itinerary from "./Itinerary";
import Peaks from "./Peaks";
import Culture from "./Culture";
import Gokyo from "./Gokyo";
import BestTime from "./BestTime";
import Preparation from "./Preparation";
import TravelInfo from "./TravelInfo";
import Accommodation from "./Accommodation";
import Packages from "./Packages";
import Gallery from "./Gallery";
import Faq from "./Faq";
import FinalCta from "./FinalCta";
import RevealController from "./RevealController";
import { gallery } from "@/data/adventure/everest-three-passes-trek/content";
import "./everest-three-passes.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

/**
 * Page assembly. Section order follows the visitor's decision journey:
 * inspire → understand the route → judge the challenge → practicalities → act.
 * Navbar and Footer are rendered by the root layout, not here.
 */
export default function EverestThreePassesPage() {
  return (
    <div className="etp-page" data-etp-root>
      <Navbar />
      <Hero />
      <Breadcrumb />
      <SectionNav />
      <Overview />
      <ThreePasses />
      <Highlights />
      <Experiences />
      <Itinerary />
      <Peaks />
      <Culture />
      <Gokyo />
      <BestTime />
      <Preparation />
      <TravelInfo />
      <Accommodation />
      <Packages />
      <Gallery items={gallery} />
      <Faq />
      <FinalCta />
      <RevealController rootSelector="[data-etp-root]" />
      <Footer />
    </div>
  );
}
