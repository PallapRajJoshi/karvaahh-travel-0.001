import type { Metadata } from "next";
import type { SeoContent } from "./types";

/** Relies on `metadataBase` being set in the root layout (see README). */
export function buildAerialMetadata(seo: SeoContent): Metadata {
  return {
    title: { absolute: seo.title },
    description: seo.description,
    alternates: { canonical: seo.path },
    openGraph: {
      type: "website",
      url: seo.path,
      siteName: "Karvaahh Tours & Travels",
      title: seo.title,
      description: seo.description,
      images: [{ url: seo.ogImage.src, alt: seo.ogImage.alt }],
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
      images: [seo.ogImage.src],
    },
  };
}
