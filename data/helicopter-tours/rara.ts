/* ============================================================
   RARA LAKE HELICOPTER TOUR — DESTINATION DATA
   ------------------------------------------------------------
   Helicopter journey to Rara Lake in Mugu (Karnali Province).

   IMAGES: no Rara photos exist in the project yet. Every image
   is a labelled placeholder (`pending`) — the hero shows an
   illustrated Himalayan lake scene and the gallery stays hidden
   until at least three real photos are added. Add `seo.ogImage`
   with the first real photo.

   CONTENT RULES: no prices, schedules or guaranteed landings.
   Elevations and areas are approximate.
   ============================================================ */

import type { HelicopterTour } from "@/components/activities/experience/product-types";
import { relatedTours } from "./catalog";
import { pending } from "./images";
import { beforeYouFly, karvaahhTrust, standardExclusions, standardInclusions, standardTravelerTypes } from "./shared";

const raraLake = pending("Rara Lake", "Rara Lake, Nepal's largest lake, surrounded by forested hills in Mugu, Karnali Province");
const raraForest = pending("Rara National Park", "Pine and juniper forest on the shore of Rara Lake");
const murma = pending("Murma Top", "The view over Rara Lake from Murma Top");

export const raraHelicopterTour: HelicopterTour = {
  title: "Rara Lake Helicopter Tour",
  slug: "rara",
  path: "/activities/helicopter-tours/rara",
  breadcrumbLabel: "Rara Lake",
  description:
    "A helicopter journey to Rara Lake, Nepal's largest lake, in the remote Karnali highlands of western Nepal, with aerial views of forested ridges and the lake, and landings only where permitted.",
  touristType: ["Nature lovers", "Photographers", "Couples", "Families", "Offbeat travellers"],

  seo: {
    title: "Rara Lake Helicopter Tour | Karvaahh",
    socialTitle: "Rara Lake Helicopter Tour – Nepal's Largest Lake by Air",
    description:
      "Fly to Rara Lake, Nepal's largest lake, in the remote Karnali region. Forested ridges, alpine meadows and a deep blue lake on a premium helicopter journey with Karvaahh.",
    keywords: ["Rara Lake Helicopter Tour", "Rara Helicopter Tour", "Rara Lake Tour by Helicopter", "Nepalgunj to Rara Helicopter", "Karnali Helicopter Tour"],
  },

  duration: "Same day or overnight (package dependent)",
  elevation: "Approx. 2,990 m (Rara Lake)",
  startingPoint: "Nepalgunj",
  endingPoint: "Nepalgunj",
  region: "Mugu, Karnali Province",
  bestSeason: "Spring & Autumn",
  transportation: "Helicopter",
  tourTypes: "Private / Custom",
  groupSize: "Subject to helicopter capacity and weight limits",
  landingNote: "Landing only at approved locations; never guaranteed",

  hero: {
    badge: "Helicopter Experience • Karnali • Nepal",
    titleLead: "Rara Lake",
    titleAccent: "Helicopter Tour",
    description:
      "Fly into the remote Karnali highlands to Rara Lake — a deep blue lake ringed by pine forest and alpine ridges, Nepal's largest and one of its most peaceful places.",
    image: raraLake,
    secondaryCta: { label: "View the Route", href: "#route" },
    strip: [
      { label: "From", value: "Nepalgunj" },
      { label: "Duration", value: "Package Dependent" },
      { label: "Lake elevation", value: "Approx. 2,990 m" },
      { label: "Experience", value: "Private / Custom" },
    ],
    trust: [
      { icon: "waves", label: "Nepal's Largest Lake" },
      { icon: "leaf", label: "Rara National Park" },
      { icon: "cloud", label: "Weather-Based Operations" },
      { icon: "route", label: "Customised Journeys" },
    ],
  },

  bookingWidget: {
    destination: "Rara Lake",
    departures: ["Nepalgunj", "Kathmandu (on request)"],
    tourTypes: ["Private Helicopter", "Custom Experience"],
  },

  quickFacts: [
    { icon: "helicopter", label: "Departure", value: "Nepalgunj" },
    { icon: "waves", label: "Destination", value: "Rara Lake" },
    { icon: "compass", label: "Region", value: "Mugu, Karnali Province" },
    { icon: "clock", label: "Duration", value: "Same day or overnight", note: "Package dependent" },
    { icon: "mountain", label: "Lake elevation", value: "Approx. 2,990 m" },
    { icon: "sun", label: "Best Season", value: "Spring / Autumn" },
    { icon: "users", label: "Flight Type", value: "Private / Custom" },
    { icon: "file", label: "Permits", value: "Package dependent", note: "National park fees may apply" },
  ],

  editorial: {
    eyebrow: "The Queen of Lakes",
    title: "Nepal's Largest Lake, in the Remote Karnali",
    paragraphs: [
      "High in the Mugu district of western Nepal, Rara Lake lies at around 2,990 m, a [[deep blue]] lake surrounded by forests of pine, spruce and juniper. It is Nepal's largest lake and the centrepiece of Rara National Park.",
      "Few travellers reach this corner of the Karnali, where [[quiet]] trails circle the shore and alpine ridges such as Murma Top look out over the water and distant snow peaks.",
      "Overland, the journey takes days. By helicopter, Rara becomes a [[remote]] escape you can reach in a day, where permits and weather allow.",
    ],
    image: raraLake,
    inset: raraForest,
    fact: { label: "Rara Lake", value: "≈2,990 m", text: "Nepal's largest lake, in Rara National Park." },
  },

  whyHelicopter: {
    title: "Why Fly to Rara?",
    intro: "One of Nepal's most remote beauty spots, made reachable.",
    items: [
      { title: "Remote made reachable", text: "Skip days of rough road and trail travel." },
      { title: "Nepal's largest lake", text: "Aerial views of the lake and its forested shores." },
      { title: "Peace and quiet", text: "A rarely visited corner of the Karnali highlands." },
      { title: "Forest and alpine scenery", text: "Pine forests, meadows and distant snow peaks." },
      { title: "Flexible plans", text: "Same-day visit or overnight stay, package dependent." },
      { title: "Private journeys", text: "Charter the whole helicopter for your group." },
    ],
  },

  highlights: {
    title: "Highlights of the Rara Journey",
    intro: "Landmarks of the Rara region, depending on weather and the chosen package.",
    items: [
      { name: "Rara Lake", text: "Nepal's largest lake, deep blue among forested hills.", elevation: "Approx. 2,990 m", image: raraLake },
      { name: "Rara National Park", text: "Forests of pine, spruce and juniper around the lake.", image: raraForest },
      { name: "Murma Top", text: "A ridge viewpoint over the lake and distant peaks.", image: murma },
      { name: "Karnali highlands", text: "Remote hills and valleys of western Nepal." },
    ],
  },

  route: {
    title: "The Flight Route",
    intro: "An illustrative route from Nepalgunj to Rara Lake.",
    note: "Actual route depends on the operator, weather and aviation restrictions. Departures from Kathmandu can be arranged on request.",
    stops: [
      { name: "Nepalgunj", detail: "Departure point", mode: "landing" },
      { name: "Karnali hills", detail: "Scenic flight north", mode: "aerial" },
      { name: "Rara Lake", detail: "Landing only where permitted", mode: "optional" },
      { name: "Nepalgunj", detail: "Return (same day or next day)", mode: "landing" },
    ],
  },

  seasons: {
    title: "Best Time for a Rara Lake Helicopter Tour",
    intro: "The lake changes colour with the seasons; clear weather is key for the flight.",
    note: "Helicopter flights are highly weather dependent. Flight availability, route and landing locations are subject to safety, aviation regulations and operator decisions.",
    items: [
      { name: "Spring", months: "March – May", rating: "Very good", icon: "sun", text: "Flowering forests and generally settled weather." },
      { name: "Monsoon", months: "June – August", rating: "Limited", icon: "rain", text: "Rain and cloud often disrupt flights." },
      { name: "Autumn", months: "September – November", rating: "Best visibility", icon: "leaf", text: "Clear skies and vivid lake colours." },
      { name: "Winter", months: "December – February", rating: "Cold", icon: "snow", text: "Snow is possible and conditions can be very cold." },
    ],
  },

  departures: {
    title: "Choose Your Date",
    intro: "Rara journeys are planned privately around your dates.",
    emptyTitle: "Journeys are arranged on request",
    emptyText: "Share your preferred date, group size and whether you'd like to stay overnight, and we will plan the journey with the operator.",
    emptyCta: "Request a date",
    dates: [],
  },

  options: {
    title: "Choose Your Rara Experience",
    intro: "We confirm availability, permits, inclusions and the current price with you before booking.",
    note: "Prices depend on season, group size, aircraft, permits and the selected package.",
    ctaLabel: "Request Current Price",
    items: [
      {
        name: "Private Day Flight",
        basis: "Private charter",
        price: "Price on Request",
        points: ["Whole helicopter for your group", "Same-day return", "Subject to weather"],
        idealFor: "Couples, families and photographers",
        featured: true,
        whatsappMessage: "Hello Karvaahh, I'd like a private Rara Lake helicopter day flight. Please share the current price.",
      },
      {
        name: "Rara Overnight Escape",
        basis: "Tailor-made",
        price: "Enquire for details",
        points: ["Fly in, stay near the lake", "Walks around the shore", "Accommodation subject to availability"],
        idealFor: "Nature lovers and slow travellers",
        whatsappMessage: "Hello Karvaahh, I'd like a Rara Lake overnight helicopter journey. Please share the details.",
      },
    ],
  },

  travelerTypes: { title: "Who Is This For?", intro: "For travellers looking for Nepal's quiet, remote side.", items: standardTravelerTypes },

  inclusions: standardInclusions,
  exclusions: standardExclusions,

  safety: {
    eyebrow: "Safety First",
    title: "Before You Fly",
    intro: "Please read before booking. Rara is a remote region with limited facilities.",
    points: beforeYouFly({
      permits: "A Rara National Park entry fee generally applies to foreign visitors. We confirm current permits and fees with your package.",
      altitude: "Rara Lake lies at around 2,990 m. Consult a doctor if you have heart, lung or blood-pressure conditions.",
    }),
  },

  trust: karvaahhTrust,

  gallery: { title: "Photo Gallery", intro: "Photos of Rara Lake will be added soon.", items: [{ image: raraLake, caption: "Rara Lake" }] },

  faqs: [
    { question: "What is the Rara Lake Helicopter Tour?", answer: "A helicopter journey from Nepalgunj to Rara Lake in the Karnali region, as a day flight or with an overnight stay, landing only where permitted." },
    { question: "Where is Rara Lake?", answer: "In the Mugu district of Karnali Province, western Nepal, within Rara National Park." },
    { question: "Where does the tour start?", answer: "Usually from Nepalgunj. Departures from Kathmandu can be arranged on request." },
    { question: "Can I stay overnight at Rara?", answer: "Yes, as a tailor-made option, subject to accommodation availability near the lake." },
    { question: "Do I need permits?", answer: "A national park entry fee generally applies to foreign visitors. We confirm current permits and fees at booking." },
    { question: "Is landing guaranteed?", answer: "No. Landing depends on approved locations, weather and operational conditions." },
    { question: "What happens if the weather is bad?", answer: "The flight may be delayed, rescheduled or cancelled. Rescheduling and refund terms depend on the package." },
    { question: "What is the best season?", answer: "Autumn and spring usually offer the clearest skies." },
  ],

  cta: {
    title: "Escape to Rara Lake",
    text: "Nepal's largest lake, in its most remote corner. Plan your Rara helicopter journey with Karvaahh.",
    image: raraLake,
    primaryLabel: "Book Rara Tour",
    primaryHref: "#book",
    quoteLabel: "Get Custom Quote",
    whatsappLabel: "WhatsApp Us",
    planMessage: "Hello Karvaahh, I'd like to book a Rara Lake helicopter tour.",
    quoteSubject: "Quote request: Rara Lake Helicopter Tour",
  },

  relatedTours: relatedTours("kailash-aerial-darshan", "kailash-mansarovar", "upper-mustang", "langtang", "manaslu", "mountain-scenic-flight"),
};
