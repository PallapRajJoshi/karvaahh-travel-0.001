import { ShieldCheck } from "lucide-react";
import Reveal from "@/components/shared/Reveal";
import type { HelicopterProductTour } from "../product-types";
import { CONTAINER, SectionHeading } from "../ui";
import { ANCHOR, SECTION_Y } from "./constants";

export default function Safety({ tour }: { tour: HelicopterProductTour }) {
  const { safety } = tour;
  return (
    <section
      id="safety"
      aria-labelledby="safety-title"
      className={`${ANCHOR} ${SECTION_Y} relative isolate overflow-clip bg-[#0B2942] text-white`}
    >
      <div
        aria-hidden="true"
        className="absolute -right-40 -top-40 -z-10 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(244,163,0,0.14)_0%,transparent_65%)]"
      />
      <div className={`${CONTAINER} grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16`}>
        <Reveal className="lg:sticky lg:top-[200px] lg:self-start">
          <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F4A300] text-[#0C1D30]">
            <ShieldCheck className="h-7 w-7" aria-hidden="true" />
          </span>
          <div className="mt-6">
            <SectionHeading id="safety-title" eyebrow="Safety & Weather" title={safety.title} intro={safety.intro} dark />
          </div>
        </Reveal>

        <ol className="grid gap-3.5 sm:grid-cols-2">
          {safety.points.map((p, i) => (
            <li key={p.title} className={i === safety.points.length - 1 && safety.points.length % 2 === 1 ? "sm:col-span-2" : ""}>
              <Reveal delay={(i % 2) * 90} className="h-full">
                <div className="h-full rounded-[22px] border border-white/10 bg-white/[0.05] p-6 transition-colors duration-500 hover:border-[#F4A300]/40 hover:bg-white/[0.08]">
                  <p className="text-[12px] font-semibold tracking-[0.2em] text-[#F4A300]">{String(i + 1).padStart(2, "0")}</p>
                  <h3 className="mt-2 text-[16.5px] font-semibold text-white">{p.title}</h3>
                  <p className="mt-2 text-[14.5px] leading-6 text-white/65">{p.text}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
