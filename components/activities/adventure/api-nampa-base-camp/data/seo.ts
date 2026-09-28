import type { Metadata } from "next";
import { FAQS } from "./faq";
import { IMAGES } from "./images";
import { ITINERARY } from "./itinerary";
import { PAGE_PATH, ROUTES, SITE_URL } from "./routes";

const TITLE = "Api Nampa Base Camp Trek, Nepal | Remote Himalayan Adventure with Karvaahh";
const DESCRIPTION =
  "Explore the Api Nampa Base Camp Trek in far-western Nepal with Karvaahh. Discover Mount Api, alpine lakes, remote Himalayan villages, pristine wilderness, and breathtaking mountain landscapes.";

const CANONICAL = `${SITE_URL}${PAGE_PATH}`;
const abs = (path: string) => (path.startsWith("http") ? path : `${SITE_URL}${path}`);

export const API_NAMPA_METADATA: Metadata = {
  // `absolute` stops a layout-level title template from appending the brand twice.
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: CANONICAL },
  keywords: [
    "Api Nampa Base Camp Trek",
    "Api Himal Base Camp",
    "Api Nampa Conservation Area",
    "Darchula trek",
    "far-western Nepal trekking",
    "Kalidhunga Lake",
  ],
  openGraph: {
    type: "website",
    url: CANONICAL,
    siteName: "Karvaahh",
    title: TITLE,
    description: DESCRIPTION,
    locale: "en_IN",
    images: [{ url: abs(IMAGES.hero.src), width: 1920, height: 1080, alt: IMAGES.hero.alt }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [abs(IMAGES.hero.src)],
  },
};

/** JSON-LD graph: breadcrumb, trip and FAQ. No prices, ratings or availability. */
export function buildApiNampaJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "@id": `${CANONICAL}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: abs(ROUTES.home) },
          { "@type": "ListItem", position: 2, name: "Adventure", item: abs(ROUTES.adventureIndex) },
          { "@type": "ListItem", position: 3, name: "Api Nampa Base Camp Trek", item: CANONICAL },
        ],
      },
      {
        "@type": "TouristTrip",
        "@id": `${CANONICAL}#trip`,
        name: "Api Nampa Base Camp Trek",
        description: DESCRIPTION,
        url: CANONICAL,
        image: abs(IMAGES.hero.src),
        touristType: ["Experienced trekkers", "Nature and wilderness travellers"],
        provider: { "@type": "TravelAgency", name: "Karvaahh", url: SITE_URL },
        itinerary: {
          "@type": "ItemList",
          numberOfItems: ITINERARY.length,
          itemListElement: ITINERARY.map((d) => ({
            "@type": "ListItem",
            position: d.day,
            name: `Day ${d.day}: ${d.from} to ${d.to}`,
            description: d.summary,
          })),
        },
        subjectOf: {
          "@type": "TouristDestination",
          name: "Api Nampa Conservation Area",
          containedInPlace: {
            "@type": "AdministrativeArea",
            name: "Darchula District, Sudurpashchim Province, Nepal",
          },
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${CANONICAL}#faq`,
        mainEntity: FAQS.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: { "@type": "Answer", text: f.answer },
        })),
      },
    ],
  };
}
