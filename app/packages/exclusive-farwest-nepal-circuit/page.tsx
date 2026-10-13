import type { Metadata } from "next";
import FarWestCircuitPage from "@/components/packages/farwest-nepal-circuit/FarWestCircuitPage";
import { resolveImages } from "@/components/activities/experience/resolve-images";
import { BRAND_NAME, SITE_URL, pageUrl } from "@/components/activities/experience/site";
import { PAGE_PATH, SEO } from "@/data/farwest-nepal/content";
import { dolpo, rara } from "@/data/farwest-nepal/images";

const url = pageUrl(PAGE_PATH);
/* Social image: Rara once its photo exists, otherwise the real Dolpo photo. */
const raraImage = resolveImages(rara);
const ogImage = raraImage.src ? raraImage : dolpo;

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
    images: [{ url: `${SITE_URL}${ogImage.src}`, alt: ogImage.alt }],
  },
  twitter: {
    card: "summary_large_image",
    title: SEO.socialTitle,
    description: SEO.description,
    images: [`${SITE_URL}${ogImage.src}`],
  },
  robots: { index: true, follow: true },
};

export default function Page() {
  return <FarWestCircuitPage />;
}
