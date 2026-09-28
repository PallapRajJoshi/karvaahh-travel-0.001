import type { Metadata } from "next";
import SkydivingPage from "@/components/activities/adventure/skydiving/SkydivingPage";
import { PAGE_PATH, seo } from "@/components/activities/adventure/skydiving/data/skydivingData";
import { buildSkydivingJsonLd, serializeJsonLd } from "@/components/activities/adventure/skydiving/data/skydivingSchema";

export const metadata: Metadata = {
  title: { absolute: seo.title },
  description: seo.description,
  keywords: seo.keywords,
  alternates: { canonical: PAGE_PATH },
  openGraph: {
    type: "website",
    url: PAGE_PATH,
    siteName: "Karvaahh Tours & Travels",
    title: seo.title,
    description: seo.description,
    images: [{ url: seo.ogImage, alt: "Skydiving in the Everest region of Nepal" }],
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
    images: [seo.ogImage],
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(buildSkydivingJsonLd()) }}
      />
      <SkydivingPage />
    </>
  );
}
