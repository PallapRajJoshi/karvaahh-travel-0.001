"use client";

import { useId } from "react";
import { ArrowRight, BedDouble, Binoculars, Car, MessageCircle } from "lucide-react";
import { saDestinationName } from "@/data/south-africa/destinations";
import { styleById } from "@/data/south-africa/styles";
import type { SouthAfricaPackage } from "@/data/south-africa/types";
import { enquireSA } from "@/lib/south-africa/config";
import { customize, openPackageDetail } from "@/lib/south-africa/explorer";
import { ZaMedia } from "./ZaPrimitives";

export const packageLabel = (p: SouthAfricaPackage) => `${p.duration === "Flexible" ? "" : `${p.duration} `}${p.title}`;

/**
 * Package card. A price renders only when real data is configured;
 * otherwise the card says "Price on request". Safari copy never promises sightings.
 */
export default function SouthAfricaPackageCard({ p, compact = false, dark = false }: { p: SouthAfricaPackage; compact?: boolean; dark?: boolean }) {
  const hid = useId();
  const label = packageLabel(p);
  return (
    <article className={`za-pkg${compact ? " za-pkg--compact" : ""}${dark ? " za-pkg--dark" : ""}`} aria-labelledby={hid}>
      <div className="za-pkg__media">
        <ZaMedia id={p.image} sizes="(min-width: 1100px) 30vw, (min-width: 640px) 50vw, 86vw" />
        <span className="za-pkg__dur">{p.duration}</span>
        <span className="za-pkg__badge">{p.kind === "custom" ? "Fully custom" : "Customizable template"}</span>
      </div>
      <div className="za-pkg__body">
        <h3 className="za-pkg__title" id={hid}>{p.title}</h3>
        <ol className="za-pkg__route" aria-label="Destinations">
          {p.destinations.map((d) => <li key={d}>{saDestinationName(d).replace(" National Park", "").replace(" (Port Elizabeth)", "")}</li>)}
        </ol>
        {!compact && <p className="za-pkg__summary">{p.summary}</p>}
        <ul className="za-pkg__styles" aria-label="Travel style">
          {p.styles.slice(0, compact ? 3 : 4).map((s) => <li key={s}>{styleById(s)?.label}</li>)}
        </ul>
        {!compact && (
          <ul className="za-pkg__highlights" aria-label="Highlights">
            {p.highlights.slice(0, 4).map((h) => <li key={h}>{h}</li>)}
          </ul>
        )}
        <dl className="za-pkg__facts">
          {p.accommodationCategory && <div><dt><BedDouble size={14} aria-hidden="true" /> Stay</dt><dd>{p.accommodationCategory}</dd></div>}
          {p.safariType && <div><dt><Binoculars size={14} aria-hidden="true" /> Safari</dt><dd>{p.safariType}</dd></div>}
          {p.transport && <div><dt><Car size={14} aria-hidden="true" /> Transport</dt><dd>{p.transport}</dd></div>}
        </dl>
        {!compact && p.inclusionsSummary && <p className="za-pkg__incl">{p.inclusionsSummary}</p>}
        <div className="za-pkg__foot">
          <p className="za-pkg__price">{p.price ? <><span>From</span> {p.price}</> : <span>Price on request · quoted for your dates</span>}</p>
          <div className="za-pkg__actions">
            <button type="button" className="pkg-btn za-btn--earth" onClick={() => openPackageDetail(p.id)} aria-haspopup="dialog">
              View Details<span className="pkg-sr"> of {label}</span>
            </button>
            <button type="button" className="pkg-btn pkg-btn--text" onClick={() => customize({ title: label, destinations: p.destinations, styles: p.styles.slice(0, 2) })}>
              Customize<span className="pkg-sr"> {label}</span> <ArrowRight size={15} className="pkg-arrow" aria-hidden="true" />
            </button>
            <a href={enquireSA(label)} target="_blank" rel="noopener noreferrer" className="pkg-btn pkg-btn--text">
              <MessageCircle size={15} aria-hidden="true" /> Enquire<span className="pkg-sr"> about {label} (opens WhatsApp)</span>
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
