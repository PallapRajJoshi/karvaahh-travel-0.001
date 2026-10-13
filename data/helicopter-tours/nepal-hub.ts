/* ============================================================
   NEPAL HELICOPTER TOURS — PACKAGE HUB CONTENT
   ------------------------------------------------------------
   Content for /packages/nepal/helicopter-tours.

   FACTS ARE NOT REPEATED HERE. Duration, departure point,
   landing, arrangement, inclusions and prices are read from each
   tour's own data file (data/helicopter-tours/<slug>.ts), so the
   hub always matches the tour pages. This file only holds the
   editorial copy, tags and filter categories.

   CONTENT RULES (keep when editing):
   - No invented prices, schedules, aircraft capacity, landing
     permissions or availability.
   - Never promise a landing or that a flight will operate.
   ============================================================ */

import type { HelicopterTour } from "@/components/activities/experience/product-types";
import type { IconName, PageImage } from "@/components/activities/experience/types";
import { mountainScenicFlightPage } from "@/data/domestic-flights/mountain-scenic";
import { getHelicopterTour } from "./index";
import { everestSunset, khumbuSunrise, makaluBarun } from "./images";

export const HUB_PATH = "/packages/nepal/helicopter-tours";

export const HUB_SEO = {
  title: "Nepal Helicopter Tours – Everest, Annapurna & Muktinath | Karvaahh",
  socialTitle: "Nepal Helicopter Tours with Karvaahh",
  description:
    "Helicopter tours in Nepal with Karvaahh: Everest Base Camp, Annapurna, Muktinath, Langtang, Gosaikunda and Upper Mustang flights, scenic mountain flights and private charters.",
  keywords: [
    "Nepal helicopter tours",
    "Everest helicopter tour",
    "Everest Base Camp helicopter tour",
    "Annapurna Base Camp helicopter tour",
    "Muktinath helicopter tour",
    "Langtang helicopter tour",
    "Gosaikunda helicopter tour",
    "Everest mountain flight",
    "private helicopter charter Nepal",
  ],
  ogImage: everestSunset,
};

export const HERO_IMAGE = everestSunset;

/* ---------- Filter categories ---------- */

export type HubCategory = "everest" | "annapurna" | "spiritual" | "scenic" | "private";

export const HUB_CATEGORIES: { id: HubCategory | "all"; label: string }[] = [
  { id: "all", label: "All Tours" },
  { id: "everest", label: "Everest Region" },
  { id: "annapurna", label: "Annapurna Region" },
  { id: "spiritual", label: "Spiritual & Pilgrimage" },
  { id: "scenic", label: "Scenic Mountain Flights" },
  { id: "private", label: "Private Charter" },
];

/* ---------- Experience cards ---------- */

type TourEntry = {
  tour: HelicopterTour;
  /** 2–3 sentence card copy. */
  text: string;
  tags: string[];
  categories: HubCategory[];
  /** Card photo when it should differ from the tour's own. */
  image?: PageImage;
  /** Aircraft label when it is not a helicopter. */
  aircraft?: string;
};

const tour = (slug: string) => {
  const t = getHelicopterTour(slug);
  if (!t) throw new Error(`Unknown helicopter tour: ${slug}`);
  return t;
};

/** Every experience shown on the hub, in display order. */
export const HUB_TOURS: TourEntry[] = [
  {
    tour: tour("everest-base-camp"),
    text: "Fly from Kathmandu into the Khumbu for close aerial views of Mount Everest, Lhotse, Nuptse, Ama Dablam and the Khumbu Glacier. It is a way to see the Everest landscape in a single day, without a multi-day trek. Any landing in the Kala Patthar or Base Camp area is decided on the day and is never guaranteed.",
    tags: ["Everest & Lhotse", "Khumbu Glacier", "Same-day journey"],
    categories: ["everest"],
  },
  {
    tour: mountainScenicFlightPage,
    text: "A scenic flight from Kathmandu towards the eastern Himalaya, with views of Mount Everest and neighbouring peaks from the aircraft window. It returns to Kathmandu without landing, making it the simplest way to see Everest on a short stay.",
    tags: ["Everest skyline", "No trekking", "Short stay"],
    categories: ["everest", "scenic"],
    aircraft: "Fixed-wing flight",
    image: makaluBarun,
  },
  {
    tour: tour("annapurna"),
    text: "Fly from Pokhara up the Modi Khola gorge into the Annapurna Sanctuary, a natural amphitheatre of glaciers ringed by Annapurna, Machhapuchhre and Hiunchuli. A short landing near Annapurna Base Camp is possible only where weather and operations allow; on some days the flight is sightseeing only.",
    tags: ["Annapurna Sanctuary", "Machhapuchhre", "Glacier views"],
    categories: ["annapurna", "scenic"],
  },
  {
    tour: tour("muktinath-temple"),
    text: "A pilgrimage flight from Pokhara through the Kali Gandaki gorge, between Dhaulagiri and Annapurna, to Muktinath Temple in Mustang, sacred to Hindu and Buddhist devotees. Time for darshan follows the selected itinerary, which suits senior pilgrims and travellers with limited time.",
    tags: ["Muktinath darshan", "Kali Gandaki gorge", "Pilgrimage"],
    categories: ["spiritual", "annapurna"],
  },
  {
    tour: tour("langtang"),
    text: "The high Himalayan valley closest to Kathmandu, with views of the Langtang Himal, its glaciers and deep valleys. A short stop near Kyanjin Gompa is possible where permitted, and Gosaikunda can be added as an extension.",
    tags: ["Langtang Himal", "Kyanjin Gompa", "Close to Kathmandu"],
    categories: ["scenic"],
  },
  {
    tour: tour("gosaikunda"),
    text: "Fly from Kathmandu over forested hills and the ridges of Langtang National Park to Gosaikunda, the sacred high-altitude lake. A short landing at the lake is possible only where weather, regulations and operator approval allow.",
    tags: ["Sacred lake", "Langtang National Park", "Spiritual journey"],
    categories: ["spiritual", "scenic"],
  },
  {
    tour: tour("mardi-himal"),
    text: "A short, dramatic flight from Pokhara over rhododendron forest to the Mardi Himal ridge, face to face with Machhapuchhre, Annapurna South and Hiunchuli. One of the quickest ways to reach high Annapurna scenery, with an optional landing where approved.",
    tags: ["Machhapuchhre", "Short flight", "Ridge views"],
    categories: ["annapurna", "scenic"],
  },
  {
    tour: tour("upper-mustang"),
    text: "Fly from Pokhara through the Kali Gandaki corridor into the high desert of Upper Mustang, over cliff villages, eroded canyons and the walled city of Lo Manthang. Upper Mustang is a restricted area, and landings are made only where permitted.",
    tags: ["Lo Manthang", "Trans-Himalayan desert", "Heritage"],
    categories: ["annapurna"],
  },
  {
    tour: tour("manaslu"),
    text: "Fly from Kathmandu up the Budhi Gandaki valley towards Samagaun, beneath Manaslu, the world's eighth-highest mountain. Offered as a private or custom charter, with short stops only where permitted.",
    tags: ["Manaslu", "Remote valleys", "Private charter"],
    categories: ["scenic", "private"],
  },
  {
    tour: tour("rara"),
    text: "A private journey from Nepalgunj to Rara, Nepal's largest lake, in the remote Karnali highlands of western Nepal. Choose a day flight or an overnight escape; landing is only where permitted.",
    tags: ["Rara Lake", "Far-west Nepal", "Offbeat"],
    categories: ["scenic", "private"],
  },
  {
    tour: tour("kailash-aerial-darshan"),
    text: "A darshan flight from Nepalgunj towards the Nepal–Tibet border to view Mount Kailash and Lake Mansarovar from the air, without landing in Tibet. It operates only when an operator and all approvals are in place.",
    tags: ["Kailash darshan", "Aerial only", "Pilgrimage"],
    categories: ["spiritual"],
  },
];

/** The private charter card has no tour page: its CTA opens the enquiry form. */
export const PRIVATE_CHARTER = {
  id: "private-charter",
  title: "Private Himalayan Charter",
  text: "Charter a whole helicopter on a route planned around you — a private sightseeing flight, a special celebration or an itinerary combining more than one region. Karvaahh confirms the route, landings, permits and price with the operator before you book.",
  tags: ["Your own helicopter", "Flexible route", "Celebrations"],
  categories: ["private"] as HubCategory[],
  image: khumbuSunrise as PageImage,
  region: "Across Nepal",
  from: "Kathmandu, Pokhara or Nepalgunj",
  duration: "Planned around your route",
  landing: "Only at approved locations",
  arrangement: "Private",
  enquiryType: "Private helicopter charter",
};

/** Flagship tours shown as full package cards, by slug. */
export const FEATURED_PACKAGES = ["everest-base-camp", "annapurna", "muktinath-temple", "gosaikunda", "langtang", "upper-mustang"];

/* ---------- Why a helicopter tour ---------- */

export const WHY_HELICOPTER: { icon: IconName; title: string; text: string }[] = [
  { icon: "mountainSnow", title: "Aerial Himalayan perspectives", text: "See peaks, glaciers and valleys from angles that no trail or viewpoint can offer." },
  { icon: "route", title: "Remote places, shorter journeys", text: "Reach selected high-mountain destinations in hours rather than the days a trek would take." },
  { icon: "clock", title: "Made for limited time", text: "A major Himalayan experience that fits into a single day of a short Nepal stay." },
  { icon: "heart", title: "Private & special occasions", text: "Charter a helicopter for a celebration, a proposal or a journey with just your family." },
  { icon: "landmark", title: "Pilgrimage made practical", text: "Fly to sacred sites such as Muktinath and Gosaikunda, with darshan as per the itinerary." },
  { icon: "camera", title: "Exceptional photography", text: "Wide Himalayan panoramas and close mountain faces, weather and visibility permitting." },
  { icon: "users", title: "An alternative to trekking", text: "For travellers who prefer not to — or cannot — spend days walking at altitude." },
];

/* ---------- How it works ---------- */

export const HOW_IT_WORKS: { title: string; text: string }[] = [
  { title: "Choose Your Experience", text: "Select an available scenic flight, mountain tour, pilgrimage journey or private charter." },
  { title: "Confirm Your Details", text: "Review the itinerary, passenger requirements, inclusions and operating conditions with our team." },
  { title: "Check Flight Conditions", text: "The operator assesses weather, visibility and operational feasibility before departure." },
  { title: "Depart for the Himalayas", text: "Enjoy the scheduled aerial journey when conditions permit." },
  { title: "Return or Continue as Planned", text: "Follow the confirmed itinerary, including any authorised landing or return arrangements." },
];

/* ---------- Travel & safety information ---------- */

export const TRAVEL_INFO: { icon: IconName; title: string; text: string }[] = [
  {
    icon: "sun",
    title: "Best Time for Helicopter Tours",
    text: "Spring and autumn usually bring the clearest mountain views and are often preferred. Suitability still depends on the route, the season, visibility and conditions on the day.",
  },
  {
    icon: "cloud",
    title: "Weather & Flight Operations",
    text: "Mountain flights are highly weather dependent. They may be delayed, rerouted, shortened or cancelled for safety reasons, and the pilot's decision is final.",
  },
  {
    icon: "mountainSnow",
    title: "High-Altitude Landings",
    text: "When a high stop is included and authorised, expect cold conditions, limited time on the ground and possible altitude-related discomfort. Landings are never guaranteed.",
  },
  {
    icon: "luggage",
    title: "Passenger Preparation",
    text: "Follow the operator's guidance on warm clothing, baggage allowance, weight limits, identification, health considerations and passenger eligibility.",
  },
  {
    icon: "umbrella",
    title: "Travel Insurance",
    text: "Check that your insurance covers helicopter travel and high altitude, including emergency and evacuation circumstances relevant to your plans.",
  },
  {
    icon: "leaf",
    title: "Responsible Tourism",
    text: "Respect sacred sites, local communities, wildlife and protected landscapes. Follow local customs, and take any waste back with you.",
  },
];

/* ---------- FAQs ---------- */

export const HUB_FAQS: { question: string; answer: string }[] = [
  {
    question: "What helicopter tours are available in Nepal?",
    answer:
      "Karvaahh arranges helicopter tours from Kathmandu to Everest, Langtang, Gosaikunda and Manaslu; from Pokhara to Annapurna Base Camp, Mardi Himal, Muktinath and Upper Mustang; and from Nepalgunj to Rara Lake and a Kailash aerial darshan. Scenic mountain flights and private charters are also available. Every flight is confirmed with the operator at enquiry.",
  },
  {
    question: "Can I take a helicopter tour to see Mount Everest?",
    answer:
      "Yes. The Everest Base Camp Helicopter Tour flies from Kathmandu into the Khumbu for close views of Everest and its neighbouring peaks. For a shorter option, the fixed-wing Mountain Scenic Flight shows Everest from the air in about 50–60 minutes, without landing.",
  },
  {
    question: "How long does an Everest helicopter tour take?",
    answer:
      "Typically around 4–5 hours from departure to return to Kathmandu. The exact duration depends on weather, air traffic, stops and helicopter operations on the day.",
  },
  {
    question: "Are helicopter landings at Everest Base Camp guaranteed?",
    answer:
      "No. Landings in the Everest Base Camp area are limited by aviation regulations, weather and local conditions, so the area is usually experienced from the air. Any landing, including at Kala Patthar, is decided on the day by the operator and pilot.",
  },
  {
    question: "Can I visit Muktinath by helicopter?",
    answer:
      "Yes. The Muktinath Helicopter Tour flies from Pokhara through the Kali Gandaki valley to Muktinath, typically taking around 3–4 hours in total, with time for darshan as per the selected itinerary. Landing locations and timings depend on weather and operator requirements.",
  },
  {
    question: "What is the best season for a Himalayan helicopter tour?",
    answer:
      "Spring and autumn usually offer the clearest skies and are the most popular seasons. Clear winter days are possible but cold, while monsoon cloud often limits visibility. Suitability depends on the route and the conditions on the day.",
  },
  {
    question: "Can helicopter flights be cancelled because of weather?",
    answer:
      "Yes. Mountain flights may be delayed, rerouted, rescheduled or cancelled because of weather, visibility or aviation restrictions. Karvaahh explains the rescheduling terms of your selected package before you book.",
  },
  {
    question: "Are private helicopter charters available?",
    answer:
      "Yes. Most routes can be booked as a private charter, and the Manaslu and Rara tours are offered as private or custom flights only. Routes, landings, permits and prices are confirmed with the operator on request.",
  },
  {
    question: "What should I bring on a helicopter tour?",
    answer:
      "Warm layers, sunglasses, sun protection, a camera and your passport or government ID. Carry only a small bag — the operator confirms the baggage and weight limits before the flight.",
  },
  {
    question: "How can I enquire about helicopter tours with Karvaahh Travels?",
    answer:
      "Use any Enquire button on this page to send your preferred tour, dates and number of travellers to our team on WhatsApp, or reach us through the Contact page. We confirm availability, inclusions and the price before you book.",
  },
];

/* ---------- Related links ---------- */

export const HUB_RELATED = [
  { label: "All helicopter tours", href: "/activities/helicopter-tours" },
  { label: "Kailash Mansarovar Helicopter Yatra", href: "/activities/helicopter-tours/kailash-mansarovar" },
  { label: "Nepal spiritual & pilgrimage tours", href: "/packages/nepal/spiritual-pilgrimage-tours" },
  { label: "Everest Base Camp Trek", href: "/adventure/everest-base-camp-trek" },
  { label: "Langtang Valley Trek", href: "/adventure/langtang-valley-trek" },
  { label: "Contact Karvaahh", href: "/contact" },
];
