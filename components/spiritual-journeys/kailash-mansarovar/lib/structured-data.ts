import { FAQS } from "../data/faqs";
import { JOURNEY_STAGES } from "../data/journey";
import { IMAGES } from "../data/images";
import { BRAND_NAME, IMAGE_BASE, PAGE_URL, SITE_URL } from "./site";

type JsonLd = Record<string, unknown>;

const KORA_PLACES = ["Kathmandu", "Saga", "Lake Mansarovar", "Darchen", "Yamadwar", "Dirapuk", "Dolma La Pass", "Zuthulpuk"];

export function buildStructuredData(description: string): JsonLd[] {
  const breadcrumb: JsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Spiritual Journeys", item: `${SITE_URL}/spiritual-journeys` },
      { "@type": "ListItem", position: 3, name: "Kailash Mansarovar Yatra", item: PAGE_URL },
    ],
  };

  const trip: JsonLd = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    "@id": `${PAGE_URL}#trip`,
    name: "Kailash Mansarovar Yatra from Nepal",
    description,
    url: PAGE_URL,
    image: `${SITE_URL}${IMAGE_BASE}/${IMAGES.hero.file}`,
    touristType: ["Pilgrims", "Spiritual travellers", "Himalayan travellers"],
    itinerary: {
      "@type": "ItemList",
      numberOfItems: KORA_PLACES.length,
      itemListElement: KORA_PLACES.map((name, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: { "@type": "Place", name },
      })),
    },
    subjectOf: {
      "@type": "ItemList",
      name: "Typical journey flow",
      itemListElement: JOURNEY_STAGES.map((s, i) => ({ "@type": "ListItem", position: i + 1, name: s.title })),
    },
    provider: { "@type": "TravelAgency", name: BRAND_NAME, url: SITE_URL },
  };

  const faq: JsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return [breadcrumb, trip, faq];
}

/** Serialise safely for inline <script> tags. */
export function serializeJsonLd(data: JsonLd): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
