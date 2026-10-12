/* ============================================================
   NEPAL PILGRIMAGE — DATA CONTRACT
   ------------------------------------------------------------
   Every destination, package, filter and section on
   /packages/nepal/spiritual-pilgrimage-tours comes from the data
   files in this folder. Set `active: false` to hide an item
   without deleting it. The shape is CMS-ready: each record can be
   replaced by a CMS entry with the same fields later.
   ============================================================ */

import type { PageImage } from "@/components/activities/experience/types";

export type RegionId = "kathmandu-valley" | "bagmati" | "madhesh" | "koshi" | "gandaki" | "lumbini" | "karnali" | "sudurpashchim";

export type FaithId = "hindu" | "buddhist" | "hindu-buddhist" | "kirat";

export type PilgrimageTypeId =
  | "temple"
  | "shakti-peeth"
  | "devi-temple"
  | "shiva-shrine"
  | "vishnu-shrine"
  | "stupa"
  | "monastery"
  | "sacred-lake"
  | "ashram"
  | "birthplace"
  | "confluence"
  | "spiritual-mountain"
  | "ramayana"
  | "heritage";

export type TravelStyleId = "road" | "flight-road" | "helicopter" | "trek" | "senior-friendly" | "family" | "private" | "group";

export type DurationId = "1-2" | "3-4" | "5-7" | "8-10" | "10+";

export type DifficultyId = "easy" | "moderate" | "difficult" | "high-altitude";

/** Honest access indicators shown as badges on every destination. */
export type AccessId = "easy-access" | "road-access" | "flight-road" | "trekking-required" | "helicopter-available" | "high-altitude" | "weather-dependent" | "difficult-access" | "restricted-entry";

export type PilgrimageDestination = {
  id: string;
  name: string;
  region: RegionId;
  district: string;
  faith: FaithId[];
  pilgrimageTypes: PilgrimageTypeId[];
  travelStyles: TravelStyleId[];
  access: AccessId[];
  /** One line on why the place is sacred — tradition presented as tradition. */
  significance: string;
  image?: PageImage;
  /** Only where reasonably verified; always approximate. */
  altitude?: string;
  difficulty: DifficultyId;
  idealSeason?: string;
  recommendedDuration?: DurationId;
  /** Approximate coordinates for the sacred map. */
  coords?: [lat: number, lon: number];
  /** e.g. "Widely regarded as a Shakti Peeth" — explains the classification. */
  classificationNote?: string;
  /** Visitor access restrictions, e.g. "Inner sanctum open to Hindus only". */
  accessNote?: string;
  /** Existing page for this destination, if any. */
  href?: string;
  featured?: boolean;
  active: boolean;
};

export type TransportId = "Road" | "Flight" | "Helicopter";

export type PackageStyleId =
  | "temple-darshan"
  | "retreat"
  | "hindu"
  | "buddhist"
  | "family"
  | "senior"
  | "couple"
  | "group"
  | "festival"
  | "road"
  | "flight"
  | "helicopter"
  | "luxury"
  | "budget";

export type PilgrimagePackage = {
  id: string;
  title: string;
  /** e.g. "4N / 5D" or "Customised". */
  duration: string;
  durationBucket?: DurationId;
  /** Destination ids, in visiting order. */
  destinations: string[];
  styles: PackageStyleId[];
  transport: TransportId[];
  category: string;
  description: string;
  image?: PageImage;
  /** Shown only when a real Karvaahh price is entered; otherwise "Price on Request". */
  price?: string;
  accommodation?: string;
  meals?: string;
  permits?: string;
  /** Who it suits, e.g. "2 people · Families · Groups". */
  suitableFor?: string;
  href?: string;
  featured?: boolean;
  active: boolean;
};

export type Combination = { id: string; title: string; stops: string[]; text: string; packageId?: string; active: boolean };

export type Festival = {
  id: string;
  name: string;
  /** Lunar-calendar season; never a fixed date. */
  season: string;
  /** Optional exact dates for a given year, added when confirmed. */
  festivalDates?: string;
  text: string;
  destinations: string[];
  active: boolean;
};
