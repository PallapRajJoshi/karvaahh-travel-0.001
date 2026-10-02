"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { conferences, leadership, sectionIds, styles, teamBuilding, wellness } from "@/content/corporate-retreats";
import { Icon } from "./icons";
import { CtaLink, EASE, IconBadge, Note, Photo, Reveal, Section, SectionHeader } from "./ui";

/* ------------------------------------------------------------------ */
/* Retreat style selector: accessible tabs (arrow keys, Home/End)       */
/* ------------------------------------------------------------------ */

export function RetreatStyleSelector() {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const n = styles.items.length;
  const current = styles.items[active];

  const onKey = (e: KeyboardEvent) => {
    let next = active;
    if (e.key === "ArrowDown" || e.key === "ArrowRight") next = (active + 1) % n;
    else if (e.key === "ArrowUp" || e.key === "ArrowLeft") next = (active - 1 + n) % n;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = n - 1;
    else return;
    e.preventDefault();
    setActive(next);
    tabs.current[next]?.focus();
  };

  return (
    <Section id={sectionIds.styles} tone="ivory" labelledBy="styles-h">
      <SectionHeader id="styles-h" title={styles.heading} sub={styles.sub} />
      <div className="grid gap-8 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-12">
        <div role="tablist" aria-label="Retreat styles" aria-orientation="vertical" onKeyDown={onKey} className="grid grid-cols-2 gap-3 lg:grid-cols-1">
          {styles.items.map((s, i) => {
            const on = i === active;
            return (
              <button
                key={s.id}
                ref={(el) => { tabs.current[i] = el; }}
                role="tab"
                id={`style-tab-${s.id}`}
                aria-selected={on}
                aria-controls="style-panel"
                tabIndex={on ? 0 : -1}
                onClick={() => setActive(i)}
                className={`flex items-center gap-4 rounded-2xl border p-4 text-left transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2A7F82] ${
                  on ? "border-[#123B5D] bg-[#123B5D] text-white shadow-lg" : "border-[#123B5D]/15 bg-white hover:border-[#2A7F82]"
                }`}
              >
                <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${on ? "bg-white/15 text-[#D8A64A]" : "bg-[#123B5D]/8 text-[#123B5D]"}`}>
                  <Icon name={s.icon} />
                </span>
                <span>
                  <span className="block text-sm font-semibold sm:text-base">{s.title}</span>
                  <span className={`hidden text-xs sm:block ${on ? "text-white/70" : "text-[#252B32]/55"}`}>{s.short}</span>
                </span>
              </button>
            );
          })}
        </div>

        <div id="style-panel" role="tabpanel" aria-labelledby={`style-tab-${current.id}`} tabIndex={0} className="relative overflow-hidden rounded-3xl bg-white shadow-[0_24px_60px_-24px_rgba(18,59,93,0.35)] outline-none focus-visible:ring-2 focus-visible:ring-[#2A7F82]">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? undefined : { opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: EASE }}
            >
              <Photo image={current.image} className="aspect-[16/9] w-full" sizes="(min-width: 1024px) 55vw, 100vw" />
              <div className="p-7 sm:p-9">
                <h3 className="text-2xl font-semibold tracking-tight">{current.title}</h3>
                <p className="mt-3 text-lg text-[#252B32]/75">{current.description}</p>
                <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-[#2A7F82]">Suggested destination types</p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {current.destinationTypes.map((t) => (
                    <li key={t} className="rounded-full bg-[#F8F6F0] px-3.5 py-1.5 text-sm text-[#252B32]/80">{t}</li>
                  ))}
                </ul>
                <p className="mt-5 text-sm text-[#252B32]/70">
                  <span className="font-semibold text-[#123B5D]">Places to consider: </span>{current.suggested.join(", ")}
                </p>
                <div className="mt-7">
                  <CtaLink target={sectionIds.customize} patch={{ retreatType: current.retreatType }} variant="solidBlue">{styles.cta}</CtaLink>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </Section>
  );
}

/* ------------------------------------------------------------------ */

export function TeamBuildingActivities() {
  return (
    <Section id={sectionIds.activities} tone="white" labelledBy="activities-h">
      <SectionHeader id="activities-h" title={teamBuilding.heading} sub={teamBuilding.sub} />
      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {teamBuilding.items.map((a, i) => (
          <motion.li
            key={a.title}
            className="group overflow-hidden rounded-3xl border border-[#123B5D]/10 bg-[#F8F6F0] transition-shadow duration-500 hover:shadow-[0_24px_60px_-24px_rgba(18,59,93,0.4)]"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, delay: (i % 3) * 0.1, ease: EASE }}
            whileHover={{ y: -4 }}
          >
            <div className="relative overflow-hidden">
              <Photo image={a.image} className="aspect-[16/10] w-full transition-transform duration-700 group-hover:scale-105" sizes="(min-width: 1024px) 33vw, 50vw" />
              <span className="absolute bottom-3 left-3 flex h-11 w-11 items-center justify-center rounded-xl bg-white text-[#123B5D] shadow"><Icon name={a.icon} /></span>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold tracking-tight">{a.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#252B32]/70">{a.body}</p>
              <p className="mt-4 text-xs text-[#252B32]/60"><span className="font-semibold text-[#2A7F82]">Suits: </span>{a.groupType}</p>
            </div>
          </motion.li>
        ))}
      </ul>
      <Note>{teamBuilding.disclaimer}</Note>
      <Reveal className="mt-10 flex justify-center">
        <CtaLink target={sectionIds.customize} variant="solidBlue">{teamBuilding.cta}</CtaLink>
      </Reveal>
    </Section>
  );
}

/* ------------------------------------------------------------------ */
/* Leadership: split layout + subtle animated "connected ideas" graphic */
/* ------------------------------------------------------------------ */

const nodes = [
  { x: 60, y: 60 }, { x: 200, y: 40 }, { x: 320, y: 110 }, { x: 250, y: 220 },
  { x: 110, y: 200 }, { x: 190, y: 130 },
];
const edges: [number, number][] = [[0, 1], [1, 2], [2, 3], [3, 4], [4, 0], [5, 0], [5, 1], [5, 2], [5, 3], [5, 4]];

function IdeaNetwork() {
  const reduce = useReducedMotion();
  return (
    <svg viewBox="0 0 380 260" role="img" aria-label="Illustration of connected ideas and collaboration" className="absolute inset-0 h-full w-full">
      {edges.map(([a, b], i) => (
        <motion.line
          key={i}
          x1={nodes[a].x} y1={nodes[a].y} x2={nodes[b].x} y2={nodes[b].y}
          stroke="#D8A64A" strokeWidth={1.2} strokeLinecap="round" opacity={0.7}
          initial={reduce ? false : { pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.3 + i * 0.12 }}
        />
      ))}
      {nodes.map((p, i) => (
        <motion.circle
          key={i} cx={p.x} cy={p.y} r={i === 5 ? 9 : 6} fill="#F8F6F0" stroke="#D8A64A" strokeWidth={2}
          animate={reduce ? undefined : { scale: [1, 1.25, 1] }}
          style={{ transformBox: "fill-box", transformOrigin: "center" }}
          transition={{ duration: 3.2, repeat: Infinity, delay: i * 0.4, ease: "easeInOut" }}
        />
      ))}
    </svg>
  );
}

export function LeadershipSection() {
  return (
    <Section tone="blue" labelledBy="leadership-h">
      <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <div>
          <SectionHeader id="leadership-h" title={leadership.heading} sub={leadership.sub} invert />
          <ul className="grid gap-x-8 gap-y-7 sm:grid-cols-2">
            {leadership.items.map((it, i) => (
              <li key={it.title} className="list-none">
                <Reveal delay={i * 0.07}>
                  <IconBadge name={it.icon} tone="light" />
                  <h3 className="mt-4 text-lg font-semibold">{it.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-white/70">{it.body}</p>
                </Reveal>
              </li>
            ))}
          </ul>
          <Note invert>{leadership.disclaimer}</Note>
        </div>
        <Reveal x={30} y={0}>
          <div className="relative">
            <Photo image={leadership.image} className="aspect-[4/5] w-full rounded-3xl shadow-2xl" sizes="(min-width: 1024px) 45vw, 100vw" />
            <div className="absolute inset-0 rounded-3xl bg-[#123B5D]/25" aria-hidden="false">
              <IdeaNetwork />
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

/* ------------------------------------------------------------------ */

export function WellnessSection() {
  return (
    <Section tone="ivory" labelledBy="wellness-h" className="bg-gradient-to-b from-[#F8F6F0] to-[#eef3f1]">
      <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,6fr)_minmax(0,5fr)] lg:gap-20">
        <div>
          <SectionHeader id="wellness-h" title={wellness.heading} sub={wellness.sub} />
          <ul className="flex flex-wrap gap-3">
            {wellness.activities.map((a, i) => (
              <motion.li
                key={a}
                className="flex items-center gap-2 rounded-full border border-[#2A7F82]/25 bg-white px-4 py-2.5 text-sm text-[#252B32]/85"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06, ease: EASE }}
              >
                <Icon name="lotus" className="h-4 w-4 text-[#2A7F82]" />{a}
              </motion.li>
            ))}
          </ul>
          <Reveal className="mt-10">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#2A7F82]">Destination inspiration</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {wellness.inspiration.map((d) => (
                <li key={d} className="rounded-full bg-[#123B5D] px-4 py-1.5 text-sm text-white">{d}</li>
              ))}
            </ul>
          </Reveal>
          <Note>{wellness.disclaimer}</Note>
          <Reveal className="mt-8">
            <CtaLink target={sectionIds.customize} patch={{ retreatType: "Wellness Retreat" }} variant="solidBlue">{wellness.cta}</CtaLink>
          </Reveal>
        </div>
        <Reveal>
          <div className="relative">
            <Photo image={wellness.image} className="aspect-[4/5] w-full rounded-[2.5rem]" sizes="(min-width: 1024px) 40vw, 100vw" />
            <Photo image={wellness.secondImage} className="absolute -bottom-8 -left-6 hidden h-40 w-40 rounded-3xl shadow-xl ring-4 ring-[#F8F6F0] sm:block" sizes="160px" />
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

/* ------------------------------------------------------------------ */

export function ConferenceSection() {
  return (
    <Section tone="white" labelledBy="conference-h">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeader id="conference-h" title={conferences.heading} sub={conferences.sub} />
          <Photo image={conferences.image} className="hidden aspect-[4/3] w-full rounded-3xl lg:block" sizes="40vw" />
          <div className="mt-8">
            <CtaLink target={sectionIds.customize} patch={{ retreatType: "Corporate Conference" }} variant="solidBlue">{conferences.cta}</CtaLink>
          </div>
        </div>
        <div>
          <ul className="grid gap-5 sm:grid-cols-2">
            {conferences.items.map((it, i) => (
              <li key={it.title} className="list-none">
                <Reveal delay={(i % 2) * 0.08} className="h-full rounded-3xl border border-[#123B5D]/10 bg-[#F8F6F0] p-7">
                  <IconBadge name={it.icon} tone="teal" />
                  <h3 className="mt-5 text-lg font-semibold tracking-tight">{it.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#252B32]/70">{it.body}</p>
                </Reveal>
              </li>
            ))}
          </ul>
          <Note>{conferences.disclaimer}</Note>
        </div>
      </div>
    </Section>
  );
}
