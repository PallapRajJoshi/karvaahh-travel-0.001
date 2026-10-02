/**
 * Assembly component — composes every Rara Lake section in page order.
 * Mirrors the province-page pattern: one assembly component per
 * destination, imported by the route's page.tsx. Navbar/Footer are
 * rendered at the layout level and are NOT included here.
 */

import "./rara-lake-tokens.css";

import RaraLakeHero from "./RaraLakeHero";
import RaraLakeBreadcrumb from "./RaraLakeBreadcrumb";
import RaraLakeOverview from "./RaraLakeOverview";
import RaraLakeWhyVisit from "./RaraLakeWhyVisit";
import RaraLakeAttractions from "./RaraLakeAttractions";
import RaraLakeExperiences from "./RaraLakeExperiences";
import RaraLakeTrekking from "./RaraLakeTrekking";
import RaraLakeItineraries from "./RaraLakeItineraries";
import RaraLakeNature from "./RaraLakeNature";
import RaraLakeCulture from "./RaraLakeCulture";
import RaraLakeBestTime from "./RaraLakeBestTime";
import RaraLakeHowToReach from "./RaraLakeHowToReach";
import RaraLakeAccommodation from "./RaraLakeAccommodation";
import RaraLakeEssentials from "./RaraLakeEssentials";
import RaraLakePackages from "./RaraLakePackages";
import RaraLakeGallery from "./RaraLakeGallery";
import RaraLakeFAQ from "./RaraLakeFAQ";
import RaraLakeFinalCTA from "./RaraLakeFinalCTA";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function RaraLakeAssembly() {
  return (
    <div className="rara-page">
      <Navbar />
      <RaraLakeHero />
      <RaraLakeBreadcrumb />
      <RaraLakeOverview />
      <RaraLakeWhyVisit />
      <RaraLakeAttractions />
      <RaraLakeExperiences />
      <RaraLakeTrekking />
      <RaraLakeItineraries />
      <RaraLakeNature />
      <RaraLakeCulture />
      <RaraLakeBestTime />
      <RaraLakeHowToReach />
      <RaraLakeAccommodation />
      <RaraLakeEssentials />
      <RaraLakePackages />
      <RaraLakeGallery />
      <RaraLakeFAQ />
      <RaraLakeFinalCTA />
      <Footer />
    </div>
  );
}
