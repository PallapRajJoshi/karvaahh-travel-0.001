import Reveal from "@/components/shared/Reveal";
import type { HelicopterProductTour } from "../product-types";
import { CONTAINER, PageIcon, SectionHeading } from "../ui";
import { SECTION_Y } from "./constants";

export default function TravelerTypes({ tour }: { tour: HelicopterProductTour }) {
  const { travelerTypes } = tour;
  return (
    <section aria-labelledby="travellers-title" className={`${SECTION_Y} bg-white`}>
      <div className={CONTAINER}>
        <Reveal>
          <SectionHeading id="travellers-title" eyebrow="Who It's For" title={travelerTypes.title} intro={travelerTypes.intro} center />
        </Reveal>
        <ul className="mt-12 grid gap-4 min-[480px]:grid-cols-2 lg:grid-cols-4">
          {travelerTypes.items.map((t, i) => (
            <li key={t.title}>
              <Reveal delay={(i % 4) * 70} className="h-full">
                <article className="group h-full rounded-[22px] border border-[#0B2942]/[0.08] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-[#F4A300]/40 hover:shadow-[0_22px_40px_-26px_rgba(11,41,66,0.4)]">
                  <PageIcon name={t.icon} className="h-6 w-6 text-[#C98500] transition-transform duration-500 group-hover:scale-110" />
                  <h3 className="mt-4 text-[16px] font-semibold text-[#0B2942]">{t.title}</h3>
                  <p className="mt-2 text-[14px] leading-6 text-[#5B6B7B]">{t.text}</p>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
