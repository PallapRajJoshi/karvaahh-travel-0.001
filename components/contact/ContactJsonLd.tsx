import { FAQS } from "@/lib/contact/content";
import { BRAND_NAME, type Channels } from "@/lib/contact/channels";

/**
 * Structured data: ContactPage → TravelAgency, BreadcrumbList and FAQPage.
 * Contact fields are included only when configured. No ratings or reviews.
 * (Google currently shows FAQ rich results for a limited set of sites; the
 * markup is still valid and harmless — drop FAQPage if you prefer.)
 */
export function ContactJsonLd({ channels }: { channels: Channels }) {
  const origin = channels.siteUrl;
  const pageUrl = channels.canonicalUrl;

  const agency: Record<string, unknown> = {
    "@type": "TravelAgency",
    "@id": `${origin}/#organization`,
    name: BRAND_NAME,
    url: origin,
    slogan: "Live to Travel",
    areaServed: ["Nepal", "India", "International"],
    address: {
      "@type": "PostalAddress",
      ...(channels.address ? { streetAddress: channels.address } : {}),
      addressLocality: "Kathmandu",
      addressCountry: "NP",
    },
    ...(channels.phone ? { telephone: channels.phone.display } : {}),
    ...(channels.email ? { email: channels.email.display } : {}),
    ...(channels.social.length ? { sameAs: channels.social.map((s) => s.href) } : {}),
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer service",
        ...(channels.phone ? { telephone: channels.phone.display } : {}),
        ...(channels.email ? { email: channels.email.display } : {}),
      },
    ],
  };

  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ContactPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: "Contact Karvaahh Tours & Travels",
        description:
          "Contact Karvaahh Tours & Travels for customized Nepal, India and international tours, pilgrimage journeys, adventure trips, family holidays and travel planning.",
        inLanguage: "en",
        about: { "@id": `${origin}/#organization` },
        mainEntity: { "@id": `${origin}/#organization` },
        breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
      },
      agency,
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${origin}/` },
          { "@type": "ListItem", position: 2, name: "Contact", item: pageUrl },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
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
      // JSON.stringify output is safe here; "<" is escaped to prevent </script> breakout.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph).replace(/</g, "\\u003c") }}
    />
  );
}
