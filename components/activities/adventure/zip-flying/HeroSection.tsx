import Image from "next/image";
import Breadcrumbs from "./Breadcrumbs";
import HeroStats from "./HeroStats";
import { hero, heroStats, IMG, breadcrumbs, ENQUIRY_ANCHOR } from "./data/zipFlyingData";

export default function HeroSection() {
  return (
    <section className="zf-hero" aria-labelledby="zf-hero-title">
      <Image
        src={IMG.hero}
        alt="Rider on the Pokhara ZipFlyer descending from Sarangkot toward Hemja"
        fill
        priority
        sizes="100vw"
        className="zf-hero__img"
      />
      <div className="zf-hero__shade" aria-hidden="true" />
      <div className="zf-hero__streaks" aria-hidden="true" />

      <div className="zf-hero__inner zf-wrap">
        <Breadcrumbs items={breadcrumbs} className="zf-crumbs--hero" />

        <div className="zf-hero__top">
          <p className="zf-hero__eyebrow">{hero.eyebrow}</p>
          <span className="zf-status zf-status--established zf-status--on-dark">{hero.badge}</span>
        </div>

        <h1 id="zf-hero-title" className="zf-hero__title">{hero.title}</h1>
        <p className="zf-hero__subtitle">{hero.subtitle}</p>
        <p className="zf-hero__support">{hero.support}</p>

        <HeroStats stats={heroStats} />

        <div className="zf-hero__actions">
          <a className="zf-btn zf-btn--signal" href={ENQUIRY_ANCHOR}>{hero.primaryCta}</a>
          <a className="zf-btn zf-btn--ghost" href="#featured">{hero.secondaryCta}</a>
          <p className="zf-hero__loc">
            <span aria-hidden="true">📍</span> {hero.location}
          </p>
        </div>
      </div>
    </section>
  );
}
