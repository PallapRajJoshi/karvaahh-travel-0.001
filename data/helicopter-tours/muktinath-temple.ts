/* ============================================================
   MUKTINATH HELICOPTER TOUR — TOUR DATA
   ------------------------------------------------------------
   Single source of truth for the page. Edit text, facts, options
   and images here; the layout picks everything up automatically.

   CONTENT RULES (keep when editing):
   - No prices, exact flight times, guaranteed landing points or
     guaranteed temple-access timing. Use "Price on Request",
     "Enquire for details" or "Subject to weather and operational
     conditions" until confirmed.
   - Religious content is described as tradition and belief, never
     as historical or scientific fact. Keep the language respectful.

   NOTE: /public/images/gandaki/muktinath-temple-mustang-...jpg is NOT
   Muktinath (it shows Tal Barahi temple on Phewa Lake, Pokhara), so it
   is used here only as a Pokhara image.

   IMAGES: `src: null` = photo not sourced yet (highlights show an
   elevation card; the gallery skips it). To add one, save it to
   /public/images/activities/helicopter-tours/muktinath-temple/.
   ============================================================ */

import type { HelicopterProductTour } from "@/components/activities/experience/product-types";
import type { PageImage, RequiredImage } from "@/components/activities/experience/types";

const IMG_DIR = "/images/activities/helicopter-tours/muktinath-temple";

const monasteryDhaulagiri: RequiredImage = {
  src: "/images/home/muktinath-view.jpg",
  alt: "A Buddhist monastery in the Muktinath area with the snow peaks of Dhaulagiri on the horizon",
  label: "Muktinath & Dhaulagiri",
  width: 1920,
  height: 980,
  objectPosition: "55% center",
};

const temple: RequiredImage = {
  src: "/images/home/muktinath-temple.jpg",
  alt: "The pagoda-roofed Muktinath Temple with its two sacred ponds and the dry hills of Mustang behind",
  label: "Muktinath Temple",
  width: 1200,
  height: 800,
};

const muktidhara: RequiredImage = {
  src: "/images/home/muktinath.jpg",
  alt: "The 108 sacred water spouts of Muktinath, hung with red and yellow prayer cloth",
  label: "108 water spouts",
  width: 4912,
  height: 3264,
  objectPosition: "60% center",
};

const mustangLandscape: PageImage = {
  src: "/images/home/muktinath-road.jpg",
  alt: "A mountain road winding through the dry, eroded trans-Himalayan landscape of Mustang",
  label: "Trans-Himalayan landscape",
  width: 2048,
  height: 1365,
};

const kagbeni: PageImage = {
  src: "/images/gandaki/kagbeni-ancient-village-kali-gandaki-mustang-nepal.jpg",
  alt: "The ancient village of Kagbeni above the Kali Gandaki river, with Nilgiri peaks behind",
  label: "Kali Gandaki Valley",
  width: 2048,
  height: 1365,
};

const dhaulagiri: PageImage = {
  src: "/images/gandaki/poon-hill-sunrise-dhaulagiri-myagdi-gandaki-nepal.jpg",
  alt: "The massive snow face of Dhaulagiri rising above forested Himalayan foothills",
  label: "Dhaulagiri Region",
  width: 2048,
  height: 1365,
  objectPosition: "center 30%",
};

const annapurnaRange: RequiredImage = {
  src: "/images/home/annapurna-view.jpg",
  alt: "The Annapurna range and Machhapuchhre rising above the Pokhara valley at sunrise",
  label: "Annapurna Range",
  width: 2048,
  height: 972,
  objectPosition: "center 30%",
};

const loManthang: PageImage = {
  src: "/images/gandaki/lo-manthang-thakali-tibetan-heritage-mustang-nepal.jpg",
  alt: "Traditional Tibetan-style heritage in the walled city of Lo Manthang, Upper Mustang",
  label: "Mustang",
  width: 2048,
  height: 1365,
};

const manang: PageImage = {
  src: "/images/gandaki/manang-village-annapurna-mountain-wall-gandaki-nepal.jpg",
  alt: "Manang village beneath the snow wall of the Annapurna range",
  label: "Manang",
  width: 2048,
  height: 1366,
};

const pokhara: PageImage = {
  src: "/images/home/pokhara-view.jpg",
  alt: "Phewa Lake in Pokhara with the Annapurna range reflected in its waters",
  label: "Pokhara",
  width: 1920,
  height: 919,
};

const kathmandu: PageImage = {
  src: "/images/home/swayambhu-view.jpg",
  alt: "Kathmandu valley heritage seen from the Swayambhu hill",
  label: "Kathmandu",
  width: 3072,
  height: 2048,
};

/** Photo slot waiting for a licensed image; save it as `${IMG_DIR}/<file>`. */
const pending = (file: string, label: string, alt: string): PageImage & { plannedFile: string } => ({
  src: null,
  label,
  alt,
  plannedFile: `${IMG_DIR}/${file}`,
});

const mustangValley = pending("mustang-valley.jpg", "Mustang Valley", "The wide valley of Lower Mustang seen from the air");
const villages = pending("mountain-villages.jpg", "Mountain villages", "Flat-roofed stone villages in the Mustang region");
const helicopter = pending("helicopter-kali-gandaki.jpg", "Helicopter flight", "A helicopter flying through the Kali Gandaki valley towards Muktinath");

export const muktinathHelicopterTour: HelicopterProductTour = {
  title: "Muktinath Helicopter Tour",
  slug: "muktinath-temple",
  path: "/activities/helicopter-tours/muktinath-temple",
  breadcrumbLabel: "Muktinath",
  description:
    "A helicopter pilgrimage from Pokhara to Muktinath Temple in Mustang, flying through the Kali Gandaki valley between Dhaulagiri and Annapurna, with time for darshan as per the selected itinerary.",
  touristType: ["Pilgrims", "Senior pilgrims", "Families", "Spiritual travellers", "Pilgrimage groups"],

  seo: {
    title: "Muktinath Helicopter Tour from Pokhara | Muktinath Yatra | Karvaahh",
    socialTitle: "Muktinath Helicopter Tour – Sacred Himalayan Pilgrimage by Air",
    description:
      "Experience Muktinath Temple by helicopter from Pokhara with spectacular Mustang Himalayan views. Plan a comfortable Muktinath pilgrimage with Karvaahh.",
    keywords: [
      "Muktinath Helicopter Tour",
      "Muktinath Helicopter Tour from Pokhara",
      "Pokhara to Muktinath Helicopter Tour",
      "Muktinath Helicopter Flight",
      "Muktinath Yatra by Helicopter",
      "Muktinath Temple Helicopter Tour",
      "Muktinath Darshan by Helicopter",
      "Muktinath Yatra Nepal",
      "Mustang Helicopter Tour",
      "Muktinath Pilgrimage Tour",
    ],
    ogImage: monasteryDhaulagiri,
  },

  duration: "Approx. 3–4 hours",
  elevation: "Approx. 3,710 m (temple)",
  startingPoint: "Pokhara",
  endingPoint: "Pokhara",
  region: "Mustang, Annapurna Himalaya, Nepal",
  bestSeason: "Spring & Autumn",
  transportation: "Helicopter, with ground transfers depending on package",
  tourTypes: "Helicopter pilgrimage",
  groupSize: "Private & shared options",
  landingNote:
    "Landing locations, flight routes, temple access, timings and ground movement are subject to weather, aviation regulations, local conditions and operator requirements.",

  hero: {
    badge: "Helicopter Pilgrimage • Nepal",
    titleLead: "Muktinath",
    titleAccent: "Helicopter Tour",
    description:
      "Experience the sacred Muktinath Temple and breathtaking Mustang Himalayas on a memorable helicopter pilgrimage from Pokhara.",
    image: monasteryDhaulagiri,
    ambient: true,
    primaryCta: { label: "Book Muktinath Helicopter Tour", href: "#book" },
    secondaryCta: { label: "Get a Quote", href: "#enquire" },
    trust: [
      { icon: "landmark", label: "Himalayan Pilgrimage" },
      { icon: "mountainSnow", label: "Scenic Flight" },
      { icon: "users", label: "Private & Group Options" },
    ],
    strip: [
      { label: "Duration", value: "Approx. 3–4 Hours" },
      { label: "Start / End", value: "Pokhara / Pokhara" },
      { label: "Destination", value: "Muktinath Temple, Mustang" },
      { label: "Altitude", value: "Approx. 3,710 m" },
      { label: "Availability", value: "Weather & Operations Dependent" },
    ],
  },

  quickFacts: [
    { icon: "clock", label: "Duration", value: "Approx. 3–4 hours", note: "As per selected flight plan" },
    { icon: "route", label: "Starting Point", value: "Pokhara" },
    { icon: "landmark", label: "Destination", value: "Muktinath Temple", note: "Mustang district" },
    { icon: "mountain", label: "Region", value: "Mustang / Annapurna Himalaya", note: "Temple at approx. 3,710 m" },
    { icon: "helicopter", label: "Experience", value: "Helicopter pilgrimage", note: "Darshan as per itinerary" },
    { icon: "users", label: "Best For", value: "Pilgrims & families", note: "Senior & spiritual travellers" },
    { icon: "calendar", label: "Availability", value: "Weather & operations dependent" },
    { icon: "sun", label: "Best Season", value: "Spring & Autumn" },
  ],

  overview: {
    title: "A Sacred Journey to Muktinath by Helicopter",
    lead:
      "Muktinath is one of the most important pilgrimage destinations in the Himalaya, a sacred site revered by Hindu and Buddhist pilgrims alike, set high in the dramatic landscape of Mustang.",
    paragraphs: [
      "The temple stands at around 3,710 metres above the village of Ranipauwa, at the foot of the Thorong La pass in Mustang district. Its name is often translated as 'the place of liberation', and for many Hindu pilgrims a visit to Muktinath is a once-in-a-lifetime journey. Buddhists know the site as Chumig Gyatsa, 'hundred waters'.",
      "The setting is unlike anywhere else in Nepal. North of the main Himalayan range, Mustang lies in a rain shadow: a high, dry, trans-Himalayan landscape of ochre cliffs, wind-carved valleys and flat-roofed villages, with the snow peaks of Dhaulagiri and Nilgiri standing guard to the south.",
      "Pilgrims from Nepal, India and around the world travel to Muktinath, traditionally by a long road journey or trek through the Kali Gandaki valley. The helicopter tour from Pokhara makes the pilgrimage possible in a single morning, flying through one of the deepest gorges in the world between Dhaulagiri and Annapurna.",
      "It is a convenient alternative for travellers with limited time, senior pilgrims and families who prefer not to undertake the long overland journey, while still allowing time for darshan as per the selected itinerary.",
    ],
    image: temple,
    imageCaption: "Muktinath Temple and its sacred ponds",
    links: [
      { label: "Plan Your Muktinath Yatra", href: "#book" },
      { label: "Pashupatinath & Muktinath Yatra", href: "/spiritual-journeys/pashupatinath" },
    ],
  },

  significance: {
    eyebrow: "Experience Highlights",
    symbol: "",
    title: "Highlights of Your Muktinath Helicopter Pilgrimage",
    intro: "Ten moments that make this journey both a pilgrimage and a Himalayan adventure.",
    items: [
      { name: "Scenic Flight From Pokhara", text: "Lift off over Phewa Lake with the Annapurna range ahead." },
      { name: "Annapurna Region Views", text: "Aerial views of Annapurna and its neighbouring peaks." },
      { name: "Himalayan Mountain Scenery", text: "Fly between Dhaulagiri and Annapurna through the Kali Gandaki valley." },
      { name: "Mustang's Unique Landscape", text: "Dry, ochre, trans-Himalayan terrain unlike the rest of Nepal." },
      { name: "Muktinath Temple", text: "Arrive at one of the most revered pilgrimage sites in the Himalaya." },
      { name: "Spiritual Pilgrimage", text: "A sacred journey honoured by Hindu and Buddhist traditions." },
      { name: "Surrounding Mountain Views", text: "Dhaulagiri, Nilgiri and the high peaks around Mustang." },
      { name: "Photography Opportunities", text: "Temples, prayer flags and Himalayan peaks in clear mountain light." },
      { name: "Darshan / Temple Visit", text: "Subject to operational timing and local conditions." },
      { name: "Return Scenic Flight", text: "Another perspective of the gorge on the way back to Pokhara." },
    ],
  },

  whyHelicopter: {
    title: "Why Choose a Helicopter Journey to Muktinath?",
    intro: "Six reasons pilgrims choose to travel to Muktinath by air.",
    items: [
      { title: "Sacred Himalayan Pilgrimage", text: "Experience one of the region's most revered pilgrimage destinations." },
      { title: "Save Travel Time", text: "Reach the Muktinath region much faster than a long road journey." },
      { title: "Ideal for Senior Pilgrims", text: "A convenient option for travellers who may find long mountain journeys physically demanding." },
      { title: "Spectacular Himalayan Views", text: "Enjoy aerial views of Mustang, Annapurna and the surrounding Himalayan landscapes." },
      { title: "Comfortable Pilgrimage Experience", text: "Combine spiritual travel with the comfort of an aerial journey." },
      { title: "Perfect for Families & Groups", text: "Suitable for private families, pilgrimage groups and customised journeys." },
    ],
  },

  highlights: {
    title: "What You'll See Along the Journey",
    intro: "Temples, valleys and peaks on the flight from Pokhara to Mustang. Visibility depends on the day's weather. Elevations are approximate.",
    items: [
      { name: "Muktinath Temple", elevation: "Approx. 3,710 m", text: "The sacred shrine at the heart of the pilgrimage.", image: temple },
      { name: "Dhaulagiri Region", elevation: "8,167 m", text: "The world's seventh-highest mountain, west of the Kali Gandaki.", image: dhaulagiri },
      { name: "Kali Gandaki Valley", text: "The ancient river corridor between Dhaulagiri and Annapurna.", image: kagbeni },
      { name: "Trans-Himalayan Landscape", text: "Wind-carved cliffs and dry valleys in the rain shadow of the Himalaya.", image: mustangLandscape },
      { name: "Annapurna Range", text: "The snow wall that rises north of Pokhara.", image: annapurnaRange },
      { name: "Himalayan Peaks", text: "Nilgiri and the high peaks around Mustang, seen from the air.", image: monasteryDhaulagiri },
      { name: "Mustang Valley", text: "The wide, open valley of Lower Mustang.", image: mustangValley },
      { name: "Mountain Villages", text: "Flat-roofed stone villages and green oases along the river.", image: villages },
    ],
  },

  story: {
    eyebrow: "Faith • Culture • Himalayas",
    title: "A Journey of Faith in the Himalayas",
    paragraphs: [
      "For Hindu pilgrims, Muktinath is a temple of Lord Vishnu and a place where liberation is sought; in the Sri Vaishnava tradition it is counted among the 108 Divya Desams. Pilgrims traditionally bathe beneath the 108 water spouts that pour behind the temple and in its two sacred ponds, and sacred shaligram stones are collected from the Kali Gandaki river below.",
      "For Buddhists, the same site is Chumig Gyatsa, associated with Guru Rinpoche, who is said to have meditated here. Prayer flags, chortens and monasteries surround the temple, and Hindu and Buddhist pilgrims share the sacred ground side by side, a reflection of Mustang's rich, layered culture of Thakali, Gurung and Tibetan heritage.",
    ],
    points: [
      "Sacred to Hindus and Buddhists",
      "Temple of Lord Vishnu",
      "108 sacred water spouts",
      "Chumig Gyatsa, 'hundred waters'",
      "Shaligram stones of the Kali Gandaki",
      "Mustang's Tibetan-influenced culture",
    ],
    images: [temple, muktidhara],
  },

  pilgrimage: {
    eyebrow: "Darshan",
    title: "Experience Muktinath Darshan",
    intro:
      "After landing in the Muktinath area, pilgrims proceed to the temple for darshan. Allow your pace to match the altitude, and take a moment to absorb the sacred atmosphere.",
    points: [
      "Arrival in the Muktinath area",
      "Short walk or local transfer to the temple, depending on the landing point",
      "Time for darshan as per the selected itinerary",
      "Respect local religious customs",
      "Wear warm, modest clothing and easy-to-remove footwear",
      "Bring a towel and change of clothes if you plan a ritual bath",
      "Follow temple and local guidelines, including on photography",
    ],
    image: muktidhara,
    note: "Temple access and darshan arrangements may vary according to local conditions, opening hours, religious observances and operational timing.",
    ctaLabel: "Plan Your Muktinath Yatra",
    ctaMessage: "Hello Karvaahh, I'd like to plan a Muktinath yatra by helicopter from Pokhara.",
  },

  route: {
    title: "The Flight Route",
    intro: "How a typical journey unfolds, from Pokhara through the Kali Gandaki valley to Muktinath.",
    note: "Landing locations, flight routes, temple access, timings and ground movement are subject to weather, aviation regulations, local conditions and operator requirements.",
    stops: [
      { name: "Pokhara", detail: "Departure point", mode: "landing", elevation: "Approx. 820 m" },
      { name: "Pokhara Valley & Annapurna Views", detail: "Climb over Phewa Lake towards the range", mode: "aerial" },
      { name: "Kali Gandaki Gorge", detail: "Between Dhaulagiri and Annapurna", mode: "aerial" },
      { name: "Jomsom", detail: "Possible operational stop", mode: "optional", elevation: "Approx. 2,720 m" },
      { name: "Kagbeni & Mustang Valley", detail: "Trans-Himalayan landscape below", mode: "aerial", elevation: "Approx. 2,810 m" },
      { name: "Muktinath", detail: "Designated landing point, subject to operations", mode: "landing", elevation: "Approx. 3,710 m" },
      { name: "Pokhara", detail: "Return and arrival", mode: "landing", elevation: "Approx. 820 m" },
    ],
  },

  itinerary: {
    title: "Your Muktinath Helicopter Journey",
    intro: "Choose how you would like to travel. Every option is a sample and is confirmed with you before booking.",
    options: [
      {
        id: "pokhara",
        tab: "From Pokhara",
        title: "Muktinath Helicopter Tour from Pokhara",
        tag: "Classic pilgrimage",
        availability: "standard",
        summary: "The classic same-day helicopter pilgrimage from Pokhara to Muktinath and back.",
        steps: [
          { title: "Hotel Pickup / Departure", text: "If included in the selected package, transfer from your Pokhara hotel to the designated helicopter departure point." },
          { title: "Helicopter Takeoff From Pokhara", text: "Begin the journey towards Mustang with spectacular views of the Annapurna and surrounding Himalayan landscapes." },
          { title: "Himalayan Flight", text: "Fly across dramatic mountain valleys and landscapes towards the Muktinath region." },
          { title: "Arrival at Muktinath", text: "Reach the designated helicopter landing point according to operational and aviation requirements." },
          { title: "Muktinath Temple Visit", text: "Proceed for darshan and experience the sacred atmosphere, with time according to the selected itinerary and local conditions." },
          { title: "Return Flight", text: "Fly back towards Pokhara with another perspective of the Himalayan landscape." },
        ],
        notice:
          "Landing locations, flight routes, temple access, timings and ground movement are subject to weather, aviation regulations, local conditions and operator requirements.",
      },
      {
        id: "private",
        tab: "Private Charter",
        title: "Private Muktinath Helicopter Charter",
        tag: "Private",
        availability: "standard",
        summary: "The pilgrimage on a helicopter reserved for your family or group alone, planned around your rituals and pace within the aircraft's limits.",
        steps: [
          { title: "Your Group Only", text: "The whole helicopter is reserved for you, within passenger and weight limits." },
          { title: "Planned Around You", text: "Departure planning and time for darshan discussed in advance, subject to operations." },
          { title: "Muktinath", text: "Fly to Muktinath for darshan as per the agreed itinerary." },
          { title: "Return", text: "Fly back to Pokhara with personalised coordination throughout." },
        ],
        points: ["Exclusive helicopter", "Flexible group", "Families & pilgrimage groups", "Personalised coordination"],
      },
      {
        id: "kathmandu",
        tab: "From Kathmandu",
        title: "Muktinath Helicopter Tour from Kathmandu",
        tag: "On request",
        availability: "on-request",
        summary: "For pilgrims starting in Kathmandu, combining a transfer to Pokhara or a longer charter with the Muktinath flight.",
        steps: [
          { title: "Kathmandu", text: "Begin in Kathmandu, with the option to visit Pashupatinath first." },
          { title: "To Pokhara", text: "Transfer to Pokhara by flight or road, or as arranged for a charter." },
          { title: "Muktinath", text: "Helicopter pilgrimage to Muktinath for darshan." },
          { title: "Return", text: "Return to Pokhara or Kathmandu as planned." },
        ],
        notice: "Available on request / subject to flight operations.",
      },
      {
        id: "overnight",
        tab: "Unhurried Darshan",
        title: "Muktinath Pilgrimage With Overnight Stay",
        tag: "On request",
        availability: "on-request",
        summary:
          "For pilgrims who want more time at Muktinath, combining the flight with a night in Muktinath or Jomsom for an unhurried darshan and gentler acclimatization.",
        steps: [
          { title: "Fly In", text: "Helicopter from Pokhara to the Muktinath region." },
          { title: "Unhurried Darshan", text: "Time for rituals, the 108 spouts and the surrounding shrines." },
          { title: "Overnight", text: "Stay in Muktinath or Jomsom, as arranged." },
          { title: "Return", text: "Fly or drive back to Pokhara, as per the selected package." },
        ],
        notice: "Available on request / subject to flight operations and accommodation availability.",
      },
    ],
  },

  options: {
    title: "Choose Your Muktinath Helicopter Experience",
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
        whatsappMessage: "Hello Karvaahh, I'd like a shared-seat Muktinath helicopter tour. Please share the current price and availability.",
      },
      {
        name: "Private Helicopter Charter",
        basis: "Private charter",
        price: "Price on Request",
        points: ["Exclusive experience", "Flexible group arrangement", "Families & private pilgrimage groups"],
        idealFor: "Families and pilgrimage groups",
        featured: true,
        whatsappMessage: "Hello Karvaahh, I'd like a private Muktinath helicopter charter. Please share the current price.",
      },
      {
        name: "Customised Muktinath Pilgrimage",
        basis: "Tailor-made",
        price: "Enquire for details",
        points: ["Customised travel arrangements", "Special pilgrimage groups", "Flexible ground services where possible"],
        idealFor: "Pilgrimage groups and special occasions",
        whatsappMessage: "Hello Karvaahh, I'd like a customised Muktinath pilgrimage. Here are my requirements:",
      },
    ],
  },

  departures: {
    title: "Select Your Preferred Date",
    intro: "Muktinath flights can run on most clear-weather days. Choose a listed shared-seat date, or enquire for the day you prefer.",
    emptyTitle: "Choose your own date",
    emptyCta: "Check my date on WhatsApp",
    emptyMessage: "Hello Karvaahh, I'd like to check availability for a Muktinath helicopter tour on this date: ",
    emptyText: "Flights are arranged on request around clear-weather days. Tell us your preferred date and we will confirm availability.",
    // Add confirmed shared-seat departures only, e.g. { date: "2026-11-02", status: "open" }.
    dates: [],
  },

  extensions: {
    title: "Extend Your Muktinath Journey",
    intro: "Combine your helicopter pilgrimage with more of Nepal's sacred and Himalayan destinations.",
    ctaLabel: "Create a Custom Pilgrimage",
    ctaMessage: "Hello Karvaahh, I'd like to create a custom pilgrimage combining Muktinath with other destinations.",
    items: [
      { title: "Muktinath + Pokhara", text: "Lakeside temples, sunrise viewpoints and Himalayan views.", image: pokhara, href: "/destinations/gandaki-province" },
      { title: "Muktinath + Kathmandu", text: "Pair Muktinath with Pashupatinath and the valley's heritage.", image: kathmandu, href: "/spiritual-journeys/pashupatinath" },
      { title: "Muktinath + Jomsom", text: "Stay in the Kali Gandaki valley for a slower pace and gentler acclimatization.", image: kagbeni },
      { title: "Muktinath + Mustang", text: "Continue by helicopter to Upper Mustang and Lo Manthang.", image: loManthang, href: "/activities/helicopter-tours/upper-mustang" },
      { title: "Muktinath + Manang", text: "Cross into the Manang valley beneath the Annapurna wall.", image: manang, href: "/packages/manang-circuit-trek" },
      { title: "Muktinath + Annapurna Region", text: "Add an Annapurna helicopter tour from Pokhara.", image: annapurnaRange, href: "/activities/helicopter-tours/annapurna" },
    ],
  },

  inclusions: [
    { text: "Helicopter flight according to selected package", status: "included" },
    { text: "Scenic Himalayan sightseeing", status: "included" },
    { text: "Muktinath visit as per selected itinerary", status: "included" },
    { text: "Ground transfers where included", status: "package" },
    { text: "Applicable permits / fees where included", status: "package" },
    { text: "Travel assistance where specified", status: "package" },
  ],

  exclusions: [
    "Personal expenses",
    "Meals unless specifically included",
    "Travel insurance",
    "Accommodation unless specifically included",
    "Additional transportation",
    "Personal religious offerings / donations",
    "Additional services",
    "Costs arising from weather-related delays or operational changes",
  ],

  preparation: {
    title: "Before You Fly",
    intro: "Muktinath is a high-altitude sacred site. A little preparation keeps the journey comfortable and respectful.",
    carry: ["Warm jacket", "Hat & gloves", "Sunglasses", "Sunscreen", "Water", "Personal medication", "Valid identification", "Towel & change of clothes"],
    topics: [
      {
        icon: "sun",
        title: "Clothing",
        text: "Mustang is often sunny but cold and very windy, especially later in the day. Wear warm, modest layers and comfortable shoes that are easy to remove at the temple.",
      },
      {
        icon: "landmark",
        title: "Temple Etiquette",
        text: "Respect religious customs, temple rules and local traditions. Remove footwear where required and follow the guidance of temple staff.",
      },
      {
        icon: "camera",
        title: "Photography",
        text: "Photography is welcome in many outdoor areas, but follow temple and local rules, especially inside shrines and during rituals.",
      },
      {
        icon: "mountainSnow",
        title: "Altitude",
        text: "Muktinath is at around 3,710 m. Walk slowly, drink water and tell the team if you feel unwell.",
      },
    ],
  },

  safety: {
    eyebrow: "Safety First",
    title: "Important Information",
    intro: "Helicopter flights are weather dependent. Flight schedules, routes and landing locations may change according to safety requirements, aviation regulations and operational conditions.",
    points: [
      { title: "Weather", text: "Flight operations depend on suitable weather and visibility. Afternoon winds in the Kali Gandaki valley make morning flights the norm." },
      { title: "Altitude", text: "Muktinath is located at high altitude. Travellers should consider altitude-related discomfort." },
      { title: "Flight operations", text: "Routes, timing and landing locations can change according to aviation and safety requirements." },
      { title: "Weight limitations", text: "Passenger and baggage weight may be restricted by helicopter and operator requirements." },
      { title: "Identification", text: "Carry valid identification documents as required." },
      { title: "Baggage", text: "Only permitted baggage should be carried." },
      { title: "Temple etiquette", text: "Respect religious customs, temple rules and local traditions." },
      { title: "Clothing", text: "Wear comfortable, warm and weather-appropriate clothing." },
      { title: "Photography", text: "Follow temple and local rules regarding photography." },
      { title: "Safety", text: "All flight and landing decisions remain with the pilot and operator." },
    ],
  },

  seasons: {
    title: "Best Time for a Muktinath Helicopter Tour",
    intro: "Muktinath can be visited through much of the year, but conditions change with the seasons.",
    note: "Helicopter flights are weather dependent. Flight schedules, routes and landing locations may change according to safety requirements, aviation regulations and operational conditions.",
    items: [
      { name: "Spring", months: "March – May", rating: "Popular", icon: "sun", text: "Comfortable travel conditions and beautiful Himalayan landscapes." },
      { name: "Autumn", months: "September – November", rating: "Clear views", icon: "leaf", text: "Generally favourable mountain visibility and excellent photography opportunities." },
      { name: "Winter", months: "December – February", rating: "Cold", icon: "snow", text: "Cold temperatures and possible snow can affect access and flight operations." },
      { name: "Monsoon", months: "June – August", rating: "Limited", icon: "rain", text: "Mustang itself is drier, but cloud and rain along the route can affect helicopter operations." },
    ],
  },

  altitude: {
    title: "Altitude & Health",
    intro: "The flight climbs from Pokhara to Muktinath in a short time, without the gradual acclimatization of an overland journey.",
    points: [
      { place: "Pokhara", metres: 820, label: "820 m" },
      { place: "Jomsom", metres: 2720, label: "2,720 m" },
      { place: "Muktinath Temple", metres: 3710, label: "3,710 m" },
    ],
    guidance: [
      "Rapid altitude gain can cause headache, breathlessness or dizziness.",
      "Walk slowly to the temple, drink water and avoid exertion.",
      "Tell the team straight away if you feel unwell.",
    ],
    disclaimer:
      "This is general information, not medical advice. Travellers with heart, lung, blood pressure or other relevant medical conditions, and anyone who is pregnant, should consult a qualified medical professional before high-altitude travel.",
  },

  travelerTypes: {
    title: "Perfect for Pilgrims Who Want a Comfortable Himalayan Journey",
    intro: "The helicopter brings Muktinath within reach of devotees of every age.",
    items: [
      { icon: "heart", title: "Senior Pilgrims", text: "A comfortable alternative to the long road journey, subject to medical advice." },
      { icon: "users", title: "Families", text: "Make the pilgrimage together in a single morning." },
      { icon: "sun", title: "Couples", text: "A meaningful shared journey in the Himalaya." },
      { icon: "leaf", title: "Spiritual Travellers", text: "Experience a site sacred to two great traditions." },
      { icon: "landmark", title: "Pilgrimage Groups", text: "Private charters and customised arrangements for groups." },
      { icon: "compass", title: "First-Time Visitors", text: "An unforgettable introduction to Mustang and the Himalaya." },
      { icon: "camera", title: "Photography Enthusiasts", text: "Temples, prayer flags and trans-Himalayan landscapes." },
      { icon: "shield", title: "Luxury Travellers", text: "A private, premium pilgrimage with personalised coordination." },
      { icon: "clock", title: "Short-Stay Travellers", text: "Complete the pilgrimage in a morning from Pokhara." },
    ],
  },

  gallery: {
    title: "Photo Gallery",
    intro: "Scenes from Muktinath and Mustang. Tap any photo to view it larger.",
    items: [
      { image: temple, caption: "Muktinath Temple and its sacred ponds" },
      { image: muktidhara, caption: "The 108 sacred water spouts" },
      { image: monasteryDhaulagiri, caption: "A monastery in the Muktinath area with Dhaulagiri beyond" },
      { image: kagbeni, caption: "Kagbeni and the Kali Gandaki valley" },
      { image: mustangLandscape, caption: "Mustang's trans-Himalayan landscape" },
      { image: dhaulagiri, caption: "Dhaulagiri" },
      { image: annapurnaRange, caption: "The Annapurna range above Pokhara" },
      { image: loManthang, caption: "Heritage of Upper Mustang" },
      { image: helicopter, caption: "Helicopter in the Kali Gandaki valley" },
    ],
  },

  trust: {
    title: "Karvaahh – Live to Travel",
    intro: "Karvaahh Tours & Travels is a Nepal and India travel specialist with teams in Kathmandu and Delhi NCR.",
    points: [
      { title: "Nepal & India travel specialists", text: "Pilgrimages from Muktinath and Pashupatinath to Kailash and the Char Dham." },
      { title: "Customised Himalayan & pilgrimage journeys", text: "Private and group yatras planned around your dates and rituals." },
      { title: "Local travel assistance", text: "A Nepal-based team that coordinates with helicopter operators for you." },
    ],
  },

  faqs: [
    {
      question: "What is the Muktinath Helicopter Tour?",
      answer:
        "It is a helicopter pilgrimage from Pokhara to Muktinath Temple in Mustang, flying through the Kali Gandaki valley, with time for darshan as per the selected itinerary.",
    },
    {
      question: "Where does the Muktinath Helicopter Tour start?",
      answer: "The tour usually starts and ends in Pokhara. Starting from Kathmandu is possible on request.",
    },
    {
      question: "How long does the helicopter tour take?",
      answer: "Typically around 3–4 hours in total, depending on the flight plan, any operational stop, time at the temple and weather. Exact timing is confirmed on the day.",
    },
    {
      question: "Can I travel from Pokhara to Muktinath by helicopter?",
      answer: "Yes. Flights depart from Pokhara towards Muktinath, subject to weather and operator requirements.",
    },
    {
      question: "Can senior citizens take the helicopter tour?",
      answer:
        "Yes, it is a popular choice for senior pilgrims as it avoids the long road journey. Because Muktinath is at around 3,710 m, we recommend consulting a doctor before booking.",
    },
    {
      question: "Can children join the tour?",
      answer: "Children can often join, but operator requirements and altitude considerations vary. Please confirm when you enquire.",
    },
    {
      question: "Is temple darshan included?",
      answer:
        "Time for a Muktinath visit is part of the selected itinerary. Temple access and darshan arrangements may vary with local conditions, opening hours, religious observances and operational timing.",
    },
    {
      question: "Is helicopter landing at Muktinath guaranteed?",
      answer: "No. Landing locations and timing are subject to weather, aviation regulations, local conditions and operator requirements.",
    },
    {
      question: "What happens if the weather is bad?",
      answer:
        "The flight may be delayed, rescheduled or cancelled, or the route changed. Morning departures are usual because winds build in the valley later in the day. Rescheduling and refund terms depend on the package; enquire for details.",
    },
    {
      question: "What is the best season for Muktinath?",
      answer: "Spring and autumn usually offer the most comfortable conditions and clearest views. Winter is cold with possible snow; the monsoon can bring cloud along the route.",
    },
    {
      question: "Can I book a private helicopter?",
      answer: "Yes. A private charter reserves the whole helicopter for your family or pilgrimage group, within passenger and weight limits. Price on request.",
    },
    {
      question: "How much baggage can I carry?",
      answer: "Only a small bag with essentials, offerings and a change of clothes. The operator confirms the weight allowance before the flight.",
    },
    {
      question: "Do I need travel insurance?",
      answer: "Travel insurance is not included. We recommend insurance that covers helicopter flights and high-altitude travel.",
    },
    {
      question: "What should I wear for Muktinath?",
      answer:
        "Warm, modest layers, a windproof jacket, a hat and gloves, and comfortable shoes that are easy to remove at the temple. Bring a towel and spare clothes if you plan a ritual bath.",
    },
    {
      question: "Can I combine Muktinath with Mustang or Pokhara?",
      answer: "Yes. We can combine the flight with time in Pokhara, Kathmandu, Jomsom, Upper Mustang, Manang or the Annapurna region. Ask us for a custom pilgrimage.",
    },
  ],

  cta: {
    title: "Begin Your Sacred Journey to Muktinath",
    text: "Experience the spiritual beauty of Muktinath and the breathtaking Mustang Himalayas with a comfortable helicopter journey from Pokhara.",
    image: monasteryDhaulagiri,
    animated: true,
    primaryLabel: "Book Muktinath Helicopter Tour",
    primaryHref: "#book",
    quoteLabel: "Get a Custom Quote",
    whatsappLabel: "WhatsApp Us",
    planMessage: "Hello Karvaahh, I'd like to book a Muktinath helicopter tour from Pokhara.",
    quoteSubject: "Quote request: Muktinath Helicopter Tour",
  },

  relatedTours: [
    {
      title: "Pashupatinath & Muktinath Yatra",
      text: "The complete Nepal pilgrimage from Kathmandu to Mustang.",
      href: "/spiritual-journeys/pashupatinath",
      image: temple,
    },
    {
      title: "Annapurna Helicopter Tour",
      text: "Fly from Pokhara into the Annapurna Sanctuary.",
      href: "/activities/helicopter-tours/annapurna",
      image: annapurnaRange,
    },
    {
      title: "Mardi Himal Helicopter Tour",
      text: "Fly from Pokhara over the Mardi Himal ridge.",
      href: "/activities/helicopter-tours/mardi-himal",
    },
    {
      title: "Gosaikunda Helicopter Tour",
      text: "A sacred lake journey from Kathmandu.",
      href: "/activities/helicopter-tours/gosaikunda",
      image: {
        src: "/images/bagmati/gosainkunda-lake-langtang-himalayan-trekking-bagmati-nepal.jpg",
        alt: "Gosaikunda lake in the Langtang Himalaya",
        label: "Gosaikunda",
      },
    },
    {
      title: "Everest Helicopter Tour",
      text: "A same-day helicopter journey to the foot of Everest.",
      href: "/activities/helicopter-tours/everest-base-camp",
    },
    {
      title: "Mustang Circuit Trek",
      text: "Explore Upper Mustang and Lo Manthang on foot.",
      href: "/adventure/mustang-circuit-trek",
      image: loManthang,
    },
    {
      title: "Pokhara & Gandaki Province",
      text: "Lakes, viewpoints and hill villages around Pokhara.",
      href: "/destinations/gandaki-province",
      image: pokhara,
    },
    { title: "Langtang Helicopter Tour", text: "Glaciers and peaks close to Kathmandu.", href: "/activities/helicopter-tours/langtang" },
  ],
};
