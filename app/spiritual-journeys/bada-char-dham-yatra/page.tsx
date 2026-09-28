import type { Metadata } from "next";
import BadaCharDhamPage from "@/components/spiritual-journeys/bada-char-dham/BadaCharDhamPage";
import BadaCharDhamJsonLd from "@/components/spiritual-journeys/bada-char-dham/BadaCharDhamJsonLd";
import { seo } from "@/components/spiritual-journeys/bada-char-dham/data/badaCharDhamData";

const canonical = `${seo.siteUrl}${seo.canonicalPath}`;

export const metadata: Metadata = {
  title: { absolute: seo.title }, // absolute: bypasses any root-layout title template
  description: seo.description,
  keywords: seo.keywords,
  alternates: { canonical },
  openGraph: {
    type: "website",
    url: canonical,
    siteName: seo.siteName,
    title: seo.title,
    description: seo.description,
    locale: "en_IN",
    // og:image is supplied by ./opengraph-image.tsx (file convention)
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
};

export default function Page() {
  return (
    <>
      <BadaCharDhamJsonLd />
      <BadaCharDhamPage />
    </>
  );
}
