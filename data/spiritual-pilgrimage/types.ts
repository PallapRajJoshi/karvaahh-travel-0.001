/* ============================================================
   SPIRITUAL & PILGRIMAGE TOURS (NEPAL + INDIA) — DATA CONTRACT
   ------------------------------------------------------------
   Every sacred place, circuit, package, guide block, itinerary
   and FAQ on /packages/spiritual-pilgrimage comes from the data
   files in this folder. Set `active: false` to hide an item
   without deleting it.
   ============================================================ */

import type { IconName, PageImage } from "@/components/activities/experience/types";

export type Country = "Nepal" | "India";

export type SacredCategoryId = "hindu" | "buddhist" | "himalayan" | "temple-circuit" | "meditation" | "nepal" | "india";

export type SiteLink = { href: string; label: string };

export type SacredPlace = {
  id: string;
  name: string;
  /** e.g. "Kathmandu, Nepal". */
  location: string;
  country: Country;
  /** 2–3 sentences; beliefs presented as tradition. */
  text: string;
  /** One line on religious or cultural significance. */
  significance: string;
  /** Visible experience tags, e.g. "Hindu Pilgrimage". */
  tags: string[];
  /** Filter membership — drives the category chips. */
  categories: SacredCategoryId[];
  image: PageImage;
  /** Existing destination page or package page only. */
  link: SiteLink;
  /** Access restriction or seasonal note, shown verbatim. */
  note?: string;
  active: boolean;
};

export type Circuit = {
  id: string;
  title: string;
  text: string;
  stops: string[];
  image: PageImage;
  link: SiteLink;
  /** "packages" = existing Karvaahh products; "on-request" = planned with you. */
  status: "packages" | "on-request";
};

/**
 * A package card. Nepal cards are resolved from data/pilgrimage packages;
 * India cards mirror the facts already published on their own pages.
 */
export type FeaturedPackage = {
  id: string;
  country: Country;
  title: string;
  destinations: string[];
  highlights: string[];
  duration: string;
  transport: string;
  accommodation?: string;
  meals?: string;
  /** Only a confirmed Karvaahh price; otherwise "Price on request". */
  price?: string;
  image: PageImage;
  href: string;
  /** Booking-form tour type to prefill. */
  tourType: string;
};

/** Nepal package reused from data/pilgrimage, with page-specific highlights. */
export type NepalPackageRef = { id: string; highlights: string[]; tourType: string };

export type Experience = {
  id: string;
  title: string;
  text: string;
  /** Where it is typically found — no experience is implied everywhere. */
  where: string;
  image: PageImage;
};

export type GuideBlock = { id: string; title: string; icon: IconName; intro: string; points: string[] };

export type ItineraryPreview = {
  id: string;
  title: string;
  /** "sample" = published Karvaahh sample itinerary; "suggested" = illustrative, needs confirmation. */
  status: "sample" | "suggested";
  duration: string;
  summary: string;
  steps: { title: string; text: string }[];
  notice: string;
  link: SiteLink;
};

export type Faq = { question: string; answer: string };
