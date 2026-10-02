import type { Metadata } from "next";
import { seo } from "@/data/dhorpatan";
import {
  buildFaqJsonLd,
  buildBreadcrumbJsonLd,
  buildTouristAttractionJsonLd,
} from "@/lib/dhorpatan-structured-data";
import DhorpatanAssembly from "@/components/destinations/dhorpatan/DhorpatanAssembly";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://karvaahh.in";

/**
 * ASSUMPTION: metadataBase is assumed to already be set once, globally, in
 * the root layout (per the project's documented convention). It is not
 * redeclared here. If that's not the case in the live project, add
 * `metadataBase: new URL(SITE_URL)` to the root layout's metadata export.
 */
export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  alternates: {
    canonical: seo.canonicalPath,
  },
  openGraph: {
    title: seo.title,
    description: seo.description,
    url: `${SITE_URL}${seo.canonicalPath}`,
    siteName: "Karvaahh",
    images: [{ url: seo.ogImage, width: 1200, height: 630, alt: "Dhorpatan Hunting Reserve" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
    images: [seo.ogImage],
  },
};

export default function DhorpatanHuntingReservePage() {
  const faqJsonLd = buildFaqJsonLd();
  const breadcrumbJsonLd = buildBreadcrumbJsonLd();
  const touristAttractionJsonLd = buildTouristAttractionJsonLd();

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(touristAttractionJsonLd) }}
      />
      <DhorpatanAssembly />
    </>
  );
}
