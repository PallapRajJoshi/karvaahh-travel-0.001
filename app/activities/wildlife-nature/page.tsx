import type { Metadata } from "next";
import { WildlifeNaturePage } from "@/components/activities/wildlife-nature/WildlifeNaturePage";
import { FAQS } from "@/data/activities/wildlife-nature/faqs";
import { IMAGE_SOURCE_READY, OG_IMAGE } from "@/data/activities/wildlife-nature/images";
import { LINKS } from "@/data/activities/wildlife-nature/links";
import { SEO, SITE_URL } from "@/data/activities/wildlife-nature/seo";

export const metadata: Metadata = {
  title: { absolute: SEO.title },
  description: SEO.description,
  // Absolute canonical built from NEXT_PUBLIC_SITE_URL so it cannot drift from the live domain.
  alternates: { canonical: SEO.url },
  openGraph: {
    type: "website",
    siteName: "Karvaahh – Live to Travel",
    title: SEO.ogTitle,
    description: SEO.description,
    url: SEO.url,
    locale: "en",
    // Only advertise an OG image once the real file exists (see data/.../images.ts).
    images: IMAGE_SOURCE_READY
      ? [{ url: `${SITE_URL}${OG_IMAGE.src}`, width: OG_IMAGE.width, height: OG_IMAGE.height, alt: OG_IMAGE.alt }]
      : undefined,
  },
  twitter: {
    card: IMAGE_SOURCE_READY ? "summary_large_image" : "summary",
    title: SEO.ogTitle,
    description: SEO.description,
    images: IMAGE_SOURCE_READY ? [`${SITE_URL}${OG_IMAGE.src}`] : undefined,
  },
};

// Structured data limited to what the page visibly contains: page, breadcrumb trail, FAQ.
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${SEO.url}#webpage`,
      url: SEO.url,
      name: SEO.h1,
      description: SEO.description,
      inLanguage: "en",
      isPartOf: { "@type": "WebSite", name: "Karvaahh – Live to Travel", url: SITE_URL },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "Activities", item: `${SITE_URL}${LINKS.activities}` },
        { "@type": "ListItem", position: 3, name: "Wildlife & Nature", item: SEO.url },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: FAQS.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        // Escape "<" so content can never close the script tag.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <WildlifeNaturePage />
    </>
  );
}
