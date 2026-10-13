import type { Metadata } from "next";
import AllNepalCircuitPage from "@/components/packages/all-nepal-circuit/AllNepalCircuitPage";
import { BRAND_NAME, pageUrl } from "@/components/activities/experience/site";
import { IMAGES, PAGE_PATH, SEO } from "@/data/all-nepal-circuit/content";

const url = pageUrl(PAGE_PATH);
const images = [{ url: pageUrl(IMAGES.hero.src as string), alt: IMAGES.hero.alt }];

export const metadata: Metadata = {
  title: { absolute: SEO.title },
  description: SEO.description,
  keywords: [
    "All Nepal Adventure Tour Package",
    "Nepal multi-destination tour",
    "Nepal adventure holiday",
    "Rara Lake tour package",
    "Mustang and Muktinath tour",
    "Nepal trekking and culture tour",
    "Nepal wildlife and heritage tour",
  ],
  alternates: { canonical: url },
  openGraph: { type: "website", url, siteName: BRAND_NAME, locale: "en_IN", title: SEO.socialTitle, description: SEO.description, images },
  twitter: { card: "summary_large_image", title: SEO.socialTitle, description: SEO.description, images: images.map((i) => i.url) },
  robots: { index: true, follow: true },
};

export default function Page() {
  return <AllNepalCircuitPage />;
}
