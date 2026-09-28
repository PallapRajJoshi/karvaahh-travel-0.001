"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useRef, useState, type ReactNode } from "react";
import {
  LazyMotion,
  MotionConfig,
  domAnimation,
  m,
  useReducedMotion,
  useScroll,
  useTransform,
  type Variants,
} from "framer-motion";

import {
  ALTITUDE_MAX,
  ALTITUDE_STEPS,
  FLIGHTS,
  HERO_FACTS,
  IMAGES,
  LINKS,
  MEDIA_ADDON,
  MONTHS,
  PRICE_FACTORS,
  SEASON_LANES,
  SITES,
  TRUST_POINTS,
  type FlightType,
  type FlyingSite,
} from "./data";

import "./paragliding.css";

const EASE = [0.22, 1, 0.36, 1] as const;

/* ================================================================
   Shared building blocks
   ================================================================ */

type IconName = "clock" | "wing" | "camera" | "route" | "pin" | "calendar" | "car" | "map" | "tag" | "mountain";

function Icon({ name, size = 22 }: { name: IconName; size?: number }) {
  const paths: Record<IconName, ReactNode> = {
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
    wing: <path d="M3 10c4-5 14-5 18 0M5 10l7 9 7-9M9 10l3 9 3-9" />,
    camera: (
      <>
        <rect x="3" y="7" width="18" height="13" rx="3" />
        <path d="M8 7l1.5-3h5L16 7" />
        <circle cx="12" cy="13.5" r="3.5" />
      </>
    ),
    route: (
      <>
        <circle cx="6" cy="18" r="2" />
        <circle cx="18" cy="6" r="2" />
        <path d="M8 18h7a3 3 0 0 0 0-6H9a3 3 0 0 1 0-6h7" />
      </>
    ),
    pin: (
      <>
        <path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z" />
        <circle cx="12" cy="9.5" r="2.5" />
      </>
    ),
    calendar: (
      <>
        <rect x="3" y="5" width="18" height="16" rx="3" />
        <path d="M3 10h18M8 3v4M16 3v4" />
      </>
    ),
    car: (
      <>
        <path d="M4 16V12l2-5h12l2 5v4z" />
        <circle cx="7.5" cy="16.5" r="1.8" />
        <circle cx="16.5" cy="16.5" r="1.8" />
      </>
    ),
    map: <path d="M3 6l6-2 6 2 6-2v14l-6 2-6-2-6 2zM9 4v14M15 6v14" />,
    tag: (
      <>
        <path d="M3 12V4h8l10 10-8 8z" />
        <circle cx="7.5" cy="8.5" r="1.5" />
      </>
    ),
    mountain: <path d="M2 20l7-12 4 6 3-4 6 10z" />,
  };
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {paths[name]}
    </svg>
  );
}

/** next/image wrapper — if a placeholder file is missing, the sky gradient behind it shows instead */
function Photo({
  src,
  alt,
  sizes,
  eager = false,
  className = "",
}: {
  src: string;
  alt: string;
  sizes: string;
  eager?: boolean;
  className?: string;
}) {
  const [failed, setFailed] = useState(false);
  return (
    <div className={`pg-photo ${className}`}>
      {!failed && (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          loading={eager ? "eager" : "lazy"}
          fetchPriority={eager ? "high" : "auto"}
          className="pg-photo__img"
          onError={() => setFailed(true)}
        />
      )}
    </div>
  );
}

function Reveal({ children, delay = 0, className }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <m.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7, ease: EASE, delay }}
    >
      {children}
    </m.div>
  );
}

/** Same as Reveal, but renders an <li> so lists stay valid HTML */
function RevealItem({ children, delay = 0, className }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <m.li
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7, ease: EASE, delay }}
    >
      {children}
    </m.li>
  );
}

function SectionHeading({
  id,
  title,
  lead,
  tone = "light",
  align = "start",
}: {
  id: string;
  title: string;
  lead?: string;
  tone?: "light" | "dark";
  align?: "start" | "center";
}) {
  return (
    <Reveal className={`pg-heading pg-heading--${tone} pg-heading--${align}`}>
      <h2 id={id} className="pg-heading__title">
        {title}
      </h2>
      {lead && <p className="pg-heading__lead">{lead}</p>}
    </Reveal>
  );
}

/* ================================================================
   1. Hero
   ================================================================ */

const heroStagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};
const heroItem: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: EASE } },
};

function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "14%"]);
  const cardsY = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "-30%"]);

  return (
    <section ref={ref} className="pg-hero" aria-labelledby="pg-hero-title">
      <m.div className="pg-hero__bg" style={{ y: bgY }}>
        <Photo
          src={IMAGES.hero}
          alt="Tandem paraglider flying above Phewa Lake with the Annapurna range behind, Pokhara, Nepal"
          sizes="100vw"
          eager
        />
      </m.div>
      <div className="pg-hero__scrim" aria-hidden="true" />

      <div className="pg-wrap pg-hero__layout">
        <m.div className="pg-hero__copy" variants={heroStagger} initial="hidden" animate="show">
          <m.p className="pg-hero__place" variants={heroItem}>
            Pokhara, Bandipur, Bhedetar and Tansen
          </m.p>
          <m.h1 id="pg-hero-title" className="pg-hero__title" variants={heroItem}>
            Paragliding in Nepal
          </m.h1>
          <m.p className="pg-hero__sub" variants={heroItem}>
            Step off a ridge above Phewa Lake and ride warm Himalayan air, with the Annapurnas filling the horizon
            and eagles circling beside your wing.
          </m.p>
          <m.div className="pg-hero__actions" variants={heroItem}>
            <a href={LINKS.flightsAnchor} className="pg-btn pg-btn--primary">
              Explore flights
            </a>
            <Link href={LINKS.plan} className="pg-btn pg-btn--glass">
              Plan your adventure
            </Link>
          </m.div>
        </m.div>

        <m.ul className="pg-hero__facts" style={{ y: cardsY }} aria-label="Quick facts">
          {HERO_FACTS.map((fact, i) => (
            <m.li
              key={fact.label}
              className={`pg-glass pg-hero__fact pg-hero__fact--${i + 1}`}
              initial={{ opacity: 0, y: 30 }}
              animate={
                reduce
                  ? { opacity: 1, y: 0 }
                  : { opacity: 1, y: [0, -8, 0] }
              }
              transition={
                reduce
                  ? { duration: 0.6, delay: 0.6 + i * 0.15 }
                  : {
                      opacity: { duration: 0.6, delay: 0.6 + i * 0.15 },
                      y: { duration: 5 + i, repeat: Infinity, ease: "easeInOut", delay: 0.6 + i * 0.15 },
                    }
              }
            >
              <span className="pg-hero__fact-label">{fact.label}</span>
              <span className="pg-hero__fact-value">{fact.value}</span>
            </m.li>
          ))}
        </m.ul>
      </div>

      <a href="#pg-intro" className="pg-hero__cue" aria-label="Scroll to introduction">
        <span aria-hidden="true" />
      </a>
    </section>
  );
}

/* ================================================================
   2. Introduction
   ================================================================ */

const INTRO_POINTS = [
  { icon: "mountain" as const, title: "Himalaya on the horizon", text: "Annapurna, Dhaulagiri and Machhapuchhre are visible from the main launch on clear days." },
  { icon: "map" as const, title: "Lakes and valleys below", text: "Land beside Phewa Lake, or fly over terraced hills, river valleys and old hill towns." },
  { icon: "wing" as const, title: "Reliable thermals", text: "Warm, stable autumn and winter air gives smooth flights and long soaring days." },
];

function Intro() {
  return (
    <section id="pg-intro" className="pg-section pg-intro" aria-labelledby="pg-intro-title">
      <div className="pg-wrap pg-intro__grid">
        <div className="pg-intro__text">
          <SectionHeading
            id="pg-intro-title"
            title="Why Nepal is one of the world's great places to fly"
            lead="Few places put you this close to 8,000-metre peaks while you hang in the air. Pokhara's lake, sheltered valley and dependable thermals made it an international flying centre, and new launch sites across the hills are opening up quieter, lesser-known skies."
          />
          <ul className="pg-intro__points">
            {INTRO_POINTS.map((p, i) => (
              <RevealItem key={p.title} delay={0.1 * i} className="pg-intro__point">
                  <span className="pg-intro__icon">
                    <Icon name={p.icon} />
                  </span>
                  <div>
                    <h3 className="pg-intro__point-title">{p.title}</h3>
                    <p className="pg-intro__point-text">{p.text}</p>
                  </div>
              </RevealItem>
            ))}
          </ul>
        </div>
        <Reveal className="pg-intro__media" delay={0.15}>
          <Photo
            src={IMAGES.intro}
            alt="Colourful paraglider wings over Phewa Lake and Pokhara valley"
            sizes="(max-width: 900px) 100vw, 45vw"
            className="pg-intro__photo"
          />
          <p className="pg-glass pg-intro__badge">
            <strong>Phewa Lake</strong>
            <span>Most Sarangkot flights land on its shore</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ================================================================
   3. Altitude experience — the page's signature graphic
   ================================================================ */

function Altitude() {
  const ticks = [0, 1000, 2000, 3000];
  const pct = (m: number) => (m / ALTITUDE_MAX) * 100;
  const xs = [50, 150, 250];
  const pathD = ALTITUDE_STEPS.map((s, i) => `${i === 0 ? "M" : "L"}${xs[i]} ${100 - pct(s.metres)}`).join(" ");

  return (
    <section className="pg-section pg-alt" aria-labelledby="pg-alt-title">
      <div className="pg-wrap">
        <SectionHeading
          id="pg-alt-title"
          title="How high you'll fly"
          lead="From gentle hill launches to thermal climbs far above the ridgeline — each site offers a different height and feel."
          tone="dark"
        />

        <div
          className="pg-alt__chart"
          role="img"
          aria-label="Altitude progression: Bandipur 1,030 metres, Sarangkot 1,592 metres, cross-country flights up to about 3,500 metres"
        >
          <div className="pg-alt__plot">
            {ticks.map((t) => (
              <span key={t} className="pg-alt__tick" style={{ bottom: `${pct(t)}%` }} aria-hidden="true">
                <span>{t === 0 ? "0 m" : `${t.toLocaleString("en-IN")} m`}</span>
              </span>
            ))}

            <div className="pg-alt__cols">
              {ALTITUDE_STEPS.map((s, i) => (
                <div key={s.id} className="pg-alt__slot">
                  <m.div
                    className={`pg-alt__col pg-alt__col--${i + 1}`}
                    style={{ height: `${pct(s.metres)}%`, transformOrigin: "bottom" }}
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 1.1, ease: EASE, delay: 0.2 + i * 0.35 }}
                  />
                  <m.div
                    className="pg-alt__label"
                    style={{ bottom: `calc(${pct(s.metres)}% + 12px)` }}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.6, delay: 0.9 + i * 0.35 }}
                  >
                    <span className="pg-alt__label-name">{s.name}</span>
                    <span className="pg-alt__label-value">{s.display}</span>
                  </m.div>
                </div>
              ))}
            </div>

            <svg className="pg-alt__path" viewBox="0 0 300 100" preserveAspectRatio="none" aria-hidden="true">
              <m.path
                d={pathD}
                fill="none"
                vectorEffect="non-scaling-stroke"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 1.6, ease: "easeInOut", delay: 0.6 }}
              />
            </svg>
          </div>
        </div>

        <ol className="pg-alt__captions">
          {ALTITUDE_STEPS.map((s, i) => (
            <RevealItem key={s.id} delay={0.1 * i} className="pg-alt__caption">
                <span className="pg-alt__caption-step">{i + 1}</span>
                <div>
                  <h3>
                    {s.name} <span>{s.display}</span>
                  </h3>
                  <p>{s.caption}</p>
                </div>
            </RevealItem>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ================================================================
   4. Where you can fly
   ================================================================ */

function statusClass(status: FlyingSite["status"]) {
  return `pg-status pg-status--${status.toLowerCase().replace(/[^a-z]+/g, "-")}`;
}

function SiteCard({ site }: { site: FlyingSite }) {
  return (
    <article className="pg-site" aria-labelledby={`site-${site.id}`}>
      <div className="pg-site__media">
        <Photo src={IMAGES.sites[site.id]} alt={site.alt} sizes="(max-width: 640px) 100vw, (max-width: 1100px) 50vw, 25vw" />
        <span className={statusClass(site.status)}>{site.status}</span>
        <span className="pg-site__alt">{site.altitude}</span>
      </div>
      <div className="pg-site__body">
        <h3 id={`site-${site.id}`} className="pg-site__name">
          {site.name}
        </h3>
        <p className="pg-site__region">
          <Icon name="pin" size={15} />
          {site.province} Province · {site.district}
        </p>
        <p className="pg-site__text">{site.experience}</p>
        <dl className="pg-site__meta">
          <div>
            <dt>Season</dt>
            <dd>{site.season}</dd>
          </div>
          <div>
            <dt>Tandem</dt>
            <dd>{site.price}</dd>
          </div>
        </dl>
      </div>
    </article>
  );
}

function Sites() {
  const provinces = useMemo(() => ["All", ...Array.from(new Set(SITES.map((s) => s.province)))], []);
  const [active, setActive] = useState("All");
  const shown = active === "All" ? SITES : SITES.filter((s) => s.province === active);

  return (
    <section className="pg-section pg-sites" aria-labelledby="pg-sites-title">
      <div className="pg-wrap">
        <div className="pg-sites__head">
          <SectionHeading
            id="pg-sites-title"
            title="Where you can fly"
            lead="Sarangkot is the heart of Nepal paragliding, but launch sites now stretch from Ilam in the east to Dang in the west."
          />
          <div className="pg-chips" role="group" aria-label="Filter sites by province">
            {provinces.map((p) => (
              <button
                key={p}
                type="button"
                className="pg-chip"
                aria-pressed={active === p}
                onClick={() => setActive(p)}
              >
                {p === "All" ? "All provinces" : p}
              </button>
            ))}
          </div>
        </div>

        <p className="sr-only" aria-live="polite">
          Showing {shown.length} {shown.length === 1 ? "site" : "sites"}
        </p>

        <div className="pg-sites__grid">
          {shown.map((site, i) => (
            <m.div
              key={site.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: EASE, delay: Math.min(i, 6) * 0.05 }}
            >
              <SiteCard site={site} />
            </m.div>
          ))}
        </div>

        <p className="pg-note">
          Only Sarangkot runs daily commercial flights all season. At other sites, availability depends on local
          operators and weather — we confirm before you book.
        </p>
      </div>
    </section>
  );
}

/* ================================================================
   5. Flight types
   ================================================================ */

function IntensityMeter({ level }: { level: FlightType["intensity"] }) {
  return (
    <span className="pg-meter" aria-label={`Intensity ${level} of 5`}>
      {[1, 2, 3, 4, 5].map((n) => (
        <span key={n} className={n <= level ? "is-on" : undefined} aria-hidden="true" />
      ))}
    </span>
  );
}

function FlightCard({ flight, featured }: { flight: FlightType; featured: boolean }) {
  const airtime = Math.max(12, (flight.maxMinutes / 180) * 100);
  return (
    <article className={`pg-flight${featured ? " pg-flight--featured" : ""}`} aria-labelledby={`flight-${flight.id}`}>
      <div className="pg-flight__media">
        <Photo src={IMAGES.flights[flight.id]} alt={flight.alt} sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw" />
        <span className="pg-glass pg-flight__price">
          <small>From</small> {flight.price}
        </span>
      </div>
      <div className="pg-flight__body">
        <h3 id={`flight-${flight.id}`} className="pg-flight__name">
          {flight.name}
        </h3>
        <p className="pg-flight__summary">{flight.summary}</p>
        <p className="pg-flight__diff">{flight.difference}</p>

        <dl className="pg-flight__stats">
          <div>
            <dt>
              <Icon name="clock" size={16} /> Airtime
            </dt>
            <dd>
              {flight.duration}
              <span className="pg-bar" aria-hidden="true">
                <m.span
                  initial={{ width: 0 }}
                  whileInView={{ width: `${airtime}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, ease: EASE }}
                />
              </span>
            </dd>
          </div>
          <div>
            <dt>
              <Icon name="wing" size={16} /> Intensity
            </dt>
            <dd>
              <IntensityMeter level={flight.intensity} />
            </dd>
          </div>
        </dl>

        <p className="pg-flight__best">
          <strong>Good for:</strong> {flight.bestFor}
        </p>
        {flight.link && (
          <a className="pg-flight__link" href={flight.link.href}>
            {flight.link.label}
          </a>
        )}
      </div>
    </article>
  );
}

function Flights() {
  return (
    <section id="flights" className="pg-section pg-flights" aria-labelledby="pg-flights-title">
      <div className="pg-wrap">
        <SectionHeading
          id="pg-flights-title"
          title="Choose your flight"
          lead="Every flight is a tandem with a licensed pilot, so no experience is needed. What changes is how long you stay up and how wild the ride gets."
          align="center"
        />
        <div className="pg-flights__grid">
          {FLIGHTS.map((f, i) => (
            <Reveal key={f.id} delay={0.06 * i} className={i === 0 ? "pg-flights__lead" : undefined}>
              <FlightCard flight={f} featured={i === 0} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================================================================
   6. Parahawking highlight
   ================================================================ */

const HAWK_STEPS = [
  { title: "Launch together", text: "You take off on a tandem wing while the handler releases a trained bird of prey." },
  { title: "Follow the bird", text: "The bird finds rising air, and your pilot follows it into the thermal." },
  { title: "Reward in the air", text: "The bird returns to the pilot's gloved hand for a small reward, mid-flight." },
];

function Parahawking() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imgScale = useTransform(scrollYProgress, [0, 1], [reduce ? 1 : 1.12, 1]);

  return (
    <section id="parahawking" ref={ref} className="pg-hawk" aria-labelledby="pg-hawk-title">
      <m.div className="pg-hawk__bg" style={{ scale: imgScale }}>
        <Photo
          src={IMAGES.parahawking}
          alt="Trained bird of prey landing on a paraglider pilot's gloved hand above Pokhara"
          sizes="100vw"
        />
      </m.div>
      <div className="pg-hawk__scrim" aria-hidden="true" />

      <div className="pg-wrap pg-hawk__inner">
        <Reveal className="pg-hawk__copy">
          <p className="pg-hawk__tag">Only in Pokhara</p>
          <h2 id="pg-hawk-title" className="pg-hawk__title">
            Fly wing to wing with a bird of prey
          </h2>
          <p className="pg-hawk__lead">
            Parahawking blends paragliding with falconry. A trained raptor flies alongside your tandem wing, leads
            you to thermals and returns to the pilot&apos;s glove — close enough to hear its feathers.
          </p>
          <Link href={LINKS.plan} className="pg-btn pg-btn--primary">
            Ask about parahawking
          </Link>
        </Reveal>

        <ol className="pg-hawk__steps">
          {HAWK_STEPS.map((s, i) => (
            <m.li
              key={s.title}
              className="pg-glass pg-hawk__step"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.15 * i }}
            >
              <span className="pg-hawk__num">{i + 1}</span>
              <div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            </m.li>
          ))}
        </ol>
      </div>
      <p className="pg-wrap pg-hawk__fine">
        About 30 minutes · US$180–260 · Limited daily slots, and availability varies by season.
      </p>
    </section>
  );
}

/* ================================================================
   7. Best season
   ================================================================ */

function Season() {
  return (
    <section className="pg-section pg-season" aria-labelledby="pg-season-title">
      <div className="pg-wrap">
        <SectionHeading
          id="pg-season-title"
          title="When to fly"
          lead="The monsoon (roughly June to August) grounds most flights. Clear, stable post-monsoon skies make autumn the finest time to be in the air."
        />

        <div className="pg-season__scroller" tabIndex={0} aria-label="Flying season by month, scrollable">
          <table className="pg-season__table">
            <caption className="sr-only">Paragliding season in Nepal by month</caption>
            <thead>
              <tr>
                <th scope="col">
                  <span className="sr-only">Period</span>
                </th>
                {MONTHS.map((mo) => (
                  <th key={mo} scope="col">
                    {mo}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {SEASON_LANES.map((lane) => (
                <tr key={lane.id}>
                  <th scope="row">
                    <span className="pg-season__lane">{lane.label}</span>
                    <span className="pg-season__note">{lane.note}</span>
                  </th>
                  {MONTHS.map((mo, idx) => {
                    const on = lane.months.includes(idx);
                    return (
                      <td key={mo}>
                        {on ? (
                          <m.span
                            className={`pg-season__cell pg-season__cell--${lane.tone}`}
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.04 * idx }}
                          >
                            <span className="sr-only">Good for flying</span>
                          </m.span>
                        ) : (
                          <span className="pg-season__cell pg-season__cell--off">
                            <span className="sr-only">Not recommended</span>
                          </span>
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <ul className="pg-season__legend">
          <li>
            <span className="pg-dot pg-dot--peak" aria-hidden="true" /> October–November: clearest mountain views and
            steady thermals at Sarangkot
          </li>
          <li>
            <span className="pg-dot pg-dot--main" aria-hidden="true" /> December–February: cooler, calmer mornings
          </li>
          <li>
            <span className="pg-dot pg-dot--off" aria-hidden="true" /> May–August: pre-monsoon haze, then monsoon
            rain
          </li>
        </ul>
      </div>
    </section>
  );
}

/* ================================================================
   8. Price & booking factors
   ================================================================ */

function Pricing() {
  return (
    <section className="pg-section pg-price" aria-labelledby="pg-price-title">
      <div className="pg-wrap pg-price__grid">
        <div>
          <SectionHeading
            id="pg-price-title"
            title="What shapes the price"
            lead="Tandem fares in Nepal are fairly consistent. These four things make the biggest difference to what you pay."
          />
          <ul className="pg-price__factors">
            {PRICE_FACTORS.map((f, i) => (
              <RevealItem key={f.title} delay={0.06 * i} className="pg-price__factor">
                  <span className="pg-price__icon">
                    <Icon name={f.icon} />
                  </span>
                  <h3>{f.title}</h3>
                  <p>{f.text}</p>
              </RevealItem>
            ))}
          </ul>
        </div>

        <Reveal className="pg-addon" delay={0.2}>
          <span className="pg-addon__icon">
            <Icon name="camera" size={28} />
          </span>
          <h3 className="pg-addon__title">{MEDIA_ADDON.title}</h3>
          <p className="pg-addon__price">{MEDIA_ADDON.price}</p>
          <p className="pg-addon__text">
            Your pilot films the flight on a handheld or wing-mounted camera. You get the footage and photos the
            same day.
          </p>
          <p className="pg-addon__fine">
            Prices are indicative per person and may change with season and operator. Flights depend on weather.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ================================================================
   9. Competitions & events
   ================================================================ */

function Events() {
  return (
    <section className="pg-section pg-events" aria-labelledby="pg-events-title">
      <div className="pg-wrap pg-events__grid">
        <Reveal className="pg-events__media">
          <Photo
            src={IMAGES.events}
            alt="Pilots lined up with their wings at an autumn paragliding competition near Pokhara"
            sizes="(max-width: 900px) 100vw, 50vw"
          />
        </Reveal>
        <div className="pg-events__copy">
          <SectionHeading
            id="pg-events-title"
            title="Autumn competitions over Pokhara"
            lead="When the autumn thermals are strongest, pilots from Nepal and abroad gather around Pokhara for accuracy and cross-country contests."
          />
          <div className="pg-events__types">
            <Reveal>
              <h3>Accuracy</h3>
              <p>Pilots aim to touch down on a small target at the landing field — easy to watch from the lakeside.</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h3>Cross-country</h3>
              <p>Racing a set course between turnpoints across the hills, with dozens of wings in the sky at once.</p>
            </Reveal>
          </div>
          <p className="pg-events__tip">
            Event dates are announced each year. Tell us you&apos;d like to be there and we&apos;ll time your Pokhara
            stay around them.
          </p>
          <Link href={LINKS.plan} className="pg-btn pg-btn--outline">
            Plan a festival trip
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ================================================================
   10. Why Karvaahh
   ================================================================ */

function WhyKarvaahh() {
  return (
    <section className="pg-section pg-trust" aria-labelledby="pg-trust-title">
      <div className="pg-wrap">
        <SectionHeading
          id="pg-trust-title"
          title="Why fly with Karvaahh Tours & Travels"
          lead="We're a Nepal-based team. We don't just sell a flight — we plan the days around it."
          tone="dark"
        />
        <ul className="pg-trust__grid">
          {TRUST_POINTS.map((t, i) => (
            <RevealItem
              key={t.title}
              delay={0.06 * i}
              className={`pg-trust__item${i === 0 ? " pg-trust__item--wide" : ""}`}
            >
                <span className="pg-trust__icon">
                  <Icon name={t.icon} />
                </span>
                <h3>{t.title}</h3>
                <p>{t.text}</p>
            </RevealItem>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ================================================================
   11. Final CTA
   ================================================================ */

function FinalCta() {
  return (
    <section className="pg-cta" aria-labelledby="pg-cta-title">
      <Photo
        src={IMAGES.cta}
        alt="Paraglider silhouetted against the Annapurna range at golden hour"
        sizes="100vw"
        className="pg-cta__bg"
      />
      <div className="pg-cta__scrim" aria-hidden="true" />
      <Reveal className="pg-wrap pg-cta__inner">
        <h2 id="pg-cta-title" className="pg-cta__title">
          Ready to fly over Nepal?
        </h2>
        <p className="pg-cta__text">
          Tell us your dates and we&apos;ll suggest the right site, flight and season — plus everything around it.
        </p>
        <div className="pg-cta__actions">
          <Link href={LINKS.plan} className="pg-btn pg-btn--primary pg-btn--lg">
            Plan my paragliding trip
          </Link>
          <Link href={LINKS.adventures} className="pg-btn pg-btn--glass pg-btn--lg">
            Explore Nepal adventures
          </Link>
        </div>
      </Reveal>
    </section>
  );
}

/* ================================================================
   Page assembly
   ================================================================ */

export default function ParaglidingPage() {
  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">
      <div className="pg-page">
        <Hero />
        <Intro />
        <Altitude />
        <Sites />
        <Flights />
        <Parahawking />
        <Season />
        <Pricing />
        <Events />
        <WhyKarvaahh />
        <FinalCta />
      </div>
      </MotionConfig>
    </LazyMotion>
  );
}
