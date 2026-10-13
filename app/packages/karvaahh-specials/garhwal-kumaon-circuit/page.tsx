import type { Metadata } from "next";
import GarhwalKumaonPage from "@/components/packages/garhwal-kumaon/GarhwalKumaonPage";
import { BRAND_NAME, pageUrl } from "@/components/activities/experience/site";
import { PAGE_PATH, SEO } from "@/data/garhwal-kumaon/content";

const url = pageUrl(PAGE_PATH);

export const metadata: Metadata = {
  title: { absolute: SEO.title },
  description: SEO.description,
  alternates: { canonical: url },
  openGraph: { type: "website", url, siteName: BRAND_NAME, locale: "en_IN", title: SEO.socialTitle, description: SEO.description },
  twitter: { card: "summary_large_image", title: SEO.socialTitle, description: SEO.description },
  robots: { index: true, follow: true },
};

export default function Page() {
  return <GarhwalKumaonPage />;
}
