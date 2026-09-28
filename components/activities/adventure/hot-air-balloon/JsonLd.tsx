import { BREADCRUMBS, FAQS, HERO, PAGE_PATH } from "./data/hotAirBalloonData";

const SITE = "https://karvaahh.in";

/** WebPage + TouristTrip + BreadcrumbList + FAQPage.
    No reviews, ratings, offers, prices or availability — by design. */
export default function JsonLd() {
  const url = `${SITE}${PAGE_PATH}`;
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: "Hot Air Balloon in Nepal",
        description:
          "Seasonal and event-based hot air balloon experiences in Nepal — Pokhara, Kathmandu, Chitwan and Lumbini — arranged by availability enquiry.",
        inLanguage: "en",
        isPartOf: { "@type": "WebSite", name: "Karvaahh Tours & Travels", url: SITE },
        breadcrumb: { "@id": `${url}#breadcrumb` },
        primaryImageOfPage: `${SITE}${HERO.image}`,
        about: { "@id": `${url}#activity` },
      },
      {
        "@type": "TouristTrip",
        "@id": `${url}#activity`,
        name: "Hot air balloon experience in Nepal",
        description:
          "Seasonal hot air balloon flights in Pokhara Valley, with event-based or trial operations in Kathmandu Valley, Chitwan / Sauraha and Lumbini. Availability, prices and operating dates are confirmed on enquiry.",
        touristType: ["Couples", "Sunrise seekers", "Families", "Photographers"],
        provider: { "@type": "TravelAgency", name: "Karvaahh Tours & Travels", url: SITE },
        itinerary: {
          "@type": "ItemList",
          itemListElement: ["Pokhara Valley", "Kathmandu Valley", "Chitwan / Sauraha", "Lumbini"].map(
            (name, i) => ({
              "@type": "ListItem",
              position: i + 1,
              item: { "@type": "Place", name, address: { "@type": "PostalAddress", addressCountry: "NP" } },
            })
          ),
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: BREADCRUMBS.map((b, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: b.name,
          item: `${SITE}${b.href === "/" ? "" : b.href}`,
        })),
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        mainEntity: FAQS.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph).replace(/</g, "\\u003c") }}
    />
  );
}
