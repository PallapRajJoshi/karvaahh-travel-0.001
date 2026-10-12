import { ChevronDown, Info } from "lucide-react";
import { PREP_NOTE, safariPrep } from "@/data/south-africa/travelEssentials";
import { ZaHead, ZaIcon } from "./ZaPrimitives";

/** Travel insurance + safari preparation, as native disclosure groups. */
export default function SafariPreparationSection() {
  return (
    <section className="pkg-section pkg-section--sand za-prep" id="preparation" aria-labelledby="prep-h">
      <div className="pkg-container">
        <ZaHead id="prep-h" eyebrow="Travel insurance + safari preparation" title="Pack and Prepare Like a Ranger" lede="Cold dawn drives, hot afternoons and light-aircraft luggage limits: a little preparation goes a long way." />
        <div className="za-ess__grid">
          {safariPrep.map((g, i) => (
            <details key={g.id} className="za-ess__group" open={i < 2}>
              <summary>
                <span className="za-ess__icon"><ZaIcon name={g.icon} size={18} /></span>
                <span className="za-ess__title">{g.title}</span>
                <ChevronDown size={18} className="za-ess__chev" aria-hidden="true" />
              </summary>
              <ul>{g.items.map((x) => <li key={x}>{x}</li>)}</ul>
            </details>
          ))}
        </div>
        <p className="za-note"><Info size={16} aria-hidden="true" /> {PREP_NOTE}</p>
      </div>
    </section>
  );
}
