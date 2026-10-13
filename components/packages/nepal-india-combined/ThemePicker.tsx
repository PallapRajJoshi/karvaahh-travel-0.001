"use client";

import { useState } from "react";
import { ArrowRight, Clock } from "lucide-react";
import { useBooking } from "@/components/activities/experience/booking";
import { PageIcon, SERIF } from "@/components/activities/experience/ui";
import { CUSTOM_JOURNEY, type Circuit, type THEMES, type ThemeId } from "@/data/nepal-india-combined/content";

type Theme = (typeof THEMES)[number];

/** Pick a travel theme → the matching circuits are recommended below it. */
export default function ThemePicker({ themes, circuits }: { themes: Theme[]; circuits: Circuit[] }) {
  const [active, setActive] = useState<ThemeId>(themes[0].id);
  const { open } = useBooking();
  const theme = themes.find((t) => t.id === active) ?? themes[0];
  const matches = circuits.filter((c) => c.themes.includes(active));

  return (
    <div className="mt-10">
      <div role="group" aria-label="Travel themes" className="flex flex-wrap justify-center gap-2.5">
        {themes.map((t) => {
          const on = t.id === active;
          return (
            <button
              key={t.id}
              type="button"
              aria-pressed={on}
              onClick={() => setActive(t.id)}
              className={`inline-flex min-h-[44px] items-center gap-2 rounded-full border px-4 py-2 text-[14px] font-semibold transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E2B65C] ${
                on ? "border-[#E2B65C] bg-[#E2B65C] text-[#0B2942]" : "border-white/20 bg-white/[0.05] text-white/85 hover:border-white/40 hover:bg-white/10"
              }`}
            >
              <PageIcon name={t.icon} className="h-4 w-4" />
              {t.label}
            </button>
          );
        })}
      </div>

      <div aria-live="polite" className="mx-auto mt-8 max-w-[900px] rounded-[28px] border border-white/10 bg-white/[0.04] p-6 sm:p-8">
        <p className="text-[15px] leading-7 text-white/75">{theme.note}</p>
        <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#E2B65C]">Recommended for you</p>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {matches.map((c) => (
            <li key={c.id}>
              <a
                href={`#circuit-${c.id}`}
                className="group flex h-full items-center justify-between gap-4 rounded-2xl bg-white/[0.06] px-5 py-4 transition-colors hover:bg-white/[0.12]"
              >
                <span>
                  <span className={`${SERIF} block text-[18px] leading-snug text-white`}>{c.title}</span>
                  <span className="mt-1 flex items-center gap-1.5 text-[13px] text-white/60">
                    <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                    {c.duration}
                  </span>
                </span>
                <ArrowRight className="h-4 w-4 shrink-0 text-[#E2B65C] transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
        <button
          type="button"
          onClick={() => open({ tourType: CUSTOM_JOURNEY })}
          className="mt-7 inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-full bg-[#F4A300] px-7 py-3 text-[15px] font-semibold text-[#0C1D30] transition-all hover:-translate-y-0.5 hover:bg-[#FFB524] sm:w-auto"
        >
          Create My Custom Itinerary
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
