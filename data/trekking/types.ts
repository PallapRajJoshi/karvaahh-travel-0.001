import type { IconName, PageImage } from "@/components/activities/experience/types";

export type TrekCategory = "short" | "beginner" | "cultural" | "classic" | "high-altitude" | "remote";

/**
 * A trekking destination on the Nepal trekking hub.
 *
 * `duration`, `difficulty` and `maxAltitude` are only set when an existing
 * Karvaahh page or data file states them — never estimated here.
 */
export type Trek = {
  id: string;
  name: string;
  region: string;
  description: string;
  tags: string[];
  categories: TrekCategory[];
  duration?: string;
  difficulty?: string;
  maxAltitude?: string;
  image: PageImage;
  /** Existing route only: a dedicated trek page, or the province guide that covers it. */
  href: string;
  /** True when `href` is a page about this trek (not a province guide). */
  dedicated: boolean;
};

export type FeaturedPackage = {
  id: string;
  name: string;
  destination: string;
  summary: string;
  highlights: string[];
  duration?: string;
  difficulty?: string;
  maxAltitude?: string;
  image: PageImage;
  href: string;
  ctaLabel: string;
  badge?: string;
};

export type InfoBlock = { icon: IconName; title: string; text: string };
