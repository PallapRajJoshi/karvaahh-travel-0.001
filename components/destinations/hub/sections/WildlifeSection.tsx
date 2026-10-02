import { pick, WILDLIFE_PICKS } from "@/lib/destinations/data";
import type { ResolveContext } from "@/lib/destinations/types";
import { DestinationCard } from "../cards/DestinationCard";
import { ExplorerLink } from "../ExplorerLink";
import { ArrowIcon } from "../Icons";
import { Section } from "../Section";
import "./sections.css";

export function WildlifeSection({ ctx }: { ctx: ResolveContext }) {
  return (
    <Section
      id="wildlife"
      tone="sand"
      eyebrow="Wildlife & nature"
      title="Jungles, wetlands and tiger country"
      lede="Rhino and tiger in the Terai, birdlife on the Koshi, and India's most storied national parks."
      actions={
        <ExplorerLink filters={{ exp: "wildlife" }} className="dh-btn dh-btn--dark">
          Explore wildlife destinations
          <ArrowIcon />
        </ExplorerLink>
      }
    >
      <ul className="dpopular dpopular--four" role="list">
        {pick(WILDLIFE_PICKS).map((d) => (
          <li key={d.slug} className="dh-reveal">
            <DestinationCard destination={d} ctx={ctx} />
          </li>
        ))}
      </ul>
    </Section>
  );
}
