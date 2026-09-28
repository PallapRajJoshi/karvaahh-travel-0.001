import type { Metadata } from "next";
import { breadcrumb, pageUrl, site } from "./data/config";
import { faqs } from "./data/faqs";
import { itinerary } from "./data/itinerary";

const abs = (path: string) => (path.startsWith("http") ? path : `${site.origin}${path}`);

export const mustangMetadata: Metadata = {
  title: { absolute: site.title },
  description: site.description,
  alternates: { canonical: pageUrl },
  openGraph: {
    type: "website",
    url: pageUrl,
    siteName: site.name,
    title: site.title,
    description: site.description,
    locale: "en_IN",
    images: [{ url: abs(site.ogImage.src), width: site.ogImage.width, height: site.ogImage.height, alt: site.ogImage.alt }],
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
    images: [abs(site.ogImage.src)],
  },
};

/**
 * Structured data built from the same data the page renders,
 * so JSON-LD can never drift from visible content.
 */
export function buildJsonLd() {
  const breadcrumbList = {
    "@type": "BreadcrumbList",
    "@id": `${pageUrl}#breadcrumb`,
    itemListElement: breadcrumb.map((b, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: b.label,
      item: abs(b.href),
    })),
  };

  const faqPage = {
    "@type": "FAQPage",
    "@id": `${pageUrl}#faq`,
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer.join(" ") },
    })),
  };

  // No offers / prices / dates on purpose — nothing unverified goes into structured data.
  const trip = {
    "@type": "TouristTrip",
    "@id": `${pageUrl}#trip`,
    name: "Mustang Circuit Trek",
    description: site.description,
    url: pageUrl,
    image: abs(site.ogImage.src),
    touristType: ["Trekking", "Cultural tourism", "Pilgrimage"],
    provider: { "@type": "TravelAgency", name: site.name, url: site.origin },
    itinerary: {
      "@type": "ItemList",
      itemListElement: itinerary.map((s, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: { "@type": "Place", name: s.place, description: s.summary },
      })),
    },
  };

  return {
    "@context": "https://schema.org",
    "@graph": [breadcrumbList, faqPage, trip],
  };
}

/** Serialise for a <script> tag, escaping "<" so content can't close the tag. */
export function jsonLdString(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
