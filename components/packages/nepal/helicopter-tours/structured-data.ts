import { BRAND_NAME, SITE_URL, pageUrl } from "@/components/activities/experience/site";
import { HUB_PATH } from "@/data/helicopter-tours/nepal-hub";
import type { HubCard } from "./model";

type JsonLd = Record<string, unknown>;

/** BreadcrumbList, ItemList of TouristTrips and FAQPage. No prices, ratings or reviews are emitted. */
export function buildHubStructuredData(cards: HubCard[], faqs: { question: string; answer: string }[]): JsonLd[] {
  return [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Packages", item: `${SITE_URL}/packages` },
        { "@type": "ListItem", position: 3, name: "Nepal Helicopter Tours", item: pageUrl(HUB_PATH) },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "Nepal helicopter tours and mountain flights",
      itemListElement: cards
        .filter((c) => c.href)
        .map((c, i) => ({
          "@type": "ListItem",
          position: i + 1,
          item: {
            "@type": "TouristTrip",
            name: c.title,
            description: c.text,
            url: `${SITE_URL}${c.href}`,
            ...(c.image.src ? { image: `${SITE_URL}${c.image.src}` } : {}),
            provider: { "@type": "TravelAgency", name: BRAND_NAME, url: SITE_URL },
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
