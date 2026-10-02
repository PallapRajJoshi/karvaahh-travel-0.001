/**
 * Karvaahh /destinations hub — shared types.
 *
 * One canonical record per destination. A destination that belongs to several
 * categories (Muktinath = Nepal + Spiritual + Himalayan + Mustang) is ONE object
 * with several `experiences` / `regions`, never several objects.
 */

export type CountryId = "nepal" | "india" | "international";

export type RegionId =
  | "himalayas"
  | "south-asia"
  | "southeast-asia"
  | "middle-east"
  | "europe"
  | "africa"
  | "americas"
  | "oceania";

export type ExperienceId =
  | "spiritual"
  | "adventure"
  | "trekking"
  | "wildlife"
  | "nature"
  | "culture"
  | "heritage"
  | "family"
  | "honeymoon"
  | "corporate"
  | "educational"
  | "wedding"
  | "beach"
  | "luxury"
  | "offbeat"
  | "road-trip"
  | "helicopter"
  | "wellness"
  | "photography"
  | "festival";

export type DestinationType =
  | "city"
  | "region"
  | "country"
  | "trek"
  | "temple"
  | "park"
  | "lake"
  | "beach"
  | "valley"
  | "peak"
  | "village"
  | "island"
  | "route";

export type ProvinceId =
  | "koshi"
  | "madhesh"
  | "bagmati"
  | "gandaki"
  | "lumbini"
  | "karnali"
  | "sudurpashchim";

/** Visual theme used by the placeholder artwork when no photo exists yet. */
export type ArtTheme =
  | "himalaya"
  | "spiritual"
  | "wildlife"
  | "beach"
  | "city"
  | "desert"
  | "lake";

export interface CuratedCopy {
  /** One or two sentences for cards. Editorial, not templated. */
  short: string;
}

export interface Destination {
  slug: string;
  name: string;
  country: CountryId;
  /** Province (Nepal), state/UT (India) or free-form area label. */
  area?: string;
  /** Containing country/region/place, e.g. "France" for Paris. */
  parent?: string;
  province?: ProvinceId;
  /** First entry is the primary region. */
  regions: RegionId[];
  type: DestinationType;
  experiences: ExperienceId[];
  aliases: string[];
  featured: boolean;
  popular: boolean;
  offbeat: boolean;
  /** ISO date or year-month the page was added; drives "Recently added". */
  added?: string;
  /** Hand-written card copy. Destinations without it show no description. */
  copy?: CuratedCopy;
  /** Placement/spelling that an editor should double-check. */
  needsReview?: boolean;
}

export interface ExperienceMeta {
  id: ExperienceId;
  label: string;
  /** Short label used inside filter tiles. */
  short: string;
  blurb: string;
}

export interface RegionMeta {
  id: RegionId;
  label: string;
  blurb: string;
}

export interface CountryMeta {
  id: CountryId;
  label: string;
  flag: string;
  tagline: string;
}

export interface ProvinceMeta {
  id: ProvinceId;
  name: string;
  /** Exact URL segment of the existing province page. */
  routeSlug: string;
  blurb: string;
  highlights: string[];
  cta: string;
}

export type SortId = "featured" | "popular" | "az" | "new";

/** What the client needs once routes and images have been resolved on the server. */
export interface ResolveContext {
  /** slug → existing internal URL. Absent slug = no dedicated page yet. */
  routes: Record<string, string>;
  /** slug → public image path. Absent slug = use placeholder artwork. */
  images: Record<string, string>;
}
