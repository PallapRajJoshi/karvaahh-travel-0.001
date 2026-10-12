/* ============================================================
   HIMALAYAN MOUNTAIN SCENIC FLIGHT — DESTINATION DATA
   ------------------------------------------------------------
   Sunrise scenic flight along the Himalaya from Kathmandu
   (Langtang → Gaurishankar → Everest), with private helicopter
   and Pokhara (Annapurna) options.

   CONTENT RULES: no prices, schedules or guaranteed views.
   Peak heights are official summit heights; flight times are
   samples. Aircraft type depends on the option chosen.
   ============================================================ */

import type { HelicopterTour } from "@/components/activities/experience/product-types";
import { relatedTours } from "./catalog";
import { annapurnaRange, cholatse, everestDawn, gokyo, kathmanduValley, khumbuSunrise, langtangHimal } from "./images";
import { beforeYouFly, karvaahhTrust, standardExclusions, standardTravelerTypes } from "./shared";

export const mountainScenicFlight: HelicopterTour = {
  title: "Himalayan Mountain Scenic Flight",
  slug: "mountain-scenic-flight",
  path: "/activities/helicopter-tours/mountain-scenic-flight",
  breadcrumbLabel: "Mountain Scenic Flight",
  description:
    "An early-morning scenic flight from Kathmandu along the Himalaya, with views of the Langtang range, Gaurishankar and the Everest massif, weather permitting, plus private helicopter and Annapurna options.",
  touristType: ["Short-stay travellers", "Families", "Senior travellers", "Photographers", "Couples"],

  seo: {
    title: "Himalayan Mountain Scenic Flight from Kathmandu | Karvaahh",
    socialTitle: "Mountain Scenic Flight – See Everest and the Himalaya at Sunrise",
    description:
      "See Everest, Lhotse, Makalu and the Himalayan panorama on a sunrise mountain scenic flight from Kathmandu. Shared seats, private helicopter and Annapurna options with Karvaahh.",
    keywords: ["Mountain Scenic Flight", "Everest Mountain Flight", "Everest Scenic Flight from Kathmandu", "Himalayan Scenic Flight", "Kathmandu Mountain Flight", "Helicopter Scenic Flight Nepal"],
    ogImage: everestDawn,
  },

  duration: "Sample: about 1 hour (fixed-wing) or longer by helicopter",
  elevation: "Aerial views only",
  startingPoint: "Kathmandu",
  endingPoint: "Kathmandu",
  region: "Central & Eastern Himalaya",
  bestSeason: "Autumn & Spring",
  transportation: "Aircraft or helicopter (by option)",
  tourTypes: "Shared seat / Private",
  groupSize: "Subject to aircraft capacity",
  landingNote: "Scenic flight; no landing on the standard option",

  hero: {
    badge: "Scenic Flight • Everest • Himalaya",
    titleLead: "Himalayan Mountain",
    titleAccent: "Scenic Flight",
    description:
      "Rise above the clouds at sunrise and fly along the roof of the world — from the Langtang range and Gaurishankar to Everest, Lhotse and Makalu.",
    image: everestDawn,
    video: "/videos/koshi/everes-heli-view.mp4",
    secondaryCta: { label: "Explore the Journey", href: "#journey" },
    strip: [
      { label: "From", value: "Kathmandu" },
      { label: "Duration", value: "About 1 Hour (Sample)" },
      { label: "Highlight", value: "Everest, 8,849 m" },
      { label: "Experience", value: "Shared / Private" },
    ],
    trust: [
      { icon: "sun", label: "Sunrise Departures" },
      { icon: "users", label: "Suitable for All Ages" },
      { icon: "cloud", label: "Weather-Based Operations" },
      { icon: "helicopter", label: "Private Helicopter Option" },
    ],
  },

  bookingWidget: {
    destination: "Himalayan Panorama",
    departures: ["Kathmandu", "Pokhara (Annapurna option)"],
    tourTypes: ["Mountain Flight Seat", "Private Helicopter Scenic Flight", "Annapurna Panorama Flight"],
  },

  quickFacts: [
    { icon: "plane", label: "Departure", value: "Kathmandu" },
    { icon: "mountainSnow", label: "Views", value: "Langtang to Everest" },
    { icon: "compass", label: "Region", value: "Central & Eastern Himalaya" },
    { icon: "clock", label: "Duration", value: "About 1 Hour (sample)", note: "Standard fixed-wing option" },
    { icon: "sun", label: "Departure time", value: "Early morning" },
    { icon: "leaf", label: "Best Season", value: "Autumn / Spring" },
    { icon: "users", label: "Flight Type", value: "Shared seat / Private" },
    { icon: "mapPin", label: "Landing", value: "None on standard option" },
  ],

  editorial: {
    eyebrow: "The Roof of the World",
    title: "The Himalaya at Sunrise, From Your Window",
    paragraphs: [
      "Within minutes of leaving Kathmandu, the [[Himalaya]] fills the horizon. The flight heads east along the range, past the Langtang peaks, Dorje Lakpa and Gaurishankar, towards the giants of the Khumbu.",
      "On a clear morning, [[Everest]] rises among Lhotse, Nuptse, Makalu and Cho Oyu, lit gold by the early sun. It is the easiest way to see the world's highest mountain: no trekking and no altitude.",
      "Choose a seat on a fixed-wing mountain flight, or a [[private]] helicopter flight with more time and flexibility, all subject to the weather on the day.",
    ],
    image: cholatse,
    inset: khumbuSunrise,
    fact: { label: "Mount Everest", value: "8,849 m", text: "The world's highest mountain, weather permitting." },
  },

  stats: {
    note: "Official summit heights of peaks commonly seen on the Everest-side flight, weather permitting.",
    items: [
      { value: 8849, suffix: " m", label: "Mount Everest" },
      { value: 8516, suffix: " m", label: "Lhotse" },
      { value: 8485, suffix: " m", label: "Makalu" },
      { value: 8188, suffix: " m", label: "Cho Oyu" },
    ],
  },

  whyHelicopter: {
    title: "Why Take a Mountain Scenic Flight?",
    intro: "The Himalayan panorama in about an hour.",
    items: [
      { title: "See Everest without trekking", text: "Views of the world's highest mountain from the air." },
      { title: "Suitable for all ages", text: "No walking, no altitude, no special fitness." },
      { title: "Short and early", text: "Back in Kathmandu before breakfast on most days." },
      { title: "A sweeping panorama", text: "Langtang, Gaurishankar and the Khumbu in one flight." },
      { title: "Private option", text: "Charter a helicopter for more time and flexibility." },
      { title: "Annapurna too", text: "Panorama flights from Pokhara on request." },
    ],
  },

  journey: {
    title: "Along the Roof of the World",
    intro: "An illustrative sunrise flight east from Kathmandu.",
    note: "Illustrative only. The flight path and peaks visible depend on the operator, aircraft, air traffic and weather.",
    stages: [
      { name: "Kathmandu", text: "Early take-off with the Himalaya on the northern horizon.", image: kathmanduValley, elevation: "Approx. 1,400 m" },
      { name: "Langtang Range", short: "Langtang", text: "The Langtang peaks and Dorje Lakpa to the north.", image: langtangHimal },
      { name: "Above the Clouds", short: "Clouds", text: "Sunrise breaks over a sea of cloud as Gaurishankar appears.", image: khumbuSunrise },
      { name: "The Khumbu", short: "Khumbu", text: "Sharp peaks and glaciers of Sagarmatha National Park.", image: cholatse },
      { name: "Everest", text: "Everest, Lhotse and Nuptse, with Makalu to the east.", image: everestDawn, elevation: "8,849 m" },
    ],
  },

  timeline: {
    title: "Sample Mountain Flight Morning",
    note: "Sample timing only — departure times depend on the operator, air traffic and weather. Flights may be delayed or cancelled when the mountains are cloudy.",
    blocks: [
      { time: "05:30", title: "Hotel Pickup", text: "Early pickup from your Kathmandu hotel, if included." },
      { time: "06:00", title: "Domestic Airport Check-in", text: "Check-in and security at Kathmandu's domestic terminal." },
      { time: "06:30", title: "Take-off", text: "Depart east along the Himalaya, weather permitting." },
      { time: "07:00", title: "Everest Views", text: "The flight turns near the Everest massif for views on both sides." },
      { time: "07:30", title: "Return to Kathmandu", text: "Estimated landing, depending on the operator and conditions." },
    ],
  },

  route: {
    title: "The Flight Route",
    intro: "An illustrative scenic route from Kathmandu.",
    note: "The standard scenic flight does not land. Routes depend on the operator, aircraft and air traffic.",
    stops: [
      { name: "Kathmandu", detail: "Departure point", mode: "landing" },
      { name: "Langtang & Dorje Lakpa", detail: "Aerial views", mode: "aerial" },
      { name: "Gaurishankar", detail: "Aerial views", mode: "aerial" },
      { name: "Everest massif", detail: "Aerial views, weather permitting", mode: "aerial" },
      { name: "Kathmandu", detail: "Return", mode: "landing" },
    ],
  },

  seasons: {
    title: "Best Time for a Mountain Scenic Flight",
    intro: "Clear, dry mornings give the best views. Flights are often rescheduled when the mountains are cloudy.",
    note: "Scenic flights are highly weather dependent. Availability, route and timing are subject to safety, aviation regulations and operator decisions.",
    items: [
      { name: "Autumn", months: "October – November", rating: "Best visibility", icon: "leaf", text: "Crisp, clear post-monsoon air." },
      { name: "Winter", months: "December – February", rating: "Often clear", icon: "snow", text: "Frequently clear mornings, though hazy at times." },
      { name: "Spring", months: "March – May", rating: "Good", icon: "sun", text: "Generally good, with haze building later in spring." },
      { name: "Monsoon", months: "June – September", rating: "Limited", icon: "rain", text: "Clouds often hide the peaks; flights may not operate." },
    ],
  },

  departures: {
    title: "Choose Your Date",
    intro: "Scenic flights operate on most clear mornings in season.",
    emptyTitle: "Daily flights, subject to weather",
    emptyText: "Tell us your preferred date and we will confirm seats or a private flight with the operator.",
    emptyCta: "Request a date",
    dates: [],
  },

  options: {
    title: "Choose Your Scenic Flight",
    intro: "We confirm availability, inclusions and the current price with you before booking.",
    note: "Prices depend on the operator, aircraft, season and the selected option.",
    ctaLabel: "Request Current Price",
    items: [
      {
        name: "Mountain Flight Seat",
        basis: "Per seat",
        price: "Price on Request",
        points: ["Window seat on a fixed-wing mountain flight", "About 1 hour (sample)", "Early-morning departure"],
        idealFor: "Families, seniors and short stays",
        featured: true,
        image: everestDawn,
        whatsappMessage: "Hello Karvaahh, I'd like seats on the Everest mountain flight. Please share the price and availability.",
      },
      {
        name: "Private Helicopter Scenic Flight",
        basis: "Private charter",
        price: "Price on Request",
        points: ["Whole helicopter for your group", "Flexible timing and route", "Premium experience"],
        idealFor: "Couples, families and photographers",
        image: cholatse,
        whatsappMessage: "Hello Karvaahh, I'd like a private helicopter scenic flight. Please share the current price.",
      },
      {
        name: "Annapurna Panorama Flight",
        basis: "From Pokhara",
        price: "Enquire for details",
        points: ["Annapurna range and Machhapuchhre", "Departure from Pokhara", "Subject to operator availability"],
        idealFor: "Travellers staying in Pokhara",
        image: annapurnaRange,
        whatsappMessage: "Hello Karvaahh, I'd like an Annapurna panorama flight from Pokhara. Please share the details.",
      },
    ],
  },

  travelerTypes: { title: "Who Is This For?", intro: "The easiest way to see the Himalaya — for almost everyone.", items: standardTravelerTypes },

  inclusions: [
    { text: "Scenic flight according to the selected option", status: "included" },
    { text: "Himalayan sightseeing from the air", status: "included" },
    { text: "Hotel–airport transfers where included", status: "package" },
    { text: "Airport taxes / fees where included", status: "package" },
    { text: "Travel assistance where specified", status: "package" },
  ],
  exclusions: standardExclusions,

  safety: {
    eyebrow: "Safety First",
    title: "Before You Fly",
    intro: "Please read before booking.",
    points: beforeYouFly({
      permits: "No trekking permits are needed for the scenic flight. Carry the ID required for domestic flights.",
      landing: "The standard scenic flight does not land; private helicopter landings are possible only where permitted.",
      altitude: "There is no time spent on the ground at altitude. Tell us about any medical conditions when booking.",
    }),
  },

  trust: karvaahhTrust,

  gallery: {
    title: "Photo Gallery",
    intro: "Peaks you may see from the air. Tap any photo to view it larger.",
    items: [
      { image: everestDawn, caption: "Everest, Nuptse and the Khumbu Glacier" },
      { image: cholatse, caption: "Cholatse and Taboche in the Khumbu" },
      { image: khumbuSunrise, caption: "Sunrise above the clouds" },
      { image: gokyo, caption: "Gokyo Lake and the Ngozumpa Glacier" },
      { image: langtangHimal, caption: "The Langtang Himal" },
      { image: annapurnaRange, caption: "The Annapurna range from Pokhara" },
    ],
  },

  video: {
    title: "The Himalaya From Above",
    intro: "A moving glimpse of the peaks seen from the air.",
    frames: [
      { image: kathmanduValley, caption: "Kathmandu at dawn" },
      { image: langtangHimal, caption: "The Langtang range" },
      { image: khumbuSunrise, caption: "Above the clouds" },
      { image: cholatse, caption: "The Khumbu" },
      { image: everestDawn, caption: "Everest" },
    ],
  },

  faqs: [
    { question: "What is the mountain scenic flight?", answer: "An early-morning flight from Kathmandu along the Himalaya for views of Everest and neighbouring peaks, returning without landing." },
    { question: "Is it a helicopter or an aeroplane?", answer: "The standard mountain flight uses a fixed-wing aircraft; a private helicopter scenic flight is also available." },
    { question: "How long is the flight?", answer: "The standard flight takes about an hour (sample). Helicopter flights vary with the route chosen." },
    { question: "Will I definitely see Everest?", answer: "Not always. Views depend on the weather; flights may be delayed or rescheduled when the mountains are cloudy." },
    { question: "Is it suitable for children and seniors?", answer: "Yes. No walking or altitude exposure is involved on the standard flight." },
    { question: "What happens if the flight is cancelled?", answer: "Weather cancellations are usually rescheduled or refunded according to the operator's terms; we confirm these at booking." },
    { question: "Can I fly from Pokhara?", answer: "Annapurna panorama flights from Pokhara can be arranged on request, subject to operator availability." },
    { question: "What is the best season?", answer: "Autumn and winter often have the clearest mornings; spring is good but hazier." },
  ],

  cta: {
    title: "See Everest at Sunrise",
    text: "The roof of the world, in about an hour from Kathmandu. Book your Himalayan scenic flight with Karvaahh.",
    image: everestDawn,
    animated: true,
    primaryLabel: "Book Scenic Flight",
    primaryHref: "#book",
    quoteLabel: "Get Custom Quote",
    whatsappLabel: "WhatsApp Us",
    planMessage: "Hello Karvaahh, I'd like to book a Himalayan mountain scenic flight.",
    quoteSubject: "Quote request: Himalayan Mountain Scenic Flight",
  },

  relatedTours: relatedTours("everest-base-camp", "langtang", "annapurna", "gosaikunda", "kailash-aerial-darshan", "upper-mustang"),
};
