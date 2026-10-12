/**
 * Types for the structured legal content system.
 *
 * Legal documents are plain data. The UI in `components/legal/` renders them,
 * so editing wording never requires touching components.
 */

export type LegalIconName =
  | "info"
  | "alert"
  | "shield"
  | "plane"
  | "helicopter"
  | "compass"
  | "mountain"
  | "calendar"
  | "clipboard"
  | "cookie"
  | "mail"
  | "phone"
  | "whatsapp"
  | "arrow"
  | "chevron"
  | "lock"
  | "hotel"
  | "pin"
  | "heart"
  | "route"
  | "users"
  | "refund"
  | "check";

export type CalloutVariant =
  | "important"
  | "insurance"
  | "booking"
  | "safety"
  | "supplier"
  | "info";

export interface MatrixRow {
  service: string;
  typical: string;
  final: string;
  /** Optional extra explanation shown under the service name. */
  note?: string;
}

export interface InfoCardItem {
  icon?: LegalIconName;
  title: string;
  text?: string;
  items?: string[];
}

/** One renderable unit inside a section. */
export type LegalBlock =
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[]; ordered?: boolean }
  | { type: "subsection"; title: string; content?: string[]; items?: string[] }
  | { type: "callout"; variant: CalloutVariant; title?: string; text: string }
  | { type: "infoCards"; title?: string; cards: InfoCardItem[] }
  | { type: "matrix"; caption: string; rows: MatrixRow[] }
  | { type: "contact" }
  | { type: "cookiePreferences" }
  /**
   * Renders the cookies / storage items that the site actually uses, read from
   * `lib/cookie/config.ts`. Filter by category and/or first/third party.
   * Shows an honest "none in use" message when nothing matches.
   */
  | { type: "cookieTable"; category?: CookieCategoryKey; party?: "first" | "third" };

export interface LegalSection {
  /** URL fragment, also used as the DOM id and TOC target. Must be unique per document. */
  id: string;
  /** Zero-padded display number, assigned automatically by `defineSections`. */
  number: string;
  title: string;
  /** Plain paragraphs, rendered first. */
  content: string[];
  /** Rich blocks (lists, sub-headings, callouts, cards, matrix), rendered after `content`. */
  blocks?: LegalBlock[];
}

/** Section as authored — `number` is assigned by `defineSections`. */
export type LegalSectionDraft = Omit<LegalSection, "number">;

export type CookieCategoryKey = "essential" | "analytics" | "marketing" | "preferences";

export type LegalDocumentSlug =
  | "privacy-policy"
  | "terms-and-conditions"
  | "cancellation-policy"
  | "cookies";

export interface LegalDocument {
  slug: LegalDocumentSlug;
  /** Route path, e.g. "/privacy-policy". */
  path: `/${LegalDocumentSlug}`;
  /** Short name used in breadcrumbs, footer links and the TOC heading. */
  shortTitle: string;
  /** H1. */
  title: string;
  /** Large supporting line under the H1, e.g. "Your privacy matters to us." */
  headline: string;
  /** Contextual subtitle shown in the hero. */
  subtitle: string;
  /** <title> metadata (absolute — already includes the brand suffix). */
  metaTitle: string;
  metaDescription: string;
  sections: LegalSection[];
  /** Optional cards shown above the first section (e.g. "Before You Book"). */
  highlights?: InfoCardItem[];
}
