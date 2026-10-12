import { BRAND_NAME, SITE_URL, pageUrl } from "@/components/activities/experience/site";
import { PAGE_PATH } from "@/data/pilgrimage/content";
import { REGIONS } from "@/data/pilgrimage/filters";
import type { PilgrimageDestination, PilgrimagePackage } from "@/data/pilgrimage/types";

type JsonLd = Record<string, unknown>;

/**
 * TravelAgency, BreadcrumbList, ItemList of TouristDestinations, ItemList of
 * TouristTrips and FAQPage. No prices, ratings or reviews are emitted.
 */
export function buildPilgrimageStructuredData(
  destinations: PilgrimageDestination[],
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
        { "@type": "ListItem", position: 2, name: "Nepal" },
        { "@type": "ListItem", position: 3, name: "Spiritual & Pilgrimage Tours", item: url },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "Sacred destinations in Nepal",
      itemListElement: destinations.map((d, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "TouristDestination",
          name: d.name,
          description: d.significance,
          containedInPlace: { "@type": "Place", name: `${d.district}, ${REGIONS[d.region].label}, Nepal` },
          ...(img(d.image?.src) ? { image: img(d.image?.src) } : {}),
          ...(d.href ? { url: `${SITE_URL}${d.href}` } : {}),
        },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "Nepal pilgrimage tour packages",
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
