import { BREADCRUMB_TRAIL, HERO_IMAGE, PAGE_URL, SITE_URL } from "./config";
import { DESTINATIONS } from "./destinations";
import { FAQS } from "./faqs";

const abs = (path: string) => (path.startsWith("http") ? path : `${SITE_URL}${path}`);

export function buildJsonLd() {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: BREADCRUMB_TRAIL.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.href ? abs(item.href) : PAGE_URL,
    })),
  };

  // Core route only — optional extensions are not presented as part of the trip.
  const core = DESTINATIONS.filter((d) => d.group !== "extensions");

  const trip = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    "@id": `${PAGE_URL}#trip`,
    name: "Haridwar & Rishikesh Spiritual Yatra",
    description:
      "A customisable pilgrimage to Haridwar and Rishikesh in Uttarakhand, including the Ganga Aarti at Har Ki Pauri and Triveni Ghat, temple darshan, ashram visits and optional Neelkanth Mahadev.",
    url: PAGE_URL,
    image: abs(HERO_IMAGE.src),
    touristType: ["Pilgrims", "Families", "Senior travellers", "Spiritual seekers"],
    itinerary: {
      "@type": "ItemList",
      numberOfItems: core.length,
      itemListElement: core.map((d, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "TouristAttraction",
          name: d.name,
          description: d.significance,
          url: `${PAGE_URL}#${d.id}`,
        },
      })),
    },
    provider: {
      "@type": "TravelAgency",
      name: "Karvaahh",
      url: SITE_URL,
    },
  };

  const faq = {
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

/** Safe serialisation for inline <script type="application/ld+json">. */
export const serializeJsonLd = (data: unknown) =>
  JSON.stringify(data).replace(/</g, "\\u003c");
