import type { Metadata } from "next";
import CoastalSouthIndiaPage from "@/components/packages/coastal-south-india/CoastalSouthIndiaPage";
import { BRAND_NAME, pageUrl } from "@/components/activities/experience/site";
import { HERO_IMAGE, PAGE_PATH, SEO } from "@/data/coastal-south-india/content";

const url = pageUrl(PAGE_PATH);
const ogImage = HERO_IMAGE.src ? [{ url: HERO_IMAGE.src, alt: HERO_IMAGE.alt }] : undefined;

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
    images: ogImage,
  },
  twitter: {
    card: "summary_large_image",
    title: SEO.title,
    description: SEO.description,
    images: ogImage?.map((i) => i.url),
  },
  robots: { index: true, follow: true },
};

export default function Page() {
  return <CoastalSouthIndiaPage />;
}
