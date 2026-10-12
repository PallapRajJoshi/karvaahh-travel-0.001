import {
  ABOUT_CANONICAL,
  ABOUT_DESCRIPTION,
  ABOUT_SITE_URL,
  ABOUT_TITLE,
  BRAND_FULL_NAME,
  BRAND_NAME,
  BRAND_SLOGAN,
  SOCIAL_PROFILES,
} from "@/lib/about/config";

/**
 * Structured data for /about: AboutPage + TravelAgency + BreadcrumbList.
 * Contains only facts already public on the page. No ratings, reviews, addresses,
 * phone numbers or e-mails: none are invented, and none are added until they live
 * in the site config.
 */
export function AboutJsonLd() {
  const orgId = `${ABOUT_SITE_URL}/#organization`;

  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        "@id": `${ABOUT_CANONICAL}#webpage`,
        url: ABOUT_CANONICAL,
        name: ABOUT_TITLE,
        description: ABOUT_DESCRIPTION,
        inLanguage: "en",
        about: { "@id": orgId },
        breadcrumb: { "@id": `${ABOUT_CANONICAL}#breadcrumb` },
      },
      {
        "@type": "TravelAgency",
        "@id": orgId,
        name: BRAND_NAME,
        alternateName: BRAND_FULL_NAME,
        slogan: BRAND_SLOGAN,
        url: ABOUT_SITE_URL,
        description:
          "Karvaahh creates personalized Nepal, India and international journeys, including Himalayan adventures, spiritual tours, family holidays and customized travel experiences.",
        areaServed: [
          { "@type": "Country", name: "Nepal" },
          { "@type": "Country", name: "India" },
        ],
        ...(SOCIAL_PROFILES.length > 0 ? { sameAs: SOCIAL_PROFILES } : {}),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${ABOUT_CANONICAL}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: ABOUT_SITE_URL },
          { "@type": "ListItem", position: 2, name: "About", item: ABOUT_CANONICAL },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      // Escape "<" so no string in the data can ever close the script tag.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
