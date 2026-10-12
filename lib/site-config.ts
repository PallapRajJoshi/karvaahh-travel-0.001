/**
 * Central site configuration.
 *
 * If your project already has a site-config file, merge these fields into it
 * and update the single import in `lib/legal/contact.ts` — nothing else in the
 * legal system reads contact details directly.
 *
 * IMPORTANT: Contact fields are intentionally EMPTY. They must be filled with
 * the official Karvaahh details before the legal pages are published. Any field
 * left empty is hidden from the pages (no placeholder text is ever rendered).
 */
export interface SiteConfig {
  /** Short brand name used in running text. */
  brandName: string;
  tagline: string;
  /** Full brand line used in page titles: "Karvaahh – Live to Travel". */
  siteTitle: string;
  /** Registered legal entity name, if different from the brand. Hidden when empty. */
  legalEntityName: string;
  /** Registration / licence number as it appears on official documents. Hidden when empty. */
  registrationNumber: string;
  /** Canonical site origin, no trailing slash. */
  url: string;
  /** Official support e-mail. */
  email: string;
  /** Official phone number in display format, e.g. "+977 1 0000000". */
  phone: string;
  /** WhatsApp number, digits only with country code (e.g. "9779800000000"). */
  whatsapp: string;
  /** Registered / office address (single line or comma separated). */
  address: string;
  /** Path of the contact page on the site. */
  contactPath: string;
  /** Country whose law governs the Terms (reviewed by counsel before publication). */
  governingLaw: string;
}

export const siteConfig: SiteConfig = {
  brandName: "Karvaahh",
  tagline: "Live to Travel",
  siteTitle: "Karvaahh – Live to Travel",
  legalEntityName: "",
  registrationNumber: "",
  url: "https://www.karvaahh.in",
  email: "",
  phone: "",
  whatsapp: "",
  address: "",
  contactPath: "/contact",
  governingLaw: "Nepal",
};
