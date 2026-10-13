import { BRAND_NAME, SITE_URL, pageUrl } from "@/components/activities/experience/site";
import { PAGE_PATH, PAGE_TITLE } from "@/data/festival-cultural/content";
import type { CulturalDestination } from "@/data/festival-cultural/types";
import type { PilgrimagePackage } from "@/data/pilgrimage/types";

type JsonLd = Record<string, unknown>;

/**
 * TravelAgency, BreadcrumbList, ItemList of TouristDestinations, ItemList
 * of TouristTrips and FAQPage. No Event markup: festival dates are not
 * verified for a specific year. No prices, ratings or reviews.
 */
export function buildFestivalStructuredData(
  destinations: CulturalDestination[],
  packages: PilgrimagePackage[],
  faqs: { question: string; answer: string }[],
): JsonLd[] {
  const url = pageUrl(PAGE_PATH);
  const img = (src?: string | null) => (src ? `${SITE_URL}${src}` : undefined);

  return [
    { "@context": "https://schema.org", "@type": "TravelAgency", "@id": `${SITE_URL}#organization`, name: BRAND_NAME, url: SITE_URL, slogan: "Live to Travel", areaServed: ["Nepal", "India"] },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Packages", item: `${SITE_URL}/packages` },
        { "@type": "ListItem", position: 3, name: "Nepal" },
        { "@type": "ListItem", position: 4, name: "Festival & Cultural Tours", item: url },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "Cultural destinations in Nepal",
      itemListElement: destinations.map((d, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "TouristDestination",
          name: d.name,
          description: d.text,
          containedInPlace: { "@type": "Place", name: `${d.region}, Nepal` },
          url: `${SITE_URL}${d.href}`,
          ...(img(d.image.src) ? { image: img(d.image.src) } : {}),
        },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: `${PAGE_TITLE} — packages`,
      itemListElement: packages.map((p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "TouristTrip",
          name: p.title,
          description: p.description,
          provider: { "@id": `${SITE_URL}#organization` },
          ...(p.href ? { url: `${SITE_URL}${p.href}` } : {}),
        },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })),
    },
  ];
}
