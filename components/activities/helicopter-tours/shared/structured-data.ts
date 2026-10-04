import type { Metadata } from "next";
import { BRAND_NAME, SITE_URL, pageUrl } from "./site";
import type { HelicopterProductTour } from "./product-types";

/** Page metadata: absolute title, canonical, Open Graph and Twitter. */
export function buildHeliTourMetadata(content: Pick<HelicopterProductTour, "path" | "seo">): Metadata {
  const { seo } = content;
  const url = pageUrl(content.path);
  const ogImage = `${SITE_URL}${seo.ogImage.src}`;

  return {
    // absolute: avoids double branding from the root layout's title template
    title: { absolute: seo.title },
    description: seo.description,
    keywords: seo.keywords,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      siteName: BRAND_NAME,
      locale: "en_IN",
      title: seo.socialTitle,
      description: seo.description,
      images: [{ url: ogImage, width: seo.ogImage.width, height: seo.ogImage.height, alt: seo.ogImage.alt }],
    },
    twitter: {
      card: "summary_large_image",
      title: seo.socialTitle,
      description: seo.description,
      images: [ogImage],
    },
    robots: { index: true, follow: true },
  };
}

/** Serialise safely for an inline <script> tag. */
export function serializeJsonLd(data: Record<string, unknown>): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
