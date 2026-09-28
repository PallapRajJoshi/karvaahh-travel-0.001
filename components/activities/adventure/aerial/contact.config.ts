/**
 * Single source of truth for enquiry + WhatsApp targets on aerial pages.
 * The site audit found conflicting contact numbers — set the ONE verified
 * number here and every CTA on every aerial page picks it up.
 */

export const SITE_URL = "https://karvaahh.in";

export const KARVAAHH_CONTACT = {
  /** Unverified route — confirm /contact exists before launch (see README). */
  enquiryPath: "/contact",
  /**
   * International format, digits only, no "+" (e.g. "9779800000000").
   * Left null on purpose: no number is invented. While null, the
   * WhatsApp button is not rendered, so no dead link ships.
   */
  whatsappNumber: null as string | null,
};

export function enquiryHref(params: Record<string, string>): string {
  const qs = new URLSearchParams(params).toString();
  return qs ? `${KARVAAHH_CONTACT.enquiryPath}?${qs}` : KARVAAHH_CONTACT.enquiryPath;
}

export function whatsappHref(message: string): string | null {
  const n = KARVAAHH_CONTACT.whatsappNumber;
  if (!n) return null;
  return `https://wa.me/${n}?text=${encodeURIComponent(message)}`;
}
