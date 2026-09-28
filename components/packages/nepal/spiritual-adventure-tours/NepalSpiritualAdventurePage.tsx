import type { ComponentType } from "react";
import "./styles/page.css";

import { anchorFor, sections } from "./config/page.config";
import { themeToCssVars } from "./config/theme";
import type { SectionId } from "./types";
import { buildJsonLd } from "./lib/seo";

import { PageRoot } from "./client/PageRoot";
import { ScrollProgressBar } from "./client/ScrollProgressBar";
import { SectionNav } from "./client/SectionNav";

import { HeroSection } from "./sections/HeroSection";
import { Breadcrumbs } from "./sections/Breadcrumbs";
import { DestinationOverview } from "./sections/DestinationOverview";
import { SpiritualDestinations } from "./sections/SpiritualDestinations";
import { AdventureExperiences } from "./sections/AdventureExperiences";
import { CulturalExperiences } from "./sections/CulturalExperiences";
import { FeaturedPackages } from "./sections/FeaturedPackages";
import { WhyChooseNepal } from "./sections/WhyChooseNepal";
import { BestTimeToVisit } from "./sections/BestTimeToVisit";
import { TravelInformation } from "./sections/TravelInformation";
import { FAQSection } from "./sections/FAQSection";
import { FinalCTA } from "./sections/FinalCTA";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

/**
 * Section registry: maps config ids to components. To add a section, build
 * the component, register it here, and list it in config/page.config.ts.
 */
const registry: Record<SectionId, ComponentType<{ anchor: string }>> = {
  overview: DestinationOverview,
  sacred: SpiritualDestinations,
  adventures: AdventureExperiences,
  culture: CulturalExperiences,
  packages: FeaturedPackages,
  why: WhyChooseNepal,
  seasons: BestTimeToVisit,
  plan: TravelInformation,
  faq: FAQSection,
  cta: FinalCTA,
};

/**
 * Assembly for /packages/nepal/spiritual-adventure-tours.
 * Server Component. Only the small shells in /client hydrate.
 * The site's global Navbar and Footer come from the root layout.
 */
export function NepalSpiritualAdventurePage() {
  const enabled = sections.filter((s) => s.enabled);
  const navItems = enabled
    .filter((s) => s.navLabel)
    .map((s) => ({ anchor: anchorFor[s.id], label: s.navLabel as string }));

  const jsonLd = buildJsonLd();

  return (
    <PageRoot style={themeToCssVars()}>
      <Navbar/>
      <script
        type="application/ld+json"
        // Escape "<" so the JSON can never close the script tag early.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <noscript>
        <style>{`.nsa-page .nsa-accordion__panel{grid-template-rows:1fr;visibility:visible}`}</style>
      </noscript>

      <ScrollProgressBar />
      <HeroSection />
      <Breadcrumbs />
      {navItems.length > 1 ? <SectionNav items={navItems} /> : null}

      {enabled.map(({ id }) => {
        const Section = registry[id];
        return <Section key={id} anchor={anchorFor[id]} />;
      })}
      <Footer />
    </PageRoot>
  );
}
