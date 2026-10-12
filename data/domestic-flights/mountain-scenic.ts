/* ============================================================
   MOUNTAIN SCENIC FLIGHT (FIXED-WING) — PAGE DATA
   ------------------------------------------------------------
   /activities/domestic-flights/mountain-scenic
   A scenic sightseeing flight from Kathmandu (KTM) towards the
   eastern Himalaya and back — it does NOT land at Everest or Lukla.

   CONTENT RULES (keep when editing):
   - No guaranteed Everest visibility, route, window seat or timing.
   - No prices, airline names, aircraft types or safety records.
   - Inclusions are package-dependent; confirm at booking.
   - Peak heights are as commonly published; sources vary slightly.
   - Map route is an approximate scenic direction, not an aviation route.
   ============================================================ */

import type { HelicopterTour } from "@/components/activities/experience/product-types";
import {
  cholatse,
  everestDawn,
  everestSunset,
  gokyo,
  kathmanduValley,
  khumbuSunrise,
  langtangHimal,
  makaluBarun,
  mustangRidgeMonastery,
} from "../helicopter-tours/images";
import { karvaahhTrust } from "../helicopter-tours/shared";

export const mountainScenicFlightPage: HelicopterTour = {
  title: "Mountain Scenic Flight",
  slug: "mountain-scenic",
  path: "/activities/domestic-flights/mountain-scenic",
  breadcrumbLabel: "Mountain Scenic Flight",
  collection: { label: "Domestic Flights" },
  description:
    "A scenic mountain flight from Kathmandu towards the eastern Himalaya for aerial views of Mount Everest and neighbouring peaks, returning to Kathmandu in about 50–60 minutes. A sightseeing flight — it does not land at Everest or Lukla.",
  touristType: ["First-time Nepal visitors", "Families", "Senior travellers", "Photographers", "Couples", "Business travellers"],

  seo: {
    title: "Mountain Scenic Flight Nepal | Everest Experience from Kathmandu | Karvaahh",
    socialTitle: "Mountain Scenic Flight Nepal – See Everest from Above",
    description:
      "Experience Mount Everest and the Himalayan skyline from the sky with a scenic mountain flight from Kathmandu. Enjoy spectacular Everest views in roughly one unforgettable hour without trekking.",
    keywords: [
      "Mountain Scenic Flight Nepal",
      "Everest Mountain Flight",
      "Everest Scenic Flight Kathmandu",
      "Mountain Flight Kathmandu",
      "Everest Experience Flight",
      "Nepal Mountain Flight",
      "Mount Everest Flight",
      "Himalayan Scenic Flight",
      "Everest View Flight",
      "Everest Sightseeing Flight",
    ],
    ogImage: everestSunset,
  },

  duration: "Approx. 50–60 minutes",
  elevation: "Aerial views only",
  startingPoint: "Kathmandu (KTM)",
  endingPoint: "Kathmandu (KTM)",
  region: "Eastern Himalaya, Nepal",
  bestSeason: "Autumn, winter & spring mornings",
  transportation: "Fixed-wing aircraft",
  tourTypes: "Seat on a scheduled scenic flight",
  groupSize: "Subject to airline seating",
  landingNote: "Scenic flight — no landing at Everest or Lukla",

  labels: {
    why: "Why Fly",
    related: "Keep Exploring",
    relatedTitle: "Related Experiences",
    glance: "Flight at a Glance",
    nav: { overview: "Overview", itinerary: "The Flight", route: "Route", safety: "Before You Fly", book: "Enquire" },
  },
  stickyCta: { title: "Mountain Flight", mobileTitle: "Everest Mountain Flight", desktop: "Check Availability", mobile: "Enquire Now" },

  /* ---------- Hero ---------- */
  hero: {
    badge: "Karvaahh • Nepal Himalayan Experience",
    titleLead: "See the Himalayas",
    titleAccent: "from the Sky",
    subtitle: "Mountain Scenic Flight – Experience Everest from Above",
    description:
      "Fly above the Himalayan skyline and witness Mount Everest, Lhotse, Nuptse, Ama Dablam, Makalu and other legendary peaks without trekking or spending days at high altitude.",
    image: everestSunset,
    primaryCta: { label: "Check Availability" },
    secondaryCta: { label: "How the Flight Works", href: "#itinerary" },
    whatsappCta: "Enquire on WhatsApp",
    flightPath: true,
    floatingStat: { label: "Mount Everest", value: "8,848.86 m" },
    strip: [],
    trust: [
      { icon: "clock", label: "~50–60 Minutes" },
      { icon: "mapPin", label: "Kathmandu Departure" },
      { icon: "sun", label: "Early Morning" },
      { icon: "mountainSnow", label: "Everest & Himalayan Views" },
      { icon: "plane", label: "Fixed-Wing Scenic Flight" },
    ],
  },

  bookingWidget: {
    destination: "Everest & the Himalaya",
    departures: ["Kathmandu (KTM)"],
    tourTypes: ["Mountain flight seat", "Private / charter (on request)"],
    travelerOptions: ["1 Passenger", "2 Passengers", "3 Passengers", "4 Passengers", "5 Passengers", "6+ Passengers"],
    defaults: { message: "I'd like to book the Mountain Scenic Flight from Kathmandu." },
    labels: { departure: "Departure", tourType: "Flight" },
    duration: "50–60 min",
  },

  quickFacts: [
    { icon: "clock", label: "Duration", value: "50–60 Minutes" },
    { icon: "plane", label: "Departure", value: "Kathmandu • KTM" },
    { icon: "sun", label: "Best Time", value: "Early Morning" },
    { icon: "mountainSnow", label: "Experience", value: "Everest & Himalayan Panorama" },
  ],

  /* ---------- Overview ---------- */
  editorial: {
    eyebrow: "The Experience",
    title: "One Hour. A Lifetime of Himalayan Memories.",
    paragraphs: [
      "The Mountain Scenic Flight is one of Nepal's [[easiest]] and most spectacular ways to experience the Himalaya. From the comfort of a fixed-wing aircraft, you can see Mount Everest and its neighbouring giants without a single day of trekking.",
      "Flights generally depart Kathmandu in the [[early morning]], when Himalayan visibility is often at its best. The aircraft heads towards the eastern Himalayan range, offers a panoramic view of the high peaks, then turns back to Kathmandu.",
      "No trekking, no nights at high altitude, roughly [[one hour]] of flying — and some of the most remarkable aerial photography on Earth. It suits travellers with limited time, families and anyone who wants the Himalaya without the trek.",
    ],
    image: khumbuSunrise,
    inset: cholatse,
    fact: { label: "Flight time", value: "≈ 1 hour", text: "Kathmandu → Himalayan panorama → Kathmandu" },
  },

  /* ---------- Why ---------- */
  whyHelicopter: {
    title: "Why Choose a Mountain Scenic Flight?",
    intro: "A spectacular Himalayan experience that fits into a single morning.",
    items: [
      { icon: "mountainSnow", title: "Panoramic Himalayan Views", text: "Witness an extraordinary aerial panorama of Nepal's highest mountains." },
      { icon: "flag", title: "Everest from Above", text: "See Mount Everest and the surrounding Himalayan skyline from the air." },
      { icon: "footprints", title: "No Trekking Required", text: "Experience the Himalaya without long trekking days or high-altitude accommodation." },
      { icon: "clock", title: "Perfect for Limited Time", text: "A spectacular Himalayan experience that fits easily into a short Nepal itinerary." },
      { icon: "camera", title: "Photography Paradise", text: "Large windows and changing Himalayan light create exceptional photography opportunities." },
      { icon: "plane", title: "Comfortable Experience", text: "Enjoy the mountains from a comfortable fixed-wing aircraft with a professional flight crew." },
    ],
  },

  /* ---------- Timeline ---------- */
  flightSteps: {
    title: "Your Himalayan Flight Experience",
    intro: "From your hotel to the roof of the world and back, in a single morning.",
    steps: [
      { title: "Hotel Pickup", text: "Transfer to Kathmandu airport, if included in your Karvaahh package.", note: "Hotel transfers depend on the selected package." },
      { title: "Arrive at Kathmandu Airport", text: "Arrive at the domestic terminal by the airline's required check-in time." },
      { title: "Check-in & Boarding", text: "Complete check-in and security procedures before boarding." },
      { title: "Take Off from Kathmandu", text: "Rise above the Kathmandu Valley as the Himalayan skyline appears." },
      { title: "Himalayan Panorama", text: "Fly towards the eastern Himalaya for views of peaks, glaciers and valleys." },
      { title: "Everest Region", text: "Views of Everest, Lhotse, Nuptse, Ama Dablam, Makalu and neighbouring peaks, weather permitting." },
      { title: "Turn Around", text: "The aircraft turns back towards Kathmandu after the mountain-viewing segment." },
      { title: "Return to Kathmandu", text: "Land back in Kathmandu after approximately 50–60 minutes." },
    ],
  },

  /* ---------- Peaks ---------- */
  peaks: {
    title: "Meet the Giants of the Himalayas",
    intro: "Peaks you may see on the flight, from the Langtang range in the west to Makalu in the east.",
    note: "Mountain visibility depends on weather, atmospheric conditions, flight route and operational conditions. The exact peaks visible may vary. Published heights vary slightly between sources.",
    items: [
      { name: "Mount Everest / Sagarmatha", metres: 8848.86, decimals: 2, region: "Khumbu · Mahalangur Himal", text: "The highest mountain on Earth, rising above the Khumbu on the Nepal–China border.", image: everestSunset },
      { name: "Lhotse", metres: 8516, region: "Khumbu", text: "The world's fourth-highest peak, joined to Everest by the South Col." },
      { name: "Makalu", metres: 8485, region: "Makalu-Barun", text: "A striking four-sided pyramid and the fifth-highest mountain." },
      { name: "Cho Oyu", metres: 8188, region: "Khumbu · Gokyo", text: "The sixth-highest peak, above the Gokyo valley and the Nangpa La." },
      { name: "Nuptse", metres: 7855, region: "Khumbu", text: "The long, fluted wall that rises in front of Everest.", image: { ...everestDawn, alt: "Nuptse and Everest above the Khumbu Glacier at dawn", label: "Nuptse" } },
      { name: "Chamlang", metres: 7321, region: "Makalu-Barun", text: "A broad, glaciated massif south-west of Makalu." },
      { name: "Langtang Lirung", metres: 7227, region: "Langtang", text: "The highest peak of the Langtang range, north of Kathmandu." },
      { name: "Melungtse", metres: 7181, region: "Rolwaling", text: "A massive peak just across the border, beside Gauri Shankar." },
      { name: "Pumori", metres: 7161, region: "Khumbu", text: "An elegant cone just west of Everest." },
      { name: "Gauri Shankar", metres: 7134, region: "Rolwaling", text: "A twin-summited sacred mountain, easily recognised from Kathmandu flights." },
      { name: "Numbur", metres: 6958, region: "Rolwaling · Solu", text: "A snow peak above the Solu valleys, known locally as Shorong Yul Lha." },
      { name: "Ama Dablam", metres: 6812, region: "Khumbu", text: "Perhaps the Himalaya's most beautiful peak, with its distinctive 'mother's necklace'." },
      { name: "Karyolung", metres: 6511, region: "Solu", text: "A glaciated peak rising above the Solu region." },
    ],
  },

  /* ---------- Map (approximate, illustrative) ---------- */
  places: [
    { id: "kathmandu", name: "Kathmandu (KTM)", lat: 27.697, lon: 85.359, elevation: "Departure", label: "bottom", text: "Flights depart from the domestic terminal of Tribhuvan International Airport, usually early in the morning.", image: kathmanduValley },
    { id: "langtang", name: "Langtang", lat: 28.256, lon: 85.519, elevation: "Langtang Lirung 7,227 m", label: "top", text: "The Langtang range, north of the Kathmandu Valley.", image: langtangHimal },
    { id: "gauri-shankar", name: "Gauri Shankar", lat: 27.953, lon: 86.336, elevation: "7,134 m", label: "top", text: "The twin-summited sacred peak of the Rolwaling Himal." },
    { id: "everest", name: "Everest", lat: 27.988, lon: 86.925, elevation: "8,848.86 m", label: "top", text: "Mount Everest, Lhotse and Nuptse — the highlight of the flight, weather permitting.", image: everestDawn },
    { id: "makalu", name: "Makalu", lat: 27.889, lon: 87.088, elevation: "8,485 m", label: "right", text: "The eastern Himalaya around Makalu, where the flight typically turns back.", image: makaluBarun },
    { id: "eastern-himalaya", name: "Eastern Himalaya", lat: 27.6, lon: 86.55, region: true, text: "The great range east of Kathmandu, from Rolwaling to Makalu." },
  ],
  map: {
    title: "Follow the Flight Toward Everest",
    intro: "Kathmandu → Langtang region → Everest region → Eastern Himalaya → Kathmandu. Tap a marker for each highlight.",
    note: "Approximate scenic flight direction — actual flight route may vary according to aviation, weather and operational conditions.",
    bounds: { west: 85.05, east: 87.45, south: 27.4, north: 28.45 },
    route: ["kathmandu", "langtang", "gauri-shankar", "everest", "makalu", "kathmandu"],
    routes: [
      { id: "scenic", label: "Scenic flight direction", style: "air", places: ["kathmandu", "langtang", "gauri-shankar", "everest", "makalu", "kathmandu"] },
    ],
    selected: "everest",
    aircraft: true,
  },

  /* ---------- Gallery ---------- */
  gallery: {
    title: "A Window to the Himalayas",
    intro: "Scenes of the peaks and landscapes along the flight. Tap any photo to view it larger.",
    items: [
      { image: everestSunset, caption: "Mount Everest at sunset" },
      { image: everestDawn, caption: "Everest, Nuptse and the Khumbu Glacier at dawn" },
      { image: khumbuSunrise, caption: "Himalayan sunrise above the clouds" },
      { image: cholatse, caption: "Cholatse and Taboche in the Khumbu" },
      { image: gokyo, caption: "Gokyo Lake and the Ngozumpa Glacier, below Cho Oyu" },
      { image: makaluBarun, caption: "The Makalu-Barun region" },
      { image: langtangHimal, caption: "The Langtang Himal" },
      { image: kathmanduValley, caption: "The Kathmandu Valley and the Himalayan horizon" },
    ],
  },

  /* ---------- Seasons ---------- */
  seasons: {
    title: "When Should You Take the Flight?",
    intro: "Early morning is generally preferred, as Himalayan visibility is often better before clouds build.",
    note: "Weather conditions vary and clear skies cannot be guaranteed. Monsoon and cloud can affect visibility, and flights may be delayed, rescheduled or cancelled due to unsuitable weather or operational conditions.",
    items: [
      { name: "Autumn", months: "September – November", rating: "Excellent", icon: "leaf", text: "Generally excellent mountain-viewing conditions with crisp Himalayan mornings." },
      { name: "Winter", months: "December – February", rating: "Often very clear", icon: "snow", text: "Often very clear mountain mornings and dramatic snow-covered landscapes." },
      { name: "Spring", months: "March – May", rating: "Favourable", icon: "sun", text: "Beautiful Himalayan scenery with generally favourable morning visibility." },
    ],
  },

  /* ---------- Spotlights ---------- */
  spotlights: [
    {
      id: "what-you-see",
      eyebrow: "On the Flight",
      title: "What You Can See",
      paragraphs: ["On a clear morning, the window frames one of the greatest mountain panoramas on Earth."],
      points: [
        "Mount Everest",
        "Lhotse",
        "Nuptse",
        "Makalu",
        "Ama Dablam",
        "Pumori",
        "Cho Oyu",
        "Langtang",
        "Glaciers",
        "Himalayan valleys",
        "Snow-covered peaks",
        "Sunrise over the Himalayas",
      ],
      note: "Visibility depends on weather; the peaks you see may vary.",
      variant: "cards",
    },
    {
      id: "weather",
      eyebrow: "Important Information",
      title: "Mountain Flights Are Weather-Dependent",
      paragraphs: [
        "Visibility can change rapidly in the Himalaya. Flights may be delayed, rescheduled or cancelled because of cloud, poor visibility, wind, airport restrictions or other operational conditions.",
        "We cannot guarantee clear views of Everest or an exact flight route. If your flight is affected, we help you with the airline's rescheduling or refund options — keep a little flexibility in your Kathmandu plans.",
      ],
      variant: "cards",
      dark: true,
    },
    {
      id: "flight-safety",
      eyebrow: "Flight Safety",
      title: "Flying With Confidence",
      paragraphs: ["Scenic flights are run by established domestic airlines under standard aviation procedures."],
      cards: [
        { icon: "plane", title: "Established airlines", text: "Flights operated by established domestic airlines." },
        { icon: "users", title: "Professional crew", text: "Trained flight crews following standard procedures." },
        { icon: "cloud", title: "Weather checks", text: "Weather and operational checks before every departure." },
        { icon: "shield", title: "Passenger safety", text: "Passenger safety briefings and procedures on board." },
        { icon: "passport", title: "Airport security", text: "Airport security screening and airline regulations apply." },
        { icon: "route", title: "Operational decisions", text: "The airline's operational decisions on timing and routing are final." },
      ],
      variant: "cards",
    },
  ],

  /* ---------- Inclusions ---------- */
  inclusions: [
    { text: "Mountain scenic flight ticket", status: "included" },
    { text: "Himalayan mountain-viewing experience", status: "included" },
    { text: "Window seating where offered by the airline / package", status: "package" },
    { text: "Mountain information / commentary where provided", status: "package" },
    { text: "Flight certificate where applicable", status: "package" },
    { text: "Hotel pickup / drop", status: "package" },
    { text: "Airport transfers", status: "package" },
    { text: "Breakfast", status: "package" },
    { text: "Private vehicle", status: "package" },
    { text: "Dedicated guide", status: "package" },
  ],
  exclusions: ["Personal expenses", "Travel insurance", "Services not listed in your confirmed package"],

  /* ---------- Before you fly ---------- */
  safety: {
    eyebrow: "Preparation",
    title: "Before You Fly",
    intro: "A few simple things make the morning smooth. Exact inclusions depend on the airline and Karvaahh package selected — please confirm them at the time of booking.",
    points: [
      { icon: "clock", title: "Arrive on time", text: "Arrive according to the airline's check-in requirements." },
      { icon: "passport", title: "Carry ID", text: "Carry a valid passport or identification as applicable." },
      { icon: "shield", title: "Airport security", text: "Follow airport security regulations." },
      { icon: "camera", title: "Camera ready", text: "Keep your camera or phone charged and ready." },
      { icon: "sun", title: "Comfortable clothing", text: "Wear comfortable clothing; mornings can be cool." },
      { icon: "users", title: "Crew instructions", text: "Follow the crew's instructions at all times." },
      { icon: "cloud", title: "Weather changes", text: "Be prepared for weather-related schedule changes." },
      { icon: "calendar", title: "Confirm status", text: "Confirm your flight status before leaving your hotel." },
    ],
  },

  travelerTypes: {
    title: "Who Is This Experience For?",
    intro: "Anyone who wants spectacular Himalayan views without undertaking a long trek.",
    items: [
      { icon: "compass", title: "First-Time Nepal Visitors", text: "The perfect introduction to the Himalaya." },
      { icon: "users", title: "Families", text: "A shared adventure with no trekking involved." },
      { icon: "heart", title: "Senior Travellers", text: "Everest views without altitude or long walks." },
      { icon: "sun", title: "Couples", text: "A sunrise over the roof of the world together." },
      { icon: "camera", title: "Photographers", text: "Rare aerial angles in clear morning light." },
      { icon: "mountainSnow", title: "Adventure Seekers", text: "Add the Everest skyline to your Nepal story." },
      { icon: "clock", title: "Business Travellers", text: "A Himalayan highlight before your first meeting." },
      { icon: "shield", title: "Travellers Unable to Trek", text: "See the giants without the physical demands." },
    ],
  },

  comparison: {
    title: "Mountain Flight vs Lukla Flight",
    intro: "Two very different flights from Kathmandu. Here's how to tell them apart.",
    columns: [
      {
        eyebrow: "Sightseeing",
        title: "Mountain Scenic / Everest Flight",
        highlight: true,
        points: [
          "Scenic sightseeing experience",
          "Kathmandu → Himalayan region → Kathmandu",
          "Approximately 50–60 minutes",
          "No trekking required",
          "Does not land at Everest",
          "Designed primarily for mountain viewing",
        ],
      },
      {
        eyebrow: "Point to point",
        title: "Kathmandu → Lukla",
        points: [
          "Point-to-point domestic flight",
          "Kathmandu → Lukla",
          "Used primarily for Everest trekking routes",
          "Requires onward trekking",
          "Lukla is the landing destination",
        ],
      },
    ],
  },

  trust: {
    ...karvaahhTrust,
    intro: "Karvaahh – Live to Travel · Nepal & India Travel Experiences. Teams in Kathmandu and Delhi NCR coordinate your flight, transfers and Himalayan plans.",
  },

  faqs: [
    { question: "What is a Mountain Scenic Flight in Nepal?", answer: "A sightseeing flight from Kathmandu that flies towards the eastern Himalaya for aerial views of Mount Everest and neighbouring peaks, then returns to Kathmandu without landing anywhere else." },
    { question: "How long is the Everest scenic flight?", answer: "Approximately 50–60 minutes in the air. Allow extra time for airport check-in and transfers." },
    { question: "Where does the mountain flight depart from?", answer: "From the domestic terminal of Tribhuvan International Airport (KTM) in Kathmandu, usually early in the morning." },
    { question: "Does the flight land at Mount Everest?", answer: "No. It is a scenic flight that views Everest from the air and returns to Kathmandu." },
    { question: "Does the flight land at Lukla?", answer: "No. Lukla flights are separate point-to-point flights used for trekking in the Everest region." },
    { question: "Which mountains can I see?", answer: "On a clear morning, peaks such as Everest, Lhotse, Nuptse, Makalu, Ama Dablam, Pumori, Cho Oyu, Gauri Shankar and the Langtang range. Visibility depends on the weather." },
    { question: "Is every passenger guaranteed a window seat?", answer: "Seating depends on the airline and aircraft. Many scenic flights are arranged so passengers get window views; please confirm the arrangement when booking." },
    { question: "What is the best season for a mountain flight?", answer: "Autumn and winter often have the clearest mornings; spring is also generally favourable. The monsoon can bring cloud that affects visibility." },
    { question: "What happens if the weather is bad?", answer: "Flights may be delayed, rescheduled or cancelled. Rescheduling and refunds follow the airline's policy, which we explain before you book." },
    { question: "Is the flight suitable for elderly travelers?", answer: "Yes. There is no trekking or time at high altitude. Travellers with medical conditions should consult their doctor before flying." },
    { question: "Is it suitable for families with children?", answer: "Yes, families often take the flight together. Airline rules for infants and children apply and are confirmed at booking." },
    { question: "Is hotel pickup available?", answer: "Hotel transfers depend on the selected Karvaahh package. We confirm what is included before you book." },
    { question: "What is the difference between a mountain flight and a Lukla flight?", answer: "A mountain flight is a round-trip sightseeing flight from Kathmandu; a Lukla flight is a one-way domestic flight to the Lukla airstrip, the starting point for Everest treks." },
    { question: "Can I book a private or charter scenic flight?", answer: "Private or charter options may be arranged on request, subject to airline availability. Ask us for details." },
    { question: "Can I take photographs during the flight?", answer: "Yes, photography is usually welcome. Follow crew instructions, especially during take-off and landing." },
  ],

  cta: {
    title: "Your Window to Everest Is Waiting.",
    text: "See Mount Everest and the Himalayan skyline from above — without trekking, without high-altitude stays, and in roughly one unforgettable hour.",
    image: everestSunset,
    animated: true,
    primaryLabel: "Check Availability",
    primaryHref: "#book",
    quoteLabel: "Book Your Flight",
    whatsappLabel: "WhatsApp Us",
    planMessage: "Hello Karvaahh, I'd like to book the Mountain Scenic Flight from Kathmandu.",
    quoteSubject: "Booking enquiry: Mountain Scenic Flight",
  },

  enquiry: {
    title: "Plan Your Mountain Flight",
    intro: "Share a few details and we will confirm flight availability, timings and inclusions for your date.",
    options: {
      passengers: ["1 Passenger", "2 Passengers", "3 Passengers", "4 Passengers", "5 Passengers", "6+ Passengers"],
      airlines: ["No preference", "Recommend for me", "Other (mention in message)"],
      times: ["Earliest available", "Early morning", "Flexible"],
    },
  },

  relatedTours: [
    { title: "Kathmandu & Bagmati", text: "Heritage squares, stupas and valley views around the capital.", href: "/destinations/bagmati-province", image: kathmanduValley },
    { title: "Everest Region & Koshi", text: "The Khumbu, Everest and eastern Nepal's mountains.", href: "/destinations/koshi-province", image: cholatse },
    { title: "Everest Helicopter Tour", text: "Fly into the Khumbu and land near Everest, weather permitting.", href: "/activities/helicopter-tours/everest-base-camp", image: everestDawn },
    { title: "Helicopter Scenic Flight", text: "A private Himalayan flight by helicopter.", href: "/activities/helicopter-tours/mountain-scenic-flight", image: khumbuSunrise },
    { title: "Upper Mustang Helicopter Tour", text: "Red cliffs and Lo Manthang from the sky.", href: "/activities/helicopter-tours/upper-mustang", image: mustangRidgeMonastery },
    { title: "Nepal Packages", text: "Complete Nepal journeys planned by Karvaahh.", href: "/packages/nepal", image: langtangHimal },
  ],

  /* ---------- Required by the template ---------- */
  route: {
    title: "The Flight Route",
    intro: "An approximate scenic direction.",
    note: "Actual route varies with aviation, weather and operational conditions.",
    stops: [
      { name: "Kathmandu (KTM)", detail: "Departure", mode: "landing" },
      { name: "Langtang region", detail: "Aerial views", mode: "aerial" },
      { name: "Everest region", detail: "Aerial views", mode: "aerial" },
      { name: "Eastern Himalaya", detail: "Aerial views", mode: "aerial" },
      { name: "Kathmandu (KTM)", detail: "Return", mode: "landing" },
    ],
  },
  options: {
    title: "Flight Options",
    intro: "Confirmed with you at booking.",
    note: "Prices depend on the airline, season and date.",
    items: [
      { name: "Mountain flight seat", basis: "Per seat", price: "Price on Request", points: ["Scheduled scenic flight"], idealFor: "Most travellers", whatsappMessage: "Hello Karvaahh, please share the price of the Mountain Scenic Flight." },
      { name: "Private / charter (on request)", basis: "Charter", price: "Enquire for details", points: ["Subject to airline availability"], idealFor: "Groups", whatsappMessage: "Hello Karvaahh, I'd like a private mountain flight." },
    ],
  },

  layout: [
    "hero",
    "stats-bar",
    "nav",
    "trust-bar",
    "story",
    "why",
    "flight-steps",
    "peaks",
    "map",
    "gallery",
    "seasons",
    "spotlight:what-you-see",
    "inclusions",
    "safety",
    "travelers",
    "comparison",
    "spotlight:weather",
    "spotlight:flight-safety",
    "faq",
    "cta",
    "enquiry",
    "related",
  ],
};
