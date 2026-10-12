import type { Metadata } from "next";
import USAPage from "@/components/packages/international/usa/USAPage";
import { usaFaqs } from "@/data/usa/content";
import { usaDestinationName, visibleUSADestinations } from "@/data/usa/destinations";
import { usaImages } from "@/data/usa/images";
import { activeUSAPackages } from "@/data/usa/packages";
import { INTERNATIONAL_HREF, SITE_URL, USA_PATH, destAnchor } from "@/lib/usa/config";
import { contactInfo, socialLinks } from "@/lib/navigation-data";

const TITLE = "USA Tour Packages from Nepal & India | New York, Hawaii, California & More | Karvaahh";
const DESCRIPTION =
  "Explore USA tour packages from Karvaahh: New York and Niagara Falls, California and Las Vegas, Orlando family holidays, Hawaii honeymoons, Alaska and national parks. Customized USA tours from Nepal and India.";
const PAGE_URL = `${SITE_URL}${USA_PATH}`;
const OG = usaImages["nyc-skyline"];

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  keywords: [
    "USA tour packages",
    "USA tour package from Nepal",
    "USA tour packages from India",
    "America tour packages",
    "USA holiday packages",
    "New York Niagara tour",
    "USA honeymoon package",
    "USA family tour",
    "Orlando tour package",
    "Las Vegas tour package",
    "California tour package",
    "Hawaii tour package",
    "Alaska tour package",
    "USA national parks tour",
    "customized USA tour package",
  ],
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    siteName: "Karvaahh",
    title: "USA Tour Packages | USA Holiday Packages | Karvaahh",
    description: DESCRIPTION,
    locale: "en_IN",
    images: [{ url: OG.src, alt: OG.alt }],
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION, images: [OG.src] },
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
      { "@type": "ListItem", position: 3, name: "USA Tour Packages", item: PAGE_URL },
    ],
  };

  const destinations = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${PAGE_URL}#explore`,
    name: "USA destinations by Karvaahh",
    numberOfItems: visibleUSADestinations.length,
    itemListElement: visibleUSADestinations.map((d, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "TouristDestination",
        name: d.name,
        url: `${PAGE_URL}#${destAnchor(d.id)}`,
        description: d.description,
        containedInPlace: d.state ? { "@type": "State", name: d.state, containedInPlace: { "@type": "Country", name: "United States" } } : { "@type": "Country", name: "United States" },
        geo: d.coords ? { "@type": "GeoCoordinates", latitude: d.coords[0], longitude: d.coords[1] } : undefined,
      },
    })),
  };

  // TouristTrip without offers: no prices are published, and none are invented.
  const trips = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${PAGE_URL}#packages`,
    name: "Popular USA tour packages",
    itemListElement: activeUSAPackages
      .filter((p) => p.popular && p.duration !== "Flexible")
      .map((p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "TouristTrip",
          name: p.title,
          description: p.description,
          provider: { "@id": orgId },
          itinerary: {
            "@type": "ItemList",
            itemListElement: p.destinations.map((id, j) => ({ "@type": "ListItem", position: j + 1, item: { "@type": "Place", name: usaDestinationName(id) } })),
          },
        },
      })),
  };

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: usaFaqs.map((f) => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })),
  };

  return (
    <>
      {[organization, breadcrumb, destinations, trips, faq].map((data, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: json(data) }} />
      ))}
      <USAPage />
    </>
  );
}
