/**
 * Package data model for the /packages discovery hub.
 *
 * Packages and destinations are separate concepts: a package references
 * destinations by name/slug, it never owns a destination page.
 */

export type Country = "Nepal" | "India" | "International";

export type PackageCategory =
  | "spiritual"
  | "adventure"
  | "family"
  | "honeymoon"
  | "wildlife"
  | "luxury"
  | "corporate"
  | "educational"
  | "wedding"
  | "wellness"
  | "trekking"
  | "beach"
  | "road-trip"
  | "helicopter"
  | "offbeat";

export type TravelStyle = "private" | "group" | "family" | "couple" | "solo" | "corporate";

export type MealPlan = "breakfast" | "breakfast-dinner" | "map" | "cp" | "full-board";

export type Transport = "private-car" | "suv" | "4x4" | "tourist-bus" | "flight" | "helicopter";

export type Season =
  | "summer"
  | "monsoon"
  | "autumn"
  | "winter"
  | "spring"
  | "dashain"
  | "tihar-diwali"
  | "holi"
  | "new-year"
  | "buddha-jayanti"
  | "shivaratri";

export type Badge =
  | "best-seller"
  | "popular"
  | "spiritual"
  | "signature"
  | "new"
  | "seasonal"
  | "family"
  | "honeymoon"
  | "adventure"
  | "offbeat";

export type PriceBasis = "per-person" | "per-couple" | "per-journey";

export interface PackagePrice {
  amount: number;
  currency: "INR" | "NPR" | "USD";
  basis: PriceBasis;
  /** ISO date the price was last confirmed. Shown as "as of" when present. */
  verifiedOn?: string;
}

/**
 * `live`  – a real package with a real detail page. Always shown.
 * `draft` – placeholder / work-in-progress record. Hidden in production
 *           unless NEXT_PUBLIC_SHOW_DRAFT_PACKAGES="true".
 */
export type PackageStatus = "live" | "draft";

export interface TravelPackage {
  id: string;
  slug: string;
  name: string;
  status: PackageStatus;
  country: Country;
  region?: string;
  /** Destination names (or slugs) this package visits. A destination can belong to many packages. */
  destinations: string[];
  /** Ordered route, used for the journey snapshot / route line. */
  route?: string[];
  duration?: { nights: number; days: number };
  categories: PackageCategory[];
  tags?: string[];
  badge?: Badge;
  /** Public path or URL. Omit until real photography exists; the card renders a designed fallback. */
  image?: string;
  imageAlt?: string;
  shortDescription: string;
  highlights?: string[];
  inclusions?: string[];
  exclusions?: string[];
  arrivalPoints?: string[];
  accommodation?: string;
  mealPlan?: MealPlan;
  transport?: Transport[];
  permits?: string[];
  travelStyle?: TravelStyle[];
  bestFor?: string[];
  seasons?: Season[];
  /** Omit when the price varies or has not been confirmed. The UI shows "Request price". */
  price?: PackagePrice;
  featured?: boolean;
  popular?: boolean;
  /** ISO date, used for "Newest" sorting. */
  addedAt: string;
  /** The EXISTING detail route. Must not create a new route. Omit for drafts without a page. */
  href?: string;
}
