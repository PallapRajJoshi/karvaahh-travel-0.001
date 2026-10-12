/* ============================================================
   ANNAPURNA HELICOPTER TOUR — TOUR DATA
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
   /public/images/activities/helicopter-tours/annapurna/ and set `src`.
   ============================================================ */

import type { HelicopterProductTour } from "@/components/activities/experience/product-types";
import type { PageImage, RequiredImage } from "@/components/activities/experience/types";

const IMG_DIR = "/images/activities/helicopter-tours/annapurna";

const annapurnaRange: RequiredImage = {
  src: "/images/home/annapurna-view.jpg",
  alt: "The snow-covered Annapurna range and Machhapuchhre rising above the Pokhara valley at sunrise",
  label: "Annapurna range",
  width: 2048,
  height: 972,
  objectPosition: "center 30%",
};

const phewa: RequiredImage = {
  src: "/images/home/pokhara-view.jpg",
  alt: "Phewa Lake in Pokhara with the Annapurna range and Machhapuchhre reflected in its waters",
  label: "Pokhara Valley",
  width: 1920,
  height: 919,
};

const ghandruk: PageImage = {
  src: "/images/home/ghandruk-view.jpg",
  alt: "Annapurna South and Hiunchuli above Ghandruk village, with Machhapuchhre on the right",
  label: "Annapurna South",
  width: 2048,
  height: 1366,
  objectPosition: "35% 30%",
};

const hiunchuli: PageImage = {
  src: "/images/home/view-from-ghandruk.jpg",
  alt: "The pointed summit of Hiunchuli beside Annapurna South, seen from a village trail",
  label: "Hiunchuli",
  width: 1512,
  height: 1080,
  objectPosition: "38% 25%",
};

const machhapuchhre: PageImage = {
  src: "/images/gandaki/sarangkot-sunrise-annapurna-mountain-view-kaski-nepal.jpg",
  alt: "The fishtail summit of Machhapuchhre above a green Himalayan ridge",
  label: "Machhapuchhre",
  width: 2048,
  height: 1365,
  objectPosition: "78% 25%",
};

const phewaReflection: PageImage = {
  src: "/images/gandaki/gandaki-province-phewa-lake-annapurna-mountains-nepal.jpg",
  alt: "Machhapuchhre and the Annapurna peaks mirrored in Phewa Lake on a clear morning",
  label: "Phewa Lake",
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

const baseCamp = pending("annapurna-base-camp.jpg", "Annapurna Base Camp", "Annapurna Base Camp surrounded by the peaks of the Annapurna Sanctuary");
const sanctuary = pending("annapurna-sanctuary.jpg", "Annapurna Sanctuary", "The glacial basin of the Annapurna Sanctuary ringed by snow peaks");
const annapurnaI = pending("annapurna-i.jpg", "Annapurna I", "The south face of Annapurna I above the Annapurna Sanctuary");
const annapurnaII = pending("annapurna-ii.jpg", "Annapurna II", "Annapurna II at the eastern end of the Annapurna massif");
const annapurnaIII = pending("annapurna-iii.jpg", "Annapurna III", "The snow summit of Annapurna III");
const helicopter = pending("helicopter-annapurna.jpg", "Helicopter flight", "A helicopter flying through the Modi Khola valley towards Annapurna Base Camp");

export const annapurnaHelicopterTour: HelicopterProductTour = {
  title: "Annapurna Helicopter Tour",
  slug: "annapurna",
  path: "/activities/helicopter-tours/annapurna",
  breadcrumbLabel: "Annapurna",
  description:
    "A scenic helicopter tour from Pokhara into the Annapurna Sanctuary, with aerial views of Annapurna, Machhapuchhre and Hiunchuli and a short landing near Annapurna Base Camp where weather and operations allow.",
  touristType: ["Sightseers", "Families", "Senior travellers", "Photographers", "Short-stay visitors"],

  seo: {
    title: "Annapurna Helicopter Tour from Pokhara | Annapurna Base Camp Heli Tour | Karvaahh",
    socialTitle: "Annapurna Helicopter Tour – Himalayan Mountain Flight Experience",
    description:
      "Annapurna helicopter tour from Pokhara: fly to Annapurna Base Camp with views of Machhapuchhre and the Annapurna range. Itinerary, options, best season and FAQs.",
    keywords: [
      "Annapurna Helicopter Tour",
      "Annapurna Base Camp Helicopter Tour",
      "Annapurna Helicopter Flight",
      "Pokhara to Annapurna Base Camp Helicopter Tour",
      "Annapurna Helicopter Tour from Pokhara",
      "Annapurna Mountain Helicopter Tour",
      "Helicopter Tour in Nepal",
      "Annapurna Sightseeing Flight",
    ],
    ogImage: annapurnaRange,
  },

  duration: "Approx. 2–3 hours",
  elevation: "Up to approx. 4,130 m",
  startingPoint: "Pokhara",
  endingPoint: "Pokhara",
  region: "Annapurna Region, Nepal",
  bestSeason: "Autumn & Spring",
  transportation: "Helicopter, with ground transfers depending on package",
  tourTypes: "Helicopter sightseeing",
  groupSize: "Private & shared options",
  landingNote:
    "Landing near Annapurna Base Camp is subject to weather, aviation regulations and operational conditions. On some days the flight may be sightseeing only.",

  hero: {
    badge: "Helicopter Tours • Nepal",
    titleLead: "Annapurna",
    titleAccent: "Helicopter Tour",
    description:
      "Experience the majestic Annapurna Himalayas from the sky with a breathtaking helicopter flight over Nepal's legendary mountain landscapes.",
    image: annapurnaRange,
    ambient: true,
    primaryCta: { label: "Book Your Helicopter Tour", href: "#book" },
    secondaryCta: { label: "Get a Quote", href: "#enquire" },
    trust: [
      { icon: "users", label: "Private & Group Flights" },
      { icon: "helicopter", label: "Experienced Pilots" },
      { icon: "mountainSnow", label: "Himalayan Views" },
    ],
    strip: [
      { label: "Duration", value: "Approx. 2–3 Hours" },
      { label: "Start / End", value: "Pokhara / Pokhara" },
      { label: "Destination", value: "Annapurna Base Camp" },
      { label: "Highest Point", value: "Up to approx. 4,130 m" },
      { label: "Availability", value: "Seasonal / Weather Dependent" },
    ],
  },

  quickFacts: [
    { icon: "clock", label: "Duration", value: "Approx. 2–3 hours", note: "Subject to weather and operations" },
    { icon: "route", label: "Starting Point", value: "Pokhara" },
    { icon: "mountain", label: "Destination", value: "Annapurna Base Camp", note: "Annapurna Sanctuary" },
    { icon: "helicopter", label: "Experience", value: "Helicopter sightseeing", note: "Landing where permitted" },
    { icon: "camera", label: "Best For", value: "Mountain views & photography", note: "Families • Senior travellers" },
    { icon: "calendar", label: "Availability", value: "Seasonal / weather dependent" },
    { icon: "sun", label: "Best Season", value: "Autumn & Spring", note: "Clear winter days too" },
    { icon: "users", label: "Group Size", value: "Private & shared", note: "Seats subject to aircraft limits" },
  ],

  overview: {
    title: "Fly Above the Annapurna Himalayas",
    lead:
      "The Annapurna Helicopter Tour takes you from the lakeside city of Pokhara into the heart of the Annapurna Sanctuary in a single morning, a journey that takes about a week on foot.",
    paragraphs: [
      "Your flight begins in Pokhara, where the Annapurna range and the unmistakable fishtail summit of Machhapuchhre already fill the northern skyline. Early mornings usually bring the clearest air, and on many days the sunrise lights the snow peaks gold as you prepare to fly.",
      "Lifting off over Phewa Lake and the Pokhara valley, the helicopter heads north up the Modi Khola gorge, passing terraced hillsides, Gurung villages and forested ridges before the valley narrows between towering walls of rock and ice.",
      "As the flight enters the Annapurna Sanctuary, a vast amphitheatre of peaks opens up: Annapurna I, Annapurna South, Hiunchuli, Gangapurna and Machhapuchhre surround the glacial basin. Where weather and operational permissions allow, the helicopter makes a short landing near Annapurna Base Camp for photographs and a few unforgettable minutes among the mountains.",
      "The return flight follows the valley back to Pokhara, often with new angles on the peaks you have just seen.",
      "Trekking to Annapurna Base Camp is a rewarding but demanding multi-day journey. The helicopter tour is ideal for travellers who want to experience the Annapurna Himalayas without committing to a long trek, whether because of time, fitness or simply the wish for a comfortable, spectacular alternative.",
    ],
    image: ghandruk,
    imageCaption: "Annapurna South, Hiunchuli and Machhapuchhre above the Modi Khola valley",
    links: [
      { label: "Explore Pokhara & Gandaki Province", href: "/destinations/gandaki-province" },
      { label: "Ultra-Light Flight in Pokhara", href: "/activities/adventure/ultra-light-flight" },
    ],
  },

  significance: {
    eyebrow: "Experience Highlights",
    symbol: "",
    title: "Highlights of Your Annapurna Helicopter Experience",
    intro: "Eight moments that make this flight one of the most memorable ways to see the Himalaya.",
    items: [
      { name: "Scenic Flight Over Pokhara", text: "Lift off over Phewa Lake and the green Pokhara valley with the mountains ahead." },
      { name: "Panoramic Annapurna Views", text: "Take in the full sweep of the Annapurna range from the air." },
      { name: "Machhapuchhre (Fishtail)", text: "See the sacred, unclimbed fishtail peak at remarkably close range." },
      { name: "Annapurna Base Camp Approach", text: "Fly up the Modi Khola gorge into the Annapurna Sanctuary." },
      { name: "Himalayan Valleys & Glaciers", text: "Look down on glaciers, moraines and deep mountain valleys." },
      { name: "Short Landing Experience", text: "A brief landing near Base Camp where weather and operations permit." },
      { name: "Photography Opportunities", text: "Clear morning light on snow peaks makes for exceptional photographs." },
      { name: "Return Flight to Pokhara", text: "Fly back down the valley with fresh views of the range." },
    ],
  },

  whyHelicopter: {
    title: "Why Experience Annapurna by Helicopter?",
    intro: "Six reasons travellers choose to see the Annapurna Sanctuary from the air.",
    items: [
      { title: "Breathtaking Himalayan Views", text: "Peaks above 7,000 and 8,000 metres, seen from a perspective the trail cannot offer." },
      { title: "Reach Annapurna Base Camp Quickly", text: "Arrive in the Sanctuary in a fraction of the time the trek takes." },
      { title: "Perfect for Photography", text: "Aerial angles and morning light on Annapurna and Machhapuchhre." },
      { title: "Ideal for Families & Senior Travellers", text: "No long walks or steep trails, subject to medical advice on altitude." },
      { title: "Luxury Himalayan Experience", text: "A private, premium way to experience the mountains, with personalised coordination." },
      { title: "Save Days Compared With Trekking", text: "See the Sanctuary in a morning instead of spending about a week on the trail." },
    ],
  },

  highlights: {
    title: "What You Can See From the Helicopter",
    intro: "The peaks and landscapes of the Annapurna Sanctuary. Visibility depends on the day's weather.",
    items: [
      { name: "Annapurna South", elevation: "7,219 m", text: "The great snow wall that dominates the view from Pokhara.", image: ghandruk },
      { name: "Machhapuchhre (Fishtail)", elevation: "6,993 m", text: "Nepal's iconic fishtail peak, sacred and closed to climbers.", image: machhapuchhre },
      { name: "Hiunchuli", elevation: "6,441 m", text: "The sharp summit standing guard at the Sanctuary's entrance.", image: hiunchuli },
      { name: "Pokhara Valley", elevation: "Approx. 820 m", text: "Lakes, rivers and terraces at the foot of the Himalaya.", image: phewa },
      { name: "Annapurna I", elevation: "8,091 m", text: "The tenth-highest mountain on earth, rising above the Sanctuary.", image: annapurnaI },
      { name: "Annapurna II", elevation: "7,937 m", text: "The eastern anchor of the Annapurna massif.", image: annapurnaII },
      { name: "Annapurna III", elevation: "7,555 m", text: "A remote, dramatic summit in the heart of the range.", image: annapurnaIII },
      { name: "Annapurna Sanctuary", elevation: "Approx. 4,130 m", text: "A high glacial basin ringed by some of the world's great peaks.", image: sanctuary },
    ],
  },

  route: {
    title: "The Flight Route",
    intro: "How a typical flight unfolds, and which points are seen from the air versus where the helicopter may land.",
    note: "Route, landing points and timings are decided on the day by the operator and pilot, based on weather, permissions and aircraft performance.",
    stops: [
      { name: "Pokhara", detail: "Departure point", mode: "landing", elevation: "Approx. 820 m" },
      { name: "Phewa Lake & Pokhara Valley", detail: "Scenic climb over the lake and city", mode: "aerial" },
      { name: "Modi Khola Valley", detail: "Gorge flight past Gurung villages", mode: "aerial" },
      { name: "Machhapuchhre Base Camp Area", detail: "Close views of the fishtail peak", mode: "aerial", elevation: "Approx. 3,700 m" },
      { name: "Annapurna Base Camp", detail: "Short landing where permitted", mode: "optional", elevation: "Approx. 4,130 m" },
      { name: "Annapurna Sanctuary Panorama", detail: "360° views of the surrounding peaks", mode: "aerial" },
      { name: "Pokhara", detail: "Return and arrival", mode: "landing", elevation: "Approx. 820 m" },
    ],
  },

  itinerary: {
    title: "Annapurna Helicopter Tour Itinerary",
    intro: "Choose how you would like to fly. Every option is a sample and is confirmed with you before booking.",
    options: [
      {
        id: "abc",
        tab: "From Pokhara",
        title: "Annapurna Base Camp Helicopter Tour from Pokhara",
        tag: "Classic route",
        availability: "standard",
        summary: "The classic morning flight from Pokhara into the Annapurna Sanctuary and back.",
        steps: [
          { title: "Hotel / Pickup", text: "Pickup from your hotel in Pokhara and transfer to the helicopter departure point." },
          { title: "Helicopter Departure", text: "Board the helicopter and begin the scenic flight over the Annapurna region." },
          { title: "Himalayan Flight", text: "Spectacular aerial views of Annapurna, Machhapuchhre, Hiunchuli and surrounding Himalayan peaks." },
          {
            title: "Annapurna Base Camp",
            text: "Fly towards the Annapurna Sanctuary for panoramic views of the surrounding mountains. Landing is subject to weather, aviation regulations and operational conditions.",
          },
          { title: "Photography & Himalayan Experience", text: "Enjoy the mountain scenery and take photographs from the designated safe location." },
          { title: "Return to Pokhara", text: "Fly back to Pokhara with more aerial views of the Himalayan landscape." },
        ],
        notice: "Landing and flight routes depend on weather, aviation regulations and operational conditions.",
      },
      {
        id: "private",
        tab: "Private Charter",
        title: "Private Annapurna Helicopter Charter",
        tag: "Private",
        availability: "standard",
        summary:
          "The same Annapurna flight on a helicopter reserved for your group alone, planned around your preferences within the aircraft's limits.",
        steps: [
          { title: "Your Group Only", text: "The whole helicopter is reserved for you, within passenger and weight limits." },
          { title: "Planned Around You", text: "Departure planning discussed with you in advance, subject to operations." },
          { title: "Annapurna Sanctuary", text: "Fly the classic route to Annapurna Base Camp, conditions permitting." },
          { title: "Return", text: "Fly back to Pokhara with personalised coordination throughout." },
        ],
        points: ["Exclusive helicopter", "Flexible group", "Personalised coordination", "Ideal for families & couples"],
      },
      {
        id: "panorama",
        tab: "Mountain Panorama",
        title: "Annapurna Mountain Sightseeing Flight",
        tag: "Scenic",
        availability: "on-request",
        summary: "A sightseeing flight focused on the mountain panorama, for travellers who prefer not to land at high altitude.",
        steps: [
          { title: "Departure", text: "Morning flight from Pokhara towards the Annapurna range." },
          { title: "Himalayan Panorama", text: "Wide views of Annapurna, Machhapuchhre and neighbouring peaks." },
          { title: "Return", text: "Fly back to Pokhara." },
        ],
        notice: "Available on request. Exact route is confirmed at booking and depends on operations.",
      },
      {
        id: "kathmandu",
        tab: "From Kathmandu",
        title: "Annapurna Helicopter Tour from Kathmandu",
        tag: "On request",
        availability: "on-request",
        summary: "For travellers based in Kathmandu, the tour can be combined with a transfer to Pokhara, by air or road.",
        steps: [
          { title: "Kathmandu to Pokhara", text: "Travel to Pokhara by flight or road, as arranged." },
          { title: "Annapurna Flight", text: "The classic helicopter tour into the Annapurna Sanctuary." },
          { title: "Onward Plans", text: "Stay on in Pokhara or return to Kathmandu." },
        ],
        notice: "Available on request / subject to flight operations.",
      },
      {
        id: "custom",
        tab: "Custom Flight",
        title: "Custom Himalayan Flight",
        tag: "On request",
        availability: "on-request",
        summary: "A tailor-made flight for special occasions, photography or private travel, subject to operational feasibility.",
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
    title: "Helicopter Tour Options",
    intro: "Choose how you would like to fly. We confirm availability, inclusions and the current price with you before booking.",
    note: "Prices depend on season, group size, aircraft and selected package.",
    ctaLabel: "Request Current Price",
    items: [
      {
        name: "Shared Helicopter Tour",
        basis: "Per person",
        price: "Price on Request",
        points: ["Cost-effective option", "Subject to seat availability", "Shared helicopter"],
        idealFor: "Individual travellers and small groups",
        whatsappMessage: "Hello Karvaahh, I'd like a shared-seat Annapurna helicopter tour. Please share the current price and availability.",
      },
      {
        name: "Private Helicopter Charter",
        basis: "Private charter",
        price: "Price on Request",
        points: ["Exclusive helicopter experience", "Flexible group arrangement", "Premium experience"],
        idealFor: "Families, couples and private groups",
        featured: true,
        whatsappMessage: "Hello Karvaahh, I'd like a private Annapurna helicopter charter. Please share the current price.",
      },
      {
        name: "Custom Himalayan Flight",
        basis: "Tailor-made",
        price: "Enquire for details",
        points: ["Customised itinerary", "Subject to operational feasibility", "Special occasions & private travel"],
        idealFor: "Celebrations and photography",
        whatsappMessage: "Hello Karvaahh, I'd like a custom Himalayan helicopter flight from Pokhara. Here are my requirements:",
      },
    ],
  },

  departures: {
    title: "Select Your Preferred Date",
    intro: "Annapurna helicopter tours can run on most clear-weather days. Choose a listed shared-seat date, or enquire for the day you prefer.",
    emptyTitle: "Choose your own date",
    emptyCta: "Check my date on WhatsApp",
    emptyMessage: "Hello Karvaahh, I'd like to check availability for an Annapurna helicopter tour on this date: ",
    emptyText:
      "Flights are arranged on request around clear-weather days. Tell us your preferred date and we will confirm availability.",
    // Add confirmed shared-seat departures only, e.g. { date: "2026-11-02", status: "open" }.
    dates: [],
  },

  inclusions: [
    { text: "Helicopter flight as per selected package", status: "included" },
    { text: "Scenic Himalayan sightseeing", status: "included" },
    { text: "Travel coordination by Karvaahh", status: "included" },
    { text: "Airport / helipad assistance where applicable", status: "package" },
    { text: "Ground transfers where included in selected package", status: "package" },
    { text: "Applicable permits / fees where included in package", status: "package" },
  ],

  exclusions: [
    "Personal expenses",
    "Meals unless specifically included",
    "Travel insurance",
    "Accommodation unless specifically included",
    "Additional services",
    "Costs arising from unexpected operational changes",
  ],

  preparation: {
    title: "Before You Fly",
    intro: "A little preparation makes the flight more comfortable and the views more memorable.",
    carry: ["Warm jacket", "Sunglasses", "Sunscreen", "Camera", "Water", "Personal medication", "Identification documents"],
    topics: [
      {
        icon: "sun",
        title: "Clothing",
        text: "Pokhara can be warm while the Sanctuary is near or below freezing, often with wind. Wear layers and bring a warm jacket, hat and gloves for any landing.",
      },
      {
        icon: "camera",
        title: "Photography",
        text: "Wear dark clothing to reduce window reflections, keep the lens close to the glass without touching it, and use a fast shutter speed. Carry a charged spare battery.",
      },
      {
        icon: "mountainSnow",
        title: "Altitude",
        text: "Annapurna Base Camp is above 4,000 metres. Move slowly during any landing, stay hydrated, and tell your pilot if you feel unwell.",
      },
      {
        icon: "heart",
        title: "Fitness",
        text: "No trekking is required. Altitude can still affect anyone, so share any health concerns when you book.",
      },
    ],
  },

  safety: {
    eyebrow: "Safety First",
    title: "Important Information",
    intro: "Helicopter operations are highly weather dependent. Flight schedules, routes and landing locations may change for safety reasons.",
    points: [
      { title: "Weather", text: "Flights operate only under suitable weather and visibility conditions." },
      { title: "Flight operations", text: "Routes, timings and landing locations may change due to aviation regulations, weather or operational requirements." },
      { title: "Weight restrictions", text: "Passenger baggage and total passenger weight may be subject to helicopter and operator limitations." },
      { title: "Identification", text: "Passengers may need to carry valid identification documents." },
      { title: "Children & seniors", text: "Confirm operator-specific requirements before booking." },
      { title: "Photography", text: "Photography is encouraged where permitted and safe." },
      { title: "Pilot decisions come first", text: "The pilot's and operator's safety decisions always take priority." },
    ],
  },

  seasons: {
    title: "Best Time for Annapurna Helicopter Tour",
    intro: "Flights can run through much of the year, but visibility changes with the seasons.",
    note: "Helicopter operations are highly weather dependent. Flight schedules, routes and landing locations may change for safety reasons.",
    items: [
      {
        name: "Autumn",
        months: "September – November",
        rating: "Best visibility",
        icon: "leaf",
        text: "Clear Himalayan visibility and excellent mountain photography after the monsoon.",
      },
      {
        name: "Winter",
        months: "December – February",
        rating: "Snowy & dramatic",
        icon: "snow",
        text: "Snow-covered landscapes and dramatic Himalayan scenery, subject to weather. Cold at altitude.",
      },
      {
        name: "Spring",
        months: "March – May",
        rating: "Popular",
        icon: "sun",
        text: "Clear views combined with blooming rhododendron hillsides. Haze can build later in the season.",
      },
      {
        name: "Monsoon",
        months: "June – August",
        rating: "Limited",
        icon: "rain",
        text: "Flights can be affected by clouds, rain and visibility. Early mornings sometimes offer clear windows.",
      },
    ],
  },

  altitude: {
    title: "Altitude & Health",
    intro:
      "The flight climbs from Pokhara to more than 4,000 metres in well under an hour, without the gradual acclimatization of a trek. Time at the highest point is kept short.",
    points: [
      { place: "Pokhara", metres: 820, label: "820 m" },
      { place: "Machhapuchhre Base Camp", metres: 3700, label: "3,700 m", note: "Seen from the air" },
      { place: "Annapurna Base Camp", metres: 4130, label: "4,130 m" },
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
    title: "Perfect for Travellers Who Want More Himalayas, Less Trekking",
    intro: "A helicopter brings the Annapurna Sanctuary within reach of almost everyone.",
    items: [
      { icon: "users", title: "Families", text: "Share the Himalaya together without a long, demanding trek." },
      { icon: "heart", title: "Senior Travellers", text: "Experience the Sanctuary without days of walking, subject to medical advice." },
      { icon: "sun", title: "Couples", text: "A memorable way to celebrate a special occasion among the peaks." },
      { icon: "camera", title: "Photography Enthusiasts", text: "Aerial perspectives of Annapurna and Machhapuchhre in morning light." },
      { icon: "compass", title: "First-Time Nepal Visitors", text: "The most spectacular introduction to the Himalaya from Pokhara." },
      { icon: "shield", title: "Luxury Travellers", text: "A private, premium Himalayan experience with personalised coordination." },
      { icon: "clock", title: "Short-Stay Travellers", text: "See the Sanctuary in a morning and keep the rest of your day free." },
      { icon: "mountainSnow", title: "Adventure Seekers", text: "Fly through one of the Himalaya's most dramatic mountain gorges." },
    ],
  },

  gallery: {
    title: "Gallery",
    intro: "Scenes from the Annapurna region. Tap any photo to view it larger.",
    items: [
      { image: annapurnaRange, caption: "The Annapurna range above the Pokhara valley at sunrise" },
      { image: phewa, caption: "Phewa Lake and Machhapuchhre, Pokhara" },
      { image: ghandruk, caption: "Annapurna South and Hiunchuli above Ghandruk" },
      { image: machhapuchhre, caption: "Machhapuchhre, the fishtail peak" },
      { image: phewaReflection, caption: "Snow peaks mirrored in Phewa Lake" },
      { image: hiunchuli, caption: "Hiunchuli and Annapurna South" },
      { image: baseCamp, caption: "Annapurna Base Camp" },
      { image: sanctuary, caption: "Annapurna Sanctuary" },
      { image: helicopter, caption: "Helicopter in the Modi Khola valley" },
    ],
  },

  trust: {
    title: "Karvaahh – Live to Travel",
    intro: "Karvaahh Tours & Travels is a Nepal and India travel specialist with teams in Kathmandu and Delhi NCR.",
    points: [
      { title: "Nepal & India travel specialists", text: "Journeys across the Himalaya, from Annapurna and Everest to Kailash." },
      { title: "Experienced local travel team", text: "A Nepal-based team that coordinates with helicopter operators for you." },
      { title: "Customised Himalayan experiences", text: "Private flights and tailor-made plans around your dates and group." },
    ],
  },

  faqs: [
    {
      question: "How long is the Annapurna Helicopter Tour?",
      answer: "Usually around 2–3 hours from pickup to return, though the flying time and any landing depend on weather, routing and operations on the day.",
    },
    {
      question: "Where does the Annapurna Helicopter Tour start?",
      answer: "The tour starts and ends in Pokhara. Travellers in Kathmandu can combine it with a transfer to Pokhara on request.",
    },
    {
      question: "Can I fly to Annapurna Base Camp by helicopter?",
      answer:
        "Yes, the classic tour flies into the Annapurna Sanctuary towards Annapurna Base Camp. A short landing is possible only where weather, aviation regulations and operational conditions allow.",
    },
    {
      question: "Is the Annapurna Helicopter Tour safe?",
      answer:
        "Flights are operated by licensed mountain helicopter operators, and they fly only in suitable conditions. The pilot always makes the final decision on routing and landing.",
    },
    {
      question: "Can senior citizens take the helicopter tour?",
      answer: "Yes, many senior travellers enjoy it as no trekking is needed. Because it reaches over 4,000 m quickly, we recommend checking with a doctor first.",
    },
    {
      question: "Can children join the tour?",
      answer: "Children can often join, but age and altitude requirements vary by operator. Please confirm when you enquire.",
    },
    {
      question: "What happens if the weather is bad?",
      answer:
        "The flight may be delayed, rescheduled or cancelled, or the route and landing changed. Keeping a flexible morning in your Pokhara plans gives the best chance of flying. Rescheduling and refund terms depend on the package; enquire for details.",
    },
    {
      question: "Can I book a private helicopter?",
      answer: "Yes. A private charter reserves the whole helicopter for your group, within passenger and weight limits. Price on request.",
    },
    {
      question: "What is the best season for the Annapurna Helicopter Tour?",
      answer: "Autumn (September–November) usually offers the clearest views, followed by spring. Clear winter mornings can be excellent; the monsoon brings more cloud.",
    },
    {
      question: "Is hotel pickup available in Pokhara?",
      answer: "Hotel pickup and drop-off in Pokhara depend on the selected package. We confirm this when you book.",
    },
    {
      question: "How much luggage can I carry?",
      answer: "Only a small bag with essentials, as helicopters have strict weight limits. The operator confirms the allowance and total passenger weight before the flight.",
    },
    {
      question: "Do I need travel insurance?",
      answer: "Travel insurance is not included. We recommend insurance that covers helicopter flights and high-altitude travel.",
    },
  ],

  cta: {
    title: "Ready to See the Annapurna Himalayas From Above?",
    text: "Turn your Nepal journey into an unforgettable Himalayan experience with a scenic helicopter flight over the Annapurna region.",
    image: annapurnaRange,
    primaryLabel: "Book Annapurna Helicopter Tour",
    primaryHref: "#book",
    quoteLabel: "Get a Custom Quote",
    whatsappLabel: "WhatsApp Us",
    planMessage: "Hello Karvaahh, I'd like to book an Annapurna helicopter tour from Pokhara.",
    quoteSubject: "Quote request: Annapurna Helicopter Tour",
  },

  relatedTours: [
    {
      title: "Everest Helicopter Tour",
      text: "A same-day helicopter journey to the foot of Everest.",
      href: "/activities/helicopter-tours/everest-base-camp",
      image: { src: "/koshi/everest-base-camp.jpg", alt: "Mount Everest and the Khumbu Glacier at dawn", label: "Everest", objectPosition: "22% center" },
    },
    {
      title: "Kailash Mansarovar Helicopter Tour",
      text: "A helicopter-assisted pilgrimage to Mount Kailash and Lake Mansarovar.",
      href: "/activities/helicopter-tours/kailash-mansarovar",
      image: { src: "/images/kailash-mansarovar-yatra.webp", alt: "Mount Kailash at sunrise", label: "Kailash" },
    },
    {
      title: "Ultra-Light Flight in Pokhara",
      text: "An open-air flight over Phewa Lake with Himalayan views.",
      href: "/activities/adventure/ultra-light-flight",
      image: phewaReflection,
    },
    {
      title: "Paragliding in Pokhara",
      text: "Soar above Pokhara and Phewa Lake from Sarangkot.",
      href: "/activities/adventure/paragliding",
    },
    {
      title: "Pokhara & Gandaki Province",
      text: "Lakes, viewpoints and hill villages around Pokhara.",
      href: "/destinations/gandaki-province",
      image: phewa,
    },
    {
      title: "Manang Circuit Trek",
      text: "Trek the high Annapurna region on foot.",
      href: "/packages/manang-circuit-trek",
    },
    {
      title: "Muktinath Helicopter Tour",
      text: "A helicopter pilgrimage from Pokhara to the sacred Muktinath Temple.",
      href: "/activities/helicopter-tours/muktinath-temple",
      image: { src: "/images/home/muktinath-temple.jpg", alt: "Muktinath Temple and its sacred ponds in Mustang", label: "Muktinath" },
    },
    { title: "Langtang Helicopter Tour", text: "Glaciers and peaks close to Kathmandu.", href: "/activities/helicopter-tours/langtang" },
  ],
};
