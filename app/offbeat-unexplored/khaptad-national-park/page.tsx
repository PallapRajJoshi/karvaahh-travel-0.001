import type { Metadata } from "next";
import KhaptadPage from "@/components/destinations/khaptad/KhaptadPage";
import { khaptadFaqs } from "@/data/destinations/khaptad/khaptad-faq";

/**
 * NOTE on `metadataBase`: this route assumes a `metadataBase` is already set
 * in the root layout (e.g. new URL("https://karvaahh.in")), matching the
 * project's existing convention. Canonical and OG URLs below are relative
 * and will resolve against it. Flagged in the README as an assumption.
 */

const PAGE_PATH = "/offbeat-unexplored/khaptad-national-park";
const PAGE_TITLE = "Khaptad National Park Nepal – Travel Guide, Trekking & Tour Packages | Karvaahh";
const PAGE_DESCRIPTION =
  "Explore Khaptad National Park in far-western Nepal. Discover alpine meadows, Khaptad Baba Ashram, sacred landmarks, wildlife, forest trails, and customizable Khaptad tour packages.";

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
        url: "/images/destinations/khaptad/hero/khaptad-meadows-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Khaptad National Park meadows and Himalayan landscape",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: ["/images/destinations/khaptad/hero/khaptad-meadows-hero.jpg"],
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "/" },
    { "@type": "ListItem", position: 2, name: "Offbeat & Unexplored", item: "/offbeat-unexplored" },
    { "@type": "ListItem", position: 3, name: "Khaptad National Park", item: PAGE_PATH },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: khaptadFaqs.map((faq) => ({
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
  "@type": "TouristDestination",
  name: "Khaptad National Park",
  description: PAGE_DESCRIPTION,
  url: PAGE_PATH,
  containedInPlace: {
    "@type": "AdministrativeArea",
    name: "Bajhang, Bajura, Doti & Achham Districts, Far-Western Nepal",
  },
};

export default function KhaptadNationalParkRoute() {
  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(touristDestinationJsonLd) }}
      />
      <KhaptadPage />
    </>
  );
}
