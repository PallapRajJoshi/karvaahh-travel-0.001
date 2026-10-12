"use client";

import { ArrowRight, Clock, Sun } from "lucide-react";
import type { AntarcticaDestination } from "@/data/antarctica/types";
import { destAnchor } from "@/lib/antarctica/config";
import PolarMedia from "./PolarMedia";

/** Editorial destination card: tall photo, overlaid title, facts and two actions. */
export default function AntarcticaDestinationCard({
  d,
  count,
  onExplore,
  onViewExpeditions,
}: {
  d: AntarcticaDestination;
  count: number;
  onExplore: () => void;
  onViewExpeditions: () => void;
}) {
  return (
    <article className="an-dest" id={destAnchor(d.id)} aria-labelledby={`${destAnchor(d.id)}-h`}>
      <div className="an-dest__media">
        <PolarMedia id={d.image} sizes="(min-width: 1100px) 30vw, (min-width: 640px) 50vw, 100vw" />
        <div className="an-dest__overlay">
          <p className="an-dest__area">{d.area}</p>
          <h3 className="an-dest__title" id={`${destAnchor(d.id)}-h`}>{d.name}</h3>
          <p className="an-dest__tagline">{d.tagline}</p>
        </div>
        <span className="an-dest__type">{d.expeditionType}</span>
      </div>
      <div className="an-dest__body">
        <p className="an-dest__desc">{d.description}</p>
        <dl className="an-dest__facts">
          {d.duration && (
            <div><dt><Clock size={14} aria-hidden="true" /><span className="pkg-sr">Typical duration</span></dt><dd>{d.duration}</dd></div>
          )}
          {d.recommendedSeason && (
            <div><dt><Sun size={14} aria-hidden="true" /><span className="pkg-sr">Recommended season</span></dt><dd>{d.recommendedSeason}</dd></div>
          )}
        </dl>
        <div className="an-dest__group">
          <p className="an-dest__label">Possible wildlife</p>
          <ul className="an-tags">{d.wildlife.map((w) => <li key={w}>{w}</li>)}</ul>
        </div>
        <div className="an-dest__group">
          <p className="an-dest__label">Main experiences</p>
          <ul className="an-tags an-tags--soft">{d.experiences.slice(0, 4).map((x) => <li key={x}>{x}</li>)}</ul>
        </div>
        <div className="an-dest__actions">
          <button type="button" className="pkg-btn an-btn--navy" onClick={onExplore} aria-haspopup="dialog">
            Explore <span className="pkg-sr">{d.name}</span>
          </button>
          <button type="button" className="pkg-btn pkg-btn--text" onClick={onViewExpeditions}>
            View Expeditions{count ? ` (${count})` : ""} <ArrowRight size={16} className="pkg-arrow" aria-hidden="true" />
          </button>
        </div>
      </div>
    </article>
  );
}
