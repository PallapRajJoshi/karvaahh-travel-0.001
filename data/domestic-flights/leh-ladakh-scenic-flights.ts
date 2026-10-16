/* ============================================================
   LEH–LADAKH FLIGHTS — PAGE DATA
   ------------------------------------------------------------
   /activities/flights/leh-ladakh-scenic-flights
   A flight & travel guide to Leh (IXL). There is NO confirmed
   dedicated scenic / sightseeing flight product in Ladakh — the
   views are from scheduled commercial flights on approach, or
   from a private charter arranged on request.

   RESEARCH (last checked 13 Oct 2026):
   - Airport: Kushok Bakula Rimpochee Airport, Leh (IXL / VILH).
     Elevation 3,256 m (10,682 ft); owned by the Indian Air Force,
     civil operations by the Airports Authority of India. Flights
     operate in the morning because of afternoon mountain winds.
     Sources: Wikipedia (citing AAI), SKYbrary (skybrary.aero/airports/vilh).
   - Nonstop routes reported (Wikipedia + schedule aggregators
     flightsfrom.com, kupi.com):
     · Delhi (DEL) – Air India, IndiGo, SpiceJet. ~615–625 km,
       scheduled ~1 h 10 m – 1 h 45 m depending on airline/season.
     · Chandigarh (IXC) – Air India, IndiGo.
     · Jammu (IXJ) – Air India, IndiGo.
     · Srinagar (SXR) – Air India.
     · Mumbai (BOM) – seasonal (summer), IndiGo / SpiceJet reported.
   - Kullu/Bhuntar (KUU) – Leh: NO direct service found. Kullu is
     served by Alliance Air (Delhi / Chandigarh); travellers connect
     via Delhi or Chandigarh, or travel by road.
   - Nepal & international: no direct international flights to Leh.
     Connect via Delhi (Kathmandu–Delhi: Air India, IndiGo, Nepal
     Airlines, SpiceJet and others reported).
   - Permits: foreign nationals need a Protected Area Permit for
     Nubra, Pangong, Tso Moriri etc. (via a registered Leh agent);
     domestic visitors pay an environment / permit fee. Rules were
     under review in Aug 2026 (ladakh.gov.in) — reconfirm.

   NOT VERIFIED — confirm before each booking:
     · Current frequencies, timings and seasonal start/end dates.
     · Fares, baggage allowances, taxes, refund rules (vary daily).
     · SpiceJet & Mumbai seasonal operations for the travel date.
     · Charter availability, aircraft and pricing.

   CONTENT RULES (keep when editing):
   - Never present a scheduled airline flight as a scenic flight.
   - No fabricated fares, schedules, routes or guaranteed views.
   - Map coordinates are approximate; air routes are illustrative.
   ============================================================ */

import type { HelicopterTour } from "@/components/activities/experience/product-types";
import type { RequiredImage } from "@/components/activities/experience/types";
import { cta as zanskarRoad, hero as pangongHero, lamayuru, leh, manaliLeh, nubra, og, pangong, thiksey, tsoMoriri } from "../leh-ladakh-spiti/images";
import { karvaahhTrust } from "../helicopter-tours/shared";

const VERIFIED = "13 Oct 2026";
const PRICE_TEXT = "Contact Karvaahh for current fares.";

export const lehLadakhFlightsPage: HelicopterTour = {
  title: "Leh–Ladakh Scenic Flights",
  slug: "leh-ladakh-scenic-flights",
  path: "/activities/flights/leh-ladakh-scenic-flights",
  breadcrumbLabel: "Leh–Ladakh Flights",
  collection: { label: "Flights & Experiences" },
  description:
    "A flight and travel guide to Leh–Ladakh: nonstop routes to Kushok Bakula Rimpochee Airport (IXL), airlines, connections for Nepalese and international travellers, weather, high-altitude arrival guidance and booking help from Karvaahh.",
  touristType: ["Indian travellers", "Nepalese travellers", "International travellers", "Families", "Photographers", "Adventure travellers"],

  seo: {
    title: "Leh–Ladakh Flights & Travel Guide | Karvaahh",
    socialTitle: "Leh–Ladakh Flights – Routes, Airlines & Travel Guide",
    description:
      "Explore Leh–Ladakh flight routes, airlines, fares, weather guidance, and travel tips with Karvaahh. Plan your journey to the spectacular Himalayan cold desert.",
    keywords: [
      "Leh Ladakh flights",
      "Delhi to Leh flight",
      "Leh airport IXL",
      "Kushok Bakula Rimpochee Airport",
      "Kullu to Leh flight",
      "Leh Ladakh scenic flight",
      "Kathmandu to Leh flight",
      "Ladakh travel guide",
    ],
    ogImage: og as RequiredImage, // removed by resolveImages until the photo exists
  },

  duration: "Delhi–Leh approx. 1 hr 10 min – 1 hr 45 min",
  elevation: "Leh Airport approx. 3,256 m",
  startingPoint: "Delhi (DEL) and other Indian gateways",
  endingPoint: "Leh (IXL)",
  region: "Ladakh, Trans-Himalaya, India",
  bestSeason: "May – September (most stable); winter flights operate with more disruption",
  transportation: "Scheduled commercial flights / private charter on request",
  tourTypes: "Flight booking & Ladakh trip planning",
  groupSize: "Subject to airline seating",
  landingNote: "Scheduled flights to Leh — not a dedicated sightseeing flight",

  labels: {
    why: "Why Fly to Leh",
    related: "Ladakh & India Journeys",
    relatedTitle: "Turn Your Flight Into a Ladakh Journey",
    glance: "Flights at a Glance",
    nav: { overview: "Overview", route: "Routes", inclusions: "Inclusions", safety: "Before You Fly", faqs: "FAQs", book: "Enquire" },
  },
  stickyCta: { title: "Leh Flights", mobileTitle: "Leh–Ladakh Flights", desktop: "Enquire Now", mobile: "Enquire" },

  /* ---------- Hero ---------- */
  hero: {
    badge: "Karvaahh • Ladakh Flights",
    badgeIcon: "plane",
    titleLead: "Leh–Ladakh",
    titleAccent: "Scenic Flights",
    subtitle: "Discover the dramatic Himalayan mountains, high-altitude valleys, and spectacular cold-desert landscapes of Ladakh from the sky.",
    description:
      "Short morning flights from Delhi and other Indian gateways cross the Great Himalaya to land at Leh, one of the highest commercial airports in the world. Karvaahh helps you choose the right route, book tickets and plan the Ladakh journey beyond.",
    image: pangongHero,
    primaryCta: { label: "Enquire Now" },
    secondaryCta: { label: "Explore Flight Routes", href: "#flight-routes" },
    whatsappCta: "Enquire on WhatsApp",
    flightPath: true,
    floatingStat: { label: "Leh Airport (IXL)", value: "3,256 m" },
    strip: [],
    trust: [
      { icon: "plane", label: "Nonstop from Delhi" },
      { icon: "clock", label: "Approx. 1.5 Hours" },
      { icon: "sun", label: "Morning Operations" },
      { icon: "mountainSnow", label: "Trans-Himalayan Views" },
      { icon: "headset", label: "Booking Assistance" },
    ],
  },

  bookingWidget: {
    destination: "Leh (IXL)",
    departures: ["Delhi (DEL)", "Chandigarh (IXC)", "Jammu (IXJ)", "Srinagar (SXR)", "Mumbai (BOM, seasonal)", "Kathmandu (via Delhi)", "Kullu (via Delhi / Chandigarh)"],
    tourTypes: ["Scheduled flight ticket", "Flight + Ladakh tour package", "Private charter (on request)"],
    travelerOptions: ["1 Passenger", "2 Passengers", "3–5 Passengers", "6–10 Passengers", "Group (10+)"],
    defaults: { message: "I'd like help booking flights to Leh–Ladakh." },
    labels: { departure: "Flying from", tourType: "Booking type" },
    duration: "Delhi–Leh ≈ 1.5 hr",
  },

  quickFacts: [
    { icon: "plane", label: "Main gateway", value: "Delhi (DEL) → Leh (IXL)" },
    { icon: "clock", label: "Flight time", value: "Approx. 1 hr 10 min – 1 hr 45 min", note: "Varies by airline & schedule" },
    { icon: "mountain", label: "Airport elevation", value: "Approx. 3,256 m (10,682 ft)" },
    { icon: "sun", label: "Operations", value: "Morning flights", note: "Afternoon winds limit operations" },
  ],

  /* ---------- Overview ---------- */
  editorial: {
    eyebrow: "The Leh–Ladakh Experience",
    title: "Flying Into the Himalayan Cold Desert",
    paragraphs: [
      "[[Leh]] is the gateway to Ladakh — a high-altitude, rain-shadow land of bare brown mountains, Buddhist monasteries and turquoise lakes in the [[Trans-Himalaya]], north of the Great Himalayan range. The town sits in the [[Indus Valley]], ringed by the Stok and Ladakh ranges.",
      "Most visitors arrive by a short scheduled flight from Delhi. On a clear morning, the approach can reveal snow peaks, glaciers and the wide, arid Indus Valley before the aircraft lands at Leh. Views depend on the route, seat side and weather, and are never guaranteed.",
      "These are regular commercial flights, not sightseeing tours. Karvaahh books the right flight for your plans and pairs it with acclimatisation days, monasteries, Nubra, Pangong and the rest of Ladakh.",
    ],
    image: leh,
    inset: thiksey,
    fact: { label: "Delhi → Leh", value: "≈ 1.5 hr", text: "Roughly 615–625 km nonstop, across the Great Himalaya." },
  },

  /* ---------- Why ---------- */
  whyHelicopter: {
    title: "Why Fly to Leh?",
    intro: "The fastest way into Ladakh — with a landscape show on the way in, weather permitting.",
    items: [
      { icon: "clock", title: "Hours, Not Days", text: "Delhi to Leh in about an hour and a half, compared with two or more days by road." },
      { icon: "mountainSnow", title: "Himalayan Crossing", text: "Clear mornings can show snow ranges and glaciers as the flight crosses the Himalaya." },
      { icon: "compass", title: "Into the Indus Valley", text: "The approach descends into a dramatic, mountain-ringed valley around Leh." },
      { icon: "calendar", title: "Year-Round Access", text: "Flights are the main way in when high mountain passes are closed by snow." },
      { icon: "route", title: "Easy Connections", text: "Connect via Delhi from Kathmandu, Kullu or international gateways." },
      { icon: "heart", title: "Plan for Altitude", text: "Flying in means rapid arrival at altitude — Karvaahh builds in rest days." },
    ],
  },

  /* ---------- Regular vs scenic vs charter ---------- */
  comparison: {
    title: "Scheduled Flight or Private Charter?",
    intro: "There is no confirmed dedicated scenic (sightseeing) flight product in Ladakh. Views come from regular flights into Leh, or from a charter arranged on request.",
    columns: [
      {
        eyebrow: "Most travellers",
        title: "Scheduled Commercial Flight",
        highlight: true,
        points: [
          "Air India, IndiGo, SpiceJet (per route)",
          "Point to point — lands at Leh",
          "Window views on approach, weather permitting",
          "Published fares that change daily",
          "Airline baggage & refund rules apply",
        ],
      },
      {
        eyebrow: "On request",
        title: "Private / Charter Flight",
        points: [
          "Dedicated aircraft, subject to approvals",
          "Can be planned around sightseeing",
          "Priced per charter — not per seat",
          "Availability and permissions vary",
          "Quoted by Karvaahh on enquiry",
        ],
      },
    ],
  },

  /* ---------- Map (approximate, illustrative) ---------- */
  places: [
    { id: "delhi", name: "Delhi (DEL)", lat: 28.556, lon: 77.1, elevation: "Main gateway", label: "bottom", text: "Indira Gandhi International Airport — the busiest route to Leh, with Air India, IndiGo and SpiceJet. International and Kathmandu connections arrive here." },
    { id: "chandigarh", name: "Chandigarh (IXC)", lat: 30.673, lon: 76.788, elevation: "Nonstop route", label: "left", text: "Nonstop to Leh with Air India and IndiGo (reported). Also a connection point for Kullu." },
    { id: "jammu", name: "Jammu (IXJ)", lat: 32.689, lon: 74.837, elevation: "Nonstop route", label: "left", text: "Nonstop to Leh with Air India and IndiGo (reported)." },
    { id: "srinagar", name: "Srinagar (SXR)", lat: 33.987, lon: 74.774, elevation: "Nonstop route", label: "left", text: "Nonstop to Leh with Air India (reported). Pairs well with a Kashmir–Ladakh journey." },
    { id: "kullu", name: "Kullu (KUU)", lat: 31.876, lon: 77.154, elevation: "No direct flight", label: "right", text: "No direct Kullu–Leh flight confirmed. Connect via Delhi or Chandigarh, or travel by road over the Manali–Leh Highway in season.", image: manaliLeh },
    { id: "leh", name: "Leh (IXL)", lat: 34.136, lon: 77.546, elevation: "≈ 3,256 m", label: "right", text: "Kushok Bakula Rimpochee Airport in the Indus Valley — one of the highest commercial airports in the world.", image: leh },
    { id: "ladakh", name: "Ladakh", lat: 34.5, lon: 77.9, region: true, text: "Trans-Himalayan cold desert." },
  ],
  map: {
    title: "Nonstop Routes to Leh",
    intro: "Select a route to see how each gateway connects to Leh. Tap a marker for details.",
    note: "Illustrative arcs only — not actual flight paths. Routes are based on reported schedules as of 13 Oct 2026 and must be reconfirmed for your travel date.",
    bounds: { west: 73.2, east: 79.4, south: 27.9, north: 35.2 },
    route: ["delhi", "leh"],
    routes: [
      { id: "del", label: "Delhi → Leh", style: "air", places: ["delhi", "leh"] },
      { id: "ixc", label: "Chandigarh → Leh", style: "air", places: ["chandigarh", "leh"] },
      { id: "ixj", label: "Jammu → Leh", style: "air", places: ["jammu", "leh"] },
      { id: "sxr", label: "Srinagar → Leh", style: "air", places: ["srinagar", "leh"] },
      { id: "kuu", label: "Kullu → Leh (via Delhi)", style: "custom", places: ["kullu", "delhi", "leh"], note: "No direct flight — connect via Delhi or Chandigarh." },
    ],
    selected: "leh",
    aircraft: true,
  },

  /* ---------- Spotlights ---------- */
  spotlights: [
    {
      id: "flight-routes",
      eyebrow: "Flight Routes & Airlines",
      title: "How to Fly to Leh",
      paragraphs: [
        "All flights to Leh are domestic Indian services. The routes below are reported in current airline schedules; frequencies change by season, so Karvaahh confirms the exact flight for your date.",
      ],
      cards: [
        { icon: "plane", title: "Delhi (DEL) → Leh (IXL)", text: "Air India, IndiGo, SpiceJet. Approx. 1 hr 10 min – 1 hr 45 min, about 615–625 km. Several flights daily, all in the morning." },
        { icon: "plane", title: "Chandigarh (IXC) → Leh (IXL)", text: "Air India and IndiGo (reported). A short nonstop hop — frequency varies by season." },
        { icon: "plane", title: "Jammu (IXJ) → Leh (IXL)", text: "Air India and IndiGo (reported). Frequency varies by season." },
        { icon: "plane", title: "Srinagar (SXR) → Leh (IXL)", text: "Air India (reported). Useful for combined Kashmir–Ladakh itineraries." },
        { icon: "calendar", title: "Mumbai (BOM) → Leh (IXL)", text: "Seasonal nonstop in the summer peak only (reported). Outside the season, connect via Delhi." },
        { icon: "route", title: "Kullu / Bhuntar (KUU) → Leh", text: "No direct flight confirmed. Fly Kullu–Delhi or Kullu–Chandigarh (Alliance Air), then on to Leh — or drive the Manali–Leh Highway in season." },
        { icon: "passport", title: "From Nepal (Kathmandu, KTM)", text: "No direct flight. Fly Kathmandu–Delhi (Air India, IndiGo, Nepal Airlines and others), then Delhi–Leh. Allow a generous connection or a night in Delhi." },
        { icon: "compass", title: "International travellers", text: "No international flights to Leh. Arrive in Delhi (or Mumbai in season) and connect on a domestic flight." },
      ],
      note: `Sources: airline and airport schedule listings and Wikipedia (citing AAI), checked ${VERIFIED}. Schedules, frequencies and seasonal routes change — always reconfirm before booking.`,
      variant: "cards",
    },
    {
      id: "airport",
      eyebrow: "Leh Airport & High Altitude",
      title: "Kushok Bakula Rimpochee Airport (IXL)",
      paragraphs: [
        "Leh's airport sits at about 3,256 m (10,682 ft) in the Indus Valley, surrounded by high ridges. It is owned by the Indian Air Force, with civil operations run by the Airports Authority of India, and is one of the highest commercial airports in the world.",
        "Because strong winds build over the mountains in the afternoon, commercial flights operate in the morning. The approach is over high terrain, so pilots need good visibility — which is why weather can delay or cancel flights even on otherwise fine days.",
      ],
      cards: [
        { icon: "mountain", title: "Elevation", text: "Approx. 3,256 m (10,682 ft) above sea level." },
        { icon: "sun", title: "Morning flights", text: "Afternoon winds mean flights are scheduled for the morning." },
        { icon: "shield", title: "Defence airfield", text: "Shared civil–military airport — photography rules on the ground are strict; follow staff instructions." },
        { icon: "heart", title: "Rest on arrival", text: "Plan at least 24–48 hours of rest in Leh before sightseeing or travelling higher." },
      ],
      variant: "cards",
      dark: true,
    },
    {
      id: "pricing",
      eyebrow: "Fares & Passenger Categories",
      title: "What Flights to Leh Cost",
      paragraphs: [
        "Flights to Leh are domestic Indian fares: the same published fare applies regardless of nationality — we are not aware of separate Nepalese, SAARC or foreign fare categories on these routes. Fares are dynamic and change daily, peaking in May–June and around holidays, so we do not display figures that would quickly go out of date.",
      ],
      cards: [
        { icon: "plane", title: "Delhi → Leh (Air India / IndiGo / SpiceJet)", text: `One-way or return. ${PRICE_TEXT} Currency: INR.` },
        { icon: "plane", title: "Chandigarh / Jammu / Srinagar → Leh", text: `One-way or return. ${PRICE_TEXT} Currency: INR.` },
        { icon: "users", title: "Indian & Nepalese travellers", text: "Same domestic fare as other passengers. Quotation in INR or NPR (indicative) on request." },
        { icon: "passport", title: "SAARC & other international", text: "Same domestic fare. Quotation in INR; USD, GBP, EUR or AUD shown as indicative conversions." },
        { icon: "luggage", title: "Baggage", text: "Depends on airline and fare type — checked bags may be excluded on the lowest fares. Confirmed in your quotation." },
        { icon: "shield", title: "Taxes & charges", text: "Published Indian fares normally include taxes and airport charges; we state this in writing on your quotation." },
        { icon: "helicopter", title: "Charter & private flights", text: "Priced per aircraft, not per seat, and quoted on request. Completely separate from scheduled fares." },
      ],
      note: `Last verified: ${VERIFIED}. No fixed prices are shown because fares change daily — contact Karvaahh for live availability.`,
      variant: "cards",
    },
    {
      id: "booking-policy",
      eyebrow: "Booking, Refunds & Insurance",
      title: "Booking & Changes",
      paragraphs: [
        "The airline's fare rules decide refunds, changes and baggage. Karvaahh shares the exact rules in writing before you pay.",
      ],
      cards: [
        { icon: "passport", title: "ID to fly", text: "Indian citizens: government photo ID (Aadhaar, passport, Voter ID, etc.). Foreign nationals: passport and valid Indian visa. Nepalese nationals: a valid passport is recommended — confirm accepted ID with the airline." },
        { icon: "file", title: "Ladakh permits", text: "Foreign nationals need a Protected Area Permit for Nubra, Pangong, Tso Moriri and similar areas; domestic visitors pay an environment / permit fee. Rules are under review — we confirm at booking." },
        { icon: "cloud", title: "Weather cancellations", text: "The airline usually offers rebooking or a refund under its policy. Extra hotel nights are not covered by the ticket." },
        { icon: "calendar", title: "Date changes", text: "Subject to seat availability, change fees and fare difference." },
        { icon: "clock", title: "Missed flights", text: "Arriving after check-in closes may be a no-show with little or no refund." },
        { icon: "umbrella", title: "Travel insurance", text: "Strongly recommended — choose cover for weather delays, cancellations and high-altitude medical care." },
      ],
      note: "Karvaahh's own service fee and booking terms, if any, are confirmed in your written quotation.",
      variant: "cards",
    },
  ],

  /* ---------- Weather ---------- */
  seasons: {
    title: "Weather & the Best Time to Fly",
    intro: "Leh has flights all year, but conditions change sharply with the seasons. Morning departures give the best chance of calm air and clear views.",
    note: "No month guarantees clear views or on-time operations. Wind, low cloud, snow and poor visibility can delay, divert or cancel flights. Keep a buffer day before onward international flights.",
    items: [
      { name: "Summer", months: "May – June", rating: "Peak season", icon: "sun", text: "Generally stable flying and clear skies; flights and hotels fill early and fares are highest." },
      { name: "Monsoon", months: "July – August", rating: "Good", icon: "cloud", text: "Ladakh lies in a rain shadow, but cloud over the Himalaya can still affect the approach." },
      { name: "Autumn", months: "September – October", rating: "Excellent", icon: "leaf", text: "Crisp, clear air and golden valleys; colder mornings and fewer crowds." },
      { name: "Winter", months: "November – April", rating: "Variable", icon: "snow", text: "Very cold with possible snowfall. Flights are the main access, but snow and visibility cause more delays and cancellations." },
    ],
  },

  /* ---------- Before you fly ---------- */
  safety: {
    eyebrow: "Arrival at Altitude",
    title: "Before You Fly to Leh",
    intro: "Flying in takes you from near sea level to about 3,500 m in under two hours. No flight or high-altitude trip is risk-free — these steps help you arrive safely.",
    points: [
      { icon: "heart", title: "Rest 24–48 hours", text: "Take it easy on arrival — no sightseeing, climbing or alcohol on day one." },
      { icon: "waves", title: "Stay hydrated", text: "Drink plenty of water; the air is very dry." },
      { icon: "shield", title: "See a doctor first", text: "Consult your doctor before travel, especially with heart, lung or blood-pressure conditions, or if pregnant." },
      { icon: "mountainSnow", title: "Know the signs", text: "Headache, nausea or breathlessness at rest can signal altitude sickness — seek medical help." },
      { icon: "sun", title: "Warm layers & sun care", text: "Mornings are cold year-round; UV is intense at altitude." },
      { icon: "calendar", title: "Reconfirm & stay flexible", text: "Reconfirm the flight the day before and keep a spare day in your plans." },
    ],
  },

  /* ---------- Inclusions ---------- */
  inclusions: [
    { text: "Confirmed flight ticket on your chosen airline and date", status: "included" },
    { text: "Booking assistance from Karvaahh", status: "included" },
    { text: "Taxes and airport charges — where included in the published fare", status: "included" },
    { text: "Leh airport transfers, hotels and sightseeing", status: "package" },
    { text: "Ladakh permits arrangement", status: "package" },
  ],
  exclusions: [
    "Accommodation and meals (unless booked as a package)",
    "Airport transfers unless included",
    "Travel insurance",
    "Extra baggage charges and seat selection",
    "Cancellation penalties and applicable service fees",
    "Extra costs caused by weather delays or cancellations",
  ],

  travelerTypes: {
    title: "Who Flies to Leh?",
    intro: "Anyone heading to Ladakh with limited time — as long as they plan for the altitude.",
    items: [
      { icon: "users", title: "Indian Travellers", text: "Quick access from Delhi and northern cities." },
      { icon: "passport", title: "Nepalese Travellers", text: "Connect from Kathmandu via Delhi in a single day, schedules permitting." },
      { icon: "compass", title: "International Visitors", text: "Combine Delhi, Ladakh and the rest of India." },
      { icon: "camera", title: "Photographers", text: "Monasteries, lakes and the night skies of Ladakh." },
      { icon: "car", title: "Road-Trippers", text: "Fly in, then explore Nubra and Pangong by road." },
      { icon: "heart", title: "Families & Seniors", text: "Shorter travel time — with extra rest days for altitude." },
    ],
  },

  /* ---------- Landscapes ---------- */
  gallery: {
    title: "Landscapes of Ladakh",
    intro: "Places to explore once you land in Leh. Tap any photo to view it larger.",
    items: [
      { image: leh, caption: "Leh town and Shanti Stupa" },
      { image: thiksey, caption: "Thiksey Monastery in the Indus Valley" },
      { image: pangong, caption: "Pangong Tso" },
      { image: nubra, caption: "Sand dunes of Hunder, Nubra Valley" },
      { image: tsoMoriri, caption: "Tso Moriri on the Changthang plateau" },
      { image: lamayuru, caption: "Lamayuru's 'moonland'" },
    ],
  },

  trust: {
    ...karvaahhTrust,
    intro: "Karvaahh – Live to Travel · Nepal & India Travel Experiences. We help Indian, Nepalese and international travellers book Leh flights and plan complete Ladakh journeys.",
  },

  faqs: [
    { question: "Which airlines fly directly to Leh?", answer: "Air India, IndiGo and SpiceJet operate nonstop flights to Leh, mainly from Delhi. Air India and IndiGo also report nonstop flights from Chandigarh and Jammu, and Air India from Srinagar. Services vary by season — Karvaahh confirms what is operating for your date." },
    { question: "Are there direct flights from Delhi to Leh?", answer: "Yes. Delhi–Leh is the busiest route, with several nonstop morning flights daily by Air India, IndiGo and SpiceJet." },
    { question: "Is there a direct flight from Kullu to Leh?", answer: "We could not confirm any current direct Kullu–Leh flight. Fly Kullu–Delhi or Kullu–Chandigarh with Alliance Air and connect to Leh, or travel by road on the Manali–Leh Highway when it is open (usually summer to early autumn)." },
    { question: "How long does the Delhi–Leh flight take?", answer: "Approximately 1 hour 10 minutes to 1 hour 45 minutes, depending on the airline and schedule. The distance is roughly 615–625 km." },
    { question: "Can passengers see the Himalayas from the aircraft?", answer: "Often, on a clear morning — snow peaks, glaciers and the Indus Valley can be visible on the approach. Views depend on the weather, route and seat side and are not guaranteed. These are regular flights, not sightseeing flights." },
    { question: "What happens if a flight is cancelled?", answer: "Weather cancellations at Leh are not unusual, especially in winter. The airline usually offers rebooking or a refund under its policy. Extra hotel or transport costs are not covered by the ticket, so keep a buffer day and consider travel insurance." },
    { question: "What should travellers know about arriving at high altitude?", answer: "Leh is at about 3,500 m. Rest for 24–48 hours after landing, drink plenty of water, avoid alcohol and exertion, and consult your doctor before travel if you have medical conditions. Seek medical help if symptoms of altitude sickness develop." },
  ],

  cta: {
    title: "Your Ladakh Journey Starts in the Sky.",
    text: "Tell us where you're flying from — we'll find the right flight to Leh and plan the days that follow.",
    image: zanskarRoad,
    animated: true,
    primaryLabel: "Enquire Now",
    primaryHref: "#book",
    quoteLabel: "Request a Quotation",
    whatsappLabel: "WhatsApp Us",
    planMessage: "Hello Karvaahh, I'd like help booking flights to Leh–Ladakh.",
    quoteSubject: "Booking enquiry: Leh–Ladakh flights",
  },

  enquiry: {
    title: "Enquire About Leh Flights",
    intro: "1. Share your departure city, dates, passengers and nationality. 2. We check live availability and fares. 3. You receive a quotation with airline, fare, currency, baggage, taxes and change rules. 4. Confirm and pay under the agreed terms. 5. Reconfirm before you fly.",
    hotelPlaceholder: "Your Leh hotel (if booked)",
    options: {
      passengers: ["1 Passenger", "2 Passengers", "3 Passengers", "4 Passengers", "5 Passengers", "6+ Passengers"],
      airlines: ["Recommend for me", "Air India", "IndiGo", "SpiceJet", "Private charter (on request)"],
      times: ["Earliest available", "Morning", "Flexible"],
      currencies: ["INR", "NPR", "USD", "GBP", "EUR", "AUD"],
      categories: ["Indian citizen", "Nepalese citizen", "SAARC national", "Other international"],
    },
    specialRequirements: true,
  },

  relatedTours: [
    { title: "Leh–Ladakh, Zanskar & Spiti Circuit", text: "Monasteries, high passes, Pangong, Nubra and Spiti in one journey.", href: "/packages/leh-ladakh-spiti-circuit", image: pangong },
    { title: "North India Tours", text: "Delhi, the Himalayan foothills and beyond.", href: "/packages/north-india", image: manaliLeh },
    { title: "Nepal & India Combined Tours", text: "Kathmandu to Ladakh in one seamless trip.", href: "/packages/nepal-india-combined-tours", image: thiksey },
    { title: "Kailash Mansarovar Flights", text: "Darshan flights and pilgrimage connections from Nepal.", href: "/activities/flights/kailash-mansarovar-scenic-flights", image: tsoMoriri },
    { title: "Everest Mountain Flight", text: "A dedicated scenic flight to the Everest skyline from Kathmandu.", href: "/activities/domestic-flights/mountain-scenic", image: nubra },
    { title: "Annapurna Scenic Flight", text: "A morning sightseeing flight from Pokhara.", href: "/activities/domestic-flights/annapurna-scenic-flights", image: lamayuru },
  ],

  /* ---------- Required by the template ---------- */
  route: {
    title: "Flight Routes",
    intro: "Nonstop routes to Leh.",
    note: "Reconfirm schedules for your travel date.",
    stops: [
      { name: "Delhi (DEL)", detail: "Main gateway", mode: "landing" },
      { name: "Great Himalaya", detail: "Views on approach, weather permitting", mode: "aerial" },
      { name: "Leh (IXL)", detail: "Arrival", mode: "landing", elevation: "≈ 3,256 m" },
    ],
  },
  options: {
    title: "Booking Options",
    intro: "Confirmed with you at booking.",
    note: "Fares depend on airline, date and fare type.",
    items: [
      { name: "Scheduled flight ticket", basis: "Per seat", price: PRICE_TEXT, points: ["Air India, IndiGo or SpiceJet"], idealFor: "Most travellers", whatsappMessage: "Hello Karvaahh, please share current fares for flights to Leh." },
      { name: "Flight + Ladakh package", basis: "Per person", price: "Enquire for details", points: ["Flights, hotels, transfers & permits"], idealFor: "Complete trips", href: "/packages/leh-ladakh-spiti-circuit", whatsappMessage: "Hello Karvaahh, I'd like a Ladakh package with flights." },
      { name: "Private charter (on request)", basis: "Per aircraft", price: "Enquire for details", points: ["Subject to availability & approvals"], idealFor: "Groups", whatsappMessage: "Hello Karvaahh, I'd like to enquire about a private charter flight to Leh." },
    ],
  },

  layout: [
    "hero",
    "facts",
    "nav",
    "trust-bar",
    "story",
    "why",
    "comparison",
    "spotlight:flight-routes",
    "map",
    "spotlight:airport",
    "seasons",
    "spotlight:pricing",
    "safety",
    "inclusions",
    "spotlight:booking-policy",
    "travelers",
    "gallery",
    "faq",
    "cta",
    "enquiry",
    "related",
  ],
};
