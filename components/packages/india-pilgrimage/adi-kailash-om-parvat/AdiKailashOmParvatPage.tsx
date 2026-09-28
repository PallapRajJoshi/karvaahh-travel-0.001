// Base tokens & shared UI first, so section stylesheets layer on top.
import "./adi-kailash-om-parvat.css";
import { Fragment, type ReactNode } from "react";
import { sections, showScrollProgress, showSectionNav } from "@/data/india-pilgrimage/adi-kailash-om-parvat/page";
import { themeToCssVars } from "@/data/india-pilgrimage/adi-kailash-om-parvat/theme";
import type { SectionId } from "@/data/india-pilgrimage/adi-kailash-om-parvat/types";
import {
  breadcrumbJsonLd,
  faqJsonLd,
  toJsonLdString,
  touristTripJsonLd,
} from "@/lib/india-pilgrimage/adi-kailash-om-parvat/structured-data";
import { AdiKailashExperience } from "./sections/AdiKailashExperience";
import { BestTimeToVisit } from "./sections/BestTimeToVisit";
import { Breadcrumbs } from "./sections/Breadcrumbs";
import { CulturalExperiences } from "./sections/CulturalExperiences";
import { FAQSection } from "./sections/FAQSection";
import { FinalCTA } from "./sections/FinalCTA";
import { Hero } from "./sections/Hero";
import { JourneyRoute } from "./sections/JourneyRoute";
import { OmParvatDarshan } from "./sections/OmParvatDarshan";
import { Overview } from "./sections/Overview";
import { SacredDestinations } from "./sections/SacredDestinations";
import { TravelPreparation } from "./sections/TravelPreparation";
import { WhyKarvaahh } from "./sections/WhyKarvaahh";
import { YatraPackages } from "./sections/YatraPackages";
import { SectionNav } from "./ui/SectionNav";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

/**
 * Section registry. Order and visibility come from `sections` in
 * data/…/page.ts — this map only says which component renders each id.
 */
const registry: Record<SectionId, () => ReactNode> = {
  overview: () => <Overview />,
  "sacred-sites": () => <SacredDestinations />,
  "adi-kailash": () => <AdiKailashExperience />,
  "om-parvat": () => <OmParvatDarshan />,
  packages: () => <YatraPackages />,
  route: () => <JourneyRoute />,
  culture: () => <CulturalExperiences />,
  "why-karvaahh": () => <WhyKarvaahh />,
  "best-time": () => <BestTimeToVisit />,
  prepare: () => <TravelPreparation />,
  faq: () => <FAQSection />,
  "final-cta": () => <FinalCTA />,
};

export function AdiKailashOmParvatPage() {
  const enabled = sections.filter((s) => s.enabled);
  const navItems = enabled.filter((s) => s.navLabel).map((s) => ({ id: s.id, label: s.navLabel as string }));
  const faqEnabled = enabled.some((s) => s.id === "faq");

  const jsonLd = [breadcrumbJsonLd(), touristTripJsonLd(), faqEnabled ? faqJsonLd() : null].filter(Boolean);

  return (
    
    <div className="akop-page" style={themeToCssVars()}>
      {showScrollProgress ? <div className="akop-progress" aria-hidden="true" /> : null}
<Navbar />
      <Hero />
      <Breadcrumbs />
      {showSectionNav && navItems.length > 1 ? <SectionNav items={navItems} /> : null}

      {enabled.map((s) => (
        <Fragment key={s.id}>{registry[s.id]()}</Fragment>
      ))}

      {jsonLd.map((data, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: toJsonLdString(data) }} />
      ))}
      <Footer />
    </div>
  );
}
