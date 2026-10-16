/* ============================================================
   INTERNATIONAL FLIGHTS — PAGE DATA
   ------------------------------------------------------------
   /activities/flights/international-flights
   A guide to nonstop flights to / from Kathmandu (KTM), global
   connecting hubs, visas and transit, and Karvaahh's quotation
   service. Route research lives in ./international-routes.ts.

   CONTENT RULES (keep when editing):
   - No fares, discounts, schedules or availability unless verified
     and dated. Without a verified fare: "Contact Karvaahh for
     current fares."
   - No universal visa rule or visa fee. Link to official sources.
   - No universal cancellation fee, refund percentage or timeline.
   - Karvaahh's own service charges are pending business approval
     (`confirm: true`) until stated in writing.
   ============================================================ */

import type { HelicopterTour } from "@/components/activities/experience/product-types";
import type { BookingJourneyData, PoliciesData } from "@/components/activities/domestic-flights/everest/types";
import type { GlobalConnectionsData, RouteDirectoryData } from "@/components/activities/flights/international/types";
import { cholatse, everestSunset, kailash, kathmanduValley, langtangHimal } from "../helicopter-tours/images";
import { karvaahhTrust } from "../helicopter-tours/shared";
import { KTM_ROUTES, carriersFor } from "./international-routes";

const VERIFIED = "13 October 2026";
const QUOTE = "Request International Flight Quote";
const QUOTE_MESSAGE = "Hello Karvaahh, I'd like a quote for an international flight. From: ___ To: ___ Dates: ___ Passengers: ___ Nationality: ___";
const NONSTOP_CITIES = new Set(KTM_ROUTES.map((r) => r.city)).size;

export const internationalFlightsPage: HelicopterTour = {
  title: "International Flights",
  slug: "international-flights",
  path: "/activities/flights/international-flights",
  breadcrumbLabel: "International Flights",
  collection: { label: "Flights & Experiences" },
  description:
    "A guide to international flights to and from Kathmandu (KTM): nonstop routes by region, the airlines that fly them, connecting hubs for travellers from Europe, Australia and North America, visa and transit guidance, and flight quotations from Karvaahh.",
  touristType: ["International travellers", "Indian travellers", "Nepali travellers", "Families", "Business travellers", "Pilgrims and trekkers"],

  seo: {
    title: "International Flights to Kathmandu & Worldwide | Karvaahh",
    socialTitle: "International Flights to Kathmandu & Worldwide",
    description:
      "Explore international flights to Kathmandu, global airline connections, direct routes, fares, visa and transit guidance, and flight booking assistance with Karvaahh.",
    keywords: [
      "international flights to Kathmandu",
      "flights to Nepal",
      "Kathmandu direct flights",
      "Tribhuvan International Airport flights",
      "KTM nonstop routes",
      "Delhi to Kathmandu flights",
      "Doha to Kathmandu flights",
      "Dubai to Kathmandu flights",
      "connecting flights to Kathmandu",
      "Nepal transit visa guidance",
      "international flight booking Nepal",
    ],
    ogImage: kathmanduValley,
  },

  duration: "Varies by route",
  elevation: "Kathmandu ≈ 1,338 m",
  startingPoint: "Your departure city",
  endingPoint: "Kathmandu (KTM) or worldwide",
  region: "Nepal, South Asia & worldwide",
  bestSeason: "Year-round; peak demand in spring, autumn and festival periods",
  transportation: "Scheduled international airlines",
  tourTypes: "One-way, return and multi-city tickets",
  groupSize: "Individuals, families and groups",
  landingNote: "Nonstop and connecting itineraries",

  labels: {
    related: "Keep Exploring",
    relatedTitle: "Plan the Rest of Your Journey",
    glance: "Flights at a Glance",
    nav: { faqs: "FAQs", book: "Get a Quote" },
  },
  stickyCta: { title: "International Flights", mobileTitle: "International Flights", desktop: "Request a Quote", mobile: "Get a Quote" },

  /* ---------- Hero ---------- */
  hero: {
    badge: "Karvaahh • International Flight Desk",
    badgeIcon: "plane",
    titleLead: "International Flights",
    titleAccent: "to Kathmandu & Worldwide",
    subtitle: "Nonstop routes, global connections and honest flight advice",
    description:
      "Find out which airlines fly nonstop to Kathmandu, which hubs connect you from anywhere in the world, and what to check for visas and transit — then let Karvaahh quote the right ticket for your dates.",
    image: kathmanduValley,
    imageCaption: "Pictured: the Kathmandu Valley with the Himalaya on the horizon",
    primaryCta: { label: QUOTE, href: "#book" },
    secondaryCta: { label: "Browse Kathmandu Routes", href: "#routes" },
    whatsappCta: "WhatsApp Us",
    flightPath: true,
    floatingStat: { label: "Kathmandu airport code", value: "KTM" },
    strip: [],
    trust: [
      { icon: "plane", label: "Nonstop & connecting" },
      { icon: "route", label: "Global hub guidance" },
      { icon: "passport", label: "Visa & transit checks" },
      { icon: "luggage", label: "Baggage in every quote" },
      { icon: "headset", label: "Kathmandu & Delhi teams" },
    ],
  },

  bookingWidget: {
    destination: "International flight",
    departures: ["India", "Gulf & Middle East", "Southeast Asia", "East Asia", "Europe", "North America", "Australia & New Zealand", "Other"],
    tourTypes: ["One-way", "Return", "Multi-city"],
    travelerOptions: ["1 Passenger", "2 Passengers", "3 Passengers", "4 Passengers", "5 Passengers", "6+ Passengers"],
    defaults: { message: "I'd like a quote for an international flight. From: ___ To: ___" },
    labels: { departure: "Flying from", tourType: "Trip type" },
  },

  quickFacts: [
    { icon: "mapPin", label: "Main gateway", value: "Kathmandu • KTM" },
    { icon: "plane", label: "Nonstop cities", value: `${NONSTOP_CITIES} on our last check` },
    { icon: "route", label: "Europe & beyond", value: "Via Gulf, Istanbul & Asian hubs" },
    { icon: "calendar", label: "Routes checked", value: VERIFIED },
  ],

  /* ---------- Ticket types ---------- */
  spotlights: [
    {
      id: "ticket-types",
      eyebrow: "Know Your Ticket",
      title: "Nonstop, Connecting or Self-Transfer?",
      paragraphs: [
        "Two itineraries with the same cities can carry very different risks. Before you pay, check how the journey is ticketed — it decides who helps you if a flight is late.",
      ],
      cards: [
        { icon: "plane", title: "Nonstop", text: "One flight, no stops. A 'direct' flight keeps one flight number but may stop on the way — check the itinerary." },
        { icon: "route", title: "Connecting, one ticket", text: "Two or more flights on a single booking. Your bags are usually checked through, and the airline rebooks you if a delay breaks the connection." },
        { icon: "shield", title: "Protected connection", text: "Any itinerary where the airline or ticket guarantees onward travel after a missed connection. One-ticket bookings on partner airlines are usually protected — confirm in the fare rules." },
        { icon: "luggage", title: "Self-transfer", text: "Separate flights you connect yourself. You may need to collect bags, clear immigration and check in again, and a missed flight is your responsibility." },
        { icon: "file", title: "Separate tickets", text: "Each ticket is its own contract. The second airline has no duty to help if the first is late — allow long gaps and check transit-visa rules." },
      ],
      note: "Karvaahh states the ticket type and connection protection on every quotation.",
      variant: "cards",
    },

    /* ---------- Fares ---------- */
    {
      id: "fares",
      eyebrow: "International Fares",
      title: "Contact Karvaahh for Current Fares",
      paragraphs: [
        "International fares change constantly with travel dates, demand, booking class, baggage and ticket conditions, so we don't publish prices that may already be out of date. Every Karvaahh quotation lists the airline, fare, taxes and charges, baggage, conditions and the date the fare was checked.",
      ],
      cards: [
        { icon: "calendar", title: "Travel dates", text: "Festival periods, school holidays and peak trekking seasons usually cost more." },
        { icon: "users", title: "Demand & booking class", text: "Seats are sold in fare classes; cheaper classes sell out first." },
        { icon: "luggage", title: "Baggage", text: "Checked and cabin allowances vary by airline, route and fare brand." },
        { icon: "file", title: "Ticket conditions", text: "Refundable and changeable fares cost more than restricted ones." },
        { icon: "landmark", title: "Taxes & charges", text: "Airport taxes and carrier charges are shown separately in your quote." },
        { icon: "compass", title: "Currency", text: "Quotes in NPR, INR, USD or another currency on request." },
      ],
      cta: { label: "Contact Karvaahh for current fares", message: QUOTE_MESSAGE },
      note: `No fares are published on this page. Route information last checked ${VERIFIED}.`,
      variant: "cards",
    },

    /* ---------- Connections & missed flights ---------- */
    {
      id: "connections-guide",
      eyebrow: "Connections & Missed Flights",
      title: "Making Your Connection Work",
      paragraphs: ["Practical points to check before you accept a connecting itinerary — especially on separate tickets."],
      cards: [
        { icon: "clock", title: "Minimum connection time", text: "Each airport and airline sets its own minimum. Check it with the airline; on separate tickets, allow much longer." },
        { icon: "passport", title: "Transit visas", text: "Some countries require a transit visa even if you stay inside the airport. Rules depend on your nationality." },
        { icon: "luggage", title: "Baggage on separate tickets", text: "You usually collect and re-check bags, which means clearing immigration at the hub." },
        { icon: "bed", title: "Overnight layovers", text: "You may need a hotel and permission to enter the transit country. Airport hotels and transit lounges vary." },
        { icon: "shield", title: "Who is responsible", text: "On a protected or single ticket the airline handles a missed connection. On separate tickets you bear the cost of a new ticket." },
        { icon: "file", title: "Changes & refunds", text: "Missed connections, schedule changes and refunds follow your ticket conditions and the regulations that apply to your route." },
      ],
      note: "Karvaahh cannot guarantee visa-free transit for any passenger. Always confirm transit rules for your passport.",
      variant: "cards",
      dark: true,
    },
  ],

  /* ---------- Visa, transit & documents ---------- */
  documents: {
    title: "Visa, Transit & Travel Documents",
    intro:
      "Entry requirements depend on your nationality, passport type, destination, transit country and travel purpose. There is no single rule for every traveller — use this as a checklist and confirm with the official sources below.",
    groups: [
      {
        title: "Passport & ticket",
        items: [
          "Passport valid for at least six months beyond your arrival date, with blank pages.",
          "Passenger names on the ticket exactly as printed in the passport.",
          "A return or onward ticket where the destination or airline requires one.",
          "Passport details (APIS) given to the airline when requested.",
        ],
      },
      {
        title: "Entering Nepal",
        items: [
          "Many nationalities can get a tourist visa on arrival at Kathmandu; some must apply in advance at a Nepali mission.",
          "Indian citizens do not need a visa for Nepal but must carry an accepted identity document.",
          "Check the Department of Immigration for current eligibility, fees and the online arrival form.",
        ],
      },
      {
        title: "Transit & hubs",
        items: [
          "Check transit-visa rules for every country you connect through.",
          "Terminal changes and airport transfers can add significant time.",
          "Separate tickets may require entering the transit country to re-check bags.",
        ],
      },
      {
        title: "Insurance & health",
        items: [
          "Travel insurance covering delays, missed connections and medical care is strongly recommended.",
          "Check cover for trekking altitudes or adventure activities if they are part of your trip.",
          "Follow any health-entry rules of the destination and transit countries.",
        ],
      },
    ],
    eligibility: [
      { title: "Indian citizens", text: "No visa for Nepal. Carry a valid Indian passport or another document accepted by Nepal immigration — and confirm which ID your airline accepts before flying." },
      { title: "Nepali citizens", text: "Destination and transit-country rules apply. Travellers going abroad for work must also meet Department of Foreign Employment requirements." },
      { title: "Other nationalities", text: "Visa on arrival is available to many passport holders at Kathmandu, but not all. Check before you book." },
      { title: "Transit passengers", text: "Airside transit is not visa-free for everyone. Check each hub's rules for your passport." },
    ],
    note: `Karvaahh does not publish visa fees. Always check the official source for your nationality and route. Last reviewed ${VERIFIED}.`,
    links: [
      { label: "Department of Immigration, Nepal", href: "https://www.immigration.gov.np" },
      { label: "Ministry of Foreign Affairs, Nepal", href: "https://mofa.gov.np" },
      { label: "IATA Travel Centre", href: "https://www.iatatravelcentre.com" },
    ],
  },

  /* ---------- FAQ ---------- */
  faqs: [
    { question: "Which airlines fly nonstop to Kathmandu?", answer: "On our last check these included Nepal Airlines, Himalaya Airlines, Buddha Air, Air India, IndiGo, Qatar Airways, flydubai, Air Arabia, Turkish Airlines, Thai Airways, Malaysia Airlines, Batik Air Malaysia, Singapore Airlines, Cathay Pacific, Korean Air, SriLankan Airlines, Biman Bangladesh Airlines, Drukair, Bhutan Airlines and several Chinese carriers. Some routes are seasonal or change often, so we confirm before quoting." },
    { question: "Is there a nonstop flight from Europe to Kathmandu?", answer: "On our last check, Turkish Airlines' Istanbul service was the only nonstop link between Kathmandu and Europe. Most European travellers connect through Istanbul, Doha, Dubai, Abu Dhabi or Delhi." },
    { question: "Are there nonstop flights from the USA, UK or Australia?", answer: "No. Travellers from North America, the UK and Australia connect through a hub such as Doha, Dubai, Istanbul, Delhi, Singapore, Kuala Lumpur, Bangkok or Hong Kong." },
    { question: "How long is the flight from Delhi to Kathmandu?", answer: "Roughly 1 hour 30 to 1 hour 45 minutes, depending on the airline and schedule." },
    { question: "Why don't you show fares?", answer: "International fares change constantly with dates, demand, booking class and baggage. Rather than publish prices that may be wrong, we quote current fares with taxes, baggage and conditions for your exact dates." },
    { question: "Do I need a transit visa?", answer: "It depends on your nationality and the hub. Some countries require a transit visa even if you stay airside. Check the hub country's official rules before booking." },
    { question: "Do Indian citizens need a visa for Nepal?", answer: "No, Indian citizens do not need a visa for Nepal, but must carry an accepted identity document. Confirm which documents your airline accepts before flying." },
    { question: "What is a protected connection?", answer: "A connection where the airline or ticket guarantees onward travel if a delay makes you miss the next flight. One-ticket itineraries are usually protected; separate tickets usually are not." },
    { question: "Can Karvaahh book flights from anywhere in the world?", answer: "We can quote and arrange international flights to Kathmandu and onward worldwide, subject to airline availability. Tell us your origin, destination, dates and nationality." },
    { question: "Who handles refunds if my flight is cancelled?", answer: "Refunds follow the airline's conditions of carriage and your fare rules. We help you request them; Karvaahh's own service charges are stated in writing on your quotation." },
  ],

  cta: {
    title: "Your Flight to Kathmandu Starts Here.",
    text: "Tell us where you're flying from and when. We'll check nonstop and connecting options and send a written quotation with airline, baggage, taxes and ticket conditions.",
    image: kathmanduValley,
    animated: true,
    primaryLabel: QUOTE,
    primaryHref: "#book",
    quoteLabel: "Email for a Quote",
    whatsappLabel: "WhatsApp Us",
    planMessage: QUOTE_MESSAGE,
    quoteSubject: "Quote request: International flight",
  },

  enquiry: {
    title: QUOTE,
    intro: "Share your route, dates and passenger details. We check available airlines and fares and reply with a written quotation — nothing is booked until you confirm.",
    routeFields: true,
    specialRequirements: true,
    options: {
      passengers: ["1 Passenger", "2 Passengers", "3 Passengers", "4 Passengers", "5 Passengers", "6+ Passengers"],
      airlines: ["No preference", "Nonstop only", "Lowest fare", "Specific airline (mention in message)"],
      times: ["Any time", "Morning", "Afternoon", "Evening / overnight"],
      currencies: ["NPR", "INR", "USD", "EUR", "GBP", "AUD", "Other (mention in message)"],
    },
  },

  relatedTours: [
    { title: "Mountain Scenic Flight", text: "See Everest from the air on a one-hour flight from Kathmandu.", href: "/activities/domestic-flights/mountain-scenic", image: everestSunset },
    { title: "Lukla Flights", text: "The gateway flight to the Everest region.", href: "/activities/flights/lukla-scenic-flights", image: cholatse },
    { title: "Kailash Mansarovar Flights", text: "Scenic flights towards the sacred Mount Kailash.", href: "/activities/flights/kailash-mansarovar-scenic-flights", image: kailash },
    { title: "Kathmandu & Bagmati", text: "Heritage squares, stupas and valley views around the capital.", href: "/destinations/bagmati-province", image: kathmanduValley },
    { title: "Nepal & India Tours", text: "Combined journeys planned by Karvaahh.", href: "/packages/nepal-india-combined-tours", image: langtangHimal },
    { title: "Contact Karvaahh", text: "Talk to our Kathmandu and Delhi NCR teams.", href: "/contact" },
  ],

  trust: {
    ...karvaahhTrust,
    intro: "Karvaahh – Live to Travel · Nepal & India travel specialists with teams in Kathmandu and Delhi NCR.",
  },

  /* ---------- Required by the template (not in this layout) ---------- */
  whyHelicopter: { title: "Why Book With Karvaahh", intro: "", items: [] },
  route: {
    title: "Your Journey",
    intro: "Nonstop or via a connecting hub.",
    note: "Routing depends on your origin, dates and airline schedules.",
    stops: [
      { name: "Your departure city", detail: "Origin", mode: "landing" },
      { name: "Connecting hub (if any)", detail: "e.g. Doha, Dubai, Delhi, Istanbul", mode: "optional" },
      { name: "Kathmandu (KTM)", detail: "Tribhuvan International Airport", mode: "landing" },
    ],
  },
  options: { title: "Flight Options", intro: "", note: "", items: [] },
  inclusions: [],
  exclusions: [],
  safety: { title: "Before You Fly", intro: "", points: [] },
  seasons: { title: "When to Fly", intro: "", note: "", items: [] },
  travelerTypes: { title: "Who We Help", intro: "", items: [] },
  gallery: { title: "Gallery", intro: "", items: [] },

  layout: [
    "hero",
    "stats-bar",
    "nav",
    "trust-bar",
    "slot:routes",
    "slot:connections",
    "spotlight:ticket-types",
    "spotlight:fares",
    "documents",
    "spotlight:connections-guide",
    "slot:policies",
    "slot:booking",
    "faq",
    "cta",
    "enquiry",
    "related",
  ],
};

/* ---------- Slot sections ---------- */

export const routeDirectory: RouteDirectoryData = {
  title: "Nonstop Flights To & From Kathmandu",
  intro:
    "Every city below had scheduled nonstop service with Tribhuvan International Airport (KTM) on our last check. Tap an airline to visit its official website, or ask Karvaahh to compare fares for you.",
  verified: VERIFIED,
  routes: KTM_ROUTES,
  notes: [
    "Nonstop routes only. Itineraries via a hub are connecting flights — see Global Connections below.",
    "“Confirm” marks an airline listed for the route in published schedules but not re-verified on our last check. Routes can be seasonal, paused or withdrawn at short notice.",
    "Flight times are approximate scheduled times and vary by direction, aircraft and season. Distances are straight-line (great-circle) estimates between airports.",
    "Frequencies are shown only where a dated source states them. Your quotation confirms the actual schedule for your dates.",
  ],
};

export const globalConnections: GlobalConnectionsData = {
  title: "Reach Kathmandu From Anywhere",
  intro:
    "Most long-haul travellers connect once on the way to Kathmandu. These hubs had nonstop KTM flights on our last check — the carriers listed fly the hub ⇄ Kathmandu sector.",
  hubs: [
    { city: "Doha", iata: "DOH", text: "Qatar Airways' hub, with wide links to Europe, North America and Africa.", carriers: carriersFor("DOH") },
    { city: "Dubai", iata: "DXB", text: "Emirates' hub. The Kathmandu sector is flown by other airlines — check how your ticket is issued.", carriers: carriersFor("DXB") },
    { city: "Abu Dhabi & Sharjah", iata: "AUH · SHJ", text: "Air Arabia's two UAE bases; Etihad sells Abu Dhabi–Kathmandu as a codeshare.", carriers: carriersFor("AUH", "SHJ") },
    { city: "Istanbul", iata: "IST", text: "Turkish Airlines' hub and the only nonstop link to Europe on our last check.", carriers: carriersFor("IST") },
    { city: "Delhi", iata: "DEL", text: "India's main international gateway, with frequent short flights to Kathmandu.", carriers: carriersFor("DEL") },
    { city: "Bangkok", iata: "BKK · DMK", text: "Two airports — confirm which one your connection uses.", carriers: carriersFor("BKK", "DMK") },
    { city: "Kuala Lumpur", iata: "KUL", text: "Popular for Australia, New Zealand and Southeast Asia.", carriers: carriersFor("KUL") },
    { city: "Singapore", iata: "SIN", text: "Singapore Airlines' hub, linking Australia, New Zealand and Asia.", carriers: carriersFor("SIN") },
    { city: "Hong Kong", iata: "HKG", text: "Connections to North America, Japan, Korea and Australia.", carriers: carriersFor("HKG") },
    { city: "Seoul", iata: "ICN", text: "Korean Air's hub for North America and East Asia.", carriers: carriersFor("ICN") },
    { city: "Chinese gateways", iata: "CAN · TFU · KMG · PVG", text: "Guangzhou, Chengdu, Kunming, Shanghai and more — check China transit rules for your passport.", carriers: carriersFor("CAN", "TFU", "KMG", "PVG") },
    { city: "Colombo & Dhaka", iata: "CMB · DAC", text: "Regional links across South Asia.", carriers: carriersFor("CMB", "DAC") },
  ],
  origins: [
    { region: "UK & Europe", hubs: ["Istanbul", "Doha", "Dubai", "Abu Dhabi", "Delhi"], text: "One connection is usually enough. Gulf and Istanbul hubs offer the most daily options." },
    { region: "North America", hubs: ["Doha", "Dubai", "Istanbul", "Delhi", "Seoul", "Hong Kong"], text: "Usually one or two connections, eastbound via the Gulf or Istanbul, or westbound via East Asia." },
    { region: "Australia & New Zealand", hubs: ["Singapore", "Kuala Lumpur", "Bangkok", "Hong Kong"], text: "Southeast Asian hubs give the shortest routings to Kathmandu." },
    { region: "Africa", hubs: ["Doha", "Dubai", "Istanbul", "Abu Dhabi"], text: "Gulf and Istanbul hubs connect most African capitals to Kathmandu." },
    { region: "East Asia", hubs: ["Seoul", "Hong Kong", "Guangzhou", "Shanghai", "Chengdu"], text: "Several nonstop options from Korea, Hong Kong and mainland China." },
    { region: "India", hubs: ["Delhi", "Mumbai", "Bengaluru", "Kolkata", "Varanasi"], text: "Nonstop from these cities; other Indian cities usually connect via Delhi." },
  ],
  note:
    "Hubs are examples, not guaranteed routings. Availability depends on your departure city, travel dates, airline schedules and connection times — your quotation confirms the actual itinerary.",
};

export const policies: PoliciesData = {
  title: "Cancellations, Changes & Refunds",
  intro: "Who applies each rule matters. Airline rules come from your fare conditions and the airline's conditions of carriage; Karvaahh's service terms are separate and stated in writing.",
  items: [
    { icon: "file", owner: "passenger", title: "You cancel", text: "What you get back depends on your fare rules. Refundable fares return the fare minus any cancellation fee; on non-refundable fares, some taxes may still be refundable depending on the airline." },
    { icon: "plane", owner: "airline", title: "The airline cancels", text: "The airline offers rebooking or a refund under its conditions of carriage and any passenger-rights regulations that apply to the route." },
    { icon: "clock", owner: "airline", title: "Schedule changes", text: "If an airline significantly changes your flight times, you may be entitled to an alternative flight or a refund under the airline's policy." },
    { icon: "calendar", owner: "passenger", title: "Date changes & rescheduling", text: "Changes are allowed only as the fare rules permit, usually with a change fee plus any fare difference." },
    { icon: "shield", owner: "airline", title: "No-shows & missed flights", text: "Not boarding can forfeit the fare and, on many airlines, cancel the remaining flights on the same ticket. Tell the airline or us before departure if you cannot travel." },
    {
      icon: "headset",
      owner: "karvaahh",
      title: "Karvaahh service charges",
      text: "Karvaahh's booking, amendment and cancellation service charges are separate from airline charges.",
      points: ["Stated in writing on every quotation", "Airline refunds are passed on once the airline releases them"],
      confirm: true,
    },
  ],
  note: "Karvaahh does not set airline cancellation fees, refund amounts or processing times. Read your fare conditions before paying; we explain them in your quotation.",
};

export const bookingJourney: BookingJourneyData = {
  title: "How to Book Your International Flight",
  intro: "Five simple steps from enquiry to departure.",
  steps: [
    { title: "Share your trip", text: "Send your origin, destination, travel dates, passenger count and nationality." },
    { title: "We check routes & fares", text: "Karvaahh compares available nonstop and connecting options for your dates." },
    { title: "Receive your quotation", text: "With airline, baggage allowance, taxes and ticket conditions in writing." },
    { title: "Confirm & pay", text: "Confirm the itinerary and pay under the agreed terms. Your ticket is issued after payment." },
    { title: "Prepare to fly", text: "Review passport, visa, transit and check-in requirements before departure." },
  ],
  note: "An enquiry is not a reservation. Fares and seats are confirmed only when the ticket is issued.",
  cta: { label: QUOTE, href: "#book" },
};
