import Reveal from "@/components/shared/Reveal";
import type { HelicopterProductTour } from "../product-types";
import { CONTAINER, PageIcon } from "../ui";

/** Product specification panel directly under the tour navigation. */
export default function QuickFacts({ tour }: { tour: HelicopterProductTour }) {
  return (
    <section aria-labelledby="facts-title" className="bg-[#F8F6F1] pb-4 pt-12 sm:pt-16">
      <div className={CONTAINER}>
        <Reveal className="overflow-hidden rounded-[28px] border border-[#0B2942]/[0.08] bg-white shadow-[0_24px_60px_-40px_rgba(11,41,66,0.45)]">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#0B2942]/[0.08] px-6 py-5 sm:px-8">
            <h2 id="facts-title" className="text-[13px] font-semibold uppercase tracking-[0.28em] text-[#C98500]">
              Tour at a Glance
            </h2>
            <p className="text-[12.5px] text-[#5B6B7B]">Subject to weather and operational conditions</p>
          </div>
          <dl className="grid grid-cols-1 gap-px bg-[#0B2942]/[0.08] min-[420px]:grid-cols-2 lg:grid-cols-4">
            {tour.quickFacts.map((f) => (
              <div
                key={f.label}
                className="group flex gap-3.5 bg-white p-5 transition-colors duration-300 hover:bg-[#F8F6F1] sm:p-6"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0B2942] text-[#F4A300] transition-transform duration-300 group-hover:scale-105">
                  <PageIcon name={f.icon} className="h-[18px] w-[18px]" />
                </span>
                <div className="min-w-0">
                  <dt className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#8A97A5]">{f.label}</dt>
                  <dd className="mt-1 text-[15px] font-semibold leading-snug text-[#0B2942]">{f.value}</dd>
                  {f.note && <dd className="mt-1 text-[12.5px] leading-5 text-[#5B6B7B]">{f.note}</dd>}
                </div>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
