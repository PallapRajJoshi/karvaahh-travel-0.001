/* ============================================================
   GOSAIKUNDA HELICOPTER TOUR — TOUR DATA
   ------------------------------------------------------------
   Single source of truth for the page. Edit text, facts, options
   and images here; the layout picks everything up automatically.

   CONTENT RULES (keep when editing):
   - No prices, exact flight times or guaranteed landings. Use
     "Price on Request", "Enquire for details" or "Subject to
     weather and operational conditions" until confirmed.
   - Religious content is described as tradition and belief, never
     as historical fact. Keep the language respectful.

   IMAGES: `src: null` = photo not sourced yet (highlights show an
   elevation card; the gallery skips it). To add one, save it to
   /public/images/activities/helicopter-tours/gosaikunda/ and set `src`.
   ============================================================ */

import type { HelicopterProductTour } from "@/components/activities/experience/product-types";
import type { PageImage, RequiredImage } from "@/components/activities/experience/types";
import { relatedTours } from "./catalog";

const IMG_DIR = "/images/activities/helicopter-tours/gosaikunda";

const gosaikunda: RequiredImage = {
  src: "/images/bagmati/gosainkunda-lake-langtang-himalayan-trekking-bagmati-nepal.jpg",
  alt: "The turquoise waters of Gosaikunda and a neighbouring sacred lake among rugged high-altitude ridges, with clouds over the Langtang Himalaya",
  label: "Gosaikunda Lake",
  width: 1200,
  height: 895,
  objectPosition: "center 60%",
};

const langtangHimal: RequiredImage = {
  src: "/images/bagmati/langtang-valley-trekking-himalayan-mountains-bagmati-nepal.jpg",
  alt: "Snow-covered peaks of the Langtang Himal rising above a high valley trail",
  label: "Langtang Himal",
  width: 3840,
  height: 2560,
  objectPosition: "center 30%",
};

const langtangValley: RequiredImage = {
  src: "/images/bagmati/langtang-valley-rasuwa-himalayan-mountains-trekking-nepal.jpg",
  alt: "A mountain village in the Langtang Valley beneath snow peaks",
  label: "Langtang Valley",
  width: 6000,
  height: 3375,
};

const kathmandu: RequiredImage = {
  src: "/images/bagmati/bagmati-province-kathmandu-valley-himalayan-travel-inspiration-nepal.jpg",
  alt: "Aerial view of the Kathmandu valley with the Himalayan range on the northern horizon",
  label: "Kathmandu Valley",
  width: 1920,
  height: 1080,
};

const tamangVillage: PageImage = {
  src: "/images/bagmati/tamang-village-langtang-himalayan-culture-bagmati-nepal.jpg",
  alt: "Stone and timber houses with prayer flags in a Tamang village of the Langtang region",
  label: "Tamang heritage",
  width: 1000,
  height: 750,
};

/** Photo slot waiting for a licensed image; save it as `${IMG_DIR}/<file>`. */
const pending = (file: string, label: string, alt: string): PageImage & { plannedFile: string } => ({
  src: null,
  label,
  alt,
  plannedFile: `${IMG_DIR}/${file}`,
});

const sacredLakes = pending("sacred-lakes.jpg", "Sacred lakes", "Saraswati Kunda and Bhairab Kunda near Gosaikunda");
const laurebina = pending("laurebina-la.jpg", "Laurebina La", "Prayer flags on the Laurebina La pass above Gosaikunda");
const ganeshHimal = pending("ganesh-himal.jpg", "Ganesh Himal", "The Ganesh Himal range seen from the Gosaikunda region");
const helicopter = pending("helicopter-gosaikunda.jpg", "Helicopter flight", "A helicopter flying above Gosaikunda Lake");
const pilgrims = pending("gosaikunda-pilgrimage.jpg", "Pilgrimage", "Pilgrims at the shore of Gosaikunda Lake");

export const gosaikundaHelicopterTour: HelicopterProductTour = {
  title: "Gosaikunda Helicopter Tour",
  slug: "gosaikunda",
  path: "/activities/helicopter-tours/gosaikunda",
  breadcrumbLabel: "Gosaikunda",
  description:
    "A scenic and spiritual helicopter tour from Kathmandu to the sacred Gosaikunda Lake in the Langtang Himalaya, with an optional short landing where weather, regulations and operator approval allow.",
  touristType: ["Pilgrims", "Senior travellers", "Families", "Photographers", "Spiritual travellers"],

  seo: {
    title: "Gosaikunda Helicopter Tour from Kathmandu | Karvaahh",
    socialTitle: "Gosaikunda Helicopter Tour – Sacred Himalayan Lake Experience",
    description:
      "Experience the sacred Gosaikunda Lake by helicopter from Kathmandu with breathtaking Langtang Himalayan views. Plan your Gosaikunda pilgrimage with Karvaahh.",
    keywords: [
      "Gosaikunda Helicopter Tour",
      "Gosaikunda Helicopter Tour from Kathmandu",
      "Gosaikunda Helicopter Flight",
      "Kathmandu to Gosaikunda Helicopter Tour",
      "Gosaikunda Lake Helicopter Tour",
      "Gosaikunda Yatra by Helicopter",
      "Langtang Helicopter Tour",
      "Helicopter Tour in Nepal",
      "Gosaikunda Pilgrimage Tour",
      "Gosaikunda Sightseeing Flight",
    ],
    ogImage: gosaikunda,
  },

  duration: "Approx. 1–2 hours",
  elevation: "Approx. 4,380 m (lake)",
  startingPoint: "Kathmandu",
  endingPoint: "Kathmandu",
  region: "Langtang Himalaya, Nepal",
  bestSeason: "Autumn & Spring",
  transportation: "Helicopter, with ground transfers depending on package",
  tourTypes: "Scenic & spiritual helicopter tour",
  groupSize: "Private & shared options",
  landingNote:
    "Landing locations, flight routes and operating times are subject to weather, aviation regulations, safety requirements and helicopter operator approval.",

  hero: {
    badge: "Helicopter Tours • Nepal",
    titleLead: "Gosaikunda",
    titleAccent: "Helicopter Tour",
    description:
      "Fly above the sacred Gosaikunda Lake and experience one of Nepal's most spectacular Himalayan landscapes from the sky.",
    image: gosaikunda,
    ambient: true,
    primaryCta: { label: "Book Gosaikunda Helicopter Tour", href: "#book" },
    secondaryCta: { label: "Get a Quote", href: "#enquire" },
    trust: [
      { icon: "mountainSnow", label: "Himalayan Scenic Flight" },
      { icon: "landmark", label: "Spiritual Journey" },
      { icon: "users", label: "Private & Group Options" },
    ],
    strip: [
      { label: "Duration", value: "Approx. 1–2 Hours" },
      { label: "Start / End", value: "Kathmandu / Kathmandu" },
      { label: "Destination", value: "Gosaikunda Lake" },
      { label: "Region", value: "Langtang Himalaya" },
      { label: "Availability", value: "Weather & Operations Dependent" },
    ],
  },

  quickFacts: [
    { icon: "clock", label: "Duration", value: "Approx. 1–2 hours", note: "As per selected flight plan" },
    { icon: "route", label: "Starting Point", value: "Kathmandu" },
    { icon: "waves", label: "Destination", value: "Gosaikunda Lake", note: "Approx. 4,380 m" },
    { icon: "mountain", label: "Region", value: "Langtang Himalaya", note: "Langtang National Park" },
    { icon: "landmark", label: "Experience", value: "Scenic & spiritual flight", note: "Landing where approved" },
    { icon: "users", label: "Best For", value: "Pilgrims & families", note: "Seniors • Photographers • Explorers" },
    { icon: "calendar", label: "Availability", value: "Weather & operations dependent" },
    { icon: "sun", label: "Best Season", value: "Autumn & Spring", note: "Pilgrimage peaks at Janai Purnima" },
  ],

  overview: {
    title: "Fly to the Sacred Gosaikunda Lake",
    lead:
      "High in the Langtang Himalaya, at around 4,380 metres, lies Gosaikunda, one of Nepal's most revered sacred lakes and a place where faith and mountain landscapes meet.",
    paragraphs: [
      "Gosaikunda sits within Langtang National Park, north of Kathmandu, in a high basin of rock and alpine grass. It is the best known of a chain of glacial lakes in the area, and together they are recognised as a protected wetland of international importance.",
      "In Hindu tradition, Gosaikunda is closely associated with Lord Shiva. It is believed that Shiva struck the mountainside with his trident to draw water and cool his throat after drinking poison during the churning of the cosmic ocean, creating the lake. The lake is also revered by Buddhists, and pilgrims have made the journey here for generations.",
      "Each year around Janai Purnima, thousands of devotees climb to the lake to bathe and offer prayers. At other times, the basin is quiet and still, its blue water reflecting the ridges and the sky.",
      "Reaching Gosaikunda on foot usually takes several days of steep trekking at altitude. A helicopter tour from Kathmandu allows pilgrims and travellers to experience the sacred lake and the Langtang Himalaya in a single morning, without the physical demands of the trail.",
    ],
    image: gosaikunda,
    imageCaption: "Gosaikunda and a neighbouring sacred lake in the Langtang Himalaya",
    links: [
      { label: "Langtang Valley Trek", href: "/adventure/langtang-valley-trek" },
      { label: "Explore Bagmati Province", href: "/destinations/bagmati-province" },
    ],
  },

  significance: {
    eyebrow: "Experience Highlights",
    symbol: "",
    title: "Highlights of Your Gosaikunda Helicopter Experience",
    intro: "Ten moments that make this journey both scenic and deeply meaningful.",
    items: [
      { name: "Scenic Flight From Kathmandu", text: "Lift off over the valley with the Himalaya on the northern horizon." },
      { name: "Langtang Himal Panorama", text: "Wide views of the snow peaks of the Langtang range." },
      { name: "Aerial Views of Gosaikunda", text: "See the sacred lake's blue waters from above." },
      { name: "Himalayan Valleys & Ridges", text: "Fly over forested valleys and rugged high ridgelines." },
      { name: "High-Altitude Landscapes", text: "Rock, alpine grass and lakes above 4,000 metres." },
      { name: "Spiritual Pilgrimage", text: "Visit one of Nepal's most revered sacred lakes." },
      { name: "Photography Opportunities", text: "Lakes, peaks and drifting clouds in clear morning light." },
      { name: "Surrounding Sacred Lakes", text: "Neighbouring lakes of the Gosaikunda chain, where visible." },
      { name: "Optional Landing", text: "Subject to weather, regulations and operator approval." },
      { name: "Return Flight to Kathmandu", text: "Another perspective of the Langtang region on the way back." },
    ],
  },

  whyHelicopter: {
    title: "Why Experience Gosaikunda From the Sky?",
    intro: "Six reasons pilgrims and travellers choose the helicopter journey.",
    items: [
      { title: "Sacred Himalayan Destination", text: "Experience one of Nepal's most revered high-altitude pilgrimage sites." },
      { title: "Spectacular Lake Views", text: "See the striking blue waters of Gosaikunda surrounded by rugged Himalayan terrain." },
      { title: "Skip the Long Trek", text: "Reach the high-altitude region without spending several days trekking." },
      { title: "Ideal for Pilgrims", text: "A convenient option for travellers visiting Gosaikunda for spiritual purposes." },
      { title: "Perfect for Senior Travellers", text: "A comfortable alternative for travellers who may find the trek physically demanding." },
      { title: "Unforgettable Himalayan Photography", text: "Capture dramatic views of lakes, mountains, valleys and clouds from above." },
    ],
  },

  highlights: {
    title: "What You Can See From the Helicopter",
    intro: "The lakes, peaks and valleys of the Langtang region. Visibility depends on the day's weather. Elevations are approximate.",
    items: [
      { name: "Gosaikunda Lake", elevation: "Approx. 4,380 m", text: "The sacred lake at the heart of the journey.", image: gosaikunda },
      { name: "Langtang Himal", text: "The snow range north of the lake, crowned by Langtang Lirung (7,227 m).", image: langtangHimal },
      { name: "Langtang Valley", text: "A deep glacial valley of Tamang villages beneath the peaks.", image: langtangValley },
      { name: "Kathmandu Valley", elevation: "Approx. 1,400 m", text: "Your departure point, with the Himalaya on the horizon.", image: kathmandu },
      { name: "Sacred Lakes of the Region", text: "Saraswati Kunda, Bhairab Kunda and others in the Gosaikunda chain.", image: sacredLakes },
      { name: "Laurebina La", elevation: "Approx. 4,610 m", text: "The high pass above the lakes, hung with prayer flags.", image: laurebina },
      { name: "Ganesh Himal", elevation: "7,422 m", text: "A neighbouring snow range visible on clear days.", image: ganeshHimal },
      { name: "Himalayan Ridges", text: "Rugged ridgelines and high-altitude terrain around the basin." },
    ],
  },

  story: {
    eyebrow: "Journey • Faith • Himalayas",
    title: "A Sacred Journey Above the Himalayas",
    paragraphs: [
      "For centuries, pilgrims have climbed to Gosaikunda on foot, carrying offerings up steep forest trails and over high ridges. For many, reaching the lake is the fulfilment of a lifelong wish, and the journey itself is part of the devotion.",
      "In Hindu belief the lake is linked to Lord Shiva, and its waters are considered purifying. During Janai Purnima, devotees gather on its shores to bathe and pray, and the sacred thread worn by many Hindus is renewed. Throughout the year, the stillness of the high basin, the cold clear water and the surrounding peaks offer a powerful sense of connection between faith and nature.",
    ],
    points: [
      "Sacred in Hindu tradition",
      "Revered by Buddhists",
      "Janai Purnima pilgrimage",
      "Protected high-altitude wetland",
      "Langtang National Park",
      "A place of stillness and prayer",
    ],
    images: [gosaikunda, langtangValley],
  },

  route: {
    title: "The Flight Route",
    intro: "How a typical flight unfolds, and which points are seen from the air versus where the helicopter may land.",
    note: "Landing locations, flight routes and operating times are subject to weather, aviation regulations, safety requirements and helicopter operator approval.",
    stops: [
      { name: "Kathmandu", detail: "Departure point", mode: "landing", elevation: "Approx. 1,400 m" },
      { name: "Kathmandu Valley & Northern Hills", detail: "Climb over the valley rim", mode: "aerial" },
      { name: "Forested Valleys", detail: "Rivers and hill villages below", mode: "aerial" },
      { name: "Langtang National Park Ridges", detail: "High ridges approaching the lakes", mode: "aerial" },
      { name: "Gosaikunda Lake", detail: "Short landing where approved", mode: "optional", elevation: "Approx. 4,380 m" },
      { name: "Langtang Himal Panorama", detail: "Snow peaks to the north, weather permitting", mode: "aerial" },
      { name: "Kathmandu", detail: "Return and arrival", mode: "landing", elevation: "Approx. 1,400 m" },
    ],
  },

  itinerary: {
    title: "Your Gosaikunda Helicopter Journey",
    intro: "Choose how you would like to travel. Every option is a sample and is confirmed with you before booking.",
    options: [
      {
        id: "kathmandu",
        tab: "From Kathmandu",
        title: "Gosaikunda Helicopter Tour from Kathmandu",
        tag: "Classic journey",
        availability: "standard",
        summary: "The classic morning journey from Kathmandu to the sacred lake and back.",
        steps: [
          { title: "Hotel Pickup / Departure", text: "If included in the selected package, transfer from your Kathmandu hotel to the designated helicopter departure point." },
          { title: "Helicopter Takeoff", text: "Begin the journey from Kathmandu and fly towards the Langtang Himalayan region." },
          { title: "Himalayan Scenic Flight", text: "Spectacular aerial views of valleys, forests, ridges and snow-covered Himalayan peaks." },
          { title: "Arrival Above Gosaikunda", text: "Approach the sacred Gosaikunda Lake and take in the high-altitude landscape." },
          {
            title: "Gosaikunda Experience",
            text: "Enjoy the lake and surrounding scenery from the designated safe area. If landing is permitted, a short ground experience may be possible, subject to operator and aviation requirements.",
          },
          { title: "Return to Kathmandu", text: "Depart Gosaikunda and enjoy another perspective of the Langtang region on the way back." },
        ],
        notice:
          "Landing locations, flight routes and operating times are subject to weather, aviation regulations, safety requirements and helicopter operator approval.",
      },
      {
        id: "private",
        tab: "Private Charter",
        title: "Private Gosaikunda Helicopter Charter",
        tag: "Private",
        availability: "standard",
        summary: "The journey on a helicopter reserved for your family or pilgrimage group alone, planned around your needs within the aircraft's limits.",
        steps: [
          { title: "Your Group Only", text: "The whole helicopter is reserved for you, within passenger and weight limits." },
          { title: "Planned Around You", text: "Departure planning and time for prayers discussed in advance, subject to operations." },
          { title: "Gosaikunda", text: "Fly to the sacred lake, with a short landing where approved." },
          { title: "Return", text: "Fly back to Kathmandu with personalised coordination throughout." },
        ],
        points: ["Exclusive helicopter", "Flexible group", "Ideal for families", "Private pilgrimage groups"],
      },
      {
        id: "janai-purnima",
        tab: "Janai Purnima Yatra",
        title: "Gosaikunda Yatra During Janai Purnima",
        tag: "Seasonal / on request",
        availability: "on-request",
        summary:
          "For pilgrims who wish to visit during the Janai Purnima festival. The festival falls in the monsoon, so flights are more weather dependent and demand is high; early planning and flexible dates are essential.",
        steps: [
          { title: "Plan Early", text: "Share your preferred dates well in advance of the festival." },
          { title: "Flexible Departure", text: "Departure is planned around the clearest weather window available." },
          { title: "Gosaikunda", text: "Visit the sacred lake during the pilgrimage period, conditions permitting." },
          { title: "Return", text: "Fly back to Kathmandu." },
        ],
        notice: "Available on request / subject to flight operations. Monsoon weather can delay or cancel flights.",
      },
      {
        id: "custom",
        tab: "Custom Journey",
        title: "Customised Gosaikunda Journey",
        tag: "On request",
        availability: "on-request",
        summary: "A tailor-made arrangement for pilgrimage groups, special occasions or photography, subject to operational feasibility.",
        steps: [
          { title: "Tell Us Your Plan", text: "Share your group size, dates and any rituals you wish to perform." },
          { title: "Feasibility Check", text: "We confirm what is operationally possible with the operator." },
          { title: "Your Journey", text: "Travel on a plan designed around you, weather permitting." },
        ],
        notice: "Available on request / subject to flight operations.",
      },
    ],
  },

  options: {
    title: "Choose Your Gosaikunda Helicopter Experience",
    intro: "We confirm availability, inclusions and the current price with you before booking.",
    note: "Prices depend on season, group size, aircraft and selected package.",
    ctaLabel: "Request Current Price",
    items: [
      {
        name: "Shared Helicopter Tour",
        basis: "Per person",
        price: "Price on Request",
        points: ["Cost-effective", "Subject to seat availability", "Shared helicopter"],
        idealFor: "Individual pilgrims and small groups",
        whatsappMessage: "Hello Karvaahh, I'd like a shared-seat Gosaikunda helicopter tour. Please share the current price and availability.",
      },
      {
        name: "Private Helicopter Charter",
        basis: "Private charter",
        price: "Price on Request",
        points: ["Exclusive helicopter", "Flexible group arrangement", "Private pilgrimage groups"],
        idealFor: "Families and pilgrimage groups",
        featured: true,
        whatsappMessage: "Hello Karvaahh, I'd like a private Gosaikunda helicopter charter. Please share the current price.",
      },
      {
        name: "Customised Gosaikunda Journey",
        basis: "Tailor-made",
        price: "Enquire for details",
        points: ["Customised departure arrangement", "Pilgrimage groups & special occasions", "Subject to operational feasibility"],
        idealFor: "Pilgrimage groups and celebrations",
        whatsappMessage: "Hello Karvaahh, I'd like a customised Gosaikunda helicopter journey. Here are my requirements:",
      },
    ],
  },

  departures: {
    title: "Select Your Preferred Date",
    intro: "Gosaikunda flights can run on most clear-weather days. Choose a listed shared-seat date, or enquire for the day you prefer.",
    emptyTitle: "Choose your own date",
    emptyCta: "Check my date on WhatsApp",
    emptyMessage: "Hello Karvaahh, I'd like to check availability for a Gosaikunda helicopter tour on this date: ",
    emptyText: "Flights are arranged on request around clear-weather days. Tell us your preferred date, including Janai Purnima, and we will confirm availability.",
    // Add confirmed shared-seat departures only, e.g. { date: "2026-11-02", status: "open", note: "Janai Purnima" }.
    dates: [],
  },

  inclusions: [
    { text: "Helicopter flight according to selected package", status: "included" },
    { text: "Scenic Himalayan sightseeing", status: "included" },
    { text: "Karvaahh travel assistance", status: "included" },
    { text: "Ground transfer where included", status: "package" },
    { text: "Applicable permits / fees where included", status: "package" },
  ],

  exclusions: [
    "Personal expenses",
    "Meals unless specifically included",
    "Travel insurance",
    "Accommodation unless specifically included",
    "Additional transportation",
    "Additional services",
    "Expenses resulting from weather-related delays or operational changes",
  ],

  preparation: {
    title: "Before You Fly",
    intro: "Gosaikunda is a high-altitude sacred site. A little preparation keeps the journey safe and respectful.",
    carry: ["Warm jacket", "Hat & gloves", "Sunglasses", "Sunscreen", "Water", "Personal medication", "Valid identification", "Puja items, if desired"],
    topics: [
      {
        icon: "mountainSnow",
        title: "High Altitude",
        text: "Gosaikunda lies at around 4,380 m. Travellers may feel altitude-related discomfort, so move slowly during any landing and follow the pilot's and guide's advice.",
      },
      {
        icon: "landmark",
        title: "Pilgrimage Etiquette",
        text: "Respect the religious significance of the lake. Follow local guidance on rituals, dress modestly, and be mindful of other pilgrims.",
      },
      {
        icon: "leaf",
        title: "Environment",
        text: "Gosaikunda lies within a national park and protected wetland. Do not litter, and leave the lakeshore and landscape exactly as you found them.",
      },
      {
        icon: "file",
        title: "Identification & Baggage",
        text: "Carry valid identification as required, and only the small, permitted baggage allowed on the helicopter.",
      },
    ],
  },

  safety: {
    eyebrow: "Safety First",
    title: "Important Information",
    intro: "Helicopter flights are highly weather dependent. Flight schedules, routes and landing locations may change according to safety conditions, aviation regulations and operational requirements.",
    points: [
      { title: "Weather", text: "Flights depend on suitable weather and visibility." },
      { title: "High altitude", text: "Consider altitude-related discomfort and follow operator and guide advice." },
      { title: "Flight operations", text: "Routes, timing and landing locations may change due to weather, safety and aviation requirements." },
      { title: "Weight limitations", text: "Passenger and baggage weight may be restricted by helicopter and operator requirements." },
      { title: "Identification", text: "Carry valid identification documents as required." },
      { title: "Baggage", text: "Carry only permitted baggage." },
      { title: "Pilgrimage etiquette", text: "Respect the religious significance and natural environment of Gosaikunda." },
      { title: "Environment", text: "Do not litter or damage the surrounding landscape." },
      { title: "Safety", text: "All operational decisions remain with the pilot and helicopter operator." },
    ],
  },

  seasons: {
    title: "Best Time for a Gosaikunda Helicopter Tour",
    intro: "Flights can run through much of the year, but visibility and conditions change with the seasons.",
    note: "Helicopter flights are highly weather dependent. Flight schedules, routes and landing locations may change according to safety conditions, aviation regulations and operational requirements.",
    items: [
      { name: "Autumn", months: "September – November", rating: "Best visibility", icon: "leaf", text: "Clear Himalayan visibility and excellent mountain photography." },
      { name: "Winter", months: "December – February", rating: "Snow & ice", icon: "snow", text: "Snow-covered landscapes and dramatic high-altitude scenery; the lake may freeze. Subject to weather and operating conditions." },
      { name: "Spring", months: "March – May", rating: "Popular", icon: "sun", text: "Clear mountain views and beautiful surrounding landscapes." },
      { name: "Monsoon", months: "June – August", rating: "Janai Purnima", icon: "rain", text: "Cloud, rain and reduced visibility can significantly affect flights. The Janai Purnima pilgrimage falls in this season, so plan flexibly." },
    ],
  },

  pilgrimage: {
    eyebrow: "Pilgrimage",
    title: "Gosaikunda for Pilgrims",
    intro: "For many devotees, the trek to Gosaikunda is out of reach. The helicopter journey makes darshan of the sacred lake possible in a single morning.",
    points: [
      "Reduces days of trekking to a short flight",
      "Convenient for senior pilgrims",
      "Suitable for families travelling together",
      "Experience the sacred lake on a short itinerary",
      "Ideal for travellers with limited time",
      "Spectacular Himalayan views along the way",
    ],
    image: tamangVillage,
    ctaLabel: "Plan Your Gosaikunda Yatra",
    ctaMessage: "Hello Karvaahh, I'd like to plan a Gosaikunda yatra by helicopter.",
  },

  altitude: {
    title: "Altitude & Health",
    intro: "The flight climbs from Kathmandu to the high Gosaikunda basin in a short time, without the gradual acclimatization of a trek. Any time on the ground is kept brief.",
    points: [
      { place: "Kathmandu", metres: 1400, label: "1,400 m" },
      { place: "Gosaikunda Lake", metres: 4380, label: "4,380 m" },
      { place: "Laurebina La", metres: 4610, label: "4,610 m", note: "Seen from the air" },
    ],
    guidance: [
      "Rapid altitude gain can cause headache, breathlessness or dizziness.",
      "Drink water before the flight and move slowly during any landing.",
      "Tell your pilot or the Karvaahh team straight away if you feel unwell.",
    ],
    disclaimer:
      "This is general information, not medical advice. Travellers with heart, lung, blood pressure or other relevant medical conditions, and anyone who is pregnant, should consult a qualified medical professional before high-altitude travel.",
  },

  travelerTypes: {
    title: "Perfect for Travellers Seeking Faith, Nature & the Himalayas",
    intro: "A journey that brings the sacred lake within reach of almost everyone.",
    items: [
      { icon: "landmark", title: "Pilgrims", text: "Darshan of the sacred lake without the long trek." },
      { icon: "heart", title: "Senior Travellers", text: "A comfortable way to reach high altitude, subject to medical advice." },
      { icon: "users", title: "Families", text: "Make the pilgrimage together in a single morning." },
      { icon: "sun", title: "Couples", text: "A peaceful, memorable shared journey." },
      { icon: "camera", title: "Photography Enthusiasts", text: "Blue lakes, rugged ridges and Langtang peaks from above." },
      { icon: "leaf", title: "Spiritual Travellers", text: "Stillness and reflection in a sacred mountain landscape." },
      { icon: "clock", title: "Short-Stay Visitors", text: "Fit Gosaikunda into a short Kathmandu itinerary." },
      { icon: "shield", title: "Luxury Travellers", text: "A private charter with personalised coordination." },
      { icon: "compass", title: "Himalayan Explorers", text: "Discover the Langtang region from a new perspective." },
    ],
  },

  gallery: {
    title: "Photo Gallery",
    intro: "Scenes from Gosaikunda and the Langtang region. Tap any photo to view it larger.",
    items: [
      { image: gosaikunda, caption: "Gosaikunda among the high ridges of Langtang" },
      { image: langtangHimal, caption: "Snow peaks of the Langtang Himal" },
      { image: langtangValley, caption: "The Langtang Valley" },
      { image: kathmandu, caption: "Kathmandu valley with the Himalaya on the horizon" },
      { image: tamangVillage, caption: "Tamang heritage of the Langtang region" },
      { image: sacredLakes, caption: "Sacred lakes of the Gosaikunda chain" },
      { image: helicopter, caption: "Helicopter above Gosaikunda" },
      { image: pilgrims, caption: "Pilgrims at Gosaikunda" },
    ],
  },

  trust: {
    title: "Karvaahh – Live to Travel",
    intro: "Karvaahh Tours & Travels is a Nepal and India travel specialist with teams in Kathmandu and Delhi NCR.",
    points: [
      { title: "Nepal & India travel specialists", text: "Pilgrimages and Himalayan journeys, from Gosaikunda and Pashupatinath to Kailash." },
      { title: "Customised Himalayan experiences", text: "Private and group journeys planned around your dates and rituals." },
      { title: "Local travel assistance", text: "A Kathmandu team that coordinates with helicopter operators for you." },
    ],
  },

  faqs: [
    {
      question: "What is the Gosaikunda Helicopter Tour?",
      answer:
        "It is a scenic and spiritual helicopter journey from Kathmandu to the sacred Gosaikunda Lake in the Langtang Himalaya. A short landing may be possible where weather, regulations and operator approval allow.",
    },
    {
      question: "Where does the Gosaikunda Helicopter Tour start?",
      answer: "The tour starts and ends in Kathmandu. Hotel pickup can be arranged depending on the selected package.",
    },
    {
      question: "How long does the Gosaikunda helicopter tour take?",
      answer: "Typically around 1–2 hours in total, depending on the flight plan, weather and any landing. Exact timing is confirmed on the day.",
    },
    {
      question: "Can I fly to Gosaikunda from Kathmandu?",
      answer: "Yes. Flights depart from Kathmandu towards the Langtang region, subject to weather and operator approval.",
    },
    {
      question: "Can senior citizens take the helicopter tour?",
      answer:
        "Yes, it is a popular choice for senior pilgrims as no trekking is needed. Because the lake is at around 4,380 m, we recommend consulting a doctor before booking.",
    },
    {
      question: "Can children join the tour?",
      answer: "Children can often join, but operator requirements and altitude considerations vary. Please confirm when you enquire.",
    },
    {
      question: "Is landing at Gosaikunda guaranteed?",
      answer: "No. Landing locations are subject to weather, aviation regulations, safety requirements and helicopter operator approval. Some flights are sightseeing only.",
    },
    {
      question: "Can pilgrims take this helicopter tour?",
      answer: "Yes. Many pilgrims choose the helicopter to reach the sacred lake, especially senior devotees and families. Tell us if you plan to perform rituals so we can advise.",
    },
    {
      question: "What happens if the weather is bad?",
      answer:
        "The flight may be delayed, rescheduled or cancelled, or the route changed. This is more likely in the monsoon, including around Janai Purnima. Rescheduling and refund terms depend on the package; enquire for details.",
    },
    {
      question: "What is the best time to visit Gosaikunda?",
      answer:
        "Autumn and spring usually offer the clearest views. The Janai Purnima pilgrimage takes place in the monsoon, when weather is less predictable, so flexible plans are important.",
    },
    {
      question: "Can I book a private helicopter?",
      answer: "Yes. A private charter reserves the whole helicopter for your family or pilgrimage group, within passenger and weight limits. Price on request.",
    },
    {
      question: "How much baggage can I carry?",
      answer: "Only a small bag with essentials and any puja items. Helicopters have strict weight limits, and the operator confirms the allowance before the flight.",
    },
    {
      question: "Do I need travel insurance?",
      answer: "Travel insurance is not included. We recommend insurance that covers helicopter flights and high-altitude travel.",
    },
    {
      question: "Is hotel pickup available in Kathmandu?",
      answer: "Hotel pickup and drop-off in Kathmandu depend on the selected package. We confirm this when you book.",
    },
  ],

  cta: {
    title: "Experience the Sacred Himalayas From Above",
    text: "Journey to Gosaikunda with Karvaahh and experience the breathtaking beauty of one of Nepal's most iconic Himalayan pilgrimage destinations.",
    image: gosaikunda,
    animated: true,
    primaryLabel: "Book Gosaikunda Helicopter Tour",
    primaryHref: "#book",
    quoteLabel: "Get a Custom Quote",
    whatsappLabel: "WhatsApp Us",
    planMessage: "Hello Karvaahh, I'd like to book a Gosaikunda helicopter tour from Kathmandu.",
    quoteSubject: "Quote request: Gosaikunda Helicopter Tour",
  },

  relatedTours: [
    {
      title: "Langtang Valley Trek",
      text: "Trek into the Langtang Valley on foot.",
      href: "/adventure/langtang-valley-trek",
      image: langtangValley,
    },
    {
      title: "Mardi Himal Helicopter Tour",
      text: "Fly from Pokhara over the Mardi Himal ridge.",
      href: "/activities/helicopter-tours/mardi-himal",
      image: {
        src: "/images/gandaki/sarangkot-sunrise-annapurna-mountain-view-kaski-nepal.jpg",
        alt: "The Mardi Himal ridge facing Machhapuchhre",
        label: "Mardi Himal",
      },
    },
    {
      title: "Annapurna Helicopter Tour",
      text: "Fly from Pokhara into the Annapurna Sanctuary.",
      href: "/activities/helicopter-tours/annapurna",
      image: { src: "/images/home/annapurna-view.jpg", alt: "The Annapurna range above Pokhara", label: "Annapurna" },
    },
    {
      title: "Everest Helicopter Tour",
      text: "A same-day helicopter journey to the foot of Everest.",
      href: "/activities/helicopter-tours/everest-base-camp",
      image: { src: "/koshi/everest-base-camp.jpg", alt: "Mount Everest and the Khumbu Glacier at dawn", label: "Everest", objectPosition: "22% center" },
    },
    { title: "Kailash Mansarovar Helicopter Tour", text: "A helicopter-assisted pilgrimage to Mount Kailash.", href: "/activities/helicopter-tours/kailash-mansarovar" },
    { title: "Pashupatinath Darshan", text: "Visit Nepal's most sacred Shiva temple in Kathmandu.", href: "/spiritual-journeys/pashupatinath" },
    { title: "Explore Bagmati Province", text: "Kathmandu valley heritage and nearby Himalayan escapes.", href: "/destinations/bagmati-province" },
    {
      title: "Muktinath Helicopter Tour",
      text: "A helicopter pilgrimage from Pokhara to the sacred Muktinath Temple.",
      href: "/activities/helicopter-tours/muktinath-temple",
      image: { src: "/images/home/muktinath-temple.jpg", alt: "Muktinath Temple and its sacred ponds in Mustang", label: "Muktinath" },
    },
    ...relatedTours("langtang"),
  ],
};
