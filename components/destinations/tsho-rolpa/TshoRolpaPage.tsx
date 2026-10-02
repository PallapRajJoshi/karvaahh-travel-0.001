import  "./tsho-rolpa-tokens.css"
import Hero from "./sections/Hero";
import Breadcrumb from "./sections/Breadcrumb";
import Overview from "./sections/Overview";
import WhyVisit from "./sections/WhyVisit";
import TopAttractions from "./sections/TopAttractions";
import Experiences from "./sections/Experiences";
import Trekking from "./sections/Trekking";
import Itineraries from "./sections/Itineraries";
import GlacialLandscapes from "./sections/GlacialLandscapes";
import SherpaCulture from "./sections/SherpaCulture";
import BestTimeToVisit from "./sections/BestTimeToVisit";
import HowToReach from "./sections/HowToReach";
import Accommodation from "./sections/Accommodation";
import TravelEssentials from "./sections/TravelEssentials";
import Packages from "./sections/Packages";
import Gallery from "./sections/Gallery";
import FAQ from "./sections/FAQ";
import FinalCTA from "./sections/FinalCTA";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

/**
 * Assembly component for the Tsho Rolpa Lake destination page.
 * Mirrors the province-page architecture: one assembly component per
 * page, section components co-located with their CSS, layout renders
 * the shared Navbar/Footer (not duplicated here).
 */
export default function TshoRolpaPage() {
  return (
    <div className="tsho-rolpa-page">
      <Navbar />
      <Hero />
      <Breadcrumb />
      <Overview />
      <WhyVisit />
      <TopAttractions />
      <Experiences />
      <Trekking />
      <Itineraries />
      <GlacialLandscapes />
      <SherpaCulture />
      <BestTimeToVisit />
      <HowToReach />
      <Accommodation />
      <TravelEssentials />
      <Packages />
      <Gallery />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
}
