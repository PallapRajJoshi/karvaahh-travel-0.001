"use client";

import { useMemo, useState, useSyncExternalStore } from "react";
import { AnimatePresence, motion } from "motion/react";
import { AlertTriangle, ArrowRight, BellRing, CalendarDays, ChevronDown } from "lucide-react";
import { useBooking } from "../booking";
import { formatDate } from "../format";
import type { Departure, DepartureStatus, HelicopterTour } from "../product-types";
import { CONTACT } from "../site";
import { BTN_PRIMARY, CONTAINER, SERIF, SectionHeading } from "../ui";
import { ANCHOR } from "./constants";

type Filter = DepartureStatus | "all";

type StatusStyle = { label: string; dot: string; bar: string; card: string; text: string; bookable: boolean };

const STATUS: Record<DepartureStatus, StatusStyle> = {
  open: {
    label: "Booking Open",
    dot: "bg-emerald-500",
    bar: "bg-emerald-600",
    card: "border-emerald-300 bg-emerald-50/70 hover:border-emerald-500 hover:shadow-[0_18px_36px_-22px_rgba(16,185,129,0.6)]",
    text: "text-emerald-900",
    bookable: true,
  },
  limited: {
    label: "Limited Seats",
    dot: "bg-[#F4A300]",
    bar: "bg-[#E09200]",
    card: "border-[#F4C35A] bg-[#FFF8E8] hover:border-[#F4A300] hover:shadow-[0_18px_36px_-22px_rgba(244,163,0,0.6)]",
    text: "text-[#7A4F00]",
    bookable: true,
  },
  enquire: {
    label: "Enquire",
    dot: "bg-sky-500",
    bar: "bg-[#0B2942]",
    card: "border-sky-200 bg-sky-50/60 hover:border-sky-400 hover:shadow-[0_18px_36px_-22px_rgba(14,116,144,0.5)]",
    text: "text-[#0B2942]",
    bookable: true,
  },
  "sold-out": { label: "Sold Out", dot: "bg-rose-500", bar: "bg-rose-600", card: "border-rose-200 bg-rose-50/60 opacity-75", text: "text-rose-900", bookable: false },
  unavailable: { label: "Not Available", dot: "bg-[#8A97A5]", bar: "bg-[#8A97A5]", card: "border-[#0B2942]/10 bg-[#F4F2EE] opacity-70", text: "text-[#5B6B7B]", bookable: false },
  cancelled: { label: "Cancelled", dot: "bg-[#5B6B7B]", bar: "bg-[#5B6B7B]", card: "border-[#0B2942]/10 bg-[#F4F2EE] opacity-70", text: "text-[#5B6B7B] line-through", bookable: false },
  "weather-hold": {
    label: "Weather Hold",
    dot: "bg-indigo-400",
    bar: "bg-indigo-500",
    card: "border-indigo-200 bg-indigo-50/60 opacity-80",
    text: "text-indigo-900",
    bookable: false,
  },
  closed: { label: "Booking Closed", dot: "bg-rose-500", bar: "bg-[#8A97A5]", card: "border-[#0B2942]/10 bg-[#F4F2EE] opacity-70", text: "text-[#5B6B7B]", bookable: false },
};

const ORDER: DepartureStatus[] = ["open", "limited", "enquire", "weather-hold", "sold-out", "unavailable", "cancelled", "closed"];
const PAGE = 8;

const noopSubscribe = () => () => {};
const todayIso = () => new Date().toISOString().slice(0, 10);

/**
 * Departure / sample date selector: status legend, filters, date cards and
 * "Show more". Bookable dates open the booking form prefilled with the date.
 * Sample dates are labelled SAMPLE everywhere and never shown as confirmed.
 */
export default function HeliAvailability({ tour }: { tour: Pick<HelicopterTour, "departures" | "title"> }) {
  const departures = tour.departures;
  const { open } = useBooking();
  const [chosen, setChosen] = useState<Filter | null>(null);
  const [shown, setShown] = useState(PAGE);

  // Today's date on the client only, so past dates hide even on a statically
  // generated page; the server snapshot is null to keep hydration consistent.
  const today = useSyncExternalStore(noopSubscribe, todayIso, () => null);

  const upcoming = useMemo(() => {
    const all = [...(departures?.dates ?? [])].sort((a, b) => a.date.localeCompare(b.date));
    return today ? all.filter((d) => d.date >= today) : all;
  }, [departures, today]);

  const present = ORDER.filter((s) => upcoming.some((d) => d.status === s));
  const count = (f: Filter) => (f === "all" ? upcoming.length : upcoming.filter((d) => d.status === f).length);

  if (!departures) return null;

  const sample = Boolean(departures.sample);
  const filter: Filter = chosen ?? "all";
  const visible = upcoming.filter((d) => filter === "all" || d.status === filter);
  const emptyMessage = departures.emptyMessage ?? `Hello Karvaahh, please let me know when dates for the ${tour.title} are announced.`;

  return (
    <section id="dates" aria-labelledby="departures-title" className={`${ANCHOR} bg-[#F8F6F1] py-20 sm:py-24 lg:py-28`}>
      <div className={CONTAINER}>
        <div className="rounded-[30px] bg-white p-6 ring-1 ring-[#0B2942]/[0.06] sm:p-10">
          <SectionHeading id="departures-title" eyebrow={sample ? "Sample Dates" : "Departures"} title={departures.title} intro={departures.intro} center />

          {sample && (
            <p className="mx-auto mt-6 flex max-w-[680px] items-center justify-center gap-2 rounded-full border border-[#F4A300]/40 bg-[#FFF8E8] px-5 py-2.5 text-center text-[11.5px] font-semibold uppercase tracking-[0.12em] text-[#6B5418]">
              <AlertTriangle className="h-4 w-4 shrink-0 text-[#C98500]" aria-hidden="true" />
              {departures.notice ?? "Sample placeholder dates — not confirmed availability"}
            </p>
          )}

          {upcoming.length === 0 ? (
            <div className="mx-auto mt-10 flex max-w-[640px] flex-col items-center rounded-[24px] border border-dashed border-[#0B2942]/15 bg-[#F8F6F1] px-6 py-10 text-center">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#0B2942] text-[#F4A300]">
                <CalendarDays className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className={`${SERIF} mt-5 text-[22px] font-medium text-[#0B2942]`}>{departures.emptyTitle ?? "Dates are arranged on request"}</h3>
              <p className="mt-2 max-w-[480px] text-[14.5px] leading-7 text-[#5B6B7B]">
                {departures.emptyText ?? "Share your preferred date and we will confirm availability with the operator."}
              </p>
              <a
                href={CONTACT.whatsappHref(emptyMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#0B2942] px-6 py-3 text-[14.5px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#123653] active:scale-[0.98]"
              >
                <BellRing className="h-4 w-4" aria-hidden="true" />
                {departures.emptyCta ?? "Ask for a date"}
              </a>
            </div>
          ) : (
            <>
              <ul className="mt-8 flex flex-wrap justify-center gap-x-5 gap-y-2 text-[13.5px] text-[#4A5B6C]" aria-label="Status legend">
                {present.map((s) => (
                  <li key={s} className="flex items-center gap-2">
                    <span className={`h-2.5 w-2.5 rounded-full ${STATUS[s].dot}`} aria-hidden="true" />
                    {STATUS[s].label}
                  </li>
                ))}
              </ul>

              {present.length > 1 && (
                <div role="group" aria-label="Filter dates" className="mt-6 flex flex-wrap justify-center gap-2.5">
                  {(["all", ...present] as Filter[]).map((c) => {
                    const active = filter === c;
                    return (
                      <button
                        key={c}
                        type="button"
                        aria-pressed={active}
                        onClick={() => {
                          setChosen(c);
                          setShown(PAGE);
                        }}
                        className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[13.5px] font-medium transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F4A300] ${
                          active ? "border-[#0B2942] bg-[#0B2942] text-white" : "border-[#0B2942]/15 bg-white text-[#0B2942] hover:border-[#0B2942]/40"
                        }`}
                      >
                        {c !== "all" && <span className={`h-2 w-2 rounded-full ${STATUS[c].dot}`} aria-hidden="true" />}
                        {c === "all" ? "All" : STATUS[c].label}
                        <span className={`text-[12px] ${active ? "text-white/60" : "text-[#8A97A5]"}`}>{count(c)}</span>
                      </button>
                    );
                  })}
                </div>
              )}

              {visible.length === 0 ? (
                <p className="mt-10 text-center text-[14.5px] text-[#5B6B7B]">No dates with this status right now.</p>
              ) : (
                <ul className="mt-9 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5">
                  <AnimatePresence initial={false}>
                    {visible.slice(0, shown).map((d, i) => (
                      <motion.li
                        key={d.date}
                        layout
                        initial={{ opacity: 0, y: 14 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.97 }}
                        transition={{ duration: 0.35, delay: Math.min(i, 6) * 0.04, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <DateCard d={d} sample={sample} onSelect={() => open({ date: d.date })} />
                      </motion.li>
                    ))}
                  </AnimatePresence>
                </ul>
              )}

              {visible.length > shown && (
                <button
                  type="button"
                  onClick={() => setShown((n) => n + PAGE)}
                  className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl border border-dashed border-[#0B2942]/15 py-4 text-[14.5px] font-medium text-[#0B2942] transition-colors hover:border-[#0B2942]/40 hover:bg-[#F8F6F1]"
                >
                  <CalendarDays className="h-4 w-4 text-[#C98500]" aria-hidden="true" />
                  Show more
                  <ChevronDown className="h-4 w-4" aria-hidden="true" />
                </button>
              )}

              <p className="mt-6 text-center text-[12.5px] text-[#5B6B7B]">
                {sample
                  ? "Shown for illustration only. Actual dates and seats are confirmed on enquiry and depend on weather, permits and operations."
                  : "Seats are confirmed on enquiry. Departures depend on permits, weather and operations."}
              </p>
            </>
          )}

          <div className="mt-8 flex justify-center">
            <button type="button" onClick={() => open()} className={`group ${BTN_PRIMARY}`}>
              <CalendarDays className="h-4 w-4" aria-hidden="true" />
              Check Availability
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function DateCard({ d, sample, onSelect }: { d: Departure; sample: boolean; onSelect: () => void }) {
  const s = STATUS[d.status];
  const long = formatDate(d.date, { weekday: "long", day: "numeric", month: "long", year: "numeric" });
  const inner = (
    <>
      <span className={`flex items-center justify-center gap-1.5 py-1.5 text-center text-[11px] font-semibold uppercase tracking-[0.12em] text-white ${s.bar}`}>
        {(d.status === "open" || d.status === "limited") && (
          <span aria-hidden="true" className="heli-motion relative flex h-1.5 w-1.5">
            <span className="absolute inset-0 animate-ping rounded-full bg-white/80" />
            <span className="relative h-1.5 w-1.5 rounded-full bg-white" />
          </span>
        )}
        {s.label}
      </span>
      <span className={`flex flex-col items-center px-3 pb-4 pt-3 ${s.text}`}>
        {sample && <span className="mb-1 rounded-full bg-[#0B2942] px-2 py-0.5 text-[9.5px] font-bold uppercase tracking-[0.2em] text-[#F4A300] no-underline">Sample</span>}
        <span className="text-[13px]">{formatDate(d.date, { weekday: "short" })}</span>
        <span className={`${SERIF} text-[34px] font-medium leading-tight`}>{formatDate(d.date, { day: "2-digit" })}</span>
        <span className="text-[13.5px] text-[#4A5B6C]">{formatDate(d.date, { month: "short", year: "numeric" })}</span>
        {d.note && <span className="mt-1 text-center text-[11.5px] text-[#5B6B7B]">{d.note}</span>}
        {s.bookable && (
          <span className="mt-2 inline-flex items-center gap-1 text-[12px] font-semibold text-[#C98500] opacity-0 transition-opacity group-hover:opacity-100 [@media(hover:none)]:opacity-100">
            Check <ArrowRight className="h-3 w-3" aria-hidden="true" />
          </span>
        )}
      </span>
    </>
  );
  const base = `group block h-full w-full overflow-hidden rounded-2xl border text-center transition-all duration-300 ${s.card}`;

  if (!s.bookable) {
    return (
      <div className={base} aria-label={`${long}: ${s.label}${sample ? " (sample)" : ""}`}>
        {inner}
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={onSelect}
      aria-label={`${long}: ${s.label}${sample ? " (sample date)" : ""}. Check availability`}
      className={`${base} hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F4A300]`}
    >
      {inner}
    </button>
  );
}
