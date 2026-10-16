import { Globe, Info, PlaneLanding } from "lucide-react";
import Reveal from "@/components/shared/Reveal";
import { ANCHOR, SECTION_Y } from "@/components/activities/experience/product/constants";
import { CONTAINER, SERIF, SectionHeading } from "@/components/activities/experience/ui";
import type { GlobalConnectionsData } from "./types";

/** Connecting hubs with their nonstop Kathmandu carriers, then typical gateways by origin region. */
export default function GlobalConnections({ data }: { data: GlobalConnectionsData }) {
  return (
    <section id="connections" aria-labelledby="connections-title" className={`${ANCHOR} ${SECTION_Y} relative overflow-hidden bg-[#0B2942] text-white`}>
      <div aria-hidden="true" className="absolute -right-40 top-10 h-[460px] w-[460px] rounded-full bg-[#F4A300]/[0.07] blur-3xl" />
      <div className={`${CONTAINER} relative`}>
        <Reveal>
          <SectionHeading id="connections-title" eyebrow="Airlines & Connecting Hubs" title={data.title} intro={data.intro} dark />
        </Reveal>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {data.hubs.map((h, i) => (
            <li key={h.iata}>
              <Reveal delay={(i % 4) * 80} className="h-full">
                <article className="group flex h-full flex-col rounded-[22px] bg-white/[0.05] p-6 ring-1 ring-white/10 transition-colors duration-500 hover:bg-white/[0.09]">
                  <div className="flex items-center justify-between">
                    <h3 className={`${SERIF} text-[23px] font-medium leading-tight`}>{h.city}</h3>
                    <span className="font-mono text-[13px] font-semibold tracking-[0.1em] text-[#F4A300]">{h.iata}</span>
                  </div>
                  <p className="mt-2 text-[13.5px] leading-6 text-white/70">{h.text}</p>
                  <p className="mt-auto flex items-start gap-2 pt-4 text-[12.5px] leading-5 text-white/85">
                    <PlaneLanding className="mt-0.5 h-4 w-4 shrink-0 text-[#F4A300]" aria-hidden="true" />
                    <span>
                      <span className="sr-only">Nonstop to Kathmandu: </span>
                      {h.carriers.join(" · ")}
                    </span>
                  </p>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>

        <h3 className={`${SERIF} mt-16 text-[28px] font-medium leading-tight sm:text-[32px]`}>Flying in from further away</h3>
        <ul className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {data.origins.map((o, i) => (
            <li key={o.region}>
              <Reveal delay={(i % 3) * 80} className="h-full">
                <div className="h-full rounded-[22px] border border-white/10 p-6">
                  <p className="flex items-center gap-2 text-[11.5px] font-semibold uppercase tracking-[0.22em] text-[#F4A300]">
                    <Globe className="h-4 w-4" aria-hidden="true" />
                    {o.region}
                  </p>
                  <p className="mt-3 text-[15px] font-semibold leading-6">{o.hubs.join(" · ")}</p>
                  <p className="mt-2 text-[13.5px] leading-6 text-white/70">{o.text}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>

        <p className="mt-8 flex max-w-[860px] items-start gap-2.5 text-[13px] leading-6 text-white/60">
          <Info className="mt-1 h-4 w-4 shrink-0 text-[#F4A300]" aria-hidden="true" />
          {data.note}
        </p>
      </div>
    </section>
  );
}
