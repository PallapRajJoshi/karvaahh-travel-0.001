import { badaCharDhamData as d } from "./data/badaCharDhamData";
import SectionHeading from "./shared/SectionHeading";
import "./CharDhamIntroduction.css";

/**
 * Introduction + quick facts, followed by "What is the Bada Char Dham?"
 * with the explicit Bada Char Dham vs Uttarakhand Char Dham distinction.
 */
export default function CharDhamIntroduction() {
  const { introduction, quickFacts, whatIs } = d;

  return (
    <>
      <section className="bcd-section bcd-section--ivory" aria-labelledby="bcd-intro-title">
        <div className="bcd-container bcd-intro">
          <div className="bcd-intro__main">
            <SectionHeading id="bcd-intro-title" title={introduction.heading} />
            <div className="bcd-prose">
              {introduction.paragraphs.map((p) => (
                <p key={p.slice(0, 32)}>{p}</p>
              ))}
            </div>
          </div>

          <aside className="bcd-facts" aria-labelledby="bcd-facts-title">
            <h3 id="bcd-facts-title" className="bcd-facts__title">
              Quick facts
            </h3>
            <dl className="bcd-facts__list">
              {quickFacts.map((f) => (
                <div key={f.label} className="bcd-facts__row">
                  <dt>{f.label}</dt>
                  <dd>{f.value}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </section>

      <section className="bcd-section bcd-section--paper" aria-labelledby="bcd-whatis-title">
        <div className="bcd-container bcd-whatis">
          <div>
            <SectionHeading id="bcd-whatis-title" title={whatIs.heading} />
            <div className="bcd-prose">
              {whatIs.paragraphs.map((p) => (
                <p key={p.slice(0, 32)}>{p}</p>
              ))}
            </div>
          </div>

          <section className="bcd-circuits" aria-labelledby="bcd-circuits-title">
            <h3 id="bcd-circuits-title" className="bcd-circuits__title">
              {whatIs.distinction.heading}
            </h3>
            <div className="bcd-circuits__grid">
              {whatIs.distinction.circuits.map((c) => (
                <div key={c.name} className={`bcd-circuits__card ${c.isThisPage ? "is-current" : ""}`}>
                  <p className="bcd-circuits__tag">{c.isThisPage ? "This journey" : "A different circuit"}</p>
                  <p className="bcd-circuits__name">{c.name}</p>
                  <p className="bcd-circuits__scope">{c.scope}</p>
                  <ul className="bcd-circuits__places">
                    {c.places.map((p) => (
                      <li key={p} className={p === "Badrinath" ? "is-shared" : undefined}>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className="bcd-circuits__note">{whatIs.distinction.note}</p>
          </section>
        </div>
      </section>
    </>
  );
}
