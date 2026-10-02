import { pick, SPIRITUAL_PICKS } from "@/lib/destinations/data";
import type { ResolveContext } from "@/lib/destinations/types";
import { DestinationCard } from "../cards/DestinationCard";
import { ExplorerLink } from "../ExplorerLink";
import { ArrowIcon } from "../Icons";
import "./sections.css";

/** "Journeys That Go Beyond Travel" — pilgrimage routes beside a pinned introduction. */
export function SpiritualSection({ ctx }: { ctx: ResolveContext }) {
  const items = pick(SPIRITUAL_PICKS);
  return (
    <section id="spiritual" className="dh-section" aria-labelledby="spiritual-title">
      <div className="dh-container dspirit">
        <div className="dspirit__intro dh-reveal">
          <p className="dh-eyebrow">Spiritual journeys</p>
          <h2 className="dh-title" id="spiritual-title">
            Journeys That Go Beyond Travel
          </h2>
          <p className="dh-lede">
            From Pashupatinath and Muktinath to Kedarnath and Kailash, we plan pilgrimages with the pace, comfort and
            care they deserve.
          </p>
          <ExplorerLink filters={{ exp: "spiritual" }} className="dh-btn dh-btn--dark">
            Explore Spiritual Journeys
            <ArrowIcon />
          </ExplorerLink>
        </div>
        <ul className="dspirit__list" role="list">
          {items.map((d) => (
            <li key={d.slug} className="dh-reveal">
              <DestinationCard destination={d} ctx={ctx} layout="row" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
