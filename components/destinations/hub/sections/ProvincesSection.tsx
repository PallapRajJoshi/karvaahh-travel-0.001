import type { HubContext } from "@/lib/destinations/discover-routes";
import { PROVINCES } from "@/lib/destinations/taxonomy";
import { DestinationProvinceCard } from "../cards/DestinationProvinceCard";
import { Section } from "../Section";
import "./sections.css";

/** Nepal by province. Each card links to the existing province page. */
export function ProvincesSection({ ctx }: { ctx: HubContext }) {
  return (
    <Section
      id="nepal-provinces"
      tone="sand"
      eyebrow="Nepal by province"
      title="Seven provinces, seven different Nepals"
      lede="Choose the part of Nepal that calls to you. Each province has its own landscape, culture and pace."
    >
      <ul className="dprovinces" role="list">
        {PROVINCES.map((p) => (
          <li key={p.id} className="dh-reveal">
            <DestinationProvinceCard province={p} href={ctx.provinceRoutes[p.id]} ctx={ctx} />
          </li>
        ))}
      </ul>
    </Section>
  );
}
