import type { Metadata } from "next";
import PackagesPage from "@/components/packages/PackagesPage";
import { PACKAGES_PATH, SITE_URL } from "@/lib/packages/config";
import { getPackages } from "@/lib/packages/query";

const TITLE = "Travel Packages in Nepal, India & Worldwide | Karvaahh";
const DESCRIPTION =
  "Explore curated travel packages across Nepal, India and international destinations. Discover pilgrimage, adventure, family, honeymoon, trekking and customized journeys with Karvaahh.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  // Filtered views (?category=…) all canonicalise to the hub itself.
  alternates: { canonical: `${SITE_URL}${PACKAGES_PATH}` },
  openGraph: {
    type: "website",
    url: `${SITE_URL}${PACKAGES_PATH}`,
    siteName: "Karvaahh",
    title: TITLE,
    description: DESCRIPTION,
    locale: "en_IN",
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

const json = (data: unknown) => JSON.stringify(data).replace(/</g, "\\u003c");

export default function Page() {
  const packages = getPackages();
  const pageUrl = `${SITE_URL}${PACKAGES_PATH}`;

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Packages", item: pageUrl },
    ],
  };

  // Only packages with a real detail page are listed, so every item URL resolves.
  const linked = packages.filter((p) => p.href);
  const collection = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${pageUrl}#collection`,
    url: pageUrl,
    name: TITLE,
    description: DESCRIPTION,
    // Reference only. Assumes the site's Organization node already uses this @id.
    publisher: { "@id": `${SITE_URL}/#organization` },
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: linked.length,
      itemListElement: linked.map((p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        url: `${SITE_URL}${p.href}`,
        name: p.name,
      })),
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json(collection) }} />
      <PackagesPage packages={packages} />
    </>
  );
}
