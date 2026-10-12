import { siteConfig } from "@/lib/site-config";

/**
 * Adapter between the site config and the legal UI.
 * Only channels that actually have a value are returned, so the pages never
 * show empty or invented contact details.
 */

export interface ContactChannel {
  kind: "email" | "phone" | "whatsapp" | "address";
  label: string;
  value: string;
  /** Present for actionable channels (mailto:, tel:, wa.me). */
  href?: string;
}

const digitsOnly = (value: string) => value.replace(/[^\d]/g, "");

export function getContactChannels(): ContactChannel[] {
  const channels: ContactChannel[] = [];
  if (siteConfig.email) {
    channels.push({
      kind: "email",
      label: "Email",
      value: siteConfig.email,
      href: `mailto:${siteConfig.email}`,
    });
  }
  if (siteConfig.phone) {
    channels.push({
      kind: "phone",
      label: "Phone",
      value: siteConfig.phone,
      href: `tel:+${digitsOnly(siteConfig.phone)}`,
    });
  }
  if (siteConfig.whatsapp) {
    channels.push({
      kind: "whatsapp",
      label: "WhatsApp",
      value: `+${digitsOnly(siteConfig.whatsapp)}`,
      href: `https://wa.me/${digitsOnly(siteConfig.whatsapp)}`,
    });
  }
  if (siteConfig.address) {
    channels.push({ kind: "address", label: "Address", value: siteConfig.address });
  }
  return channels;
}

export const contactPageHref = siteConfig.contactPath;
export const whatsappHref = siteConfig.whatsapp
  ? `https://wa.me/${digitsOnly(siteConfig.whatsapp)}`
  : undefined;
export const emailHref = siteConfig.email ? `mailto:${siteConfig.email}` : undefined;
