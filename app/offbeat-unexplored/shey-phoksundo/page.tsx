import type { Metadata } from "next";
import ShehyPhoksundoPage from "@/components/offbeat/shey-phoksundo/ShehyPhoksundoPage";
import { SEO, FAQS, BREADCRUMB } from "@/components/offbeat/shey-phoksundo/data";

// NOTE: assumes `metadataBase` is already configured in the root layout
// (consistent with other Karvaahh destination pages). If not, set it there
// rather than per-page. See README for details.
export const metadata: Metadata = {
  title: SEO.title,
  description: SEO.description,
  alternates: {
    canonical: SEO.canonicalPath,
  },
  openGraph: {
    title: SEO.title,
    description: SEO.description,
    url: SEO.canonicalPath,
    type: "website",
    images: [{ url: SEO.ogImage }],
  },
  twitter: {
    card: "summary_large_image",
    title: SEO.title,
    description: SEO.description,
    images: [SEO.ogImage],
  },
};

function buildJsonLd() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: BREADCRUMB.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.label,
      item: crumb.href,
    })),
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const touristDestinationJsonLd = {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    name: "Shey Phoksundo",
    description: SEO.description,
    url: SEO.canonicalPath,
    containedInPlace: {
      "@type": "AdministrativeArea",
      name: "Karnali Province, Nepal",
    },
  };

  return [breadcrumbJsonLd, faqJsonLd, touristDestinationJsonLd];
}

export default function Page() {
  const jsonLdBlocks = buildJsonLd();

  return (
    <>
      {jsonLdBlocks.map((block, index) => (
        <script
          key={index}
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(block) }}
        />
      ))}
      <ShehyPhoksundoPage />
    </>
  );
}
