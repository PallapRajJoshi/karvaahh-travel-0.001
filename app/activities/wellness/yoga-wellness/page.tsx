import type { Metadata } from "next";
import YogaWellnessPage from "@/components/activities/wellness/yoga-wellness/YogaWellnessPage";
import { faqs } from "@/components/activities/wellness/yoga-wellness/data/gallery-faq";
import {
  PAGE_PATH,
  USE_IMAGE_PLACEHOLDERS,
} from "@/components/activities/wellness/yoga-wellness/data/config";

const TITLE = "Yoga & Wellness Retreats in Nepal & India | Karvaahh";
const DESCRIPTION =
  "Discover yoga and wellness retreats with Karvaahh. Explore meditation, nature wellness, Ayurveda-inspired experiences, and peaceful Himalayan escapes in Nepal and India.";
const OG_IMAGE = "/images/activities/wellness/yoga-wellness/hero-sunrise-yoga.webp";

// Relative canonical resolves against `metadataBase` in the root layout.
export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PAGE_PATH },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: PAGE_PATH,
    siteName: "Karvaahh – Live to Travel",
    type: "website",
    // Only advertise an image once real photography is in place.
    ...(USE_IMAGE_PLACEHOLDERS ? {} : { images: [{ url: OG_IMAGE, width: 1600, height: 900, alt: "Yoga at sunrise in the Himalayas" }] }),
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

function jsonLd(data: unknown) {
  // Escape "<" so content can never close the script tag.
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

export default function Page() {
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "/" },
      { "@type": "ListItem", position: 2, name: "Activities", item: "/activities" },
      { "@type": "ListItem", position: 3, name: "Yoga & Wellness", item: PAGE_PATH },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(breadcrumbLd) }} />
      <YogaWellnessPage />
    </>
  );
}
