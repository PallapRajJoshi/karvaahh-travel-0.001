import "./northeast-india.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { PageRoot } from "./client/PageRoot";
import { buildJsonLd } from "./lib/seo";
import {
  Breadcrumbs,
  Culture,
  Experiences,
  FAQ,
  FinalCTA,
  Hero,
  Itineraries,
  Journeys,
  Places,
  PlanningGuide,
  Seasons,
  States,
} from "./sections";

/**
 * Assembly for /packages/northeast-india.
 * Server Component; only PageRoot (scroll reveals) and the destination filter hydrate.
 */
export function NortheastIndiaPage() {
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
        <States />
        <Places />
        <Experiences />
        <Journeys />
        <Culture />
        <Seasons />
        <PlanningGuide />
        <Itineraries />
        <FAQ />
        <FinalCTA />
      </PageRoot>
      <Footer />
    </>
  );
}
