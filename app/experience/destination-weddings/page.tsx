import type { Metadata } from "next";
import DestinationWeddingsPage from "@/components/experience/destination-weddings/DestinationWeddingsPage";
import { PAGE_PATH } from "@/components/experience/destination-weddings/data/config";
import { weddingDestinations } from "@/components/experience/destination-weddings/data/destinations";
import { faqs } from "@/components/experience/destination-weddings/data/proposal";

const title = "Destination Weddings in Nepal, India & International | Karvaahh";
const description =
  "Plan unforgettable destination weddings in Nepal, Uttarakhand, India and international destinations with Karvaahh. From venue and guest travel to wedding experiences, hospitality and honeymoon extensions.";

/* Relative URLs resolve against `metadataBase` set in the root layout. */
export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: PAGE_PATH },
  openGraph: {
    type: "website",
    url: PAGE_PATH,
    siteName: "Karvaahh Tours & Travels",
    title,
    description,
    images: [
      {
        url: "/images/experience/destination-weddings/og-destination-weddings.jpg",
        width: 1200,
        height: 630,
        alt: "Himalayan destination wedding planned by Karvaahh",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/experience/destination-weddings/og-destination-weddings.jpg"],
  },
};

const SITE = "https://karvaahh.in";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
        { "@type": "ListItem", position: 2, name: "Experiences", item: `${SITE}/experience` },
        { "@type": "ListItem", position: 3, name: "Destination Weddings", item: `${SITE}${PAGE_PATH}` },
      ],
    },
    {
      "@type": "Service",
      name: "Destination Wedding Planning",
      serviceType: "Destination wedding travel and event coordination",
      description,
      url: `${SITE}${PAGE_PATH}`,
      provider: {
        "@type": "TravelAgency",
        name: "Karvaahh Tours & Travels",
        slogan: "Live to Travel",
        url: SITE,
      },
      areaServed: ["Nepal", "India", "International"],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Destination wedding destinations",
        itemListElement: weddingDestinations
          .filter((d) => d.region !== "international")
          .map((d) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: `${d.title} — ${d.name}` },
          })),
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      })),
    },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        // Static, build-time data only — no user input reaches this string.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <DestinationWeddingsPage />
    </>
  );
}
