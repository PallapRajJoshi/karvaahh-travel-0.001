import type { Metadata } from "next";
import RoadTrailAdventurePage from "@/components/activities/road-trail-adventure/RoadTrailAdventurePage";
import { FAQS } from "@/components/activities/road-trail-adventure/data/faqs";
import {
  AVAILABLE_PHOTOS,
  IMAGE_BASE,
  OG_IMAGE_FILE,
} from "@/components/activities/road-trail-adventure/data/photos";
import {
  BREADCRUMBS,
  PAGE_DESCRIPTION,
  PAGE_KEYWORDS,
  PAGE_PATH,
  PAGE_TITLE,
  SITE_NAME,
} from "@/components/activities/road-trail-adventure/data/site";

/**
 * Canonical + Open Graph URLs are relative to `metadataBase`, which must be set
 * in the root layout (see README). The OG image is only emitted once a real
 * share image has been registered, so it never points at a 404.
 */
const ogImages = AVAILABLE_PHOTOS.has(OG_IMAGE_FILE)
  ? [
      {
        url: `${IMAGE_BASE}/${OG_IMAGE_FILE}`,
        width: 1200,
        height: 630,
        alt: "Road and trail adventures in the Nepal Himalaya",
      },
    ]
  : undefined;

export const metadata: Metadata = {
  title: { absolute: PAGE_TITLE },
  description: PAGE_DESCRIPTION,
  keywords: PAGE_KEYWORDS,
  alternates: { canonical: PAGE_PATH },
  openGraph: {
    type: "website",
    url: PAGE_PATH,
    siteName: SITE_NAME,
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    locale: "en_IN",
    images: ogImages,
  },
  twitter: {
    card: ogImages ? "summary_large_image" : "summary",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: ogImages?.map((i) => i.url),
  },
};

/**
 * Structured data: only what is true and visible on the page.
 * No ratings, reviews, prices or business details.
 */
const SITE_ORIGIN = "https://karvaahh.in";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: BREADCRUMBS.map((crumb, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: crumb.name,
    item: `${SITE_ORIGIN}${crumb.href === "/" ? "" : crumb.href}`,
  })),
};

/** Escape `<` so the JSON can never close the script tag. */
const toJson = (data: unknown) => JSON.stringify(data).replace(/</g, "\\u003c");

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: toJson(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: toJson(faqJsonLd) }}
      />
      <RoadTrailAdventurePage />
    </>
  );
}
