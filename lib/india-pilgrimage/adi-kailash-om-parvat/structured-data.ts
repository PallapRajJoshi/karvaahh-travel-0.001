import { faqs } from "@/data/india-pilgrimage/adi-kailash-om-parvat/faqs";
import { breadcrumb, seo } from "@/data/india-pilgrimage/adi-kailash-om-parvat/page";
import { routeStages } from "@/data/india-pilgrimage/adi-kailash-om-parvat/routes";
import { site } from "@/data/india-pilgrimage/adi-kailash-om-parvat/site";

const abs = (href: string) => (href.startsWith("http") ? href : `${site.url}${href}`);

/** BreadcrumbList — mirrors the visible breadcrumb exactly. */
export function breadcrumbJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumb.map((crumb, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: crumb.name,
      item: abs(crumb.href),
    })),
  };
}

/** FAQPage — built from the same strings rendered in the visible FAQ. */
export function faqJsonLd() {
  const visible = faqs.filter((f) => f.enabled !== false);
  if (visible.length === 0) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: visible.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer.replace(/\n\s*\n/g, " ") },
    })),
  };
}

/**
 * TouristTrip — describes the journey and its stops. No `offers` are emitted
 * because no prices are published; add them only with real, current prices.
 */
export function touristTripJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: "Adi Kailash & Om Parvat Yatra",
    description: seo.description,
    url: seo.canonical,
    image: abs(seo.ogImage.src),
    touristType: ["Pilgrims", "Spiritual travellers", "Himalayan travellers"],
    provider: { "@type": "TravelAgency", name: site.name, url: site.url },
    itinerary: {
      "@type": "ItemList",
      itemListElement: routeStages
        .filter((s) => s.enabled !== false && s.mapPoint)
        .map((s, i) => ({
          "@type": "ListItem",
          position: i + 1,
          item: { "@type": "Place", name: s.name, description: s.description },
        })),
    },
  };
}

/** Serialises JSON-LD safely for inline <script> tags. */
export function toJsonLdString(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
