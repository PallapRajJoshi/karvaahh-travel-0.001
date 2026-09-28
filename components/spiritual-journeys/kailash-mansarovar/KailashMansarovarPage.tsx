/* Foundation first: tokens and primitives must load before section styles so sections can refine them. */
import "./kailash-page.css";
import RevealObserver from "./shared/RevealObserver";
import Hero from "./sections/Hero/Hero";
import JourneySnapshot from "./sections/JourneySnapshot/JourneySnapshot";
import SectionNav from "./sections/SectionNav/SectionNav";
import Introduction from "./sections/Introduction/Introduction";
import Significance from "./sections/Significance/Significance";
import MountKailash from "./sections/MountKailash/MountKailash";
import LakeMansarovar from "./sections/LakeMansarovar/LakeMansarovar";
import KoraParikrama from "./sections/KoraParikrama/KoraParikrama";
import RouteOptions from "./sections/RouteOptions/RouteOptions";
import JourneyFlow from "./sections/JourneyFlow/JourneyFlow";
import Places from "./sections/Places/Places";
import Experiences from "./sections/Experiences/Experiences";
import Preparation from "./sections/Preparation/Preparation";
import Weather from "./sections/Weather/Weather";
import PracticalInfo from "./sections/PracticalInfo/PracticalInfo";
import Packing from "./sections/Packing/Packing";
import ResponsibleTravel from "./sections/ResponsibleTravel/ResponsibleTravel";
import Gallery from "./sections/Gallery/Gallery";
import Faq from "./sections/Faq/Faq";
import Enquiry from "./sections/Enquiry/Enquiry";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

/**
 * Assembly for /spiritual-journeys/kailash-mansarovar.
 * The user journey runs: inspire (hero) → orient (snapshot, overview) →
 * meaning (significance, sacred sites, Kora) → logistics (routes, journey,
 * places) → readiness (altitude, weather, practicalities, packing) →
 * reassurance (responsible travel, gallery, FAQ) → enquiry.
 * Navbar and Footer are rendered by the root layout, not here.
 */
export default function KailashMansarovarPage() {
  return (
    <div id="km-page" className="km-page">
      <Navbar/>
      <RevealObserver />
      <Hero />
      <JourneySnapshot />
      <SectionNav />
      <Introduction />
      <Significance />
      <MountKailash />
      <LakeMansarovar />
      <KoraParikrama />
      <RouteOptions />
      <JourneyFlow />
      <Places />
      <Experiences />
      <Preparation />
      <Weather />
      <PracticalInfo />
      <Packing />
      <ResponsibleTravel />
      <Gallery />
      <Faq />
      <Enquiry />
      <Footer />
    </div>
  );
}
