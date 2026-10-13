import { BRAND_NAME, SITE_URL, pageUrl } from "@/components/activities/experience/site";
import { PAGE_PATH, PAGE_TITLE } from "@/data/jammu-kashmir/content";
import type { Destination, Faq, JkPackage } from "@/data/jammu-kashmir/types";

type JsonLd = Record<string, unknown>;

/**
 * TravelAgency, BreadcrumbList, ItemList of TouristDestinations, ItemList
 * of TouristTrips (published packages only) and FAQPage. No prices,
 * offers, ratings or reviews — none are confirmed.
 */
export function buildJammuKashmirStructuredData(destinations: Destination[], packages: JkPackage[], faqs: Faq[]): JsonLd[] {
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
        { "@type": "ListItem", position: 3, name: PAGE_TITLE, item: url },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "Places to visit in Jammu & Kashmir",
      itemListElement: destinations.map((d, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "TouristDestination",
          name: d.name,
          description: d.text,
          containedInPlace: { "@type": "AdministrativeArea", name: "Jammu and Kashmir", containedInPlace: { "@type": "Country", name: "India" } },
          ...(img(d.image.src) ? { image: img(d.image.src) } : {}),
        },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: `${PAGE_TITLE} — Karvaahh journeys`,
      itemListElement: packages.map((p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "TouristTrip",
          name: p.title,
          description: p.highlights.join(". "),
          provider: { "@id": `${SITE_URL}#organization` },
          url: `${SITE_URL}${p.href}`,
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
