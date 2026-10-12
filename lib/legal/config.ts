/**
 * Single source of truth for the "last updated" date shown on every legal page.
 *
 * This is a fixed string — never generated per request — so crawlers and users
 * always see the date the legal text was actually revised. Update it whenever
 * any legal document in `lib/legal/` changes in substance.
 */
export const LEGAL_LAST_UPDATED = "October 2026";

/** ISO date used for `dateModified` in structured data. Keep in step with LEGAL_LAST_UPDATED. */
export const LEGAL_LAST_UPDATED_ISO = "2026-10-07";
