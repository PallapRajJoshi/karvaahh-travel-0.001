/**
 * Kailash Mansarovar Yatra — page assembly.
 *
 * Sections render in the order defined in `config.sections`. To reorder,
 * hide or relabel a section, edit config.ts — not this file.
 * Server Component: only the small interactive islands are client code.
 */
// Foundation CSS first, so section CSS always cascades after it.
import "./kailash-page.css";

import type { ComponentType } from "react";
import { motion, sections, themeStyle } from "./config";
import type { SectionId } from "./types";

import Hero from "./sections/hero/Hero";
import Breadcrumb from "./sections/navigation/Breadcrumb";
import SectionNav from "./sections/navigation/SectionNav";
import ScrollProgress from "./sections/navigation/ScrollProgress";
import Overview from "./sections/overview/Overview";
import SacredSites from "./sections/sacred-sites/SacredSites";
import Parikrama from "./sections/parikrama/Parikrama";
import Mansarovar from "./sections/mansarovar/Mansarovar";
import Packages from "./sections/packages/Packages";
import Routes from "./sections/routes/Routes";
import Significance from "./sections/significance/Significance";
import WhyKarvaahh from "./sections/why-karvaahh/WhyKarvaahh";
import Seasons from "./sections/seasons/Seasons";
import Preparation from "./sections/preparation/Preparation";
import Faq from "./sections/faq/Faq";
import FinalCta from "./sections/final-cta/FinalCta";
import Related from "./sections/related/Related";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const navItems = sections
  .filter((s) => s.enabled && s.navLabel)
  .map((s) => ({ id: s.id, label: s.navLabel! }));

const registry: Record<SectionId, ComponentType> = {
  hero: Hero,
  breadcrumb: Breadcrumb,
  "section-nav": () => <SectionNav items={navItems} />,
  overview: Overview,
  "sacred-sites": SacredSites,
  parikrama: Parikrama,
  mansarovar: Mansarovar,
  packages: Packages,
  routes: Routes,
  significance: Significance,
  "why-karvaahh": WhyKarvaahh,
  seasons: Seasons,
  preparation: Preparation,
  faq: Faq,
  "final-cta": FinalCta,
  related: Related,
};

export default function KailashMansarovarPage() {
  return (
    <div className="km-page" style={themeStyle}>
      <Navbar />
      {motion.scrollProgress ? <ScrollProgress /> : null}
      {sections
        .filter((s) => s.enabled)
        .map(({ id }) => {
          const Section = registry[id];
          return <Section key={id} />;
        })}
        <Footer />
    </div>
  );
}
