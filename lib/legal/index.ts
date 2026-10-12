import { cancellation } from "./cancellation";
import { cookies } from "./cookies";
import { privacyPolicy } from "./privacy";
import { terms } from "./terms";
import type { LegalDocument, LegalDocumentSlug } from "./types";

export { LEGAL_LAST_UPDATED, LEGAL_LAST_UPDATED_ISO } from "./config";
export { privacyPolicySections } from "./privacy";
export { termsSections } from "./terms";
export { cancellationSections, cancellationMatrixRows } from "./cancellation";
export { cookieSections } from "./cookies";
export type * from "./types";

/**
 * Registry of every legal document. To add a new page, create a data file
 * exporting a `LegalDocument`, add it here and add a route (see README).
 */
export const legalDocuments: Record<LegalDocumentSlug, LegalDocument> = {
  "privacy-policy": privacyPolicy,
  "terms-and-conditions": terms,
  "cancellation-policy": cancellation,
  cookies,
};

/** Order used for footer links and the "Related policies" list. */
export const legalDocumentOrder: LegalDocumentSlug[] = [
  "privacy-policy",
  "terms-and-conditions",
  "cancellation-policy",
  "cookies",
];

export const legalLinks = legalDocumentOrder.map((slug) => ({
  href: legalDocuments[slug].path,
  label: legalDocuments[slug].shortTitle,
}));
