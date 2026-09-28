/**
 * Everest Base Camp Trek — page assembly.
 * Sections are rendered from the registry in config/site.ts (`ebcSections`):
 * reorder or disable sections there, not here.
 * This is a Server Component; client JS is limited to small islands
 * (PageEnhancements, HeroParallax, SubNav, ExperienceShowcase, RouteExplorer,
 * GalleryGrid, Accordion, SmartImage).
 */
// Base layer first so component stylesheets (imported by sections) cascade over it.
import "./styles/ebc-base.css";
import type { ComponentType } from "react";
import type { SectionId } from "./types";
import { ebcSections } from "./config/site";
import { themeToCssVars } from "./config/theme";
import { buildJsonLd, jsonLdString } from "./lib/seo";
import PageEnhancements from "./ui/PageEnhancements";

import HeroSection from "./sections/HeroSection";
import Breadcrumb from "./sections/Breadcrumb";
import SubNav from "./sections/SubNav";
import DestinationOverview from "./sections/DestinationOverview";
import EverestDestinations from "./sections/EverestDestinations";
import TrekExperience from "./sections/TrekExperience";
import SherpaCulture from "./sections/SherpaCulture";
import TrekPackages from "./sections/TrekPackages";
import RouteTimeline from "./sections/RouteTimeline";
import BaseCampExperience from "./sections/BaseCampExperience";
import PhotographyGallery from "./sections/PhotographyGallery";
import WhyChooseKarvaahh from "./sections/WhyChooseKarvaahh";
import BestTimeToVisit from "./sections/BestTimeToVisit";
import TravelPreparation from "./sections/TravelPreparation";
import FAQSection from "./sections/FAQSection";
import FinalCTA from "./sections/FinalCTA";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";


const registry: Record<SectionId, ComponentType> = {
  hero: HeroSection,
  breadcrumb: Breadcrumb,
  subnav: SubNav,
  overview: DestinationOverview,
  destinations: EverestDestinations,
  experience: TrekExperience,
  culture: SherpaCulture,
  packages: TrekPackages,
  itinerary: RouteTimeline,
  basecamp: BaseCampExperience,
  gallery: PhotographyGallery,
  why: WhyChooseKarvaahh,
  seasons: BestTimeToVisit,
  preparation: TravelPreparation,
  faq: FAQSection,
  "final-cta": FinalCTA,
};

const ROOT_ID = "ebc-page";

export default function EverestBaseCampPage() {
  return (
    <div id={ROOT_ID} className="ebc-page" style={themeToCssVars()}>
      <Navbar />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdString(buildJsonLd()) }} />
      <PageEnhancements rootId={ROOT_ID} />
      {ebcSections
        .filter((s) => s.enabled)
        .map(({ id }) => {
          const Section = registry[id];
          return <Section key={id} />;

        })}
        <Footer />
    </div>
  );
}
