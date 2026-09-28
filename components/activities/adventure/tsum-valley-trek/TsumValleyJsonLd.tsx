import {
  BREADCRUMBS,
  FAQS,
  HERO,
  ITINERARY,
  PAGE,
  VILLAGES,
} from "@/data/destinations/tsum-valley/content";

const abs = (path: string) => (path.startsWith("http") ? path : `${PAGE.siteUrl}${path}`);

/**
 * Structured data for the page. Deliberately contains NO offers, prices,
 * ratings or reviews — none are verified yet. Add `offers` to TouristTrip only
 * once a real, current price exists in PACKAGES.
 */
export default function TsumValleyJsonLd() {
  const url = abs(PAGE.path);

  const graph = [
    {
      "@type": "BreadcrumbList",
      "@id": `${url}#breadcrumb`,
      itemListElement: BREADCRUMBS.map((c, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: c.label,
        item: abs(c.href),
      })),
    },
    {
      "@type": "TouristTrip",
      "@id": `${url}#trip`,
      name: HERO.title,
      description: PAGE.metaDescription,
      url,
      image: abs(PAGE.ogImage),
      touristType: ["Trekking", "Cultural tourism", "Buddhist heritage"],
      provider: { "@type": "TravelAgency", name: "Karvaahh", url: PAGE.siteUrl },
      itinerary: {
        "@type": "ItemList",
        numberOfItems: ITINERARY.length,
        itemListElement: ITINERARY.map((d) => ({
          "@type": "ListItem",
          position: d.day,
          name: `Day ${d.day}: ${d.from === d.to || d.mode === "arrival" ? d.to : `${d.from} to ${d.to}`}`,
          description: d.summary,
        })),
      },
      subjectOf: VILLAGES.map((v) => ({
        "@type": "Place",
        name: `${v.name}, Tsum Valley`,
        containedInPlace: { "@type": "Place", name: "Gorkha District, Nepal" },
      })),
    },
    {
      "@type": "FAQPage",
      "@id": `${url}#faq`,
      mainEntity: FAQS.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      })),
    },
  ];

  const json = JSON.stringify({ "@context": "https://schema.org", "@graph": graph }).replace(/</g, "\\u003c");

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />;
}
