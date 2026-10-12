import { Info } from "lucide-react";
import { visibleDestinations } from "@/data/russia/destinations";
import { russiaPackageCount } from "@/data/russia/packages";
import Reveal from "../../Reveal";
import RuDestinationCard from "./RuDestinationCard";

const CONDITIONS = ["Flight connectivity", "Operating conditions", "Safety considerations", "Visa / entry rules", "Package availability"];

/** Destinations with their own positioning line and no dedicated section above. */
export default function OtherRussiaDestinations() {
  const list = visibleDestinations.filter((d) => d.positioning);
  if (!list.length) return null;

  return (
    <section className="pkg-section pkg-section--sand" id="other-russia" aria-labelledby="other-russia-h">
      <div className="pkg-container">
        <div className="pkg-section__head">
          <p className="asia-eyebrow">Beyond the classics</p>
          <h2 id="other-russia-h" className="pkg-h2">Other Russia Experiences</h2>
          <p className="pkg-lede">
            From the Urals and Siberia to the Pacific coast and the Baltic, these journeys are planned case by case.
          </p>
          <div className="ru-conditions">
            <p><Info size={15} aria-hidden="true" /> Availability depends on:</p>
            <ul>
              {CONDITIONS.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
        </div>
        <ul className="asia-grid">
          {list.map((d) => (
            <li key={d.id} className="asia-grid__item">
              <Reveal className="ru-fill">
                <div className="ru-positioning">{d.positioning}</div>
                <RuDestinationCard d={d} packageCount={russiaPackageCount(d.id, d.partOf)} anchor={false} />
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
