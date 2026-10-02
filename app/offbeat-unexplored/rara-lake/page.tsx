import type { Metadata } from "next";
import RaraLakeAssembly from "@/components/destinations/rara-lake/RaraLakeAssembly";
import { faqItems } from "@/data/destinations/rara-lake/faq";

/**
 * NOTE on base URL / canonical convention:
 * This assumes `metadataBase` is set once in the root layout (per project
 * convention noted in README) and that canonical URLs elsewhere in the app
 * are relative. If the project instead builds absolute canonical URLs
 * per-page, replace the `alternates.canonical` value below accordingly.
 */

const PAGE_PATH = "/offbeat-unexplored/rara-lake";
const PAGE_TITLE = "Rara Lake Nepal – Travel Guide, Attractions & Tour Packages | Karvaahh";
const PAGE_DESCRIPTION =
  "Discover Rara Lake in Nepal's remote Karnali region. Explore Murma Top, scenic lake trails, Rara National Park, cultural experiences, travel routes, and customizable Rara Lake tours.";
const OG_IMAGE = "/images/destinations/rara-lake/hero-rara-lake.jpg";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: PAGE_PATH,
  },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: PAGE_PATH,
    siteName: "Karvaahh",
    type: "website",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Turquoise waters of Rara Lake framed by pine forest and Himalayan peaks",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: [OG_IMAGE],
  },
};

function TouristAttractionJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "TouristAttraction",
    name: "Rara Lake",
    description: PAGE_DESCRIPTION,
    url: PAGE_PATH,
    image: OG_IMAGE,
    address: {
      "@type": "PostalAddress",
      addressRegion: "Karnali Province",
      addressCountry: "NP",
    },
    geo: {
      "@type": "GeoCoordinates",
      // Approximate published coordinates for Rara Lake — verify precise
      // coordinates before relying on this for mapping features.
      latitude: 29.5333,
      longitude: 82.0833,
    },
    isAccessibleForFree: false,
    touristType: ["Nature travelers", "Trekkers", "Photographers", "Offbeat travelers"],
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

function FaqJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

function BreadcrumbJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "/" },
      { "@type": "ListItem", position: 2, name: "Offbeat & Unexplored", item: "/offbeat-unexplored" },
      { "@type": "ListItem", position: 3, name: "Rara Lake", item: PAGE_PATH },
    ],
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function RaraLakePage() {
  return (
    <>
      <TouristAttractionJsonLd />
      <FaqJsonLd />
      <BreadcrumbJsonLd />
      <RaraLakeAssembly />
    </>
  );
}
