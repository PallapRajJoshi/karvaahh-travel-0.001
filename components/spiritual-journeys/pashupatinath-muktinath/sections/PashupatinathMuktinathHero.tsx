import Link from "next/link";
import { hero, seo } from "../data/pashupatinathMuktinathData";
import { ROUTES } from "../data/site";
import { Icon } from "../ui/Icon";
import { JourneyImage } from "../ui/JourneyImage";
import "./hero.css";

export function PashupatinathMuktinathHero() {
  return (
    <section className="pmy-hero" aria-labelledby="pmy-hero-title">
      <div className="pmy-hero__media">
        <div className="pmy-hero__panel pmy-hero__panel--kathmandu">
          <JourneyImage image={hero.images.left} sizes="(max-width: 760px) 100vw, 65vw" priority />
          <span className="pmy-hero__place" aria-hidden="true">Kathmandu</span>
        </div>
        <div className="pmy-hero__panel pmy-hero__panel--mustang">
          <JourneyImage image={hero.images.right} sizes="(max-width: 760px) 100vw, 65vw" />
          <span className="pmy-hero__place pmy-hero__place--right" aria-hidden="true">Mustang</span>
        </div>
        <div className="pmy-hero__shade" aria-hidden="true" />
      </div>

      <div className="pmy-container pmy-hero__content">
        <nav className="pmy-hero__crumbs" aria-label="Breadcrumb">
          <ol>
            <li><Link href={ROUTES.home}>Home</Link></li>
            <li><Link href={ROUTES.spiritualJourneys}>Spiritual Journeys</Link></li>
            <li aria-current="page">{seo.breadcrumbName}</li>
          </ol>
        </nav>

        <p className="pmy-hero__eyebrow">{hero.eyebrow}</p>
        <h1 id="pmy-hero-title" className="pmy-hero__title">{hero.title}</h1>
        <p className="pmy-hero__subtitle">{hero.subtitle}</p>
        <p className="pmy-hero__text">{hero.text}</p>

        <div className="pmy-hero__actions">
          <Link href={hero.primaryCta.href} className="pmy-btn pmy-btn--primary">
            {hero.primaryCta.label}
          </Link>
          <a href={hero.secondaryCta.href} className="pmy-btn pmy-btn--ghost-light">
            {hero.secondaryCta.label}
          </a>
        </div>
      </div>

      <div className="pmy-container pmy-hero__route-wrap">
        <ol className="pmy-hero__route" aria-label="Journey route: Kathmandu to Pokhara to Jomsom to Muktinath">
          {hero.route.map((stop) => (
            <li key={stop.name} className="pmy-hero__stop">
              <span className="pmy-hero__stop-icon"><Icon name={stop.icon} size={22} /></span>
              <span className="pmy-hero__stop-name">{stop.name}</span>
              <span className="pmy-hero__stop-detail">{stop.detail}</span>
            </li>
          ))}
        </ol>
      </div>

      <a href="#intro" className="pmy-hero__scroll">
        <span className="pmy-sr-only">Skip to the introduction</span>
        <span className="pmy-hero__scroll-line" aria-hidden="true" />
      </a>
    </section>
  );
}
