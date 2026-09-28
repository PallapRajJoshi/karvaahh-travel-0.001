import { badaCharDhamData as d } from "./data/badaCharDhamData";
import SectionHeading from "./shared/SectionHeading";
import { CheckIcon, InfoIcon } from "./shared/icons";
import "./Temples.css";

/** Per-Dham etiquette cards + photography guidance. */
export default function TempleEtiquette() {
  const e = d.templeEtiquette;
  const p = d.photography;
  const dirById = Object.fromEntries(d.dhams.map((x) => [x.id, x.direction]));

  return (
    <section className="bcd-section bcd-section--paper" aria-labelledby="bcd-etiquette-title">
      <div className="bcd-container">
        <SectionHeading id="bcd-etiquette-title" title={e.heading} intro={e.intro} />
        <div className="bcd-etq">
          {e.cards.map((c) => (
            <article key={c.dhamId} className={`bcd-etq__card bcd-dir--${dirById[c.dhamId]}`}>
              <h3 className="bcd-etq__title">{c.place}</h3>
              <ul className="bcd-etq__list">
                {c.items.map((i) => (
                  <li key={i}>
                    <CheckIcon size={16} />
                    <span>{i}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <section className="bcd-photo" aria-labelledby="bcd-photo-title">
          <div className="bcd-photo__head">
            <InfoIcon size={22} />
            <h2 id="bcd-photo-title" className="bcd-photo__title">
              {p.heading}
            </h2>
          </div>
          <ul className="bcd-photo__list">
            {p.items.map((i) => (
              <li key={i}>{i}</li>
            ))}
          </ul>
        </section>
      </div>
    </section>
  );
}
