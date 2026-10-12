export type CookieCategoryId =
  | "essential"
  | "analytics"
  | "marketing"
  | "preferences";

export type ConsentChoices = Record<CookieCategoryId, boolean>;

export interface CookieConsent {
  /** Bumped in config when categories change materially; stale consent is re-requested. */
  version: number;
  /** ISO timestamp of the decision. */
  decidedAt: string;
  categories: ConsentChoices;
}

/**
 * - "unknown":   server render / before hydration — render nothing consent-dependent.
 * - "undecided": visitor has not made a choice yet — show the banner.
 * - "decided":   a valid, current choice is stored.
 */
export type ConsentState =
  | { status: "unknown" }
  | { status: "undecided" }
  | { status: "decided"; consent: CookieConsent };

export interface CookieCategoryDefinition {
  id: CookieCategoryId;
  label: string;
  description: string;
  /** Required categories are always on and cannot be switched off. */
  required: boolean;
}

export type CookieMechanism = "cookie" | "local-storage" | "third-party-request";

/**
 * One item that Karvaahh's website actually sets or loads.
 * Only add an entry when the thing is genuinely in use — the Cookie Policy
 * table is generated from this list, so it never documents invented vendors.
 */
export interface CookieRegistryEntry {
  /** Cookie / storage key, or the service name for third-party requests. */
  name: string;
  category: CookieCategoryId;
  mechanism: CookieMechanism;
  /** "Karvaahh" for first-party items, otherwise the provider's name. */
  provider: string;
  party: "first" | "third";
  purpose: string;
  /** Human-readable lifetime, e.g. "Session" or "12 months". */
  duration: string;
}
