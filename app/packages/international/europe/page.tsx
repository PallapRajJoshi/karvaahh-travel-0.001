import type { Metadata } from "next";
import EuropePage from "@/components/packages/international/europe/EuropePage";
import { europeFaqs } from "@/data/europe/content";
import { bookableCountries, countryById } from "@/data/europe/countries";
import { img } from "@/data/europe/images";
import { activePackages } from "@/data/europe/packages";
import { regionById } from "@/data/europe/regions";
import { EUROPE_PATH, INTERNATIONAL_HREF, SITE_URL, countryAnchor } from "@/lib/europe/config";
import { contactInfo, socialLinks } from "@/lib/navigation-data";

const TITLE = "Europe Tour Packages | International Holidays from Nepal & India | Karvaahh";
const DESCRIPTION =
  "Explore Europe tour packages from Karvaahh, including Switzerland, France, Italy, Austria, Greece, Spain, Netherlands, Scandinavia and multi-country European journeys. Customize your Europe holiday from Nepal or India.";
const PAGE_URL = `${SITE_URL}${EUROPE_PATH}`;
const OG_IMAGE = img.lauterbrunnen;

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  keywords: [
    "Europe tour packages",
    "Europe tour package from Nepal",
    "Europe tour packages from India",
    "Europe holiday packages",
    "Europe honeymoon packages",
    "Europe family tour",
    "Switzerland Paris Italy tour",
    "Switzerland tour package",
    "Europe multi country tour",
    "Schengen tour package",
    "Northern Lights Europe tour",
    "customized Europe tour packages",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    siteName: "Karvaahh",
    title: "Europe Tour Packages from Nepal & India | Karvaahh",
    description: DESCRIPTION,
    locale: "en_IN",
    images: [{ url: OG_IMAGE.src, alt: OG_IMAGE.alt }],
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION, images: [OG_IMAGE.src] },
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
      { "@type": "ListItem", position: 3, name: "Europe Tour Packages", item: PAGE_URL },
    ],
  };

  // Bookable destinations, each pointing at its visible card.
  const destinations = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${PAGE_URL}#destinations`,
    name: "European destinations by Karvaahh",
    numberOfItems: bookableCountries.length,
    itemListElement: bookableCountries.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Country",
        name: c.name,
        url: `${PAGE_URL}#${countryAnchor(c.id)}`,
        description: c.description,
        containedInPlace: { "@type": "Place", name: regionById(c.region).name },
      },
    })),
  };

  // Package templates as TouristTrip. No offers, prices or ratings are emitted because none are published.
  const trips = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${PAGE_URL}#packages`,
    name: "Popular Europe tour packages",
    itemListElement: activePackages
      .filter((p) => p.featured && !p.custom)
      .map((p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "TouristTrip",
          name: `${p.duration} ${p.title}`,
          description: p.description,
          provider: { "@id": orgId },
          touristType: p.travelStyles.slice(0, 3),
          itinerary: {
            "@type": "ItemList",
            itemListElement: p.destinations.map((stop, j) => ({
              "@type": "ListItem",
              position: j + 1,
              item: { "@type": "Place", name: stop },
            })),
          },
          ...(p.countries.length ? { contentLocation: p.countries.map((id) => ({ "@type": "Country", name: countryById(id)?.name })) } : {}),
        },
      })),
  };

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: europeFaqs.map((f) => ({
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
      <EuropePage />
    </>
  );
}
