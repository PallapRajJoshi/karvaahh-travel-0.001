import Image from "next/image";
import Link from "next/link";
import { heroFacts, TRIP } from "../data/content";
import { IconArrowRight } from "../icons";
import "./hero.css";

export default function Hero() {
  return (
    <section className="mc-hero" aria-labelledby="mc-hero-title">
      <div className="mc-hero__media">
        <Image src={TRIP.heroImage} alt={TRIP.heroAlt} fill priority sizes="100vw" className="mc-hero__img" />
      </div>
      <div className="mc-hero__shade" aria-hidden="true" />

      <div className="mc-container mc-hero__inner">
        <nav aria-label="Breadcrumb" className="mc-hero__crumbs">
          <ol>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/packages">Packages</Link>
            </li>
            <li aria-current="page">{TRIP.name}</li>
          </ol>
        </nav>

        <p className="mc-hero__eyebrow">Annapurna · Manang · Mustang</p>
        <h1 id="mc-hero-title" className="mc-hero__title">
          {TRIP.name}
          <span className="mc-hero__subtitle">{TRIP.subtitle}</span>
        </h1>
        <p className="mc-hero__lead">
          Walk the rain-shadow valley of Manang, stand on the shore of Tilicho Lake and cross Thorong La at 5,416&nbsp;m, on an itinerary paced for acclimatisation.
        </p>

        <div className="mc-hero__actions">
          <Link href={TRIP.enquiryHref} className="mc-btn mc-btn--primary">
            Plan this trek
            <IconArrowRight />
          </Link>
          <a href="#itinerary" className="mc-btn mc-btn--ghost">
            See the day-by-day
          </a>
        </div>

        <dl className="mc-hero__facts">
          {heroFacts.map((f) => (
            <div key={f.label} className="mc-hero__fact">
              <dt>{f.label}</dt>
              <dd>
                {f.value}
                {f.note ? <span>{f.note}</span> : null}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
