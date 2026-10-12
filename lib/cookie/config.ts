import type {
  CookieCategoryDefinition,
  CookieCategoryId,
  CookieRegistryEntry,
} from "./types";

/** localStorage key holding the visitor's decision. */
export const CONSENT_STORAGE_KEY = "karvaahh_cookie_consent";

/**
 * Bump when categories or their meaning change materially.
 * Visitors with an older stored version will be asked again.
 */
export const CONSENT_VERSION = 1;

/** Fired on `window` whenever the visitor saves a choice (detail: CookieConsent). */
export const CONSENT_EVENT = "karvaahh:cookie-consent";

/** Display order requested in the brief: Essential, Analytics, Marketing, Preferences. */
export const COOKIE_CATEGORIES: CookieCategoryDefinition[] = [
  {
    id: "essential",
    label: "Essential",
    required: true,
    description:
      "Needed for the website to work and to remember your cookie choices. These are always on.",
  },
  {
    id: "analytics",
    label: "Analytics",
    required: false,
    description:
      "Help us understand how visitors use the website so we can improve it. Only loaded if you allow them.",
  },
  {
    id: "marketing",
    label: "Marketing",
    required: false,
    description:
      "Used to measure campaigns and show relevant travel offers. Only loaded if you allow them.",
  },
  {
    id: "preferences",
    label: "Preferences",
    required: false,
    description:
      "Remember optional settings such as your preferred display options, where offered.",
  },
];

export const CATEGORY_LABELS: Record<CookieCategoryId, string> = {
  essential: "Essential",
  analytics: "Analytics",
  marketing: "Marketing",
  preferences: "Preferences",
};

/**
 * REGISTRY OF WHAT THE SITE ACTUALLY USES.
 *
 * The Cookie Policy page and the preferences panel are generated from this
 * list. Rules:
 *   - Add an entry the moment you add an analytics, marketing or preference
 *     tool — and load that tool through <ConsentScript> so it only runs after
 *     consent.
 *   - Never list a vendor you do not actually use.
 *
 * Analytics and marketing are intentionally empty: no such integration was
 * identified in the brief. While they stay empty the policy states plainly
 * that none are in use.
 */
export const COOKIE_REGISTRY: CookieRegistryEntry[] = [
  {
    name: CONSENT_STORAGE_KEY,
    category: "essential",
    mechanism: "local-storage",
    provider: "Karvaahh",
    party: "first",
    purpose:
      "Remembers the cookie choices you make so we do not ask you again on every page.",
    duration: "Until you clear your browser data or the policy version changes",
  },
  {
    // VERIFY before publishing: remove this entry if no page on the live site
    // loads OpenStreetMap tiles (the Nepal journey / map-enabled pages do).
    name: "OpenStreetMap map tiles",
    category: "essential",
    mechanism: "third-party-request",
    provider: "OpenStreetMap Foundation",
    party: "third",
    purpose:
      "Displays interactive map images on map-enabled pages. Your browser requests tiles directly from OpenStreetMap's servers, which receive technical details such as your IP address.",
    duration: "Per request (no Karvaahh-controlled storage)",
  },
];

export function entriesFor(category: CookieCategoryId): CookieRegistryEntry[] {
  return COOKIE_REGISTRY.filter((entry) => entry.category === category);
}
