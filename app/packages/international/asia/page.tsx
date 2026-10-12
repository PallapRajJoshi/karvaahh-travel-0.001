import type { Metadata } from "next";
import AsiaPage from "@/components/packages/international/asia/AsiaPage";
import { asiaFaqs } from "@/data/asia-content";
import { activeDestinations, destinationById } from "@/data/asia-destinations";
import { activePackages } from "@/data/asia-packages";
import { regionById } from "@/data/asia-regions";
import { ASIA_PATH, INTERNATIONAL_HREF, SITE_URL, destAnchor } from "@/lib/asia/config";
import { contactInfo, socialLinks } from "@/lib/navigation-data";

const TITLE = "Asia Tour Packages | International Holidays from Nepal & India | Karvaahh";
const DESCRIPTION =
  "Explore Asia tour packages from Karvaahh, including Thailand, Bali, Singapore, Malaysia, Maldives, Dubai, Japan, Vietnam, Sri Lanka, Bhutan, Georgia and more. Customize your international holiday from Nepal or India.";
const PAGE_URL = `${SITE_URL}${ASIA_PATH}`;
const OG_IMAGE = destinationById("maldives")?.image;

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  keywords: [
    "Asia tour packages",
    "Asia holiday packages",
    "international tour packages from Nepal",
    "international tours from India",
    "Asia honeymoon packages",
    "Asia family tour packages",
    "customized Asia tours",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    siteName: "Karvaahh",
    title: "Asia Tour Packages from Nepal & India | Karvaahh",
    description: DESCRIPTION,
    locale: "en_IN",
    images: OG_IMAGE ? [{ url: OG_IMAGE.src, alt: OG_IMAGE.alt }] : undefined,
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
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
      { "@type": "ListItem", position: 3, name: "Asia Tour Packages", item: PAGE_URL },
    ],
  };

  // Destinations listed on this page, each pointing at its visible card.
  const destinations = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${PAGE_URL}#destinations`,
    name: "Asia destinations by Karvaahh",
    numberOfItems: activeDestinations.length,
    itemListElement: activeDestinations.map((d, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Country",
        name: d.country,
        url: `${PAGE_URL}#${destAnchor(d.id)}`,
        description: d.description,
        containedInPlace: { "@type": "Place", name: regionById(d.region).name },
      },
    })),
  };

  // Journey ideas as TouristTrip. No offers/prices are emitted because none are published.
  const trips = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${PAGE_URL}#journeys`,
    name: "Popular Asia journeys",
    itemListElement: activePackages
      .filter((p) => p.featured)
      .map((p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "TouristTrip",
          name: p.name,
          description: p.description,
          provider: { "@id": orgId },
          itinerary: {
            "@type": "ItemList",
            itemListElement: p.route.map((stop, j) => ({ "@type": "ListItem", position: j + 1, item: { "@type": "Place", name: stop } })),
          },
        },
      })),
  };

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: asiaFaqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <>
      {[organization, breadcrumb, destinations, trips, faq].map((data, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: json(data) }} />
      ))}
      <AsiaPage />
    </>
  );
}
