/* ============================================================
   KAILASH AERIAL DARSHAN — DESTINATION DATA
   ------------------------------------------------------------
   A darshan (sacred viewing) flight from Nepalgunj towards the
   Nepal–Tibet border, viewing Mount Kailash and Lake Mansarovar
   from the air without landing in Tibet.

   ► OPERATIONAL NOTE — verify before publishing: this service is
     offered only when an operator runs it with all approvals in
     place. Confirm the operator, aircraft type, season and
     documents, then update the wording below if needed.

   CONTENT RULES: no prices, schedules or guaranteed views.
   Religious beliefs are presented as tradition. Elevations are
   approximate.
   ============================================================ */

import type { HelicopterTour } from "@/components/activities/experience/product-types";
import { relatedTours } from "./catalog";
import { kailash, pending } from "./images";
import { beforeYouFly, karvaahhTrust, standardExclusions, standardTravelerTypes } from "./shared";

const mansarovar = pending("Lake Mansarovar", "Lake Mansarovar beneath snow-covered ridges on the Tibetan plateau");
const humla = pending("Humla", "The remote Humla hills of far-western Nepal");

export const kailashAerialDarshanTour: HelicopterTour = {
  title: "Kailash Aerial Darshan",
  slug: "kailash-aerial-darshan",
  path: "/activities/helicopter-tours/kailash-aerial-darshan",
  breadcrumbLabel: "Kailash Aerial Darshan",
  description:
    "A darshan flight from Nepalgunj towards the Nepal–Tibet border to view Mount Kailash and Lake Mansarovar from the air, without landing in Tibet, operated only when an operator and all approvals are in place.",
  touristType: ["Pilgrims", "Senior travellers", "Families", "Spiritual travellers"],

  seo: {
    title: "Kailash Aerial Darshan Flight from Nepalgunj | Karvaahh",
    socialTitle: "Kailash Aerial Darshan – Sacred Views of Mount Kailash From the Air",
    description:
      "Take darshan of Mount Kailash and Lake Mansarovar from the air on a flight from Nepalgunj, without landing in Tibet. Availability, documents and details confirmed by Karvaahh before booking.",
    keywords: ["Kailash Aerial Darshan", "Kailash Darshan Flight", "Kailash Mansarovar Darshan Flight", "Kailash Darshan from Nepalgunj", "Mount Kailash Flight"],
    ogImage: kailash,
  },

  duration: "Same day (flight duration confirmed by the operator)",
  elevation: "Aerial views only",
  startingPoint: "Nepalgunj",
  endingPoint: "Nepalgunj",
  region: "Far-west Nepal / Nepal–Tibet border",
  bestSeason: "Seasonal — confirmed at enquiry",
  transportation: "Aircraft type depends on the operator",
  tourTypes: "Seat / Charter (as offered)",
  groupSize: "Subject to aircraft capacity",
  landingNote: "No landing in Tibet; views depend on weather",

  hero: {
    badge: "Darshan Flight • Kailash • Mansarovar",
    titleLead: "Kailash",
    titleAccent: "Aerial Darshan",
    description:
      "Take darshan of sacred Mount Kailash and Lake Mansarovar from the sky — a flight from Nepalgunj towards the Tibetan border that returns the same day, without landing in Tibet.",
    image: kailash,
    video: "/videos/spritual-journeys/kailash-mansarovar/kailash-mansarovar-hero.mp4",
    primaryCta: { label: "Check Availability" },
    secondaryCta: { label: "How It Works", href: "#route" },
    strip: [
      { label: "From", value: "Nepalgunj" },
      { label: "Duration", value: "Same Day" },
      { label: "Landing", value: "No landing in Tibet" },
      { label: "Availability", value: "Confirmed at Enquiry" },
    ],
    trust: [
      { icon: "heart", label: "Sacred Darshan" },
      { icon: "users", label: "Suitable for Seniors" },
      { icon: "cloud", label: "Weather-Based Operations" },
      { icon: "headset", label: "Yatra Assistance" },
    ],
  },

  bookingWidget: {
    destination: "Kailash Darshan",
    departures: ["Nepalgunj", "Lucknow (via Nepalgunj, on request)"],
    tourTypes: ["Darshan Flight Seat", "Group / Charter"],
    defaults: { message: "I am interested in the Kailash Aerial Darshan flight." },
  },

  quickFacts: [
    { icon: "plane", label: "Departure", value: "Nepalgunj" },
    { icon: "mountainSnow", label: "Darshan", value: "Mount Kailash & Lake Mansarovar" },
    { icon: "compass", label: "Region", value: "Nepal–Tibet border" },
    { icon: "clock", label: "Duration", value: "Same day", note: "Flight time confirmed by the operator" },
    { icon: "mapPin", label: "Landing", value: "No landing in Tibet" },
    { icon: "sun", label: "Season", value: "Confirmed at enquiry" },
    { icon: "helicopter", label: "Aircraft", value: "Depends on operator" },
    { icon: "passport", label: "Documents", value: "Confirmed at booking", note: "Passport / ID required" },
  ],

  editorial: {
    eyebrow: "Darshan From the Sky",
    title: "Sacred Kailash, Seen From the Air",
    paragraphs: [
      "For Hindus, Buddhists, Jains and followers of Bön, Mount Kailash is among the most [[sacred]] mountains on Earth. In Hindu tradition it is revered as the abode of Lord Shiva, and nearby Lake Mansarovar is considered deeply purifying.",
      "The full Kailash Mansarovar Yatra crosses into Tibet and takes many days at high altitude. The aerial darshan offers a [[gentler]] way to receive darshan: a flight from Nepalgunj towards the border that views the mountain and lake from the air.",
      "Because the flight does not land in Tibet, it can suit [[senior]] pilgrims and families with limited time. Views depend entirely on the weather, and the service runs only when an operator and approvals are in place.",
    ],
    image: kailash,
    inset: mansarovar,
    fact: { label: "No landing", value: "Same-day", text: "Darshan from the air, returning to Nepalgunj." },
  },

  significance: {
    eyebrow: "Spiritual Significance",
    title: "Why Kailash Is Revered",
    intro: "Beliefs held by pilgrims of several faiths, as handed down in tradition.",
    items: [
      { name: "Mount Kailash", text: "Revered in Hindu tradition as the abode of Lord Shiva, and sacred to Buddhists, Jains and followers of Bön." },
      { name: "Lake Mansarovar", text: "Traditionally believed to cleanse and purify those who see or bathe in its waters." },
      { name: "Darshan", text: "Seeing a sacred presence with devotion is itself a blessing in Hindu tradition." },
    ],
  },

  whyHelicopter: {
    title: "Why Choose the Aerial Darshan?",
    intro: "Darshan of Kailash without the demands of the full yatra.",
    items: [
      { title: "No Tibet visa journey", text: "The flight returns without landing in Tibet; documents are confirmed at booking." },
      { title: "Gentle on the body", text: "No trekking or nights at extreme altitude." },
      { title: "Same-day return", text: "Fly out and back from Nepalgunj in a day." },
      { title: "Suitable for seniors", text: "A meaningful option for elders who cannot do the full yatra." },
      { title: "Sacred views", text: "Mount Kailash and Lake Mansarovar from the air, weather permitting." },
      { title: "Complete assistance", text: "Help with Nepalgunj arrival, documents and timings." },
    ],
  },

  route: {
    title: "How the Darshan Flight Works",
    intro: "An illustrative outline. The operator confirms the exact flight path and timing.",
    note: "The flight stays within permitted airspace and does not land in Tibet. Actual route, timing and views depend on the operator, weather and approvals.",
    modeLabels: { restricted: "Darshan from the air" },
    stops: [
      { name: "Nepalgunj", detail: "Departure point", mode: "landing" },
      { name: "Karnali & Humla hills", detail: "Scenic flight north", mode: "aerial" },
      { name: "Nepal–Tibet border region", detail: "Aerial approach", mode: "aerial" },
      { name: "Mount Kailash & Lake Mansarovar", detail: "Viewed from the air, weather permitting", mode: "restricted" },
      { name: "Nepalgunj", detail: "Return the same day", mode: "landing" },
    ],
  },

  pilgrimage: {
    eyebrow: "For Pilgrims",
    title: "A Darshan for Every Devotee",
    intro: "Many devotees long to see Kailash but cannot undertake the full yatra. The aerial darshan is designed for them.",
    points: [
      "No trekking and no overnight stays at extreme altitude",
      "Suitable for elders, with assistance on request",
      "Prayer and darshan time planned around the flight",
      "Can be combined with Pashupatinath or Muktinath darshan",
    ],
    image: kailash,
    ctaLabel: "Plan a Darshan Flight",
    ctaMessage: "Hello Karvaahh, I'd like to plan a Kailash aerial darshan flight. Please confirm availability.",
    note: "Views of Kailash depend entirely on the weather and cannot be guaranteed.",
  },

  seasons: {
    title: "When Does the Darshan Flight Operate?",
    intro: "The service is seasonal and weather dependent. We confirm current operating dates at enquiry.",
    note: "Flights are highly weather dependent. Availability, route and timing are subject to safety, aviation regulations, approvals and operator decisions.",
    items: [
      { name: "Spring", months: "April – June", rating: "Often operated", icon: "sun", text: "Generally clearer skies before the monsoon." },
      { name: "Monsoon", months: "July – August", rating: "Variable", icon: "rain", text: "Cloud often hides the mountain." },
      { name: "Autumn", months: "September – October", rating: "Clear views", icon: "leaf", text: "Crisp post-monsoon air, when operated." },
      { name: "Winter", months: "November – March", rating: "Limited", icon: "snow", text: "Cold, with limited or no operations." },
    ],
  },

  departures: {
    title: "Darshan Flight Dates",
    intro: "Dates are announced by the operator each season.",
    emptyTitle: "Dates are confirmed on enquiry",
    emptyText: "Tell us your preferred dates and number of pilgrims, and we will confirm whether the darshan flight is operating.",
    emptyCta: "Ask about dates",
    dates: [],
  },

  options: {
    title: "Darshan Flight Options",
    intro: "We confirm availability, documents, inclusions and the current price with you before booking.",
    note: "Prices depend on the operator, season, group size and the selected package.",
    ctaLabel: "Request Current Price",
    items: [
      {
        name: "Darshan Flight Seat",
        basis: "Per person",
        price: "Price on Request",
        points: ["Seat on an operated darshan flight", "Subject to availability", "Return to Nepalgunj"],
        idealFor: "Individual pilgrims and couples",
        featured: true,
        image: kailash,
        whatsappMessage: "Hello Karvaahh, I'd like seats on the Kailash aerial darshan flight. Please confirm availability and price.",
      },
      {
        name: "Group / Family Darshan",
        basis: "Group package",
        price: "Enquire for details",
        points: ["Coordinated group travel", "Nepalgunj arrangements", "Assistance for elders"],
        idealFor: "Families and pilgrim groups",
        whatsappMessage: "Hello Karvaahh, I'd like a group Kailash aerial darshan. Here are our details:",
      },
    ],
  },

  travelerTypes: {
    title: "Who Is This For?",
    intro: "For devotees and travellers who wish to see Kailash without the full yatra.",
    items: [
      { icon: "heart", title: "Pilgrims", text: "Receive darshan of Kailash and Mansarovar." },
      { icon: "users", title: "Senior Travellers", text: "No trekking or high-altitude nights." },
      { icon: "sun", title: "Families", text: "A shared spiritual journey in a single day." },
      ...standardTravelerTypes.filter((t) => t.title === "Photography Enthusiasts" || t.title === "Short-Stay Travellers"),
    ],
  },

  inclusions: [
    { text: "Darshan flight according to the selected package", status: "included" },
    { text: "Coordination with the operator", status: "included" },
    { text: "Nepalgunj transfers where included", status: "package" },
    { text: "Accommodation in Nepalgunj where included", status: "package" },
    { text: "Travel assistance where specified", status: "package" },
  ],
  exclusions: standardExclusions,

  safety: {
    eyebrow: "Safety First",
    title: "Before You Fly",
    intro: "Please read before booking.",
    points: beforeYouFly({
      permits: "The flight does not land in Tibet. Required documents (passport or accepted ID) are confirmed at booking.",
      landing: "There is no landing in Tibet. The flight returns to Nepalgunj.",
      route: "The exact flight path is set by the operator within permitted airspace and depends on weather and approvals.",
      altitude: "The aircraft flies at altitude; tell us about any medical conditions when booking.",
    }),
  },

  trust: karvaahhTrust,

  gallery: { title: "Photo Gallery", intro: "Scenes of Kailash and the journey.", items: [{ image: kailash, caption: "Mount Kailash at sunrise" }, { image: mansarovar, caption: "Lake Mansarovar" }, { image: humla, caption: "Humla" }] },

  faqs: [
    { question: "What is the Kailash Aerial Darshan?", answer: "A flight from Nepalgunj towards the Nepal–Tibet border to view Mount Kailash and Lake Mansarovar from the air, returning the same day without landing in Tibet." },
    { question: "Is the darshan flight always available?", answer: "No. It operates only in certain seasons and when an operator runs it with all approvals in place. We confirm availability before you book." },
    { question: "Do I need a Chinese visa?", answer: "Because the flight does not land in Tibet, the Tibet visa process for the full yatra does not apply. The documents you need are confirmed at booking." },
    { question: "Is the view of Kailash guaranteed?", answer: "No. Views depend entirely on the weather; cloud can hide the mountain." },
    { question: "Is it a helicopter or an aeroplane?", answer: "The aircraft type depends on the operator running the flight. We confirm it when you enquire." },
    { question: "Can senior citizens join?", answer: "Yes. There is no trekking. Please tell us about any medical conditions when booking." },
    { question: "How do I reach Nepalgunj?", answer: "By domestic flight from Kathmandu, or by road from Lucknow via the Rupaidiha–Nepalgunj border. We can help plan the journey." },
    { question: "Can I combine it with other pilgrimages?", answer: "Yes, for example with Pashupatinath in Kathmandu or Muktinath in Mustang." },
  ],

  cta: {
    title: "Receive Darshan of Sacred Kailash",
    text: "A gentle, same-day darshan of Mount Kailash and Lake Mansarovar from the sky. Let Karvaahh confirm availability for you.",
    image: kailash,
    animated: true,
    primaryLabel: "Check Availability",
    primaryHref: "#book",
    quoteLabel: "Get Custom Quote",
    whatsappLabel: "WhatsApp Us",
    planMessage: "Hello Karvaahh, I'd like to book the Kailash aerial darshan.",
    quoteSubject: "Quote request: Kailash Aerial Darshan",
  },

  relatedTours: relatedTours("kailash-mansarovar", "muktinath-temple", "gosaikunda", "rara", "mountain-scenic-flight", "upper-mustang"),
};
