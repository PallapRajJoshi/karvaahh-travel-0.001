/* ============================================================
   NEPAL HISTORICAL & HERITAGE TOURS — DATA CONTRACT
   ------------------------------------------------------------
   Every destination, era, experience and itinerary concept on
   /packages/historical-heritage comes from the data files in this
   folder. Set `active: false` to hide an item without deleting it.
   ============================================================ */

import type { PageImage } from "@/components/activities/experience/types";

export type HeritageCategoryId = "unesco" | "temples" | "palaces" | "buddhist" | "hindu" | "medieval" | "archaeological";

/** Colourway for the designed artwork shown when no genuine photo exists. */
export type HeritageTone = "brick" | "stone" | "dusk" | "temple" | "gold";

export type HeritageDestination = {
  id: string;
  name: string;
  /** District / province line shown above the name. */
  region: string;
  /** 2–3 sentence historical highlight. */
  text: string;
  /** Short display tags, e.g. "Royal History". */
  tags: string[];
  /** Filter categories — assigned only where they genuinely apply. */
  categories: HeritageCategoryId[];
  /**
   * UNESCO status, worded precisely: a Monument Zone of the Kathmandu
   * Valley property, or a property in its own right. Omit otherwise.
   */
  unesco?: string;
  image: PageImage;
  tone: HeritageTone;
  /** Existing page only. */
  href: string;
  linkLabel: string;
  active: boolean;
};

export type HeritageEra = {
  id: string;
  title: string;
  period: string;
  text: string;
  /** Places where the theme can be seen. */
  seeAt: string[];
  image: PageImage;
  tone: HeritageTone;
};

export type HeritageExperience = {
  id: string;
  title: string;
  text: string;
  /** Where it is typically found — so nothing is implied everywhere. */
  where: string;
  image: PageImage;
  tone: HeritageTone;
};

export type ItineraryConcept = {
  id: string;
  title: string;
  theme: string;
  stops: { name: string; note: string }[];
  image: PageImage;
  /** Booking-form tour type to prefill. */
  tourType: string;
};

/** Pilgrimage-collection package reused here, with heritage-specific highlights. */
export type FeaturedPackageRef = { id: string; highlights: string[]; /** Booking-form tour type to prefill. */ tourType: string };
