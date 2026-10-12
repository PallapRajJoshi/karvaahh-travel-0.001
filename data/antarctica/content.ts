// data/antarctica/content.ts
// Page-level copy: hero, why Karvaahh, FAQs and internal links. FAQ answers
// are conservative on purpose: no guarantees on wildlife, ice, routes or visas.

import type { WhyItem } from "@/components/packages/international/asia/WhyKarvaahh";
import { ANTARCTICA_LINKS } from "@/lib/antarctica/config";
import type { AntarcticaImageId } from "./images";

export const antarcticaHero = {
  eyebrow: "Antarctica Expeditions · Karvaahh – Live to Travel",
  title: "Explore Antarctica",
  titleAccent: "The Last Great Wilderness",
  lede: "Journey beyond the edge of the familiar into a world of towering icebergs, glaciers, penguins, whales and extraordinary polar landscapes.",
  background: "zodiac-arch" as AntarcticaImageId,
  /** Depth layers drifting over the hero photo. */
  layers: ["tabular-berg", "humpback-fluke", "ship-gentoos"] as AntarcticaImageId[],
  route: ["Ushuaia", "Drake Passage", "South Shetland Islands", "Antarctic Peninsula"],
  facts: [
    { k: "Season", v: "Nov – Mar" },
    { k: "Typical voyage", v: "10–13 days" },
    { k: "Gateway", v: "Ushuaia" },
  ],
};

export const positioning = {
  eyebrow: "An expedition, not a holiday",
  title: "Antarctica is not simply a destination. It is an expedition.",
  text: "There are no hotels, no roads and no sightseeing coaches. You travel by expedition ship, land by Zodiac where it is permitted, and let ice, weather and wildlife shape each day. Karvaahh helps you choose the right voyage and handles every connection from Nepal or India to the pier.",
};

export const whyAntarctica: readonly WhyItem[] = [
  { icon: "compass", title: "Voyage matching", text: "We compare suitable operators, ships and departures for your style and budget." },
  { icon: "hotel", title: "Cabin guidance", text: "Honest advice on cabin categories, from standard to suites." },
  { icon: "plane", title: "Flights from Nepal & India", text: "Long-haul routings with sensible buffers before embarkation." },
  { icon: "passport", title: "Document support", text: "Transit-visa guidance and paperwork help, where offered. No approval guarantees." },
  { icon: "route", title: "South America extensions", text: "Patagonia, Buenos Aires or Chile, built around your voyage." },
  { icon: "headset", title: "One team, start to finish", text: "A single point of contact from first question to flight home." },
];

export const antarcticaFaqs: { question: string; answer: string }[] = [
  {
    question: "How can I travel to Antarctica from Nepal?",
    answer:
      "Most travellers fly from Kathmandu to South America through one or more international hubs, continue to Ushuaia in Argentina (or Punta Arenas in Chile for air-cruises), and join an expedition ship there. Karvaahh plans the full routing, overnight buffers and connections.",
  },
  {
    question: "How can I travel to Antarctica from India?",
    answer:
      "From Delhi, Mumbai, Bengaluru, Kolkata or other cities, you typically fly via a Middle East, European or other hub to Buenos Aires or Santiago, then on to Ushuaia or Punta Arenas. Exact routings depend on your dates, budget and visa situation.",
  },
  {
    question: "How many days does an Antarctica expedition take?",
    answer:
      "Classic Antarctic Peninsula voyages from Ushuaia typically last around 10 to 13 days. Air-cruises can be shorter, while voyages including South Georgia or the Falkland Islands / Malvinas often run 18 days or more. Add travel days from Nepal or India and at least one buffer night.",
  },
  {
    question: "What is the Antarctic Peninsula?",
    answer:
      "It is the mountainous arm of the Antarctic continent that reaches north towards South America. Its channels, glaciers, icebergs and wildlife colonies make it the focus of most tourist expeditions.",
  },
  {
    question: "What is the Drake Passage?",
    answer:
      "The stretch of Southern Ocean between Cape Horn and the South Shetland Islands. Ship-based voyages from Ushuaia typically spend around two days crossing each way. Conditions range from calm to rough, so seasickness preparation is sensible.",
  },
  {
    question: "Can I visit Antarctica without a cruise?",
    answer:
      "Almost all tourist visits are ship-based. Air-cruises fly you over the Drake Passage, but you still explore Antarctica from a ship. A small number of specialist fly-in programmes exist, with limited availability.",
  },
  {
    question: "What is an expedition cruise?",
    answer:
      "A voyage on a smaller, ice-strengthened ship with an expedition team. Instead of fixed port calls, the team plans landings and Zodiac excursions day by day around ice, weather and wildlife, at permitted sites.",
  },
  {
    question: "What is an air-cruise?",
    answer:
      "You fly from South America (typically Punta Arenas, Chile) to King George Island in the South Shetlands and board your ship there, skipping the Drake crossing by sea. Flights are weather-dependent and availability is limited, so buffer days are important.",
  },
  {
    question: "When is the Antarctica expedition season?",
    answer:
      "Tourist voyages typically run from about November to March, during the austral summer. Early season offers pristine snow, peak season the longest days and penguin chicks, and late season often stronger whale activity. Conditions vary every year.",
  },
  {
    question: "Will I see penguins?",
    answer:
      "Penguins are among the most commonly encountered wildlife on Peninsula voyages, but no sighting can be guaranteed. Which species and how many depends on your route, the season and the sites the expedition team can reach.",
  },
  {
    question: "Will I see whales?",
    answer:
      "Whale encounters are possible, especially later in the season, but they are never guaranteed. Humpback and minke whales are among the species sometimes seen; orcas are occasional and unpredictable.",
  },
  {
    question: "Is Antarctica suitable for a honeymoon?",
    answer:
      "Yes, for couples who want something truly extraordinary. Many choose a balcony or suite cabin and add a Buenos Aires or Patagonia stay. It is an expedition, so expect early starts and weather-led days rather than resort-style relaxation.",
  },
  {
    question: "Is Antarctica suitable for families?",
    answer:
      "It can be. Each operator sets its own minimum age and policies, and some offer family-friendly or educational content. We check those details for your family's ages before recommending a voyage.",
  },
  {
    question: "What clothing is required?",
    answer:
      "Layers: thermal base layers, a warm mid layer, and waterproof, windproof outer jacket and trousers, plus gloves, a hat, sunglasses and waterproof boots for landings. Many operators provide or lend a parka or boots. Follow your operator's packing list.",
  },
  {
    question: "Do I need travel insurance?",
    answer:
      "Yes. Most expedition operators require insurance that covers emergency medical evacuation from Antarctica, often with a specified minimum amount. Check your operator's exact requirements before buying a policy.",
  },
  {
    question: "What visas do I need for the transit country?",
    answer:
      "That depends on your passport, airline routing and the countries you pass through, such as Argentina, Chile and any hub country. Rules change, so we verify the current requirements for your specific route before you book.",
  },
  {
    question: "Can Karvaahh assist with documentation?",
    answer:
      "Karvaahh can help with travel planning, itinerary documents and visa preparation assistance where offered. Visa decisions are made by the relevant authorities, so approval can never be guaranteed.",
  },
  {
    question: "Can I combine Antarctica with Patagonia?",
    answer:
      "Yes. Patagonia pairs naturally with Antarctica: El Calafate and the Perito Moreno Glacier, Torres del Paine in Chile, or simply more time around Ushuaia. We build extensions before or after your voyage.",
  },
  {
    question: "Can I choose a luxury cabin?",
    answer:
      "Yes, subject to availability on your chosen departure. Categories typically range from standard to balcony and suite cabins, and premium vessels offer larger suites. We confirm what your ship actually offers.",
  },
  {
    question: "Can I customize my expedition?",
    answer:
      "Voyage itineraries are set by the operator, but almost everything around them can be tailored: the departure, cabin, flights, buffer nights, hotels and South America extensions. Use the trip builder or WhatsApp us to start.",
  },
];

/** Site links, rendered only once each route is live (see LIVE_ROUTES). */
export const antarcticaInternalLinks = [
  { label: "International tour packages", href: ANTARCTICA_LINKS.international },
  { label: "South America tour packages", href: ANTARCTICA_LINKS.southAmerica },
  { label: "Argentina tour packages", href: ANTARCTICA_LINKS.argentina },
  { label: "Chile tour packages", href: ANTARCTICA_LINKS.chile },
  { label: "Patagonia tours", href: ANTARCTICA_LINKS.patagonia },
  { label: "International flight booking", href: ANTARCTICA_LINKS.flights },
  { label: "Visa assistance services", href: ANTARCTICA_LINKS.visa },
  { label: "Honeymoon packages", href: ANTARCTICA_LINKS.honeymoon },
  { label: "Luxury tours", href: ANTARCTICA_LINKS.luxury },
  { label: "Wildlife tours", href: ANTARCTICA_LINKS.wildlife },
  { label: "Adventure tours", href: ANTARCTICA_LINKS.adventure },
  { label: "Europe tour packages", href: "/packages/international/europe" },
  { label: "USA tour packages", href: "/packages/international/usa" },
];
