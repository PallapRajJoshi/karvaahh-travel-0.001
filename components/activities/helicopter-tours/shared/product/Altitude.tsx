import { HeartPulse } from "lucide-react";
import Reveal from "@/components/shared/Reveal";
import type { HelicopterProductTour } from "../product-types";
import { CONTAINER, SectionHeading } from "../ui";
import { SECTION_Y } from "./constants";

/**
 * Altitude profile as a labelled bar ladder (single series, one hue, every
 * value printed as text, so the list doubles as its own data table).
 */
export default function Altitude({ tour }: { tour: HelicopterProductTour }) {
  const { altitude } = tour;
  const max = Math.max(...altitude.points.map((p) => p.metres));

  return (
    <section aria-labelledby="altitude-title" className={`${SECTION_Y} bg-white`}>
      <div className={`${CONTAINER} grid gap-12 lg:grid-cols-2 lg:gap-16`}>
        <div>
          <Reveal>
            <SectionHeading id="altitude-title" eyebrow="Altitude" title={altitude.title} intro={altitude.intro} />
          </Reveal>
          <Reveal delay={120}>
            <ul className="mt-8 space-y-3">
              {altitude.guidance.map((g) => (
                <li key={g} className="flex items-start gap-3 text-[15px] leading-7 text-[#4A5B6C]">
                  <span aria-hidden="true" className="mt-[11px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#F4A300]" />
                  {g}
                </li>
              ))}
            </ul>
            <p className="mt-8 flex items-start gap-3 rounded-2xl border border-[#0B2942]/10 bg-[#F8F6F1] px-5 py-4 text-[13.5px] leading-6 text-[#4A5B6C]">
              <HeartPulse className="mt-0.5 h-4 w-4 shrink-0 text-[#C98500]" aria-hidden="true" />
              {altitude.disclaimer}
            </p>
          </Reveal>
        </div>

        <Reveal delay={150} className="rounded-[28px] border border-[#0B2942]/[0.08] bg-[#F8F6F1] p-6 sm:p-8">
          <h3 className="text-[15px] font-semibold text-[#0B2942]">Altitude profile</h3>
          <p className="mt-1 text-[13px] text-[#5B6B7B]">Approximate elevations in metres above sea level</p>
          <ol className="mt-7 space-y-4">
            {altitude.points.map((p) => (
              <li key={p.place} className="grid grid-cols-[96px_minmax(0,1fr)_auto] items-center gap-3 sm:grid-cols-[140px_minmax(0,1fr)_auto]">
                <span className="text-[13.5px] font-medium leading-tight text-[#0B2942]">
                  {p.place}
                  {p.note && <span className="block text-[11.5px] font-normal text-[#8A97A5]">{p.note}</span>}
                </span>
                <span aria-hidden="true" className="block">
                  <span className="block h-3 rounded-r-[4px] bg-[#0B2942]" style={{ width: `${(p.metres / max) * 100}%` }} />
                </span>
                <span className="text-right text-[12.5px] tabular-nums text-[#4A5B6C]">{p.label}</span>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
