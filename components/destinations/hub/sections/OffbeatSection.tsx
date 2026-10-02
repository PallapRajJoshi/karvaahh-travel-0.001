import { OFFBEAT_PICKS, pick } from "@/lib/destinations/data";
import type { ResolveContext } from "@/lib/destinations/types";
import { DestinationLargeCard } from "../cards/DestinationLargeCard";
import { ExplorerLink } from "../ExplorerLink";
import { ArrowIcon } from "../Icons";
import { Section } from "../Section";
import "./sections.css";

/** "Go Beyond the Ordinary" — a cinematic, swipeable rail, deliberately unlike the other sections. */
export function OffbeatSection({ ctx }: { ctx: ResolveContext }) {
  return (
    <Section
      id="offbeat"
      tone="dark"
      className="dh-section--offbeat"
      eyebrow="Offbeat & unexplored"
      title="Go Beyond the Ordinary"
      lede="Glacial lakes, hidden valleys and far-western trails that most itineraries never reach. Quiet, demanding and unforgettable."
      actions={
        <ExplorerLink filters={{ exp: "offbeat" }} className="dh-btn dh-btn--gold">
          Explore offbeat journeys
          <ArrowIcon />
        </ExplorerLink>
      }
    >
      <ul className="dh-rail dh-rail--cinema" role="list" aria-label="Offbeat destinations, scroll horizontally">
        {pick(OFFBEAT_PICKS).map((d, i) => (
          <li key={d.slug}>
            <DestinationLargeCard destination={d} ctx={ctx} variant="cinema" index={i + 1} />
          </li>
        ))}
      </ul>
    </Section>
  );
}
