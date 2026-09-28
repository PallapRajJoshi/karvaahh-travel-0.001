import type { Metadata } from "next";
import BoatingPage from "@/components/activities/adventure/boating/BoatingPage";
import { boatingDestinations } from "@/data/activities/boatingData";

const SITE = "https://karvaahh.in";
const PATH = "/activities/adventure/boating";

export const metadata: Metadata = {
  title: "Boating & Canoeing in Nepal | Lakes, Rivers & Wildlife | Karvaahh",
  description:
    "Explore boating and canoeing in Nepal from Phewa and Rara lakes to Chitwan, Koshi Tappu and Bardiya. Compare destinations, experiences and indicative prices.",
  keywords: [
    "boating Nepal",
    "boating Pokhara",
    "Phewa Lake boating",
    "Rara Lake boating",
    "Nepal canoeing",
    "Chitwan canoeing",
    "Koshi Tappu boat safari",
    "Bardiya dolphin boat",
    "Nepal lakes",
    "boating activities Nepal",
  ],
  alternates: { canonical: PATH },
  openGraph: {
    type: "website",
    url: `${SITE}${PATH}`,
    siteName: "Karvaahh Tours & Travels",
    title: "Boating & Canoeing in Nepal | Lakes, Rivers & Wildlife",
    description:
      "Fifteen lake, river, reservoir and wetland boating destinations across Nepal, with indicative prices.",
    images: [
      {
        url: `${SITE}/images/activities/boating/nepal-lake-boating.jpg`,
        width: 1600,
        height: 900,
        alt: "Boats on a still Himalayan lake in Nepal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Boating & Canoeing in Nepal | Karvaahh",
    description:
      "Lakes, wildlife rivers and reservoirs across Nepal, compared in one place.",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${SITE}${PATH}#webpage`,
      url: `${SITE}${PATH}`,
      name: "Boating & Canoeing in Nepal",
      description:
        "A guide to boating, canoeing and wildlife boat experiences on Nepal's lakes, rivers, reservoirs and wetlands.",
      inLanguage: "en",
      isPartOf: { "@id": `${SITE}#website` },
      primaryImageOfPage: `${SITE}/images/activities/boating/nepal-lake-boating.jpg`,
    },
    {
      "@type": "ItemList",
      "@id": `${SITE}${PATH}#destinations`,
      name: "Boating destinations in Nepal",
      numberOfItems: boatingDestinations.length,
      itemListElement: boatingDestinations.map((d, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "TouristAttraction",
          name: d.name,
          description: d.experience,
          address: {
            "@type": "PostalAddress",
            addressRegion: d.province,
            addressLocality: d.district,
            addressCountry: "NP",
          },
        },
      })),
    },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <BoatingPage />
    </>
  );
}
