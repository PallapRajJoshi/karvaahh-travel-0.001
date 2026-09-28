import { cta, relatedLinks } from "@/data/adventure/langtang-valley-trek";
import LangtangImage from "./LangtangImage";
import LangtangIcon from "./LangtangIcon";
import "./LangtangCTA.css";

const VARIANT = { primary: "lt-btn--gold", secondary: "lt-btn--white", ghost: "lt-btn--glass" } as const;

export default function LangtangCTA() {
  return (
    <>
      <section className="lt-cta" aria-labelledby="lt-cta-title">
        <div className="lt-cta__media"><LangtangImage id={cta.image} sizes="100vw" /></div>
        <div className="lt-cta__shade" aria-hidden="true" />
        <div className="lt-container lt-cta__inner" data-reveal>
          <p className="lt-heading__eyebrow">Begin Here</p>
          <h2 className="lt-cta__title" id="lt-cta-title">{cta.heading}</h2>
          <p className="lt-cta__text">{cta.text}</p>
          <div className="lt-cta__actions">
            {cta.buttons.map((b) => (
              <a key={b.label} className={`lt-btn ${VARIANT[b.variant]}`} href={b.href}>{b.label}</a>
            ))}
          </div>
        </div>
      </section>

      <nav className="lt-related" aria-labelledby="lt-related-title">
        <div className="lt-container lt-related__inner">
          <h2 className="lt-related__title" id="lt-related-title">Continue exploring Nepal</h2>
          <ul className="lt-related__list">
            {relatedLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href}>
                  <span className="lt-related__label">{l.label}</span>
                  <span className="lt-related__note">{l.note}</span>
                  <LangtangIcon name="arrow" size={18} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}
