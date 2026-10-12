import type { Metadata } from "next";
import AntarcticaPage from "@/components/packages/international/antarctica/AntarcticaPage";
import { antarcticaFaqs } from "@/data/antarctica/content";
import { visibleAntarcticaDestinations } from "@/data/antarctica/destinations";
import { activeExpeditions } from "@/data/antarctica/expeditions";
import { antarcticaImages } from "@/data/antarctica/images";
import { ANTARCTICA_PATH, INTERNATIONAL_HREF, SITE_URL, destAnchor } from "@/lib/antarctica/config";
import { contactInfo, socialLinks } from "@/lib/navigation-data";

const TITLE = "Antarctica Expedition Packages from Nepal & India | Polar Cruises & Wildlife Journeys | Karvaahh";
const DESCRIPTION =
  "Plan an Antarctica expedition with Karvaahh: Antarctic Peninsula expedition cruises, penguins and polar wildlife, South Georgia, the Antarctic Circle and air-cruises. Customized Antarctica travel from Nepal and India.";
const PAGE_URL = `${SITE_URL}${ANTARCTICA_PATH}`;
const OG = antarcticaImages["zodiac-arch"];

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  keywords: [
    "Antarctica tour packages",
    "Antarctica expedition",
    "Antarctica expedition package",
    "Antarctica cruise",
    "Antarctica tour from Nepal",
    "Antarctica tour from India",
    "Antarctica cruise from India",
    "Antarctica honeymoon",
    "Antarctica wildlife tour",
    "Antarctic Peninsula expedition",
    "Antarctica photography tour",
    "Antarctica luxury cruise",
    "Antarctica expedition cruise",
    "Antarctica air cruise",
    "South Georgia Antarctica tour",
    "Antarctic Circle expedition",
    "customized Antarctica expedition",
  ],
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    siteName: "Karvaahh",
    title: "Antarctica Expedition Packages | Antarctica Tours | Karvaahh",
    description: DESCRIPTION,
    locale: "en_IN",
    images: [{ url: OG.src, alt: OG.alt }],
  },
  twitter: { card: "summary_large_image", title: "Antarctica Expedition Packages | Antarctica Tours | Karvaahh", description: DESCRIPTION, images: [OG.src] },
};

const json = (data: unknown) => JSON.stringify(data).replace(/</g, "\\u003c");

export default function Page() {
  const orgId = `${SITE_URL}/#organization`;

  const organization = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "@id": orgId,
    name: "Karvaahh",
    slogan: "Live to Travel",
    url: SITE_URL,
    logo: `${SITE_URL}/karvaahh-tours-travels-logo.webp`,
    contactPoint: [
      { "@type": "ContactPoint", telephone: contactInfo.nepal.phone, contactType: "customer service", areaServed: "NP" },
      { "@type": "ContactPoint", telephone: contactInfo.india.phone, contactType: "customer service", areaServed: "IN" },
    ],
    sameAs: socialLinks.filter((s) => s.icon !== "whatsapp").map((s) => s.href),
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "International Packages", item: `${SITE_URL}${INTERNATIONAL_HREF}` },
      { "@type": "ListItem", position: 3, name: "Antarctica Expeditions", item: PAGE_URL },
    ],
  };

  const destinations = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${PAGE_URL}#explore`,
    name: "Antarctica and Southern Ocean expedition destinations",
    numberOfItems: visibleAntarcticaDestinations.length,
    itemListElement: visibleAntarcticaDestinations.map((d, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "TouristDestination",
        name: d.name,
        url: `${PAGE_URL}#${destAnchor(d.id)}`,
        description: d.description,
        geo: d.coords ? { "@type": "GeoCoordinates", latitude: d.coords[0], longitude: d.coords[1] } : undefined,
      },
    })),
  };

  // TouristTrip without offers: no prices or availability are published, and none are invented.
  // Add Product/Offer here only once an expedition has a real `price`.
  const trips = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${PAGE_URL}#expeditions`,
    name: "Antarctica expedition templates",
    itemListElement: activeExpeditions
      .filter((e) => e.kind === "template")
      .map((e, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "TouristTrip",
          name: `${e.duration} ${e.title}`,
          description: e.summary,
          provider: { "@id": orgId },
          itinerary: {
            "@type": "ItemList",
            itemListElement: e.route.map((stop, j) => ({ "@type": "ListItem", position: j + 1, item: { "@type": "Place", name: stop } })),
          },
        },
      })),
  };

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: antarcticaFaqs.map((f) => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })),
  };

  return (
    <>
      {[organization, breadcrumb, destinations, trips, faq].map((data, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: json(data) }} />
      ))}
      <AntarcticaPage />
    </>
  );
}
