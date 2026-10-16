/* ============================================================
   DOMESTIC INDIA FLIGHTS — PAGE-SPECIFIC SECTION CONTRACT
   ------------------------------------------------------------
   Route directory, India–Nepal nonstop services, fares and
   passenger documents, and a disruption guide. Rendered as
   `slot:` sections of <ExperiencePage>. Content lives in
   /data/domestic-flights/domestic-india-flights.ts.

   Never add a fare, frequency or operator that has not been
   checked against an official airline source.
   ============================================================ */

import type { IconName } from "@/components/activities/experience/types";
import type { SourceLink } from "../everest/types";

export type { SourceLink };

export type Airport = { code: string; city: string; name: string };

/** A carrier with its official booking site. */
export type Airline = { name: string; href: string };

/** A hub or gateway card in the route directory. */
export type HubCard = { code: string; city: string; airport: string; text: string; connects: string[]; note?: string };

export type DomesticRoute = {
  from: Airport;
  to: Airport;
  airlines: Airline[];
  service: "Nonstop" | "Connecting";
  /** Approximate scheduled time, e.g. "~2 h 10 min". */
  duration: string;
  /** Great-circle distance between the airports. */
  distanceKm: number;
  status: string;
};

/**
 * "airline" = published by the operating airline; "reported" = listed by
 * schedule data / booking sites only — reconfirm before ticketing.
 */
export type SourceStatus = "airline" | "reported";

export type NepalOperator = Airline & { status: SourceStatus; detail?: string };

export type NepalRoute = {
  from: Airport;
  to: Airport;
  operators: NepalOperator[];
  duration: string;
  distanceKm: number;
  /** Only when published by the airline. */
  frequency?: string;
  note?: string;
};

export type RouteDirectoryData = {
  title: string;
  intro: string;
  verified: string;
  hubs: HubCard[];
  gateways: HubCard[];
  routes: DomesticRoute[];
  notes: string[];
  sources: SourceLink[];
};

export type IndiaNepalData = {
  title: string;
  intro: string;
  verified: string;
  routes: NepalRoute[];
  connecting: { title: string; text: string; cities: string[] };
  notes: string[];
  sources: SourceLink[];
  ctaMessage: string;
};

export type InfoCard = { icon: IconName; title: string; text: string; points?: string[] };

export type PassengerInfoData = {
  title: string;
  intro: string;
  verified: string;
  fareMessage: string;
  fares: InfoCard[];
  documents: { title: string; intro: string; groups: InfoCard[]; sources: SourceLink[] };
  ctaMessage: string;
};

export type DisruptionData = {
  title: string;
  intro: string;
  items: InfoCard[];
  note: string;
  sources: SourceLink[];
};
