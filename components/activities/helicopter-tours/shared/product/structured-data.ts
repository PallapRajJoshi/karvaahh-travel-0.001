import type { HelicopterProductTour } from "../product-types";
import { BRAND_NAME, SITE_URL, pageUrl } from "../site";

type JsonLd = Record<string, unknown>;

/**
 * BreadcrumbList, TouristTrip and FAQPage for a product tour page. Mirrors
 * only content rendered on the page; no price/offer data is emitted because
 * prices are on request.
 */
export function buildProductStructuredData(tour: HelicopterProductTour): JsonLd[] {
  const url = pageUrl(tour.path);

  const breadcrumb: JsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Helicopter Tours" },
      { "@type": "ListItem", position: 3, name: tour.title, item: url },
    ],
  };

  const trip: JsonLd = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    "@id": `${url}#trip`,
    name: tour.title,
    description: tour.description,
    url,
    image: `${SITE_URL}${tour.seo.ogImage.src}`,
    touristType: tour.touristType,
    itinerary: {
      "@type": "ItemList",
      numberOfItems: tour.route.stops.length,
      itemListElement: tour.route.stops.map((s, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: { "@type": "Place", name: s.name },
      })),
    },
    provider: { "@type": "TravelAgency", name: BRAND_NAME, url: SITE_URL },
  };

  const faq: JsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: tour.faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return [breadcrumb, trip, faq];
}
