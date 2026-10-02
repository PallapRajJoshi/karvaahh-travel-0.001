import type { Metadata } from "next";
import SaipalBaseCampPage from "@/components/offbeat/saipal-base-camp/SaipalBaseCampPage";
import { faqItems } from "@/data/faq";

const PAGE_URL = "https://karvaahh.in/offbeat-unexplored/saipal-base-camp";

export const metadata: Metadata = {
  title: "Saipal Base Camp Trek | Remote Himalayan Adventure in Nepal | Karvaahh",
  description:
    "Explore Saipal Base Camp in Bajhang, Nepal, with breathtaking views of Mount Saipal, remote Himalayan trekking, alpine wilderness, and customized expedition experiences with Karvaahh.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Saipal Base Camp Trek | Remote Himalayan Adventure in Nepal",
    description:
      "Explore Saipal Base Camp in Bajhang, Nepal — remote Himalayan trekking, alpine wilderness, and customized expeditions with Karvaahh.",
    url: PAGE_URL,
    siteName: "Karvaahh",
    type: "website",
    images: [
      {
        // NOTE: replace with a verified Saipal-region Open Graph image before launch.
        url: "/images/offbeat-unexplored/saipal-base-camp/og-saipal-base-camp.jpg",
        width: 1200,
        height: 630,
        alt: "Mount Saipal and the remote Himalayan wilderness of Bajhang, Nepal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Saipal Base Camp Trek | Remote Himalayan Adventure in Nepal",
    description:
      "Remote Himalayan trekking, alpine wilderness, and customized expeditions to Saipal Base Camp with Karvaahh.",
  },
};

function BreadcrumbJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://karvaahh.in/" },
      {
        "@type": "ListItem",
        position: 2,
        name: "Offbeat & Unexplored",
        item: "https://karvaahh.in/offbeat-unexplored",
      },
      { "@type": "ListItem", position: 3, name: "Saipal Base Camp", item: PAGE_URL },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

function FaqJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export default function Page() {
  return (
    <>
      <BreadcrumbJsonLd />
      <FaqJsonLd />
      <SaipalBaseCampPage />
    </>
  );
}
