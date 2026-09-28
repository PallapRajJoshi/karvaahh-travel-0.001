import { STAYS, STAY_NOTES, TRANSPORT_MODES } from "../data/content";
import { SectionHeading } from "../SectionHeading";
import "./Cards.css";

const SHRINE_LABEL = { amarnath: "Amarnath", vaishno: "Vaishno Devi", kashmir: "Kashmir" } as const;

export function Accommodation() {
  return (
    <section className="avd-section" aria-labelledby="avd-stay-title">
      <div className="avd-wrap">
        <SectionHeading
          id="avd-stay-title"
          title="Accommodation during the Yatra"
          lede="Hotels in the base towns, and something quite different on the Amarnath route itself."
        />
        <ul className="avd-cards avd-cards--4">
          {STAYS.map((s) => (
            <li key={s.title} className={`avd-card avd-card--${s.shrine}`}>
              {s.shrine ? <span className={`avd-tag avd-tag--${s.shrine}`}>{SHRINE_LABEL[s.shrine]}</span> : null}
              <h3 className="avd-card__title">{s.title}</h3>
              <p className="avd-card__body">{s.body}</p>
            </li>
          ))}
        </ul>
        <ul className="avd-notes">
          {STAY_NOTES.map((n) => (
            <li key={n}>{n}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Transportation() {
  return (
    <section className="avd-section avd-section--paper" aria-labelledby="avd-travel-title">
      <div className="avd-wrap">
        <SectionHeading
          id="avd-travel-title"
          title="Travel & transportation"
          lede="Road travel links Jammu, Katra and the Kashmir valleys. What's included depends on your package — not every service below is part of every trip."
        />
        <dl className="avd-deflist">
          {TRANSPORT_MODES.map((t) => (
            <div key={t.title}>
              <dt>{t.title}</dt>
              <dd>{t.body}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
