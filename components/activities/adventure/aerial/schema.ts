import type { AerialActivityData } from "./types";
import { SITE_URL } from "./contact.config";

/**
 * One @graph: WebPage + TouristAttraction + BreadcrumbList (+ FAQPage).
 * Deliberately no Offer, AggregateRating or Review nodes — nothing here
 * is invented, and indicative price ranges are not firm offers.
 */
export function buildAerialJsonLd(data: AerialActivityData) {
  const url = `${SITE_URL}${data.seo.path}`;
  const graph: Record<string, unknown>[] = [
    {
      "@type": "WebPage",
      "@id": `${url}#webpage`,
      url,
      name: data.seo.title,
      description: data.seo.description,
      inLanguage: "en",
      isPartOf: { "@type": "WebSite", name: "Karvaahh Tours & Travels", url: SITE_URL },
      breadcrumb: { "@id": `${url}#breadcrumb` },
      about: { "@id": `${url}#attraction` },
      primaryImageOfPage: { "@type": "ImageObject", url: `${SITE_URL}${data.hero.image.src}` },
    },
    {
      "@type": "TouristAttraction",
      "@id": `${url}#attraction`,
      name: data.seo.schemaName,
      description: data.intro.body,
      url,
      image: `${SITE_URL}${data.hero.image.src}`,
      touristType: data.audience.items.map((a) => a.title),
      containedInPlace: {
        "@type": "City",
        name: data.seo.place.name,
        address: {
          "@type": "PostalAddress",
          addressLocality: data.seo.place.name,
          addressCountry: data.seo.place.country,
        },
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${url}#breadcrumb`,
      itemListElement: data.breadcrumbs.map((c, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: c.label,
        item: `${SITE_URL}${c.href}`,
      })),
    },
  ];

  if (data.seo.includeFaqSchema) {
    graph.push({
      "@type": "FAQPage",
      "@id": `${url}#faq`,
      mainEntity: data.faq.items.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      })),
    });
  }

  return { "@context": "https://schema.org", "@graph": graph };
}

/** Escapes "<" so content can never close the script tag early. */
export function serializeJsonLd(value: unknown): string {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}
