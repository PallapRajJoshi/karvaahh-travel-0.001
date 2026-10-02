import type { Metadata } from "next";
import TshoRolpaPage from "@/components/destinations/tsho-rolpa/TshoRolpaPage";
import { faqs } from "@/data/tsho-rolpa/faqs";

/**
 * ASSUMPTION (flag in README): canonical/OG base URL below uses
 * https://karvaahh.in per the brief's stated website. If the live
 * project defines a shared `metadataBase` at the root layout, this
 * page-level `metadataBase` is redundant and can be removed — keeping
 * it here as a safe default in case that's not yet wired up (see
 * audit finding: "canonical misconfiguration" in Karvaahh overview notes).
 */
const PAGE_URL = "https://karvaahh.in/offbeat-unexplored/tsho-rolpa-lake";
const OG_IMAGE = "https://karvaahh.in/images/tsho-rolpa/og/tsho-rolpa-og.jpg";

export const metadata: Metadata = {
  metadataBase: new URL("https://karvaahh.in"),
  title: "Tsho Rolpa Lake Nepal – Rolwaling Valley Trek & Tour Packages | Karvaahh",
  description:
    "Explore Tsho Rolpa Lake in Nepal's Rolwaling Valley. Discover turquoise glacial waters, Sherpa villages, Himalayan trekking, Tashi Lapcha Pass, and customizable Rolwaling adventure packages.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Tsho Rolpa Lake – Nepal's Remote Himalayan Glacial Paradise",
    description:
      "Turquoise glacial waters, Sherpa villages, and high-altitude trekking in Nepal's remote Rolwaling Valley.",
    url: PAGE_URL,
    siteName: "Karvaahh",
    type: "website",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Tsho Rolpa Lake, Rolwaling Valley, Nepal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tsho Rolpa Lake – Nepal's Remote Himalayan Glacial Paradise",
    description:
      "Turquoise glacial waters, Sherpa villages, and high-altitude trekking in Nepal's remote Rolwaling Valley.",
    images: [OG_IMAGE],
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://karvaahh.in/" },
    {
      "@type": "ListItem",
      position: 2,
      name: "Offbeat & Unexplored",
      item: "https://karvaahh.in/offbeat-unexplored",
    },
    { "@type": "ListItem", position: 3, name: "Tsho Rolpa Lake", item: PAGE_URL },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

const touristDestinationJsonLd = {
  "@context": "https://schema.org",
  "@type": "TouristAttraction",
  name: "Tsho Rolpa Lake",
  description:
    "Tsho Rolpa Lake is one of Nepal's largest glacial lakes, located in the Rolwaling Valley of Dolakha district, Bagmati Province, at approximately 4,580 meters.",
  url: PAGE_URL,
  image: OG_IMAGE,
  address: {
    "@type": "PostalAddress",
    addressRegion: "Bagmati Province",
    addressCountry: "NP",
  },
};

export default function Page() {
  return (
    <>
      {/* eslint-disable-next-line react/no-danger */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {/* eslint-disable-next-line react/no-danger */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {/* eslint-disable-next-line react/no-danger */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(touristDestinationJsonLd) }}
      />
      <TshoRolpaPage />
    </>
  );
}
