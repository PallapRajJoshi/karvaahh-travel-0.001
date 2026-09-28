import { permits, preparation, safety, TRIP } from "../data/content";
import { IconDoc, IconShield } from "../icons";
import SectionHeading from "../SectionHeading";
import "./permits-safety.css";

export default function PermitsSafety() {
  return (
    <section id="permits-safety" className="mc-section mc-section--dark mc-ps" aria-labelledby="mc-ps-title">
      <div className="mc-container">
        <SectionHeading
          id="mc-ps-title"
          eyebrow="Before you go"
          title="Permits, safety and preparation"
          intro="High-altitude trekking rewards preparation. Here's what the rules require and how we keep you safe."
        />

        <div className="mc-ps__grid">
          <article className="mc-ps__card" aria-labelledby="mc-permits-title">
            <header className="mc-ps__card-head">
              <IconDoc className="mc-ps__icon" />
              <h3 id="mc-permits-title">Permits & rules</h3>
              <span className="mc-ps__verified">Checked {TRIP.verifiedOn}</span>
            </header>
            <p className="mc-ps__intro">{permits.intro}</p>
            <dl className="mc-ps__permits">
              {permits.items.map((p) => (
                <div key={p.name}>
                  <dt>{p.name}</dt>
                  <dd>{p.detail}</dd>
                </div>
              ))}
            </dl>
            <p className="mc-ps__bring-title">Please bring</p>
            <ul className="mc-ps__bring">
              {permits.bring.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
            <p className="mc-ps__fine">Fees and rules are set by Nepal&apos;s authorities and may change. We confirm them when you book.</p>
          </article>

          <article className="mc-ps__card" aria-labelledby="mc-safety-title">
            <header className="mc-ps__card-head">
              <IconShield className="mc-ps__icon" />
              <h3 id="mc-safety-title">How we keep you safe</h3>
            </header>
            <ul className="mc-ps__safety">
              {safety.map((s) => (
                <li key={s.title}>
                  <h4>{s.title}</h4>
                  <p>{s.body}</p>
                </li>
              ))}
            </ul>
            <p className="mc-ps__bring-title">Is this trek for you?</p>
            <ul className="mc-ps__bring">
              {preparation.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
