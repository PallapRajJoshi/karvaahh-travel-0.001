import Image from "next/image";
import type { Crumb, HeroContent } from "./types";
import Breadcrumbs from "./Breadcrumbs";
import { PinIcon } from "./icons";
import "./aerial-hero.css";

export default function AerialHero({ hero, breadcrumbs }: { hero: HeroContent; breadcrumbs: Crumb[] }) {
  return (
    <section className="ae-hero" aria-labelledby="ae-hero-title">
      <div className="ae-hero__media">
        <Image
          src={hero.image.src}
          alt={hero.image.alt}
          fill
          preload
          fetchPriority="high"
          sizes="100vw"
          className="ae-hero__img"
        />
      </div>
      <div className="ae-hero__scrim" aria-hidden="true" />

      <div className="ae-container ae-hero__inner">
        <Breadcrumbs items={breadcrumbs} />

        <div className="ae-hero__content">
          <p className="ae-hero__eyebrow">{hero.eyebrow}</p>
          <h1 id="ae-hero-title" className="ae-hero__title">
            {hero.title}
          </h1>
          <p className="ae-hero__subtitle">{hero.subtitle}</p>
          <p className="ae-hero__body">{hero.body}</p>

          <div className="ae-hero__ctas">
            <a href={hero.primaryCta.href} className="ae-btn ae-btn--gold">
              {hero.primaryCta.label}
            </a>
            <a href={hero.secondaryCta.href} className="ae-btn ae-btn--ghost-light">
              {hero.secondaryCta.label}
            </a>
          </div>
        </div>

        <div className="ae-hero__foot">
          <p className="ae-hero__location">
            <PinIcon className="ae-hero__pin" />
            {hero.location}
          </p>
          <ul className="ae-hero__badges" aria-label="Flight highlights">
            {hero.badges.map((b) => (
              <li key={b} className="ae-hero__badge">
                {b}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
