/* ============================================================
   LANGTANG HELICOPTER TOUR — DESTINATION DATA
   ------------------------------------------------------------
   Same-day flight from Kathmandu into the Langtang Valley, with
   an optional Gosaikunda extension.

   CONTENT RULES: no prices, schedules or guaranteed landings.
   Elevations are approximate. Map positions are approximate and
   the route is illustrative. No confirmed dates are listed — the
   availability section invites a date request instead.
   ============================================================ */

import type { HelicopterTour } from "@/components/activities/experience/product-types";
import { relatedTours } from "./catalog";
import { gosaikunda, kathmanduValley, langtangHimal, langtangVillage, pending, tamangVillage } from "./images";
import { beforeYouFly, karvaahhTrust, standardExclusions, standardInclusions, standardTravelerTypes } from "./shared";

export const langtangHelicopterTour: HelicopterTour = {
  title: "Langtang Helicopter Tour",
  slug: "langtang",
  path: "/activities/helicopter-tours/langtang",
  breadcrumbLabel: "Langtang",
  description:
    "A same-day helicopter tour from Kathmandu into the Langtang Valley, with views of the Langtang Himal and a stop near Kyanjin Gompa where permitted, plus an optional Gosaikunda extension.",
  touristType: ["Photographers", "Families", "Short-stay travellers", "Adventure travellers", "Senior travellers"],

  seo: {
    title: "Langtang Helicopter Tour from Kathmandu | Karvaahh",
    socialTitle: "Langtang Helicopter Tour – Kyanjin Valley & Langtang Himal",
    description:
      "Fly from Kathmandu into the Langtang Valley by helicopter. See the Langtang Himal, Kyanjin Gompa and, on request, sacred Gosaikunda — a premium same-day Himalayan experience with Karvaahh.",
    keywords: [
      "Langtang Helicopter Tour",
      "Langtang Helicopter Tour from Kathmandu",
      "Kyanjin Gompa Helicopter Tour",
      "Langtang Valley Helicopter",
      "Langtang Gosaikunda Helicopter Tour",
      "Kathmandu Helicopter Tour",
    ],
    ogImage: langtangVillage,
  },

  duration: "Same day (sample 3–4 hours)",
  elevation: "Approx. 3,870 m (Kyanjin Gompa)",
  startingPoint: "Kathmandu",
  endingPoint: "Kathmandu",
  region: "Langtang, Bagmati Province",
  bestSeason: "Spring & Autumn",
  transportation: "Helicopter",
  tourTypes: "Shared / Private",
  groupSize: "Subject to helicopter capacity and weight limits",
  landingNote: "Landing only at approved locations; never guaranteed",

  hero: {
    badge: "Helicopter Experience • Langtang • Nepal",
    titleLead: "Langtang",
    titleAccent: "Helicopter Tour",
    description:
      "The nearest great Himalayan valley to Kathmandu: glaciers, the snow peaks of the Langtang Himal and the high pastures of Kyanjin — reached by helicopter in a single morning.",
    image: langtangVillage,
    secondaryCta: { label: "Explore the Journey", href: "#journey" },
    strip: [
      { label: "From", value: "Kathmandu" },
      { label: "Duration", value: "Same Day" },
      { label: "Highest point", value: "Approx. 3,870 m" },
      { label: "Experience", value: "Shared / Private" },
    ],
    trust: [
      { icon: "mountainSnow", label: "Langtang Himal Views" },
      { icon: "users", label: "Private & Group Options" },
      { icon: "cloud", label: "Weather-Based Operations" },
      { icon: "waves", label: "Gosaikunda Extension" },
    ],
  },

  bookingWidget: {
    destination: "Langtang Valley",
    departures: ["Kathmandu"],
    tourTypes: ["Private Helicopter", "Shared Helicopter", "Langtang + Gosaikunda"],
  },

  quickFacts: [
    { icon: "helicopter", label: "Departure", value: "Kathmandu" },
    { icon: "mountain", label: "Destination", value: "Langtang Valley / Kyanjin" },
    { icon: "compass", label: "Region", value: "Langtang National Park" },
    { icon: "clock", label: "Duration", value: "Sample 3–4 Hours", note: "Depends on route, stops and weather" },
    { icon: "mountainSnow", label: "Highest point", value: "Approx. 3,870 m" },
    { icon: "sun", label: "Best Season", value: "Spring / Autumn" },
    { icon: "users", label: "Flight Type", value: "Shared / Private" },
    { icon: "file", label: "Permits", value: "Package dependent", note: "National park fees may apply" },
  ],

  editorial: {
    eyebrow: "The Valley of Glaciers",
    title: "Kathmandu's Closest Great Himalayan Valley",
    paragraphs: [
      "North of Kathmandu, the Langtang Valley climbs from forests of oak and rhododendron to [[glacial]] pastures beneath the Langtang Himal, close to the Tibetan border. It lies within Langtang National Park, established in 1976.",
      "The valley is home to [[Tamang]] communities whose stone houses, prayer flags and monasteries reflect a culture closely connected with Tibetan Buddhism. At its head, Kyanjin Gompa sits among yak pastures, glaciers and snow peaks.",
      "By helicopter, the journey that takes trekkers several days becomes a [[single]] morning: lift off from Kathmandu, follow the valley north and step out at altitude where landing is permitted.",
    ],
    image: langtangHimal,
    inset: tamangVillage,
    fact: { label: "Langtang National Park", value: "1976", text: "Nepal's first Himalayan national park." },
  },

  whyHelicopter: {
    title: "Why Fly to Langtang?",
    intro: "A full Himalayan valley experience without days of trekking.",
    items: [
      { title: "Close to Kathmandu", text: "One of the shortest flights to a major Himalayan valley." },
      { title: "Glaciers and snow peaks", text: "Fly beneath the Langtang Himal and its hanging glaciers." },
      { title: "Kyanjin's high pastures", text: "A stop near Kyanjin Gompa where landing is permitted." },
      { title: "Add sacred Gosaikunda", text: "Combine with the holy lake on request." },
      { title: "Ideal for limited time", text: "A same-day journey that fits a short Nepal stay." },
      { title: "Private or shared", text: "Charter the whole helicopter or join a shared flight." },
    ],
  },

  places: [
    { id: "kathmandu", name: "Kathmandu", lat: 27.717, lon: 85.324, elevation: "Approx. 1,400 m", label: "right", text: "Departure from Kathmandu's Tribhuvan International Airport.", image: kathmanduValley },
    { id: "syabrubesi", name: "Syabrubesi", lat: 28.162, lon: 85.345, elevation: "Approx. 1,460 m", label: "left", text: "The roadhead village at the entrance to the Langtang Valley." },
    { id: "langtang-valley", name: "Langtang Valley", lat: 28.214, lon: 85.517, elevation: "Approx. 3,400 m", label: "top", text: "A glacial valley of pastures, stone villages and Tamang culture.", image: langtangVillage },
    { id: "kyanjin", name: "Kyanjin Gompa", lat: 28.211, lon: 85.564, elevation: "Approx. 3,870 m", label: "right", text: "The monastery village at the head of the valley, surrounded by glaciers and peaks.", image: langtangHimal },
    { id: "gosaikunda", name: "Gosaikunda", lat: 28.083, lon: 85.414, elevation: "Approx. 4,380 m", label: "left", text: "A sacred high-altitude lake, visited on the optional extension.", image: gosaikunda },
    { id: "langtang-np", name: "Langtang National Park", lat: 28.05, lon: 85.55, region: true, text: "Nepal's first Himalayan national park, established in 1976." },
  ],
  map: {
    title: "The Langtang Flight",
    intro: "Hover or tap a marker for each place on the illustrative route.",
    note: "Illustrative regional route. Actual helicopter flight path depends on weather, air traffic, aviation regulations, permits and operator requirements.",
    bounds: { west: 85.26, east: 85.66, south: 27.98, north: 28.3 },
    route: ["kathmandu", "langtang-valley", "kyanjin", "gosaikunda", "kathmandu"],
    selected: "kyanjin",
  },

  journey: {
    title: "The Journey Into Langtang",
    intro: "An illustrative morning from the Kathmandu valley to the head of the Langtang Valley.",
    note: "Illustrative only. The route, stops and Gosaikunda extension depend on weather, permits and the operator.",
    stages: [
      { name: "Kathmandu", text: "Take off from the Kathmandu valley with the Himalaya on the northern horizon.", image: kathmanduValley, elevation: "Approx. 1,400 m" },
      { name: "Langtang Himal", text: "Fly north towards the snow peaks along the Tibetan border.", image: langtangHimal },
      { name: "Langtang Valley", short: "Valley", text: "Follow the glacial valley past pastures and stone villages.", image: langtangVillage },
      { name: "Gosaikunda (optional)", short: "Gosaikunda", text: "Add the sacred lake on the extended flight.", image: gosaikunda, elevation: "Approx. 4,380 m" },
      { name: "Return to Kathmandu", short: "Return", text: "Descend over forested ridges back to the valley.", image: kathmanduValley },
    ],
  },

  timeline: {
    title: "Sample Langtang Helicopter Morning",
    note: "Sample timing only — actual timings depend on weather, air traffic, operator and flight conditions.",
    blocks: [
      { time: "06:30", title: "Hotel Pickup", text: "Pickup from your Kathmandu hotel, if included in the package." },
      { time: "07:00", title: "Departure From Kathmandu", text: "Briefing and take-off towards the Langtang Himal." },
      { time: "07:45", title: "Langtang Valley", text: "Fly up the glacial valley beneath the snow peaks." },
      { time: "08:00", title: "Kyanjin Stop", text: "A short stop near Kyanjin Gompa where landing is permitted." },
      { time: "09:00", title: "Optional Gosaikunda", text: "Fly over or stop at the sacred lake on the extended option." },
      { time: "10:00", title: "Estimated Kathmandu Arrival", text: "Estimated return, depending on actual flight operations." },
    ],
  },

  highlights: {
    title: "Highlights of the Langtang Flight",
    intro: "Landmarks seen on the way, depending on weather and the chosen route.",
    items: [
      { name: "Langtang Himal", text: "The snow wall along the Tibetan border.", image: langtangHimal },
      { name: "Kyanjin Gompa", text: "Monastery village at the head of the valley.", elevation: "Approx. 3,870 m", image: langtangVillage },
      { name: "Tamang villages", text: "Stone houses and prayer flags of the valley's communities.", image: tamangVillage },
      { name: "Gosaikunda", text: "The sacred lake on the optional extension.", elevation: "Approx. 4,380 m", image: gosaikunda },
    ],
  },

  route: {
    title: "The Flight Route",
    intro: "An illustrative route from Kathmandu to the Langtang Valley.",
    note: "Actual route depends on the operator, weather and aviation restrictions.",
    stops: [
      { name: "Kathmandu", detail: "Departure point", mode: "landing" },
      { name: "Langtang Valley", detail: "Scenic flight up the valley", mode: "aerial" },
      { name: "Kyanjin Gompa", detail: "Short stop where permitted", mode: "optional" },
      { name: "Gosaikunda", detail: "Optional extension", mode: "optional" },
      { name: "Kathmandu", detail: "Return", mode: "landing" },
    ],
  },

  seasons: {
    title: "Best Time for a Langtang Helicopter Tour",
    intro: "Clear mornings are key: most flights leave early, before clouds build over the mountains.",
    note: "Helicopter flights are highly weather dependent. Flight availability, route and landing locations are subject to safety, aviation regulations and operator decisions.",
    items: [
      { name: "Spring", months: "March – May", rating: "Very good", icon: "sun", text: "Rhododendron forests in bloom and generally clear mornings." },
      { name: "Monsoon", months: "June – August", rating: "Limited", icon: "rain", text: "Frequent cloud and rain can delay or cancel flights." },
      { name: "Autumn", months: "September – November", rating: "Best visibility", icon: "leaf", text: "Crisp air and the clearest mountain views." },
      { name: "Winter", months: "December – February", rating: "Cold & clear", icon: "snow", text: "Often clear skies, but cold at altitude and possible snow." },
    ],
  },

  departures: {
    title: "Choose Your Date",
    intro: "Langtang flights are arranged on clear-weather days throughout the season.",
    emptyTitle: "Flights are arranged on request",
    emptyText: "Tell us your preferred date and group size, and we will confirm availability with the operator.",
    emptyCta: "Request a date",
    dates: [],
  },

  options: {
    title: "Choose Your Langtang Experience",
    intro: "We confirm availability, permits, inclusions and the current price with you before booking.",
    note: "Prices depend on season, group size, aircraft, permits and the selected package.",
    ctaLabel: "Request Current Price",
    items: [
      {
        name: "Shared Helicopter",
        basis: "Per seat",
        price: "Price on Request",
        points: ["Subject to seat availability", "Shared helicopter", "Kyanjin stop where permitted"],
        idealFor: "Solo travellers and couples",
        image: langtangHimal,
        whatsappMessage: "Hello Karvaahh, I'd like a shared Langtang helicopter flight. Please share the price and availability.",
      },
      {
        name: "Private Helicopter Charter",
        basis: "Private charter",
        price: "Price on Request",
        points: ["Whole helicopter for your group", "Flexible timing", "Premium experience"],
        idealFor: "Families and private groups",
        featured: true,
        image: langtangVillage,
        whatsappMessage: "Hello Karvaahh, I'd like a private Langtang helicopter charter. Please share the current price.",
      },
      {
        name: "Langtang + Gosaikunda",
        basis: "Extended flight",
        price: "Enquire for details",
        points: ["Langtang Valley and Kyanjin", "Sacred Gosaikunda lake", "Subject to weather"],
        idealFor: "Pilgrims and photographers",
        image: gosaikunda,
        whatsappMessage: "Hello Karvaahh, I'd like a Langtang + Gosaikunda helicopter flight. Please share the details.",
      },
    ],
  },

  travelerTypes: { title: "Who Is This For?", intro: "A short, spectacular Himalayan journey for every kind of traveller.", items: standardTravelerTypes },

  inclusions: standardInclusions,
  exclusions: standardExclusions,

  safety: {
    eyebrow: "Safety First",
    title: "Before You Fly",
    intro: "Please read before booking. Langtang is a high-altitude national park.",
    points: beforeYouFly({
      permits: "A Langtang National Park entry fee generally applies to foreign visitors. We confirm current permits and fees with your package.",
      altitude: "Kyanjin Gompa lies at around 3,870 m. Stops are kept short; consult a doctor if you have heart, lung or blood-pressure conditions.",
    }),
  },

  trust: karvaahhTrust,

  gallery: {
    title: "Photo Gallery",
    intro: "Scenes from the Langtang region. Tap any photo to view it larger.",
    items: [
      { image: langtangVillage, caption: "A village in the upper Langtang Valley" },
      { image: langtangHimal, caption: "The Langtang Himal" },
      { image: tamangVillage, caption: "A Tamang village of the Langtang region" },
      { image: gosaikunda, caption: "Gosaikunda" },
      { image: kathmanduValley, caption: "The Kathmandu valley and the Himalaya" },
      { image: pending("Kyanjin Ri", "The view from Kyanjin Ri over the Langtang glaciers"), caption: "Kyanjin Ri (photo to be added)" },
    ],
  },

  faqs: [
    { question: "What is the Langtang Helicopter Tour?", answer: "A same-day helicopter flight from Kathmandu into the Langtang Valley, with a short stop near Kyanjin Gompa where landing is permitted." },
    { question: "Where does the tour start?", answer: "From Kathmandu's Tribhuvan International Airport, usually early in the morning." },
    { question: "How long is the tour?", answer: "Typically around 3–4 hours in total (sample), depending on the route, stops and weather." },
    { question: "Can I combine Langtang with Gosaikunda?", answer: "Yes, as an extended flight on request, subject to weather and the operator." },
    { question: "Do I need permits?", answer: "A national park entry fee generally applies to foreign visitors. We confirm current permits and fees at booking." },
    { question: "Is landing guaranteed?", answer: "No. Landing depends on approved locations, weather and operational conditions." },
    { question: "Can senior citizens and children join?", answer: "Usually yes, as no trekking is needed. Because of the altitude, we recommend consulting a doctor before booking." },
    { question: "What happens if the weather is bad?", answer: "The flight may be delayed, rescheduled or cancelled. Rescheduling and refund terms depend on the package." },
    { question: "Can I book privately?", answer: "Yes. A private charter reserves the whole helicopter for your group, within passenger and weight limits." },
    { question: "What is the best season?", answer: "Autumn and spring usually offer the clearest views; winter mornings are often clear but cold." },
  ],

  cta: {
    title: "Fly Into the Langtang Valley",
    text: "Glaciers, peaks and high pastures, a single morning from Kathmandu. Plan your Langtang helicopter tour with Karvaahh.",
    image: langtangHimal,
    animated: true,
    primaryLabel: "Book Langtang Tour",
    primaryHref: "#book",
    quoteLabel: "Get Custom Quote",
    whatsappLabel: "WhatsApp Us",
    planMessage: "Hello Karvaahh, I'd like to book a Langtang helicopter tour.",
    quoteSubject: "Quote request: Langtang Helicopter Tour",
  },

  relatedTours: relatedTours("gosaikunda", "everest-base-camp", "mountain-scenic-flight", "manaslu", "annapurna", "upper-mustang"),
};
