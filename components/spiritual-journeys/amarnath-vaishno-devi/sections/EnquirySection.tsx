"use client";

import { useActionState, useEffect, useRef } from "react";
import { submitYatraEnquiry, type EnquiryState } from "../actions";
import "./EnquirySection.css";

const INITIAL: EnquiryState = { status: "idle", message: "" };

/** Tomorrow in local time, as yyyy-mm-dd, for the date input's min. */
function minDate() {
  const d = new Date();
  d.setDate(d.getDate() + 1);
  return new Date(d.getTime() - d.getTimezoneOffset() * 60000).toISOString().slice(0, 10);
}

export function EnquirySection({ contactHref = "/contact" }: { contactHref?: string }) {
  const [state, formAction, pending] = useActionState(submitYatraEnquiry, INITIAL);
  const statusRef = useRef<HTMLDivElement>(null);
  const fe = state.fieldErrors ?? {};

  useEffect(() => {
    if (state.status !== "idle") statusRef.current?.focus();
  }, [state]);

  const err = (name: keyof NonNullable<EnquiryState["fieldErrors"]>) =>
    fe[name] ? { "aria-invalid": true as const, "aria-describedby": `avd-err-${name}` } : {};

  const errorText = (name: keyof NonNullable<EnquiryState["fieldErrors"]>) =>
    fe[name] ? (
      <p id={`avd-err-${name}`} className="avd-form__error">
        {fe[name]}
      </p>
    ) : null;

  return (
    <section id="enquiry" className="avd-section avd-section--dark avd-enq" aria-labelledby="avd-enq-title">
      <div className="avd-wrap avd-enq__grid">
        <div className="avd-enq__intro">
          <h2 id="avd-enq-title" className="avd-enq__title">
            Plan your Amarnath &amp; Vaishno Devi Yatra with Karvaahh
          </h2>
          <p className="avd-enq__lede">
            Plan your pilgrimage with a customised itinerary covering sacred Darshan, Himalayan travel, accommodation
            and transport — built around your preferred route and travel needs.
          </p>
          <ul className="avd-enq__promises">
            <li>We reply with a draft plan, not an automated booking.</li>
            <li>Official registration stays with the Shrine Boards — we guide you through it.</li>
            <li>Only name, mobile and group size are required.</li>
          </ul>
        </div>

        {state.status === "success" ? (
          <div ref={statusRef} tabIndex={-1} className="avd-form__done" role="status">
            <h3>Enquiry sent</h3>
            <p>{state.message}</p>
          </div>
        ) : (
          <form action={formAction} className="avd-form">
            <div
              ref={statusRef}
              tabIndex={-1}
              role="alert"
              className={state.status === "error" ? "avd-form__summary" : "avd-sr-only"}
            >
              {state.status === "error" ? (
                <>
                  {state.message}{" "}
                  {!state.fieldErrors ? (
                    <a href={contactHref} className="avd-form__contact">
                      Contact Karvaahh
                    </a>
                  ) : null}
                </>
              ) : null}
            </div>

            {/* Honeypot */}
            <div className="avd-form__hp" aria-hidden="true">
              <label htmlFor="avd-company">Company</label>
              <input id="avd-company" name="company" type="text" tabIndex={-1} autoComplete="off" />
            </div>

            <fieldset className="avd-form__set">
              <legend>Your details</legend>
              <div className="avd-form__row">
                <div className="avd-form__field avd-form__field--wide">
                  <label htmlFor="avd-fullName">
                    Full name <span className="avd-form__req">(required)</span>
                  </label>
                  <input id="avd-fullName" name="fullName" type="text" autoComplete="name" required minLength={2} maxLength={120} {...err("fullName")} />
                  {errorText("fullName")}
                </div>
                <div className="avd-form__field">
                  <label htmlFor="avd-phone">
                    Mobile number <span className="avd-form__req">(required)</span>
                  </label>
                  <input id="avd-phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" required pattern="\+?[0-9\s\-]{7,16}" {...err("phone")} />
                  {errorText("phone")}
                </div>
                <div className="avd-form__field">
                  <label htmlFor="avd-email">Email</label>
                  <input id="avd-email" name="email" type="email" autoComplete="email" maxLength={160} {...err("email")} />
                  {errorText("email")}
                </div>
              </div>
            </fieldset>

            <fieldset className="avd-form__set">
              <legend>Your trip</legend>
              <div className="avd-form__row avd-form__row--3">
                <div className="avd-form__field">
                  <label htmlFor="avd-travellers">
                    Travellers <span className="avd-form__req">(required)</span>
                  </label>
                  <input id="avd-travellers" name="travellers" type="number" inputMode="numeric" min={1} max={99} defaultValue={2} required {...err("travellers")} />
                  {errorText("travellers")}
                </div>
                <div className="avd-form__field">
                  <label htmlFor="avd-travelDate">Preferred travel date</label>
                  <input id="avd-travelDate" name="travelDate" type="date" min={minDate()} suppressHydrationWarning />
                </div>
                <div className="avd-form__field">
                  <label htmlFor="avd-days">Number of days</label>
                  <input id="avd-days" name="days" type="number" inputMode="numeric" min={1} max={60} {...err("days")} />
                  {errorText("days")}
                </div>
              </div>
              <div className="avd-form__field">
                <label htmlFor="avd-startCity">Starting city</label>
                <input id="avd-startCity" name="startCity" type="text" autoComplete="address-level2" maxLength={80} />
              </div>
            </fieldset>

            <fieldset className="avd-form__set">
              <legend>Your pilgrimage</legend>

              <fieldset className="avd-form__choices">
                <legend>Preferred Amarnath route</legend>
                {[
                  ["pahalgam", "Pahalgam"],
                  ["baltal", "Baltal"],
                  ["guidance", "Need guidance"],
                ].map(([v, l]) => (
                  <label key={v} className="avd-form__choice">
                    <input type="radio" name="route" value={v} defaultChecked={v === "guidance"} />
                    <span>{l}</span>
                  </label>
                ))}
              </fieldset>

              <div className="avd-form__row">
                <div className="avd-form__field">
                  <label htmlFor="avd-vaishnoDevi">Vaishno Devi</label>
                  <select id="avd-vaishnoDevi" name="vaishnoDevi" defaultValue="include">
                    <option value="include">Include Vaishno Devi</option>
                    <option value="amarnath-only">Amarnath only</option>
                    <option value="guidance">Need guidance</option>
                  </select>
                </div>
                <div className="avd-form__field">
                  <label htmlFor="avd-accommodation">Accommodation preference</label>
                  <select id="avd-accommodation" name="accommodation" defaultValue="guidance">
                    <option value="standard">Standard</option>
                    <option value="comfort">Comfort</option>
                    <option value="premium">Premium</option>
                    <option value="guidance">Need guidance</option>
                  </select>
                </div>
              </div>

              <fieldset className="avd-form__choices">
                <legend>Add a Kashmir extension (Srinagar and valleys)?</legend>
                {[
                  ["yes", "Yes"],
                  ["no", "No"],
                ].map(([v, l]) => (
                  <label key={v} className="avd-form__choice">
                    <input type="radio" name="kashmirExtension" value={v} defaultChecked={v === "no"} />
                    <span>{l}</span>
                  </label>
                ))}
              </fieldset>

              <div className="avd-form__field">
                <label htmlFor="avd-special">Special requirements</label>
                <input
                  id="avd-special"
                  name="specialRequirements"
                  type="text"
                  maxLength={500}
                  aria-describedby="avd-special-hint"
                />
                <p id="avd-special-hint" className="avd-form__hint">
                  For example senior travellers, mobility needs, dietary needs.
                </p>
              </div>
              <div className="avd-form__field">
                <label htmlFor="avd-message">Message</label>
                <textarea id="avd-message" name="message" rows={4} maxLength={2000} />
              </div>
            </fieldset>

            <button type="submit" className="avd-btn avd-btn--primary avd-form__submit" disabled={pending}>
              {pending ? "Sending…" : "Plan My Yatra"}
            </button>
            <p className="avd-form__fine">
              Sending this form is an enquiry, not a booking. We&rsquo;ll use your details only to respond to it.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
