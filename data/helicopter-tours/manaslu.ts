/* ============================================================
   MANASLU HELICOPTER TOUR — DESTINATION DATA
   ------------------------------------------------------------
   Flight from Kathmandu into the Manaslu region (Budhi Gandaki
   valley, Samagaun), a restricted area.

   CONTENT RULES: no prices, schedules or guaranteed landings.
   Elevations are approximate. Permit details must be confirmed
   from the actual package before publishing.
   IMAGES: only one Manaslu photo exists; other highlights show
   labelled placeholders (`pending`) until photos are sourced.
   ============================================================ */

import type { HelicopterTour } from "@/components/activities/experience/product-types";
import { relatedTours } from "./catalog";
import { gorkhaDurbar, kathmanduValley, manasluTrail, pending } from "./images";
import { beforeYouFly, karvaahhTrust, standardExclusions, standardInclusions, standardTravelerTypes } from "./shared";

export const manasluHelicopterTour: HelicopterTour = {
  title: "Manaslu Helicopter Tour",
  slug: "manaslu",
  path: "/activities/helicopter-tours/manaslu",
  breadcrumbLabel: "Manaslu",
  description:
    "A helicopter tour from Kathmandu into the remote Manaslu region, flying up the Budhi Gandaki valley towards Samagaun beneath Manaslu, the world's eighth-highest mountain, with landings only where permitted.",
  touristType: ["Photographers", "Adventure travellers", "Luxury travellers", "Himalayan explorers"],

  seo: {
    title: "Manaslu Helicopter Tour from Kathmandu | Karvaahh",
    socialTitle: "Manaslu Helicopter Tour – Fly Beneath the World's Eighth-Highest Mountain",
    description:
      "Fly into the remote Manaslu region by helicopter. Discover the Budhi Gandaki valley, Samagaun and the 8,163 m Manaslu massif on a premium Himalayan flight with Karvaahh.",
    keywords: ["Manaslu Helicopter Tour", "Manaslu Helicopter Tour from Kathmandu", "Samagaun Helicopter", "Manaslu Base Camp Helicopter", "Manaslu Region Flight"],
    ogImage: manasluTrail,
  },

  duration: "Same day (sample 4–5 hours)",
  elevation: "Approx. 3,530 m (Samagaun)",
  startingPoint: "Kathmandu",
  endingPoint: "Kathmandu",
  region: "Manaslu, Gorkha (Gandaki Province)",
  bestSeason: "Spring & Autumn",
  transportation: "Helicopter",
  tourTypes: "Private / Custom",
  groupSize: "Subject to helicopter capacity and weight limits",
  landingNote: "Landing only at approved locations; never guaranteed",

  hero: {
    badge: "Helicopter Experience • Manaslu • Nepal",
    titleLead: "Manaslu",
    titleAccent: "Helicopter Tour",
    description:
      "Fly into one of Nepal's most remote mountain regions — deep river valleys, Tibetan-influenced villages and the vast snow walls of the Manaslu massif.",
    image: manasluTrail,
    secondaryCta: { label: "View the Route", href: "#route" },
    strip: [
      { label: "From", value: "Kathmandu" },
      { label: "Duration", value: "Same Day" },
      { label: "Manaslu", value: "8,163 m" },
      { label: "Experience", value: "Private / Custom" },
    ],
    trust: [
      { icon: "mountainSnow", label: "Eight-Thousander Views" },
      { icon: "compass", label: "Remote Himalayan Region" },
      { icon: "cloud", label: "Weather-Based Operations" },
      { icon: "route", label: "Customised Journeys" },
    ],
  },

  bookingWidget: {
    destination: "Manaslu Region",
    departures: ["Kathmandu", "Pokhara (on request)"],
    tourTypes: ["Private Helicopter", "Custom Experience"],
  },

  quickFacts: [
    { icon: "helicopter", label: "Departure", value: "Kathmandu" },
    { icon: "mountain", label: "Destination", value: "Manaslu region / Samagaun" },
    { icon: "compass", label: "Region", value: "Gorkha district" },
    { icon: "clock", label: "Duration", value: "Sample 4–5 Hours", note: "Depends on route, stops and weather" },
    { icon: "mountainSnow", label: "Manaslu", value: "8,163 m", note: "World's eighth-highest mountain" },
    { icon: "sun", label: "Best Season", value: "Spring / Autumn" },
    { icon: "users", label: "Flight Type", value: "Private / Custom" },
    { icon: "file", label: "Permits", value: "Package dependent", note: "Restricted area" },
  ],

  editorial: {
    eyebrow: "The Mountain of the Spirit",
    title: "Into the Remote Manaslu Region",
    paragraphs: [
      "Manaslu rises to 8,163 m in the Gorkha district of central Nepal — the [[eighth-highest]] mountain on Earth. Its name is commonly explained as coming from the Sanskrit word for intellect or soul.",
      "Below it, the Budhi Gandaki river has cut a deep valley through the Himalaya. Upstream, villages such as Samagaun reflect a [[Tibetan-influenced]] culture of monasteries, mani walls and yak pastures.",
      "The region remains [[remote]] and is a restricted area for foreign visitors. A helicopter brings its glaciers and valleys within reach in a single day, where permits and conditions allow.",
    ],
    image: manasluTrail,
    inset: gorkhaDurbar,
    fact: { label: "Manaslu", value: "8,163 m", text: "The world's eighth-highest mountain." },
  },

  whyHelicopter: {
    title: "Why Fly to Manaslu?",
    intro: "A remote eight-thousander region, reached in a day.",
    items: [
      { title: "An eight-thousander up close", text: "Fly beneath the snow walls of the Manaslu massif." },
      { title: "Remote and uncrowded", text: "A Himalayan region far from the busier routes." },
      { title: "Deep river valleys", text: "Follow the Budhi Gandaki gorge into the mountains." },
      { title: "Mountain culture", text: "Glimpse Tibetan-influenced villages and monasteries." },
      { title: "Days saved", text: "Reach in hours what takes trekkers more than a week." },
      { title: "Tailor-made", text: "Private flights planned around your interests." },
    ],
  },

  highlights: {
    title: "Highlights of the Manaslu Flight",
    intro: "Landmarks that may be seen, depending on weather, permits and the chosen route.",
    items: [
      { name: "Manaslu massif", text: "The world's eighth-highest mountain.", elevation: "8,163 m", image: manasluTrail },
      { name: "Samagaun", text: "A mountain village of the upper Budhi Gandaki valley.", elevation: "Approx. 3,530 m", image: pending("Samagaun", "The village of Samagaun beneath Manaslu") },
      { name: "Birendra Tal", text: "A glacial lake below the Manaslu glacier.", image: pending("Birendra Tal", "Birendra Tal glacial lake near Samagaun") },
      { name: "Budhi Gandaki valley", text: "A deep gorge carved through the Himalaya.", image: pending("Budhi Gandaki", "The Budhi Gandaki river valley") },
      { name: "Gorkha", text: "The historic hill district that is home to Manaslu.", image: gorkhaDurbar },
    ],
  },

  route: {
    title: "The Flight Route",
    intro: "An illustrative route from Kathmandu into the Manaslu region.",
    note: "Actual route depends on the operator, weather, permits and aviation restrictions.",
    stops: [
      { name: "Kathmandu", detail: "Departure point", mode: "landing" },
      { name: "Gorkha hills", detail: "Scenic flight west", mode: "aerial" },
      { name: "Budhi Gandaki valley", detail: "Scenic flight up the gorge", mode: "aerial" },
      { name: "Samagaun area", detail: "Short stop only where permitted", mode: "optional" },
      { name: "Manaslu glacier views", detail: "Aerial views", mode: "aerial" },
      { name: "Kathmandu", detail: "Return", mode: "landing" },
    ],
  },

  timeline: {
    title: "Sample Manaslu Helicopter Day",
    note: "Sample timing only — actual timings depend on weather, air traffic, permits, operator and flight conditions.",
    blocks: [
      { time: "06:30", title: "Hotel Pickup", text: "Pickup from your Kathmandu hotel, if included in the package." },
      { time: "07:00", title: "Departure From Kathmandu", text: "Briefing and take-off westwards over the hills." },
      { time: "08:00", title: "Budhi Gandaki Valley", text: "Fly up the deep valley towards the Manaslu massif." },
      { time: "08:30", title: "Manaslu Region", text: "Aerial views of Manaslu; a short stop only where permitted." },
      { time: "09:30", title: "Return Flight", text: "Begin the return journey, with a possible refuelling stop." },
      { time: "11:00", title: "Estimated Kathmandu Arrival", text: "Estimated return, depending on actual flight operations." },
    ],
  },

  seasons: {
    title: "Best Time for a Manaslu Helicopter Tour",
    intro: "Early, clear mornings give the best chance of seeing the full massif.",
    note: "Helicopter flights are highly weather dependent. Flight availability, route and landing locations are subject to safety, aviation regulations and operator decisions.",
    items: [
      { name: "Spring", months: "March – May", rating: "Very good", icon: "sun", text: "Generally clear mornings and pleasant conditions." },
      { name: "Monsoon", months: "June – August", rating: "Limited", icon: "rain", text: "Cloud and rain frequently affect flights." },
      { name: "Autumn", months: "September – November", rating: "Best visibility", icon: "leaf", text: "The clearest mountain views of the year." },
      { name: "Winter", months: "December – February", rating: "Cold", icon: "snow", text: "Cold at altitude, with possible snow disruption." },
    ],
  },

  departures: {
    title: "Choose Your Date",
    intro: "Manaslu flights are arranged privately on clear-weather days.",
    emptyTitle: "Flights are arranged on request",
    emptyText: "Share your preferred date and group size, and we will confirm availability and permits with the operator.",
    emptyCta: "Request a date",
    dates: [],
  },

  options: {
    title: "Choose Your Manaslu Experience",
    intro: "We confirm availability, permits, inclusions and the current price with you before booking.",
    note: "Prices depend on season, group size, aircraft, permits and the selected package.",
    ctaLabel: "Request Current Price",
    items: [
      {
        name: "Private Helicopter Charter",
        basis: "Private charter",
        price: "Price on Request",
        points: ["Whole helicopter for your group", "Flexible timing", "Premium experience"],
        idealFor: "Families, groups and premium travellers",
        featured: true,
        image: manasluTrail,
        whatsappMessage: "Hello Karvaahh, I'd like a private Manaslu helicopter charter. Please share the current price.",
      },
      {
        name: "Custom Manaslu Experience",
        basis: "Tailor-made",
        price: "Enquire for details",
        points: ["Photography-focused flights", "Combine with treks or lodges", "Special occasions"],
        idealFor: "Photographers and explorers",
        image: gorkhaDurbar,
        whatsappMessage: "Hello Karvaahh, I'd like a custom Manaslu helicopter experience. Here are my requirements:",
      },
    ],
  },

  travelerTypes: { title: "Who Is This For?", intro: "For travellers who want a remote Himalayan region without weeks of trekking.", items: standardTravelerTypes },

  inclusions: standardInclusions,
  exclusions: standardExclusions,

  safety: {
    eyebrow: "Safety First",
    title: "Before You Fly",
    intro: "Please read before booking. Manaslu is a remote, restricted, high-altitude region.",
    points: beforeYouFly({
      permits: "The Manaslu region is a restricted area; foreign visitors generally need special permits in addition to conservation area permits. Requirements are confirmed with your package.",
      altitude: "Samagaun lies at around 3,530 m. Stops are kept short; consult a doctor if you have heart, lung or blood-pressure conditions.",
    }),
  },

  trust: karvaahhTrust,

  gallery: {
    title: "Photo Gallery",
    intro: "Scenes from the Manaslu region and the journey there.",
    items: [
      { image: manasluTrail, caption: "A high trail in the Manaslu region" },
      { image: gorkhaDurbar, caption: "Gorkha Durbar, Gorkha district" },
      { image: kathmanduValley, caption: "The Kathmandu valley and the Himalaya" },
      { image: pending("Samagaun", "The village of Samagaun beneath Manaslu"), caption: "Samagaun (photo to be added)" },
    ],
  },

  faqs: [
    { question: "What is the Manaslu Helicopter Tour?", answer: "A helicopter flight from Kathmandu into the Manaslu region, with aerial views of the massif and a short stop only where permitted." },
    { question: "How high is Manaslu?", answer: "Manaslu rises to 8,163 m, making it the world's eighth-highest mountain." },
    { question: "Where does the tour start?", answer: "Usually from Kathmandu. Departures from Pokhara can be arranged on request." },
    { question: "How long is the tour?", answer: "Typically a same-day flight of around 4–5 hours in total (sample), depending on route, stops and weather." },
    { question: "Do I need permits?", answer: "Manaslu is a restricted area. Permit requirements for helicopter visits are confirmed with your package before booking." },
    { question: "Is landing guaranteed?", answer: "No. Landing depends on approved locations, permits, weather and operational conditions." },
    { question: "What happens if the weather is bad?", answer: "The flight may be delayed, rescheduled or cancelled. Rescheduling and refund terms depend on the package." },
    { question: "What is the best season?", answer: "Autumn and spring usually offer the clearest views." },
  ],

  cta: {
    title: "Fly Beneath Manaslu",
    text: "A remote eight-thousander region, reached in a single day. Plan your Manaslu helicopter tour with Karvaahh.",
    image: manasluTrail,
    animated: true,
    primaryLabel: "Book Manaslu Tour",
    primaryHref: "#book",
    quoteLabel: "Get Custom Quote",
    whatsappLabel: "WhatsApp Us",
    planMessage: "Hello Karvaahh, I'd like to book a Manaslu helicopter tour.",
    quoteSubject: "Quote request: Manaslu Helicopter Tour",
  },

  relatedTours: relatedTours("annapurna", "upper-mustang", "langtang", "everest-base-camp", "mountain-scenic-flight", "muktinath-temple"),
};
