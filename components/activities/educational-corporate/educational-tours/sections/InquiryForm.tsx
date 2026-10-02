"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { INQUIRY, LINKS } from "../data/content";
import { Icon } from "../shared/Icon";
import { PREFILL_EVENT } from "../shared/prefill";
import { Reveal } from "../shared/Reveal";
import { INQUIRY_FIELDS, validateInquiry, type InquiryErrors, type InquiryField, type InquiryValues } from "@/lib/educationalInquiry";
import "./InquiryForm.css";

const EMPTY = Object.fromEntries(INQUIRY_FIELDS.map((k) => [k, ""])) as InquiryValues;

type Status = "idle" | "sending" | "sent" | "error";

type FieldProps = {
  name: InquiryField;
  label: string;
  required?: boolean;
  error?: string;
  children: ReactNode;
  wide?: boolean;
  hint?: string;
};

function Field({ name, label, required, error, children, wide, hint }: FieldProps) {
  return (
    <div className={`et-form__field ${wide ? "is-wide" : ""} ${error ? "has-error" : ""}`}>
      <label htmlFor={`et-f-${name}`}>
        {label}
        {required ? <span className="et-form__req" aria-hidden="true"> *</span> : null}
      </label>
      {children}
      {hint && !error ? <p className="et-form__hint">{hint}</p> : null}
      {error ? (
        <p className="et-form__error" id={`et-f-${name}-err`} role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}

export function InquiryForm() {
  const [values, setValues] = useState<InquiryValues>(EMPTY);
  const [errors, setErrors] = useState<InquiryErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [honey, setHoney] = useState("");
  const doneRef = useRef<HTMLDivElement | null>(null);

  // Receive selections from the tour builder
  useEffect(() => {
    const onPrefill = (e: Event) => {
      const summary = (e as CustomEvent<string>).detail;
      if (!summary) return;
      setValues((prev) => ({
        ...prev,
        message: prev.message.includes("Tour builder preferences")
          ? prev.message.replace(/Tour builder preferences:[\s\S]*$/, `Tour builder preferences:\n${summary}`)
          : `${prev.message ? prev.message + "\n\n" : ""}Tour builder preferences:\n${summary}`,
      }));
    };
    window.addEventListener(PREFILL_EVENT, onPrefill);
    return () => window.removeEventListener(PREFILL_EVENT, onPrefill);
  }, []);

  useEffect(() => {
    if (status === "sent") doneRef.current?.focus();
  }, [status]);

  const set = (name: InquiryField, value: string) => setValues((prev) => ({ ...prev, [name]: value }));

  const blur = (name: InquiryField) => {
    const next = validateInquiry(values);
    setErrors((prev) => ({ ...prev, [name]: next[name] }));
  };

  const common = (name: InquiryField, required = false) => ({
    id: `et-f-${name}`,
    name,
    value: values[name],
    required,
    "aria-required": required || undefined,
    "aria-invalid": errors[name] ? true : undefined,
    "aria-describedby": errors[name] ? `et-f-${name}-err` : undefined,
    onBlur: () => blur(name),
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => set(name, e.target.value),
  });

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const found = validateInquiry(values);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      const first = INQUIRY_FIELDS.find((k) => found[k]);
      if (first) document.getElementById(`et-f-${first}`)?.focus();
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch("/api/educational-inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, website: honey }),
      });
      const data = (await res.json().catch(() => ({}))) as { ok?: boolean; errors?: InquiryErrors };
      if (res.ok && data.ok) {
        setStatus("sent");
        return;
      }
      if (data.errors) setErrors(data.errors);
      setStatus("error");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="inquiry" className="et-section et-section--dark et-inq" aria-labelledby="et-inq-title">
      <div className="et-container et-inq__grid">
        <Reveal className="et-inq__intro">
          <p className="et-heading__eyebrow">{INQUIRY.eyebrow}</p>
          <h2 id="et-inq-title" className="et-heading__title">
            {INQUIRY.title}
          </h2>
          <p className="et-heading__lead">{INQUIRY.lead}</p>
          <ol className="et-inq__next">
            <li>Share your objectives and group details.</li>
            <li>We review them and may follow up with questions.</li>
            <li>You receive a customized proposal to review with your institution.</li>
          </ol>
          <p className="et-inq__alt">
            Prefer to speak with us?{" "}
            <a href={LINKS.contact} className="et-inq__link">
              Contact Karvaahh
            </a>
          </p>
        </Reveal>

        <Reveal index={1} className="et-inq__card">
          {status === "sent" ? (
            <div ref={doneRef} tabIndex={-1} className="et-inq__done">
              <span className="et-inq__done-icon">
                <Icon name="check" size={30} />
              </span>
              <h3>Thank you — your request has been sent.</h3>
              <p>Karvaahh will review your institution’s requirements and get in touch about a customized proposal.</p>
            </div>
          ) : (
            <form className="et-form" onSubmit={onSubmit} noValidate aria-describedby="et-form-status">
              <div className="et-form__grid">
                <Field name="institutionName" label="Institution Name" required error={errors.institutionName} wide>
                  <input type="text" autoComplete="organization" {...common("institutionName", true)} />
                </Field>

                <Field name="institutionType" label="Institution Type" required error={errors.institutionType}>
                  <select {...common("institutionType", true)}>
                    <option value="">Select…</option>
                    {INQUIRY.institutionTypes.map((o) => (
                      <option key={o}>{o}</option>
                    ))}
                  </select>
                </Field>

                <Field name="contactPerson" label="Contact Person" required error={errors.contactPerson}>
                  <input type="text" autoComplete="name" {...common("contactPerson", true)} />
                </Field>

                <Field name="email" label="Email" required error={errors.email}>
                  <input type="email" autoComplete="email" inputMode="email" {...common("email", true)} />
                </Field>

                <Field name="phone" label="Phone" required error={errors.phone}>
                  <input type="tel" autoComplete="tel" inputMode="tel" {...common("phone", true)} />
                </Field>

                <Field name="students" label="Number of Students" required error={errors.students}>
                  <input type="text" inputMode="numeric" placeholder="Approximate" {...common("students", true)} />
                </Field>

                <Field name="faculty" label="Number of Faculty / Teachers" error={errors.faculty}>
                  <input type="text" inputMode="numeric" {...common("faculty")} />
                </Field>

                <Field name="destination" label="Preferred Destination" error={errors.destination}>
                  <select {...common("destination")}>
                    <option value="">Select…</option>
                    {INQUIRY.destinations.map((o) => (
                      <option key={o}>{o}</option>
                    ))}
                  </select>
                </Field>

                <Field name="dates" label="Preferred Travel Dates" error={errors.dates} hint="A month or window is fine.">
                  <input type="text" placeholder="e.g. March 2027" {...common("dates")} />
                </Field>

                <Field name="duration" label="Approximate Duration" error={errors.duration}>
                  <select {...common("duration")}>
                    <option value="">Select…</option>
                    {INQUIRY.durations.map((o) => (
                      <option key={o}>{o}</option>
                    ))}
                  </select>
                </Field>

                <Field name="focus" label="Learning Focus" error={errors.focus}>
                  <select {...common("focus")}>
                    <option value="">Select…</option>
                    {INQUIRY.focuses.map((o) => (
                      <option key={o}>{o}</option>
                    ))}
                  </select>
                </Field>

                <Field name="budget" label="Budget Range" error={errors.budget}>
                  <select {...common("budget")}>
                    <option value="">Select…</option>
                    {INQUIRY.budgets.map((o) => (
                      <option key={o}>{o}</option>
                    ))}
                  </select>
                </Field>

                <Field name="requirements" label="Special Requirements" error={errors.requirements} wide hint="Accessibility, dietary or other requirements.">
                  <textarea rows={3} {...common("requirements")} />
                </Field>

                <Field name="message" label="Message" error={errors.message} wide>
                  <textarea rows={5} {...common("message")} />
                </Field>

                {/* Honeypot — hidden from people and assistive tech */}
                <div className="et-form__trap" aria-hidden="true">
                  <label htmlFor="et-f-website">Leave this field empty</label>
                  <input id="et-f-website" name="website" type="text" tabIndex={-1} autoComplete="off" value={honey} onChange={(e) => setHoney(e.target.value)} />
                </div>
              </div>

              <div id="et-form-status" aria-live="polite">
                {status === "error" ? (
                  <p className="et-form__banner" role="alert">
                    We couldn’t send your request just now. Please try again, or{" "}
                    <a href={LINKS.contact}>contact Karvaahh directly</a>.
                  </p>
                ) : null}
              </div>

              <button type="submit" className="et-btn et-btn--primary et-form__submit" disabled={status === "sending"}>
                <span>{status === "sending" ? "Sending…" : "Request Educational Tour Proposal"}</span>
                {status === "sending" ? null : <Icon name="arrow" size={18} />}
              </button>
              <p className="et-form__legal">We use these details only to respond to your request.</p>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
