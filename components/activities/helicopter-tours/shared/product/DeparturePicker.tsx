"use client";

import { useMemo, useState, useSyncExternalStore } from "react";
import { AnimatePresence, motion } from "motion/react";
import { BellRing, CalendarDays, ChevronDown } from "lucide-react";
import type { Departure, DepartureStatus, HelicopterProductTour } from "../product-types";
import { CONTACT } from "../site";
import { CONTAINER, SERIF, SectionHeading } from "../ui";

type Filter = DepartureStatus | "all";

const STATUS: Record<DepartureStatus, { label: string; badge: string; dot: string; card: string; text: string }> = {
  open: {
    label: "Booking Open",
    badge: "Available",
    dot: "bg-emerald-500",
    card: "border-emerald-300 bg-emerald-50/70 hover:border-emerald-500 hover:shadow-[0_18px_36px_-22px_rgba(16,185,129,0.6)]",
    text: "text-emerald-800",
  },
  limited: {
    label: "Limited Seats",
    badge: "Few seats left",
    dot: "bg-[#F4A300]",
    card: "border-[#F4C35A] bg-[#FFF8E8] hover:border-[#F4A300] hover:shadow-[0_18px_36px_-22px_rgba(244,163,0,0.6)]",
    text: "text-[#8A5A00]",
  },
  closed: {
    label: "Booking Closed",
    badge: "Closed",
    dot: "bg-rose-500",
    card: "border-[#0B2942]/10 bg-[#F4F2EE] opacity-70",
    text: "text-[#5B6B7B]",
  },
};

const BADGE_BG: Record<DepartureStatus, string> = {
  open: "bg-emerald-600",
  limited: "bg-[#E09200]",
  closed: "bg-[#8A97A5]",
};

const PAGE = 8;

const noopSubscribe = () => () => {};
const todayIso = () => new Date().toISOString().slice(0, 10);

/** Parse "YYYY-MM-DD" as a calendar date (UTC) so it never shifts by timezone. */
function parts(iso: string) {
  const d = new Date(`${iso}T00:00:00Z`);
  const fmt = (o: Intl.DateTimeFormatOptions) => d.toLocaleDateString("en-IN", { timeZone: "UTC", ...o });
  return { weekday: fmt({ weekday: "short" }), day: fmt({ day: "numeric" }), monthYear: fmt({ month: "short", year: "numeric" }), long: fmt({ weekday: "long", day: "numeric", month: "long", year: "numeric" }) };
}

/**
 * Departure date picker: status legend, filter chips, date cards and
 * "Show more". Open and limited dates start a WhatsApp enquiry for that date.
 */
export default function DeparturePicker({ tour }: { tour: HelicopterProductTour }) {
  const departures = tour.departures;
  // null = the visitor hasn't picked a filter yet (see the default below).
  const [chosen, setChosen] = useState<Filter | null>(null);
  const [shown, setShown] = useState(PAGE);

  // Today's date on the client only, so past dates hide even on a statically
  // generated page; the server snapshot is null to keep hydration consistent.
  const today = useSyncExternalStore(noopSubscribe, todayIso, () => null);

  const upcoming = useMemo(() => {
    const all = [...(departures?.dates ?? [])].sort((a, b) => a.date.localeCompare(b.date));
    return today ? all.filter((d) => d.date >= today) : all;
  }, [departures, today]);

  const counts = useMemo(
    () => ({
      all: upcoming.length,
      open: upcoming.filter((d) => d.status === "open").length,
      limited: upcoming.filter((d) => d.status === "limited").length,
      closed: upcoming.filter((d) => d.status === "closed").length,
    }),
    [upcoming],
  );

  // Default to "Booking Open" when such dates exist, like a booking calendar.
  const filter: Filter = chosen ?? (counts.open > 0 ? "open" : "all");

  if (!departures) return null;

  const visible = upcoming.filter((d) => filter === "all" || d.status === filter);
  const chips: Filter[] = ["open", "limited", "closed", "all"];

  return (
    <section aria-labelledby="departures-title" className="bg-[#F8F6F1] pb-16 sm:pb-20">
      <div className={CONTAINER}>
        <div className="rounded-[30px] bg-white p-6 ring-1 ring-[#0B2942]/[0.06] sm:p-10">
          <SectionHeading id="departures-title" eyebrow="Departures" title={departures.title} intro={departures.intro} center />

          {upcoming.length === 0 ? (
            <div className="mx-auto mt-10 flex max-w-[640px] flex-col items-center rounded-[24px] border border-dashed border-[#0B2942]/15 bg-[#F8F6F1] px-6 py-10 text-center">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#0B2942] text-[#F4A300]">
                <CalendarDays className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className={`${SERIF} mt-5 text-[22px] font-medium text-[#0B2942]`}>{departures.emptyTitle}</h3>
              <p className="mt-2 max-w-[480px] text-[14.5px] leading-7 text-[#5B6B7B]">{departures.emptyText}</p>
              <a
                href={CONTACT.whatsappHref(departures.emptyMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#0B2942] px-6 py-3 text-[14.5px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#123653] active:scale-[0.98]"
              >
                <BellRing className="h-4 w-4" aria-hidden="true" />
                {departures.emptyCta}
              </a>
            </div>
          ) : (
            <>
              {/* Legend */}
              <ul className="mt-8 flex flex-wrap justify-center gap-x-5 gap-y-2 text-[13.5px] text-[#4A5B6C]" aria-label="Status legend">
                {(Object.keys(STATUS) as DepartureStatus[]).map((s) => (
                  <li key={s} className="flex items-center gap-2">
                    <span className={`h-2.5 w-2.5 rounded-full ${STATUS[s].dot}`} aria-hidden="true" />
                    {STATUS[s].label}
                  </li>
                ))}
              </ul>

              {/* Filters */}
              <div role="group" aria-label="Filter departures" className="mt-6 flex flex-wrap justify-center gap-2.5">
                {chips.map((c) => {
                  const active = filter === c;
                  const label = c === "all" ? "All" : STATUS[c].label;
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
                      {label}
                      <span className={`text-[12px] ${active ? "text-white/60" : "text-[#8A97A5]"}`}>{counts[c]}</span>
                    </button>
                  );
                })}
              </div>

              {/* Cards */}
              {visible.length === 0 ? (
                <p className="mt-10 text-center text-[14.5px] text-[#5B6B7B]">No departures with this status right now.</p>
              ) : (
                <ul className="mt-9 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
                  <AnimatePresence initial={false}>
                    {visible.slice(0, shown).map((d) => (
                      <motion.li
                        key={d.date}
                        layout
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.97 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <DateCard d={d} tourTitle={tour.title} />
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
                Seats are confirmed on enquiry. Departures depend on permits, weather and operations.
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

function DateCard({ d, tourTitle }: { d: Departure; tourTitle: string }) {
  const s = STATUS[d.status];
  const p = parts(d.date);
  const inner = (
    <>
      <span className={`block py-1.5 text-center text-[12px] font-semibold text-white ${BADGE_BG[d.status]}`}>{s.badge}</span>
      <span className={`flex flex-col items-center px-3 pb-4 pt-3 ${s.text}`}>
        <span className="text-[14px]">{p.weekday}</span>
        <span className="text-[30px] font-bold leading-tight">{p.day}</span>
        <span className="text-[14px] text-[#4A5B6C]">{p.monthYear}</span>
        {d.note && <span className="mt-1 text-[11.5px] text-[#5B6B7B]">{d.note}</span>}
      </span>
    </>
  );
  const base = `block h-full overflow-hidden rounded-2xl border transition-all duration-300 ${s.card}`;

  if (d.status === "closed") {
    return (
      <div className={base} aria-label={`${p.long}: booking closed`}>
        {inner}
      </div>
    );
  }

  return (
    <a
      href={CONTACT.whatsappHref(`Hello Karvaahh, I'd like to book the ${tourTitle} departing ${p.long}. Please confirm seat availability.`)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${p.long}: ${s.badge}. Enquire on WhatsApp`}
      className={`${base} hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F4A300]`}
    >
      {inner}
    </a>
  );
}
