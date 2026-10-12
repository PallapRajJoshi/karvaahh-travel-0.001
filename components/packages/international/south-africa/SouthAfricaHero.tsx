"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { ArrowRight, Binoculars, ChevronDown, MessageCircle } from "lucide-react";
import { saHero as hero } from "@/data/south-africa/content";
import { saImage } from "@/data/south-africa/images";
import { INTERNATIONAL_HREF, SA_ENQUIRY } from "@/lib/south-africa/config";
import { ZaMedia } from "./ZaPrimitives";

const d = (s: string) => ({ "--d": s }) as React.CSSProperties;

/**
 * Cinematic hero: Cape Town from the air, slowly zooming, with layered
 * depth cards (safari, Winelands, coast) on scroll parallax, a horizon of
 * acacias where a giraffe silhouette drifts very slowly, a self-drawing
 * route and a staggered headline. Motion stops under reduced motion.
 */
export default function SouthAfricaHero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yPhoto = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "16%"]);
  const yNear = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -150]);
  const yFar = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -70]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, reduce ? 1 : 0.2]);
  const bg = saImage(hero.background);

  return (
    <header className="za-hero" id="za-hero" ref={ref}>
      <motion.div className="za-hero__photo" style={{ y: yPhoto }} aria-hidden="true">
        {bg && <Image src={bg.src} alt="" fill preload sizes="100vw" className="za-hero__photo-img" />}
      </motion.div>
      <div className="za-hero__scrim" aria-hidden="true" />

      <div className="za-hero__layers" aria-hidden="true">
        {hero.layers.map((l, i) => (
          <motion.figure key={l.id} className={`za-hero__layer za-hero__layer--${i}`} style={{ y: i % 2 ? yNear : yFar }}>
            <ZaMedia id={l.id} decorative sizes="260px" />
            <figcaption>{l.caption}</figcaption>
          </motion.figure>
        ))}
      </div>

      <svg className="za-hero__horizon" viewBox="0 0 1440 120" preserveAspectRatio="xMidYMax slice" aria-hidden="true" focusable="false">
        <path d="M0 120 L0 92 C 180 84 320 96 520 88 S 900 80 1120 90 S 1360 84 1440 88 L1440 120 Z" />
        {/* acacias */}
        <path d="M210 92 v-28 M180 66 q30 -14 60 0 q-30 -6 -60 0 Z M1050 90 v-34 M1012 58 q38 -18 76 0 q-38 -8 -76 0 Z M1290 88 v-22 M1268 68 q22 -10 44 0 q-22 -5 -44 0 Z" />
        <g className="za-hero__giraffe">
          <path d="M0 0 l2 -26 l6 -12 l4 2 l-4 12 l0 18 l14 0 l2 6 l-2 0 l-1 -4 l-12 0 l-1 4 l-2 0 l0 -4 l-4 0 l-1 4 l-2 0 Z" />
        </g>
      </svg>

      <motion.div className="pkg-container za-hero__inner" style={{ opacity: fade }}>
        <nav aria-label="Breadcrumb" className="pkg-crumbs asia-crumbs">
          <ol>
            <li><Link href="/">Home</Link></li>
            <li><Link href={INTERNATIONAL_HREF}>International Packages</Link></li>
            <li aria-current="page">South Africa Tour Packages</li>
          </ol>
        </nav>

        <div className="za-hero__copy">
          <p className="asia-eyebrow asia-eyebrow--light za-reveal" style={d("0s")}>{hero.eyebrow}</p>
          <h1 className="za-hero__title">
            <span className="za-reveal" style={d("0.08s")}>{hero.title}</span>
            <em className="za-reveal" style={d("0.24s")}>{hero.titleAccent}</em>
          </h1>
          <p className="za-hero__lede za-reveal" style={d("0.4s")}>{hero.lede}</p>

          <div className="za-hero__cta za-reveal" style={d("0.55s")}>
            <a href="#packages" className="pkg-btn pkg-btn--lg za-btn--gold">
              Explore South Africa Packages <ArrowRight size={18} className="pkg-arrow" aria-hidden="true" />
            </a>
            <a href="#plan-trip" className="pkg-btn pkg-btn--lg pkg-btn--ghost">Customize My South Africa Trip</a>
          </div>
          <div className="za-hero__links za-reveal" style={d("0.68s")}>
            <a href="#safari">
              <Binoculars size={16} aria-hidden="true" /> Plan My Safari
            </a>
            <a href={SA_ENQUIRY} target="_blank" rel="noopener noreferrer">
              <MessageCircle size={16} aria-hidden="true" /> WhatsApp Karvaahh<span className="pkg-sr"> (opens WhatsApp)</span>
            </a>
          </div>
        </div>

        <div className="za-hero__route za-reveal" style={d("0.8s")}>
          <p className="za-hero__route-label">A classic South Africa journey</p>
          <svg viewBox="0 0 600 40" className="za-hero__route-line" aria-hidden="true" focusable="false" preserveAspectRatio="none">
            <path d="M6 24 C 120 6, 210 38, 300 20 S 480 4, 594 18" />
          </svg>
          <ol className="za-hero__stops">
            {hero.route.map((r, i) => (
              <li key={r} style={d(`${1 + i * 0.35}s`)}>{r}</li>
            ))}
          </ol>
          <dl className="za-hero__facts">
            {hero.facts.map((f) => (
              <div key={f.k}><dt>{f.k}</dt><dd>{f.v}</dd></div>
            ))}
          </dl>
        </div>
      </motion.div>

      <a href="#za-bar" className="za-hero__scroll">
        <span className="pkg-sr">Scroll to </span>Start exploring
        <ChevronDown size={18} aria-hidden="true" />
      </a>
    </header>
  );
}
