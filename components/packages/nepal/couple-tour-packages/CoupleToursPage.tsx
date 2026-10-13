import "./couple-tours.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { PageRoot } from "./client/PageRoot";
import { buildJsonLd } from "./lib/seo";
import {
  Breadcrumbs,
  CoupleGetaways,
  FAQ,
  FinalCTA,
  Hero,
  PlanningGuide,
  RomanticEscapes,
  RomanticMoments,
  SuggestedItineraries,
} from "./sections";

/**
 * Assembly for /packages/nepal/couple-tour-packages.
 * Server Component; only PageRoot (scroll reveals) and the getaway filter hydrate.
 */
export function CoupleToursPage() {
  return (
    <>
      <Navbar />
      <PageRoot>
        <script
          type="application/ld+json"
          // Escape "<" so the JSON can never close the script tag early.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(buildJsonLd()).replace(/</g, "\\u003c") }}
        />
        <Hero />
        <Breadcrumbs />
        <RomanticEscapes />
        <CoupleGetaways />
        <RomanticMoments />
        <SuggestedItineraries />
        <PlanningGuide />
        <FAQ />
        <FinalCTA />
      </PageRoot>
      <Footer />
    </>
  );
}
