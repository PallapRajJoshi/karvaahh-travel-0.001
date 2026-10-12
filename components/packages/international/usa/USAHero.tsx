import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronDown, Heart, MessageCircle } from "lucide-react";
import { usaHero } from "@/data/usa/content";
import { usaImage } from "@/data/usa/images";
import { INTERNATIONAL_HREF, USA_ENQUIRY, USA_HONEYMOON_ENQUIRY } from "@/lib/usa/config";
import HeroCollage, { type CollageTile } from "../asia/HeroCollage";

const d = (s: string) => ({ "--d": s }) as React.CSSProperties;

/**
 * Full-screen cinematic hero: a slowly zooming skyline behind a layered
 * collage (parallax via HeroCollage), drifting route lines with a plane,
 * floating destination labels and a staggered text reveal. All motion stops
 * under prefers-reduced-motion.
 */
export default function USAHero() {
  const bg = usaImage(usaHero.background);
  const tiles: CollageTile[] = usaHero.collage.flatMap((t) => {
    const image = usaImage(t.id);
    return image ? [{ id: t.id, country: t.caption, image }] : [];
  });

  return (
    <header className="asia-hero us-hero" id="us-hero">
      <div className="us-hero__photo" aria-hidden="true">
        {bg && <Image src={bg.src} alt="" fill priority sizes="100vw" className="us-hero__photo-img" />}
      </div>
      <div className="us-hero__scrim" aria-hidden="true" />
      <div className="asia-hero__bg" aria-hidden="true">
        <span className="us-hero__grid" />
        <span className="asia-hero__glow asia-hero__glow--a us-glow--red" />
        <span className="asia-hero__glow asia-hero__glow--b us-glow--navy" />
        <svg className="asia-hero__routes us-hero__routes" viewBox="0 0 1440 800" preserveAspectRatio="xMidYMid slice" focusable="false">
          <path id="us-hero-route" d="M-40 640 C 240 470, 520 560, 820 380 S 1240 180, 1500 230" />
          <path d="M60 780 C 380 640, 700 720, 1000 580 S 1320 470, 1490 500" />
          <path d="M-20 300 C 300 220, 620 300, 900 200 S 1260 80, 1480 120" />
          <g className="asia-hero__plane">
            <path
              d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5z"
              transform="rotate(90) translate(-12 -12) scale(1.1)"
            />
            <animateMotion dur="30s" repeatCount="indefinite" rotate="auto">
              <mpath href="#us-hero-route" />
            </animateMotion>
          </g>
        </svg>
      </div>

      <div className="pkg-container asia-hero__inner us-hero__inner">
        <nav aria-label="Breadcrumb" className="pkg-crumbs asia-crumbs">
          <ol>
            <li><Link href="/">Home</Link></li>
            <li><Link href={INTERNATIONAL_HREF}>International Packages</Link></li>
            <li aria-current="page">USA Tour Packages</li>
          </ol>
        </nav>

        <div className="asia-hero__grid us-hero__layout">
          <div className="asia-hero__copy">
            <p className="asia-eyebrow asia-eyebrow--light us-reveal" style={d("0s")}>{usaHero.eyebrow}</p>
            <h1 className="asia-hero__title us-hero__title">
              <span className="us-reveal" style={d("0.05s")}>{usaHero.title}</span>
              <em className="us-reveal" style={d("0.2s")}>{usaHero.titleAccent}</em>
            </h1>
            <p className="asia-hero__lede us-reveal" style={d("0.35s")}>{usaHero.lede}</p>

            <div className="asia-hero__cta us-reveal" style={d("0.5s")}>
              <a href="#packages" className="pkg-btn pkg-btn--lg asia-btn--gold">
                Explore USA Packages <ArrowRight size={18} className="pkg-arrow" aria-hidden="true" />
              </a>
              <a href="#plan-trip" className="pkg-btn pkg-btn--lg pkg-btn--ghost">Customize My USA Trip</a>
            </div>
            <div className="us-hero__links us-reveal" style={d("0.62s")}>
              <a href={USA_HONEYMOON_ENQUIRY} target="_blank" rel="noopener noreferrer">
                <Heart size={16} aria-hidden="true" /> Plan My Honeymoon<span className="pkg-sr"> (opens WhatsApp)</span>
              </a>
              <a href={USA_ENQUIRY} target="_blank" rel="noopener noreferrer">
                <MessageCircle size={16} aria-hidden="true" /> WhatsApp Karvaahh<span className="pkg-sr"> (opens WhatsApp)</span>
              </a>
            </div>
          </div>

          <HeroCollage tiles={tiles} labels={usaHero.labels} />
        </div>
      </div>

      <div className="us-hero__ribbon" aria-hidden="true">
        <div className="us-hero__ribbon-track">
          {[0, 1].map((k) => (
            <span key={k}>
              {usaHero.ribbon.map((p) => (
                <span key={p} className="us-hero__ribbon-item">{p}</span>
              ))}
            </span>
          ))}
        </div>
      </div>

      <a href="#us-regions" className="us-hero__scroll">
        <span className="pkg-sr">Scroll to </span>Explore
        <ChevronDown size={18} aria-hidden="true" />
      </a>
    </header>
  );
}
