import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronDown, Heart, MessageCircle } from "lucide-react";
import { australiaHero } from "@/data/australia/content";
import { australiaDestinationById } from "@/data/australia/destinations";
import { australiaImage } from "@/data/australia/images";
import { arcPath } from "@/lib/asia/projection";
import { AU_ENQUIRY, AU_HONEYMOON_ENQUIRY, INTERNATIONAL_HREF } from "@/lib/australia/config";
import { AU_MAP_H, AU_MAP_W, projectAU } from "@/lib/australia/projection";
import HeroCollage, { type CollageTile } from "../asia/HeroCollage";

const d = (s: string) => ({ "--d": s }) as React.CSSProperties;

/**
 * Full-screen cinematic hero. Layers, back to front: the harbour photo with a
 * slow zoom, a scrim, a faint dot map of Australia with real flight arcs and a
 * travelling plane, a parallax collage of landmarks with floating labels, and
 * the staggered headline. All motion stops under prefers-reduced-motion.
 */
export default function AustraliaHero() {
  const bg = australiaImage(australiaHero.background);
  const tiles: CollageTile[] = australiaHero.collage.flatMap((t) => {
    const image = australiaImage(t.id);
    return image ? [{ id: t.id, country: t.caption, image }] : [];
  });

  const routes = australiaHero.routes.flatMap(([a, b]) => {
    const A = australiaDestinationById(a)?.coords;
    const B = australiaDestinationById(b)?.coords;
    return A && B ? [{ id: `${a}-${b}`, d: arcPath(projectAU(A), projectAU(B)), from: projectAU(A) }] : [];
  });

  return (
    <header className="asia-hero us-hero au-hero" id="au-hero">
      <div className="us-hero__photo" aria-hidden="true">
        {bg && <Image src={bg.src} alt="" fill priority sizes="100vw" className="us-hero__photo-img" />}
      </div>
      <div className="us-hero__scrim au-hero__scrim" aria-hidden="true" />
      <div className="asia-hero__bg" aria-hidden="true">
        <span className="asia-hero__glow asia-hero__glow--a au-glow--ocean" />
        <span className="asia-hero__glow asia-hero__glow--b au-glow--earth" />
        <svg className="au-hero__map" viewBox={`0 0 ${AU_MAP_W} ${AU_MAP_H}`} preserveAspectRatio="xMidYMid meet" focusable="false">
          <use href="#au-land" className="au-hero__land" />
          {routes.map((r, i) => (
            <g key={r.id}>
              <path id={`au-hero-r${i}`} d={r.d} className="au-hero__arc" style={d(`${i * 0.6}s`)} />
              <circle cx={r.from.x} cy={r.from.y} r="7" className="au-hero__city" style={d(`${i * 0.4}s`)} />
            </g>
          ))}
          <g className="au-hero__plane">
            <path
              d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5z"
              transform="rotate(90) translate(-12 -12) scale(1.6)"
            />
            <animateMotion dur="9s" repeatCount="indefinite" rotate="auto">
              <mpath href="#au-hero-r0" />
            </animateMotion>
          </g>
        </svg>
      </div>

      <div className="pkg-container asia-hero__inner us-hero__inner">
        <nav aria-label="Breadcrumb" className="pkg-crumbs asia-crumbs">
          <ol>
            <li><Link href="/">Home</Link></li>
            <li><Link href={INTERNATIONAL_HREF}>International Packages</Link></li>
            <li aria-current="page">Australia Tour Packages</li>
          </ol>
        </nav>

        <div className="asia-hero__grid us-hero__layout">
          <div className="asia-hero__copy">
            <p className="asia-eyebrow asia-eyebrow--light us-reveal" style={d("0s")}>{australiaHero.eyebrow}</p>
            <h1 className="asia-hero__title us-hero__title">
              <span className="us-reveal" style={d("0.05s")}>{australiaHero.title}</span>
              <em className="us-reveal" style={d("0.2s")}>{australiaHero.titleAccent}</em>
            </h1>
            <p className="asia-hero__lede us-reveal" style={d("0.35s")}>{australiaHero.lede}</p>

            <div className="asia-hero__cta us-reveal" style={d("0.5s")}>
              <a href="#packages" className="pkg-btn pkg-btn--lg asia-btn--gold">
                Explore Australia Packages <ArrowRight size={18} className="pkg-arrow" aria-hidden="true" />
              </a>
              <a href="#plan-trip" className="pkg-btn pkg-btn--lg pkg-btn--ghost">Customize My Australia Trip</a>
            </div>
            <div className="us-hero__links us-reveal" style={d("0.62s")}>
              <a href={AU_HONEYMOON_ENQUIRY} target="_blank" rel="noopener noreferrer">
                <Heart size={16} aria-hidden="true" /> Plan My Honeymoon<span className="pkg-sr"> (opens WhatsApp)</span>
              </a>
              <a href={AU_ENQUIRY} target="_blank" rel="noopener noreferrer">
                <MessageCircle size={16} aria-hidden="true" /> WhatsApp Karvaahh<span className="pkg-sr"> (opens WhatsApp)</span>
              </a>
            </div>
          </div>

          <HeroCollage tiles={tiles} labels={australiaHero.labels} />
        </div>
      </div>

      <div className="us-hero__ribbon" aria-hidden="true">
        <div className="us-hero__ribbon-track">
          {[0, 1].map((k) => (
            <span key={k}>
              {australiaHero.ribbon.map((p) => (
                <span key={p} className="us-hero__ribbon-item">{p}</span>
              ))}
            </span>
          ))}
        </div>
      </div>

      <a href="#au-regions" className="us-hero__scroll">
        <span className="pkg-sr">Scroll to </span>Explore
        <ChevronDown size={18} aria-hidden="true" />
      </a>
    </header>
  );
}
