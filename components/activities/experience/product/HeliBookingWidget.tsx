"use client";

import { useState, type ComponentType } from "react";
import { AnimatePresence, motion } from "motion/react";
import { AlertTriangle, CalendarDays, ChevronDown, Clock, MapPin, Navigation, Search, Users } from "lucide-react";
import { useBooking } from "../booking";
import { longDate } from "../format";
import { HelicopterIcon } from "../ui";

type Field = { icon: ComponentType<{ className?: string }>; label: string; value: string };

/** Floating glass booking widget under the hero; a compact expandable panel on mobile. */
export default function HeliBookingWidget() {
  const { open, booking } = useBooking();
  const [expanded, setExpanded] = useState(false);
  if (!booking) return null;

  const { defaults } = booking;
  const date = defaults.date ? longDate(defaults.date) : "Choose your date";
  const fields: Field[] = [
    { icon: HelicopterIcon, label: booking.labels.tourType, value: defaults.tourType },
    { icon: CalendarDays, label: booking.sample ? "Sample date" : "Travel date", value: date },
    { icon: Users, label: "Travellers", value: defaults.travelers },
    { icon: Navigation, label: booking.labels.departure, value: defaults.departure },
    booking.duration
      ? { icon: Clock, label: "Duration", value: booking.duration }
      : { icon: MapPin, label: "Destination", value: booking.destination },
  ];

  return (
    <div id="booking-bar" className="relative z-20 -mt-14 scroll-mt-[160px] px-5 sm:px-8 lg:-mt-16 lg:px-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto max-w-[1280px]"
      >
        <div className="heli-motion rounded-[26px] border border-white/60 bg-white/80 p-3 shadow-[0_30px_70px_-30px_rgba(7,20,33,0.55)] backdrop-blur-xl lg:animate-[heliFloat_6s_ease-in-out_infinite]">
          {/* Mobile header */}
          <button
            type="button"
            onClick={() => setExpanded((e) => !e)}
            aria-expanded={expanded}
            aria-controls="booking-fields"
            className="flex w-full items-center justify-between gap-3 rounded-2xl px-3 py-2 text-left lg:hidden"
          >
            <span className="min-w-0">
              <span className="block text-[11px] font-semibold uppercase tracking-[0.22em] text-[#C98500]">Plan your flight</span>
              <span className="block truncate text-[15px] font-semibold text-[#0B2942]">
                {date} · {defaults.travelers}
              </span>
            </span>
            <ChevronDown className={`h-5 w-5 shrink-0 text-[#0B2942] transition-transform ${expanded ? "rotate-180" : ""}`} aria-hidden="true" />
          </button>

          <AnimatePresence initial={false}>
            {expanded && (
              <motion.div
                key="m"
                id="booking-fields"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden lg:hidden"
              >
                <Fields fields={fields} onOpen={() => open()} />
              </motion.div>
            )}
          </AnimatePresence>

          <div className="hidden lg:block">
            <Fields fields={fields} onOpen={() => open()} />
          </div>
        </div>
        {booking.sample && (
          <p className="mt-3 flex items-center justify-center gap-2 text-center text-[11.5px] font-semibold uppercase tracking-[0.14em] text-[#8A6A1F]">
            <AlertTriangle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
            {booking.sampleNotice}
          </p>
        )}
      </motion.div>
    </div>
  );
}

function Fields({ fields, onOpen }: { fields: Field[]; onOpen: () => void }) {
  return (
    <div className="grid gap-1 pt-2 lg:grid-cols-[repeat(5,minmax(0,1fr))_auto] lg:items-center lg:pt-0">
      {fields.map((f) => (
        <button
          key={f.label}
          type="button"
          onClick={onOpen}
          className="group flex min-w-0 items-center gap-3 rounded-2xl px-3 py-3 text-left transition-colors hover:bg-[#F8F6F1] lg:border-r lg:border-[#0B2942]/10 xl:px-4"
        >
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0B2942] text-[#F4A300] transition-transform group-hover:scale-105">
            <f.icon className="h-[18px] w-[18px]" />
          </span>
          <span className="min-w-0">
            <span className="block truncate text-[10.5px] font-semibold uppercase tracking-[0.18em] text-[#8A97A5]">{f.label}</span>
            <span className="block truncate text-[14.5px] font-semibold text-[#0B2942]">{f.value}</span>
          </span>
        </button>
      ))}
      <button
        type="button"
        onClick={onOpen}
        className="group mt-1 inline-flex items-center justify-center gap-2 rounded-2xl bg-[#F4A300] px-6 py-4 text-[15px] font-semibold text-[#0C1D30] shadow-[0_10px_24px_-10px_rgba(244,163,0,0.7)] transition-all hover:bg-[#FFB524] active:scale-[0.98] lg:ml-2 lg:mt-0"
      >
        <Search className="h-4 w-4" aria-hidden="true" />
        Check Availability
      </button>
    </div>
  );
}
