import type { Metadata } from "next";
import MadheshHome from "@/components/home/madhesh/MadheshHome";
import { madheshFaqs } from "@/data/madhesh/faqs";

const SITE = "https://karvaahh.in";
const PATH = "/destinations/madhesh-province";
const DESCRIPTION =
  "Discover Madhesh Province — Janakpurdham and Ramayana heritage, Janaki Mandir, Mithila painting, Simraungadh, Jaleshwar, Gadhimai, Parsa National Park, festivals, travel routes and India–Nepal border access.";

export const metadata: Metadata = {
  title: { absolute: "Madhesh Province Tourism | Karvaahh" },
  description: DESCRIPTION,
  keywords: [
    "Madhesh Province",
    "Madhesh tourism",
    "Janakpurdham",
    "Janaki Mandir",
    "Mithila painting",
    "Simraungadh",
    "Parsa National Park",
    "Vivaha Panchami",
    "Chhath",
    "Janakpur from India",
  ],
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    type: "website",
    url: `${SITE}${PATH}`,
    siteName: "Karvaahh Tours & Travels",
    title: "Madhesh Province — Ramayana Heritage, Mithila Culture & Terai Wildlife",
    description: DESCRIPTION,
    images: [
      {
        url: `${SITE}/images/madhesh/janaki-temple.jpg`,
        alt: "Janaki Mandir in Janakpurdham, Madhesh Province",
      },
    ],
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: madheshFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

export default function MadheshProvincePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c") }}
      />
      <MadheshHome />
    </>
  );
}
