import type { HelicopterTour, Pricing } from "./product-types";

/** Format an ISO date ("2026-11-15") as a calendar date, independent of timezone. */
export function formatDate(iso: string, options: Intl.DateTimeFormatOptions) {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-GB", { timeZone: "UTC", ...options });
}

export const longDate = (iso: string) => formatDate(iso, { day: "numeric", month: "long", year: "numeric" });

/** "₹45,000 / person" when a real price is entered, otherwise null (show "Price on Request"). */
export function formatPrice(p?: Pricing): string | null {
  if (!p?.price) return null;
  const amount = new Intl.NumberFormat("en-IN", { style: "currency", currency: p.currency ?? "INR", maximumFractionDigits: 0 }).format(p.price);
  const per = p.basis === "perCouple" ? " / couple" : p.basis === "perGroup" ? " / group" : " / person";
  return amount + per;
}

const DEFAULT_TRAVELERS = ["1 Adult", "2 Adults", "3 Adults", "4 Adults", "5 Adults", "Group (6+)"];

export type ResolvedBooking = {
  destination: string;
  departures: string[];
  travelerOptions: string[];
  tourTypes: string[];
  defaults: { date: string; travelers: string; departure: string; tourType: string; message: string };
  sample: boolean;
  sampleNotice: string;
  duration?: string;
  labels: { departure: string; tourType: string };
};

/** Fills the booking widget/form config with values derived from the tour. */
export function resolveBooking(tour: Pick<HelicopterTour, "title" | "breadcrumbLabel" | "startingPoint" | "options" | "bookingWidget">): ResolvedBooking {
  const w = tour.bookingWidget ?? {};
  const departures = w.departures ?? [tour.startingPoint];
  const tourTypes = w.tourTypes ?? tour.options.items.map((o) => o.name);
  const travelerOptions = w.travelerOptions ?? DEFAULT_TRAVELERS;
  return {
    destination: w.destination ?? tour.breadcrumbLabel,
    departures,
    travelerOptions,
    tourTypes,
    defaults: {
      date: w.defaults?.date ?? "",
      travelers: w.defaults?.travelers ?? travelerOptions[1] ?? travelerOptions[0],
      departure: w.defaults?.departure ?? departures[0],
      tourType: w.defaults?.tourType ?? tourTypes[0],
      message: w.defaults?.message ?? `I am interested in the ${tour.title}.`,
    },
    sample: Boolean(w.sample && w.defaults?.date),
    sampleNotice: w.sampleNotice ?? "Sample date — confirm actual availability",
    duration: w.duration,
    labels: { departure: w.labels?.departure ?? "Departure", tourType: w.labels?.tourType ?? "Tour type" },
  };
}
