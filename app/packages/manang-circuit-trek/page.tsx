import type { Metadata } from "next";
import ManangCircuitTrekPage from "@/components/packages/manang-circuit-trek/ManangCircuitTrekPage";
import { faqs, overview, TRIP } from "@/components/packages/manang-circuit-trek/data/content";
import { itinerary } from "@/components/packages/manang-circuit-trek/data/itinerary";

const SITE = "https://karvaahh.in";
const URL = `${SITE}${TRIP.path}`;
const TITLE = "Manang Circuit Trek: 16 Days with Tilicho Lake & Thorong La";
const DESCRIPTION =
  "Trek the Manang valley in Nepal's Annapurna region: Chame, Pisang and Manang, Tilicho Lake (4,919 m) and Thorong La (5,416 m). A 16-day itinerary with an acclimatisation day, licensed guide and ACAP permit included.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: TRIP.path },
  keywords: [
    "Manang Circuit Trek",
    "Annapurna Circuit with Tilicho Lake",
    "Tilicho Lake trek",
    "Thorong La Pass",
    "Manang trek itinerary",
    "Annapurna trekking package",
  ],
  openGraph: {
    type: "website",
    url: TRIP.path,
    title: TITLE,
    description: DESCRIPTION,
    siteName: "Karvaahh",
    images: [{ url: TRIP.heroImage, width: 1920, height: 1080, alt: TRIP.heroAlt }],
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION, images: [TRIP.heroImage] },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "TouristTrip",
      "@id": `${URL}#trip`,
      name: TRIP.name,
      description: overview.lead,
      url: URL,
      image: `${SITE}${TRIP.heroImage}`,
      touristType: ["Adventure travellers", "Trekkers"],
      provider: { "@type": "TravelAgency", name: "Karvaahh", url: SITE },
      itinerary: {
        "@type": "ItemList",
        numberOfItems: itinerary.length,
        itemListElement: itinerary.map((d) => ({
          "@type": "ListItem",
          position: d.day,
          item: { "@type": "TouristAttraction", name: `Day ${d.day}: ${d.title}`, description: d.summary },
        })),
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE },
        { "@type": "ListItem", position: 2, name: "Packages", item: `${SITE}/packages` },
        { "@type": "ListItem", position: 3, name: TRIP.name, item: URL },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      })),
    },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        // Static, build-time data; escape "<" so content can never close the script tag.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <ManangCircuitTrekPage />
    </>
  );
}
