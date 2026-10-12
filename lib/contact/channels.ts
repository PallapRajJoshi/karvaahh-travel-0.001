import { siteConfig } from "@/lib/site-config";

/**
 * Single source of contact data for /contact.
 *
 * Reads from the shared `lib/site-config.ts` (the one created with the legal
 * pages). Nothing is invented: any field that is empty or missing simply
 * disappears, and the page falls back to "send us an enquiry" actions.
 *
 * Fields read (all optional unless noted):
 *   url (falls back to https://karvaahh.in), email, phone,
 *   whatsapp (digits only, with country code, e.g. "97798XXXXXXXX"),
 *   address, mapEmbedUrl,
 *   social: { facebook, instagram, youtube }
 */

export const BRAND_NAME = "Karvaahh Tours & Travels";
export const BRAND_TAGLINE = "Karvaahh – Live to Travel";
export const OFFICE_CITY = "Kathmandu, Nepal";
export const WHATSAPP_GREETING = "Hello Karvaahh, I’d like help planning a trip.";

export type SocialKey = "facebook" | "instagram" | "youtube";

export type Channels = {
  siteUrl: string;
  canonicalUrl: string;
  phone: { display: string; href: string } | null;
  whatsapp: { display: string; href: string } | null;
  email: { display: string; href: string } | null;
  /** Street address if configured; the page always also shows OFFICE_CITY. */
  address: string | null;
  directionsHref: string;
  /** Only https URLs on an allow-listed map host are ever embedded. */
  mapEmbedUrl: string | null;
  social: { key: SocialKey; label: string; href: string }[];
};

type Loose = Record<string, unknown>;

function isRecord(value: unknown): value is Loose {
  return typeof value === "object" && value !== null;
}

function readString(source: unknown, key: string): string {
  if (!isRecord(source)) return "";
  const value = source[key];
  return typeof value === "string" ? value.trim() : "";
}

const MAP_EMBED_HOSTS = ["www.google.com", "maps.google.com", "www.openstreetmap.org"];

function safeMapEmbed(url: string): string | null {
  if (!url) return null;
  try {
    const parsed = new URL(url);
    if (parsed.protocol !== "https:" || !MAP_EMBED_HOSTS.includes(parsed.hostname)) return null;
    return parsed.toString();
  } catch {
    return null;
  }
}

function safeHttps(url: string): string | null {
  if (!url) return null;
  try {
    const parsed = new URL(url);
    return parsed.protocol === "https:" ? parsed.toString() : null;
  } catch {
    return null;
  }
}

export function getChannels(): Channels {
  const cfg: unknown = siteConfig;

  const siteUrl = (readString(cfg, "url") || "https://karvaahh.in").replace(/\/+$/, "");

  const phoneRaw = readString(cfg, "phone");
  const phoneDigits = phoneRaw.replace(/[^\d+]/g, "");
  const phone = phoneRaw && phoneDigits.replace(/\D/g, "").length >= 7
    ? { display: phoneRaw, href: `tel:${phoneDigits}` }
    : null;

  const waDigits = readString(cfg, "whatsapp").replace(/\D/g, "");
  const whatsapp = waDigits.length >= 7
    ? {
        display: `+${waDigits}`,
        href: `https://wa.me/${waDigits}?text=${encodeURIComponent(WHATSAPP_GREETING)}`,
      }
    : null;

  const emailRaw = readString(cfg, "email");
  const email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailRaw)
    ? { display: emailRaw, href: `mailto:${emailRaw}` }
    : null;

  const address = readString(cfg, "address") || null;

  const destination = address ? `${BRAND_NAME}, ${address}` : `${BRAND_NAME}, ${OFFICE_CITY}`;
  const directionsHref = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(destination)}`;

  const socialCfg = isRecord(cfg) ? cfg.social : undefined;
  const social: Channels["social"] = [];
  const socialDefs: { key: SocialKey; label: string }[] = [
    { key: "facebook", label: "Facebook" },
    { key: "instagram", label: "Instagram" },
    { key: "youtube", label: "YouTube" },
  ];
  for (const def of socialDefs) {
    const href = safeHttps(readString(socialCfg, def.key));
    if (href) social.push({ ...def, href });
  }

  return {
    siteUrl,
    canonicalUrl: "https://karvaahh.in/contact",
    phone,
    whatsapp,
    email,
    address,
    directionsHref,
    mapEmbedUrl: safeMapEmbed(readString(cfg, "mapEmbedUrl")),
    social,
  };
}
