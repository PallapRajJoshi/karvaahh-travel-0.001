import type { Metadata } from "next";
import { EducationalToursPage } from "@/components/activities/educational-corporate/educational-tours/EducationalToursPage";
import { BREADCRUMB, PAGE } from "@/components/activities/educational-corporate/educational-tours/data/content";
import { FAQS } from "@/components/activities/educational-corporate/educational-tours/data/faq";

const OG_IMAGE = "/images/educational-tours/og-educational-tours.jpg"; // 1200×630 — add before launch

export const metadata: Metadata = {
  title: PAGE.title,
  description: PAGE.description,
  keywords: [...PAGE.keywords],
  alternates: { canonical: PAGE.url },
  openGraph: {
    type: "website",
    url: PAGE.url,
    siteName: "Karvaahh",
    title: PAGE.title,
    description: PAGE.description,
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Karvaahh Educational Tours — Learn Beyond the Classroom" }],
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE.title,
    description: PAGE.description,
    images: [OG_IMAGE],
  },
};

const ORIGIN = "https://karvaahh.in";
const crumbHrefs = ["/", "/activities", "/activities/educational-corporate", "/activities/educational-corporate/educational-tours"];

// Only structured data that is accurate and visible on the page: breadcrumbs + the FAQ shown in the accordion.
const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: BREADCRUMB.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.label,
      item: `${ORIGIN}${crumbHrefs[i]}`,
    })),
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  },
];

export default function Page() {
  return (
    <>
      {jsonLd.map((block, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(block).replace(/</g, "\\u003c") }} />
      ))}
      <EducationalToursPage />
    </>
  );
}
