import type { Metadata } from "next";
import { AmarnathVaishnoDeviPage } from "@/components/spiritual-journeys/amarnath-vaishno-devi/AmarnathVaishnoDeviPage";
import { PAGE_PATH } from "@/components/spiritual-journeys/amarnath-vaishno-devi/data/content";
import { IMAGES } from "@/components/spiritual-journeys/amarnath-vaishno-devi/data/images";
import { buildJsonLd } from "@/components/spiritual-journeys/amarnath-vaishno-devi/seo/structuredData";

const TITLE = "Amarnath & Vaishno Devi Yatra | Pilgrimage Tour – Karvaahh";
const DESCRIPTION =
  "Plan an Amarnath & Vaishno Devi Yatra with Karvaahh. Explore sacred Darshan, Himalayan pilgrimage routes, Katra, Pahalgam, Baltal and optional Kashmir extensions.";

export const metadata: Metadata = {
  // `absolute` so a layout-level title template can't append the brand twice.
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: PAGE_PATH },
  openGraph: {
    type: "website",
    url: PAGE_PATH,
    siteName: "Karvaahh",
    locale: "en_IN",
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: IMAGES.og.src, width: 1200, height: 630, alt: IMAGES.og.alt }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [IMAGES.og.src],
  },
};

export default function Page() {
  const jsonLd = buildJsonLd();
  return (
    <>
      <script
        type="application/ld+json"
        // Static, server-built data only; `<` escaped so content can never break out of the script tag.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <AmarnathVaishnoDeviPage />
    </>
  );
}
