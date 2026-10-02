"use client";

import Image from "next/image";
import { useRevealOnScroll } from "../hooks/useRevealOnScroll";
import "./Hero.css";

/**
 * Section 1 — Cinematic Hero.
 * Uses next/image with priority + fill for LCP, a dark gradient overlay,
 * and a CSS-only entrance/scroll-indicator (no GSAP dependency required
 * so the hero renders correctly even before any client script hydrates).
 */
export default function Hero() {
  const containerRef = useRevealOnScroll<HTMLDivElement>();

  return (
    <section className="tsho-hero" aria-label="Tsho Rolpa Lake introduction">
      <div className="tsho-hero__media">
        <Image
          src="/images/tsho-rolpa/hero/tsho-rolpa-hero.jpg"
          alt="Turquoise waters of Tsho Rolpa Lake surrounded by snow-capped Himalayan peaks in the Rolwaling Valley"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
        <div className="tsho-hero__overlay" aria-hidden="true" />
      </div>

      <div className="tsho-hero__content tsho-container" ref={containerRef}>
        <p className="tsho-hero__eyebrow tsho-reveal">OFFBEAT NEPAL · ROLWALING VALLEY</p>
        <h1 className="tsho-hero__title tsho-reveal">
          Tsho Rolpa Lake — Nepal&rsquo;s Remote Himalayan Glacial Paradise
        </h1>
        <p className="tsho-hero__subtitle tsho-reveal">
          Discover a spectacular glacial lake surrounded by towering Himalayan peaks, remote
          Sherpa villages, and the untouched wilderness of Rolwaling Valley.
        </p>

        <div className="tsho-hero__actions tsho-reveal">
          <a href="#tsho-packages" className="tsho-btn tsho-btn--primary">
            Explore Tsho Rolpa Packages
          </a>
          <a href="#tsho-contact" className="tsho-btn tsho-btn--secondary">
            Plan Your Rolwaling Trek
          </a>
        </div>

        <dl className="tsho-hero__facts tsho-reveal">
          <div className="tsho-hero__fact">
            <dt>District</dt>
            <dd>Dolakha</dd>
          </div>
          <div className="tsho-hero__fact-divider" aria-hidden="true" />
          <div className="tsho-hero__fact">
            <dt>Region</dt>
            <dd>Rolwaling Valley</dd>
          </div>
          <div className="tsho-hero__fact-divider" aria-hidden="true" />
          <div className="tsho-hero__fact">
            <dt>Altitude</dt>
            <dd>Approx. 4,580 m</dd>
          </div>
        </dl>
      </div>

      <div className="tsho-hero__scroll-indicator" aria-hidden="true">
        <span />
      </div>
    </section>
  );
}
