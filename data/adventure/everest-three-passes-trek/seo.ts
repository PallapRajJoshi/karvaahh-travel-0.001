import { BREADCRUMBS, CANONICAL_URL, SITE_URL } from "./config";
import { faqs } from "./faq";
import { itinerary } from "./itinerary";
import { hero } from "./content";
import { imageSrc } from "./format";

/**
 * Structured data. Deliberately excludes offers, prices, ratings and reviews —
 * nothing unverified goes into JSON-LD.
 */
export function buildJsonLd(): Record<string, unknown>[] {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: BREADCRUMBS.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.label,
      item: `${SITE_URL}${c.href === "/" ? "" : c.href}`,
    })),
  };

  // Unique stops in trekking order, from the sample itinerary.
  const stops: string[] = [];
  for (const d of itinerary) {
    for (const place of [d.highPointName, d.to]) {
      if (place && place !== "Kathmandu" && !stops.includes(place)) stops.push(place);
    }
  }

  const trip = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: "Everest Three Passes Trek",
    description:
      "A challenging high-altitude trek in Nepal's Khumbu region crossing Kongma La, Cho La and Renjo La, with visits to Everest Base Camp, Kala Patthar and the Gokyo Lakes.",
    url: CANONICAL_URL,
    touristType: ["Experienced trekkers", "Adventure travellers"],
    ...(hero.image.ready ? { image: `${SITE_URL}${imageSrc(hero.image)}` } : {}),
    provider: { "@type": "TravelAgency", name: "Karvaahh", url: SITE_URL },
    itinerary: {
      "@type": "ItemList",
      numberOfItems: stops.length,
      itemListElement: stops.map((name, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: { "@type": "Place", name, containedInPlace: { "@type": "Place", name: "Khumbu, Nepal" } },
      })),
    },
  };

  // Mirrors the visible FAQ exactly (same source array).
  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return [breadcrumb, trip, faq];
}
