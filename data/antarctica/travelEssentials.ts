// data/antarctica/travelEssentials.ts
// Preparation, documentation and responsible-travel guidance. General
// guidance only: the expedition operator's own requirements always apply,
// and immigration rules are checked per traveller at the time of booking.

import type { IconKey } from "./types";

export interface EssentialGroup {
  id: string;
  title: string;
  icon: IconKey;
  items: { title: string; text: string }[];
}

export const essentialGroups: EssentialGroup[] = [
  {
    id: "documents",
    title: "Documents & insurance",
    icon: "book",
    items: [
      { title: "Passport", text: "Valid well beyond your return date, with blank pages. Check the exact rules for every country on your route." },
      { title: "Transit-country visas", text: "Depending on your passport and route, you may need visas or transit permission for South American and hub countries." },
      { title: "Travel insurance", text: "Most operators require cover that includes emergency medical evacuation from Antarctica. Check your operator's minimums." },
      { title: "Medical / fitness forms", text: "Some operators ask for a medical form signed by a doctor. Follow their requirements exactly." },
    ],
  },
  {
    id: "clothing",
    title: "Polar clothing",
    icon: "snowflake",
    items: [
      { title: "Base layers", text: "Thermal tops and leggings in merino or synthetic fabric. Avoid cotton." },
      { title: "Mid layers", text: "Fleece or light down for warmth you can add and remove." },
      { title: "Waterproof outerwear", text: "Waterproof, windproof jacket and over-trousers for Zodiac rides." },
      { title: "Gloves & hat", text: "Thin liner gloves plus waterproof outer gloves, a warm hat and a neck gaiter." },
      { title: "Boots", text: "Waterproof rubber boots are usually needed for landings; many operators lend or rent them. Check first." },
    ],
  },
  {
    id: "protection",
    title: "Sun & sea",
    icon: "sun",
    items: [
      { title: "Sunglasses", text: "Good UV protection: glare from snow and ice is intense." },
      { title: "Sunscreen & lip balm", text: "High SPF, even on cloudy days." },
      { title: "Seasickness preparation", text: "Discuss options with your doctor before travel, especially for a Drake crossing." },
    ],
  },
  {
    id: "gear",
    title: "Camera & gear",
    icon: "camera",
    items: [
      { title: "Camera equipment", text: "A zoom lens for wildlife, spare batteries (cold drains them) and plenty of memory cards." },
      { title: "Dry bag", text: "Protects gear from spray on Zodiac rides." },
      { title: "Binoculars", text: "For whales, seabirds and distant colonies." },
      { title: "Power adapters", text: "Socket types vary by ship. Check with your operator." },
    ],
  },
  {
    id: "onboard",
    title: "On board",
    icon: "ship",
    items: [
      { title: "Connectivity", text: "Internet at sea is typically limited, slow and sometimes paid. Expect to be largely offline." },
      { title: "Emergency procedures", text: "Attend the mandatory safety drill and follow crew instructions at all times." },
      { title: "Biosecurity", text: "Clothing and gear are cleaned before landings to avoid introducing seeds or soil." },
    ],
  },
];

export const ESSENTIALS_NOTE =
  "This is general guidance, not medical or legal advice. Always follow your expedition operator's official preparation and medical requirements.";

export const visaPoints = {
  intro:
    "Antarctica is not a conventional tourist destination with a single tourist visa. Instead, travellers usually need the right documentation for the countries they pass through on the way.",
  needs: ["Transit countries and hubs on your flight route", "Your departure country's exit requirements", "South American gateway countries such as Argentina or Chile"],
  dependsOn: ["Passport nationality", "Transit route", "Airline", "Expedition operator", "Current immigration rules"],
  nepalIndia: "For Nepal and India passport holders: verify all applicable transit and entry requirements before booking.",
  karvaahhHelps: ["Visa and document preparation assistance, where offered", "Route planning that considers your visa situation", "Itinerary, booking and supporting documentation"],
  disclaimer:
    "Visa decisions are made solely by the relevant authorities. Karvaahh cannot guarantee approval, and fees and processing times change, so we confirm them when you enquire.",
};

export const responsiblePrinciples: { title: string; text: string; icon: IconKey }[] = [
  { title: "Respect wildlife", text: "Watch quietly and let animals behave naturally.", icon: "binoculars" },
  { title: "Keep your distance", text: "Follow the minimum distances your expedition staff set, and give animals right of way.", icon: "compass" },
  { title: "Follow staff instructions", text: "Expedition guides decide where to walk, stand and land.", icon: "users" },
  { title: "Never disturb animals", text: "No feeding, touching or blocking their paths to the sea.", icon: "heart" },
  { title: "Take nothing", text: "Leave rocks, bones, feathers and shells exactly where they are.", icon: "mountain" },
  { title: "Follow landing protocols", text: "Biosecurity cleaning, group sizes and set routes protect each site.", icon: "shield" },
  { title: "Minimise your impact", text: "Leave no trace and pack out everything you bring ashore.", icon: "snowflake" },
  { title: "Respect polar guidelines", text: "Visits operate under the Antarctic Treaty System and industry visitor guidelines.", icon: "book" },
];
