import type { Metadata } from "next";
import GandakiHome from "@/components/home/gandaki/GandakiHome";
import { gandakiFaqs } from "@/data/gandaki/faqs";

const SITE = "https://karvaahh.in";
const PATH = "/destinations/gandaki-province";
const DESCRIPTION =
  "Discover Gandaki Province — Pokhara's lakes, the Annapurna and Manaslu ranges, Muktinath, Mustang's high desert, Gurung villages, best time to visit, travel routes and Nepal's premier trekking and adventure.";

export const metadata: Metadata = {
  title: { absolute: "Gandaki Province Tourism | Mountains, Lakes & Adventure | Karvaahh" },
  description: DESCRIPTION,
  keywords: [
    "Gandaki Province",
    "Gandaki tourism",
    "Pokhara",
    "Annapurna Conservation Area",
    "Muktinath",
    "Upper Mustang",
    "Manang",
    "Ghandruk",
    "Bandipur",
    "Gorkha Durbar",
    "Manakamana",
    "Pokhara from India",
  ],
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    type: "website",
    url: `${SITE}${PATH}`,
    siteName: "Karvaahh Tours & Travels",
    title: "Gandaki Province — Himalayan Lakes, Treks, Pilgrimage & Adventure",
    description: DESCRIPTION,
    images: [
      {
        url: `${SITE}/images/gandaki/gandaki-province-phewa-lake-annapurna-mountains-nepal.jpg`,
        alt: "Machhapuchhre and the Annapurna range reflected in Phewa Lake, Pokhara",
      },
    ],
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: gandakiFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

export default function GandakiProvincePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c") }}
      />
      <GandakiHome />
    </>
  );
}
