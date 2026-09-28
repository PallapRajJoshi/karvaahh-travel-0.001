/**
 * Site-level values this page depends on.
 *
 * If the project already has a global site config (e.g. `config/site.ts`),
 * point these at it instead of duplicating values. Every href here is a
 * best guess and is listed under README → "Links to verify".
 */

export const site = {
  name: "Karvaahh",
  tagline: "Karvaahh – Live to Travel",
  url: "https://karvaahh.in",
  locale: "en_IN",

  /** Contact page. */
  contactHref: "/contact",

  /**
   * Enquiry / custom-trip form. Query params let the form pre-select the trip.
   * If you have a dedicated planner route (e.g. /plan-your-trip), change it here.
   */
  enquiryHref: "/contact",
  enquiryTripParam: "adi-kailash-om-parvat",

  /** Category hub used by the breadcrumb and BreadcrumbList JSON-LD. */
  categoryHref: "/india-pilgrimage",
  categoryName: "India Pilgrimage",
} as const;

/** Builds an enquiry link that tells the form which trip / package was chosen. */
export function enquiryLink(packageId?: string): string {
  const params = new URLSearchParams({ trip: site.enquiryTripParam });
  if (packageId) params.set("package", packageId);
  return `${site.enquiryHref}?${params.toString()}`;
}
