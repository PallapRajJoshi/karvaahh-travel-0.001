/**
 * 12 Jyotirlinga Yatra — single source of truth for page content.
 *
 * Editorial rules applied throughout:
 * - Religious content uses "traditionally revered", "according to Hindu tradition",
 *   "devotees regard" — tradition is never presented as verified history.
 * - No prices, durations, dates, timings, hotel names, schedules or fees are stated.
 * - Numbering 01–12 is a reference index only, never a ranking.
 */

import type {
  ChecklistGroup,
  CtaLink,
  Fact,
  Faq,
  ImageAsset,
  Jyotirlinga,
  Region,
  RouteEntry,
  RouteKey,
  TitledText,
} from "./types";

const IMG = "/images/spiritual-journeys/12-jyotirlinga-yatra";

/* ------------------------------------------------------------------ */
/* Routes — VERIFY against the live project, then set enabled: true.   */
/* ------------------------------------------------------------------ */

export const routes: Record<RouteKey, RouteEntry> = {
  home: { href: "/", label: "Home", enabled: true },
  spiritualJourneys: { href: "/spiritual-journeys", label: "Spiritual Journeys", enabled: true },
  contact: { href: "/contact", label: "Contact Karvaahh", enabled: true },
  charDhamUttarakhand: { href: "/spiritual-journeys/char-dham-yatra", label: "Char Dham Yatra, Uttarakhand", enabled: false },
  badaCharDham: { href: "/spiritual-journeys/bada-char-dham-yatra", label: "Bada Char Dham Yatra", enabled: false },
  kedarnath: { href: "/spiritual-journeys/kedarnath-yatra", label: "Kedarnath Yatra", enabled: false },
  pashupatinath: { href: "/spiritual-journeys/pashupatinath", label: "Pashupatinath, Kathmandu", enabled: false },
  muktinath: { href: "/spiritual-journeys/muktinath-yatra", label: "Muktinath Yatra", enabled: false },
  kailashMansarovar: { href: "/spiritual-journeys/kailash-mansarovar-yatra", label: "Kailash Mansarovar Yatra", enabled: false },
  uttarakhandTours: { href: "/destinations/uttarakhand", label: "Uttarakhand Tours", enabled: false },
};

export function getRoute(key: RouteKey): RouteEntry | null {
  const r = routes[key];
  return r && r.enabled ? r : null;
}

export function ctaHref(link: CtaLink): string | null {
  const r = getRoute(link.route);
  if (!r) return null;
  return link.query ? `${r.href}?enquiry=${encodeURIComponent(link.query)}` : r.href;
}

/* ------------------------------------------------------------------ */
/* Page + hero                                                         */
/* ------------------------------------------------------------------ */

export const page = {
  path: "/spiritual-journeys/12-jyotirlinga-yatra",
  url: "https://karvaahh.in/spiritual-journeys/12-jyotirlinga-yatra",
  siteUrl: "https://karvaahh.in",
  brand: "Karvaahh",
  tagline: "Live to Travel",
  enquiryKey: "12-jyotirlinga-yatra",
};

export const hero = {
  eyebrow: "Spiritual Journeys, India",
  title: "12 Jyotirlinga Yatra",
  subtitle: "A Sacred Journey Through India's Revered Shiva Temples",
  copy:
    "Journey across India to the twelve traditionally revered Jyotirlingas, experiencing sacred temples, ancient traditions, spiritual heritage and the diverse landscapes of the Indian subcontinent.",
  primaryCta: { label: "Plan Your Yatra", route: "contact", query: page.enquiryKey, variant: "primary" } as CtaLink,
  secondaryCta: { label: "Explore the 12 Jyotirlingas", anchor: "#explore-jyotirlingas" },
  indicator: "12 sacred temples, many regions, one spiritual journey",
  /** Triptych: mountain, river, sea — the three landscapes of the Yatra. */
  images: [
    {
      src: `${IMG}/12-jyotirlinga-yatra-india.jpg`,
      alt: "Kedarnath temple beneath snow-covered Himalayan peaks, the northernmost stop on the 12 Jyotirlinga Yatra",
      ready: false,
      caption: "Himalaya",
    },
    {
      src: `${IMG}/hero-varanasi-ghats.jpg`,
      alt: "Evening lamps along the Ganga ghats of Varanasi, near the Kashi Vishwanath temple",
      ready: false,
      caption: "Ganga",
    },
    {
      src: `${IMG}/hero-somnath-coast.jpg`,
      alt: "Somnath temple on the Arabian Sea coast of Gujarat at dusk",
      ready: false,
      caption: "Arabian Sea",
    },
  ] as ImageAsset[],
};

export const quickFacts: Fact[] = [
  { label: "Sacred temples", value: "12" },
  { label: "Primary tradition", value: "Shaivite pilgrimage" },
  { label: "Journey type", value: "Pan-India spiritual journey" },
  { label: "Regions", value: "Eight Indian states" },
  { label: "Transportation", value: "Road, rail and air" },
  { label: "Experience", value: "Darshan, prayer and temple heritage" },
];

/* ------------------------------------------------------------------ */
/* Introduction + What is a Jyotirlinga                                */
/* ------------------------------------------------------------------ */

export const introduction = {
  heading: "12 Jyotirlinga Yatra – A Sacred Journey Across India",
  paragraphs: [
    "The 12 Jyotirlinga Yatra connects twelve of the most revered Shiva temples in India. It takes pilgrims from the high Himalaya at Kedarnath and the Gangetic plains of Varanasi to the Arabian Sea coast of Gujarat, the Sahyadri hills of Maharashtra, the Narmada and Shipra rivers of central India, and the island temple of Rameshwaram at the southern tip of the peninsula.",
    "Few pilgrimages cover so much of the subcontinent. Along the way the landscape, language, food and temple architecture change from one state to the next, while the devotion at each shrine remains the thread that joins them. For many devotees, completing the twelve Jyotirlingas is a lifelong spiritual aspiration, undertaken in one long journey or across several shorter ones.",
    "Because the temples lie in eight states and thousands of kilometres apart, the Yatra is also a real logistical undertaking: flights, trains and road transfers, frequent hotel changes, a high-altitude trek at Kedarnath, and temple schedules that vary from shrine to shrine. Good planning is what turns that distance into a calm, unhurried pilgrimage.",
  ],
  traditionNote:
    "The twelve Jyotirlingas are traditionally revered manifestations of Lord Shiva. Their traditional lists and some historical identifications have been discussed differently across sources; this page follows the commonly recognized pilgrimage list used for travel planning.",
};

export const whatIsJyotirlinga = {
  heading: "What is a Jyotirlinga?",
  paragraphs: [
    "In Hindu tradition, a Jyotirlinga is a shrine where Lord Shiva is worshipped in the form of a jyotirlinga, a lingam associated with divine radiance. The word joins jyoti, meaning light, with linga, the aniconic form through which Shiva is worshipped.",
    "According to the Shiva Purana, Shiva once appeared as an infinite column of light. Devotees regard the twelve Jyotirlingas as places where that presence is especially revered, and a traditional Sanskrit hymn, the Dwadasha Jyotirlinga Stotram, names all twelve.",
    "Each Jyotirlinga has its own legends, rituals and regional customs, which is part of what makes visiting all twelve so meaningful to pilgrims.",
  ],
  points: [
    { title: "Jyoti", text: "Light, associated in tradition with divine presence." },
    { title: "Linga", text: "The aniconic form in which Lord Shiva is worshipped." },
    { title: "Dwadasha", text: "Twelve, as named in the traditional Jyotirlinga hymn." },
  ] as TitledText[],
};

/* ------------------------------------------------------------------ */
/* The twelve                                                          */
/* ------------------------------------------------------------------ */

export const jyotirlingas: Jyotirlinga[] = [
  {
    id: 1,
    slug: "somnath",
    name: "Somnath",
    templeName: "Somnath Jyotirlinga",
    heading: "Somnath Jyotirlinga – Gujarat",
    location: "Prabhas Patan",
    state: "Gujarat",
    region: "West",
    landscape: "Arabian Sea coast",
    tradition: "Lord Shiva as Somnath, Lord of the Moon",
    shortDescription: "A seafront Shiva temple at Prabhas Patan, traditionally named first among the twelve.",
    significance:
      "Somnath is traditionally listed first among the twelve Jyotirlingas. According to Hindu tradition, the Moon god worshipped Shiva here, giving the temple its name. Prabhas Patan has been a place of pilgrimage for centuries, and the temple has been rebuilt several times over its long history.",
    templeCharacter:
      "The present temple, reconstructed after Indian independence, follows a traditional western Indian temple style. It stands directly above the Arabian Sea, and the open seafront promenade is part of the experience.",
    nearby: ["Prabhas Patan", "Bhalka Tirth", "Triveni Sangam"],
    travelNotes:
      "Veraval is the nearest large town and railway hub. Somnath pairs naturally with Nageshwar and Dwarka along the Saurashtra coast by road.",
    experience:
      "Darshan with the sea beyond the temple walls, evening aarti where held, and quiet time at the nearby tirthas.",
    tableContext: "Coastal temple; pairs with Nageshwar and Dwarka",
    coordinates: { lat: 20.888, lng: 70.401 },
    image: {
      src: `${IMG}/somnath-jyotirlinga-gujarat.jpg`,
      alt: "Somnath temple beside the Arabian Sea at Prabhas Patan, Gujarat",
      ready: false,
    },
  },
  {
    id: 2,
    slug: "mallikarjuna",
    name: "Mallikarjuna",
    templeName: "Mallikarjuna Jyotirlinga",
    heading: "Mallikarjuna Jyotirlinga – Srisailam",
    location: "Srisailam",
    state: "Andhra Pradesh",
    region: "South",
    landscape: "Nallamala hills above the Krishna river",
    tradition: "Lord Shiva as Mallikarjuna, with Goddess Bhramaramba",
    shortDescription: "A hill temple in the Nallamala forest, revered as both a Jyotirlinga and a Shakti shrine.",
    significance:
      "At Srisailam, Shiva is worshipped as Mallikarjuna alongside Goddess Bhramaramba. Devotees regard the site as unusual because it is revered both as a Jyotirlinga and as one of the Shakti Peethas, joining Shaiva and Shakta traditions in one temple complex.",
    templeCharacter:
      "A walled Dravidian-style temple complex with tall gopurams and carved stone halls, set high in the Nallamala hills overlooking the Krishna river valley.",
    nearby: ["Bhramaramba Devi shrine", "Krishna river valley", "Nallamala forest"],
    travelNotes:
      "Srisailam is usually reached by road through forested hills, commonly from Hyderabad. Forest-road access rules can apply, so road timings are planned in advance.",
    experience:
      "Darshan of Mallikarjuna and Bhramaramba, and the calm of a hilltop temple town surrounded by forest.",
    tableContext: "Forest hill temple; road access via Nallamala",
    coordinates: { lat: 16.074, lng: 78.868 },
    image: {
      src: `${IMG}/mallikarjuna-jyotirlinga-srisailam.jpg`,
      alt: "Gopuram of the Mallikarjuna temple at Srisailam in the Nallamala hills, Andhra Pradesh",
      ready: false,
    },
  },
  {
    id: 3,
    slug: "mahakaleshwar",
    name: "Mahakaleshwar",
    templeName: "Mahakaleshwar Jyotirlinga",
    heading: "Mahakaleshwar Jyotirlinga – Ujjain",
    location: "Ujjain",
    state: "Madhya Pradesh",
    region: "Central",
    landscape: "Malwa plateau on the Shipra river",
    tradition: "Lord Shiva as Mahakal, Lord of Time",
    shortDescription: "Ujjain's ancient Shiva temple beside the Shipra, at the heart of a historic pilgrimage city.",
    significance:
      "Mahakaleshwar is revered as the presiding deity of Ujjain, one of the seven sacred cities of Hindu tradition. Devotees regard the lingam here as dakshinamukhi, or south-facing, which is held to be distinctive among the Jyotirlingas.",
    templeCharacter:
      "A multi-level temple set within the Mahakal Lok corridor, close to the ghats of the Shipra river, where Ujjain's Simhastha Kumbh is held.",
    nearby: ["Shipra river ghats", "Harsiddhi temple", "Kal Bhairav temple"],
    travelNotes:
      "Indore is the usual air gateway and Ujjain is well connected by rail. Mahakaleshwar and Omkareshwar are commonly visited together.",
    experience:
      "The temple is renowned for its Bhasma Aarti tradition; current timings, eligibility and booking requirements should be confirmed with the temple authorities.",
    tableContext: "Pilgrimage city; pairs with Omkareshwar",
    coordinates: { lat: 23.183, lng: 75.768 },
    image: {
      src: `${IMG}/mahakaleshwar-jyotirlinga-ujjain.jpg`,
      alt: "Shikhara of the Mahakaleshwar temple in Ujjain, Madhya Pradesh",
      ready: false,
    },
  },
  {
    id: 4,
    slug: "omkareshwar",
    name: "Omkareshwar",
    templeName: "Omkareshwar Jyotirlinga",
    heading: "Omkareshwar Jyotirlinga – Madhya Pradesh",
    location: "Mandhata island, Khandwa district",
    state: "Madhya Pradesh",
    region: "Central",
    landscape: "River island on the Narmada",
    tradition: "Lord Shiva as Omkareshwar, Lord of Om",
    shortDescription: "An island temple on the Narmada, whose outline tradition likens to the sacred syllable Om.",
    significance:
      "Omkareshwar stands on Mandhata island in the Narmada, one of India's most sacred rivers. According to tradition, the island's shape resembles the syllable Om. Many devotees also visit the Mamleshwar temple on the opposite bank, which some traditions regard as part of the same Jyotirlinga.",
    templeCharacter:
      "A riverside temple reached by footbridge or boat, with ghats descending to the Narmada and a compact temple town around it.",
    nearby: ["Mamleshwar temple", "Narmada ghats", "Parikrama path around the island"],
    travelNotes:
      "Omkareshwar is reached by road, commonly from Indore. Plan for walking and steps between the bridges, ghats and temple.",
    experience:
      "Crossing the Narmada to the island, darshan, and time on the ghats as the river light changes.",
    tableContext: "Narmada island temple; road from Indore",
    coordinates: { lat: 22.246, lng: 76.151 },
    image: {
      src: `${IMG}/omkareshwar-jyotirlinga-madhya-pradesh.jpg`,
      alt: "Omkareshwar temple on Mandhata island in the Narmada river, Madhya Pradesh",
      ready: false,
    },
  },
  {
    id: 5,
    slug: "kedarnath",
    name: "Kedarnath",
    templeName: "Kedarnath Jyotirlinga",
    heading: "Kedarnath Jyotirlinga – Uttarakhand",
    location: "Rudraprayag district, Garhwal Himalaya",
    state: "Uttarakhand",
    region: "North",
    landscape: "High-altitude Himalayan valley",
    tradition: "Lord Shiva as Kedarnath, Lord of Kedar",
    shortDescription: "The Himalayan Jyotirlinga, set at high altitude near the source of the Mandakini.",
    significance:
      "Kedarnath is one of the twelve Jyotirlingas and also one of the four Uttarakhand Char Dham destinations, alongside Yamunotri, Gangotri and Badrinath. It is the highest of the twelve, and tradition associates the revival of the shrine with Adi Shankaracharya.",
    templeCharacter:
      "A massive stone temple standing at around 3,580 metres, framed by snow peaks at the head of the Mandakini valley.",
    nearby: ["Gaurikund", "Mandakini river", "Bhairavnath temple"],
    travelNotes:
      "The temple opens seasonally, with dates announced each year. The final approach is on foot, roughly 16–18 km from Gaurikund; pony, palki and helicopter services operate subject to season and regulation. Registration requirements are set by the Uttarakhand government.",
    experience:
      "A demanding mountain walk followed by darshan in one of the most dramatic temple settings in India.",
    relatedLink: { route: "charDhamUttarakhand", text: "Kedarnath is also part of the Char Dham Yatra in Uttarakhand" },
    tableContext: "High altitude; seasonal; trek or helicopter",
    coordinates: { lat: 30.735, lng: 79.067 },
    image: {
      src: `${IMG}/kedarnath-jyotirlinga-uttarakhand.jpg`,
      alt: "Stone Kedarnath temple in the Garhwal Himalaya with snow peaks behind, Uttarakhand",
      ready: false,
    },
  },
  {
    id: 6,
    slug: "bhimashankar",
    name: "Bhimashankar",
    templeName: "Bhimashankar Jyotirlinga",
    heading: "Bhimashankar Jyotirlinga – Maharashtra",
    location: "Sahyadri hills, Pune district",
    state: "Maharashtra",
    region: "West",
    landscape: "Forested Sahyadri ranges",
    tradition: "Lord Shiva as Bhimashankar",
    shortDescription: "A forest temple high in the Sahyadri, near the source region of the Bhima river.",
    significance:
      "Bhimashankar is revered as the Jyotirlinga of the Sahyadri and is associated with the origin of the Bhima river. The surrounding forest is protected as the Bhimashankar Wildlife Sanctuary, which gives the pilgrimage a quiet, natural setting.",
    templeCharacter:
      "A stone temple in the Nagara style, approached by steps descending through a small temple village in the hills.",
    nearby: ["Bhimashankar Wildlife Sanctuary", "Source area of the Bhima river", "Sahyadri viewpoints"],
    travelNotes:
      "Reached by road through hill roads, usually from Pune. Monsoon brings heavy rain and mist to the ghats, so allow extra road time in that season.",
    experience: "Darshan in a forest setting, with cool air and green hills around the temple.",
    traditionNote:
      "Some traditions associate the Bhimashankar Jyotirlinga with other sites; this page follows the Maharashtra temple used for most pilgrimage planning.",
    tableContext: "Forest hill temple; road from Pune",
    coordinates: { lat: 19.072, lng: 73.536 },
    image: {
      src: `${IMG}/bhimashankar-jyotirlinga-maharashtra.jpg`,
      alt: "Bhimashankar temple among forested Sahyadri hills, Maharashtra",
      ready: false,
    },
  },
  {
    id: 7,
    slug: "kashi-vishwanath",
    name: "Kashi Vishwanath",
    templeName: "Kashi Vishwanath Jyotirlinga",
    heading: "Kashi Vishwanath Jyotirlinga – Varanasi",
    location: "Varanasi",
    state: "Uttar Pradesh",
    region: "North",
    landscape: "Gangetic plains, on the Ganga",
    tradition: "Lord Shiva as Vishwanath, Lord of the Universe",
    shortDescription: "The Jyotirlinga of Kashi, in one of India's oldest and most important pilgrimage cities.",
    significance:
      "Kashi, or Varanasi, is one of India's major pilgrimage cities, and devotees regard Shiva as its presiding deity. For many pilgrims, darshan at Kashi Vishwanath and time on the Ganga ghats are central to their spiritual life.",
    templeCharacter:
      "The present temple was built in the late eighteenth century under Ahilyabai Holkar of Indore, and its spires were later covered in gold. The Kashi Vishwanath Dham corridor now links the temple with the ghats.",
    nearby: ["Dashashwamedh Ghat", "Manikarnika Ghat", "Sarnath"],
    travelNotes:
      "Varanasi is well connected by air and rail. Temple approaches are busy and security checks apply; darshan arrangements follow current temple rules.",
    experience: "Darshan, the evening Ganga aarti on the ghats, and early-morning boat rides along the river.",
    tableContext: "Ganga pilgrimage city; air and rail hub",
    coordinates: { lat: 25.311, lng: 83.011 },
    image: {
      src: `${IMG}/kashi-vishwanath-jyotirlinga-varanasi.jpg`,
      alt: "Gold-covered spire of the Kashi Vishwanath temple in Varanasi, Uttar Pradesh",
      ready: false,
    },
  },
  {
    id: 8,
    slug: "trimbakeshwar",
    name: "Trimbakeshwar",
    templeName: "Trimbakeshwar Jyotirlinga",
    heading: "Trimbakeshwar Jyotirlinga – Maharashtra",
    location: "Trimbak, Nashik district",
    state: "Maharashtra",
    region: "West",
    landscape: "Brahmagiri hills",
    tradition: "Lord Shiva as Trimbakeshwar, the three-eyed Lord",
    shortDescription: "A black-stone temple below the Brahmagiri hills, associated with the Godavari's source region.",
    significance:
      "Trimbakeshwar is associated in tradition with the source region of the Godavari in the Brahmagiri hills. Devotees regard its lingam as distinctive, with three small faces traditionally associated with Brahma, Vishnu and Shiva.",
    templeCharacter:
      "An eighteenth-century black basalt temple with a carved Nagara spire, set in the small pilgrimage town of Trimbak.",
    nearby: ["Kushavarta Kund", "Brahmagiri hills", "Nashik"],
    travelNotes:
      "Trimbak is a short road journey from Nashik. Entry and dress rules for the inner sanctum are set by the temple and can change.",
    experience: "Darshan, the sacred kund in town, and the hill scenery of the Brahmagiri range.",
    tableContext: "Godavari source region; road from Nashik",
    coordinates: { lat: 19.932, lng: 73.531 },
    image: {
      src: `${IMG}/trimbakeshwar-jyotirlinga-maharashtra.jpg`,
      alt: "Black basalt Trimbakeshwar temple below the Brahmagiri hills, Maharashtra",
      ready: false,
    },
  },
  {
    id: 9,
    slug: "vaidyanath",
    name: "Vaidyanath",
    templeName: "Vaidyanath (Baidyanath) Jyotirlinga",
    heading: "Vaidyanath Jyotirlinga – Jharkhand",
    location: "Deoghar",
    state: "Jharkhand",
    region: "East",
    landscape: "Chota Nagpur plateau",
    tradition: "Lord Shiva as Vaidyanath, Lord of Healers",
    shortDescription: "Baidyanath Dham in Deoghar, focus of the great Shravan pilgrimage of eastern India.",
    significance:
      "Baidyanath Dham in Deoghar is one of the most visited Shiva temples in eastern India. During the month of Shravan, large numbers of devotees known as kanwariyas carry Ganga water on foot to offer at the temple.",
    templeCharacter:
      "A temple complex centred on the main Baidyanath shrine, surrounded by many smaller temples within one enclosure.",
    nearby: ["Temple complex shrines", "Deoghar town", "Trikut hills"],
    travelNotes:
      "Deoghar has an airport and Jasidih is the main nearby railhead. The Shravan season brings very large crowds and needs early planning.",
    experience: "Darshan within a busy temple complex, and the devotional atmosphere of an eastern Indian pilgrimage town.",
    traditionNote:
      "There are differing traditional claims regarding the location identified with Vaidyanath/Baidyanath among some sources, including temples in Maharashtra and Himachal Pradesh. For travel purposes, this page uses Baidyanath Dham in Deoghar, Jharkhand.",
    tableContext: "Shravan season crowds; air and rail via Deoghar",
    coordinates: { lat: 24.492, lng: 86.7 },
    image: {
      src: `${IMG}/baidyanath-jyotirlinga-deoghar.jpg`,
      alt: "Baidyanath Dham temple complex in Deoghar, Jharkhand",
      ready: false,
    },
  },
  {
    id: 10,
    slug: "nageshwar",
    name: "Nageshwar",
    templeName: "Nageshwar Jyotirlinga",
    heading: "Nageshwar Jyotirlinga – Gujarat",
    location: "Dwarka region",
    state: "Gujarat",
    region: "West",
    landscape: "Saurashtra coast",
    tradition: "Lord Shiva as Nageshwar, Lord of Serpents",
    shortDescription: "A coastal Shiva temple near Dwarka, usually visited together with the Dwarkadhish temple.",
    significance:
      "Nageshwar is revered as the Jyotirlinga of the Darukavana forest named in tradition. Its location near Dwarka means most pilgrims combine it with darshan at the Dwarkadhish temple and Bet Dwarka.",
    templeCharacter:
      "A modest temple in open coastal country, marked by a large seated statue of Shiva visible from the approach road.",
    nearby: ["Dwarkadhish temple", "Bet Dwarka", "Gomti Ghat"],
    travelNotes:
      "Reached by road from Dwarka, which has a railway station. Somnath and Nageshwar are separate Jyotirlingas on the same Saurashtra coast, linked by a long coastal drive.",
    experience: "Darshan at a quieter coastal temple, combined with Dwarka's Krishna pilgrimage sites.",
    traditionNote:
      "Some traditions identify the Nageshwar Jyotirlinga with temples in Maharashtra or Uttarakhand; this page follows the temple near Dwarka used for most pilgrimage planning.",
    relatedLink: { route: "badaCharDham", text: "Dwarka is also one of the four Bada Char Dham" },
    tableContext: "Near Dwarka; separate from Somnath",
    coordinates: { lat: 22.336, lng: 69.087 },
    image: {
      src: `${IMG}/nageshwar-jyotirlinga-gujarat.jpg`,
      alt: "Nageshwar temple and large Shiva statue near Dwarka, Gujarat",
      ready: false,
    },
  },
  {
    id: 11,
    slug: "rameshwaram",
    name: "Rameshwaram",
    templeName: "Ramanathaswamy Jyotirlinga, Rameshwaram",
    heading: "Rameshwaram Jyotirlinga – Tamil Nadu",
    location: "Rameswaram island",
    state: "Tamil Nadu",
    region: "South",
    landscape: "Island in the Gulf of Mannar",
    tradition: "Lord Shiva as Ramanathaswamy",
    shortDescription: "The island temple of Ramanathaswamy, linked in tradition to the Ramayana.",
    significance:
      "According to the Ramayana tradition, Lord Rama worshipped Shiva at Rameswaram. The Ramanathaswamy temple is the southernmost of the twelve Jyotirlingas and is also one of the four Bada Char Dham.",
    templeCharacter:
      "A vast Dravidian temple famous for its long pillared corridors, with sacred theerthams, or wells, within the complex where pilgrims traditionally bathe before darshan.",
    nearby: ["Agni Theertham", "Dhanushkodi", "Pamban channel"],
    travelNotes:
      "The island is connected to the mainland by road and rail bridges; Madurai is the usual air gateway. Theertham bathing follows temple arrangements on the day.",
    experience: "Sacred bathing traditions where arranged, darshan, and a walk through the great corridors.",
    relatedLink: { route: "badaCharDham", text: "Rameswaram is also one of the four Bada Char Dham" },
    tableContext: "Island temple; Madurai air gateway",
    coordinates: { lat: 9.288, lng: 79.317 },
    image: {
      src: `${IMG}/rameshwaram-jyotirlinga-tamil-nadu.jpg`,
      alt: "Pillared corridor of the Ramanathaswamy temple at Rameswaram, Tamil Nadu",
      ready: false,
    },
  },
  {
    id: 12,
    slug: "grishneshwar",
    name: "Grishneshwar",
    templeName: "Grishneshwar Jyotirlinga",
    heading: "Grishneshwar Jyotirlinga – Maharashtra",
    location: "Verul, Ellora region",
    state: "Maharashtra",
    region: "West",
    landscape: "Deccan plateau near Ellora",
    tradition: "Lord Shiva as Grishneshwar (Ghrishneshwar)",
    shortDescription: "A red-stone temple in Verul village, close to the Ellora Caves.",
    significance:
      "Grishneshwar is revered as the Jyotirlinga of Verul. Tradition links its name to the devotion of a woman named Ghushma, and the temple is an active place of worship visited on the Maharashtra Jyotirlinga circuit.",
    templeCharacter:
      "An eighteenth-century temple of red stone, rebuilt under Ahilyabai Holkar, with finely carved walls in a compact courtyard.",
    nearby: ["Ellora Caves (UNESCO World Heritage Site)", "Chhatrapati Sambhajinagar (Aurangabad)", "Daulatabad Fort"],
    travelNotes:
      "The temple pilgrimage and the Ellora archaeological site are separate visits with their own rules. Ellora is a protected heritage monument with its own entry system and closing days; temple dress customs are set by the temple.",
    experience: "Darshan at a living temple, with the option of a separate heritage visit to Ellora nearby.",
    tableContext: "Near Ellora Caves; heritage visit separate",
    coordinates: { lat: 20.025, lng: 75.17 },
    image: {
      src: `${IMG}/grishneshwar-jyotirlinga-maharashtra.jpg`,
      alt: "Red stone Grishneshwar temple in Verul near Ellora, Maharashtra",
      ready: false,
    },
  },
];

/* ------------------------------------------------------------------ */
/* Regions + route                                                     */
/* ------------------------------------------------------------------ */

export const regionOrder: Region[] = ["North", "Central", "West", "East", "South"];

export const regionalGroups: { region: Region; description: string; slugs: string[] }[] = [
  { region: "North", description: "Himalaya and the Ganga", slugs: ["kedarnath", "kashi-vishwanath"] },
  { region: "Central", description: "Malwa and the Narmada", slugs: ["mahakaleshwar", "omkareshwar"] },
  {
    region: "West",
    description: "Saurashtra coast and Maharashtra",
    slugs: ["somnath", "nageshwar", "bhimashankar", "trimbakeshwar", "grishneshwar"],
  },
  { region: "East", description: "Chota Nagpur plateau", slugs: ["vaidyanath"] },
  { region: "South", description: "Deccan hills and the southern sea", slugs: ["mallikarjuna", "rameshwaram"] },
];

export const regionalNote =
  "These regional groupings are for visual and travel-planning purposes only and are not strict geographical classifications.";

export const route = {
  heading: "12 Jyotirlingas Across India",
  intro:
    "Seen on a map, the twelve Jyotirlingas stretch from the Himalaya to the southern sea. The line below traces one illustrative way to connect them.",
  order: [
    "kedarnath",
    "kashi-vishwanath",
    "vaidyanath",
    "mahakaleshwar",
    "omkareshwar",
    "somnath",
    "nageshwar",
    "bhimashankar",
    "trimbakeshwar",
    "grishneshwar",
    "mallikarjuna",
    "rameshwaram",
  ],
  disclaimer:
    "This is an illustrative route only. The actual order depends on your starting city, package, transport, temple schedules, flight and train availability, and travel dates. There is no single mandatory sequence.",
  graphicNote: "Points are placed by approximate latitude and longitude. The graphic is not a map and shows no boundaries.",
};

/* ------------------------------------------------------------------ */
/* Transport + journey flow                                            */
/* ------------------------------------------------------------------ */

export const transport = {
  heading: "Getting Between the Jyotirlingas",
  intro: "Most itineraries combine several modes of travel. The exact combination depends on the selected itinerary.",
  options: [
    { title: "Air", text: "Useful for the long interstate distances, such as between the north, west and south of the circuit." },
    { title: "Rail", text: "Useful for major pilgrimage cities such as Varanasi, Ujjain and Nashik, with overnight trains on longer legs." },
    { title: "Road", text: "Used for local and regional transfers, and the only practical access to hill and forest temples." },
    { title: "Mixed", text: "Air, rail and road combined is how most long multi-state circuits are planned in practice." },
  ] as TitledText[],
};

export const journeyFlow = {
  heading: "Illustrative 12 Jyotirlinga Journey",
  intro: "One way the Yatra can be grouped into regional stages.",
  stages: [
    { title: "Northern pilgrimage", temples: ["kedarnath", "kashi-vishwanath"], note: "Himalayan trek and the Ganga at Varanasi" },
    { title: "Eastern pilgrimage", temples: ["vaidyanath"], note: "Baidyanath Dham in Deoghar" },
    { title: "Central India", temples: ["mahakaleshwar", "omkareshwar"], note: "The Shipra and the Narmada" },
    { title: "Western India", temples: ["somnath", "nageshwar"], note: "The Saurashtra coast" },
    { title: "Maharashtra circuit", temples: ["bhimashankar", "trimbakeshwar", "grishneshwar"], note: "Sahyadri hills and the Deccan" },
    { title: "Southern pilgrimage", temples: ["mallikarjuna", "rameshwaram"], note: "Nallamala hills and the island temple" },
  ],
  disclaimer: "Actual sequencing, duration and overnight locations depend on the selected package.",
};

/* ------------------------------------------------------------------ */
/* Experience, darshan, etiquette, festivals, timing                   */
/* ------------------------------------------------------------------ */

export const experiences = {
  heading: "The Pilgrimage Experience",
  items: [
    "Shiva darshan",
    "Temple architecture",
    "Traditional worship",
    "Aarti where applicable",
    "Sacred rivers",
    "Himalayan landscapes",
    "Coastal temples",
    "Ancient pilgrimage cities",
    "Regional culture",
    "Spiritual reflection",
    "Local traditions",
    "Sacred festivals",
  ],
  highlightsHeading: "Five landscapes of the Yatra",
  highlightsNote: "Every Jyotirlinga is equally revered. These five simply show how different the settings are.",
  highlights: [
    { slug: "kedarnath", title: "High-altitude Himalayan pilgrimage" },
    { slug: "kashi-vishwanath", title: "The Ganga and an ancient pilgrimage city" },
    { slug: "somnath", title: "A sacred coastal temple" },
    { slug: "mahakaleshwar", title: "Ujjain's Shiva pilgrimage" },
    { slug: "rameshwaram", title: "An island temple pilgrimage" },
  ],
};

export const darshan = {
  heading: "Darshan, Rituals and Temple Etiquette",
  points: [
    "Darshan procedures differ from temple to temple.",
    "Some temples offer special worship on request.",
    "Some rituals require advance arrangements with the temple.",
    "Special or VIP darshan, where offered, may carry separate charges.",
    "Temple rules can change at short notice.",
  ],
  notGuaranteed:
    "VIP darshan, special entry, ritual participation and access to specific aartis cannot be guaranteed. They depend on temple authorities on the day.",
  etiquetteHeading: "Temple etiquette",
  etiquette: [
    "Dress respectfully",
    "Follow temple rules",
    "Respect worshippers",
    "Follow photography restrictions",
    "Follow security procedures",
    "Do not enter restricted areas",
    "Maintain cleanliness",
    "Respect local traditions",
  ],
  etiquetteNote: "Entry, dress requirements, photography policies and ritual participation can differ between temples.",
  changingInfo: "Subject to current temple rules, government regulations, weather and operational conditions.",
};

export const festivals = {
  heading: "Festivals at the Jyotirlingas",
  intro: "Shiva festivals bring the temples to life, and also bring their largest crowds.",
  items: [
    { title: "Maha Shivaratri", text: "The great night of Shiva, observed at every Jyotirlinga." },
    { title: "Shravan month", text: "The monsoon month sacred to Shiva, especially busy at Baidyanath Dham and across the circuit." },
    { title: "Mahakal observances", text: "Ujjain's temple observances, including processions of Mahakal during Shravan." },
    { title: "Regional Shiva festivals", text: "Local celebrations that differ from state to state." },
    { title: "Temple-specific festivals", text: "Each temple follows its own ritual calendar." },
  ] as TitledText[],
  note: "Festival periods can involve significantly larger crowds and may require advance planning. Dates follow the Hindu lunar calendar and change every year.",
};

export const bestTime = {
  heading: "Best Time for the 12 Jyotirlinga Yatra",
  lead: "The ideal travel period depends on the route, temple opening schedules, weather and the traveller's preferred conditions.",
  factors: [
    { title: "Kedarnath", text: "Open only in a seasonal window each year; closed through winter." },
    { title: "Coastal Gujarat", text: "Somnath and Nageshwar have a coastal climate, hot before the monsoon." },
    { title: "Central India", text: "Ujjain and Omkareshwar see hot summers and a distinct monsoon." },
    { title: "Varanasi", text: "Hot summers and cool, sometimes foggy, winters on the Gangetic plains." },
    { title: "South India", text: "Srisailam and Rameswaram follow a different, generally warmer, pattern." },
    { title: "Monsoon", text: "Arrives at different times across regions and affects hill and ghat roads." },
  ] as TitledText[],
  tip: "Because Kedarnath is seasonal, many travellers plan the complete circuit within its opening window, or complete the other eleven temples at a different time.",
};

/* ------------------------------------------------------------------ */
/* Preparation                                                         */
/* ------------------------------------------------------------------ */

export const kedarnathPrep = {
  heading: "Preparing for Kedarnath's Altitude",
  intro:
    "Kedarnath is the only high-altitude temple on the circuit, and the walk to it is the most physically demanding part of the Yatra.",
  points: [
    { title: "High altitude", text: "The temple stands at around 3,580 metres, where the air is thinner." },
    { title: "Walking", text: "The approach from Gaurikund is a long uphill walk unless you use pony, palki or helicopter services." },
    { title: "Cold", text: "Temperatures can be low even in the main season, especially at night and early morning." },
    { title: "Weather changes", text: "Rain, fog and sudden changes are common in the mountains." },
    { title: "Acclimatization", text: "Ascend gradually where possible and avoid rushing." },
    { title: "Hydration and rest", text: "Drink water regularly and rest when your body asks for it." },
    { title: "Proper footwear", text: "Wear broken-in walking shoes with good grip." },
    { title: "Medical planning", text: "Consult a doctor before travel, especially with heart, lung or blood-pressure concerns." },
  ] as TitledText[],
  disclaimer: "This is general preparation guidance, not medical advice. Please consult a qualified healthcare professional.",
};

export const packing: { heading: string; intro: string; groups: ChecklistGroup[] } = {
  heading: "What to Pack for the Yatra",
  intro: "Tick items off as you pack. Nothing is saved or sent anywhere.",
  groups: [
    {
      title: "Clothing",
      items: ["Comfortable clothing", "Modest temple clothing", "Warm layers for Kedarnath", "Rain protection", "Comfortable socks"],
    },
    { title: "Footwear", items: ["Comfortable walking shoes", "Extra footwear"] },
    { title: "Personal", items: ["Personal medicines", "Sunscreen", "Sunglasses", "Water bottle", "Toiletries"] },
    {
      title: "Documents",
      items: ["Government ID", "Passport/visa where applicable", "Tickets", "Hotel/package documents", "Insurance documents"],
    },
    { title: "Electronics", items: ["Phone", "Power bank", "Chargers", "Travel adapters where necessary"] },
  ],
};

export const healthSafety = {
  heading: "Health, Safety and Long-Distance Travel",
  longDistance: {
    title: "A long journey, planned well",
    text: "A 12-Jyotirlinga circuit can involve substantial road travel, train travel, flights, hotel changes, walking and temple visits.",
    tips: [
      "Comfortable, easy-to-handle luggage",
      "Travel organizers for documents",
      "Copies of documents",
      "A power bank",
      "Personal medication",
      "Regular hydration",
      "Flexible expectations",
    ],
  },
  seniors: {
    title: "Senior citizens and family travellers",
    text:
      "The Yatra is regularly undertaken by senior pilgrims and families. It helps to plan for long-distance travel, frequent hotel changes, walking inside temple complexes, crowds, the altitude at Kedarnath, very different weather between regions, and enough rest days.",
    disclaimer:
      "Travellers with health concerns or medical conditions should consult a qualified healthcare professional before undertaking a long, multi-region pilgrimage.",
  },
};

export const accommodation = {
  heading: "Accommodation During the 12 Jyotirlinga Yatra",
  points: [
    "Stays are in selected hotels on a twin or triple-sharing basis.",
    "Accommodation standards vary by city, from larger hotels to simpler guesthouses in temple towns.",
    "Facilities differ between destinations.",
    "Mountain accommodation near Kedarnath is generally more basic.",
    "Hotel availability depends on your travel dates, especially around festivals.",
  ],
};

export const food = {
  heading: "Meals During the Yatra",
  points: [
    "Breakfast and dinner are provided according to the selected package.",
    "Lunch is usually excluded, leaving you free to eat on the road.",
    "Vegetarian food is widely available across the circuit.",
    "Regional cuisine changes from Gujarat and Maharashtra to Uttar Pradesh and Tamil Nadu.",
    "Snacks and beverages are generally personal expenses.",
  ],
};

export const responsibleTravel = {
  heading: "Travel Responsibly",
  items: [
    "Respect sacred spaces",
    "Follow local customs",
    "Avoid littering",
    "Minimize plastic",
    "Respect local communities",
    "Conserve water",
    "Follow environmental instructions",
    "Avoid damaging heritage structures",
    "Use authorized routes",
  ],
};

/* ------------------------------------------------------------------ */
/* Package — commercial data. No prices, durations or dates.           */
/* ------------------------------------------------------------------ */

export const packageInfo = {
  heading: "12 Jyotirlinga Yatra Package",
  intro:
    "Custom package options can be structured according to travel dates, group size, transportation preferences and route.",
  /** Ways to structure the Yatra. Each maps to an enquiry key; no durations or prices. */
  formats: [
    {
      title: "Complete 12 Jyotirlinga circuit",
      text: "All twelve temples in one continuous journey, combining air, rail and road.",
      slugs: [] as string[],
      enquiry: "12-jyotirlinga-complete",
    },
    {
      title: "Maharashtra Jyotirlingas",
      text: "Bhimashankar, Trimbakeshwar and Grishneshwar.",
      slugs: ["bhimashankar", "trimbakeshwar", "grishneshwar"],
      enquiry: "jyotirlinga-maharashtra",
    },
    {
      title: "Gujarat Jyotirlingas",
      text: "Somnath and Nageshwar, often with Dwarka.",
      slugs: ["somnath", "nageshwar"],
      enquiry: "jyotirlinga-gujarat",
    },
    {
      title: "Madhya Pradesh Jyotirlingas",
      text: "Mahakaleshwar and Omkareshwar.",
      slugs: ["mahakaleshwar", "omkareshwar"],
      enquiry: "jyotirlinga-madhya-pradesh",
    },
  ],
  disclaimer:
    "Package inclusions and exclusions may vary according to the selected itinerary, travel dates, group size, transportation, accommodation and operational requirements. Final package details should be confirmed before booking.",
};

export const inclusions: ChecklistGroup[] = [
  {
    title: "Accommodation",
    items: [
      "Accommodation in selected hotels on twin/triple-sharing basis",
      "Accommodation and meals as specified in the selected package",
    ],
  },
  { title: "Meals", items: ["Breakfast and dinner as per the selected package"] },
  {
    title: "Transportation",
    items: [
      "Private transportation and intercity transfers as specified",
      "Airport/railway station pickup and drop-off, where applicable",
      "Sightseeing and temple transfers mentioned in the itinerary",
      "Driver allowance",
      "Fuel",
      "Parking",
      "Applicable road taxes",
    ],
  },
  {
    title: "Pilgrimage support",
    items: [
      "Tour coordinator/driver assistance throughout the Yatra",
      "Assistance with pilgrimage and temple visit arrangements where applicable",
      "Basic travel coordination and assistance throughout the Yatra",
    ],
  },
  { title: "Permits and entry", items: ["Applicable permits and entry fees specifically mentioned in the package"] },
];

export const exclusions: ChecklistGroup[] = [
  { title: "Travel tickets", items: ["Domestic/international airfare or railway tickets unless specifically included"] },
  { title: "Religious expenses", items: ["VIP/Special Darshan charges", "Temple donations", "Puja and ritual expenses"] },
  { title: "Personal expenses", items: ["Laundry", "Telephone calls", "Room service", "Shopping"] },
  { title: "Food", items: ["Lunch, unless specifically included", "Snacks, unless specifically included", "Beverages, unless specifically included"] },
  { title: "Optional services", items: ["Porter", "Local guide", "Optional local transportation charges"] },
  { title: "Insurance and medical", items: ["Travel insurance", "Medical expenses"] },
  {
    title: "Unforeseen expenses",
    items: [
      "Additional accommodation",
      "Additional transportation caused by delays",
      "Costs arising from weather",
      "Costs arising from natural disasters",
      "Costs arising from unforeseen circumstances",
    ],
  },
  {
    title: "Operational changes",
    items: [
      "Expenses resulting from changes in temple timings",
      "Expenses resulting from government regulations",
      "Expenses resulting from route conditions",
    ],
  },
  {
    title: "Other",
    items: ["Tips", "Gratuities", "Any service or expense not specifically mentioned under Package Inclusions"],
  },
];

/* ------------------------------------------------------------------ */
/* Karvaahh + CTA                                                      */
/* ------------------------------------------------------------------ */

export const karvaahh = {
  heading: "How Karvaahh Plans Your Yatra",
  steps: [
    { title: "Start from you", text: "Your starting city, dates, group and pace shape the route, not a fixed template." },
    { title: "Sequence the circuit", text: "We order the temples around seasonal openings, transport availability and rest." },
    { title: "Confirm in writing", text: "Inclusions, exclusions and stays are confirmed before you book." },
    { title: "Support on the road", text: "A coordinator or driver assists you throughout the Yatra." },
  ] as TitledText[],
};

export const finalCta = {
  heading: "Begin Your 12 Jyotirlinga Yatra",
  copy:
    "Journey across India to twelve traditionally revered Shiva pilgrimage destinations, experiencing sacred temples, ancient traditions and diverse cultural landscapes along the way.",
  ctas: [
    { label: "Plan Your Yatra", route: "contact", query: "12-jyotirlinga-yatra", variant: "primary" },
    { label: "Request Package Details", route: "contact", query: "12-jyotirlinga-package", variant: "secondary" },
    { label: "Talk to Karvaahh", route: "contact", variant: "ghost" },
  ] as CtaLink[],
};

/* ------------------------------------------------------------------ */
/* Gallery                                                             */
/* ------------------------------------------------------------------ */

export const gallery = {
  heading: "The Twelve Jyotirlingas in Pictures",
  images: jyotirlingas.map((j) => ({ ...j.image, caption: `${j.name}, ${j.state}`, slug: j.slug })),
};

/* ------------------------------------------------------------------ */
/* FAQ — the JSON-LD is generated from this exact array.               */
/* ------------------------------------------------------------------ */

export const faqs: Faq[] = [
  {
    question: "What is the 12 Jyotirlinga Yatra?",
    answer:
      "It is a pilgrimage to the twelve traditionally revered Jyotirlinga temples of Lord Shiva, spread across eight Indian states from the Himalaya to Tamil Nadu.",
  },
  {
    question: "What are the twelve Jyotirlingas?",
    answer:
      "Somnath, Mallikarjuna, Mahakaleshwar, Omkareshwar, Kedarnath, Bhimashankar, Kashi Vishwanath, Trimbakeshwar, Vaidyanath (Baidyanath), Nageshwar, Rameshwaram and Grishneshwar.",
  },
  {
    question: "What is the spiritual significance of Jyotirlingas?",
    answer:
      "According to Hindu tradition, Jyotirlingas are shrines where Lord Shiva is worshipped as a lingam associated with divine light. Devotees regard darshan at these temples as especially sacred.",
  },
  {
    question: "Where are the 12 Jyotirlingas located?",
    answer:
      "In Gujarat (2), Andhra Pradesh (1), Madhya Pradesh (2), Uttarakhand (1), Maharashtra (3), Uttar Pradesh (1), Jharkhand (1) and Tamil Nadu (1).",
  },
  {
    question: "Can all 12 Jyotirlingas be visited in one trip?",
    answer:
      "Yes, with careful planning and a mix of air, rail and road travel. Because Kedarnath is open only seasonally, the complete circuit must be timed around its opening window. Many travellers instead complete the twelve across several shorter trips.",
  },
  {
    question: "How long does a 12 Jyotirlinga Yatra take?",
    answer:
      "It depends on your starting city, transport choices, pace and whether all twelve are visited in one journey. Duration is confirmed with your chosen itinerary.",
  },
  {
    question: "Is there a fixed order for visiting the Jyotirlingas?",
    answer:
      "No. There is no mandatory travel sequence. The order is usually planned around geography, transport, temple schedules and Kedarnath's season.",
  },
  {
    question: "What transportation is used?",
    answer:
      "Usually a combination of flights for long interstate distances, trains between major cities and road transfers for regional and local travel.",
  },
  {
    question: "Is Kedarnath part of the 12 Jyotirlingas?",
    answer: "Yes. Kedarnath in Uttarakhand is one of the twelve Jyotirlingas and the highest of them.",
  },
  {
    question: "Is Kedarnath also part of Char Dham Uttarakhand?",
    answer:
      "Yes. Kedarnath is one of the four Uttarakhand Char Dham destinations, together with Yamunotri, Gangotri and Badrinath.",
  },
  {
    question: "Which Jyotirlingas are in Maharashtra?",
    answer: "Three: Bhimashankar, Trimbakeshwar and Grishneshwar.",
  },
  {
    question: "Which Jyotirlingas are in Gujarat?",
    answer: "Two: Somnath at Prabhas Patan and Nageshwar in the Dwarka region.",
  },
  {
    question: "What is the difference between Somnath and Nageshwar?",
    answer:
      "They are two separate Jyotirlingas on the Saurashtra coast of Gujarat. Somnath is at Prabhas Patan; Nageshwar is near Dwarka. Both are often visited on the same trip.",
  },
  {
    question: "What is the significance of Kashi Vishwanath?",
    answer:
      "Kashi Vishwanath in Varanasi is revered as the Jyotirlinga of Kashi, one of India's major pilgrimage cities, where devotees regard Shiva as the presiding deity.",
  },
  {
    question: "What is the significance of Rameshwaram?",
    answer:
      "According to the Ramayana tradition, Lord Rama worshipped Shiva at Rameswaram. The Ramanathaswamy temple is also one of the four Bada Char Dham.",
  },
  {
    question: "Is Baidyanath the Vaidyanath Jyotirlinga?",
    answer:
      "Baidyanath Dham in Deoghar, Jharkhand, is widely visited as the Vaidyanath Jyotirlinga. Some sources identify other temples with Vaidyanath; this page follows Deoghar for travel planning.",
  },
  {
    question: "What should I pack?",
    answer:
      "Comfortable and modest temple clothing, warm layers for Kedarnath, rain protection, walking shoes, personal medicines, ID and travel documents, and a power bank.",
  },
  {
    question: "What is included in the package?",
    answer:
      "Typically selected hotels on twin/triple sharing, breakfast and dinner, private transport and transfers as specified, coordinator or driver assistance, and permits or entry fees specifically mentioned. Final inclusions depend on the selected package.",
  },
  {
    question: "What is excluded?",
    answer:
      "Typically flights or train tickets unless included, VIP/special darshan charges, donations, puja expenses, lunch, snacks, personal expenses, insurance, medical costs and costs from delays or unforeseen circumstances.",
  },
  {
    question: "Is travel insurance included?",
    answer: "No. Travel insurance is not included, and we recommend arranging cover suitable for a long, multi-region journey.",
  },
  {
    question: "Is VIP Darshan included?",
    answer:
      "No. VIP or special darshan charges are excluded, and availability depends on temple authorities, so it cannot be guaranteed.",
  },
  {
    question: "Can the itinerary be customized?",
    answer:
      "Yes. The route, pace, transport, stays and whether you complete all twelve or a regional circuit can be tailored to your dates and group.",
  },
  {
    question: "Is the Yatra suitable for senior citizens?",
    answer:
      "Many senior pilgrims complete it with a comfortable pace and rest days. Kedarnath's altitude and walk need particular care. Travellers with health concerns should consult a qualified healthcare professional first.",
  },
  {
    question: "How should I prepare for Kedarnath altitude?",
    answer:
      "Consult a doctor before travel, build walking fitness beforehand, ascend gradually where possible, stay hydrated, carry warm layers and rain protection, and rest when needed.",
  },
];

/* ------------------------------------------------------------------ */
/* SEO                                                                 */
/* ------------------------------------------------------------------ */

export const seo = {
  title: "12 Jyotirlinga Yatra | Complete Shiva Pilgrimage Across India | Karvaahh",
  description:
    "Explore the 12 Jyotirlinga Yatra across India, from Somnath and Kedarnath to Kashi Vishwanath and Rameshwaram. Discover temples, routes, travel planning and package details.",
  ogImage: {
    src: `${IMG}/12-jyotirlinga-yatra-india.jpg`,
    width: 1200,
    height: 630,
    alt: "12 Jyotirlinga Yatra across India with Karvaahh",
  },
  keywords: [
    "12 Jyotirlinga Yatra",
    "12 Jyotirlinga tour",
    "Jyotirlinga Yatra package",
    "12 Jyotirlinga temples",
    "Shiva pilgrimage India",
  ],
  breadcrumbs: [
    { name: "Home", route: "home" as RouteKey },
    { name: "Spiritual Journeys", route: "spiritualJourneys" as RouteKey },
    { name: "12 Jyotirlinga Yatra", route: null },
  ],
};

/* In-page index shown under the header. */
export const pageIndex = [
  { label: "Temples", href: "#explore-jyotirlingas" },
  { label: "Route", href: "#route" },
  { label: "Plan", href: "#plan" },
  { label: "Prepare", href: "#prepare" },
  { label: "Package", href: "#package" },
  { label: "FAQ", href: "#faq" },
];

/* Convenience lookups */
export const bySlug = Object.fromEntries(jyotirlingas.map((j) => [j.slug, j])) as Record<string, Jyotirlinga>;
export const anchorFor = (slug: string) => `jyotirlinga-${slug}`;
