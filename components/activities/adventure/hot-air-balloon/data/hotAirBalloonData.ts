/* ============================================================
   Hot Air Balloon — page content
   All copy, prices and statuses live here so the page stays
   data-driven. Prices are INDICATIVE — never render them as
   guaranteed.
   ============================================================ */

export const PAGE_PATH = "/activities/adventure/hot-air-balloon";
const IMG = "/images/activities/hot-air-balloon";

export type AvailabilityStatus = "seasonal" | "event-based";

export const STATUS_META: Record<
  AvailabilityStatus,
  { label: string; legend: string }
> = {
  seasonal: {
    label: "Seasonal",
    legend: "Availability depends on operating season",
  },
  "event-based": {
    label: "Event-based",
    legend: "Flights may operate around specific events, festivals or trials",
  },
};

export type DestinationSlug = "pokhara" | "kathmandu" | "chitwan" | "lumbini";

export interface BalloonDestination {
  slug: DestinationSlug;
  name: string;
  /** Short name used in the form select */
  formLabel: string;
  province: string;
  status: AvailabilityStatus;
  /** Extra qualifier shown beside the status, e.g. "Trialled" */
  statusNote?: string;
  description: string;
  availabilityStatement?: string;
  /** [min, max] in NPR, or null = price on enquiry */
  priceNpr: [number, number] | null;
  cta: string;
  image: string;
  imageAlt: string;
  /** Wording for the season timeline */
  seasonLabel: string;
}

export const DESTINATIONS: BalloonDestination[] = [
  {
    slug: "pokhara",
    name: "Pokhara Valley",
    formLabel: "Pokhara",
    province: "Gandaki",
    status: "seasonal",
    description:
      "Dawn launches from the valley floor, drifting toward the lake with the Annapurna wall lit up.",
    availabilityStatement:
      "The only place in Nepal with recurring commercial balloon operation.",
    priceNpr: [8000, 18000],
    cta: "Check Pokhara Availability",
    image: `${IMG}/pokhara-hot-air-balloon.jpg`,
    imageAlt:
      "Hot air balloon rising over Pokhara Valley at dawn with the Annapurna range behind",
    seasonLabel: "Seasonal",
  },
  {
    slug: "kathmandu",
    name: "Kathmandu Valley",
    formLabel: "Kathmandu Valley",
    province: "Bagmati",
    status: "event-based",
    description:
      "Tethered and occasional free flights may run around festivals and events.",
    priceNpr: [6000, 12000],
    cta: "Ask About Kathmandu Flights",
    image: `${IMG}/kathmandu-hot-air-balloon.jpg`,
    imageAlt: "Tethered hot air balloon above the Kathmandu Valley",
    seasonLabel: "Event-based",
  },
  {
    slug: "chitwan",
    name: "Chitwan / Sauraha",
    formLabel: "Chitwan / Sauraha",
    province: "Bagmati",
    status: "event-based",
    statusNote: "Trialled",
    description:
      "Balloon rides have been trialled over the buffer zone and Rapti floodplain.",
    priceNpr: [7000, 14000],
    cta: "Ask About Chitwan Availability",
    image: `${IMG}/chitwan-hot-air-balloon.jpg`,
    imageAlt:
      "Hot air balloon over the Rapti floodplain near Sauraha, Chitwan",
    seasonLabel: "Event-based / trial operations",
  },
  {
    slug: "lumbini",
    name: "Lumbini",
    formLabel: "Lumbini",
    province: "Lumbini",
    status: "event-based",
    statusNote: "Proposed & trialled",
    description:
      "Balloon experiences have been proposed and trialled over the Monastic Zone.",
    priceNpr: null,
    cta: "Ask About Lumbini Availability",
    image: `${IMG}/lumbini-hot-air-balloon.jpg`,
    imageAlt: "Hot air balloon above the Lumbini Monastic Zone at sunrise",
    seasonLabel: "Event-based / proposed and trialled",
  },
];

const npr = new Intl.NumberFormat("en-IN");
export function formatPriceRange(range: [number, number] | null): string {
  if (!range) return "Price on enquiry";
  return `NPR ${npr.format(range[0])}–${npr.format(range[1])}`;
}

export const HERO = {
  eyebrow: "Adventure activities · Nepal",
  title: "Hot Air Balloon in Nepal",
  subtitle:
    "Float above Nepal's landscapes as the morning light reaches the Himalayas.",
  supporting:
    "Hot air balloon experiences in Nepal are seasonal and availability can change. Pokhara has been associated with recurring commercial balloon operations, while other destinations may operate around festivals, events or limited periods.",
  badges: ["Seasonal", "Availability-based", "From NPR 8,000"],
  badgeFootnote: "Indicative price, subject to availability",
  locations: ["Pokhara", "Kathmandu", "Chitwan", "Lumbini"],
  image: `${IMG}/hot-air-balloon-nepal.jpg`,
  imageAlt:
    "Hot air balloon floating above a Nepal valley in soft morning light with Himalayan peaks on the horizon",
};

export const NOTICE = {
  heading: "Balloon Flights Can Start — and Pause",
  body: [
    "Hot air balloon operations in Nepal are not continuously available across all destinations. Flights may depend on the operator, weather, season, permissions, group size and whether the experience is tethered or free-flying.",
    "For that reason, Karvaahh treats balloon flights as an availability enquiry rather than a guaranteed instant-book activity.",
  ],
  factors: ["Operator", "Weather", "Season", "Permissions", "Group size", "Flight type"],
  cta: "Check Current Availability",
};

export const PRICE_DRIVERS = {
  heading: "What Determines the Price?",
  statement: ["Operator", "group size", "flight type"],
  supporting:
    "Hot air balloon pricing can vary depending on the operator, number of passengers and whether the experience is tethered or free-flying.",
  cards: [
    {
      title: "Operator",
      text: "Different operators may have different pricing and operating schedules.",
    },
    {
      title: "Group size",
      text: "Private and shared experiences can have different rates.",
    },
    {
      title: "Flight type",
      text: "Tethered and free-flying experiences may be priced differently.",
    },
  ],
  note: "Indicative prices should always be confirmed before booking.",
};

export const EXPERIENCES = {
  heading: "What to Expect",
  items: [
    {
      title: "Dawn light",
      text: "Early flights can offer soft morning light across the valley and surrounding mountains.",
      icon: "sun",
    },
    {
      title: "Quiet flight",
      text: "A balloon experience is generally slower and calmer than powered aerial activities.",
      icon: "wind",
    },
    {
      title: "Himalayan views",
      text: "In suitable weather and visibility, mountain landscapes may form part of the experience.",
      icon: "peak",
    },
    {
      title: "Landscape perspective",
      text: "See lakes, valleys, settlements and surrounding terrain from above.",
      icon: "lake",
    },
  ] as const,
  note: "Views depend on weather, visibility and route.",
};

export const BEST_FOR = {
  heading: "Who Is a Hot Air Balloon Experience For?",
  items: [
    { title: "Couples", text: "A slow-paced aerial experience for shared travel memories." },
    { title: "Sunrise seekers", text: "Ideal for travelers interested in early-morning landscapes and light." },
    { title: "Families", text: "A calmer alternative to higher-adrenaline aerial activities." },
    { title: "Photographers", text: "An elevated perspective for landscape photography." },
    { title: "First-time flyers", text: "A gentle sightseeing format for travelers looking for a different aerial experience." },
  ],
};

export const SEASON = {
  heading: "When Can You Fly?",
  message:
    "There is no single year-round operating calendar for all Nepal balloon destinations.",
  supporting:
    "Operating schedules can change. Weather, permissions, operator decisions and local events can affect availability.",
  cta: "Check Current Availability",
};

export const PROCESS = {
  heading: "How to Arrange Your Balloon Experience",
  steps: [
    { title: "Choose your destination", text: "Tell us where you'd like to fly." },
    { title: "Send your dates", text: "Provide your preferred travel date and group size." },
    { title: "We check availability", text: "We check the current operating status and available options." },
    {
      title: "Confirm your experience",
      text: "Once availability and pricing are confirmed, you can proceed with the arrangement.",
    },
  ],
};

export const EXPERIENCE_TYPES = [
  "Shared flight",
  "Private experience",
  "Tethered flight",
  "Free-flying experience",
  "Not sure",
];

export const QUICK_FACTS = [
  { label: "Main destination", value: "Pokhara Valley" },
  { label: "Availability", value: "Seasonal / event-based" },
  { label: "Typical experience", value: "45–60 min" },
  {
    label: "Indicative starting price",
    value: "NPR 8,000",
    note: "Not guaranteed — confirmed on enquiry",
  },
  { label: "Other locations", value: "Kathmandu, Chitwan, Lumbini" },
  { label: "Booking type", value: "Availability enquiry" },
];

export const GALLERY = [
  { src: `${IMG}/hot-air-balloon-nepal.jpg`, alt: "Hot air balloon drifting over a Nepal valley at sunrise" },
  { src: `${IMG}/pokhara-hot-air-balloon.jpg`, alt: "Balloon envelope glowing during a dawn launch in Pokhara Valley" },
  { src: `${IMG}/phewa-lake-balloon.jpg`, alt: "Hot air balloon reflected in the calm surface of Phewa Lake" },
  { src: `${IMG}/annapurna-balloon-view.jpg`, alt: "View of the Annapurna range from a balloon basket" },
  { src: `${IMG}/kathmandu-balloon.jpg`, alt: "Hot air balloon above the rooftops of the Kathmandu Valley" },
  { src: `${IMG}/chitwan-balloon.jpg`, alt: "Balloon over the green floodplain and forest edge of Chitwan" },
];

export const FAQS = [
  {
    q: "Is hot air ballooning available year-round in Nepal?",
    a: "No. Balloon operations in Nepal can be seasonal or event-based, and availability can change by destination.",
  },
  {
    q: "Where can I experience a hot air balloon in Nepal?",
    a: "Pokhara has recurring commercial balloon operations associated with the destination. Kathmandu Valley, Chitwan / Sauraha and Lumbini may have event-based, trial or limited operations depending on the period.",
  },
  {
    q: "How much does a hot air balloon ride cost in Nepal?",
    a: "Indicative prices vary by destination. Pokhara is listed around NPR 8,000–18,000, Kathmandu around NPR 6,000–12,000 and Chitwan / Sauraha around NPR 7,000–14,000. Lumbini pricing should be treated as enquiry-based.",
  },
  {
    q: "Can I book a balloon flight online?",
    a: "Availability should be checked before booking because operations can start and pause. Karvaahh uses an availability-enquiry approach rather than presenting every destination as continuously bookable.",
  },
  {
    q: "What affects hot air balloon pricing?",
    a: "Pricing can depend on the operator, group size and whether the experience is tethered or free-flying.",
  },
  {
    q: "What happens if flights are not operating?",
    a: "You can submit an availability enquiry or request to be notified when flights resume or when a suitable operating date becomes available.",
  },
  {
    q: "Is the balloon flight guaranteed to have mountain views?",
    a: "No. Mountain visibility depends on weather, cloud cover, atmospheric conditions and the operating route.",
  },
  {
    q: "Is hot air ballooning different from ultra-light flight?",
    a: "Yes. A hot air balloon uses heated air and moves with the wind, while an ultra-light aircraft is a powered aircraft capable of following a defined flight route.",
  },
];

export const BREADCRUMBS = [
  { name: "Home", href: "/" },
  { name: "Activities", href: "/activities" },
  { name: "Adventure", href: "/activities/adventure" },
  { name: "Hot Air Balloon", href: PAGE_PATH },
];

/** Anchor ids — shared between CTAs and forms */
export const ANCHORS = {
  availability: "check-availability",
  notify: "notify-me",
} as const;

/** CTA hrefs that preselect a destination in the enquiry form */
export const enquireHref = (slug?: DestinationSlug) =>
  slug ? `#enquire-${slug}` : `#${ANCHORS.availability}`;
