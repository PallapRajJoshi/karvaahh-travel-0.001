import type { Metadata } from "next";
import UttarakhandPage from "@/components/packages/uttarakhand/UttarakhandPage";
import { resolveImages } from "@/components/activities/experience/resolve-images";
import { BRAND_NAME, SITE_URL, pageUrl } from "@/components/activities/experience/site";
import { PAGE_PATH, SEO } from "@/data/uttarakhand/content";

const url = pageUrl(PAGE_PATH);
/* Social image is only advertised once the file exists in /public. */
const ogImage = resolveImages({ ...SEO.ogImage, label: "" });

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
    images: ogImage.src ? [{ url: `${SITE_URL}${ogImage.src}`, alt: ogImage.alt }] : undefined,
  },
  twitter: {
    card: "summary_large_image",
    title: SEO.socialTitle,
    description: SEO.description,
    images: ogImage.src ? [`${SITE_URL}${ogImage.src}`] : undefined,
  },
  robots: { index: true, follow: true },
};

export default function Page() {
  return <UttarakhandPage />;
}
