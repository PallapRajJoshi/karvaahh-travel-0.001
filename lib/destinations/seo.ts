import type { Metadata } from "next";
import type { HubContext } from "./discover-routes";
import { DESTINATION_BY_SLUG, FEATURED } from "./data";
import { SITE_URL } from "./routes";
import { PROVINCES } from "./taxonomy";

export const PAGE_PATH = "/destinations";
export const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

export const SEO_TITLE = "Travel Destinations in Nepal, India & Worldwide | Karvaahh";
export const SEO_DESCRIPTION =
  "Explore travel destinations across Nepal, India and the world with Karvaahh. Discover Himalayan adventures, pilgrimage journeys, trekking routes, wildlife, beaches, heritage destinations and unforgettable experiences.";

export function buildMetadata(ctx: HubContext): Metadata {
  const ogImage = ctx.og ?? ctx.hero;
  const images = ogImage ? [{ url: `${SITE_URL}${ogImage}`, alt: "Karvaahh destinations across Nepal, India and the world" }] : undefined;

  return {
    // `absolute` so a root-layout title template does not append the brand twice.
    title: { absolute: SEO_TITLE },
    description: SEO_DESCRIPTION,
    keywords: [
      "travel destinations Nepal",
      "Nepal travel destinations",
      "Nepal tourism",
      "India travel destinations",
      "international travel destinations",
      "Himalayan destinations",
      "Nepal trekking destinations",
      "Nepal pilgrimage destinations",
      "India pilgrimage destinations",
      "adventure destinations Nepal",
      "travel agency Nepal",
    ],
    // Filters live in the query string; every filtered view canonicalises to the hub.
    alternates: { canonical: PAGE_URL },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
    openGraph: {
      type: "website",
      url: PAGE_URL,
      siteName: "Karvaahh",
      title: SEO_TITLE,
      description: SEO_DESCRIPTION,
      locale: "en",
      images,
    },
    twitter: {
      card: images ? "summary_large_image" : "summary",
      title: SEO_TITLE,
      description: SEO_DESCRIPTION,
      images: images?.map((i) => i.url),
    },
  };
}

type Json = Record<string, unknown>;

/**
 * One @graph: CollectionPage + BreadcrumbList + Organization + ItemList.
 * The ItemList only carries URLs that really exist (resolved routes and province
 * pages), so structured data never points at a 404.
 */
export function buildJsonLd(ctx: HubContext): Json {
  const orgId = `${SITE_URL}/#organization`;

  const breadcrumb: Json = {
    "@type": "BreadcrumbList",
    "@id": `${PAGE_URL}#breadcrumb`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Destinations", item: PAGE_URL },
    ],
  };

  const items: Json[] = [];
  for (const p of PROVINCES) {
    const href = ctx.provinceRoutes[p.id];
    if (!href) continue;
    items.push({
      "@type": "TouristDestination",
      name: p.name,
      description: p.blurb,
      url: `${SITE_URL}${href}`,
      containedInPlace: { "@type": "Country", name: "Nepal" },
    });
  }
  for (const slug of FEATURED) {
    const d = DESTINATION_BY_SLUG.get(slug);
    const href = ctx.routes[slug];
    if (!d || !href) continue;
    items.push({
      "@type": "TouristDestination",
      name: d.name,
      ...(d.copy ? { description: d.copy.short } : {}),
      url: `${SITE_URL}${href.split("#")[0]}`,
    });
  }

  const graph: Json[] = [
    {
      "@type": "CollectionPage",
      "@id": `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: SEO_TITLE,
      description: SEO_DESCRIPTION,
      inLanguage: "en",
      isPartOf: { "@type": "WebSite", "@id": `${SITE_URL}/#website`, url: SITE_URL, name: "Karvaahh" },
      about: { "@id": orgId },
      breadcrumb: { "@id": `${PAGE_URL}#breadcrumb` },
      ...(items.length ? { mainEntity: { "@id": `${PAGE_URL}#destinations` } } : {}),
    },
    breadcrumb,
    {
      "@type": "Organization",
      "@id": orgId,
      name: "Karvaahh",
      url: SITE_URL,
      slogan: "Live to Travel",
    },
  ];

  if (items.length) {
    graph.push({
      "@type": "ItemList",
      "@id": `${PAGE_URL}#destinations`,
      name: "Karvaahh travel destinations",
      numberOfItems: items.length,
      itemListElement: items.map((item, i) => ({ "@type": "ListItem", position: i + 1, item })),
    });
  }

  return { "@context": "https://schema.org", "@graph": graph };
}

/** JSON for a <script type="application/ld+json"> tag. `<` is escaped to avoid breaking out of the tag. */
export function serializeJsonLd(data: Json): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
