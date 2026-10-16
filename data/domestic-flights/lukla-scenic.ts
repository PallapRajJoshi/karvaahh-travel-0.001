/* ============================================================
   LUKLA FLIGHTS (KATHMANDU / RAMECHHAP → LUKLA) — PAGE DATA
   ------------------------------------------------------------
   /activities/flights/lukla-scenic-flights
   Scheduled one-way STOL flights to Tenzing-Hillary Airport,
   Lukla — the gateway to Everest Base Camp treks. This is a
   point-to-point flight that LANDS at Lukla, not a round-trip
   sightseeing flight (that is /activities/domestic-flights/mountain-scenic).

   RESEARCH (last checked 13 Oct 2026):
   - Airport: CAAN airport profile "Tenzing Hillary Airport"
     (caanepal.gov.np) — ICAO VNLK, IATA LUA, elevation 2,846 m /
     9,337 ft (Wikipedia, citing CAAN: 2,845 m / 9,334 ft).
     Runway 06/24, 527 m (1,729 ft), asphalt, gradient ≈ 11.7%
     (Wikipedia). Published width varies (20 m vs 30 m) — NOT shown.
   - Ramechhap (Manthali) Airport: IATA RHP, ICAO VNRC, 474 m,
     runway 530 m (Wikipedia). Some agencies write "RCH" — use RHP.
     Lukla flights moved here in 2019 and again from 2022 in peak
     seasons, attributed to Tribhuvan (KTM) congestion.
   - Trekking-agency notices report CAAN routing all Lukla flights
     via Ramechhap from 25 Sep 2025; 2026 windows quoted as
     ~15 Mar–15 May and ~25 Sep–30 Nov. NO primary CAAN notice
     found — reconfirm the departure airport for every date.
   - Operators named consistently: Tara Air, Summit Air, Sita Air.
   - Durations (agency sources, consistent): KTM–LUA ≈ 30–35 min;
     RHP–LUA ≈ 15–20 min. Kathmandu–Ramechhap road ≈ 130 km,
     ≈ 4–5 h; early-hours departures from Kathmandu.
   - Baggage: commonly reported 10 kg checked + 5 kg hand (15 kg),
     but no airline-published policy found — shown as "typically
     reported", confirm per booking.
   - Fares: only unofficial agency figures found → NOT displayed.

   CONTENT RULES (keep when editing):
   - No fabricated schedules, fares, refund percentages or
     guaranteed helicopter transfers.
   - Never state that all flights leave Kathmandu year-round.
   ============================================================ */

import type { HelicopterTour } from "@/components/activities/experience/product-types";
import type { PageImage } from "@/components/activities/experience/types";
import { cholatse, everestDawn, everestSunset, gokyo, kathmanduValley, khumbuSunrise, makaluBarun } from "../helicopter-tours/images";
import { karvaahhTrust } from "../helicopter-tours/shared";

const FARE = "Contact Karvaahh for current fares";
const CHECKED = "13 Oct 2026";
const EBC_TREK = "/adventure/everest-base-camp-trek";

/** Planned photo: renders a labelled placeholder until the file is added to /public. */
const luklaAirport: PageImage = {
  src: "/images/flights/lukla-tenzing-hillary-airport.jpg",
  alt: "Tenzing-Hillary Airport at Lukla — a short sloping runway on a mountainside in the Solukhumbu region",
  label: "Tenzing-Hillary Airport, Lukla",
};

const ramechhap: PageImage = {
  src: "/images/bagmati/thodung-danda-ramechhap-himalayan-mountain-panorama-nepal.jpg",
  alt: "Himalayan panorama seen from Thodung Danda in Ramechhap district, Nepal",
  label: "Ramechhap district",
};

export const luklaFlightPage: HelicopterTour = {
  title: "Lukla Flights — Gateway to Everest",
  slug: "lukla-scenic-flights",
  path: "/activities/flights/lukla-scenic-flights",
  breadcrumbLabel: "Lukla Flights",
  collection: { label: "Domestic Flights" },
  description:
    "Scheduled one-way mountain flights to Tenzing-Hillary Airport (LUA) in Lukla, the starting point of Everest Base Camp treks — departing Kathmandu (KTM) or, in peak seasons, Ramechhap/Manthali (RHP), weather permitting.",
  touristType: ["Everest Base Camp trekkers", "Indian travellers", "International trekkers", "Mountaineering expeditions", "Khumbu visitors"],

  seo: {
    title: "Lukla Flight Booking & Cancellation Guide | Karvaahh",
    socialTitle: "Lukla Flights — Gateway to Everest | Routes, Weather & Cancellation Guide",
    description:
      "Plan your Lukla flight with Karvaahh. Explore flight routes, airport details, weather conditions, fares, cancellation guidance, and Everest trekking connections.",
    keywords: [
      "Lukla flight booking",
      "Kathmandu to Lukla flight",
      "Ramechhap to Lukla flight",
      "Manthali Lukla flight",
      "Lukla flight cancellation",
      "Tenzing-Hillary Airport",
      "Lukla flight for Indian trekkers",
      "Everest Base Camp trek flight",
    ],
    ogImage: everestSunset,
  },

  duration: "Approx. 15–35 minutes (route-dependent)",
  elevation: "Lukla ≈ 2,846 m",
  startingPoint: "Kathmandu (KTM) or Ramechhap/Manthali (RHP)",
  endingPoint: "Lukla (LUA)",
  region: "Solukhumbu, Koshi Province",
  bestSeason: "Autumn & spring mornings",
  transportation: "Twin Otter / Dornier STOL aircraft",
  tourTypes: "One-way or return flight ticket",
  groupSize: "Subject to airline seating",
  landingNote: "Lands at Lukla — the start of the Everest trek",

  labels: {
    why: "Why Fly",
    related: "Everest Trekking",
    relatedTitle: "Continue to Everest",
    glance: "Flight at a Glance",
    nav: { overview: "Overview", itinerary: "Flight Day", route: "Routes", safety: "Check-in", book: "Enquire" },
  },
  stickyCta: { title: "Lukla Flight", mobileTitle: "Lukla Flights", desktop: "Check Flight Availability", mobile: "Enquire Now" },

  /* ---------- Hero ---------- */
  hero: {
    badge: "Karvaahh • Everest Region Flights",
    badgeIcon: "plane",
    titleLead: "Lukla Scenic Flights",
    titleAccent: "Gateway to Everest",
    subtitle: "A short, spectacular Himalayan flight to the airstrip where every Everest Base Camp trek begins.",
    description:
      "Fly over terraced foothills and into the Dudh Koshi valley, with snow peaks on the horizon, to land on the steep mountainside runway of Tenzing-Hillary Airport at about 2,846 m. From Lukla, the trail to Namche Bazaar and Everest Base Camp starts at the end of the runway.",
    image: everestDawn,
    imageCaption: "Pictured: Everest and Nuptse above the Khumbu Glacier",
    primaryCta: { label: "Check Flight Availability" },
    secondaryCta: { label: "Plan Your Everest Trek", href: EBC_TREK },
    whatsappCta: "Enquire on WhatsApp",
    flightPath: true,
    floatingStat: { label: "Lukla runway", value: "527 m" },
    strip: [],
    trust: [
      { icon: "mapPin", label: "Kathmandu or Ramechhap" },
      { icon: "clock", label: "≈ 15–35 Minutes" },
      { icon: "mountainSnow", label: "Lukla ≈ 2,846 m" },
      { icon: "sun", label: "Morning Departures" },
      { icon: "cloud", label: "Weather-Dependent" },
    ],
  },

  bookingWidget: {
    destination: "Lukla (LUA)",
    departures: ["Ramechhap / Manthali (RHP)", "Kathmandu (KTM)", "Whichever is operating"],
    tourTypes: ["One-way to Lukla", "Return (Lukla round trip)", "One-way from Lukla", "Helicopter alternative (on request)"],
    travelerOptions: ["1 Passenger", "2 Passengers", "3 Passengers", "4 Passengers", "5 Passengers", "6+ Passengers"],
    defaults: { departure: "Whichever is operating", message: "I'd like to book a Lukla flight for my Everest trek." },
    labels: { departure: "Departure", tourType: "Ticket" },
    duration: "≈ 15–35 min",
  },

  quickFacts: [
    { icon: "plane", label: "Destination", value: "Lukla • LUA" },
    { icon: "mapPin", label: "Departure", value: "KTM or RHP (seasonal)" },
    { icon: "clock", label: "Flight Time", value: "≈ 15–35 Minutes" },
    { icon: "mountainSnow", label: "Airport Elevation", value: "≈ 2,846 m" },
  ],

  /* ---------- B. Flight overview ---------- */
  editorial: {
    eyebrow: "Flight Overview",
    title: "Lukla, Gateway to the Khumbu",
    paragraphs: [
      "Lukla sits on a ledge above the Dudh Koshi river in Nepal's [[Solukhumbu]] district. Its airstrip, [[Tenzing-Hillary Airport (LUA)]], named after the first climbers of Everest, is where most Everest Base Camp, Gokyo and Three Passes treks begin and end.",
      "The runway is short — about [[527 m]] — and climbs steeply uphill into the mountainside, with high terrain beyond it and a drop into the valley at the other end. Only small short-take-off-and-landing aircraft operate here, in daylight and good visibility.",
      "Without the flight, reaching the Khumbu means a long road journey to Salleri, Phaplu or the road-head below Lukla, followed by several days of walking. Flying saves those days, which is why almost every Everest trek itinerary starts with it.",
      "A [[scheduled Lukla flight]] is a one-way ticket that lands at Lukla so you can start trekking. A [[mountain scenic flight]] is a round trip from Kathmandu for Everest views — it never lands at Lukla. This page covers the Lukla flight.",
    ],
    image: everestSunset,
    inset: cholatse,
    fact: { label: "Tenzing-Hillary Airport", value: "≈ 2,846 m", text: "Runway 06/24 · 527 m · IATA LUA / ICAO VNLK" },
  },

  /* ---------- Why fly ---------- */
  whyHelicopter: {
    title: "Why Fly to Lukla?",
    intro: "The standard way into the Everest region for trekkers with limited holiday time.",
    items: [
      { icon: "clock", title: "Saves Days", text: "Minutes in the air instead of a long drive and several days of walking from the road-head." },
      { icon: "mountainSnow", title: "Himalayan Views", text: "Foothills, river gorges and snow peaks on clear mornings — views vary with seating and weather." },
      { icon: "footprints", title: "Trek From the Runway", text: "The trail to Phakding, Namche Bazaar and Everest Base Camp starts in Lukla." },
      { icon: "route", title: "Flexible Itineraries", text: "Fly in and out, or walk one way and fly the other." },
      { icon: "plane", title: "Specialist Operators", text: "Flown by Nepali airlines with STOL aircraft and mountain-experienced crews." },
      { icon: "headset", title: "Local Coordination", text: "Karvaahh's Nepal team helps with tickets, transfers and contingency plans." },
    ],
  },

  /* ---------- Map ---------- */
  places: [
    { id: "kathmandu", name: "Kathmandu (KTM)", lat: 27.697, lon: 85.359, elevation: "Departure (when operating)", label: "left", text: "Tribhuvan International Airport, domestic terminal. Lukla flights operate from here outside the peak-season Ramechhap arrangement.", image: kathmanduValley },
    { id: "ramechhap", name: "Ramechhap / Manthali (RHP)", lat: 27.394, lon: 86.061, elevation: "≈ 474 m", label: "bottom", text: "Used for Lukla flights in peak seasons. About 4–5 hours by road from Kathmandu, usually leaving in the early hours.", image: ramechhap },
    { id: "lukla", name: "Lukla (LUA)", lat: 27.688, lon: 86.731, elevation: "≈ 2,846 m", label: "right", text: "Tenzing-Hillary Airport — the start of the Everest Base Camp trail.", image: luklaAirport },
    { id: "namche", name: "Namche Bazaar", lat: 27.805, lon: 86.714, elevation: "≈ 3,440 m", label: "left", text: "The Sherpa capital, usually reached on day two of the trek from Lukla.", image: cholatse },
    { id: "everest", name: "Mount Everest", lat: 27.988, lon: 86.925, elevation: "8,848.86 m", label: "top", text: "Everest Base Camp lies roughly 8–9 trekking days from Lukla on a standard itinerary.", image: everestDawn },
    { id: "khumbu", name: "Khumbu", lat: 27.92, lon: 86.8, region: true, text: "The Everest region of Sagarmatha National Park." },
  ],
  map: {
    title: "Lukla Flight Routes",
    intro: "Kathmandu → Lukla, or Ramechhap/Manthali → Lukla in peak seasons. Tap a marker for details.",
    note: "Indicative lines only — not aviation routes. The departure airport depends on the season, airline and CAAN arrangements in force for your date.",
    bounds: { west: 85.15, east: 87.15, south: 27.15, north: 28.15 },
    route: ["kathmandu", "lukla"],
    routes: [
      { id: "ktm", label: "Kathmandu → Lukla", style: "air", places: ["kathmandu", "lukla"], note: "≈ 30–35 min when operating from Kathmandu." },
      { id: "rhp", label: "Ramechhap → Lukla", style: "air", places: ["kathmandu", "ramechhap", "lukla"], note: "≈ 4–5 h road transfer, then ≈ 15–20 min flight." },
      { id: "trek", label: "Trail to Everest", style: "custom", places: ["lukla", "namche", "everest"], note: "Trekking route — not flown." },
    ],
    selected: "lukla",
    aircraft: true,
  },

  /* ---------- Spotlights ---------- */
  spotlights: [
    {
      id: "routes",
      eyebrow: "Routes & Flight Details",
      title: "Where Lukla Flights Depart From",
      paragraphs: [
        "Lukla flights do not depart from Kathmandu year-round. Since 2019, and in most peak seasons since 2022, Nepal's aviation authorities have moved Lukla flights to Ramechhap (Manthali) Airport to ease congestion at Kathmandu. Agency notices report this arrangement from 25 September 2025, with peak windows roughly mid-March to mid-May and late September to November — Karvaahh reconfirms the departure airport for your exact date.",
      ],
      cards: [
        { icon: "plane", title: "Kathmandu → Lukla", text: "Tribhuvan International Airport (KTM), domestic terminal → LUA. About 30–35 minutes. Typically operates outside the peak-season Ramechhap arrangement." },
        { icon: "plane", title: "Ramechhap → Lukla", text: "Ramechhap/Manthali Airport (RHP) → LUA. About 15–20 minutes. Used in peak seasons; flights depart early morning." },
        { icon: "car", title: "Kathmandu ↔ Ramechhap transfer", text: "Around 130 km, roughly 4–5 hours by road, often leaving Kathmandu around 2–3 AM. Shared or private transfer — not part of the airline ticket unless quoted." },
        { icon: "users", title: "Airlines", text: "Tara Air, Summit Air and Sita Air operate the route. Aircraft are small STOL types such as the Twin Otter and Dornier 228." },
        { icon: "passport", title: "Identification", text: "Foreign nationals: passport. Indian citizens: passport or another photo ID accepted by the airline. Nepali citizens: citizenship card. Confirm with the airline." },
        { icon: "luggage", title: "Baggage", text: "Typically reported as 10 kg checked + 5 kg hand baggage (15 kg total), with excess charged per kg. Exact allowance is set by the airline — confirmed in your quotation." },
        { icon: "clock", title: "Reporting time", text: "Set by the airline for each flight and earlier than departure. Late arrival may be treated as a no-show." },
        { icon: "calendar", title: "Schedules", text: "Published schedules change with season, weather and demand. Karvaahh confirms timing for your date — no fixed timetable is shown here." },
      ],
      note: `Sources: CAAN airport data, operator information and trekking-agency notices, last checked ${CHECKED}. No official CAAN notice for 2026 departure windows was located — always reconfirm.`,
      variant: "cards",
    },
    {
      id: "airport",
      eyebrow: "Airport & Runway Highlights",
      title: "Tenzing-Hillary Airport (LUA)",
      paragraphs: [
        "One of the most demanding airstrips in commercial aviation. The runway is short and steep, sits between a mountainside and a valley drop, and has no realistic go-around once an aircraft is committed to landing — so flights operate only in daylight and good visual conditions, by crews with specific short-field mountain experience.",
      ],
      points: [
        "Elevation ≈ 2,846 m (9,337 ft) — CAAN airport profile",
        "Runway 06/24, about 527 m (1,729 ft) long, asphalt",
        "Upslope gradient of roughly 11.7% (published figure)",
        "Landings uphill on runway 06, take-offs downhill on 24",
        "Rising terrain beyond the runway; valley drop at the threshold",
        "Visual, daylight operations — highly sensitive to cloud and wind",
      ],
      image: luklaAirport,
      note: "Codes: IATA LUA · ICAO VNLK. Figures from CAAN's airport profile and published aviation data; minor differences exist between sources.",
      variant: "split",
    },
    {
      id: "cancellation",
      eyebrow: "Cancellation & Contingency Guide",
      title: "When a Lukla Flight Doesn't Go",
      paragraphs: [
        "Delays and cancellations are a normal part of flying to Lukla. Cloud, wind or poor visibility at Lukla, at the departure airport or along the valley can hold flights for hours or days, and backlogs build quickly in peak season. Plan for it — it is the single most important part of an Everest trek itinerary.",
      ],
      cards: [
        { icon: "clock", title: "Delayed", text: "You wait at the airport until the airline confirms a slot or calls off the day's flights. Waits of several hours are common." },
        { icon: "calendar", title: "Cancelled", text: "You are normally moved to a later flight. Priority, rebooking and any refund depend on the airline and your ticket conditions — not guaranteed automatically." },
        { icon: "route", title: "Airport may change", text: "Your departure airport can switch between Kathmandu and Ramechhap with seasonal arrangements, adding an early-morning road transfer." },
        { icon: "car", title: "Extra ground costs", text: "Additional transfers, an extra night in Kathmandu, Ramechhap or Lukla, and meals during delays are usually not covered by the ticket." },
        { icon: "helicopter", title: "Helicopter alternative", text: "Shared or private helicopters may fly when planes can't — subject to availability, weather, safety and additional charges. Not guaranteed." },
        { icon: "shield", title: "Buffer days", text: "Keep spare days between your return flight from Lukla and your international departure. How many depends on your season, itinerary and risk tolerance." },
        { icon: "headset", title: "Tell your team", text: "Inform your trekking guide, lodges and hotel straight away so bookings and the trek itinerary can be adjusted." },
        { icon: "umbrella", title: "Travel insurance", text: "Choose cover for trip delay, missed connections and helicopter evacuation at trekking altitude. Read the policy terms." },
      ],
      note: "Karvaahh does not promise automatic refunds, fixed cancellation percentages or helicopter transfers. Your quotation states the airline's ticket conditions and our service terms in writing before you pay.",
      variant: "cards",
      dark: true,
      cta: { label: "Plan My Lukla Contingency", message: "Hello Karvaahh, I'm planning an Everest trek and need help with Lukla flights and buffer days." },
    },
    {
      id: "fares",
      eyebrow: "Pricing",
      title: "Lukla Flight Fares",
      paragraphs: [
        "Lukla fares change with the airline, season, departure airport and passenger category, and we could not verify a current published fare from an airline or authorised source. Rather than show an outdated number, we quote the live fare for your date.",
        "Nepal's domestic airlines often apply different fares for Nepali, Indian/SAARC and other foreign passengers — we only apply a category when the airline confirms it for your booking.",
      ],
      cards: [
        { icon: "users", title: "Nepalese passengers", text: `${FARE}. Quoted in NPR.` },
        { icon: "users", title: "Indian passengers", text: `${FARE}. Quotation in INR or NPR on request.` },
        { icon: "users", title: "SAARC & other international", text: `${FARE}. Usually quoted in USD.` },
        { icon: "route", title: "One-way & return", text: "Both available. Returns are often booked with an open or fixed date — confirmed at booking." },
        { icon: "shield", title: "Taxes & charges", text: "Your written quotation states whether taxes, fuel surcharges and service fees are included." },
        { icon: "luggage", title: "Baggage conditions", text: "Allowance and excess-baggage rates are listed in your quotation." },
      ],
      note: `Last verified: ${CHECKED}. No fare is displayed until confirmed by the airline for your travel date.`,
      variant: "cards",
    },
    {
      id: "booking-process",
      eyebrow: "Booking Process",
      title: "How to Book Your Lukla Flight",
      paragraphs: ["Six simple steps — the enquiry form below starts the process."],
      cards: [
        { icon: "file", title: "1. Share your details", text: "Travel date, number of passengers, nationality and whether you need one-way or return." },
        { icon: "route", title: "2. We check the route", text: "Departure airport, operator, fare and seat availability for your date." },
        { icon: "file", title: "3. Receive a quotation", text: "Fare, currency, taxes, baggage and the cancellation conditions — in writing." },
        { icon: "passport", title: "4. Confirm & pay", text: "Confirm the booking and pay under the agreed terms." },
        { icon: "clock", title: "5. Follow reporting instructions", text: "Report to the airport the operator specifies, at the time they set, with your ID." },
        { icon: "shield", title: "6. Keep contingency time", text: "Leave buffer days for mountain weather before your international flight." },
      ],
      cta: { label: "Check Flight Availability" },
      variant: "cards",
    },
  ],

  /* ---------- Flight day ---------- */
  flightSteps: {
    title: "Your Lukla Flight Day",
    intro: "Reporting time and departure time are different — the airline confirms both, and either can move with the weather.",
    steps: [
      { title: "Reconfirm the Evening Before", text: "Confirm the departure airport, reporting time and transfer pickup." },
      { title: "Transfer (if from Ramechhap)", text: "Leave Kathmandu in the early hours for the ≈ 4–5 hour drive to Manthali.", note: "Only when your flight departs Ramechhap." },
      { title: "Check-in & Weigh-in", text: "Show your ID; bags and sometimes passengers are weighed." },
      { title: "Weather Hold", text: "Flights wait for clear conditions at both ends. Delays are normal." },
      { title: "Fly Into the Mountains", text: "Foothills and the Dudh Koshi valley, with snow peaks on clear mornings." },
      { title: "Land Uphill at Lukla", text: "A short, steep landing on the 527 m runway." },
      { title: "Start Trekking", text: "Meet your guide and porters and set off for Phakding." },
    ],
  },

  /* ---------- E. Weather ---------- */
  seasons: {
    title: "Weather & the Best Time to Fly",
    intro: "Mountain weather changes fast. Flights usually run in the morning, when cloud and wind are typically lowest; afternoon operations are often limited.",
    note: "No season guarantees on-time flights. Cloud cover, wind, rain or snow at Lukla, the departure airport or along the route can delay, divert or cancel flights at short notice.",
    items: [
      { name: "Autumn", months: "September – November", rating: "Peak season", icon: "leaf", text: "Often the clearest skies and the busiest trekking season. Flights generally via Ramechhap; backlogs build quickly after bad-weather days." },
      { name: "Spring", months: "March – May", rating: "Peak season", icon: "sun", text: "Generally good flying, with haze and afternoon cloud increasing towards May. Flights generally via Ramechhap." },
      { name: "Winter", months: "December – February", rating: "Good, cold", icon: "snow", text: "Often clear and quieter; snowfall, cold and morning fog can still cause disruption." },
      { name: "Monsoon", months: "June – August", rating: "Frequent disruption", icon: "rain", text: "Low cloud and rain make cancellations far more common. Trekking is quieter but needs extra buffer days." },
    ],
  },

  /* ---------- H. Inclusions ---------- */
  inclusions: [
    { text: "Confirmed Lukla flight ticket (as quoted)", status: "included" },
    { text: "Booking assistance and reconfirmation from Karvaahh", status: "included" },
    { text: "Applicable taxes — only where stated in your quotation", status: "package" },
    { text: "Kathmandu–Ramechhap transfer — only when included in your quotation", status: "package" },
  ],
  exclusions: [
    "Kathmandu–Ramechhap ground transfers unless included",
    "Accommodation and meals",
    "Trekking permits, guides and porters",
    "Helicopter alternatives",
    "Additional transport and accommodation during delays or cancellations",
    "Excess baggage charges",
    "Travel insurance",
    "Cancellation charges and service fees where applicable",
  ],

  /* ---------- Check-in ---------- */
  safety: {
    eyebrow: "Check-in & Preparation",
    title: "Before You Fly to Lukla",
    intro: "A flight ticket is separate from an Everest trekking package. If you book a trek with Karvaahh, your package states whether flights are included.",
    points: [
      { icon: "passport", title: "Carry ID", text: "Passport or the ID the airline accepts for your nationality." },
      { icon: "weight", title: "Pack light", text: "Keep within the airline allowance; porters carry the main load on the trek." },
      { icon: "luggage", title: "Essentials in hand", text: "Warm layer, medication, valuables and documents in your hand baggage." },
      { icon: "clock", title: "Report on time", text: "Follow the airline's reporting time — not the departure time." },
      { icon: "cloud", title: "Expect waiting", text: "Bring snacks, water and patience for weather holds." },
      { icon: "calendar", title: "Reconfirm", text: "Reconfirm the evening before and again on the morning of travel." },
    ],
  },

  travelerTypes: {
    title: "Who Books Lukla Flights?",
    intro: "Anyone heading into the Everest region on foot.",
    items: [
      { icon: "footprints", title: "EBC Trekkers", text: "The standard start of the Everest Base Camp trek." },
      { icon: "mountainSnow", title: "Gokyo & Three Passes", text: "The same gateway for longer Khumbu treks." },
      { icon: "users", title: "Indian Trekkers", text: "No visa needed for Indian citizens; carry accepted ID." },
      { icon: "compass", title: "International Trekkers", text: "Pair the flight with a guided trek and buffer days." },
      { icon: "flag", title: "Expeditions", text: "Climbing teams heading for Everest, Lhotse or Island Peak." },
      { icon: "heart", title: "Lodge & Sherpa Visits", text: "Short Khumbu stays around Lukla and Namche." },
    ],
  },

  comparison: {
    title: "Lukla Flight vs Mountain Scenic Flight",
    intro: "Two very different products that are often confused.",
    columns: [
      {
        eyebrow: "Point to point",
        title: "Scheduled Lukla Flight",
        highlight: true,
        points: ["Kathmandu or Ramechhap → Lukla", "≈ 15–35 minutes, one way", "Lands at Lukla to start a trek", "Mountain views are incidental", "Used by Everest trekkers"],
      },
      {
        eyebrow: "Sightseeing",
        title: "Everest Mountain Flight",
        points: ["Kathmandu → Everest panorama → Kathmandu", "≈ 50–60 minutes, round trip", "Does not land anywhere", "Designed for Himalayan views", "No trekking required"],
      },
    ],
  },

  trust: {
    ...karvaahhTrust,
    intro: "Karvaahh – Live to Travel. Our Kathmandu team helps Indian and international trekkers with Lukla flights, transfers and Everest trek planning.",
  },

  /* ---------- J. FAQs ---------- */
  faqs: [
    { question: "Where does the Lukla flight depart from?", answer: "From Kathmandu's Tribhuvan International Airport (KTM) or Ramechhap/Manthali Airport (RHP). In peak seasons — broadly spring and autumn — Lukla flights have generally been moved to Ramechhap, about 4–5 hours by road from Kathmandu. Karvaahh confirms the departure airport for your date." },
    { question: "How long does the flight take?", answer: "About 30–35 minutes from Kathmandu and about 15–20 minutes from Ramechhap, excluding check-in, weather holds and the road transfer to Ramechhap." },
    { question: "Why do Lukla flights get cancelled?", answer: "Lukla operates only in daylight and good visibility. Cloud, wind, rain or snow at Lukla, the departure airport or along the valley can delay or cancel flights, and backlogs follow bad-weather days." },
    { question: "What is the runway length and airport elevation?", answer: "Tenzing-Hillary Airport sits at about 2,846 m (9,337 ft) according to CAAN. Its single runway (06/24) is about 527 m (1,729 ft) long with a steep upslope of roughly 11.7%." },
    { question: "What happens if my flight is cancelled?", answer: "You are normally moved to a later flight. Rebooking priority, refunds and fees depend on the airline and your ticket conditions. Extra hotel nights, meals and transfers are usually your cost unless your package says otherwise." },
    { question: "Are helicopter alternatives available?", answer: "Often, yes — shared or private helicopters can sometimes fly when planes can't. They depend on availability, weather and safety, cost extra and are never guaranteed." },
    { question: "How many buffer days should I allow before my international departure?", answer: "It depends on your season, itinerary and risk tolerance. Many trekkers keep at least one or two spare days between returning from Lukla and their international flight, and more in peak or monsoon seasons. Discuss your plan with us." },
  ],

  cta: {
    title: "Start Your Everest Journey With the Right Flight.",
    text: "Tell us your trek dates — we'll check the operating airport, fares and seats, and help you plan buffer days for mountain weather.",
    image: khumbuSunrise,
    animated: true,
    primaryLabel: "Check Flight Availability",
    primaryHref: "#book",
    quoteLabel: "Request a Quotation",
    whatsappLabel: "WhatsApp Us",
    planMessage: "Hello Karvaahh, I'd like to book a Lukla flight for my Everest trek.",
    quoteSubject: "Booking enquiry: Lukla flight",
  },

  enquiry: {
    title: "Enquire About Your Lukla Flight",
    intro: "Share your date, passengers and nationality. We check the operating airport and availability, then send a written quotation with fare, taxes, baggage and cancellation conditions.",
    hotelPlaceholder: "Your Kathmandu hotel (for transfers)",
    options: {
      passengers: ["1 Passenger", "2 Passengers", "3 Passengers", "4 Passengers", "5 Passengers", "6+ Passengers"],
      airlines: ["Recommend for me", "Tara Air", "Summit Air", "Sita Air", "Helicopter alternative (on request)"],
      times: ["One-way to Lukla", "Return (to and from Lukla)", "One-way from Lukla"],
      currencies: ["NPR", "INR", "USD", "GBP", "EUR", "AUD"],
      categories: ["Nepali citizen", "Indian citizen", "SAARC national", "Other international"],
    },
    specialRequirements: true,
  },

  relatedTours: [
    { title: "Everest Base Camp Trek", text: "The classic trek from Lukla to the foot of Everest.", href: EBC_TREK, image: everestDawn },
    { title: "Everest Three Passes Trek", text: "Kongma La, Cho La and Renjo La from Lukla.", href: "/adventure/everest-three-passes-trek", image: gokyo },
    { title: "Everest Base Camp Helicopter Tour", text: "Fly to the Khumbu by helicopter, weather permitting.", href: "/activities/helicopter-tours/everest-base-camp", image: everestSunset },
    { title: "Everest Mountain Flight", text: "The round-trip scenic flight from Kathmandu.", href: "/activities/domestic-flights/mountain-scenic", image: khumbuSunrise },
    { title: "Base Camp Treks", text: "More Himalayan base camp treks planned by Karvaahh.", href: "/packages/nepal/base-camp-treks", image: makaluBarun },
    { title: "Nepal Trekking Packages", text: "Guided treks across Nepal's Himalaya.", href: "/packages/nepal/trekking-hiking-packages", image: cholatse },
  ],

  /* ---------- Required by the template ---------- */
  gallery: {
    title: "Into the Khumbu",
    intro: "The Everest region that begins at Lukla. Tap any photo to view it larger.",
    items: [
      { image: everestDawn, caption: "Everest and Nuptse above the Khumbu Glacier" },
      { image: everestSunset, caption: "Everest's summit pyramid at sunset" },
      { image: cholatse, caption: "Cholatse and Taboche in Sagarmatha National Park" },
      { image: gokyo, caption: "Gokyo Lake beside the Ngozumpa Glacier" },
      { image: khumbuSunrise, caption: "Sunrise over a sea of cloud in the Khumbu" },
    ],
  },
  route: {
    title: "Flight Routes",
    intro: "Kathmandu or Ramechhap to Lukla.",
    note: "Departure airport depends on the season and arrangements in force.",
    stops: [
      { name: "Kathmandu (KTM) or Ramechhap/Manthali (RHP)", detail: "Departure", mode: "landing" },
      { name: "Lukla — Tenzing-Hillary Airport (LUA)", detail: "Arrival", mode: "landing" },
    ],
  },
  options: {
    title: "Ticket Options",
    intro: "Confirmed with you at booking.",
    note: "Fares depend on the airline, date, route and passenger category.",
    items: [
      { name: "One-way to Lukla", basis: "Per seat", price: FARE, points: ["Kathmandu or Ramechhap departure"], idealFor: "Trekkers walking out", whatsappMessage: "Hello Karvaahh, please share the current Lukla flight fare." },
      { name: "Return", basis: "Per seat", price: FARE, points: ["Fly in and out of Lukla"], idealFor: "Most EBC trekkers", whatsappMessage: "Hello Karvaahh, please share the current return Lukla flight fare." },
    ],
  },

  layout: [
    "hero",
    "stats-bar",
    "nav",
    "trust-bar",
    "story",
    "why",
    "spotlight:routes",
    "map",
    "spotlight:airport",
    "flight-steps",
    "seasons",
    "spotlight:cancellation",
    "spotlight:fares",
    "inclusions",
    "safety",
    "comparison",
    "travelers",
    "spotlight:booking-process",
    "faq",
    "gallery",
    "cta",
    "enquiry",
    "related",
  ],
};
