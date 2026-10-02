import { COUNTRY_PICKS, countBy, pick } from "@/lib/destinations/data";
import type { CountryId, ResolveContext } from "@/lib/destinations/types";
import { DestinationCard } from "../cards/DestinationCard";
import { DestinationLargeCard } from "../cards/DestinationLargeCard";
import { ExplorerLink } from "../ExplorerLink";
import { ArrowIcon } from "../Icons";
import { Section } from "../Section";
import "./sections.css";

interface Props {
  country: Exclude<CountryId, "international">;
  ctx: ResolveContext;
  /** grid: three tall cards + three compact cards. rail: one swipeable row of tall cards. */
  layout: "grid" | "rail";
  tone?: "light" | "sand";
}

const COPY = {
  nepal: {
    eyebrow: "Nepal",
    title: "Nepal, from valley to summit",
    lede: "Temple squares in Kathmandu, lakeside Pokhara, Terai wildlife and the highest mountains on earth, all within a single small country.",
  },
  india: {
    eyebrow: "India",
    title: "India's sacred and storied places",
    lede: "Ganga ghats and Himalayan shrines, palace cities and the long coast of Kerala: India rewards slow, well-planned travel.",
  },
} as const;

export function CountrySection({ country, ctx, layout, tone = "light" }: Props) {
  const c = COPY[country];
  const items = pick(COUNTRY_PICKS[country]);
  const total = countBy(country);
  const action = (
    <ExplorerLink filters={{ country }} className="dh-btn dh-btn--dark">
      Browse all {total} {c.eyebrow} destinations
      <ArrowIcon />
    </ExplorerLink>
  );

  return (
    <Section id={country} tone={tone} eyebrow={c.eyebrow} title={c.title} lede={c.lede} actions={action}>
      {layout === "grid" ? (
        <div className="dcountrysec">
          <ul className="dcountrysec__lead" role="list">
            {items.slice(0, 3).map((d) => (
              <li key={d.slug} className="dh-reveal">
                <DestinationLargeCard destination={d} ctx={ctx} />
              </li>
            ))}
          </ul>
          <ul className="dcountrysec__more" role="list">
            {items.slice(3).map((d) => (
              <li key={d.slug} className="dh-reveal">
                <DestinationCard destination={d} ctx={ctx} />
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <ul className="dh-rail dh-rail--large" role="list">
          {items.map((d) => (
            <li key={d.slug}>
              <DestinationLargeCard destination={d} ctx={ctx} />
            </li>
          ))}
        </ul>
      )}
    </Section>
  );
}
