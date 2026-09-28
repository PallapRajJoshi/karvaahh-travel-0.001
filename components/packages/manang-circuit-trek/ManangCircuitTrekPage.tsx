/* Tokens + primitives first so section CSS layers on top. */
import Navbar from "@/components/layout/Navbar";
import "./manang-circuit-trek.css";
import AltitudeProfile from "./sections/AltitudeProfile";
import BestTime from "./sections/BestTime";
import DayHashOpener from "./sections/DayHashOpener";
import Faq from "./sections/Faq";
import FinalCta from "./sections/FinalCta";
import Hero from "./sections/Hero";
import Inclusions from "./sections/Inclusions";
import InPageNav from "./sections/InPageNav";
import Itinerary from "./sections/Itinerary";
import Overview from "./sections/Overview";
import PermitsSafety from "./sections/PermitsSafety";
import RelatedTrips from "./sections/RelatedTrips";
import RouteHighlights from "./sections/RouteHighlights";
import Footer from "@/components/layout/Footer";

/**
 * Manang Circuit Trek: assembly component.
 * Story order: inspire (hero) → understand (overview, altitude) → commit
 * (itinerary + plan card) → reassure (season, inclusions, permits, FAQ) → act.
 * Navbar/Footer come from the root layout.
 */
export default function ManangCircuitTrekPage() {
  return (
    <main className="mc-page">
      <Navbar />
      <Hero />
      <InPageNav />
      <Overview />
      <AltitudeProfile />
      <Itinerary />
      <RouteHighlights />
      <BestTime />
      <Inclusions />
      <PermitsSafety />
      <Faq />
      <RelatedTrips />
      <FinalCta />
      <DayHashOpener />
      <Footer/>
    </main>
  );
}
