/* ============================================================
   NEPAL FESTIVAL & CULTURAL TOURS — DATA CONTRACT
   ------------------------------------------------------------
   Every festival, destination, experience and itinerary concept
   on /packages/nepal/festival-cultural-tours comes from the data
   files in this folder. Set `active: false` to hide an item
   without deleting it.
   ============================================================ */

import type { PageImage } from "@/components/activities/experience/types";

export type FestivalCategoryId = "hindu" | "buddhist" | "newar" | "tharu" | "himalayan" | "terai";

/** Warm colourway used for the designed artwork shown when no photo exists. */
export type ArtTone = "crimson" | "lamp" | "holi" | "royal" | "ochre" | "saffron" | "dusk" | "forest" | "monastery";

export type FestivalLink = { href: string; label: string };

export type Festival = {
  id: string;
  name: string;
  /** Short subtitle, e.g. "Festival of Lights". */
  tagline: string;
  categories: FestivalCategoryId[];
  /** Main place(s) the festival is associated with. */
  location: string;
  /** Broad seasonal window — never a fixed date. */
  season: string;
  /**
   * Typical month window (1 = January). `[11, 2]` wraps the year end.
   * Used only for the seasonal calendar; dates still move every year.
   */
  months: [start: number, end: number];
  description: string;
  significance: string;
  highlights: string[];
  /**
   * Photo of the festival itself, or of its setting. When the photo
   * shows the setting rather than the celebration, `pictured` names it
   * so the card never implies a festival photo it is not.
   */
  image: PageImage;
  pictured?: string;
  art: ArtTone;
  link: FestivalLink;
  /**
   * Confirmed dates per Gregorian year, e.g. { 2027: "8–12 October" }.
   * Add only from an official calendar; the page shows them when present.
   */
  confirmedDates?: Record<number, string>;
  active: boolean;
};

export type CulturalDestination = {
  id: string;
  name: string;
  region: string;
  text: string;
  tags: string[];
  image: PageImage;
  href: string;
  linkLabel: string;
  active: boolean;
};

export type CulturalExperience = {
  id: string;
  title: string;
  text: string;
  /** Where it is typically found — so no experience is implied everywhere. */
  where: string;
  image: PageImage;
  art: ArtTone;
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

/** Pilgrimage-collection package reused here, with culture-specific highlights. */
export type FeaturedPackageRef = { id: string; highlights: string[]; /** Booking-form tour type to prefill. */ tourType: string };
