// Base tokens/resets must load BEFORE section styles so section rules win ties.
import "./shared/tokens.css";
import "./ApiNampaNav.css";
import ApiNampaAccommodation from "./ApiNampaAccommodation";
import ApiNampaBestTime from "./ApiNampaBestTime";
import ApiNampaBreadcrumb from "./ApiNampaBreadcrumb";
import ApiNampaConservation from "./ApiNampaConservation";
import ApiNampaCTA from "./ApiNampaCTA";
import ApiNampaCulture from "./ApiNampaCulture";
import ApiNampaExperiences from "./ApiNampaExperiences";
import ApiNampaFAQ from "./ApiNampaFAQ";
import ApiNampaGallery from "./ApiNampaGallery";
import ApiNampaHero from "./ApiNampaHero";
import ApiNampaHighlights from "./ApiNampaHighlights";
import ApiNampaItinerary from "./ApiNampaItinerary";
import ApiNampaOverview from "./ApiNampaOverview";
import ApiNampaPackages from "./ApiNampaPackages";
import ApiNampaPeaks from "./ApiNampaPeaks";
import ApiNampaPreparation from "./ApiNampaPreparation";
import ApiNampaSubnav from "./ApiNampaSubnav";
import ApiNampaTravelInfo from "./ApiNampaTravelInfo";
import { buildApiNampaJsonLd } from "./data/seo";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

/**
 * Page assembly. Section order follows the trekker's decision journey:
 * inspire → understand the route → judge feasibility → plan → enquire.
 * Global Navbar/Footer come from the root layout and are not rendered here.
 */
export default function ApiNampaPage() {
  const jsonLd = JSON.stringify(buildApiNampaJsonLd()).replace(/</g, "\\u003c");

  return (
    <main className="an-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
      <Navbar />

      {/* Inspire */}
      <ApiNampaHero />
      <ApiNampaBreadcrumb />
      <ApiNampaSubnav />
      <ApiNampaOverview />
      <ApiNampaHighlights />
      <ApiNampaExperiences />

      {/* Understand the route */}
      <ApiNampaItinerary />
      <ApiNampaPeaks />
      <ApiNampaConservation />
      <ApiNampaCulture />

      {/* Judge feasibility */}
      <ApiNampaBestTime />
      <ApiNampaPreparation />
      <ApiNampaTravelInfo />
      <ApiNampaAccommodation />

      {/* Plan & enquire */}
      <ApiNampaPackages />
      <ApiNampaGallery />
      <ApiNampaFAQ />
      <ApiNampaCTA />
      <Footer />
    </main>
  );
}
