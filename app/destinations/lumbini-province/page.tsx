import type { Metadata } from "next";
import LumbiniHome from "@/components/home/lumbini/LumbiniHome";
import { lumbiniFaqs } from "@/data/lumbini/faqs";

const SITE = "https://karvaahh.in";
const PATH = "/destinations/lumbini-province";
const DESCRIPTION =
  "Discover Lumbini Province — birthplace of Buddha, ancient Kapilvastu and Tilaurakot, Tansen and Rani Mahal, Bardiya wildlife, Tharu culture, travel routes and India–Nepal border access.";

export const metadata: Metadata = {
  title: "Lumbini Province Tourism | Karvaahh",
  description: DESCRIPTION,
  keywords: [
    "Lumbini Province",
    "Lumbini tourism",
    "birthplace of Buddha",
    "Kapilvastu",
    "Tilaurakot",
    "Tansen Palpa",
    "Rani Mahal",
    "Bardiya National Park",
    "Swargadwari",
    "Lumbini from India",
  ],
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    type: "website",
    url: `${SITE}${PATH}`,
    siteName: "Karvaahh Tours & Travels",
    title: "Lumbini Province — Spiritual Heritage, Ancient History & Wildlife",
    description: DESCRIPTION,
    images: [
      {
        url: `${SITE}/images/lumbini/lumbini-sacred-garden-maya-devi-temple-nepal.jpg`,
        alt: "Sunrise over the Sacred Garden of Lumbini",
      },
    ],
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: lumbiniFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

export default function LumbiniProvincePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c") }}
      />
      <LumbiniHome />
    </>
  );
}
