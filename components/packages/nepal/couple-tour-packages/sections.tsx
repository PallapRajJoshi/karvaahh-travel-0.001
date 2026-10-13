import type { CSSProperties, ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronDown, Heart, Sun } from "lucide-react";
import {
  anchors,
  breadcrumbs,
  escapes,
  faqs,
  finalCta,
  headings,
  hero,
  itineraryIdeas,
  links,
  moments,
  planningGuide,
  seasons,
  enquiryHref,
} from "./data/content";
import { getawayGroups, getaways } from "./data/getaways";
import { GetawayExplorer } from "./client/GetawayExplorer";

/** Staggered reveal index, turned into a capped delay by the CSS. */
const stagger = (i: number) => ({ "--cpl-i": i }) as CSSProperties;

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
    <header className={`cpl-heading cpl-heading--${align}`} data-reveal="">
      <p className="cpl-eyebrow">{eyebrow}</p>
      <h2 id={id} className="cpl-h2">
        {title}
      </h2>
      {subtitle ? <p className="cpl-lede">{subtitle}</p> : null}
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
  tone?: "light" | "sand" | "dark";
  children: ReactNode;
}) {
  return (
    <section id={id} aria-labelledby={labelledBy} className={`cpl-section cpl-section--${tone}`}>
      <div className="cpl-container">{children}</div>
    </section>
  );
}

/* ------------------------------------------------------------------ */

export function Hero() {
  return (
    <header className="cpl-hero">
      <div className="cpl-hero__media">
        <Image
          src={hero.image.src}
          alt={hero.image.alt}
          fill
          preload
          fetchPriority="high"
          sizes="100vw"
          className="cpl-hero__img"
          style={{ objectPosition: hero.image.focus }}
        />
      </div>
      <div className="cpl-hero__veil" aria-hidden="true" />
      <div className="cpl-container cpl-hero__content">
        <p className="cpl-eyebrow cpl-eyebrow--light">
          <Heart aria-hidden="true" size={14} /> {hero.eyebrow}
        </p>
        <h1 className="cpl-hero__title">{hero.title}</h1>
        <p className="cpl-hero__subtitle">{hero.subtitle}</p>
        <div className="cpl-hero__ctas">
          <Link href={hero.primaryCta.href} className="cpl-btn cpl-btn--light">
            {hero.primaryCta.label}
            <ArrowRight aria-hidden="true" size={16} />
          </Link>
          <Link href={hero.secondaryCta.href} className="cpl-btn cpl-btn--ghost">
            {hero.secondaryCta.label}
          </Link>
        </div>
        <ul className="cpl-hero__facts">
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
    <nav aria-label="Breadcrumb" className="cpl-crumbs">
      <ol className="cpl-container">
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

/* 1 ---------------------------------------------------------------- */

export function RomanticEscapes() {
  const h = headings.escapes;
  return (
    <Section id={anchors.escapes} labelledBy="cpl-escapes-title">
      <SectionHeading id="cpl-escapes-title" {...h} />
      <ul className="cpl-escapes">
        {escapes.map((e, i) => (
          <li key={e.id} className="cpl-escape" data-reveal="" style={stagger(i)}>
            <article aria-labelledby={`escape-${e.id}`}>
              <div className="cpl-escape__media">
                <Image
                  src={e.image.src}
                  alt={e.image.alt}
                  fill
                  sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
                  className="cpl-zoom"
                />
              </div>
              <div className="cpl-escape__body">
                <p className="cpl-escape__region">{e.region}</p>
                <h3 id={`escape-${e.id}`} className="cpl-h3">
                  {e.name}
                </h3>
                <p className="cpl-escape__text">{e.highlight}</p>
                <ul className="cpl-tags" aria-label={`Experiences in ${e.name}`}>
                  {e.tags.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
                <Link href={e.link.href} className="cpl-link">
                  {e.link.label}
                  <ArrowRight aria-hidden="true" size={15} />
                </Link>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </Section>
  );
}

/* 2 ---------------------------------------------------------------- */

export function CoupleGetaways() {
  const h = headings.getaways;
  return (
    <Section id={anchors.getaways} labelledBy="cpl-getaways-title" tone="sand">
      <SectionHeading id="cpl-getaways-title" eyebrow={h.eyebrow} title={h.title} subtitle={h.subtitle} />
      <div data-reveal="">
        <GetawayExplorer items={getaways} groups={getawayGroups} />
      </div>
      <p className="cpl-note" data-reveal="">
        {h.note}
      </p>
    </Section>
  );
}

/* 3 ---------------------------------------------------------------- */

export function RomanticMoments() {
  const h = headings.moments;
  return (
    <Section id={anchors.moments} labelledBy="cpl-moments-title" tone="dark">
      <SectionHeading id="cpl-moments-title" {...h} />
      <ul className="cpl-mosaic">
        {moments.map((m, i) => (
          <li
            key={m.id}
            className={`cpl-moment cpl-moment--${m.size}${m.image ? "" : " cpl-moment--text"}`}
            data-reveal=""
            style={stagger(i)}
          >
            {m.image ? (
              <div className="cpl-moment__media">
                <Image
                  src={m.image.src}
                  alt={m.image.alt}
                  fill
                  sizes={m.size === "hero" || m.size === "wide" ? "(max-width: 900px) 100vw, 66vw" : "(max-width: 900px) 100vw, 33vw"}
                  className="cpl-zoom"
                />
              </div>
            ) : null}
            <div className="cpl-moment__body">
              <p className="cpl-moment__where">{m.where}</p>
              <h3 className="cpl-moment__title">{m.title}</h3>
              <p className="cpl-moment__text">{m.text}</p>
              <div className="cpl-moment__foot">
                <span className={`cpl-badge${m.availability === "On request" ? " cpl-badge--request" : ""}`}>
                  {m.availability}
                </span>
                {m.link ? (
                  <Link href={m.link.href} className="cpl-link cpl-link--light">
                    {m.link.label}
                    <ArrowRight aria-hidden="true" size={14} />
                  </Link>
                ) : null}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}

/* 4 ---------------------------------------------------------------- */

export function SuggestedItineraries() {
  const h = headings.itineraries;
  return (
    <Section id={anchors.itineraries} labelledBy="cpl-itin-title">
      <SectionHeading id="cpl-itin-title" {...h} />
      <div className="cpl-itins">
        {itineraryIdeas.map((it, i) => (
          <article key={it.id} className="cpl-itin" data-reveal="" style={stagger(i)} aria-labelledby={`itin-${it.id}`}>
            <div className="cpl-itin__media">
              <Image src={it.image.src} alt={it.image.alt} fill sizes="(max-width: 900px) 100vw, 33vw" className="cpl-zoom" />
              <span className="cpl-itin__length">{it.length}</span>
            </div>
            <div className="cpl-itin__body">
              <p className="cpl-badge cpl-badge--request">Customisable suggestion</p>
              <h3 id={`itin-${it.id}`} className="cpl-h3">
                {it.title}
              </h3>
              <p className="cpl-itin__summary">{it.summary}</p>
              <details className="cpl-itin__days">
                <summary>
                  Day-by-day idea <ChevronDown aria-hidden="true" size={16} />
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
              <Link href={enquiryHref(`${it.title} (${it.length})`)} className="cpl-link">
                Ask us to tailor this
                <ArrowRight aria-hidden="true" size={15} />
              </Link>
            </div>
          </article>
        ))}

        <article className="cpl-itin cpl-itin--custom" data-reveal="" style={stagger(itineraryIdeas.length)} aria-labelledby="itin-custom">
          <div className="cpl-itin__body">
            <Heart aria-hidden="true" size={28} className="cpl-itin__icon" />
            <p className="cpl-badge cpl-badge--light">Tailor-made</p>
            <h3 id="itin-custom" className="cpl-h3">
              Customized Nepal Honeymoon
            </h3>
            <p className="cpl-itin__summary">
              Your destinations, your pace and your preferred style of stay. Activities and special arrangements depend on season and availability, and we confirm everything in your written quote.
            </p>
            <Link href={enquiryHref("Customized Nepal honeymoon")} className="cpl-btn cpl-btn--light cpl-btn--sm">
              Start Planning
              <ArrowRight aria-hidden="true" size={15} />
            </Link>
          </div>
        </article>
      </div>
      <p className="cpl-note" data-reveal="">
        Prefer a longer trip? The{" "}
        <Link href={links.journey} className="cpl-inline-link">
          Classic Nepal Journey
        </Link>{" "}
        links Kathmandu, Nagarkot, Bandipur, Pokhara, Ghandruk and Chitwan, and every stop can be shortened or skipped.
      </p>
    </Section>
  );
}

/* 5 ---------------------------------------------------------------- */

export function PlanningGuide() {
  const h = headings.plan;
  return (
    <Section id={anchors.plan} labelledBy="cpl-plan-title" tone="sand">
      <div className="cpl-plan">
        <div className="cpl-plan__intro">
          <SectionHeading id="cpl-plan-title" align="start" {...h} />
          <div className="cpl-seasons" data-reveal="">
            <h3 className="cpl-plan__subhead">
              <Sun aria-hidden="true" size={18} /> Best seasons for couple travel
            </h3>
            <ul>
              {seasons.map((s) => (
                <li key={s.id} className={s.pick ? "is-pick" : undefined}>
                  <p className="cpl-seasons__name">
                    {s.name} <span>{s.months}</span>
                    {s.pick ? <em className="cpl-badge">Recommended</em> : null}
                  </p>
                  <p className="cpl-seasons__text">{s.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <ol className="cpl-guide">
          {planningGuide.map((g, i) => (
            <li key={g.id} data-reveal="" style={stagger(i)}>
              <span className="cpl-guide__num" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="cpl-guide__title">{g.title}</h3>
                <p>{g.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}

/* 6 ---------------------------------------------------------------- */

export function FAQ() {
  const h = headings.faq;
  return (
    <Section id={anchors.faq} labelledBy="cpl-faq-title">
      <div className="cpl-faq">
        <SectionHeading id="cpl-faq-title" {...h} />
        <div className="cpl-faq__list" data-reveal="">
          {faqs.map((f, i) => (
            <details key={f.id} className="cpl-faq__item" open={i === 0}>
              <summary>
                <h3>{f.q}</h3>
                <ChevronDown aria-hidden="true" size={18} />
              </summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
        <p className="cpl-note" data-reveal="">
          Still have a question?{" "}
          <Link href={links.contact} className="cpl-inline-link">
            Talk to our team
          </Link>
          . Booking terms are in our{" "}
          <Link href={links.cancellation} className="cpl-inline-link">
            cancellation policy
          </Link>
          .
        </p>
      </div>
    </Section>
  );
}

/* 7 ---------------------------------------------------------------- */

export function FinalCTA() {
  return (
    <section id={anchors.cta} aria-labelledby="cpl-cta-title" className="cpl-cta">
      <div className="cpl-cta__media">
        <Image
          src={finalCta.image.src}
          alt={finalCta.image.alt}
          fill
          sizes="100vw"
          className="cpl-cta__img"
          style={{ objectPosition: finalCta.image.focus }}
        />
      </div>
      <div className="cpl-cta__veil" aria-hidden="true" />
      <div className="cpl-container cpl-cta__content" data-reveal="">
        <h2 id="cpl-cta-title" className="cpl-cta__title">
          {finalCta.title}
        </h2>
        <p className="cpl-cta__subtitle">{finalCta.subtitle}</p>
        <div className="cpl-hero__ctas">
          {finalCta.buttons.map((b) => (
            <Link key={b.label} href={b.href} className={`cpl-btn ${b.variant === "primary" ? "cpl-btn--light" : "cpl-btn--ghost"}`}>
              {b.label}
              {b.variant === "primary" ? <ArrowRight aria-hidden="true" size={16} /> : null}
            </Link>
          ))}
        </div>
        <p className="cpl-cta__brand">{finalCta.brand}</p>
      </div>
    </section>
  );
}
