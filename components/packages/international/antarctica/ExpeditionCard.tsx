"use client";

import { useId } from "react";
import { Anchor, ArrowRight, BedDouble, MessageCircle, Plane, Sun } from "lucide-react";
import { cabinById } from "@/data/antarctica/cruise";
import { styleById } from "@/data/antarctica/styles";
import type { AntarcticaExpedition } from "@/data/antarctica/types";
import { enquireExpedition } from "@/lib/antarctica/config";
import { customize } from "@/lib/antarctica/explorer";
import PolarMedia from "./PolarMedia";

/**
 * Expedition template card. Price and departures render only when real data
 * is configured; otherwise the card says so plainly.
 */
export default function ExpeditionCard({ e, compact = false, dark = false }: { e: AntarcticaExpedition; compact?: boolean; dark?: boolean }) {
  const hid = useId();
  const label = `${e.duration === "Flexible" ? "" : `${e.duration} `}${e.title}`;
  return (
    <article className={`an-exp${compact ? " an-exp--compact" : ""}${dark ? " an-exp--dark" : ""}`} aria-labelledby={hid}>
      <div className="an-exp__media">
        <PolarMedia id={e.image} sizes="(min-width: 1100px) 30vw, (min-width: 640px) 50vw, 85vw" />
        <span className="an-exp__dur">{e.duration}</span>
        <span className="an-exp__badge">{e.kind === "custom" ? "Fully custom" : "Configurable template"}</span>
      </div>
      <div className="an-exp__body">
        <h3 className="an-exp__title" id={hid}>{e.title}</h3>
        <ol className="an-exp__route" aria-label="Typical route">
          {e.route.map((r, i) => (
            <li key={`${r}-${i}`}>{r}</li>
          ))}
        </ol>
        {!compact && <p className="an-exp__summary">{e.summary}</p>}

        <ul className="an-exp__styles" aria-label="Expedition style">
          {e.styles.slice(0, compact ? 3 : 4).map((s) => (
            <li key={s}>{styleById(s)?.label ?? s}</li>
          ))}
        </ul>

        <dl className="an-exp__facts">
          <div>
            <dt>Possible wildlife</dt>
            <dd>{e.wildlife.join(" · ")}</dd>
          </div>
          {!compact && e.cabinCategories && (
            <div>
              <dt><BedDouble size={14} aria-hidden="true" /> Cabin categories</dt>
              <dd>{e.cabinCategories.map((c) => cabinById(c)?.name).join(" · ")} <span className="an-muted">(subject to vessel)</span></dd>
            </div>
          )}
          <div>
            <dt>{e.crossing === "air-cruise" ? <Plane size={14} aria-hidden="true" /> : <Anchor size={14} aria-hidden="true" />} Departure gateway</dt>
            <dd>{e.gateway}</dd>
          </div>
          <div>
            <dt><Sun size={14} aria-hidden="true" /> Best season</dt>
            <dd>{e.bestSeason}</dd>
          </div>
          {e.departures && e.departures.length > 0 && (
            <div>
              <dt>Confirmed departures</dt>
              <dd>{e.departures.join(" · ")}</dd>
            </div>
          )}
        </dl>

        <div className="an-exp__foot">
          <p className="an-exp__price">{e.price ? <><span>From</span> {e.price}</> : <span>Price on request · matched to real departures</span>}</p>
          <div className="an-exp__actions">
            <a href={enquireExpedition(label)} target="_blank" rel="noopener noreferrer" className="pkg-btn an-btn--navy">
              <MessageCircle size={16} aria-hidden="true" /> Enquire<span className="pkg-sr"> about {label} (opens WhatsApp)</span>
            </a>
            <button type="button" className="pkg-btn pkg-btn--text" onClick={() => customize({ title: label, styles: e.styles.slice(0, 2) })}>
              Customize<span className="pkg-sr"> {label}</span> <ArrowRight size={16} className="pkg-arrow" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
