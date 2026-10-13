import { BRAND_NAME, SITE_URL, pageUrl } from "@/components/activities/experience/site";
import { PAGE_PATH, PAGE_TITLE } from "@/data/beach-cruise/content";
import type { BeachPackage, CoastalDestination, Faq } from "@/data/beach-cruise/types";

type JsonLd = Record<string, unknown>;

const abs = (href: string) => (href.startsWith("http") ? href : `${SITE_URL}${href}`);

/**
 * TravelAgency, BreadcrumbList, ItemList of TouristDestinations, ItemList
 * of TouristTrips and FAQPage. No prices, offers, ratings or reviews —
 * none are confirmed.
 */
export function buildBeachStructuredData(destinations: CoastalDestination[], packages: BeachPackage[], faqs: Faq[]): JsonLd[] {
  const url = pageUrl(PAGE_PATH);

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
      name: "Beach, island and cruise destinations",
      itemListElement: destinations.map((d, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "TouristDestination",
          name: d.name,
          description: d.text,
          url: abs(d.link.href),
          ...(d.image.src ? { image: abs(d.image.src) } : {}),
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
          description: p.summary,
          itinerary: { "@type": "ItemList", itemListElement: p.route.map((stop, k) => ({ "@type": "ListItem", position: k + 1, name: stop })) },
          provider: { "@id": `${SITE_URL}#organization` },
          url: abs(p.href),
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
