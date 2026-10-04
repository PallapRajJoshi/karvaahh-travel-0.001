import Reveal from "@/components/shared/Reveal";
import type { HelicopterProductTour } from "../product-types";
import type { IconName } from "../types";
import { CONTAINER, PageIcon, SERIF, SectionHeading } from "../ui";
import { SECTION_Y } from "./constants";

const DEFAULT_ICONS: Record<string, IconName> = { Spring: "sun", Autumn: "leaf", Winter: "snow", Monsoon: "rain" };

export default function Seasons({ tour }: { tour: HelicopterProductTour }) {
  const { seasons } = tour;
  return (
    <section aria-labelledby="seasons-title" className={`${SECTION_Y} bg-[#F8F6F1]`}>
      <div className={CONTAINER}>
        <Reveal>
          <SectionHeading id="seasons-title" eyebrow="Best Time" title={seasons.title} intro={seasons.intro} />
        </Reveal>
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {seasons.items.map((s, i) => (
            <li key={s.name}>
              <Reveal delay={i * 90} className="h-full">
                <article className="group flex h-full flex-col rounded-[24px] bg-white p-7 ring-1 ring-[#0B2942]/[0.06] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_44px_-26px_rgba(11,41,66,0.45)]">
                  <div className="flex items-center justify-between gap-3">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#0B2942] text-[#F4A300]">
                      <PageIcon name={s.icon ?? DEFAULT_ICONS[s.name] ?? "sun"} className="h-5 w-5" />
                    </span>
                    <span className="rounded-full bg-[#F8F6F1] px-3 py-1 text-right text-[11.5px] font-medium text-[#4A5B6C]">{s.rating}</span>
                  </div>
                  <h3 className={`${SERIF} mt-5 text-[24px] font-medium text-[#0B2942]`}>{s.name}</h3>
                  <p className="text-[13px] font-semibold uppercase tracking-[0.2em] text-[#C98500]">{s.months}</p>
                  <p className="mt-3 text-[14.5px] leading-7 text-[#5B6B7B]">{s.text}</p>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-[13px] text-[#5B6B7B]">{seasons.note}</p>
      </div>
    </section>
  );
}
