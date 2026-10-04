"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, Check, Info } from "lucide-react";
import type { ItineraryOption } from "../product-types";
import { CONTACT } from "../site";
import { SERIF } from "../ui";

/** Accessible tabs (arrow keys, Home/End) for the itinerary options. */
export default function ItineraryTabs({ options }: { options: ItineraryOption[] }) {
  const [index, setIndex] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const option = options[index];

  const select = (i: number) => {
    const next = (i + options.length) % options.length;
    setIndex(next);
    tabRefs.current[next]?.focus();
    tabRefs.current[next]?.scrollIntoView({ block: "nearest", inline: "center", behavior: "smooth" });
  };

  const onKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === "ArrowRight") select(index + 1);
    else if (e.key === "ArrowLeft") select(index - 1);
    else if (e.key === "Home") select(0);
    else if (e.key === "End") select(options.length - 1);
    else return;
    e.preventDefault();
  };

  return (
    <div className="mt-12">
      <div
        role="tablist"
        aria-label="Itinerary options"
        className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-2 [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:px-0 [&::-webkit-scrollbar]:hidden"
      >
        {options.map((o, i) => {
          const selected = i === index;
          return (
            <button
              key={o.id}
              ref={(el) => {
                tabRefs.current[i] = el;
              }}
              id={`tab-${o.id}`}
              role="tab"
              type="button"
              aria-selected={selected}
              aria-controls={`panel-${o.id}`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setIndex(i)}
              onKeyDown={onKeyDown}
              className={`flex shrink-0 items-center gap-2.5 rounded-full border px-5 py-3 text-[14px] font-semibold transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F4A300] ${
                selected
                  ? "border-[#0B2942] bg-[#0B2942] text-white shadow-[0_12px_28px_-14px_rgba(11,41,66,0.6)]"
                  : "border-[#0B2942]/15 bg-white text-[#0B2942] hover:border-[#0B2942]/40"
              }`}
            >
              <span className={`text-[12px] ${selected ? "text-[#F4A300]" : "text-[#C98500]"}`}>
                {String.fromCharCode(65 + i)}
              </span>
              {o.tab}
              {o.availability === "on-request" && (
                <span className={`rounded-full px-2 py-0.5 text-[10.5px] font-medium ${selected ? "bg-white/15" : "bg-[#F8F6F1] text-[#5B6B7B]"}`}>
                  On request
                </span>
              )}
            </button>
          );
        })}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={option.id}
          id={`panel-${option.id}`}
          role="tabpanel"
          aria-labelledby={`tab-${option.id}`}
          tabIndex={0}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 grid gap-8 rounded-[28px] border border-[#0B2942]/[0.08] bg-white p-6 shadow-[0_24px_60px_-40px_rgba(11,41,66,0.45)] sm:p-9 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12"
        >
          <div>
            <p className="inline-flex rounded-full bg-[#F4A300]/12 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#A86F00]">
              Option {String.fromCharCode(65 + index)} · {option.tag}
            </p>
            <h3 className={`${SERIF} mt-4 text-[26px] font-medium leading-tight text-[#0B2942] sm:text-[30px]`}>{option.title}</h3>
            <p className="mt-4 text-[15.5px] leading-7 text-[#4A5B6C]">{option.summary}</p>

            {option.points && (
              <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                {option.points.map((p) => (
                  <li key={p} className="flex items-start gap-2.5 text-[14.5px] text-[#0B2942]">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#C98500]" aria-hidden="true" />
                    {p}
                  </li>
                ))}
              </ul>
            )}

            {option.notice && (
              <p className="mt-6 flex items-start gap-3 rounded-2xl border border-[#F4A300]/30 bg-[#FFF8E8] px-4 py-3.5 text-[13.5px] leading-6 text-[#6B5418]">
                <Info className="mt-0.5 h-4 w-4 shrink-0 text-[#C98500]" aria-hidden="true" />
                {option.notice}
              </p>
            )}

            <a
              href={CONTACT.whatsappHref(`Hello Karvaahh, I'm interested in the "${option.title}". Please share details.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-7 inline-flex items-center gap-2 text-[15px] font-semibold text-[#0B2942] underline decoration-[#F4A300] decoration-2 underline-offset-[6px] transition-colors hover:text-[#C98500]"
            >
              Enquire about this option
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </a>
          </div>

          <ol className="relative space-y-1">
            <span aria-hidden="true" className="absolute bottom-5 left-[15px] top-5 w-px bg-[#0B2942]/10" />
            {option.steps.map((s, i) => (
              <motion.li
                key={s.title}
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.08 * i, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="relative flex gap-4 rounded-2xl p-2 transition-colors hover:bg-[#F8F6F1]"
              >
                <span className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#0B2942] text-[12px] font-semibold text-[#F4A300] ring-4 ring-white">
                  {i + 1}
                </span>
                <div className="pb-2 pt-1">
                  <h4 className="text-[15.5px] font-semibold text-[#0B2942]">{s.title}</h4>
                  <p className="mt-1 text-[14.5px] leading-6 text-[#5B6B7B]">{s.text}</p>
                </div>
              </motion.li>
            ))}
          </ol>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
