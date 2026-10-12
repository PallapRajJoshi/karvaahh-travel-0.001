import type { Metadata } from "next";
import AustraliaPage from "@/components/packages/international/australia/AustraliaPage";
import { australiaFaqs } from "@/data/australia/content";
import { australiaDestinationName, visibleAustraliaDestinations } from "@/data/australia/destinations";
import { australiaImages } from "@/data/australia/images";
import { activeAustraliaPackages } from "@/data/australia/packages";
import { australiaRegionById } from "@/data/australia/regions";
import { AUSTRALIA_PATH, INTERNATIONAL_HREF, SITE_URL, destAnchor } from "@/lib/australia/config";
import { contactInfo, socialLinks } from "@/lib/navigation-data";

const TITLE = "Australia Tour Packages from Nepal & India | Sydney, Melbourne, Great Barrier Reef & More | Karvaahh";
const DESCRIPTION =
  "Customized Australia tours from Nepal and India: Sydney and Melbourne, Gold Coast beaches, the Great Barrier Reef from Cairns, Tasmania's wilderness, Uluru and the outback. Honeymoon, family and luxury Australia holidays with Karvaahh.";
const PAGE_URL = `${SITE_URL}${AUSTRALIA_PATH}`;
const OG = australiaImages["sydney-aerial"];

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  keywords: [
    "Australia tour packages",
    "Australia tour package from Nepal",
    "Australia tour packages from India",
    "Australia holiday packages",
    "Australia honeymoon package",
    "Australia family tour",
    "Sydney tour package",
    "Melbourne tour package",
    "Gold Coast tour package",
    "Cairns tour package",
    "Great Barrier Reef tour package",
    "Brisbane tour package",
    "Perth tour package",
    "Tasmania tour package",
    "Melbourne Sydney tour package",
    "Sydney Gold Coast Cairns package",
    "Australia visa assistance",
    "Australia road trip",
    "customized Australia tour package",
  ],
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    siteName: "Karvaahh",
    title: "Australia Tour Packages | Australia Holiday Packages | Karvaahh",
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
      { "@type": "ListItem", position: 3, name: "Australia Tour Packages", item: PAGE_URL },
    ],
  };

  const destinations = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${PAGE_URL}#explore`,
    name: "Australia destinations by Karvaahh",
    numberOfItems: visibleAustraliaDestinations.length,
    itemListElement: visibleAustraliaDestinations.map((d, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "TouristDestination",
        name: d.name,
        url: `${PAGE_URL}#${destAnchor(d.id)}`,
        description: d.description,
        containedInPlace: { "@type": "State", name: australiaRegionById(d.region).name, containedInPlace: { "@type": "Country", name: "Australia" } },
        geo: d.coords ? { "@type": "GeoCoordinates", latitude: d.coords[0], longitude: d.coords[1] } : undefined,
      },
    })),
  };

  // TouristTrip without offers: no prices are published, and none are invented.
  const trips = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${PAGE_URL}#packages`,
    name: "Popular Australia tour packages",
    itemListElement: activeAustraliaPackages
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
            itemListElement: p.destinations.map((id, j) => ({ "@type": "ListItem", position: j + 1, item: { "@type": "Place", name: australiaDestinationName(id) } })),
          },
        },
      })),
  };

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: australiaFaqs.map((f) => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })),
  };

  return (
    <>
      {[organization, breadcrumb, destinations, trips, faq].map((data, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: json(data) }} />
      ))}
      <AustraliaPage />
    </>
  );
}
