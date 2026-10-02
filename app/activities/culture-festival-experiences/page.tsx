import type { Metadata } from "next";
import CultureFestivalPage from "@/components/activities/culture-festival-experiences/CultureFestivalPage";
import { BREADCRUMBS, PAGE_PATH, PAGE_URL, SEO, SITE_URL, BRAND } from "@/components/activities/culture-festival-experiences/data/page";
import { FAQS } from "@/components/activities/culture-festival-experiences/data/faq";
import { MEDIA, MEDIA_BASE } from "@/components/activities/culture-festival-experiences/data/media";

/**
 * Assumes `metadataBase` is set in the root layout (https://karvaahh.in).
 * The canonical below is relative to it, so it resolves to the page's real URL.
 */
const ogImage = MEDIA.hero.ready ? [{ url: `${MEDIA_BASE}/${MEDIA.hero.file}`, alt: MEDIA.hero.alt }] : undefined;

export const metadata: Metadata = {
  title: SEO.title,
  description: SEO.description,
  keywords: SEO.keywords,
  alternates: { canonical: PAGE_PATH },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    siteName: BRAND,
    title: SEO.title,
    description: SEO.description,
    locale: "en_US",
    images: ogImage,
  },
  twitter: {
    card: "summary_large_image",
    title: SEO.title,
    description: SEO.description,
    images: ogImage?.map((i) => i.url),
  },
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: BREADCRUMBS.map((c, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: c.name,
    item: c.href === "/" ? SITE_URL : `${SITE_URL}${c.href}`,
  })),
};

/** FAQ answers are the same strings rendered on the page, so markup and content cannot drift. */
const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};

function jsonLd(data: object) {
  // "<" is escaped so content can never close the script tag.
  return { __html: JSON.stringify(data).replace(/</g, "\\u003c") };
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(breadcrumbLd)} />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(faqLd)} />
      <CultureFestivalPage />
    </>
  );
}
