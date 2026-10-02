import type { Metadata } from "next";
import PanchPokhariPage from "@/components/destinations/panch-pokhari/PanchPokhariPage";
import { faqs } from "@/data/panch-pokhari/faqs";

const SITE_URL = "https://karvaahh.in";
const PAGE_PATH = "/offbeat-unexplored/panch-pokhari";
const CANONICAL_URL = `${SITE_URL}${PAGE_PATH}`;
const OG_IMAGE = `${SITE_URL}/images/destinations/panch-pokhari/og/panch-pokhari-og.jpg`;

export const metadata: Metadata = {
  title: "Panch Pokhari Trek & Sacred Lakes | Karvaahh Tours & Travels",
  description:
    "Discover Panch Pokhari in Sindhupalchok, Nepal. Explore five sacred alpine lakes, Himalayan trekking trails, spiritual heritage, and breathtaking Jugal Himal views with Karvaahh.",
  keywords: [
    "Panch Pokhari Trek",
    "Panch Pokhari Nepal",
    "Panch Pokhari Lakes",
    "Panch Pokhari Trekking",
    "Panch Pokhari Janai Purnima",
    "Panch Pokhari Trek from Kathmandu",
    "Sindhupalchok Trekking",
    "Sacred Lakes of Nepal",
    "Jugal Himal Trekking",
  ],
  alternates: {
    canonical: CANONICAL_URL,
  },
  openGraph: {
    title: "Panch Pokhari Trek & Sacred Lakes | Karvaahh Tours & Travels",
    description:
      "Five sacred alpine lakes, Himalayan trekking trails, and spiritual heritage in Sindhupalchok, Nepal — explore Panch Pokhari with Karvaahh.",
    url: CANONICAL_URL,
    siteName: "Karvaahh – Live to Travel",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "The five sacred alpine lakes of Panch Pokhari surrounded by the Himalayas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Panch Pokhari Trek & Sacred Lakes | Karvaahh Tours & Travels",
    description:
      "Discover Panch Pokhari's five sacred alpine lakes, Himalayan trekking trails, and spiritual heritage in Sindhupalchok, Nepal.",
    images: [OG_IMAGE],
  },
};

function BreadcrumbJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: "Offbeat & Unexplored",
        item: `${SITE_URL}/offbeat-unexplored`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Panch Pokhari",
        item: CANONICAL_URL,
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

function TouristAttractionJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "TouristAttraction",
    name: "Panch Pokhari",
    description:
      "Panch Pokhari is a sacred Himalayan destination in Sindhupalchok, Bagmati Province, Nepal, renowned for its five pristine alpine lakes, breathtaking mountain panoramas, and spiritual significance within Langtang National Park.",
    url: CANONICAL_URL,
    image: OG_IMAGE,
    address: {
      "@type": "PostalAddress",
      addressRegion: "Bagmati Province",
      addressLocality: "Sindhupalchok",
      addressCountry: "NP",
    },
    isAccessibleForFree: true,
    touristType: [
      "Trekkers",
      "Pilgrims",
      "Nature photographers",
      "Offbeat and adventure travelers",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

function FaqJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
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
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function Page() {
  return (
    <>
      <BreadcrumbJsonLd />
      <TouristAttractionJsonLd />
      <FaqJsonLd />
      <PanchPokhariPage />
    </>
  );
}
