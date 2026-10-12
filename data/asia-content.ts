// data/asia-content.ts
// Editorial content for /packages/international/asia, kept out of the JSX.

import type { TravelStyleId } from "./travel-styles";

export const asiaHero = {
  eyebrow: "Karvaahh – Live to Travel · Asia",
  title: "Explore Asia, Your Way",
  lede: "Discover unforgettable journeys across Asia — from tropical beaches and luxury escapes to ancient cultures, vibrant cities, Himalayan adventures and tailor-made international holidays.",
  sub: "Customized international tours from Nepal & India.",
  /** Destination ids shown in the hero collage, in layer order. */
  collage: ["maldives", "japan", "thailand", "uae", "indonesia"],
  /** Floating pins on the collage edges: countries not already pictured. Four slots. */
  labels: ["Bhutan", "Vietnam", "Georgia", "Sri Lanka"],
};

/** Illustrative routes for the hero and map. Not actual flight routes. */
export const illustrativeRoutes: { from: string; to: string }[] = [
  { from: "nepal", to: "thailand" },
  { from: "nepal", to: "singapore" },
  { from: "nepal", to: "uae" },
  { from: "nepal", to: "japan" },
  { from: "india", to: "maldives" },
];

export const whyKarvaahh = [
  { icon: "route", title: "Customized Itineraries", text: "Design trips around your interests, dates and budget." },
  { icon: "hotel", title: "Hotel Selection", text: "Choose accommodation according to comfort and travel style." },
  { icon: "car", title: "Airport Transfers", text: "Convenient arrival and departure assistance where included." },
  { icon: "camera", title: "Sightseeing & Experiences", text: "Curated activities and destination experiences." },
  { icon: "plane", title: "Flight Assistance", text: "Support with international and domestic flight planning." },
  { icon: "passport", title: "Visa Guidance", text: "Visa guidance where offered and subject to destination regulations." },
  { icon: "shield", title: "Travel Insurance Assistance", text: "Support in selecting suitable travel insurance where available." },
  { icon: "receipt", title: "Transparent Pricing", text: "Clear package inclusions and exclusions." },
  { icon: "headset", title: "Travel Support", text: "Support from planning and booking through your return." },
] as const;

export const howItWorks = [
  { title: "Tell Us Your Plan", text: "Share your dates, departure city, travellers and the kind of trip you have in mind." },
  { title: "Choose Your Destination", text: "We suggest destinations that fit the season, your budget and your visa situation." },
  { title: "Customize Your Itinerary", text: "Adjust days, hotels, sightseeing and pace until the plan feels right." },
  { title: "Confirm Flights & Hotels", text: "Review a clear quote with inclusions and exclusions, then confirm." },
  { title: "Travel With Karvaahh", text: "Travel with your documents in order and a contact to reach while you are away." },
];

export const specialCollections: {
  id: string;
  title: string;
  text: string;
  style: TravelStyleId;
  destinations: string[];
  footnote?: string;
}[] = [
  {
    id: "honeymoon",
    title: "Honeymoon Packages",
    text: "Private villas, sunset dinners and slow island days.",
    style: "honeymoon",
    destinations: ["indonesia", "maldives", "thailand", "sri-lanka"],
    footnote: "Mauritius-style beach experiences are also available where Karvaahh operates.",
  },
  {
    id: "family",
    title: "Family Packages",
    text: "Theme parks, easy transfers and comfortable family rooms.",
    style: "family",
    destinations: ["singapore", "malaysia", "uae", "thailand", "japan"],
  },
  {
    id: "group",
    title: "Group Tours",
    text: "Flexible group itineraries with transport and sightseeing for friends, families and organisations.",
    style: "group",
    destinations: ["thailand", "vietnam", "uzbekistan", "uae"],
  },
  {
    id: "luxury",
    title: "Luxury Escapes",
    text: "Premium hotels, private transfers and exclusive experiences.",
    style: "luxury",
    destinations: ["maldives", "uae", "japan", "bhutan"],
  },
];

export type SeasonId = "spring" | "summer" | "autumn" | "winter";

export const seasons: { id: SeasonId; label: string; months: string; text: string; destinations: string[] }[] = [
  {
    id: "spring",
    label: "Spring",
    months: "March – May",
    text: "Cherry blossom in East Asia, mild days in the Caucasus and pleasant weather across much of Vietnam.",
    destinations: ["japan", "south-korea", "vietnam", "georgia"],
  },
  {
    id: "summer",
    label: "Summer",
    months: "June – August",
    text: "Head north and high: green mountains in Georgia and Central Asia, and festival season in Japan and Korea.",
    destinations: ["japan", "south-korea", "georgia", "kyrgyzstan", "kazakhstan", "mongolia"],
  },
  {
    id: "autumn",
    label: "Autumn",
    months: "September – November",
    text: "Autumn colour in Japan, clear Himalayan skies in Bhutan and comfortable sightseeing in Turkey and Uzbekistan.",
    destinations: ["japan", "turkey", "uzbekistan", "bhutan"],
  },
  {
    id: "winter",
    label: "Winter",
    months: "December – February",
    text: "Dry-season sunshine in the tropics and the most comfortable months in the Gulf.",
    destinations: ["thailand", "uae", "sri-lanka", "maldives"],
  },
];

export const visaPoints = [
  "Visa requirements vary by nationality and destination. Nepali and Indian passport holders often have different rules for the same country.",
  "Passport validity requirements vary. Many countries ask for at least six months' validity beyond your return date and blank pages for stamps.",
  "Entry rules can change, sometimes at short notice.",
  "Visa assistance may be available for selected destinations.",
  "Final visa approval is always decided by the relevant embassy or immigration authority, not by Karvaahh.",
  "Please verify current immigration requirements with official sources before you travel.",
];

export const travelServices = [
  { icon: "plane", title: "Flights", text: "International and domestic flight assistance where applicable." },
  { icon: "hotel", title: "Hotels", text: "Budget, premium and luxury accommodation options." },
  { icon: "meal", title: "Meals", text: "Meal plans based on the selected package." },
] as const;

export const asiaFaqs: { question: string; answer: string }[] = [
  {
    question: "What Asia tour packages does Karvaahh offer?",
    answer:
      "We plan holidays across Southeast Asia, South Asia, the Middle East and Caucasus, Central Asia and East Asia, including Thailand, Bali, Singapore, Malaysia, Dubai, the Maldives, Sri Lanka, Vietnam, Japan, Bhutan, Georgia and Azerbaijan. Most trips are tailored, so the journeys on this page are starting points rather than fixed departures.",
  },
  {
    question: "Can I customize an Asia tour package?",
    answer: "Yes. Dates, length, hotels, sightseeing, transfers and pace can all be adjusted to suit your group and budget.",
  },
  {
    question: "Can I book international tours from Nepal?",
    answer: "Yes. Karvaahh is based in Nepal and can plan trips departing from Kathmandu, including flight planning where it is part of your booking.",
  },
  {
    question: "Can I book international tours from India?",
    answer: "Yes. We also have a Delhi office and can plan trips departing from Indian cities.",
  },
  {
    question: "Do you provide visa assistance?",
    answer:
      "Visa guidance and assistance may be available for selected destinations. Requirements depend on your nationality, and the final decision always rests with the relevant embassy or immigration authority.",
  },
  {
    question: "How much passport validity is required?",
    answer:
      "It depends on the destination. Many countries require at least six months' validity beyond your return date and blank pages. Check the current rule for each country on your route before booking.",
  },
  {
    question: "Can Karvaahh arrange international flights?",
    answer: "We can help with international and domestic flight planning and booking where it is included in your trip.",
  },
  {
    question: "Is travel insurance included?",
    answer: "Not by default. We can help you choose suitable travel insurance where available, and we recommend it for every international trip.",
  },
  {
    question: "What are the best Asian destinations for honeymoon?",
    answer: "The Maldives, Bali, Thailand's islands and Sri Lanka are popular. Georgia, Japan and Bhutan suit couples who prefer culture and scenery.",
  },
  {
    question: "Which destinations are best for families?",
    answer: "Singapore, Dubai, Malaysia, Thailand and Japan are easy with children thanks to theme parks, good transport and family rooms.",
  },
  {
    question: "Which Asian destinations are budget-friendly?",
    answer: "Vietnam, Cambodia, Laos, Thailand and Sri Lanka usually offer good value. Your final cost depends on season, hotels and flights.",
  },
  {
    question: "Which destinations are best for luxury holidays?",
    answer: "The Maldives, Dubai, Japan, Bali and Bhutan have excellent premium stays and private experiences.",
  },
  {
    question: "How many days are ideal for an Asia tour?",
    answer: "Allow 4–6 days for a single city or island, 6–9 days for one country, and 9–14 days if you are combining countries.",
  },
  {
    question: "Can I combine multiple countries?",
    answer: "Yes. Popular combinations include Singapore with Malaysia, Thailand with Singapore, and Georgia with Azerbaijan. We check visas and flight links for each combination.",
  },
  {
    question: "Can I customize hotels?",
    answer: "Yes. You can choose budget, premium or luxury stays, subject to availability on your dates.",
  },
  {
    question: "Can I request private transfers?",
    answer: "Yes. Private airport and intercity transfers can be added to most itineraries.",
  },
  {
    question: "Are group tours available?",
    answer: "Yes. We plan group itineraries for friends, families, schools and organisations, with shared transport and sightseeing.",
  },
  {
    question: "What is included in an international tour package?",
    answer:
      "It varies by itinerary. Packages commonly include hotels, some meals, transfers and sightseeing; flights, visas and insurance may or may not be included. Every quote lists inclusions and exclusions clearly.",
  },
  {
    question: "What are the cancellation policies?",
    answer:
      "They depend on the package and on airline and hotel rules for your dates. The applicable policy is shared in writing with your quote, before you pay.",
  },
  {
    question: "Are all destinations available throughout the year?",
    answer:
      "No. Weather, seasonal closures, visas and travel regulations affect availability. We will tell you the best time for your chosen destination and any current restrictions.",
  },
];
