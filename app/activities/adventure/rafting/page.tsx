import type { Metadata } from "next";
import RaftingPage from "@/components/activities/adventure/rafting/RaftingPage";
import { raftingRivers } from "@/data/activities/raftingData";

const SITE = "https://karvaahh.in";
const PATH = "/activities/adventure/rafting";

export const metadata: Metadata = {
  title:
    "White-Water Rafting in Nepal | Rivers, Grades & Expeditions | Karvaahh",
  description:
    "Explore white-water rafting in Nepal from Trishuli day trips to Grade V Sun Koshi, Tamur and Karnali expeditions. Compare rivers, grades, seasons, routes and indicative prices.",
  keywords: [
    "rafting Nepal",
    "white water rafting Nepal",
    "Trishuli rafting",
    "Bhote Koshi rafting",
    "Sun Koshi rafting",
    "Karnali rafting",
    "Marsyangdi rafting",
    "Nepal river rafting",
    "rafting Pokhara",
    "rafting Kathmandu",
  ],
  alternates: { canonical: PATH },
  openGraph: {
    type: "website",
    url: `${SITE}${PATH}`,
    siteName: "Karvaahh Tours & Travels",
    title: "White-Water Rafting in Nepal | Rivers, Grades & Expeditions",
    description:
      "Fourteen commercial rafting rivers compared by grade, days, route, season and indicative price — from one-day Trishuli runs to Grade V wilderness expeditions.",
    images: [
      {
        url: `${SITE}/images/activities/rafting/nepal-white-water-rafting.jpg`,
        width: 1600,
        height: 900,
        alt: "White-water rafting on a Himalayan river in Nepal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "White-Water Rafting in Nepal | Karvaahh",
    description:
      "Compare Nepal's commercial rafting rivers by grade, days, route and season.",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${SITE}${PATH}#webpage`,
      url: `${SITE}${PATH}`,
      name: "White-Water Rafting in Nepal",
      description:
        "A guide to Nepal's commercial white-water rafting rivers, their grades, routes, seasons and indicative prices.",
      inLanguage: "en",
      isPartOf: { "@id": `${SITE}#website` },
      primaryImageOfPage: `${SITE}/images/activities/rafting/nepal-white-water-rafting.jpg`,
    },
    {
      "@type": "ItemList",
      "@id": `${SITE}${PATH}#rivers`,
      name: "Commercial rafting rivers in Nepal",
      numberOfItems: raftingRivers.length,
      itemListElement: raftingRivers.map((river, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "TouristAttraction",
          name: `${river.name} river rafting`,
          description: river.distinctive,
          touristType: river.levels.join(", "),
          address: {
            "@type": "PostalAddress",
            addressRegion: river.provinces[0],
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
      <RaftingPage />
    </>
  );
}
