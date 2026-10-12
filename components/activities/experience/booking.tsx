"use client";

import { createContext, useCallback, useContext, useRef, useState, type FormEvent, type ReactNode } from "react";
import { MessageCircle, Phone, X } from "lucide-react";
import { longDate, type ResolvedBooking } from "./format";
import { CONTACT } from "./site";
import { SERIF } from "./ui";

type Prefill = { date?: string; tourType?: string };
type BookingContextValue = { open: (prefill?: Prefill) => void; booking: ResolvedBooking | null };

const BookingContext = createContext<BookingContextValue>({ open: () => {}, booking: null });

export const useBooking = () => useContext(BookingContext);

/**
 * Booking form shared by every CTA on a tour page. There is no booking
 * backend, so submitting composes a WhatsApp message with the details.
 */
export function BookingProvider({ booking, tourTitle, children }: { booking: ResolvedBooking; tourTitle: string; children: ReactNode }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [form, setForm] = useState(booking.defaults);

  const open = useCallback((prefill?: Prefill) => {
    setForm((f) => ({ ...f, ...prefill }));
    dialogRef.current?.showModal();
  }, []);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const text = [
      `Hello Karvaahh, I'd like to enquire about the ${tourTitle}.`,
      `Preferred date: ${form.date ? longDate(form.date) : "Flexible"}`,
      `Travellers: ${form.travelers}`,
      `${booking.labels.tourType}: ${form.tourType}`,
      `${booking.labels.departure}: ${form.departure}`,
      form.message ? `Message: ${form.message}` : "",
    ]
      .filter(Boolean)
      .join("\n");
    window.open(CONTACT.whatsappHref(text), "_blank", "noopener,noreferrer");
    dialogRef.current?.close();
  };

  const field =
    "mt-1.5 w-full rounded-xl border border-[#0B2942]/15 bg-white px-4 py-3 text-[15px] text-[#0B2942] outline-none transition focus:border-[#F4A300] focus:ring-2 focus:ring-[#F4A300]/30";
  const label = "text-[12px] font-semibold uppercase tracking-[0.18em] text-[#5B6B7B]";
  const select = (key: "travelers" | "tourType" | "departure", text: string, options: string[]) => (
    <label className="block">
      <span className={label}>{text}</span>
      <select className={field} value={form[key]} onChange={(e) => setForm({ ...form, [key]: e.target.value })}>
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
    </label>
  );

  return (
    <BookingContext.Provider value={{ open, booking }}>
      {children}
      <dialog
        ref={dialogRef}
        aria-labelledby="booking-title"
        onClick={(e) => {
          if (e.target === dialogRef.current) dialogRef.current?.close();
        }}
        className="heli-motion m-auto max-h-[calc(100svh-24px)] w-[min(560px,calc(100vw-24px))] rounded-[28px] bg-white p-0 shadow-[0_40px_80px_-30px_rgba(7,20,33,0.6)] backdrop:bg-[#071421]/75 backdrop:backdrop-blur-sm open:animate-[heliPop_0.35s_cubic-bezier(0.22,1,0.36,1)]"
      >
        <form onSubmit={submit} className="p-6 sm:p-8">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#C98500]">Check Availability</p>
              <h2 id="booking-title" className={`${SERIF} mt-2 text-[26px] font-medium leading-tight text-[#0B2942] sm:text-[28px]`}>
                {tourTitle}
              </h2>
            </div>
            <button
              type="button"
              onClick={() => dialogRef.current?.close()}
              aria-label="Close booking form"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#F8F6F1] text-[#0B2942] transition-colors hover:bg-[#EFE9DF]"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className={label}>Travel date</span>
              <input type="date" className={field} value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} />
            </label>
            {select("travelers", "Travellers", booking.travelerOptions)}
            {select("tourType", booking.labels.tourType, booking.tourTypes)}
            {select("departure", booking.labels.departure, booking.departures)}
            <label className="block sm:col-span-2">
              <span className={label}>Message</span>
              <textarea rows={3} className={`${field} resize-none`} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
            </label>
          </div>

          {booking.sample && form.date === booking.defaults.date && (
            <p className="mt-4 text-[12px] font-semibold uppercase tracking-[0.08em] text-[#8A6A1F]">{booking.sampleNotice}</p>
          )}

          <div className="mt-6 flex flex-wrap gap-3">
            <button
              type="submit"
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-[#F4A300] px-6 py-3.5 text-[15px] font-semibold text-[#0C1D30] transition-all hover:-translate-y-0.5 hover:bg-[#FFB524] active:scale-[0.98]"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              Send on WhatsApp
            </button>
            <a
              href={CONTACT.phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#0B2942]/15 px-6 py-3.5 text-[15px] font-semibold text-[#0B2942] transition-colors hover:border-[#0B2942]"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              Call
            </a>
          </div>
          <p className="mt-4 text-[12.5px] leading-5 text-[#5B6B7B]">
            Availability, permits and the final price are confirmed with you before booking. Flights depend on weather and operations.
          </p>
        </form>
      </dialog>
    </BookingContext.Provider>
  );
}

/** A button that opens the booking form (usable inside server components). */
export function OpenBookingButton({
  children,
  className,
  prefill,
  ariaLabel,
}: {
  children: ReactNode;
  className?: string;
  prefill?: Prefill;
  ariaLabel?: string;
}) {
  const { open } = useBooking();
  return (
    <button type="button" onClick={() => open(prefill)} className={className} aria-label={ariaLabel}>
      {children}
    </button>
  );
}
