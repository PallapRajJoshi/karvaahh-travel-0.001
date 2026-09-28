/**
 * JSON-LD for the 12 Jyotirlinga Yatra page.
 * No ratings, reviews, prices, awards or contact details are emitted.
 * The Organization node references the site-wide entity by @id; if the root layout
 * already outputs a full Organization/TravelAgency node with that @id, they merge.
 */
import { faqs, getRoute, jyotirlingas, page, seo } from "./jyotirlingaData";

const ORG_ID = `${page.siteUrl}/#organization`;
const PAGE_ID = `${page.url}#webpage`;

export function buildJsonLd() {
  const breadcrumbItems = seo.breadcrumbs.map((crumb, i) => {
    const route = crumb.route ? getRoute(crumb.route) : null;
    const item = route ? `${page.siteUrl}${route.href === "/" ? "" : route.href}` : page.url;
    return { "@type": "ListItem", position: i + 1, name: crumb.name, item };
  });

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TravelAgency",
        "@id": ORG_ID,
        name: page.brand,
        url: page.siteUrl,
        slogan: page.tagline,
      },
      {
        "@type": "WebPage",
        "@id": PAGE_ID,
        url: page.url,
        name: seo.title,
        description: seo.description,
        inLanguage: "en-IN",
        isPartOf: { "@type": "WebSite", "@id": `${page.siteUrl}/#website`, url: page.siteUrl, name: page.brand },
        publisher: { "@id": ORG_ID },
        breadcrumb: { "@id": `${page.url}#breadcrumb` },
        about: { "@id": `${page.url}#jyotirlingas` },
        primaryImageOfPage: { "@type": "ImageObject", url: `${page.siteUrl}${seo.ogImage.src}` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${page.url}#breadcrumb`,
        itemListElement: breadcrumbItems,
      },
      {
        "@type": "ItemList",
        "@id": `${page.url}#jyotirlingas`,
        name: "The 12 Jyotirlingas of India",
        numberOfItems: jyotirlingas.length,
        itemListElement: jyotirlingas.map((j) => ({
          "@type": "ListItem",
          position: j.id,
          item: {
            "@type": "HinduTemple",
            name: j.templeName,
            description: j.shortDescription,
            url: `${page.url}#jyotirlinga-${j.slug}`,
            address: {
              "@type": "PostalAddress",
              addressLocality: j.location,
              addressRegion: j.state,
              addressCountry: "IN",
            },
          },
        })),
      },
      {
        "@type": "FAQPage",
        "@id": `${page.url}#faq`,
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: { "@type": "Answer", text: f.answer },
        })),
      },
    ],
  };
}

/** Serialise safely for a <script> tag. */
export function jsonLdString(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
