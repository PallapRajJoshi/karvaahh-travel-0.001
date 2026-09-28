import type { Metadata } from "next";
import ParaglidingHome from "@/components/activities/adventure/paragliding/ParaglidingPage";
import { paraglidingFaqs } from "@/data/activities/paragliding/faq";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const url = "https://karvaahh.in/activities/adventure/paragliding";
const description =
  "Experience tandem paragliding in Pokhara with breathtaking views of the Annapurna range, Machhapuchhre, Phewa Lake and the Himalayan landscape.";

export const metadata: Metadata = {
  title: "Paragliding in Pokhara, Nepal | Himalayan Adventure Experience",
  description,
  alternates: {
    canonical: url,
  },
  openGraph: {
    title: "Paragliding in Pokhara, Nepal | Himalayan Adventure Experience",
    description,
    url,
    siteName: "Karvaahh",
    locale: "en_US",
    type: "article",
    images: [
      {
        url: "/images/activities/paragliding/hero-paraglider-annapurna.jpg",
        width: 1600,
        height: 900,
        alt: "A tandem paraglider above the Pokhara valley with the Annapurna range behind",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Paragliding in Pokhara, Nepal | Himalayan Adventure Experience",
    description,
    images: ["/images/activities/paragliding/hero-paraglider-annapurna.jpg"],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: paraglidingFaqs.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://karvaahh.in/" },
    {
      "@type": "ListItem",
      position: 2,
      name: "Activities",
      item: "https://karvaahh.in/activities",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Adventure",
      item: "https://karvaahh.in/activities/adventure",
    },
    { "@type": "ListItem", position: 4, name: "Paragliding", item: url },
  ],
};

export default function ParaglidingPage() {
  return (
    <>
    
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navbar />
      <ParaglidingHome />
      <Footer />
    </>
  );
}
