import type { Metadata } from "next";
import NepalIndiaCombinedPage from "@/components/packages/nepal-india-combined/NepalIndiaCombinedPage";
import { BRAND_NAME, pageUrl } from "@/components/activities/experience/site";
import { IMAGES, PAGE_PATH, SEO } from "@/data/nepal-india-combined/content";

const url = pageUrl(PAGE_PATH);
const ogImage = IMAGES.hero.src ? [{ url: IMAGES.hero.src, alt: IMAGES.hero.alt }] : undefined;

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
    title: SEO.socialTitle,
    description: SEO.description,
    images: ogImage,
  },
  twitter: {
    card: "summary_large_image",
    title: SEO.socialTitle,
    description: SEO.description,
    images: ogImage?.map((i) => i.url),
  },
  robots: { index: true, follow: true },
};

export default function Page() {
  return <NepalIndiaCombinedPage />;
}
