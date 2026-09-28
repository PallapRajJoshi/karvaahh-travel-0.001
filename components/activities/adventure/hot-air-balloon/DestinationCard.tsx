import Image from "next/image";
import StatusBadge from "./StatusBadge";
import {
  enquireHref,
  formatPriceRange,
  type BalloonDestination,
} from "./data/hotAirBalloonData";

export default function DestinationCard({ d }: { d: BalloonDestination }) {
  const titleId = `hab-dest-${d.slug}`;
  return (
    <article className="hab-dest" aria-labelledby={titleId}>
      <div className="hab-dest__media">
        <Image
          src={d.image}
          alt={d.imageAlt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1100px) 50vw, 25vw"
          className="hab-dest__img"
        />
        <span className="hab-dest__province">{d.province} Province</span>
      </div>
      <div className="hab-dest__body">
        <StatusBadge status={d.status} note={d.statusNote} />
        <h3 id={titleId} className="hab-dest__name">{d.name}</h3>
        <p className="hab-dest__desc">{d.description}</p>
        {d.availabilityStatement && (
          <p className="hab-dest__statement">{d.availabilityStatement}</p>
        )}
        <dl className="hab-dest__price">
          <dt>{d.priceNpr ? "Indicative price" : "Price"}</dt>
          <dd>{formatPriceRange(d.priceNpr)}</dd>
        </dl>
        <a href={enquireHref(d.slug)} className="hab-btn hab-btn--outline hab-dest__cta">
          {d.cta}
        </a>
      </div>
    </article>
  );
}
