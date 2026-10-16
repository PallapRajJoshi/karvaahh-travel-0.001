/* ============================================================
   ANNAPURNA SCENIC FLIGHT (FIXED-WING) — PAGE DATA
   ------------------------------------------------------------
   /activities/domestic-flights/annapurna-scenic-flights
   A sightseeing flight from Pokhara along the Annapurna and
   Dhaulagiri ranges and back — it does NOT land anywhere.

   RESEARCH (last checked 13 Oct 2026):
   - Product: Buddha Air "Annapurna Experience" (also called the
     Pokhara Mountain Flight). Source:
     https://www.buddhaair.com/mountain-flights/annapurna-experience
     States: ~30 minutes, early morning (06:00–08:00 window),
     window seat for every passenger, route featuring Dhaulagiri,
     Annapurna I, Machhapuchhre, Annapurna III/IV/II, Lamjung, Manaslu.
   - NOT VERIFIED — confirm before each booking:
     · Current operating status / days (operated on demand & season).
     · Exact departure airport: Pokhara domestic services moved to
       Pokhara International Airport (PKR) in Jan 2023 — reconfirm.
     · Fares, nationality fare categories, taxes, baggage, aircraft.
     · Cancellation / refund terms (airline + Karvaahh's own terms).
   - Other operators (Yeti, Shree, Tara, Summit) are NOT listed:
     no current Pokhara Annapurna sightseeing product confirmed.
     Pokhara–Jomsom is a scheduled point-to-point route, not this product.

   CONTENT RULES (keep when editing):
   - No guaranteed peak visibility, timings or prices.
   - No fabricated fares, safety records, reviews or ratings.
   - Peak heights as commonly published; sources vary slightly.
   ============================================================ */

import type { HelicopterTour } from "@/components/activities/experience/product-types";
import { annapurnaRange, dhaulagiri, manasluTrail, mardiRidge, mustangCliffs, pokhara, valleyRoad } from "../helicopter-tours/images";
import { karvaahhTrust } from "../helicopter-tours/shared";

const PRICE = "Contact Karvaahh for the latest price";
const SOURCE = "Buddha Air — Annapurna Experience (buddhaair.com), checked 13 Oct 2026";

export const annapurnaScenicFlightPage: HelicopterTour = {
  title: "Annapurna Scenic Flight",
  slug: "annapurna-scenic-flights",
  path: "/activities/domestic-flights/annapurna-scenic-flights",
  breadcrumbLabel: "Annapurna Scenic Flight",
  collection: { label: "Domestic Flights" },
  description:
    "An early-morning sightseeing flight from Pokhara along the Dhaulagiri, Annapurna and Manaslu ranges, returning to Pokhara in about 30 minutes. Aerial views only — the flight does not land in the mountains.",
  touristType: ["First-time Nepal visitors", "Indian travellers", "Families", "Senior travellers", "Photographers", "Couples"],

  seo: {
    title: "Annapurna Scenic Flight from Pokhara | Karvaahh",
    socialTitle: "Annapurna Scenic Flight from Pokhara – Himalayan Views from the Sky",
    description:
      "Explore the Annapurna Himalayas from Pokhara with Karvaahh. Discover scenic flight details, mountain views, fares, weather guidance and booking options.",
    keywords: [
      "Annapurna scenic flight from Pokhara",
      "Annapurna mountain flight Nepal",
      "Pokhara scenic flight price",
      "Annapurna aerial sightseeing",
      "Pokhara mountain flight booking",
      "Annapurna flight for Indian tourists",
      "Annapurna Experience flight",
    ],
    ogImage: annapurnaRange,
  },

  duration: "Approx. 30 minutes",
  elevation: "Aerial views only",
  startingPoint: "Pokhara (PKR)",
  endingPoint: "Pokhara (PKR)",
  region: "Annapurna & Dhaulagiri Himalaya, Gandaki Province",
  bestSeason: "Autumn, winter & spring mornings",
  transportation: "Fixed-wing aircraft",
  tourTypes: "Seat on a mountain sightseeing flight",
  groupSize: "Subject to airline seating",
  landingNote: "Scenic flight — no mountain landing",

  labels: {
    why: "Why Fly",
    related: "Keep Exploring",
    relatedTitle: "More Around Pokhara & Annapurna",
    glance: "Flight at a Glance",
    nav: { overview: "Overview", itinerary: "The Flight", route: "Route", safety: "Before You Fly", book: "Enquire" },
  },
  stickyCta: { title: "Annapurna Flight", mobileTitle: "Annapurna Scenic Flight", desktop: "Book Your Scenic Flight", mobile: "Enquire Now" },

  /* ---------- Hero ---------- */
  hero: {
    badge: "Karvaahh • Pokhara Mountain Flight",
    titleLead: "Annapurna Scenic Flight",
    titleAccent: "from Pokhara",
    subtitle: "Discover the majestic Annapurna Himalayas, Machhapuchhre and the breathtaking landscapes of Nepal from the sky.",
    description:
      "A short early-morning flight from Pokhara that follows the snow wall of Dhaulagiri, Annapurna and Manaslu, then returns to Pokhara. It is aerial sightseeing only — there is no mountain landing.",
    image: annapurnaRange,
    primaryCta: { label: "Book Your Scenic Flight" },
    secondaryCta: { label: "Explore Flight Details", href: "#itinerary" },
    whatsappCta: "Enquire on WhatsApp",
    flightPath: true,
    floatingStat: { label: "Machhapuchhre", value: "6,993 m" },
    strip: [],
    trust: [
      { icon: "mapPin", label: "Departs Pokhara (PKR)" },
      { icon: "clock", label: "Approx. 30 Minutes" },
      { icon: "sun", label: "Early Morning" },
      { icon: "plane", label: "Fixed-Wing Sightseeing" },
      { icon: "mountainSnow", label: "No Mountain Landing" },
    ],
  },

  bookingWidget: {
    destination: "Annapurna Himalaya",
    departures: ["Pokhara (PKR)"],
    tourTypes: ["Scenic flight seat", "Private / charter (on request)"],
    travelerOptions: ["1 Passenger", "2 Passengers", "3 Passengers", "4 Passengers", "5 Passengers", "6+ Passengers"],
    defaults: { message: "I'd like to book the Annapurna Scenic Flight from Pokhara." },
    labels: { departure: "Departure", tourType: "Flight" },
    duration: "≈ 30 min",
  },

  quickFacts: [
    { icon: "plane", label: "Departure", value: "Pokhara • PKR" },
    { icon: "clock", label: "Duration", value: "Approx. 30 Minutes" },
    { icon: "sun", label: "Departure Window", value: "Early Morning" },
    { icon: "mountainSnow", label: "Experience", value: "Aerial Sightseeing" },
  ],

  /* ---------- Overview ---------- */
  editorial: {
    eyebrow: "Pokhara & the Annapurna",
    title: "The Himalaya on Pokhara's Doorstep",
    paragraphs: [
      "Pokhara is the gateway to the Annapurna region. From Phewa Lake the [[Annapurna range]] and the fishtail summit of [[Machhapuchhre]] rise barely 30 km away — one of the closest meetings of lakeside town and 7,000–8,000 m peaks anywhere on Earth.",
      "The Annapurna Scenic Flight takes off from Pokhara in the [[early morning]], when skies are often clearest, and flies along the range: Dhaulagiri in the west, the Annapurna massif and Machhapuchhre, then Lamjung Himal and Manaslu to the east, before returning to Pokhara.",
      "It suits travellers with limited time, families and anyone who wants a close look at the Himalaya without trekking. Pair it with Pokhara sightseeing, a village stay in Ghandruk or an Annapurna trek for a complete Gandaki journey.",
    ],
    image: pokhara,
    inset: mardiRidge,
    fact: { label: "Flight time", value: "≈ 30 min", text: "Pokhara → Annapurna & Dhaulagiri panorama → Pokhara" },
  },

  /* ---------- Why ---------- */
  whyHelicopter: {
    title: "Why Take the Annapurna Flight?",
    intro: "A close Himalayan panorama that fits into a single Pokhara morning.",
    items: [
      { icon: "mountainSnow", title: "Three 8,000 m Giants", text: "Dhaulagiri, Annapurna I and Manaslu can all feature on a clear morning." },
      { icon: "flag", title: "Machhapuchhre Up Close", text: "See the famous fishtail summit — a sacred, unclimbed peak — from the air." },
      { icon: "footprints", title: "No Trekking Required", text: "The Annapurna panorama without trekking days or high-altitude nights." },
      { icon: "clock", title: "Short & Easy", text: "Roughly 30 minutes in the air — back in Pokhara in time for breakfast." },
      { icon: "camera", title: "Window Seat", text: "The operator states every passenger is given a window seat on this flight." },
      { icon: "compass", title: "Pokhara Base", text: "Easy to combine with Pokhara sightseeing, Ghandruk or an Annapurna trek." },
    ],
  },

  /* ---------- Timeline ---------- */
  flightSteps: {
    title: "How the Flight Works",
    intro: "Reporting time and departure time are different — the airline confirms both when you book.",
    steps: [
      { title: "Booking Confirmed", text: "Karvaahh confirms the operator, date, fare and reporting time with you." },
      { title: "Reconfirm the Evening Before", text: "Reconfirm status — flights are weather-dependent and timings can move." },
      { title: "Report at Pokhara Airport", text: "Arrive at the domestic check-in by the airline's reporting time with your ID.", note: "Reporting time is earlier than the scheduled departure." },
      { title: "Check-in & Security", text: "Complete check-in, baggage and security screening before boarding." },
      { title: "Take Off", text: "Climb out over the Pokhara Valley and Phewa Lake towards the range." },
      { title: "Dhaulagiri & Annapurna", text: "Views west to Dhaulagiri, then Annapurna I, Annapurna South and Machhapuchhre, weather permitting." },
      { title: "Annapurna II to Manaslu", text: "Continue past Annapurna III, IV and II, Lamjung Himal and Manaslu." },
      { title: "Return to Pokhara", text: "Land back in Pokhara after approximately 30 minutes." },
    ],
  },

  /* ---------- Peaks ---------- */
  peaks: {
    title: "Mountain & Landscape Highlights",
    intro: "Peaks named on the operator's published route, from Dhaulagiri in the west to Manaslu in the east.",
    note: "Visibility depends on weather, cloud and the route flown on the day. Not every peak is visible on every departure. Published heights vary slightly between sources.",
    items: [
      { name: "Dhaulagiri I", metres: 8167, region: "Dhaulagiri Himal", text: "The world's seventh-highest mountain, rising west of the Kali Gandaki gorge.", image: dhaulagiri },
      { name: "Manaslu", metres: 8163, region: "Gorkha · Mansiri Himal", text: "The world's eighth-highest peak, at the eastern end of the panorama.", image: manasluTrail },
      { name: "Annapurna I", metres: 8091, region: "Annapurna Massif", text: "The tenth-highest mountain and the first 8,000 m peak ever climbed (1950).", image: annapurnaRange },
      { name: "Annapurna II", metres: 7937, region: "Annapurna Massif", text: "The great eastern summit of the Annapurna Himal." },
      { name: "Annapurna III", metres: 7555, region: "Annapurna Massif", text: "A broad summit above the Sabche Cirque, north-east of Machhapuchhre." },
      { name: "Annapurna IV", metres: 7525, region: "Annapurna Massif", text: "Linked by a long ridge to Annapurna II." },
      { name: "Annapurna South", metres: 7219, region: "Annapurna Sanctuary", text: "The prominent summit seen from Ghandruk and Poon Hill." },
      { name: "Machhapuchhre (Fishtail)", metres: 6993, region: "Annapurna Sanctuary", text: "Pokhara's iconic twin-summited 'fishtail' — sacred and closed to climbing.", image: { ...mardiRidge, alt: "Machhapuchhre's fishtail summit beside Annapurna South and Hiunchuli above a grassy ridge", label: "Machhapuchhre" } },
      { name: "Lamjung Himal", metres: 6983, region: "Lamjung", text: "A snowy massif between Annapurna II and the Marsyangdi valley." },
    ],
  },

  /* ---------- Map (approximate, illustrative) ---------- */
  places: [
    { id: "pokhara", name: "Pokhara (PKR)", lat: 28.2, lon: 84.01, elevation: "Departure", label: "bottom", text: "Flights depart Pokhara early in the morning. Confirm the airport and reporting time at booking.", image: pokhara },
    { id: "dhaulagiri", name: "Dhaulagiri", lat: 28.697, lon: 83.487, elevation: "8,167 m", label: "top", text: "The western anchor of the panorama, beyond the Kali Gandaki gorge.", image: dhaulagiri },
    { id: "annapurna-i", name: "Annapurna I", lat: 28.596, lon: 83.82, elevation: "8,091 m", label: "top", text: "The main summit of the Annapurna massif.", image: annapurnaRange },
    { id: "machhapuchhre", name: "Machhapuchhre", lat: 28.495, lon: 83.949, elevation: "6,993 m", label: "left", text: "The fishtail peak that towers over Pokhara.", image: mardiRidge },
    { id: "annapurna-ii", name: "Annapurna II", lat: 28.539, lon: 84.122, elevation: "7,937 m", label: "top", text: "The eastern Annapurna summits and Lamjung Himal." },
    { id: "manaslu", name: "Manaslu", lat: 28.549, lon: 84.559, elevation: "8,163 m", label: "right", text: "The eastern end of the scenic panorama.", image: manasluTrail },
    { id: "annapurna-himal", name: "Annapurna Himal", lat: 28.62, lon: 84.0, region: true, text: "The great massif north of Pokhara." },
  ],
  map: {
    title: "Along the Annapurna Range",
    intro: "Pokhara → Dhaulagiri → Annapurna I → Machhapuchhre → Annapurna II → Manaslu → Pokhara. Tap a marker for each highlight.",
    note: "Approximate scenic direction based on the operator's published route — not an aviation route. The actual route varies with weather, air traffic and operational conditions.",
    bounds: { west: 83.2, east: 84.85, south: 27.95, north: 28.9 },
    route: ["pokhara", "dhaulagiri", "annapurna-i", "machhapuchhre", "annapurna-ii", "manaslu", "pokhara"],
    routes: [
      { id: "scenic", label: "Scenic flight direction", style: "air", places: ["pokhara", "dhaulagiri", "annapurna-i", "machhapuchhre", "annapurna-ii", "manaslu", "pokhara"] },
    ],
    selected: "machhapuchhre",
    aircraft: true,
  },

  /* ---------- Gallery ---------- */
  gallery: {
    title: "Pokhara & the Annapurna Skyline",
    intro: "Landscapes of the Pokhara valley and the ranges seen on the flight. Tap any photo to view it larger.",
    items: [
      { image: annapurnaRange, caption: "The Annapurna range and Machhapuchhre above the Pokhara valley" },
      { image: pokhara, caption: "Phewa Lake, Pokhara" },
      { image: mardiRidge, caption: "Machhapuchhre, Annapurna South and Hiunchuli" },
      { image: dhaulagiri, caption: "Dhaulagiri above the forested foothills" },
      { image: manasluTrail, caption: "The Manaslu region" },
      { image: valleyRoad, caption: "Himalayan foothills and valleys of Gandaki" },
    ],
  },

  /* ---------- Seasons ---------- */
  seasons: {
    title: "Weather & the Best Time to Fly",
    intro: "Flights operate in the early morning, when Himalayan visibility is usually better before cloud builds around the peaks.",
    note: "No month guarantees clear views. Cloud, wind, rain and poor visibility can delay, reschedule or cancel flights. Keep at least one spare morning in Pokhara.",
    items: [
      { name: "Autumn", months: "September – November", rating: "Excellent", icon: "leaf", text: "Post-monsoon air is often crisp and clear — the most popular season." },
      { name: "Winter", months: "December – February", rating: "Often very clear", icon: "snow", text: "Frequently clear mountain mornings; valley haze or fog can delay early departures." },
      { name: "Spring", months: "March – May", rating: "Good", icon: "sun", text: "Generally good mornings, though haze and afternoon cloud increase towards May." },
      { name: "Monsoon", months: "June – August", rating: "Limited", icon: "cloud", text: "Pokhara is one of Nepal's wettest places; heavy cloud often hides the peaks and flights may not operate." },
    ],
  },

  /* ---------- Spotlights ---------- */
  spotlights: [
    {
      id: "flight-details",
      eyebrow: "Flight Details",
      title: "Verified Flight Information",
      paragraphs: [
        "Details below come from the operator's published product page. Anything not published is marked for confirmation — Karvaahh confirms it with you before you pay.",
      ],
      cards: [
        { icon: "mapPin", title: "Departure airport", text: "Pokhara (PKR). Pokhara's domestic flights moved to Pokhara International Airport in 2023 — reconfirmed at booking." },
        { icon: "route", title: "Route", text: "Pokhara → Dhaulagiri → Annapurna I → Machhapuchhre → Annapurna III, IV, II → Lamjung → Manaslu → Pokhara (as published)." },
        { icon: "clock", title: "Duration", text: "Approximately 30 minutes airborne, as stated by the operator." },
        { icon: "sun", title: "Departure window", text: "Early morning, published as 06:00–08:00. Reporting time is earlier and set by the airline." },
        { icon: "plane", title: "Operator", text: "Buddha Air — 'Annapurna Experience'. Aircraft type and seat count: contact Karvaahh for current details." },
        { icon: "passport", title: "Check-in & ID", text: "Passport for foreign nationals; Indian citizens may use a passport or Voter ID; Nepali citizens a citizenship card. Confirm with the airline." },
        { icon: "users", title: "Baggage", text: "Carry only small personal items. Allowance is set by the airline — contact Karvaahh for current details." },
        { icon: "calendar", title: "Availability", text: "Weather- and demand-dependent; not every day is guaranteed. Contact Karvaahh for current availability." },
      ],
      note: `Source: ${SOURCE}. Operating status, airport and timing must be reconfirmed for each date.`,
      variant: "cards",
    },
    {
      id: "fares",
      eyebrow: "Airlines, Fares & Booking",
      title: "Who Operates It & What It Costs",
      paragraphs: [
        "The only confirmed dedicated Annapurna sightseeing flight from Pokhara is Buddha Air's 'Annapurna Experience'. We do not list other airlines unless their current product is confirmed. Private charters may be possible on request.",
        "Fares are not published with a current, verifiable validity date, so we do not display a number here. Nationality-based fare categories (Nepali, Indian, SAARC, other foreign) apply only if the airline confirms them for your date — we will tell you exactly which fare applies.",
      ],
      cards: [
        { icon: "users", title: "Nepalese citizens", text: `${PRICE}. Currency: NPR.` },
        { icon: "users", title: "Indian citizens", text: `${PRICE}. Quotation in INR on request (conversion shown as indicative, with date).` },
        { icon: "users", title: "SAARC nationals", text: `${PRICE}. Fare category applies only if confirmed by the airline.` },
        { icon: "passport", title: "Other international (UK, EU, US, Australia…)", text: `${PRICE}. Usually quoted in USD; GBP/EUR/AUD indicative on request.` },
        { icon: "shield", title: "Taxes & charges", text: "Whether airport and government charges are included is confirmed in your written quotation." },
        { icon: "route", title: "Booking source", text: "Directly with the airline (buddhaair.com) or through Karvaahh, which checks availability and confirms terms in writing." },
      ],
      note: "Scheduled scenic-flight fares are different from helicopter or private charter pricing. Last verified: 13 Oct 2026.",
      variant: "cards",
    },
    {
      id: "weather",
      eyebrow: "Important Information",
      title: "Mountain Flights Are Weather-Dependent",
      paragraphs: [
        "Cloud can form over the Annapurna range within minutes, and wind, rain, haze or valley fog can all affect operations. The airline may delay, reschedule or cancel a departure for safety or operational reasons, and its decision is final.",
        "We cannot guarantee clear views, a specific peak or an exact route. Book an early date in your Pokhara stay so there is room to reschedule.",
      ],
      variant: "cards",
      dark: true,
    },
    {
      id: "cancellation",
      eyebrow: "Cancellation & Rescheduling",
      title: "If Plans Change",
      paragraphs: [
        "The airline's fare rules decide refunds and changes. Karvaahh shares the current rules in writing with your quotation — we do not publish universal refund percentages.",
      ],
      cards: [
        { icon: "users", title: "You cancel", text: "Charges follow the airline's fare rules at the time of booking, plus any Karvaahh service fee stated in your quotation." },
        { icon: "cloud", title: "Weather cancellation", text: "Usually offered a later flight or a refund under the airline's policy — confirmed per booking." },
        { icon: "plane", title: "Airline cancels", text: "Rebooking or refund follows the airline's policy for operational cancellations." },
        { icon: "calendar", title: "Date changes", text: "Subject to seat availability and the airline's change conditions." },
        { icon: "clock", title: "Missed flight / no-show", text: "Arriving after the reporting deadline may be treated as a no-show; refunds may not apply." },
        { icon: "shield", title: "Extra costs", text: "Extra hotel nights, transport or meals caused by delays are not covered by the flight ticket." },
      ],
      note: "Karvaahh's own booking and service-fee terms are confirmed in writing at the time of quotation.",
      variant: "cards",
    },
    {
      id: "flight-safety",
      eyebrow: "Safety & Passenger Guidance",
      title: "Flying With Confidence",
      paragraphs: ["No flight is entirely risk-free. These simple steps keep your morning smooth and safe."],
      cards: [
        { icon: "clock", title: "Report on time", text: "Follow the airline's check-in and boarding instructions." },
        { icon: "passport", title: "Carry ID", text: "Bring the identification required for your nationality." },
        { icon: "users", title: "Crew instructions", text: "Follow crew instructions, including seatbelt and camera rules." },
        { icon: "cloud", title: "Weather limits", text: "Flights operate only when weather and conditions allow." },
        { icon: "heart", title: "Assistance", text: "Tell us in advance about mobility, medical or accessibility needs so we can ask the airline." },
        { icon: "calendar", title: "Reconfirm", text: "Reconfirm your departure the evening before and on the morning of travel." },
      ],
      variant: "cards",
    },
  ],

  /* ---------- Inclusions ---------- */
  inclusions: [
    { text: "Annapurna scenic-flight ticket (as quoted)", status: "included" },
    { text: "Aerial mountain sightseeing", status: "included" },
    { text: "Booking assistance from Karvaahh", status: "included" },
    { text: "Airport taxes and charges — only if stated in your quotation", status: "package" },
    { text: "Hotel–airport transfers in Pokhara", status: "package" },
  ],
  exclusions: [
    "Hotel accommodation",
    "Meals and personal expenses",
    "Travel insurance",
    "Trekking permits and trekking services",
    "Helicopter transfers or any mountain landing",
    "Extra transport or accommodation caused by delays or cancellations",
    "Cancellation penalties and applicable service fees",
  ],

  /* ---------- Before you fly ---------- */
  safety: {
    eyebrow: "Preparation",
    title: "Before You Fly",
    intro: "The flight ticket is separate from any optional Pokhara tour or trekking package. Exact inclusions are confirmed in your quotation.",
    points: [
      { icon: "clock", title: "Reporting time", text: "Arrive by the airline's reporting time — earlier than departure." },
      { icon: "passport", title: "Carry ID", text: "Passport, or valid ID accepted for your nationality." },
      { icon: "camera", title: "Camera ready", text: "Charge your phone or camera; avoid flash on windows." },
      { icon: "sun", title: "Warm layer", text: "Pokhara mornings can be cool, especially in winter." },
      { icon: "cloud", title: "Stay flexible", text: "Keep a spare morning in case of weather delays." },
      { icon: "calendar", title: "Reconfirm", text: "Reconfirm the flight before leaving your hotel." },
    ],
  },

  travelerTypes: {
    title: "Who Is This Flight For?",
    intro: "Anyone who wants a close look at the Annapurna Himalaya without trekking.",
    items: [
      { icon: "compass", title: "First-Time Visitors", text: "A spectacular introduction to Pokhara's mountains." },
      { icon: "users", title: "Families", text: "Short and easy; airline rules for infants and children apply." },
      { icon: "heart", title: "Senior Travellers", text: "No walking or altitude stay; consult a doctor if you have medical conditions." },
      { icon: "camera", title: "Photographers", text: "Morning light on Machhapuchhre and Annapurna." },
      { icon: "clock", title: "Short Itineraries", text: "Fits before a day of Pokhara sightseeing." },
      { icon: "mountainSnow", title: "Trekkers", text: "See the whole range you're about to walk beneath." },
    ],
  },

  comparison: {
    title: "Annapurna Scenic Flight vs Pokhara–Jomsom",
    intro: "Two very different flights from Pokhara. Helicopter tours that land near Annapurna Base Camp are a separate product again.",
    columns: [
      {
        eyebrow: "Sightseeing",
        title: "Annapurna Scenic Flight",
        highlight: true,
        points: ["Pokhara → mountain panorama → Pokhara", "Approximately 30 minutes", "Fixed-wing aircraft", "No landing anywhere", "Designed for mountain viewing"],
      },
      {
        eyebrow: "Point to point",
        title: "Pokhara → Jomsom",
        points: ["Scheduled domestic route", "Lands in Jomsom (Mustang)", "Used for Mustang, Muktinath & treks", "Mountain views are incidental", "Not a sightseeing product"],
      },
    ],
  },

  trust: {
    ...karvaahhTrust,
    intro: "Karvaahh – Live to Travel · Nepal & India Travel Experiences. Our team helps Nepali, Indian and international travellers book Pokhara flights, stays and Annapurna plans.",
  },

  faqs: [
    { question: "Where does the Annapurna scenic flight depart from?", answer: "From Pokhara. It flies along the Annapurna range and returns to Pokhara." },
    { question: "Does the flight depart from Pokhara International Airport?", answer: "Pokhara's domestic flights have operated from Pokhara International Airport (PKR) since 2023. Karvaahh reconfirms the departure airport and reporting time for your date." },
    { question: "How long does the flight usually last?", answer: "The operator states approximately 30 minutes in the air. Allow extra time for check-in and transfers." },
    { question: "Which mountains can passengers see?", answer: "The published route includes Dhaulagiri, Annapurna I, Machhapuchhre, Annapurna III, IV and II, Lamjung Himal and Manaslu. Visibility depends on the weather and is not guaranteed." },
    { question: "Which operators currently provide this experience?", answer: "Buddha Air offers it as the 'Annapurna Experience'. We have not confirmed a current equivalent product from other airlines. Private charters may be possible on request." },
    { question: "What is the best time of day to fly?", answer: "Early morning — the operator publishes a 06:00–08:00 window, when cloud is usually lower." },
    { question: "Which season is best for Himalayan visibility?", answer: "Autumn (September–November) and winter are often clearest; spring is generally good. The monsoon brings heavy cloud and frequent disruptions." },
    { question: "Are Nepalese and foreign fares different?", answer: "Nepal's domestic airlines often use separate fares for Nepali, Indian and foreign passengers, but we only quote a category when the airline confirms it for your date. Contact Karvaahh for the latest price." },
    { question: "What happens if the weather is cloudy?", answer: "The airline may delay, reschedule or cancel. You are usually offered another date or a refund under the airline's policy." },
    { question: "What happens if the flight is cancelled?", answer: "Rebooking or refund follows the airline's fare rules, which we share in writing before you pay. Extra hotel or transport costs are not covered by the ticket." },
    { question: "Is the flight suitable for children and senior travellers?", answer: "Generally yes — it is short and involves no trekking. Airline rules for infants and children apply; travellers with medical conditions should consult a doctor." },
    { question: "Is the Annapurna scenic flight the same as Pokhara–Jomsom?", answer: "No. Pokhara–Jomsom is a scheduled point-to-point flight that lands in Mustang. The scenic flight returns to Pokhara without landing elsewhere." },
    { question: "Does the ticket include a mountain landing?", answer: "No. It is aerial sightseeing only. Landings at places like Annapurna Base Camp require a separate helicopter tour." },
    { question: "How can Indian and international travellers book?", answer: "Send the enquiry form or WhatsApp us with your date, passenger count and nationality. We confirm availability and send a quotation in your preferred currency (INR, USD, GBP, EUR or AUD as indicative conversions)." },
  ],

  cta: {
    title: "Your Window to the Annapurna Is Waiting.",
    text: "See Machhapuchhre, Annapurna and Dhaulagiri from above in one Pokhara morning — no trekking required.",
    image: annapurnaRange,
    animated: true,
    primaryLabel: "Book Your Scenic Flight",
    primaryHref: "#book",
    quoteLabel: "Request a Quotation",
    whatsappLabel: "WhatsApp Us",
    planMessage: "Hello Karvaahh, I'd like to book the Annapurna Scenic Flight from Pokhara.",
    quoteSubject: "Booking enquiry: Annapurna Scenic Flight",
  },

  enquiry: {
    title: "Book Your Annapurna Flight",
    intro: "1. Share your date, passengers and nationality. 2. We check the operator and availability. 3. You receive a quotation with fare, currency, taxes, inclusions and cancellation terms. 4. Confirm and pay under the agreed terms. 5. Follow the airline's reporting instructions and reconfirm before you fly.",
    hotelPlaceholder: "Your Pokhara hotel",
    options: {
      passengers: ["1 Passenger", "2 Passengers", "3 Passengers", "4 Passengers", "5 Passengers", "6+ Passengers"],
      airlines: ["Buddha Air (Annapurna Experience)", "Recommend for me", "Private charter (on request)"],
      times: ["Earliest available", "Early morning", "Flexible"],
      currencies: ["NPR", "INR", "USD", "GBP", "EUR", "AUD"],
    },
  },

  relatedTours: [
    { title: "Pokhara & Gandaki Province", text: "Phewa Lake, Sarangkot, Ghandruk and the Annapurna foothills.", href: "/destinations/gandaki-province", image: pokhara },
    { title: "Annapurna Helicopter Tour", text: "Fly into the Annapurna Sanctuary and land near Base Camp, weather permitting.", href: "/activities/helicopter-tours/annapurna", image: mardiRidge },
    { title: "Upper Mustang Helicopter Tour", text: "Red cliffs and Lo Manthang from the sky.", href: "/activities/helicopter-tours/upper-mustang", image: mustangCliffs },
    { title: "Everest Mountain Flight", text: "The Kathmandu scenic flight to the Everest skyline.", href: "/activities/domestic-flights/mountain-scenic", image: dhaulagiri },
    { title: "Manang Circuit Trek", text: "Trek around the Annapurna massif.", href: "/packages/manang-circuit-trek", image: manasluTrail },
    { title: "Nepal Packages", text: "Complete Nepal journeys planned by Karvaahh.", href: "/packages/nepal", image: valleyRoad },
  ],

  /* ---------- Required by the template ---------- */
  route: {
    title: "The Flight Route",
    intro: "An approximate scenic direction.",
    note: "Actual route varies with weather and operational conditions.",
    stops: [
      { name: "Pokhara (PKR)", detail: "Departure", mode: "landing" },
      { name: "Dhaulagiri", detail: "Aerial views", mode: "aerial" },
      { name: "Annapurna & Machhapuchhre", detail: "Aerial views", mode: "aerial" },
      { name: "Manaslu", detail: "Aerial views", mode: "aerial" },
      { name: "Pokhara (PKR)", detail: "Return", mode: "landing" },
    ],
  },
  options: {
    title: "Flight Options",
    intro: "Confirmed with you at booking.",
    note: "Prices depend on the airline, date and passenger category.",
    items: [
      { name: "Scenic flight seat", basis: "Per seat", price: PRICE, points: ["Buddha Air Annapurna Experience"], idealFor: "Most travellers", whatsappMessage: "Hello Karvaahh, please share the price of the Annapurna Scenic Flight from Pokhara." },
      { name: "Private / charter (on request)", basis: "Charter", price: "Enquire for details", points: ["Subject to airline availability"], idealFor: "Groups", whatsappMessage: "Hello Karvaahh, I'd like a private Annapurna scenic flight from Pokhara." },
    ],
  },

  layout: [
    "hero",
    "stats-bar",
    "nav",
    "trust-bar",
    "story",
    "why",
    "peaks",
    "spotlight:flight-details",
    "flight-steps",
    "map",
    "spotlight:fares",
    "seasons",
    "spotlight:weather",
    "inclusions",
    "spotlight:cancellation",
    "safety",
    "spotlight:flight-safety",
    "comparison",
    "travelers",
    "gallery",
    "faq",
    "cta",
    "enquiry",
    "related",
  ],
};
