/**
 * Page configuration — the only file that needs editing before launch.
 */

export const PAGE_PATH = "/experience/destination-weddings";

/**
 * Flip to `true` once the photographs listed in README › Image manifest
 * are placed in /public/images/experience/destination-weddings/.
 * Until then every image renders as a labelled, art-directed placeholder
 * so the page never shows a broken image.
 */
export const WEDDING_IMAGES_READY = false;

export const IMAGE_BASE = "/images/experience/destination-weddings";

/**
 * Where the proposal form sends the couple.
 * - If `email` is set, the form opens a pre-written email to that address.
 * - Otherwise it routes to `contactHref` with the brief as query parameters.
 * Confirm the single official enquiry address before launch (see site audit:
 * conflicting contact details).
 */
export const ENQUIRY = {
  email: "" as string,
  contactHref: "/contact",
};

/** Section anchors — used by CTAs, the chapter rail and the sticky mobile CTA. */
export const ANCHORS = {
  plan: "plan",
  destinations: "destinations",
  styles: "wedding-styles",
  journey: "wedding-journey",
  guests: "guest-experience",
  honeymoon: "honeymoon",
  collections: "collections",
} as const;

export const CHAPTERS = [
  { id: "chapter-love", numeral: "I", label: "Love" },
  { id: "chapter-destination", numeral: "II", label: "Destination" },
  { id: "chapter-planning", numeral: "III", label: "Planning" },
  { id: "chapter-celebration", numeral: "IV", label: "Celebration" },
  { id: "chapter-guests", numeral: "V", label: "Guests" },
  { id: "chapter-beyond", numeral: "VI", label: "Beyond the Day" },
  { id: "chapter-proposal", numeral: "VII", label: "Your Proposal" },
] as const;
