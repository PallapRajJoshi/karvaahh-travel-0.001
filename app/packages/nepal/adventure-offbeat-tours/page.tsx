import type { Metadata } from "next";
import AdventureOffbeatPage from "@/components/packages/nepal/adventure-offbeat-tours/AdventureOffbeatPage";
import { BRAND_NAME, SITE_URL, pageUrl } from "@/components/activities/experience/site";
import { PAGE_PATH, SEO } from "@/data/adventure-offbeat/content";

const url = pageUrl(PAGE_PATH);

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
    images: SEO.ogImage.src ? [{ url: `${SITE_URL}${SEO.ogImage.src}`, alt: SEO.ogImage.alt }] : undefined,
  },
  twitter: {
    card: "summary_large_image",
    title: SEO.socialTitle,
    description: SEO.description,
    images: SEO.ogImage.src ? [`${SITE_URL}${SEO.ogImage.src}`] : undefined,
  },
  robots: { index: true, follow: true },
};

export default function Page() {
  return <AdventureOffbeatPage />;
}
