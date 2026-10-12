import { exclusions, inclusions, safety } from "../data/proposal";
import "./InclusionsSafety.css";

function Chevron() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true" focusable="false">
      <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function InclusionsSafety() {
  return (
    <>
      <section className="dw-section dw-section--tight dw-incl dw-paper" aria-labelledby="dw-incl-title">
        <div className="dw-container dw-incl__grid">
          <div className="dw-incl__lead" data-reveal="">
            <p className="dw-eyebrow">Inclusions & exclusions</p>
            <h2 id="dw-incl-title" className="dw-h2">
              Clear from <em>the first proposal</em>
            </h2>
            <p className="dw-lede">
              What a typical Karvaahh wedding plan covers, and what is usually quoted separately. Your
              quotation lists the exact scope for your celebration.
            </p>
          </div>

          <div className="dw-incl__accordions">
            {inclusions.map((group, i) => (
              <details key={group.id} className="dw-acc" open={i === 0}>
                <summary>
                  <span className="dw-acc__kicker">Included</span>
                  <span className="dw-acc__title">{group.title}</span>
                  <Chevron />
                </summary>
                <ul className="dw-acc__list">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </details>
            ))}
            <details className="dw-acc dw-acc--ex">
              <summary>
                <span className="dw-acc__kicker">Usually excluded</span>
                <span className="dw-acc__title">Exclusions</span>
                <Chevron />
              </summary>
              <ul className="dw-acc__list dw-acc__list--cols">
                {exclusions.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </details>
          </div>
        </div>
      </section>

      <section className="dw-section dw-safety dw-dark" aria-labelledby="dw-safety-title">
        <div className="dw-container">
          <div className="dw-safety__head" data-reveal="">
            <p className="dw-eyebrow">Safety & contingency</p>
            <h2 id="dw-safety-title" className="dw-h2">
              Beautiful weddings need <em>smart planning</em>
            </h2>
            <p className="dw-safety__statement">Outdoor events require a weather contingency plan.</p>
          </div>
          <ul className="dw-safety__grid">
            {safety.map((s, i) => (
              <li key={s.title} data-reveal="fade">
                <span className="dw-safety__n">{String(i + 1).padStart(2, "0")}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </li>
            ))}
            <li className="dw-safety__closing" data-reveal="fade">
              <p>
                Every contingency is written into the run-of-show — and shared with every vendor — before the
                first guest arrives.
              </p>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
