import { ChevronDown, Info } from "lucide-react";
import { ESSENTIALS_NOTE, essentialGroups } from "@/data/antarctica/travelEssentials";
import PolarIcon from "./PolarIcon";
import SectionHead from "./SectionHead";

/** Preparation checklist as native disclosure groups (first one open). */
export default function AntarcticaTravelEssentials() {
  return (
    <section className="pkg-section pkg-section--sand an-ess" id="essentials" aria-labelledby="ess-h">
      <div className="pkg-container">
        <SectionHead
          id="ess-h"
          eyebrow="Antarctica travel essentials"
          title="Prepare for the Polar World"
          lede="Layers, waterproofs and the right documents make the difference between enduring the cold and enjoying it."
        />
        <div className="an-ess__grid">
          {essentialGroups.map((g, i) => (
            <details key={g.id} className="an-ess__group" open={i === 0}>
              <summary>
                <span className="an-ess__icon"><PolarIcon name={g.icon} size={18} /></span>
                <span className="an-ess__title">{g.title}</span>
                <ChevronDown size={18} className="an-ess__chev" aria-hidden="true" />
              </summary>
              <ul>
                {g.items.map((it) => (
                  <li key={it.title}><strong>{it.title}</strong><span>{it.text}</span></li>
                ))}
              </ul>
            </details>
          ))}
        </div>
        <p className="an-note"><Info size={16} aria-hidden="true" /> {ESSENTIALS_NOTE}</p>
      </div>
    </section>
  );
}
