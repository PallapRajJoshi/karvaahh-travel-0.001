/* ============================================================
   JAMMU & KASHMIR TOUR PACKAGES — PAGE CONTENT
   ------------------------------------------------------------
   Content for /packages/jammu-kashmir.

   ACCURACY RULES (keep when editing):
   - The only bookable Karvaahh product in Jammu & Kashmir is the
     Amarnath & Vaishno Devi Yatra. Its duration, route and
     inclusions are read from that page's own data. Every other
     travel style is planned on request — no price, duration, hotel,
     meal plan or discount is invented here.
   - Links point only at pages that exist in this project.
   - Jammu (the Jammu region) and the Kashmir Valley are kept
     distinct. Beliefs are described as tradition, not fact.
   - No snowfall, road opening, gondola schedule, permit or
     year-round access is guaranteed.
   ============================================================ */

import type { RelatedTour } from "@/components/activities/experience/product-types";
import { INCLUSIONS as AVD_INCLUSIONS } from "@/components/spiritual-journeys/amarnath-vaishno-devi/data/content";
import { ITINERARY_PLANS as AVD_PLANS } from "@/components/spiritual-journeys/amarnath-vaishno-devi/data/itinerary";
import type { Assurance, Destination, Experience, Faq, FilterId, GuideBlock, ItineraryDay, JkPackage, Season, TravelStyle } from "./types";
import * as I from "./images";

export const PAGE_PATH = "/packages/jammu-kashmir";
export const PAGE_TITLE = "Jammu & Kashmir Tour Packages";

export const SEO = {
  title: "Jammu Kashmir Tour Packages | Srinagar, Gulmarg, Pahalgam & Vaishno Devi | Karvaahh",
  socialTitle: "Jammu & Kashmir Tour Packages — Karvaahh",
  description:
    "Plan Jammu Kashmir tour packages with Karvaahh: Srinagar Gulmarg Pahalgam tours, Kashmir family holiday packages, honeymoons, winter snow trips and the Vaishno Devi pilgrimage — customised around your dates and travel style.",
  keywords: [
    "Jammu Kashmir tour packages",
    "Kashmir tour packages",
    "Srinagar Gulmarg Pahalgam tour",
    "Kashmir family holiday packages",
    "Kashmir honeymoon package",
    "Vaishno Devi tour package",
    "Kashmir winter snow holiday",
    "Dal Lake houseboat stay",
  ],
  ogImage: { src: I.og.src, alt: I.og.alt },
};

const AVD = "/spiritual-journeys/amarnath-vaishno-devi-yatra";
const VAISHNO_DEVI = `${AVD}#vaishno-devi-journey`;

/** Pre-filled enquiry on /contact (see lib/contact/prefill.ts). */
const enquiry = (destination: string, type: "india-tours" | "family" | "honeymoon" | "spiritual-pilgrimage" | "adventure-trekking" | "customized" = "customized") =>
  `/contact?${new URLSearchParams({ type, destination }).toString()}`;

export const CUSTOM_ENQUIRY = enquiry("Jammu & Kashmir tour");

/* ============================================================
   DESTINATION FILTERS (labels; membership lives on each place)
   ============================================================ */

export const FILTERS: { id: FilterId | "all"; label: string }[] = [
  { id: "all", label: "All Destinations" },
  { id: "kashmir", label: "Kashmir Valley" },
  { id: "jammu", label: "Jammu Region" },
  { id: "lakes", label: "Lakes & Meadows" },
  { id: "snow", label: "Snow & Adventure" },
  { id: "pilgrimage", label: "Pilgrimage" },
  { id: "family", label: "Family Friendly" },
];

/* ============================================================
   DESTINATIONS
   ============================================================ */

const place = (x: Omit<Destination, "active">): Destination => ({ active: true, ...x });

export const DESTINATIONS: Destination[] = [
  /* ---------- Kashmir Valley ---------- */
  place({
    id: "srinagar",
    name: "Srinagar",
    location: "Kashmir Valley · Summer capital",
    region: "kashmir",
    text: "Houseboats and shikaras on Dal Lake, terraced Mughal Gardens along the shore and the lanes and markets of the old city. The natural base for exploring the valley.",
    tags: ["Dal Lake", "Houseboats", "Shikara rides", "Mughal Gardens", "Local markets"],
    filters: ["kashmir", "lakes", "family"],
    image: I.srinagar,
    tourType: "Srinagar, Gulmarg & Pahalgam tour",
  }),
  place({
    id: "gulmarg",
    name: "Gulmarg",
    location: "Kashmir Valley · Pir Panjal range",
    region: "kashmir",
    text: "Wide meadows ringed by pine forest and peaks. The Gulmarg Gondola climbs towards the high slopes, and in winter the resort is one of India's best-known places for snow and skiing.",
    tags: ["Gondola", "Snow", "Skiing", "Meadows"],
    filters: ["kashmir", "snow", "family"],
    image: I.gulmarg,
    note: "Gondola operations, ski conditions and snow cover depend on weather and the operator's schedule.",
    tourType: "Kashmir winter snow holiday",
  }),
  place({
    id: "pahalgam",
    name: "Pahalgam",
    location: "Kashmir Valley · Lidder Valley",
    region: "kashmir",
    text: "A riverside town on the Lidder, with pine forests and side valleys close by — Betaab Valley and Aru Valley are popular excursions. It is also a traditional base for the Amarnath pilgrimage.",
    tags: ["Lidder River", "Betaab Valley", "Aru Valley", "Riverside walks"],
    filters: ["kashmir", "lakes", "family", "pilgrimage"],
    image: I.pahalgam,
    link: { href: AVD, label: "Amarnath via Pahalgam" },
    tourType: "Srinagar, Gulmarg & Pahalgam tour",
  }),
  place({
    id: "sonamarg",
    name: "Sonamarg",
    location: "Kashmir Valley · Sindh Valley",
    region: "kashmir",
    text: "Glacier-fed streams and alpine meadows below snow peaks, with viewpoints and seasonal excursions towards nearby glaciers. Close to Baltal, the shorter route to Amarnath.",
    tags: ["Alpine meadows", "Glaciers", "Viewpoints"],
    filters: ["kashmir", "lakes", "snow"],
    image: I.sonamarg,
    note: "Mainly a summer and early-autumn destination; the road beyond can close with winter snow.",
    tourType: "Kashmir scenic & photography tour",
  }),
  place({
    id: "doodhpathri",
    name: "Doodhpathri",
    location: "Kashmir Valley · Budgam district",
    region: "kashmir",
    text: "Open meadows, clear streams and pine woods — a quiet day out from Srinagar for travellers who want peaceful nature rather than busy viewpoints.",
    tags: ["Meadows", "Streams", "Nature escape"],
    filters: ["kashmir", "lakes", "family"],
    image: I.doodhpathri,
    note: "Best enjoyed from spring to autumn; winter access depends on snow and road conditions.",
    tourType: "Kashmir scenic & photography tour",
  }),

  /* ---------- Jammu region ---------- */
  place({
    id: "jammu",
    name: "Jammu",
    location: "Jammu region · City of Temples",
    region: "jammu",
    text: "Known as the City of Temples, Jammu is the usual arrival point for Katra and the Vaishno Devi pilgrimage. The old city's temples and cultural sights are worth a few hours on the way.",
    tags: ["Temples", "Culture", "Gateway city"],
    filters: ["jammu", "pilgrimage"],
    image: I.jammu,
    tourType: "Jammu & Vaishno Devi pilgrimage",
  }),
  place({
    id: "katra",
    name: "Katra",
    location: "Jammu region · Foot of the Trikuta Hills",
    region: "jammu",
    text: "The base town for the Mata Vaishno Devi pilgrimage, where pilgrims register, rest and begin the uphill path into the Trikuta Hills.",
    tags: ["Pilgrimage base", "Registration", "Rest stop"],
    filters: ["jammu", "pilgrimage", "family"],
    image: I.katra,
    link: { href: VAISHNO_DEVI, label: "Vaishno Devi journey" },
    tourType: "Jammu & Vaishno Devi pilgrimage",
  }),
  place({
    id: "vaishno-devi",
    name: "Vaishno Devi",
    location: "Jammu region · Trikuta Hills",
    region: "jammu",
    text: "One of India's most visited shrines, reached by a long uphill path from Katra. Devotees traditionally make the journey to seek the blessings of the Mother Goddess.",
    tags: ["Pilgrimage", "Darshan", "Trikuta Hills"],
    filters: ["jammu", "pilgrimage", "family"],
    image: I.vaishnoDevi,
    note: "Registration and current access arrangements are set by the Shrine Board.",
    link: { href: VAISHNO_DEVI, label: "Vaishno Devi journey" },
    tourType: "Jammu & Vaishno Devi pilgrimage",
  }),
  place({
    id: "patnitop",
    name: "Patnitop",
    location: "Jammu region · Udhampur district",
    region: "jammu",
    text: "A hill resort among deodar forests with wide mountain views and easy nature walks. Seasonal snow can make it a winter getaway from Jammu.",
    tags: ["Mountain views", "Nature walks", "Seasonal snow"],
    filters: ["jammu", "snow", "family"],
    image: I.patnitop,
    note: "Snowfall varies each winter and is never guaranteed.",
    tourType: "Customized Jammu & Kashmir tour",
  }),
];

/* ============================================================
   VERIFIED PACKAGE (read from the Amarnath & Vaishno Devi page)
   ============================================================ */

const avdDays = AVD_PLANS.map((p) => p.days.length);

export const PACKAGES: JkPackage[] = [
  {
    id: "amarnath-vaishno-devi",
    title: "Amarnath & Vaishno Devi Yatra",
    kind: "Pilgrimage",
    destinations: ["Jammu", "Katra", "Pahalgam / Baltal", "Srinagar (optional)"],
    duration: `Sample plans: ${Math.min(...avdDays)}–${Math.max(...avdDays)} days`,
    highlights: [
      "Mata Vaishno Devi darshan from Katra",
      "Amarnath via the Baltal or Pahalgam route, as officially scheduled",
      "Optional Srinagar extension with Dal Lake",
    ],
    inclusions: AVD_INCLUSIONS.slice(0, 4),
    image: I.vaishnoDevi,
    href: AVD,
    tourType: "Amarnath & Vaishno Devi Yatra",
  },
];

/* ============================================================
   TRAVEL STYLES (planned on request)
   ============================================================ */

export const TRAVEL_STYLES: TravelStyle[] = [
  {
    id: "family",
    title: "Kashmir Family Holiday",
    icon: "users",
    text: "Gentle pacing, comfortable stays and sightseeing that works for children and older travellers alike.",
    covers: ["Srinagar", "Gulmarg", "Pahalgam"],
    points: ["Shikara ride and Mughal Gardens", "Meadow days in Gulmarg and Pahalgam", "Unhurried drives with rest stops"],
    image: I.family,
    tourType: "Kashmir family holiday",
  },
  {
    id: "honeymoon",
    title: "Honeymoon & Couple Escapes",
    icon: "heart",
    text: "A houseboat night on Dal Lake, quiet valleys and time to slow down together.",
    covers: ["Srinagar", "Gulmarg", "Pahalgam", "Sonamarg"],
    points: ["Houseboat stay on request", "Sunset shikara on Dal Lake", "Private transport at your pace"],
    image: I.couple,
    tourType: "Kashmir honeymoon",
  },
  {
    id: "classic",
    title: "Srinagar – Gulmarg – Pahalgam Tour",
    icon: "route",
    text: "The classic Kashmir Valley circuit: lakes and gardens, alpine meadows and the Lidder Valley.",
    covers: ["Srinagar", "Gulmarg", "Pahalgam", "Sonamarg (optional)"],
    points: ["Dal Lake and the old city", "Gulmarg meadows and Gondola (subject to operations)", "Betaab and Aru valleys near Pahalgam"],
    image: I.pahalgam,
    tourType: "Srinagar, Gulmarg & Pahalgam tour",
  },
  {
    id: "scenic",
    title: "Scenic & Photography Tour",
    icon: "camera",
    text: "Early starts and golden-hour stops, built around light, seasons and viewpoints.",
    covers: ["Srinagar", "Sonamarg", "Doodhpathri", "Pahalgam"],
    points: ["Spring blossoms or autumn chinar colours", "Quieter meadows away from the crowds", "Flexible timing for the best light"],
    image: I.autumnChinar,
    tourType: "Kashmir scenic & photography tour",
  },
  {
    id: "winter",
    title: "Winter Snow Holiday",
    icon: "snow",
    text: "Snow-covered Gulmarg, frosty mornings in Srinagar and warm kahwa by the fire.",
    covers: ["Srinagar", "Gulmarg", "Patnitop (optional)"],
    points: ["Snow play and beginner skiing where available", "Gondola rides subject to weather", "Routes planned around road conditions"],
    image: I.gulmargWinter,
    tourType: "Kashmir winter snow holiday",
  },
  {
    id: "vaishno",
    title: "Jammu & Vaishno Devi Pilgrimage",
    icon: "landmark",
    text: "Arrive in Jammu, rest in Katra and make the pilgrimage to Mata Vaishno Devi in the Trikuta Hills.",
    covers: ["Jammu", "Katra", "Vaishno Devi"],
    points: ["Guidance on Shrine Board registration", "Rest time in Katra", "Can be combined with the Kashmir Valley"],
    image: I.katra,
    link: { href: VAISHNO_DEVI, label: "See the Vaishno Devi journey" },
    tourType: "Jammu & Vaishno Devi pilgrimage",
  },
];

/* ============================================================
   SUGGESTED ITINERARY — illustrative, not a bookable package
   ============================================================ */

export const SAMPLE_ROUTE = {
  title: "Srinagar, Gulmarg & Pahalgam in Six Days",
  duration: "6 days · customisable",
  tourType: "Srinagar, Gulmarg & Pahalgam tour",
  notice:
    "Suggested itinerary — customizable. This is an illustrative outline, not a fixed Karvaahh package. Routes, travel times and excursions depend on the season, weather and road conditions, and are confirmed when we plan your trip.",
  days: [
    { title: "Arrive in Srinagar", text: "Meet on arrival, check in and settle in with an easy evening by the lake." },
    { title: "Srinagar & Dal Lake", text: "Mughal Gardens, the old city and a shikara ride on Dal Lake." },
    { title: "Excursion to Gulmarg", text: "Meadows, mountain views and the Gondola — subject to weather, road conditions and operations." },
    { title: "Travel to Pahalgam", text: "Drive into the Lidder Valley and explore the riverside." },
    { title: "Pahalgam valleys", text: "Local sightseeing such as Betaab or Aru Valley, then onward as your itinerary plans." },
    { title: "Departure from Srinagar", text: "Transfer for your onward journey." },
  ] satisfies ItineraryDay[],
};

/* ============================================================
   EXPERIENCES
   ============================================================ */

export const EXPERIENCES: Experience[] = [
  {
    id: "houseboat",
    eyebrow: "Lake Life",
    title: "Houseboat Stays & Shikara Rides",
    text: "Carved cedar houseboats moored along Dal and Nigeen lakes are one of Kashmir's most distinctive stays. Glide out by shikara at dawn or dusk, past floating gardens and lakeside life.",
    points: ["A night or two on a houseboat, on request", "Shikara rides at sunrise or sunset", "Floating gardens and lakeside markets"],
    where: "Dal Lake, Srinagar",
    image: I.shikara,
  },
  {
    id: "culture",
    eyebrow: "Culture & Cuisine",
    title: "Kashmiri Flavours and Craft",
    text: "Saffron-scented kahwa, the multi-course Wazwan tradition and centuries-old crafts — papier-mâché, carpets and pashmina — are part of everyday life in the valley.",
    points: ["Kahwa and local bakeries", "Wazwan, the traditional Kashmiri feast", "Craft markets in Srinagar's old city"],
    where: "Srinagar",
    image: I.kashmiriWazwan,
  },
  {
    id: "gardens",
    eyebrow: "Gardens & Seasons",
    title: "Mughal Gardens and Changing Colours",
    text: "Terraced Mughal Gardens step down towards Dal Lake. Spring brings blossom, summer brings green meadows and autumn turns the chinar trees gold and red.",
    points: ["Terraced lawns, fountains and chinar trees", "Spring blossom and autumn colours", "Easy, family-friendly sightseeing"],
    where: "Srinagar",
    image: I.mughalGardens,
  },
  {
    id: "adventure",
    eyebrow: "Snow & Adventure",
    title: "Gondola Rides, Snow and Mountain Air",
    text: "Ride the Gulmarg Gondola for high-mountain views, try beginner skiing in winter, or ride and walk through meadows in Pahalgam and Sonamarg in the warmer months.",
    points: ["Gulmarg Gondola, subject to operations", "Snow play and skiing in season", "Pony rides and meadow walks in summer"],
    where: "Gulmarg · Pahalgam · Sonamarg",
    image: I.gulmarg,
  },
];

/* ============================================================
   BEST TIME TO VISIT
   ============================================================ */

export const SEASONS: Season[] = [
  {
    id: "spring",
    name: "Spring",
    months: "March – May",
    icon: "leaf",
    text: "Blossoms in the gardens, fresh green meadows and pleasant days, with cool nights.",
    goodFor: ["Mughal Gardens in bloom", "Srinagar & Pahalgam", "Family sightseeing"],
  },
  {
    id: "summer",
    name: "Summer",
    months: "June – August",
    icon: "sun",
    text: "The busiest sightseeing season, with the high meadows and valleys at their most accessible.",
    goodFor: ["Sonamarg & Doodhpathri", "Gulmarg meadows", "Amarnath Yatra, in its official season"],
    caution: "Popular dates fill quickly — plan early.",
  },
  {
    id: "autumn",
    name: "Autumn",
    months: "September – November",
    icon: "camera",
    text: "Crisp, clear days and golden-red chinar trees — a favourite for photographers and couples.",
    goodFor: ["Autumn colours", "Photography tours", "Quieter valleys"],
  },
  {
    id: "winter",
    name: "Winter",
    months: "December – February",
    icon: "snow",
    text: "Cold days and, in many years, snow across the valley and in Gulmarg. Some higher roads can close.",
    goodFor: ["Snow holidays in Gulmarg", "Winter Srinagar", "Patnitop when snow allows"],
    caution: "Snowfall is never guaranteed, and roads to higher areas such as Sonamarg may close.",
  },
];

export const SEASON_NOTE =
  "Weather, road closures, permits, operating schedules and access to attractions change from season to season and sometimes day to day. We check current conditions for your dates and adjust the route where needed — no snowfall or year-round access is guaranteed.";

/* ============================================================
   TRAVEL GUIDE
   ============================================================ */

export const GUIDE: GuideBlock[] = [
  {
    id: "packing",
    title: "Weather & Clothing",
    icon: "luggage",
    points: [
      "Layers year-round — mountain evenings are cool even in summer",
      "Warm jacket, thermals, gloves and waterproof shoes in winter",
      "Sunscreen and sunglasses for snow and high meadows",
    ],
  },
  {
    id: "roads",
    title: "Roads & Getting Around",
    icon: "car",
    points: [
      "Mountain roads can be slow; allow buffer time between stops",
      "Snow, landslides or traffic advisories can change plans",
      "Private transport lets us adjust the day as conditions change",
    ],
  },
  {
    id: "pilgrims",
    title: "For Pilgrims",
    icon: "landmark",
    points: [
      "Vaishno Devi registration follows the Shrine Board's current process",
      "Amarnath requires registration and a health certificate each year",
      "Allow rest days after long or high-altitude walks",
    ],
  },
  {
    id: "documents",
    title: "Documents & Connectivity",
    icon: "file",
    points: [
      "Carry valid photo ID — it is checked at hotels and some sites",
      "Prepaid mobile connections from outside the region may not work; postpaid usually does",
      "Keep printed copies of bookings and registrations",
    ],
  },
];

/* ============================================================
   WHY KARVAAHH (services Karvaahh already offers)
   ============================================================ */

export const ASSURANCES: Assurance[] = [
  { icon: "compass", title: "Personalised Planning", text: "Your trip is built around your dates, group and the way you like to travel." },
  { icon: "route", title: "Customisable Itineraries", text: "Add a houseboat night, a pilgrimage, an extra valley or a slower pace." },
  { icon: "bed", title: "Stays & Transport Arranged", text: "We help arrange accommodation and private transport to suit your plan." },
  { icon: "users", title: "Every Kind of Traveller", text: "Family, couple, adventure and pilgrimage journeys across Jammu & Kashmir." },
  { icon: "headset", title: "Support While You Plan", text: "Questions answered on call or WhatsApp while you shape your trip." },
];

/* ============================================================
   FAQ
   ============================================================ */

export const FAQS: Faq[] = [
  {
    question: "What is the best time to visit Jammu & Kashmir?",
    answer:
      "It depends on what you want to see. Spring (March–May) brings blossoms, summer (June–August) is best for the high meadows of Sonamarg and Gulmarg, autumn (September–November) brings the chinar colours, and winter (December–February) is when snow is most likely in Gulmarg. Weather and access vary every year.",
  },
  {
    question: "Is snow guaranteed in Gulmarg in winter?",
    answer:
      "No. Gulmarg usually receives snow in winter, but the timing and amount vary from year to year. Gondola operations and ski conditions also depend on the weather and the operator. We check current conditions before you travel.",
  },
  {
    question: "Do you have fixed prices for Kashmir tour packages?",
    answer:
      "Kashmir holidays are planned around your dates, group size, hotels and pace, so we share a quote once we understand your plan. Tell us what you have in mind and we will send a tailored itinerary and price.",
  },
  {
    question: "Can I combine Vaishno Devi with a Kashmir Valley holiday?",
    answer:
      "Yes. Jammu and Katra are in the Jammu region, south of the Kashmir Valley, and a pilgrimage there can be combined with Srinagar, Gulmarg and Pahalgam. We plan the route and rest days so the journey stays comfortable.",
  },
  {
    question: "Can you arrange a houseboat stay on Dal Lake?",
    answer:
      "Yes, a houseboat night can be included on request as part of a Srinagar itinerary, subject to availability for your dates.",
  },
  {
    question: "Is Kashmir suitable for a family holiday?",
    answer:
      "Many families enjoy Srinagar's gardens and shikara rides, Gulmarg's meadows and the riverside in Pahalgam. We keep travel days manageable and plan rest time around children and older travellers.",
  },
  {
    question: "Can roads or attractions close during my trip?",
    answer:
      "Yes. Snow, landslides, weather and official advisories can close roads or attractions, especially at higher places like Sonamarg. We keep plans flexible and suggest alternatives where needed.",
  },
];

/* ============================================================
   RELATED JOURNEYS (existing pages only)
   ============================================================ */

export const RELATED: RelatedTour[] = [
  { title: "Amarnath & Vaishno Devi Yatra", text: "Two of India's great Himalayan pilgrimages in one journey.", href: AVD, image: I.amarnath },
  { title: "North India Tour Packages", text: "Himalayan hills, sacred cities and heritage across North India.", href: "/packages/north-india", image: I.srinagar },
  { title: "Uttarakhand Tour Packages", text: "Char Dham, Rishikesh and the hill stations of Garhwal and Kumaon.", href: "/packages/uttarakhand", image: I.sonamarg },
  { title: "Spiritual & Pilgrimage Tours", text: "Sacred journeys across Nepal and India.", href: "/packages/spiritual-pilgrimage", image: I.vaishnoDevi },
];
