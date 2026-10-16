import type { Metadata } from "next";
import KarnaliHome from "@/components/home/karnali/KarnaliHome";
import { karnaliDestinations } from "@/data/karnali/destinations";
import { karnaliFaqs } from "@/data/karnali/travel-info";

const SITE_URL = "https://karvaahh.in";
const PAGE_URL = `${SITE_URL}/destinations/karnali-province`;
const PAGE_TITLE = "Karnali Province Tourism — Rara, Dolpo & Nepal's Wild West | Karvaahh";
const PAGE_DESCRIPTION =
  "Explore Karnali Province, Nepal: Rara Lake, Shey Phoksundo, Upper Dolpo, Humla's Limi Valley, Jumla's Sinja Valley and Dullu. Best time to visit, how to reach, permits, travel circuits and tours with Karvaahh.";
const OG_IMAGE = `${SITE_URL}/images/home/upper-dolpo-nepal-himalayan.jpg`;

export const metadata: Metadata = {
  title: { absolute: PAGE_TITLE },
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: PAGE_URL,
    siteName: "Karvaahh",
    type: "website",
    images: [
      {
        url: OG_IMAGE,
        alt: "Trans-Himalayan landscape of Upper Dolpo in Karnali Province, Nepal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: [OG_IMAGE],
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    name: "Karnali Province, Nepal",
    description: PAGE_DESCRIPTION,
    url: PAGE_URL,
    image: OG_IMAGE,
    touristType: ["Trekkers", "Nature lovers", "Cultural travellers", "Adventure travellers"],
    includesAttraction: karnaliDestinations.map((d) => ({
      "@type": "TouristAttraction",
      name: d.name,
      ...(d.href ? { url: `${SITE_URL}${d.href}` } : {}),
    })),
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Destinations", item: `${SITE_URL}/destinations` },
      { "@type": "ListItem", position: 3, name: "Karnali Province", item: PAGE_URL },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: karnaliFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  },
];

export default function KarnaliProvincePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <KarnaliHome />
    </>
  );
}
