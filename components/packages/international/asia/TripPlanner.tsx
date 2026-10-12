"use client";

import { useId, useRef, useState } from "react";
import { CalendarDays, MapPin, Search, Sparkles, Users } from "lucide-react";
import { travelStyles, type TravelStyleId } from "@/data/travel-styles";
import { scrollToId, setExplorer } from "@/lib/asia/explorer";

const QUICK_PICKS = ["Thailand", "Bali", "Singapore", "Dubai", "Maldives", "Japan", "Vietnam", "Georgia", "Bhutan", "Sri Lanka"];

const TRAVELERS = ["1 traveller", "2 travellers", "3 travellers", "4 travellers", "5 travellers", "6–9 travellers", "Group (10+)"];

/**
 * Frontend-only planner. "Find My Journey" applies the destination + style to the
 * destination explorer and keeps date/travellers for the custom trip builder.
 */
export default function TripPlanner({ places }: { places: string[] }) {
  const uid = useId();
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [style, setStyle] = useState<TravelStyleId | "all">("all");
  const [date, setDate] = useState("");
  const [travelers, setTravelers] = useState("");
  const boxRef = useRef<HTMLDivElement>(null);

  const q = query.trim().toLowerCase();
  const suggestions = q ? places.filter((p) => p.toLowerCase().includes(q)).slice(0, 8) : QUICK_PICKS;

  const pick = (value: string) => {
    setQuery(value);
    setOpen(false);
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    // "Bali" is a place inside Indonesia; matching on cities handles that.
    setExplorer({ query: query.trim(), style, region: "all", plan: { date, travelers } });
    scrollToId("destinations");
  };

  return (
    <div className="pkg-container asia-planner-wrap">
      <form className="asia-planner" onSubmit={submit} aria-label="Plan your Asia trip" role="search">
        <div
          className="asia-planner__field asia-planner__field--dest"
          ref={boxRef}
          onBlur={(e) => {
            if (!boxRef.current?.contains(e.relatedTarget as Node)) setOpen(false);
          }}
        >
          <label htmlFor={`${uid}-dest`} className="asia-planner__label">
            <MapPin size={15} aria-hidden="true" /> Where do you want to go?
          </label>
          <input
            id={`${uid}-dest`}
            className="asia-planner__control"
            type="text"
            autoComplete="off"
            placeholder="Country or city"
            value={query}
            role="combobox"
            aria-expanded={open && suggestions.length > 0}
            aria-controls={`${uid}-list`}
            aria-autocomplete="list"
            onChange={(e) => {
              setQuery(e.target.value);
              setOpen(true);
            }}
            onFocus={() => setOpen(true)}
            onKeyDown={(e) => {
              if (e.key === "Escape") setOpen(false);
              if (e.key === "ArrowDown") {
                e.preventDefault();
                (boxRef.current?.querySelector(".asia-planner__opt") as HTMLButtonElement | null)?.focus();
              }
            }}
          />
          {open && suggestions.length > 0 && (
            <div id={`${uid}-list`} className="asia-planner__list" role="listbox" aria-label={q ? "Matching destinations" : "Popular destinations"}>
              <p className="asia-planner__list-h">{q ? "Matches" : "Popular in Asia"}</p>
              {suggestions.map((s) => (
                <button
                  key={s}
                  type="button"
                  role="option"
                  aria-selected={query === s}
                  className="asia-planner__opt"
                  onClick={() => pick(s)}
                  onKeyDown={(e) => {
                    const el = e.currentTarget;
                    if (e.key === "ArrowDown") { e.preventDefault(); (el.nextElementSibling as HTMLElement | null)?.focus(); }
                    if (e.key === "ArrowUp") { e.preventDefault(); ((el.previousElementSibling as HTMLElement | null)?.matches("button") ? el.previousElementSibling as HTMLElement : document.getElementById(`${uid}-dest`))?.focus(); }
                    if (e.key === "Escape") { setOpen(false); document.getElementById(`${uid}-dest`)?.focus(); }
                  }}
                >
                  <MapPin size={14} aria-hidden="true" /> {s}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="asia-planner__field">
          <label htmlFor={`${uid}-style`} className="asia-planner__label">
            <Sparkles size={15} aria-hidden="true" /> Travel Style
          </label>
          <select
            id={`${uid}-style`}
            className="asia-planner__control"
            value={style}
            onChange={(e) => setStyle(e.target.value as TravelStyleId | "all")}
          >
            <option value="all">Any style</option>
            {travelStyles.map((s) => (
              <option key={s.id} value={s.id}>{s.label}</option>
            ))}
          </select>
        </div>

        <div className="asia-planner__field">
          <label htmlFor={`${uid}-date`} className="asia-planner__label">
            <CalendarDays size={15} aria-hidden="true" /> Travel Date
          </label>
          <input id={`${uid}-date`} className="asia-planner__control" type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        </div>

        <div className="asia-planner__field">
          <label htmlFor={`${uid}-pax`} className="asia-planner__label">
            <Users size={15} aria-hidden="true" /> Travelers
          </label>
          <select id={`${uid}-pax`} className="asia-planner__control" value={travelers} onChange={(e) => setTravelers(e.target.value)}>
            <option value="">Select</option>
            {TRAVELERS.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>

        <button type="submit" className="pkg-btn pkg-btn--lg asia-btn--gold asia-planner__submit">
          <Search size={18} aria-hidden="true" /> Find My Journey
        </button>
      </form>
    </div>
  );
}
