import Link from "next/link";
import { COUNTRY_LABEL, primaryCategory } from "@/lib/destinations/present";
import type { Destination, ResolveContext } from "@/lib/destinations/types";
import { DestinationArt } from "../DestinationArt";
import { ArrowUpRightIcon } from "../Icons";
import { resolveCard } from "./resolve";
import "./cards.css";

interface Props {
  destination: Destination;
  ctx: ResolveContext;
  wide?: boolean;
  priority?: boolean;
}

/** Large editorial card for "Where Will You Go Next?". */
export function DestinationFeaturedCard({ destination: d, ctx, wide, priority }: Props) {
  const r = resolveCard(d, ctx);
  return (
    <article className={`dfeat${wide ? " dfeat--wide" : ""}`}>
      <DestinationArt
        theme={r.theme}
        seed={d.slug}
        src={r.src}
        alt={r.alt}
        priority={priority}
        sizes={wide ? "(min-width: 1024px) 66vw, 92vw" : "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 92vw"}
      />
      <div className="dfeat__top">
        <span className="dfeat__chip">{primaryCategory(d)}</span>
        <span className="dfeat__arrow" aria-hidden="true">
          <ArrowUpRightIcon />
        </span>
      </div>
      <div className="dfeat__body">
        <p className="dfeat__country">{COUNTRY_LABEL[d.country]}</p>
        <h3 className="dfeat__name">{d.name}</h3>
        {d.copy ? <p className="dfeat__copy">{d.copy.short}</p> : null}
        <Link href={r.href} className="dfeat__cta">
          {r.label}
        </Link>
      </div>
    </article>
  );
}
