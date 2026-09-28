import { badaCharDhamData as d } from "./data/badaCharDhamData";
import SectionHeading from "./shared/SectionHeading";
import { DirectionArrow, InfoIcon } from "./shared/icons";
import "./Seasons.css";

/** Region-by-region season guidance. No single "best month" is claimed. */
export default function BestTimeSection() {
  const b = d.bestTime;
  return (
    <section id="best-time" className="bcd-section bcd-section--ivory" aria-labelledby="bcd-besttime-title">
      <div className="bcd-container">
        <SectionHeading id="bcd-besttime-title" title={b.heading} intro={b.intro} />
        <div className="bcd-seasons">
          {b.regions.map((r) => (
            <article key={r.direction} className={`bcd-seasons__item bcd-dir--${r.direction}`}>
              <div className="bcd-seasons__head">
                <DirectionArrow direction={r.direction} size={22} />
                <div>
                  <h3 className="bcd-seasons__title">{r.title}</h3>
                  <p className="bcd-seasons__place">{r.place}</p>
                </div>
              </div>
              <p className="bcd-seasons__text">{r.text}</p>
            </article>
          ))}
        </div>
        <p className="bcd-note bcd-seasons__note">
          <InfoIcon size={18} />
          <span>{b.note}</span>
        </p>
      </div>
    </section>
  );
}
