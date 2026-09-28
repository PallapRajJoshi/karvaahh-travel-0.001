"use client";

import { useEffect, useRef, useState } from "react";
import FormStatus from "./FormStatus";
import { useEnquirySubmit } from "./useEnquirySubmit";
import {
  ANCHORS,
  DESTINATIONS,
  EXPERIENCE_TYPES,
  type DestinationSlug,
} from "./data/hotAirBalloonData";

const SLUGS = DESTINATIONS.map((d) => d.slug) as string[];

export default function AvailabilityForm() {
  const { state, error, onSubmit } = useEnquirySubmit("availability");
  const [destination, setDestination] = useState<DestinationSlug | "">("");
  const [minDate, setMinDate] = useState<string>();
  const dateRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setMinDate(new Date().toISOString().slice(0, 10));

    // Destination-card CTAs link to "#enquire-<slug>": preselect + scroll here.
    const apply = (hash: string) => {
      const slug = hash.replace("#enquire-", "");
      if (!hash.startsWith("#enquire-") || !SLUGS.includes(slug)) return false;
      setDestination(slug as DestinationSlug);
      document.getElementById(ANCHORS.availability)?.scrollIntoView({ behavior: "smooth", block: "start" });
      window.setTimeout(() => dateRef.current?.focus({ preventScroll: true }), 450);
      return true;
    };
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement).closest<HTMLAnchorElement>('a[href^="#enquire-"]');
      if (a && apply(a.getAttribute("href") ?? "")) {
        e.preventDefault();
        history.replaceState(null, "", `#${ANCHORS.availability}`);
      }
    };
    apply(window.location.hash);
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return (
    <form className="hab-form" onSubmit={onSubmit} aria-labelledby="hab-avail-form-title" noValidate={false}>
      <h3 id="hab-avail-form-title" className="sr-only">Availability enquiry form</h3>
      <div className="hab-form__grid">
        <div className="hab-field">
          <label htmlFor="av-destination">Destination</label>
          <select
            id="av-destination"
            name="destination"
            required
            value={destination}
            onChange={(e) => setDestination(e.target.value as DestinationSlug)}
          >
            <option value="" disabled>Select a destination</option>
            {DESTINATIONS.map((d) => (
              <option key={d.slug} value={d.slug}>{d.formLabel}</option>
            ))}
          </select>
        </div>
        <div className="hab-field">
          <label htmlFor="av-date">Travel date</label>
          <input ref={dateRef} id="av-date" name="travelDate" type="date" min={minDate} required />
        </div>
        <div className="hab-field">
          <label htmlFor="av-travelers">Number of travelers</label>
          <input id="av-travelers" name="travelers" type="number" inputMode="numeric" min={1} max={50} defaultValue={2} required />
        </div>
        <div className="hab-field">
          <label htmlFor="av-type">Preferred experience</label>
          <select id="av-type" name="experience" defaultValue="Not sure">
            {EXPERIENCE_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
          </select>
        </div>
        <div className="hab-field">
          <label htmlFor="av-name">Name</label>
          <input id="av-name" name="name" type="text" autoComplete="name" required />
        </div>
        <div className="hab-field">
          <label htmlFor="av-contact">Email / phone</label>
          <input id="av-contact" name="contact" type="text" autoComplete="email" required />
        </div>
        <div className="hab-field hab-field--full">
          <label htmlFor="av-message">Message <span className="hab-field__opt">(optional)</span></label>
          <textarea id="av-message" name="message" rows={4} placeholder="Flexible dates, private flight, special occasion…" />
        </div>
      </div>
      <button type="submit" className="hab-btn hab-btn--primary hab-form__submit" disabled={state === "sending"}>
        {state === "sending" ? "Checking…" : "Check Availability"}
      </button>
      <FormStatus
        state={state}
        error={error}
        sentText="Enquiry received. We'll check current operations and reply with available options — nothing is booked yet."
      />
    </form>
  );
}
