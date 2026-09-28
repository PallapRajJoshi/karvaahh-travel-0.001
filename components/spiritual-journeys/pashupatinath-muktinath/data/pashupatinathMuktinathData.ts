/**
 * Pashupatinath & Muktinath Yatra — all page content.
 *
 * Accuracy rules applied throughout:
 * - Elevations and distances are approximate and labelled as such.
 * - No prices, hotel names, timings, schedules or dates.
 * - No guaranteed darshan, views, flights, roads or spiritual outcomes.
 */
import { IMAGE_BASE, PAGE_URL, ROUTES } from "./site";
import type {
  ChecklistGroup,
  Extension,
  Fact,
  Faq,
  GalleryItem,
  ImageAsset,
  JourneyStage,
  RouteSegment,
  RouteStop,
  StayStop,
  TitledText,
  TransportOption,
  WeatherCard,
} from "./types";

/* ------------------------------------------------------------------ */
/* Images                                                              */
/* Flip `ready` to true per file once it is placed in /public.         */
/* ------------------------------------------------------------------ */

const img = (
  file: string,
  alt: string,
  tone: ImageAsset["tone"],
  width = 1600,
  height = 1067,
): ImageAsset => ({
  src: `${IMAGE_BASE}/${file}`,
  alt,
  width,
  height,
  ready: false,
  tone,
});

export const images = {
  og: img(
    "pashupatinath-muktinath-yatra-nepal.jpg",
    "Pashupatinath Temple in Kathmandu and Muktinath Temple in Mustang",
    "dusk",
    1200,
    630,
  ),
  pashupatinath: img(
    "pashupatinath-temple-kathmandu.jpg",
    "Gilded pagoda roofs of Pashupatinath Temple above the Bagmati River in Kathmandu",
    "warm",
  ),
  aarati: img(
    "pashupatinath-aarati-nepal.jpg",
    "Priests performing the evening Aarati with oil lamps on the Bagmati riverbank",
    "dusk",
  ),
  bagmati: img(
    "bagmati-river-ghats-pashupatinath.jpg",
    "Stone ghats and shrines along the Bagmati River at Pashupatinath",
    "stone",
  ),
  kathmandu: img(
    "kathmandu-heritage-temples.jpg",
    "Traditional Newar temples and courtyards in the Kathmandu Valley",
    "warm",
  ),
  pokhara: img(
    "pokhara-annapurna-muktinath-route.jpg",
    "Phewa Lake in Pokhara with the Annapurna range in the distance",
    "river",
  ),
  jomsom: img(
    "jomsom-mustang-nepal.jpg",
    "Jomsom town in the Kali Gandaki Valley beneath snow-capped peaks",
    "cool",
  ),
  kaliGandaki: img(
    "kali-gandaki-valley-mustang.jpg",
    "The wide, stony riverbed of the Kali Gandaki Valley in Mustang",
    "stone",
    2000,
    1000,
  ),
  mustang: img(
    "mustang-landscape-nepal.jpg",
    "Arid hills and terraced fields of the Mustang landscape",
    "stone",
  ),
  muktinath: img(
    "muktinath-temple-nepal.jpg",
    "Pagoda-style Muktinath Temple with prayer flags in Mustang",
    "cool",
  ),
  muktinathWide: img(
    "muktinath-mustang-himalayas.jpg",
    "Muktinath temple complex at high altitude with Himalayan peaks behind",
    "cool",
    2000,
    1100,
  ),
  waterSpouts: img(
    "muktinath-108-water-spouts.jpg",
    "Pilgrims beside the semicircle of 108 water spouts at Muktinath",
    "river",
  ),
  jwalaMai: img(
    "jwala-mai-temple-muktinath.jpg",
    "Small natural flames inside the Jwala Mai shrine near Muktinath",
    "dusk",
  ),
  monastery: img(
    "buddhist-monastery-mustang.jpg",
    "Buddhist monastery with prayer wheels in the Muktinath area",
    "warm",
  ),
} satisfies Record<string, ImageAsset>;

/* ------------------------------------------------------------------ */
/* SEO                                                                 */
/* ------------------------------------------------------------------ */

export const seo = {
  /** 61 characters — within typical SERP display width. */
  title: "Pashupatinath & Muktinath Yatra | Nepal Pilgrimage | Karvaahh",
  /** ~155 characters. The brief's 190-char version would be truncated. */
  description:
    "Plan the Pashupatinath & Muktinath Yatra via Kathmandu, Pokhara and Jomsom. Sacred temples, 108 water spouts, Jwala Mai, routes, altitude and preparation.",
  ogTitle: "Pashupatinath & Muktinath Yatra",
  ogDescription:
    "From the sacred heart of Kathmandu to the holy Himalayas of Mustang: temples, route options and practical guidance for a Nepal pilgrimage.",
  canonical: PAGE_URL,
  breadcrumbName: "Pashupatinath & Muktinath Yatra",
} as const;

/* ------------------------------------------------------------------ */
/* Hero                                                                */
/* ------------------------------------------------------------------ */

export const hero = {
  eyebrow: "Spiritual Journeys",
  title: "Pashupatinath & Muktinath Yatra",
  subtitle: "From the Sacred Heart of Kathmandu to the Holy Himalayas of Mustang",
  text: "Experience a meaningful pilgrimage connecting Pashupatinath Temple and Muktinath Temple through Kathmandu, Pokhara, Jomsom and the spectacular landscapes of the Kali Gandaki Valley.",
  primaryCta: { label: "Plan Your Yatra", href: ROUTES.enquiry },
  secondaryCta: { label: "Explore the Journey", href: "#route" },
  images: { left: images.pashupatinath, right: images.muktinathWide },
  route: [
    { name: "Kathmandu", detail: "Pashupatinath", icon: "temple" },
    { name: "Pokhara", detail: "Lakes and Annapurna", icon: "lake" },
    { name: "Jomsom", detail: "Gateway to Mustang", icon: "town" },
    { name: "Muktinath", detail: "Approx. 3,800 m", icon: "shrine" },
  ],
} as const;

/* ------------------------------------------------------------------ */
/* Quick facts                                                         */
/* ------------------------------------------------------------------ */

export const quickFacts: Fact[] = [
  { label: "Starting point", value: "Kathmandu" },
  { label: "First sacred destination", value: "Pashupatinath Temple", note: "On the Bagmati River" },
  { label: "Himalayan gateway", value: "Jomsom" },
  { label: "Main pilgrimage destination", value: "Muktinath Temple" },
  { label: "Muktinath elevation", value: "Approx. 3,800 m", note: "Figures vary by source" },
  { label: "Region", value: "Mustang, Nepal" },
  { label: "Major valley", value: "Kali Gandaki Valley" },
  { label: "Journey type", value: "Spiritual and Himalayan pilgrimage" },
];

/* ------------------------------------------------------------------ */
/* Introduction + why combine                                          */
/* ------------------------------------------------------------------ */

export const introduction = {
  heading: "Pashupatinath & Muktinath Yatra – A Sacred Journey Across Nepal",
  lead: "Pashupatinath & Muktinath Yatra is a spiritually enriching pilgrimage journey connecting two of Nepal's most revered sacred destinations.",
  paragraphs: [
    "It begins in Kathmandu at Pashupatinath Temple, one of the most important Shiva shrines in the Hindu world, set on the banks of the sacred Bagmati River. From the valley's temples and ghats, the journey heads west to Pokhara and then north into the Himalaya.",
    "Beyond Pokhara the road and air routes enter the Kali Gandaki Valley, a deep corridor between the Annapurna and Dhaulagiri massifs. At Jomsom the landscape turns high, dry and open: the country of Mustang. From here it is a short climb to Muktinath, revered by Hindus as a sacred abode of Lord Vishnu and by Buddhists as Chumig Gyatsa, the place of a hundred waters.",
    "Along the way, pilgrims move between two very different Nepals: the dense, devotional heritage of the Kathmandu Valley and the wide mountain world of Mustang, with time for darshan, prayer, reflection and the everyday culture of the communities who live here.",
  ],
};

export const whyCombine = {
  heading: "Two Sacred Destinations, One Spiritual Journey",
  intro:
    "Many pilgrims travelling to Nepal hope to visit both temples in one trip. The route between them is as much a part of the yatra as the destinations themselves.",
  points: [
    {
      title: "A central Shiva pilgrimage",
      text: "Pashupatinath is one of the most revered Shiva temples for Hindus, and a natural first darshan on arrival in Nepal.",
      icon: "temple",
    },
    {
      title: "Sacred to two traditions",
      text: "Muktinath is honoured by both Hindus and Buddhists, giving the journey a shared, cross-cultural character.",
      icon: "prayer",
    },
    {
      title: "From valley heritage to high Himalaya",
      text: "The route links Kathmandu's cultural heritage with the mountain landscapes of Mustang, climbing from about 1,400 m to about 3,800 m.",
      icon: "mountain",
    },
    {
      title: "Temples and landscapes together",
      text: "Travellers experience sacred sites alongside lakes, river valleys and, weather permitting, some of the world's highest peaks.",
      icon: "lake",
    },
    {
      title: "Time for prayer and reflection",
      text: "Unhurried travel days create space for prayer, reflection and meeting the people and customs along the way.",
      icon: "heart",
    },
  ] satisfies TitledText[],
};

/* ------------------------------------------------------------------ */
/* Two sacred destinations (comparison)                                */
/* ------------------------------------------------------------------ */

export const sacredDestinations = {
  heading: "Where the Yatra begins, and where it leads",
  connector: "A climb of roughly 2,400 metres",
  items: [
    {
      id: "pashupatinath",
      name: "Pashupatinath",
      place: "Kathmandu",
      elevation: "Approx. 1,400 m (Kathmandu Valley)",
      tradition: "Lord Shiva as Pashupati",
      points: [
        "On the banks of the sacred Bagmati River",
        "Historic pagoda temple within a UNESCO World Heritage Site",
        "Darshan and worship according to temple rules",
        "Evening Aarati on the riverbank",
        "Guhyeshwari and many shrines nearby",
      ],
    },
    {
      id: "muktinath",
      name: "Muktinath",
      place: "Mustang",
      elevation: "Approx. 3,800 m",
      tradition: "Sri Muktinath (Lord Vishnu) · Chumig Gyatsa",
      points: [
        "Revered by Hindus and Buddhists",
        "The 108 sacred water spouts",
        "Jwala Mai Temple and its natural flame",
        "Buddhist gompas within the sacred complex",
        "A high Himalayan setting below the Thorong La",
      ],
    },
  ],
};

/* ------------------------------------------------------------------ */
/* Pashupatinath                                                       */
/* ------------------------------------------------------------------ */

export const pashupatinath = {
  heading: "Pashupatinath Temple – Sacred Heritage of Kathmandu",
  lead: "On the banks of the Bagmati River in eastern Kathmandu, Pashupatinath is the spiritual heart of Nepal for Hindu pilgrims.",
  paragraphs: [
    "The temple is dedicated to Lord Shiva as Pashupati, the lord of all living beings. Its two-tiered pagoda roof, gilded pinnacle and silver-plated doors make it one of the finest examples of traditional Nepali temple architecture, and a great gilded Nandi faces the sanctum from the courtyard.",
    "Pashupatinath forms part of the Kathmandu Valley UNESCO World Heritage Site. Around the main temple stretches a whole sacred landscape: riverside ghats, rows of small Shiva shrines on the eastern bank, ashrams, and the Guhyeshwari Temple a short walk upstream.",
    "The riverfront is also a place of last rites, where cremations take place at the ghats. Pilgrims and visitors are asked to treat these spaces, and the families present, with quiet respect.",
  ],
  accessNote:
    "The main temple is traditionally restricted to Hindu devotees; visitors should follow current temple access rules. Non-Hindu visitors can usually view the complex from the terraces across the Bagmati.",
  darshanHeading: "The Pashupatinath Darshan",
  darshanIntro:
    "Every visit is different, but most pilgrims move through the temple area in a similar sequence.",
  darshan: [
    { title: "Arrival", text: "Reach the Pashupatinath area, a short drive from central Kathmandu." },
    { title: "Temple approach", text: "Walk through the designated areas and follow temple and security instructions." },
    { title: "Darshan", text: "Experience the sacred atmosphere according to applicable access rules." },
    { title: "Worship", text: "Pilgrims may undertake worship or puja according to temple procedures." },
    { title: "Bagmati & ghats", text: "Experience the cultural and spiritual landscape of the riverfront." },
    { title: "Aarati", text: "Where available and permitted, experience the evening devotional ceremony." },
  ] satisfies JourneyStage[],
  darshanNote:
    "Temple and Aarati timings vary with season and occasion. Karvaahh confirms current arrangements while planning your visit.",
  image: images.pashupatinath,
  secondaryImage: images.aarati,
};

/* ------------------------------------------------------------------ */
/* Muktinath                                                           */
/* ------------------------------------------------------------------ */

export const muktinath = {
  heading: "Muktinath Temple – Sacred Himalayan Pilgrimage",
  lead: "High in the Mustang district, at approximately 3,800 metres, Muktinath stands at the foot of the Thorong La pass above the village of Ranipauwa.",
  paragraphs: [
    "For Hindus, Muktinath is a sacred abode of Lord Vishnu, worshipped here as Sri Muktinath, the lord of liberation. The shrine is counted among the 108 Divya Desams honoured in the Sri Vaishnava tradition, and the Kali Gandaki below is known for the shaligram stones venerated as forms of Vishnu.",
    "For Buddhists, the same ground is Chumig Gyatsa, the place of a hundred waters, associated with Avalokiteshvara and with Guru Rinpoche, who is said to have meditated here. Buddhist nuns from the nearby gompa have traditionally helped care for the shrine.",
    "The small pagoda-style temple sits within a walled complex of prayer flags, trees and gompas, with bare Himalayan ridges on every side. The air is thin, the light is sharp, and the wind often rises in the afternoon.",
  ],
  image: images.muktinathWide,
};

export const waterSpouts = {
  heading: "The Sacred 108 Water Spouts",
  paragraphs: [
    "Behind the temple, 108 water spouts cast in the form of bull heads curve around the shrine in a semicircle, fed by cold mountain springs. Many Hindu pilgrims walk beneath all 108 in turn, receiving water from each spout, and bathe in the two sacred ponds in front of the temple.",
    "The number 108 is significant in both Hindu and Buddhist traditions, echoed in the beads of a prayer mala and in the 108 Divya Desams. For many Hindu pilgrims, this ritual holds deep spiritual significance.",
  ],
  care: [
    "The water is very cold, and the air at this altitude is cold too. Some pilgrims choose to sprinkle water rather than take a full bath.",
    "Carry a towel and dry, warm clothes, and change promptly afterwards.",
    "Follow temple instructions and the lead of the priests and caretakers.",
  ],
  image: images.waterSpouts,
};

export const jwalaMai = {
  heading: "Jwala Mai Temple – The Sacred Flame",
  paragraphs: [
    "A short walk from the main temple, inside the Muktinath complex, a small shrine shelters a natural flame burning beside a trickle of spring water. Earth, water and fire appear together in one place, which is part of why the site is so deeply revered.",
    "Hindus honour the flame as Jwala Mai, the goddess of fire. Buddhists know the shrine as Mebar Lhakhang and associate it with Guru Rinpoche. The flames are generally understood to be fed by natural gas escaping from the ground.",
  ],
  image: images.jwalaMai,
};

export const traditions = {
  heading: "Muktinath in Hindu & Buddhist Traditions",
  intro:
    "Muktinath is one of the rare places where two great traditions share the same sacred ground, each with its own names, stories and practices.",
  hindu: {
    title: "Hindu pilgrimage",
    points: [
      "Lord Vishnu worshipped as Sri Muktinath",
      "One of the 108 Divya Desams of Sri Vaishnavism",
      "Bathing in the sacred ponds and beneath the 108 spouts",
      "Jwala Mai, the goddess of the flame",
      "Shaligram stones from the Kali Gandaki",
    ],
  },
  buddhist: {
    title: "Buddhist sacred traditions",
    points: [
      "Known as Chumig Gyatsa, the hundred waters",
      "Associated with Avalokiteshvara",
      "Guru Rinpoche is said to have meditated here",
      "Mebar Lhakhang and nearby gompas",
      "Prayer flags, prayer wheels and mani walls",
    ],
  },
  shared:
    "Pilgrims from both traditions pray side by side here. Visitors are asked to respect both equally: in the temple, at the gompas, and in the villages around them.",
  image: images.monastery,
};

/* ------------------------------------------------------------------ */
/* Route (centrepiece)                                                 */
/* ------------------------------------------------------------------ */

export const route = {
  heading: "Pashupatinath to Muktinath – The Himalayan Journey",
  intro:
    "The yatra drops from the Kathmandu Valley to the lakeside town of Pokhara, then climbs through the Kali Gandaki Valley to Jomsom and Muktinath. Select a stop to see what each part of the journey holds.",
  caption: "Stylised elevation profile. Distances are not to scale and elevations are approximate.",
  stops: [
    {
      id: "kathmandu",
      image: images.kathmandu,
      name: "Kathmandu",
      role: "Arrival and preparation",
      elevationM: 1400,
      elevationLabel: "Approx. 1,400 m",
      icon: "town",
      summary:
        "Nepal's capital and the starting point of the yatra. A valley of temples, courtyards and living traditions, and the place to rest, gather documents and prepare for the mountains.",
      highlights: [
        "Heritage squares and Newar temple architecture",
        "Spiritual atmosphere from dawn prayers to evening bells",
        "Final preparation for the onward journey",
      ],
      related: { label: "Explore Bagmati Province", href: ROUTES.bagmatiProvince },
    },
    {
      id: "pashupatinath",
      image: images.bagmati,
      name: "Pashupatinath",
      role: "First sacred destination",
      elevationM: 1400,
      elevationLabel: "Kathmandu Valley",
      icon: "temple",
      summary:
        "The Shiva temple on the Bagmati River, where most pilgrims begin their yatra with darshan and, where available, the evening Aarati.",
      highlights: [
        "Darshan according to current temple rules",
        "Bagmati riverbank and ghats",
        "Guhyeshwari Temple nearby",
      ],
      note: "The main temple is traditionally restricted to Hindu devotees.",
      related: null,
    },
    {
      id: "pokhara",
      image: images.pokhara,
      name: "Pokhara",
      role: "Gateway to the Annapurna region",
      elevationM: 820,
      elevationLabel: "Approx. 820 m",
      icon: "lake",
      summary:
        "A calm lakeside city about 200 km west of Kathmandu, and a natural rest stop before the mountains. On clear days the Annapurna range rises above Phewa Lake.",
      highlights: [
        "Lakeside atmosphere and time to rest",
        "Annapurna views when weather allows",
        "Departure point for Jomsom by road or air",
      ],
      related: { label: "Explore Gandaki Province", href: ROUTES.gandakiProvince },
    },
    {
      id: "jomsom",
      image: images.jomsom,
      name: "Jomsom",
      role: "Gateway to Mustang",
      elevationM: 2720,
      elevationLabel: "Approx. 2,720 m",
      icon: "mountain",
      summary:
        "The district headquarters of Mustang, strung along the Kali Gandaki beneath Nilgiri. Jomsom is where the landscape turns high and dry, and the access point for Muktinath.",
      highlights: [
        "Himalayan mountain town on the Kali Gandaki",
        "Dhaulagiri and Annapurna landscapes around the valley",
        "A high-altitude environment: pace yourself",
      ],
      note: "Afternoon winds are common in the valley.",
      related: null,
    },
    {
      id: "muktinath",
      image: images.muktinath,
      name: "Muktinath",
      role: "Main pilgrimage destination",
      elevationM: 3800,
      elevationLabel: "Approx. 3,800 m",
      icon: "shrine",
      summary:
        "The temple of Sri Muktinath, sacred to Hindus and Buddhists, reached by jeep or on foot from Jomsom via the village of Ranipauwa.",
      highlights: [
        "Muktinath darshan",
        "The 108 water spouts and sacred ponds",
        "Jwala Mai Temple and Buddhist gompas",
      ],
      note: "The highest point of the yatra. Move slowly and stay warm.",
      related: null,
    },
  ] satisfies RouteStop[],
  segments: [
    { from: "kathmandu", to: "pashupatinath", label: "Within the valley" },
    { from: "pashupatinath", to: "pokhara", label: "By road or domestic flight" },
    { from: "pokhara", to: "jomsom", label: "Kali Gandaki Valley", emphasis: true },
    { from: "jomsom", to: "muktinath", label: "Road via Ranipauwa" },
  ] satisfies RouteSegment[],
};

/* ------------------------------------------------------------------ */
/* Kali Gandaki + Himalayan views                                      */
/* ------------------------------------------------------------------ */

export const kaliGandaki = {
  heading: "Through the Kali Gandaki Valley",
  paragraphs: [
    "North of Pokhara, the Kali Gandaki river cuts between the Dhaulagiri and Annapurna massifs in a valley often described as one of the deepest in the world. The route follows the river upstream, from green, terraced foothills to the stony, windswept country of Mustang.",
    "Traditional settlements of stone houses with flat roofs, apple orchards, chortens and prayer flags line the way. Villages such as Marpha and Kagbeni sit beside the wide, braided riverbed, and the terrain changes noticeably with every hour of travel.",
  ],
  image: images.kaliGandaki,
  views: {
    heading: "Annapurna & Dhaulagiri Views",
    text: "The route passes close to the Annapurna and Dhaulagiri ranges, and travellers may see dramatic Himalayan peaks and landscapes along the way. What you see depends on:",
    conditions: ["Weather", "Visibility", "The route taken", "Time of day"],
    note: "Mornings are often clearer than afternoons, but mountain views can never be guaranteed.",
  },
};

/* ------------------------------------------------------------------ */
/* Transport + journey flow                                            */
/* ------------------------------------------------------------------ */

export const transport = {
  heading: "Getting from Kathmandu to Muktinath",
  intro:
    "There are two main ways to make the journey. Many pilgrims combine them, driving some legs and flying others.",
  options: [
    {
      id: "road",
      title: "Road journey",
      icon: "road",
      summary:
        "The whole route can be travelled by road. It is long but scenic, and less dependent on flight operations.",
      legs: [
        "Kathmandu → Pokhara: about 200 km on the Prithvi Highway",
        "Pokhara → Jomsom: mountain road through Beni and the Kali Gandaki Valley",
        "Jomsom → Muktinath: onward by jeep via Ranipauwa",
      ],
      considerations: [
        "Road conditions can vary",
        "Mountain roads can be rough and slow",
        "Weather and landslides, especially in the monsoon, may affect travel",
        "Travel times can change from day to day",
      ],
    },
    {
      id: "flight",
      title: "Flight-assisted option",
      icon: "plane",
      summary:
        "Where operationally available, the short Pokhara to Jomsom flight replaces the longest and roughest road leg.",
      legs: [
        "Kathmandu → Pokhara: by road or domestic flight",
        "Pokhara → Jomsom: a short mountain flight, usually in the morning",
        "Jomsom → Muktinath: onward by jeep via Ranipauwa",
      ],
      considerations: [
        "Weather dependent: valley winds strengthen later in the day",
        "Aviation and schedule dependent",
        "Delays and cancellations are common in poor weather",
        "May significantly reduce time spent on the road",
      ],
    },
  ] satisfies TransportOption[],
  note: "Subject to current regulations, weather, road conditions and operational availability.",
};

export const itinerary = {
  heading: "A Sample Journey Flow",
  intro: "The journey unfolds in stages rather than a fixed number of days.",
  stages: [
    { title: "Kathmandu arrival & preparation", text: "Arrive, rest and prepare documents and clothing for the mountains." },
    { title: "Pashupatinath darshan", text: "Visit Pashupatinath and the Bagmati riverfront; the evening Aarati where available." },
    { title: "Kathmandu → Pokhara", text: "Travel west by road or air and rest beside Phewa Lake." },
    { title: "Pokhara → Jomsom", text: "Enter the Kali Gandaki Valley by road, or fly if operating, and settle in at altitude." },
    { title: "Jomsom → Muktinath", text: "Continue up the valley to Ranipauwa, below the temple." },
    { title: "Muktinath darshan & sacred sites", text: "Darshan, the 108 spouts, Jwala Mai and the gompas, taken slowly." },
    { title: "Return toward Pokhara / Kathmandu", text: "Descend through the valley and return by road or air." },
  ] satisfies JourneyStage[],
  disclaimer:
    "Actual itinerary, transportation and overnight locations may vary according to the selected package, weather, road conditions, flight operations and local circumstances.",
};

/* ------------------------------------------------------------------ */
/* Preparation                                                         */
/* ------------------------------------------------------------------ */

export const altitude = {
  heading: "Altitude Matters",
  highlight: "Approx. 3,800 m",
  highlightLabel: "Muktinath",
  intro:
    "Muktinath is a high-altitude destination, and the climb from Pokhara is steep. Most travellers feel the thinner air; how it affects you is individual and hard to predict.",
  points: [
    { title: "Acclimatise", text: "Allow time at Jomsom before going higher, and avoid rushing the ascent.", icon: "mountain" },
    { title: "Hydrate", text: "Drink water regularly; dry mountain air dehydrates quickly.", icon: "drop" },
    { title: "Rest", text: "Sleep well and build in rest between travel days.", icon: "bed" },
    { title: "Move gradually", text: "Walk slowly, especially uphill to the temple.", icon: "compass" },
    { title: "Stay warm", text: "Cold and wind increase fatigue; dress in layers.", icon: "snow" },
    { title: "Know your limits", text: "Physical exertion feels harder here. Tell your tour leader promptly if you feel unwell.", icon: "heart" },
  ] satisfies TitledText[],
  medical:
    "Travellers with medical concerns should consult a qualified healthcare professional before travelling to high altitude.",
};

export const weather = {
  heading: "Weather & Road Conditions",
  cards: [
    {
      region: "Kathmandu & Pokhara",
      icon: "rain",
      intro: "Mild for much of the year, with strong seasonal variation.",
      seasons: [
        { title: "Spring and autumn", text: "Generally settled, pleasant travel weather with better chances of mountain views." },
        { title: "Monsoon", text: "Heavy rainfall, especially in Pokhara, can disrupt roads and flights." },
        { title: "Winter", text: "Cooler days and cold mornings and evenings." },
      ],
    },
    {
      region: "Mustang / Muktinath",
      icon: "wind",
      intro: "Much colder, drier and more exposed than the valleys below.",
      seasons: [
        { title: "Cold year-round", text: "Temperatures fall sharply after sunset, and winter brings snow." },
        { title: "Strong winds", text: "Winds in the Kali Gandaki Valley often rise by late morning." },
        { title: "Changing conditions", text: "Weather can change rapidly, affecting roads, flights and mountain visibility." },
      ],
    },
  ] satisfies WeatherCard[],
  note: "Subject to current regulations, weather, road conditions and operational availability.",
};

export const travellerTypes = {
  heading: "Who Is This Journey For?",
  items: [
    { title: "Spiritual pilgrims", text: "For travellers seeking sacred destinations and time for darshan and prayer.", icon: "prayer" },
    { title: "Families", text: "For families planning a meaningful Nepal pilgrimage together.", icon: "users" },
    { title: "Senior travellers", text: "With appropriate preparation, realistic pacing and medical planning.", icon: "heart" },
    { title: "Cultural travellers", text: "Interested in Hindu and Buddhist heritage and living traditions.", icon: "temple" },
    { title: "Himalayan travellers", text: "Wanting to combine pilgrimage with mountain landscapes.", icon: "mountain" },
  ] satisfies TitledText[],
  seniorsHeading: "Travelling with seniors or children",
  seniors: [
    "Altitude affects people differently, regardless of age or fitness.",
    "Some walking is needed at both temples, including uneven and uphill ground at Muktinath.",
    "Mornings and evenings are cold in Mustang; children and older travellers feel it sooner.",
    "Vehicle journeys on mountain roads are long and bumpy.",
    "Plan extra rest days rather than a tight schedule.",
  ],
  seniorsNote:
    "Medical consultation and realistic assessment of high-altitude travel are recommended before departure.",
};

export const packing = {
  heading: "What to Pack",
  intro: "Tick items off as you pack. Your list is not saved when you leave the page.",
  groups: [
    {
      id: "clothing",
      title: "Clothing",
      icon: "snow",
      items: ["Thermal layers", "Warm jacket", "Fleece", "Windproof layer", "Warm socks", "Gloves", "Warm cap", "Comfortable trousers"],
    },
    {
      id: "footwear",
      title: "Footwear",
      icon: "compass",
      items: ["Comfortable walking or trekking shoes", "Extra socks", "Easy slip-on footwear for temple visits"],
    },
    {
      id: "personal",
      title: "Personal",
      icon: "sun",
      items: ["Personal medicines", "Sunscreen", "Sunglasses", "Lip balm", "Reusable water bottle", "Toiletries", "Quick-dry towel for the water spouts"],
    },
    {
      id: "travel",
      title: "Travel",
      icon: "document",
      items: ["Passport or accepted ID", "Travel documents", "Permits where required", "Insurance documents", "Power bank"],
    },
  ] satisfies ChecklistGroup[],
};

/* ------------------------------------------------------------------ */
/* Respect: etiquette, photography, safety                             */
/* ------------------------------------------------------------------ */

export const etiquette = {
  heading: "Temple Etiquette",
  intro: "Both temples are active places of worship. A little preparation helps everyone.",
  pashupatinath: {
    title: "At Pashupatinath",
    points: [
      "Dress modestly, covering shoulders and knees",
      "Follow temple rules and posted instructions",
      "Respect worshippers and families at the ghats",
      "Observe photography restrictions",
      "Follow access instructions from temple staff and security",
      "Leather items may not be permitted in some sacred areas",
    ],
  },
  muktinath: {
    title: "At Muktinath",
    points: [
      "Respect both Hindu and Buddhist traditions",
      "Follow temple instructions",
      "Respect monasteries and walk clockwise around Buddhist shrines",
      "Avoid disturbing rituals",
      "Maintain cleanliness in the temple area",
      "Follow local customs",
    ],
  },
  photography: {
    title: "Photography",
    points: [
      "Photography may be restricted in sacred areas",
      "Follow signs and staff instructions",
      "Ask permission before photographing people",
      "Do not photograph restricted rituals or areas, including cremations",
      "Use cameras quietly and respectfully",
    ],
  },
};

export const safety = {
  heading: "Safety & Responsible Travel",
  points: [
    { title: "Follow local instructions", text: "From temple staff, guides, drivers and authorities.", icon: "compass" },
    { title: "Maintain hydration", text: "Especially at altitude and on long road days.", icon: "drop" },
    { title: "Protect from cold and sun", text: "High-altitude sun is strong even when it feels cold.", icon: "sun" },
    { title: "Keep documents secure", text: "Carry copies and keep originals safe.", icon: "document" },
    { title: "Use authorised transport", text: "Travel with licensed operators and drivers.", icon: "road" },
    { title: "Avoid risky river and road edges", text: "River currents and road verges can be dangerous.", icon: "river" },
    { title: "Respect sacred locations", text: "Behave as a guest in every temple and gompa.", icon: "prayer" },
    { title: "Leave no litter", text: "Carry waste out of mountain areas.", icon: "leaf" },
    { title: "Minimise plastic", text: "Refill water bottles where safe drinking water is available.", icon: "drop" },
    { title: "Respect local communities", text: "Ask before entering homes, fields or private courtyards.", icon: "users" },
  ] satisfies TitledText[],
};

/* ------------------------------------------------------------------ */
/* Stay & food                                                         */
/* ------------------------------------------------------------------ */

export const accommodation = {
  heading: "Where You May Stay",
  intro: "Accommodation follows the journey, from city hotels to simple mountain lodges.",
  stops: [
    { place: "Kathmandu", type: "Hotels and pilgrimage-friendly accommodation", text: "A wide range of options across the city.", comfort: 1 },
    { place: "Pokhara", type: "Hotels and tourist accommodation", text: "Comfortable stays, many near the lakeside.", comfort: 1 },
    { place: "Jomsom", type: "Mountain lodges and hotels", text: "Simpler rooms; heating and hot water can vary.", comfort: 3 },
    { place: "Muktinath area", type: "Pilgrimage-oriented hotels and lodges", text: "Mostly in Ranipauwa, just below the temple.", comfort: 4 },
  ] satisfies StayStop[],
  note: "Facilities become more basic as the journey enters remote mountain areas.",
  scaleLabels: { start: "City comfort", end: "Simple mountain lodges" },
};

export const food = {
  heading: "Food & Hydration",
  points: [
    { title: "Nepali food", text: "Dal bhat, the everyday meal of rice, lentils and vegetables, is available almost everywhere.", icon: "bowl" },
    { title: "Vegetarian meals", text: "Vegetarian food is widely available, especially on pilgrimage routes.", icon: "leaf" },
    { title: "Simple mountain meals", text: "Menus in Mustang are shorter and simpler; Thakali cuisine is a regional highlight.", icon: "mountain" },
    { title: "Hydration", text: "Drink safe water regularly, and more than usual at altitude.", icon: "drop" },
    { title: "Light snacks", text: "Carry a few snacks for long road days and delays.", icon: "backpack" },
  ] satisfies TitledText[],
};

/* ------------------------------------------------------------------ */
/* Extend + Karvaahh + gallery                                         */
/* ------------------------------------------------------------------ */

export const extensions = {
  heading: "Extend Your Nepal Spiritual Journey",
  intro:
    "Pashupatinath and Muktinath combine naturally with other sacred and scenic destinations. Ask us about any of these combinations.",
  items: [
    { title: "Pashupatinath + Muktinath", text: "The journey on this page.", current: true, href: null },
    { title: "Muktinath + Pokhara", text: "Pilgrimage with unhurried Himalayan leisure by the lake.", href: null },
    { title: "Pashupatinath + Kailash Mansarovar", text: "Two major Himalayan spiritual experiences in one journey.", href: null },
    { title: "Pashupatinath + Muktinath + Lumbini", text: "A spiritual and cultural Nepal circuit including the birthplace of the Buddha.", href: null },
    { title: "Pashupatinath + Janakpur", text: "Two of Nepal's major Hindu pilgrimage destinations.", href: null },
  ] satisfies Extension[],
};

export const karvaahhSupport = {
  heading: "Plan Your Pashupatinath & Muktinath Yatra with Karvaahh",
  intro:
    "We plan each yatra around the people travelling: their pace, their devotions and the time they have. Here is what we help with.",
  services: [
    "Customised pilgrimage planning",
    "Pilgrimage itinerary planning",
    "Route planning: road, flight or a mix",
    "Accommodation coordination",
    "Transportation arrangements",
    "Nepal travel assistance",
    "Pre-trip guidance on altitude, packing and documents",
    "Traveller support during the journey",
  ],
  honesty:
    "We plan carefully, but we can't guarantee darshan access, permits, weather, flights or road conditions. When plans need to change, we help you adjust.",
  cta: { label: "Plan Your Yatra", href: ROUTES.enquiry },
};

export const gallery = {
  heading: "Moments Along the Yatra",
  items: [
    { ...images.pashupatinath, caption: "Pashupatinath Temple, Kathmandu" },
    { ...images.aarati, caption: "Evening Aarati on the Bagmati" },
    { ...images.bagmati, caption: "Ghats along the Bagmati River" },
    { ...images.kathmandu, caption: "Kathmandu Valley heritage" },
    { ...images.pokhara, caption: "Pokhara and the Annapurna range" },
    { ...images.jomsom, caption: "Jomsom, gateway to Mustang" },
    { ...images.kaliGandaki, caption: "The Kali Gandaki Valley" },
    { ...images.mustang, caption: "The Mustang landscape" },
    { ...images.muktinath, caption: "Muktinath Temple" },
    { ...images.waterSpouts, caption: "The 108 water spouts" },
    { ...images.jwalaMai, caption: "Jwala Mai Temple" },
    { ...images.monastery, caption: "A Buddhist gompa near Muktinath" },
  ] satisfies GalleryItem[],
};

/* ------------------------------------------------------------------ */
/* FAQ (visible content and FAQPage JSON-LD share this array)          */
/* ------------------------------------------------------------------ */

export const faqs: Faq[] = [
  {
    id: "what-is",
    question: "What is the Pashupatinath and Muktinath Yatra?",
    answer:
      "It is a Nepal pilgrimage that combines Pashupatinath Temple in Kathmandu, dedicated to Lord Shiva, with Muktinath Temple in Mustang, sacred to Hindus and Buddhists. The route usually runs Kathmandu, Pokhara, Jomsom and Muktinath.",
  },
  {
    id: "pashupatinath-location",
    question: "Where is Pashupatinath Temple located?",
    answer:
      "Pashupatinath Temple is on the banks of the Bagmati River in eastern Kathmandu, Nepal, a short drive from the city centre and the international airport.",
  },
  {
    id: "muktinath-location",
    question: "Where is Muktinath Temple located?",
    answer:
      "Muktinath Temple is in the Mustang district of Nepal's Gandaki Province, above the village of Ranipauwa and at the foot of the Thorong La pass. It lies within the Annapurna Conservation Area.",
  },
  {
    id: "distance",
    question: "How far is Muktinath from Kathmandu?",
    answer:
      "By road it is roughly 380–400 km: about 200 km from Kathmandu to Pokhara, then mountain roads through the Kali Gandaki Valley to Jomsom and Muktinath. Travel time varies widely with road conditions, so most itineraries spread the journey over several days.",
  },
  {
    id: "elevation",
    question: "What is the elevation of Muktinath?",
    answer:
      "Muktinath is at approximately 3,800 metres above sea level. Published figures vary slightly by source.",
  },
  {
    id: "importance",
    question: "Why are Pashupatinath and Muktinath important?",
    answer:
      "Pashupatinath is one of the most revered Shiva temples for Hindus. Muktinath is a sacred Vishnu shrine for Hindus and an important sacred site for Buddhists. Together they form one of Nepal's best-known pilgrimage journeys.",
  },
  {
    id: "hindu-significance",
    question: "What is the significance of Muktinath for Hindus?",
    answer:
      "Hindus worship Lord Vishnu at Muktinath as Sri Muktinath, the lord of liberation. The shrine is counted among the 108 Divya Desams of the Sri Vaishnava tradition, and pilgrims bathe in its sacred ponds and beneath its 108 water spouts.",
  },
  {
    id: "buddhist-significance",
    question: "What is the Buddhist significance of Muktinath?",
    answer:
      "Buddhists know Muktinath as Chumig Gyatsa, the place of a hundred waters. It is associated with Avalokiteshvara and with Guru Rinpoche, who is said to have meditated here, and Buddhist nuns have traditionally helped care for the shrine.",
  },
  {
    id: "water-spouts",
    question: "What are the 108 water spouts at Muktinath?",
    answer:
      "They are 108 bull-head spouts arranged in a semicircle behind the temple, fed by cold mountain springs. Many Hindu pilgrims pass beneath each spout in turn. The water is very cold, so bring a towel and warm, dry clothes.",
  },
  {
    id: "jwala-mai",
    question: "What is Jwala Mai Temple?",
    answer:
      "Jwala Mai is a small shrine within the Muktinath complex where a natural flame burns beside spring water. Hindus revere it as Jwala Mai, the goddess of fire, and Buddhists as Mebar Lhakhang. The flames are generally understood to be fed by natural gas.",
  },
  {
    id: "how-to-travel",
    question: "How do I travel from Kathmandu to Muktinath?",
    answer:
      "Travel from Kathmandu to Pokhara by road or domestic flight, then from Pokhara to Jomsom by road or by the short mountain flight where operating. From Jomsom, jeeps continue to Ranipauwa, just below the temple.",
  },
  {
    id: "by-road",
    question: "Can I travel to Muktinath by road?",
    answer:
      "Yes. The whole route can be travelled by road, although the mountain roads beyond Pokhara can be rough, slow and affected by weather and landslides, particularly during the monsoon.",
  },
  {
    id: "flight",
    question: "Is the Pokhara–Jomsom flight available throughout the year?",
    answer:
      "Flights operate in many seasons but are highly weather dependent and usually fly in the morning because of strong afternoon winds. Delays and cancellations are common, so itineraries should allow buffer time.",
  },
  {
    id: "best-time",
    question: "What is the best time for the Yatra?",
    answer:
      "Spring (around March to May) and autumn (around September to November) generally offer the most settled weather and clearer views. The monsoon can disrupt roads and flights, and winter brings cold and possible snow at Muktinath.",
  },
  {
    id: "packing",
    question: "What should I pack?",
    answer:
      "Warm layers, a windproof jacket, gloves and a cap, comfortable walking shoes, sunscreen and sunglasses, personal medicines, a reusable water bottle, a quick-dry towel, and your ID, travel documents and insurance papers.",
  },
  {
    id: "seniors",
    question: "Is Muktinath suitable for senior citizens?",
    answer:
      "Many senior pilgrims make the journey, but suitability depends on the individual. Because of the altitude, cold and walking involved, a medical consultation and a realistic, well-paced itinerary are recommended before departure.",
  },
  {
    id: "altitude-prep",
    question: "How should I prepare for Muktinath altitude?",
    answer:
      "Consult a healthcare professional before travelling, allow time to acclimatise at Jomsom, ascend gradually, stay hydrated and warm, rest well, and tell your tour leader promptly if you feel unwell.",
  },
  {
    id: "one-trip",
    question: "Can Pashupatinath and Muktinath be covered in one trip?",
    answer:
      "Yes. Most pilgrims visit Pashupatinath in Kathmandu first, then travel via Pokhara and Jomsom to Muktinath. The number of days depends on your route, pace and whether you fly any legs.",
  },
  {
    id: "with-pokhara",
    question: "Can I combine Muktinath with Pokhara?",
    answer:
      "Yes. Pokhara lies on the route to Muktinath, and many travellers add extra time by the lake before or after the pilgrimage.",
  },
  {
    id: "with-kailash",
    question: "Can I combine Pashupatinath and Muktinath with Kailash Mansarovar?",
    answer:
      "It is possible to plan them in the same overall journey, but Kailash Mansarovar has its own permits, seasons and logistics. Talk to Karvaahh about whether a combined trip suits your dates and health.",
  },
];

/* ------------------------------------------------------------------ */
/* Closing                                                             */
/* ------------------------------------------------------------------ */

export const finalCta = {
  heading: "Begin Your Pashupatinath & Muktinath Yatra",
  text: "Journey from the sacred heritage of Kathmandu to the Himalayan sanctuary of Mustang with a thoughtfully planned Nepal pilgrimage experience.",
  primary: { label: "Plan Your Yatra", href: ROUTES.enquiry },
  secondary: { label: "Talk to Karvaahh", href: ROUTES.enquiry },
};

export const disclaimers = {
  travel:
    "Travel routes, transportation, accommodation, temple access, weather, road conditions and local regulations may change. Travellers should confirm current arrangements with Karvaahh and relevant authorities before departure.",
  medical:
    "Muktinath is located at high altitude. Travellers should consider their individual health and consult a qualified healthcare professional before undertaking high-altitude travel.",
  permits:
    "Muktinath lies within the Annapurna Conservation Area, where visitors generally need an entry permit. Requirements differ by nationality and can change; Karvaahh confirms them when planning your trip.",
};

/** In-page chapter navigation. Anchors must match section ids. */
export const chapters = [
  { id: "pashupatinath", label: "Pashupatinath" },
  { id: "muktinath", label: "Muktinath" },
  { id: "route", label: "Route" },
  { id: "getting-there", label: "Getting there" },
  { id: "prepare", label: "Prepare" },
  { id: "respect", label: "Etiquette" },
  { id: "stay", label: "Stay & food" },
  { id: "faq", label: "FAQ" },
] as const;
