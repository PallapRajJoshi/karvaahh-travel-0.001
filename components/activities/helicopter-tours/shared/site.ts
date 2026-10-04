import { contactInfo } from "@/lib/navigation-data";

export const SITE_URL = "https://karvaahh.in";
export const BRAND_NAME = "Karvaahh";

/** Reuses the site-wide Nepal contact number for WhatsApp and calls. */
const whatsappDigits = contactInfo.nepal.phoneHref.replace(/\D/g, "");

export const CONTACT = {
  phoneHref: contactInfo.nepal.phoneHref,
  phoneDisplay: contactInfo.nepal.phone,
  whatsappHref: (message: string) => `https://wa.me/${whatsappDigits}?text=${encodeURIComponent(message)}`,
};

export const pageUrl = (path: string) => `${SITE_URL}${path}`;
