"use client";

import { ArrowRight, Clock, Sun } from "lucide-react";
import { provinceName, styleById } from "@/data/south-africa/styles";
import type { SouthAfricaDestination } from "@/data/south-africa/types";
import { destAnchor } from "@/lib/south-africa/config";
import { ZaMedia } from "./ZaPrimitives";

/**
 * Editorial destination card. Featured destinations render as a wide
 * horizontal feature, the rest as tall image-led cards, so the grid never
 * reads as a row of identical tiles.
 */
export default function SouthAfricaDestinationCard({
  d,
  count,
  onExplore,
  onViewPackages,
}: {
  d: SouthAfricaDestination;
  count: number;
  onExplore: () => void;
  onViewPackages: () => void;
}) {
  const hid = `${destAnchor(d.id)}-h`;
  return (
    <article className={`za-dest${d.featured ? " za-dest--feature" : ""}`} id={destAnchor(d.id)} aria-labelledby={hid}>
      <div className="za-dest__media">
        <ZaMedia id={d.image} label={d.name} sizes={d.featured ? "(min-width: 1100px) 40vw, (min-width: 640px) 50vw, 86vw" : "(min-width: 1100px) 25vw, (min-width: 640px) 50vw, 86vw"} />
        <div className="za-dest__overlay">
          <p className="za-dest__area">{d.area ?? provinceName(d.region)}</p>
          <h3 className="za-dest__title" id={hid}>{d.name}</h3>
          <p className="za-dest__tagline">{d.tagline}</p>
        </div>
      </div>
      <div className="za-dest__body">
        <p className="za-dest__desc">{d.description}</p>
        <ul className="za-dest__attractions" aria-label="Major attractions">
          {d.attractions.slice(0, d.featured ? 5 : 3).map((a) => <li key={a}>{a}</li>)}
        </ul>
        <dl className="za-dest__facts">
          {d.duration && <div><dt><Clock size={14} aria-hidden="true" /><span className="pkg-sr">Recommended duration</span></dt><dd>{d.duration}</dd></div>}
          {d.idealSeason && <div><dt><Sun size={14} aria-hidden="true" /><span className="pkg-sr">Ideal season</span></dt><dd>{d.idealSeason}</dd></div>}
        </dl>
        <ul className="za-tags" aria-label="Travel styles">
          {d.travelStyles.slice(0, 4).map((s) => <li key={s}>{styleById(s)?.label}</li>)}
        </ul>
        <div className="za-dest__actions">
          <button type="button" className="pkg-btn za-btn--earth" onClick={onExplore} aria-haspopup="dialog">
            Explore<span className="pkg-sr"> {d.name}</span>
          </button>
          <button type="button" className="pkg-btn pkg-btn--text" onClick={onViewPackages}>
            View Packages{count ? ` (${count})` : ""}<span className="pkg-sr"> for {d.name}</span> <ArrowRight size={16} className="pkg-arrow" aria-hidden="true" />
          </button>
        </div>
      </div>
    </article>
  );
}
