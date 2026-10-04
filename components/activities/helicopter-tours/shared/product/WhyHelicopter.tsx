import Reveal from "@/components/shared/Reveal";
import type { HelicopterProductTour } from "../product-types";
import { CONTAINER, SERIF, SectionHeading } from "../ui";
import { SECTION_Y } from "./constants";

export default function WhyHelicopter({ tour }: { tour: HelicopterProductTour }) {
  const { whyHelicopter } = tour;
  return (
    <section aria-labelledby="why-title" className={`${SECTION_Y} bg-white`}>
      <div className={CONTAINER}>
        <Reveal>
          <SectionHeading id="why-title" eyebrow="Why a Helicopter" title={whyHelicopter.title} intro={whyHelicopter.intro} center />
        </Reveal>
        <ol className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {whyHelicopter.items.map((w, i) => (
            <li key={w.title}>
              <Reveal delay={(i % 3) * 90} className="h-full">
                <div className="group relative h-full overflow-hidden rounded-[24px] border border-[#0B2942]/[0.08] bg-[#F8F6F1] p-7 transition-all duration-500 ease-out hover:-translate-y-1.5 hover:bg-[#0B2942] hover:shadow-[0_28px_50px_-28px_rgba(11,41,66,0.55)] sm:p-8">
                  <span className={`${SERIF} text-[40px] leading-none text-[#F4A300]`}>{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="mt-5 text-[18px] font-semibold leading-snug text-[#0B2942] transition-colors duration-500 group-hover:text-white">
                    {w.title}
                  </h3>
                  <p className="mt-3 text-[14.5px] leading-7 text-[#5B6B7B] transition-colors duration-500 group-hover:text-white/70">
                    {w.text}
                  </p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
