import { ebcSite } from "../config/site";
import SmartImage from "../ui/SmartImage";
import CtaButton from "../ui/CtaButton";
import HeroParallax from "./HeroParallax";
import "../styles/hero.css";

export default function HeroSection() {
  const { hero, quickFacts } = ebcSite;
  return (
    <section className="ebc-hero" aria-labelledby="ebc-hero-title">
      <HeroParallax>
        <SmartImage image={hero.image} sizes="100vw" priority />
      </HeroParallax>
      <div className="ebc-hero__overlay" aria-hidden="true" />

      <div className="ebc-container ebc-hero__inner">
        <div className="ebc-hero__content">
          <p className="ebc-hero__eyebrow ebc-hero__anim" style={{ ["--d" as string]: "0.1s" }}>
            {hero.eyebrow}
          </p>
          <h1 id="ebc-hero-title" className="ebc-hero__title ebc-hero__anim" style={{ ["--d" as string]: "0.25s" }}>
            {hero.title}
          </h1>
          <p className="ebc-hero__subtitle ebc-hero__anim" style={{ ["--d" as string]: "0.4s" }}>
            {hero.subtitle}
          </p>
          <p className="ebc-hero__text ebc-hero__anim" style={{ ["--d" as string]: "0.55s" }}>
            {hero.text}
          </p>
          <div className="ebc-hero__ctas ebc-hero__anim" style={{ ["--d" as string]: "0.7s" }}>
            {hero.ctas.map((c) => (
              <CtaButton key={c.label} href={c.href} label={c.label} variant={c.variant} />
            ))}
          </div>
        </div>

        <dl className="ebc-hero__facts ebc-hero__anim" style={{ ["--d" as string]: "0.9s" }}>
          {quickFacts.map((f) => (
            <div key={f.label} className="ebc-hero__fact">
              <dt>{f.label}</dt>
              <dd>{f.value}</dd>
            </div>
          ))}
        </dl>
      </div>

      <a href="#overview" className="ebc-hero__scroll" aria-label="Scroll to trek overview">
        <span className="ebc-hero__scroll-line" aria-hidden="true" />
        <span className="ebc-hero__scroll-label" aria-hidden="true">Scroll</span>
      </a>
    </section>
  );
}
