"use client";

import { useEffect, useId, useState, type FormEvent, type InputHTMLAttributes } from "react";
import { motion } from "motion/react";
import { MessageCircle, Phone, Send } from "lucide-react";
import type { HelicopterTour } from "../product-types";
import { CONTACT } from "../site";
import { CONTAINER, SERIF, SectionHeading } from "../ui";
import { ANCHOR } from "./constants";

type Fields = {
  origin: string;
  destination: string;
  date: string;
  returnDate: string;
  passengers: string;
  nationality: string;
  currency: string;
  airline: string;
  time: string;
  hotel: string;
  name: string;
  phone: string;
  email: string;
  requirements: string;
  message: string;
};

/** Digits with an optional leading +, spaces, dashes or brackets (escaped for the `v`-flag regex browsers use). */
const PHONE_PATTERN = "\\+?[0-9][0-9 \\(\\)\\-]{6,19}";

type Enquiry = NonNullable<HelicopterTour["enquiry"]>;

/**
 * Frontend-only enquiry form. Nothing is sent to a server: submitting opens
 * WhatsApp with the details pre-filled, so the Karvaahh team can confirm
 * availability and price directly.
 */
export default function EnquiryForm({ tour }: { tour: Pick<HelicopterTour, "enquiry" | "title"> }) {
  return tour.enquiry ? <Form enquiry={tour.enquiry} title={tour.title} /> : null;
}

function Form({ enquiry, title }: { enquiry: Enquiry; title: string }) {
  const id = useId();
  const [f, setF] = useState<Fields>({
    origin: "",
    destination: "",
    date: "",
    returnDate: "",
    passengers: enquiry.options.passengers[1] ?? enquiry.options.passengers[0] ?? "",
    nationality: "",
    currency: enquiry.options.currencies?.[0] ?? "",
    airline: enquiry.options.airlines[0] ?? "",
    time: enquiry.options.times[0] ?? "",
    hotel: "",
    name: "",
    phone: "",
    email: "",
    requirements: "",
    message: "",
  });
  // Set after mount so server and client render the same markup.
  const [minDate, setMinDate] = useState<string>();
  const [opened, setOpened] = useState(false);
  useEffect(() => {
    const d = new Date();
    const today = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
    const id = requestAnimationFrame(() => setMinDate(today));
    return () => cancelAnimationFrame(id);
  }, []);

  const set = (k: keyof Fields) => (e: { target: { value: string } }) => setF((prev) => ({ ...prev, [k]: e.target.value }));

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const lines = [
      `Hello Karvaahh, I'd like to enquire about the ${title}.`,
      `Name: ${f.name}`,
      enquiry.routeFields && `From: ${f.origin}`,
      enquiry.routeFields && `To: ${f.destination}`,
      `Travel date: ${f.date || "Flexible"}`,
      enquiry.routeFields && `Return date: ${f.returnDate || "One-way / not decided"}`,
      `Passengers: ${f.passengers}`,
      f.nationality && `${enquiry.options.categories ? "Passenger category" : "Nationality"}: ${f.nationality}`,
      f.currency && `Preferred currency: ${f.currency}`,
      `Preferred airline: ${f.airline}`,
      `Preferred time: ${f.time}`,
      f.hotel && `Hotel / location: ${f.hotel}`,
      `Phone / WhatsApp: ${f.phone}`,
      f.email && `Email: ${f.email}`,
      f.requirements && `Special requirements: ${f.requirements}`,
      f.message && `Message: ${f.message}`,
    ].filter(Boolean);
    window.open(CONTACT.whatsappHref(lines.join("\n")), "_blank", "noopener,noreferrer");
    setOpened(true);
  };

  const input =
    "mt-1.5 w-full rounded-xl border border-[#0B2942]/15 bg-white px-4 py-3 text-[15px] text-[#0B2942] outline-none transition placeholder:text-[#8A97A5] focus:border-[#F4A300] focus:ring-2 focus:ring-[#F4A300]/30";
  const label = "text-[12px] font-semibold uppercase tracking-[0.16em] text-[#5B6B7B]";

  const field = (k: keyof Fields, text: string, props: InputHTMLAttributes<HTMLInputElement> = {}) => (
    <label className="block" htmlFor={`${id}-${k}`}>
      <span className={label}>
        {text}
        {props.required && <span className="text-[#C98500]"> *</span>}
      </span>
      <input id={`${id}-${k}`} className={input} value={f[k]} onChange={set(k)} {...props} />
    </label>
  );

  const select = (k: keyof Fields, text: string, options: string[]) => (
    <label className="block" htmlFor={`${id}-${k}`}>
      <span className={label}>{text}</span>
      <select id={`${id}-${k}`} className={input} value={f[k]} onChange={set(k)}>
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
    </label>
  );

  return (
    <section id="book" aria-labelledby="enquiry-title" className={`${ANCHOR} bg-[#F8F6F1] py-20 sm:py-24 lg:py-28`}>
      <div className={`${CONTAINER} grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16`}>
        <div className="lg:sticky lg:top-[220px] lg:self-start">
          <SectionHeading id="enquiry-title" eyebrow="Enquire" title={enquiry.title} intro={enquiry.intro} />
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={CONTACT.whatsappHref(`Hello Karvaahh, I'd like to enquire about the ${title}.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#1F9D55] px-5 py-3 text-[14.5px] font-semibold text-white transition-transform hover:-translate-y-0.5"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              WhatsApp Us
            </a>
            <a
              href={CONTACT.phoneHref}
              className="inline-flex items-center gap-2 rounded-full border border-[#0B2942]/15 bg-white px-5 py-3 text-[14.5px] font-semibold text-[#0B2942] transition-colors hover:border-[#0B2942]"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              {CONTACT.phoneDisplay}
            </a>
          </div>
          <p className="mt-6 text-[13px] leading-6 text-[#5B6B7B]">
            Your enquiry opens in WhatsApp — nothing is stored on this website. Availability, airline, timing and price are confirmed with you directly.
          </p>
        </div>

        <motion.form
          onSubmit={submit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -10% 0px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-[28px] bg-white p-6 shadow-[0_30px_70px_-40px_rgba(11,41,66,0.5)] ring-1 ring-[#0B2942]/[0.06] sm:p-9"
        >
          <h3 className={`${SERIF} text-[26px] font-medium text-[#0B2942]`}>Flight enquiry</h3>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {enquiry.routeFields && (
              <>
                {field("origin", "Flying from", { required: true, placeholder: "City or airport, e.g. Delhi (DEL)" })}
                {field("destination", "Flying to", { required: true, placeholder: "City or airport, e.g. Kathmandu (KTM)" })}
              </>
            )}
            {field("date", enquiry.routeFields ? "Departure date" : "Travel date", { type: "date", min: minDate })}
            {enquiry.routeFields && field("returnDate", "Return date (optional)", { type: "date", min: f.date || minDate })}
            {select("passengers", "Passengers", enquiry.options.passengers)}
            {enquiry.options.categories ? (
              <label className="block" htmlFor={`${id}-nationality`}>
                <span className={label}>
                  Passenger nationality<span className="text-[#C98500]"> *</span>
                </span>
                <select id={`${id}-nationality`} className={input} value={f.nationality} onChange={set("nationality")} required>
                  <option value="" disabled>
                    Select a category
                  </option>
                  {enquiry.options.categories.map((o) => (
                    <option key={o}>{o}</option>
                  ))}
                </select>
              </label>
            ) : (
              field("nationality", "Nationality", { placeholder: "e.g. Indian, Nepali, British" })
            )}
            {select("airline", "Preferred airline", enquiry.options.airlines)}
            {select("time", "Preferred flight time", enquiry.options.times)}
            {enquiry.options.currencies && select("currency", "Preferred currency", enquiry.options.currencies)}
            {!enquiry.routeFields && field("hotel", "Hotel / location", { placeholder: enquiry.hotelPlaceholder ?? "Your Kathmandu hotel" })}
            {field("name", "Full name", { required: true, autoComplete: "name" })}
            {field("phone", "Phone / WhatsApp", {
              required: true,
              type: "tel",
              autoComplete: "tel",
              placeholder: "With country code, e.g. +91",
              pattern: PHONE_PATTERN,
              title: "Phone number with country code, e.g. +91 98765 43210",
            })}
            <div className="sm:col-span-2">{field("email", "Email", { type: "email", autoComplete: "email", required: enquiry.requireEmail })}</div>
            {enquiry.specialRequirements && (
              <div className="sm:col-span-2">
                {field("requirements", "Special requirements", { placeholder: "e.g. wheelchair assistance, infant, senior traveller" })}
              </div>
            )}
            <label className="block sm:col-span-2" htmlFor={`${id}-message`}>
              <span className={label}>Message</span>
              <textarea
                id={`${id}-message`}
                rows={4}
                className={`${input} resize-none`}
                value={f.message}
                onChange={set("message")}
                placeholder="Anything we should know?"
              />
            </label>
          </div>
          <button
            type="submit"
            className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#F4A300] px-7 py-4 text-[15.5px] font-semibold text-[#0C1D30] shadow-[0_10px_24px_-10px_rgba(244,163,0,0.7)] transition-all hover:-translate-y-0.5 hover:bg-[#FFB524] active:scale-[0.98]"
          >
            <Send className="h-4 w-4" aria-hidden="true" />
            Send Enquiry on WhatsApp
          </button>
          <p role="status" className="mt-4 text-center text-[12.5px] leading-5 text-[#5B6B7B]">
            {opened
              ? "WhatsApp has opened with your details. Your enquiry reaches us only after you press send in WhatsApp."
              : "An enquiry is not a reservation. Seats are confirmed only after we quote and you confirm."}
          </p>
        </motion.form>
      </div>
    </section>
  );
}
