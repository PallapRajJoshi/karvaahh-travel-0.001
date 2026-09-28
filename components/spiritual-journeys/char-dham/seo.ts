import type { Metadata } from "next";
import { LINKS, PAGE_PATH, PAGE_URL, SITE_URL, faqs, page, seo } from "./data/charDhamData";

export const charDhamMetadata: Metadata = {
  // `absolute` stops a layout title template from appending the brand twice.
  title: { absolute: seo.title },
  description: seo.description,
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    siteName: "Karvaahh",
    title: seo.title,
    description: seo.description,
    locale: "en_IN",
    images: [{ url: `${SITE_URL}${seo.ogImage}`, width: 1200, height: 630, alt: seo.ogImageAlt }],
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
    images: [`${SITE_URL}${seo.ogImage}`],
  },
};

/**
 * @graph with WebPage, BreadcrumbList, FAQPage and an Organization reference.
 * The organisation node carries only name + url; if the site layout already
 * emits a fuller TravelAgency node with @id `${SITE_URL}/#organization`,
 * the two merge by @id. No ratings, reviews, prices or contact data.
 */
export function buildCharDhamJsonLd(): Record<string, unknown> {
  const orgId = `${SITE_URL}/#organization`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "TravelAgency", "@id": orgId, name: "Karvaahh", url: SITE_URL },
      {
        "@type": "WebPage",
        "@id": `${PAGE_URL}#webpage`,
        url: PAGE_URL,
        name: seo.title,
        description: seo.description,
        inLanguage: "en-IN",
        isPartOf: { "@type": "WebSite", "@id": `${SITE_URL}/#website`, url: SITE_URL, name: "Karvaahh" },
        publisher: { "@id": orgId },
        breadcrumb: { "@id": `${PAGE_URL}#breadcrumb` },
        primaryImageOfPage: { "@type": "ImageObject", url: `${SITE_URL}${seo.ogImage}` },
        about: [
          { "@type": "Place", name: "Yamunotri" },
          { "@type": "Place", name: "Gangotri" },
          { "@type": "Place", name: "Kedarnath" },
          { "@type": "Place", name: "Badrinath" },
        ],
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${PAGE_URL}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}${LINKS.home === "/" ? "/" : LINKS.home}` },
          { "@type": "ListItem", position: 2, name: page.breadcrumbParent, item: `${SITE_URL}${LINKS.spiritualJourneys}` },
          { "@type": "ListItem", position: 3, name: page.name, item: `${SITE_URL}${PAGE_PATH}` },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${PAGE_URL}#faq`,
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };
}
