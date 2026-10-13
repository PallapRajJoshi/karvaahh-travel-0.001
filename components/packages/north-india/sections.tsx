import type { CSSProperties, ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Backpack,
  Calendar,
  Check,
  ChevronDown,
  Clock,
  Compass,
  Leaf,
  MapPin,
  Mountain,
  Sparkles,
  Sun,
  TrainFront,
} from "lucide-react";
import { anchors, breadcrumbs, enquiryHref, faqs, headings, links, planningGuide, regions, seasons } from "./data/content";
import { circuits, customTrips, itineraries } from "./data/packages";
import { resolved } from "./lib/resolved";
import { DestinationExplorer } from "./client/DestinationExplorer";
import { Photo } from "./ui/Photo";

/** Staggered reveal index, turned into a capped delay by the CSS. */
const stagger = (i: number) => ({ "--nin-i": i }) as CSSProperties;

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
    <header className={`nin-heading nin-heading--${align}`} data-reveal="">
      <p className="nin-eyebrow">{eyebrow}</p>
      <h2 id={id} className="nin-h2">
        {title}
      </h2>
      {subtitle ? <p className="nin-lede">{subtitle}</p> : null}
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
  tone?: "light" | "stone" | "dark";
  children: ReactNode;
}) {
  return (
    <section id={id} aria-labelledby={labelledBy} className={`nin-section nin-section--${tone}`}>
      <div className="nin-container">{children}</div>
    </section>
  );
}

function RouteChain({ stops, light = false }: { stops: readonly string[]; light?: boolean }) {
  return (
    <ol className={`nin-route${light ? " nin-route--light" : ""}`} aria-label="Route">
      {stops.map((s) => (
        <li key={s}>{s}</li>
      ))}
    </ol>
  );
}

/* ------------------------------------------------------------------ */

export function Hero() {
  const hero = resolved.hero;
  return (
    <header className="nin-hero">
      <div className="nin-hero__media">
        {hero.image.src ? (
          <Image
            src={hero.image.src}
            alt={hero.image.alt}
            fill
            preload
            fetchPriority="high"
            sizes="100vw"
            className="nin-hero__img"
            style={{ objectPosition: hero.image.focus }}
          />
        ) : null}
      </div>
      <div className="nin-hero__veil" aria-hidden="true" />
      <div className="nin-container nin-hero__content">
        <p className="nin-eyebrow nin-eyebrow--light nin-hero__in" style={stagger(0)}>
          <Mountain aria-hidden="true" size={14} /> {hero.eyebrow}
        </p>
        <h1 className="nin-hero__title nin-hero__in" style={stagger(1)}>
          {hero.title}
        </h1>
        <p className="nin-hero__subtitle nin-hero__in" style={stagger(2)}>
          {hero.subtitle}
        </p>
        <div className="nin-hero__ctas nin-hero__in" style={stagger(3)}>
          <Link href={hero.primaryCta.href} className="nin-btn nin-btn--light">
            {hero.primaryCta.label}
            <ArrowRight aria-hidden="true" size={16} />
          </Link>
          <Link href={hero.secondaryCta.href} className="nin-btn nin-btn--ghost">
            {hero.secondaryCta.label}
          </Link>
        </div>
        <ul className="nin-hero__facts nin-hero__in" style={stagger(4)}>
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
    <nav aria-label="Breadcrumb" className="nin-crumbs">
      <ol className="nin-container">
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

/* 1 · Destinations ------------------------------------------------- */

export function Destinations() {
  const h = headings.destinations;
  return (
    <Section id={anchors.destinations} labelledBy="nin-dest-title">
      <SectionHeading id="nin-dest-title" {...h} />
      <div data-reveal="">
        <DestinationExplorer items={resolved.destinations} regions={regions} />
      </div>
      <p className="nin-note" data-reveal="">
        Rajasthan and Golden Triangle cities are optional extensions, added when they fit your route. Not every destination is part of every tour.
      </p>
    </Section>
  );
}

/* 2 · Experiences -------------------------------------------------- */

export function Experiences() {
  const h = headings.experiences;
  return (
    <Section id={anchors.experiences} labelledBy="nin-exp-title" tone="dark">
      <SectionHeading id="nin-exp-title" {...h} />
      <ul className="nin-exps">
        {resolved.experiences.map((e, i) => (
          <li key={e.id} className={`nin-exp nin-exp--${e.size}`} data-reveal="" style={stagger(i)}>
            <div className="nin-exp__media">
              <Photo image={e.image} sizes={e.size === "wide" ? "(max-width: 900px) 100vw, 66vw" : "(max-width: 900px) 100vw, 33vw"} />
            </div>
            <div className="nin-exp__body">
              <h3 className="nin-exp__title">{e.title}</h3>
              <p className="nin-exp__text">{e.text}</p>
              <p className="nin-exp__places">{e.places.join(" · ")}</p>
              <Link href={e.link.href} className="nin-link nin-link--light">
                {e.link.label}
                <ArrowRight aria-hidden="true" size={14} />
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}

/* 3 · Featured packages -------------------------------------------- */

export function FeaturedPackages() {
  const h = headings.packages;
  return (
    <Section id={anchors.packages} labelledBy="nin-pkg-title" tone="stone">
      <SectionHeading id="nin-pkg-title" eyebrow={h.eyebrow} title={h.title} subtitle={h.subtitle} />
      <ul className="nin-pkgs">
        {resolved.packages.map((p, i) => (
          <li key={p.id} className="nin-pkg" data-reveal="" style={stagger(i)}>
            <article aria-labelledby={`pkg-${p.id}`}>
              <div className="nin-pkg__media">
                <Photo image={p.image} sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw" />
                <span className="nin-pkg__kind">{p.category}</span>
              </div>
              <div className="nin-pkg__body">
                <h3 id={`pkg-${p.id}`} className="nin-pkg__title">
                  {p.title}
                </h3>

                <dl className="nin-pkg__facts">
                  <div>
                    <dt>
                      <Clock aria-hidden="true" size={15} />
                      <span className="nin-sr-only">Duration</span>
                    </dt>
                    <dd>{p.duration ?? "Duration confirmed with your itinerary"}</dd>
                  </div>
                  <div>
                    <dt>
                      <MapPin aria-hidden="true" size={15} />
                      <span className="nin-sr-only">Destinations</span>
                    </dt>
                    <dd>{p.destinations.join(" · ")}</dd>
                  </div>
                </dl>

                <ul className="nin-pkg__highlights" aria-label="Highlights">
                  {p.highlights.map((hl) => (
                    <li key={hl}>{hl}</li>
                  ))}
                </ul>

                {p.inclusions ? (
                  <div className="nin-pkg__incl">
                    <p className="nin-pkg__label">Inclusions · {p.inclusions.basis.toLowerCase()}</p>
                    <ul>
                      {p.inclusions.items.map((inc) => (
                        <li key={inc}>
                          <Check aria-hidden="true" size={14} />
                          {inc}
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <p className="nin-pkg__label nin-pkg__label--muted">Inclusions confirmed with your quote</p>
                )}

                <div className="nin-pkg__foot">
                  <p className="nin-pkg__price">Price on request</p>
                  <div className="nin-pkg__ctas">
                    <Link href={p.primary.href} className="nin-btn nin-btn--primary nin-btn--sm">
                      {p.primary.label}
                      <ArrowRight aria-hidden="true" size={15} />
                    </Link>
                    <Link href={p.enquire.href} className="nin-btn nin-btn--text nin-btn--sm">
                      {p.enquire.label}
                      <span className="nin-sr-only">{` about ${p.title}`}</span>
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          </li>
        ))}

        <li className="nin-pkg nin-pkg--custom" data-reveal="" style={stagger(resolved.packages.length)}>
          <article aria-labelledby="pkg-custom">
            <div className="nin-pkg__body">
              <Sparkles aria-hidden="true" size={28} className="nin-pkg__icon" />
              <p className="nin-badge nin-badge--light">Tailor-made</p>
              <h3 id="pkg-custom" className="nin-pkg__title">
                Customized North India Holidays
              </h3>
              <p className="nin-pkg__lead">
                Hill stations, Kashmir, heritage cities or a mix. Tell us what you want to see and we will build the route, pace and stays around you.
              </p>
              <ul className="nin-pkg__quick" aria-label="Popular tailor-made requests">
                {customTrips.map((t) => (
                  <li key={t.label}>
                    <Link href={t.href}>
                      {t.label}
                      <ArrowRight aria-hidden="true" size={14} />
                    </Link>
                  </li>
                ))}
              </ul>
              <Link href={enquiryHref("Customized North India holiday", "customized")} className="nin-btn nin-btn--light nin-btn--sm">
                Enquire Now
                <ArrowRight aria-hidden="true" size={15} />
              </Link>
            </div>
          </article>
        </li>
      </ul>
      <p className="nin-note" data-reveal="">
        {h.note}
      </p>
    </Section>
  );
}

/* 4 · Sacred circuits ---------------------------------------------- */

export function SacredCircuits() {
  const h = headings.circuits;
  return (
    <Section id={anchors.circuits} labelledBy="nin-circ-title">
      <SectionHeading id="nin-circ-title" {...h} />
      <div className="nin-legend" data-reveal="" aria-hidden="true">
        <span className="nin-badge">Bookable package</span>
        <span className="nin-badge nin-badge--idea">Itinerary idea</span>
      </div>
      <ol className="nin-circuits">
        {circuits.map((c, i) => (
          <li key={c.id} className={`nin-circuit nin-circuit--${c.status}`} data-reveal="" style={stagger(i)}>
            <span className="nin-circuit__dot" aria-hidden="true" />
            <div className="nin-circuit__card">
              <p className={`nin-badge${c.status === "idea" ? " nin-badge--idea" : ""}`}>
                {c.status === "bookable" ? "Bookable package" : "Itinerary idea"}
              </p>
              <h3 className="nin-h3">{c.title}</h3>
              <RouteChain stops={c.route} />
              <p className="nin-circuit__text">{c.text}</p>
              <p className="nin-circuit__note">
                <Calendar aria-hidden="true" size={14} /> {c.note}
              </p>
              <Link href={c.link.href} className="nin-link">
                {c.link.label}
                <ArrowRight aria-hidden="true" size={15} />
              </Link>
            </div>
          </li>
        ))}
      </ol>
      <aside className="nin-etiquette" data-reveal="" aria-labelledby="nin-etiquette-title">
        <h3 id="nin-etiquette-title" className="nin-etiquette__title">
          Temple etiquette &amp; access
        </h3>
        <ul>
          <li>Dress modestly, remove shoes where asked and follow queue and photography rules.</li>
          <li>Opening dates, darshan timings and registration are set by temple committees and shrine boards each season.</li>
          <li>High-altitude shrines involve walking at altitude; weather and roads can delay or change plans.</li>
          <li>
            For a wider pilgrimage, see the{" "}
            <Link href={links.jyotirlinga} className="nin-inline-link">
              12 Jyotirlinga Yatra
            </Link>{" "}
            or the{" "}
            <Link href={links.badaCharDham} className="nin-inline-link">
              Bada Char Dham
            </Link>
            .
          </li>
        </ul>
      </aside>
    </Section>
  );
}

/* 5 · Planning guide ----------------------------------------------- */

const GUIDE_ICONS = { time: Sun, transport: TrainFront, packing: Backpack, pilgrimage: Compass, responsible: Leaf } as const;

export function PlanningGuide() {
  const h = headings.plan;
  return (
    <Section id={anchors.plan} labelledBy="nin-plan-title" tone="stone">
      <div className="nin-plan">
        <div className="nin-plan__intro">
          <SectionHeading id="nin-plan-title" align="start" {...h} />
          <div className="nin-seasons" data-reveal="">
            <h3 className="nin-plan__subhead">
              <Sun aria-hidden="true" size={18} /> Seasons at a glance
            </h3>
            <ul>
              {seasons.map((s) => (
                <li key={s.id} className={"pick" in s && s.pick ? "is-pick" : undefined}>
                  <p className="nin-seasons__name">
                    {s.name} <span>{s.months}</span>
                    {"pick" in s && s.pick ? <em className="nin-badge">Popular</em> : null}
                  </p>
                  <p className="nin-seasons__text">{s.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <ul className="nin-guide">
          {planningGuide.map((g, i) => {
            const Icon = GUIDE_ICONS[g.id];
            return (
              <li key={g.id} data-reveal="" style={stagger(i)}>
                <span className="nin-guide__icon" aria-hidden="true">
                  <Icon size={20} />
                </span>
                <div>
                  <h3 className="nin-guide__title">{g.title}</h3>
                  <p>{g.text}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </Section>
  );
}

/* 6 · Itineraries -------------------------------------------------- */

export function Itineraries() {
  const h = headings.itineraries;
  return (
    <Section id={anchors.itineraries} labelledBy="nin-itin-title">
      <SectionHeading id="nin-itin-title" {...h} />
      <div className="nin-itins">
        {itineraries.map((it, i) => (
          <article key={it.id} className="nin-itin" data-reveal="" style={stagger(i)} aria-labelledby={`itin-${it.id}`}>
            <div className="nin-itin__top">
              <p className={`nin-badge${it.status === "suggested" ? " nin-badge--idea" : ""}`}>
                {it.status === "sample" ? "Sample itinerary" : "Suggested route"}
              </p>
              {it.length ? <span className="nin-itin__length">{it.length}</span> : null}
            </div>
            <h3 id={`itin-${it.id}`} className="nin-h3">
              {it.title}
            </h3>
            <RouteChain stops={it.route} />
            <p className="nin-itin__summary">{it.summary}</p>
            {it.days ? (
              <details className="nin-itin__days">
                <summary>
                  Day-by-day <ChevronDown aria-hidden="true" size={16} />
                </summary>
                <ol>
                  {it.days.map((d) => (
                    <li key={d.label}>
                      <strong>{d.label}</strong>
                      <span>{d.text}</span>
                    </li>
                  ))}
                </ol>
              </details>
            ) : (
              <p className="nin-itin__hint">Duration, stays and pace are confirmed when we tailor the route.</p>
            )}
            <Link href={it.link.href} className="nin-link">
              {it.link.label}
              <ArrowRight aria-hidden="true" size={15} />
            </Link>
          </article>
        ))}
      </div>
      <p className="nin-note" data-reveal="">
        Sample itineraries come from the published package pages. Road, weather and temple conditions can change any plan.
      </p>
    </Section>
  );
}

/* 7 · FAQ ---------------------------------------------------------- */

export function FAQ() {
  const h = headings.faq;
  return (
    <Section id={anchors.faq} labelledBy="nin-faq-title" tone="stone">
      <div className="nin-faq">
        <SectionHeading id="nin-faq-title" {...h} />
        <div className="nin-faq__list" data-reveal="">
          {faqs.map((f, i) => (
            <details key={f.id} className="nin-faq__item" open={i === 0}>
              <summary>
                <h3>{f.q}</h3>
                <ChevronDown aria-hidden="true" size={18} />
              </summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
        <p className="nin-note" data-reveal="">
          Still have a question?{" "}
          <Link href={links.contact} className="nin-inline-link">
            Talk to our team
          </Link>
          . Booking terms are in our{" "}
          <Link href={links.cancellation} className="nin-inline-link">
            cancellation policy
          </Link>
          .
        </p>
      </div>
    </Section>
  );
}

/* 8 · Final CTA ---------------------------------------------------- */

export function FinalCTA() {
  const cta = resolved.finalCta;
  return (
    <section id={anchors.cta} aria-labelledby="nin-cta-title" className="nin-cta">
      <div className="nin-cta__media">
        {cta.image.src ? (
          <Image
            src={cta.image.src}
            alt=""
            fill
            sizes="100vw"
            className="nin-cta__img"
            style={{ objectPosition: cta.image.focus }}
          />
        ) : null}
      </div>
      <div className="nin-cta__veil" aria-hidden="true" />
      <div className="nin-container nin-cta__content" data-reveal="">
        <h2 id="nin-cta-title" className="nin-cta__title">
          {cta.title}
        </h2>
        <p className="nin-cta__subtitle">{cta.subtitle}</p>
        <div className="nin-hero__ctas">
          {cta.buttons.map((b) => (
            <Link key={b.label} href={b.href} className={`nin-btn ${b.variant === "primary" ? "nin-btn--light" : "nin-btn--ghost"}`}>
              {b.label}
              {b.variant === "primary" ? <ArrowRight aria-hidden="true" size={16} /> : null}
            </Link>
          ))}
        </div>
        <p className="nin-cta__brand">{cta.brand}</p>
      </div>
    </section>
  );
}
