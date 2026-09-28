import type { Metadata } from "next";
import CampingPage from "@/components/activities/adventure/camping/CampingPage";
import { campingFaqs, PAGE_URL } from "@/data/campingContent";
import { campingImages } from "@/data/campingImages";

const TITLE = "Camping in Nepal | Himalayan Camping & Adventure | Karvaahh";
const DESCRIPTION =
  "Discover the best camping destinations in Nepal, from Nagarkot and Pokhara to Everest, Annapurna, Mustang, Rara, Langtang, Manaslu and remote Himalayan wilderness.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    siteName: "Karvaahh Tours & Travels",
    title: TITLE,
    description: DESCRIPTION,
    locale: "en_IN",
    images: [{ url: campingImages.og, width: 1200, height: 630, alt: "Tents beneath the Himalaya at dusk — camping in Nepal with Karvaahh" }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [campingImages.og],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: TITLE,
      description: DESCRIPTION,
      inLanguage: "en",
      isPartOf: { "@type": "WebSite", name: "Karvaahh Tours & Travels", url: "https://karvaahh.in" },
      about: { "@type": "Country", name: "Nepal" },
      breadcrumb: { "@id": `${PAGE_URL}#breadcrumb` },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${PAGE_URL}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://karvaahh.in" },
        { "@type": "ListItem", position: 2, name: "Activities", item: "https://karvaahh.in/activities" },
        { "@type": "ListItem", position: 3, name: "Adventure", item: "https://karvaahh.in/activities/adventure" },
        { "@type": "ListItem", position: 4, name: "Camping in Nepal", item: PAGE_URL },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${PAGE_URL}#faq`,
      mainEntity: campingFaqs.map((f) => ({
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
      <CampingPage />
    </>
  );
}
