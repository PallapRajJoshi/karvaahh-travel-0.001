/* ============================================================
   EVEREST SCENIC FLIGHT — PAGE-SPECIFIC SECTION CONTRACT
   ------------------------------------------------------------
   Sections that the shared experience template does not have:
   a flight-information panel, operators, a fare table and a
   cancellation/refund guide. Rendered as `slot:` sections of
   <ExperiencePage>. Content lives in
   /data/domestic-flights/everest-scenic-flights.ts.
   ============================================================ */

import type { IconName } from "@/components/activities/experience/types";

/** A citation beside researched facts (official sources only). */
export type SourceLink = { label: string; href: string };

/** `confirm` marks a value to be reconfirmed with the operator at booking. */
export type FlightDetail = { icon: IconName; label: string; value: string; note?: string; confirm?: boolean };

export type FlightDetailsData = {
  title: string;
  intro: string;
  /** Kept apart so reporting time is never mistaken for departure time. */
  timing: {
    reporting: { value: string; text: string };
    departure: { value: string; text: string };
  };
  items: FlightDetail[];
  note: string;
  sources: SourceLink[];
};

/** An operator, with only the details found on its official website. */
export type FlightOperator = {
  name: string;
  website: SourceLink;
  /** e.g. "Product listed on official website". */
  status: string;
  offering: string;
  details: { label: string; value: string }[];
  sources: SourceLink[];
};

export type OperatorsData = { title: string; intro: string; items: FlightOperator[]; note: string };

export type FareRow = {
  category: string;
  eligibility: string;
  price: string;
  currency: string;
  taxes: string;
  inclusions: string;
  validity: string;
  sources: SourceLink[];
};

export type FaresData = {
  title: string;
  intro: string;
  /** Human-readable date the sources were last checked. */
  verified: string;
  rows: FareRow[];
  notes: string[];
  ctaLabel: string;
  ctaMessage: string;
};

/** Who applies a rule, so airline policy is never confused with Karvaahh's own terms. */
export type PolicyOwner = "airline" | "passenger" | "karvaahh";

export type PolicyItem = {
  icon: IconName;
  owner: PolicyOwner;
  title: string;
  text: string;
  points?: string[];
  sources?: SourceLink[];
  /** Pending business confirmation: shown with a visible "to be confirmed" label. */
  confirm?: boolean;
};

export type PoliciesData = { title: string; intro: string; items: PolicyItem[]; note: string };

export type BookingJourneyData = {
  title: string;
  intro: string;
  steps: { title: string; text: string }[];
  note: string;
  /** Button label (default "Book Your Everest Flight"); with `href` it links instead of opening the booking form. */
  cta?: { label: string; href?: string };
};

export type EverestFlightSections = {
  flightDetails: FlightDetailsData;
  operators: OperatorsData;
  fares: FaresData;
  policies: PoliciesData;
  bookingJourney: BookingJourneyData;
};
