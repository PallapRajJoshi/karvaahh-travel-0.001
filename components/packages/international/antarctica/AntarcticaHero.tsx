"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { ArrowRight, ChevronDown, Compass, MessageCircle } from "lucide-react";
import { antarcticaHero as hero } from "@/data/antarctica/content";
import { antarcticaImage } from "@/data/antarctica/images";
import { ANTARCTICA_ENQUIRY, INTERNATIONAL_HREF } from "@/lib/antarctica/config";
import PolarMedia from "./PolarMedia";

const d = (s: string) => ({ "--d": s }) as React.CSSProperties;

/** A handful of slow, sparse snow flecks. Fixed positions keep SSR stable. */
const FLECKS = [8, 17, 26, 38, 47, 59, 68, 77, 86, 94].map((left, i) => ({ left: `${left}%`, delay: `${(i * 1.7) % 9}s`, dur: `${14 + (i % 4) * 3}s` }));

/**
 * Full-screen cinematic hero. Layers (back to front): slowly zooming photo,
 * cold atmospheric scrim, drifting depth cards (parallax on scroll), a sparse
 * snowfall, a self-drawing expedition route and the staggered headline.
 * Motion stops under prefers-reduced-motion.
 */
export default function AntarcticaHero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yPhoto = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "18%"]);
  const yNear = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -140]);
  const yFar = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -60]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, reduce ? 1 : 0.2]);
  const bg = antarcticaImage(hero.background);

  return (
    <header className="an-hero" id="an-hero" ref={ref}>
      <motion.div className="an-hero__photo" style={{ y: yPhoto }} aria-hidden="true">
        {bg && <Image src={bg.src} alt="" fill preload sizes="100vw" className="an-hero__photo-img" />}
      </motion.div>
      <div className="an-hero__scrim" aria-hidden="true" />
      <div className="an-hero__snow" aria-hidden="true">
        {FLECKS.map((f, i) => (
          <span key={i} style={{ left: f.left, animationDelay: f.delay, animationDuration: f.dur }} />
        ))}
      </div>

      <div className="an-hero__layers" aria-hidden="true">
        <motion.div className="an-hero__layer an-hero__layer--a" style={{ y: yFar }}>
          <PolarMedia id={hero.layers[0]} decorative sizes="260px" />
        </motion.div>
        <motion.div className="an-hero__layer an-hero__layer--b" style={{ y: yNear }}>
          <PolarMedia id={hero.layers[1]} decorative sizes="220px" />
        </motion.div>
        <motion.div className="an-hero__layer an-hero__layer--c" style={{ y: yFar }}>
          <PolarMedia id={hero.layers[2]} decorative sizes="240px" />
        </motion.div>
      </div>

      <motion.div className="pkg-container an-hero__inner" style={{ opacity: fade }}>
        <nav aria-label="Breadcrumb" className="pkg-crumbs asia-crumbs">
          <ol>
            <li><Link href="/">Home</Link></li>
            <li><Link href={INTERNATIONAL_HREF}>International Packages</Link></li>
            <li aria-current="page">Antarctica Expeditions</li>
          </ol>
        </nav>

        <div className="an-hero__copy">
          <p className="asia-eyebrow asia-eyebrow--light an-reveal" style={d("0s")}>{hero.eyebrow}</p>
          <h1 className="an-hero__title">
            <span className="an-reveal" style={d("0.08s")}>{hero.title}</span>
            <em className="an-reveal" style={d("0.24s")}>{hero.titleAccent}</em>
          </h1>
          <p className="an-hero__lede an-reveal" style={d("0.4s")}>{hero.lede}</p>

          <div className="an-hero__cta an-reveal" style={d("0.55s")}>
            <a href="#expeditions" className="pkg-btn pkg-btn--lg an-btn--ice">
              Explore Antarctica Expeditions <ArrowRight size={18} className="pkg-arrow" aria-hidden="true" />
            </a>
            <a href="#plan-trip" className="pkg-btn pkg-btn--lg pkg-btn--ghost">Customize My Expedition</a>
          </div>
          <div className="an-hero__links an-reveal" style={d("0.68s")}>
            <a href="#plan-trip">
              <Compass size={16} aria-hidden="true" /> Plan My Polar Journey
            </a>
            <a href={ANTARCTICA_ENQUIRY} target="_blank" rel="noopener noreferrer">
              <MessageCircle size={16} aria-hidden="true" /> WhatsApp Karvaahh<span className="pkg-sr"> (opens WhatsApp)</span>
            </a>
          </div>
        </div>

        <div className="an-hero__route an-reveal" style={d("0.8s")}>
          <p className="an-hero__route-label">The classic expedition route</p>
          <svg viewBox="0 0 600 40" className="an-hero__route-line" aria-hidden="true" focusable="false" preserveAspectRatio="none">
            <path d="M6 20 C 120 4, 200 36, 300 20 S 480 4, 594 20" />
          </svg>
          <ol className="an-hero__stops">
            {hero.route.map((r, i) => (
              <li key={r} style={d(`${1 + i * 0.35}s`)}>{r}</li>
            ))}
          </ol>
          <dl className="an-hero__facts">
            {hero.facts.map((f) => (
              <div key={f.k}>
                <dt>{f.k}</dt>
                <dd>{f.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </motion.div>

      <div className="an-hero__ocean" aria-hidden="true" />
      <a href="#an-command" className="an-hero__scroll">
        <span className="pkg-sr">Scroll to </span>Begin the expedition
        <ChevronDown size={18} aria-hidden="true" />
      </a>
    </header>
  );
}
