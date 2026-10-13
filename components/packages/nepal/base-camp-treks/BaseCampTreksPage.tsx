import "./styles/base-camp-treks.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { buildJsonLd } from "./lib/seo";
import { PageRoot } from "./client/PageRoot";
import { Hero } from "./sections/Hero";
import { Treks } from "./sections/Treks";
import { Highlights } from "./sections/Highlights";
import { Comparison } from "./sections/Comparison";
import { Packages } from "./sections/Packages";
import { Guide } from "./sections/Guide";
import { Itineraries } from "./sections/Itineraries";
import { Faq, FinalCta } from "./sections/Faq";

/**
 * Assembly for /packages/nepal/base-camp-treks.
 * Server Component; only PageRoot (scroll reveals) and TrekExplorer (filters) hydrate.
 */
export function BaseCampTreksPage() {
  return (
    <PageRoot>
      <Navbar />
      <script
        type="application/ld+json"
        // Escape "<" so the JSON can never close the script tag early.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildJsonLd()).replace(/</g, "\\u003c") }}
      />
      <Hero />
      <Treks />
      <Highlights />
      <Comparison />
      <Packages />
      <Guide />
      <Itineraries />
      <Faq />
      <FinalCta />
      <Footer />
    </PageRoot>
  );
}
