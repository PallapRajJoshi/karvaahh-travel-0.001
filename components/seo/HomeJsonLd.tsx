import { contactInfo, socialLinks } from "@/lib/navigation-data";
import { SEO_DEFAULTS, siteConfig } from "@/lib/site-config";

/**
 * Homepage structured data: TravelAgency + WebSite.
 * Uses the same @id as the contact page so search engines merge the nodes.
 * Only facts already published on the site are included — no ratings or reviews.
 */
export default function HomeJsonLd() {
  const origin = siteConfig.url;
  const offices = [contactInfo.india, contactInfo.nepal];

  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TravelAgency",
        "@id": `${origin}/#organization`,
        name: SEO_DEFAULTS.organizationName,
        alternateName: siteConfig.brandName,
        slogan: siteConfig.tagline,
        url: origin,
        logo: `${origin}${SEO_DEFAULTS.logo}`,
        image: `${origin}${SEO_DEFAULTS.logo}`,
        description: SEO_DEFAULTS.description,
        areaServed: ["Nepal", "India", "International"],
        contactPoint: offices.map((o) => ({
          "@type": "ContactPoint",
          contactType: "customer service",
          telephone: o.phone,
          email: o.email,
          areaServed: o.label === "India" ? "IN" : "NP",
          availableLanguage: ["English", "Hindi", "Nepali"],
        })),
        sameAs: socialLinks.filter((s) => s.icon !== "whatsapp").map((s) => s.href),
      },
      {
        "@type": "WebSite",
        "@id": `${origin}/#website`,
        url: origin,
        name: siteConfig.siteTitle,
        inLanguage: "en",
        publisher: { "@id": `${origin}/#organization` },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      // JSON.stringify output is escaped for "<" so it cannot close the script tag.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\u003c") }}
    />
  );
}
