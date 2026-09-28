import type { AerialActivityData } from "./types";
import { buildAerialJsonLd, serializeJsonLd } from "./schema";

export default function AerialJsonLd({ data }: { data: AerialActivityData }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: serializeJsonLd(buildAerialJsonLd(data)) }}
    />
  );
}
