import Link from "next/link";
import type { SacredDestination } from "../../types";
import { SmartImage } from "../../client/SmartImage";
import { staggerStyle } from "../../lib/format";
import { Icon } from "../Icon";

const categoryTone: Record<SacredDestination["category"], string> = {
  "Hindu Pilgrimage": "hindu",
  "Buddhist Heritage": "buddhist",
  "Hindu & Buddhist": "shared",
  "Sacred Lake": "lake",
};

/**
 * Sacred destination card. The whole card is clickable through a single
 * "stretched" link (one tab stop, one accessible name), not nested links.
 */
export function DestinationCard({ item, index }: { item: SacredDestination; index: number }) {
  return (
    <article className="nsa-dest-card" data-reveal="" style={staggerStyle(index)}>
      <div className="nsa-dest-card__media">
        <SmartImage
          image={item.image}
          sizes="(min-width: 1200px) 290px, (min-width: 1024px) 23vw, (min-width: 640px) 46vw, 92vw"
          className="nsa-dest-card__img"
        />
        <span className={`nsa-badge nsa-badge--${categoryTone[item.category]}`}>{item.category}</span>
      </div>
      <div className="nsa-dest-card__body">
        <p className="nsa-dest-card__location">
          <Icon name="pin" size={15} />
          {item.location}
        </p>
        <h3 className="nsa-dest-card__title">{item.name}</h3>
        <p className="nsa-dest-card__text">{item.description}</p>
        <Link href={item.link.href} className="nsa-dest-card__link nsa-stretched" aria-label={item.link.ariaLabel}>
          {item.link.label}
          <Icon name="arrow-right" size={16} />
        </Link>
      </div>
    </article>
  );
}
