import type { Metadata } from "next";
import NepalHelicopterToursPage from "@/components/packages/nepal/helicopter-tours/NepalHelicopterToursPage";
import { BRAND_NAME, SITE_URL, pageUrl } from "@/components/activities/experience/site";
import { HUB_PATH, HUB_SEO } from "@/data/helicopter-tours/nepal-hub";

const url = pageUrl(HUB_PATH);
const ogImage = `${SITE_URL}${HUB_SEO.ogImage.src}`;

export const metadata: Metadata = {
  title: { absolute: HUB_SEO.title },
  description: HUB_SEO.description,
  keywords: HUB_SEO.keywords,
  alternates: { canonical: url },
  openGraph: {
    type: "website",
    url,
    siteName: BRAND_NAME,
    title: HUB_SEO.socialTitle,
    description: HUB_SEO.description,
    images: [{ url: ogImage, width: HUB_SEO.ogImage.width, height: HUB_SEO.ogImage.height, alt: HUB_SEO.ogImage.alt }],
  },
  twitter: {
    card: "summary_large_image",
    title: HUB_SEO.socialTitle,
    description: HUB_SEO.description,
    images: [ogImage],
  },
  robots: { index: true, follow: true },
};

export default function Page() {
  return <NepalHelicopterToursPage />;
}
