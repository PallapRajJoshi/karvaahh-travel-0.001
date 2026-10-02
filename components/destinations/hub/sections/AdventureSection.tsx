import Link from "next/link";
import { ADVENTURE_PICKS, pick } from "@/lib/destinations/data";
import { locationLine, tagLabels, TYPE_LABEL } from "@/lib/destinations/present";
import type { ResolveContext } from "@/lib/destinations/types";
import { resolveCard } from "../cards/resolve";
import { ExplorerLink } from "../ExplorerLink";
import { ArrowIcon } from "../Icons";
import { Section } from "../Section";
import "./sections.css";

/** "Into the Wild" — a typographic index of treks and high-altitude journeys. */
export function AdventureSection({ ctx }: { ctx: ResolveContext }) {
  const items = pick(ADVENTURE_PICKS);
  return (
    <Section
      id="adventure"
      tone="dark"
      eyebrow="Trekking & adventure"
      title="Into the Wild"
      lede="Circuits, passes and base camps for every level of fitness, planned with guides who know the trail."
      actions={
        <ExplorerLink filters={{ exp: "trekking" }} className="dh-btn dh-btn--gold">
          Explore treks
          <ArrowIcon />
        </ExplorerLink>
      }
    >
      <ol className="dindex">
        {items.map((d, i) => {
          const r = resolveCard(d, ctx);
          return (
            <li key={d.slug} className="dindex__row dh-reveal">
              <Link href={r.href} className="dindex__link" aria-label={r.label}>
                <span className="dindex__num" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="dindex__main">
                  <span className="dindex__name">{d.name}</span>
                  <span className="dindex__place">{locationLine(d)}</span>
                </span>
                <span className="dindex__meta">
                  <span>{TYPE_LABEL[d.type]}</span>
                  <span>{tagLabels(d, 2).join(" · ")}</span>
                </span>
                <ArrowIcon className="dindex__arrow" />
              </Link>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
