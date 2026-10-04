/* ============================================================
   EVEREST BASE CAMP HELICOPTER TOUR — TOUR DATA
   ------------------------------------------------------------
   Single source of truth for the page. Edit text, facts, options
   and images here; the layout picks everything up automatically.

   CONTENT RULES (keep when editing):
   - No prices, exact flight times, hotel names or guaranteed
     landings. Use "Price on Request", "Enquire for details",
     "Subject to selected package" or "Subject to weather and
     operational conditions" until details are confirmed.
   - Only mark an inclusion as `included` if it is genuinely part
     of every Karvaahh booking; otherwise use `package`.

   IMAGES: `src: null` = photo not sourced yet. Highlights show an
   elevation card instead, and the gallery skips it. To add a photo,
   drop it into /public/images/activities/helicopter-tours/everest-base-camp/
   and set `src` to its path.
   ============================================================ */

import type { HelicopterProductTour } from "../shared/product-types";
import type { PageImage, RequiredImage } from "../shared/types";

const IMG_DIR = "/images/activities/helicopter-tours/everest-base-camp";

const everestPanorama: RequiredImage = {
  src: "/koshi/everest-base-camp.jpg",
  alt: "Mount Everest, Nuptse and the Khumbu Glacier at dawn, seen from the Kala Patthar area",
  label: "Mount Everest",
  width: 1920,
  height: 600,
  objectPosition: "22% center",
};

const cholatse: RequiredImage = {
  src: "/koshi/cholatse-peak.jpg",
  alt: "Cholatse and Taboche peaks above a glacial river valley in Sagarmatha National Park",
  label: "Sagarmatha National Park",
  width: 2048,
  height: 1152,
};

const gokyoLake: PageImage = {
  src: "/images/home/solukhumbu-everest-region-nepal.webp",
  alt: "Turquoise Gokyo Lake and village beside the Ngozumpa Glacier in the Everest region",
  label: "Gokyo Lake",
  width: 1360,
  height: 907,
};

const aboveClouds: PageImage = {
  src: "/koshi/gokyori.jpg",
  alt: "Sunrise breaking over Himalayan peaks above a sea of cloud in the Khumbu region",
  label: "Khumbu sunrise",
  width: 1080,
  height: 720,
};

/**
 * Photo slot waiting for a licensed image. When the photo exists, save it as
 * `${IMG_DIR}/<file>` and replace the call with a normal image object.
 */
const pending = (file: string, label: string, alt: string): PageImage & { plannedFile: string } => ({
  src: null,
  label,
  alt,
  plannedFile: `${IMG_DIR}/${file}`,
});

const kalaPatthar = pending("kala-patthar.jpg", "Kala Patthar", "Prayer flags on the Kala Patthar viewpoint with Mount Everest behind");
const baseCamp = pending("everest-base-camp.jpg", "Everest Base Camp", "Everest Base Camp beside the Khumbu Glacier and Icefall");
const khumbuGlacier = pending("khumbu-glacier.jpg", "Khumbu Glacier", "The Khumbu Glacier seen from the air in the Everest region");
const lukla = pending("lukla.jpg", "Lukla", "Lukla village and its mountain airstrip, gateway to the Everest region");
const namche = pending("namche-bazaar.jpg", "Namche Bazaar", "Namche Bazaar's horseshoe of houses on a Khumbu hillside");
const amaDablam = pending("ama-dablam.jpg", "Ama Dablam", "The sharp summit of Ama Dablam above the Khumbu valley");
const lhotse = pending("lhotse.jpg", "Lhotse", "The south face of Lhotse in the Everest massif");
const nuptse = pending("nuptse.jpg", "Nuptse", "The long ridge of Nuptse beside Mount Everest");
const pumori = pending("pumori.jpg", "Pumori", "The snow pyramid of Pumori above Gorakshep");
const helicopter = pending("helicopter-himalayas.jpg", "Helicopter flight", "A helicopter flying through the Khumbu valley towards Everest");

export const everestBaseCampHelicopterTour: HelicopterProductTour = {
  title: "Everest Base Camp Helicopter Tour",
  slug: "everest-base-camp",
  path: "/activities/helicopter-tours/everest-base-camp",
  breadcrumbLabel: "Everest Base Camp",
  description:
    "A same-day helicopter tour from Kathmandu into the Everest region, with aerial views of Mount Everest, the Khumbu Glacier and Kala Patthar, and landings where weather and operational conditions allow.",
  touristType: ["Adventure travellers", "Families", "Senior travellers", "Photographers", "Short-stay visitors"],

  seo: {
    title: "Everest Base Camp Helicopter Tour from Kathmandu | Karvaahh",
    socialTitle: "Everest Base Camp Helicopter Tour",
    description:
      "Everest Base Camp helicopter tour from Kathmandu: aerial views of Mount Everest, Khumbu Glacier and Kala Patthar, itinerary options, inclusions, safety and best season.",
    keywords: [
      "Everest Base Camp Helicopter Tour",
      "Everest Helicopter Tour",
      "Everest Helicopter Tour from Kathmandu",
      "Everest Base Camp Tour by Helicopter",
      "Kala Patthar Helicopter Tour",
      "Mount Everest Helicopter Tour",
      "Everest Helicopter Ride",
      "Helicopter Tour Nepal",
      "Everest Region Helicopter Tour",
    ],
    ogImage: cholatse,
  },

  duration: "Approx. 4–5 hours",
  elevation: "Up to approx. 5,545 m",
  startingPoint: "Kathmandu",
  endingPoint: "Kathmandu",
  region: "Everest Region, Nepal",
  bestSeason: "Spring & Autumn",
  transportation: "Helicopter, with ground transfers depending on package",
  tourTypes: "Aerial sightseeing with landings where permitted",
  groupSize: "Private & shared options",
  landingNote:
    "Landing locations are subject to aviation regulations, weather, visibility, local conditions and operational permissions.",

  hero: {
    badge: "Everest Helicopter Tour",
    titleLead: "Everest Base Camp",
    titleAccent: "Helicopter Tour",
    description:
      "Experience the Everest Base Camp Helicopter Tour with spectacular aerial views of Mount Everest, Khumbu Glacier, Kala Patthar and the surrounding Himalayan peaks. Fly from Kathmandu into the heart of the Everest region and experience the world's highest mountains from above.",
    image: cholatse,
    video: "/videos/koshi/everes-heli-view.mp4",
    strip: [
      { label: "Duration", value: "Approx. 4–5 Hours" },
      { label: "Start / End", value: "Kathmandu / Kathmandu" },
      { label: "Region", value: "Everest Region, Nepal" },
      { label: "Highest Point", value: "Up to approx. 5,545 m" },
      { label: "Group", value: "Private & Shared Options" },
    ],
  },

  quickFacts: [
    { icon: "clock", label: "Duration", value: "Approx. 4–5 hours", note: "Subject to weather and operations" },
    { icon: "route", label: "Starting Point", value: "Kathmandu" },
    { icon: "compass", label: "Ending Point", value: "Kathmandu" },
    { icon: "mountain", label: "Maximum Elevation", value: "Up to approx. 5,545 m", note: "Kala Patthar area, where operating" },
    { icon: "sun", label: "Best Season", value: "Spring & Autumn", note: "Clear winter days are also possible" },
    { icon: "helicopter", label: "Transportation", value: "Helicopter", note: "Ground transfers depend on package" },
    { icon: "camera", label: "Tour Type", value: "Aerial sightseeing", note: "Landings where permitted" },
    { icon: "users", label: "Group Size", value: "Private & shared", note: "Seats subject to aircraft limits" },
  ],

  overview: {
    title: "Experience Everest From Above",
    lead:
      "The Everest Base Camp Helicopter Tour takes you from Kathmandu to the foot of the world's highest mountain and back in a single morning, a journey that takes well over a week on foot.",
    paragraphs: [
      "Your day begins with an early departure from Kathmandu, timed for the clear morning skies that mountain flying depends on. As the helicopter climbs over the green middle hills, the Himalaya opens up ahead in a wall of snow peaks stretching across the horizon.",
      "The route continues towards Lukla, the gateway to the Khumbu, where operations may include a short ground stop. From here the flight follows the Dudh Koshi valley over Sherpa villages, suspension bridges and monasteries, past Namche Bazaar and deeper into Sagarmatha National Park.",
      "The highest part of the journey reaches the Everest Base Camp and Gorakshep area, with the Khumbu Glacier and Icefall spread out below. Where weather and permissions allow, the flight may land in the Kala Patthar area for close views of Mount Everest, Lhotse, Nuptse and Pumori. Time at this altitude is deliberately short.",
      "On the way back, a scenic stop with views of the Everest range may be included depending on the package, before the return flight to Kathmandu.",
      "Trekking to Everest Base Camp is a challenging multi-day journey that builds acclimatization gradually. The helicopter tour is a sightseeing experience: you see the same landscapes from the air in a few hours, without the physical demands of the trail, but with only brief time at high altitude.",
    ],
    image: everestPanorama,
    imageCaption: "Everest, Nuptse and the Khumbu Glacier from the Kala Patthar area",
    links: [
      { label: "Prefer to walk? Everest Base Camp Trek", href: "/adventure/everest-base-camp-trek" },
      { label: "Explore Koshi Province", href: "/destinations/koshi-province" },
    ],
  },

  whyHelicopter: {
    title: "Why Experience Everest by Helicopter?",
    intro: "Six reasons travellers choose to see the Everest region from the air.",
    items: [
      {
        title: "See Everest Without a Multi-Day Trek",
        text: "Reach the Everest Base Camp area in hours instead of the many days the trail requires.",
      },
      {
        title: "Spectacular Himalayan Aerial Views",
        text: "Glaciers, ridgelines and peaks above 8,000 m, seen from a perspective the trail cannot offer.",
      },
      {
        title: "Time-Efficient Mountain Experience",
        text: "A half-day journey that fits around a busy Nepal itinerary and returns you to Kathmandu.",
      },
      {
        title: "Suitable for Travellers With Limited Trekking Time",
        text: "Ideal if you lack the time, fitness or leave for a two-week trek but still want to see Everest.",
      },
      {
        title: "Photography Opportunities",
        text: "Morning light on Everest, Ama Dablam and the Khumbu Glacier makes for unforgettable images.",
      },
      {
        title: "Professional Travel Coordination",
        text: "Karvaahh coordinates transfers, operators and timing so the day runs smoothly.",
      },
    ],
  },

  highlights: {
    title: "What You May See",
    intro: "The landmarks of the Khumbu, many of which you see from the air. Landings depend on the day's conditions.",
    items: [
      { name: "Mount Everest", elevation: "8,849 m", text: "The highest mountain on earth, known in Nepal as Sagarmatha.", image: everestPanorama },
      { name: "Kala Patthar", elevation: "Approx. 5,545 m", text: "A classic viewpoint for Everest; landing only where conditions allow.", image: kalaPatthar },
      { name: "Everest Base Camp", elevation: "Approx. 5,364 m", text: "The expedition base beside the Khumbu Icefall, usually seen from the air.", image: baseCamp },
      { name: "Khumbu Glacier", text: "A vast river of ice flowing down from the Everest massif.", image: khumbuGlacier },
      { name: "Sagarmatha National Park", text: "A UNESCO World Heritage Site protecting the Everest region.", image: cholatse },
      { name: "Lukla", elevation: "Approx. 2,860 m", text: "The mountain airstrip town that serves as the gateway to the Khumbu.", image: lukla },
      { name: "Namche Bazaar", elevation: "Approx. 3,440 m", text: "The Sherpa trading town set in a natural amphitheatre.", image: namche },
      { name: "Ama Dablam", elevation: "6,812 m", text: "One of the most striking peaks in the Himalaya.", image: amaDablam },
      { name: "Lhotse", elevation: "8,516 m", text: "The world's fourth-highest mountain, joined to Everest by the South Col.", image: lhotse },
      { name: "Nuptse", elevation: "7,861 m", text: "A long, dramatic ridge forming the wall beside Everest.", image: nuptse },
      { name: "Pumori", elevation: "7,161 m", text: "An elegant snow pyramid rising above Gorakshep.", image: pumori },
    ],
  },

  route: {
    title: "The Flight Route",
    intro: "How a typical flight unfolds, and which points are seen from the air versus where the helicopter may land.",
    note: "Route, landing points and order of stops are decided on the day by the operator and pilot, based on weather, permissions and aircraft performance.",
    stops: [
      { name: "Kathmandu", detail: "Departure point", mode: "landing", elevation: "Approx. 1,400 m" },
      { name: "Himalayan Flight", detail: "Panoramic views over the middle hills", mode: "aerial" },
      { name: "Lukla / Khumbu Region", detail: "Possible operational stop", mode: "optional", elevation: "Approx. 2,860 m" },
      { name: "Namche / Everest Region", detail: "Sherpa villages and monasteries below", mode: "aerial", elevation: "Approx. 3,440 m" },
      { name: "Gorakshep / Everest Base Camp Area", detail: "Landings in this area are limited", mode: "restricted", elevation: "Approx. 5,364 m" },
      { name: "Kala Patthar Area", detail: "Short landing where permitted", mode: "optional", elevation: "Approx. 5,545 m" },
      { name: "Everest Panorama", detail: "Scenic stop depending on package", mode: "optional" },
      { name: "Kathmandu", detail: "Return and arrival", mode: "landing", elevation: "Approx. 1,400 m" },
    ],
  },

  itinerary: {
    title: "Choose Your Everest Experience",
    intro: "Several ways to experience Everest by helicopter. Every option is a sample and is confirmed with you before booking.",
    options: [
      {
        id: "classic",
        tab: "From Kathmandu",
        title: "Everest Base Camp Helicopter Tour from Kathmandu",
        tag: "Classic route",
        availability: "standard",
        summary: "The classic half-day journey from Kathmandu to the Everest Base Camp area and back.",
        steps: [
          { title: "Early Morning", text: "Hotel pickup and transfer towards the helicopter departure point." },
          { title: "Departure", text: "Helicopter flight from Kathmandu towards the Everest region." },
          { title: "Himalayan Flight", text: "Panoramic views of Himalayan peaks, valleys and traditional mountain settlements." },
          { title: "Lukla / Khumbu", text: "Aerial views around the gateway to the Everest region." },
          { title: "Everest Region", text: "Fly towards the Everest Base Camp, Gorakshep and Kala Patthar area, depending on operational conditions." },
          { title: "Mountain Panorama", text: "Views of Everest, Lhotse, Nuptse, Pumori, Ama Dablam and surrounding peaks." },
          { title: "Return", text: "Scenic helicopter flight back to Kathmandu." },
        ],
      },
      {
        id: "private",
        tab: "Private Charter",
        title: "Private Everest Helicopter Experience",
        tag: "Private",
        availability: "standard",
        summary:
          "The same Everest journey on a helicopter reserved only for you. Unlike a shared seat, where you fly with other travellers on a fixed plan, a private charter is arranged around your group.",
        steps: [
          { title: "Your Group Only", text: "The whole helicopter is reserved for you, within the aircraft's passenger and weight limits." },
          { title: "Planned Around You", text: "Departure planning and pace discussed with you in advance, subject to operations." },
          { title: "Everest Region", text: "Fly the classic route to the Everest Base Camp and Kala Patthar area, conditions permitting." },
          { title: "Return", text: "Fly back to Kathmandu with personalised coordination throughout." },
        ],
        points: ["Private helicopter arrangement", "Flexible group composition", "Personalised coordination", "Premium experience"],
      },
      {
        id: "kala-patthar",
        tab: "Kala Patthar",
        title: "Everest Helicopter Tour with Kala Patthar Experience",
        tag: "Landing subject to conditions",
        availability: "standard",
        summary:
          "A version of the tour planned around a short landing in the Kala Patthar area, one of the most famous viewpoints for Mount Everest.",
        steps: [
          { title: "Departure", text: "Early helicopter flight from Kathmandu towards the Khumbu." },
          { title: "Into the Khumbu", text: "Follow the valley past Lukla and Namche towards Gorakshep." },
          { title: "Kala Patthar Area", text: "A brief, carefully timed landing for close views of Everest, where permitted." },
          { title: "Return", text: "Descend and fly back to Kathmandu." },
        ],
        notice: "Landing at Kala Patthar is subject to weather, aviation regulations, safety requirements and operational conditions.",
      },
      {
        id: "panorama",
        tab: "Mountain Panorama",
        title: "Everest View / Mountain Panorama Experience",
        tag: "Scenic",
        availability: "standard",
        summary:
          "For travellers most interested in Himalayan scenery rather than a high landing. The focus is on the mountain panorama, with less time at extreme altitude.",
        steps: [
          { title: "Departure", text: "Morning flight from Kathmandu towards the Everest range." },
          { title: "Himalayan Panorama", text: "Wide views of Everest, Lhotse, Ama Dablam and neighbouring peaks." },
          { title: "Scenic Stop", text: "A stop at a lower-altitude viewpoint may be included, depending on the package." },
          { title: "Return", text: "Fly back to Kathmandu." },
        ],
        notice: "Exact route and stops are confirmed at booking and depend on operational conditions.",
      },
      {
        id: "gokyo",
        tab: "EBC + Gokyo",
        title: "Everest Base Camp + Gokyo / Extended Helicopter Experience",
        tag: "On request",
        availability: "on-request",
        summary:
          "An extended custom itinerary that adds the turquoise Gokyo Lakes and the Ngozumpa Glacier to the Everest region flight.",
        steps: [
          { title: "Departure", text: "Early helicopter flight from Kathmandu." },
          { title: "Everest Region", text: "Aerial views towards the Everest Base Camp area, conditions permitting." },
          { title: "Gokyo Valley", text: "Fly over the Gokyo Lakes and Ngozumpa Glacier." },
          { title: "Return", text: "Fly back to Kathmandu." },
        ],
        notice: "Available on request / subject to flight operations.",
      },
    ],
  },

  timeline: {
    title: "A Typical Morning, Hour by Hour",
    note: "Typical timing — actual departure and flight timing may change according to weather, visibility, air traffic and helicopter operations.",
    blocks: [
      { time: "05:30–06:30", title: "Hotel Pickup / Preparation", text: "Pickup from your Kathmandu hotel where included, with a short briefing and document check." },
      { time: "06:30–07:30", title: "Airport / Helicopter Departure", text: "Check-in and safety briefing, then departure as soon as conditions allow." },
      { time: "07:30–09:00", title: "Flight Toward Everest Region", text: "Climb over the middle hills towards Lukla and the Khumbu valley." },
      { time: "09:00–10:00", title: "Everest Region Exploration / Landing Where Permitted", text: "Views of the Everest Base Camp area and a short landing where permitted." },
      { time: "10:00–11:00", title: "Mountain Panorama & Return Flight", text: "A scenic stop may be included depending on the package before heading back." },
      { time: "11:00–12:00", title: "Arrival Back in Kathmandu", text: "Land in Kathmandu and transfer to your hotel where included." },
    ],
  },

  options: {
    title: "Booking Options",
    intro: "Choose how you would like to fly. We confirm availability, inclusions and the final price with you before booking.",
    note: "Prices depend on season, group size, aircraft and selected package.",
    items: [
      {
        name: "Shared Seat",
        basis: "Per person",
        price: "Price on Request",
        points: ["Subject to availability", "Shared helicopter", "Fixed group departure"],
        idealFor: "Solo travellers and couples",
        whatsappMessage: "Hello Karvaahh, I'd like a shared-seat Everest Base Camp helicopter tour. Please share availability and price.",
      },
      {
        name: "Private Helicopter",
        basis: "Private charter",
        price: "Price on Request",
        points: ["Whole helicopter for your group", "Flexible group composition", "Premium experience"],
        idealFor: "Families and groups",
        featured: true,
        whatsappMessage: "Hello Karvaahh, I'd like a private Everest Base Camp helicopter tour. Please share details and price.",
      },
      {
        name: "Customized Everest Experience",
        basis: "Tailor-made",
        price: "Enquire for details",
        points: ["Custom departure arrangement", "Special photography requirements", "Extended sightseeing where operationally possible"],
        idealFor: "Photographers and special occasions",
        whatsappMessage: "Hello Karvaahh, I'd like a customised Everest helicopter experience. Here are my requirements:",
      },
    ],
  },

  departures: {
    title: "Select Your Preferred Date",
    intro: "Everest helicopter tours can run on most clear-weather days. Choose a listed shared-seat date, or enquire for a private flight on the day you prefer.",
    emptyTitle: "Choose your own date",
    emptyCta: "Check my date on WhatsApp",
    emptyMessage: "Hello Karvaahh, I'd like to check availability for an Everest Base Camp helicopter tour on this date: ",
    emptyText:
      "Shared-seat departures are arranged on request around clear-weather days. Tell us your preferred date and we will confirm availability.",
    // Add confirmed shared-seat departures only, e.g.
    // { date: "2026-11-02", status: "open" },
    // Past dates are hidden automatically.
    dates: [],
  },

  inclusions: [
    { text: "Helicopter flight according to selected package", status: "included" },
    { text: "Travel coordination by Karvaahh", status: "included" },
    { text: "Ground transfer where included in the selected package", status: "package" },
    { text: "Airport / heliport coordination where applicable", status: "package" },
    { text: "Applicable tourism, park and airport charges if included", status: "package" },
    { text: "Passenger insurance where applicable", status: "package" },
  ],

  exclusions: [
    "Personal expenses",
    "Meals unless specifically included",
    "Accommodation unless specifically included",
    "Travel insurance unless specified",
    "Emergency evacuation costs where applicable",
    "Tips",
    "Additional transportation",
    "Additional services not listed in the package",
  ],

  preparation: {
    title: "Before You Fly",
    intro: "A little preparation makes the morning more comfortable and the views more memorable.",
    carry: ["Warm layers", "Sunglasses", "Sunscreen", "Camera", "Water", "Personal medication", "Identification documents"],
    topics: [
      {
        icon: "sun",
        title: "Clothing",
        text: "Kathmandu can be mild while the Everest region is well below freezing, often with strong wind. Dress in layers: a base layer, a warm fleece or down jacket and a windproof outer layer, plus a hat and gloves you can take off inside the cabin.",
      },
      {
        icon: "camera",
        title: "Photography",
        text: "Wear dark clothing to cut window reflections, hold the lens close to the glass without touching it, and use a fast shutter speed. Charge batteries the night before, since cold drains them quickly, and keep a spare in an inside pocket.",
      },
      {
        icon: "mountainSnow",
        title: "Altitude",
        text: "Gaining altitude quickly can cause discomfort such as headache, breathlessness or dizziness. Move slowly at high landings, stay hydrated, and follow the advice of your pilot and the local team.",
      },
      {
        icon: "heart",
        title: "Fitness",
        text: "The tour is far less physically demanding than trekking and needs no trekking experience. Altitude can still affect anyone, regardless of fitness, so listen to your body and share any health concerns when you book.",
      },
    ],
  },

  safety: {
    title: "Safety Comes First",
    intro:
      "Mountain flying is planned around conditions on the day. These principles keep every journey safe, and help you plan with confidence.",
    points: [
      { title: "Weather dependent", text: "Helicopter flights operate only when the weather is suitable for mountain flying." },
      { title: "Visibility matters", text: "Cloud, haze or wind along the route can affect when and where the helicopter flies." },
      { title: "Landing locations may change", text: "Planned landing points can be changed or replaced by a fly-over on the day." },
      { title: "Departure time may change", text: "Departures can move earlier or later to make the most of a clear window." },
      { title: "Delays and rescheduling", text: "Flights may be delayed, rescheduled or cancelled when conditions require it." },
      { title: "Regulations apply", text: "Aviation regulations and local conditions determine how flights operate." },
      { title: "Pilot decisions come first", text: "The pilot's and operator's safety decisions always take priority." },
    ],
  },

  seasons: {
    title: "Best Time to Fly",
    intro: "The Everest region can be visited year-round by helicopter, but visibility varies with the seasons.",
    note: "Seasonal patterns are general guidance only; mountain weather can change on any day.",
    items: [
      {
        name: "Spring",
        months: "March – May",
        rating: "Popular season",
        text: "Generally stable weather and warmer temperatures, with rhododendrons in the lower hills. Haze can build later in the season.",
      },
      {
        name: "Autumn",
        months: "September – November",
        rating: "Popular season",
        text: "Often the clearest air of the year after the monsoon, with crisp mountain views. A busy period, so plan ahead.",
      },
      {
        name: "Winter",
        months: "December – February",
        rating: "Clear but cold",
        text: "Many crisp, clear mornings and fewer travellers, but very cold at altitude and occasional snowfall.",
      },
      {
        name: "Monsoon",
        months: "June – August",
        rating: "Limited",
        text: "Cloud and rain are frequent, so flights are less predictable. Early mornings sometimes offer clear windows.",
      },
    ],
  },

  altitude: {
    title: "Altitude & Health",
    intro:
      "The tour climbs from Kathmandu to more than 5,000 metres in a short time, without the gradual acclimatization of a trek. Time at the highest points is kept brief for this reason.",
    points: [
      { place: "Kathmandu", metres: 1400, label: "1,400 m" },
      { place: "Lukla", metres: 2860, label: "2,860 m" },
      { place: "Namche Bazaar", metres: 3440, label: "3,440 m", note: "Seen from the air" },
      { place: "Gorakshep", metres: 5164, label: "5,164 m" },
      { place: "Everest Base Camp", metres: 5364, label: "5,364 m" },
      { place: "Kala Patthar", metres: 5545, label: "5,545 m" },
    ],
    guidance: [
      "Rapid altitude gain can cause discomfort such as headache, breathlessness, dizziness or nausea.",
      "Drink water before and during the tour, and avoid alcohol the night before.",
      "Move slowly and avoid exertion during high-altitude landings.",
      "Tell your pilot or the Karvaahh team straight away if you feel unwell.",
    ],
    disclaimer:
      "This is general information, not medical advice. Travellers with heart, lung, blood pressure or other relevant medical conditions, and anyone who is pregnant, should consult a qualified medical professional before high-altitude travel.",
  },

  travelerTypes: {
    title: "Perfect For",
    intro: "A helicopter brings Everest within reach of travellers who could not, or would rather not, make the trek.",
    items: [
      { icon: "mountainSnow", title: "Adventure Seekers", text: "See the world's highest mountains up close in a single, thrilling morning." },
      { icon: "users", title: "Families", text: "Share the view of Everest without a long, demanding trek for younger or older members." },
      { icon: "heart", title: "Senior Travellers", text: "Experience the Khumbu without days of walking, subject to medical advice on altitude." },
      { icon: "sun", title: "Couples", text: "A memorable way to celebrate a special occasion among the Himalaya." },
      { icon: "camera", title: "Photography Lovers", text: "Aerial perspectives of glaciers and peaks in clear morning light." },
      { icon: "clock", title: "Short-Time Travellers", text: "Fit Everest into a short Nepal itinerary and be back in Kathmandu by midday." },
      { icon: "shield", title: "Luxury Travellers", text: "A private, premium Himalayan experience with personalised coordination." },
      { icon: "landmark", title: "Pilgrimage & Spiritual Travellers", text: "Sagarmatha is revered locally; a quiet, reflective way to see the sacred peaks." },
    ],
  },

  gallery: {
    title: "Photo Gallery",
    intro: "Scenes from the Everest region. Tap any photo to view it larger.",
    items: [
      { image: everestPanorama, caption: "Everest, Nuptse and the Khumbu Glacier at dawn" },
      { image: cholatse, caption: "Cholatse and Taboche in Sagarmatha National Park" },
      { image: gokyoLake, caption: "Gokyo Lake beside the Ngozumpa Glacier" },
      { image: aboveClouds, caption: "Sunrise above a sea of cloud in the Khumbu" },
      { image: kalaPatthar, caption: "Kala Patthar viewpoint" },
      { image: baseCamp, caption: "Everest Base Camp" },
      { image: khumbuGlacier, caption: "Khumbu Glacier from the air" },
      { image: amaDablam, caption: "Ama Dablam" },
      { image: lhotse, caption: "Lhotse" },
      { image: nuptse, caption: "Nuptse" },
      { image: lukla, caption: "Lukla" },
      { image: namche, caption: "Namche Bazaar" },
      { image: helicopter, caption: "Helicopter in the Himalayas" },
    ],
  },

  trust: {
    title: "Plan With Karvaahh",
    intro: "Karvaahh Tours & Travels is a Nepal and India travel specialist with teams in Kathmandu and Delhi NCR.",
    points: [
      { title: "Nepal & India specialist", text: "Journeys across the Himalaya, from Everest to Kailash and the Char Dham." },
      { title: "Local coordination", text: "A Kathmandu team that coordinates with helicopter operators on your behalf." },
      { title: "Honest information", text: "Clear guidance on weather, landings and inclusions before you book." },
    ],
  },

  faqs: [
    {
      question: "What is an Everest Base Camp Helicopter Tour?",
      answer:
        "It is a half-day helicopter journey from Kathmandu into the Everest region, with aerial views of Mount Everest, the Khumbu Glacier and the Everest Base Camp area, and short landings where weather and operational conditions allow.",
    },
    {
      question: "Where does the Everest helicopter tour start?",
      answer: "The tour starts and ends in Kathmandu. Hotel pickup and drop-off can be arranged depending on the selected package.",
    },
    {
      question: "How long does the Everest helicopter tour take?",
      answer:
        "Typically around 4–5 hours from departure to return, though the exact duration depends on weather, air traffic, stops and helicopter operations on the day.",
    },
    {
      question: "Can I land at Everest Base Camp?",
      answer:
        "Landings in the Everest Base Camp area are limited by aviation regulations, weather and local conditions, so the area is usually experienced from the air. Any landing is decided on the day by the operator and pilot.",
    },
    {
      question: "Can I land at Kala Patthar?",
      answer:
        "A short landing in the Kala Patthar area may be possible, but it is subject to weather, aviation regulations, safety requirements and operational conditions. It cannot be guaranteed in advance.",
    },
    {
      question: "What mountains can I see?",
      answer:
        "On a clear day you may see Mount Everest, Lhotse, Nuptse, Pumori, Ama Dablam and many surrounding peaks, along with the Khumbu Glacier and Icefall.",
    },
    {
      question: "Is breakfast included?",
      answer: "Breakfast is not included as standard. Whether a meal stop is part of your tour depends on the selected package; enquire for details.",
    },
    {
      question: "Is hotel pickup included?",
      answer: "Hotel pickup and drop-off in Kathmandu depend on the selected package. We confirm this when you book.",
    },
    {
      question: "Is the tour available on a shared basis?",
      answer: "Yes, shared seats may be available on group departures, subject to availability and aircraft limits.",
    },
    {
      question: "Can I book a private helicopter?",
      answer: "Yes. A private charter reserves the whole helicopter for your group, within the aircraft's passenger and weight limits. Price on request.",
    },
    {
      question: "What is the best season for the Everest helicopter tour?",
      answer:
        "Spring (March–May) and autumn (September–November) generally offer the most reliable visibility. Clear winter mornings can also be excellent, while the monsoon brings more cloud.",
    },
    {
      question: "What happens if the weather is bad?",
      answer:
        "If conditions are unsuitable, the flight may be delayed, rescheduled or cancelled, or the route and landings changed. We recommend keeping a flexible day in your Kathmandu plans. Rescheduling and refund terms depend on the operator and package; enquire for details.",
    },
    {
      question: "Can senior citizens take the helicopter tour?",
      answer:
        "Yes, many senior travellers enjoy the tour because it involves no trekking. As it reaches high altitude quickly, we recommend consulting a doctor before booking.",
    },
    {
      question: "Is trekking experience required?",
      answer: "No trekking experience is needed. You only walk short distances during any landings, which should be done slowly because of the altitude.",
    },
    {
      question: "What should I carry?",
      answer:
        "Warm layers, sunglasses, sunscreen, a camera with charged batteries, water, any personal medication and your identification documents.",
    },
    {
      question: "Is travel insurance included?",
      answer:
        "Personal travel insurance is not included unless specified in your package. Passenger insurance may apply depending on the operator and package. We recommend travel insurance that covers high-altitude helicopter travel.",
    },
    {
      question: "Can I customize the tour?",
      answer:
        "Yes. We can discuss private departures, photography requirements and extended sightseeing, subject to flight operations. Share your plans with us for details.",
    },
  ],

  cta: {
    title: "Your Everest Story Starts Here",
    text: "Fly beyond the ordinary and experience the world's highest mountains from a perspective few journeys can offer.",
    image: everestPanorama,
    primaryLabel: "Plan My Everest Tour",
    planMessage: "Hello Karvaahh, I'd like to plan an Everest Base Camp helicopter tour.",
    quoteSubject: "Quote request: Everest Base Camp Helicopter Tour",
  },

  relatedTours: [
    {
      title: "Kailash Mansarovar Helicopter Tour",
      text: "A helicopter-assisted pilgrimage to Mount Kailash and Lake Mansarovar.",
      href: "/activities/helicopter-tours/kailash-mansarovar",
      image: { src: "/images/kailash-mansarovar-yatra.webp", alt: "Mount Kailash at sunrise", label: "Kailash" },
    },
    {
      title: "Everest Helicopter Tour with Kala Patthar",
      text: "The Everest flight planned around a Kala Patthar landing, where permitted.",
      href: "#itinerary",
    },
    {
      title: "Everest Base Camp + Gokyo Helicopter Tour",
      text: "An extended custom flight adding the Gokyo Lakes. On request.",
      href: "#itinerary",
      image: gokyoLake,
    },
    { title: "Muktinath Helicopter Tour", text: "Fly to the sacred Muktinath temple in Mustang. Enquire for details." },
    { title: "Annapurna Base Camp Helicopter Tour", text: "Into the Annapurna Sanctuary by air. Enquire for details." },
    { title: "Langtang Helicopter Tour", text: "Glaciers and peaks close to Kathmandu. Enquire for details." },
    { title: "Gosaikunda Helicopter Tour", text: "The sacred high-altitude lakes of Langtang. Enquire for details." },
    { title: "Upper Mustang Helicopter Tour", text: "The former Kingdom of Lo from the air. Enquire for details." },
  ],
};
