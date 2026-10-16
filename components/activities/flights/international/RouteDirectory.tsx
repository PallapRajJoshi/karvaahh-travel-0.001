"use client";

import { useState } from "react";
import { ArrowLeftRight, ArrowUpRight, CalendarCheck, Clock, Info, Ruler } from "lucide-react";
import Reveal from "@/components/shared/Reveal";
import Sources from "@/components/activities/domestic-flights/everest/Sources";
import { ANCHOR, SECTION_Y } from "@/components/activities/experience/product/constants";
import { CONTAINER, SERIF, SectionHeading } from "@/components/activities/experience/ui";
import type { RouteDirectoryData, RouteRegion } from "./types";

const ALL = "All regions";

/** Kathmandu (KTM) nonstop route directory, filterable by region. */
export default function RouteDirectory({ data }: { data: RouteDirectoryData }) {
  const regions = [...new Set(data.routes.map((r) => r.region))];
  const [active, setActive] = useState<RouteRegion | typeof ALL>(ALL);
  const routes = active === ALL ? data.routes : data.routes.filter((r) => r.region === active);

  return (
    <section id="routes" aria-labelledby="routes-title" className={`${ANCHOR} ${SECTION_Y} bg-white`}>
      <div className={CONTAINER}>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <Reveal>
            <SectionHeading id="routes-title" eyebrow="Kathmandu Flight Directory" title={data.title} intro={data.intro} />
          </Reveal>
          <Reveal delay={100}>
            <p className="inline-flex items-center gap-2 rounded-full bg-[#F8F6F1] px-4 py-2 text-[12.5px] font-medium text-[#4A5B6C] ring-1 ring-[#0B2942]/[0.06]">
              <CalendarCheck className="h-4 w-4 text-[#C98500]" aria-hidden="true" />
              Routes last checked: {data.verified}
            </p>
          </Reveal>
        </div>

        {/* Legend */}
        <ul className="mt-8 flex flex-wrap gap-2 text-[11.5px] font-semibold uppercase tracking-[0.12em]" aria-label="Legend">
          <li className="rounded-full bg-[#0B2942] px-3 py-1 text-white">Nonstop to / from KTM</li>
          <li className="rounded-full bg-[#F4A300]/15 px-3 py-1 text-[#7A4E00]">Confirm before booking</li>
        </ul>

        {/* Region filter */}
        <div role="group" aria-label="Filter routes by region" className="-mx-5 mt-6 flex gap-2 overflow-x-auto px-5 pb-2 [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:px-0 [&::-webkit-scrollbar]:hidden">
          {[ALL, ...regions].map((r) => {
            const count = r === ALL ? data.routes.length : data.routes.filter((x) => x.region === r).length;
            const on = active === r;
            return (
              <button
                key={r}
                type="button"
                aria-pressed={on}
                onClick={() => setActive(r as RouteRegion | typeof ALL)}
                className={`shrink-0 rounded-full px-4 py-2 text-[13.5px] font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F4A300] ${
                  on ? "bg-[#0B2942] text-white" : "bg-[#F8F6F1] text-[#0B2942] ring-1 ring-[#0B2942]/10 hover:bg-white"
                }`}
              >
                {r} <span className={on ? "text-[#F4A300]" : "text-[#8A97A5]"}>{count}</span>
              </button>
            );
          })}
        </div>

        <ul className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3" aria-live="polite">
          {routes.map((r) => (
            <li key={r.iata}>
              <article className="group flex h-full flex-col rounded-[24px] bg-[#F8F6F1] p-6 ring-1 ring-[#0B2942]/[0.06] transition-all duration-500 hover:-translate-y-1 hover:bg-white hover:shadow-[0_24px_50px_-30px_rgba(11,41,66,0.5)]">
                <div className="flex items-center justify-between gap-3">
                  <p className="flex items-center gap-2 font-mono text-[15px] font-semibold tracking-[0.08em] text-[#0B2942]">
                    KTM
                    <ArrowLeftRight className="h-4 w-4 text-[#C98500] transition-transform duration-500 group-hover:scale-110" aria-hidden="true" />
                    {r.iata}
                  </p>
                  <span className="rounded-full bg-white px-2.5 py-1 text-[10.5px] font-semibold uppercase tracking-[0.14em] text-[#5B6B7B] ring-1 ring-[#0B2942]/[0.08]">
                    {r.region}
                  </span>
                </div>
                <h3 className={`${SERIF} mt-4 text-[24px] font-medium leading-tight text-[#0B2942]`}>
                  Kathmandu ⇄ {r.city}
                  <span className="sr-only">, {r.country}</span>
                </h3>
                <p className="mt-1 text-[13px] leading-5 text-[#5B6B7B]">
                  Tribhuvan International (KTM) ⇄ {r.airport} ({r.iata}), {r.country}
                </p>

                <dl className="mt-5 grid grid-cols-2 gap-3 text-[13px]">
                  <div className="rounded-xl bg-white px-3 py-2.5 ring-1 ring-[#0B2942]/[0.06]">
                    <dt className="flex items-center gap-1.5 text-[10.5px] font-semibold uppercase tracking-[0.14em] text-[#8A97A5]">
                      <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                      Flight time
                    </dt>
                    <dd className="mt-1 font-semibold text-[#0B2942]">{r.duration ?? "Shown in your quote"}</dd>
                  </div>
                  <div className="rounded-xl bg-white px-3 py-2.5 ring-1 ring-[#0B2942]/[0.06]">
                    <dt className="flex items-center gap-1.5 text-[10.5px] font-semibold uppercase tracking-[0.14em] text-[#8A97A5]">
                      <Ruler className="h-3.5 w-3.5" aria-hidden="true" />
                      Distance
                    </dt>
                    <dd className="mt-1 font-semibold text-[#0B2942]">≈ {r.km.toLocaleString("en-IN")} km</dd>
                  </div>
                </dl>

                <h4 className="mt-5 text-[10.5px] font-semibold uppercase tracking-[0.18em] text-[#5B6B7B]">Nonstop airlines</h4>
                <ul className="mt-2 space-y-2">
                  {r.carriers.map((c) => (
                    <li key={c.name} className="text-[13.5px] leading-5">
                      <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                        <a
                          href={c.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-0.5 font-semibold text-[#0B2942] underline decoration-[#F4A300]/60 decoration-2 underline-offset-4 transition-colors hover:text-[#C98500]"
                        >
                          {c.name}
                          <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                          <span className="sr-only">(official website, opens in a new tab)</span>
                        </a>
                        {c.confirm && (
                          <span className="rounded-full bg-[#F4A300]/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#7A4E00]">Confirm</span>
                        )}
                      </div>
                      {(c.frequency || c.note) && (
                        <p className="mt-0.5 text-[12.5px] leading-5 text-[#5B6B7B]">{[c.frequency, c.note].filter(Boolean).join(" · ")}</p>
                      )}
                    </li>
                  ))}
                </ul>

                {(r.note || r.sources) && (
                  <div className="mt-auto pt-5">
                    {r.note && <p className="text-[12.5px] leading-5 text-[#5B6B7B]">{r.note}</p>}
                    {r.sources && <Sources sources={r.sources} className="mt-2" />}
                  </div>
                )}
              </article>
            </li>
          ))}
        </ul>

        <ul className="mt-8 space-y-2.5">
          {data.notes.map((n) => (
            <li key={n.slice(0, 40)} className="flex items-start gap-2.5 text-[13px] leading-6 text-[#5B6B7B]">
              <Info className="mt-1 h-4 w-4 shrink-0 text-[#C98500]" aria-hidden="true" />
              {n}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
