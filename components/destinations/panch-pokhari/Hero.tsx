"use client";

import { useEffect, useRef } from "react";
import SafeImage from "@/components/shared/SafeImage";
import Breadcrumb from "@/components/shared/Breadcrumb";
import Icon from "@/components/shared/Icon";
import { breadcrumbItems, heroContent } from "@/data/panch-pokhari/content";
import "./hero.css";

/**
 * Full-screen cinematic hero. H1 lives here only — the single H1 for the
 * whole page, per SEO requirements.
 */
export default function Hero() {
  const imgRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const node = imgRef.current;
    if (!node) return;

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const offset = Math.min(window.scrollY * 0.25, 160);
        node.style.transform = `translate3d(0, ${offset}px, 0) scale(1.08)`;
        ticking = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="pp-hero" aria-label="Panch Pokhari introduction">
      <div ref={imgRef} className="pp-hero__media">
        <SafeImage
          src="/images/destinations/panch-pokhari/hero/panch-pokhari-hero.jpg"
          alt="Panoramic view of the five sacred alpine lakes of Panch Pokhari surrounded by the Himalayas"
          fallbackLabel="Panch Pokhari — Five Sacred Alpine Lakes"
          fill
          priority
          sizes="100vw"
          className="pp-hero__image"
        />
        <div className="pp-hero__mist" aria-hidden="true" />
        <div className="pp-hero__overlay" aria-hidden="true" />
      </div>

      <div className="pp-hero__breadcrumb-wrap pp-container">
        <Breadcrumb items={breadcrumbItems} className="pp-breadcrumb--on-dark" />
      </div>

      <div className="pp-hero__content pp-container">
        <p className="pp-hero__eyebrow pp-hero__enter" style={{ animationDelay: "0.1s" }}>
          {heroContent.eyebrow}
        </p>
        <h1 className="pp-hero__title pp-hero__enter" style={{ animationDelay: "0.22s" }}>
          {heroContent.title}
        </h1>
        <p className="pp-hero__subheading pp-hero__enter" style={{ animationDelay: "0.34s" }}>
          {heroContent.subheading}
        </p>
        <p className="pp-hero__subtitle pp-hero__enter" style={{ animationDelay: "0.46s" }}>
          {heroContent.subtitle}
        </p>

        <div className="pp-hero__ctas pp-hero__enter" style={{ animationDelay: "0.58s" }}>
          <a href={heroContent.primaryCta.href} className="pp-btn pp-btn--primary">
            {heroContent.primaryCta.label}
          </a>
          <a href={heroContent.secondaryCta.href} className="pp-btn pp-btn--ghost">
            {heroContent.secondaryCta.label}
          </a>
        </div>

        <div className="pp-hero__badge pp-hero__enter" style={{ animationDelay: "0.7s" }}>
          <Icon name="elevation" className="pp-hero__badge-icon" />
          <span>{heroContent.elevationBadge}</span>
        </div>
      </div>

      <a href="#destination-highlight" className="pp-hero__scroll-indicator" aria-label="Scroll to explore">
        <span className="pp-hero__scroll-line" aria-hidden="true" />
        <span className="pp-sr-only">Scroll down</span>
      </a>
    </section>
  );
}
