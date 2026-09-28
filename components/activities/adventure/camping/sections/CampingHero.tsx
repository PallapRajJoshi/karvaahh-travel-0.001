"use client";

import { Fragment, useEffect, useRef } from "react";
import { gsap } from "gsap";
import CampImage from "../shared/CampImage";
import EmberParticles from "../shared/EmberParticles";
import { IconArrow } from "../shared/Icons";
import CampingStats from "./CampingStats";
import { campingImages } from "@/data/campingImages";
import { PLAN_HREF } from "@/data/campingContent";
import "./CampingHero.css";

const LINE_ONE = "Sleep Under the Himalayan Sky";

export default function CampingHero() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const q = gsap.utils.selector(el);
      // Explicit first-visible state (content is visible by default without JS).
      gsap.set(q(".cmp-hero__media"), { scale: 1.08 });
      gsap.set(q(".cmp-hero__overlay"), { opacity: 0 });
      gsap.set(q(".cmp-hero__eyebrow, .cmp-hero__line2, .cmp-hero__desc, .cmp-hero__cta > *, .cmp-hero__stats, .cmp-hero__scroll"), { autoAlpha: 0, y: 24 });
      gsap.set(q(".cmp-hero__word"), { autoAlpha: 0, yPercent: 60 });

      gsap.timeline({ defaults: { ease: "power3.out" } })
        .to(q(".cmp-hero__media"), { scale: 1, duration: 2.6, ease: "power2.out" }, 0)
        .to(q(".cmp-hero__overlay"), { opacity: 1, duration: 1.2 }, 0)
        .to(q(".cmp-hero__eyebrow"), { autoAlpha: 1, y: 0, duration: 0.8 }, 0.35)
        .to(q(".cmp-hero__word"), { autoAlpha: 1, yPercent: 0, duration: 0.9, stagger: 0.08 }, 0.5)
        .to(q(".cmp-hero__line2"), { autoAlpha: 1, y: 0, duration: 0.8 }, 0.95)
        .to(q(".cmp-hero__desc"), { autoAlpha: 1, y: 0, duration: 0.8 }, 1.1)
        .to(q(".cmp-hero__cta > *"), { autoAlpha: 1, y: 0, duration: 0.7, stagger: 0.1 }, 1.25)
        .to(q(".cmp-hero__stats"), { autoAlpha: 1, y: 0, duration: 0.9 }, 1.45)
        .to(q(".cmp-hero__scroll"), { autoAlpha: 1, y: 0, duration: 0.7 }, 1.7);
    });
    return () => mm.revert();
  }, []);

  return (
    <section ref={root} className="cmp-hero" aria-labelledby="cmp-hero-title">
      <div className="cmp-hero__media">
        <CampImage
          src={campingImages.hero}
          alt="Tents glowing beside a campfire beneath snow-capped Himalayan peaks at dusk"
          tone="night"
          priority
          sizes="100vw"
          quality={80}
        />
      </div>
      <div className="cmp-hero__overlay" aria-hidden="true" />
      <EmberParticles count={46} />

      <div className="cmp-container cmp-hero__inner">
        <p className="cmp-hero__eyebrow">Camping in Nepal</p>
        <h1 className="cmp-hero__title" id="cmp-hero-title">
          <span className="cmp-hero__line1">
            {LINE_ONE.split(" ").map((w, i) => (
              <Fragment key={i}>
                <span className="cmp-hero__wordwrap"><span className="cmp-hero__word">{w}</span></span>{" "}
              </Fragment>
            ))}
          </span>
          <span className="cmp-hero__line2">Discover Camping Across Nepal</span>
        </h1>
        <p className="cmp-hero__desc">
          From peaceful hilltop camps and lakeside escapes to remote Himalayan wilderness,
          discover unforgettable camping experiences across Nepal.
        </p>
        <div className="cmp-hero__cta">
          <a href="#destinations" className="cmp-btn cmp-btn--primary">
            Explore Camping Destinations <IconArrow size={18} />
          </a>
          <a href={PLAN_HREF} className="cmp-btn cmp-btn--ghost">Plan Your Camping Trip</a>
        </div>
      </div>

      <CampingStats />

      <a href="#intro" className="cmp-hero__scroll">
        <span className="cmp-hero__scroll-line" aria-hidden="true" />
        <span>Scroll to explore</span>
      </a>
    </section>
  );
}
