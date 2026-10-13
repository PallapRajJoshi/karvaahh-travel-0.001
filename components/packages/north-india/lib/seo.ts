import type { Metadata } from "next";
import { breadcrumbs, faqs, pageUrl, seo, site } from "../data/content";
import { destinations } from "../data/destinations";
import { packages } from "../data/packages";

const abs = (path: string) => (path.startsWith("http") ? path : `${site.url}${path}`);
const ogSrc = seo.ogImage.src ?? "";

/** `title.absolute` keeps the root layout's title template from repeating the brand. */
export function buildMetadata(): Metadata {
  const ogImage = { url: abs(ogSrc), alt: seo.ogImage.alt };

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

/** Structured data built from the same data that renders the page. No prices or ratings are emitted. */
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
    primaryImageOfPage: { "@type": "ImageObject", url: abs(ogSrc) },
  };

  // Only packages with their own live page are listed.
  const tours = {
    "@type": "ItemList",
    "@id": `${pageUrl}#packages`,
    name: "North India tour packages by Karvaahh",
    itemListElement: packages.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "TouristTrip",
        name: p.title,
        url: abs(p.primary.href),
        provider: { "@type": "TravelAgency", name: site.name, url: site.url },
        itinerary: {
          "@type": "ItemList",
          itemListElement: p.destinations.map((d, j) => ({ "@type": "ListItem", position: j + 1, item: { "@type": "Place", name: d } })),
        },
      },
    })),
  };

  const places = {
    "@type": "ItemList",
    "@id": `${pageUrl}#destinations`,
    name: "North India destinations",
    itemListElement: destinations.map((d, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: { "@type": "TouristDestination", name: d.name, description: d.highlight },
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

  return { "@context": "https://schema.org", "@graph": [webPage, breadcrumbList, tours, places, faqPage] };
}
