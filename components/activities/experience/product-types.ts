/* ============================================================
   HELICOPTER TOUR — CONTENT CONTRACT
   ------------------------------------------------------------
   One object of this shape powers one destination page through
   <HelicopterTourPage>. Every section beyond the core facts is
   optional: a section renders only when its data is present, so
   each destination tells its own story (pilgrimage, cinematic
   journey, day-wise yatra, ...) with the same components.

   Destination data lives in /data/helicopter-tours/<slug>.ts and
   is registered in /data/helicopter-tours/index.ts.

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
  /** Overrides `price` with a formatted amount when a real price is entered. */
  pricing?: Pricing;
  /** e.g. "Sample 5N / 6D". */
  duration?: string;
  /** Detail page for this option. */
  href?: string;
  points: string[];
  idealFor: string;
  featured?: boolean;
  whatsappMessage: string;
  /** Optional photo at the top of the card. */
  image?: PageImage;
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

export type DepartureStatus = "open" | "limited" | "enquire" | "sold-out" | "unavailable" | "cancelled" | "closed" | "weather-hold";

/** A departure date. `date` is an ISO date string, e.g. "2027-05-22". */
export type Departure = { date: string; status: DepartureStatus; note?: string };

/** A place in the destination region (explorer cards + interactive map). */
export type Place = {
  id: string;
  name: string;
  /** Explorer filter group, e.g. "Lower Mustang". */
  group?: string;
  /** Approximate coordinates (decimal degrees). */
  lat: number;
  lon: number;
  elevation?: string;
  text: string;
  image?: PageImage;
  /** Rendered as a region label on the map rather than a point. */
  region?: boolean;
  /** Side of the marker the map label sits on (default: below). */
  label?: "left" | "right" | "top" | "bottom";
};

export type JourneyStage = {
  name: string;
  /** Short label for the route indicator (defaults to name). */
  short?: string;
  /** Small label above the name, e.g. "Goddess Yamuna". */
  kicker?: string;
  text: string;
  image: PageImage;
  elevation?: string;
};

export type ComparisonColumn = { eyebrow: string; title: string; points: string[]; highlight?: boolean };

export type ImageCard = { title: string; text: string; image: PageImage };

/** Configurable price display. Without `price`, the card shows "Price on Request". */
export type Pricing = {
  price?: number;
  currency?: "INR" | "NPR" | "USD";
  basis?: "perPerson" | "perCouple" | "perGroup";
  taxIncluded?: boolean;
  permitIncluded?: boolean;
  /** e.g. "Valid for the 2027 season". */
  validity?: string;
};

/** One of the sacred destinations of a circuit (e.g. the four Dhams). */
export type Dham = {
  id: string;
  name: string;
  temple: string;
  deity: string;
  region: string;
  /** Only when verified, e.g. "Approx. 3,580 m". */
  altitude?: string;
  text: string;
  image: PageImage;
  href?: string;
};

/** A generic storytelling block (yatra mode, audience, destination feature, ...). */
export type Spotlight = {
  id: string;
  eyebrow: string;
  title: string;
  paragraphs: string[];
  points?: string[];
  image?: PageImage;
  cards?: { icon: IconName; title: string; text: string }[];
  cta?: { label: string; href?: string; message?: string };
  note?: string;
  /** split = image beside text; immersive = full-bleed image; cards = card grid. */
  variant?: "split" | "immersive" | "cards";
  dark?: boolean;
  /** Mirror the split layout (image on the right). */
  reverse?: boolean;
};

export type SectionKey =
  | "hero"
  | "booking"
  | "nav"
  | "facts"
  | "trust-bar"
  | "overview"
  | "story"
  | "significance"
  | "stats"
  | "why"
  | "highlights"
  | "classic-story"
  | "dhams"
  | "explorer"
  | "map"
  | "journey"
  | "itinerary"
  | "altitude"
  | "feature"
  | "pilgrimage"
  | "culture"
  | "landscapes"
  | "seasons"
  | "dates"
  | "book"
  | "travelers"
  | "inclusions"
  | "documents"
  | "preparation"
  | "safety"
  | "gallery"
  | "video"
  | "trust"
  | "faq"
  | "cta"
  | "related"
  | "stats-bar"
  | "flight-steps"
  | "peaks"
  | "comparison"
  | "enquiry"
  | `spotlight:${string}`
  /** Page-specific section passed to <ExperiencePage slots={...}>. */
  | `slot:${string}`;

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
  /** Breadcrumb level between Home and the page (default: Helicopter Tours; null = none). */
  collection?: { label: string; href?: string } | null;
  /** Section order; defaults to the standard tour flow. */
  layout?: SectionKey[];
  /** Wording overrides for shared section labels. */
  labels?: {
    why?: string;
    journey?: string;
    related?: string;
    relatedTitle?: string;
    glance?: string;
    nav?: Partial<Record<string, string>>;
  };
  /** Desktop secondary sticky button, e.g. "Plan Yatra". */
  stickyPlan?: { label: string; href: string };
  /** Titled sticky CTA, e.g. { title: "Mountain Flight", desktop: "Check Availability", mobile: "Enquire Now" }. */
  stickyCta?: { title: string; mobileTitle?: string; desktop: string; mobile: string };

  /** Step-by-step experience timeline (horizontal on desktop, vertical on mobile). */
  flightSteps?: { title: string; intro: string; steps: { title: string; text: string; note?: string }[] };

  /** Mountain showcase with elevations. */
  peaks?: { title: string; intro: string; note: string; items: { name: string; metres: number; decimals?: number; region: string; text: string; image?: PageImage }[] };

  /** Two-column comparison with an animated divider. */
  comparison?: { title: string; intro: string; columns: [ComparisonColumn, ComparisonColumn] };

  /** Frontend-only enquiry form; submitting composes a WhatsApp message. */
  enquiry?: {
    title: string;
    intro: string;
    hotelPlaceholder?: string;
    options: {
      airlines: string[];
      times: string[];
      passengers: string[];
      currencies?: string[];
      /** Turns the free-text nationality field into a passenger-category select. */
      categories?: string[];
    };
    /** Adds a special-requirements field (mobility, infants, ...). */
    specialRequirements?: boolean;
    /** Makes email a required field. */
    requireEmail?: boolean;
    /** Flight-booking mode: adds From / To / return-date fields and drops the hotel field. */
    routeFields?: boolean;
  };
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
    /** Omit only while no destination photo exists. */
    ogImage?: RequiredImage;
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
    /** Icon in the badge (default helicopter). */
    badgeIcon?: IconName;
    titleLead: string;
    titleAccent: string;
    description: string;
    /** `src: null` renders an illustrated Himalayan sky until a photo is sourced. */
    image: PageImage;
    /** Small "Pictured: ..." credit, e.g. when the photo shows a nearby area. */
    imageCaption?: string;
    video?: string;
    strip: { label: string; value: string }[];
    trust?: { icon: IconName; label: string }[];
    /** Label of the main button, which opens the booking form (default "Check Availability"). */
    primaryCta?: { label: string; href?: string };
    secondaryCta?: { label: string; href: string };
    /** Third button label (default "WhatsApp Us"); "" hides it. */
    whatsappCta?: string;
    ambient?: boolean;
    /** Animated sequence shown at the bottom of the hero, e.g. the four Dhams. */
    routeChain?: string[];
    /** Serif line under the H1. */
    subtitle?: string;
    /** Animated flight path with an aircraft across the hero. */
    flightPath?: boolean;
    /** Floating badge, e.g. { label: "Mount Everest", value: "8,848.86 m" }. */
    floatingStat?: { label: string; value: string };
  };

  /** Floating booking widget + booking form. Missing values are derived from the tour. */
  bookingWidget?: {
    destination?: string;
    departures?: string[];
    travelerOptions?: string[];
    tourTypes?: string[];
    defaults?: { date?: string; travelers?: string; departure?: string; tourType?: string; message?: string };
    /** Marks the default date as SAMPLE everywhere it appears. */
    sample?: boolean;
    sampleNotice?: string;
    /** Shown in place of the destination field, e.g. "5N / 6D". */
    duration?: string;
    labels?: { departure?: string; tourType?: string };
  };

  dhams?: { title: string; intro: string; items: Dham[] };

  spotlights?: Spotlight[];

  /** Package-specific inclusion lists shown as tabs (falls back to `inclusions`). */
  inclusionSets?: { label: string; items: InclusionItem[] }[];

  quickFacts: ProductFact[];

  /** Editorial storytelling with a clip-path image reveal. [[word]] = animated highlight. */
  editorial?: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    image: PageImage;
    inset?: PageImage;
    fact?: { label: string; value: string; text?: string };
  };

  /** Animated counters — verified values only. */
  stats?: { items: { value: number; prefix?: string; suffix?: string; label: string }[]; note: string };

  /** Regional destination explorer (uses `places`). */
  explorer?: { title: string; intro: string; note: string };

  /** Interactive map (uses `places`). Bounds frame the map; `route` lists place ids in order. */
  map?: {
    title: string;
    intro: string;
    note: string;
    bounds: { west: number; east: number; south: number; north: number };
    route: string[];
    /** Several selectable routes drawn in different styles (overrides `route`). */
    routes?: { id: string; label: string; style: "road" | "air" | "custom"; places: string[]; note?: string }[];
    /** Initially selected place id. */
    selected?: string;
    /** An aircraft travels the selected route when the map enters view. */
    aircraft?: boolean;
  };

  places?: Place[];

  /** Scroll-driven flight story (pinned on desktop, timeline on mobile). */
  journey?: { title: string; intro: string; note: string; stages: JourneyStage[]; /** Route marker (default helicopter). */ marker?: "helicopter" | "dot" };

  /** Full-width destination feature (e.g. Lo Manthang). */
  feature?: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    points: string[];
    image: PageImage;
    inset?: PageImage;
    insetCaption?: string;
  };

  culture?: { title: string; intro: string; items: ImageCard[] };

  landscapes?: { title: string; intro: string; scenes: ImageCard[] };

  /** Real footage when `src` is set; otherwise an animated image sequence from `frames`. */
  video?: { title: string; intro: string; src?: string; poster?: PageImage; frames: { image: PageImage; caption: string }[] };

  overview?: {
    title: string;
    lead: string;
    paragraphs: string[];
    image: PageImage;
    imageCaption: string;
    links: { label: string; href: string }[];
  };

  /** With an `image` on every item, the cards render as large interactive photo tiles. */
  whyHelicopter: { title: string; intro: string; items: { title: string; text: string; icon?: IconName; image?: PageImage }[] };

  highlights?: { title: string; intro: string; items: Highlight[] };

  /** Editorial storytelling block with two overlapping images (optional). */
  story?: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    points: string[];
    images: [PageImage, PageImage];
  };

  route: {
    title: string;
    intro: string;
    stops: RouteStop[];
    note: string;
    /** Override the legend wording per mode, e.g. { restricted: "Darshan only" }. */
    modeLabels?: Partial<Record<RouteMode, string>>;
  };

  itinerary?: { title: string; intro: string; options: ItineraryOption[] };

  /** Hour-by-hour timing for same-day tours (optional). */
  timeline?: { title: string; note: string; blocks: TimeBlock[]; /** ISO date shown as the sample day. */ sampleDate?: string };

  /** Day-by-day plan for multi-day journeys (optional). */
  dayWise?: { title: string; intro: string; note: string; days: DayPlan[] };

  /** Spiritual / cultural context with the sacred sites (optional). */
  significance?: {
    /** Defaults to "Spiritual Significance". */
    eyebrow?: string;
    /** Decorative glyph on each card (default "ॐ"); "" shows card numbers instead. */
    symbol?: string;
    title: string;
    intro: string;
    items: { name: string; text: string }[];
  };

  /** Documents and eligibility (optional). */
  documents?: {
    title: string;
    intro: string;
    groups: { title: string; items: string[] }[];
    eligibility: { title: string; text: string }[];
    note: string;
    /** Official sources (immigration, embassy) shown under the note. */
    links?: { label: string; href: string }[];
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
    /** Placeholder dates: every card and the section carry a SAMPLE label. */
    sample?: boolean;
    notice?: string;
    /** Shown when no upcoming dates are listed. */
    emptyTitle?: string;
    emptyText?: string;
    emptyCta?: string;
    emptyMessage?: string;
    dates: Departure[];
  };

  options: { title: string; intro: string; items: BookingOption[]; note: string; ctaLabel?: string };

  inclusions: InclusionItem[];
  exclusions: string[];

  preparation?: {
    title: string;
    intro: string;
    carry: string[];
    topics: { icon: IconName; title: string; text: string }[];
  };

  /** "Before You Fly" cards; an `icon` per point shows aviation-style icons instead of numbers. */
  safety: { eyebrow?: string; title: string; intro: string; points: { title: string; text: string; icon?: IconName }[] };

  seasons: { title: string; intro: string; items: Season[]; note: string };

  /** Dedicated pilgrimage section with a yatra CTA (optional). */
  pilgrimage?: {
    eyebrow: string;
    title: string;
    intro: string;
    points: string[];
    image: PageImage;
    ctaLabel: string;
    ctaMessage: string;
    /** Small caveat shown under the points. */
    note?: string;
    /** Label on the image badge (default "Yatra by helicopter"). */
    badge?: string;
  };

  /** Optional add-on journeys shown in the booking area (e.g. "Muktinath + Pokhara"). */
  extensions?: {
    title: string;
    intro: string;
    items: { title: string; text: string; image?: PageImage; href?: string }[];
    ctaLabel: string;
    ctaMessage: string;
  };

  altitude?: {
    title: string;
    intro: string;
    points: AltitudePoint[];
    guidance: string[];
    disclaimer: string;
  };

  travelerTypes: { title: string; intro: string; items: { icon: IconName; title: string; text: string }[] };

  /** Items with a `group` get filter chips (e.g. per destination). */
  gallery: { title: string; intro: string; items: { image: PageImage; caption: string; group?: string }[] };

  trust: { title: string; intro: string; points: { title: string; text: string }[] };

  faqs: { question: string; answer: string }[];

  cta: {
    title: string;
    text: string;
    /** `src: null` falls back to a deep Himalayan gradient. */
    image: PageImage;
    /** Label of the main button, e.g. "Plan My Everest Tour". */
    primaryLabel: string;
    /** Main button target; defaults to calling the Nepal office. */
    primaryHref?: string;
    quoteLabel?: string;
    /** Second button target (default: email quote request). */
    quoteHref?: string;
    whatsappLabel?: string;
    /** Slow drifting background image. */
    animated?: boolean;
    planMessage: string;
    quoteSubject: string;
  };

  relatedTours: RelatedTour[];
};

/** Alias used by the page system. */
export type HelicopterTour = HelicopterProductTour;
