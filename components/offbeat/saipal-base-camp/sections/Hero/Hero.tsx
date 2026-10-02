"use client";

import { useEffect, useRef, useState } from "react";
import ImageSlot from "../../shared/ImageSlot";
import "./Hero.css";

interface HeroProps {
  imageSrc?: string;
}

export default function Hero({ imageSrc }: HeroProps) {
  const [scrolled, setScrolled] = useState(0);
  const heroRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const node = heroRef.current;
    if (!node) return;

    const onScroll = () => {
      const rect = node.getBoundingClientRect();
      const progress = Math.min(1, Math.max(0, -rect.top / (rect.height || 1)));
      setScrolled(progress);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section ref={heroRef} className="saipal-hero" aria-label="Saipal Base Camp introduction">
      <div
        className="saipal-hero__bg"
        style={{ transform: `scale(${1.08 + scrolled * 0.08}) translateY(${scrolled * 40}px)` }}
      >
        <ImageSlot
          src={imageSrc}
          alt="Mount Saipal rising above the remote Himalayan landscape of Bajhang, Nepal"
          label="Verified hero photograph of Mount Saipal / Saipal region required"
          priority
        />
      </div>
      <div className="saipal-hero__scrim" />

      <div className="saipal-hero__badges">
        <span className="saipal-hero__badge">Bajhang, Sudurpashchim, Nepal</span>
        <span className="saipal-hero__badge saipal-hero__badge--accent">Mount Saipal — 7,031 m</span>
      </div>

      <div className="saipal-hero__content">
        <span className="saipal-eyebrow saipal-hero__eyebrow">Offbeat Nepal • Remote Himalayan Expedition</span>
        <h1 className="saipal-hero__title saipal-hero__fade" style={{ animationDelay: "0.1s" }}>
          Saipal Base Camp
        </h1>
        <h2 className="saipal-hero__subheading saipal-hero__fade" style={{ animationDelay: "0.25s" }}>
          Into the Untouched Wilderness of the Himalayas
        </h2>
        <p className="saipal-hero__subtitle saipal-hero__fade" style={{ animationDelay: "0.4s" }}>
          Journey into the remote mountains of Bajhang, where towering Himalayan peaks, pristine alpine
          valleys, and untouched wilderness create an extraordinary adventure far from the crowds.
        </p>
        <div className="saipal-hero__actions saipal-hero__fade" style={{ animationDelay: "0.55s" }}>
          <button type="button" className="saipal-btn saipal-btn--primary" onClick={() => scrollTo("destination-highlight")}>
            Explore Saipal Base Camp
          </button>
          <button type="button" className="saipal-btn saipal-btn--outline" onClick={() => scrollTo("travel-packages")}>
            Plan Your Expedition
          </button>
        </div>
      </div>

      <div className="saipal-hero__scroll" aria-hidden="true">
        <span className="saipal-hero__scroll-line" />
      </div>
    </section>
  );
}
