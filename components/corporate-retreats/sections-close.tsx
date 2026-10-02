"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  CONTACT, destinationOptions, faqs, finalCta, gallery, inquiry, retreatTypes, sectionIds, testimonials, type ImageRef,
} from "@/content/corporate-retreats";
import { submitCorporateInquiry } from "@/lib/submit-corporate-inquiry";
import { Icon } from "./icons";
import { useRetreat } from "./retreat-context";
import { CtaLink, EASE, LinkCta, Photo, Reveal, Section, SectionHeader } from "./ui";

/* ------------------------------------------------------------------ */
/* Gallery: masonry + accessible lightbox                               */
/* ------------------------------------------------------------------ */

const ratios = ["aspect-[4/5]", "aspect-[4/3]", "aspect-square", "aspect-[3/4]", "aspect-[16/10]"];

export function CorporateGallery() {
  const reduce = useReducedMotion();
  const real = gallery.items.filter((i) => i.src);
  const items: ImageRef[] = real.length ? real : gallery.items;
  // Never show illustrated placeholders as a "gallery" on the live site (checked after hooks).
  const hidden = real.length === 0 && process.env.NODE_ENV === "production";

  const [open, setOpen] = useState<number | null>(null);
  const trigger = useRef<HTMLElement | null>(null);
  const closeBtn = useRef<HTMLButtonElement>(null);

  const close = useCallback(() => {
    setOpen(null);
    trigger.current?.focus();
  }, []);
  const step = useCallback((d: number) => setOpen((i) => (i === null ? i : (i + d + items.length) % items.length)), [items.length]);

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") step(1);
      else if (e.key === "ArrowLeft") step(-1);
      else if (e.key === "Tab") {
        // keep focus inside the dialog (three focusable controls)
        const f = Array.from(document.querySelectorAll<HTMLElement>("#gallery-dialog button"));
        if (!f.length) return;
        const first = f[0], last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeBtn.current?.focus();
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = prev; };
  }, [open, close, step]);

  if (hidden) return null;

  return (
    <Section tone="ivory" labelledBy="gallery-h">
      <SectionHeader id="gallery-h" title={gallery.heading} sub={gallery.sub} />
      <ul className="columns-2 gap-4 lg:columns-3 [&>li]:mb-4">
        {items.map((img, i) => (
          <motion.li
            key={img.label}
            className="break-inside-avoid list-none"
            initial={reduce ? false : { opacity: 0, y: 24, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: (i % 3) * 0.08, ease: EASE }}
          >
            <button
              type="button"
              onClick={(e) => { trigger.current = e.currentTarget; setOpen(i); }}
              aria-label={`Open image: ${img.label}`}
              className="group relative block w-full overflow-hidden rounded-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2A7F82]"
            >
              <Photo image={img} className={`${ratios[i % ratios.length]} w-full transition-transform duration-700 group-hover:scale-105`} sizes="(min-width: 1024px) 33vw, 50vw" />
              <span aria-hidden="true" className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-4 text-left text-sm font-medium text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                {img.label}
              </span>
            </button>
          </motion.li>
        ))}
      </ul>

      <AnimatePresence>
        {open !== null && (
          <motion.div
            id="gallery-dialog"
            role="dialog"
            aria-modal="true"
            aria-label={`Gallery: ${items[open].label}`}
            className="fixed inset-0 z-[100] flex flex-col bg-[#0b1a29]/95 p-4 sm:p-8"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}
            onClick={(e) => { if (e.target === e.currentTarget) close(); }}
          >
            <div className="flex items-center justify-between text-white">
              <p className="text-sm text-white/70" aria-live="polite">{open + 1} / {items.length} · {items[open].label}</p>
              <button ref={closeBtn} type="button" onClick={close} aria-label="Close gallery" className="rounded-full p-2 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white">
                <Icon name="x" />
              </button>
            </div>
            <div className="relative mx-auto my-4 flex min-h-0 w-full max-w-5xl flex-1 items-center">
              <button type="button" onClick={() => step(-1)} aria-label="Previous image" className="absolute left-0 z-10 rounded-full bg-white/10 p-3 text-white backdrop-blur hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white">
                <Icon name="arrow" className="h-5 w-5 rotate-180" />
              </button>
              <Photo image={items[open]} className="mx-auto h-full max-h-[75vh] w-full rounded-2xl" sizes="100vw" />
              <button type="button" onClick={() => step(1)} aria-label="Next image" className="absolute right-0 z-10 rounded-full bg-white/10 p-3 text-white backdrop-blur hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white">
                <Icon name="arrow" className="h-5 w-5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}

/* ------------------------------------------------------------------ */
/* Testimonials: verified only                                          */
/* ------------------------------------------------------------------ */

export function CorporateTestimonials() {
  const list = testimonials.items;
  const [i, setI] = useState(0);
  return (
    <Section tone="white" labelledBy="testimonials-h">
      <SectionHeader id="testimonials-h" title={testimonials.heading} center />
      {list.length === 0 ? (
        <Reveal className="mx-auto max-w-2xl rounded-3xl bg-[#F8F6F0] p-10 text-center">
          <p className="text-xl leading-relaxed text-[#123B5D]">{testimonials.fallback}</p>
          <div className="mt-8 flex justify-center">
            <CtaLink target={sectionIds.inquiry} variant="solidBlue">{testimonials.fallbackCta}</CtaLink>
          </div>
        </Reveal>
      ) : (
        <div className="mx-auto max-w-3xl text-center" aria-roledescription="carousel" aria-label="Verified testimonials">
          <AnimatePresence mode="wait">
            <motion.figure key={i} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.35 }} aria-live="polite">
              <blockquote className="text-2xl leading-relaxed text-[#123B5D]">“{list[i].quote}”</blockquote>
              <figcaption className="mt-6 text-sm text-[#252B32]/70">
                {[list[i].name, list[i].role, list[i].organization].filter(Boolean).join(", ")}
                <span className="block text-xs">{list[i].retreatType} · {list[i].destination}</span>
              </figcaption>
            </motion.figure>
          </AnimatePresence>
          {list.length > 1 && (
            <div className="mt-8 flex justify-center gap-3">
              <button type="button" aria-label="Previous testimonial" onClick={() => setI((i - 1 + list.length) % list.length)} className="rounded-full border border-[#123B5D]/20 p-3 hover:bg-[#123B5D] hover:text-white"><Icon name="arrow" className="h-4 w-4 rotate-180" /></button>
              <button type="button" aria-label="Next testimonial" onClick={() => setI((i + 1) % list.length)} className="rounded-full border border-[#123B5D]/20 p-3 hover:bg-[#123B5D] hover:text-white"><Icon name="arrow" className="h-4 w-4" /></button>
            </div>
          )}
        </div>
      )}
    </Section>
  );
}

/* ------------------------------------------------------------------ */
/* FAQ                                                                  */
/* ------------------------------------------------------------------ */

export function CorporateFAQ() {
  const [open, setOpen] = useState<number | null>(0);
  const reduce = useReducedMotion();
  return (
    <Section tone="ivory" labelledBy="faq-h">
      <div className="mx-auto max-w-3xl">
        <SectionHeader id="faq-h" title={faqs.heading} />
        <ul className="divide-y divide-[#123B5D]/12 rounded-3xl border border-[#123B5D]/12 bg-white">
          {faqs.items.map((f, i) => {
            const on = open === i;
            return (
              <li key={f.q}>
                <h3>
                  <button
                    type="button"
                    id={`faq-q-${i}`}
                    aria-expanded={on}
                    aria-controls={`faq-a-${i}`}
                    onClick={() => setOpen(on ? null : i)}
                    className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left font-semibold text-[#123B5D] focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[#2A7F82]"
                  >
                    {f.q}
                    <Icon name="chevron" className={`h-5 w-5 shrink-0 text-[#D8A64A] transition-transform duration-300 ${on ? "rotate-180" : ""}`} />
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {on && (
                    <motion.div
                      id={`faq-a-${i}`} role="region" aria-labelledby={`faq-q-${i}`}
                      initial={reduce ? false : { height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={reduce ? undefined : { height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: EASE }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-6 leading-relaxed text-[#252B32]/75">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>
      </div>
    </Section>
  );
}

/* ------------------------------------------------------------------ */
/* Inquiry form                                                         */
/* ------------------------------------------------------------------ */

interface Local {
  company: string; organizationType: string; contactPerson: string; designation: string;
  email: string; phone: string; specialRequirements: string; message: string; website: string;
}
const emptyLocal: Local = {
  company: "", organizationType: "", contactPerson: "", designation: "", email: "", phone: "",
  specialRequirements: "", message: "", website: "",
};
type Errors = Partial<Record<"company" | "organizationType" | "contactPerson" | "email" | "phone" | "participants", string>>;

const field =
  "w-full rounded-xl border border-[#123B5D]/25 bg-white px-4 py-3 text-[#252B32] placeholder:text-[#252B32]/40 transition-shadow focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#2A7F82] aria-[invalid=true]:border-[#b3261e]";

function Field({ id, label, required, error, children }: { id: string; label: string; required?: boolean; error?: string; children: React.ReactNode }) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-semibold text-[#123B5D]">
        {label}{required && <span aria-hidden="true" className="text-[#b3261e]"> *</span>}
      </label>
      {children}
      {error && <p id={`${id}-err`} role="alert" className="mt-1.5 text-sm text-[#b3261e]">{error}</p>}
    </div>
  );
}

export function CorporateInquiryForm() {
  const { draft, setField, toggleActivity } = useRetreat();
  const [local, setLocal] = useState<Local>(emptyLocal);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const successRef = useRef<HTMLDivElement>(null);
  const set = (k: keyof Local) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setLocal((l) => ({ ...l, [k]: e.target.value }));

  useEffect(() => { if (status === "success") successRef.current?.focus(); }, [status]);

  const validate = (): Errors => {
    const e: Errors = {};
    if (!local.company.trim()) e.company = "Please enter your organization's name.";
    if (!local.organizationType) e.organizationType = "Please choose an organization type.";
    if (!local.contactPerson.trim()) e.contactPerson = "Please tell us who to contact.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(local.email.trim())) e.email = "Please enter a valid email address.";
    if (local.phone.trim() && !/^[+\d][\d\s()-]{6,}$/.test(local.phone.trim())) e.phone = "Please enter a valid phone number.";
    if (draft.participants && !(Number(draft.participants) >= 1)) e.participants = "Please enter a number of 1 or more.";
    return e;
  };

  const onSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    const found = validate();
    setErrors(found);
    const firstKey = Object.keys(found)[0];
    if (firstKey) {
      document.getElementById(firstKey === "participants" ? "corp-participants" : `corp-${firstKey}`)?.focus();
      return;
    }
    setStatus("sending");
    try {
      await submitCorporateInquiry({
        ...local,
        participants: draft.participants, destination: draft.destination, retreatType: draft.retreatType,
        dates: draft.dates, duration: draft.duration, budget: draft.budget, accommodation: draft.accommodation,
        transportation: draft.transportation, activities: draft.activities,
        extras: { mealPlan: draft.mealPlan, accessibility: draft.accessibility, dietary: draft.dietary },
      });
      setStatus("success"); // only after the request actually succeeded
    } catch {
      setStatus("error");
    }
  };

  const extras = [
    draft.mealPlan && `Meal plan: ${draft.mealPlan}`,
    draft.accessibility && `Accessibility: ${draft.accessibility}`,
    draft.dietary && `Dietary: ${draft.dietary}`,
  ].filter(Boolean) as string[];

  const err = (k: keyof Errors) => ({ "aria-invalid": errors[k] ? true : undefined, "aria-describedby": errors[k] ? `corp-${k}-err` : undefined }) as const;

  return (
    <Section id={sectionIds.inquiry} tone="white" labelledBy="inquiry-h">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,4fr)_minmax(0,7fr)] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeader id="inquiry-h" title={inquiry.heading} sub={inquiry.sub} />
        </div>

        <div className="rounded-3xl bg-[#F8F6F0] p-6 shadow-[0_24px_60px_-28px_rgba(18,59,93,0.4)] sm:p-10">
          {status === "success" ? (
            <div ref={successRef} tabIndex={-1} role="status" className="py-10 text-center outline-none">
              <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#2A7F82]/15 text-[#2A7F82]"><Icon name="check" className="h-8 w-8" /></span>
              <h3 className="mt-6 text-2xl font-semibold text-[#123B5D]">{inquiry.success.title}</h3>
              <p className="mx-auto mt-3 max-w-md text-[#252B32]/75">{inquiry.success.body}</p>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate className="grid gap-6 sm:grid-cols-2">
              {/* honeypot: hidden from people and assistive tech */}
              <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
                <label>Website<input tabIndex={-1} autoComplete="off" value={local.website} onChange={set("website")} /></label>
              </div>

              <Field id="corp-company" label="Company / Organization Name" required error={errors.company}>
                <input id="corp-company" autoComplete="organization" value={local.company} onChange={set("company")} className={field} {...err("company")} />
              </Field>
              <Field id="corp-organizationType" label="Organization Type" required error={errors.organizationType}>
                <select id="corp-organizationType" value={local.organizationType} onChange={set("organizationType")} className={field} {...err("organizationType")}>
                  <option value="">Select…</option>
                  {inquiry.organizationTypes.map((o) => <option key={o}>{o}</option>)}
                </select>
              </Field>
              <Field id="corp-contactPerson" label="Contact Person" required error={errors.contactPerson}>
                <input id="corp-contactPerson" autoComplete="name" value={local.contactPerson} onChange={set("contactPerson")} className={field} {...err("contactPerson")} />
              </Field>
              <Field id="corp-designation" label="Designation">
                <input id="corp-designation" autoComplete="organization-title" value={local.designation} onChange={set("designation")} className={field} />
              </Field>
              <Field id="corp-email" label="Email Address" required error={errors.email}>
                <input id="corp-email" type="email" autoComplete="email" value={local.email} onChange={set("email")} className={field} {...err("email")} />
              </Field>
              <Field id="corp-phone" label="Phone Number" error={errors.phone}>
                <input id="corp-phone" type="tel" autoComplete="tel" value={local.phone} onChange={set("phone")} className={field} {...err("phone")} />
              </Field>
              <Field id="corp-participants" label="Number of Participants" error={errors.participants}>
                <input id="corp-participants" type="number" min={1} inputMode="numeric" value={draft.participants} onChange={(e) => setField("participants", e.target.value)} className={field} aria-invalid={errors.participants ? true : undefined} aria-describedby={errors.participants ? "corp-participants-err" : undefined} />
              </Field>
              <Field id="corp-destination" label="Preferred Destination">
                <select id="corp-destination" value={draft.destination} onChange={(e) => setField("destination", e.target.value)} className={field}>
                  <option value="">Select…</option>
                  {destinationOptions.map((o) => <option key={o}>{o}</option>)}
                </select>
              </Field>
              <Field id="corp-retreatType" label="Retreat Type">
                <select id="corp-retreatType" value={draft.retreatType} onChange={(e) => setField("retreatType", e.target.value)} className={field}>
                  <option value="">Select…</option>
                  {retreatTypes.map((o) => <option key={o}>{o}</option>)}
                </select>
              </Field>
              <Field id="corp-dates" label="Preferred Travel Dates">
                <input id="corp-dates" value={draft.dates} onChange={(e) => setField("dates", e.target.value)} placeholder="e.g. late October, flexible" className={field} />
              </Field>
              <Field id="corp-duration" label="Approximate Duration">
                <select id="corp-duration" value={draft.duration} onChange={(e) => setField("duration", e.target.value)} className={field}>
                  <option value="">Select…</option>
                  {inquiry.durations.map((o) => <option key={o}>{o}</option>)}
                </select>
              </Field>
              <Field id="corp-budget" label="Budget Range">
                <select id="corp-budget" value={draft.budget} onChange={(e) => setField("budget", e.target.value)} className={field}>
                  <option value="">Select…</option>
                  {inquiry.budgetRanges.map((o) => <option key={o}>{o}</option>)}
                </select>
              </Field>
              <Field id="corp-accommodation" label="Accommodation Preference">
                <select id="corp-accommodation" value={draft.accommodation} onChange={(e) => setField("accommodation", e.target.value)} className={field}>
                  <option value="">Select…</option>
                  {inquiry.accommodation.map((o) => <option key={o}>{o}</option>)}
                </select>
              </Field>
              <Field id="corp-transportation" label="Transportation Requirements">
                <select id="corp-transportation" value={draft.transportation} onChange={(e) => setField("transportation", e.target.value)} className={field}>
                  <option value="">Select…</option>
                  {inquiry.transportation.map((o) => <option key={o}>{o}</option>)}
                </select>
              </Field>

              <fieldset className="sm:col-span-2">
                <legend className="mb-3 text-sm font-semibold text-[#123B5D]">Activities of Interest</legend>
                <div className="flex flex-wrap gap-2">
                  {inquiry.activityOptions.map((a) => {
                    const on = draft.activities.includes(a);
                    return (
                      <label key={a} className={`cursor-pointer rounded-full border px-4 py-2 text-sm transition-colors focus-within:outline focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-[#2A7F82] ${on ? "border-[#123B5D] bg-[#123B5D] text-white" : "border-[#123B5D]/25 bg-white text-[#252B32]/80 hover:border-[#2A7F82]"}`}>
                        <input type="checkbox" className="sr-only" checked={on} onChange={() => toggleActivity(a)} />
                        {a}
                      </label>
                    );
                  })}
                </div>
              </fieldset>

              <div className="sm:col-span-2">
                <Field id="corp-specialRequirements" label="Special Requirements">
                  <textarea id="corp-specialRequirements" rows={3} value={local.specialRequirements} onChange={set("specialRequirements")} className={field} />
                </Field>
                {extras.length > 0 && <p className="mt-2 text-xs text-[#252B32]/60">Also included from your selections: {extras.join(" · ")}</p>}
              </div>
              <div className="sm:col-span-2">
                <Field id="corp-message" label="Additional Message">
                  <textarea id="corp-message" rows={4} value={local.message} onChange={set("message")} className={field} />
                </Field>
              </div>

              <div className="sm:col-span-2">
                {status === "error" && (
                  <p role="alert" className="mb-4 rounded-xl bg-[#b3261e]/10 px-4 py-3 text-sm text-[#8c1d18]">
                    {inquiry.error}
                    {CONTACT.email && <> You can also email <a className="underline" href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>.</>}
                  </p>
                )}
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#D8A64A] px-8 py-4 text-sm font-semibold tracking-wide text-[#252B32] transition-colors hover:bg-[#e3b75f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D8A64A] disabled:cursor-wait disabled:opacity-70 sm:w-auto"
                >
                  {status === "sending" ? "Sending…" : inquiry.submit}
                  {status !== "sending" && <Icon name="arrow" className="h-4 w-4" />}
                </button>
                <p className="mt-4 text-xs leading-relaxed text-[#252B32]/60">
                  {inquiry.privacy} <a href={inquiry.privacyHref} className="underline underline-offset-2">Privacy policy</a>
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </Section>
  );
}

/* ------------------------------------------------------------------ */

export function CorporateFinalCTA() {
  const reduce = useReducedMotion();
  const contactHref = CONTACT.email ? `mailto:${CONTACT.email}` : CONTACT.contactPageHref;
  return (
    <Section tone="blue" labelledBy="final-h" bleed className="isolate">
      <motion.div
        aria-hidden={finalCta.image.src ? undefined : true}
        className="absolute inset-0 -z-20"
        initial={{ scale: 1 }}
        animate={reduce ? undefined : { scale: [1, 1.08, 1] }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
      >
        <Photo image={finalCta.image} className="h-full w-full" sizes="100vw" />
      </motion.div>
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-t from-[#0b2740] via-[#123B5D]/70 to-[#123B5D]/40" />

      <div className="mx-auto max-w-4xl px-5 py-28 text-center sm:px-8 md:py-40">
        <Reveal>
          <h2 id="final-h" className="text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl">{finalCta.heading}</h2>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/85">{finalCta.body}</p>
        </Reveal>
        <Reveal delay={0.24} className="mt-10 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center">
          <CtaLink target={sectionIds.inquiry} variant="gold">{finalCta.primary}</CtaLink>
          <CtaLink target={sectionIds.inquiry} variant="outlineLight">{finalCta.secondary}</CtaLink>
          <LinkCta href={contactHref} variant="linkLight">{finalCta.tertiary}</LinkCta>
        </Reveal>
        <Reveal delay={0.4}>
          <p className="mt-14 text-sm font-semibold uppercase tracking-[0.3em] text-[#D8A64A]">{finalCta.tagline}</p>
        </Reveal>
      </div>
    </Section>
  );
}
