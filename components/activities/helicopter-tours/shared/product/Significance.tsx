import Reveal from "@/components/shared/Reveal";
import type { HelicopterProductTour } from "../product-types";
import { CONTAINER, SERIF, SectionHeading } from "../ui";
import { SECTION_Y } from "./constants";

/** Spiritual / cultural context and the sacred sites of the journey. */
export default function Significance({ tour }: { tour: HelicopterProductTour }) {
  const { significance } = tour;
  if (!significance) return null;

  return (
    <section aria-labelledby="significance-title" className={`${SECTION_Y} bg-white`}>
      <div className={`${CONTAINER} grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16`}>
        <Reveal className="lg:sticky lg:top-[200px] lg:self-start">
          <SectionHeading id="significance-title" eyebrow="Spiritual Significance" title={significance.title} intro={significance.intro} />
        </Reveal>
        <ol className="grid gap-4 sm:grid-cols-2">
          {significance.items.map((s, i) => (
            <li key={s.name}>
              <Reveal delay={(i % 2) * 90} className="h-full">
                <article className="group relative h-full overflow-hidden rounded-[24px] border border-[#0B2942]/[0.08] bg-[#F8F6F1] p-7 transition-all duration-500 hover:-translate-y-1 hover:border-[#F4A300]/40 hover:bg-white hover:shadow-[0_24px_44px_-28px_rgba(11,41,66,0.4)]">
                  <span aria-hidden="true" className={`${SERIF} absolute right-6 top-4 text-[48px] leading-none text-[#F4A300]/15`}>
                    ॐ
                  </span>
                  <h3 className={`${SERIF} text-[22px] font-medium text-[#0B2942]`}>{s.name}</h3>
                  <p className="mt-3 text-[14.5px] leading-7 text-[#5B6B7B]">{s.text}</p>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
