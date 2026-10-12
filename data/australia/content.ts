// data/australia/content.ts
// Editorial content for /packages/international/australia, kept out of the JSX.

import type { WhyItem } from "@/components/packages/international/asia/WhyKarvaahh";
import type { AUImageId } from "./images";

export const australiaHero = {
  eyebrow: "Karvaahh • Australia International Tours",
  title: "Discover Australia",
  titleAccent: "Wild. Wonderful. Unforgettable.",
  lede: "From iconic cities and golden beaches to ancient landscapes, coral reefs and unforgettable wildlife, explore Australia with Karvaahh.",
  /** Full-bleed background (slow zoom). */
  background: "sydney-aerial" as AUImageId,
  /** Collage tiles, in layer order, with captions. */
  collage: [
    { id: "whitehaven", caption: "Whitsundays" },
    { id: "uluru-dusk", caption: "Uluru" },
    { id: "twelve-apostles", caption: "Great Ocean Road" },
    { id: "melbourne-skyline", caption: "Melbourne" },
    { id: "koala", caption: "Wildlife" },
  ] as { id: AUImageId; caption: string }[],
  /** Floating destination labels around the collage. */
  labels: ["Gold Coast", "Great Barrier Reef", "Tasmania", "Perth"],
  /** Destination ribbon across the bottom of the hero. */
  ribbon: ["Sydney", "Melbourne", "Great Ocean Road", "Gold Coast", "Brisbane", "Cairns", "Great Barrier Reef", "Whitsundays", "Perth", "Margaret River", "Tasmania", "Uluru", "Kakadu", "Kangaroo Island"],
  /** Flight arcs over the hero's dot map, by destination id. */
  routes: [
    ["sydney", "cairns"],
    ["melbourne", "uluru"],
    ["perth", "sydney"],
    ["sydney", "hobart"],
    ["gold-coast", "whitsundays"],
  ] as [string, string][],
};

export const storyline =
  "From Sydney's iconic harbour and Melbourne's culture to the Great Barrier Reef, Gold Coast beaches, Uluru's ancient landscape, Tasmania's wilderness and Australia's unforgettable wildlife, discover a country made for extraordinary journeys with Karvaahh.";

export const australiaVisa = {
  intro: "Entry requirements depend on your passport nationality, the visa category that fits your trip and current Australian immigration rules.",
  pathways: [
    { title: "Visitor visa (subclass 600)", text: "The usual pathway for tourism for many nationalities, including most Nepal and India passport holders. Applied for in advance, usually online." },
    { title: "ETA (601) or eVisitor (651)", text: "Available only to passport holders of eligible countries. Nepal and India passports are not currently eligible; check the official visa finder." },
  ],
  callout: "For travellers from Nepal and India: always verify the appropriate Australian visa pathway and current requirements before booking.",
  assist: ["Visa guidance", "Document preparation assistance", "Itinerary, hotel and booking documents"],
  noGuarantee: ["Visa approval", "Processing times", "Decisions at the border"],
  topics: [
    { title: "Passport validity", text: "Valid for your whole stay, with blank pages for stamps." },
    { title: "Financial & supporting documents", text: "Evidence you can fund the trip, plus employment, business or study ties as relevant." },
    { title: "Travel history", text: "Previous international travel, if any." },
    { title: "Accommodation", text: "Where you will stay throughout the trip." },
    { title: "Itinerary", text: "A clear day-by-day plan of where you will go." },
    { title: "Travel insurance", text: "Strongly recommended; health cover may be expected." },
    { title: "Health requirements", text: "Health examinations may apply in some cases." },
    { title: "Character requirements", text: "Applicants may be asked for police certificates or character information." },
  ],
  feesNote: "Visa fees and processing times change, so we never quote them here. We share current official information when you enquire.",
};

export const whyAustralia: WhyItem[] = [
  { icon: "local", title: "Nepal & India-based assistance", text: "International travel support from teams in Kathmandu and Delhi, in your time zone." },
  { icon: "route", title: "Customized itineraries", text: "Every Australia journey is planned around your dates, interests, pace and budget." },
  { icon: "hotel", title: "Hotel selection", text: "From family apartments to harbour-view five-star hotels and island resorts." },
  { icon: "plane", title: "Flight assistance", text: "International and domestic flights coordinated so the connections make sense." },
  { icon: "passport", title: "Visa & document guidance", text: "Guidance and document preparation where available; approval always rests with Australian authorities." },
  { icon: "car", title: "Airport transfers", text: "A driver waiting when you land, at every stop." },
  { icon: "compass", title: "Domestic travel planning", text: "The right mix of flights, drives, ferries and tours for a very big country." },
  { icon: "users", title: "Family & honeymoon planning", text: "Kid-friendly pacing or romantic touches, designed in from the start." },
  { icon: "camera", title: "Private & group tours", text: "Private guides and drivers, or small-group and escorted tours." },
  { icon: "headset", title: "Journey support", text: "A Karvaahh contact before you fly and while you travel." },
];

export const australiaFaqs: { question: string; answer: string }[] = [
  {
    question: "How can I plan an Australia trip from Nepal?",
    answer: "Start with your travel window and visa pathway. Karvaahh plans the itinerary, international flights from Kathmandu (usually with at least one connection), hotels, domestic flights and sightseeing, and can guide you through visa document preparation where available.",
  },
  {
    question: "How can I plan an Australia trip from India?",
    answer: "Tell us your departure city, dates and interests. We build the route, quote flights from your gateway (connections or nonstop options are confirmed for your exact dates), hotels, transfers and sightseeing, and can assist with visa documents where available.",
  },
  {
    question: "Which Australian destinations are best for first-time visitors?",
    answer: "Sydney, Melbourne, the Gold Coast and Cairns for the Great Barrier Reef are the classic first trip. Add Uluru for the outback or Tasmania for wilderness if you have more time.",
  },
  {
    question: "What visa do I need?",
    answer: "It depends on your passport. Most Nepal and India passport holders apply for a Visitor visa (subclass 600); some other nationalities may be eligible for an ETA or eVisitor. Always check current requirements on the official Australian Government website before booking.",
  },
  {
    question: "Can Karvaahh help with visa documentation?",
    answer: "Yes, where available, we provide guidance and help prepare itineraries and supporting documents. We cannot guarantee visa approval or processing times; those decisions rest with Australian authorities.",
  },
  {
    question: "How many days are needed for Australia?",
    answer: "A single city needs 4–5 days. Sydney with the Gold Coast or Melbourne takes 7–8 days; adding Cairns makes 9–11 days; a wider trip with Uluru or Western Australia needs two weeks or more. Australia is enormous, so we suggest choosing two or three regions.",
  },
  {
    question: "Is Australia suitable for a honeymoon?",
    answer: "Very. Harbour-view hotels in Sydney, island resorts in the Whitsundays, the Great Ocean Road, Uluru's desert skies and Tasmania's wilderness lodges all make memorable honeymoons.",
  },
  {
    question: "Is Australia suitable for family travel?",
    answer: "Yes. Beaches, wildlife sanctuaries, theme parks and the reef suit all ages. We plan family rooms, fewer hotel changes and manageable travel days.",
  },
  {
    question: "What is the best time to visit Australia?",
    answer: "There is no single best month. The south (Sydney, Melbourne) is pleasant in spring and autumn, Tasmania shines in summer, and the tropical north and outback are generally best from about May to October.",
  },
  {
    question: "Is the Great Barrier Reef suitable for families?",
    answer: "Often, yes. Pontoons, glass-bottom boats and semi-submersibles let non-swimmers see the coral, and many operators provide flotation. Age limits apply to some activities, and conditions are never guaranteed.",
  },
  {
    question: "Are theme park tickets included?",
    answer: "No, not unless your package explicitly lists them. Gold Coast theme parks are independent attractions; we advise on passes and add tickets on request.",
  },
  {
    question: "Are domestic flights included?",
    answer: "Only in packages that list them. Multi-city templates usually include domestic flights; your quote always states exactly what is included.",
  },
  {
    question: "Can I customize my Australia itinerary?",
    answer: "Every package is a starting point. Change cities, length, hotels, pace and experiences, or ask us to design a fully customized Australia tour.",
  },
  {
    question: "Can I combine Sydney, Melbourne and the Gold Coast?",
    answer: "Yes. It is one of our most popular routes, usually 9–10 nights with two short domestic flights.",
  },
  {
    question: "Can I include Uluru or Tasmania?",
    answer: "Yes. Uluru and Hobart are each about 1–3.5 hours by air from the east-coast cities depending on the route. Allow at least 2–3 nights for Uluru and 5–7 for Tasmania.",
  },
  {
    question: "Can I arrange a private Australia tour?",
    answer: "Yes. We arrange private transfers, private guides and chauffeured cars for city days, day trips and road trips.",
  },
];

/** Site links. Rendered only when the route is live (see LIVE_ROUTES). */
export const australiaInternalLinks = [
  { label: "International Tour Packages", href: "/packages/international" },
  { label: "Asia Tour Packages", href: "/packages/international/asia" },
  { label: "Europe Tour Packages", href: "/packages/international/europe" },
  { label: "USA Tour Packages", href: "/packages/international/usa" },
  { label: "Russia Tour Packages", href: "/packages/international/russia" },
  { label: "Australia Visa Assistance", href: "/services/visa-assistance" },
  { label: "International Flights", href: "/services/international-flights" },
  { label: "All Karvaahh Packages", href: "/packages" },
  { label: "Plan a Trip with Karvaahh", href: "/contact" },
];
