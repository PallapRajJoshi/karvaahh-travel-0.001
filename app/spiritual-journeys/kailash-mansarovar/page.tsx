import type { Metadata } from "next";
import KailashMansarovarPage from "@/components/spiritual-journeys/kailash-mansarovar/KailashMansarovarPage";
import { IMAGES } from "@/components/spiritual-journeys/kailash-mansarovar/data/images";
import {
  BRAND_NAME,
  IMAGE_BASE,
  PAGE_URL,
  SITE_URL,
} from "@/components/spiritual-journeys/kailash-mansarovar/lib/site";
import {
  buildStructuredData,
  serializeJsonLd,
} from "@/components/spiritual-journeys/kailash-mansarovar/lib/structured-data";

const TITLE = "Kailash Mansarovar Yatra from Nepal: Routes & Kora Guide | Karvaahh";
const SOCIAL_TITLE = "Kailash Mansarovar Yatra from Nepal";
const DESCRIPTION =
  "Plan your Kailash Mansarovar Yatra from Nepal: Mount Kailash, Lake Mansarovar, the Kora over Dolma La, overland and helicopter routes, altitude and packing.";
const OG_IMAGE = `${SITE_URL}${IMAGE_BASE}/${IMAGES.og.file}`;

export const metadata: Metadata = {
  // absolute: avoids double branding if the root layout sets a title template
  title: { absolute: TITLE },
  description: DESCRIPTION,
  // Absolute canonical on purpose (see audit: canonical misconfiguration)
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    siteName: BRAND_NAME,
    locale: "en_IN",
    title: SOCIAL_TITLE,
    description: DESCRIPTION,
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: IMAGES.og.alt }],
  },
  twitter: {
    card: "summary_large_image",
    title: SOCIAL_TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGE],
  },
  robots: { index: true, follow: true },
};

export default function Page() {
  const structuredData = buildStructuredData(DESCRIPTION);

  return (
    <>
      {structuredData.map((data, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serializeJsonLd(data) }}
        />
      ))}
      <KailashMansarovarPage />
    </>
  );
}
