import { Check } from "lucide-react";
import Reveal from "@/components/shared/Reveal";
import type { HelicopterProductTour } from "../product-types";
import { CONTAINER, PageIcon, SERIF, SectionHeading } from "../ui";
import { ANCHOR, SECTION_Y } from "./constants";

export default function Preparation({ tour }: { tour: HelicopterProductTour }) {
  const { preparation } = tour;
  return (
    <section id="preparation" aria-labelledby="preparation-title" className={`${ANCHOR} ${SECTION_Y} bg-[#F8F6F1]`}>
      <div className={`${CONTAINER} grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14`}>
        <div>
          <Reveal>
            <SectionHeading id="preparation-title" eyebrow="Preparation" title={preparation.title} intro={preparation.intro} />
          </Reveal>
          <Reveal delay={120} className="mt-8 rounded-[24px] bg-[#0B2942] p-7 text-white">
            <h3 className="text-[12px] font-semibold uppercase tracking-[0.28em] text-[#F4A300]">What to Carry</h3>
            <ul className="mt-5 grid grid-cols-1 gap-3 min-[420px]:grid-cols-2">
              {preparation.carry.map((c) => (
                <li key={c} className="flex items-center gap-2.5 text-[14.5px] text-white/85">
                  <Check className="h-4 w-4 shrink-0 text-[#F4A300]" aria-hidden="true" />
                  {c}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <ul className="grid gap-4 sm:grid-cols-2">
          {preparation.topics.map((t, i) => (
            <li key={t.title}>
              <Reveal delay={(i % 2) * 100} className="h-full">
                <article className="group h-full rounded-[24px] bg-white p-7 ring-1 ring-[#0B2942]/[0.06] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_44px_-26px_rgba(11,41,66,0.45)]">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#F4A300]/12 text-[#C98500] transition-colors duration-500 group-hover:bg-[#F4A300] group-hover:text-[#0C1D30]">
                    <PageIcon name={t.icon} className="h-5 w-5" />
                  </span>
                  <h3 className={`${SERIF} mt-5 text-[21px] font-medium text-[#0B2942]`}>{t.title}</h3>
                  <p className="mt-3 text-[14.5px] leading-7 text-[#5B6B7B]">{t.text}</p>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
