import type { Metadata } from "next";
import NepalFlightsPage from "@/components/activities/domestic-flights/nepal/NepalFlightsPage";
import { routes } from "@/data/domestic-flights/nepal-domestic-flights";

const SITE = "https://karvaahh.in";
const PATH = "/activities/domestic-flights/domestic-nepal-flights";
const OG_IMAGE = `${SITE}/images/home/annapurna-view.jpg`;
const DESCRIPTION =
  "Explore Nepal domestic flight routes, airlines, airport codes, approximate distances, mountain airports, fares, and booking guidance with Karvaahh.";

export const metadata: Metadata = {
  title: { absolute: "Nepal Domestic Flights & Routes | Karvaahh" },
  description: DESCRIPTION,
  keywords: [
    "Nepal domestic flights",
    "Nepal flight routes",
    "Kathmandu to Pokhara flight",
    "Kathmandu to Lukla flight",
    "Ramechhap Lukla flight",
    "Pokhara to Jomsom flight",
    "Nepalgunj to Simikot flight",
    "Buddha Air routes",
    "Yeti Airlines routes",
    "Nepal mountain airports",
    "Nepal airport codes",
  ],
  alternates: { canonical: PATH },
  openGraph: {
    type: "website",
    url: `${SITE}${PATH}`,
    siteName: "Karvaahh Tours & Travels",
    title: "Nepal Domestic Flights & Routes",
    description: DESCRIPTION,
    images: [
      {
        url: OG_IMAGE,
        alt: "The Annapurna range and Machhapuchhre rising above the Pokhara valley at sunrise",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nepal Domestic Flights & Routes | Karvaahh",
    description: "Routes, airlines, airport codes, mountain airstrips and booking guidance for flying within Nepal.",
  },
};

/* One Airport entity per code that appears in the directory. */
const airports = Array.from(
  new Map(
    routes
      .flatMap((r) => [r.from, r.to])
      .filter((a) => /^[A-Z]{3}$/.test(a.code))
      .map((a) => [a.code, a] as const),
  ).values(),
);

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${SITE}${PATH}#webpage`,
      url: `${SITE}${PATH}`,
      name: "Nepal Domestic Flights & Routes",
      description: DESCRIPTION,
      inLanguage: "en",
      isPartOf: { "@id": `${SITE}#website` },
      primaryImageOfPage: OG_IMAGE,
    },
    {
      "@type": "ItemList",
      "@id": `${SITE}${PATH}#airports`,
      name: "Airports with domestic flights in Nepal",
      numberOfItems: airports.length,
      itemListElement: airports.map((a, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Airport",
          name: `${a.city} Airport`,
          iataCode: a.code,
          address: { "@type": "PostalAddress", addressLocality: a.city, addressCountry: "NP" },
        },
      })),
    },
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <NepalFlightsPage />
    </>
  );
}
