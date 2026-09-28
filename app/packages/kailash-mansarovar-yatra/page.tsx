import type { Metadata } from "next";
import KailashMansarovarPage from "@/components/packages/kailash-mansarovar-yatra/KailashMansarovarPage";
import { pageUrl, seo, site } from "@/components/packages/kailash-mansarovar-yatra/config";
import {
  breadcrumbJsonLd,
  faqJsonLd,
  tripJsonLd,
} from "@/components/packages/kailash-mansarovar-yatra/structured-data";

export const metadata: Metadata = {
  title: { absolute: seo.title },
  description: seo.description,
  keywords: [...seo.keywords],
  alternates: { canonical: pageUrl },
  openGraph: {
    type: "website",
    url: pageUrl,
    siteName: site.name,
    title: seo.title,
    description: seo.description,
    locale: "en_IN",
    images: [{ ...seo.ogImage, url: `${site.url}${seo.ogImage.url}` }],
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
    images: [`${site.url}${seo.ogImage.url}`],
  },
  robots: { index: true, follow: true },
};

/** Fully static — no request-time data. */
export const dynamic = "force-static";

const jsonLd = [breadcrumbJsonLd(), tripJsonLd(), faqJsonLd()].filter(Boolean);

export default function Page() {
  return (
    <>
      {jsonLd.map((data, i) => (
        <script
          key={i}
          type="application/ld+json"
          // JSON.stringify output with "<" escaped — safe to inline.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
        />
      ))}
      <KailashMansarovarPage />
    </>
  );
}
