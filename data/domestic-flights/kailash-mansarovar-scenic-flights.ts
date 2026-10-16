/* ============================================================
   KAILASH MANSAROVAR FLIGHTS — PAGE DATA
   ------------------------------------------------------------
   /activities/flights/kailash-mansarovar-scenic-flights
   A flight & pilgrimage guide covering two different products:
   1. The Kailash–Mansarovar experience (scenic) flight from
      Nepalgunj — launched by Shree Airlines in January 2024
      (CRJ 900, per launch reports). No landing in Tibet.
   2. Pilgrimage transfers for the overland yatra:
      Kathmandu → Nepalgunj → Simikot (scheduled / STOL) →
      Hilsa (helicopter), then by road into Tibet.

   CONTENT RULES (keep when editing):
   - A transfer flight is NOT a scenic flight over Kailash.
   - No prices, schedules, durations or guaranteed views until
     confirmed with the airline / operator for the season.
   - Operators are named only where publicly reported; all
     services must be reconfirmed each season.
   - Map coordinates are approximate; routes are illustrative.
   ============================================================ */

import type { HelicopterTour } from "@/components/activities/experience/product-types";
import { kailash, kathmanduValley, pending } from "../helicopter-tours/images";
import { karvaahhTrust } from "../helicopter-tours/shared";

const mansarovar = pending("Lake Mansarovar", "Lake Mansarovar beneath snow-covered ridges on the Tibetan plateau");
const simikot = pending("Simikot", "The mountain airstrip at Simikot in Humla, far-western Nepal");

const PRICE_TEXT = "Contact Karvaahh for current pricing.";

export const kailashMansarovarFlightsPage: HelicopterTour = {
  title: "Kailash Mansarovar Scenic Flights",
  slug: "kailash-mansarovar-scenic-flights",
  path: "/activities/flights/kailash-mansarovar-scenic-flights",
  breadcrumbLabel: "Kailash Mansarovar Flights",
  collection: { label: "Flights & Experiences" },
  description:
    "A guide to Kailash Mansarovar flights from Nepal: the seasonal Kailash–Mansarovar experience flight from Nepalgunj, and the Kathmandu–Nepalgunj–Simikot–Hilsa flight and helicopter connections used on the overland pilgrimage. Availability, pricing and documents are confirmed by Karvaahh before booking.",
  touristType: ["Pilgrims", "Senior travellers", "Families", "Spiritual travellers", "Indian travellers"],

  seo: {
    title: "Kailash Mansarovar Flight & Pilgrimage Guide | Karvaahh",
    socialTitle: "Kailash Mansarovar Flights – Scenic Darshan & Pilgrimage Connections",
    description:
      "Explore Kailash Mansarovar pilgrimage flight connections, Himalayan transfers, travel requirements, pricing guidance, and booking assistance with Karvaahh.",
    keywords: [
      "Kailash Mansarovar Flight",
      "Kailash Mansarovar Scenic Flight",
      "Kailash Darshan Flight Nepalgunj",
      "Kailash Experience Flight",
      "Nepalgunj Simikot Flight",
      "Simikot Hilsa Helicopter",
      "Kailash Mansarovar Yatra via Nepal",
    ],
    ogImage: kailash,
  },

  duration: "Confirmed by the airline / operator",
  elevation: "Aerial views (scenic flight) / Hilsa approx. 3,700 m (transfer)",
  startingPoint: "Nepalgunj (NPG)",
  endingPoint: "Nepalgunj (scenic) / Hilsa (transfer)",
  region: "Far-west Nepal & the Nepal–Tibet border",
  bestSeason: "Seasonal — confirmed at enquiry",
  transportation: "Fixed-wing aircraft & helicopter",
  tourTypes: "Scenic flight seat / pilgrimage transfers",
  groupSize: "Subject to aircraft capacity",
  landingNote: "Scenic flight does not land in Tibet",

  labels: {
    why: "Two Ways to Fly",
    related: "Pilgrimage Journeys",
    relatedTitle: "Plan Your Kailash Yatra",
    glance: "At a Glance",
    nav: { overview: "Overview", route: "Routes", inclusions: "Inclusions", safety: "Before You Fly", faqs: "FAQs", book: "Enquire" },
  },
  stickyCta: { title: "Kailash Flights", mobileTitle: "Kailash Mansarovar Flights", desktop: "Enquire Now", mobile: "Enquire" },

  /* ---------- Hero ---------- */
  hero: {
    badge: "Karvaahh • Kailash Mansarovar Flights",
    badgeIcon: "plane",
    titleLead: "Kailash Mansarovar",
    titleAccent: "Scenic Flights",
    subtitle: "Himalayan darshan flights & pilgrimage connections from Nepal",
    description:
      "Seek darshan of sacred Mount Kailash from the sky on the seasonal experience flight from Nepalgunj, or fly the Nepalgunj–Simikot–Hilsa route that begins the overland yatra. Karvaahh confirms what is operating before you book.",
    image: kailash,
    video: "/videos/spritual-journeys/kailash-mansarovar/kailash-mansarovar-hero.mp4",
    primaryCta: { label: "Send a Booking Enquiry" },
    secondaryCta: { label: "View Flight Routes", href: "#flight-routes" },
    whatsappCta: "Enquire on WhatsApp",
    flightPath: true,
    strip: [],
    trust: [
      { icon: "plane", label: "Nepalgunj Departure" },
      { icon: "mountainSnow", label: "Kailash & Mansarovar" },
      { icon: "cloud", label: "Weather-Dependent" },
      { icon: "headset", label: "Yatra Assistance" },
    ],
  },

  bookingWidget: {
    destination: "Kailash Mansarovar",
    departures: ["Nepalgunj (NPG)", "Kathmandu (KTM)", "Lucknow (by road to Nepalgunj)"],
    tourTypes: ["Kailash experience (scenic) flight", "Pilgrimage transfers to Hilsa", "Full Kailash Mansarovar Yatra"],
    travelerOptions: ["1 Traveller", "2 Travellers", "3–5 Travellers", "6–10 Travellers", "Group (10+)"],
    defaults: { message: "I'd like details on Kailash Mansarovar flights." },
    labels: { departure: "Starting from", tourType: "Flight type" },
  },

  quickFacts: [
    { icon: "plane", label: "Scenic flight from", value: "Nepalgunj (NPG)" },
    { icon: "helicopter", label: "Yatra transfer", value: "Simikot → Hilsa" },
    { icon: "mapPin", label: "Landing in Tibet", value: "No (scenic flight)" },
    { icon: "calendar", label: "Availability", value: "Seasonal", note: "Confirmed at enquiry" },
  ],

  /* ---------- Overview ---------- */
  editorial: {
    eyebrow: "Experience Overview",
    title: "Nepal's Aviation Gateways to Sacred Kailash",
    paragraphs: [
      "Mount Kailash and Lake Mansarovar lie in Tibet, just north of Nepal's far-western border. For pilgrims travelling through Nepal, [[Nepalgunj]] in the western lowlands is the aviation gateway — reached by domestic flight from Kathmandu, or by road from Lucknow via the Rupaidiha border.",
      "From Nepalgunj there are two very different journeys. The [[experience flight]] is a scenic darshan flight towards the Kailash region that returns to Nepalgunj the same day, without landing in Tibet. The overland yatra instead flies to Simikot in Humla, then by helicopter to Hilsa on the border, before continuing by road to Mansarovar and Kailash.",
      "Both depend on the season, the weather and operator approvals. Karvaahh helps you choose the right option and [[confirms]] what is operating before you book.",
    ],
    image: kailash,
    inset: simikot,
    fact: { label: "Gateway", value: "Nepalgunj", text: "Scenic darshan flights and yatra transfers both begin here." },
  },

  /* ---------- Scenic flight vs transfer ---------- */
  comparison: {
    title: "Scenic Flight or Pilgrimage Transfer?",
    intro: "A flight used during the Kailash Mansarovar Yatra is not automatically a scenic flight over Mount Kailash. Here is how the two differ.",
    columns: [
      {
        eyebrow: "Aerial darshan",
        title: "Kailash Experience Flight",
        highlight: true,
        points: [
          "Scenic flight from Nepalgunj towards the Kailash region",
          "Returns to Nepalgunj the same day",
          "No landing in Tibet and no trekking",
          "Views of Kailash and Mansarovar depend on the weather",
          "Seasonal — operated only when the airline schedules it",
        ],
      },
      {
        eyebrow: "Overland yatra",
        title: "Nepalgunj → Simikot → Hilsa",
        points: [
          "Point-to-point transfers, not a sightseeing flight",
          "Nepalgunj → Simikot by fixed-wing aircraft",
          "Simikot → Hilsa by helicopter",
          "Continues by road into Tibet with permits and visa",
          "Part of a multi-day Kailash Mansarovar Yatra package",
        ],
      },
    ],
  },

  /* ---------- Map (approximate) ---------- */
  places: [
    { id: "kathmandu", name: "Kathmandu (KTM)", lat: 27.697, lon: 85.359, elevation: "Domestic terminal", label: "bottom", text: "Scheduled domestic flights connect Kathmandu with Nepalgunj.", image: kathmanduValley },
    { id: "nepalgunj", name: "Nepalgunj (NPG)", lat: 28.103, lon: 81.667, elevation: "Gateway", label: "bottom", text: "Departure point for the Kailash experience flight and for flights to Simikot. Reachable by road from Lucknow." },
    { id: "simikot", name: "Simikot", lat: 29.971, lon: 81.819, elevation: "Humla airstrip", label: "right", text: "A remote mountain airstrip in Humla, served by small STOL aircraft. Helicopters to Hilsa leave from here." },
    { id: "hilsa", name: "Hilsa", lat: 30.152, lon: 81.336, elevation: "Approx. 3,700 m", label: "left", text: "Border point where the helicopter segment ends; the yatra continues by road into Tibet." },
    { id: "taklakot", name: "Taklakot (Purang)", lat: 30.296, lon: 81.177, label: "left", text: "First town in Tibet on the overland route, used for acclimatisation." },
    { id: "mansarovar", name: "Lake Mansarovar", lat: 30.667, lon: 81.467, elevation: "Approx. 4,590 m", label: "right", text: "The sacred freshwater lake below Mount Kailash.", image: mansarovar },
    { id: "kailash", name: "Mount Kailash", lat: 31.067, lon: 81.312, elevation: "Approx. 6,638 m", label: "top", text: "Revered as the abode of Lord Shiva and sacred to Buddhists, Jains and followers of Bön.", image: kailash },
  ],
  map: {
    title: "Kailash Mansarovar Flight Routes",
    intro: "Air connections from Kathmandu and Nepalgunj, and the road route beyond Hilsa. Tap a marker for details.",
    note: "Approximate locations and illustrative routes only. The scenic flight's path is set by the airline within permitted airspace; it does not land in Tibet.",
    bounds: { west: 80.6, east: 85.8, south: 27.4, north: 31.4 },
    route: ["kathmandu", "nepalgunj", "simikot", "hilsa", "taklakot", "mansarovar", "kailash"],
    routes: [
      { id: "transfer", label: "Yatra air transfers", style: "air", places: ["kathmandu", "nepalgunj", "simikot", "hilsa"], note: "Scheduled / STOL flights and a helicopter segment." },
      { id: "road", label: "Road into Tibet", style: "road", places: ["hilsa", "taklakot", "mansarovar", "kailash"], note: "Requires a Chinese visa and Tibet permits." },
    ],
    selected: "nepalgunj",
    aircraft: true,
  },

  /* ---------- Spotlights ---------- */
  spotlights: [
    {
      id: "flight-routes",
      eyebrow: "Flight Routes",
      title: "How Each Connection Works",
      paragraphs: ["Each sector is a different kind of flight, run by a different type of operator. Schedules change every season."],
      cards: [
        { icon: "plane", title: "Kathmandu → Nepalgunj", text: "Scheduled domestic flight on regional aircraft. The usual way to reach the gateway from Kathmandu." },
        { icon: "mountainSnow", title: "Nepalgunj ⇄ Kailash region", text: "Scenic experience flight that returns to Nepalgunj without landing. Seasonal; operated only when scheduled." },
        { icon: "route", title: "Nepalgunj → Simikot", text: "Scheduled or chartered flight on small STOL aircraft into the Humla airstrip. Weather delays are common." },
        { icon: "helicopter", title: "Simikot → Hilsa", text: "Short helicopter transfer to the border, typically arranged within a yatra package. Seats and baggage are limited." },
      ],
      note: "Indian travellers can also reach Nepalgunj by road from Lucknow via the Rupaidiha–Nepalgunj border.",
      variant: "cards",
    },
    {
      id: "operators",
      eyebrow: "Operators",
      title: "Who Operates These Flights",
      paragraphs: ["Named from public reports and official sources. Operators, aircraft and schedules change, so we reconfirm every service before booking."],
      cards: [
        { icon: "plane", title: "Shree Airlines", text: "Launched the Kailash–Mansarovar experience flight from Nepalgunj in January 2024 on a CRJ 900 jet. Seasonal operation — reconfirm." },
        { icon: "helicopter", title: "Simrik Air", text: "Helicopter operator flying the Simikot–Hilsa sector during the yatra season, as reported in 2024–25." },
        { icon: "helicopter", title: "Other helicopter operators", text: "Operators such as Fishtail Air, Mountain Helicopters, Prabhu Helicopters and Kailash Helicopter were reported at Simikot in the 2025 season." },
        { icon: "route", title: "Domestic & STOL airlines", text: "Kathmandu–Nepalgunj is served by Nepal's domestic airlines; Simikot by STOL operators such as Tara Air. Exact carriers confirmed at booking." },
      ],
      variant: "cards",
    },
    {
      id: "flight-details",
      eyebrow: "Flight Details",
      title: "What to Expect",
      paragraphs: ["Details marked “confirmed at booking” are set by the airline or operator for your date."],
      cards: [
        { icon: "mapPin", title: "Departure airport", text: "Nepalgunj (NPG) for the scenic flight and Simikot transfers; Kathmandu (KTM) for connections." },
        { icon: "clock", title: "Duration", text: "Scenic flight is a same-day round trip. Exact flight times are confirmed by the airline at booking." },
        { icon: "plane", title: "Aircraft", text: "CRJ 900 jet at the scenic flight's launch; STOL aircraft to Simikot; light helicopters to Hilsa." },
        { icon: "passport", title: "Passenger requirements", text: "Valid passport or accepted ID. Yatra travellers also need a Chinese visa and Tibet permits, arranged in the package." },
        { icon: "calendar", title: "Availability", text: "Seasonal and subject to operator schedules and approvals. Confirmed at enquiry." },
        { icon: "luggage", title: "Baggage", text: "Small aircraft and helicopters have strict weight limits. Limits are confirmed with your booking." },
        { icon: "heart", title: "Health", text: "No trekking on the scenic flight. The overland yatra reaches high altitude — consult your doctor first." },
        { icon: "users", title: "Seating", text: "Window seating and seat allocation depend on the airline and aircraft." },
      ],
      variant: "cards",
    },
    {
      id: "weather",
      eyebrow: "Weather & Safety",
      title: "Himalayan Flights Are Weather-Dependent",
      paragraphs: [
        "Mountain weather changes quickly. Cloud, wind and poor visibility can delay or cancel flights to Simikot and Hilsa, and can hide Mount Kailash on the scenic flight. Humla gets heavy rain in the monsoon, when disruptions are more frequent.",
        "Hilsa sits at about 3,700 m and the road route climbs above 4,500 m at Mansarovar, so acclimatisation matters on the yatra. Airlines and operators decide on timings and routing for safety, and their decisions are final. Keep buffer days in your plans.",
      ],
      cards: [
        { icon: "cloud", title: "Visibility", text: "Views of Kailash cannot be guaranteed." },
        { icon: "wind", title: "Delays", text: "Early-morning slots are common; delays happen." },
        { icon: "mountain", title: "Altitude", text: "The yatra goes high; the scenic flight does not land." },
        { icon: "shield", title: "Restrictions", text: "Airspace, permits and approvals apply." },
      ],
      variant: "cards",
      dark: true,
    },
    {
      id: "pricing",
      eyebrow: "Pricing",
      title: "Current Fares",
      paragraphs: [
        "Fares vary by airline, season, nationality and package, and Nepal's domestic airlines may charge different fares by nationality. We do not publish unverified prices — tell us your nationality and dates and we will share the current fare.",
      ],
      cards: [
        { icon: "flag", title: "Nepalese travellers", text: PRICE_TEXT },
        { icon: "flag", title: "Indian travellers", text: PRICE_TEXT },
        { icon: "flag", title: "SAARC travellers", text: PRICE_TEXT },
        { icon: "flag", title: "Other international", text: PRICE_TEXT },
      ],
      cta: { label: "Request Current Pricing", message: "Hello Karvaahh, please share current pricing for Kailash Mansarovar flights. Nationality: ___ Travel dates: ___ Travellers: ___" },
      variant: "cards",
    },
    {
      id: "booking-policy",
      eyebrow: "Booking & Cancellation",
      title: "How Booking Works",
      paragraphs: [
        "Cancellation, refund and rescheduling terms are set by the airline or helicopter operator and by your package. We share the exact terms in writing before you pay.",
      ],
      cards: [
        { icon: "headset", title: "1. Enquire", text: "Share your dates, nationality, number of travellers and which flight you want." },
        { icon: "file", title: "2. Confirmation", text: "We confirm availability, fare, documents and terms, then issue your booking." },
        { icon: "cloud", title: "3. Weather disruptions", text: "If weather affects a flight, we help with the next available slot under the operator's rules." },
        { icon: "calendar", title: "4. Refunds & rescheduling", text: "Handled according to the airline's or operator's policy and your package terms." },
      ],
      variant: "cards",
    },
  ],

  /* ---------- Seasons ---------- */
  seasons: {
    title: "When Do Kailash Flights Operate?",
    intro: "Operations are seasonal and weather dependent. We confirm current dates at enquiry.",
    note: "Clear skies cannot be guaranteed. Flights may be delayed, rescheduled or cancelled because of weather, approvals or operational conditions.",
    items: [
      { name: "Spring", months: "April – June", rating: "Often operated", icon: "sun", text: "The main yatra season begins; generally clearer pre-monsoon skies." },
      { name: "Monsoon", months: "July – August", rating: "Variable", icon: "rain", text: "Yatra transfers continue but rain and cloud cause frequent delays in Humla." },
      { name: "Autumn", months: "September – November", rating: "Clear views", icon: "leaf", text: "Crisp post-monsoon air; scenic flights have been offered in this window." },
      { name: "Winter", months: "December – March", rating: "Limited", icon: "snow", text: "Cold and limited operations. Ask us about any scheduled scenic flights." },
    ],
  },

  /* ---------- Inclusions ---------- */
  inclusions: [
    { text: "Booking and coordination with the airline / operator", status: "included" },
    { text: "Scenic flight ticket or transfer flight tickets", status: "package" },
    { text: "Airport transfers in Nepalgunj / Kathmandu", status: "package" },
    { text: "Accommodation in Nepalgunj or Simikot", status: "package" },
    { text: "Meals", status: "package" },
    { text: "Chinese visa & Tibet permits (full yatra only)", status: "package" },
    { text: "Tibet ground transport and guide (full yatra only)", status: "package" },
  ],
  exclusions: [
    "Travel to Nepalgunj or Kathmandu unless included",
    "Travel and medical insurance",
    "Extra nights caused by weather delays unless included",
    "Excess baggage charges",
    "Personal expenses and tips",
    "Services not listed in your confirmed package",
  ],

  /* ---------- Before you fly ---------- */
  safety: {
    eyebrow: "Preparation",
    title: "Before You Fly",
    intro: "Exact requirements depend on the airline, operator and package — we confirm them at booking.",
    points: [
      { icon: "passport", title: "Carry ID", text: "Passport or accepted ID as confirmed for your flight and nationality." },
      { icon: "clock", title: "Arrive early", text: "Follow the airline's check-in time; mountain flights often leave early." },
      { icon: "luggage", title: "Pack light", text: "Weight limits are strict on STOL aircraft and helicopters." },
      { icon: "calendar", title: "Keep buffer days", text: "Allow spare days for weather delays, especially for Simikot." },
      { icon: "heart", title: "Health check", text: "Tell us about medical conditions; consult a doctor before the yatra." },
      { icon: "users", title: "Crew instructions", text: "Follow crew and ground staff instructions at all times." },
    ],
  },

  travelerTypes: {
    title: "Who Is This For?",
    intro: "Devotees and travellers seeking Kailash darshan from Nepal.",
    items: [
      { icon: "heart", title: "Pilgrims", text: "Darshan from the air, or the full yatra." },
      { icon: "users", title: "Senior travellers", text: "The scenic flight needs no trekking." },
      { icon: "sun", title: "Families", text: "A shared spiritual journey." },
      { icon: "compass", title: "Indian travellers", text: "Easy road access to Nepalgunj from Lucknow." },
    ],
  },

  trust: karvaahhTrust,

  faqs: [
    {
      question: "Is this a scenic flight over Mount Kailash?",
      answer:
        "Two products exist. The Kailash experience flight from Nepalgunj is a scenic darshan flight that returns without landing in Tibet. The Nepalgunj–Simikot–Hilsa flights are pilgrimage transfers for the overland yatra, not sightseeing flights.",
    },
    {
      question: "Which airlines and operators fly these routes?",
      answer:
        "Shree Airlines launched the Kailash–Mansarovar experience flight from Nepalgunj in 2024. Simrik Air and other helicopter operators fly Simikot–Hilsa in the yatra season, and STOL airlines such as Tara Air serve Simikot. We confirm the operator for your date.",
    },
    {
      question: "How much does the flight cost?",
      answer: "Fares depend on the airline, season, nationality and package. Contact Karvaahh for current pricing.",
    },
    {
      question: "Do I need a passport or Chinese visa?",
      answer:
        "The scenic flight does not land in Tibet, so the Tibet visa process does not apply; required ID is confirmed at booking. The overland yatra via Hilsa needs a passport, Chinese visa and Tibet permits, arranged as part of the package.",
    },
    {
      question: "Is the view of Kailash guaranteed?",
      answer: "No. Views depend entirely on the weather, and cloud can hide the mountain.",
    },
    {
      question: "What happens if my flight is cancelled due to weather?",
      answer:
        "Weather delays and cancellations are common in the Himalaya. Rescheduling and refunds follow the airline's or operator's policy, which we share in writing before you pay. We help rebook the next available slot.",
    },
    {
      question: "How do I book?",
      answer:
        "Send an enquiry with your dates, nationality and number of travellers. We confirm availability, fare and documents before issuing your booking.",
    },
  ],

  cta: {
    title: "Plan Your Kailash Darshan",
    text: "Tell us whether you want the scenic darshan flight or the full yatra, and Karvaahh will confirm what is operating for your dates.",
    image: kailash,
    animated: true,
    primaryLabel: "Send a Booking Enquiry",
    primaryHref: "#book",
    quoteLabel: "Email Us",
    whatsappLabel: "WhatsApp Us",
    planMessage: "Hello Karvaahh, I'd like to plan a Kailash Mansarovar flight.",
    quoteSubject: "Enquiry: Kailash Mansarovar Flights",
  },

  enquiry: {
    title: "Enquire About Kailash Flights",
    intro: "Share your details and we will confirm availability, current fares and documents. Submitting opens WhatsApp with your message.",
    options: {
      passengers: ["1 Traveller", "2 Travellers", "3–5 Travellers", "6–10 Travellers", "Group (10+)"],
      airlines: ["Not sure — advise me", "Kailash experience (scenic) flight", "Pilgrimage transfers to Hilsa", "Full Kailash Mansarovar Yatra"],
      times: ["Flexible", "Spring (Apr–Jun)", "Monsoon (Jul–Aug)", "Autumn (Sep–Nov)"],
    },
  },

  relatedTours: [
    { title: "Kailash Mansarovar Yatra", text: "The complete overland yatra with permits, guides and Tibet arrangements.", href: "/packages/kailash-mansarovar-yatra", image: kailash },
    { title: "Kailash Aerial Darshan", text: "Same-day darshan flight from Nepalgunj, without landing in Tibet.", href: "/activities/helicopter-tours/kailash-aerial-darshan", image: kailash },
    { title: "Kailash Mansarovar Helicopter Tour", text: "A helicopter-assisted yatra via Simikot and Hilsa.", href: "/activities/helicopter-tours/kailash-mansarovar", image: mansarovar },
    { title: "Kailash Mansarovar Spiritual Journey", text: "The significance, rituals and parikrama of Kailash.", href: "/spiritual-journeys/kailash-mansarovar" },
    { title: "Panch Kailash Yatra", text: "The five sacred Kailash peaks of the Himalaya.", href: "/packages/panch-kailash-yatra" },
    { title: "Mountain Scenic Flight", text: "Everest and the Himalaya from Kathmandu in about an hour.", href: "/activities/domestic-flights/mountain-scenic", image: kathmanduValley },
  ],

  /* ---------- Required by the template ---------- */
  whyHelicopter: { title: "Two Ways to Fly", intro: "Scenic darshan or pilgrimage transfer.", items: [] },
  route: {
    title: "Flight Routes",
    intro: "Illustrative outline.",
    note: "Actual routes depend on the operator, weather and approvals.",
    stops: [
      { name: "Kathmandu (KTM)", detail: "Domestic connection", mode: "landing" },
      { name: "Nepalgunj (NPG)", detail: "Gateway", mode: "landing" },
      { name: "Simikot", detail: "STOL airstrip", mode: "landing" },
      { name: "Hilsa", detail: "Helicopter transfer", mode: "landing" },
      { name: "Lake Mansarovar & Mount Kailash", detail: "By road from Hilsa, or viewed from the scenic flight", mode: "restricted" },
    ],
  },
  options: {
    title: "Flight Options",
    intro: "Confirmed with you at booking.",
    note: "Prices depend on the airline, season, nationality and package.",
    items: [
      { name: "Kailash experience flight", basis: "Per seat", price: "Price on Request", points: ["Seasonal scenic flight from Nepalgunj"], idealFor: "Pilgrims & seniors", whatsappMessage: "Hello Karvaahh, please share details of the Kailash experience flight." },
      { name: "Pilgrimage transfers", basis: "Per person", price: "Enquire for details", points: ["Nepalgunj – Simikot – Hilsa"], idealFor: "Yatra travellers", whatsappMessage: "Hello Karvaahh, I need Nepalgunj–Simikot–Hilsa transfers." },
    ],
  },
  gallery: { title: "Gallery", intro: "", items: [{ image: kailash, caption: "Mount Kailash" }] },

  layout: [
    "hero",
    "facts",
    "nav",
    "trust-bar",
    "story",
    "comparison",
    "spotlight:flight-routes",
    "map",
    "spotlight:operators",
    "spotlight:flight-details",
    "spotlight:weather",
    "seasons",
    "safety",
    "spotlight:pricing",
    "inclusions",
    "spotlight:booking-policy",
    "faq",
    "cta",
    "enquiry",
    "related",
  ],
};
