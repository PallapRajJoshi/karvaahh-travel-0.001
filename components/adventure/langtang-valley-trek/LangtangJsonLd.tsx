import { CANONICAL, SITE_URL, faqs, hero, images, itinerary, links, seo } from "@/data/adventure/langtang-valley-trek";

/** Only facts visible on the page — no prices, ratings, reviews or availability. */
export default function LangtangJsonLd() {
  const abs = (p: string) => (p.startsWith("http") ? p : `${SITE_URL}${p}`);

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: abs(links.home) },
      { "@type": "ListItem", position: 2, name: "Adventure", item: abs(links.adventure) },
      { "@type": "ListItem", position: 3, name: hero.title, item: CANONICAL },
    ],
  };

  const stops = Array.from(new Set(itinerary.flatMap((d) => [d.from, d.to])));
  const trip = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: hero.title,
    description: seo.description,
    url: CANONICAL,
    image: abs(images.hero.src),
    touristType: ["Trekkers", "Adventure travellers", "Cultural travellers"],
    provider: { "@type": "TravelAgency", name: "Karvaahh", url: SITE_URL },
    itinerary: {
      "@type": "ItemList",
      numberOfItems: stops.length,
      itemListElement: stops.map((name, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: { "@type": "Place", name, address: { "@type": "PostalAddress", addressCountry: "NP" } },
      })),
    },
  };

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };

  const json = (o: object) => ({ __html: JSON.stringify(o).replace(/</g, "\\u003c") });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={json(breadcrumb)} />
      <script type="application/ld+json" dangerouslySetInnerHTML={json(trip)} />
      <script type="application/ld+json" dangerouslySetInnerHTML={json(faq)} />
    </>
  );
}
