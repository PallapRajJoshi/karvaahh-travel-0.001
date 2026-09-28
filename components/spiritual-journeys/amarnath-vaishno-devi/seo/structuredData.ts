import { PAGE_PATH } from "../data/content";
import { DESTINATIONS } from "../data/destinations";
import { FAQS } from "../data/faqs";
import { IMAGES } from "../data/images";

/**
 * JSON-LD built only from content visible on the page.
 * No offers, prices, ratings or reviews. Organization/TravelAgency is assumed to be emitted
 * globally by the root layout — referenced here by @id rather than duplicated.
 */
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://karvaahh.in").replace(/\/$/, "");
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const ORG_ID = `${SITE_URL}/#organization`;

export const BREADCRUMBS = [
  { name: "Home", href: "/" },
  { name: "Spiritual Journeys", href: "/spiritual-journeys" },
  { name: "Amarnath & Vaishno Devi Yatra", href: PAGE_PATH },
];

export function buildJsonLd() {
  const breadcrumb = {
    "@type": "BreadcrumbList",
    "@id": `${PAGE_URL}#breadcrumb`,
    itemListElement: BREADCRUMBS.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: c.href === "/" ? SITE_URL : `${SITE_URL}${c.href}`,
    })),
  };

  const trip = {
    "@type": "TouristTrip",
    "@id": `${PAGE_URL}#trip`,
    name: "Amarnath & Vaishno Devi Yatra",
    description:
      "A pilgrimage to Shri Amarnath Cave Temple and Shri Mata Vaishno Devi Temple in Jammu and Kashmir, with optional Kashmir extensions. Subject to official registration, route and medical requirements.",
    url: PAGE_URL,
    image: `${SITE_URL}${IMAGES.hero.src}`,
    touristType: ["Pilgrims", "Spiritual travellers", "Families"],
    provider: { "@id": ORG_ID },
    itinerary: {
      "@type": "ItemList",
      itemListElement: DESTINATIONS.filter((d) => !d.optional).map((d, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "TouristDestination",
          name: d.name,
          description: d.significance,
          address: { "@type": "PostalAddress", addressRegion: "Jammu and Kashmir", addressCountry: "IN" },
        },
      })),
    },
  };

  const faq = {
    "@type": "FAQPage",
    "@id": `${PAGE_URL}#faq`,
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  const webpage = {
    "@type": "WebPage",
    "@id": PAGE_URL,
    url: PAGE_URL,
    name: "Amarnath & Vaishno Devi Yatra",
    isPartOf: { "@id": `${SITE_URL}/#website` },
    breadcrumb: { "@id": `${PAGE_URL}#breadcrumb` },
    mainEntity: { "@id": `${PAGE_URL}#trip` },
    primaryImageOfPage: `${SITE_URL}${IMAGES.hero.src}`,
    inLanguage: "en-IN",
  };

  return { "@context": "https://schema.org", "@graph": [webpage, breadcrumb, trip, faq] };
}
