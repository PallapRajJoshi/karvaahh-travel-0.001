import { badaCharDhamData as d } from "./data/badaCharDhamData";
import SectionHeading from "./shared/SectionHeading";
import "./SpiritualConnection.css";

export default function SpiritualConnection() {
  const s = d.spiritualSignificance;
  const dirById = Object.fromEntries(d.dhams.map((x) => [x.id, x.direction]));

  return (
    <section className="bcd-section bcd-section--paper" aria-labelledby="bcd-spirit-title">
      <div className="bcd-container">
        <SectionHeading id="bcd-spirit-title" title={s.heading} intro={s.intro} align="center" />
        <ul className="bcd-spirit">
          {s.traditions.map((t) => (
            <li key={t.dhamId} className={`bcd-spirit__item bcd-dir--${dirById[t.dhamId]}`}>
              <h3 className="bcd-spirit__title">{t.title}</h3>
              <p className="bcd-spirit__text">{t.text}</p>
            </li>
          ))}
        </ul>
        <p className="bcd-spirit__closing">{s.closing}</p>
      </div>
    </section>
  );
}
