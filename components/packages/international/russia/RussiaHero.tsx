import Link from "next/link";
import { ArrowRight, Heart, MessageCircle, Sparkles } from "lucide-react";
import { russiaHero } from "@/data/russia/content";
import { russiaImage } from "@/data/russia/images";
import { INTERNATIONAL_HREF, RUSSIA_ENQUIRY, RUSSIA_HONEYMOON_ENQUIRY } from "@/lib/russia/config";
import HeroCollage, { type CollageTile } from "../asia/HeroCollage";
import Snowfall from "./Snowfall";

const CAPTIONS: Record<string, string> = {
  moscow: "Moscow",
  "saint-petersburg": "St. Petersburg",
  "moscow-winter": "Kremlin in winter",
  "lake-baikal": "Lake Baikal",
  aurora: "Arctic skies",
};

export default function RussiaHero() {
  const tiles: CollageTile[] = russiaHero.collage.flatMap((id) => {
    const image = russiaImage(id);
    return image ? [{ id, country: CAPTIONS[id] ?? "", image }] : [];
  });

  return (
    <header className="asia-hero ru-hero" id="ru-hero">
      <div className="asia-hero__bg" aria-hidden="true">
        <span className="asia-hero__glow asia-hero__glow--a ru-glow--burgundy" />
        <span className="asia-hero__glow asia-hero__glow--b" />
        {/* Onion-dome skyline silhouette along the bottom edge. */}
        <svg className="ru-skyline" viewBox="0 0 1440 140" preserveAspectRatio="xMidYMax slice" focusable="false">
          <path d="M0 140V112h60v-18h18v-26c0-14 22-22 22-38 0 16 22 24 22 38v26h18v18h70V96h14V74c0-12 18-18 18-32 0 14 18 20 18 32v22h14v16h90V84h12V62c0-16 26-26 26-46 0 20 26 30 26 46v22h12v28h80V90h16V70c0-10 14-16 14-28 0 12 14 18 14 28v20h16v22h120V100h10V86c0-8 10-12 10-22 0 10 10 14 10 22v14h10v12h110V80h14V58c0-14 22-22 22-40 0 18 22 26 22 40v22h14v32h90V94h16V74c0-12 18-18 18-32 0 14 18 20 18 32v20h16v18h120V102h12V88c0-8 12-12 12-22 0 10 12 14 12 22v14h12v10h90V140z" />
        </svg>
        <svg className="asia-hero__routes" viewBox="0 0 1440 800" preserveAspectRatio="xMidYMid slice" focusable="false">
          <path id="ru-hero-route" d="M-40 600 C 260 440, 560 520, 860 330 S 1260 150, 1500 190" />
          <path d="M80 760 C 360 620, 680 700, 980 560 S 1300 440, 1480 480" />
          <g className="asia-hero__plane">
            <path
              d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5z"
              transform="rotate(90) translate(-12 -12) scale(1.1)"
            />
            <animateMotion dur="28s" repeatCount="indefinite" rotate="auto">
              <mpath href="#ru-hero-route" />
            </animateMotion>
          </g>
        </svg>
        <Snowfall />
      </div>

      <div className="pkg-container asia-hero__inner">
        <nav aria-label="Breadcrumb" className="pkg-crumbs asia-crumbs">
          <ol>
            <li><Link href="/">Home</Link></li>
            <li><Link href={INTERNATIONAL_HREF}>International Packages</Link></li>
            <li aria-current="page">Russia Tour Packages</li>
          </ol>
        </nav>

        <div className="asia-hero__grid">
          <div className="asia-hero__copy ru-hero__copy">
            <p className="asia-eyebrow asia-eyebrow--light">{russiaHero.eyebrow}</p>
            <h1 className="asia-hero__title ru-hero__title">
              <span className="ru-reveal" style={{ "--d": "0.05s" } as React.CSSProperties}>{russiaHero.title}</span>{" "}
              <span className="ru-hero__dash">—</span>{" "}
              <em className="ru-reveal" style={{ "--d": "0.2s" } as React.CSSProperties}>{russiaHero.titleAccent}</em>
            </h1>
            <p className="asia-hero__lede ru-reveal" style={{ "--d": "0.35s" } as React.CSSProperties}>{russiaHero.lede}</p>
            <p className="asia-hero__sub ru-reveal" style={{ "--d": "0.45s" } as React.CSSProperties}>
              <Sparkles size={16} aria-hidden="true" /> {russiaHero.positioning}
            </p>

            <div className="asia-hero__cta ru-reveal" style={{ "--d": "0.55s" } as React.CSSProperties}>
              <a href="#packages" className="pkg-btn pkg-btn--lg asia-btn--gold">
                Explore Russia Packages <ArrowRight size={18} className="pkg-arrow" aria-hidden="true" />
              </a>
              <a href="#plan-trip" className="pkg-btn pkg-btn--lg pkg-btn--ghost">Customize My Russia Trip</a>
            </div>
            <div className="ru-hero__links ru-reveal" style={{ "--d": "0.65s" } as React.CSSProperties}>
              <a href={RUSSIA_HONEYMOON_ENQUIRY} target="_blank" rel="noopener noreferrer">
                <Heart size={16} aria-hidden="true" /> Plan My Honeymoon<span className="pkg-sr"> (opens WhatsApp)</span>
              </a>
              <a href={RUSSIA_ENQUIRY} target="_blank" rel="noopener noreferrer">
                <MessageCircle size={16} aria-hidden="true" /> WhatsApp Karvaahh<span className="pkg-sr"> (opens WhatsApp)</span>
              </a>
            </div>

            <ul className="ru-ribbons ru-reveal" style={{ "--d": "0.75s" } as React.CSSProperties} aria-label="Russia at a glance">
              {russiaHero.ribbons.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
          </div>

          <HeroCollage tiles={tiles} labels={["Kazan", "Golden Ring", "Sochi", "Murmansk"]} />
        </div>
      </div>
    </header>
  );
}
