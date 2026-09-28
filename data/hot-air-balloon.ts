// data/hot-air-balloon.ts
// Structured content for /activities/adventure/hot-air-balloon
// Keep all copy here — no hard-coded strings in the page component.
// IMPORTANT: do not invent prices, durations, operators or safety stats
// beyond what's specified here. Anything not confirmed is marked "On Enquiry".

export type AvailabilityStatus = "SEASONAL" | "EVENT-BASED" | "ON ENQUIRY";

export interface Destination {
  id: string;
  name: string;
  province: string;
  status: AvailabilityStatus;
  description: string;
  availabilityStatement: string;
  indicativePrice: string | null; // null => show "Price on enquiry"
  image: string;
  ctaLabel: string;
}

export const hero = {
  eyebrow: "ADVENTURE ACTIVITIES · NEPAL",
  h1: "Hot Air Balloon in Nepal",
  subtitle:
    "Float above Nepal's landscapes as the morning light reaches the Himalayas.",
  supportingText:
    "Hot air balloon experiences in Nepal are seasonal and availability can change. Pokhara has been associated with recurring commercial balloon operations, while other destinations may operate around festivals, events or limited periods.",
  image: "/images/activities/hot-air-balloon/hot-air-balloon-nepal.jpg",
  primaryCta: "Check Availability",
  secondaryCta: "Notify Me When Flights Resume",
  badges: ["Seasonal", "Availability-Based", "From NPR 8,000"],
  locationLine: "Pokhara · Kathmandu · Chitwan · Lumbini",
};

export const availabilityNotice = {
  heading: "Balloon Flights Can Start — and Pause",
  paragraph1:
    "Hot air balloon operations in Nepal are not continuously available across all destinations. Flights may depend on the operator, weather, season, permissions, group size and whether the experience is tethered or free-flying.",
  paragraph2:
    "For that reason, Karvaahh treats balloon flights as an availability enquiry rather than a guaranteed instant-book activity.",
  cta: "Check Current Availability",
};

export const destinationsSection = {
  heading: "Where Can You Find Balloon Experiences?",
  subheading: "Availability varies by destination and season.",
};

export const destinations: Destination[] = [
  {
    id: "pokhara-valley",
    name: "Pokhara Valley",
    province: "Gandaki",
    status: "SEASONAL",
    description:
      "Dawn launches from the valley floor, drifting toward the lake with the Annapurna wall lit up.",
    availabilityStatement:
      "The only place in Nepal with recurring commercial balloon operation.",
    indicativePrice: "NPR 8,000–18,000",
    image: "/images/activities/hot-air-balloon/pokhara-hot-air-balloon.jpg",
    ctaLabel: "Check Pokhara Availability",
  },
  {
    id: "kathmandu-valley",
    name: "Kathmandu Valley",
    province: "Bagmati",
    status: "EVENT-BASED",
    description:
      "Occasional balloon appearances tied to festivals and organised events across the valley, set against temple skylines and terraced hills.",
    availabilityStatement:
      "Not a standing operation — flights depend on specific events and permissions in the valley.",
    indicativePrice: null,
    image: "/images/activities/hot-air-balloon/kathmandu-hot-air-balloon.jpg",
    ctaLabel: "Check Kathmandu Availability",
  },
  {
    id: "chitwan",
    name: "Chitwan",
    province: "Bagmati",
    status: "ON ENQUIRY",
    description:
      "Low-altitude and tethered balloon experiences have occasionally been associated with the plains near Chitwan National Park, alongside the region's wildlife activities.",
    availabilityStatement:
      "No confirmed recurring operation — treat as availability-dependent.",
    indicativePrice: null,
    image: "/images/activities/hot-air-balloon/chitwan-hot-air-balloon.jpg",
    ctaLabel: "Check Chitwan Availability",
  },
  {
    id: "lumbini",
    name: "Lumbini",
    province: "Lumbini",
    status: "ON ENQUIRY",
    description:
      "Balloon activity around the birthplace of Buddha has surfaced around specific events and anniversaries rather than as a standing offering.",
    availabilityStatement:
      "No confirmed recurring operation — treat as availability-dependent.",
    indicativePrice: null,
    image: "/images/activities/hot-air-balloon/lumbini-hot-air-balloon.jpg",
    ctaLabel: "Check Lumbini Availability",
  },
];

export const statusStyles: Record<
  AvailabilityStatus,
  { label: string; className: string }
> = {
  SEASONAL: {
    label: "Seasonal",
    className:
      "bg-amber-100 text-amber-800 border border-amber-300 dark:bg-amber-500/10 dark:text-amber-300 dark:border-amber-500/30",
  },
  "EVENT-BASED": {
    label: "Event-Based",
    className:
      "bg-sky-100 text-sky-800 border border-sky-300 dark:bg-sky-500/10 dark:text-sky-300 dark:border-sky-500/30",
  },
  "ON ENQUIRY": {
    label: "On Enquiry",
    className:
      "bg-stone-100 text-stone-700 border border-stone-300 dark:bg-stone-500/10 dark:text-stone-300 dark:border-stone-500/30",
  },
};

export const howItWorks = {
  heading: "How a Balloon Enquiry Works",
  subheading: "No payment, no lock-in — just a real availability check.",
  steps: [
    {
      title: "Send an enquiry",
      description:
        "Tell us your preferred destination and travel dates. No payment is required to enquire.",
    },
    {
      title: "We check with operators",
      description:
        "Our team confirms current flight status directly with the relevant operator for your dates.",
    },
    {
      title: "You get a real answer",
      description:
        "We tell you honestly whether balloon flights are running, on pause, or possible on request — with pricing and details confirmed at that time.",
    },
    {
      title: "Confirm only if it flies",
      description:
        "You decide whether to proceed once availability, pricing and conditions are confirmed for your dates.",
    },
  ],
};

export const faqs = [
  {
    question: "Is hot air ballooning always available in Nepal?",
    answer:
      "No. Balloon operations in Nepal are seasonal and can pause due to weather, permissions, operator schedules or low demand. Pokhara has the most consistent history of operation, but even there flights are not guaranteed on any given day.",
  },
  {
    question: "Why can't I book a hot air balloon instantly on this page?",
    answer:
      "Because instant booking would imply a guarantee we can't honestly make. Instead, we submit an availability enquiry to the relevant operator and confirm real flight status, pricing and timing before anything is booked.",
  },
  {
    question: "What does 'tethered' vs 'free-flying' mean?",
    answer:
      "A tethered balloon stays anchored to the ground and rises to a limited height, while a free-flying balloon drifts with the wind for a longer aerial journey. Which format is offered depends on the operator, location and conditions at the time.",
  },
  {
    question: "How much does a hot air balloon flight cost?",
    answer:
      "Indicative pricing for Pokhara is NPR 8,000–18,000, but final pricing depends on the operator, flight type and season, and is confirmed only after checking availability for your dates.",
  },
  {
    question: "What happens if flights are paused when I enquire?",
    answer:
      "You can choose to be notified when flights resume for your preferred destination, and our team can suggest alternative adventure activities in the meantime.",
  },
];

export const finalCta = {
  heading: "Ready to Check Balloon Availability?",
  text: "Tell us where and when you're hoping to fly — we'll confirm real availability before you commit to anything.",
  primaryCta: "Check Availability",
  secondaryCta: "Notify Me When Flights Resume",
};

export const seo = {
  title: "Hot Air Balloon in Nepal | Karvaahh Tours & Travels",
  description:
    "Seasonal hot air balloon experiences over Pokhara and beyond. Availability varies by destination, weather and season — check current status with Karvaahh before you plan your flight.",
  path: "/activities/adventure/hot-air-balloon",
};
