/* ============================================================
   CHAR DHAM YATRA — REGISTRY
   ------------------------------------------------------------
   /activities/char-dham-yatra            → CHAR_DHAM_MASTER
   /activities/char-dham-yatra/<slug>     → CHAR_DHAM_PAGES[slug]
   All pages render with the shared ExperiencePage template.
   Content: content.ts (shared blocks) and pages.ts (per page).
   Images:  images.ts (planned files in /public/images/char-dham).
   ============================================================ */

import type { HelicopterTour } from "@/components/activities/experience/product-types";
import { badrinath, byRoad, charDhamYatra, custom, doDham, family, gangotri, helicopter, kedarnath, seniorCitizens, yamunotri } from "./pages";

export const CHAR_DHAM_MASTER: HelicopterTour = charDhamYatra;

const SUB_PAGES = [yamunotri, gangotri, kedarnath, badrinath, helicopter, byRoad, seniorCitizens, family, custom, doDham];

export const CHAR_DHAM_PAGES: Record<string, HelicopterTour> = Object.fromEntries(SUB_PAGES.map((p) => [p.slug, p]));

/** Short URLs that permanently redirect to a Char Dham page. */
export const CHAR_DHAM_ALIASES: Record<string, string> = {
  "helicopter-5n-6d": "helicopter",
};

export const getCharDhamPage = (slug: string): HelicopterTour | undefined => CHAR_DHAM_PAGES[slug];
