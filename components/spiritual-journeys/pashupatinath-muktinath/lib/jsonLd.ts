import { BRAND, PAGE_URL, ROUTES, SITE_URL } from "../data/site";
import { faqs, images, seo } from "../data/pashupatinathMuktinathData";

const abs = (path: string) => (path.startsWith("http") ? path : `${SITE_URL}${path}`);

/**
 * Structured data for the page. FAQPage is built from the same `faqs` array
 * the visible accordion renders, so the two cannot drift apart.
 * TravelAgency uses only facts already public on the site: no address,
 * phone, ratings, reviews or prices.
 */
export function buildJsonLd() {
  const orgId = `${SITE_URL}/#organization`;
  const pageId = `${PAGE_URL}#webpage`;

  const organization = {
    "@type": "TravelAgency",
    "@id": orgId,
    name: BRAND.name,
    slogan: BRAND.slogan,
    url: SITE_URL,
  };

  const breadcrumb = {
    "@type": "BreadcrumbList",
    "@id": `${PAGE_URL}#breadcrumb`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: abs(ROUTES.home) },
      { "@type": "ListItem", position: 2, name: "Spiritual Journeys", item: abs(ROUTES.spiritualJourneys) },
      { "@type": "ListItem", position: 3, name: seo.breadcrumbName, item: PAGE_URL },
    ],
  };

  const webPage = {
    "@type": "WebPage",
    "@id": pageId,
    url: PAGE_URL,
    name: seo.title,
    description: seo.description,
    inLanguage: "en-IN",
    isPartOf: { "@type": "WebSite", "@id": `${SITE_URL}/#website`, url: SITE_URL, name: BRAND.name },
    publisher: { "@id": orgId },
    breadcrumb: { "@id": `${PAGE_URL}#breadcrumb` },
    about: [
      { "@type": "Place", name: "Pashupatinath Temple", address: { "@type": "PostalAddress", addressLocality: "Kathmandu", addressCountry: "NP" } },
      { "@type": "Place", name: "Muktinath Temple", address: { "@type": "PostalAddress", addressRegion: "Mustang", addressCountry: "NP" } },
    ],
    ...(images.og.ready ? { primaryImageOfPage: abs(images.og.src) } : {}),
  };

  const faqPage = {
    "@type": "FAQPage",
    "@id": `${PAGE_URL}#faq`,
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return {
    "@context": "https://schema.org",
    "@graph": [organization, webPage, breadcrumb, faqPage],
  };
}

/** Safe serialisation for inline <script> (prevents `</script>` breakouts). */
export function serializeJsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
