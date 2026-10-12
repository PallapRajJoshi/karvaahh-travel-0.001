/* ============================================================
   MARDI HIMAL HELICOPTER TOUR — TOUR DATA
   ------------------------------------------------------------
   Single source of truth for the page. Edit text, facts, options
   and images here; the layout picks everything up automatically.

   CONTENT RULES (keep when editing):
   - No prices, exact flight times or guaranteed landings. Use
     "Price on Request", "Enquire for details" or "Subject to
     weather and operational conditions" until confirmed.
   - Only mark an inclusion as `included` if it is genuinely part
     of every Karvaahh booking; otherwise use `package`.

   IMAGES: `src: null` = photo not sourced yet (highlights show an
   elevation card; the gallery skips it). To add one, save it to
   /public/images/activities/helicopter-tours/mardi-himal/ and set `src`.
   ============================================================ */

import type { HelicopterProductTour } from "@/components/activities/experience/product-types";
import type { PageImage, RequiredImage } from "@/components/activities/experience/types";

const IMG_DIR = "/images/activities/helicopter-tours/mardi-himal";

const mardiRidge: RequiredImage = {
  src: "/images/gandaki/sarangkot-sunrise-annapurna-mountain-view-kaski-nepal.jpg",
  alt: "A high grassy ridge trail facing Annapurna South, Hiunchuli and the fishtail summit of Machhapuchhre",
  label: "Mardi Himal ridge",
  width: 2048,
  height: 1365,
  objectPosition: "center 30%",
};

const machhapuchhre: PageImage = { ...mardiRidge, label: "Machhapuchhre", alt: "The fishtail summit of Machhapuchhre above the Mardi Himal ridge", objectPosition: "78% 25%" };

const annapurnaRange: RequiredImage = {
  src: "/images/home/annapurna-view.jpg",
  alt: "The Annapurna range and Machhapuchhre rising above the Pokhara valley at sunrise",
  label: "Annapurna Range",
  width: 2048,
  height: 972,
  objectPosition: "center 30%",
};

const annapurnaSouth: PageImage = {
  src: "/images/home/ghandruk-view.jpg",
  alt: "Annapurna South and Hiunchuli above a Gurung village, with Machhapuchhre on the right",
  label: "Annapurna South",
  width: 2048,
  height: 1366,
  objectPosition: "35% 30%",
};

const hiunchuli: PageImage = {
  src: "/images/home/view-from-ghandruk.jpg",
  alt: "The pointed summit of Hiunchuli beside Annapurna South",
  label: "Hiunchuli",
  width: 1512,
  height: 1080,
  objectPosition: "38% 25%",
};

const pokhara: RequiredImage = {
  src: "/images/home/pokhara-view.jpg",
  alt: "Phewa Lake in Pokhara with the Annapurna range and Machhapuchhre reflected in the water",
  label: "Pokhara Valley",
  width: 1920,
  height: 919,
};

const foothills: PageImage = {
  src: "/images/gandaki/gandaki-province-phewa-lake-annapurna-mountains-nepal.jpg",
  alt: "Forested Himalayan foothills around Phewa Lake below the snow peaks of the Annapurna range",
  label: "Himalayan Foothills",
  width: 1564,
  height: 997,
};

/** Photo slot waiting for a licensed image; save it as `${IMG_DIR}/<file>`. */
const pending = (file: string, label: string, alt: string): PageImage & { plannedFile: string } => ({
  src: null,
  label,
  alt,
  plannedFile: `${IMG_DIR}/${file}`,
});

const mardiPeak = pending("mardi-himal.jpg", "Mardi Himal", "The snow summit of Mardi Himal beneath Machhapuchhre");
const mardiBaseCamp = pending("mardi-himal-base-camp.jpg", "Mardi Himal Base Camp", "The Mardi Himal Base Camp area below Machhapuchhre");
const sanctuary = pending("annapurna-sanctuary-region.jpg", "Annapurna Sanctuary Region", "The Annapurna Sanctuary region seen from the air");
const helicopter = pending("helicopter-mardi-himal.jpg", "Helicopter flight", "A helicopter flying along the Mardi Himal ridge");

export const mardiHimalHelicopterTour: HelicopterProductTour = {
  title: "Mardi Himal Helicopter Tour",
  slug: "mardi-himal",
  path: "/activities/helicopter-tours/mardi-himal",
  breadcrumbLabel: "Mardi Himal",
  description:
    "A scenic helicopter flight from Pokhara over the Mardi Himal ridge, with close views of Machhapuchhre, Annapurna South and Hiunchuli, and an optional landing where weather and operator approval allow.",
  touristType: ["Sightseers", "Families", "Couples", "Photographers", "Short-stay visitors"],

  seo: {
    title: "Mardi Himal Helicopter Tour from Pokhara | Karvaahh",
    socialTitle: "Mardi Himal Helicopter Tour – Fly Above the Hidden Himalayan Paradise",
    description:
      "Experience the breathtaking Mardi Himal Helicopter Tour from Pokhara with spectacular views of Machhapuchhre and the Annapurna Himalayas.",
    keywords: [
      "Mardi Himal Helicopter Tour",
      "Mardi Himal Helicopter Flight",
      "Mardi Himal Helicopter Tour from Pokhara",
      "Pokhara to Mardi Himal Helicopter Tour",
      "Mardi Himal Base Camp Helicopter Tour",
      "Mardi Himal Mountain Flight",
      "Helicopter Tour in Pokhara",
      "Mardi Himal Aerial Tour",
      "Nepal Helicopter Tour",
    ],
    ogImage: mardiRidge,
  },

  duration: "Approx. 1–2 hours",
  elevation: "Varies with flight plan",
  startingPoint: "Pokhara",
  endingPoint: "Pokhara",
  region: "Annapurna Region, Nepal",
  bestSeason: "Autumn & Spring",
  transportation: "Helicopter, with ground transfers depending on package",
  tourTypes: "Himalayan scenic helicopter flight",
  groupSize: "Private & shared options",
  landingNote:
    "Landing locations, flight routes and operating times are subject to weather, aviation regulations, safety requirements and helicopter operator approval.",

  hero: {
    badge: "Helicopter Tours • Nepal",
    titleLead: "Mardi Himal",
    titleAccent: "Helicopter Tour",
    description:
      "Discover the breathtaking beauty of Mardi Himal and the Annapurna region from above on an unforgettable Himalayan helicopter flight.",
    image: mardiRidge,
    ambient: true,
    primaryCta: { label: "Book Mardi Himal Helicopter Tour", href: "#book" },
    secondaryCta: { label: "Get a Quote", href: "#enquire" },
    trust: [
      { icon: "mountainSnow", label: "Scenic Himalayan Flights" },
      { icon: "helicopter", label: "Experienced Operators" },
      { icon: "users", label: "Private & Group Options" },
    ],
    strip: [
      { label: "Duration", value: "Approx. 1–2 Hours" },
      { label: "Start / End", value: "Pokhara / Pokhara" },
      { label: "Destination", value: "Mardi Himal Region" },
      { label: "Experience", value: "Scenic Helicopter Flight" },
      { label: "Availability", value: "Weather & Operations Dependent" },
    ],
  },

  quickFacts: [
    { icon: "clock", label: "Duration", value: "Approx. 1–2 hours", note: "As per selected flight plan" },
    { icon: "route", label: "Starting Point", value: "Pokhara" },
    { icon: "mountain", label: "Destination", value: "Mardi Himal region", note: "Annapurna Himalayas" },
    { icon: "helicopter", label: "Experience", value: "Scenic helicopter flight", note: "Landing where approved" },
    { icon: "camera", label: "Best For", value: "Mountain views & photography", note: "Families • Couples • Short stays" },
    { icon: "calendar", label: "Availability", value: "Weather & operations dependent" },
    { icon: "sun", label: "Best Season", value: "Autumn & Spring", note: "Clear winter days too" },
    { icon: "users", label: "Group Size", value: "Private & shared", note: "Seats subject to aircraft limits" },
  ],

  overview: {
    title: "Fly Above the Mardi Himal",
    lead:
      "Mardi Himal is one of the most scenic corners of the Annapurna region, a long, grassy ridge that climbs from the forests above Pokhara to the very foot of Machhapuchhre.",
    paragraphs: [
      "Rising east of the Annapurna Sanctuary, the Mardi Himal ridge is known for dramatic Himalayan skylines, alpine meadows and some of the closest views anywhere of Machhapuchhre, the sacred fishtail peak that dominates Pokhara's horizon. Annapurna South and Hiunchuli stand to the west, with the wider Annapurna range beyond.",
      "Below the ridge, rhododendron and oak forests fall away into deep, quiet valleys, while above it the terrain turns rugged and alpine. Clouds often drift through the valleys in the early morning, adding drama to an already spectacular landscape.",
      "On foot, reaching the high ridge usually takes several days of trekking. The Mardi Himal Helicopter Tour brings the same scenery within reach in a single flight from Pokhara: a short climb over the valley, close views of Machhapuchhre and the Annapurna peaks, and a return the same morning.",
      "Where weather, regulations and operator approval allow, the flight may include a short landing at a designated safe location for photographs. On other days it is a pure sightseeing flight, still one of the most spectacular ways to see the Himalaya from Pokhara.",
    ],
    image: mardiRidge,
    imageCaption: "The Mardi Himal ridge facing Annapurna South and Machhapuchhre",
    links: [
      { label: "Annapurna Helicopter Tour", href: "/activities/helicopter-tours/annapurna" },
      { label: "Explore Pokhara & Gandaki Province", href: "/destinations/gandaki-province" },
    ],
  },

  significance: {
    eyebrow: "Experience Highlights",
    symbol: "",
    title: "Highlights of the Mardi Himal Helicopter Experience",
    intro: "Nine moments that make this short flight unforgettable.",
    items: [
      { name: "Scenic Flight From Pokhara", text: "Lift off over the Pokhara valley with the mountains straight ahead." },
      { name: "Annapurna Range Views", text: "Take in the long snow wall of the Annapurna Himalayas from the air." },
      { name: "Close Views of Machhapuchhre", text: "Fly near the iconic, unclimbed fishtail peak." },
      { name: "Mardi Himal Ridges", text: "Follow the dramatic grassy ridgeline towards the high mountains." },
      { name: "Himalayan Valleys & Forests", text: "Look down on rhododendron forests and deep river valleys." },
      { name: "Mountain Photography", text: "Morning light and drifting clouds make for exceptional images." },
      { name: "Annapurna Region Panorama", text: "Wide views across the peaks around the Annapurna Sanctuary." },
      { name: "Optional Landing", text: "Subject to weather, regulations and operator approval." },
      { name: "Return Flight to Pokhara", text: "Fly back with another perspective of the landscape." },
    ],
  },

  whyHelicopter: {
    title: "Why Experience Mardi Himal From the Sky?",
    intro: "Six reasons travellers choose to see Mardi Himal by helicopter.",
    items: [
      { title: "Spectacular Machhapuchhre Views", text: "Enjoy unforgettable views of the iconic Fishtail mountain." },
      { title: "Reach the Himalayas Faster", text: "Experience the Mardi Himal region without spending several days trekking." },
      { title: "Perfect for Photography", text: "Capture dramatic aerial views of mountains, valleys and ridgelines." },
      { title: "Ideal for Families & Seniors", text: "A convenient Himalayan experience for travellers who prefer minimal trekking." },
      { title: "Short & Memorable", text: "Perfect for travellers with limited time in Pokhara." },
      { title: "Premium Himalayan Experience", text: "Combine comfort, adventure and spectacular scenery in one flight." },
    ],
  },

  highlights: {
    title: "What Can You See From the Helicopter?",
    intro: "Peaks and landscapes around Mardi Himal. Visibility depends on the day's weather. Elevations are approximate.",
    items: [
      { name: "Machhapuchhre / Fishtail", elevation: "6,993 m", text: "The sacred, unclimbed peak that towers over the ridge.", image: machhapuchhre },
      { name: "Annapurna South", elevation: "7,219 m", text: "The great snow wall to the west of the Sanctuary.", image: annapurnaSouth },
      { name: "Hiunchuli", elevation: "6,441 m", text: "The sharp summit guarding the Sanctuary's entrance.", image: hiunchuli },
      { name: "Annapurna Range", text: "A chain of 7,000 and 8,000 metre peaks across the horizon.", image: annapurnaRange },
      { name: "Pokhara Valley", elevation: "Approx. 820 m", text: "Lakes and terraces at the foot of the Himalaya.", image: pokhara },
      { name: "Himalayan Foothills", text: "Forested hills and valleys rising towards the snow line.", image: foothills },
      { name: "Mardi Himal", elevation: "5,587 m", text: "The peak beneath Machhapuchhre that gives the ridge its name.", image: mardiPeak },
      { name: "Annapurna Sanctuary Region", text: "The high glacial basin to the west, ringed by peaks.", image: sanctuary },
    ],
  },

  story: {
    eyebrow: "The Mardi Himal Experience",
    title: "A Different Perspective of the Annapurna Himalayas",
    paragraphs: [
      "Most travellers see the Annapurna Himalaya from Pokhara's lakeshore, a distant line of snow above green hills. From the Mardi Himal ridge, that line becomes a wall. Machhapuchhre fills the skyline, its twin summit so close it seems within reach.",
      "The flight reveals the landscape in layers: lush lower slopes and terraced farms, dark rhododendron forest, open alpine grassland along the ridge, and finally rock, ice and snow. Clouds rise and fall through the valleys, opening and closing the view like a curtain.",
    ],
    points: [
      "Rugged mountain ridges",
      "Deep, forested valleys",
      "Alpine meadows",
      "Dramatic cloud formations",
      "Close-up Himalayan peaks",
      "Machhapuchhre on the skyline",
    ],
    images: [annapurnaRange, annapurnaSouth],
  },

  route: {
    title: "The Flight Route",
    intro: "How a typical flight unfolds, and which points are seen from the air versus where the helicopter may land.",
    note: "Landing locations, flight routes and operating times are subject to weather, aviation regulations, safety requirements and helicopter operator approval.",
    stops: [
      { name: "Pokhara", detail: "Departure point", mode: "landing", elevation: "Approx. 820 m" },
      { name: "Pokhara Valley", detail: "Scenic climb over the lakes and city", mode: "aerial" },
      { name: "Forested Ridges", detail: "Rhododendron and oak forests below", mode: "aerial" },
      { name: "Mardi Himal High Camp Area", detail: "Alpine ridge with close mountain views", mode: "aerial", elevation: "Approx. 3,580 m" },
      { name: "Mardi Himal Base Camp Area", detail: "Optional landing where approved", mode: "optional", elevation: "Approx. 4,500 m" },
      { name: "Machhapuchhre & Annapurna Panorama", detail: "Close views of the surrounding peaks", mode: "aerial" },
      { name: "Pokhara", detail: "Return and arrival", mode: "landing", elevation: "Approx. 820 m" },
    ],
  },

  itinerary: {
    title: "Your Mardi Himal Helicopter Journey",
    intro: "Choose how you would like to fly. Every option is a sample and is confirmed with you before booking.",
    options: [
      {
        id: "scenic",
        tab: "From Pokhara",
        title: "Mardi Himal Helicopter Tour from Pokhara",
        tag: "Classic flight",
        availability: "standard",
        summary: "The classic scenic flight from Pokhara over the Mardi Himal ridge and back.",
        steps: [
          { title: "Hotel Pickup / Departure Preparation", text: "If included in the selected package, transfer from your Pokhara hotel to the designated helicopter departure point." },
          { title: "Take Off From Pokhara", text: "Begin your Himalayan adventure with spectacular aerial views of Pokhara Valley and the surrounding mountains." },
          { title: "Fly Toward Mardi Himal", text: "Enjoy increasingly dramatic views of Machhapuchhre, Annapurna South and surrounding Himalayan peaks." },
          { title: "Mardi Himal Region", text: "Experience panoramic Himalayan scenery around the Mardi Himal area." },
          { title: "Photography / Optional Landing", text: "Enjoy photography and mountain views from a designated safe location if landing is operationally permitted." },
          { title: "Return to Pokhara", text: "Fly back towards Pokhara with another perspective of the Annapurna landscape." },
        ],
        notice:
          "Landing locations, flight routes and operating times are subject to weather, aviation regulations, safety requirements and helicopter operator approval.",
      },
      {
        id: "private",
        tab: "Private Charter",
        title: "Private Mardi Himal Helicopter Charter",
        tag: "Private",
        availability: "standard",
        summary: "The same flight on a helicopter reserved for your group alone, planned around your preferences within the aircraft's limits.",
        steps: [
          { title: "Your Group Only", text: "The whole helicopter is reserved for you, within passenger and weight limits." },
          { title: "Planned Around You", text: "Departure planning discussed with you in advance, subject to operations." },
          { title: "Mardi Himal Flight", text: "Fly over the ridge with close views of Machhapuchhre, conditions permitting." },
          { title: "Return", text: "Fly back to Pokhara with personalised coordination throughout." },
        ],
        points: ["Exclusive experience", "Flexible group", "Ideal for families & couples", "Personalised coordination"],
      },
      {
        id: "combo",
        tab: "Mardi + Annapurna",
        title: "Mardi Himal & Annapurna Sanctuary Flight",
        tag: "On request",
        availability: "on-request",
        summary: "A longer flight combining the Mardi Himal ridge with the Annapurna Sanctuary, subject to operational feasibility.",
        steps: [
          { title: "Departure", text: "Morning flight from Pokhara." },
          { title: "Mardi Himal", text: "Scenic flight along the ridge towards Machhapuchhre." },
          { title: "Annapurna Sanctuary", text: "Continue towards the Sanctuary for views of the surrounding peaks." },
          { title: "Return", text: "Fly back to Pokhara." },
        ],
        notice: "Available on request / subject to flight operations.",
      },
      {
        id: "custom",
        tab: "Custom Flight",
        title: "Customised Himalayan Flight",
        tag: "On request",
        availability: "on-request",
        summary: "A tailor-made flight for special occasions or photography, subject to operational feasibility.",
        steps: [
          { title: "Tell Us Your Plan", text: "Share your occasion, group and photography needs." },
          { title: "Feasibility Check", text: "We confirm what is operationally possible with the operator." },
          { title: "Your Flight", text: "Fly a route designed around you, weather permitting." },
        ],
        notice: "Available on request / subject to flight operations.",
      },
    ],
  },

  options: {
    title: "Choose Your Mardi Himal Helicopter Experience",
    intro: "We confirm availability, inclusions and the current price with you before booking.",
    note: "Prices depend on season, group size, aircraft and selected package.",
    ctaLabel: "Request Current Price",
    items: [
      {
        name: "Shared Helicopter Flight",
        basis: "Per person",
        price: "Price on Request",
        points: ["Cost-effective", "Subject to seat availability", "Shared helicopter"],
        idealFor: "Individual travellers and small groups",
        whatsappMessage: "Hello Karvaahh, I'd like a shared-seat Mardi Himal helicopter flight. Please share the current price and availability.",
      },
      {
        name: "Private Helicopter Charter",
        basis: "Private charter",
        price: "Price on Request",
        points: ["Exclusive experience", "Flexible group arrangement", "More personalised experience"],
        idealFor: "Families and couples",
        featured: true,
        whatsappMessage: "Hello Karvaahh, I'd like a private Mardi Himal helicopter charter. Please share the current price.",
      },
      {
        name: "Customised Himalayan Flight",
        basis: "Tailor-made",
        price: "Enquire for details",
        points: ["Customised itinerary", "Special occasions & photography", "Subject to operational feasibility"],
        idealFor: "Celebrations and photographers",
        whatsappMessage: "Hello Karvaahh, I'd like a customised Himalayan helicopter flight from Pokhara. Here are my requirements:",
      },
    ],
  },

  departures: {
    title: "Select Your Preferred Date",
    intro: "Mardi Himal flights can run on most clear-weather days. Choose a listed shared-seat date, or enquire for the day you prefer.",
    emptyTitle: "Choose your own date",
    emptyCta: "Check my date on WhatsApp",
    emptyMessage: "Hello Karvaahh, I'd like to check availability for a Mardi Himal helicopter tour on this date: ",
    emptyText: "Flights are arranged on request around clear-weather days. Tell us your preferred date and we will confirm availability.",
    // Add confirmed shared-seat departures only, e.g. { date: "2026-11-02", status: "open" }.
    dates: [],
  },

  inclusions: [
    { text: "Helicopter flight according to selected package", status: "included" },
    { text: "Scenic Himalayan sightseeing", status: "included" },
    { text: "Assistance from the Karvaahh team", status: "included" },
    { text: "Ground transfers where included", status: "package" },
    { text: "Applicable operational / permit charges where included", status: "package" },
  ],

  exclusions: [
    "Personal expenses",
    "Meals unless specifically included",
    "Travel insurance",
    "Accommodation unless specifically included",
    "Additional transportation",
    "Additional services",
    "Costs caused by weather-related delays or operational changes",
  ],

  preparation: {
    title: "Before You Fly",
    intro: "A few things to know so you can relax and enjoy the views.",
    carry: ["Warm jacket", "Sunglasses", "Sunscreen", "Camera", "Water", "Personal medication", "Valid identification"],
    topics: [
      {
        icon: "sun",
        title: "Health & Comfort",
        text: "Consider altitude, cold temperatures and motion sensitivity before flying. Dress in layers; it can be much colder on the ridge than in Pokhara.",
      },
      {
        icon: "camera",
        title: "Photography",
        text: "Wear dark clothing to cut window reflections, keep the lens close to the glass without touching it, and carry a charged spare battery.",
      },
      {
        icon: "file",
        title: "Identification & Baggage",
        text: "Carry valid identification as required by the operator, and only the small, permitted baggage allowed on the helicopter.",
      },
      {
        icon: "heart",
        title: "Fitness",
        text: "No trekking is required. If the flight lands, move slowly at altitude and tell the pilot if you feel unwell.",
      },
    ],
  },

  safety: {
    eyebrow: "Safety First",
    title: "Important Travel Information",
    intro: "Helicopter flights are weather dependent. Flight schedules, routes and landing locations may change according to safety conditions and operational requirements.",
    points: [
      { title: "Weather conditions", text: "Flights depend on suitable weather and visibility." },
      { title: "Flight operations", text: "Routes, timing and landing points may change for safety or operational reasons." },
      { title: "Weight limitations", text: "Passenger and baggage weight may be subject to helicopter and operator restrictions." },
      { title: "Identification", text: "Carry valid identification as required by the operator." },
      { title: "Baggage", text: "Only permitted baggage should be carried on the helicopter." },
      { title: "Safety", text: "All flight decisions are subject to the pilot, the operator and aviation regulations." },
      { title: "Health & comfort", text: "Consider altitude, cold temperatures and motion sensitivity before flying." },
    ],
  },

  seasons: {
    title: "Best Time for a Mardi Himal Helicopter Tour",
    intro: "Flights can run through much of the year, but visibility changes with the seasons.",
    note: "Helicopter flights are weather dependent. Flight schedules, routes and landing locations may change according to safety conditions and operational requirements.",
    items: [
      { name: "Autumn", months: "September – November", rating: "Best visibility", icon: "leaf", text: "Clear skies, excellent visibility and spectacular mountain photography." },
      { name: "Winter", months: "December – February", rating: "Snowy & dramatic", icon: "snow", text: "Snow-covered Himalayan landscapes and dramatic mountain scenery, subject to weather." },
      { name: "Spring", months: "March – May", rating: "Popular", icon: "sun", text: "Clear mountain views combined with blooming rhododendron forests and seasonal landscapes." },
      { name: "Monsoon", months: "June – August", rating: "Limited", icon: "rain", text: "Rain, clouds and reduced visibility can affect helicopter operations." },
    ],
  },

  altitude: {
    title: "Altitude & Comfort",
    intro: "The flight climbs from Pokhara to the high Mardi Himal ridge in a short time. Any landing at altitude is kept brief.",
    points: [
      { place: "Pokhara", metres: 820, label: "820 m" },
      { place: "Mardi High Camp", metres: 3580, label: "3,580 m", note: "Seen from the air" },
      { place: "Mardi Base Camp", metres: 4500, label: "4,500 m", note: "Landing only if approved" },
      { place: "Mardi Himal summit", metres: 5587, label: "5,587 m", note: "Viewed, not visited" },
    ],
    guidance: [
      "A quick climb to altitude can cause mild headache or breathlessness for some travellers.",
      "Drink water before the flight and move slowly during any landing.",
      "Travellers prone to motion sickness may wish to take advice before flying.",
    ],
    disclaimer:
      "This is general information, not medical advice. Travellers with heart, lung, blood pressure or other relevant medical conditions, and anyone who is pregnant, should consult a qualified medical professional before high-altitude flights.",
  },

  travelerTypes: {
    title: "Perfect for Travellers Who Want the Himalayas Without the Long Trek",
    intro: "A short, spectacular flight that suits almost everyone visiting Pokhara.",
    items: [
      { icon: "users", title: "Families", text: "See the Himalaya together in a single morning, no trekking needed." },
      { icon: "heart", title: "Senior Travellers", text: "Close mountain views without days on steep trails." },
      { icon: "sun", title: "Couples", text: "A memorable shared moment above the clouds." },
      { icon: "camera", title: "Photography Enthusiasts", text: "Aerial angles of Machhapuchhre and the Mardi Himal ridge." },
      { icon: "shield", title: "Luxury Travellers", text: "A private, premium flight with personalised coordination." },
      { icon: "clock", title: "Short-Stay Travellers", text: "The most spectacular way to spend a morning in Pokhara." },
      { icon: "compass", title: "First-Time Nepal Visitors", text: "An unforgettable introduction to the Himalaya." },
      { icon: "mountainSnow", title: "Adventure Seekers", text: "Fly close to some of Nepal's most dramatic peaks." },
    ],
  },

  gallery: {
    title: "Photo Gallery",
    intro: "Scenes from Mardi Himal and the Annapurna region. Tap any photo to view it larger.",
    items: [
      { image: mardiRidge, caption: "The Mardi Himal ridge facing Machhapuchhre" },
      { image: annapurnaRange, caption: "The Annapurna range above the Pokhara valley at sunrise" },
      { image: annapurnaSouth, caption: "Annapurna South and Hiunchuli" },
      { image: pokhara, caption: "Pokhara Valley and Phewa Lake" },
      { image: foothills, caption: "Snow peaks mirrored in Phewa Lake" },
      { image: hiunchuli, caption: "Hiunchuli and Annapurna South" },
      { image: mardiPeak, caption: "Mardi Himal" },
      { image: mardiBaseCamp, caption: "Mardi Himal Base Camp area" },
      { image: helicopter, caption: "Helicopter above the Mardi Himal ridge" },
    ],
  },

  trust: {
    title: "Karvaahh – Live to Travel",
    intro: "Karvaahh Tours & Travels is a Nepal and India travel specialist with teams in Kathmandu and Delhi NCR.",
    points: [
      { title: "Nepal & India travel specialists", text: "Journeys across the Himalaya, from Pokhara to Everest and Kailash." },
      { title: "Customised Himalayan experiences", text: "Private and group flights planned around your dates." },
      { title: "Local travel assistance", text: "A Nepal-based team that coordinates with helicopter operators for you." },
    ],
  },

  faqs: [
    {
      question: "What is the Mardi Himal Helicopter Tour?",
      answer:
        "It is a scenic helicopter flight from Pokhara over the Mardi Himal ridge, with close views of Machhapuchhre, Annapurna South and Hiunchuli. A short landing may be possible where weather, regulations and operator approval allow.",
    },
    {
      question: "Where does the Mardi Himal Helicopter Tour start?",
      answer: "The tour starts and ends in Pokhara. Hotel pickup can be arranged depending on the selected package.",
    },
    {
      question: "How long does the Mardi Himal helicopter flight take?",
      answer: "Typically around 1–2 hours in total, depending on the selected flight plan, weather and any landing. Exact timing is confirmed on the day.",
    },
    {
      question: "Can I take a helicopter from Pokhara to Mardi Himal?",
      answer: "Yes. Flights depart from Pokhara towards the Mardi Himal region, subject to weather and operator approval.",
    },
    {
      question: "Can senior citizens join the tour?",
      answer: "Yes, it is a popular choice for senior travellers as no trekking is required. Consult a doctor first if you have heart, lung or blood pressure conditions.",
    },
    {
      question: "Can children join the helicopter tour?",
      answer: "Children can often join, but operator requirements vary. Please confirm when you enquire.",
    },
    {
      question: "Is landing at Mardi Himal guaranteed?",
      answer: "No. Landing locations are subject to weather, aviation regulations, safety requirements and helicopter operator approval. Some flights are sightseeing only.",
    },
    {
      question: "What happens if the weather is bad?",
      answer:
        "The flight may be delayed, rescheduled or cancelled, or the route changed. Keeping your Pokhara schedule flexible helps. Rescheduling and refund terms depend on the package; enquire for details.",
    },
    {
      question: "What is the best season for the Mardi Himal Helicopter Tour?",
      answer: "Autumn usually offers the clearest skies, followed by spring. Clear winter mornings can be excellent; the monsoon brings more cloud.",
    },
    {
      question: "Can I book a private helicopter?",
      answer: "Yes. A private charter reserves the whole helicopter for your group, within passenger and weight limits. Price on request.",
    },
    {
      question: "How much luggage can I carry?",
      answer: "Only a small bag with essentials. Helicopters have strict weight limits, and the operator confirms the allowance before the flight.",
    },
    {
      question: "Is hotel pickup available in Pokhara?",
      answer: "Hotel pickup and drop-off in Pokhara depend on the selected package. We confirm this when you book.",
    },
    {
      question: "Do I need travel insurance?",
      answer: "Travel insurance is not included. We recommend insurance that covers helicopter flights.",
    },
  ],

  cta: {
    title: "See Mardi Himal From a Whole New Perspective",
    text: "Skip the long trek and experience the breathtaking Mardi Himal landscape from the sky with Karvaahh.",
    image: mardiRidge,
    animated: true,
    primaryLabel: "Book Mardi Himal Helicopter Tour",
    primaryHref: "#book",
    quoteLabel: "Get a Custom Quote",
    whatsappLabel: "WhatsApp Us",
    planMessage: "Hello Karvaahh, I'd like to book a Mardi Himal helicopter tour from Pokhara.",
    quoteSubject: "Quote request: Mardi Himal Helicopter Tour",
  },

  relatedTours: [
    {
      title: "Annapurna Helicopter Tour",
      text: "Fly from Pokhara into the Annapurna Sanctuary.",
      href: "/activities/helicopter-tours/annapurna",
      image: annapurnaRange,
    },
    {
      title: "Everest Helicopter Tour",
      text: "A same-day helicopter journey to the foot of Everest.",
      href: "/activities/helicopter-tours/everest-base-camp",
      image: { src: "/koshi/everest-base-camp.jpg", alt: "Mount Everest and the Khumbu Glacier at dawn", label: "Everest", objectPosition: "22% center" },
    },
    {
      title: "Ultra-Light Flight in Pokhara",
      text: "An open-air flight over Phewa Lake with Himalayan views.",
      href: "/activities/adventure/ultra-light-flight",
      image: foothills,
    },
    {
      title: "Pokhara & Gandaki Province",
      text: "Lakes, viewpoints and hill villages around Pokhara.",
      href: "/destinations/gandaki-province",
      image: pokhara,
    },
    { title: "Paragliding in Pokhara", text: "Soar above Pokhara and Phewa Lake from Sarangkot.", href: "/activities/adventure/paragliding" },
    { title: "Manang Circuit Trek", text: "Trek the high Annapurna region on foot.", href: "/packages/manang-circuit-trek" },
    {
      title: "Muktinath Helicopter Tour",
      text: "A helicopter pilgrimage from Pokhara to the sacred Muktinath Temple.",
      href: "/activities/helicopter-tours/muktinath-temple",
      image: { src: "/images/home/muktinath-temple.jpg", alt: "Muktinath Temple and its sacred ponds in Mustang", label: "Muktinath" },
    },
    { title: "Langtang Helicopter Tour", text: "Glaciers and peaks close to Kathmandu.", href: "/activities/helicopter-tours/langtang" },
  ],
};
