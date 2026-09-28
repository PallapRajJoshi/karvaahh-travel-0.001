import CampImage from "../shared/CampImage";
import { IconArrow, IconCalendar, IconMountain, IconPin } from "../shared/Icons";
import { destinationHref, type CampingDestination } from "@/data/campingDestinations";
import "./CampingDestinationCard.css";

const SIZES: Record<CampingDestination["size"], string> = {
  standard: "(max-width: 767px) 92vw, (max-width: 1100px) 46vw, 24vw",
  feature: "(max-width: 767px) 92vw, (max-width: 1100px) 92vw, 48vw",
  wide: "(max-width: 767px) 92vw, 96vw",
};

export default function CampingDestinationCard({ d }: { d: CampingDestination }) {
  const href = destinationHref(d);
  return (
    <article className={`cmp-dcard cmp-dcard--${d.size}`}>
      <CampImage src={d.image} alt={d.imageAlt} tone={d.tone} loading="lazy" sizes={SIZES[d.size]} />
      <div className="cmp-dcard__shade" aria-hidden="true" />
      <div className="cmp-dcard__body">
        <p className="cmp-dcard__region">
          <IconPin size={14} /> {d.region}
        </p>
        <h3 className="cmp-dcard__name">
          <a href={href} className="cmp-dcard__link">{d.name}</a>
        </h3>
        <p className="cmp-dcard__desc">{d.description}</p>
        <ul className="cmp-dcard__meta" aria-label={`${d.name} details`}>
          <li className="cmp-dcard__tag cmp-dcard__tag--type">{d.campingType}</li>
          <li className={`cmp-dcard__tag cmp-dcard__tag--${d.difficulty.toLowerCase()}`}>
            <IconMountain size={13} /> {d.difficulty}
          </li>
          <li className="cmp-dcard__tag">
            <IconCalendar size={13} /> Best: {d.bestSeason}
          </li>
        </ul>
        <span className="cmp-dcard__explore" aria-hidden="true">
          Explore <IconArrow size={16} />
        </span>
      </div>
    </article>
  );
}
