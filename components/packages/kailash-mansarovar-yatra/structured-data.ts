/**
 * JSON-LD builders. All generated from the same data the page renders,
 * so structured data can never drift from visible content.
 */
import { breadcrumbs, isEnabled, pageUrl, seo, site } from "./config";
import { faqs } from "./data/faqs";
import { parikrama } from "./data/parikrama";
import { sacredDestinations } from "./data/destinations";

const abs = (href: string) => (href.startsWith("http") ? href : `${site.url}${href === "/" ? "" : href}`);

export function breadcrumbJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: abs(c.href),
    })),
  };
}

/** Only emitted when the FAQ section is visible on the page. */
export function faqJsonLd() {
  if (!isEnabled("faq")) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

/**
 * TouristTrip without offers/prices — describes the journey and its places.
 * Add `offers` only once real, honoured prices exist in data/packages.ts.
 */
export function tripJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: "Kailash Mansarovar Yatra",
    description: seo.description,
    url: pageUrl,
    image: abs(seo.ogImage.url),
    touristType: ["Pilgrims", "Spiritual travellers"],
    provider: { "@type": "TravelAgency", name: site.name, url: site.url },
    itinerary: {
      "@type": "ItemList",
      itemListElement: [
        ...sacredDestinations.slice(0, 2),
        ...sacredDestinations.filter((d) => ["darchen", "dirapuk", "dolma-la", "zuthulpuk"].includes(d.id)),
      ].map((d, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: { "@type": "TouristAttraction", name: d.name, description: d.description },
      })),
    },
    subjectOf: {
      "@type": "CreativeWork",
      name: parikrama.heading,
      abstract: parikrama.subtitle,
    },
  };
}
