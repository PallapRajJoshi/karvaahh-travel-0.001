import type { Metadata } from "next";
import ZipFlyingPage from "@/components/activities/adventure/zip-flying/ZipFlyingPage";
import {
  PAGE_PATH,
  IMG,
  breadcrumbs,
  faqs,
} from "@/components/activities/adventure/zip-flying/data/zipFlyingData";

const SITE = "https://karvaahh.in";
const TITLE = "Zip Flying in Nepal | Pokhara ZipFlyer, Kushma & More | Karvaahh";
const DESCRIPTION =
  "Experience zip flying in Nepal. Explore Pokhara's ~1.8 km ZipFlyer with a ~600 m vertical drop and speeds near 120 km/h, plus zipline destinations across Nepal.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "zip flying Nepal",
    "zip flyer Nepal",
    "ZipFlyer Pokhara",
    "Pokhara zipline",
    "Kushma zipline",
    "zipline Nepal",
    "Sarangkot zipline",
    "Hemja zipline",
    "things to do in Pokhara",
    "adventure activities Nepal",
  ],
  alternates: { canonical: PAGE_PATH },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: PAGE_PATH,
    siteName: "Karvaahh Tours & Travels",
    type: "website",
    images: [{ url: IMG.hero, alt: "Pokhara ZipFlyer descending from Sarangkot toward Hemja" }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [IMG.hero],
  },
};

const url = `${SITE}${PAGE_PATH}`;

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${url}#webpage`,
      url,
      name: TITLE,
      description: DESCRIPTION,
      inLanguage: "en",
      isPartOf: { "@type": "WebSite", name: "Karvaahh Tours & Travels", url: SITE },
      primaryImageOfPage: `${SITE}${IMG.hero}`,
      breadcrumb: { "@id": `${url}#breadcrumb` },
      about: { "@id": `${url}#zipflyer` },
    },
    {
      "@type": "TouristAttraction",
      "@id": `${url}#zipflyer`,
      name: "ZipFlyer Nepal (Pokhara)",
      description:
        "High-speed zipline running from the Sarangkot area toward Hemja in Pokhara, approximately 1.8 km long with a vertical drop of around 600 m.",
      image: `${SITE}${IMG.featured}`,
      touristType: ["Adventure travelers", "Group travelers"],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Pokhara",
        addressRegion: "Gandaki",
        addressCountry: "NP",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${url}#breadcrumb`,
      itemListElement: breadcrumbs.map((b, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: b.name,
        item: `${SITE}${b.href === "/" ? "" : b.href}`,
      })),
    },
    {
      "@type": "FAQPage",
      "@id": `${url}#faq`,
      mainEntity: faqs.map((f) => ({
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
      <ZipFlyingPage />
    </>
  );
}
