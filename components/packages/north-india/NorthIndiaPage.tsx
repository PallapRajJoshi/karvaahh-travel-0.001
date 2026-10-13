import "./north-india.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { PageRoot } from "./client/PageRoot";
import { buildJsonLd } from "./lib/seo";
import {
  Breadcrumbs,
  Destinations,
  Experiences,
  FAQ,
  FeaturedPackages,
  FinalCTA,
  Hero,
  Itineraries,
  PlanningGuide,
  SacredCircuits,
} from "./sections";

/**
 * Assembly for /packages/north-india.
 * Server Component; only PageRoot (scroll reveals) and the destination filter hydrate.
 */
export function NorthIndiaPage() {
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
        <Destinations />
        <Experiences />
        <FeaturedPackages />
        <SacredCircuits />
        <PlanningGuide />
        <Itineraries />
        <FAQ />
        <FinalCTA />
      </PageRoot>
      <Footer />
    </>
  );
}
