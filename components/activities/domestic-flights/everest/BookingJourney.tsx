import { ArrowRight, Info } from "lucide-react";
import Reveal from "@/components/shared/Reveal";
import { OpenBookingButton } from "@/components/activities/experience/booking";
import { SECTION_Y } from "@/components/activities/experience/product/constants";
import { BTN_PRIMARY, CONTAINER, SERIF, SectionHeading } from "@/components/activities/experience/ui";
import type { BookingJourneyData } from "./types";

/** Step-by-step booking journey, from enquiry to reconfirmation. */
export default function BookingJourney({ data }: { data: BookingJourneyData }) {
  return (
    <section aria-labelledby="booking-journey-title" className={`${SECTION_Y} relative overflow-hidden bg-[#0B2942] text-white`}>
      <div aria-hidden="true" className="absolute -left-40 top-0 h-[420px] w-[420px] rounded-full bg-[#F4A300]/[0.07] blur-3xl" />
      <div className={`${CONTAINER} relative`}>
        <Reveal>
          <SectionHeading id="booking-journey-title" eyebrow="How Booking Works" title={data.title} intro={data.intro} dark />
        </Reveal>

        <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {data.steps.map((s, i) => (
            <li key={s.title}>
              <Reveal delay={(i % 3) * 90} className="h-full">
                <div className="group h-full rounded-[24px] bg-white/[0.05] p-7 ring-1 ring-white/10 transition-colors duration-500 hover:bg-white/[0.09]">
                  <span className={`${SERIF} block text-[44px] leading-none text-[#F4A300]/90 transition-transform duration-500 group-hover:-translate-y-1`}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 text-[17px] font-semibold">{s.title}</h3>
                  <p className="mt-2 text-[14px] leading-6 text-white/70">{s.text}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>

        <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="flex max-w-[640px] items-start gap-2.5 text-[13px] leading-6 text-white/60">
            <Info className="mt-1 h-4 w-4 shrink-0 text-[#F4A300]" aria-hidden="true" />
            {data.note}
          </p>
          {data.cta?.href ? (
            <a href={data.cta.href} className={`group shrink-0 ${BTN_PRIMARY}`}>
              {data.cta.label}
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
            </a>
          ) : (
            <OpenBookingButton className={`group shrink-0 ${BTN_PRIMARY}`}>
              {data.cta?.label ?? "Book Your Everest Flight"}
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
            </OpenBookingButton>
          )}
        </div>
      </div>
    </section>
  );
}
