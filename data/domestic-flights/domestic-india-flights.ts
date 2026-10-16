/* ============================================================
   DOMESTIC INDIA FLIGHTS — PAGE DATA
   ------------------------------------------------------------
   /activities/flights/domestic-india-flights
   A route guide for India's domestic network and the nonstop
   India–Kathmandu services, with booking help from Karvaahh.

   CONTENT RULES (keep when editing):
   - No fares, ratings or seat availability. Fares are quoted on
     request: "Contact Karvaahh for current fares."
   - Operators are carriers known to serve each route; schedules
     change, so every row says to reconfirm on the airline's site.
   - India–Kathmandu operators carry a source status: "airline"
     (published by the airline) or "reported" (schedule data /
     booking sites only). Frequencies only when airline-published.
   - Distances are great-circle airport-to-airport, rounded;
     durations are approximate scheduled times.
   - Review date: update VERIFIED whenever the data is rechecked.
   ============================================================ */

import type { HelicopterTour } from "@/components/activities/experience/product-types";
import type { PageImage, RequiredImage } from "@/components/activities/experience/types";
import type {
  Airline,
  Airport,
  DisruptionData,
  IndiaNepalData,
  PassengerInfoData,
  RouteDirectoryData,
} from "@/components/activities/domestic-flights/india/types";
import { kathmanduValley } from "../helicopter-tours/images";

const VERIFIED = "13 October 2026";

/* ---------- Images ---------- */

const redFortDelhi: RequiredImage = {
  src: "/images/home/delhi.jpg",
  alt: "The Red Fort in Delhi with the Indian flag flying above its red sandstone walls under a wide cloudy sky",
  label: "Delhi",
  width: 2048,
  height: 1366,
  objectPosition: "center 60%",
};

const swayambhuKathmandu: PageImage = {
  src: "/images/home/kathmandu-view.jpg",
  alt: "Aerial view of Swayambhunath stupa above Kathmandu city at sunset with hills on the horizon",
  label: "Kathmandu",
};

const varanasiGhats: PageImage = { src: "/images/home/varanasi.jpg", alt: "The ghats of Varanasi along the Ganges", label: "Varanasi" };
const rajasthan: PageImage = { src: "/images/destinations/rajasthan-travel-tour-packages.webp", alt: "Historic Rajasthan palace architecture", label: "Rajasthan" };

/* ---------- Airlines (official booking sites) ---------- */

const indigo: Airline = { name: "IndiGo", href: "https://www.goindigo.in" };
const airIndia: Airline = { name: "Air India", href: "https://www.airindia.com" };
const airIndiaExpress: Airline = { name: "Air India Express", href: "https://www.airindiaexpress.com" };
const akasa: Airline = { name: "Akasa Air", href: "https://www.akasaair.com" };
const nepalAirlines: Airline = { name: "Nepal Airlines", href: "https://www.nepalairlines.com.np" };
const buddhaAir: Airline = { name: "Buddha Air", href: "https://www.buddhaair.com" };

/* ---------- Airports ---------- */

const ap = (code: string, city: string, name: string): Airport => ({ code, city, name });
const DEL = ap("DEL", "Delhi", "Indira Gandhi International");
const BOM = ap("BOM", "Mumbai", "Chhatrapati Shivaji Maharaj International");
const BLR = ap("BLR", "Bengaluru", "Kempegowda International");
const MAA = ap("MAA", "Chennai", "Chennai International");
const CCU = ap("CCU", "Kolkata", "Netaji Subhas Chandra Bose International");
const HYD = ap("HYD", "Hyderabad", "Rajiv Gandhi International");
const JAI = ap("JAI", "Jaipur", "Jaipur International");
const VNS = ap("VNS", "Varanasi", "Lal Bahadur Shastri International");
const ATQ = ap("ATQ", "Amritsar", "Sri Guru Ram Dass Jee International");
const SXR = ap("SXR", "Srinagar", "Srinagar International");
const IXL = ap("IXL", "Leh", "Kushok Bakula Rimpochee");
const IXB = ap("IXB", "Bagdogra", "Bagdogra (Siliguri)");
const GAU = ap("GAU", "Guwahati", "Lokpriya Gopinath Bordoloi International");
const COK = ap("COK", "Kochi", "Cochin International");
const GOI = ap("GOI", "Goa", "Goa (Dabolim)");
const IXZ = ap("IXZ", "Port Blair", "Veer Savarkar International");
const BBI = ap("BBI", "Bhubaneswar", "Biju Patnaik International");
const DED = ap("DED", "Dehradun", "Jolly Grant");
const KTM = ap("KTM", "Kathmandu", "Tribhuvan International");

/* ---------- Route directory ---------- */

export const routeDirectory: RouteDirectoryData = {
  title: "India's Major Flight Routes",
  intro:
    "A selected directory of busy domestic connections between India's aviation hubs and its most-visited regions — not every flight in the country. Operators and times change; reconfirm on the airline's own site before you book.",
  verified: VERIFIED,
  hubs: [
    { code: "DEL", city: "Delhi", airport: DEL.name, text: "India's busiest hub and the main gateway for the north, the Himalaya and Kathmandu.", connects: ["BOM", "BLR", "CCU", "IXL", "SXR", "VNS", "KTM"] },
    { code: "BOM", city: "Mumbai", airport: BOM.name, text: "The western hub for Goa, Kerala and the Deccan.", connects: ["DEL", "BLR", "GOI", "COK", "KTM"], note: "Mumbai also has a second airport, Navi Mumbai (NMI) — check which one your ticket uses." },
    { code: "BLR", city: "Bengaluru", airport: BLR.name, text: "South India's largest hub, with wide links to every region.", connects: ["DEL", "BOM", "GOI", "KTM"] },
    { code: "CCU", city: "Kolkata", airport: CCU.name, text: "The eastern hub for the Andamans, the North-East and Nepal.", connects: ["DEL", "IXZ", "KTM"] },
    { code: "MAA", city: "Chennai", airport: MAA.name, text: "Gateway to Tamil Nadu and a hub for the Andaman Islands.", connects: ["DEL", "IXZ"] },
    { code: "HYD", city: "Hyderabad", airport: HYD.name, text: "A major southern hub with broad domestic connections.", connects: ["DEL"] },
    { code: "AMD", city: "Ahmedabad", airport: "Sardar Vallabhbhai Patel International", text: "Gujarat's main airport, with direct links to India's metros.", connects: [] },
    { code: "PNQ", city: "Pune", airport: "Pune International", text: "Serving Pune and the western Maharashtra region.", connects: [] },
    { code: "LKO", city: "Lucknow", airport: "Chaudhary Charan Singh International", text: "Uttar Pradesh's capital, close to the Nepal border region.", connects: [] },
    { code: "JAI", city: "Jaipur", airport: JAI.name, text: "The gateway to Rajasthan's forts and palaces.", connects: ["DEL"] },
    { code: "IXC", city: "Chandigarh", airport: "Shaheed Bhagat Singh International", text: "For Punjab, Haryana and the Himachal hill stations.", connects: [] },
  ],
  gateways: [
    { code: "VNS", city: "Varanasi", airport: VNS.name, text: "Kashi's ghats and Sarnath.", connects: [] },
    { code: "ATQ", city: "Amritsar", airport: ATQ.name, text: "The Golden Temple and Wagah.", connects: [] },
    { code: "SXR", city: "Srinagar", airport: SXR.name, text: "Kashmir valley and Dal Lake.", connects: [] },
    { code: "IXL", city: "Leh", airport: IXL.name, text: "Ladakh's high-altitude gateway.", connects: [] },
    { code: "IXB", city: "Bagdogra", airport: IXB.name, text: "Darjeeling, Sikkim and the Nepal border at Kakarbhitta.", connects: [] },
    { code: "GAU", city: "Guwahati", airport: GAU.name, text: "Gateway to North-East India.", connects: [] },
    { code: "COK", city: "Kochi", airport: COK.name, text: "Kerala's backwaters and hills.", connects: [] },
    { code: "GOI", city: "Goa", airport: GOI.name, text: "Beaches; North Goa is also served by Mopa (GOX).", connects: [] },
    { code: "IXZ", city: "Port Blair", airport: IXZ.name, text: "The Andaman Islands.", connects: [] },
    { code: "BBI", city: "Bhubaneswar", airport: BBI.name, text: "Odisha's temples and Puri.", connects: [] },
    { code: "DED", city: "Dehradun", airport: DED.name, text: "Rishikesh, Haridwar and the Char Dham.", connects: [] },
  ],
  routes: [
    { from: DEL, to: BOM, airlines: [indigo, airIndia, akasa, airIndiaExpress], service: "Nonstop", duration: "~2 h 10 min", distanceKm: 1138, status: "Year-round · high frequency" },
    { from: DEL, to: BLR, airlines: [indigo, airIndia, akasa, airIndiaExpress], service: "Nonstop", duration: "~2 h 45 min", distanceKm: 1710, status: "Year-round · high frequency" },
    { from: DEL, to: CCU, airlines: [indigo, airIndia], service: "Nonstop", duration: "~2 h 15 min", distanceKm: 1313, status: "Year-round · high frequency" },
    { from: DEL, to: MAA, airlines: [indigo, airIndia], service: "Nonstop", duration: "~2 h 45 min", distanceKm: 1760, status: "Year-round" },
    { from: DEL, to: HYD, airlines: [indigo, airIndia], service: "Nonstop", duration: "~2 h 15 min", distanceKm: 1267, status: "Year-round" },
    { from: BOM, to: BLR, airlines: [indigo, airIndia, akasa], service: "Nonstop", duration: "~1 h 45 min", distanceKm: 834, status: "Year-round · high frequency" },
    { from: BOM, to: GOI, airlines: [indigo, airIndia], service: "Nonstop", duration: "~1 h 15 min", distanceKm: 425, status: "Year-round · busiest Oct–Mar" },
    { from: BOM, to: COK, airlines: [indigo, airIndia], service: "Nonstop", duration: "~2 h", distanceKm: 1064, status: "Year-round" },
    { from: DEL, to: IXL, airlines: [indigo, airIndia], service: "Nonstop", duration: "~1 h 25 min", distanceKm: 621, status: "Morning flights · weather-sensitive" },
    { from: DEL, to: SXR, airlines: [indigo, airIndia], service: "Nonstop", duration: "~1 h 30 min", distanceKm: 642, status: "Year-round · winter weather delays" },
    { from: DEL, to: VNS, airlines: [indigo, airIndia], service: "Nonstop", duration: "~1 h 30 min", distanceKm: 667, status: "Year-round · winter fog delays" },
    { from: DEL, to: ATQ, airlines: [indigo, airIndia], service: "Nonstop", duration: "~1 h 10 min", distanceKm: 414, status: "Year-round" },
    { from: DEL, to: JAI, airlines: [indigo, airIndia], service: "Nonstop", duration: "~1 h", distanceKm: 232, status: "Year-round" },
    { from: DEL, to: DED, airlines: [indigo, airIndia], service: "Nonstop", duration: "~1 h", distanceKm: 208, status: "Year-round · busiest in yatra season" },
    { from: DEL, to: IXB, airlines: [indigo, airIndia], service: "Nonstop", duration: "~2 h", distanceKm: 1125, status: "Year-round" },
    { from: DEL, to: GAU, airlines: [indigo, airIndia], service: "Nonstop", duration: "~2 h 30 min", distanceKm: 1456, status: "Year-round" },
    { from: DEL, to: BBI, airlines: [indigo, airIndia], service: "Nonstop", duration: "~2 h 15 min", distanceKm: 1278, status: "Year-round" },
    { from: CCU, to: IXZ, airlines: [indigo, airIndia], service: "Nonstop", duration: "~2 h 15 min", distanceKm: 1306, status: "Year-round" },
  ],
  notes: [
    "Durations are approximate scheduled times and vary by flight, direction and season; distances are straight-line airport-to-airport.",
    "Operators listed are carriers known to serve the route; other airlines may also fly it. Confirm the current schedule on the airline's website before booking.",
    "Mountain airports such as Leh and Srinagar are weather-dependent, and North Indian airports can see winter fog delays.",
  ],
  sources: [
    { label: "IndiGo", href: indigo.href },
    { label: "Air India", href: airIndia.href },
    { label: "Air India Express", href: airIndiaExpress.href },
    { label: "Akasa Air", href: akasa.href },
  ],
};

/* ---------- India ↔ Kathmandu ---------- */

export const indiaNepal: IndiaNepalData = {
  title: "Direct Flights Between India and Nepal",
  intro:
    "Nonstop flights link Kathmandu's Tribhuvan International Airport with a handful of Indian cities. Every route here is an international flight — passports or accepted ID, immigration and earlier check-in apply.",
  verified: VERIFIED,
  routes: [
    {
      from: DEL,
      to: KTM,
      operators: [
        { ...airIndia, status: "airline", detail: "Air India's route page lists multiple daily nonstop flights" },
        { ...indigo, status: "reported" },
        { ...nepalAirlines, status: "reported" },
      ],
      duration: "~1 h 45 min",
      distanceKm: 815,
      note: "The busiest India–Nepal route, with several flights a day across carriers.",
    },
    {
      from: BOM,
      to: KTM,
      operators: [
        { ...indigo, status: "reported" },
        { ...nepalAirlines, status: "reported" },
      ],
      duration: "~2 h 50 min",
      distanceKm: 1592,
    },
    {
      from: BLR,
      to: KTM,
      operators: [
        { ...airIndiaExpress, status: "airline", detail: "Daily nonstop service announced from June 2025 — reconfirm current operation" },
        { ...nepalAirlines, status: "reported" },
      ],
      duration: "~3 h",
      distanceKm: 1797,
    },
    {
      from: CCU,
      to: KTM,
      operators: [
        { ...airIndia, status: "reported", detail: "Some Air India itineraries connect via Delhi — check for “nonstop”" },
        { ...buddhaAir, status: "reported" },
      ],
      duration: "~1 h 20 min",
      distanceKm: 641,
      note: "Schedule sources disagree on this route; we confirm the current operator for your date.",
    },
    {
      from: VNS,
      to: KTM,
      operators: [{ ...buddhaAir, status: "airline" }],
      duration: "~50 min",
      distanceKm: 352,
      frequency: "3 flights a week — Mon, Wed & Fri (per Buddha Air)",
      note: "A short hop popular with pilgrims combining Kashi, Lumbini and Pashupatinath.",
    },
  ],
  connecting: {
    title: "No nonstop from your city?",
    text: "Travellers from other Indian cities usually connect through Delhi, Mumbai, Bengaluru or Kolkata. Book the full journey on one ticket where possible, so a delay on the first flight is the airline's responsibility.",
    cities: ["Hyderabad", "Chennai", "Ahmedabad", "Pune", "Lucknow", "Jaipur", "Chandigarh", "Kochi", "Goa"],
  },
  notes: [
    "“Airline source” = published by the operating airline. “Reported” = listed in schedule data or on booking sites only — we reconfirm before ticketing.",
    "Frequencies are shown only where the airline publishes them. Schedules change seasonally.",
  ],
  sources: [
    { label: "Buddha Air — Kathmandu–Varanasi", href: "https://www.buddhaair.com/flight-routes/flights-from-kathmandu-to-varanasi" },
    { label: "Air India — Delhi–Kathmandu", href: "https://www.airindia.com/en-in/book-flights/delhi-to-kathmandu-flights" },
    { label: "IndiGo — Flights to Kathmandu", href: "https://www.goindigo.in/international-flights/flights-to-kathmandu.html" },
    { label: "Nepal Airlines", href: nepalAirlines.href },
  ],
  ctaMessage: "Hello Karvaahh, please share current fares for a flight between India and Kathmandu.",
};

/* ---------- Fares & passenger information ---------- */

export const passengerInfo: PassengerInfoData = {
  title: "Fares & Passenger Information",
  intro: "Air fares in India change constantly with demand, date and fare brand, so we quote live fares for your exact journey instead of publishing figures that go out of date.",
  verified: VERIFIED,
  fareMessage: "Contact Karvaahh for current fares.",
  fares: [
    { icon: "plane", title: "One-way & return fares", text: "Quoted live for your date, route and passenger count — in INR, NPR or USD on request." },
    { icon: "file", title: "Currency & taxes", text: "We show the total the airline charges, with taxes, fees and airport charges itemised in your written quote." },
    { icon: "luggage", title: "Cabin & checked baggage", text: "Allowances depend on the airline and fare brand (some basic fares are cabin-bag only). Your quote states the exact allowance." },
    { icon: "calendar", title: "Fare conditions", text: "Change and cancellation rules differ by fare brand. We share them in writing before you pay." },
  ],
  documents: {
    title: "ID & Travel Documents",
    intro: "Domestic Indian flights and India–Nepal flights have different document rules. Always confirm with the airline and the official sources below before travel.",
    groups: [
      {
        icon: "passport",
        title: "Domestic flights within India",
        text: "Carry a valid government-issued photo ID that matches your booking name.",
        points: [
          "Indian nationals: an accepted government photo ID (for example passport, Aadhaar, voter ID or driving licence)",
          "Foreign nationals: passport with a valid Indian visa or e-Visa",
          "DigiYatra face-based entry is optional at participating airports",
        ],
      },
      {
        icon: "flag",
        title: "Flights between India and Nepal",
        text: "These are international flights with immigration and customs at both ends.",
        points: [
          "Indian citizens: check the accepted documents (passport or voter ID) with the Embassy of India, Kathmandu and your airline",
          "Nepali citizens: check accepted documents with your airline and Nepal's Department of Immigration",
          "Other nationalities: passport plus a Nepal visa (and an Indian visa when entering India)",
        ],
      },
      {
        icon: "clock",
        title: "Booking & check-in",
        text: "Book in the exact name on your ID and check in online where the airline allows it.",
        points: [
          "Check the airline's counter-closing time — international flights close earlier than domestic",
          "Children and infants follow each airline's own ID and fare rules",
          "Re-check your flight status on the day of travel",
        ],
      },
    ],
    sources: [
      { label: "Embassy of India, Kathmandu", href: "https://www.indembkathmandu.gov.in" },
      { label: "Department of Immigration, Nepal", href: "https://www.immigration.gov.np" },
      { label: "Indian e-Visa", href: "https://indianvisaonline.gov.in" },
      { label: "DigiYatra", href: "https://www.digiyatra.com" },
    ],
  },
  ctaMessage: "Hello Karvaahh, please share current fares for my flight.",
};

/* ---------- Delays & cancellations ---------- */

export const disruptions: DisruptionData = {
  title: "Weather, Delays & Cancellations",
  intro: "A little planning keeps a delayed flight from becoming a missed holiday.",
  items: [
    { icon: "cloud", title: "Weather", text: "North India can see dense winter fog (roughly December–January), the monsoon brings storms from around June to September, and Leh, Srinagar and Kathmandu are affected by mountain weather." },
    { icon: "calendar", title: "Schedule changes", text: "Airlines revise timetables seasonally and sometimes at short notice. We watch your booking and tell you of any change we are notified of." },
    { icon: "route", title: "Missed connections", text: "On a single ticket the airline is responsible for rebooking you; on separate tickets it usually is not. Book through-tickets where you can." },
    { icon: "shield", title: "Refunds & rescheduling", text: "What you get back depends on the fare rules, the airline's policy, applicable regulations and why the flight changed. We never promise a refund the rules don't give." },
    { icon: "luggage", title: "Baggage & check-in", text: "Weigh bags before leaving, carry valuables and medicines in your cabin bag, and follow airline rules on power banks and liquids." },
    { icon: "clock", title: "Layover buffers", text: "Allow generous time for self-transfers, especially between domestic and international terminals or when connecting to Kathmandu — we suggest at least 3–4 hours on separate tickets." },
  ],
  note: "Passenger rights for flights in India are set out in the DGCA's passenger charter; each airline's conditions of carriage apply.",
  sources: [
    { label: "DGCA", href: "https://www.dgca.gov.in" },
    { label: "AirSewa", href: "https://airsewa.gov.in" },
  ],
};

/* ---------- Page ---------- */

export const domesticIndiaFlightsPage: HelicopterTour = {
  title: "Domestic India Flights",
  slug: "domestic-india-flights",
  path: "/activities/flights/domestic-india-flights",
  breadcrumbLabel: "Domestic India Flights",
  collection: { label: "Domestic Flights" },
  description:
    "A guide to India's major domestic flight routes and the nonstop flights between India and Kathmandu — airlines, approximate flight times and distances, passenger documents and booking help from Karvaahh.",
  touristType: ["Indian travellers", "Nepalese travellers", "International visitors", "Pilgrims", "Families", "Business travellers"],

  seo: {
    title: "Domestic India Flights & Routes | Karvaahh",
    socialTitle: "Domestic India Flights & India–Kathmandu Routes",
    description:
      "Explore India's domestic flight routes, airlines, direct connections, approximate flight times, fares, and Kathmandu–India flight options with Karvaahh.",
    keywords: [
      "Domestic India flights",
      "India flight routes",
      "Delhi to Kathmandu flight",
      "India to Nepal direct flights",
      "Varanasi Kathmandu flight",
      "Mumbai Kathmandu flight",
      "Bengaluru Kathmandu flight",
      "Kolkata Kathmandu flight",
      "Delhi Leh flight",
      "Mumbai Goa flight",
    ],
    ogImage: redFortDelhi,
  },

  duration: "Approx. 50 min – 3 h per sector",
  elevation: "—",
  startingPoint: "Delhi, Mumbai, Bengaluru & other Indian cities",
  endingPoint: "Destinations across India & Kathmandu",
  region: "India & Nepal",
  bestSeason: "Year-round (weather-dependent)",
  transportation: "Scheduled commercial flights",
  tourTypes: "Flight booking & itinerary planning",
  groupSize: "Any",
  landingNote: "Scheduled airline services",

  labels: { nav: { faqs: "FAQs", book: "Enquire" }, related: "Plan the Trip", relatedTitle: "Tours to Pair with Your Flight" },
  stickyCta: { title: "India Flights", desktop: "Get a Fare Quote", mobile: "Enquire Now" },

  hero: {
    badge: "Karvaahh • India & Nepal Flight Guide",
    badgeIcon: "plane",
    titleLead: "Domestic India",
    titleAccent: "Flights & Routes",
    subtitle: "From Delhi to Leh, Mumbai to Goa — and nonstop to Kathmandu",
    description:
      "Find the airlines, approximate flight times and distances for India's key routes, see which Indian cities fly nonstop to Kathmandu, and let Karvaahh quote and book the right flight.",
    image: redFortDelhi,
    imageCaption: "Pictured: the Red Fort, Delhi",
    primaryCta: { label: "Get a Fare Quote" },
    secondaryCta: { label: "India–Nepal Flights", href: "#india-nepal" },
    whatsappCta: "WhatsApp Us",
    flightPath: true,
    strip: [],
    trust: [
      { icon: "plane", label: "Major Indian Routes" },
      { icon: "flag", label: "India ↔ Kathmandu" },
      { icon: "route", label: "Multi-City Planning" },
      { icon: "headset", label: "Fare Quotes on Request" },
    ],
  },

  bookingWidget: {
    destination: "India & Kathmandu",
    departures: ["Delhi (DEL)", "Mumbai (BOM)", "Bengaluru (BLR)", "Kolkata (CCU)", "Varanasi (VNS)", "Kathmandu (KTM)", "Other city"],
    tourTypes: ["Domestic India flight", "India ↔ Kathmandu flight", "Multi-city itinerary"],
    travelerOptions: ["1 Passenger", "2 Passengers", "3 Passengers", "4 Passengers", "5 Passengers", "6+ Passengers"],
    defaults: { message: "I'd like a fare quote for a flight." },
    labels: { departure: "Flying from", tourType: "Trip" },
  },

  quickFacts: [
    { icon: "mapPin", label: "Major hubs", value: "11 Indian cities" },
    { icon: "flag", label: "Nonstop to Kathmandu", value: "5 Indian cities" },
    { icon: "clock", label: "India–KTM flight time", value: "~50 min – 3 h" },
    { icon: "calendar", label: "Last reviewed", value: "Oct 2026" },
  ],

  whyHelicopter: { title: "", intro: "", items: [] },

  route: {
    title: "Key routes",
    intro: "",
    note: "",
    stops: [
      { name: "Delhi (DEL)", detail: "Hub", mode: "landing" },
      { name: "Mumbai (BOM)", detail: "Hub", mode: "landing" },
      { name: "Bengaluru (BLR)", detail: "Hub", mode: "landing" },
      { name: "Kolkata (CCU)", detail: "Hub", mode: "landing" },
      { name: "Varanasi (VNS)", detail: "Gateway", mode: "landing" },
      { name: "Kathmandu (KTM)", detail: "Nepal", mode: "landing" },
    ],
  },

  options: { title: "", intro: "", note: "", items: [] },
  inclusions: [],
  exclusions: [],
  safety: { title: "", intro: "", points: [] },
  seasons: { title: "", intro: "", items: [], note: "" },
  travelerTypes: { title: "", intro: "", items: [] },
  gallery: { title: "", intro: "", items: [] },
  trust: { title: "", intro: "", points: [] },

  faqs: [
    { question: "Which Indian cities have direct flights to Kathmandu?", answer: "Nonstop services are listed from Delhi, Mumbai, Bengaluru, Kolkata and Varanasi. Operators and schedules change, so we confirm the current nonstop options for your date before booking." },
    { question: "How long is the flight from Delhi to Kathmandu?", answer: "Roughly 1 hour 45 minutes in the air for the 815 km (straight-line) sector. Allow extra time for international check-in and immigration." },
    { question: "Is there a flight from Varanasi to Kathmandu?", answer: "Yes. Buddha Air publishes a nonstop Kathmandu–Varanasi service three times a week (Monday, Wednesday and Friday), taking about 50 minutes. Check the airline for the current schedule." },
    { question: "Do I need a passport to fly from India to Nepal?", answer: "India–Nepal flights are international. Indian citizens should check the documents accepted for air travel (passport or voter ID) with the Embassy of India in Kathmandu and the airline; other nationalities need a passport and a Nepal visa." },
    { question: "What ID do I need for a domestic flight in India?", answer: "A valid government-issued photo ID matching your booking name. Foreign nationals use their passport. Confirm the accepted list with your airline." },
    { question: "How much is a domestic flight in India?", answer: "Fares vary daily with the route, date, fare brand and demand. Contact Karvaahh for current fares — we send a written quote with taxes and baggage." },
    { question: "Which airlines fly domestic routes in India?", answer: "Major carriers include IndiGo, Air India, Air India Express and Akasa Air, alongside regional airlines on smaller routes." },
    { question: "Are Leh and Srinagar flights affected by weather?", answer: "Yes. Mountain weather can delay or cancel flights, and Leh flights generally operate in the morning. Keep a buffer day when connecting onward." },
    { question: "Will I get a refund if my flight is cancelled?", answer: "It depends on the fare rules, the airline's policy, applicable regulations and the reason for the cancellation. We explain your options and help with the airline." },
    { question: "Can Karvaahh book a multi-city India and Nepal itinerary?", answer: "Yes. We plan and book combined flight, hotel and tour itineraries across India and Nepal." },
  ],

  cta: {
    title: "Tell Us Where You're Flying.",
    text: "Share your route, date and passenger count — we'll check current fares, baggage and connections and send you a clear written quote.",
    image: swayambhuKathmandu,
    animated: true,
    primaryLabel: "Get a Fare Quote",
    primaryHref: "#book",
    quoteLabel: "Email Us",
    whatsappLabel: "WhatsApp Us",
    planMessage: "Hello Karvaahh, I'd like a fare quote for a flight in India / to Kathmandu.",
    quoteSubject: "Fare enquiry: Domestic India / India–Kathmandu flight",
  },

  enquiry: {
    title: "Request a Fare Quote",
    intro: "Share your route and date. We check live fares and reply with the options, baggage and fare conditions.",
    hotelPlaceholder: "Route, e.g. Delhi → Kathmandu",
    options: {
      passengers: ["1 Passenger", "2 Passengers", "3 Passengers", "4 Passengers", "5 Passengers", "6+ Passengers"],
      airlines: ["No preference", "IndiGo", "Air India", "Air India Express", "Akasa Air", "Nepal Airlines", "Buddha Air", "Other (mention in message)"],
      times: ["Any time", "Morning", "Afternoon", "Evening"],
      currencies: ["INR", "NPR", "USD"],
    },
  },

  relatedTours: [
    { title: "Nepal & India Combined Tours", text: "Kathmandu, Varanasi, Lumbini and more on one itinerary.", href: "/packages/nepal-india-combined-tours", image: swayambhuKathmandu },
    { title: "Leh–Ladakh & Spiti Circuit", text: "Fly to Leh and explore the high Himalaya.", href: "/packages/leh-ladakh-spiti-circuit" },
    { title: "Jammu & Kashmir", text: "Srinagar's lakes and Kashmir's valleys.", href: "/packages/jammu-kashmir" },
    { title: "North India Tours", text: "Delhi, Agra, Rajasthan and Varanasi.", href: "/packages/north-india", image: rajasthan },
    { title: "Coastal South India", text: "Goa, Kerala and the southern coast.", href: "/packages/coastal-getaways-of-south-india" },
    { title: "Kathmandu & Bagmati", text: "Heritage squares and stupas in Nepal's capital.", href: "/destinations/bagmati-province", image: kathmanduValley },
    { title: "Mountain Scenic Flight", text: "See Everest from the air on a morning flight from Kathmandu.", href: "/activities/domestic-flights/mountain-scenic" },
    { title: "Northeast India", text: "Guwahati, Shillong, Sikkim and beyond.", href: "/packages/northeast-india" },
    { title: "Varanasi & Kashi", text: "Pair the Varanasi–Kathmandu flight with the ghats of Kashi.", href: "/packages/nepal-india-combined-tours", image: varanasiGhats },
  ],

  layout: ["hero", "stats-bar", "nav", "slot:routes", "slot:india-nepal", "slot:fares", "slot:delays", "faq", "cta", "enquiry", "related"],
};
