import type { Metadata } from "next";
import TrekkingPage from "@/components/packages/nepal/trekking-hiking-packages/TrekkingPage";
import { BRAND_NAME, SITE_URL, pageUrl } from "@/components/activities/experience/site";
import { PAGE_PATH, SEO } from "@/data/trekking/content";

const url = pageUrl(PAGE_PATH);
const ogImage = SEO.ogImage.src ? `${SITE_URL}${SEO.ogImage.src}` : undefined;

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
    images: ogImage ? [{ url: ogImage, alt: SEO.ogImage.alt }] : undefined,
  },
  twitter: {
    card: "summary_large_image",
    title: SEO.socialTitle,
    description: SEO.description,
    images: ogImage ? [ogImage] : undefined,
  },
  robots: { index: true, follow: true },
};

export default function Page() {
  return <TrekkingPage />;
}
