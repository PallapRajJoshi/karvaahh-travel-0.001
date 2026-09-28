// Base tokens & primitives first, so section stylesheets can override them.
import "./TsumValleyPage.css";
import TsumValleyHero from "./TsumValleyHero";
import TsumValleyBreadcrumb from "./TsumValleyBreadcrumb";
import TsumValleyJumpNav from "./TsumValleyJumpNav";
import TsumValleyOverview from "./TsumValleyOverview";
import TsumValleyHighlights from "./TsumValleyHighlights";
import TsumValleyExperiences from "./TsumValleyExperiences";
import TsumValleyItinerary from "./TsumValleyItinerary";
import TsumValleyNature from "./TsumValleyNature";
import TsumValleyVillages from "./TsumValleyVillages";
import TsumValleyBestTime from "./TsumValleyBestTime";
import TsumValleyPreparation from "./TsumValleyPreparation";
import TsumValleyTravelInfo from "./TsumValleyTravelInfo";
import TsumValleyAccommodation from "./TsumValleyAccommodation";
import TsumValleyPackages from "./TsumValleyPackages";
import TsumValleyGallery from "./TsumValleyGallery";
import TsumValleyFAQ from "./TsumValleyFAQ";
import TsumValleyRelated from "./TsumValleyRelated";
import TsumValleyCTA from "./TsumValleyCTA";
import TsumValleyJsonLd from "./TsumValleyJsonLd";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

/**
 * Tsum Valley Trek — page assembly.
 * The global Navbar and Footer come from the root layout; this component
 * renders only the page body, scoped under `.tsum-page`.
 *
 * Story arc: inspire (hero → highlights) → understand (culture, route,
 * villages) → plan (seasons, prep, permits, stays) → act (packages → CTA).
 */
export default function TsumValleyPage() {
  return (
    <main className="tsum-page" id="main-content">
      <Navbar />
      <TsumValleyJsonLd />
      <TsumValleyHero />
      <TsumValleyBreadcrumb />
      <TsumValleyJumpNav />
      <TsumValleyOverview />
      <TsumValleyHighlights />
      <TsumValleyExperiences />
      <TsumValleyItinerary />
      <TsumValleyNature />
      <TsumValleyVillages />
      <TsumValleyBestTime />
      <TsumValleyPreparation />
      <TsumValleyTravelInfo />
      <TsumValleyAccommodation />
      <TsumValleyPackages />
      <TsumValleyGallery />
      <TsumValleyFAQ />
      <TsumValleyRelated />
      <TsumValleyCTA />
      <Footer />
    </main>
  );
}
