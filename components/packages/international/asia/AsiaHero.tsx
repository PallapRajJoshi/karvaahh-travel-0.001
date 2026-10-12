import Link from "next/link";
import { ArrowRight, Compass, MapPin, Route } from "lucide-react";
import { asiaHero } from "@/data/asia-content";
import { activeDestinations, destinationById } from "@/data/asia-destinations";
import { INTERNATIONAL_HREF } from "@/lib/asia/config";
import CountUp from "../../CountUp";
import HeroCollage, { type CollageTile } from "./HeroCollage";

/** "30+" style count, rounded down so it never overstates. */
const destinationsLabel = () => Math.floor(activeDestinations.length / 10) * 10;

export default function AsiaHero() {
  const tiles: CollageTile[] = asiaHero.collage
    .map((id) => destinationById(id))
    .filter((d): d is NonNullable<typeof d> => Boolean(d?.active && d.image))
    .map((d) => ({ id: d.id, country: d.country, image: d.image! }));

  return (
    <header className="asia-hero" id="asia-hero">
      {/* Animated backdrop: soft glows, illustrative route arcs and a small plane. */}
      <div className="asia-hero__bg" aria-hidden="true">
        <span className="asia-hero__glow asia-hero__glow--a" />
        <span className="asia-hero__glow asia-hero__glow--b" />
        <svg className="asia-hero__routes" viewBox="0 0 1440 800" preserveAspectRatio="xMidYMid slice" focusable="false">
          <path id="asia-hero-route-1" d="M-40 640 C 300 420, 620 520, 900 300 S 1300 120, 1500 160" />
          <path d="M120 760 C 380 600, 700 700, 980 560 S 1300 420, 1480 470" />
          <path d="M-20 240 C 260 160, 520 300, 760 200 S 1160 40, 1460 60" />
          {/* Plane glyph points up; rotate it to face along the path. */}
          <g className="asia-hero__plane">
            <path
              d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5z"
              transform="rotate(90) translate(-12 -12) scale(1.1)"
            />
            <animateMotion dur="26s" repeatCount="indefinite" rotate="auto">
              <mpath href="#asia-hero-route-1" />
            </animateMotion>
          </g>
        </svg>
      </div>

      <div className="pkg-container asia-hero__inner">
        <nav aria-label="Breadcrumb" className="pkg-crumbs asia-crumbs">
          <ol>
            <li><Link href="/">Home</Link></li>
            <li><Link href={INTERNATIONAL_HREF}>International Packages</Link></li>
            <li aria-current="page">Asia Tour Packages</li>
          </ol>
        </nav>

        <div className="asia-hero__grid">
          <div className="asia-hero__copy">
            <p className="asia-eyebrow asia-eyebrow--light">{asiaHero.eyebrow}</p>
            <h1 className="asia-hero__title">
              Explore Asia, <em>Your Way</em>
            </h1>
            <p className="asia-hero__lede">{asiaHero.lede}</p>
            <p className="asia-hero__sub">
              <MapPin size={16} aria-hidden="true" /> {asiaHero.sub}
            </p>

            <div className="asia-hero__cta">
              <a href="#destinations" className="pkg-btn pkg-btn--lg asia-btn--gold">
                Explore Destinations <ArrowRight size={18} className="pkg-arrow" aria-hidden="true" />
              </a>
              <a href="#plan-trip" className="pkg-btn pkg-btn--lg pkg-btn--ghost">Plan My Trip</a>
            </div>

            <ul className="asia-hero__facts" aria-label="Why plan Asia with Karvaahh">
              <li>
                <strong><CountUp value={destinationsLabel()} suffix="+" /></strong>
                <span>Destinations</span>
              </li>
              <li>
                <Route size={20} aria-hidden="true" />
                <span>Customized Itineraries</span>
              </li>
              <li>
                <Compass size={20} aria-hidden="true" />
                <span>Nepal &amp; India Departure Support</span>
              </li>
            </ul>
          </div>

          <HeroCollage tiles={tiles} labels={asiaHero.labels} />
        </div>
      </div>
    </header>
  );
}
