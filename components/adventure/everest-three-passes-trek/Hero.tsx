import Media from "./Media";
import Icon from "./Icon";
import { hero, heroStats } from "@/data/adventure/everest-three-passes-trek/content";
import { LINKS } from "@/data/adventure/everest-three-passes-trek/config";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="etp-hero" aria-labelledby="etp-hero-title">
      <Media image={hero.image} sizes="100vw" priority className="etp-hero__bg" />
      <div className="etp-hero__shade" aria-hidden="true" />

      <div className="etp-wrap etp-hero__inner">
        <div className="etp-hero__content">
          <p className="etp-hero__eyebrow">
            {hero.eyebrow.map((part, i) => (
              <span key={part}>
                {i > 0 && <span className="etp-hero__dot" aria-hidden="true">•</span>}
                {part}
              </span>
            ))}
          </p>
          <h1 className="etp-hero__title" id="etp-hero-title">
            {hero.title}
          </h1>
          <p className="etp-hero__subtitle">{hero.subtitle}</p>
          <p className="etp-hero__text">{hero.text}</p>
          <div className="etp-hero__ctas">
            <a className="etp-btn etp-btn--gold" href={LINKS.packagesAnchor}>
              {hero.primaryCta}
              <Icon name="arrow" />
            </a>
            <a className="etp-btn etp-btn--ghost" href={LINKS.routeAnchor}>
              {hero.secondaryCta}
            </a>
          </div>
        </div>

        <dl className="etp-hero__stats">
          {heroStats.map((s) => (
            <div className="etp-hero__stat" key={s.label}>
              <dt>{s.label}</dt>
              <dd>
                <strong>{s.value}</strong>
                {s.note && <span>{s.note}</span>}
              </dd>
            </div>
          ))}
        </dl>
      </div>

      <a className="etp-hero__scroll" href="#overview" aria-label="Scroll to overview">
        <span className="etp-hero__scroll-line" aria-hidden="true" />
      </a>
    </section>
  );
}
