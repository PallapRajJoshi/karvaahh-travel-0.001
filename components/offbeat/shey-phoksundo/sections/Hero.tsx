"use client";

import Image from "next/image";
import Link from "next/link";
import { HERO } from "../data";
import { useScrollReveal } from "../shared/useScrollReveal";
import "./Hero.css";

export default function Hero() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section className="phoksundo-hero" ref={ref} aria-label="Shey Phoksundo introduction">
      <div className="phoksundo-hero__media">
        <Image
          src={HERO.image}
          alt={HERO.imageAlt}
          fill
          priority
          sizes="100vw"
          className="phoksundo-hero__image"
        />
        <div className="phoksundo-hero__overlay" aria-hidden="true" />
      </div>

      <div className="phoksundo-hero__content" data-reveal>
        <span className="phoksundo-hero__eyebrow">{HERO.eyebrow}</span>
        <h1 className="phoksundo-hero__title">{HERO.heading}</h1>
        <p className="phoksundo-hero__subtitle">{HERO.subtitle}</p>

        <div className="phoksundo-hero__ctas">
          <Link href={HERO.primaryCta.href} className="phoksundo-hero__cta phoksundo-hero__cta--primary">
            {HERO.primaryCta.label}
          </Link>
          <Link href={HERO.secondaryCta.href} className="phoksundo-hero__cta phoksundo-hero__cta--secondary">
            {HERO.secondaryCta.label}
          </Link>
        </div>

        <ul className="phoksundo-hero__facts" aria-label="Destination facts">
          {HERO.facts.map((fact, index) => (
            <li key={fact} className="phoksundo-hero__fact">
              {fact}
              {index < HERO.facts.length - 1 ? <span aria-hidden="true"> · </span> : null}
            </li>
          ))}
        </ul>
      </div>

      <div className="phoksundo-hero__scroll-indicator" aria-hidden="true">
        <span />
      </div>
    </section>
  );
}
