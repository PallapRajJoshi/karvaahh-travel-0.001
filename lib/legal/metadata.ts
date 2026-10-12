import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import type { LegalDocument } from "./types";

/** Absolute canonical URL for a legal document (never relative, never depends on metadataBase). */
export const legalCanonicalUrl = (doc: Pick<LegalDocument, "path">) =>
  `${siteConfig.url}${doc.path}`;

/**
 * Next.js metadata for a legal page.
 * `title.absolute` keeps the exact "… | Karvaahh – Live to Travel" wording and
 * avoids a double brand suffix if the root layout defines a title template.
 */
export function buildLegalMetadata(doc: LegalDocument): Metadata {
  const url = legalCanonicalUrl(doc);
  return {
    title: { absolute: doc.metaTitle },
    description: doc.metaDescription,
    alternates: { canonical: url },
    robots: { index: true, follow: true },
    openGraph: {
      type: "website",
      url,
      title: doc.metaTitle,
      description: doc.metaDescription,
      siteName: siteConfig.siteTitle,
    },
    twitter: {
      card: "summary",
      title: doc.metaTitle,
      description: doc.metaDescription,
    },
  };
}
