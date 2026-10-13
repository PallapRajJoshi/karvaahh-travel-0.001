/* ============================================================
   UTTARAKHAND TOUR PACKAGES — DATA CONTRACT
   ------------------------------------------------------------
   Every destination, package, itinerary, season, guide block and
   FAQ on /packages/uttarakhand comes from the data files in this
   folder. Set `active: false` to hide a destination without
   deleting it.
   ============================================================ */

import type { IconName, PageImage } from "@/components/activities/experience/types";

export type SiteLink = { href: string; label: string };

/** Filter chips — membership lives on each destination. */
export type FilterId = "spiritual" | "hill" | "adventure" | "nature" | "lakes" | "family";

/** Card treatment: saffron for pilgrimage, Himalayan blue for hills, forest green for nature. */
export type DestinationGroup = "char-dham" | "spiritual" | "hill" | "wildlife";

export type Destination = {
  id: string;
  name: string;
  /** e.g. "Rudraprayag · Garhwal". */
  location: string;
  group: DestinationGroup;
  /** 2–3 sentences; beliefs presented as tradition. */
  text: string;
  tags: string[];
  filters: FilterId[];
  image: PageImage;
  /** Short verified fact: altitude from project data, access type or difficulty. */
  fact?: string;
  /** Seasonal or access note, shown verbatim. */
  note?: string;
  /**
   * Existing Karvaahh page. When absent the card offers an enquiry
   * instead — no destination page is implied.
   */
  link?: SiteLink;
  /** Booking-form tour type to prefill when there is no page. */
  tourType: string;
  active: boolean;
};

export type DhamStop = {
  name: string;
  deity: string;
  elevation: string;
  text: string;
  image: PageImage;
  href: string;
};

/** A package card built only from facts already published on its own page. */
export type UttarakhandPackage = {
  id: string;
  title: string;
  /** "Char Dham", "Spiritual", "Kumaon pilgrimage"… */
  kind: string;
  destinations: string[];
  duration: string;
  highlights: string[];
  /** Inclusions exactly as published on the package page. */
  inclusions: string[];
  /** Only a confirmed Karvaahh price; otherwise "Price on request". */
  price?: string;
  image: PageImage;
  href: string;
  tourType: string;
};

export type Escape = {
  id: string;
  eyebrow: string;
  title: string;
  text: string;
  points: string[];
  where: string;
  image: PageImage;
  link?: SiteLink;
  tourType: string;
};

export type ItineraryPreview = {
  id: string;
  title: string;
  /** "sample" = published Karvaahh sample itinerary; "idea" = illustrative outline, needs confirmation. */
  status: "sample" | "idea";
  duration: string;
  summary: string;
  /** "Day" for published samples; "Stage" for ideas, so no schedule is implied. */
  unit: "Day" | "Stage";
  steps: { title: string; text: string }[];
  notice: string;
  link?: SiteLink;
  tourType: string;
};

export type Season = {
  id: string;
  name: string;
  months: string;
  icon: IconName;
  text: string;
  goodFor: string[];
  caution?: string;
};

export type GuideBlock = { id: string; title: string; icon: IconName; points: string[] };

export type Faq = { question: string; answer: string };
