import { DO_DHAM_DAYS, HELI_DAYS, HELI_INCLUSIONS, ROAD_DAYS, ROAD_INCLUSIONS, itineraryOptions } from "@/data/char-dham/content";
import { INCLUSIONS as HRY_INCLUSIONS } from "@/components/spiritual-journeys/haridwar-rishikesh/data/package";
import { ITINERARY, ITINERARY_LABEL } from "@/components/spiritual-journeys/haridwar-rishikesh/data/itinerary";
import { ITINERARY_PLANS as AVD_PLANS } from "@/components/spiritual-journeys/amarnath-vaishno-devi/data/itinerary";
import { INCLUSIONS as AVD_INCLUSIONS } from "@/components/spiritual-journeys/amarnath-vaishno-devi/data/content";
import { enquiryHref, links } from "./content";
import { IMAGES, type Img } from "./images";

/**
 * Packages, sacred circuits and itinerary collections.
 *
 * Every bookable card mirrors a live Karvaahh package page, and its facts are
 * read from that page's own data so the two cannot drift:
 *  - Char Dham / Do Dham: data/char-dham/content.ts (sample itineraries).
 *  - Haridwar & Rishikesh: components/spiritual-journeys/haridwar-rishikesh/data.
 *  - Amarnath & Vaishno Devi: components/spiritual-journeys/amarnath-vaishno-devi/data.
 * `duration: null` → "Duration confirmed with your itinerary".
 * No prices are published for any of these, so every card reads "Price on request".
 */

const cleanTitle = (t: string) => t.replace(/^Day \d+ · /, "");
const nightsDays = (days: number) => `${days - 1}N / ${days}D`;

/* ------------------------------------------------------------------ */
/* Featured packages                                                   */
/* ------------------------------------------------------------------ */

export type TourPackage = {
  id: string;
  title: string;
  category: string;
  image: Img;
  duration: string | null;
  destinations: string[];
  highlights: string[];
  /** Lines taken from the package page. `basis` says how they apply. */
  inclusions: { items: string[]; basis: string } | null;
  primary: { label: string; href: string };
  enquire: { label: string; href: string };
};

const avdDays = AVD_PLANS.map((p) => p.days.length);

export const packages: TourPackage[] = [
  {
    id: "char-dham-road",
    title: "Char Dham Yatra by Road",
    category: "Char Dham Yatra",
    image: IMAGES.charDhamRoad,
    duration: `Sample ${nightsDays(ROAD_DAYS.length)} from Haridwar`,
    destinations: ["Haridwar", "Yamunotri", "Gangotri", "Kedarnath", "Badrinath"],
    highlights: [itineraryOptions.road.summary, "Mana village near Badrinath where time allows"],
    inclusions: { items: ROAD_INCLUSIONS.map((i) => i.text).slice(0, 5), basis: "As per the selected package" },
    primary: { label: "Explore Package", href: links.charDhamRoad },
    enquire: { label: "Enquire Now", href: enquiryHref("Char Dham Yatra by road", "spiritual-pilgrimage") },
  },
  {
    id: "char-dham-heli",
    title: "Char Dham Yatra by Helicopter",
    category: "Char Dham Yatra",
    image: IMAGES.charDhamHeli,
    duration: `Sample ${nightsDays(HELI_DAYS.length)} from Dehradun`,
    destinations: ["Dehradun", "Yamunotri", "Gangotri", "Kedarnath", "Badrinath"],
    highlights: [itineraryOptions.helicopter.summary, "Fewer hours on mountain roads; flights depend on weather and operator"],
    inclusions: { items: HELI_INCLUSIONS.map((i) => i.text).slice(0, 5), basis: "As per the selected package" },
    primary: { label: "Explore Package", href: links.charDhamHeli },
    enquire: { label: "Enquire Now", href: enquiryHref("Char Dham Yatra by helicopter", "spiritual-pilgrimage") },
  },
  {
    id: "do-dham",
    title: "Kedarnath & Badrinath Do Dham Yatra",
    category: "Kedarnath and Badrinath",
    image: IMAGES.kedarnath,
    duration: `Sample ${nightsDays(DO_DHAM_DAYS.length)} from Haridwar`,
    destinations: ["Haridwar", "Guptkashi", "Kedarnath", "Badrinath"],
    highlights: [itineraryOptions.doDham.summary, "Helicopter options to Kedarnath, subject to availability"],
    inclusions: null,
    primary: { label: "Explore Package", href: links.doDham },
    enquire: { label: "Enquire Now", href: enquiryHref("Do Dham Yatra (Kedarnath + Badrinath)", "spiritual-pilgrimage") },
  },
  {
    id: "haridwar-rishikesh",
    title: "Haridwar & Rishikesh Yatra",
    category: "Spiritual Ganga journey",
    image: IMAGES.haridwar,
    duration: `${ITINERARY_LABEL} (customisable)`,
    destinations: ["Haridwar", "Rishikesh", "Neelkanth (optional)"],
    highlights: ["Ganga Aarti at Har Ki Pauri and Triveni Ghat", "Mansa Devi, Parmarth Niketan and Ram Jhula"],
    inclusions: { items: HRY_INCLUSIONS.slice(0, 4), basis: "As specified in your package" },
    primary: { label: "Explore Package", href: links.haridwarRishikesh },
    enquire: { label: "Enquire Now", href: enquiryHref("Haridwar & Rishikesh Yatra", "spiritual-pilgrimage") },
  },
  {
    id: "amarnath-vaishno-devi",
    title: "Amarnath & Vaishno Devi Yatra",
    category: "Jammu & Kashmir pilgrimage",
    image: IMAGES.vaishnoDevi,
    duration: `Sample plans of ${Math.min(...avdDays)}–${Math.max(...avdDays)} days via Baltal or Pahalgam`,
    destinations: ["Jammu", "Katra", "Pahalgam / Baltal", "Srinagar (optional)"],
    highlights: ["Vaishno Devi darshan from Katra", "Amarnath via the Baltal or Pahalgam route, as officially scheduled"],
    inclusions: { items: AVD_INCLUSIONS.slice(0, 4), basis: "As per the selected package" },
    primary: { label: "Explore Package", href: links.amarnathVaishnoDevi },
    enquire: { label: "Enquire Now", href: enquiryHref("Amarnath & Vaishno Devi Yatra", "spiritual-pilgrimage") },
  },
  {
    id: "adi-kailash",
    title: "Adi Kailash & Om Parvat Yatra",
    category: "Kumaon Himalaya pilgrimage",
    image: IMAGES.adiKailash,
    duration: null,
    destinations: ["Kathgodam", "Dharchula", "Gunji", "Jolingkong", "Nabidhang"],
    highlights: ["Darshan of Adi Kailash and Om Parvat", "Planned around acclimatisation and inner-line permits"],
    inclusions: null,
    primary: { label: "Explore Package", href: links.adiKailash },
    enquire: { label: "Enquire Now", href: enquiryHref("Adi Kailash & Om Parvat Yatra", "spiritual-pilgrimage") },
  },
];

/** Requested trips that have no package page: they go to a tailor-made enquiry. */
export const customTrips = [
  { label: "Manali & Shimla holiday", destination: "Manali & Shimla holiday" },
  { label: "Kashmir tour", destination: "Kashmir tour (Srinagar, Gulmarg, Pahalgam)" },
  { label: "Golden Triangle tour", destination: "Golden Triangle (Delhi, Agra, Jaipur)" },
  { label: "Varanasi & Ayodhya pilgrimage", destination: "Varanasi & Ayodhya pilgrimage" },
].map((t) => ({ ...t, href: enquiryHref(t.destination, "customized") }));

/* ------------------------------------------------------------------ */
/* Sacred circuits                                                     */
/* ------------------------------------------------------------------ */

export type Circuit = {
  id: string;
  title: string;
  status: "bookable" | "idea";
  route: string[];
  text: string;
  note: string;
  link: { label: string; href: string };
};

export const circuits: Circuit[] = [
  {
    id: "char-dham",
    title: "Char Dham Yatra",
    status: "bookable",
    route: ["Haridwar", "Yamunotri", "Gangotri", "Kedarnath", "Badrinath"],
    text: "The four Himalayan shrines of Uttarakhand, by road or by helicopter, with family and senior-citizen versions.",
    note: "Open seasonally; opening and closing dates are announced each year. Registration is required.",
    link: { label: "Explore Char Dham Yatra", href: links.charDham },
  },
  {
    id: "do-dham",
    title: "Kedarnath & Badrinath Pilgrimage",
    status: "bookable",
    route: ["Haridwar", "Guptkashi", "Kedarnath", "Badrinath"],
    text: "A shorter yatra to the abodes of Lord Shiva and Lord Vishnu.",
    note: "Kedarnath involves a long uphill trek, pony, palanquin or helicopter service, depending on availability.",
    link: { label: "Explore Do Dham Yatra", href: links.doDham },
  },
  {
    id: "haridwar-rishikesh",
    title: "Haridwar & Rishikesh Spiritual Journey",
    status: "bookable",
    route: ["Haridwar", "Har Ki Pauri", "Rishikesh", "Triveni Ghat"],
    text: "Ganga Aarti, temples and ashrams in the two Ganga towns at the foot of the Himalaya.",
    note: "Aarti timings and some bridge areas can change with local conditions.",
    link: { label: "Explore the yatra", href: links.haridwarRishikesh },
  },
  {
    id: "vaishno-devi",
    title: "Vaishno Devi & Amarnath Pilgrimage",
    status: "bookable",
    route: ["Jammu", "Katra", "Vaishno Devi", "Pahalgam / Baltal", "Amarnath"],
    text: "Mata Vaishno Devi in the Trikuta Hills, with the Amarnath cave pilgrimage during its official season.",
    note: "Amarnath dates, registration and health certificates follow the Shri Amarnathji Shrine Board each year.",
    link: { label: "Explore the yatra", href: links.amarnathVaishnoDevi },
  },
  {
    id: "varanasi-ayodhya",
    title: "Varanasi & Ayodhya Pilgrimage",
    status: "idea",
    route: ["Varanasi", "Sarnath", "Prayagraj", "Ayodhya"],
    text: "The ghats and Kashi Vishwanath in Varanasi, the Triveni Sangam at Prayagraj, and the Saryu ghats of Ayodhya.",
    note: "Suggested route. Crowds and access change around major festivals and melas.",
    link: { label: "Ask us to plan this", href: enquiryHref("Varanasi & Ayodhya pilgrimage", "spiritual-pilgrimage") },
  },
  {
    id: "krishna",
    title: "Mathura & Vrindavan Krishna Circuit",
    status: "idea",
    route: ["Delhi / Agra", "Mathura", "Vrindavan", "Govardhan"],
    text: "Temples, ghats and kirtan in the land of Krishna, easy to pair with Agra or Delhi.",
    note: "Suggested route. Janmashtami and Holi are especially crowded; plan early.",
    link: { label: "Ask us to plan this", href: enquiryHref("Mathura & Vrindavan Krishna circuit", "spiritual-pilgrimage") },
  },
  {
    id: "buddhist",
    title: "Buddhist Heritage Journey",
    status: "idea",
    route: ["Varanasi", "Sarnath", "Lumbini (Nepal)"],
    text: "Sarnath, where the Buddha gave his first teaching, can be combined with Lumbini, his birthplace in Nepal.",
    note: "Suggested route. Crossing between India and Nepal needs valid ID or a visa, depending on nationality.",
    link: { label: "Explore Lumbini", href: links.lumbini },
  },
];

/* ------------------------------------------------------------------ */
/* Itinerary collections                                               */
/* ------------------------------------------------------------------ */

export type ItineraryCollection = {
  id: string;
  title: string;
  status: "sample" | "suggested";
  length: string | null;
  summary: string;
  route: string[];
  /** Day-by-day only when the source package publishes it. */
  days: { label: string; text: string }[] | null;
  link: { label: string; href: string };
};

export const itineraries: ItineraryCollection[] = [
  {
    id: "uttarakhand",
    title: "Uttarakhand Spiritual Circuit",
    status: "sample",
    length: nightsDays(ROAD_DAYS.length),
    summary: itineraryOptions.road.summary,
    route: ["Haridwar", "Barkot", "Uttarkashi", "Guptkashi", "Badrinath"],
    days: ROAD_DAYS.map((d, i) => ({ label: `Day ${i + 1}`, text: `${cleanTitle(d.title)}. ${d.text}` })),
    link: { label: "See the full road yatra", href: links.charDhamRoad },
  },
  {
    id: "haridwar-rishikesh",
    title: "Haridwar & Rishikesh Ganga Journey",
    status: "sample",
    length: `${ITINERARY.length} days`,
    summary: "Two Ganga towns, their aartis, temples and ashrams, with an optional visit to Neelkanth Mahadev.",
    route: ["Haridwar", "Rishikesh"],
    days: ITINERARY.map((d) => ({ label: `Day ${d.day}`, text: `${d.title}. Overnight: ${d.overnight}.` })),
    link: { label: "See the full yatra", href: links.haridwarRishikesh },
  },
  {
    id: "himachal",
    title: "Himachal Hill Station Holiday",
    status: "suggested",
    length: null,
    summary: "Colonial Shimla, the Kullu Valley and Manali's forests and snow peaks, with Kasol or Dharamshala as add-ons.",
    route: ["Chandigarh / Delhi", "Shimla", "Kullu", "Manali"],
    days: null,
    link: { label: "Ask us to tailor this", href: enquiryHref("Himachal hill station holiday (Shimla, Kullu, Manali)", "customized") },
  },
  {
    id: "kashmir",
    title: "Kashmir Scenic Escape",
    status: "suggested",
    length: null,
    summary: "Dal Lake houseboats, the meadows of Gulmarg, the Lidder Valley at Pahalgam and glacier views at Sonamarg.",
    route: ["Srinagar", "Gulmarg", "Pahalgam", "Sonamarg"],
    days: null,
    link: { label: "Ask us to tailor this", href: enquiryHref("Kashmir scenic escape", "customized") },
  },
  {
    id: "varanasi-ayodhya",
    title: "Varanasi & Ayodhya Pilgrimage",
    status: "suggested",
    length: null,
    summary: "Sunrise on the Ganga, Kashi Vishwanath, Sarnath, the Sangam at Prayagraj and the ghats of Ayodhya.",
    route: ["Varanasi", "Prayagraj", "Ayodhya"],
    days: null,
    link: { label: "Ask us to tailor this", href: enquiryHref("Varanasi & Ayodhya pilgrimage", "spiritual-pilgrimage") },
  },
  {
    id: "golden-triangle",
    title: "Golden Triangle Heritage Tour",
    status: "suggested",
    length: null,
    summary: "Delhi's Mughal monuments, the Taj Mahal and Agra Fort, and the palaces and forts of Jaipur.",
    route: ["Delhi", "Agra", "Jaipur"],
    days: null,
    link: { label: "Ask us to tailor this", href: enquiryHref("Golden Triangle heritage tour", "customized") },
  },
];
