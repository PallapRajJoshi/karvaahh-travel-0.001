"use client";

import {
  useEffect,
  useState,
  type ElementType,
  type FormEvent,
  type ReactNode,
} from "react";
import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "motion/react";
import {
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  ChevronDown,
  MapPin,
  MessageCircle,
  Minus,
  Mountain,
  Plus,
  Sparkles,
  Users,
} from "lucide-react";

/* Height of top bar + nav. Change this one number if the header changes. */
const HEADER_OFFSET = 139;

const WHATSAPP_NUMBER = "9779766861547";
const PHONE_LINK = "tel:+9779766861547";

const destinationOptions = [
  "Nepal",
  "Kathmandu",
  "Pokhara",
  "Muktinath",
  "Chitwan",
  "India",
  "Char Dham",
  "Kailash Mansarovar",
];

const steps = [
  {
    number: "01",
    title: "Tell us your idea",
    text: "Share where you want to go, when and who is travelling.",
  },
  {
    number: "02",
    title: "We shape the journey",
    text: "Built around your pace, comfort and budget.",
  },
  {
    number: "03",
    title: "You simply travel",
    text: "From first idea to final farewell, we're with you.",
  },
];

const stats = [
  { value: "Nepal", label: "Local expertise" },
  { value: "India", label: "Curated journeys" },
  { value: "24/7", label: "Journey support" },
];

const headingSegments = [
  { words: ["Your", "journey", "starts"], start: 0, gold: false },
  { words: ["with", "a", "conversation."], start: 3, gold: true },
];

const ease = [0.22, 1, 0.36, 1] as const;

const stepsVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14, delayChildren: 0.5 } },
};

const stepVariants: Variants = {
  hidden: { opacity: 0, x: -18 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease } },
};

const formVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.3 } },
};

const fieldVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease } },
};

/* ------------------------------------------------------------------ */
/* Reusable form field: visible label, icon, gold focus line            */
/* ------------------------------------------------------------------ */
function Field({
  label,
  labelFor,
  labelId,
  icon: Icon,
  children,
}: {
  label: string;
  labelFor?: string;
  labelId?: string;
  icon: ElementType;
  children: ReactNode;
}) {
  const labelClass =
    "mb-1 block text-[10px] font-semibold uppercase tracking-[0.2em] text-white/65";

  return (
    <div>
      {labelFor ? (
        <label htmlFor={labelFor} className={labelClass}>
          {label}
        </label>
      ) : (
        <span id={labelId} className={labelClass}>
          {label}
        </span>
      )}

      <div className="group relative flex h-[50px] items-center border border-white/15 bg-white/[0.06] transition-colors duration-300 focus-within:border-[#D39A17] focus-within:bg-white/[0.1] hover:border-white/30">
        <Icon
          size={16}
          strokeWidth={1.5}
          aria-hidden="true"
          className="pointer-events-none absolute left-4 text-[#D39A17]"
        />
        {children}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 left-0 h-[2px] w-0 bg-[#D39A17] transition-all duration-500 group-focus-within:w-full"
        />
      </div>
    </div>
  );
}

export default function PlanYourJourney() {
  const reduce = !!useReducedMotion();

  const [destination, setDestination] = useState("");
  const [travelDate, setTravelDate] = useState("");
  const [travelers, setTravelers] = useState(2);
  const [sent, setSent] = useState(false);
  const [today, setToday] = useState("");
  const [imageFailed, setImageFailed] = useState(false);

  /* prevents picking a past date; set after mount to avoid hydration mismatch */
  useEffect(() => {
    const d = new Date();
    const pad = (n: number) => String(n).padStart(2, "0");
    setToday(`${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`);
  }, []);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const message = `Hello Karvaahh, I would like to plan a trip.

Destination: ${destination || "Not decided yet"}
Travel Date: ${travelDate || "Flexible"}
Number of Travelers: ${travelers}`;

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    setSent(true);
    window.setTimeout(() => setSent(false), 6000);
  };

  const stepBtn =
    "flex h-8 w-8 items-center justify-center rounded-full border border-white/20 text-white transition-all duration-300 hover:border-[#D39A17] hover:bg-[#D39A17] hover:text-[#0B2942] disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:border-white/20 disabled:hover:bg-transparent disabled:hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#D39A17]";

  return (
    <section
      id="plan-your-journey"
      aria-labelledby="plan-journey-heading"
      style={{ ["--hdr" as string]: `${HEADER_OFFSET}px` }}
      /* min-height only: fills one screen when there is room and grows
         when needed, so nothing is ever clipped or overlapped */
      className="relative flex scroll-mt-[139px] flex-col overflow-hidden bg-[#F8F6F1] lg:min-h-[calc(100svh-var(--hdr))]"
    >
      {/* background decoration */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-10 h-[430px] w-[430px] rounded-full border border-[#D39A17]/20"
        animate={reduce ? undefined : { rotate: 360, scale: [1, 1.06, 1] }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -right-48 h-[520px] w-[520px] rounded-full border border-[#0B2942]/10"
        animate={reduce ? undefined : { rotate: -360, scale: [1, 1.08, 1] }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-10 top-10 h-60 w-60 rounded-full bg-[#D39A17]/10 blur-3xl"
      />

      <div className="relative mx-auto flex w-full max-w-[1400px] flex-1 flex-col gap-3 px-4 py-4 sm:px-8 sm:py-5 lg:px-10">
        {/* ============ MAIN CARD ============ */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 28 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, ease }}
          className="relative grid flex-1 overflow-hidden bg-[#0B2942] shadow-[0_30px_80px_-30px_rgba(11,41,66,0.55)] lg:grid-cols-[1.08fr_1fr]"
        >
          {/* ---------------- LEFT: STORY ---------------- */}
          <div className="relative flex flex-col justify-between gap-6 overflow-hidden px-5 py-7 sm:px-9 sm:py-9 lg:gap-5 lg:px-11 lg:py-8">
            {/* image + overlays */}
            <div aria-hidden="true" className="absolute inset-0">
              {imageFailed ? (
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#164A74] via-[#0F3557] to-[#0B2942]">
                  <Mountain size={64} strokeWidth={1} className="text-white/10" />
                </div>
              ) : (
                <motion.div
                  initial={reduce ? false : { scale: 1.15 }}
                  whileInView={reduce ? undefined : { scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.8, ease }}
                  className="absolute inset-0"
                >
                  <Image
                    src="/images/journeys/plan-your-journey.jpg"
                    alt=""
                    fill
                    sizes="(max-width: 1024px) 100vw, 55vw"
                    onError={() => setImageFailed(true)}
                    className="object-cover"
                  />
                </motion.div>
              )}
              <div className="absolute inset-0 bg-[#0B2942]/50" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071D2E]/90 via-[#0B2942]/45 to-[#0B2942]/25" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0B2942]/70 via-transparent to-transparent" />
            </div>

            {/* decorative dotted route */}
            <svg
              aria-hidden="true"
              viewBox="0 0 220 120"
              fill="none"
              className="pointer-events-none absolute right-6 top-5 hidden h-20 w-40 sm:block"
            >
              <motion.path
                d="M8 108 C48 96 30 62 80 56 C130 50 104 24 150 22 C176 21 196 14 212 8"
                stroke="#D39A17"
                strokeWidth="1.5"
                strokeDasharray="4 6"
                strokeLinecap="round"
                initial={reduce ? false : { pathLength: 0, opacity: 0 }}
                whileInView={reduce ? undefined : { pathLength: 1, opacity: 0.8 }}
                viewport={{ once: true }}
                transition={{ duration: 2.2, delay: 0.6, ease: "easeInOut" }}
              />
              <circle cx="8" cy="108" r="4" fill="#D39A17" />
              <motion.circle
                cx="212"
                cy="8"
                r="4.5"
                fill="#D39A17"
                initial={reduce ? false : { opacity: 0, scale: 0 }}
                whileInView={reduce ? undefined : { opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 2.6 }}
              />
            </svg>

            {/* top copy */}
            <div className="relative z-10">
              <motion.div
                initial={reduce ? false : { opacity: 0, y: 12 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease }}
                className="mb-4 flex items-center gap-3"
              >
                <motion.span
                  aria-hidden="true"
                  initial={reduce ? false : { width: 0 }}
                  whileInView={reduce ? undefined : { width: 40 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease }}
                  className="h-px w-10 bg-[#D39A17]"
                />
                <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#E0B84E]">
                  Plan your journey
                </span>
                <span
                  aria-hidden="true"
                  className="flex h-7 w-7 items-center justify-center rounded-full border border-[#D39A17]/50"
                >
                  <motion.span
                    className="flex"
                    animate={reduce ? undefined : { rotate: [0, 18, -18, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Sparkles size={13} strokeWidth={1.4} className="text-[#D39A17]" />
                  </motion.span>
                </span>
              </motion.div>

              {/* heading: words rise from behind a mask */}
              <h2
                id="plan-journey-heading"
                aria-label="Your journey starts with a conversation."
                className="max-w-[620px] font-serif text-[32px] font-medium leading-[1.08] tracking-[-0.03em] text-white sm:text-[42px] xl:text-[46px]"
              >
                {headingSegments.map((seg) => (
                  <span key={seg.start} aria-hidden="true" className="relative block w-fit">
                    {seg.words.map((w, wi) => (
                      <span
                        key={w}
                        className={`-mb-[0.14em] inline-block overflow-hidden pb-[0.14em] align-bottom ${
                          wi < seg.words.length - 1 ? "mr-[0.26em]" : ""
                        }`}
                      >
                        <motion.span
                          initial={reduce ? false : { y: "110%" }}
                          whileInView={reduce ? undefined : { y: 0 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.8,
                            delay: 0.1 + (seg.start + wi) * 0.09,
                            ease,
                          }}
                          className={`inline-block ${seg.gold ? "text-[#E0B84E]" : ""}`}
                        >
                          {w}
                        </motion.span>
                      </span>
                    ))}

                    {seg.gold && (
                      <motion.span
                        aria-hidden="true"
                        initial={reduce ? false : { scaleX: 0 }}
                        whileInView={reduce ? undefined : { scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, delay: 0.9, ease }}
                        className="absolute -bottom-0.5 left-0 h-[2px] w-full origin-left bg-[#D39A17]/60"
                      />
                    )}
                  </span>
                ))}
              </h2>

              <motion.p
                initial={reduce ? false : { opacity: 0, y: 14 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.45, ease }}
                className="mt-4 max-w-[500px] text-[14px] leading-6 text-white/80"
              >
                Tell us where you want to go, when you want to travel and who
                you are travelling with. We&apos;ll turn your ideas into a
                thoughtful journey across Nepal and India.
              </motion.p>
            </div>

            {/* steps timeline (hidden on phones to keep the form close) */}
            <motion.ol
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={stepsVariants}
              aria-label="How planning your journey works"
              className="relative z-10 hidden space-y-3.5 sm:block"
            >
              <motion.span
                aria-hidden="true"
                initial={reduce ? false : { scaleY: 0 }}
                whileInView={reduce ? undefined : { scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.7, ease }}
                className="absolute bottom-4 left-[15px] top-4 w-px origin-top bg-gradient-to-b from-[#D39A17]/80 via-[#D39A17]/40 to-[#D39A17]/10"
              />

              {steps.map((s) => (
                <motion.li
                  key={s.number}
                  variants={reduce ? undefined : stepVariants}
                  className="relative flex items-start gap-3.5"
                >
                  <span className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#D39A17]/70 bg-[#0B2942] text-[11px] font-semibold tracking-[0.1em] text-[#E0B84E]">
                    {s.number}
                  </span>
                  <div>
                    <h3 className="font-serif text-[17px] font-medium leading-tight text-white">
                      {s.title}
                    </h3>
                    <p className="mt-0.5 max-w-[380px] text-[13px] leading-5 text-white/70">
                      {s.text}
                    </p>
                  </div>
                </motion.li>
              ))}
            </motion.ol>
          </div>

          {/* ---------------- RIGHT: FORM ---------------- */}
          <div className="relative flex items-center overflow-hidden bg-[#0B2942] px-5 py-7 sm:px-9 sm:py-9 lg:px-11 lg:py-8">
            {/* rotating rings */}
            <motion.div
              aria-hidden="true"
              className="pointer-events-none absolute -right-32 -top-32 h-[320px] w-[320px] rounded-full border border-[#D39A17]/20"
              animate={reduce ? undefined : { rotate: 360 }}
              transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            >
              <span className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D39A17]" />
            </motion.div>
            <motion.div
              aria-hidden="true"
              className="pointer-events-none absolute -right-14 -top-14 h-[180px] w-[180px] rounded-full border border-white/10"
              animate={reduce ? undefined : { scale: [1, 1.08, 1], opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-24 -left-16 h-56 w-56 rounded-full bg-[#164A74]/40 blur-3xl"
            />

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={formVariants}
              className="relative z-10 mx-auto w-full max-w-[480px]"
            >
              <motion.div variants={reduce ? undefined : fieldVariants} className="mb-5">
                <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#E0B84E]">
                  Start with the essentials
                </span>
                <h3 className="mt-1.5 font-serif text-[28px] font-medium leading-tight text-white sm:text-[32px]">
                  Plan your trip
                </h3>
                <p className="mt-1 text-[13px] leading-5 text-white/65">
                  Three quick details and your message is ready on WhatsApp.
                </p>
              </motion.div>

              <form onSubmit={handleSubmit} className="space-y-3.5">
                {/* destination */}
                <motion.div variants={reduce ? undefined : fieldVariants}>
                  <Field label="Destination" labelFor="destination" icon={MapPin}>
                    <select
                      id="destination"
                      value={destination}
                      onChange={(e) => setDestination(e.target.value)}
                      className="h-full w-full cursor-pointer appearance-none bg-transparent pl-11 pr-10 text-[14px] text-white outline-none"
                    >
                      <option value="" className="bg-[#0B2942] text-white">
                        Where would you like to go?
                      </option>
                      {destinationOptions.map((o) => (
                        <option key={o} value={o} className="bg-[#0B2942] text-white">
                          {o}
                        </option>
                      ))}
                    </select>
                    <ChevronDown
                      size={16}
                      aria-hidden="true"
                      className="pointer-events-none absolute right-4 text-white/50"
                    />
                  </Field>
                </motion.div>

                {/* date + travellers */}
                <motion.div
                  variants={reduce ? undefined : fieldVariants}
                  className="grid gap-3.5 sm:grid-cols-2"
                >
                  <Field label="Travel date" labelFor="travel-date" icon={CalendarDays}>
                    <input
                      id="travel-date"
                      type="date"
                      value={travelDate}
                      min={today || undefined}
                      onChange={(e) => setTravelDate(e.target.value)}
                      style={{ colorScheme: "dark" }}
                      className="h-full w-full bg-transparent pl-11 pr-3 text-[14px] text-white outline-none"
                    />
                  </Field>

                  <Field label="Travellers" labelId="travelers-label" icon={Users}>
                    <div
                      role="group"
                      aria-labelledby="travelers-label"
                      className="flex h-full w-full items-center justify-between pl-11 pr-2"
                    >
                      <span aria-live="polite" className="text-[14px] text-white">
                        {travelers}{" "}
                        <span className="text-white/65">
                          {travelers === 1 ? "Traveller" : "Travellers"}
                        </span>
                      </span>

                      <span className="flex items-center gap-1.5">
                        <button
                          type="button"
                          onClick={() => setTravelers((n) => Math.max(1, n - 1))}
                          disabled={travelers <= 1}
                          aria-label="Decrease number of travellers"
                          className={stepBtn}
                        >
                          <Minus size={14} aria-hidden="true" />
                        </button>
                        <button
                          type="button"
                          onClick={() => setTravelers((n) => Math.min(12, n + 1))}
                          disabled={travelers >= 12}
                          aria-label="Increase number of travellers"
                          className={stepBtn}
                        >
                          <Plus size={14} aria-hidden="true" />
                        </button>
                      </span>
                    </div>
                  </Field>
                </motion.div>

                {/* submit */}
                <motion.div variants={reduce ? undefined : fieldVariants}>
                  <motion.button
                    type="submit"
                    whileHover={reduce ? undefined : { scale: 1.015 }}
                    whileTap={reduce ? undefined : { scale: 0.985 }}
                    className="group relative flex h-[56px] w-full items-center justify-between overflow-hidden bg-[#D39A17] px-4 text-[#0B2942] transition-colors duration-300 hover:bg-[#E2B23A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:px-5"
                  >
                    {/* shimmer sweep */}
                    {!reduce && (
                      <motion.span
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-y-0 left-0 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                        initial={{ x: "-150%" }}
                        animate={{ x: "420%" }}
                        transition={{
                          duration: 1.6,
                          delay: 1.5,
                          repeat: Infinity,
                          repeatDelay: 3.5,
                          ease: "easeInOut",
                        }}
                      />
                    )}

                    <span className="relative flex items-center gap-2.5 text-[11px] font-bold uppercase tracking-[0.16em] sm:text-[12px] sm:tracking-[0.2em]">
                      <MessageCircle size={17} aria-hidden="true" />
                      Plan my trip on WhatsApp
                    </span>

                    <span className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#0B2942] text-white transition-transform duration-300 group-hover:translate-x-1">
                      <ArrowRight size={14} aria-hidden="true" />
                    </span>
                  </motion.button>

                  <p
                    role="status"
                    aria-live="polite"
                    className={`mt-2.5 text-center text-[12px] leading-5 transition-colors duration-300 ${
                      sent ? "text-[#E0B84E]" : "text-white/55"
                    }`}
                  >
                    {sent
                      ? "Opening WhatsApp with your details…"
                      : "No commitment · Personalised assistance"}
                  </p>
                </motion.div>
              </form>
            </motion.div>
          </div>
        </motion.div>

        {/* ============ BOTTOM STRIP + ANIMATED BORDER ============ */}
        <motion.div
          initial={reduce ? false : { opacity: 0 }}
          whileInView={reduce ? undefined : { opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative flex shrink-0 flex-col gap-3 pb-3 sm:flex-row sm:items-center sm:justify-between"
        >
          <dl className="grid grid-cols-3 gap-4 sm:flex sm:gap-0">
            {stats.map((s, i) => (
              <div
                key={s.value}
                className={`sm:pr-7 ${i > 0 ? "sm:border-l sm:border-[#DDD8CE] sm:pl-7" : ""}`}
              >
                <dt className="font-serif text-[20px] leading-none text-[#0B2942]">
                  {s.value}
                </dt>
                <dd className="mt-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#7B8994]">
                  {s.label}
                </dd>
              </div>
            ))}
          </dl>

          <a href={PHONE_LINK} className="group flex items-center gap-2 text-[12px] font-semibold text-[#0B2942]">
            <span className="border-b border-[#0B2942]/20 pb-0.5 transition-colors group-hover:border-[#C9910B] group-hover:text-[#C9910B]">
              Prefer to talk? Speak with our travel team
            </span>
            <span
              aria-hidden="true"
              className="flex h-7 w-7 items-center justify-center rounded-full bg-[#0B2942] text-white transition-all duration-300 group-hover:translate-x-1 group-hover:bg-[#C9910B] group-hover:text-[#0B2942]"
            >
              <ArrowUpRight size={14} />
            </span>
          </a>

          {/* base line */}
          <span aria-hidden="true" className="absolute inset-x-0 bottom-0 h-px bg-[#DDD8CE]" />

          {/* gold line draws in from the left */}
          <motion.span
            aria-hidden="true"
            initial={reduce ? false : { scaleX: 0 }}
            whileInView={reduce ? undefined : { scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.3, delay: 0.4, ease }}
            className="absolute inset-x-0 bottom-0 h-px origin-left bg-gradient-to-r from-[#C99016] via-[#D39A17]/50 to-transparent"
          />

          {/* soft glint travelling along the line */}
          {!reduce && (
            <motion.span
              aria-hidden="true"
              className="absolute bottom-0 h-[2px] w-28 bg-gradient-to-r from-transparent via-[#D39A17] to-transparent"
              initial={{ left: "-10%" }}
              animate={{ left: "100%" }}
              transition={{
                duration: 3.5,
                delay: 2,
                repeat: Infinity,
                repeatDelay: 2.5,
                ease: "easeInOut",
              }}
            />
          )}
        </motion.div>
      </div>
    </section>
  );
}