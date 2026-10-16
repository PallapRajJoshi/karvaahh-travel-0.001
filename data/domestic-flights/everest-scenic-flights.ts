/* ============================================================
   EVEREST SCENIC FLIGHT (FIXED-WING) — PAGE DATA
   ------------------------------------------------------------
   /activities/domestic-flights/everest-scenic-flights
   A sightseeing flight from Kathmandu (KTM) along the eastern
   Himalaya and back. It does NOT land at Everest, Everest Base
   Camp or Lukla.

   RESEARCH — official sources, last checked 13 October 2026:
   - Buddha Air product page ......... BA_PRODUCT / BA_ROUTE
   - Buddha Air fare rules ........... BA_RULES
   - Yeti Airlines product page ...... YETI_PRODUCT
   - Yeti Airlines fare rules ........ YETI_RULES
   - Shree Airlines article / fares .. SHREE_ARTICLE / SHREE_FARES

   CONTENT RULES (keep when editing):
   - No fare amounts: none of the airlines publishes a current
     Everest-flight fare on a public page. Every price cell says
     "Contact Karvaahh for the latest price" until a fare is
     confirmed from the operator's booking system.
   - NPR vs USD fare categories come from the airlines' published
     fare rules (Nepali & Indian nationals: NPR; others: USD).
   - No guaranteed visibility, route, aircraft type or timing.
   - Airline rules are attributed to the airline; Karvaahh's own
     service terms are marked `confirm` until the business
     approves them.
   - Peak heights are as commonly published; sources vary slightly.
   ============================================================ */

import type { HelicopterTour } from "@/components/activities/experience/product-types";
import type { EverestFlightSections, SourceLink } from "@/components/activities/domestic-flights/everest/types";
import {
  cholatse,
  everestDawn,
  everestSunset,
  gokyo,
  kathmanduValley,
  khumbuSunrise,
  langtangHimal,
  makaluBarun,
} from "../helicopter-tours/images";
import { karvaahhTrust } from "../helicopter-tours/shared";

/* ---------- Official sources ---------- */

const BA_PRODUCT: SourceLink = { label: "Buddha Air – Everest Experience", href: "https://www.buddhaair.com/mountain-flights/mount-everest-sightseeing-flight" };
const BA_ROUTE: SourceLink = { label: "Buddha Air – Kathmandu to Mount Everest", href: "https://www.buddhaair.com/flight-routes/kathmandu-to-mount-everest" };
const BA_RULES: SourceLink = { label: "Buddha Air – Fare rules", href: "https://www.buddhaair.com/detail/flight-fare-rules-and-regulations" };
const YETI_PRODUCT: SourceLink = { label: "Yeti Airlines – Mountain Flight", href: "https://yetiairlines.com/destination/mountain-flight" };
const YETI_RULES: SourceLink = { label: "Yeti Airlines – Fare & cancellation", href: "https://yetiairlines.com/content/fare-categories-reschedule-and-cancellation-policies" };
const SHREE_ARTICLE: SourceLink = { label: "Shree Airlines – Everest flight", href: "https://www.shreeairlines.com/blog/everest-mountain-flight-in-nepal-experience-everest-mountain-flights" };
const SHREE_FARES: SourceLink = { label: "Shree Airlines – Fare policy", href: "https://www.shreeairlines.com/farepolicy" };

const VERIFIED = "13 October 2026";
const PRICE_ON_REQUEST = "Contact Karvaahh for the latest price";

export const everestScenicFlightPage: HelicopterTour = {
  title: "Everest Scenic Flight",
  slug: "everest-scenic-flights",
  path: "/activities/domestic-flights/everest-scenic-flights",
  breadcrumbLabel: "Everest Scenic Flight",
  collection: { label: "Mountain Flights", href: "/activities/domestic-flights/mountain-scenic" },
  description:
    "An early-morning sightseeing flight from Kathmandu's Tribhuvan International Airport along the eastern Himalaya for aerial views of Mount Everest and neighbouring peaks, returning to Kathmandu in about 50–60 minutes. It does not land at Everest or Everest Base Camp.",
  touristType: ["First-time Nepal visitors", "Families", "Senior travellers", "Photographers", "Indian travellers", "International travellers"],

  seo: {
    title: "Everest Scenic Flight from Kathmandu | Karvaahh",
    socialTitle: "Everest Scenic Flight from Kathmandu – See Everest from the Sky",
    description:
      "Experience a scenic Everest mountain flight from Kathmandu with Karvaahh. Explore Himalayan views, flight details, fares, weather guidance and booking options.",
    keywords: [
      "Everest scenic flight from Kathmandu",
      "Everest mountain flight Nepal",
      "Kathmandu Everest flight price",
      "Everest scenic flight booking",
      "Mount Everest sightseeing flight",
      "Everest mountain flight for Indian tourists",
      "Buddha Air Everest Experience",
      "Yeti Airlines mountain flight",
    ],
    ogImage: everestSunset,
  },

  duration: "Approx. 50–60 minutes",
  elevation: "Aerial views only",
  startingPoint: "Tribhuvan International Airport, Kathmandu (KTM)",
  endingPoint: "Tribhuvan International Airport, Kathmandu (KTM)",
  region: "Eastern Himalaya, Nepal",
  bestSeason: "Autumn to spring mornings, weather permitting",
  transportation: "Fixed-wing aircraft (scheduled sightseeing flight)",
  tourTypes: "Seat on a dedicated sightseeing flight",
  groupSize: "Subject to airline seating",
  landingNote: "Aerial sightseeing only — no landing at Everest or Everest Base Camp",

  labels: {
    why: "Why Fly",
    related: "Keep Exploring",
    relatedTitle: "Related Nepal Experiences",
    glance: "Flight at a Glance",
    nav: { overview: "Overview", itinerary: "The Morning", route: "Route", safety: "Before You Fly", book: "Enquire" },
  },
  stickyCta: { title: "Everest Scenic Flight", mobileTitle: "Everest Flight", desktop: "Book Your Everest Flight", mobile: "Enquire Now" },

  /* ---------- A. Hero ---------- */
  hero: {
    badge: "Karvaahh • Himalayan Sightseeing Flight",
    badgeIcon: "plane",
    titleLead: "Everest Scenic Flight",
    titleAccent: "from Kathmandu",
    subtitle: "Experience Mount Everest and the Himalayan giants from the sky.",
    description:
      "An early-morning sightseeing flight from Kathmandu that cruises alongside the eastern Himalaya for views of Everest, Lhotse, Makalu and their neighbours, then returns to Kathmandu. You see Everest from the aircraft window; the flight does not land at Everest or Everest Base Camp.",
    image: everestSunset,
    imageCaption: "Pictured: Mount Everest at sunset (ground-level photo)",
    primaryCta: { label: "Book Your Everest Flight" },
    secondaryCta: { label: "Explore the Flight Details", href: "#details" },
    whatsappCta: "Enquire on WhatsApp",
    flightPath: true,
    floatingStat: { label: "Mount Everest", value: "8,848.86 m" },
    strip: [
      { label: "Departs", value: "Kathmandu · KTM" },
      { label: "Flight time", value: "≈ 50–60 min" },
      { label: "Time of day", value: "Early morning" },
      { label: "Experience", value: "Aerial sightseeing" },
    ],
    trust: [
      { icon: "mapPin", label: "Tribhuvan International Airport" },
      { icon: "clock", label: "Approx. 50–60 Minutes" },
      { icon: "sun", label: "Early-Morning Departures" },
      { icon: "plane", label: "Fixed-Wing Sightseeing Flight" },
    ],
  },

  bookingWidget: {
    destination: "Everest & the eastern Himalaya",
    departures: ["Kathmandu (KTM)"],
    tourTypes: ["Everest scenic-flight seat", "No airline preference", "Buddha Air", "Yeti Airlines", "Shree Airlines"],
    travelerOptions: ["1 Passenger", "2 Passengers", "3 Passengers", "4 Passengers", "5 Passengers", "6+ Passengers"],
    defaults: { message: "I'd like a quotation for the Everest Scenic Flight from Kathmandu. Passenger nationality: " },
    labels: { departure: "Departure", tourType: "Flight / airline" },
    duration: "≈ 50–60 min",
  },

  quickFacts: [
    { icon: "plane", label: "Departure", value: "Kathmandu · KTM" },
    { icon: "clock", label: "Flight Time", value: "Approx. 50–60 Minutes" },
    { icon: "sun", label: "Departs", value: "Early Morning" },
    { icon: "mountainSnow", label: "Experience", value: "Aerial Sightseeing · No Landing" },
  ],

  /* ---------- B. Experience overview ---------- */
  editorial: {
    eyebrow: "The Experience",
    title: "The Himalaya in a Morning, Without the Trek",
    paragraphs: [
      "Seeing Everest from the ground means [[days of trekking]] and nights at altitude. The scenic flight takes a different path: you board in Kathmandu shortly after sunrise and fly east alongside the high Himalaya, with the peaks off the side of the aircraft.",
      "The airlines describe the route as starting near Langtang Lirung, the closest big peak to Kathmandu, passing peaks such as Gauri Shankar and Cho Oyu, reaching the Everest group and turning near [[Chamlang]], then heading back to Kathmandu. In about [[an hour]] you are on the ground again, usually in time for breakfast.",
      "That makes it a good fit for short Nepal itineraries, families, senior travellers, photographers and anyone who would rather not trek. What you see on the day depends on cloud and visibility, so it pays to keep a spare morning in your plans.",
    ],
    image: khumbuSunrise,
    inset: cholatse,
    fact: { label: "Flight time", value: "≈ 50–60 min", text: "Kathmandu → eastern Himalaya → Kathmandu" },
  },

  whyHelicopter: {
    title: "Why Travellers Choose the Everest Flight",
    intro: "An unforgettable Himalayan view that fits into a single morning.",
    items: [
      { icon: "mountainSnow", title: "Panoramic Himalayan views", text: "A long sweep of the eastern Himalaya, from the Langtang range towards Everest and Makalu, weather permitting." },
      { icon: "flag", title: "The world's highest peak", text: "An aerial perspective of Everest and the giants around it — Lhotse, Nuptse and Makalu." },
      { icon: "clock", title: "Made for limited time", text: "About an hour in the air, early in the morning, so the rest of your day in Kathmandu stays free." },
      { icon: "users", title: "For families & seniors", text: "No trekking and no nights at altitude — a Himalayan highlight that most travellers can share." },
      { icon: "camera", title: "For photographers", text: "Clear morning light over snow and glaciers. Buddha Air and Yeti Airlines say individual passengers get a window seat." },
      { icon: "footprints", title: "For non-trekkers", text: "See the Everest region from the air if a two-week trek is not for you." },
    ],
  },

  /* ---------- Difference between flight, trek and heli landing ---------- */
  spotlights: [
    {
      id: "compare",
      eyebrow: "Know the Difference",
      title: "Scenic Flight, Base Camp Trek or Helicopter Landing?",
      paragraphs: [
        "Three very different ways to experience Everest. The scenic flight is the shortest and the only one that involves no landing in the mountains.",
      ],
      cards: [
        {
          icon: "plane",
          title: "Everest scenic flight",
          text: "Fixed-wing sightseeing flight from Kathmandu and back in about an hour. Views from the window; no landing, no trekking, no time at altitude.",
        },
        {
          icon: "footprints",
          title: "Everest Base Camp trek",
          text: "A multi-day trek, usually starting with a flight to Lukla, that reaches base camp on foot. It needs fitness, time and acclimatisation.",
        },
        {
          icon: "helicopter",
          title: "Everest helicopter tour",
          text: "A helicopter flight into the Khumbu that can include landings, such as near base camp or Kala Patthar, subject to weather and permissions.",
        },
      ],
      cta: { label: "See the Everest Helicopter Tour", href: "/activities/helicopter-tours/everest-base-camp" },
      variant: "cards",
    },
    {
      id: "weather",
      eyebrow: "Weather & Operations",
      title: "Clear Views Can Never Be Guaranteed",
      paragraphs: [
        "Mountain weather changes quickly. Flights are scheduled early in the morning, when skies are often clearer, but cloud, haze, fog at Kathmandu, wind or airport restrictions can delay, reschedule or cancel a departure. Even on a flight that operates, some peaks may be hidden.",
        "The airline and its flight crew decide whether and when the flight operates and which route it takes. We recommend booking the flight early in your stay in Kathmandu, so there is a spare morning to rebook if needed.",
      ],
      cards: [
        { icon: "sun", title: "Early mornings", text: "Operators schedule the flight in the early morning, when visibility is often better before clouds build." },
        { icon: "cloud", title: "Cloud & haze", text: "Cloud can hide the peaks in any season; haze tends to increase in late spring." },
        { icon: "rain", title: "Monsoon", text: "The monsoon (roughly June to August, sometimes into September) brings frequent cloud and rain, so views are less reliable and disruption more likely." },
        { icon: "wind", title: "Delays & cancellations", text: "The airline may delay, reschedule or cancel for weather, operational or safety reasons." },
      ],
      variant: "cards",
      dark: true,
    },
  ],

  /* ---------- The morning ---------- */
  flightSteps: {
    title: "Your Everest Flight Morning",
    intro: "A typical sequence. Exact times are set by the operator and printed on your ticket.",
    steps: [
      { title: "Check the flight status", text: "Reconfirm your flight before leaving your hotel; weather can move the departure.", note: "We share any updates we receive from the airline." },
      { title: "Arrive at the domestic terminal", text: "Report at Tribhuvan International Airport's domestic terminal by the time on your ticket." },
      { title: "Check-in & security", text: "Show your ID, collect your boarding pass and pass airport security." },
      { title: "Take off", text: "The aircraft climbs out of the Kathmandu Valley towards the Himalaya." },
      { title: "Along the range", text: "Peaks from the Langtang area towards Gauri Shankar and Cho Oyu, weather permitting." },
      { title: "The Everest group", text: "Everest, Lhotse and Nuptse, with Makalu and Chamlang further east, as visibility allows." },
      { title: "Turn & return", text: "The aircraft turns back, giving passengers on the other side their view." },
      { title: "Land in Kathmandu", text: "Back at Tribhuvan International Airport after about 50–60 minutes in the air." },
    ],
  },

  /* ---------- C. Mountain highlights ---------- */
  peaks: {
    title: "Mountain Highlights Along the Route",
    intro:
      "Peaks named by the operators on this route. On a clear morning you may also pick out Shishapangma in Tibet, Pumori, Gyachung Kang, Melungtse and Numbur.",
    note: "Which peaks you see depends on weather, visibility, your side of the aircraft and the route flown on the day; no peak is guaranteed. Published heights vary slightly between sources.",
    items: [
      { name: "Mount Everest / Sagarmatha", metres: 8848.86, decimals: 2, region: "Khumbu · Mahalangur Himal", text: "The highest mountain on Earth, on the Nepal–China border. Its summit pyramid is the highlight of the flight on a clear day.", image: everestSunset },
      { name: "Lhotse", metres: 8516, region: "Khumbu", text: "The world's fourth-highest peak, joined to Everest by the South Col." },
      { name: "Makalu", metres: 8485, region: "Makalu-Barun", text: "The fifth-highest mountain, a distinctive four-sided pyramid east of Everest.", image: { ...makaluBarun, label: "Makalu-Barun" } },
      { name: "Cho Oyu", metres: 8188, region: "Khumbu · Gokyo", text: "The sixth-highest peak, rising above the Gokyo valley west of Everest.", image: { ...gokyo, alt: "Gokyo Lake and the Ngozumpa Glacier below Cho Oyu", label: "Gokyo, below Cho Oyu" } },
      { name: "Nuptse", metres: 7861, region: "Khumbu", text: "The long ridge that rises directly in front of Everest's south-west face.", image: { ...everestDawn, alt: "Nuptse and Everest above the Khumbu Glacier at dawn", label: "Nuptse" } },
      { name: "Chamlang", metres: 7319, region: "Makalu-Barun", text: "A broad massif south of the Everest group, named by the airlines as the turning point of the route." },
      { name: "Langtang Lirung", metres: 7234, region: "Langtang", text: "The highest peak of the Langtang range and usually the first big mountain of the flight.", image: langtangHimal },
      { name: "Gauri Shankar", metres: 7134, region: "Rolwaling", text: "A twin-summited sacred mountain on the way east." },
      { name: "Ama Dablam", metres: 6812, region: "Khumbu", text: "A celebrated peak of the Khumbu, recognisable by its steep ridges and hanging glacier." },
    ],
  },

  /* ---------- Map (approximate, illustrative) ---------- */
  places: [
    { id: "kathmandu", name: "Kathmandu (KTM)", lat: 27.697, lon: 85.359, elevation: "Departure", label: "bottom", text: "Departures leave from the domestic terminal of Tribhuvan International Airport.", image: kathmanduValley },
    { id: "langtang", name: "Langtang Lirung", lat: 28.256, lon: 85.519, elevation: "7,234 m", label: "top", text: "The airlines describe the route as starting near Langtang Lirung, the closest big peak to Kathmandu.", image: langtangHimal },
    { id: "gauri-shankar", name: "Gauri Shankar", lat: 27.953, lon: 86.336, elevation: "7,134 m", label: "top", text: "The twin-summited sacred peak of the Rolwaling Himal." },
    { id: "everest", name: "Everest", lat: 27.988, lon: 86.925, elevation: "8,848.86 m", label: "top", text: "Everest, Lhotse and Nuptse — the highlight of the flight, weather permitting.", image: everestDawn },
    { id: "chamlang", name: "Chamlang", lat: 27.775, lon: 86.98, elevation: "7,319 m", label: "right", text: "Named by Buddha Air and Yeti Airlines as the point where the aircraft turns back." },
    { id: "makalu", name: "Makalu", lat: 27.889, lon: 87.088, elevation: "8,485 m", label: "right", text: "The fifth-highest mountain, east of Everest.", image: makaluBarun },
  ],
  map: {
    title: "Follow the Route Toward Everest",
    intro: "Kathmandu → Langtang Lirung → Gauri Shankar → Everest → Chamlang → Kathmandu, as the airlines describe it. Tap a marker for each highlight.",
    note: "Illustrative direction only, not an aviation route. The actual track is set by the operator and air traffic control and varies with weather and operations.",
    bounds: { west: 85.05, east: 87.45, south: 27.4, north: 28.45 },
    route: ["kathmandu", "langtang", "gauri-shankar", "everest", "chamlang", "kathmandu"],
    routes: [
      { id: "scenic", label: "Scenic flight direction", style: "air", places: ["kathmandu", "langtang", "gauri-shankar", "everest", "chamlang", "kathmandu"] },
    ],
    selected: "everest",
    aircraft: true,
  },

  /* ---------- G. Seasons ---------- */
  seasons: {
    title: "Weather and the Best Time to Fly",
    intro: "Buddha Air recommends September to April. Early mornings are generally preferred in every season.",
    note: "Seasonal patterns are general guidance only. Clear mountain views cannot be guaranteed in any month, and the operator may delay, reschedule or cancel a flight for weather, operational or safety reasons.",
    items: [
      { name: "Autumn", months: "September – November", rating: "Often the clearest", icon: "leaf", text: "After the monsoon the air is often crisp and clear, which makes this the most popular season. Early-autumn cloud can linger." },
      { name: "Winter", months: "December – February", rating: "Often clear, cold", icon: "snow", text: "Many clear mornings and snow-covered peaks. Morning fog in Kathmandu can delay first departures." },
      { name: "Spring", months: "March – May", rating: "Good, hazier later", icon: "sun", text: "Often good mornings early in the season. Haze and cloud tend to build as the monsoon approaches." },
      { name: "Monsoon", months: "June – August", rating: "Least reliable", icon: "rain", text: "Frequent cloud and rain, so views are less reliable and delays or cancellations are more likely." },
    ],
  },

  /* ---------- I. Inclusions ---------- */
  inclusions: [
    { text: "Seat on the confirmed Everest sightseeing flight, with the operator named in your quotation", status: "included" },
    { text: "Booking assistance and flight reconfirmation support from Karvaahh", status: "included" },
    { text: "Taxes and airport charges, when your quotation lists them as included", status: "package" },
    { text: "Operator extras such as a peaks map or flight certificate (Buddha Air lists both)", status: "package" },
    { text: "Hotel–airport transfers, if added to your quotation", status: "package" },
  ],
  exclusions: [
    "Hotel accommodation",
    "Airport transfers, unless stated in your quotation",
    "Meals and personal expenses",
    "Travel insurance",
    "Extra nights, transport or rebooking costs caused by weather or operational disruption",
    "Airline cancellation charges and any Karvaahh service fee, where applicable",
  ],

  /* ---------- H. Safety & passenger guidance ---------- */
  safety: {
    eyebrow: "Passenger Guidance",
    title: "Before You Fly",
    intro:
      "Scenic flights operate under the operating airline's procedures and Nepal's civil aviation rules. A few things make the morning smooth. Flying always carries some risk, and decisions on safety rest with the airline and its crew.",
    points: [
      { icon: "clock", title: "Report on time", text: "Buddha Air asks passengers to arrive at least 1 hour before flight time, and its check-in closes 15 minutes before departure. Other airlines print their reporting time on the ticket." },
      { icon: "passport", title: "Carry valid ID", text: "Under Buddha Air's rules: Nepali citizens a citizenship certificate, national ID or passport; Indian citizens a voter ID or passport; other nationals a passport." },
      { icon: "users", title: "Follow the crew", text: "Follow the cabin crew's instructions at all times, including seat-belt and photography guidance." },
      { icon: "route", title: "Crew decisions are final", text: "Timing, routing and whether the flight operates are decided by the airline and flight crew." },
      { icon: "cloud", title: "Expect weather changes", text: "Views are never guaranteed, and departures can move at short notice." },
      { icon: "heart", title: "Special assistance", text: "Tell us about mobility needs, pregnancy, infants or medical conditions so we can check with the airline before booking." },
      { icon: "luggage", title: "Travel light", text: "You return to Kathmandu, so leave luggage at your hotel. Airline baggage and security rules apply." },
      { icon: "calendar", title: "Reconfirm the night before", text: "Reconfirm your reporting time with us or the airline the evening before, and again in the morning." },
    ],
  },

  travelerTypes: {
    title: "Who Is This Flight For?",
    intro: "Anyone who wants to see Everest without a multi-day trek.",
    items: [
      { icon: "compass", title: "First-time visitors", text: "A memorable introduction to the Himalaya." },
      { icon: "users", title: "Families", text: "A shared experience with no trekking involved." },
      { icon: "heart", title: "Senior travellers", text: "Everest views without altitude or long walks." },
      { icon: "camera", title: "Photographers", text: "Aerial angles in early-morning light." },
      { icon: "clock", title: "Short itineraries", text: "Back in Kathmandu by mid-morning." },
      { icon: "shield", title: "Travellers unable to trek", text: "The Everest region without the physical demands." },
    ],
  },

  trust: {
    ...karvaahhTrust,
    intro: "Karvaahh Tours & Travels coordinates your flight with the operator, checks the latest fare for your nationality and keeps you updated on the morning of travel.",
  },

  /* ---------- L. FAQs ---------- */
  faqs: [
    {
      question: "Where does the Everest scenic flight depart from?",
      answer: "From the domestic terminal of Tribhuvan International Airport (KTM) in Kathmandu. The flight returns to the same airport.",
    },
    {
      question: "How long does the flight usually last?",
      answer: "About 50–60 minutes in the air: Buddha Air says 50 minutes up to an hour, Yeti Airlines about an hour and Shree Airlines 50 minutes. Allow extra time for reporting, check-in and any weather delay.",
    },
    {
      question: "Can I see Mount Everest from the aircraft?",
      answer: "On a clear morning, yes. Everest is seen from a distance through the window as the aircraft flies alongside the range. Cloud or haze can hide it, so a view is never guaranteed.",
    },
    {
      question: "Which airlines currently offer Everest mountain flights?",
      answer: "Buddha Air (Everest Experience) and Yeti Airlines (Mountain Flight) list the flight on their official websites, and Shree Airlines also describes an Everest mountain flight. We confirm which operator is flying on your date when we quote.",
    },
    {
      question: "What is the best time of day to fly?",
      answer: "The flights are scheduled in the early morning; Buddha Air lists departures from about 6:15–6:30 AM. Mornings often have clearer skies before cloud builds. Your exact time is on your ticket.",
    },
    {
      question: "Which season is best for mountain visibility?",
      answer: "Autumn (September–November) and winter are often the clearest, and spring can also be good; Buddha Air recommends September to April. The monsoon (June–August) brings the most cloud. No month guarantees clear views.",
    },
    {
      question: "Are Nepalese and foreign passenger fares different?",
      answer: "Yes. Under Buddha Air, Yeti Airlines and Shree Airlines fare rules, Nepali and Indian nationals pay the NPR fare and other nationalities pay the USD fare. Overseas Citizens of India (OCI) cardholders pay the USD fare on Buddha Air and Shree Airlines. Contact us for the current price for your nationality.",
    },
    {
      question: "What happens if the weather is cloudy?",
      answer: "The airline may delay the flight, wait for a weather window, reschedule or cancel. If the flight operates, some peaks may still be hidden by cloud. The airline decides whether to fly.",
    },
    {
      question: "What happens if the flight is cancelled?",
      answer: "If the airline cancels, Buddha Air and Yeti Airlines say the ticket is fully refundable in all fare categories; you can also ask about moving to another date. Hotel and transport costs caused by the cancellation are not covered.",
    },
    {
      question: "Is the scenic flight suitable for children and senior travellers?",
      answer: "Generally yes, as there is no trekking or time at altitude. Note that child discounts do not apply to Buddha Air or Yeti Airlines Everest flights. Travellers with medical conditions should check with their doctor; tell us about any assistance needed.",
    },
    {
      question: "Does the flight land near Everest Base Camp?",
      answer: "No. It is a sightseeing flight that views Everest from the air and returns to Kathmandu. To land in the Everest region, consider a helicopter tour or a Lukla flight and trek.",
    },
    {
      question: "How early should I book?",
      answer: "Flights run daily, but in busy autumn and spring months it helps to book a few days ahead. Book for early in your Kathmandu stay so a spare morning is available if weather intervenes.",
    },
    {
      question: "What identification should I carry?",
      answer: "Under Buddha Air's rules, Nepali citizens can show a citizenship certificate, national ID or passport; Indian citizens a voter ID or passport; all other nationals a passport. Carry the same document you booked with.",
    },
  ],

  /* ---------- CTA ---------- */
  cta: {
    title: "Your Window to Everest Is Waiting.",
    text: "Tell us your date, passenger count and nationality. We'll check the operator's current fare and send a written quotation before you commit.",
    image: everestSunset,
    animated: true,
    primaryLabel: "Book Your Everest Flight",
    primaryHref: "#book",
    quoteLabel: "Request a Quotation",
    whatsappLabel: "WhatsApp Us",
    planMessage: "Hello Karvaahh, I'd like a quotation for the Everest Scenic Flight from Kathmandu.",
    quoteSubject: "Quotation request: Everest Scenic Flight",
  },

  /* ---------- K. Enquiry form ---------- */
  enquiry: {
    title: "Request Your Everest Flight Quotation",
    intro: "Share your preferred date, passengers and nationality. We check the operator's availability and current fare, then send a quotation with currency, taxes, inclusions and cancellation terms.",
    options: {
      passengers: ["1 Passenger", "2 Passengers", "3 Passengers", "4 Passengers", "5 Passengers", "6+ Passengers"],
      airlines: ["No preference", "Buddha Air", "Yeti Airlines", "Shree Airlines"],
      times: ["Earliest available", "Early morning", "Flexible"],
      categories: [
        "Nepalese citizen",
        "Indian citizen",
        "SAARC national (other than India)",
        "Other international (UK, Europe, USA, Australia, etc.)",
        "OCI cardholder",
        "Foreign resident of Nepal",
        "Mixed group",
      ],
      currencies: ["INR", "NPR", "USD", "GBP", "EUR", "AUD", "Other (mention in message)"],
    },
    specialRequirements: true,
    requireEmail: true,
  },

  relatedTours: [
    { title: "Everest Helicopter Tour", text: "Fly into the Khumbu with possible landings, weather permitting.", href: "/activities/helicopter-tours/everest-base-camp", image: everestDawn },
    { title: "Everest Base Camp Trek", text: "Reach base camp on foot through Sherpa villages.", href: "/adventure/everest-base-camp-trek", image: cholatse },
    { title: "Helicopter Scenic Flight", text: "A private Himalayan flight by helicopter.", href: "/activities/helicopter-tours/mountain-scenic-flight", image: khumbuSunrise },
    { title: "Everest Region & Koshi", text: "The Khumbu, Everest and eastern Nepal's mountains.", href: "/destinations/koshi-province", image: makaluBarun },
    { title: "Kathmandu & Bagmati", text: "Heritage squares, stupas and valley views around the capital.", href: "/destinations/bagmati-province", image: kathmanduValley },
    { title: "Langtang Valley Trek", text: "A Himalayan trek close to Kathmandu.", href: "/adventure/langtang-valley-trek", image: langtangHimal },
  ],

  /* ---------- Required by the template (route also feeds structured data) ---------- */
  gallery: { title: "", intro: "", items: [] },
  route: {
    title: "The Flight Route",
    intro: "An approximate scenic direction.",
    note: "Actual route varies with aviation, weather and operational conditions.",
    stops: [
      { name: "Tribhuvan International Airport, Kathmandu", detail: "Departure", mode: "landing" },
      { name: "Langtang Lirung", detail: "Aerial views", mode: "aerial" },
      { name: "Mount Everest", detail: "Aerial views", mode: "aerial" },
      { name: "Chamlang", detail: "Aerial views", mode: "aerial" },
      { name: "Tribhuvan International Airport, Kathmandu", detail: "Return", mode: "landing" },
    ],
  },
  options: { title: "", intro: "", note: "", items: [] },

  layout: [
    "hero",
    "stats-bar",
    "nav",
    "story",
    "spotlight:compare",
    "why",
    "peaks",
    "map",
    "flight-steps",
    "slot:details",
    "slot:operators",
    "slot:fares",
    "seasons",
    "spotlight:weather",
    "inclusions",
    "slot:cancellation",
    "safety",
    "slot:booking",
    "faq",
    "cta",
    "enquiry",
    "related",
  ],
};

/* ============================================================
   Page-specific sections (rendered through ExperiencePage slots)
   ============================================================ */

export const everestFlightSections: EverestFlightSections = {
  /* ---------- D. Flight details ---------- */
  flightDetails: {
    title: "Flight Information",
    intro: "What the operators publish about the flight. Your ticket shows the exact reporting and departure time for your date.",
    timing: {
      reporting: {
        value: "At least 1 hour before",
        text: "Buddha Air requires passengers to arrive at least 1 hour before flight time; check-in counters close 15 minutes before departure. Other airlines state their reporting time on the ticket.",
      },
      departure: {
        value: "Early morning, from about 6:00 AM",
        text: "Buddha Air lists departures from about 6:15–6:30 AM; Yeti Airlines' page gives 6:00 AM. Weather can move the time on the day.",
      },
    },
    items: [
      { icon: "mapPin", label: "Departure airport", value: "Tribhuvan International Airport (KTM), Kathmandu", note: "Domestic terminal." },
      { icon: "mountainSnow", label: "Experience", value: "Everest & eastern Himalaya sightseeing flight", note: "Returns to Kathmandu; no landing in the mountains." },
      { icon: "clock", label: "Flight duration", value: "Approx. 50–60 minutes", note: "As published by the operators; varies on the day." },
      { icon: "plane", label: "Operators", value: "Buddha Air · Yeti Airlines · Shree Airlines", note: "Confirmed per date when we quote.", confirm: true },
      { icon: "plane", label: "Aircraft", value: "Turboprop airliners (ATR family)", note: "Buddha Air's fleet is ATR 72-500 / ATR 42-320; Yeti Airlines operates ATR 72s. The type for your flight is not published in advance.", confirm: true },
      { icon: "route", label: "Booking type", value: "Seat on a dedicated sightseeing flight", note: "Not a regular point-to-point domestic flight." },
      { icon: "camera", label: "Seating", value: "Window seat for individual passengers", note: "Per Buddha Air and Yeti Airlines. Group seating can differ — ask when booking." },
      { icon: "passport", label: "Identification", value: "Passport, or eligible Nepali / Indian ID", note: "Nepali: citizenship, national ID or passport. Indian: voter ID or passport (Buddha Air rules)." },
      { icon: "luggage", label: "Baggage", value: "Travel light — small personal bag", note: "Allowances depend on the airline and fare class.", confirm: true },
      { icon: "cloud", label: "Availability", value: "Daily, subject to weather and operations", note: "Delays, reschedules and cancellations are possible." },
    ],
    note: "Information from the operators' official websites, checked on 13 October 2026. Schedules and rules change; we reconfirm everything in writing when we quote.",
    sources: [BA_PRODUCT, BA_ROUTE, BA_RULES, YETI_PRODUCT],
  },

  /* ---------- E. Operators ---------- */
  operators: {
    title: "Airlines Offering the Everest Flight",
    intro: "Only details published by each airline are shown. Regular domestic routes are separate from these dedicated sightseeing flights.",
    items: [
      {
        name: "Buddha Air",
        website: { label: "buddhaair.com", href: BA_PRODUCT.href },
        status: "Listed on official website",
        offering: "“Everest Experience” — a daily morning sightseeing flight from Kathmandu past about 20 peaks east of the city, from Langtang Lirung to Chamlang.",
        details: [
          { label: "Duration", value: "50 minutes up to an hour" },
          { label: "Departure", value: "From about 6:15–6:30 AM, daily" },
          { label: "Seating", value: "Guaranteed window seat" },
          { label: "Extras", value: "Peaks map, crew briefing, Everest Experience certificate" },
          { label: "Fare", value: PRICE_ON_REQUEST },
          { label: "Cancellation", value: "By fare class — see the guide below" },
        ],
        sources: [BA_PRODUCT, BA_RULES],
      },
      {
        name: "Yeti Airlines",
        website: { label: "yetiairlines.com", href: YETI_PRODUCT.href },
        status: "Listed on official website",
        offering: "“Mountain Flight” — a daily sightseeing flight from Kathmandu along the range from Langtang Lirung to Everest and Chamlang, with crew commentary.",
        details: [
          { label: "Duration", value: "Approximately 1 hour" },
          { label: "Departure", value: "6:00 AM daily per Yeti's page (the page also shows 8:00 AM — reconfirm)" },
          { label: "Seating", value: "Window seat for individual passengers; group seating differs" },
          { label: "Booking", value: "Website, mobile app or customer service" },
          { label: "Fare", value: PRICE_ON_REQUEST },
          { label: "Cancellation", value: "By fare class — see the guide below" },
        ],
        sources: [YETI_PRODUCT, YETI_RULES],
      },
      {
        name: "Shree Airlines",
        website: { label: "shreeairlines.com", href: SHREE_ARTICLE.href },
        status: "Reconfirm current operation",
        offering: "Describes an Everest mountain flight from Tribhuvan International Airport over the eastern Himalaya, bookable through its website's mountain-flight option.",
        details: [
          { label: "Duration", value: "50 minutes" },
          { label: "Departure", value: "Not published — confirmed on booking" },
          { label: "Fare", value: PRICE_ON_REQUEST },
          { label: "Cancellation", value: "By fare class (H, I, B…) per its fare policy" },
        ],
        sources: [SHREE_ARTICLE, SHREE_FARES],
      },
    ],
    note: "Shree Airlines' Everest-flight article dates from June 2024; we reconfirm that it is operating before quoting it. Airline names are shown for information; Karvaahh is a travel company, not an airline.",
  },

  /* ---------- F. Fares ---------- */
  fares: {
    title: "Fares by Passenger Category",
    intro:
      "Nepal's domestic airlines price by nationality, not residence: Nepali and Indian nationals pay an NPR fare and other nationalities a USD fare. None of the airlines publishes a current Everest-flight price on a public page, so we quote the live fare for your date.",
    verified: VERIFIED,
    rows: [
      {
        category: "Nepalese citizens",
        eligibility: "Citizenship certificate, national ID or passport",
        price: PRICE_ON_REQUEST,
        currency: "NPR fare",
        taxes: "Itemised in your quotation",
        inclusions: "Seat on the sightseeing flight; operator extras as listed",
        validity: "Quoted date only; reconfirmed at booking",
        sources: [BA_RULES, YETI_RULES],
      },
      {
        category: "Indian citizens",
        eligibility: "Voter ID or passport (Buddha Air)",
        price: PRICE_ON_REQUEST,
        currency: "NPR fare — INR quotation on request",
        taxes: "Itemised in your quotation",
        inclusions: "Seat on the sightseeing flight; operator extras as listed",
        validity: "Quoted date only; reconfirmed at booking",
        sources: [BA_RULES, YETI_RULES, SHREE_FARES],
      },
      {
        category: "SAARC nationals (other than India)",
        eligibility: "Passport",
        price: PRICE_ON_REQUEST,
        currency: "USD fare — no separate SAARC fare is published",
        taxes: "Itemised in your quotation",
        inclusions: "Seat on the sightseeing flight; operator extras as listed",
        validity: "Quoted date only; reconfirmed at booking",
        sources: [BA_RULES, YETI_RULES],
      },
      {
        category: "Other international travellers",
        eligibility: "Passport (UK, Europe, USA, Australia and all others)",
        price: PRICE_ON_REQUEST,
        currency: "USD fare",
        taxes: "Itemised in your quotation",
        inclusions: "Seat on the sightseeing flight; operator extras as listed",
        validity: "Quoted date only; reconfirmed at booking",
        sources: [BA_RULES, YETI_RULES],
      },
      {
        category: "OCI cardholders & NRIs",
        eligibility: "Passport",
        price: PRICE_ON_REQUEST,
        currency: "USD fare (OCI: Buddha Air & Shree; NRI: Yeti)",
        taxes: "Itemised in your quotation",
        inclusions: "Seat on the sightseeing flight; operator extras as listed",
        validity: "Quoted date only; reconfirmed at booking",
        sources: [BA_RULES, YETI_RULES, SHREE_FARES],
      },
      {
        category: "Foreign residents of Nepal",
        eligibility: "Passport and residence documents",
        price: PRICE_ON_REQUEST,
        currency: "USD fare — residential fares do not apply to mountain flights (Buddha Air, Shree)",
        taxes: "Itemised in your quotation",
        inclusions: "Seat on the sightseeing flight; operator extras as listed",
        validity: "Quoted date only; reconfirmed at booking",
        sources: [BA_RULES, SHREE_FARES],
      },
    ],
    notes: [
      "Category is based on nationality and the ID or passport you travel with, not where you live. Carry the same document at check-in.",
      "Child, senior-citizen and disability discounts do not apply to mountain flights under Buddha Air's rules; Yeti Airlines and Shree Airlines also exclude children from their discounts on these flights.",
      "Fuel surcharge and airport charges are part of the airline fare structure; your quotation lists every charge and states whether it is included.",
      "Any price we show in INR or another currency is a conversion for convenience; the airline fare is set in NPR or USD.",
    ],
    ctaLabel: "Get the Latest Price",
    ctaMessage: "Hello Karvaahh, please share the latest Everest Scenic Flight fare. Date: ___ Passengers: ___ Nationality: ___ Preferred currency: ___",
  },

  /* ---------- J. Cancellation ---------- */
  policies: {
    title: "Cancellation, Refunds and Rescheduling",
    intro:
      "Who cancels makes the difference. Airline rules below are quoted from each airline's published fare rules; the rules for your ticket depend on its fare class, which we state in your quotation.",
    items: [
      {
        icon: "cloud",
        owner: "airline",
        title: "The airline cancels (weather or operations)",
        text: "Buddha Air and Yeti Airlines both state that when the airline cancels, the ticket is fully refundable in all fare categories.",
        points: [
          "You can also ask to move to another morning, subject to seats",
          "Shree Airlines says it will try to rebook you on the next available flight",
          "Hotel, transport and other costs caused by a cancellation are not covered",
        ],
        sources: [BA_RULES, YETI_RULES, SHREE_FARES],
      },
      {
        icon: "clock",
        owner: "airline",
        title: "Long delays",
        text: "Buddha Air lets passengers cancel with a full refund if the flight is delayed by more than one hour. Shree Airlines gives a full refund after a delay of more than two hours if you reported for check-in.",
        sources: [BA_RULES, SHREE_FARES],
      },
      {
        icon: "calendar",
        owner: "passenger",
        title: "You cancel",
        text: "Charges depend on fare class and how close to departure you cancel. Examples from the published rules:",
        points: [
          "Buddha Air Normal (Y): 10% more than 11 hours out, 33.33% within 11 hours; no cancellation within 2 hours",
          "Yeti Airlines Super Flexi (N): 10% up to 12 hours before, 33.33% up to 1 hour before",
          "Yeti Airlines does not accept requests within the check-in hour",
        ],
        sources: [BA_RULES, YETI_RULES],
      },
      {
        icon: "route",
        owner: "passenger",
        title: "Date changes",
        text: "Yeti Airlines allows free rescheduling on its Super Flexi and Flexi (Y) fares up to 1 hour before departure, with any fare difference payable. Other fares and airlines may charge; Shree Airlines raises cancellation charges after a reschedule.",
        sources: [YETI_RULES, SHREE_FARES],
      },
      {
        icon: "wind",
        owner: "passenger",
        title: "Missed departures & no-shows",
        text: "Missing check-in counts as a no-show. Buddha Air does not refund the fare (airport tax is refundable); Yeti Airlines treats the ticket as non-refundable and no longer valid.",
        sources: [BA_RULES, YETI_RULES],
      },
      {
        icon: "file",
        owner: "airline",
        title: "Non-refundable fares",
        text: "Some fare classes cannot be refunded: Buddha Air's C, D and E fares, and Yeti Airlines' Saver fares, where only airport tax is returned.",
        sources: [BA_RULES, YETI_RULES],
      },
      {
        icon: "umbrella",
        owner: "airline",
        title: "How refunds are processed",
        text: "Refunds go back through the original payment channel. Buddha Air refunds agency bookings to the agency, and Yeti Airlines refers agency purchases to the agency, so refunds for Karvaahh bookings come to you through us.",
        points: [
          "Buddha Air: 7–8 working days; card refunds carry a 3.5% bank charge",
          "Yeti Airlines: 1–2 working days for agency purchases; cards 10–12 working days",
        ],
        sources: [BA_RULES, YETI_RULES],
      },
      {
        icon: "headset",
        owner: "karvaahh",
        title: "Karvaahh service charges",
        text: "Any Karvaahh booking-service fee, whether it is refundable, and how long we take to pass on an airline refund are stated in your written quotation before you pay.",
        confirm: true,
      },
    ],
    note: "Rules quoted from official airline pages checked on 13 October 2026. They can change, and the terms printed with your ticket take precedence. Refunds are never automatic: we file the request with the airline for you.",
  },

  /* ---------- K. Booking journey ---------- */
  bookingJourney: {
    title: "From Enquiry to Take-off",
    intro: "Six clear steps. Nothing is booked until you have a quotation and confirm it.",
    steps: [
      { title: "Send your details", text: "Your preferred date, number of passengers and each passenger's nationality." },
      { title: "We check availability", text: "We check the operators flying on your date and their current seats and fares." },
      { title: "Receive a quotation", text: "Fare, currency, taxes and charges, inclusions and the cancellation terms of the fare class." },
      { title: "Confirm & pay", text: "Your seat is booked once you confirm and pay under the agreed terms. You receive the ticket." },
      { title: "Follow reporting instructions", text: "Report at the domestic terminal by the time on your ticket, with the ID you booked with." },
      { title: "Reconfirm on the day", text: "Reconfirm the evening before and the morning of the flight, as weather can change the timing." },
    ],
    note: "An enquiry or WhatsApp message does not reserve a seat. Availability is confirmed only when the airline issues your ticket.",
  },
};
