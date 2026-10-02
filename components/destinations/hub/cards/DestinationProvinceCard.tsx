import Link from "next/link";
import type { ProvinceMeta, ResolveContext } from "@/lib/destinations/types";
import { DestinationArt } from "../DestinationArt";
import { ArrowIcon } from "../Icons";
import "./cards.css";

interface Props {
  province: ProvinceMeta;
  /** Existing province page, if the project has one. */
  href?: string;
  ctx: ResolveContext;
}

/** Province tile. Links to the existing province page; shows no link if that page is missing. */
export function DestinationProvinceCard({ province: p, href, ctx }: Props) {
  const src = ctx.images[`province-${p.id}`];
  return (
    <article className="dprov">
      <div className="dprov__media">
        <DestinationArt
          theme="himalaya"
          seed={p.id}
          src={src}
          alt={`${p.name}, Nepal`}
          sizes="(min-width: 1200px) 290px, (min-width: 768px) 33vw, (min-width: 520px) 50vw, 92vw"
        />
      </div>
      <div className="dprov__body">
        <h3 className="dprov__name">{p.name}</h3>
        <p className="dprov__blurb">{p.blurb}</p>
        <ul className="dprov__list" aria-label={`Major destinations in ${p.name}`}>
          {p.highlights.map((h) => (
            <li key={h} className="dh-tag">
              {h}
            </li>
          ))}
        </ul>
        {href ? (
          <Link href={href} className="dprov__cta">
            {p.cta}
            <ArrowIcon />
          </Link>
        ) : (
          <p className="dprov__soon">Province guide coming soon</p>
        )}
      </div>
    </article>
  );
}
