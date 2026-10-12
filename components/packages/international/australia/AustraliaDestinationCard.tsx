import { ArrowUpRight, CalendarDays, Clock } from "lucide-react";
import type { AustraliaDestination } from "@/data/australia/destinations";
import { australiaImage } from "@/data/australia/images";
import { australiaRegionById } from "@/data/australia/regions";
import { styleLabel } from "@/data/australia/travel-styles";
import { destAnchor } from "@/lib/australia/config";
import DestMedia from "../asia/DestMedia";

/**
 * Destination card. Hover devices: photo first, content slides up on hover or
 * keyboard focus. Touch / mobile: a clean stacked card.
 * "Explore" opens the details dialog; "View Packages" filters the package grid.
 */
export default function AustraliaDestinationCard({
  d,
  packageCount,
  onExplore,
  onPackages,
}: {
  d: AustraliaDestination;
  packageCount: number;
  onExplore: () => void;
  onPackages: () => void;
}) {
  const id = destAnchor(d.id);
  const region = australiaRegionById(d.region);

  return (
    <article className="us-dcard" id={id} aria-labelledby={`${id}-h`}>
      <div className="us-dcard__media">
        <DestMedia
          image={australiaImage(d.image)}
          label={d.name}
          tone={region.tone}
          sizes="(min-width: 1360px) 310px, (min-width: 1024px) 30vw, (min-width: 640px) 45vw, 92vw"
        />
        <span className="us-dcard__shade" aria-hidden="true" />
        {d.featured && <span className="us-dcard__badge">Featured</span>}
        {packageCount > 0 && (
          <span className="us-dcard__count">
            {packageCount} {packageCount === 1 ? "package" : "packages"}
          </span>
        )}
      </div>

      <div className="us-dcard__body">
        <p className="us-dcard__where">{region.name}</p>
        <h3 id={`${id}-h`} className="us-dcard__title">{d.name}</h3>
        <div className="us-dcard__reveal">
          <p className="us-dcard__desc">{d.description}</p>
          <ul className="us-dcard__attractions" aria-label={`Major attractions in ${d.name}`}>
            {d.attractions.slice(0, 4).map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
          <dl className="us-dcard__meta">
            {d.duration && (
              <div><dt><Clock size={14} aria-hidden="true" /><span className="pkg-sr">Suggested duration</span></dt><dd>{d.duration}</dd></div>
            )}
            {d.idealSeason && (
              <div><dt><CalendarDays size={14} aria-hidden="true" /><span className="pkg-sr">Ideal season</span></dt><dd>{d.idealSeason}</dd></div>
            )}
          </dl>
          <p className="us-dcard__styles">
            {d.travelStyles.slice(0, 3).map((s) => (
              <span key={s}>{styleLabel(s)}</span>
            ))}
          </p>
          <div className="us-dcard__cta">
            <button type="button" className="pkg-btn pkg-btn--light us-dcard__explore" onClick={onExplore} aria-haspopup="dialog">
              Explore <ArrowUpRight size={16} aria-hidden="true" /><span className="pkg-sr"> {d.name}</span>
            </button>
            {packageCount > 0 && (
              <button type="button" className="pkg-btn asia-btn--gold" onClick={onPackages}>
                View Packages<span className="pkg-sr"> for {d.name}</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
