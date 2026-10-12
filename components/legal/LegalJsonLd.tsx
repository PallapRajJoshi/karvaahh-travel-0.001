import { LEGAL_LAST_UPDATED_ISO } from "@/lib/legal/config";
import { legalCanonicalUrl } from "@/lib/legal/metadata";
import type { LegalDocument } from "@/lib/legal/types";
import { siteConfig } from "@/lib/site-config";

/**
 * Schema.org JSON-LD: WebPage + BreadcrumbList + Organization.
 * Only facts that exist are emitted — no ratings, reviews, registration
 * numbers or contact details that have not been configured.
 */
export function LegalJsonLd({ doc }: { doc: LegalDocument }) {
  const pageUrl = legalCanonicalUrl(doc);
  const orgId = `${siteConfig.url}/#organization`;

  const organization: Record<string, unknown> = {
    "@type": "Organization",
    "@id": orgId,
    name: siteConfig.siteTitle,
    url: siteConfig.url,
  };
  if (siteConfig.legalEntityName) organization.legalName = siteConfig.legalEntityName;
  if (siteConfig.email) organization.email = siteConfig.email;
  if (siteConfig.phone) organization.telephone = siteConfig.phone;
  if (siteConfig.address) organization.address = siteConfig.address;

  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: doc.title,
        description: doc.metaDescription,
        inLanguage: "en",
        dateModified: LEGAL_LAST_UPDATED_ISO,
        isPartOf: { "@type": "WebSite", name: siteConfig.siteTitle, url: siteConfig.url },
        breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
        publisher: { "@id": orgId },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
          { "@type": "ListItem", position: 2, name: doc.shortTitle, item: pageUrl },
        ],
      },
      organization,
    ],
  };

  return (
    <script
      type="application/ld+json"
      // Escape "<" so content can never close the script element.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
