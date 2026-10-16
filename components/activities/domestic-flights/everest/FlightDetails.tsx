import { AlarmClock, Info, PlaneTakeoff } from "lucide-react";
import Reveal from "@/components/shared/Reveal";
import { ANCHOR, SECTION_Y } from "@/components/activities/experience/product/constants";
import { CONTAINER, PageIcon, SERIF, SectionHeading } from "@/components/activities/experience/ui";
import Sources from "./Sources";
import type { FlightDetailsData } from "./types";

/** Flight information panel: reporting vs departure time, then the key facts. */
export default function FlightDetails({ data }: { data: FlightDetailsData }) {
  const { timing } = data;
  return (
    <section id="details" aria-labelledby="details-title" className={`${ANCHOR} ${SECTION_Y} bg-white`}>
      <div className={CONTAINER}>
        <Reveal>
          <SectionHeading id="details-title" eyebrow="Flight Details" title={data.title} intro={data.intro} />
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Reporting vs departure */}
          <Reveal className="h-full">
            <div className="relative flex h-full flex-col overflow-hidden rounded-[28px] bg-[#0B2942] p-7 text-white sm:p-9">
              <div aria-hidden="true" className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#F4A300]/10 blur-3xl" />
              <h3 className={`${SERIF} relative text-[26px] font-medium leading-tight`}>Reporting time is not departure time</h3>
              <ol className="relative mt-8 space-y-0">
                <li className="relative flex gap-5 pb-8">
                  <span aria-hidden="true" className="absolute left-[21px] top-12 h-[calc(100%-40px)] w-px bg-gradient-to-b from-[#F4A300]/60 to-white/10" />
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#F4A300] text-[#0C1D30]">
                    <AlarmClock className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#F4A300]">1 · Report at the airport</p>
                    <p className={`${SERIF} mt-1.5 text-[24px] leading-tight`}>{timing.reporting.value}</p>
                    <p className="mt-2 text-[14px] leading-6 text-white/70">{timing.reporting.text}</p>
                  </div>
                </li>
                <li className="flex gap-5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-[#F4A300] ring-1 ring-white/20">
                    <PlaneTakeoff className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#F4A300]">2 · Scheduled departure</p>
                    <p className={`${SERIF} mt-1.5 text-[24px] leading-tight`}>{timing.departure.value}</p>
                    <p className="mt-2 text-[14px] leading-6 text-white/70">{timing.departure.text}</p>
                  </div>
                </li>
              </ol>
              <Sources sources={data.sources} dark className="relative mt-auto pt-8" />
            </div>
          </Reveal>

          {/* Key facts */}
          <Reveal delay={120} className="h-full">
            <dl className="grid h-full gap-px overflow-hidden rounded-[28px] bg-[#0B2942]/[0.08] ring-1 ring-[#0B2942]/[0.08] sm:grid-cols-2">
              {data.items.map((d) => (
                <div key={d.label} className="group flex gap-4 bg-[#F8F6F1] p-6 transition-colors duration-300 hover:bg-white">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-[#0B2942] ring-1 ring-[#0B2942]/10 transition-colors duration-300 group-hover:bg-[#0B2942] group-hover:text-[#F4A300]">
                    <PageIcon name={d.icon} className="h-[18px] w-[18px]" />
                  </span>
                  <div className="min-w-0">
                    <dt className="flex flex-wrap items-center gap-2 text-[11.5px] font-semibold uppercase tracking-[0.18em] text-[#5B6B7B]">
                      {d.label}
                      {d.confirm && (
                        <span className="rounded-full bg-[#F4A300]/15 px-2 py-0.5 text-[10px] tracking-[0.12em] text-[#8A5A00]">Confirm at booking</span>
                      )}
                    </dt>
                    <dd className="mt-1.5 text-[15.5px] font-semibold leading-6 text-[#0B2942]">{d.value}</dd>
                    {d.note && <dd className="mt-1 text-[13px] leading-5 text-[#5B6B7B]">{d.note}</dd>}
                  </div>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <p className="mt-6 flex items-start gap-2.5 text-[13px] leading-6 text-[#5B6B7B]">
          <Info className="mt-1 h-4 w-4 shrink-0 text-[#C98500]" aria-hidden="true" />
          {data.note}
        </p>
      </div>
    </section>
  );
}
