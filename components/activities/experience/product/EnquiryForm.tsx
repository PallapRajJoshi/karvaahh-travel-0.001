"use client";

import { useId, useState, type FormEvent, type InputHTMLAttributes } from "react";
import { motion } from "motion/react";
import { MessageCircle, Phone, Send } from "lucide-react";
import type { HelicopterTour } from "../product-types";
import { CONTACT } from "../site";
import { CONTAINER, SERIF, SectionHeading } from "../ui";
import { ANCHOR } from "./constants";

type Fields = {
  date: string;
  passengers: string;
  nationality: string;
  airline: string;
  time: string;
  hotel: string;
  name: string;
  phone: string;
  email: string;
  message: string;
};

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
    date: "",
    passengers: enquiry.options.passengers[1] ?? enquiry.options.passengers[0] ?? "",
    nationality: "",
    airline: enquiry.options.airlines[0] ?? "",
    time: enquiry.options.times[0] ?? "",
    hotel: "",
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const set = (k: keyof Fields) => (e: { target: { value: string } }) => setF((prev) => ({ ...prev, [k]: e.target.value }));

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const lines = [
      `Hello Karvaahh, I'd like to enquire about the ${title}.`,
      `Name: ${f.name}`,
      `Travel date: ${f.date || "Flexible"}`,
      `Passengers: ${f.passengers}`,
      f.nationality && `Nationality: ${f.nationality}`,
      `Preferred airline: ${f.airline}`,
      `Preferred time: ${f.time}`,
      f.hotel && `Hotel / location: ${f.hotel}`,
      `Phone / WhatsApp: ${f.phone}`,
      f.email && `Email: ${f.email}`,
      f.message && `Message: ${f.message}`,
    ].filter(Boolean);
    window.open(CONTACT.whatsappHref(lines.join("\n")), "_blank", "noopener,noreferrer");
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
            {field("date", "Travel date", { type: "date" })}
            {select("passengers", "Passengers", enquiry.options.passengers)}
            {field("nationality", "Nationality", { placeholder: "e.g. Indian, Nepali, British" })}
            {select("airline", "Preferred airline", enquiry.options.airlines)}
            {select("time", "Preferred flight time", enquiry.options.times)}
            {field("hotel", "Hotel / location", { placeholder: "Your Kathmandu hotel" })}
            {field("name", "Full name", { required: true, autoComplete: "name" })}
            {field("phone", "Phone / WhatsApp", { required: true, type: "tel", autoComplete: "tel" })}
            <div className="sm:col-span-2">{field("email", "Email", { type: "email", autoComplete: "email" })}</div>
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
        </motion.form>
      </div>
    </section>
  );
}
