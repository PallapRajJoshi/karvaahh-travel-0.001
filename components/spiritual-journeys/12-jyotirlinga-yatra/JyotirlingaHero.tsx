import Link from "next/link";
import JyImage from "./JyImage";
import { ctaHref, getRoute, hero, jyotirlingas, seo } from "./data/jyotirlingaData";
import "./JyotirlingaHero.css";

/** Temples ordered north → south for the journey indicator. */
const northToSouth = [...jyotirlingas].sort((a, b) => b.coordinates.lat - a.coordinates.lat);

export default function JyotirlingaHero() {
  const primaryHref = ctaHref(hero.primaryCta);

  return (
    <section className="jyl-hero" aria-labelledby="jyl-hero-title">
      <div className="jyl-container jyl-hero__inner">
        <div className="jyl-hero__text">
          <nav aria-label="Breadcrumb" className="jyl-hero__crumbs">
            <ol>
              {seo.breadcrumbs.map((crumb) => {
                const route = crumb.route ? getRoute(crumb.route) : null;
                return (
                  <li key={crumb.name}>
                    {route ? <Link href={route.href}>{crumb.name}</Link> : <span aria-current="page">{crumb.name}</span>}
                  </li>
                );
              })}
            </ol>
          </nav>

          <p className="jyl-hero__eyebrow">{hero.eyebrow}</p>
          <h1 id="jyl-hero-title" className="jyl-hero__title">
            {hero.title}
          </h1>
          <p className="jyl-hero__subtitle">{hero.subtitle}</p>
          <p className="jyl-hero__copy">{hero.copy}</p>

          <div className="jyl-hero__actions">
            {primaryHref ? (
              <Link href={primaryHref} className="jyl-btn jyl-btn--primary">
                {hero.primaryCta.label}
              </Link>
            ) : null}
            <a href={hero.secondaryCta.anchor} className="jyl-btn jyl-btn--secondary">
              {hero.secondaryCta.label}
            </a>
          </div>
        </div>

        <div className="jyl-hero__triptych" aria-label="Landscapes of the Yatra">
          {hero.images.map((image, i) => (
            <figure key={image.src} className={`jyl-hero__panel jyl-hero__panel--${i + 1}`}>
              <JyImage
                image={image}
                priority={i === 0}
                sizes="(max-width: 860px) 34vw, 18vw"
                className="jyl-hero__img"
                label={image.caption}
              />
              <figcaption className="jyl-sr-only">{image.alt}</figcaption>
            </figure>
          ))}
        </div>
      </div>

      <div className="jyl-container jyl-hero__journey">
        <p className="jyl-hero__journey-label">{hero.indicator}</p>
        <ol className="jyl-hero__marks" aria-label="The twelve Jyotirlingas from north to south">
          {northToSouth.map((j) => (
            <li key={j.slug} className="jyl-hero__mark">
              <a href={`#jyotirlinga-${j.slug}`} className="jyl-hero__mark-link">
                <span className="jyl-hero__mark-dot" aria-hidden="true" />
                <span className="jyl-hero__mark-name">{j.name}</span>
              </a>
            </li>
          ))}
        </ol>
      </div>

      <a href="#overview" className="jyl-hero__scroll" aria-label="Scroll to the Yatra overview">
        <span aria-hidden="true" className="jyl-hero__scroll-line" />
      </a>
    </section>
  );
}
