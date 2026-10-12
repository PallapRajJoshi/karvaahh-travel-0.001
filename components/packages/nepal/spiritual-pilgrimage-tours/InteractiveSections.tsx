"use client";

import { useId, useRef, useState, type FormEvent } from "react";
import { AnimatePresence, motion, useReducedMotion, useScroll, useSpring } from "motion/react";
import { ArrowRight, CalendarDays, Info, Send } from "lucide-react";
import { CONTACT } from "@/components/activities/experience/site";
import type { IconName } from "@/components/activities/experience/types";
import { CONTAINER, PageIcon, SERIF, SectionHeading } from "@/components/activities/experience/ui";
import type { Combination, Festival } from "@/data/pilgrimage/types";

const EASE = [0.22, 1, 0.36, 1] as const;

/* ============================================================
   Popular combinations — route cards with animated lines
   ============================================================ */

export function PopularCombinations({ items }: { items: Combination[] }) {
  const reduce = useReducedMotion();
  return (
    <section id="combinations" aria-labelledby="combinations-title" className="scroll-mt-[160px] bg-white py-20 sm:py-24 md:scroll-mt-[200px] lg:py-28">
      <div className={CONTAINER}>
        <SectionHeading id="combinations-title" eyebrow="Multi-Destination Yatra" title="Popular Pilgrimage Combinations" intro="Nepal's sacred sites pair beautifully. These are the journeys our travellers ask for most." />
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((c, i) => (
            <motion.li
              key={c.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -10% 0px" }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.08, ease: EASE }}
            >
              <a
                href={CONTACT.whatsappHref(`Hello Karvaahh, I'd like to plan a ${c.title} pilgrimage.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col rounded-[24px] bg-[#F8F6F1] p-6 ring-1 ring-[#0B2942]/[0.06] transition-all duration-500 hover:-translate-y-1 hover:bg-white hover:shadow-[0_24px_50px_-30px_rgba(11,41,66,0.5)]"
              >
                <h3 className={`${SERIF} text-[21px] leading-tight text-[#0B2942]`}>{c.title}</h3>
                <p className="mt-1.5 text-[14px] text-[#5B6B7B]">{c.text}</p>
                {/* Route */}
                <div className="relative mt-6 px-1">
                  <svg aria-hidden="true" viewBox="0 0 100 10" preserveAspectRatio="none" className="absolute inset-x-1 top-[5px] h-[10px] w-[calc(100%-8px)] overflow-visible">
                    <motion.path
                      d="M 0 5 L 100 5"
                      stroke="#C98500"
                      strokeWidth="1.5"
                      strokeOpacity="0.6"
                      fill="none"
                      vectorEffect="non-scaling-stroke"
                      initial={reduce ? false : { pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.4, delay: 0.2 + (i % 3) * 0.1, ease: "easeInOut" }}
                    />
                  </svg>
                  <ol className="relative flex justify-between" aria-label="Route">
                    {c.stops.map((s, si) => (
                      <li key={s} className={`flex w-0 flex-1 flex-col ${si === 0 ? "items-start text-left" : si === c.stops.length - 1 ? "items-end text-right" : "items-center text-center"}`}>
                        <span className="h-[11px] w-[11px] rounded-full border-2 border-[#C98500] bg-white transition-colors group-hover:bg-[#F4A300]" />
                        <span className="mt-2 text-[11.5px] font-semibold leading-tight text-[#0B2942]">{s}</span>
                      </li>
                    ))}
                  </ol>
                </div>
                <span className="mt-auto inline-flex items-center gap-1.5 pt-6 text-[13.5px] font-semibold text-[#0B2942]">
                  Plan this yatra
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </span>
              </a>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ============================================================
   How your yatra works — timeline with scroll progress
   ============================================================ */

export function YatraTimeline({ steps, entryPoints }: { steps: { title: string; text: string; icon: IconName }[]; entryPoints: string[] }) {
  const ref = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 55%"] });
  const progress = useSpring(scrollYProgress, { stiffness: 110, damping: 28, mass: 0.4 });

  return (
    <section aria-labelledby="timeline-title" className="bg-[#0B2942] py-20 text-white sm:py-24 lg:py-28">
      <div className={`${CONTAINER} grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16`}>
        <div className="lg:sticky lg:top-[200px] lg:self-start">
          <SectionHeading id="timeline-title" eyebrow="The Process" title="How Your Yatra Works" intro="From the first conversation to your safe return — with Karvaahh teams in both India and Nepal." dark />
          <p className="mt-8 text-[12px] font-semibold uppercase tracking-[0.2em] text-[#F4A300]">Possible starting & entry points</p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {entryPoints.map((e) => (
              <li key={e} className="rounded-full border border-white/15 bg-white/[0.06] px-3.5 py-1.5 text-[13px] text-white/85">
                {e}
              </li>
            ))}
          </ul>
          <p className="mt-3 text-[12.5px] text-white/55">Not every package operates from every entry point — we plan the route that suits your itinerary.</p>
        </div>
        <ol ref={ref} className="relative">
          <span aria-hidden="true" className="absolute bottom-6 left-[23px] top-6 w-px bg-white/10" />
          <motion.span aria-hidden="true" style={{ scaleY: progress }} className="absolute bottom-6 left-[23px] top-6 w-px origin-top bg-[#F4A300]" />
          {steps.map((s, i) => (
            <motion.li
              key={s.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -10% 0px" }}
              transition={{ duration: 0.6, ease: EASE }}
              className="relative flex gap-5 pb-8 last:pb-0"
            >
              <span className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#F4A300] text-[#0C1D30]">
                <PageIcon name={s.icon} className="h-5 w-5" />
              </span>
              <div className="pt-1">
                <p className="text-[12px] font-semibold tracking-[0.2em] text-[#F4A300]">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="text-[18px] font-semibold">{s.title}</h3>
                <p className="mt-1 text-[14.5px] leading-6 text-white/70">{s.text}</p>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ============================================================
   Seasonal pilgrimage — festival filter (lunar dates)
   ============================================================ */

export function SeasonalPilgrimage({ festivals, names }: { festivals: Festival[]; names: Record<string, string> }) {
  const [active, setActive] = useState(festivals[0]?.id);
  const f = festivals.find((x) => x.id === active) ?? festivals[0];
  if (!f) return null;
  return (
    <section id="festivals" aria-labelledby="festivals-title" className="scroll-mt-[160px] bg-white py-20 sm:py-24 md:scroll-mt-[200px] lg:py-28">
      <div className={CONTAINER}>
        <SectionHeading id="festivals-title" eyebrow="Festival Yatra" title="Seasonal Pilgrimage" intro="Plan around Nepal's great festivals. Dates follow the lunar calendar and change each year — we confirm them for your journey." />
        <div role="group" aria-label="Festivals" className="-mx-5 mt-8 flex gap-2 overflow-x-auto px-5 pb-1 [scrollbar-width:none] sm:-mx-8 sm:px-8 lg:mx-0 lg:flex-wrap lg:px-0 [&::-webkit-scrollbar]:hidden">
          {festivals.map((x) => (
            <button
              key={x.id}
              type="button"
              aria-pressed={x.id === f.id}
              onClick={() => setActive(x.id)}
              className={`shrink-0 rounded-full border px-4 py-2 text-[13.5px] font-medium transition-colors ${
                x.id === f.id ? "border-[#8A2E1F] bg-[#8A2E1F] text-white" : "border-[#0B2942]/15 text-[#0B2942] hover:border-[#0B2942]/40"
              }`}
            >
              {x.name}
            </button>
          ))}
        </div>
        <AnimatePresence mode="wait">
          <motion.article
            key={f.id}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35 }}
            className="mt-8 grid gap-6 rounded-[28px] bg-[#F8F6F1] p-6 ring-1 ring-[#0B2942]/[0.06] sm:p-9 lg:grid-cols-[1fr_1fr]"
            aria-live="polite"
          >
            <div>
              <h3 className={`${SERIF} text-[30px] leading-tight text-[#0B2942]`}>{f.name}</h3>
              <p className="mt-2 inline-flex items-center gap-2 text-[14px] font-semibold text-[#8A2E1F]">
                <CalendarDays className="h-4 w-4" aria-hidden="true" />
                {f.festivalDates ?? f.season}
              </p>
              <p className="mt-4 text-[15.5px] leading-7 text-[#4A5B6C]">{f.text}</p>
            </div>
            <div>
              <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#8A97A5]">Where to go</p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {f.destinations.map((id) => (
                  <li key={id} className="rounded-full bg-white px-3.5 py-2 text-[13.5px] font-medium text-[#0B2942] ring-1 ring-[#0B2942]/10">
                    {names[id] ?? id}
                  </li>
                ))}
              </ul>
              <a
                href={CONTACT.whatsappHref(`Hello Karvaahh, I'd like to plan a pilgrimage around ${f.name}.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-6 inline-flex items-center gap-2 rounded-full bg-[#0B2942] px-5 py-3 text-[14px] font-semibold text-white hover:bg-[#123653]"
              >
                Plan a {f.name} yatra
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </a>
            </div>
          </motion.article>
        </AnimatePresence>
      </div>
    </section>
  );
}

/* ============================================================
   Custom yatra builder — frontend only, opens WhatsApp
   ============================================================ */

type BuilderOptions = { destinations: string[]; types: string[]; faiths: string[]; durations: string[]; transport: string[]; hotels: string[]; budgets: string[]; starts: string[] };

export function CustomYatraBuilder({ options }: { options: BuilderOptions }) {
  const id = useId();
  const [f, setF] = useState({
    destination: options.destinations[0],
    type: options.types[0],
    faith: options.faiths[0],
    date: "",
    travellers: "2",
    seniors: "0",
    duration: options.durations[0],
    transport: options.transport[0],
    hotel: options.hotels[0],
    budget: options.budgets[0],
    start: options.starts[0],
    notes: "",
  });
  const set = (k: keyof typeof f) => (e: { target: { value: string } }) => setF((p) => ({ ...p, [k]: e.target.value }));

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const msg = [
      "Hello Karvaahh, please help me create a Nepal pilgrimage:",
      `Destination: ${f.destination}`,
      `Pilgrimage type: ${f.type}`,
      `Faith / tradition: ${f.faith}`,
      `Travel date: ${f.date || "Flexible"}`,
      `Travellers: ${f.travellers} (seniors: ${f.seniors})`,
      `Duration: ${f.duration}`,
      `Transport: ${f.transport}`,
      `Accommodation: ${f.hotel}`,
      `Budget: ${f.budget}`,
      `Starting point: ${f.start}`,
      f.notes && `Requirements: ${f.notes}`,
    ].filter(Boolean);
    window.open(CONTACT.whatsappHref(msg.join("\n")), "_blank", "noopener,noreferrer");
  };

  const input = "mt-1.5 w-full rounded-xl border border-[#0B2942]/15 bg-white px-4 py-3 text-[15px] text-[#0B2942] outline-none transition focus:border-[#F4A300] focus:ring-2 focus:ring-[#F4A300]/30";
  const label = "text-[12px] font-semibold uppercase tracking-[0.14em] text-[#5B6B7B]";
  const select = (k: keyof typeof f, text: string, opts: string[]) => (
    <label className="block" htmlFor={`${id}-${k}`}>
      <span className={label}>{text}</span>
      <select id={`${id}-${k}`} className={input} value={f[k]} onChange={set(k)}>
        {opts.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
    </label>
  );

  return (
    <section id="builder" aria-labelledby="builder-title" className="scroll-mt-[160px] bg-[#F8F6F1] py-20 sm:py-24 md:scroll-mt-[200px] lg:py-28">
      <div className={`${CONTAINER} grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16`}>
        <div className="lg:sticky lg:top-[200px] lg:self-start">
          <SectionHeading id="builder-title" eyebrow="Custom Yatra" title="Create Your Own Spiritual Journey" intro="Tell us what matters to you. We will design a yatra around your faith, time, family and travel style." />
          <p className="mt-6 flex items-start gap-2.5 text-[13px] leading-6 text-[#5B6B7B]">
            <Info className="mt-1 h-4 w-4 shrink-0 text-[#C98500]" aria-hidden="true" />
            Your request opens in WhatsApp — nothing is stored on this website.
          </p>
        </div>
        <motion.form
          onSubmit={submit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -10% 0px" }}
          transition={{ duration: 0.7, ease: EASE }}
          className="rounded-[28px] bg-white p-6 shadow-[0_30px_70px_-40px_rgba(11,41,66,0.5)] ring-1 ring-[#0B2942]/[0.06] sm:p-9"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            {select("destination", "Preferred destination", options.destinations)}
            {select("type", "Pilgrimage type", options.types)}
            {select("faith", "Faith / tradition", options.faiths)}
            <label className="block" htmlFor={`${id}-date`}>
              <span className={label}>Travel date</span>
              <input id={`${id}-date`} type="date" className={input} value={f.date} onChange={set("date")} />
            </label>
            <label className="block" htmlFor={`${id}-travellers`}>
              <span className={label}>Number of travellers</span>
              <input id={`${id}-travellers`} type="number" min={1} max={200} className={input} value={f.travellers} onChange={set("travellers")} />
            </label>
            <label className="block" htmlFor={`${id}-seniors`}>
              <span className={label}>Senior travellers</span>
              <input id={`${id}-seniors`} type="number" min={0} max={200} className={input} value={f.seniors} onChange={set("seniors")} />
            </label>
            {select("duration", "Duration", options.durations)}
            {select("transport", "Transport preference", options.transport)}
            {select("hotel", "Accommodation", options.hotels)}
            {select("budget", "Budget category", options.budgets)}
            <div className="sm:col-span-2">{select("start", "Starting point", options.starts)}</div>
            <label className="block sm:col-span-2" htmlFor={`${id}-notes`}>
              <span className={label}>Additional requirements</span>
              <textarea id={`${id}-notes`} rows={3} className={`${input} resize-none`} value={f.notes} onChange={set("notes")} placeholder="Rituals, pujas, dietary needs, mobility support…" />
            </label>
          </div>
          <button
            type="submit"
            className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#F4A300] px-7 py-4 text-[15.5px] font-semibold text-[#0C1D30] shadow-[0_10px_24px_-10px_rgba(244,163,0,0.7)] transition-all hover:-translate-y-0.5 hover:bg-[#FFB524]"
          >
            <Send className="h-4 w-4" aria-hidden="true" />
            Create My Yatra
          </button>
        </motion.form>
      </div>
    </section>
  );
}
