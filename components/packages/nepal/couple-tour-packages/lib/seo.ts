import type { Metadata } from "next";
import { breadcrumbs, faqs, pageUrl, seo, site } from "../data/content";
import { getaways } from "../data/getaways";

const abs = (path: string) => (path.startsWith("http") ? path : `${site.url}${path}`);

/** `title.absolute` keeps the root layout's title template from repeating the brand. */
export function buildMetadata(): Metadata {
  const ogImage = { url: abs(seo.ogImage.src), alt: seo.ogImage.alt };

  return {
    title: { absolute: seo.title },
    description: seo.description,
    keywords: [...seo.keywords],
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

/** Structured data built from the same data that renders the page. */
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

  // Only getaways with their own page are listed; enquiry links aren't products.
  const itemList = {
    "@type": "ItemList",
    "@id": `${pageUrl}#getaways`,
    name: "Nepal couple getaways",
    itemListElement: getaways
      .filter((g) => !g.primary.href.startsWith("/contact"))
      .map((g, i) => ({ "@type": "ListItem", position: i + 1, name: g.title, url: abs(g.primary.href) })),
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
