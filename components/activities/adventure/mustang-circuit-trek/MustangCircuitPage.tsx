import { Fragment, type CSSProperties, type ReactNode } from "react";
import { anchors, navAnchors, sections, themeVars } from "./data/config";
import type { SectionId } from "./data/types";
import { buildJsonLd, jsonLdString } from "./seo";

// Base tokens first so section stylesheets layer on top.
import "./mustang-base.css";

import RevealRoot from "./shared/RevealRoot";
import ScrollProgress from "./shared/ScrollProgress";
import Hero from "./sections/Hero";
import Breadcrumb from "./sections/Breadcrumb";
import SectionNav from "./sections/SectionNav";
import Overview from "./sections/Overview";
import Destinations from "./sections/Destinations";
import Experience from "./sections/Experience";
import Culture from "./sections/Culture";
import Packages from "./sections/Packages";
import Route from "./sections/Route";
import Gallery from "./sections/Gallery";
import WhyKarvaahh from "./sections/WhyKarvaahh";
import Seasons from "./sections/Seasons";
import Preparation from "./sections/Preparation";
import Faq from "./sections/Faq";
import Related from "./sections/Related";
import FinalCta from "./sections/FinalCta";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";


const ROOT_ID = "mustang-circuit";

/** Anchor-bearing sections → the anchor they render. Used to keep the sticky nav honest. */
const sectionAnchor: Partial<Record<SectionId, string>> = {
  overview: anchors.overview.id,
  destinations: anchors.destinations.id,
  experience: anchors.experience.id,
  culture: anchors.culture.id,
  packages: anchors.packages.id,
  route: anchors.route.id,
  gallery: anchors.gallery.id,
  why: anchors.why.id,
  seasons: anchors.seasons.id,
  preparation: anchors.preparation.id,
  faq: anchors.faq.id,
};

/**
 * Page assembly. Order and visibility come from `sections` in data/config.ts —
 * reorder or remove ids there; no component changes needed.
 * Navbar and Footer come from the site layout and are intentionally not rendered here.
 */
export default function MustangCircuitPage() {
  const rendered = new Set(sections.map((id) => sectionAnchor[id]).filter(Boolean));
  const navItems = navAnchors.filter((a) => rendered.has(a.id)).map((a) => ({ id: a.id, label: a.label }));

  const registry: Record<SectionId, () => ReactNode> = {
   
    hero: () => <Hero />,
    breadcrumb: () => <Breadcrumb />,
    sectionNav: () => <SectionNav items={navItems} />,
    overview: () => <Overview />,
    destinations: () => <Destinations />,
    experience: () => <Experience />,
    culture: () => <Culture />,
    packages: () => <Packages />,
    route: () => <Route />,
    gallery: () => <Gallery />,
    why: () => <WhyKarvaahh />,
    seasons: () => <Seasons />,
    preparation: () => <Preparation />,
    faq: () => <Faq />,
    related: () => <Related />,
    finalCta: () => <FinalCta />,
  };

  return (
    <div id={ROOT_ID} className="mustang-page" style={themeVars as CSSProperties}>
       <Navbar />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdString(buildJsonLd()) }} />
      <ScrollProgress />
      {sections.map((id) => (
        <Fragment key={id}>{registry[id]()}</Fragment>
      ))}
      <RevealRoot rootId={ROOT_ID} />

      <Footer />
    </div>
  );
}
