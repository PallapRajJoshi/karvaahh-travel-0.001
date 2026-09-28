import Link from "next/link";
import { badaCharDhamData as d } from "./data/badaCharDhamData";
import DhamImage from "./shared/DhamImage";
import { ArrowDownIcon } from "./shared/icons";
import "./BadaCharDhamHero.css";

/**
 * Hero — the four Dhams arranged as a compass cross (N top, W left, E right,
 * S bottom) around a compass rose. One orchestrated load sequence traces the
 * traditional order N → W → E → S. CSS-only; no client JS.
 */
export default function BadaCharDhamHero() {
  const { hero, dhams, page } = d;

  return (
    <section className="bcd-hero" aria-labelledby="bcd-hero-title">
      <div className="bcd-hero__rings" aria-hidden="true" />

      <div className="bcd-container bcd-hero__inner">
        <div className="bcd-hero__text">
          <nav className="bcd-breadcrumb" aria-label="Breadcrumb">
            <ol>
              {page.breadcrumbs.map((b, i) => {
                const last = i === page.breadcrumbs.length - 1;
                return (
                  <li key={b.href}>
                    {last ? <span aria-current="page">{b.name}</span> : <Link href={b.href}>{b.name}</Link>}
                  </li>
                );
              })}
            </ol>
          </nav>

          <p className="bcd-hero__eyebrow">{hero.eyebrow}</p>
          <h1 id="bcd-hero-title" className="bcd-hero__title">
            {hero.title}
          </h1>
          <p className="bcd-hero__subtitle">{hero.subtitle}</p>
          <p className="bcd-hero__copy">{hero.copy}</p>

          <div className="bcd-hero__actions">
            <Link href={hero.primaryCta.href} className="bcd-btn bcd-btn--gold">
              {hero.primaryCta.label}
            </Link>
            <a href={hero.secondaryCta.href} className="bcd-btn bcd-btn--ghost-light">
              {hero.secondaryCta.label}
            </a>
          </div>
        </div>

        <div className="bcd-hero__cross" role="group" aria-label="The four Dhams by direction">
          <svg className="bcd-hero__route" viewBox="0 0 300 300" aria-hidden="true" focusable="false">
            <path d="M150 58 Q88 88 58 150 Q150 186 242 150 Q212 212 150 242" pathLength={1} />
          </svg>

          {dhams.map((dham, i) => (
            <a key={dham.id} href={`#${dham.id}`} className={`bcd-hero__tile bcd-hero__tile--${dham.direction}`} style={{ ["--i" as string]: i }}>
              <DhamImage
                image={dham.image}
                direction={dham.direction}
                uid={`hero-${dham.id}`}
                sizes="(max-width: 640px) 30vw, 180px"
                eager
                className="bcd-hero__media"
              />
              <span className="bcd-hero__tile-label">
                <span className="bcd-hero__tile-dir">{dham.directionLabel}</span>
                <span className="bcd-hero__tile-name">{dham.name}</span>
              </span>
            </a>
          ))}

          <div className="bcd-hero__rose" aria-hidden="true">
            <svg viewBox="0 0 100 100" focusable="false">
              <circle cx="50" cy="50" r="46" />
              <circle cx="50" cy="50" r="34" strokeDasharray="2 4" />
              <path className="bcd-hero__rose-star" d="M50 8 56 44 92 50 56 56 50 92 44 56 8 50 44 44Z" />
              <path className="bcd-hero__rose-north" d="M50 8 56 44 50 50 44 44Z" />
            </svg>
          </div>
        </div>
      </div>

      <a href="#four-directions" className="bcd-hero__scroll">
        <span className="bcd-sr-only">Scroll to the four directions</span>
        <ArrowDownIcon size={18} />
      </a>
    </section>
  );
}
