import "./tokens.css";
import Hero from "./sections/Hero";
import Breadcrumb from "./sections/Breadcrumb";
import Overview from "./sections/Overview";
import WhyVisit from "./sections/WhyVisit";
import Attractions from "./sections/Attractions";
import Experiences from "./sections/Experiences";
import Trekking from "./sections/Trekking";
import Itineraries from "./sections/Itineraries";
import Wildlife from "./sections/Wildlife";
import Culture from "./sections/Culture";
import BestTime from "./sections/BestTime";
import HowToReach from "./sections/HowToReach";
import Accommodation from "./sections/Accommodation";
import TravelEssentials from "./sections/TravelEssentials";
import Packages from "./sections/Packages";
import Gallery from "./sections/Gallery";
import FAQ from "./sections/FAQ";
import FinalCTA from "./sections/FinalCTA";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

// Assembly component for /offbeat-unexplored/shey-phoksundo.
// Global Navbar/Footer are rendered at layout level and are not touched here.
export default function ShehyPhoksundoPage() {
  return (
    <div className="phoksundo-page">
      <Navbar />
      <Hero />
      <Breadcrumb />
      <Overview />
      <WhyVisit />
      <Attractions />
      <Experiences />
      <Trekking />
      <Itineraries />
      <Wildlife />
      <Culture />
      <BestTime />
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
