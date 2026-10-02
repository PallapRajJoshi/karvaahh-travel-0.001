import type { TravelPackage } from "@/data/package-types";

export const SITE_URL = "https://karvaahh.in";
export const PACKAGES_PATH = "/packages";

/**
 * ONE place to wire the enquiry flow. Karvaahh already has an enquiry / WhatsApp
 * mechanism; swap `buildEnquiryHref` to call it. Nothing else in the hub builds
 * enquiry links.
 *
 * The WhatsApp number is read from env on purpose (the site audit found
 * conflicting contact numbers) so it is defined exactly once.
 */
const ENQUIRY_ROUTE = "/contact";
const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER; // digits only, e.g. 97798XXXXXXXX
export const CUSTOM_TRIP_ROUTE = "/contact?type=custom-trip";

export function buildEnquiryHref(pkg: Pick<TravelPackage, "id" | "name" | "href">): string {
  const url = pkg.href ? `${SITE_URL}${pkg.href}` : undefined;
  if (WHATSAPP_NUMBER) {
    const text = `Hello Karvaahh, I'd like to enquire about: ${pkg.name}${url ? ` (${url})` : ""}`;
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
  }
  const params = new URLSearchParams({ package: pkg.name, ref: pkg.id });
  if (pkg.href) params.set("url", pkg.href);
  return `${ENQUIRY_ROUTE}?${params.toString()}`;
}

/**
 * Optional hub imagery. Leave undefined until the real files exist in /public:
 * missing files would 404 in the console. Every slot has a designed fallback.
 * Paths are public URLs, e.g. "/images/packages/hero-himalaya.jpg".
 */
export const HUB_IMAGES: {
  hero?: string;
  heroAlt?: string;
  customTrip?: string;
  /** Travel-style card images keyed by category id, e.g. { spiritual: "/images/packages/styles/spiritual.jpg" } */
  styles: Partial<Record<string, string>>;
} = {
  hero: undefined,
  heroAlt: "Himalayan mountain landscape in Nepal",
  customTrip: undefined,
  styles: {},
};

export const showDraftPackages = process.env.NEXT_PUBLIC_SHOW_DRAFT_PACKAGES === "true";
