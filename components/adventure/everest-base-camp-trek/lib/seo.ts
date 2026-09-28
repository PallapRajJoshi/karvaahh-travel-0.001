import type { Metadata } from "next";
import { ebcSite } from "../config/site";
import { faqs } from "../data/faqs";
import { itinerary } from "../data/itinerary";
import { breadcrumbTrail } from "../sections/Breadcrumb";

const abs = (path: string) => new URL(path, ebcSite.siteUrl).toString();

/** Next.js Metadata for the route. */
export function buildMetadata(): Metadata {
  const { seo, route } = ebcSite;
  const url = abs(route);
  return {
    title: seo.title,
    description: seo.description,
    keywords: [...seo.keywords],
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      siteName: "Karvaahh",
      title: seo.title,
      description: seo.description,
      locale: "en_IN",
      images: [{ url: abs(seo.ogImage), width: 1600, height: 900, alt: "Everest Base Camp Trek — Khumbu Himalaya, Nepal" }],
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
      images: [abs(seo.ogImage)],
    },
    robots: { index: true, follow: true },
  };
}

/**
 * JSON-LD graph: BreadcrumbList + FAQPage + TouristTrip.
 * FAQPage is generated from the same data that renders the visible FAQ
 * accordion, so structured data always matches on-page content.
 * TouristTrip deliberately has no `offers` — no prices are published.
 */
export function buildJsonLd() {
  const url = abs(ebcSite.route);
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: breadcrumbTrail.map((c, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: c.name,
          item: abs(c.href),
        })),
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.title,
          acceptedAnswer: { "@type": "Answer", text: f.body.join(" ") },
        })),
      },
      {
        "@type": "TouristTrip",
        "@id": `${url}#trip`,
        name: "Everest Base Camp Trek",
        description: ebcSite.seo.description,
        url,
        touristType: ["Adventure travellers", "Trekkers"],
        provider: { "@type": "TravelAgency", name: "Karvaahh", url: ebcSite.siteUrl },
        itinerary: {
          "@type": "ItemList",
          itemListElement: itinerary.map((s, i) => ({
            "@type": "ListItem",
            position: i + 1,
            item: { "@type": "TouristAttraction", name: `${s.day}: ${s.title}`, description: s.description },
          })),
        },
      },
    ],
  };
}

/** Serialises JSON-LD safely for inline <script> (escapes "<" to prevent tag injection). */
export function jsonLdString(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
