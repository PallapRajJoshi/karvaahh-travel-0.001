import type { Metadata } from "next";
import { breadcrumbs, pageUrl, seo, site } from "../config";
import { faqs } from "../data/content";
import { treks, trekCta } from "../data/treks";

const abs = (path: string) => (path.startsWith("http") ? path : `${site.url}${path}`);

/** `title.absolute` bypasses the root layout's title template; the brand is already in the title. */
export function buildMetadata(): Metadata {
  const ogImage = { url: abs(seo.ogImage.src), alt: seo.ogImage.alt };

  return {
    title: { absolute: seo.title },
    description: seo.description,
    alternates: { canonical: pageUrl },
    openGraph: {
      type: "website",
      url: pageUrl,
      siteName: site.name,
      title: seo.title,
      description: seo.description,
      locale: "en_IN",
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
      images: [ogImage.url],
    },
    robots: { index: true, follow: true },
  };
}

/**
 * WebPage + BreadcrumbList + ItemList of the treks + FAQPage, all built from
 * the same data the page renders. No offers, prices or ratings are claimed.
 */
export function buildJsonLd() {
  const breadcrumbList = {
    "@type": "BreadcrumbList",
    "@id": `${pageUrl}#breadcrumb`,
    itemListElement: breadcrumbs.map((crumb, i) => {
      const isLast = i === breadcrumbs.length - 1;
      return {
        "@type": "ListItem",
        position: i + 1,
        name: crumb.label,
        ...(isLast ? { item: pageUrl } : crumb.href ? { item: abs(crumb.href) } : {}),
      };
    }),
  };

  const webPage = {
    "@type": "WebPage",
    "@id": `${pageUrl}#webpage`,
    url: pageUrl,
    name: seo.title,
    description: seo.description,
    inLanguage: "en-IN",
    isPartOf: { "@type": "WebSite", name: site.name, url: site.url },
    breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
    primaryImageOfPage: { "@type": "ImageObject", url: abs(seo.ogImage.src) },
  };

  const itemList = {
    "@type": "ItemList",
    "@id": `${pageUrl}#treks`,
    name: "Nepal base camp treks",
    itemListElement: treks.map((trek, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: trek.name,
      // Only treks with their own page get a URL; enquiry links are not item pages.
      ...(trek.href ? { url: abs(trekCta(trek).href) } : {}),
    })),
  };

  const faqPage = {
    "@type": "FAQPage",
    "@id": `${pageUrl}#faq`,
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return { "@context": "https://schema.org", "@graph": [webPage, breadcrumbList, itemList, faqPage] };
}
