/**
 * Bada Char Dham Yatra — PAGE CONTENT
 * ----------------------------------------------------------------------------
 * Route: /spiritual-journeys/bada-char-dham-yatra
 *
 * Editorial rules applied throughout:
 *  - Religious tradition is framed as tradition ("according to Hindu tradition",
 *    "devotees believe", "traditionally revered"), never as historical fact.
 *  - No invented dates, prices, durations, schedules, travel times or hotels.
 *  - The Bada Char Dham (Badrinath, Dwarka, Puri, Rameswaram) is never mixed up
 *    with the Uttarakhand Char Dham (Yamunotri, Gangotri, Kedarnath, Badrinath).
 */

import { badaCharDhamPackage, ENQUIRY_BASE } from "./badaCharDhamPackage";
import type {
  ComparisonRow,
  Dham,
  DirectionCard,
  EtiquetteCard,
  Faq,
  Festival,
  GalleryImage,
  Hero,
  ImageAsset,
  InternalLink,
  LabelValue,
  PackingGroup,
  PageSeo,
  RegionSeason,
  TimelineStage,
  TitledText,
} from "./types";

const IMG = "/images/spiritual-journeys/bada-char-dham";

/* ------------------------------------------------------------------ images */

export const images = {
  hero: {
    src: `${IMG}/bada-char-dham-yatra-india.jpg`,
    alt: "Pilgrims gathered at a temple courtyard on the Bada Char Dham Yatra",
    available: false,
  },
  badrinath: {
    src: `${IMG}/badrinath-dham-uttarakhand.jpg`,
    alt: "Badrinath Temple's painted facade beneath snow-covered Himalayan peaks",
    available: false,
  },
  badrinathValley: {
    src: `${IMG}/badrinath-himalayan-valley.jpg`,
    alt: "The Alaknanda valley near Badrinath between high mountain ranges",
    available: false,
  },
  dwarka: {
    src: `${IMG}/dwarkadhish-temple-gujarat.jpg`,
    alt: "The carved spire of Dwarkadhish Temple rising above Dwarka",
    available: false,
  },
  dwarkaCoast: {
    src: `${IMG}/dwarka-pilgrimage-india.jpg`,
    alt: "Pilgrims on the ghats of Dwarka where the Gomti meets the Arabian Sea",
    available: false,
  },
  puri: {
    src: `${IMG}/jagannath-temple-puri-odisha.jpg`,
    alt: "The tall curved tower of the Jagannath Temple in Puri seen from the street",
    available: false,
  },
  puriRath: {
    src: `${IMG}/jagannath-puri-rath-yatra.jpg`,
    alt: "Large wooden chariots and crowds of devotees during the Rath Yatra in Puri",
    available: false,
  },
  rameswaram: {
    src: `${IMG}/ramanathaswamy-temple-rameswaram.jpg`,
    alt: "The gopuram of Ramanathaswamy Temple in Rameswaram",
    available: false,
  },
  rameswaramCorridor: {
    src: `${IMG}/rameswaram-temple-corridor.jpg`,
    alt: "A long pillared corridor inside Ramanathaswamy Temple",
    available: false,
  },
} satisfies Record<string, ImageAsset>;

/* -------------------------------------------------------------------- page */

export const page = {
  slug: "bada-char-dham-yatra",
  path: "/spiritual-journeys/bada-char-dham-yatra",
  breadcrumbs: [
    { name: "Home", href: "/" },
    { name: "Spiritual Journeys", href: "/spiritual-journeys" },
    { name: "Bada Char Dham Yatra", href: "/spiritual-journeys/bada-char-dham-yatra" },
  ],
};

/* -------------------------------------------------------------------- hero */

export const hero: Hero = {
  eyebrow: "Spiritual Journeys • India",
  title: "Bada Char Dham Yatra",
  subtitle: "A Sacred Journey Across the Four Directions of India",
  copy: "Journey through Badrinath, Dwarka, Jagannath Puri and Rameswaram, experiencing India's diverse spiritual traditions, sacred temples and extraordinary cultural landscapes.",
  primaryCta: { label: "Plan Your Yatra", href: `${ENQUIRY_BASE}?journey=bada-char-dham-yatra` },
  secondaryCta: { label: "Explore the Four Dhams", href: "#four-dhams" },
};

/* -------------------------------------------------------------- directions */

export const directions: DirectionCard[] = [
  { direction: "north", dhamId: "badrinath", name: "Badrinath", state: "Uttarakhand", environment: "Himalayas" },
  { direction: "west", dhamId: "dwarka", name: "Dwarka", state: "Gujarat", environment: "Arabian Sea" },
  { direction: "east", dhamId: "jagannath-puri", name: "Jagannath Puri", state: "Odisha", environment: "Bay of Bengal" },
  { direction: "south", dhamId: "rameswaram", name: "Rameswaram", state: "Tamil Nadu", environment: "Gulf of Mannar and Palk Bay" },
];

/* ------------------------------------------------------------- quick facts */

export const quickFacts: LabelValue[] = [
  { label: "Pilgrimage", value: "Bada Char Dham" },
  { label: "Destinations", value: "4 Sacred Dhams" },
  { label: "Regions", value: "North, West, East and South India" },
  { label: "States", value: "Uttarakhand, Gujarat, Odisha, Tamil Nadu" },
  { label: "Traditions", value: "Vaishnava and Shaiva" },
  { label: "Journey type", value: "Spiritual, cultural, pan-India" },
];

/* ------------------------------------------------------------ introduction */

export const introduction = {
  heading: "Bada Char Dham Yatra – A Sacred Journey Across India",
  paragraphs: [
    "The Bada Char Dham Yatra is one of the most revered Hindu pilgrimage circuits in India. It brings together four sacred destinations — Badrinath, Dwarka, Jagannath Puri and Rameswaram — that lie in very different corners of the country, and completing all four has long been regarded by devotees as a pilgrimage of a lifetime.",
    "No other Indian pilgrimage covers such range. The journey begins, in spirit if not always in order, among the high Himalayan valleys of Uttarakhand, then reaches the Arabian Sea coast of Gujarat, the shores of the Bay of Bengal in Odisha and an island temple town off the coast of Tamil Nadu.",
    "Along the way, travellers encounter distinct temple architecture, ritual traditions, languages, festivals and regional food. Each Dham has its own devotional life, yet together they form a single pilgrimage that devotees have followed for generations — a journey through India's landscapes as much as its faith.",
  ],
};

export const whatIs = {
  heading: "What is the Bada Char Dham?",
  paragraphs: [
    "“Char Dham” means “four abodes”. In its traditional pan-India form, the Bada (“great”) Char Dham refers to four major pilgrimage destinations associated with the four directions of India: Badrinath in the north, Dwarka in the west, Jagannath Puri in the east and Rameswaram in the south.",
    "Hindu tradition associates the idea of these four Dhams with Adi Shankaracharya, the philosopher traditionally credited with establishing monastic seats in different corners of India. Three of the Dhams are centred on Vaishnava worship — of Vishnu, Krishna and Jagannath — and one, Rameswaram, on the worship of Shiva.",
    "The directions are traditional and symbolic rather than precise geographic boundaries. Rameswaram, for example, lies close to — not at — India's southern tip, and Badrinath is one of several major pilgrimage places in the northern Himalaya. The significance lies in the idea of a pilgrimage that embraces the whole of India.",
  ],
  distinction: {
    heading: "Two pilgrimages share the name “Char Dham”",
    circuits: [
      {
        name: "Bada Char Dham of India",
        scope: "Pan-India · four states",
        places: ["Badrinath", "Dwarka", "Jagannath Puri", "Rameswaram"],
        isThisPage: true,
      },
      {
        name: "Char Dham Yatra Uttarakhand",
        scope: "Himalayan circuit · one state",
        places: ["Yamunotri", "Gangotri", "Kedarnath", "Badrinath"],
        isThisPage: false,
      },
    ],
    note: "Badrinath is the only Dham common to both. This page covers the pan-India Bada Char Dham.",
  },
};

/* ------------------------------------------------------------------- dhams */

export const dhams: Dham[] = [
  {
    id: "badrinath",
    direction: "north",
    directionLabel: "North",
    name: "Badrinath",
    temple: "Badrinath Temple",
    state: "Uttarakhand",
    heading: "Badrinath Dham – Sacred Vishnu Pilgrimage in the Himalayas",
    lede: "High in the Garhwal Himalaya, on the bank of the Alaknanda River, Badrinath is the northern Dham and one of the most revered Vishnu shrines in India.",
    paragraphs: [
      "Badrinath Temple is dedicated to Lord Vishnu in his form as Badrinarayan. It stands in a high mountain valley between the Nar and Narayan ranges, and its brightly painted facade against snow-dusted peaks is one of the most recognisable images of Indian pilgrimage.",
      "Before darshan, devotees traditionally bathe at the Tapt Kund, a natural hot spring beside the temple. Badrinath is also revered in the Vaishnava devotional tradition as one of the Divya Desams praised by the Alvar poet-saints.",
      "Because the temple sits above 3,000 metres, it is open only for part of each year. Opening and closing dates are announced annually, and the season usually runs from around late April or May to around November.",
    ],
    circuitNote:
      "Badrinath is also one of the four Dhams of the Bada Char Dham tradition and forms part of the Uttarakhand Char Dham pilgrimage.",
    facts: [
      { label: "State", value: "Uttarakhand" },
      { label: "Deity", value: "Lord Vishnu as Badrinarayan" },
      { label: "Setting", value: "Alaknanda valley, Garhwal Himalaya" },
      { label: "In both circuits", value: "Bada Char Dham and Uttarakhand Char Dham" },
    ],
    environment: {
      name: "The Himalayas",
      text: "Glacial rivers, high passes and a short mountain season define the northern Dham.",
    },
    gateways: [
      { label: "Road", value: "Mountain highway from Haridwar and Rishikesh" },
      { label: "Nearest airport", value: "Dehradun" },
      { label: "Nearest railheads", value: "Rishikesh, Haridwar" },
    ],
    goodToKnow: [
      "Open seasonally — confirm the current year's opening and closing dates.",
      "High altitude: plan rest, warm layers and a gradual road ascent.",
      "Mountain roads can be affected by weather and landslides, especially in the monsoon.",
    ],
    image: images.badrinath,
    secondaryImage: images.badrinathValley,
  },
  {
    id: "dwarka",
    direction: "west",
    directionLabel: "West",
    name: "Dwarka",
    temple: "Dwarkadhish Temple",
    state: "Gujarat",
    heading: "Dwarka – Sacred City of Lord Krishna",
    lede: "At the western edge of the Saurashtra peninsula, where the Gomti River meets the Arabian Sea, Dwarka is revered as the kingdom of Lord Krishna.",
    paragraphs: [
      "The Dwarkadhish Temple, also known as the Jagat Mandir, is dedicated to Lord Krishna as Dwarkadhish — the King of Dwarka. Its tall, intricately carved spire rises above the old town, and the flag atop it is ceremonially changed several times a day, a sight many pilgrims wait to see.",
      "Steps from the temple lead down to the Gomti Ghat, where devotees take a sacred dip. Many pilgrims also visit nearby places associated with Krishna and with Shiva, such as Bet Dwarka and the Nageshwar temple.",
      "Dwarka has been a pilgrimage centre for a very long time and appears widely in Hindu sacred literature, yet it remains a living coastal town with busy markets and a strong sense of Gujarati culture.",
    ],
    circuitNote:
      "Dwarka is traditionally associated with Lord Krishna and forms the western Dham of the Bada Char Dham circuit.",
    facts: [
      { label: "State", value: "Gujarat" },
      { label: "Deity", value: "Lord Krishna as Dwarkadhish" },
      { label: "Setting", value: "Gomti River mouth, Arabian Sea coast" },
      { label: "Temple", value: "Dwarkadhish Temple (Jagat Mandir)" },
    ],
    environment: {
      name: "The Arabian Sea",
      text: "Sea winds, sunset ghats and the saffron flags of Saurashtra mark the western Dham.",
    },
    gateways: [
      { label: "Nearest airports", value: "Jamnagar, Porbandar" },
      { label: "Railway", value: "Dwarka railway station" },
      { label: "Road", value: "Coastal highways across Saurashtra" },
    ],
    goodToKnow: [
      "Security checks apply, and electronic items may be restricted inside the temple.",
      "Festival periods such as Janmashtami draw very large crowds.",
      "Coastal heat can be strong — carry water and sun protection.",
    ],
    image: images.dwarka,
    secondaryImage: images.dwarkaCoast,
  },
  {
    id: "jagannath-puri",
    direction: "east",
    directionLabel: "East",
    name: "Jagannath Puri",
    temple: "Jagannath Temple",
    state: "Odisha",
    heading: "Jagannath Puri – Sacred Pilgrimage of Odisha",
    lede: "On the shore of the Bay of Bengal, the Jagannath Temple at Puri is the eastern Dham and the heart of one of India's most distinctive devotional traditions.",
    paragraphs: [
      "The temple is dedicated to Lord Jagannath, worshipped together with his elder brother Balabhadra and sister Subhadra. Their distinctive wooden forms are central to Odisha's religious and artistic identity, and the temple's daily rituals follow long-established traditions maintained by hereditary servitors.",
      "Food offered to the deities in the temple kitchen is distributed as Mahaprasad, which devotees regard as especially sacred. Each year Puri hosts the Rath Yatra, when the three deities are brought out of the temple on enormous wooden chariots and pulled through the streets by devotees.",
      "According to the temple's rules, entry is restricted to Hindu devotees; other visitors often view the temple from outside. Many itineraries also include nearby heritage sites such as the Sun Temple at Konark.",
    ],
    circuitNote: "Puri is the eastern Dham in the traditional Bada Char Dham circuit.",
    facts: [
      { label: "State", value: "Odisha" },
      { label: "Deities", value: "Jagannath, Balabhadra and Subhadra" },
      { label: "Setting", value: "Coastal town on the Bay of Bengal" },
      { label: "Major festival", value: "Rath Yatra" },
    ],
    environment: {
      name: "The Bay of Bengal",
      text: "Sunrise over a long sea beach and a temple town built around ritual give the eastern Dham its rhythm.",
    },
    gateways: [
      { label: "Nearest airport", value: "Bhubaneswar" },
      { label: "Railway", value: "Puri railway station" },
      { label: "Road", value: "Highway from Bhubaneswar" },
    ],
    goodToKnow: [
      "Temple entry rules are set by the temple administration — confirm them before travel.",
      "Bags, phones and leather items are commonly not permitted inside; plan where to leave them.",
      "Rath Yatra brings very large crowds; accommodation fills early.",
    ],
    image: images.puri,
    secondaryImage: images.puriRath,
  },
  {
    id: "rameswaram",
    direction: "south",
    directionLabel: "South",
    name: "Rameswaram",
    temple: "Ramanathaswamy Temple",
    state: "Tamil Nadu",
    heading: "Rameswaram – Sacred Shiva Pilgrimage in Tamil Nadu",
    lede: "On Pamban Island, off the coast of Tamil Nadu, the Ramanathaswamy Temple is the southern Dham and one of the twelve Jyotirlingas of Lord Shiva.",
    paragraphs: [
      "According to the Ramayana tradition, Lord Rama worshipped Lord Shiva at Rameswaram, and the temple's name — Ramanathaswamy — reflects that association. This makes Rameswaram a place where Vaishnava and Shaiva devotion meet.",
      "The temple is renowned for its long pillared corridors, often described as among the longest in India, with rows of carved pillars stretching into the distance. Within the complex are numerous sacred wells, or theerthams, and pilgrims traditionally bathe in their waters and at the Agni Theertham on the seashore before darshan.",
      "Pamban Island is connected to the mainland by road and rail bridges, and the surrounding coast — including Dhanushkodi at the island's tip — is closely tied to Ramayana tradition.",
    ],
    circuitNote: "Rameswaram is traditionally regarded as the southern Dham of the Bada Char Dham circuit.",
    facts: [
      { label: "State", value: "Tamil Nadu" },
      { label: "Deity", value: "Lord Shiva as Ramanathaswamy" },
      { label: "Setting", value: "Pamban Island, Tamil Nadu coast" },
      { label: "Also revered as", value: "One of the twelve Jyotirlingas" },
    ],
    environment: {
      name: "The southern seas",
      text: "Island light, shallow turquoise water and granite temple halls shape the southern Dham.",
    },
    gateways: [
      { label: "Nearest airport", value: "Madurai" },
      { label: "Railway", value: "Rameswaram railway station" },
      { label: "Road", value: "Via the bridge from the mainland at Mandapam" },
    ],
    goodToKnow: [
      "A dress code applies inside the temple — modest, traditional clothing is expected.",
      "Theertham bathing is a wet experience: carry a change of clothes.",
      "Coastal weather can affect travel to Dhanushkodi; follow local guidance.",
    ],
    image: images.rameswaram,
    secondaryImage: images.rameswaramCorridor,
  },
];

export const comparison: { heading: string; rows: ComparisonRow[] } = {
  heading: "The Four Dhams at a Glance",
  rows: [
    { dham: "Badrinath", dhamId: "badrinath", state: "Uttarakhand", tradition: "Lord Vishnu / Badrinarayan", direction: "North", setting: "Himalayan valley" },
    { dham: "Dwarka", dhamId: "dwarka", state: "Gujarat", tradition: "Lord Krishna / Dwarkadhish", direction: "West", setting: "Arabian Sea coast" },
    { dham: "Jagannath Puri", dhamId: "jagannath-puri", state: "Odisha", tradition: "Jagannath, Balabhadra & Subhadra", direction: "East", setting: "Bay of Bengal coast" },
    { dham: "Rameswaram", dhamId: "rameswaram", state: "Tamil Nadu", tradition: "Lord Shiva / Ramanathaswamy", direction: "South", setting: "Island temple town" },
  ],
};

/* -------------------------------------------------- spiritual significance */

export const spiritualSignificance = {
  heading: "One Journey • Four Sacred Traditions",
  intro:
    "The Bada Char Dham is not a ranking of temples. Each Dham is complete in itself; what the circuit offers is the experience of seeing how differently — and how deeply — devotion is expressed across India.",
  traditions: [
    { dhamId: "badrinath", title: "Vishnu at Badrinath", text: "Worship of Badrinarayan in a Himalayan setting, where mountain, river and hot spring are all part of the pilgrimage." },
    { dhamId: "dwarka", title: "Krishna at Dwarka", text: "Devotion to Krishna as king, expressed through temple ritual, the ghats of the Gomti and the life of a sacred coastal town." },
    { dhamId: "jagannath-puri", title: "Jagannath at Puri", text: "A distinctive tradition centred on Jagannath, Balabhadra and Subhadra, with its own rituals, sacred food and chariot festival." },
    { dhamId: "rameswaram", title: "Shiva at Rameswaram", text: "Worship of Shiva at a Jyotirlinga linked by tradition to Lord Rama, bringing Shaiva and Vaishnava devotion together." },
  ] as (TitledText & { dhamId: string })[],
  closing:
    "Between them lie mountains and seas, four languages, several culinary cultures and distinct architectural styles — from Himalayan temple facades to the curved towers of Odisha and the vast corridors of Tamil Nadu. The shared thread is the pilgrim.",
};

/* ---------------------------------------------------------------- journey */

export const journey = {
  panIndia: {
    heading: "Four Dhams • Four Directions",
    intro:
      "Traced in its traditional order, the Bada Char Dham moves from the northern mountains to the western coast, across to the eastern shore and down to the southern island.",
    routeLabel: "Illustrative route – actual travel order may vary according to itinerary and transportation.",
  },
  experience: {
    heading: "From the Himalayas to the Southern Coast",
    intro:
      "Few journeys show India's range as fully as this one. Between darshans, travellers move through landscapes, languages and food cultures that change completely from one Dham to the next.",
    items: [
      { title: "Himalayan landscapes", text: "River gorges, high valleys and snow peaks on the road to Badrinath." },
      { title: "Western coastal culture", text: "Saurashtra's ghats, markets and Gujarati temple life in Dwarka." },
      { title: "Eastern Odisha heritage", text: "Temple towers, crafts and ritual traditions around Puri." },
      { title: "Southern temple architecture", text: "Granite halls and pillared corridors in Tamil Nadu." },
      { title: "Regional cuisines", text: "From simple mountain meals to Gujarati thalis, Odia temple food and Tamil vegetarian cooking." },
      { title: "Different languages", text: "Garhwali and Hindi, Gujarati, Odia and Tamil along one journey." },
      { title: "Sacred rivers and seas", text: "The Alaknanda, the Gomti, the Bay of Bengal and the southern coast." },
      { title: "Distinct temple traditions", text: "Four ways of worship, each with its own rhythm and customs." },
    ] as TitledText[],
  },
};

export const routeOptions = {
  heading: "Travel Route Options",
  intro:
    "There is no single mandatory sequence. The traditional order is a meaningful way to frame the journey, but most pilgrims plan the route around practical factors.",
  options: [
    {
      id: "north-to-south",
      title: "Option A — North to South",
      route: ["Badrinath", "Dwarka", "Jagannath Puri", "Rameswaram"],
      text: "Follows the traditional directional order. It suits travellers who want the journey to mirror the classic sequence of the Dhams.",
    },
    {
      id: "custom",
      title: "Option B — Custom Circuit",
      route: [],
      text: "The order is arranged around the traveller's starting point and the most practical connections between regions.",
    },
  ],
  factors: [
    "Starting city",
    "Flights",
    "Trains",
    "Road transport",
    "Temple schedules",
    "Travel dates",
    "Package requirements",
  ],
  planningNote:
    "Because Badrinath is only open for part of the year, its season usually sets the window in which the full Bada Char Dham can be completed.",
};

export const transport = {
  heading: "How to Travel Between the Four Dhams",
  items: [
    { title: "Flights", text: "Useful for long-distance interstate travel between regions." },
    { title: "Trains", text: "Useful for connecting major pilgrimage cities, with rail stations serving Dwarka, Puri and Rameswaram." },
    { title: "Private Vehicle", text: "Useful for local and intercity sections where road travel is practical — and essential for the mountain road to Badrinath." },
    { title: "Mixed Transportation", text: "Most practical for a large multi-state pilgrimage circuit, combining air or rail between regions with road travel locally." },
  ] as TitledText[],
  dependsOn: ["Route", "Travel dates", "Package type", "Availability", "Weather", "Operational conditions"],
  note: "Subject to current temple schedules, transportation availability, weather and operational conditions.",
};

export const itinerary = {
  heading: "Sample Journey Flow",
  label: "Illustrative journey flow – exact sequence and duration depend on the selected itinerary.",
  stages: [
    { title: "Arrival / Starting City", text: "Meet your coordinator and begin the journey from your chosen starting point." },
    { title: "Badrinath Darshan", text: "Travel by road into the Garhwal Himalaya for darshan at Badrinath.", dhamId: "badrinath" },
    { title: "Travel to Western India", text: "Return from the mountains and connect to Gujarat by air, rail or road." },
    { title: "Dwarka Darshan", text: "Darshan at the Dwarkadhish Temple and time at the Gomti Ghat.", dhamId: "dwarka" },
    { title: "Travel to Eastern India", text: "Cross the country to Odisha." },
    { title: "Jagannath Puri Darshan", text: "Visit the Jagannath Temple, subject to the temple's entry rules.", dhamId: "jagannath-puri" },
    { title: "Travel to Southern India", text: "Connect to Tamil Nadu and cross to Pamban Island." },
    { title: "Rameswaram Darshan", text: "Theertham bathing and darshan at the Ramanathaswamy Temple.", dhamId: "rameswaram" },
    { title: "Return / Departure", text: "Transfer for your onward journey home." },
  ] as TimelineStage[],
};

/* ---------------------------------------------------------- temple visits */

export const templeExperience = {
  heading: "What Pilgrims May Experience",
  intro: "Every visit is different. Rituals, access and timings are set by each temple and can change on the day.",
  items: [
    { title: "Darshan", text: "Viewing the deity — the heart of every visit." },
    { title: "Prayer", text: "Personal prayer and offerings in the temple's tradition." },
    { title: "Temple architecture", text: "Four regional building styles across one journey." },
    { title: "Sacred rituals", text: "Daily rituals observed by devotees, as permitted." },
    { title: "Spiritual reflection", text: "Quiet time at ghats, shores and riverbanks." },
    { title: "Festival traditions", text: "Seasonal celebrations unique to each Dham." },
    { title: "Local culture", text: "Markets, crafts and everyday life around the temples." },
    { title: "Pilgrimage communities", text: "Fellow pilgrims from every part of India." },
    { title: "Traditional food", text: "Regional vegetarian food and temple prasad." },
    { title: "Regional heritage", text: "Nearby historic and sacred sites along the way." },
  ] as TitledText[],
};

export const templeEtiquette: { heading: string; intro: string; cards: EtiquetteCard[] } = {
  heading: "Temple Etiquette at Each Dham",
  intro: "Temple access rules differ between destinations and are set by each temple's administration. Not every visitor has identical access at every Dham.",
  cards: [
    { dhamId: "badrinath", place: "Badrinath", items: ["Wear respectful dress, with warm layers for the cold", "Follow instructions from temple staff and queue marshals", "Follow photography rules inside the temple"] },
    { dhamId: "dwarka", place: "Dwarka", items: ["Maintain respectful temple behaviour", "Follow security procedures at the entrance", "Follow photography and electronics restrictions"] },
    { dhamId: "jagannath-puri", place: "Puri", items: ["Follow the temple's access rules, which restrict entry", "Respect local traditions and the servitors' instructions", "Follow photography restrictions"] },
    { dhamId: "rameswaram", place: "Rameswaram", items: ["Wear modest, traditional dress", "Follow temple rules, including at the theerthams", "Respect ritual spaces and queues"] },
  ],
};

export const photography = {
  heading: "Photography at the Temples",
  items: [
    "Photography rules differ by temple.",
    "Some inner areas may prohibit photography.",
    "Follow signs and the instructions of temple authorities.",
    "Ask permission before photographing people.",
    "Do not photograph restricted rituals.",
  ],
};

/* ------------------------------------------------------------ best time */

export const bestTime: { heading: string; intro: string; regions: RegionSeason[]; note: string } = {
  heading: "Best Time to Travel",
  intro:
    "There is no single best month for all four Dhams. The journey crosses a Himalayan climate and three coastal ones, so planning means balancing all four.",
  regions: [
    { direction: "north", title: "Himalayan Conditions", place: "Badrinath", text: "Badrinath has seasonal pilgrimage operations and mountain weather. Late spring and autumn are popular; the monsoon can bring landslides on mountain roads, and the temple closes for winter." },
    { direction: "west", title: "Western India", place: "Dwarka", text: "Dwarka experiences coastal climate conditions, with hot summers and monsoon rains. Cooler months are generally more comfortable for temple visits." },
    { direction: "east", title: "Eastern India", place: "Puri", text: "Puri has a coastal climate with hot, humid summers and monsoon rains, and major festival periods — especially Rath Yatra — that change the character of the town." },
    { direction: "south", title: "Southern India", place: "Rameswaram", text: "Rameswaram has a tropical coastal environment, warm for most of the year. Parts of the Tamil Nadu coast receive much of their rain later in the year than northern India." },
  ],
  note: "Temple opening dates, festival dates, weather conditions and operating schedules should be confirmed for the relevant travel year.",
};

export const festivals: { heading: string; intro: string; items: Festival[]; note: string } = {
  heading: "Festivals Across the Four Dhams",
  intro: "Festival periods are extraordinary to witness and significantly busier. Dates follow the Hindu calendar and change every year.",
  items: [
    { dhamId: "badrinath", place: "Badrinath", name: "Opening and closing of the temple", text: "The ceremonies that open and close each pilgrimage season, alongside major Hindu festivals observed during the season." },
    { dhamId: "dwarka", place: "Dwarka", name: "Janmashtami", text: "The celebration of Krishna's birth, together with other Krishna-related festivals through the year." },
    { dhamId: "jagannath-puri", place: "Jagannath Puri", name: "Rath Yatra", text: "The chariot festival in which Jagannath, Balabhadra and Subhadra are drawn through Puri by devotees." },
    { dhamId: "rameswaram", place: "Rameswaram", name: "Maha Shivaratri", text: "Major Shiva-related observances, when the temple sees especially large numbers of devotees." },
  ],
  note: "Festival dates are not published here; they should be confirmed for your travel year.",
};

/* --------------------------------------------------------- stay & meals */

export const accommodation = {
  heading: "Accommodation During the Yatra",
  items: [
    "Stays are in selected hotels on a twin/triple-sharing basis.",
    "Accommodation standards may vary between cities.",
    "Remote destinations such as Badrinath may have simpler facilities.",
    "Hotel availability depends on travel dates, especially around festivals.",
    "Exact hotels are confirmed with the selected package.",
  ],
};

export const food = {
  heading: "Meals During the Journey",
  items: [
    "Breakfast and dinner are included as per the selected package.",
    "Regional food changes with every Dham — part of the experience.",
    "Vegetarian options are widely available in all four pilgrimage towns.",
    "Lunch may be excluded unless specified.",
    "Snacks and beverages are usually personal expenses.",
  ],
};

/* ------------------------------------------------------------- wellbeing */

export const seniorsAndFamilies = {
  heading: "Senior Citizens & Family Travellers",
  intro: "Many travellers on the Bada Char Dham are senior citizens or multi-generation families. Planning with care makes the journey far more comfortable.",
  items: [
    { title: "Long-distance travel", text: "The circuit spans the length and breadth of India. Build in rest days between regions." },
    { title: "Changing climates", text: "Expect cold at Badrinath and heat and humidity on the coasts within the same trip." },
    { title: "Walking", text: "Temple complexes, ghats and corridors involve walking and standing on stone floors." },
    { title: "Crowds & queues", text: "Darshan queues can be long, especially on weekends and festival days." },
    { title: "Altitude at Badrinath", text: "Badrinath is above 3,000 metres. Take it slowly and rest on arrival." },
    { title: "Medication & insurance", text: "Carry enough personal medicine for the whole trip and consider travel insurance." },
  ] as TitledText[],
  medicalNote:
    "Travellers with medical conditions or concerns about altitude and long-distance travel should consult a qualified healthcare professional before departure.",
};

export const healthSafety = {
  heading: "Health & Safety",
  items: [
    { title: "Altitude at Badrinath", text: "Ascend by road gradually, rest after arrival and avoid over-exertion on the first day." },
    { title: "Heat & coastal conditions", text: "Dwarka, Puri and Rameswaram can be hot and humid. Plan temple visits for cooler parts of the day where possible." },
    { title: "Hydration", text: "Drink water regularly; use bottled or treated water." },
    { title: "Rest", text: "Long travel days add up. Sleep well and pace the journey." },
    { title: "Appropriate clothing", text: "Warm layers in the mountains, breathable cotton on the coasts, modest dress at temples." },
    { title: "Sun protection", text: "Sunscreen, sunglasses and a hat for both altitude and coastal sun." },
    { title: "Long-distance travel", text: "Move and stretch during long road, rail or air journeys." },
    { title: "Crowd awareness", text: "Keep valuables secure and stay with your group in busy areas." },
    { title: "Personal medicines", text: "Keep medicines in your day bag, not only in checked luggage." },
  ] as TitledText[],
  disclaimer: "This is general travel guidance, not medical advice.",
};

export const insurance = {
  heading: "Travel Insurance",
  text: "Travel insurance may help cover eligible unexpected events, such as medical needs, cancellations or delays, depending on the policy's terms. Coverage is never guaranteed and varies by insurer.",
  note: "Travel insurance is not included in the package unless specifically stated.",
};

/* --------------------------------------------------------------- packing */

export const packing: { heading: string; intro: string; groups: PackingGroup[] } = {
  heading: "What to Pack",
  intro: "One bag for four climates. Tick items off as you pack — your list is saved on this device.",
  groups: [
    { id: "clothing", title: "Clothing", items: ["Comfortable clothing", "Light layers", "Warm jacket for Badrinath", "Rain protection", "Comfortable walking trousers", "Socks", "Modest temple clothing"] },
    { id: "footwear", title: "Footwear", items: ["Comfortable walking shoes", "Extra footwear"] },
    { id: "personal", title: "Personal", items: ["Personal medicines", "Sunscreen", "Sunglasses", "Water bottle", "Toiletries", "Small day bag"] },
    { id: "documents", title: "Documents", items: ["Government-issued identification", "Passport/visa where applicable", "Tickets", "Hotel/package documents", "Insurance documents"] },
    { id: "electronics", title: "Electronics", items: ["Phone", "Power bank", "Charging cables"] },
  ],
};

/* ---------------------------------------------------- responsible travel */

export const responsibleTravel: { heading: string; intro: string; items: string[] } = {
  heading: "Travel Responsibly Across India",
  intro: "Four fragile places — a Himalayan valley and three sacred coasts — welcome millions of pilgrims. Small choices help keep them that way.",
  items: [
    "Respect religious traditions",
    "Follow temple rules",
    "Do not litter",
    "Minimise plastic",
    "Respect local communities",
    "Conserve water",
    "Use designated areas",
    "Avoid disturbing wildlife",
    "Follow local environmental instructions",
  ],
};

/* --------------------------------------------------------------- gallery */

export const gallery: { heading: string; intro: string; images: GalleryImage[] } = {
  heading: "Across the Four Dhams",
  intro: "Mountains, seas, spires and corridors — the landscapes of a pan-India pilgrimage.",
  // Desktop mosaic is a 4-column grid: keep the total cell count at 12 (tall = 2, wide = 2, normal = 1).
  images: [
    { id: "g-badrinath", group: "Badrinath", direction: "north", span: "tall", caption: "Badrinath Temple, Uttarakhand", ...images.badrinath },
    { id: "g-badrinath-valley", group: "Badrinath", direction: "north", span: "normal", caption: "The Alaknanda valley", ...images.badrinathValley },
    { id: "g-dwarka", group: "Dwarka", direction: "west", span: "normal", caption: "Dwarkadhish Temple, Gujarat", ...images.dwarka },
    { id: "g-dwarka-coast", group: "Dwarka", direction: "west", span: "wide", caption: "Gomti Ghat and the Arabian Sea", ...images.dwarkaCoast },
    { id: "g-puri", group: "Jagannath Puri", direction: "east", span: "tall", caption: "Jagannath Temple, Puri", ...images.puri },
    { id: "g-puri-rath", group: "Jagannath Puri", direction: "east", span: "normal", caption: "Rath Yatra in Puri", ...images.puriRath },
    { id: "g-rameswaram", group: "Rameswaram", direction: "south", span: "normal", caption: "Ramanathaswamy Temple", ...images.rameswaram },
    { id: "g-rameswaram-corridor", group: "Rameswaram", direction: "south", span: "normal", caption: "The temple's pillared corridors", ...images.rameswaramCorridor },
    {
      id: "g-across-india",
      group: "Across India",
      direction: "south",
      span: "normal",
      caption: "Pilgrims on the Char Dham journey",
      src: `${IMG}/char-dham-pilgrimage-india.jpg`,
      alt: "Pilgrims walking together towards a temple gateway",
      available: false,
    },
  ],
};

/* ------------------------------------------------------------------ FAQ */

export const faqs: Faq[] = [
  { question: "What is Bada Char Dham Yatra?", answer: "The Bada Char Dham Yatra is a traditional Hindu pilgrimage to four sacred destinations associated with the four directions of India: Badrinath, Dwarka, Jagannath Puri and Rameswaram." },
  { question: "Which four destinations are part of Bada Char Dham?", answer: "Badrinath in Uttarakhand, Dwarka in Gujarat, Jagannath Puri in Odisha and Rameswaram in Tamil Nadu." },
  { question: "What is the difference between Bada Char Dham and Uttarakhand Char Dham?", answer: "The Bada Char Dham spans four states across India: Badrinath, Dwarka, Puri and Rameswaram. The Uttarakhand Char Dham is a Himalayan circuit within one state: Yamunotri, Gangotri, Kedarnath and Badrinath. Badrinath is the only Dham common to both." },
  { question: "Where is Badrinath Dham?", answer: "Badrinath is in the Chamoli district of Uttarakhand, in the Garhwal Himalaya, on the bank of the Alaknanda River." },
  { question: "Where is Dwarkadhish Temple?", answer: "The Dwarkadhish Temple is in Dwarka, Gujarat, at the western edge of the Saurashtra peninsula, where the Gomti River meets the Arabian Sea." },
  { question: "Where is Jagannath Temple located?", answer: "The Jagannath Temple is in Puri, Odisha, on the coast of the Bay of Bengal." },
  { question: "Where is Rameswaram located?", answer: "Rameswaram is on Pamban Island in the Ramanathapuram district of Tamil Nadu, connected to the mainland by road and rail bridges." },
  { question: "Why are the four Dhams associated with the four directions?", answer: "By tradition, the four Dhams mark the northern, western, eastern and southern reaches of India, so that the pilgrimage symbolically embraces the whole country. The directions are symbolic rather than precise geographic boundaries." },
  { question: "What is the traditional significance of Badrinath?", answer: "Badrinath is revered as the abode of Lord Vishnu as Badrinarayan and is one of the most important Vishnu shrines in India. It is the northern Dham." },
  { question: "What is the significance of Dwarka?", answer: "Dwarka is traditionally associated with Lord Krishna as its king, and the Dwarkadhish Temple is dedicated to him. It is the western Dham." },
  { question: "What is the significance of Jagannath Puri?", answer: "Puri is the home of Lord Jagannath, worshipped with Balabhadra and Subhadra, and is known for its temple traditions, Mahaprasad and the Rath Yatra. It is the eastern Dham." },
  { question: "What is the significance of Rameswaram?", answer: "Rameswaram's Ramanathaswamy Temple is one of the twelve Jyotirlingas of Lord Shiva and, according to the Ramayana tradition, is linked to Lord Rama's worship of Shiva. It is the southern Dham." },
  { question: "Can the four Dhams be visited in one trip?", answer: "Yes. Many pilgrims complete all four in a single journey using a mix of flights, trains and road travel. Timing depends largely on Badrinath's seasonal opening." },
  { question: "What transportation is used for Bada Char Dham?", answer: "Usually a combination: flights or trains between regions, and private vehicles for local and intercity sections, including the mountain road to Badrinath." },
  { question: "Can the itinerary be customized?", answer: "Yes. The route order, pace, transport and accommodation can be arranged around your starting city, travel dates and group needs." },
  { question: "What is included in a Bada Char Dham package?", answer: "Typically hotel accommodation on twin/triple sharing, breakfast and dinner, private transportation, transfers, and coordination support, as specified in the selected package." },
  { question: "What is generally excluded?", answer: "Airfare and train tickets unless mentioned, VIP darshan, donations and puja expenses, lunch and snacks, personal expenses, optional local services, insurance and costs from unforeseen events." },
  { question: "Is travel insurance included?", answer: "No, travel insurance is not included unless specifically stated in the package. It is recommended for a long multi-state journey." },
  { question: "What should I pack?", answer: "Light layers plus a warm jacket for Badrinath, rain protection, modest temple clothing, comfortable walking shoes, personal medicines, sun protection, identification and travel documents." },
  { question: "Is Bada Char Dham suitable for senior citizens?", answer: "Many senior citizens complete the Yatra. A relaxed pace, rest days and attention to altitude at Badrinath help. Travellers with medical concerns should consult a healthcare professional before departure." },
];

/* ------------------------------------------------------------- linking */

export const relatedLinks: { heading: string; intro: string; links: InternalLink[] } = {
  heading: "Continue Exploring",
  intro: "Other sacred journeys planned by Karvaahh.",
  links: [
    { label: "Spiritual Journeys", href: "/spiritual-journeys", description: "All pilgrimages and sacred journeys", verified: true },
    { label: "Char Dham Yatra Uttarakhand", href: "/spiritual-journeys/char-dham-yatra", description: "Yamunotri, Gangotri, Kedarnath and Badrinath — the Himalayan circuit", verified: false },
    { label: "Kedarnath", href: "/spiritual-journeys/kedarnath", description: "Himalayan Jyotirlinga in Uttarakhand", verified: false },
    { label: "Badrinath", href: "/spiritual-journeys/badrinath", description: "The northern Dham in depth", verified: false },
    { label: "Pashupatinath", href: "/spiritual-journeys/pashupatinath", description: "Sacred Shiva temple in Kathmandu", verified: false },
    { label: "Muktinath", href: "/spiritual-journeys/muktinath", description: "Himalayan pilgrimage in Mustang, Nepal", verified: false },
    { label: "Kailash Mansarovar", href: "/spiritual-journeys/kailash-mansarovar", description: "The sacred mountain and lake", verified: false },
    { label: "Nepal Tours", href: "/nepal-tours", description: "Journeys across Nepal", verified: false },
    { label: "Uttarakhand Tours", href: "/uttarakhand-tours", description: "Himalayan journeys in Uttarakhand", verified: false },
  ],
};

export const whyKarvaahh = {
  heading: "Planning the Yatra with Karvaahh",
  intro:
    "A four-state pilgrimage has many moving parts. Karvaahh plans the journey as one connected trip, so you can focus on the Dhams rather than the logistics.",
  points: [
    { title: "One plan, four regions", text: "Route, transport and stays coordinated across Uttarakhand, Gujarat, Odisha and Tamil Nadu." },
    { title: "Paced for the pilgrim", text: "Itineraries shaped around seniors, families, rest days and the Badrinath season." },
    { title: "Clear inclusions", text: "What is and isn't included is set out before you book — no surprises." },
  ] as TitledText[],
};

export const finalCta = {
  heading: "Begin Your Bada Char Dham Yatra",
  text: "Journey across the four sacred directions of India, from the Himalayas of Badrinath to the sacred shores of Dwarka, Puri and Rameswaram.",
  primary: { label: "Plan Your Yatra", href: `${ENQUIRY_BASE}?journey=bada-char-dham-yatra` },
  secondary: { label: "Request Package Details", href: `${ENQUIRY_BASE}?journey=bada-char-dham-yatra&type=package` },
  tertiary: { label: "Talk to Karvaahh", href: ENQUIRY_BASE },
  disclaimers: [
    "Travel routes, temple access, accommodation, transportation, festival schedules and pilgrimage operations may change. Travellers should confirm current arrangements with Karvaahh and relevant authorities before departure.",
    "Package inclusions and exclusions may vary according to the selected itinerary and travel arrangements. Final package details should be confirmed before booking.",
  ],
};

/* ------------------------------------------------------------------ SEO */

export const seo: PageSeo = {
  title: "Bada Char Dham Yatra | Badrinath Dwarka Puri Rameswaram | Karvaahh",
  description:
    "Explore the Bada Char Dham Yatra covering Badrinath, Dwarka, Jagannath Puri and Rameswaram. Discover the four sacred Dhams, routes, package inclusions, exclusions and pilgrimage planning.",
  canonicalPath: page.path,
  siteUrl: "https://karvaahh.in",
  siteName: "Karvaahh",
  ogImageAlt: "Bada Char Dham Yatra — Badrinath, Dwarka, Jagannath Puri and Rameswaram",
  keywords: [
    "Bada Char Dham Yatra",
    "Bada Char Dham Yatra India",
    "Char Dham pilgrimage India",
    "Badrinath Dwarka Puri Rameswaram",
    "Bada Char Dham package",
    "four Dhams of India",
  ],
};

/* ------------------------------------------------------- single export */

export const badaCharDhamData = {
  page,
  hero,
  quickFacts,
  directions,
  introduction,
  whatIs,
  dhams,
  comparison,
  spiritualSignificance,
  journey,
  routeOptions,
  transport,
  itinerary,
  package: badaCharDhamPackage,
  inclusions: badaCharDhamPackage.inclusions,
  exclusions: badaCharDhamPackage.exclusions,
  templeExperience,
  templeEtiquette,
  photography,
  festivals,
  bestTime,
  packing,
  seniorsAndFamilies,
  healthSafety,
  insurance,
  accommodation,
  food,
  responsibleTravel,
  gallery,
  faqs,
  relatedLinks,
  whyKarvaahh,
  finalCta,
  seo,
} as const;

export type BadaCharDhamData = typeof badaCharDhamData;
