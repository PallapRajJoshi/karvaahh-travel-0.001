import { BRAND_NAME, SITE_URL, pageUrl } from "@/components/activities/experience/site";
import { GRAND_TOUR, PAGE_PATH, PAGE_TITLE, type Circuit } from "@/data/nepal-india-combined/content";

type JsonLd = Record<string, unknown>;

/**
 * TravelAgency, BreadcrumbList and an ItemList of TouristTrips (the five
 * circuits plus the grand tour). No prices, offers, ratings or reviews —
 * none are confirmed.
 */
export function buildCombinedStructuredData(circuits: Circuit[]): JsonLd[] {
  const url = pageUrl(PAGE_PATH);
  const trip = (name: string, description: string, stops: string[], anchor: string) => ({
    "@type": "TouristTrip",
    name,
    description,
    itinerary: { "@type": "ItemList", itemListElement: stops.map((s, k) => ({ "@type": "ListItem", position: k + 1, name: s })) },
    provider: { "@id": `${SITE_URL}#organization` },
    url: `${url}#${anchor}`,
  });

  return [
    { "@context": "https://schema.org", "@type": "TravelAgency", "@id": `${SITE_URL}#organization`, name: BRAND_NAME, url: SITE_URL, slogan: "Live to Travel" },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Packages", item: `${SITE_URL}/packages` },
        { "@type": "ListItem", position: 3, name: PAGE_TITLE, item: url },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: `${PAGE_TITLE} — circuits`,
      itemListElement: [
        ...circuits.map((c) => trip(c.title, c.text, c.destinations, `circuit-${c.id}`)),
        trip(GRAND_TOUR.title, GRAND_TOUR.intro, GRAND_TOUR.stages.map((s) => s.place), "grand-tour"),
      ].map((item, i) => ({ "@type": "ListItem", position: i + 1, item })),
    },
  ];
}
