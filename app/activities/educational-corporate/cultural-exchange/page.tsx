import type { Metadata } from "next";
import CruiseExperiencesPage from "@/components/activities/educational-corporate/cruise-experiences/CruiseExperiencesPage";
import { IMAGE_BASE, LINKS, ROUTE_PATH } from "@/components/activities/educational-corporate/cruise-experiences/config";
import { FAQS } from "@/components/activities/educational-corporate/cruise-experiences/data/planning";

const TITLE = "Cruise Experiences | Ocean, River & Lake Cruises – Karvaahh";
const DESCRIPTION =
  "Discover unforgettable cruise experiences with Karvaahh. Explore luxury ocean cruises, river journeys, sunset sailing, Kerala backwaters, Ha Long Bay, Dubai, and scenic lake experiences in Pokhara.";

// Relative canonical resolves against `metadataBase` set in the root layout.
export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: ROUTE_PATH },
  openGraph: {
    type: "website",
    title: TITLE,
    description: DESCRIPTION,
    url: ROUTE_PATH,
    siteName: "Karvaahh – Live to Travel",
    images: [
      {
        url: `${IMAGE_BASE}/hero-cruise-golden-hour.jpg`,
        alt: "A luxury cruise ship sailing across deep blue ocean waters at golden hour",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "/" },
        { "@type": "ListItem", position: 2, name: "Activities", item: LINKS.activities },
        { "@type": "ListItem", position: 3, name: "Cruise Experiences", item: ROUTE_PATH },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: FAQS.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <CruiseExperiencesPage />
    </>
  );
}
