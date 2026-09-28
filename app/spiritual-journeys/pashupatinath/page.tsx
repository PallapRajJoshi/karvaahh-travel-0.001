import type { Metadata } from "next";
import { PashupatinathMuktinathPage } from "@/components/spiritual-journeys/pashupatinath-muktinath";
import { images, seo } from "@/components/spiritual-journeys/pashupatinath-muktinath/data/pashupatinathMuktinathData";
import { BRAND, SITE_URL } from "@/components/spiritual-journeys/pashupatinath-muktinath/data/site";
import { buildJsonLd, serializeJsonLd } from "@/components/spiritual-journeys/pashupatinath-muktinath/lib/jsonLd";

const ogImage = images.og.ready
  ? [{ url: `${SITE_URL}${images.og.src}`, width: images.og.width, height: images.og.height, alt: images.og.alt }]
  : undefined;

export const metadata: Metadata = {
  // `absolute` bypasses any title template in the root layout.
  title: { absolute: seo.title },
  description: seo.description,
  alternates: { canonical: seo.canonical },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  openGraph: {
    type: "website",
    url: seo.canonical,
    siteName: BRAND.name,
    title: seo.ogTitle,
    description: seo.ogDescription,
    locale: "en_IN",
    ...(ogImage ? { images: ogImage } : {}),
  },
  twitter: {
    card: "summary_large_image",
    title: seo.ogTitle,
    description: seo.ogDescription,
    ...(ogImage ? { images: ogImage.map((i) => i.url) } : {}),
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(buildJsonLd()) }}
      />
      <PashupatinathMuktinathPage />
    </>
  );
}
