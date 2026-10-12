import type { Metadata } from "next";
import SouthAfricaPage from "@/components/packages/international/south-africa/SouthAfricaPage";
import { saFaqs } from "@/data/south-africa/content";
import { saDestinationName, visibleSADestinations } from "@/data/south-africa/destinations";
import { saImages } from "@/data/south-africa/images";
import { activeSAPackages } from "@/data/south-africa/packages";
import { provinceName } from "@/data/south-africa/styles";
import { INTERNATIONAL_HREF, SA_PATH, SITE_URL, destAnchor } from "@/lib/south-africa/config";
import { contactInfo, socialLinks } from "@/lib/navigation-data";

const TITLE = "South Africa Tour Packages from Nepal & India | Cape Town, Kruger Safari & More | Karvaahh";
const SHORT_TITLE = "South Africa Tour Packages | Safari & Luxury Holidays | Karvaahh";
const DESCRIPTION =
  "Customized South Africa tours from Nepal and India: Cape Town and the Winelands, Kruger safari, the Garden Route, honeymoon and family holidays, and luxury safari lodges in Sabi Sand.";
const PAGE_URL = `${SITE_URL}${SA_PATH}`;
const OG = saImages["ct-aerial-wide"];

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  keywords: [
    "South Africa tour packages",
    "South Africa tour from Nepal",
    "South Africa tour from India",
    "Cape Town tour",
    "Cape Town tour package",
    "Kruger safari",
    "Kruger safari package",
    "South Africa honeymoon",
    "South Africa family tour",
    "Garden Route",
    "South Africa luxury safari",
    "Cape Town safari package",
    "Cape Town Garden Route package",
    "South Africa wildlife tour",
    "South Africa road trip",
    "customized South Africa package",
  ],
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
  openGraph: { type: "website", url: PAGE_URL, siteName: "Karvaahh", title: SHORT_TITLE, description: DESCRIPTION, locale: "en_IN", images: [{ url: OG.src, alt: OG.alt }] },
  twitter: { card: "summary_large_image", title: SHORT_TITLE, description: DESCRIPTION, images: [OG.src] },
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
      { "@type": "ListItem", position: 3, name: "South Africa Tour Packages", item: PAGE_URL },
    ],
  };

  const destinations = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${PAGE_URL}#explore`,
    name: "South Africa destinations by Karvaahh",
    numberOfItems: visibleSADestinations.length,
    itemListElement: visibleSADestinations.map((d, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "TouristDestination",
        name: d.name,
        url: `${PAGE_URL}#${destAnchor(d.id)}`,
        description: d.description,
        containedInPlace: { "@type": "AdministrativeArea", name: d.area ?? provinceName(d.region), containedInPlace: { "@type": "Country", name: "South Africa" } },
        geo: { "@type": "GeoCoordinates", latitude: d.coords[0], longitude: d.coords[1] },
      },
    })),
  };

  // TouristTrip without offers: no prices are published, so none are invented.
  // A Product/Offer entry should be added only once a package has a real `price`.
  const trips = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${PAGE_URL}#packages`,
    name: "South Africa tour packages",
    itemListElement: activeSAPackages
      .filter((p) => p.kind === "template" && p.popular)
      .map((p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "TouristTrip",
          name: `${p.duration} ${p.title}`,
          description: p.summary,
          provider: { "@id": orgId },
          itinerary: {
            "@type": "ItemList",
            itemListElement: p.destinations.map((id, j) => ({ "@type": "ListItem", position: j + 1, item: { "@type": "Place", name: saDestinationName(id) } })),
          },
        },
      })),
  };

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: saFaqs.map((f) => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })),
  };

  return (
    <>
      {[organization, breadcrumb, destinations, trips, faq].map((data, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: json(data) }} />
      ))}
      <SouthAfricaPage />
    </>
  );
}
