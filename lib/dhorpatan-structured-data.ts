import { faqs, breadcrumbTrail, seo } from "@/data/dhorpatan";

/**
 * JSON-LD builders for the Dhorpatan page. SITE_URL should resolve to the
 * project's existing base-URL constant/env var — a local fallback is used
 * here since the live project wasn't available at build time (see README).
 */
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://karvaahh.in";

export function buildFaqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function buildBreadcrumbJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbTrail.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.label,
      item: `${SITE_URL}${crumb.href}`,
    })),
  };
}

export function buildTouristAttractionJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "TouristAttraction",
    name: "Dhorpatan Hunting Reserve",
    description: seo.description,
    url: `${SITE_URL}${seo.canonicalPath}`,
    image: `${SITE_URL}${seo.ogImage}`,
    address: {
      "@type": "PostalAddress",
      addressRegion: "Dhaulagiri Zone",
      addressCountry: "NP",
    },
  };
}
