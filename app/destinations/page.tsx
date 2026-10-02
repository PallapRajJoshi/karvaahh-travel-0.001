import type { Metadata } from "next";
import { DestinationsHub } from "@/components/destinations/hub/DestinationsHub";
import { getHubContext } from "@/lib/destinations/discover-routes";
import { buildJsonLd, buildMetadata, serializeJsonLd } from "@/lib/destinations/seo";

/**
 * /destinations — the master destination hub.
 *
 * Statically generated. Province pages live at /destinations/[province-slug]; this file
 * is the index above them and does not touch them. Filters are kept in the query string
 * and every variant canonicalises to /destinations.
 */
export function generateMetadata(): Metadata {
  return buildMetadata(getHubContext());
}

export default function DestinationsPage() {
  const ctx = getHubContext();
  return (
    <>
      <script
        type="application/ld+json"
        // Built from first-party constants and escaped (see serializeJsonLd).
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(buildJsonLd(ctx)) }}
      />
      <DestinationsHub ctx={ctx} />
    </>
  );
}
