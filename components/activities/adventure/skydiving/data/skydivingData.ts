/**
 * Skydiving in Nepal — page content.
 * All figures are indicative and supplied by Karvaahh. Do not add dates,
 * operators, ratings or prices here that have not been confirmed.
 */

export const SITE_URL = "https://karvaahh.in";
export const PAGE_PATH = "/activities/adventure/skydiving";
const IMG = "/images/activities/skydiving";

/* ---------- Shared enums ---------- */

export const NOTIFY_INTERESTS = ["Everest Skydive", "Ama Dablam", "Pokhara", "Any Nepal Event"] as const;
export type NotifyInterest = (typeof NOTIFY_INTERESTS)[number];

export const NOTIFY_SEASONS = ["Autumn", "Spring", "Any Season"] as const;
export type NotifySeason = (typeof NOTIFY_SEASONS)[number];

/** Fired by <NotifyLink> so the form can preselect the visitor's interest. */
export const NOTIFY_EVENT = "karvaahh:skydive-interest";

export const STATUS_EVENT_BASED = "EVENT-BASED";

export interface Fact {
  label: string;
  value: string;
}

export interface InfoCard {
  title: string;
  text: string;
}

/* ---------- SEO ---------- */

export const seo = {
  title: "Skydiving in Nepal | Everest Skydive & Upcoming Expeditions | Karvaahh",
  description:
    "Explore skydiving in Nepal, including Everest Skydive from Syangboche, Ama Dablam and occasional Pokhara events. Check indicative prices, expedition details and upcoming dates.",
  keywords: [
    "skydiving Nepal",
    "Everest Skydive",
    "Everest skydiving",
    "skydiving in Nepal",
    "Syangboche skydiving",
    "Everest tandem skydive",
    "Nepal adventure activities",
    "Pokhara skydiving",
    "Ama Dablam skydive",
    "high altitude skydiving Nepal",
  ],
  ogImage: `${IMG}/everest-skydiving-nepal.jpg`,
};

export const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Activities", href: "/activities" },
  { name: "Adventure", href: "/activities/adventure" },
  { name: "Skydiving", href: PAGE_PATH },
];

/* ---------- 1. Hero ---------- */

export const hero = {
  eyebrow: "Adventure Activities · Nepal",
  title: "Skydiving in Nepal",
  headline: "Skydive in the Everest Region",
  subtitle: "An expedition-style high-altitude skydive with Everest, Ama Dablam and Lhotse in the frame.",
  support:
    "Skydiving in Nepal is event-based rather than a daily activity. Everest-region jumps operate on organised dates and require weather, aviation and expedition planning.",
  primaryCta: "Get Upcoming Dates",
  secondaryCta: "Notify Me When Dates Are Announced",
  badges: ["Everest Region", "~8,800–9,100 m Exit", "Event-Based"],
  location: "Syangboche · Solukhumbu · Nepal",
  image: {
    src: `${IMG}/everest-skydiving-nepal.jpg`,
    alt: "Tandem skydivers in freefall above the snow peaks of the Everest region, Nepal",
  },
};

/** Drives the altitude gauge. `reference` is the official Everest summit height. */
export const altitudeProfile = {
  scaleMin: 3000,
  scaleMax: 9500,
  exitMin: 8800,
  exitMax: 9100,
  landing: 3780,
  reference: { label: "Everest summit", value: 8849 },
  descentLabel: "~5,000 m",
  descentCaption: "approximate vertical distance from exit to the Syangboche landing",
};

/* ---------- 2. Availability notice ---------- */

export const availabilityNotice = {
  heading: "Skydiving in Nepal Is Expedition-Based",
  text: "There is no reliable daily skydiving schedule across Nepal. Availability is confirmed operator by operator and season by season.",
  text2:
    "Everest-region jumps are generally organised around set expedition dates, usually during the autumn season. Weather cancellations are possible, so travellers need flexibility in their itinerary.",
  cta: "Check Upcoming Dates",
  status: STATUS_EVENT_BASED,
};

/* ---------- 3. Everest Skydive feature ---------- */

export const featured = {
  heading: "Everest Skydive",
  subheading: "The flagship high-altitude skydiving experience in Nepal",
  image: {
    src: `${IMG}/everest-skydive.jpg`,
    alt: "Everest Skydive canopy descending towards Syangboche with Ama Dablam behind",
  },
  stats: [
    { label: "Exit altitude", value: "~8,800–9,100 m" },
    { label: "Landing altitude", value: "~3,780 m" },
  ] satisfies Fact[],
  facts: [
    { label: "Site", value: "Syangboche" },
    { label: "Province", value: "Koshi" },
    { label: "District", value: "Solukhumbu" },
    { label: "Type", value: "Organised expedition" },
    { label: "Indicative price", value: "US$2,000–4,000+" },
    { label: "Status", value: STATUS_EVENT_BASED },
  ] satisfies Fact[],
  cta: "Get Everest Skydive Dates",
};

/* ---------- 4. Why it is an expedition ---------- */

export const expeditionFeatures = {
  heading: "Why Everest Skydive Is an Expedition",
  items: [
    {
      title: "High-altitude exit",
      text: "Exit altitude is around 8,800–9,100 metres, making this a very different experience from conventional low-altitude skydiving.",
    },
    {
      title: "Everest region",
      text: "The jump takes place in the Everest region, with Everest, Ama Dablam and Lhotse potentially forming part of the visual backdrop.",
    },
    {
      title: "Syangboche landing",
      text: "The landing takes place around the Syangboche airstrip above Namche.",
    },
    {
      title: "Expedition format",
      text: "The experience operates around organised dates rather than a daily public schedule.",
    },
    {
      title: "Mountain preparation",
      text: "Altitude acclimatisation, aviation clearance and expedition logistics form part of the planning.",
    },
  ] satisfies InfoCard[],
};

/* ---------- 5. Sites / events ---------- */

export interface SkydiveSite {
  id: string;
  name: string;
  region: string;
  facts: Fact[];
  description: string;
  price: string;
  priceType?: string;
  status: string;
  cta: string;
  interest: NotifyInterest;
  featured?: boolean;
}

export const sitesSection = {
  heading: "Skydiving Experiences in Nepal",
  intro:
    "These are event-based and should be treated as expedition or demonstration opportunities rather than daily activities.",
};

export const sites: SkydiveSite[] = [
  {
    id: "everest",
    name: "Everest Skydive — Syangboche",
    region: "Koshi Province",
    featured: true,
    facts: [
      { label: "Drop zone", value: "Syangboche" },
      { label: "Landing altitude", value: "~3,780 m" },
      { label: "Exit altitude", value: "~8,800–9,100 m" },
      { label: "Operation", value: "Organised expedition on set dates, usually autumn" },
    ],
    description:
      "The world's highest commercial drop zone. Helicopter or fixed-wing lift, with Everest, Ama Dablam and Lhotse in the frame, landing on the Syangboche airstrip above Namche.",
    price: "US$2,000–4,000+",
    priceType: "Tandem / expedition inclusive",
    status: STATUS_EVENT_BASED,
    cta: "Get Everest Skydive Dates",
    interest: "Everest Skydive",
  },
  {
    id: "ama-dablam",
    name: "Ama Dablam Drop Zone",
    region: "Koshi Province",
    facts: [
      { label: "Drop zone", value: "Ama Dablam region" },
      { label: "Landing altitude", value: "~4,200 m" },
    ],
    description: "A higher-altitude variant associated with the same Everest-region expedition environment.",
    price: "Premium",
    status: STATUS_EVENT_BASED,
    cta: "Ask About Ama Dablam",
    interest: "Ama Dablam",
  },
  {
    id: "pokhara",
    name: "Pokhara Skydiving",
    region: "Gandaki Province · Kaski",
    facts: [
      { label: "Landing altitude", value: "~800 m" },
      { label: "Exit altitude", value: "~3,000–4,000 m" },
      { label: "Operation", value: "Occasional events" },
    ],
    description:
      "Occasional events using Pokhara Airport, with Annapurna scenery and lakeside landing possibilities.",
    price: "US$400–900",
    status: STATUS_EVENT_BASED,
    cta: "Ask About Pokhara Events",
    interest: "Pokhara",
  },
  {
    id: "demo",
    name: "Kathmandu / Nepalgunj Demo Jumps",
    region: "Bagmati / Lumbini",
    facts: [
      { label: "Altitude", value: "Low" },
      { label: "Format", value: "Demo / festival jumps" },
    ],
    description:
      "Airshow and festival jumps. These are demonstrations rather than public commercial skydiving products.",
    price: "—",
    status: STATUS_EVENT_BASED,
    cta: "Ask About Upcoming Events",
    interest: "Any Nepal Event",
  },
];

/* ---------- 6. Comparison table ---------- */

export const comparison = {
  heading: "Compare Skydiving Experiences in Nepal",
  columns: ["Site", "Province", "Drop / landing", "Exit altitude", "Experience", "Indicative price", "Status"],
  rows: [
    ["Everest Skydive", "Koshi / Solukhumbu", "Syangboche ~3,780 m", "~8,800–9,100 m", "Expedition", "US$2,000–4,000+", STATUS_EVENT_BASED],
    ["Ama Dablam", "Koshi / Solukhumbu", "~4,200 m", "Higher-altitude variant", "Premium expedition", "Premium", STATUS_EVENT_BASED],
    ["Pokhara", "Gandaki / Kaski", "~800 m", "~3,000–4,000 m", "Occasional event", "US$400–900", STATUS_EVENT_BASED],
    ["Kathmandu / Nepalgunj", "Bagmati / Lumbini", "Low", "—", "Demo / festival", "—", STATUS_EVENT_BASED],
  ],
  note: "Listed in no particular order. Figures are indicative and confirmed per event by the operator.",
};

/* ---------- 7. Expedition timeline ---------- */

export const timeline = {
  heading: "What the Everest Skydive Expedition Involves",
  steps: [
    { title: "Arrival", text: "Reach the Everest-region expedition base according to the operator's itinerary." },
    { title: "Acclimatisation", text: "Allow time for altitude acclimatisation as required by the expedition." },
    { title: "Weather window", text: "Wait for a suitable weather and aviation window." },
    { title: "Flight / lift", text: "Helicopter or fixed-wing aircraft takes the jump team toward the designated exit altitude." },
    { title: "Skydive", text: "Tandem or organised jump according to the operator's expedition format." },
    { title: "Landing", text: "Land at the designated Everest-region drop zone / Syangboche area." },
  ] satisfies InfoCard[],
  note: "Exact expedition schedules, altitude profiles and logistics are operator-dependent.",
};

/* ---------- 8. Flexibility ---------- */

export const flexibility = {
  heading: "Build Flexibility Into Your Itinerary",
  text: "Weather cancellations are common in high-altitude aviation environments. Travellers should avoid connecting the skydive too tightly to flights, treks or international departures.",
  cards: [
    { title: "Weather", text: "Cloud, wind and visibility can affect operations." },
    { title: "Aviation", text: "Aircraft and aviation clearances can affect the operating window." },
    { title: "Altitude", text: "High-altitude logistics require acclimatisation and additional planning." },
  ] satisfies InfoCard[],
};

/* ---------- 9. Oxygen & altitude ---------- */

export const altitudePlanning = {
  heading: "High-Altitude Planning Matters",
  text: "The Everest product involves extreme altitude. Oxygen, altitude acclimatisation and aviation clearance are part of the expedition planning.",
  cards: [
    { title: "Oxygen", text: "High-altitude operations involve specialised oxygen and aviation planning." },
    { title: "Acclimatisation", text: "The itinerary needs to allow for altitude acclimatisation." },
    { title: "Clearance", text: "The operation depends on aviation and operational clearances." },
  ] satisfies InfoCard[],
  note: "Exact requirements are determined by the operating expedition and aviation team.",
};

/* ---------- 10. Price driver ---------- */

export const priceDriver = {
  heading: "Why Does Everest Skydive Cost More?",
  statement: "Single jump vs full expedition",
  text: "A quoted price may represent only the jump or a much broader expedition package. Always check what is included.",
  core: { title: "Jump", text: "The actual tandem or skydiving experience." },
  extras: [
    { title: "Lodging", text: "Accommodation may be included in expedition packages." },
    { title: "Permits", text: "Expedition-related permits and logistics may form part of the package." },
    { title: "Acclimatisation", text: "Additional expedition days can be included in the itinerary." },
    { title: "Helicopter / aircraft", text: "High-altitude aviation lift can be a major component of the cost." },
    { title: "Expedition logistics", text: "Ground support and other operational services may be included." },
  ] satisfies InfoCard[],
  footnote: "Compare inclusions before comparing headline prices.",
};

/* ---------- 11. Price table ---------- */

export const priceTable = {
  heading: "Indicative Prices",
  rows: [
    { experience: "Everest Skydive", price: "US$2,000–4,000+", type: "Tandem / expedition inclusive" },
    { experience: "Ama Dablam", price: "Premium", type: "Expedition" },
    { experience: "Pokhara Skydive", price: "US$400–900", type: "Event-based" },
    { experience: "Kathmandu / Nepalgunj Demo", price: "—", type: "Not a public commercial product" },
  ],
  note: "Prices are indicative only and should be confirmed with the operator for the specific event or expedition date.",
};

/* ---------- 12. Audience ---------- */

export const audience = {
  heading: "Who Should Consider an Everest Skydive?",
  items: [
    { title: "Expedition travellers", text: "For travellers comfortable building an experience around fixed expedition dates." },
    { title: "Skydiving enthusiasts", text: "For those specifically seeking a high-altitude mountain skydive." },
    { title: "Everest region travellers", text: "For travellers already planning an Everest-region itinerary." },
    { title: "Photography & mountain lovers", text: "For people drawn to dramatic aerial mountain perspectives." },
  ] satisfies InfoCard[],
};

/* ---------- 13. Notification form ---------- */

export const notifySection = {
  heading: "Get Notified About Upcoming Skydiving Dates",
  text: "Skydiving dates in Nepal are announced around specific events and expedition windows. Leave your details and preferred destination so we can help you track upcoming opportunities.",
  cta: "Notify Me When Dates Are Announced",
};

/* ---------- 14. Upcoming dates (copy only — data lives in upcomingSkydivingDates.ts) ---------- */

export const upcomingSection = {
  heading: "Upcoming Skydiving Dates",
  emptyTitle: "No confirmed public dates currently listed.",
  emptyText:
    "Skydiving operations are event-based. Check back for newly announced expedition dates or submit your notification request.",
  cta: "Notify Me",
};

/* ---------- 15. Enquiry process ---------- */

export const enquirySteps = {
  heading: "How Skydiving Enquiries Work",
  steps: [
    { title: "Choose your experience", text: "Everest, Ama Dablam, Pokhara or another event." },
    { title: "Tell us your dates", text: "Provide your preferred travel period." },
    { title: "We check the expedition calendar", text: "Availability is confirmed operator by operator and season by season." },
    {
      title: "Review the package",
      text: "Confirm the jump, expedition inclusions, aviation arrangements and itinerary before proceeding.",
    },
  ] satisfies InfoCard[],
};

/* ---------- 16. Gallery ---------- */

export const gallery = {
  heading: "Skydiving Above the Himalaya",
  images: [
    { src: `${IMG}/everest-skydive.jpg`, alt: "Tandem skydive in freefall with Everest and Lhotse on the horizon", caption: "Everest region" },
    { src: `${IMG}/syangboche-skydive.jpg`, alt: "Skydiver canopy approaching the Syangboche airstrip above Namche Bazaar", caption: "Syangboche landing" },
    { src: `${IMG}/everest-aerial-skydive.jpg`, alt: "Aerial view of Himalayan peaks from skydiving exit altitude", caption: "From exit altitude" },
    { src: `${IMG}/ama-dablam-skydive.jpg`, alt: "Parachute descending in front of Ama Dablam, Solukhumbu", caption: "Ama Dablam" },
    { src: `${IMG}/pokhara-skydive.jpg`, alt: "Skydiving canopy over Pokhara valley with the Annapurna range", caption: "Pokhara" },
    { src: `${IMG}/nepal-skydiving-expedition.jpg`, alt: "Skydiving expedition team preparing equipment at a Himalayan drop zone", caption: "Expedition base" },
  ],
};

/* ---------- 17. Aerial comparison ---------- */

export const aerialComparison = {
  heading: "Other Ways to See Nepal From the Air",
  intro: "If your dates don't line up with a skydiving event, these aerial experiences are also available in Nepal.",
  columns: ["Paragliding", "Ultra-light", "Hot air balloon", "Mountain flight"],
  rows: [
    { label: "Where", values: ["Sarangkot & 7 others", "Pokhara only", "Pokhara", "Kathmandu"] },
    { label: "Engine", values: ["None", "Yes", "Burner", "Jet aircraft"] },
    { label: "Time aloft", values: ["15–45 min", "15–60 min", "45–60 min", "55–60 min"] },
    { label: "Adrenaline", values: ["Medium–high", "Low–medium", "Very low", "None"] },
    { label: "Best for", values: ["Thrill + view", "Steady photography", "Sunrise, couples, nervous flyers", "Everest, seniors, families"] },
    { label: "From", values: ["US$70", "US$90", "NPR 8,000", "US$215"] },
  ],
  links: [
    { label: "Paragliding in Nepal", href: "/activities/adventure/paragliding" },
    { label: "Ultra-light flights", href: "/activities/adventure/ultra-light-flight" },
  ],
  note: "Not ranked. Prices are indicative starting points.",
};

/* ---------- 18. Quick facts ---------- */

export const quickFacts = {
  heading: "Quick Facts",
  items: [
    { label: "Flagship experience", value: "Everest Skydive" },
    { label: "Drop zone", value: "Syangboche" },
    { label: "Landing altitude", value: "~3,780 m" },
    { label: "Exit altitude", value: "~8,800–9,100 m" },
    { label: "Season", value: "Usually autumn" },
    { label: "Price", value: "US$2,000–4,000+" },
    { label: "Availability", value: "Event-based" },
    { label: "Booking model", value: "Date notification / expedition enquiry" },
  ] satisfies Fact[],
};

/* ---------- 19. FAQ ---------- */

export const faqs: { q: string; a: string }[] = [
  {
    q: "Is skydiving available every day in Nepal?",
    a: "No. Skydiving is not a daily commercial activity across Nepal. Operations are event-based and confirmed operator by operator and season by season.",
  },
  {
    q: "What is Everest Skydive?",
    a: "Everest Skydive is an organised high-altitude skydiving experience associated with the Syangboche area of the Everest region.",
  },
  {
    q: "How high is the Everest Skydive exit?",
    a: "The supplied exit range is approximately 8,800–9,100 metres, with landing around 3,780 metres at Syangboche.",
  },
  {
    q: "How much does Everest Skydive cost?",
    a: "The indicative range is approximately US$2,000–4,000+ for tandem/expedition-inclusive products. The exact inclusions should be confirmed with the operator.",
  },
  {
    q: "What can I see during Everest Skydive?",
    a: "Depending on route, visibility and conditions, Everest, Ama Dablam and Lhotse may form part of the mountain backdrop.",
  },
  {
    q: "Does Everest Skydive require acclimatisation?",
    a: "Altitude acclimatisation is part of the expedition planning. Exact requirements and itinerary are determined by the operating expedition.",
  },
  {
    q: "Can weather cancel a skydive?",
    a: "Yes. Weather and aviation conditions can affect high-altitude operations, which is why expedition schedules require flexibility.",
  },
  {
    q: "Is there skydiving in Pokhara?",
    a: "Occasional event-based skydiving has been associated with Pokhara Airport, with indicative exit altitudes around 3,000–4,000 metres and landing around 800 metres.",
  },
  {
    q: "Can I book a Kathmandu skydiving jump?",
    a: "Kathmandu and Nepalgunj may host demonstration, airshow or festival jumps, but these are not presented as regular public commercial skydiving products.",
  },
  {
    q: "Why is Everest Skydive so expensive?",
    a: "Pricing can include much more than the jump itself, such as lodging, permits, acclimatisation days, helicopter or aircraft lift and other expedition logistics.",
  },
];

/* ---------- Brand footer ---------- */

export const brandFooter = {
  line1: "Karvaahh Tours & Travels · Adventure Activities",
  line2: "Hotspot Atlas · karvaahh.in",
};
