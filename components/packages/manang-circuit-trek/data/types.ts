/**
 * Manang Circuit Trek — shared data types.
 * Keep content in the data files; components stay presentational.
 */

export type DayMode = "trek" | "drive" | "flight" | "rest" | "arrival" | "departure";

export interface ItineraryDay {
  day: number;
  /** Short route label, e.g. "Chame → Upper Pisang" */
  title: string;
  /** Where the night is spent (used on the altitude profile). */
  overnight: string;
  /** Sleeping altitude in metres (approximate). */
  sleepAltitude: number;
  /** Highest point reached that day, when it differs from the sleeping altitude. */
  maxAltitude?: number;
  maxAltitudeLabel?: string;
  mode: DayMode;
  /** Walking or driving time, human readable. */
  duration: string;
  summary: string;
  meals: string;
  stay: string;
  /** Marks acclimatisation or key days on the profile + itinerary. */
  flag?: "acclimatise" | "pass" | "lake";
}

export interface TrekFact {
  label: string;
  value: string;
  note?: string;
}

export interface RouteHighlight {
  id: string;
  name: string;
  altitude: string;
  kicker: string;
  description: string;
  image: string;
  imageAlt: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface SeasonMonth {
  month: string;
  rating: "best" | "good" | "caution" | "avoid";
  note: string;
}

export interface RelatedTrip {
  title: string;
  href: string;
  meta: string;
  image: string;
  imageAlt: string;
}
