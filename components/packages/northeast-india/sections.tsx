import type { CSSProperties, ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Backpack,
  Binoculars,
  Calendar,
  ChevronDown,
  CloudRain,
  Coffee,
  Flower2,
  HandHeart,
  House,
  Landmark,
  Leaf,
  MapPin,
  MessageCircle,
  Mountain,
  Music,
  PawPrint,
  Plane,
  Route,
  Shirt,
  Snowflake,
  Sparkles,
  Sun,
  Ticket,
  Users,
  UtensilsCrossed,
} from "lucide-react";
import {
  anchors,
  breadcrumbs,
  cultureThemes,
  enquiryHref,
  etiquette,
  faqs,
  headings,
  links,
  planningGuide,
  seasons,
} from "./data/content";
import { customTrips, itineraries, routeAnchor } from "./data/journeys";
import { resolved } from "./lib/resolved";
import { DestinationExplorer } from "./client/DestinationExplorer";
import { Photo } from "./ui/Photo";

/** Staggered reveal index, turned into a capped delay by the CSS. */
const stagger = (i: number) => ({ "--nei-i": i }) as CSSProperties;

function SectionHeading({
  id,
  eyebrow,
  title,
  subtitle,
  align = "center",
}: {
  id: string;
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "center" | "start";
}) {
  return (
    <header className={`nei-heading nei-heading--${align}`} data-reveal="">
      <p className="nei-eyebrow">{eyebrow}</p>
      <h2 id={id} className="nei-h2">
        {title}
      </h2>
      {subtitle ? <p className="nei-lede">{subtitle}</p> : null}
    </header>
  );
}

function Section({
  id,
  labelledBy,
  tone = "light",
  children,
}: {
  id: string;
  labelledBy: string;
  tone?: "light" | "mist" | "forest" | "dark";
  children: ReactNode;
}) {
  return (
    <section id={id} aria-labelledby={labelledBy} className={`nei-section nei-section--${tone}`}>
      <div className="nei-container">{children}</div>
    </section>
  );
}

function RouteChain({ stops }: { stops: readonly string[] }) {
  return (
    <ol className="nei-route" aria-label="Suggested order of stops">
      {stops.map((s) => (
        <li key={s}>{s}</li>
      ))}
    </ol>
  );
}

/** Layered ridges and mist, shown behind the hero/CTA until their photo exists. */
function MistScene({ id }: { id: string }) {
  return (
    <svg className="nei-scene" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMax slice" aria-hidden="true">
      <defs>
        <linearGradient id={`${id}-sky`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#0a2238" />
          <stop offset="0.55" stopColor="#1f5a6b" />
          <stop offset="1" stopColor="#7fa79a" />
        </linearGradient>
        <linearGradient id={`${id}-haze`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#e9f1ee" stopOpacity="0" />
          <stop offset="1" stopColor="#e9f1ee" stopOpacity="0.55" />
        </linearGradient>
      </defs>
      <rect width="1600" height="900" fill={`url(#${id}-sky)`} />
      <path className="nei-scene__far" d="M0 520 L140 420 L260 470 L420 330 L560 430 L700 360 L860 450 L1020 300 L1180 420 L1320 360 L1460 430 L1600 380 L1600 900 L0 900 Z" />
      <path d="M1020 300 L1046 330 L1030 326 L1012 338 L1002 322 Z" fill="#f4f7f6" opacity="0.7" />
      <rect y="420" width="1600" height="220" fill={`url(#${id}-haze)`} />
      <path className="nei-scene__mid" d="M0 640 C160 560 300 610 460 560 C620 510 760 600 940 560 C1100 525 1240 590 1400 545 C1490 520 1550 540 1600 530 L1600 900 L0 900 Z" />
      <rect y="590" width="1600" height="160" fill={`url(#${id}-haze)`} />
      <path className="nei-scene__near" d="M0 760 C200 700 360 760 560 720 C760 680 900 750 1120 712 C1300 682 1460 730 1600 700 L1600 900 L0 900 Z" />
      <path
        className="nei-scene__road"
        d="M980 900 C960 840 1040 810 1010 772 C985 742 920 742 940 712"
        fill="none"
        strokeWidth="6"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* ------------------------------------------------------------------ */

export function Hero() {
  const hero = resolved.hero;
  return (
    <header className="nei-hero">
      <div className="nei-hero__media">
        {hero.image.src ? (
          <Image
            src={hero.image.src}
            alt={hero.image.alt}
            fill
            preload
            fetchPriority="high"
            sizes="100vw"
            className="nei-hero__img"
            style={{ objectPosition: hero.image.focus }}
          />
        ) : (
          <MistScene id="nei-hero-scene" />
        )}
      </div>
      <div className="nei-hero__veil" aria-hidden="true" />
      <div className="nei-container nei-hero__content">
        <p className="nei-eyebrow nei-eyebrow--light nei-hero__in" style={stagger(0)}>
          <Mountain aria-hidden="true" size={14} /> {hero.eyebrow}
        </p>
        <h1 className="nei-hero__title nei-hero__in" style={stagger(1)}>
          {hero.title}
        </h1>
        <p className="nei-hero__subtitle nei-hero__in" style={stagger(2)}>
          {hero.subtitle}
        </p>
        <div className="nei-hero__ctas nei-hero__in" style={stagger(3)}>
          <Link href={hero.primaryCta.href} className="nei-btn nei-btn--light">
            {hero.primaryCta.label}
            <ArrowRight aria-hidden="true" size={16} />
          </Link>
          <Link href={hero.secondaryCta.href} className="nei-btn nei-btn--ghost">
            {hero.secondaryCta.label}
          </Link>
        </div>
        <ul className="nei-hero__facts nei-hero__in" style={stagger(4)}>
          {hero.facts.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>
      </div>
    </header>
  );
}

export function Breadcrumbs() {
  return (
    <nav aria-label="Breadcrumb" className="nei-crumbs">
      <ol className="nei-container">
        {breadcrumbs.map((c, i) => {
          const last = i === breadcrumbs.length - 1;
          return (
            <li key={c.label}>
              {last ? (
                <span aria-current="page">{c.label}</span>
              ) : c.href ? (
                <Link href={c.href}>{c.label}</Link>
              ) : (
                <span>{c.label}</span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

/* 1 · The eight states --------------------------------------------- */

export function States() {
  const h = headings.states;
  return (
    <Section id={anchors.states} labelledBy="nei-states-title">
      <SectionHeading id="nei-states-title" {...h} />
      <ol className="nei-states">
        {resolved.states.map((s, i) => (
          <li key={s.id} className="nei-state" data-reveal="" style={stagger(i % 4)}>
            <article aria-labelledby={`state-${s.id}`}>
              <div className="nei-state__media">
                <Photo image={s.image} sizes="(max-width: 640px) 100vw, (max-width: 1100px) 50vw, 25vw" />
                <span className="nei-state__num" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="nei-state__body">
                <h3 id={`state-${s.id}`} className="nei-state__name">
                  {s.name}
                </h3>
                <p className="nei-state__theme">{s.theme}</p>
                <p className="nei-state__intro">{s.intro}</p>
                {s.note ? <p className="nei-state__note">{s.note}</p> : null}
                <ul className="nei-tags" aria-label={`Highlights of ${s.name}`}>
                  {s.tags.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
                <Link href={s.link.href} className="nei-btn nei-btn--outline nei-btn--sm nei-state__cta">
                  {s.link.label}
                  <span className="nei-sr-only">{`: ${s.name}`}</span>
                  <ArrowRight aria-hidden="true" size={15} />
                </Link>
              </div>
            </article>
          </li>
        ))}
      </ol>
      <p className="nei-note" data-reveal="">
        Arunachal Pradesh, Assam, Meghalaya and Sikkim open in our{" "}
        <Link href={links.destinationsHub} className="nei-inline-link">
          destination guide
        </Link>
        ; for the other states, “Explore State” starts a tailor-made enquiry with our team.
      </p>
    </Section>
  );
}

/* 2 · Places + discovery filter ------------------------------------ */

export function Places() {
  const h = headings.places;
  return (
    <Section id={anchors.places} labelledBy="nei-places-title" tone="mist">
      <SectionHeading id="nei-places-title" {...h} />
      <div data-reveal="">
        <DestinationExplorer items={resolved.destinations} />
      </div>
      <p className="nei-note" data-reveal="">
        Access to high passes, lakes, parks and border areas depends on permits, season and weather. We confirm what is open for your dates.
      </p>
    </Section>
  );
}

/* 3 · Experiences (editorial) -------------------------------------- */

/** Varied compositions in reading order, so no two neighbours look the same. */
const EXP_LAYOUT = ["split", "card", "card", "split nei-exp--flip", "card", "card", "banner"] as const;

export function Experiences() {
  const h = headings.experiences;
  return (
    <Section id={anchors.experiences} labelledBy="nei-exp-title" tone="dark">
      <SectionHeading id="nei-exp-title" {...h} />
      <ul className="nei-exps">
        {resolved.experiences.map((e, i) => {
          const layout = EXP_LAYOUT[i % EXP_LAYOUT.length];
          return (
            <li key={e.id} className={`nei-exp nei-exp--${layout}`} data-tone={e.tone} data-reveal="" style={stagger(i % 2)}>
              <div className="nei-exp__media">
                <Photo
                  image={e.image}
                  sizes={layout === "card" ? "(max-width: 900px) 100vw, 50vw" : "(max-width: 900px) 100vw, 60vw"}
                />
              </div>
              <div className="nei-exp__body">
                <p className="nei-exp__index" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="nei-exp__title">{e.title}</h3>
                <p className="nei-exp__text">{e.text}</p>
                <p className="nei-exp__places">
                  <MapPin aria-hidden="true" size={13} /> {e.places.join(" · ")}
                </p>
                <Link href={e.link.href} className="nei-link nei-link--light">
                  {e.link.label}
                  <ArrowRight aria-hidden="true" size={14} />
                </Link>
              </div>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}

/* 4 · Journeys ----------------------------------------------------- */

export function Journeys() {
  const h = headings.journeys;
  return (
    <Section id={anchors.journeys} labelledBy="nei-jny-title">
      <SectionHeading id="nei-jny-title" eyebrow={h.eyebrow} title={h.title} subtitle={h.subtitle} />
      <ul className="nei-pkgs">
        {resolved.journeys.map((p, i) => (
          <li key={p.id} className="nei-pkg" data-reveal="" style={stagger(i % 3)}>
            <article aria-labelledby={`jny-${p.id}`}>
              <div className="nei-pkg__media">
                <Photo image={p.image} sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw" />
                <span className="nei-pkg__kind">Tailor-made journey</span>
              </div>
              <div className="nei-pkg__body">
                <p className="nei-pkg__states">{p.states.join(" · ")}</p>
                <h3 id={`jny-${p.id}`} className="nei-pkg__title">
                  {p.title}
                </h3>

                <dl className="nei-pkg__facts">
                  <div>
                    <dt>
                      <MapPin aria-hidden="true" size={15} />
                      <span className="nei-sr-only">Destinations</span>
                    </dt>
                    <dd>{p.places.join(" · ")}</dd>
                  </div>
                  <div>
                    <dt>
                      <Calendar aria-hidden="true" size={15} />
                      <span className="nei-sr-only">Duration</span>
                    </dt>
                    <dd>Duration set around your dates</dd>
                  </div>
                </dl>

                <ul className="nei-pkg__highlights" aria-label="Highlights">
                  {p.highlights.map((hl) => (
                    <li key={hl}>{hl}</li>
                  ))}
                </ul>

                <p className="nei-pkg__label">Inclusions confirmed in your written quote</p>

                <div className="nei-pkg__foot">
                  <p className="nei-pkg__price">Quoted on request</p>
                  <div className="nei-pkg__ctas">
                    {p.routeId ? (
                      <Link href={`#${routeAnchor(p.routeId)}`} className="nei-btn nei-btn--text nei-btn--sm">
                        See route
                        <span className="nei-sr-only">{` for ${p.title}`}</span>
                      </Link>
                    ) : null}
                    <Link href={p.enquire.href} className="nei-btn nei-btn--primary nei-btn--sm">
                      {p.enquire.label}
                      <span className="nei-sr-only">{` about ${p.title}`}</span>
                      <ArrowRight aria-hidden="true" size={15} />
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          </li>
        ))}

        <li className="nei-pkg nei-pkg--custom" data-reveal="" style={stagger(2)}>
          <article aria-labelledby="jny-custom">
            <div className="nei-pkg__body">
              <Sparkles aria-hidden="true" size={28} className="nei-pkg__icon" />
              <p className="nei-badge nei-badge--light">Your route, your pace</p>
              <h3 id="jny-custom" className="nei-pkg__title">
                Plan Your Custom Northeast Trip
              </h3>
              <p className="nei-pkg__lead">
                Choose the states, the pace and the kind of stays you like. We plan the route, permits and transport around you.
              </p>
              <ul className="nei-pkg__quick" aria-label="Popular tailor-made requests">
                {customTrips.map((t) => (
                  <li key={t.label}>
                    <Link href={t.href}>
                      {t.label}
                      <ArrowRight aria-hidden="true" size={14} />
                    </Link>
                  </li>
                ))}
              </ul>
              <Link href={enquiryHref("Customized Northeast India trip", "customized")} className="nei-btn nei-btn--light nei-btn--sm">
                Plan Your Custom Trip
                <ArrowRight aria-hidden="true" size={15} />
              </Link>
            </div>
          </article>
        </li>
      </ul>
      <p className="nei-note" data-reveal="">
        {h.note}
      </p>
    </Section>
  );
}

/* 5 · Culture & responsible travel --------------------------------- */

const CULTURE_ICONS = {
  textiles: Shirt,
  food: UtensilsCrossed,
  architecture: House,
  celebrations: Music,
  heritage: Landmark,
  guides: Users,
  tea: Coffee,
  conservation: Leaf,
} as const;

export function Culture() {
  const h = headings.culture;
  return (
    <Section id={anchors.culture} labelledBy="nei-culture-title" tone="forest">
      <div className="nei-culture">
        <div className="nei-culture__intro">
          <SectionHeading id="nei-culture-title" align="start" {...h} />
          <aside className="nei-etiquette" data-reveal="" aria-labelledby="nei-etiquette-title">
            <h3 id="nei-etiquette-title" className="nei-etiquette__title">
              <HandHeart aria-hidden="true" size={20} /> Travel with respect
            </h3>
            <ul>
              {etiquette.map((e) => (
                <li key={e}>{e}</li>
              ))}
            </ul>
          </aside>
        </div>
        <ul className="nei-themes">
          {cultureThemes.map((t, i) => {
            const Icon = CULTURE_ICONS[t.id];
            return (
              <li key={t.id} data-reveal="" style={stagger(i % 2)}>
                <span className="nei-themes__icon" aria-hidden="true">
                  <Icon size={20} />
                </span>
                <h3 className="nei-themes__title">{t.title}</h3>
                <p>{t.text}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </Section>
  );
}

/* 6 · Seasons ------------------------------------------------------ */

const SEASON_ICONS = { spring: Flower2, summer: Sun, monsoon: CloudRain, autumn: Leaf, winter: Snowflake } as const;

export function Seasons() {
  const h = headings.seasons;
  return (
    <Section id={anchors.seasons} labelledBy="nei-season-title" tone="mist">
      <SectionHeading id="nei-season-title" eyebrow={h.eyebrow} title={h.title} subtitle={h.subtitle} />
      <ol className="nei-seasons">
        {seasons.map((s, i) => {
          const Icon = SEASON_ICONS[s.id];
          const pick = "pick" in s && s.pick;
          const caution = "caution" in s && s.caution;
          return (
            <li
              key={s.id}
              className={`nei-season${pick ? " is-pick" : ""}${caution ? " is-caution" : ""}`}
              data-reveal=""
              style={stagger(i)}
            >
              <span className="nei-season__icon" aria-hidden="true">
                <Icon size={22} />
              </span>
              <h3 className="nei-season__name">{s.name}</h3>
              <p className="nei-season__months">{s.months}</p>
              {pick ? <p className="nei-badge">Often favourable</p> : null}
              {caution ? <p className="nei-badge nei-badge--warn">Plan with care</p> : null}
              <p className="nei-season__text">{s.text}</p>
            </li>
          );
        })}
      </ol>
      <p className="nei-note" data-reveal="">
        {h.note}
      </p>
    </Section>
  );
}

/* 7 · Planning guide ----------------------------------------------- */

const GUIDE_ICONS = { reach: Plane, permits: Ticket, packing: Backpack, roads: Route, wildlife: PawPrint } as const;

export function PlanningGuide() {
  const h = headings.plan;
  return (
    <Section id={anchors.plan} labelledBy="nei-plan-title">
      <SectionHeading id="nei-plan-title" {...h} />
      <ul className="nei-guide">
        {planningGuide.map((g, i) => {
          const Icon = GUIDE_ICONS[g.id];
          return (
            <li key={g.id} className={`nei-guide__item nei-guide__item--${g.id}`} data-reveal="" style={stagger(i % 3)}>
              <span className="nei-guide__icon" aria-hidden="true">
                <Icon size={20} />
              </span>
              <h3 className="nei-guide__title">{g.title}</h3>
              <p>{g.text}</p>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}

/* 8 · Suggested itineraries ---------------------------------------- */

export function Itineraries() {
  const h = headings.itineraries;
  return (
    <Section id={anchors.itineraries} labelledBy="nei-itin-title" tone="mist">
      <SectionHeading id="nei-itin-title" {...h} />
      <ol className="nei-itins">
        {itineraries.map((it, i) => (
          <li key={it.id} id={routeAnchor(it.id)} className="nei-itin" data-reveal="" style={stagger(i % 2)}>
            <span className="nei-itin__dot" aria-hidden="true" />
            <article className="nei-itin__card" aria-labelledby={`itin-${it.id}`}>
              <p className="nei-badge nei-badge--idea">Suggested route · not a fixed package</p>
              <h3 id={`itin-${it.id}`} className="nei-h3">
                {it.title}
              </h3>
              <RouteChain stops={it.route} />
              <p className="nei-itin__summary">{it.summary}</p>
              <p className="nei-itin__best">
                <Binoculars aria-hidden="true" size={14} /> Best for: {it.bestFor}
              </p>
              <Link href={it.link.href} className="nei-link">
                <MessageCircle aria-hidden="true" size={15} />
                {it.link.label}
                <ArrowRight aria-hidden="true" size={15} />
              </Link>
            </article>
          </li>
        ))}
      </ol>
      <p className="nei-note" data-reveal="">
        Routes show a sensible order of stops only. Travel times, overnight stays and daily plans are worked out with you and depend on roads, permits and weather.
      </p>
    </Section>
  );
}

/* 9 · FAQ ---------------------------------------------------------- */

export function FAQ() {
  const h = headings.faq;
  return (
    <Section id={anchors.faq} labelledBy="nei-faq-title">
      <div className="nei-faq">
        <SectionHeading id="nei-faq-title" {...h} />
        <div className="nei-faq__list" data-reveal="">
          {faqs.map((f, i) => (
            <details key={f.id} className="nei-faq__item" open={i === 0}>
              <summary>
                <h3>{f.q}</h3>
                <ChevronDown aria-hidden="true" size={18} />
              </summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
        <p className="nei-note" data-reveal="">
          Still have a question?{" "}
          <Link href={links.contact} className="nei-inline-link">
            Talk to our team
          </Link>
          . Booking terms are in our{" "}
          <Link href={links.cancellation} className="nei-inline-link">
            cancellation policy
          </Link>
          .
        </p>
      </div>
    </Section>
  );
}

/* 10 · Final CTA --------------------------------------------------- */

export function FinalCTA() {
  const cta = resolved.finalCta;
  return (
    <section id={anchors.cta} aria-labelledby="nei-cta-title" className="nei-cta">
      <div className="nei-cta__media">
        {cta.image.src ? (
          <Image src={cta.image.src} alt="" fill sizes="100vw" className="nei-cta__img" style={{ objectPosition: cta.image.focus }} />
        ) : (
          <MistScene id="nei-cta-scene" />
        )}
      </div>
      <div className="nei-cta__veil" aria-hidden="true" />
      <div className="nei-container nei-cta__content" data-reveal="">
        <h2 id="nei-cta-title" className="nei-cta__title">
          {cta.title}
        </h2>
        <p className="nei-cta__subtitle">{cta.subtitle}</p>
        <div className="nei-hero__ctas">
          {cta.buttons.map((b) => (
            <Link key={b.label} href={b.href} className={`nei-btn ${b.variant === "primary" ? "nei-btn--light" : "nei-btn--ghost"}`}>
              {b.label}
              {b.variant === "primary" ? <ArrowRight aria-hidden="true" size={16} /> : null}
            </Link>
          ))}
        </div>
        <p className="nei-cta__brand">{cta.brand}</p>
      </div>
    </section>
  );
}
