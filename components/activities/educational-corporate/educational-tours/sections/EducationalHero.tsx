"use client";

import { useEffect, useRef, useState } from "react";
import { HERO, LINKS } from "../data/content";
import { CtaLink } from "../shared/CtaLink";
import { MediaFrame } from "../shared/MediaFrame";
import "./EducationalHero.css";

export function EducationalHero() {
  const rootRef = useRef<HTMLElement | null>(null);
  const [slide, setSlide] = useState(0);

  // Slow crossfade between hero frames (skipped when the visitor prefers reduced motion)
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => setSlide((s) => (s + 1) % HERO.slides.length), 6500);
    return () => window.clearInterval(id);
  }, []);

  // Gentle parallax via a single CSS variable, throttled with rAF
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = window.requestAnimationFrame(() => {
        raf = 0;
        const y = Math.min(window.scrollY, window.innerHeight);
        rootRef.current?.style.setProperty("--et-py", String(y));
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) window.cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section ref={rootRef} className="et-hero" aria-labelledby="et-hero-title">
      <div className="et-hero__bg" aria-hidden="true">
        {HERO.slides.map((key, i) => (
          <div key={key} className={`et-hero__slide ${i === slide ? "is-active" : ""}`}>
            <MediaFrame mediaKey={key} priority={i === 0} showCaption={false} sizes="100vw" />
          </div>
        ))}
      </div>
      <div className="et-hero__scrim" aria-hidden="true" />

      <div className="et-container et-hero__inner">
        <div className="et-hero__copy">
          <p className="et-hero__eyebrow">{HERO.eyebrow}</p>
          <h1 id="et-hero-title" className="et-hero__title">
            {HERO.titleWords.map((word, i) => (
              <span key={word + i} className="et-hero__word" style={{ ["--w" as string]: i }}>
                {word}{" "}
              </span>
            ))}
          </h1>
          <p className="et-hero__subtitle">{HERO.subtitle}</p>
          <p className="et-hero__text">{HERO.description}</p>
          <div className="et-cta-row et-hero__cta">
            <CtaLink href={LINKS.inquiry} variant="primary">
              Plan an Educational Tour
            </CtaLink>
            <CtaLink href={LINKS.categories} variant="ghost">
              Explore Learning Experiences
            </CtaLink>
            <CtaLink href={LINKS.contact} variant="text" arrow={false}>
              Talk to Karvaahh
            </CtaLink>
          </div>
        </div>

        <div className="et-hero__collage" aria-hidden="true">
          {HERO.collage.map((key, i) => (
            <div key={key} className={`et-hero__tile et-hero__tile--${i + 1}`}>
              <MediaFrame mediaKey={key} showCaption sizes="(min-width: 900px) 22vw, 0px" />
            </div>
          ))}
        </div>
      </div>

      <ul className="et-hero__labels" aria-hidden="true">
        {HERO.labels.map((label, i) => (
          <li key={label} className={`et-hero__label et-hero__label--${i + 1}`}>
            {label}
          </li>
        ))}
      </ul>

      <a href="#intro" className="et-hero__scroll" aria-label="Scroll to introduction">
        <span className="et-hero__scroll-line" aria-hidden="true" />
        <span>Scroll</span>
      </a>
    </section>
  );
}
