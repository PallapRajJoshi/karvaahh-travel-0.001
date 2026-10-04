/* ============================================================
   HELICOPTER TOUR PRODUCT PAGE — CONTENT CONTRACT
   ------------------------------------------------------------
   The full, information-rich product layout (Everest first,
   reusable for Muktinath, Annapurna, ...). Every value shown on
   the page comes from one object of this shape, so the Karvaahh
   team can update tour details without touching layout code.

   Operational values (duration, altitude, landings, availability)
   are plain strings so they can be worded with the right caveat
   ("Approx.", "Subject to ...") instead of being stated as fact.
   ============================================================ */

import type { IconName, PageImage, RequiredImage } from "./types";

export type ProductFact = { icon: IconName; label: string; value: string; note?: string };

/** How a stop on the route is experienced. */
export type RouteMode = "landing" | "optional" | "aerial" | "restricted";

export type RouteStop = {
  name: string;
  detail: string;
  mode: RouteMode;
  elevation?: string;
};

export type ItineraryStep = { title: string; text: string };

export type ItineraryOption = {
  id: string;
  /** Short tab label. */
  tab: string;
  title: string;
  tag: string;
  summary: string;
  steps: ItineraryStep[];
  points?: string[];
  /** Shown in a highlighted notice under the option. */
  notice?: string;
  availability: "standard" | "on-request";
};

export type TimeBlock = { time: string; title: string; text: string };

export type BookingOption = {
  name: string;
  basis: string;
  price: string;
  points: string[];
  idealFor: string;
  featured?: boolean;
  whatsappMessage: string;
};

export type InclusionItem = {
  text: string;
  /** included = always part of Karvaahh's arrangement; package = depends on the selected package. */
  status: "included" | "package";
};

export type Highlight = {
  name: string;
  text: string;
  elevation?: string;
  image?: PageImage;
};

export type Season = {
  name: string;
  months: string;
  rating: string;
  text: string;
  icon?: IconName;
};

export type DepartureStatus = "open" | "limited" | "closed";

/** A confirmed departure. `date` is an ISO date string, e.g. "2027-05-22". */
export type Departure = { date: string; status: DepartureStatus; note?: string };

/** One day of a multi-day itinerary, with at-a-glance details. */
export type DayPlan = {
  day: string;
  title: string;
  text: string;
  /** e.g. Altitude / Transport / Stay / Meals — use "Subject to selected package" when unconfirmed. */
  meta: { label: string; value: string }[];
};

export type AltitudePoint = { place: string; metres: number; label: string; note?: string };

export type RelatedTour = {
  title: string;
  text: string;
  /** Only set when the page exists; otherwise the card links to the enquiry section. */
  href?: string;
  image?: PageImage;
};

export type HelicopterProductTour = {
  title: string;
  slug: string;
  path: string;
  breadcrumbLabel: string;
  description: string;
  touristType: string[];

  seo: {
    title: string;
    socialTitle: string;
    description: string;
    keywords: string[];
    ogImage: RequiredImage;
  };

  /** Core trip facts — reused by the hero strip, quick-info panel and structured data. */
  duration: string;
  elevation: string;
  startingPoint: string;
  endingPoint: string;
  region: string;
  bestSeason: string;
  transportation: string;
  tourTypes: string;
  groupSize: string;
  landingNote: string;

  hero: {
    badge: string;
    titleLead: string;
    titleAccent: string;
    description: string;
    image: RequiredImage;
    video?: string;
    strip: { label: string; value: string }[];
  };

  quickFacts: ProductFact[];

  overview: {
    title: string;
    lead: string;
    paragraphs: string[];
    image: PageImage;
    imageCaption: string;
    links: { label: string; href: string }[];
  };

  whyHelicopter: { title: string; intro: string; items: { title: string; text: string }[] };

  highlights: { title: string; intro: string; items: Highlight[] };

  route: {
    title: string;
    intro: string;
    stops: RouteStop[];
    note: string;
    /** Override the legend wording per mode, e.g. { restricted: "Darshan only" }. */
    modeLabels?: Partial<Record<RouteMode, string>>;
  };

  itinerary: { title: string; intro: string; options: ItineraryOption[] };

  /** Hour-by-hour timing for same-day tours (optional). */
  timeline?: { title: string; note: string; blocks: TimeBlock[] };

  /** Day-by-day plan for multi-day journeys (optional). */
  dayWise?: { title: string; intro: string; note: string; days: DayPlan[] };

  /** Spiritual / cultural context with the sacred sites (optional). */
  significance?: { title: string; intro: string; items: { name: string; text: string }[] };

  /** Documents and eligibility (optional). */
  documents?: {
    title: string;
    intro: string;
    groups: { title: string; items: string[] }[];
    eligibility: { title: string; text: string }[];
    note: string;
  };

  /** Registration process and booking terms (optional). */
  booking?: {
    title: string;
    intro: string;
    steps: { title: string; text: string }[];
    policies: { title: string; text: string }[];
  };

  /**
   * Departure date picker. Add only confirmed dates; past dates hide
   * automatically. With no dates, an "announced soon" card is shown.
   */
  departures?: {
    title: string;
    intro: string;
    /** Shown when no upcoming dates are listed. */
    emptyTitle: string;
    emptyText: string;
    emptyCta: string;
    emptyMessage: string;
    dates: Departure[];
  };

  options: { title: string; intro: string; items: BookingOption[]; note: string };

  inclusions: InclusionItem[];
  exclusions: string[];

  preparation: {
    title: string;
    intro: string;
    carry: string[];
    topics: { icon: IconName; title: string; text: string }[];
  };

  safety: { title: string; intro: string; points: { title: string; text: string }[] };

  seasons: { title: string; intro: string; items: Season[]; note: string };

  altitude: {
    title: string;
    intro: string;
    points: AltitudePoint[];
    guidance: string[];
    disclaimer: string;
  };

  travelerTypes: { title: string; intro: string; items: { icon: IconName; title: string; text: string }[] };

  gallery: { title: string; intro: string; items: { image: PageImage; caption: string }[] };

  trust: { title: string; intro: string; points: { title: string; text: string }[] };

  faqs: { question: string; answer: string }[];

  cta: {
    title: string;
    text: string;
    image: RequiredImage;
    /** Label of the main call button, e.g. "Plan My Everest Tour". */
    primaryLabel: string;
    planMessage: string;
    quoteSubject: string;
  };

  relatedTours: RelatedTour[];
};
