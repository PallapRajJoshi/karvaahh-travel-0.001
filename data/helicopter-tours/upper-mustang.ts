/* ============================================================
   UPPER MUSTANG HELICOPTER TOUR — DESTINATION DATA
   ------------------------------------------------------------
   Reference implementation for the helicopter collection.

   ► SAMPLE VALUES — replace before publishing:
     - SAMPLE_DATE and SAMPLE_DATES (booking widget, itinerary,
       date cards). Keep `sample: true` until real dates exist;
       it labels every date as SAMPLE.
     - Itinerary times are illustrative.

   CONTENT RULES (keep when editing):
   - No prices, guaranteed landings or confirmed availability.
   - Permit details come from the actual package before publishing.
   - Statistics: verified values only (see `stats`).
   - Map positions are approximate; the route is illustrative.
   ============================================================ */

import type { Departure, HelicopterTour } from "@/components/activities/experience/product-types";
import { relatedTours } from "./catalog";
import {
  annapurnaRange,
  dhaulagiri,
  kagbeni,
  loManthangStreet,
  muktinathTemple,
  mustangCliffs,
  mustangMonastery,
  mustangRidgeMonastery,
  pokhara,
  prayerCloth,
  valleyRoad,
} from "./images";
import { beforeYouFly, karvaahhTrust, standardExclusions, standardInclusions, standardTravelerTypes } from "./shared";

/* ---------- Sample values (edit here) ---------- */

const SAMPLE_DATE = "2026-11-15";

const SAMPLE_DATES: Departure[] = [
  { date: "2026-11-15", status: "open" },
  { date: "2026-11-22", status: "limited" },
  { date: "2026-11-29", status: "open" },
  { date: "2026-12-06", status: "enquire" },
  { date: "2026-12-13", status: "enquire" },
];

export const upperMustangHelicopterTour: HelicopterTour = {
  title: "Upper Mustang Helicopter Tour",
  slug: "upper-mustang",
  path: "/activities/helicopter-tours/upper-mustang",
  breadcrumbLabel: "Upper Mustang",
  description:
    "A helicopter experience from Pokhara into Upper Mustang, flying through the Kali Gandaki corridor to the high desert valleys, cliff villages and walled city of Lo Manthang, with landings only where permitted.",
  touristType: ["Photographers", "Adventure travellers", "Culture lovers", "Luxury travellers", "Families"],

  seo: {
    title: "Upper Mustang Helicopter Tour from Pokhara | Karvaahh",
    socialTitle: "Upper Mustang Helicopter Tour – Fly Into Nepal's Hidden Himalaya",
    description:
      "Explore Upper Mustang from the sky with a premium helicopter experience from Pokhara. Discover dramatic Mustang landscapes, ancient settlements and Himalayan culture with Karvaahh.",
    keywords: [
      "Upper Mustang Helicopter Tour",
      "Upper Mustang Helicopter Tour from Pokhara",
      "Pokhara to Upper Mustang Helicopter",
      "Lo Manthang Helicopter Tour",
      "Mustang Helicopter Tour",
      "Upper Mustang Aerial Tour",
      "Upper Mustang Luxury Tour",
      "Upper Mustang Sightseeing Flight",
    ],
    ogImage: mustangRidgeMonastery,
  },

  duration: "Sample 4–6 hours",
  elevation: "Approx. 3,840 m (Lo Manthang)",
  startingPoint: "Pokhara",
  endingPoint: "Pokhara",
  region: "Mustang, Gandaki Province",
  bestSeason: "Spring & Autumn",
  transportation: "Helicopter",
  tourTypes: "Shared / Private",
  groupSize: "Subject to helicopter capacity and weight limits",
  landingNote: "Landing only at approved locations; never guaranteed",

  /* ---------- Hero ---------- */
  hero: {
    badge: "Helicopter Experience • Mustang • Nepal",
    titleLead: "Upper Mustang",
    titleAccent: "Helicopter Tour",
    description:
      "Fly beyond the familiar Himalayas into the extraordinary landscapes of Upper Mustang — a world of dramatic cliffs, ancient settlements, high mountain valleys and distinctive Himalayan culture.",
    image: mustangRidgeMonastery,
    primaryCta: { label: "Check Availability" },
    secondaryCta: { label: "Explore the Journey", href: "#journey" },
    strip: [
      { label: "From", value: "Pokhara" },
      { label: "Duration", value: "Sample 4–6 Hours" },
      { label: "Region", value: "Mustang" },
      { label: "Experience", value: "Shared / Private" },
    ],
    trust: [
      { icon: "mountainSnow", label: "Scenic Himalayan Flights" },
      { icon: "users", label: "Private & Group Options" },
      { icon: "cloud", label: "Weather-Based Operations" },
      { icon: "route", label: "Customised Journeys" },
    ],
  },

  bookingWidget: {
    destination: "Upper Mustang",
    departures: ["Pokhara", "Kathmandu (on request)"],
    tourTypes: ["Private Helicopter", "Shared Helicopter", "Custom Experience"],
    defaults: {
      date: SAMPLE_DATE,
      travelers: "2 Adults",
      departure: "Pokhara",
      tourType: "Private Helicopter",
      message: "I am interested in the Upper Mustang Helicopter Tour.",
    },
    sample: true,
    sampleNotice: "Sample date — confirm actual availability",
  },

  quickFacts: [
    { icon: "helicopter", label: "Departure", value: "Pokhara" },
    { icon: "mountain", label: "Destination", value: "Upper Mustang" },
    { icon: "compass", label: "Region", value: "Mustang" },
    { icon: "camera", label: "Experience", value: "Helicopter Scenic Flight" },
    { icon: "clock", label: "Duration", value: "Sample 4–6 Hours", note: "Depends on route, stops and weather" },
    { icon: "sun", label: "Best Season", value: "Spring / Autumn" },
    { icon: "users", label: "Flight Type", value: "Shared / Private" },
    { icon: "file", label: "Permits", value: "Package dependent", note: "Upper Mustang is a restricted area" },
  ],

  /* ---------- Story ---------- */
  editorial: {
    eyebrow: "The Hidden Himalaya",
    title: "Fly Into the Hidden Landscapes of Upper Mustang",
    paragraphs: [
      "North of the great Himalayan wall lies a [[remote]] land in the rain shadow of Dhaulagiri and Annapurna. Upper Mustang is a trans-Himalayan landscape of deep valleys and wind-carved red and ochre cliffs, a high-altitude, desert-like world unlike the green foothills to the south.",
      "Here, [[ancient]] settlements cling to river terraces and cliff edges. Whitewashed monasteries, chortens and prayer flags mark a culture closely connected with Tibetan Buddhism, while flat-roofed houses of mud and stone are built for a land of little rain and strong wind.",
      "From the air, Upper Mustang reveals itself in [[layers]]: the Kali Gandaki corridor, green barley fields like oases, the walled city of Lo Manthang and the snow peaks of the [[Himalaya]] along the southern horizon — in a single day from Pokhara.",
    ],
    image: mustangCliffs,
    inset: loManthangStreet,
    fact: { label: "Opened to foreign visitors", value: "1992", text: "Upper Mustang remains a restricted area that requires special permits." },
  },

  /* ---------- Verified statistics ---------- */
  stats: {
    note: "Elevations are approximate. Lo Manthang's founding is traditionally dated to the 14th century.",
    items: [
      { value: 3840, suffix: " m", label: "Approx. elevation of Lo Manthang" },
      { value: 8167, suffix: " m", label: "Dhaulagiri, beside the Kali Gandaki route" },
      { value: 1992, label: "Year Upper Mustang opened to foreign visitors" },
      { value: 14, suffix: "th c.", label: "Lo Manthang's traditional founding" },
    ],
  },

  /* ---------- Why ---------- */
  whyHelicopter: {
    title: "Why Experience Upper Mustang From Above?",
    intro: "Six reasons to see the former Kingdom of Lo from the sky.",
    items: [
      { icon: "mountain", title: "Remote Himalayan Landscapes", text: "Reach a high desert beyond the Himalaya that few travellers see.", image: mustangCliffs },
      { icon: "landmark", title: "Ancient Mountain Settlements", text: "Look down on walled villages, chortens and cliffside homes.", image: loManthangStreet },
      { icon: "camera", title: "Spectacular Aerial Photography", text: "Red cliffs, canyons and snow peaks in crisp mountain light.", image: mustangRidgeMonastery },
      { icon: "clock", title: "Save Days of Travel", text: "Fly in hours a journey that takes days by road or on foot.", image: kagbeni },
      { icon: "heart", title: "Distinctive Mustang Culture", text: "A living heritage of monasteries, festivals and traditions.", image: mustangMonastery },
      { icon: "sparkles", title: "Premium Himalayan Adventure", text: "A private, personalised journey with careful coordination.", image: dhaulagiri },
    ],
  },

  /* ---------- Explorer + map (approximate coordinates) ---------- */
  explorer: {
    title: "Explore Mustang From Above",
    intro: "The places of the Kali Gandaki valley and the former Kingdom of Lo. Filter by area and swipe through.",
    note: "A regional explorer, not an itinerary: the helicopter does not land at every place shown. Stops depend on the package, permits, weather and operator.",
  },
  map: {
    title: "The Route Into Mustang",
    intro: "Hover or tap a marker to see each place along the illustrative route.",
    note: "Illustrative regional route. Actual helicopter flight path depends on weather, air traffic, aviation regulations, permits and operator requirements.",
    bounds: { west: 83.6, east: 84.08, south: 28.74, north: 29.27 },
    route: ["pokhara", "jomsom", "kagbeni", "muktinath", "ghami", "tsarang", "lo-manthang", "chhoser"],
    selected: "lo-manthang",
  },
  places: [
    { id: "pokhara", name: "Pokhara", group: "Gateway", lat: 28.209, lon: 83.985, elevation: "Approx. 820 m", label: "left", text: "The lakeside city where the helicopter journey usually begins.", image: pokhara },
    { id: "ghasa", name: "Ghasa", group: "Kali Gandaki Valley", lat: 28.598, lon: 83.646, elevation: "Approx. 2,010 m", text: "A Thakali village where the forested lower valley begins to give way to drier country." },
    { id: "lete", name: "Lete", group: "Kali Gandaki Valley", lat: 28.64, lon: 83.61, elevation: "Approx. 2,480 m", text: "A village deep in the Kali Gandaki valley, between the Dhaulagiri and Annapurna massifs." },
    { id: "kobang", name: "Kobang", group: "Kali Gandaki Valley", lat: 28.69, lon: 83.637, text: "A Thakali village of stone houses and narrow lanes near Larjung, beneath Dhaulagiri." },
    { id: "tukuche", name: "Tukuche", group: "Kali Gandaki Valley", lat: 28.712, lon: 83.646, elevation: "Approx. 2,590 m", text: "Once an important post on the salt-trade route, known for its large Thakali houses." },
    { id: "marpha", name: "Marpha", group: "Kali Gandaki Valley", lat: 28.752, lon: 83.686, elevation: "Approx. 2,670 m", text: "A whitewashed Thakali village known for apple orchards and stone-paved lanes." },
    { id: "jomsom", name: "Jomsom", group: "Kali Gandaki Valley", lat: 28.781, lon: 83.723, elevation: "Approx. 2,720 m", label: "left", text: "Mustang's district headquarters and airport, on the windswept banks of the Kali Gandaki." },
    { id: "kagbeni", name: "Kagbeni", group: "Lower Mustang", lat: 28.839, lon: 83.784, elevation: "Approx. 2,810 m", label: "left", text: "An ancient fortified village at the gateway to Upper Mustang.", image: kagbeni },
    { id: "khingar", name: "Khingar", group: "Lower Mustang", lat: 28.826, lon: 83.83, text: "A small village on the way from Kagbeni towards Muktinath." },
    { id: "jharkot", name: "Jharkot", group: "Lower Mustang", lat: 28.822, lon: 83.85, text: "A hilltop village with an old fortress and monastery near Muktinath." },
    { id: "muktinath", name: "Muktinath", group: "Lower Mustang", lat: 28.817, lon: 83.871, elevation: "Approx. 3,710 m", label: "right", text: "A sacred site for Hindu and Buddhist pilgrims, with its temple and 108 water spouts.", image: muktinathTemple },
    { id: "upper-mustang", name: "Upper Mustang", lat: 28.95, lon: 83.72, region: true, text: "The restricted former Kingdom of Lo, a trans-Himalayan high desert north of Kagbeni.", image: mustangCliffs },
    { id: "ghami", name: "Ghami", group: "Upper Mustang", lat: 29.045, lon: 83.885, elevation: "Approx. 3,520 m", label: "left", text: "A village of red-and-white buildings, known for one of Mustang's longest mani walls." },
    { id: "tsarang", name: "Tsarang", group: "Upper Mustang", lat: 29.105, lon: 83.94, elevation: "Approx. 3,560 m", label: "right", text: "A historic village with an old fortress-palace and monastery above deep gorges." },
    { id: "lo-manthang", name: "Lo Manthang", group: "Upper Mustang", lat: 29.183, lon: 83.958, elevation: "Approx. 3,840 m", label: "right", text: "The walled capital of the former Kingdom of Lo, home to centuries-old monasteries.", image: loManthangStreet },
    { id: "chhoser", name: "Chhoser", group: "Upper Mustang", lat: 29.226, lon: 83.935, label: "left", text: "Known for its ancient cliff caves, north of Lo Manthang near the Tibetan border." },
  ],

  /* ---------- Cinematic flight journey (illustrative) ---------- */
  journey: {
    title: "The Journey Into Mustang",
    intro: "An illustrative journey from the lakes of Pokhara to the high desert of Upper Mustang and back.",
    note: "Illustrative route only. The actual route and stops depend on the operator, weather, permits and aviation permissions.",
    stages: [
      { name: "Pokhara", text: "Lift off beside Phewa Lake with the Annapurna range ahead.", image: pokhara, elevation: "Approx. 820 m" },
      { name: "Himalayan Flight", short: "Himalaya", text: "Climb towards the great snow wall of the Annapurna Himalaya.", image: annapurnaRange },
      { name: "Kali Gandaki Corridor", short: "Kali Gandaki", text: "Fly the ancient trade corridor between Dhaulagiri and Annapurna.", image: dhaulagiri },
      { name: "Jomsom Region", short: "Jomsom", text: "The windswept valley around Mustang's district headquarters.", image: valleyRoad, elevation: "Approx. 2,720 m" },
      { name: "Kagbeni", text: "The fortified village at the gateway to Upper Mustang.", image: kagbeni, elevation: "Approx. 2,810 m" },
      { name: "Mustang Landscape", short: "Mustang", text: "The valley opens into dry, ochre cliffs and green oasis villages.", image: mustangCliffs },
      { name: "Upper Mustang", text: "Monasteries, canyons and eroded ridges of the former Kingdom of Lo.", image: mustangRidgeMonastery },
      { name: "Lo Manthang", text: "The walled city, or another selected destination where permitted.", image: loManthangStreet, elevation: "Approx. 3,840 m" },
      { name: "Return Flight", short: "Return", text: "Fly back past Dhaulagiri and Annapurna towards Pokhara.", image: mustangMonastery },
    ],
  },

  /* ---------- Sample timed itinerary ---------- */
  timeline: {
    title: "Sample Upper Mustang Helicopter Experience",
    sampleDate: SAMPLE_DATE,
    note: "Sample itinerary — actual timings depend on weather, air traffic, operator and flight conditions.",
    blocks: [
      { time: "07:00", title: "Hotel Pickup", text: "Pickup from your Pokhara hotel, if included in the selected package." },
      { time: "07:30", title: "Departure From Pokhara", text: "Pre-flight briefing and take-off towards the Annapurna range." },
      { time: "08:15", title: "Himalayan Scenic Flight", text: "Views of Dhaulagiri, Annapurna and the Kali Gandaki corridor." },
      { time: "09:00", title: "Mustang Region", text: "The landscape turns dry and dramatic around Jomsom and Kagbeni." },
      { time: "09:30", title: "Upper Mustang Experience", text: "Fly towards the selected Upper Mustang area; a short stop only where permitted." },
      { time: "10:30", title: "Return Flight", text: "Begin the return journey towards Pokhara." },
      { time: "12:00", title: "Estimated Pokhara Arrival", text: "Estimated arrival, depending on actual flight operations." },
    ],
  },

  /* ---------- Lo Manthang feature ---------- */
  feature: {
    eyebrow: "The Walled City",
    title: "Discover Lo Manthang",
    paragraphs: [
      "Lo Manthang, the historic capital of the former Kingdom of Lo, lies on a high plateau near the Tibetan border. Its earthen walls, traditionally dated to the 14th century, enclose narrow lanes, whitewashed houses and the old royal palace.",
      "Inside the walls stand some of the region's most important monasteries, celebrated for their centuries-old murals. Life follows the rhythm of the seasons and festivals such as Tiji in spring, set against eroded cliffs and distant snow peaks.",
    ],
    points: ["Historic walled settlement", "Traditional mud-brick architecture", "Centuries-old monasteries", "Living Mustang culture"],
    image: mustangMonastery,
    inset: loManthangStreet,
    insetCaption: "Inside the walls of Lo Manthang",
  },

  /* ---------- Culture ---------- */
  culture: {
    title: "Where Culture Meets the Himalayas",
    intro: "Mustang's culture is a living one, shaped by faith, trade and a demanding high-altitude environment.",
    items: [
      { title: "Traditional houses", text: "Flat-roofed homes of mud and stone, with firewood stacked on the roofs.", image: loManthangStreet },
      { title: "Monasteries", text: "Centres of learning and ritual that anchor village life.", image: mustangMonastery },
      { title: "Prayer flags & offerings", text: "Colourful cloth carries prayers on the mountain wind.", image: prayerCloth },
      { title: "Mountain villages", text: "Settlements along the ancient Kali Gandaki trade route.", image: kagbeni },
      { title: "Local architecture", text: "Whitewashed and red-painted buildings on eroded ridges.", image: mustangRidgeMonastery },
      { title: "Cultural landscapes", text: "Fields, chortens and cliffs shaped over centuries.", image: mustangCliffs },
    ],
  },

  /* ---------- Landscape cinema ---------- */
  landscapes: {
    title: "The Landscapes of Upper Mustang",
    intro: "Seven scenes from a landscape unlike anywhere else in Nepal.",
    scenes: [
      { title: "Red Cliffs", text: "Wind-carved ochre and red cliffs line the valleys.", image: mustangCliffs },
      { title: "Deep Valleys", text: "Valleys fall away beneath the great Himalayan peaks.", image: valleyRoad },
      { title: "High Mountain Desert", text: "Bare, eroded ridges in the rain shadow of the Himalaya.", image: mustangRidgeMonastery },
      { title: "Ancient Villages", text: "Walled settlements and whitewashed chortens.", image: loManthangStreet },
      { title: "Snow Peaks", text: "Dhaulagiri rises above the foothills on the way north.", image: dhaulagiri },
      { title: "Kali Gandaki", text: "The wide, braided river that leads into Mustang.", image: kagbeni },
      { title: "Mustang Plateau", text: "Monasteries on open, wind-swept plateaus.", image: mustangMonastery },
    ],
  },

  /* ---------- Image sequence (no Mustang footage yet) ---------- */
  video: {
    title: "See Upper Mustang From Above",
    intro: "A moving glimpse of the journey. Add a video file (`src`) when real footage is available.",
    frames: [
      { image: pokhara, caption: "Pokhara" },
      { image: dhaulagiri, caption: "Dhaulagiri" },
      { image: kagbeni, caption: "Kagbeni & the Kali Gandaki" },
      { image: mustangCliffs, caption: "Mustang's high desert" },
      { image: mustangRidgeMonastery, caption: "Upper Mustang" },
      { image: loManthangStreet, caption: "Lo Manthang" },
    ],
  },

  /* ---------- Classic sections ---------- */
  route: {
    title: "The Flight Route",
    intro: "An illustrative route from Pokhara to Upper Mustang.",
    note: "Actual route depends on the operator, weather and aviation restrictions.",
    stops: [
      { name: "Pokhara", detail: "Departure point", mode: "landing" },
      { name: "Kali Gandaki Corridor", detail: "Between Dhaulagiri and Annapurna", mode: "aerial" },
      { name: "Jomsom", detail: "Possible operational stop", mode: "optional" },
      { name: "Kagbeni", detail: "Gateway to Upper Mustang", mode: "aerial" },
      { name: "Lo Manthang", detail: "Landing only where permitted", mode: "optional" },
      { name: "Pokhara", detail: "Return", mode: "landing" },
    ],
  },

  seasons: {
    title: "Best Time for an Upper Mustang Helicopter Tour",
    intro: "Upper Mustang lies in a rain shadow, but the flight route through the Kali Gandaki is affected by the wider Himalayan weather.",
    note: "Helicopter flights are highly weather dependent. Flight availability, route and landing locations are subject to safety, aviation regulations and operator decisions.",
    items: [
      { name: "Spring", months: "March – May", rating: "Pleasant", icon: "sun", text: "Clear landscapes and pleasant travel conditions." },
      { name: "Summer / Monsoon", months: "June – August", rating: "Variable", icon: "rain", text: "Clouds and weather can affect flight operations." },
      { name: "Autumn", months: "September – November", rating: "Best visibility", icon: "leaf", text: "Excellent mountain visibility." },
      { name: "Winter", months: "December – February", rating: "Cold", icon: "snow", text: "Cold conditions and possible snow or weather disruption." },
    ],
  },

  departures: {
    title: "Upcoming Sample Travel Dates",
    intro: "Choose a date to check availability. Flights can also be arranged on other clear-weather days.",
    sample: true,
    notice: "Sample placeholder dates — not confirmed availability",
    dates: SAMPLE_DATES,
  },

  options: {
    title: "Choose Your Upper Mustang Experience",
    intro: "We confirm availability, permits, inclusions and the current price with you before booking.",
    note: "Prices depend on season, group size, aircraft, permits and the selected package.",
    ctaLabel: "Request Current Price",
    items: [
      {
        name: "Shared Helicopter Experience",
        basis: "Per seat",
        price: "Price on Request",
        points: ["Subject to seat availability", "Shared helicopter", "Fixed departure dates"],
        idealFor: "Solo travellers, couples and small groups",
        image: kagbeni,
        whatsappMessage: "Hello Karvaahh, I'd like a shared Upper Mustang helicopter experience. Please share the current price and availability.",
      },
      {
        name: "Private Helicopter Charter",
        basis: "Private charter",
        price: "Price on Request",
        points: ["Whole helicopter for your group", "Flexible date planning", "Premium experience"],
        idealFor: "Families, groups and premium travellers",
        featured: true,
        image: mustangRidgeMonastery,
        whatsappMessage: "Hello Karvaahh, I'd like a private Upper Mustang helicopter charter. Please share the current price.",
      },
      {
        name: "Custom Upper Mustang Experience",
        basis: "Tailor-made",
        price: "Enquire for details",
        points: ["Photography-focused flights", "Combine with Muktinath", "Special occasions"],
        idealFor: "Photographers and special occasions",
        image: loManthangStreet,
        whatsappMessage: "Hello Karvaahh, I'd like a custom Upper Mustang helicopter experience. Here are my requirements:",
      },
    ],
  },

  travelerTypes: {
    title: "Who Is This For?",
    intro: "A journey for travellers who want to see one of the Himalaya's most extraordinary landscapes.",
    items: standardTravelerTypes,
  },

  inclusions: standardInclusions,
  exclusions: standardExclusions,

  safety: {
    eyebrow: "Safety First",
    title: "Before You Fly",
    intro: "Please read before booking. Upper Mustang is a remote, regulated, high-altitude region.",
    points: beforeYouFly({
      permits: "Upper Mustang is a restricted area; visits generally need special permits in addition to conservation area permits. Requirements are confirmed with your package.",
      altitude: "Lo Manthang lies at around 3,840 m. Consult a doctor before booking if you have heart, lung or blood-pressure conditions.",
    }),
  },

  trust: karvaahhTrust,

  gallery: {
    title: "Photo Gallery",
    intro: "Scenes from Upper Mustang and the journey there. Tap any photo to view it larger.",
    items: [
      { image: mustangRidgeMonastery, caption: "A monastery on an eroded ridge in Upper Mustang" },
      { image: loManthangStreet, caption: "Inside the walled city of Lo Manthang" },
      { image: mustangCliffs, caption: "Mustang's cliffs and high desert" },
      { image: kagbeni, caption: "Kagbeni and the Kali Gandaki" },
      { image: mustangMonastery, caption: "A monastery on the Mustang plateau, Dhaulagiri beyond" },
      { image: muktinathTemple, caption: "Muktinath Temple in Lower Mustang" },
      { image: dhaulagiri, caption: "Dhaulagiri" },
      { image: prayerCloth, caption: "Prayer cloth and sacred water spouts" },
      { image: annapurnaRange, caption: "The Annapurna range from Pokhara" },
    ],
  },

  faqs: [
    {
      question: "What is the Upper Mustang Helicopter Tour?",
      answer:
        "A helicopter journey from Pokhara through the Kali Gandaki corridor into Upper Mustang, with aerial views of its cliffs, canyons and villages, and a landing only where permitted.",
    },
    { question: "Where does the tour start?", answer: "Usually in Pokhara. Starting from Kathmandu can be arranged on request." },
    {
      question: "Can I fly from Pokhara to Upper Mustang?",
      answer: "Yes, subject to permits, weather and operator approval. Routes and landing points are confirmed at booking and on the day.",
    },
    { question: "How long is the tour?", answer: "Typically around 4–6 hours in total (sample), depending on the flight plan, any stops, permits and weather." },
    {
      question: "Can I visit Lo Manthang?",
      answer: "Flights towards Lo Manthang are possible, but landing depends on approved locations, permits and operational conditions, and cannot be guaranteed.",
    },
    {
      question: "Do I need permits?",
      answer: "Yes. Upper Mustang is a restricted area, and visitors generally need special permits in addition to conservation area permits. Requirements are confirmed at booking.",
    },
    { question: "Are permits included?", answer: "That depends on the selected package. We confirm in writing which permits and fees are included before you book." },
    {
      question: "Can senior citizens travel?",
      answer: "Yes, as no trekking is needed. Because parts of Upper Mustang are above 3,500 m, we recommend consulting a doctor before booking.",
    },
    { question: "Can children travel?", answer: "Children can often join, but operator and permit requirements vary. Please confirm when you enquire." },
    { question: "Is landing guaranteed?", answer: "No. Landing depends on approved locations, permits, weather and operational conditions." },
    {
      question: "What happens if weather is bad?",
      answer: "The flight may be delayed, rescheduled or cancelled, or the route changed. Rescheduling and refund terms depend on the package; enquire for details.",
    },
    { question: "Can I book privately?", answer: "Yes. A private charter reserves the whole helicopter for your group, within passenger and weight limits." },
    { question: "How much baggage is allowed?", answer: "Only a small bag with essentials. The operator confirms the weight allowance before the flight." },
    { question: "What is the best season?", answer: "Autumn and spring usually offer the clearest views. Winter is cold, and monsoon weather can affect the route." },
    {
      question: "Can Upper Mustang be combined with Muktinath?",
      answer: "Yes. Muktinath lies in Lower Mustang near the route, and the two can often be combined, subject to the flight plan and permits.",
    },
  ],

  cta: {
    title: "Discover the Hidden Himalayas From Above",
    text: "Fly beyond the ordinary and experience the extraordinary landscapes and cultural heritage of Upper Mustang with Karvaahh.",
    image: mustangRidgeMonastery,
    animated: true,
    primaryLabel: "Book Upper Mustang Tour",
    primaryHref: "#book",
    quoteLabel: "Get Custom Quote",
    whatsappLabel: "WhatsApp Us",
    planMessage: "Hello Karvaahh, I'd like to book an Upper Mustang helicopter tour.",
    quoteSubject: "Quote request: Upper Mustang Helicopter Tour",
  },

  relatedTours: relatedTours(
    "annapurna",
    "mardi-himal",
    "gosaikunda",
    "muktinath-temple",
    "everest-base-camp",
    "langtang",
    "manaslu",
    "rara",
    "kailash-aerial-darshan",
    "mountain-scenic-flight",
  ),
};
