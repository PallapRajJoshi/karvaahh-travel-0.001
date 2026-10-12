import Link from "next/link";
import { ArrowRight, Heart, MessageCircle, Plane, Route, Sparkles } from "lucide-react";
import { europeHero } from "@/data/europe/content";
import { bookableCountries } from "@/data/europe/countries";
import { GENERAL_ENQUIRY, HONEYMOON_ENQUIRY, INTERNATIONAL_HREF } from "@/lib/europe/config";
import { allLandPath } from "@/lib/europe/map";
import { MAP_H, MAP_W } from "@/lib/europe/projection";
import CountUp from "../../CountUp";
import HeroCollage, { type CollageTile } from "../asia/HeroCollage";

/** "30+" style count, rounded down to the nearest ten so it never overstates. */
const destinationsLabel = () => Math.floor(bookableCountries.length / 10) * 10;

export default function EuropeHero() {
  const tiles: CollageTile[] = europeHero.collage.slice(0, 5).map((c) => ({ id: c.label, country: c.label, image: c.image }));
  const labels = europeHero.collage.slice(5).map((c) => c.label);

  return (
    <header className="asia-hero eu-hero" id="europe-hero">
      <div className="asia-hero__bg" aria-hidden="true">
        <span className="asia-hero__glow asia-hero__glow--a" />
        <span className="asia-hero__glow asia-hero__glow--b" />
        <span className="eu-hero__light" />
        {/* Subtle dotted contour of Europe, drawn from the same data as the interactive map. */}
        <svg className="eu-hero__map" viewBox={`0 0 ${MAP_W} ${MAP_H}`} preserveAspectRatio="xMaxYMid slice" focusable="false">
          <path d={allLandPath()} />
        </svg>
        <svg className="asia-hero__routes" viewBox="0 0 1440 800" preserveAspectRatio="xMidYMid slice" focusable="false">
          {/* Illustrative routes arriving from the east (Nepal & India). Not actual flight paths. */}
          <path id="eu-hero-route" d="M1500 520 C 1240 360, 980 420, 760 300 S 360 140, -40 220" />
          <path d="M1500 660 C 1180 600, 900 700, 640 560 S 260 460, -40 520" />
          <g className="asia-hero__plane">
            <path
              d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5z"
              transform="rotate(90) translate(-12 -12) scale(1.1)"
            />
            <animateMotion dur="28s" repeatCount="indefinite" rotate="auto">
              <mpath href="#eu-hero-route" />
            </animateMotion>
          </g>
        </svg>
      </div>

      <div className="pkg-container asia-hero__inner">
        <nav aria-label="Breadcrumb" className="pkg-crumbs asia-crumbs">
          <ol>
            <li><Link href="/">Home</Link></li>
            <li><Link href={INTERNATIONAL_HREF}>International Packages</Link></li>
            <li aria-current="page">Europe Tour Packages</li>
          </ol>
        </nav>

        <div className="asia-hero__grid">
          <div className="asia-hero__copy eu-hero__copy">
            <p className="asia-eyebrow asia-eyebrow--light">{europeHero.eyebrow}</p>
            <h1 className="asia-hero__title eu-hero__title">
              Discover Europe, <em>One Journey at a Time</em>
            </h1>
            <p className="asia-hero__lede">{europeHero.lede}</p>
            <p className="asia-hero__sub">
              <Sparkles size={16} aria-hidden="true" /> {europeHero.tagline}
            </p>

            <div className="asia-hero__cta">
              <a href="#packages" className="pkg-btn pkg-btn--lg asia-btn--gold">
                Explore Europe Packages <ArrowRight size={18} className="pkg-arrow" aria-hidden="true" />
              </a>
              <a href="#plan-trip" className="pkg-btn pkg-btn--lg pkg-btn--ghost">Customize My Europe Trip</a>
            </div>
            <div className="eu-hero__links">
              <a href={HONEYMOON_ENQUIRY} target="_blank" rel="noopener noreferrer" className="eu-hero__link">
                <Heart size={16} aria-hidden="true" /> Plan My Honeymoon
                <span className="pkg-sr"> (opens WhatsApp)</span>
              </a>
              <a href={GENERAL_ENQUIRY} target="_blank" rel="noopener noreferrer" className="eu-hero__link">
                <MessageCircle size={16} aria-hidden="true" /> WhatsApp Karvaahh
                <span className="pkg-sr"> (opens WhatsApp)</span>
              </a>
            </div>
          </div>

          <HeroCollage tiles={tiles} labels={labels} />
        </div>

        <ul className="eu-hero__stats" aria-label="Europe with Karvaahh">
          <li>
            <strong><CountUp value={destinationsLabel()} suffix="+" /></strong>
            <span>European Destinations</span>
          </li>
          <li>
            <Route size={22} aria-hidden="true" />
            <span>Multi-Country Journeys</span>
          </li>
          <li>
            <Sparkles size={22} aria-hidden="true" />
            <span>Customized Itineraries</span>
          </li>
          <li>
            <Plane size={22} aria-hidden="true" />
            <span>Nepal &amp; India Departure Support</span>
          </li>
        </ul>
      </div>
    </header>
  );
}
