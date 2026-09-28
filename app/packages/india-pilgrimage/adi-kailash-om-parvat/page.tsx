import type { Metadata } from "next";
import { AdiKailashOmParvatPage } from "@/components/packages/india-pilgrimage/adi-kailash-om-parvat/AdiKailashOmParvatPage";
import { seo } from "@/data/india-pilgrimage/adi-kailash-om-parvat/page";
import { site } from "@/data/india-pilgrimage/adi-kailash-om-parvat/site";

const ogImageUrl = `${site.url}${seo.ogImage.src}`;

export const metadata: Metadata = {
  // `absolute` stops a root-layout title template (e.g. "%s | Karvaahh")
  // from appending the brand a second time.
  title: { absolute: seo.title },
  description: seo.description,
  keywords: seo.keywords,
  alternates: { canonical: seo.canonical },
  openGraph: {
    type: "website",
    url: seo.canonical,
    siteName: site.name,
    locale: site.locale,
    title: seo.title,
    description: seo.description,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: seo.ogImage.alt }],
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
    images: [ogImageUrl],
  },
};

export default function Page() {
  return <AdiKailashOmParvatPage />;
}
