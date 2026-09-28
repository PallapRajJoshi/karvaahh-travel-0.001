import { hero } from "@/data/adventure/langtang-valley-trek";
import LangtangImage from "./LangtangImage";
import LangtangIcon from "./LangtangIcon";
import "./LangtangHero.css";

export default function LangtangHero() {
  return (
    <section className="lt-hero" aria-labelledby="lt-hero-title">
      <div className="lt-hero__media">
        <LangtangImage id={hero.image} sizes="100vw" priority className="lt-hero__img" />
      </div>
      <div className="lt-hero__shade" aria-hidden="true" />

      <div className="lt-container lt-hero__inner">
        <div className="lt-hero__copy">
          <p className="lt-hero__eyebrow lt-hero__anim" style={{ ["--d" as string]: "0ms" }}>{hero.eyebrow}</p>
          <h1 className="lt-hero__title lt-hero__anim" id="lt-hero-title" style={{ ["--d" as string]: "120ms" }}>{hero.title}</h1>
          <p className="lt-hero__subtitle lt-hero__anim" style={{ ["--d" as string]: "240ms" }}>{hero.subtitle}</p>
          <p className="lt-hero__text lt-hero__anim" style={{ ["--d" as string]: "340ms" }}>{hero.text}</p>
          <div className="lt-hero__actions lt-hero__anim" style={{ ["--d" as string]: "440ms" }}>
            <a className="lt-btn lt-btn--gold" href={hero.primaryCta.href}>
              {hero.primaryCta.label}
              <LangtangIcon name="arrow" size={18} />
            </a>
            <a className="lt-btn lt-btn--glass" href={hero.secondaryCta.href}>{hero.secondaryCta.label}</a>
          </div>
        </div>

        {hero.badges.show ? (
          <dl className="lt-hero__badges lt-hero__anim" style={{ ["--d" as string]: "560ms" }}>
            {hero.badges.items.map((b) => (
              <div className="lt-hero__badge" key={b.label}>
                <dt>{b.label}</dt>
                <dd>
                  {b.fact.value}
                  {b.fact.qualifier ? <span>{b.fact.qualifier}</span> : null}
                </dd>
              </div>
            ))}
          </dl>
        ) : null}
      </div>

      <a className="lt-hero__scroll" href="#overview" aria-label="Scroll to overview">
        <span className="lt-hero__scroll-line" aria-hidden="true" />
      </a>
    </section>
  );
}
