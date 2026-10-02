"use client";

import { motion, useReducedMotion } from "framer-motion";
import { categories, destinations, philosophy, sectionIds, why, type Category, type Destination } from "@/content/corporate-retreats";
import { Icon } from "./icons";
import { Timeline } from "./timeline";
import { CtaLink, EASE, IconBadge, Note, Photo, Reveal, Section, SectionHeader } from "./ui";

/* ------------------------------------------------------------------ */

export function RetreatPhilosophy() {
  return (
    <Section tone="blue" labelledBy="philosophy-h">
      <SectionHeader id="philosophy-h" title={philosophy.heading} sub={philosophy.sub} invert />
      <Timeline steps={philosophy.steps} invert />
    </Section>
  );
}

/* ------------------------------------------------------------------ */

const cardTint = { blue: "from-[#123B5D]/85", teal: "from-[#2A7F82]/85", gold: "from-[#8a6212]/85", ivory: "from-[#123B5D]/80", dusk: "from-[#182642]/90" };

export function WhyKarvaahh() {
  return (
    <Section tone="white" labelledBy="why-h">
      <SectionHeader id="why-h" title={why.heading} />
      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {why.items.map((it, i) => (
          <motion.li
            key={it.title}
            className="group relative overflow-hidden rounded-3xl border border-[#123B5D]/10 bg-[#F8F6F0] p-8 transition-shadow duration-500 hover:shadow-[0_24px_60px_-20px_rgba(18,59,93,0.35)]"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, delay: (i % 3) * 0.1, ease: EASE }}
            whileHover={{ y: -4 }}
          >
            {/* image overlay revealed on hover */}
            <div aria-hidden="true" className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-[0.07]">
              <Photo image={{ alt: "", label: it.title, tone: it.tone }} className="h-full w-full" />
            </div>
            <div className="relative">
              <IconBadge name={it.icon} tone={i % 2 ? "teal" : "blue"} />
              <h3 className="mt-6 text-xl font-semibold tracking-tight">{it.title}</h3>
              <p className="mt-3 leading-relaxed text-[#252B32]/70">{it.body}</p>
            </div>
          </motion.li>
        ))}
      </ul>
    </Section>
  );
}

/* ------------------------------------------------------------------ */

function CategoryCard({ c, i }: { c: Category; i: number }) {
  const tone = c.image.tone;
  return (
    <motion.li
      className="group relative flex min-h-[520px] overflow-hidden rounded-3xl bg-[#123B5D] text-white"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: (i % 2) * 0.1, ease: EASE }}
      whileHover={{ y: -6 }}
    >
      <Photo image={c.image} className="absolute inset-0 transition-transform duration-[900ms] ease-out group-hover:scale-105" sizes="(min-width: 1024px) 45vw, 100vw" />
      <div aria-hidden="true" className={`absolute inset-0 bg-gradient-to-t ${cardTint[tone]} via-[#0b2740]/60 to-[#0b2740]/20 transition-opacity duration-500 group-hover:opacity-95`} />
      <div className="relative mt-auto flex w-full flex-col p-7 sm:p-9">
        <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 text-[#D8A64A] backdrop-blur">
          <Icon name={c.icon} />
        </span>
        <h3 className="text-2xl font-semibold tracking-tight">{c.title}</h3>
        <p className="mt-3 text-white/85">{c.description}</p>
        <ul className="mt-5 flex flex-wrap gap-2" aria-label="Suggested activities">
          {c.experiences.map((e) => (
            <li key={e} className="rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs text-white/90 backdrop-blur">{e}</li>
          ))}
        </ul>
        <p className="mt-5 text-sm text-white/80"><span className="font-semibold text-[#D8A64A]">Ideal for: </span>{c.idealFor}</p>
        {c.note && <p className="mt-2 text-xs text-white/60">{c.note}</p>}
        <div className="mt-6">
          <CtaLink target={sectionIds.customize} patch={{ retreatType: c.retreatType }} variant="gold">{categories.cardCta}</CtaLink>
        </div>
      </div>
    </motion.li>
  );
}

export function CorporateCategories() {
  return (
    <Section id={sectionIds.categories} tone="ivory" labelledBy="categories-h">
      <SectionHeader id="categories-h" title={categories.heading} />
      <ul className="grid gap-6 lg:grid-cols-2">
        {categories.items.map((c, i) => <CategoryCard key={c.id} c={c} i={i} />)}
      </ul>
      <Reveal className="mt-14 flex justify-center">
        <CtaLink target={sectionIds.styles} variant="solidBlue">{categories.sectionCta}</CtaLink>
      </Reveal>
    </Section>
  );
}

/* ------------------------------------------------------------------ */

function Marker({ delay }: { delay: number }) {
  const reduce = useReducedMotion();
  return (
    <span aria-hidden="true" className="relative flex h-4 w-4">
      {!reduce && (
        <motion.span
          className="absolute inset-0 rounded-full bg-[#D8A64A]"
          animate={{ scale: [1, 2.6], opacity: [0.7, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut", delay }}
        />
      )}
      <span className="relative h-4 w-4 rounded-full border-2 border-white bg-[#D8A64A]" />
    </span>
  );
}

function DestinationCard({ d, i }: { d: Destination; i: number }) {
  // editorial rhythm: the lead card spans two columns on large screens (8 cards = 3 full rows of 3 columns)
  const wide = i === 0;
  return (
    <motion.li
      className={`group relative min-h-[420px] overflow-hidden rounded-3xl bg-[#123B5D] text-white ${wide ? "lg:col-span-2" : ""}`}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: (i % 3) * 0.08, ease: EASE }}
    >
      <Photo image={d.image} className="absolute inset-0 transition-transform duration-[900ms] ease-out group-hover:scale-105 group-focus-within:scale-105" sizes={wide ? "(min-width: 1024px) 66vw, 100vw" : "(min-width: 1024px) 33vw, 100vw"} />
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#0b2740] via-[#0b2740]/30 to-transparent" />

      <div className="absolute right-5 top-5 flex items-center gap-2 rounded-full bg-black/25 py-1.5 pl-3 pr-3 text-xs backdrop-blur">
        <Marker delay={i * 0.3} />
        <span>{d.province}</span>
      </div>

      <div className="relative flex h-full min-h-[420px] flex-col justify-end p-7">
        <h3 className="text-3xl font-semibold tracking-tight">{d.name}</h3>
        {/* details lift in on hover / keyboard focus, always visible on touch */}
        <div className="grid grid-rows-[1fr] transition-all duration-500 md:grid-rows-[0fr] md:group-hover:grid-rows-[1fr] md:group-focus-within:grid-rows-[1fr]">
          <div className="overflow-hidden">
            <p className="mt-3 text-sm leading-relaxed text-white/85">{d.experience}</p>
            <p className="mt-3 text-sm text-white/80"><span className="font-semibold text-[#D8A64A]">Ideal for: </span>{d.idealFor}</p>
            {d.note && <p className="mt-2 text-xs text-white/60">{d.note}</p>}
            <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-3">
              <CtaLink target={sectionIds.customize} patch={{ destination: d.name }} variant="gold" className="!py-2.5">{destinations.cardCta}</CtaLink>
              <a href={d.href} className="text-sm font-semibold text-white underline-offset-4 hover:text-[#D8A64A] hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
                {destinations.guideCta}<span className="sr-only"> for {d.name}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.li>
  );
}

export function CorporateDestinations() {
  return (
    <Section id={sectionIds.destinations} tone="white" labelledBy="destinations-h">
      <SectionHeader id="destinations-h" title={destinations.heading} sub={destinations.sub} />
      <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {destinations.items.map((d, i) => <DestinationCard key={d.id} d={d} i={i} />)}
      </ul>
      <Note>Venues, stays and activity availability vary by destination and season and are subject to confirmation.</Note>
      <Reveal className="mt-10 flex justify-center">
        <CtaLink target={sectionIds.customize} variant="solidBlue">{destinations.sectionCta}</CtaLink>
      </Reveal>
    </Section>
  );
}
