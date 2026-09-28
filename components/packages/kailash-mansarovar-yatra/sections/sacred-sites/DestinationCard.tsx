import Image from "next/image";
import Link from "next/link";
import type { SacredDestination } from "../../types";
import Icon from "../../shared/Icon";

/**
 * Whole card is clickable via a stretched link on the title, so there is one
 * tab stop per card and screen readers hear a meaningful link name.
 */
export default function DestinationCard({ d }: { d: SacredDestination }) {
  return (
    <article className="km-dest">
      <div className="km-frame km-dest__media">
        <Image src={d.image.src} alt={d.image.alt} fill sizes="(min-width: 1240px) 290px, (min-width: 768px) 45vw, 92vw" />
        <span className="km-badge km-badge--glass km-dest__badge">{d.category}</span>
      </div>
      <div className="km-dest__body">
        <p className="km-dest__location">
          <Icon name="pin" size={14} />
          {d.location}
        </p>
        <h3 className="km-dest__name">
          <Link href={d.href} className="km-dest__link">
            {d.name}
          </Link>
        </h3>
        <p className="km-dest__tagline">{d.tagline}</p>
        <p className="km-dest__desc">{d.description}</p>
        <span className="km-link km-dest__cta" aria-hidden="true">
          {d.linkLabel ?? "Explore Destination"}
          <Icon name="arrow-right" size={16} />
        </span>
      </div>
    </article>
  );
}
