import Image from "next/image";
import Breadcrumbs from "./Breadcrumbs";
import StatusBadge from "./StatusBadge";
import {
  ANCHORS,
  BREADCRUMBS,
  DESTINATIONS,
  HERO,
  enquireHref,
} from "./data/hotAirBalloonData";
import "./HeroSection.css";

export default function HeroSection() {
  return (
    <section className="hab-hero" aria-labelledby="hab-hero-title">
      <Image
        src={HERO.image}
        alt={HERO.imageAlt}
        fill
        priority
        sizes="100vw"
        className="hab-hero__img"
      />
      <div className="hab-hero__shade" aria-hidden="true" />

      <div className="hab-container hab-hero__inner">
        <Breadcrumbs items={BREADCRUMBS} />

        <div className="hab-hero__content">
          <p className="hab-hero__eyebrow">{HERO.eyebrow}</p>
          <h1 id="hab-hero-title" className="hab-hero__title">{HERO.title}</h1>
          <p className="hab-hero__subtitle">{HERO.subtitle}</p>
          <p className="hab-hero__support">{HERO.supporting}</p>

          <ul className="hab-hero__badges" aria-label="Key facts">
            {HERO.badges.map((b) => (
              <li key={b} className="hab-hero__badge">{b}</li>
            ))}
          </ul>
          <p className="hab-hero__footnote">{HERO.badgeFootnote}</p>

          <div className="hab-hero__ctas">
            <a href={enquireHref()} className="hab-btn hab-btn--primary">Check Availability</a>
            <a href={`#${ANCHORS.notify}`} className="hab-btn hab-btn--ghost">Notify Me When Flights Resume</a>
          </div>
        </div>

        {/* Operating-status strip: the page's core message at a glance */}
        <div className="hab-hero__board" aria-label="Operating status by destination">
          <p className="hab-hero__board-label">
            <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21Z"/><circle cx="12" cy="9.5" r="2.5"/></svg>
            {HERO.locations.join(" · ")}
          </p>
          <ul className="hab-hero__board-list">
            {DESTINATIONS.map((d) => (
              <li key={d.slug} className="hab-hero__board-item">
                <span className="hab-hero__board-name">{d.name}</span>
                <StatusBadge status={d.status} size="sm" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
