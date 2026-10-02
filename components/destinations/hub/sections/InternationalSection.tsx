import { COUNTRY_PICKS, pick, countBy } from "@/lib/destinations/data";
import type { ResolveContext } from "@/lib/destinations/types";
import { DestinationCard } from "../cards/DestinationCard";
import { ExplorerLink } from "../ExplorerLink";
import { ArrowIcon } from "../Icons";
import { RegionShelf } from "../RegionShelf";
import { Section } from "../Section";
import "./sections.css";

export function InternationalSection({ ctx }: { ctx: ResolveContext }) {
  const items = pick(COUNTRY_PICKS.international).slice(0, 4);
  return (
    <Section
      id="international"
      tone="sand"
      eyebrow="International"
      title="Beyond the subcontinent"
      lede="Island escapes, great cities and holy places abroad, arranged by the same team that plans your Himalayan journeys."
      actions={
        <ExplorerLink filters={{ country: "international" }} className="dh-btn dh-btn--dark">
          Browse all {countBy("international")} international destinations
          <ArrowIcon />
        </ExplorerLink>
      }
    >
      <h3 className="dsec-sub dh-reveal">Choose a region</h3>
      <RegionShelf />
      <h3 className="dsec-sub dsec-sub--gap dh-reveal">Popular abroad</h3>
      <ul className="dpopular" role="list">
        {items.map((d) => (
          <li key={d.slug} className="dh-reveal">
            <DestinationCard destination={d} ctx={ctx} />
          </li>
        ))}
      </ul>
    </Section>
  );
}
