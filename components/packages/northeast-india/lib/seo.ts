import "server-only";
import type { Metadata } from "next";
import { resolveImages } from "@/components/activities/experience/resolve-images";
import { breadcrumbs, faqs, pageUrl, seo, site, states } from "../data/content";
import { destinations } from "../data/destinations";

const abs = (path: string) => (path.startsWith("http") ? path : `${site.url}${path}`);

/** The share image is a planned photo; it is left out until the file exists in /public. */
const og = resolveImages({ ogImage: seo.ogImage }).ogImage as typeof seo.ogImage | undefined;
const ogImage = og?.src ? { url: abs(og.src), alt: og.alt } : null;

/** `title.absolute` keeps the root layout's title template from repeating the brand. */
export function buildMetadata(): Metadata {
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
      ...(ogImage ? { images: [ogImage] } : {}),
    },
    twitter: {
      card: ogImage ? "summary_large_image" : "summary",
      title: seo.title,
      description: seo.description,
      ...(ogImage ? { images: [ogImage.url] } : {}),
    },
    robots: { index: true, follow: true },
  };
}

/**
 * Structured data built from the same data that renders the page.
 * No TouristTrip, offers, prices or ratings: Karvaahh has no published
 * Northeast India package, and nothing here should imply one.
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
    "@type": "CollectionPage",
    "@id": `${pageUrl}#webpage`,
    url: pageUrl,
    name: seo.title,
    description: seo.description,
    inLanguage: "en-IN",
    isPartOf: { "@type": "WebSite", name: site.name, url: site.url },
    breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
    ...(ogImage ? { primaryImageOfPage: { "@type": "ImageObject", url: ogImage.url } } : {}),
  };

  const regions = {
    "@type": "ItemList",
    "@id": `${pageUrl}#states`,
    name: "The eight states of Northeast India",
    itemListElement: states.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: { "@type": "AdministrativeArea", name: s.name, containedInPlace: { "@type": "Country", name: "India" } },
    })),
  };

  const places = {
    "@type": "ItemList",
    "@id": `${pageUrl}#destinations`,
    name: "Northeast India destinations",
    itemListElement: destinations.map((d, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "TouristDestination",
        name: d.name,
        description: d.highlight,
        containedInPlace: { "@type": "AdministrativeArea", name: d.stateName },
      },
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

  return { "@context": "https://schema.org", "@graph": [webPage, breadcrumbList, regions, places, faqPage] };
}
