import { introduction, quickFacts, whatIsCharDham } from "../data/charDhamData";
import SectionHeading from "../shared/SectionHeading";

export default function CharDhamIntroduction() {
  const w = whatIsCharDham;
  return (
    <>
      <section id="introduction" className="cd-section cd-intro" aria-labelledby="intro-title">
        <div className="cd-container cd-intro__grid">
          <div className="cd-intro__text">
            <SectionHeading id="intro-title" title={introduction.heading} />
            <div className="cd-prose" data-reveal>
              {introduction.paragraphs.map((p) => (
                <p key={p.slice(0, 32)}>{p}</p>
              ))}
            </div>
          </div>
          <aside className="cd-facts" aria-label="Char Dham Yatra at a glance" data-reveal>
            <h3 className="cd-facts__title">At a glance</h3>
            <dl className="cd-facts__list">
              {quickFacts.map((f) => (
                <div key={f.label} className="cd-facts__row">
                  <dt>{f.label}</dt>
                  <dd>{f.value}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </section>

      <section id="what-is-char-dham" className="cd-section cd-section--tint cd-whatis" aria-labelledby="whatis-title">
        <div className="cd-container">
          <SectionHeading
            id="whatis-title"
            title={w.heading}
            intro={w.paragraphs.map((p) => (
              <p key={p.slice(0, 32)}>{p}</p>
            ))}
          />
          <div className="cd-whatis__compare">
            <article className="cd-whatis__panel cd-whatis__panel--primary" data-reveal>
              <h3>{w.uttarakhand.title}</h3>
              <p>{w.uttarakhand.text}</p>
              <ol>
                {w.uttarakhand.items.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ol>
              <p className="cd-whatis__tag">Covered on this page</p>
            </article>
            <article className="cd-whatis__panel" data-reveal>
              <h3>{w.allIndia.title}</h3>
              <p>{w.allIndia.text}</p>
              <ul>
                {w.allIndia.items.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
