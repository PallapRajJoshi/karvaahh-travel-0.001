import { BRAND_NAME, SITE_URL, pageUrl } from "@/components/activities/experience/site";
import type { Trek } from "@/data/trekking/types";

/**
 * WebPage, BreadcrumbList, ItemList and FAQPage only. No ratings, reviews
 * or offers: the page states no verified prices.
 */
export function buildTrekkingStructuredData({
  path,
  title,
  description,
  treks,
  faqs,
}: {
  path: string;
  title: string;
  description: string;
  treks: Trek[];
  faqs: { question: string; answer: string }[];
}): Record<string, unknown>[] {
  const url = pageUrl(path);
  return [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${url}#webpage`,
      url,
      name: title,
      description,
      inLanguage: "en",
      isPartOf: { "@type": "WebSite", name: BRAND_NAME, url: SITE_URL },
      about: { "@type": "Country", name: "Nepal" },
      breadcrumb: { "@id": `${url}#breadcrumb` },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "@id": `${url}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Packages", item: pageUrl("/packages") },
        { "@type": "ListItem", position: 3, name: "Nepal Trekking & Hiking Packages", item: url },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "Nepal trekking destinations",
      itemListElement: treks
        .filter((t) => t.dedicated)
        .map((t, i) => ({
          "@type": "ListItem",
          position: i + 1,
          item: { "@type": "TouristDestination", name: t.name, description: t.description, url: pageUrl(t.href) },
        })),
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })),
    },
  ];
}
