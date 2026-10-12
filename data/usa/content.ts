// data/usa/content.ts
// Editorial content for /packages/international/usa, kept out of the JSX.

import type { WhyItem } from "@/components/packages/international/asia/WhyKarvaahh";
import type { USAImageId } from "./images";

export const usaHero = {
  eyebrow: "Karvaahh • USA International Tours",
  title: "Discover the USA",
  titleAccent: "One Country. Endless Journeys.",
  lede: "From iconic cities and legendary road trips to national parks, beaches, theme parks and unforgettable family experiences, explore the United States with Karvaahh.",
  /** Full-bleed background (slow zoom). */
  background: "nyc-skyline" as USAImageId,
  /** Collage tiles, in layer order, with captions. */
  collage: [
    { id: "golden-gate", caption: "Golden Gate" },
    { id: "liberty", caption: "Statue of Liberty" },
    { id: "grand-canyon", caption: "Grand Canyon" },
    { id: "waikiki", caption: "Hawaii" },
    { id: "las-vegas", caption: "Las Vegas" },
  ] as { id: USAImageId; caption: string }[],
  /** Floating destination labels around the collage. */
  labels: ["Miami", "Orlando", "Washington DC", "Niagara Falls"],
  /** Destination ribbon across the bottom of the hero. */
  ribbon: ["New York", "Washington DC", "Niagara Falls", "Orlando", "Miami", "Las Vegas", "Grand Canyon", "Los Angeles", "San Francisco", "Hawaii", "Alaska"],
};

export const storyline =
  "From the energy of New York and the entertainment of Las Vegas to the beaches of Hawaii, the landscapes of the Grand Canyon, the magic of Orlando and the wilderness of Alaska, discover the United States through tailor-made journeys designed around you.";

export const usaVisa = {
  intro: "There is no single, identical USA tourist-entry process for every nationality. Travellers may qualify under different entry mechanisms depending on their passport.",
  mechanisms: [
    { title: "Visitor visa", text: "Many travellers, including most Nepal and India passport holders, need a U.S. visitor visa, applied for in advance." },
    { title: "Visa Waiver Program (ESTA)", text: "Citizens of participating Visa Waiver Program countries may travel with an approved ESTA, subject to eligibility." },
  ],
  callout: "Visa requirements must always be checked according to the traveller's passport and current U.S. rules.",
  assist: ["Visa guidance", "Document preparation assistance", "Itinerary and booking documents"],
  noGuarantee: ["Visa approval", "Appointment availability", "Immigration decisions at the border"],
  topics: [
    { title: "Passport validity", text: "Check validity for the whole trip and any blank-page needs." },
    { title: "DS-160 where applicable", text: "The online application form used for U.S. visitor visas." },
    { title: "Visa documentation", text: "Photos, fee receipts and appointment confirmations." },
    { title: "Interview where applicable", text: "Preparing for questions about your trip and ties to home." },
    { title: "Financial & supporting documents", text: "Evidence of funds, employment or business, as relevant." },
    { title: "Travel history", text: "Previous international travel, if any." },
    { title: "Accommodation & itinerary", text: "A clear plan of where you'll stay and what you'll do." },
    { title: "Travel insurance", text: "Strongly recommended for any USA trip." },
  ],
};

export const whyUSA: WhyItem[] = [
  { icon: "local", title: "Nepal & India-based", text: "International travel assistance from teams in Nepal and India, in your time zone." },
  { icon: "route", title: "Personalized itineraries", text: "Every USA journey is planned around your dates, interests, pace and budget." },
  { icon: "passport", title: "Visa & document guidance", text: "Guidance and document preparation where offered; approval always rests with U.S. authorities." },
  { icon: "hotel", title: "Hotel selection", text: "Hotels matched to your style, from family suites to iconic five-star addresses." },
  { icon: "plane", title: "Flights", text: "International and domestic flights coordinated so the connections make sense." },
  { icon: "car", title: "Transfers & transport", text: "Airport transfers, chauffeurs, rail and rental cars, whichever suits the route." },
  { icon: "camera", title: "Sightseeing", text: "Private tours or group tours, with tickets arranged on request." },
  { icon: "users", title: "Family & honeymoon planning", text: "Kid-friendly pacing or romantic touches, designed in from the start." },
  { icon: "headset", title: "Support throughout", text: "A Karvaahh contact before you fly and while you travel." },
];

export const usaFaqs: { question: string; answer: string }[] = [
  {
    question: "How can I plan a USA trip from Nepal?",
    answer: "Start with your travel window and visa status. Karvaahh plans the itinerary, international flights from Kathmandu (usually with a connection), hotels, domestic transport and sightseeing, and can guide you through visa document preparation where offered.",
  },
  {
    question: "How can I plan a USA trip from India?",
    answer: "Tell us your departure city, dates and interests. We build the route, quote flights from your gateway (connections are confirmed for your dates), hotels, transfers and sightseeing, and can assist with visa documents where offered.",
  },
  {
    question: "What visa do I need?",
    answer: "It depends on your passport. Many travellers, including most Nepal and India passport holders, need a U.S. visitor visa; citizens of Visa Waiver Program countries may be eligible for ESTA. Always check current U.S. rules for your passport.",
  },
  {
    question: "Can Karvaahh help with visa documentation?",
    answer: "Yes, where offered, we provide guidance and help prepare itineraries and supporting documents. We cannot guarantee visa approval, appointment availability or immigration decisions; those rest with U.S. authorities.",
  },
  {
    question: "What is the best time to visit the USA?",
    answer: "There is no single best season. Cities like New York and Los Angeles work year-round, Florida and Hawaii are warm-weather destinations, Alaska and Yellowstone are best in summer, and New England shines in autumn.",
  },
  {
    question: "How many days are needed for a USA trip?",
    answer: "A single city needs 4–5 days; an East Coast or West Coast circuit 7–10 days; coast to coast 12–16 days or more. The USA is vast, so we usually suggest focusing on one or two regions.",
  },
  {
    question: "Can I combine New York and California?",
    answer: "Yes. A domestic flight links the coasts in roughly five to six hours, so New York with Los Angeles, Las Vegas and San Francisco is a popular two-week plan.",
  },
  {
    question: "Can I add Niagara Falls?",
    answer: "Yes. Niagara Falls is a 1–2 night extension from New York by short flight or road, seen from the U.S. side. Boat tours operate seasonally.",
  },
  {
    question: "Can I combine the USA with Canada?",
    answer: "It's possible for travellers who meet Canada's entry requirements, which depend on your passport and visa status. Canada entry is never automatically included in a USA trip.",
  },
  {
    question: "Are theme park tickets included?",
    answer: "No, not unless your quote lists them. Theme parks such as Walt Disney World, Universal and Disneyland are independent commercial attractions; we advise on tickets and add them on request.",
  },
  {
    question: "Are national park fees included?",
    answer: "Not unless your quote lists them. Parks have their own entrance fees and, in some cases, timed-entry or activity reservations that change by season.",
  },
  {
    question: "Can I customize the itinerary?",
    answer: "Every package is a starting point. You can change cities, length, hotels, pace and experiences, or ask us to design a fully customized USA tour.",
  },
  {
    question: "Is private transportation available?",
    answer: "Yes. Private airport transfers, chauffeured cars for city days and road trips, and private guides can all be arranged.",
  },
  {
    question: "Can I arrange honeymoon packages?",
    answer: "Yes, with romantic hotels, private transfers, sunset experiences and special dinners where applicable, in places like New York, California, Las Vegas and Hawaii.",
  },
  {
    question: "Can I arrange family packages?",
    answer: "Yes. We plan family rooms, manageable days, theme parks and attractions with flexible pacing for children and grandparents.",
  },
  {
    question: "Can I arrange domestic flights?",
    answer: "Yes. We coordinate domestic flights between regions with your international tickets so the connections and baggage rules make sense.",
  },
];

/** Site links. Rendered only when the route is live (see LIVE_ROUTES). */
export const usaInternalLinks = [
  { label: "International Tour Packages", href: "/packages/international" },
  { label: "Asia Tour Packages", href: "/packages/international/asia" },
  { label: "Europe Tour Packages", href: "/packages/international/europe" },
  { label: "Russia Tour Packages", href: "/packages/international/russia" },
  { label: "USA Visa Guidance", href: "/services/visa-assistance" },
  { label: "International Flights", href: "/services/international-flights" },
  { label: "All Karvaahh Packages", href: "/packages" },
  { label: "Plan a Trip with Karvaahh", href: "/contact" },
];
