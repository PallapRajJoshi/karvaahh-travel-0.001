/* ============================================================
   BEACH & CRUISE HOLIDAYS — DATA CONTRACT
   ------------------------------------------------------------
   Every destination, experience, package, season note, guide
   block and FAQ on /packages/beach-cruise comes from the data
   files in this folder. Packages are resolved from the existing
   Asia and Europe package data, so nothing is offered here that
   is not already a Karvaahh product. Set `active: false` to hide
   an item without deleting it.
   ============================================================ */

import type { IconName, PageImage } from "@/components/activities/experience/types";

export type EscapeId = "islands" | "beach" | "luxury" | "cruise" | "romantic" | "family" | "adventure";

export type SiteLink = { href: string; label: string };

export type CoastalDestination = {
  id: string;
  name: string;
  /** e.g. "Indian Ocean" or "Thailand". */
  region: string;
  /** 2–3 sentences. */
  text: string;
  /** Visible experience tags. */
  tags: string[];
  /** Filter membership — drives the category chips. */
  escapes: EscapeId[];
  /** Only when already established in the project's destination data. */
  bestTime?: string;
  image: PageImage;
  /** Existing destination or package page only. */
  link: SiteLink;
  /** Optional second existing page, e.g. the cruise experiences page. */
  secondary?: SiteLink;
  /** "packages" = an existing Karvaahh package covers it; "on-request" = planned with you. */
  status: "packages" | "on-request";
  /** Availability or seasonal caveat, shown verbatim. */
  note?: string;
  active: boolean;
};

export type OceanExperience = {
  id: string;
  title: string;
  text: string;
  /** Where it is typically found — no experience is implied everywhere. */
  where: string;
  image: PageImage;
  link?: SiteLink;
};

/** Points at a package in data/asia-packages.ts or data/europe/packages.ts. */
export type PackageRef = {
  source: "asia" | "europe";
  id: string;
  /** Planner + filter membership. */
  escapes: EscapeId[];
  /** Booking-form tour type to prefill. */
  tourType: string;
};

/** A resolved package card. */
export type BeachPackage = {
  id: string;
  title: string;
  destination: string;
  route: string[];
  summary: string;
  /** Verified duration as published in the source package data. */
  duration: string;
  /** Only a confirmed Karvaahh price; otherwise "Price on request". */
  price?: string;
  image: PageImage;
  href: string;
  escapes: EscapeId[];
  tourType: string;
};

export type PlannerChoice = {
  id: string;
  label: string;
  text: string;
  icon: IconName;
  /** Packages tagged with this escape are shown. */
  escape: EscapeId;
  /** Shown when no package matches, or alongside the matches. */
  extra?: SiteLink;
  /** Contact-form travel type for the custom enquiry fallback. */
  enquiryType: "international" | "honeymoon" | "family" | "customized";
};

export type SeasonNote = { id: string; region: string; text: string };

export type GuideBlock = { id: string; title: string; icon: IconName; intro: string; points: string[] };

export type Faq = { question: string; answer: string };
