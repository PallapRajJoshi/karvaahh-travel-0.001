import { BedDouble, Bus, ChevronDown, Mountain, Utensils, type LucideIcon } from "lucide-react";
import Reveal from "@/components/shared/Reveal";
import type { DayPlan } from "../product-types";
import { SERIF } from "../ui";
import "../heli.css";

const META_ICONS: Record<string, LucideIcon> = {
  Altitude: Mountain,
  Transport: Bus,
  Stay: BedDouble,
  Meals: Utensils,
};

/** Expandable day-by-day plan with altitude / transport / stay / meals at a glance. */
export default function DayWise({
  dayWise,
}: {
  dayWise: { title: string; intro: string; note: string; days: DayPlan[] };
}) {
  return (
    <div className="mt-20">
      <Reveal className="max-w-[720px]">
        <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#C98500]">Day by day</p>
        <h3 id="daywise-title" className={`${SERIF} mt-3 text-[28px] font-medium leading-tight text-[#0B2942] sm:text-[34px]`}>{dayWise.title}</h3>
        <p className="mt-3 text-[15.5px] leading-7 text-[#4A5B6C]">{dayWise.intro}</p>
        <p className="mt-4 rounded-2xl bg-[#F8F6F1] px-5 py-4 text-[14px] leading-6 text-[#4A5B6C]">{dayWise.note}</p>
      </Reveal>

      <ol className="relative mt-10">
        <span aria-hidden="true" className="absolute bottom-8 left-[27px] top-8 w-px bg-gradient-to-b from-[#F4A300] via-[#F4A300]/40 to-[#0B2942]/10" />
        {dayWise.days.map((d, i) => (
          <li key={d.day} className="relative pb-5 pl-[76px] last:pb-0">
            {/* Badge sits outside Reveal: its will-change would otherwise become the positioning context. */}
            <span
              aria-hidden="true"
              className="absolute left-0 top-4 z-10 flex h-14 w-14 flex-col items-center justify-center rounded-full border-4 border-white bg-[#0B2942] text-[#F4A300] shadow-[0_8px_20px_-8px_rgba(11,41,66,0.5)]"
            >
              <span className="text-[9px] font-semibold uppercase tracking-[0.15em] text-white/60">Day</span>
              <span className="text-[16px] font-semibold leading-none">{String(i + 1).padStart(2, "0")}</span>
            </span>
            <Reveal delay={i * 70}>
              <details
                className="heli-details group rounded-[22px] border border-[#0B2942]/[0.08] bg-[#F8F6F1] px-5 transition-colors hover:border-[#F4A300]/40 open:bg-white open:shadow-[0_22px_44px_-30px_rgba(11,41,66,0.45)] sm:px-7"
                open={i === 0}
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 [&::-webkit-details-marker]:hidden">
                  <span>
                    <span className="block text-[12px] font-semibold uppercase tracking-[0.2em] text-[#C98500]">{d.day}</span>
                    <span className="mt-1 block text-[17px] font-semibold text-[#0B2942] sm:text-[18px]">{d.title}</span>
                  </span>
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-[#0B2942] transition-all duration-300 group-open:rotate-180 group-open:bg-[#F4A300]">
                    <ChevronDown className="h-4 w-4" aria-hidden="true" />
                  </span>
                </summary>
                <div className="pb-6">
                  <p className="text-[15px] leading-7 text-[#4A5B6C]">{d.text}</p>
                  <dl className="mt-5 grid gap-3 min-[480px]:grid-cols-2 lg:grid-cols-4">
                    {d.meta.map((m) => {
                      const Icon = META_ICONS[m.label] ?? Mountain;
                      return (
                        <div key={m.label} className="flex gap-3 rounded-2xl bg-[#F8F6F1] px-4 py-3">
                          <Icon className="mt-0.5 h-4 w-4 shrink-0 text-[#C98500]" aria-hidden="true" />
                          <div className="min-w-0">
                            <dt className="text-[10.5px] font-semibold uppercase tracking-[0.2em] text-[#8A97A5]">{m.label}</dt>
                            <dd className="mt-0.5 text-[13.5px] font-medium leading-5 text-[#0B2942]">{m.value}</dd>
                          </div>
                        </div>
                      );
                    })}
                  </dl>
                </div>
              </details>
            </Reveal>
          </li>
        ))}
      </ol>
    </div>
  );
}
