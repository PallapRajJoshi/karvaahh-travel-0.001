import { BRAND_NAME, SITE_URL, pageUrl } from "@/components/activities/experience/site";
import { PAGE_PATH, PAGE_TITLE } from "@/data/historical-heritage/content";
import type { HeritageDestination } from "@/data/historical-heritage/types";
import type { PilgrimagePackage } from "@/data/pilgrimage/types";

type JsonLd = Record<string, unknown>;

/**
 * TravelAgency, BreadcrumbList, ItemList of TouristAttractions, ItemList
 * of TouristTrips and FAQPage. No prices, ratings, reviews, opening
 * hours or fees — none are verified.
 */
export function buildHeritageStructuredData(destinations: HeritageDestination[], packages: PilgrimagePackage[], faqs: { question: string; answer: string }[]): JsonLd[] {
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
        { "@type": "ListItem", position: 3, name: "Historical & Heritage Tours", item: url },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "Historic and heritage sites in Nepal",
      itemListElement: destinations.map((d, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "TouristAttraction",
          name: d.name,
          description: d.text,
          containedInPlace: { "@type": "Place", name: `${d.region}, Nepal` },
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
