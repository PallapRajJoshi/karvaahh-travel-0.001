import type { Metadata } from "next";
import TsumValleyPage from "@/components/activities/adventure/tsum-valley-trek/TsumValleyPage";
import { PAGE, HERO } from "@/data/destinations/tsum-valley/content";

const canonical = `${PAGE.siteUrl}${PAGE.path}`;
const ogImage = `${PAGE.siteUrl}${PAGE.ogImage}`;

export const metadata: Metadata = {
  title: { absolute: PAGE.seoTitle },
  description: PAGE.metaDescription,
  alternates: { canonical },
  openGraph: {
    type: "website",
    url: canonical,
    siteName: "Karvaahh",
    title: PAGE.seoTitle,
    description: PAGE.metaDescription,
    locale: "en_IN",
    images: [{ url: ogImage, width: 1200, height: 630, alt: HERO.image.alt }],
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE.seoTitle,
    description: PAGE.metaDescription,
    images: [ogImage],
  },
  robots: { index: true, follow: true },
};

export default function Page() {
  return <TsumValleyPage />;
}
