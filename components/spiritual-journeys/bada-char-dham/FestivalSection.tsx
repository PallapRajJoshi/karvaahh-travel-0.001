import { badaCharDhamData as d } from "./data/badaCharDhamData";
import SectionHeading from "./shared/SectionHeading";
import "./Seasons.css";

export default function FestivalSection() {
  const f = d.festivals;
  const dirById = Object.fromEntries(d.dhams.map((x) => [x.id, x.direction]));
  return (
    <section className="bcd-section bcd-section--ivory bcd-section--flush-top" aria-labelledby="bcd-fest-title">
      <div className="bcd-container">
        <SectionHeading id="bcd-fest-title" title={f.heading} intro={f.intro} />
        <ul className="bcd-fest">
          {f.items.map((x) => (
            <li key={x.dhamId} className={`bcd-fest__item bcd-dir--${dirById[x.dhamId]}`}>
              <p className="bcd-fest__place">{x.place}</p>
              <h3 className="bcd-fest__name">{x.name}</h3>
              <p className="bcd-fest__text">{x.text}</p>
            </li>
          ))}
        </ul>
        <p className="bcd-fest__small">{f.note}</p>
      </div>
    </section>
  );
}
