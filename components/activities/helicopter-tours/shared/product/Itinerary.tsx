import { ChevronDown, Clock } from "lucide-react";
import Reveal from "@/components/shared/Reveal";
import type { HelicopterProductTour } from "../product-types";
import { CONTAINER, SERIF, SectionHeading } from "../ui";
import "../heli.css";
import { ANCHOR, SECTION_Y } from "./constants";
import DayWise from "./DayWise";
import ItineraryTabs from "./ItineraryTabs";

/**
 * Itinerary options (interactive tabs), followed by a day-by-day plan for
 * multi-day journeys and/or an hour-by-hour timeline for same-day tours.
 */
export default function Itinerary({ tour }: { tour: HelicopterProductTour }) {
  const { itinerary, timeline, dayWise } = tour;
  return (
    <section id="itinerary" aria-labelledby="itinerary-title" className={`${ANCHOR} ${SECTION_Y} bg-white`}>
      <div className={CONTAINER}>
        <Reveal>
          <SectionHeading id="itinerary-title" eyebrow="Itinerary" title={itinerary.title} intro={itinerary.intro} />
        </Reveal>

        <ItineraryTabs options={itinerary.options} />

        {dayWise && <DayWise dayWise={dayWise} />}

        {timeline && (
        <div className="mt-20 grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
          <Reveal className="lg:sticky lg:top-[200px] lg:self-start">
            <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.3em] text-[#C98500]">
              <Clock className="h-3.5 w-3.5" aria-hidden="true" /> Typical timing
            </p>
            <h3 id="timeline-title" className={`${SERIF} mt-3 text-[28px] font-medium leading-tight text-[#0B2942] sm:text-[34px]`}>{timeline.title}</h3>
            <p className="mt-4 rounded-2xl bg-[#F8F6F1] px-5 py-4 text-[14px] leading-6 text-[#4A5B6C]">{timeline.note}</p>
          </Reveal>

          <ol className="relative">
            <span aria-hidden="true" className="absolute bottom-6 left-[19px] top-6 w-px bg-gradient-to-b from-[#F4A300] via-[#F4A300]/40 to-[#0B2942]/10" />
            {timeline.blocks.map((b, i) => (
              <li key={b.time} className="relative pb-4 pl-14 last:pb-0">
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full border-4 border-white bg-[#0B2942] text-[11px] font-semibold text-[#F4A300] shadow-[0_6px_16px_-6px_rgba(11,41,66,0.5)]"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <Reveal delay={i * 70}>
                  <details className="heli-details group rounded-2xl border border-[#0B2942]/[0.08] bg-[#F8F6F1] px-5 transition-colors hover:border-[#F4A300]/40 open:bg-white open:shadow-[0_18px_40px_-28px_rgba(11,41,66,0.45)]">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 [&::-webkit-details-marker]:hidden">
                      <span>
                        <span className="block text-[12.5px] font-semibold tracking-wide text-[#C98500]">{b.time}</span>
                        <span className="mt-0.5 block text-[15.5px] font-semibold text-[#0B2942]">{b.title}</span>
                      </span>
                      <ChevronDown className="h-4 w-4 shrink-0 text-[#0B2942] transition-transform duration-300 group-open:rotate-180" aria-hidden="true" />
                    </summary>
                    <p className="pb-5 text-[14.5px] leading-6 text-[#5B6B7B]">{b.text}</p>
                  </details>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
        )}
      </div>
    </section>
  );
}
