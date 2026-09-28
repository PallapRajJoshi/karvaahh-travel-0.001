import { PAGE_PATH, SITE_URL, breadcrumbs, faqs, featured, hero, seo } from "./skydivingData";

/** JSON-LD graph. Contains no ratings, reviews, offers, dates or operators by design. */
export function buildSkydivingJsonLd() {
  const url = `${SITE_URL}${PAGE_PATH}`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: seo.title,
        description: seo.description,
        inLanguage: "en",
        isPartOf: { "@type": "WebSite", name: "Karvaahh Tours & Travels", url: SITE_URL },
        breadcrumb: { "@id": `${url}#breadcrumb` },
        about: { "@id": `${url}#everest-skydive` },
        primaryImageOfPage: { "@type": "ImageObject", url: `${SITE_URL}${hero.image.src}` },
      },
      {
        "@type": "TouristAttraction",
        "@id": `${url}#everest-skydive`,
        name: "Everest Skydive — Syangboche",
        description: `${featured.subheading}. Event-based expedition with an exit altitude of approximately 8,800–9,100 m and landing around 3,780 m at Syangboche.`,
        image: `${SITE_URL}${featured.image.src}`,
        touristType: ["Adventure travellers", "Skydiving enthusiasts"],
        isAccessibleForFree: false,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Syangboche",
          addressRegion: "Koshi Province",
          addressCountry: "NP",
        },
        containedInPlace: { "@type": "AdministrativeArea", name: "Solukhumbu District, Nepal" },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: breadcrumbs.map((b, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: b.name,
          item: `${SITE_URL}${b.href === "/" ? "" : b.href}`,
        })),
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };
}

/** Safe for inlining inside <script type="application/ld+json">. */
export function serializeJsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
