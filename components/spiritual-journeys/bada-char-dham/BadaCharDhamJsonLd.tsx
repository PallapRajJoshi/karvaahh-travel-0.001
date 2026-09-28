import { badaCharDhamData as d } from "./data/badaCharDhamData";

/**
 * Structured data for /spiritual-journeys/bada-char-dham-yatra
 *  - WebPage, BreadcrumbList, FAQPage (built from the SAME faqs array the
 *    page renders, so schema and visible FAQs can never drift), TravelAgency
 *    (referenced by @id — no address/phone/rating is invented), TouristTrip
 *    (the four Dhams as an itinerary of places; no price or dates).
 */
export default function BadaCharDhamJsonLd() {
  const site = d.seo.siteUrl;
  const url = `${site}${d.page.path}`;
  const orgId = `${site}/#organization`;

  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TravelAgency",
        "@id": orgId,
        name: d.seo.siteName,
        url: site,
        slogan: "Live to Travel",
      },
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: d.seo.title,
        description: d.seo.description,
        inLanguage: "en-IN",
        isPartOf: { "@type": "WebSite", "@id": `${site}/#website`, url: site, name: d.seo.siteName },
        publisher: { "@id": orgId },
        breadcrumb: { "@id": `${url}#breadcrumb` },
        about: { "@id": `${url}#trip` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: d.page.breadcrumbs.map((b, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: b.name,
          item: `${site}${b.href === "/" ? "" : b.href}`,
        })),
      },
      {
        "@type": "TouristTrip",
        "@id": `${url}#trip`,
        name: "Bada Char Dham Yatra",
        description: d.hero.copy,
        touristType: ["Pilgrims", "Cultural travellers"],
        provider: { "@id": orgId },
        itinerary: {
          "@type": "ItemList",
          itemListElement: d.dhams.map((dham, i) => ({
            "@type": "ListItem",
            position: i + 1,
            item: {
              "@type": ["TouristAttraction", "PlaceOfWorship"],
              name: `${dham.temple}, ${dham.name}`,
              address: { "@type": "PostalAddress", addressRegion: dham.state, addressCountry: "IN" },
              url: `${url}#${dham.id}`,
            },
          })),
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        mainEntity: d.faqs.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: { "@type": "Answer", text: f.answer },
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      // Escape "<" so no string content can close the script tag.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph).replace(/</g, "\\u003c") }}
    />
  );
}
