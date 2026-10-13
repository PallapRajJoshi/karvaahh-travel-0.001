/* ============================================================
   NEPAL ADVENTURE & OFFBEAT TOURS — DATA CONTRACT
   ------------------------------------------------------------
   Everything on /packages/nepal/adventure-offbeat-tours comes from
   the files in this folder. Every `href` points to an existing
   route; set `active: false` to hide an item without deleting it.
   ============================================================ */

import type { IconName, PageImage } from "@/components/activities/experience/types";

/** Filter categories. Assign only what the destination's own page supports. */
export type ExperienceId = "offbeat" | "adventure" | "nature-lakes" | "camping" | "road-trips" | "culture" | "remote-treks";

export type Difficulty = "Easy" | "Moderate" | "Challenging" | "Strenuous";

export type OffbeatDestination = {
  id: string;
  name: string;
  /** Province / district line, e.g. "Mugu · Karnali Province". */
  location: string;
  /** 2–3 sentences on what makes it special. */
  description: string;
  experiences: ExperienceId[];
  image: PageImage;
  /** Approximate, and only where the destination page states it. */
  altitude?: string;
  /** Only where the destination page states a rating. */
  difficulty?: Difficulty;
  /** Honest access note, e.g. "Flight to Talcha or Karnali Highway overland". */
  access: string;
  /** Existing route only. */
  href: string;
  /** CTA label — names the page it actually opens. */
  linkLabel: string;
  featured?: boolean;
  active: boolean;
};

export type PackageThemeId = "offbeat" | "himalayan" | "lakes" | "camping" | "road" | "custom";

export type AdventurePackage = {
  id: string;
  title: string;
  theme: PackageThemeId;
  destinations: string[];
  highlights: string[];
  /** Only when confirmed on the package page; otherwise omitted. */
  duration?: string;
  difficulty?: Difficulty;
  /** Never invented. Shown verbatim (e.g. "From ₹45,000 / person") only when Karvaahh confirms it. */
  price?: string;
  image: PageImage;
  href: string;
  active: boolean;
};

export type ExperiencePanel = {
  id: string;
  title: string;
  text: string;
  icon: IconName;
  image?: PageImage;
  /** Filter to apply in the destination explorer, or an existing route. */
  filter?: ExperienceId;
  href?: string;
};

export type Collection = {
  id: string;
  title: string;
  text: string;
  image: PageImage;
  /** Destination ids — resolved to their existing pages. */
  destinations: string[];
};

export type GuideTopic = { id: string; icon: IconName; title: string; body: string[] };
