import type { Metadata } from "next";
import { breadcrumbs, pageUrl, seo, site } from "../config/page.config";
import { faqs } from "../data/faqs";

const abs = (path: string) => (path.startsWith("http") ? path : `${site.url}${path}`);

/**
 * Page metadata.
 * `title.absolute` bypasses any `%s | Karvaahh` template in the root layout,
 * because the brand is already in the brief's title and would otherwise repeat.
 */
export function buildMetadata(): Metadata {
  const ogImage = {
    url: abs(seo.ogImage.src),
    width: 1200,
    height: 630,
    alt: seo.ogImage.alt,
  };

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
 * Structured data, generated from the same config/data that renders the page,
 * so markup and visible content can't drift apart.
 *  - WebPage + BreadcrumbList: always.
 *  - FAQPage: only when enabled, and built from the visible FAQ copy verbatim.
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
        // The last item takes the page URL. Ancestors without a page are listed by name only.
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

  const graph: Record<string, unknown>[] = [webPage, breadcrumbList];

  if (seo.faqStructuredData && faqs.length) {
    graph.push({
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.title,
        acceptedAnswer: { "@type": "Answer", text: f.body.join(" ") },
      })),
    });
  }

  return { "@context": "https://schema.org", "@graph": graph };
}
