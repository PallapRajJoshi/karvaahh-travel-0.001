import Link from "next/link";
import { locationLine, tagLabels } from "@/lib/destinations/present";
import type { Destination, ResolveContext } from "@/lib/destinations/types";
import { DestinationArt } from "../DestinationArt";
import { ArrowIcon } from "../Icons";
import { resolveCard } from "./resolve";
import "./cards.css";

interface Props {
  destination: Destination;
  ctx: ResolveContext;
  priority?: boolean;
  layout?: "stack" | "row";
}

/** Standard grid card: image, tags, name, place, optional editorial copy, one clear call to action. */
export function DestinationCard({ destination: d, ctx, priority, layout = "stack" }: Props) {
  const r = resolveCard(d, ctx);
  return (
    <article className={`dcard${layout === "row" ? " dcard--row" : ""}`} id={`d-${d.slug}`}>
      <div className="dcard__media">
        <DestinationArt
          theme={r.theme}
          seed={d.slug}
          src={r.src}
          alt={r.alt}
          priority={priority}
          sizes="(min-width: 1200px) 290px, (min-width: 768px) 33vw, (min-width: 520px) 50vw, 92vw"
        />
      </div>
      <div className="dcard__body">
        <ul className="dcard__tags" aria-label="Experiences">
          {tagLabels(d).map((t) => (
            <li key={t} className="dh-tag">
              {t}
            </li>
          ))}
        </ul>
        <h3 className="dcard__name">{d.name}</h3>
        <p className="dcard__place">{locationLine(d)}</p>
        {d.copy ? <p className="dcard__copy">{d.copy.short}</p> : null}
        <Link href={r.href} className="dcard__cta">
          <span>{r.label}</span>
          <ArrowIcon />
        </Link>
      </div>
    </article>
  );
}
