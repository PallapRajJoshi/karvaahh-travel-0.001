import Image from "next/image";
import { hero, anchors } from "../data/config";
import CtaButton from "../shared/CtaButton";
import HeroParallax from "./HeroParallax";
import "./hero.css";

export default function Hero() {
  return (
    <section className="mc-hero mc-on-dark" aria-labelledby="mc-hero-title">
      <HeroParallax>
        <Image
          src={hero.image.src}
          alt={hero.image.alt}
          fill
          sizes="100vw"
          loading="eager"
          fetchPriority="high"
          quality={80}
          style={{ objectFit: "cover", objectPosition: hero.image.focal }}
        />
      </HeroParallax>
      <div className="mc-hero__shade" aria-hidden="true" />

      <div className="mc-container mc-hero__content">
        <p className="mc-hero__eyebrow mc-hero__anim" style={{ animationDelay: "0.1s" }}>
          {hero.eyebrow}
        </p>
        <h1 id="mc-hero-title" className="mc-hero__title mc-hero__anim" style={{ animationDelay: "0.22s" }}>
          {hero.title}
        </h1>
        <p className="mc-hero__subtitle mc-hero__anim" style={{ animationDelay: "0.36s" }}>
          {hero.subtitle}
        </p>
        <p className="mc-hero__text mc-hero__anim" style={{ animationDelay: "0.48s" }}>
          {hero.text}
        </p>
        <div className="mc-hero__ctas mc-hero__anim" style={{ animationDelay: "0.6s" }}>
          {hero.ctas.map((c) => (
            <CtaButton key={c.label} {...c} />
          ))}
        </div>
        <ul className="mc-hero__facts mc-hero__anim" style={{ animationDelay: "0.72s" }} aria-label="Trip at a glance">
          {hero.facts.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>
      </div>

      <a href={`#${anchors.overview.id}`} className="mc-hero__scroll" aria-label="Scroll to overview">
        <span className="mc-hero__scroll-line" aria-hidden="true" />
        <span className="mc-hero__scroll-label" aria-hidden="true">
          Scroll
        </span>
      </a>
    </section>
  );
}
