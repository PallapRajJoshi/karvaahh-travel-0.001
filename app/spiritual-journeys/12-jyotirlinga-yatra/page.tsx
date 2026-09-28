import type { Metadata } from "next";
import JyotirlingaYatraPage from "@/components/spiritual-journeys/12-jyotirlinga-yatra/JyotirlingaYatraPage";
import { page, seo } from "@/components/spiritual-journeys/12-jyotirlinga-yatra/data/jyotirlingaData";
import { buildJsonLd, jsonLdString } from "@/components/spiritual-journeys/12-jyotirlinga-yatra/data/schema";

const ogImageUrl = `${page.siteUrl}${seo.ogImage.src}`;

export const metadata: Metadata = {
  title: { absolute: seo.title },
  description: seo.description,
  keywords: seo.keywords,
  alternates: { canonical: page.url },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  openGraph: {
    type: "website",
    url: page.url,
    siteName: page.brand,
    locale: "en_IN",
    title: seo.title,
    description: seo.description,
    images: [{ url: ogImageUrl, width: seo.ogImage.width, height: seo.ogImage.height, alt: seo.ogImage.alt }],
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
    images: [ogImageUrl],
  },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdString(buildJsonLd()) }} />
      <JyotirlingaYatraPage />
    </>
  );
}
