import type { Metadata } from "next";
import RussiaPage from "@/components/packages/international/russia/RussiaPage";
import { russiaFaqs } from "@/data/russia/content";
import { visibleDestinations, russiaDestinationById } from "@/data/russia/destinations";
import { russiaImages } from "@/data/russia/images";
import { activeRussiaPackages } from "@/data/russia/packages";
import { INTERNATIONAL_HREF, RUSSIA_PATH, SITE_URL, destAnchor } from "@/lib/russia/config";
import { contactInfo, socialLinks } from "@/lib/navigation-data";

const TITLE = "Russia Tour Packages | Moscow, St. Petersburg & Winter Tours | Karvaahh";
const DESCRIPTION =
  "Explore Russia tour packages from Karvaahh, including Moscow, Saint Petersburg, Kazan, Lake Baikal, Murmansk, Sochi and Golden Ring journeys. Customize your Russia holiday from Nepal or India.";
const PAGE_URL = `${SITE_URL}${RUSSIA_PATH}`;
const OG = russiaImages.moscow;

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  keywords: [
    "Russia tour packages",
    "Russia tour package from Nepal",
    "Russia tour package from India",
    "Moscow Saint Petersburg tour",
    "Russia Northern Lights tour",
    "Lake Baikal tour",
    "customized Russia tour package",
  ],
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    siteName: "Karvaahh",
    title: "Russia Tour Packages from Nepal & India | Karvaahh",
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
      { "@type": "ListItem", position: 3, name: "Russia Tour Packages", item: PAGE_URL },
    ],
  };

  // Only destinations shown as normally available; limited ones are not advertised in schema.
  const listed = visibleDestinations.filter((d) => d.operationalStatus === "active");
  const destinations = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${PAGE_URL}#explore`,
    name: "Russia destinations by Karvaahh",
    numberOfItems: listed.length,
    itemListElement: listed.map((d, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "TouristDestination",
        name: d.name,
        url: `${PAGE_URL}#${destAnchor(d.id)}`,
        description: d.description,
        containedInPlace: { "@type": "Country", name: "Russia" },
        geo: d.coords ? { "@type": "GeoCoordinates", latitude: d.coords[0], longitude: d.coords[1] } : undefined,
      },
    })),
  };

  // TouristTrip without offers: no prices are published, and none are invented.
  const trips = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${PAGE_URL}#packages`,
    name: "Popular Russia tour packages",
    itemListElement: activeRussiaPackages
      .filter((p) => p.featured && p.destinations.every((id) => russiaDestinationById(id)?.operationalStatus === "active"))
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
            itemListElement: p.destinations.map((id, j) => ({
              "@type": "ListItem",
              position: j + 1,
              item: { "@type": "Place", name: russiaDestinationById(id)?.name },
            })),
          },
        },
      })),
  };

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: russiaFaqs.map((f) => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })),
  };

  return (
    <>
      {[organization, breadcrumb, destinations, trips, faq].map((data, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: json(data) }} />
      ))}
      <RussiaPage />
    </>
  );
}
