import type { Metadata } from "next";
import PanchKailashKedarPage from "@/components/packages/panch-kailash-kedar/PanchKailashKedarPage";
import { resolveImages } from "@/components/activities/experience/resolve-images";
import { BRAND_NAME, SITE_URL, pageUrl } from "@/components/activities/experience/site";
import { IMAGES, PAGE_PATH, SEO } from "@/data/panch-kailash-kedar/content";

const url = pageUrl(PAGE_PATH);
const ogImage = resolveImages(IMAGES.hero);

export const metadata: Metadata = {
  title: { absolute: SEO.title },
  description: SEO.description,
  keywords: SEO.keywords,
  alternates: { canonical: url },
  openGraph: {
    type: "website",
    url,
    siteName: BRAND_NAME,
    locale: "en_IN",
    title: SEO.title,
    description: SEO.description,
    images: ogImage.src ? [{ url: `${SITE_URL}${ogImage.src}`, alt: ogImage.alt }] : undefined,
  },
  twitter: {
    card: "summary_large_image",
    title: SEO.title,
    description: SEO.description,
    images: ogImage.src ? [`${SITE_URL}${ogImage.src}`] : undefined,
  },
  robots: { index: true, follow: true },
};

export default function Page() {
  return <PanchKailashKedarPage />;
}
