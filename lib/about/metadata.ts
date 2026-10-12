import type { Metadata } from "next";
import {
  ABOUT_CANONICAL,
  ABOUT_DESCRIPTION,
  ABOUT_SITE_URL,
  ABOUT_TITLE,
  BRAND_NAME,
  IMAGE_BASE_PATH,
} from "./config";
import { IMAGE_SPECS } from "./images";
import { resolveImage } from "./resolve";

/**
 * Exact title / description from the brief.
 * - `title.absolute` avoids a doubled brand suffix from any root title template.
 * - Canonical is an ABSOLUTE URL, independent of `metadataBase` (a canonical issue
 *   was flagged in the site audit).
 * - The social image is only emitted once public/images/about/og-about.jpg exists, so
 *   the page never advertises a 404 image.
 */
export function buildAboutMetadata(): Metadata {
  const og = resolveImage("og");
  const images = og
    ? [{ url: `${ABOUT_SITE_URL}${IMAGE_BASE_PATH}/${IMAGE_SPECS.og.file}`, width: 1200, height: 630, alt: IMAGE_SPECS.og.alt }]
    : undefined;

  return {
    title: { absolute: ABOUT_TITLE },
    description: ABOUT_DESCRIPTION,
    alternates: { canonical: ABOUT_CANONICAL },
    robots: { index: true, follow: true },
    openGraph: {
      type: "website",
      url: ABOUT_CANONICAL,
      siteName: BRAND_NAME,
      title: ABOUT_TITLE,
      description: ABOUT_DESCRIPTION,
      locale: "en_US",
      ...(images ? { images } : {}),
    },
    twitter: {
      card: images ? "summary_large_image" : "summary",
      title: ABOUT_TITLE,
      description: ABOUT_DESCRIPTION,
      ...(images ? { images: images.map((i) => i.url) } : {}),
    },
  };
}
