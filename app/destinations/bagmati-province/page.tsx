import type { Metadata } from "next";
import BagmatiHome from "@/components/home/bagmati/BagmatiHome";
import { bagmatiFaqs } from "@/data/bagmati/faqs";

const SITE = "https://karvaahh.in";
const PATH = "/destinations/bagmati-province";
const DESCRIPTION =
  "Explore Bagmati Province, Nepal — Kathmandu Valley UNESCO heritage, Pashupatinath and Boudhanath, Langtang and Gosaikunda treks, Chitwan wildlife, travel routes and India–Nepal border access.";

export const metadata: Metadata = {
  title: "Bagmati Province Tourism | Karvaahh",
  description: DESCRIPTION,
  keywords: [
    "Bagmati Province",
    "Bagmati Province tourism",
    "Kathmandu Valley tour",
    "Pashupatinath",
    "Boudhanath",
    "Swayambhunath",
    "Patan Bhaktapur",
    "Langtang trek",
    "Gosaikunda",
    "Chitwan National Park",
    "Kathmandu from India",
  ],
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    type: "website",
    url: `${SITE}${PATH}`,
    siteName: "Karvaahh Tours & Travels",
    title: "Bagmati Province — Kathmandu Valley Heritage, Himalayan Treks & Wildlife",
    description: DESCRIPTION,
    images: [
      {
        url: `${SITE}/images/bagmati/bagmati-province-kathmandu-valley-heritage-himalayan-mountains.jpg`,
        alt: "Kathmandu Valley heritage architecture against a Himalayan backdrop",
      },
    ],
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: bagmatiFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE },
      { "@type": "ListItem", position: 2, name: "Destinations", item: `${SITE}/destinations` },
      { "@type": "ListItem", position: 3, name: "Bagmati Province", item: `${SITE}${PATH}` },
    ],
  },
];

export default function BagmatiProvincePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <BagmatiHome />
    </>
  );
}
