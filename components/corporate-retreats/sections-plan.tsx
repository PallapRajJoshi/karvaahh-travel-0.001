"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  customize, itineraries, logistics, packages, planning, QUOTE_FALLBACK, sectionIds, SUBJECT_TO_CONFIRMATION,
} from "@/content/corporate-retreats";
import { Icon } from "./icons";
import { useRetreat, type Draft } from "./retreat-context";
import { Timeline } from "./timeline";
import { CtaLink, EASE, IconBadge, Note, Photo, Reveal, Section, SectionHeader } from "./ui";

/* ------------------------------------------------------------------ */
/* Sample itineraries: tabs + animated vertical timeline                */
/* ------------------------------------------------------------------ */

export function SampleItineraries() {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();
  const it = itineraries.items[active];

  return (
    <Section id={sectionIds.itineraries} tone="ivory" labelledBy="itineraries-h">
      <SectionHeader id="itineraries-h" eyebrow={itineraries.label} title={itineraries.heading} />

      <div role="tablist" aria-label="Sample itineraries" className="mb-8 flex flex-wrap gap-3">
        {itineraries.items.map((x, i) => (
          <button
            key={x.id}
            role="tab"
            id={`itin-tab-${x.id}`}
            aria-selected={i === active}
            aria-controls="itin-panel"
            onClick={() => setActive(i)}
            className={`rounded-full border px-5 py-2.5 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2A7F82] ${
              i === active ? "border-[#123B5D] bg-[#123B5D] text-white" : "border-[#123B5D]/20 bg-white text-[#123B5D] hover:border-[#2A7F82]"
            }`}
          >
            {x.title}
          </button>
        ))}
      </div>

      <div id="itin-panel" role="tabpanel" aria-labelledby={`itin-tab-${it.id}`} className="rounded-3xl bg-white p-7 shadow-[0_24px_60px_-28px_rgba(18,59,93,0.4)] sm:p-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={it.id}
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? undefined : { opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: EASE }}
          >
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#2A7F82]">{it.duration}</p>
                <h3 className="mt-1 text-2xl font-semibold tracking-tight sm:text-3xl">{it.title}</h3>
              </div>
              <span className="rounded-full bg-[#D8A64A]/20 px-4 py-1.5 text-xs font-semibold text-[#7a5510]">Sample concept · {SUBJECT_TO_CONFIRMATION}</span>
            </div>

            <ol className="relative mt-8 space-y-8 border-l border-[#123B5D]/15 pl-8">
              {it.days.map((d, i) => (
                <motion.li
                  key={d.label}
                  className="relative"
                  initial={reduce ? false : { opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.45, delay: 0.1 + i * 0.12, ease: EASE }}
                >
                  <span aria-hidden="true" className="absolute -left-[41px] top-1 h-4 w-4 rounded-full border-2 border-[#D8A64A] bg-white" />
                  <h4 className="font-semibold text-[#123B5D]">{d.label}</h4>
                  <ul className="mt-2 space-y-1.5 text-[#252B32]/75">
                    {d.items.map((x) => (
                      <li key={x} className="flex gap-2"><Icon name="check" className="mt-1 h-4 w-4 shrink-0 text-[#2A7F82]" />{x}</li>
                    ))}
                  </ul>
                </motion.li>
              ))}
            </ol>

            <p className="mt-8 text-[#252B32]/80"><span className="font-semibold text-[#123B5D]">Focus: </span>{it.focus}</p>
            <div className="mt-6">
              <CtaLink target={sectionIds.customize} patch={{ retreatType: it.retreatType, destination: it.destination }} variant="outlineDark">{itineraries.useCta}</CtaLink>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <Note>{itineraries.disclaimer}</Note>
      <Reveal className="mt-10 flex justify-center">
        <CtaLink target={sectionIds.inquiry} variant="solidBlue">{itineraries.cta}</CtaLink>
      </Reveal>
    </Section>
  );
}

/* ------------------------------------------------------------------ */

export function PlanningProcess() {
  return (
    <Section tone="white" labelledBy="process-h">
      <SectionHeader id="process-h" title={planning.heading} />
      <Timeline steps={planning.steps} numbered />
    </Section>
  );
}

/* ------------------------------------------------------------------ */
/* Customization: chips write to the shared draft the form reads        */
/* ------------------------------------------------------------------ */

function Chip({ selected, onClick, children, multi = false }: { selected: boolean; onClick: () => void; children: string; multi?: boolean }) {
  return (
    <button
      type="button"
      role={multi ? "checkbox" : "radio"}
      aria-checked={selected}
      onClick={onClick}
      className={`rounded-full border px-4 py-2 text-sm transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D8A64A] ${
        selected ? "border-[#D8A64A] bg-[#D8A64A] font-semibold text-[#252B32]" : "border-white/25 text-white/85 hover:border-white/60"
      }`}
    >
      {children}
    </button>
  );
}

export function CustomizationSection() {
  const { draft, setField, toggleActivity } = useRetreat();
  const inputCls =
    "w-full rounded-xl border border-white/25 bg-white/10 px-4 py-3 text-white placeholder:text-white/45 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#D8A64A]";

  return (
    <Section id={sectionIds.customize} tone="blue" labelledBy="customize-h">
      <SectionHeader id="customize-h" title={customize.heading} sub={customize.sub} invert />

      <div className="grid gap-10 lg:grid-cols-2">
        {customize.single.map((g) => {
          const key = g.key as keyof Draft;
          return (
            <fieldset key={g.key} className="min-w-0">
              <legend className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-[#D8A64A]">{g.label}</legend>
              <div role="radiogroup" aria-label={g.label} className="flex flex-wrap gap-2">
                {g.options.map((o) => (
                  <Chip key={o} selected={draft[key] === o} onClick={() => setField(key, (draft[key] === o ? "" : o) as never)}>{o}</Chip>
                ))}
              </div>
            </fieldset>
          );
        })}

        <fieldset className="min-w-0 lg:col-span-2">
          <legend className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-[#D8A64A]">{customize.activities.label}</legend>
          <div className="flex flex-wrap gap-2">
            {customize.activities.options.map((o) => (
              <Chip key={o} multi selected={draft.activities.includes(o)} onClick={() => toggleActivity(o)}>{o}</Chip>
            ))}
          </div>
        </fieldset>

        {customize.fields.map((f) => (
          <div key={f.key}>
            <label htmlFor={`cz-${f.key}`} className="mb-3 block text-sm font-semibold uppercase tracking-[0.14em] text-[#D8A64A]">{f.label}</label>
            <input
              id={`cz-${f.key}`} type={f.type} min={f.type === "number" ? 1 : undefined} inputMode={f.type === "number" ? "numeric" : undefined}
              value={draft[f.key as keyof Draft] as string}
              onChange={(e) => setField(f.key as keyof Draft, e.target.value as never)}
              placeholder={f.placeholder} className={inputCls}
            />
          </div>
        ))}
        {customize.textFields.map((f) => (
          <div key={f.key}>
            <label htmlFor={`cz-${f.key}`} className="mb-3 block text-sm font-semibold uppercase tracking-[0.14em] text-[#D8A64A]">{f.label}</label>
            <input id={`cz-${f.key}`} type="text" value={draft[f.key]} onChange={(e) => setField(f.key, e.target.value)} placeholder={f.placeholder} className={inputCls} />
          </div>
        ))}
      </div>

      <Note invert>{customize.disclaimer}</Note>
      <Reveal className="mt-10">
        <CtaLink target={sectionIds.inquiry} variant="gold">{customize.cta}</CtaLink>
      </Reveal>
    </Section>
  );
}

/* ------------------------------------------------------------------ */

export function LogisticsSection() {
  return (
    <Section tone="ivory" labelledBy="logistics-h">
      <SectionHeader id="logistics-h" title={logistics.heading} />
      <ul className="grid gap-x-10 gap-y-9 sm:grid-cols-2 lg:grid-cols-3">
        {logistics.items.map((it, i) => (
          <li key={it.title} className="list-none">
            <Reveal delay={(i % 3) * 0.08}>
              <div className="flex gap-4">
                <IconBadge name={it.icon} tone="teal" />
                <div>
                  <h3 className="text-lg font-semibold tracking-tight">{it.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-[#252B32]/70">{it.body}</p>
                </div>
              </div>
            </Reveal>
          </li>
        ))}
      </ul>
      <Note>{logistics.providerNote}</Note>
    </Section>
  );
}

/* ------------------------------------------------------------------ */

export function CorporatePackages() {
  return (
    <Section id={sectionIds.packages} tone="white" labelledBy="packages-h">
      <SectionHeader id="packages-h" title={packages.heading} />
      <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {packages.items.map((p, i) => (
          <motion.li
            key={p.id}
            className="group flex flex-col overflow-hidden rounded-3xl border border-[#123B5D]/10 bg-[#F8F6F0] transition-shadow duration-500 hover:shadow-[0_24px_60px_-24px_rgba(18,59,93,0.4)]"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, delay: (i % 3) * 0.1, ease: EASE }}
          >
            <Photo image={p.image} className="aspect-[16/9] w-full transition-transform duration-700 group-hover:scale-105" sizes="(min-width: 1024px) 33vw, 50vw" />
            <div className="flex flex-1 flex-col p-7">
              <h3 className="text-xl font-semibold tracking-tight">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#252B32]/70">{p.description}</p>
              <dl className="mt-5 space-y-3 text-sm">
                <div><dt className="font-semibold text-[#123B5D]">Suggested group</dt><dd className="text-[#252B32]/70">{p.groupProfile}</dd></div>
                <div><dt className="font-semibold text-[#123B5D]">Destination types</dt><dd className="text-[#252B32]/70">{p.destinationTypes}</dd></div>
                <div><dt className="font-semibold text-[#123B5D]">Sample activities</dt><dd className="text-[#252B32]/70">{p.activities.join(" · ")}</dd></div>
                {p.duration && <div><dt className="font-semibold text-[#123B5D]">Duration</dt><dd className="text-[#252B32]/70">{p.duration}</dd></div>}
                <div>
                  <dt className="font-semibold text-[#123B5D]">Inclusions & exclusions</dt>
                  <dd className="text-[#252B32]/70">
                    {p.inclusions?.length ? (
                      <>
                        <span className="block">Included: {p.inclusions.join(", ")}</span>
                        {p.exclusions?.length ? <span className="block">Not included: {p.exclusions.join(", ")}</span> : null}
                      </>
                    ) : packages.inclusionsFallback}
                  </dd>
                </div>
              </dl>
              <p className="mt-5 rounded-xl bg-white px-4 py-3 text-sm font-medium text-[#123B5D]">{p.priceLabel ?? QUOTE_FALLBACK}</p>
              <div className="mt-auto pt-6">
                <CtaLink target={sectionIds.inquiry} patch={{ retreatType: p.retreatType }} variant="solidBlue" className="w-full">{packages.cta}</CtaLink>
              </div>
            </div>
          </motion.li>
        ))}
      </ul>
      <Note>All packages are customized and {SUBJECT_TO_CONFIRMATION.toLowerCase()}</Note>
    </Section>
  );
}
