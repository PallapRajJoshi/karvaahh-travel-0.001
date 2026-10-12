"use client";

import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";
import { ANCHORS, ENQUIRY } from "../data/config";
import { regions, weddingDestinations } from "../data/destinations";
import Arrow from "../shared/Arrow";
import "./ProposalForm.css";

const guestBands = ["20–50 (Intimate)", "50–100 (Boutique)", "100–300 (Grand)", "300+ (Luxury)", "Not sure yet"];
const extras = ["Guest travel & hotels", "Pre-wedding functions", "Pandit & rituals", "Wedding + holiday", "Honeymoon"];

/**
 * A short proposal brief. No backend is assumed: the brief is handed to the
 * site's existing contact route (or an email draft if an enquiry address is
 * configured in data/config.ts). Nothing is stored by this page.
 */
export default function ProposalForm() {
  const router = useRouter();
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const brief = {
      enquiry: "destination-wedding",
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      phone: String(data.get("phone") ?? ""),
      destination: String(data.get("destination") ?? ""),
      guests: String(data.get("guests") ?? ""),
      when: String(data.get("when") ?? ""),
      extras: data.getAll("extras").map(String).join(", "),
      notes: String(data.get("notes") ?? ""),
    };

    if (ENQUIRY.email) {
      const body = [
        `Name: ${brief.name}`,
        `Email: ${brief.email}`,
        `Phone / WhatsApp: ${brief.phone}`,
        `Destination: ${brief.destination}`,
        `Guests: ${brief.guests}`,
        `Preferred dates / season: ${brief.when}`,
        `Also interested in: ${brief.extras}`,
        "",
        brief.notes,
      ].join("\n");
      window.location.href = `mailto:${ENQUIRY.email}?subject=${encodeURIComponent(
        `Destination wedding proposal — ${brief.name || "New enquiry"}`,
      )}&body=${encodeURIComponent(body)}`;
      setSent(true);
      return;
    }

    const params = new URLSearchParams(
      Object.entries(brief).filter(([, v]) => v.trim() !== ""),
    );
    router.push(`${ENQUIRY.contactHref}?${params.toString()}`);
  };

  return (
    <section id={ANCHORS.plan} className="dw-section dw-plan dw-paper" aria-labelledby="dw-plan-title">
      <div className="dw-container dw-plan__grid">
        <div className="dw-plan__lead">
          <p className="dw-eyebrow">Start planning</p>
          <h2 id="dw-plan-title" className="dw-h2">
            Tell us about <em>your celebration</em>
          </h2>
          <p className="dw-lede">
            Share a few details and a Karvaahh wedding planner will come back with destination ideas and a
            custom proposal. Not sure about everything yet? That is exactly what the first conversation is for.
          </p>
          <ol className="dw-plan__next">
            <li>
              <span>01</span> We read your brief and ask what matters most.
            </li>
            <li>
              <span>02</span> You receive destination and venue options.
            </li>
            <li>
              <span>03</span> We prepare a detailed, itemised proposal.
            </li>
          </ol>
        </div>

        <form className="dw-plan__form" onSubmit={onSubmit}>
          <div className="dw-field dw-field--half">
            <label htmlFor="dw-f-name">Your names</label>
            <input id="dw-f-name" name="name" type="text" autoComplete="name" placeholder="e.g. Aisha & Rohan" />
          </div>
          <div className="dw-field dw-field--half">
            <label htmlFor="dw-f-email">
              Email <span aria-hidden="true">*</span>
            </label>
            <input id="dw-f-email" name="email" type="email" autoComplete="email" required aria-required="true" />
          </div>
          <div className="dw-field dw-field--half">
            <label htmlFor="dw-f-phone">Phone / WhatsApp</label>
            <input id="dw-f-phone" name="phone" type="tel" autoComplete="tel" inputMode="tel" />
          </div>
          <div className="dw-field dw-field--half">
            <label htmlFor="dw-f-when">Preferred dates or season</label>
            <input id="dw-f-when" name="when" type="text" placeholder="e.g. Nov–Dec 2027" />
          </div>
          <div className="dw-field dw-field--half">
            <label htmlFor="dw-f-destination">Destination</label>
            <select id="dw-f-destination" name="destination" defaultValue="">
              <option value="">Help me choose</option>
              {regions.map((r) => (
                <optgroup key={r.id} label={r.label}>
                  {weddingDestinations
                    .filter((d) => d.region === r.id)
                    .map((d) => (
                      <option key={d.slug} value={d.name}>
                        {d.name}
                      </option>
                    ))}
                </optgroup>
              ))}
            </select>
          </div>
          <div className="dw-field dw-field--half">
            <label htmlFor="dw-f-guests">Approximate guests</label>
            <select id="dw-f-guests" name="guests" defaultValue="">
              <option value="">Select</option>
              {guestBands.map((g) => (
                <option key={g} value={g}>
                  {g}
                </option>
              ))}
            </select>
          </div>

          <fieldset className="dw-field dw-plan__extras">
            <legend>Also plan</legend>
            <div className="dw-plan__chips">
              {extras.map((x) => (
                <label key={x} className="dw-chip">
                  <input type="checkbox" name="extras" value={x} />
                  <span>{x}</span>
                </label>
              ))}
            </div>
          </fieldset>

          <div className="dw-field">
            <label htmlFor="dw-f-notes">Your story, traditions or questions</label>
            <textarea id="dw-f-notes" name="notes" rows={4} />
          </div>

          <div className="dw-plan__submit">
            <button type="submit" className="dw-btn">
              Request Wedding Proposal <Arrow />
            </button>
            <p className="dw-plan__privacy">
              We use these details only to prepare your proposal. No fixed packages, no obligation.
            </p>
          </div>

          {sent && (
            <p className="dw-plan__sent" role="status">
              Your email app should open with the brief ready to send. If it does not, write to us at{" "}
              <a href={`mailto:${ENQUIRY.email}`}>{ENQUIRY.email}</a>.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
