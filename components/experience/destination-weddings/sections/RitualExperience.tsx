import { rites, traditions } from "../data/celebration";
import "./RitualExperience.css";

export default function RitualExperience() {
  return (
    <section className="dw-section dw-rituals dw-blush" aria-labelledby="dw-rituals-title">
      <div className="dw-container dw-rituals__grid">
        <div className="dw-rituals__lead" data-reveal="">
          <p className="dw-eyebrow">Rituals & traditions</p>
          <h2 id="dw-rituals-title" className="dw-h2">
            Honouring <em>every tradition</em>
          </h2>
          <p className="dw-lede">
            A destination should never mean compromising on the ceremony. We coordinate the priest, the
            muhurat and the ritual materials, so your families can focus on the moment itself.
          </p>

          <div className="dw-rituals__traditions">
            <h3 className="dw-rituals__subhead">Ceremonies we coordinate</h3>
            <ul>
              {traditions.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>

          <p className="dw-note">
            Exact rituals and sequence depend on the couple&rsquo;s family tradition, selected priest and cultural practice.
          </p>
        </div>

        <div className="dw-rituals__sequence" data-reveal="">
          <h3 className="dw-rituals__subhead">Potential coordination</h3>
          <ol className="dw-rituals__list">
            {rites.map((r, i) => (
              <li key={r}>
                <span className="dw-rituals__n">{String(i + 1).padStart(2, "0")}</span>
                <span className="dw-rituals__name">{r}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
