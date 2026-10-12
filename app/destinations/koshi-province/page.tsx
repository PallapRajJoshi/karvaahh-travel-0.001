import type { Metadata } from "next";
import KoshiHome from "@/components/home/koshi/KoshiHome";
import { koshiFaqs } from "@/data/koshi/faqs";

const SITE = "https://karvaahh.in";
const PATH = "/destinations/koshi-province";
const DESCRIPTION =
  "Explore Koshi Province, eastern Nepal — Mount Everest and Everest Base Camp, Kanchenjunga, Ilam tea gardens, Pathibhara, Halesi Mahadev, Koshi Tappu wildlife, travel circuits, best time to visit and how to reach Biratnagar.";

export const metadata: Metadata = {
  // `absolute` stops the root layout's title template from appending a second brand.
  title: { absolute: "Koshi Province Tourism | Everest, Ilam & Eastern Nepal | Karvaahh" },
  description: DESCRIPTION,
  keywords: [
    "Koshi Province",
    "Koshi Province tourism",
    "eastern Nepal travel",
    "Everest Base Camp",
    "Ilam tea gardens",
    "Antu Danda",
    "Pathibhara Devi Temple",
    "Halesi Mahadev",
    "Koshi Tappu Wildlife Reserve",
    "Kanchenjunga trek",
    "Biratnagar",
  ],
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    type: "website",
    url: `${SITE}${PATH}`,
    siteName: "Karvaahh Tours & Travels",
    title: "Koshi Province — Everest, Tea Hills, Pilgrimage & Wildlife of Eastern Nepal",
    description: DESCRIPTION,
    images: [
      {
        url: `${SITE}/koshi/everest-base-camp.jpg`,
        alt: "Mount Everest, Nuptse and the Khumbu Glacier at dawn",
      },
    ],
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: koshiFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

export default function KoshiProvincePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c") }}
      />
      <KoshiHome />
    </>
  );
}
