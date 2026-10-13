import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import { breadcrumbs, sectionNav } from "../config";
import { hero } from "../data/content";

/** Cinematic hero, breadcrumbs and the sticky in-page navigation. */
export function Hero() {
  return (
    <>
      <section className="nbc-hero" aria-labelledby="nbc-hero-title">
        <div className="nbc-hero__media">
          <Image
            src={hero.image.src}
            alt={hero.image.alt}
            fill
            preload
            fetchPriority="high"
            sizes="100vw"
            style={{ objectPosition: hero.image.focus }}
          />
        </div>
        <div className="nbc-hero__shade" aria-hidden="true" />

        <div className="nbc-container nbc-hero__inner">
          <p className="nbc-hero__eyebrow nbc-rise" style={{ animationDelay: "80ms" }}>
            {hero.eyebrow}
          </p>
          <h1 id="nbc-hero-title" className="nbc-hero__title nbc-rise" style={{ animationDelay: "180ms" }}>
            {hero.title}
            <span className="nbc-sr-only"> — </span>
            <span className="nbc-hero__accent">{hero.titleAccent}</span>
          </h1>
          <p className="nbc-hero__lead nbc-rise" style={{ animationDelay: "300ms" }}>
            {hero.description}
          </p>
          <div className="nbc-hero__actions nbc-rise" style={{ animationDelay: "420ms" }}>
            <a href={hero.primaryCta.href} className="nbc-btn nbc-btn--light">
              {hero.primaryCta.label}
              <ArrowRight aria-hidden="true" size={18} className="nbc-btn__arrow" />
            </a>
            <Link href={hero.secondaryCta.href} className="nbc-btn nbc-btn--ghost">
              {hero.secondaryCta.label}
            </Link>
          </div>
        </div>

        <div className="nbc-hero__strip nbc-rise" style={{ animationDelay: "560ms" }}>
          <ul className="nbc-container nbc-hero__facts">
            {hero.facts.map((f) => (
              <li key={f.label}>
                <strong>{f.value}</strong>
                <span>{f.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <nav aria-label="Breadcrumb" className="nbc-container nbc-breadcrumbs">
        <ol>
          {breadcrumbs.map((crumb, i) => {
            const last = i === breadcrumbs.length - 1;
            return (
              <li key={crumb.label}>
                {crumb.href && !last ? (
                  <Link href={crumb.href}>{crumb.label}</Link>
                ) : (
                  <span aria-current={last ? "page" : undefined}>{crumb.label}</span>
                )}
                {!last ? <ChevronRight aria-hidden="true" size={14} /> : null}
              </li>
            );
          })}
        </ol>
      </nav>

      <nav aria-label="On this page" className="nbc-subnav">
        <ul className="nbc-container">
          {sectionNav.map((item) => (
            <li key={item.anchor}>
              <a href={`#${item.anchor}`}>{item.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
