/**
 * Page-level constants for the Kailash Mansarovar Yatra page.
 *
 * ENQUIRY channels are intentionally empty where the correct value is not yet
 * confirmed (the site audit flagged conflicting contact numbers). Any channel
 * left empty is simply not rendered, so the page never ships a dead CTA.
 */
export const SITE_URL = "https://karvaahh.in";
export const PAGE_PATH = "/spiritual-journeys/kailash-mansarovar";
export const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

export const BRAND_NAME = "Karvaahh";
export const BRAND_TAGLINE = "Live to Travel";

export const IMAGE_BASE = "/images/spiritual-journeys/kailash-mansarovar";

export const ENQUIRY = {
  /** Internal enquiry route. Verify it exists before launch. */
  contactHref: "/contact?enquiry=kailash-mansarovar-yatra",
  /** Digits only, with country code, e.g. "9779800000000". Empty = hidden. */
  whatsappNumber: "",
  /** e.g. "yatra@karvaahh.in". Empty = hidden. */
  email: "",
  /** e.g. { display: "+977 980-0000000", href: "tel:+9779800000000" }. Empty display = hidden. */
  phone: { display: "", href: "" },
};

export const WHATSAPP_MESSAGE =
  "Hello Karvaahh, I would like to plan a Kailash Mansarovar Yatra.";
