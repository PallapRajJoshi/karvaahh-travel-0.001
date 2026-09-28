"use client";

import FormStatus from "./FormStatus";
import { useEnquirySubmit } from "./useEnquirySubmit";
import { DESTINATIONS } from "./data/hotAirBalloonData";

export default function NotifyForm() {
  const { state, error, onSubmit } = useEnquirySubmit("notify");
  return (
    <form className="hab-form hab-form--compact" onSubmit={onSubmit} aria-labelledby="hab-notify-title">
      <div className="hab-form__grid hab-form__grid--single">
        <div className="hab-field">
          <label htmlFor="nt-name">Name</label>
          <input id="nt-name" name="name" type="text" autoComplete="name" required />
        </div>
        <div className="hab-field">
          <label htmlFor="nt-email">Email</label>
          <input id="nt-email" name="email" type="email" autoComplete="email" required />
        </div>
        <div className="hab-field">
          <label htmlFor="nt-destination">Destination</label>
          <select id="nt-destination" name="destination" required defaultValue="">
            <option value="" disabled>Select a destination</option>
            {DESTINATIONS.map((d) => <option key={d.slug} value={d.slug}>{d.formLabel}</option>)}
          </select>
        </div>
        <div className="hab-field">
          <label htmlFor="nt-month">Preferred travel month</label>
          <input id="nt-month" name="travelMonth" type="month" required />
        </div>
      </div>
      <button type="submit" className="hab-btn hab-btn--dark hab-form__submit" disabled={state === "sending"}>
        {state === "sending" ? "Sending…" : "Notify Me When Flights Resume"}
      </button>
      <p className="hab-form__privacy">
        Your details are used only for responding to your enquiry and availability request.
      </p>
      <FormStatus
        state={state}
        error={error}
        sentText="Request received. We'll get in touch when we find a suitable operating date for your destination."
      />
    </form>
  );
}
