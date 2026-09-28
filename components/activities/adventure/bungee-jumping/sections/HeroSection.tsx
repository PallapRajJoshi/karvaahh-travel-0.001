import Image from "next/image";
import { hero } from "../data/bungeeJumpingData";
import { CtaLink, PinIcon } from "../shared";
import Breadcrumbs from "./Breadcrumbs";

export default function HeroSection() {
  return (
    <section className="bj-hero" aria-labelledby="bj-hero-title">
      <Image src={hero.image.src} alt={hero.image.alt} fill priority sizes="100vw" className="bj-hero__img" />
      <div className="bj-hero__shade" aria-hidden="true" />

      {/* The cord: a vertical drop line measuring the Kushma jump */}
      <div className="bj-hero__cord" aria-hidden="true">
        <span className="bj-hero__cord-top">Bridge</span>
        <span className="bj-hero__cord-line" />
        <span className="bj-hero__cord-value">~228 m</span>
      </div>

      <div className="bj-wrap bj-hero__inner">
        <Breadcrumbs />
        <p className="bj-hero__eyebrow">{hero.eyebrow}</p>
        <h1 id="bj-hero-title" className="bj-hero__title">
          {hero.title}
          <span className="bj-hero__highlight">{hero.highlight}</span>
        </h1>
        <p className="bj-hero__subtitle">{hero.subtitle}</p>
        <p className="bj-hero__support">{hero.supporting}</p>

        <div className="bj-hero__ctas">
          <CtaLink cta={hero.primaryCta} />
          <CtaLink cta={hero.secondaryCta} variant="ghost" />
        </div>

        <ul className="bj-hero__badges" aria-label="Kushma at a glance">
          {hero.badges.map((b) => <li key={b}>{b}</li>)}
        </ul>
        <p className="bj-hero__location"><PinIcon /> {hero.location}</p>
      </div>
    </section>
  );
}
