import LangtangHero from "./LangtangHero";
import LangtangBreadcrumb from "./LangtangBreadcrumb";
import LangtangOverview from "./LangtangOverview";
import LangtangHighlights from "./LangtangHighlights";
import LangtangExperiences from "./LangtangExperiences";
import LangtangItinerary from "./LangtangItinerary";
import LangtangCulture from "./LangtangCulture";
import LangtangNature from "./LangtangNature";
import LangtangBestTime from "./LangtangBestTime";
import LangtangPreparation from "./LangtangPreparation";
import LangtangTravelInfo from "./LangtangTravelInfo";
import LangtangAccommodation from "./LangtangAccommodation";
import LangtangPackages from "./LangtangPackages";
import LangtangGallery from "./LangtangGallery";
import LangtangFAQ from "./LangtangFAQ";
import LangtangCTA from "./LangtangCTA";
import LangtangReveal from "./LangtangReveal";
import LangtangJsonLd from "./LangtangJsonLd";
import "./langtang.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const ROOT_ID = "langtang-valley-trek";

/** Assembly only — Navbar & Footer come from the root layout. */
export default function LangtangPage() {
  return (
    <main className="lt-page" id={ROOT_ID}>
      <Navbar />
      <LangtangJsonLd />
      <LangtangHero />
      <LangtangBreadcrumb />
      <LangtangOverview />
      <LangtangHighlights />
      <LangtangExperiences />
      <LangtangItinerary />
      <LangtangCulture />
      <LangtangNature />
      <LangtangBestTime />
      <LangtangPreparation />
      <LangtangTravelInfo />
      <LangtangAccommodation />
      <LangtangPackages />
      <LangtangGallery />
      <LangtangFAQ />
      <LangtangCTA />
      <LangtangReveal rootId={ROOT_ID} />
      <Footer />
    </main>
  );
}
