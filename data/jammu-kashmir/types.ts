/* ============================================================
   JAMMU & KASHMIR TOUR PACKAGES — DATA CONTRACT
   ------------------------------------------------------------
   Every destination, package, travel style, itinerary, season,
   guide block and FAQ on /packages/jammu-kashmir comes from the
   data files in this folder. Set `active: false` to hide a
   destination without deleting it.
   ============================================================ */

import type { IconName, PageImage } from "@/components/activities/experience/types";

export type SiteLink = { href: string; label: string };

/** Filter chips — membership lives on each destination. */
export type FilterId = "kashmir" | "jammu" | "lakes" | "snow" | "pilgrimage" | "family";

/** Card treatment: lake blue for the Kashmir Valley, saffron for the Jammu region. */
export type Region = "kashmir" | "jammu";

export type Destination = {
  id: string;
  name: string;
  /** e.g. "Kashmir Valley · Pir Panjal range". */
  location: string;
  region: Region;
  /** 2–3 sentences; beliefs presented as tradition. */
  text: string;
  tags: string[];
  filters: FilterId[];
  image: PageImage;
  /** Seasonal or access note, shown verbatim. */
  note?: string;
  /** Existing Karvaahh page. When absent the card offers an enquiry instead. */
  link?: SiteLink;
  /** Booking-form tour type to prefill. */
  tourType: string;
  active: boolean;
};

/** A package card built only from facts already published on its own page. */
export type JkPackage = {
  id: string;
  title: string;
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

/** A travel style Karvaahh plans on request — no fixed duration, price or inclusions. */
export type TravelStyle = {
  id: string;
  title: string;
  icon: IconName;
  text: string;
  /** Places such a trip commonly covers; confirmed when planned. */
  covers: string[];
  points: string[];
  image: PageImage;
  link?: SiteLink;
  tourType: string;
};

export type Experience = {
  id: string;
  eyebrow: string;
  title: string;
  text: string;
  points: string[];
  where: string;
  image: PageImage;
};

export type ItineraryDay = { title: string; text: string };

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

export type Assurance = { icon: IconName; title: string; text: string };

export type Faq = { question: string; answer: string };
