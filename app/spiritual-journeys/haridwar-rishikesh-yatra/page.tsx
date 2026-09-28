import type { Metadata } from "next";
import HaridwarRishikeshPage from "@/components/spiritual-journeys/haridwar-rishikesh/HaridwarRishikeshPage";
import { OG_IMAGE, PAGE_URL } from "@/components/spiritual-journeys/haridwar-rishikesh/data/config";
import {
  buildJsonLd,
  serializeJsonLd,
} from "@/components/spiritual-journeys/haridwar-rishikesh/data/structured-data";

const TITLE = "Haridwar & Rishikesh Yatra | Spiritual Pilgrimage Tour – Karvaahh";
const DESCRIPTION =
  "Explore Haridwar and Rishikesh with Karvaahh. Discover Har Ki Pauri, Ganga Aarti, sacred temples, spiritual ashrams, and customized pilgrimage tour packages.";

export const metadata: Metadata = {
  // `absolute` bypasses any root-layout title template, so the brand isn't appended twice.
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    siteName: "Karvaahh",
    locale: "en_IN",
    title: TITLE,
    description: DESCRIPTION,
    images: [
      { url: OG_IMAGE.src, width: OG_IMAGE.width, height: OG_IMAGE.height, alt: OG_IMAGE.alt },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGE.src],
  },
  robots: { index: true, follow: true },
};

export default function Page() {
  return (
    <>
      {buildJsonLd().map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serializeJsonLd(schema) }}
        />
      ))}
      <HaridwarRishikeshPage />
    </>
  );
}
