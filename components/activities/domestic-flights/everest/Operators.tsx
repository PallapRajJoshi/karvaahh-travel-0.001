import { ArrowUpRight, BadgeCheck, Info } from "lucide-react";
import Reveal from "@/components/shared/Reveal";
import { SECTION_Y } from "@/components/activities/experience/product/constants";
import { CONTAINER, SERIF, SectionHeading } from "@/components/activities/experience/ui";
import Sources from "./Sources";
import type { OperatorsData } from "./types";

/** Airlines that list the Everest sightseeing flight, with official links only. */
export default function Operators({ data }: { data: OperatorsData }) {
  return (
    <section aria-labelledby="operators-title" className={`${SECTION_Y} bg-[#F8F6F1]`}>
      <div className={CONTAINER}>
        <Reveal>
          <SectionHeading id="operators-title" eyebrow="Airlines & Booking" title={data.title} intro={data.intro} />
        </Reveal>

        <ul className="mt-12 grid gap-5 lg:grid-cols-3">
          {data.items.map((op, i) => (
            <li key={op.name}>
              <Reveal delay={i * 100} className="h-full">
                <article className="group flex h-full flex-col rounded-[26px] bg-white p-7 ring-1 ring-[#0B2942]/[0.06] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_28px_50px_-30px_rgba(11,41,66,0.5)] sm:p-8">
                  <p className="inline-flex w-fit items-center gap-1.5 rounded-full bg-[#0B2942]/[0.05] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#0B2942]">
                    <BadgeCheck className="h-3.5 w-3.5 text-[#C98500]" aria-hidden="true" />
                    {op.status}
                  </p>
                  <h3 className={`${SERIF} mt-5 text-[28px] font-medium leading-tight text-[#0B2942]`}>{op.name}</h3>
                  <p className="mt-3 text-[14.5px] leading-7 text-[#4A5B6C]">{op.offering}</p>

                  <dl className="mt-6 divide-y divide-[#0B2942]/[0.07] border-y border-[#0B2942]/[0.07]">
                    {op.details.map((d) => (
                      <div key={d.label} className="grid grid-cols-[110px_1fr] gap-3 py-3">
                        <dt className="text-[11.5px] font-semibold uppercase tracking-[0.14em] text-[#5B6B7B]">{d.label}</dt>
                        <dd className="text-[14px] leading-6 text-[#0B2942]">{d.value}</dd>
                      </div>
                    ))}
                  </dl>

                  <div className="mt-auto pt-6">
                    <a
                      href={op.website.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-[#0B2942] underline decoration-[#F4A300] decoration-2 underline-offset-4 transition-colors hover:text-[#C98500]"
                    >
                      {op.website.label}
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                      <span className="sr-only">(opens in a new tab)</span>
                    </a>
                    <Sources sources={op.sources} className="mt-4" />
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>

        <p className="mt-6 flex items-start gap-2.5 text-[13px] leading-6 text-[#5B6B7B]">
          <Info className="mt-1 h-4 w-4 shrink-0 text-[#C98500]" aria-hidden="true" />
          {data.note}
        </p>
      </div>
    </section>
  );
}
