import type { Metadata } from "next";
import LangtangPage from "@/components/adventure/langtang-valley-trek/LangtangPage";
import { CANONICAL, images, seo } from "@/data/adventure/langtang-valley-trek";

export const metadata: Metadata = {
  title: { absolute: seo.title },
  description: seo.description,
  keywords: seo.keywords,
  alternates: { canonical: CANONICAL },
  openGraph: {
    type: "website",
    url: CANONICAL,
    siteName: "Karvaahh",
    title: seo.title,
    description: seo.description,
    locale: "en_IN",
    images: [{ url: seo.ogImage, width: images.hero.width, height: images.hero.height, alt: images.hero.alt }],
  },
  twitter: { card: "summary_large_image", title: seo.title, description: seo.description, images: [seo.ogImage] },
  robots: { index: true, follow: true },
};

export default function Page() {
  return <LangtangPage />;
}
