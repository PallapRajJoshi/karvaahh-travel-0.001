/* ============================================================
   NEPAL PILGRIMAGE — PAGE CONTENT
   ------------------------------------------------------------
   Regional sections, combinations, festivals, timeline, travel
   information, FAQ, related links and SEO for
   /packages/nepal/spiritual-pilgrimage-tours.

   Festival dates follow the lunar calendar and change every
   year: add `festivalDates` only once confirmed for that year.
   ============================================================ */

import type { IconName, PageImage } from "@/components/activities/experience/types";
import type { Combination, Festival, PilgrimageDestination } from "./types";
import * as I from "./images";
import { everestSunset, kailash } from "../helicopter-tours/images";

export const PAGE_PATH = "/packages/nepal/spiritual-pilgrimage-tours";

/* ---------- Regional / thematic sections ---------- */

export type BadgeTone = "ok" | "info" | "warn";

export type RegionSectionConfig = {
  id: string;
  eyebrow: string;
  title: string;
  intro: string;
  /** Large featured destination. */
  featured?: string;
  /** Destinations shown in the rail (in order). */
  destinations?: string[];
  /** Or select destinations by rule. */
  select?: (d: PilgrimageDestination) => boolean;
  /** Package ids shown under the rail. */
  packages?: string[];
  /** Highlight chips, e.g. festivals or classifications. */
  highlights?: { label: string; text: string }[];
  note?: string;
  dark?: boolean;
  /** Show Shakti Peeth and Devi temples as two separate groups. */
  splitShakti?: boolean;
};

export const SECTIONS: RegionSectionConfig[] = [
  {
    id: "kathmandu",
    eyebrow: "Kathmandu Valley",
    title: "Kathmandu Valley Spiritual Circuit",
    intro: "A valley of living temples and stupas — Hindu and Buddhist traditions side by side within a few kilometres.",
    featured: "pashupatinath",
    destinations: ["guhyeshwari", "swayambhunath", "boudhanath", "changu-narayan", "budhanilkantha", "dakshinkali", "kopan", "shobha-bhagawati", "bajrayogini", "bagalamukhi", "kumbheshwar", "krishna-mandir", "taleju", "pharping"],
    packages: ["pashupatinath-darshan", "ktm-spiritual-2n3d", "ktm-spiritual-3n4d"],
    note: "Some temples restrict entry to their inner sanctums; we never promise access to restricted areas.",
  },
  {
    id: "central",
    eyebrow: "Central Nepal & Bagmati",
    title: "Central Nepal & Bagmati Pilgrimage",
    intro: "From Himalayan lakes to river confluences and the Ramayana city of Janakpur.",
    featured: "gosainkunda",
    destinations: ["janaki-mandir", "devghat", "namobuddha", "palanchok-bhagawati", "jaleshwar", "doleshwar", "panauti", "dhulikhel"],
    highlights: [
      { label: "Gosainkunda", text: "A major Himalayan Shiva pilgrimage." },
      { label: "Devghat", text: "A sacred confluence and spiritual retreat." },
      { label: "Janakpur", text: "Ramayana and Mithila heritage of Sita (Janaki)." },
    ],
    packages: ["gosainkunda", "manakamana-chitwan"],
  },
  {
    id: "east",
    eyebrow: "Koshi & the East",
    title: "Eastern Nepal Spiritual Journey",
    intro: "High Devi shrines, sacred caves and Vishnu's confluence temple, beneath Kanchenjunga and Everest.",
    featured: "pathibhara",
    destinations: ["halesi", "barahakshetra", "budhasubba", "dantakali", "pindeshwor", "tengboche"],
    highlights: [
      { label: "Pathibhara", text: "A high-altitude Devi pilgrimage." },
      { label: "Halesi Mahadev", text: "Shiva caves sacred to Hindus and Buddhists." },
      { label: "Barah Kshetra", text: "An important Vishnu pilgrimage." },
      { label: "Tengboche", text: "The Sherpa monastery of the Everest region." },
    ],
    packages: ["eastern-circuit", "pathibhara", "halesi"],
    dark: true,
  },
  {
    id: "gandaki",
    eyebrow: "Gandaki & the West",
    title: "Gandaki & Western Nepal Sacred Circuit",
    intro: "Muktinath — sacred to both Hindus and Buddhists — leads a circuit of lake temples, confluences and hilltop goddesses.",
    featured: "muktinath",
    destinations: ["kagbeni", "damodar-kunda", "taal-barahi", "bindhyabasini", "galeshwar", "ridi", "resunga", "baglung-kalika"],
    packages: ["muktinath-road", "muktinath-flight", "muktinath-pokhara", "muktinath-mustang", "muktinath-kathmandu", "muktinath-helicopter"],
    note: "Muktinath lies at around 3,710 m: plan for altitude, weather and road or flight conditions.",
  },
  {
    id: "buddhist",
    eyebrow: "Buddhist Nepal",
    title: "Lumbini & Buddhist Pilgrimage",
    intro: "Lumbini is the birthplace of Siddhartha Gautama Buddha. Around it lie Kapilavastu, Ramagrama and Devdaha — and in the mountains, the great stupas and monasteries of Nepal's living Buddhist traditions.",
    featured: "lumbini",
    destinations: ["maya-devi", "sacred-garden", "ashoka-pillar", "peace-pagoda", "monastic-zone", "tilaurakot", "kudan", "ramagrama", "devdaha", "sagarhawa", "gotihawa", "boudhanath", "swayambhunath", "namobuddha", "pharping", "kopan", "tengboche"],
    packages: ["lumbini-circuit", "buddhist-tour", "ktm-buddhist-lumbini"],
  },
  {
    id: "ramayana",
    eyebrow: "Ramayana & Mithila",
    title: "Walk Through the Ramayana Heritage of Nepal",
    intro: "Lord Ram • Sita / Janaki • Ramayana tradition • Mithila heritage. Janakpur is revered as the city of King Janak and the birthplace of Sita.",
    featured: "janaki-mandir",
    destinations: ["vivah-mandap", "ram-mandir-janakpur", "dhanushadham", "jaleshwar"],
    packages: ["janakpur-darshan", "janakpur-kathmandu", "janakpur-lumbini", "ramayana-nepal", "ramayana-nepal-india"],
    dark: true,
  },
  {
    id: "shakti",
    eyebrow: "Shakti & Devi",
    title: "Shakti Peeth & Devi Temple Circuit",
    intro: "Nepal's goddess temples, from Guhyeshwari to the shrines of the far west. Only sites widely regarded as Shakti Peeths are labelled as such.",
    select: (d) => d.pilgrimageTypes.includes("shakti-peeth") || d.pilgrimageTypes.includes("devi-temple"),
    splitShakti: true,
    packages: ["shakti-peeth"],
  },
  {
    id: "shiva",
    eyebrow: "Shaiva Pilgrimage",
    title: "Shiva & Shaiva Pilgrimage Circuit",
    intro: "Pashupatinath leads a circuit of Shiva shrines across Nepal, from cave temples to Himalayan lakes.",
    select: (d) => d.pilgrimageTypes.includes("shiva-shrine"),
    highlights: [
      { label: "Maha Shivaratri", text: "Pashupatinath's greatest festival (Falgun, usually Feb–Mar)." },
      { label: "Teej", text: "Women's festival of devotion to Shiva (Bhadra, usually Aug–Sep)." },
      { label: "Shrawan", text: "The holy month of Shiva worship (usually Jul–Aug)." },
    ],
    packages: ["shiva-dham", "pashupatinath-darshan"],
    note: "Festival dates follow the lunar calendar and change each year — we confirm them for your journey.",
  },
  {
    id: "vaishnav",
    eyebrow: "Vaishnav Pilgrimage",
    title: "Vaishnav & Vishnu Pilgrimage",
    intro: "Shrines of Lord Vishnu and his incarnations — from Budhanilkantha's reclining Vishnu to Muktinath and Barah Kshetra.",
    select: (d) => d.pilgrimageTypes.includes("vishnu-shrine"),
    dark: true,
  },
  {
    id: "himalayan",
    eyebrow: "High Himalaya",
    title: "Himalayan Spiritual & High-Altitude Pilgrimage",
    intro: "Remote shrines, sacred lakes and monasteries above the clouds. These journeys need careful planning and are not suitable for everyone — especially elderly travellers or those with health conditions.",
    select: (d) => d.difficulty === "high-altitude" || d.difficulty === "difficult",
    note: "High altitude, weather-dependent and sometimes trekking-only: we plan these only after discussing health, fitness and season.",
  },
  {
    id: "west",
    eyebrow: "Karnali & Sudurpashchim",
    title: "Discover the Sacred West",
    intro: "Nepal's far west keeps some of its most remote and deeply revered shrines — from Swargadwari to Badi Malika.",
    featured: "swargadwari",
    destinations: ["bageshwari", "chandannath", "badi-malika", "shaileshwari", "ugratara", "baidyanath", "shey-phoksundo"],
    dark: true,
  },
];

/* ---------- Combinations ---------- */

export const COMBINATIONS: Combination[] = [
  { id: "c1", title: "Pashupatinath + Muktinath", stops: ["Kathmandu", "Pokhara", "Muktinath"], text: "Nepal's two great Hindu pilgrimages.", packageId: "muktinath-kathmandu", active: true },
  { id: "c2", title: "Pashupatinath + Janakpur", stops: ["Kathmandu", "Janakpur"], text: "Shiva's temple and the city of Sita.", packageId: "janakpur-kathmandu", active: true },
  { id: "c3", title: "Pashupatinath + Lumbini", stops: ["Kathmandu", "Lumbini"], text: "Hindu and Buddhist Nepal together.", active: true },
  { id: "c4", title: "Muktinath + Lumbini", stops: ["Muktinath", "Pokhara", "Lumbini"], text: "From the Himalaya to the Buddha's birthplace.", active: true },
  { id: "c5", title: "Muktinath + Manakamana", stops: ["Manakamana", "Pokhara", "Muktinath"], text: "The goddess of wishes and the Himalayan shrine.", active: true },
  { id: "c6", title: "Kathmandu + Pokhara + Muktinath", stops: ["Kathmandu", "Pokhara", "Muktinath"], text: "The classic Muktinath yatra.", packageId: "ktm-pokhara-muktinath-5n6d", active: true },
  { id: "c7", title: "Kathmandu + Janakpur + Lumbini", stops: ["Kathmandu", "Janakpur", "Lumbini"], text: "Shiva, Sita and the Buddha.", packageId: "pashupati-janakpur-lumbini-7n8d", active: true },
  { id: "c8", title: "Kathmandu + Lumbini + Chitwan + Pokhara", stops: ["Kathmandu", "Chitwan", "Lumbini", "Pokhara"], text: "Pilgrimage with Nepal's lowlands and lakes.", active: true },
  { id: "c9", title: "Kathmandu + Muktinath + Mustang", stops: ["Kathmandu", "Muktinath", "Mustang"], text: "Into the trans-Himalaya.", packageId: "muktinath-mustang", active: true },
  { id: "c10", title: "Pashupatinath + Gosainkunda", stops: ["Kathmandu", "Gosainkunda"], text: "From Shiva's temple to Shiva's lake.", packageId: "gosainkunda", active: true },
  { id: "c11", title: "Kathmandu Buddhist Circuit + Lumbini", stops: ["Boudhanath", "Swayambhunath", "Lumbini"], text: "The great stupas and the birthplace.", packageId: "ktm-buddhist-lumbini", active: true },
  { id: "c12", title: "Pathibhara + Halesi + Barah Kshetra", stops: ["Barah Kshetra", "Halesi", "Pathibhara"], text: "Eastern Nepal's sacred trio.", packageId: "eastern-circuit", active: true },
];

/* ---------- Festivals (lunar calendar — no fixed dates) ---------- */

export const FESTIVALS: Festival[] = [
  { id: "shivaratri", name: "Maha Shivaratri", season: "Falgun (usually February–March)", text: "Devotees from Nepal and India gather at Pashupatinath for the great night of Shiva.", destinations: ["pashupatinath", "doleshwar", "halesi", "jaleshwar"], active: true },
  { id: "teej", name: "Teej", season: "Bhadra (usually August–September)", text: "Women fast and worship Shiva and Parvati; Pashupatinath fills with red saris and songs.", destinations: ["pashupatinath"], active: true },
  { id: "dashain", name: "Dashain", season: "Ashwin–Kartik (usually September–October)", text: "Nepal's greatest festival honours Goddess Durga; Devi temples are at their busiest.", destinations: ["dakshinkali", "guhyeshwari", "manakamana", "taleju", "bindhyabasini"], active: true },
  { id: "janai-purnima", name: "Janai Purnima", season: "Shrawan full moon (usually July–August)", text: "Pilgrims journey to Gosainkunda and Kumbheshwar's ponds; Badi Malika also draws devotees in this season.", destinations: ["gosainkunda", "kumbheshwar", "badi-malika"], active: true },
  { id: "buddha-jayanti", name: "Buddha Jayanti", season: "Baisakh full moon (usually April–May)", text: "The Buddha's birth, enlightenment and passing are celebrated at Lumbini and the great stupas.", destinations: ["lumbini", "swayambhunath", "boudhanath"], active: true },
  { id: "ram-navami", name: "Ram Navami", season: "Chaitra (usually March–April)", text: "Lord Ram's birth is celebrated across Janakpur's temples.", destinations: ["ram-mandir-janakpur", "janaki-mandir"], active: true },
  { id: "janmashtami", name: "Krishna Janmashtami", season: "Bhadra (usually August–September)", text: "Krishna Mandir in Patan glows with lamps and devotional singing.", destinations: ["krishna-mandir"], active: true },
  { id: "vivah-panchami", name: "Vivah Panchami & temple festivals", season: "Mangsir (usually November–December) and others", text: "Janakpur re-enacts the wedding of Ram and Sita; many temples hold their own annual jatras.", destinations: ["janaki-mandir", "vivah-mandap"], active: true },
];

/* ---------- Timeline ---------- */

export const TIMELINE: { title: string; text: string; icon: IconName }[] = [
  { title: "Consultation", text: "Tell us your pilgrimage goals, faith tradition and who is travelling.", icon: "headset" },
  { title: "Itinerary Customization", text: "Choose destinations, duration and travel style.", icon: "route" },
  { title: "Transport & Hotels", text: "Select road, flight or helicopter options and accommodation.", icon: "bed" },
  { title: "Permits & Tickets", text: "We arrange applicable permits, tickets and reservations.", icon: "file" },
  { title: "Your Pilgrimage Journey", text: "Travel with Karvaahh coordination and local support.", icon: "heart" },
  { title: "Return & Drop-Off", text: "Complete your journey with planned return arrangements.", icon: "flag" },
];

export const ENTRY_POINTS = ["Kathmandu", "Gorakhpur", "Sunauli / Bhairahawa", "Raxaul / Birgunj", "Other suitable points"];

/* ---------- Best time ---------- */

export const BEST_TIME: { name: string; text: string; icon: IconName; image: PageImage }[] = [
  { name: "Kathmandu Valley", text: "Generally accessible throughout the year, subject to local conditions and festival crowds.", icon: "sun", image: I.pashupatinath },
  { name: "Muktinath", text: "Needs careful seasonal planning for altitude, weather and road or flight conditions; spring and autumn are most popular.", icon: "mountainSnow", image: I.muktinath },
  { name: "Gosainkunda", text: "Seasonal and weather-sensitive; the trail can be snowbound in winter and slippery in the monsoon.", icon: "snow", image: I.gosainkunda },
  { name: "Pathibhara", text: "A high-altitude shrine requiring careful planning; winter snow and monsoon rain can affect the walk.", icon: "cloud", image: I.pathibhara },
];

/* ---------- Practical information ---------- */

export const PRACTICAL: { title: string; text: string; icon: IconName }[] = [
  { title: "Temple Access", text: "Some religious sites restrict entry to their inner areas; please respect all notices.", icon: "landmark" },
  { title: "Photography", text: "Photography rules vary by temple; many sanctums prohibit it.", icon: "camera" },
  { title: "Dress Etiquette", text: "Wear modest clothing that covers shoulders and knees.", icon: "users" },
  { title: "Footwear", text: "Shoes may need to be removed at temples and sacred sites.", icon: "footprints" },
  { title: "Offerings", text: "Follow each temple's rules on permitted offerings.", icon: "heart" },
  { title: "Local Customs", text: "Walk clockwise around stupas and respect rituals in progress.", icon: "compass" },
  { title: "Transport", text: "Road conditions vary significantly, especially in the hills and monsoon.", icon: "car" },
  { title: "Altitude", text: "Some Himalayan shrines are at high altitude; consult a doctor before travel.", icon: "mountainSnow" },
  { title: "Weather", text: "Weather can affect roads, domestic flights and helicopter operations.", icon: "cloud" },
  { title: "Festival Crowds", text: "Major festivals bring very large crowds; plan extra time.", icon: "calendar" },
  { title: "Travel Insurance", text: "Suitable travel insurance is recommended, especially for high-altitude journeys.", icon: "umbrella" },
  { title: "Support", text: "Your Karvaahh team stays reachable throughout the journey on the numbers below.", icon: "headset" },
];

/* ---------- Why Karvaahh ---------- */

export const WHY: { title: string; text: string; icon: IconName }[] = [
  { title: "Customized Yatra Planning", text: "Destinations, pace and rituals planned around your family.", icon: "route" },
  { title: "India & Nepal Travel Support", text: "Teams in Kathmandu and Delhi NCR for cross-border journeys.", icon: "compass" },
  { title: "Private & Group Options", text: "Couples, families and large groups.", icon: "users" },
  { title: "Road, Flight & Helicopter", text: "The right transport for each part of the journey.", icon: "helicopter" },
  { title: "Hotel Selection", text: "Standard to luxury, chosen for comfort and location.", icon: "bed" },
  { title: "Local Assistance", text: "On-ground help at temples, airports and hotels.", icon: "heart" },
  { title: "Permits & Tickets", text: "Arranged where applicable.", icon: "file" },
  { title: "Transparent Inclusions", text: "Everything confirmed in writing before you book.", icon: "shield" },
  { title: "Support Throughout", text: "A Karvaahh contact from arrival to drop-off.", icon: "headset" },
];

/* ---------- FAQ ---------- */

export const FAQS = [
  { question: "What are the most important pilgrimage destinations in Nepal?", answer: "Pashupatinath, Muktinath, Lumbini, Janakpur, Manakamana, Swayambhunath and Boudhanath are among the most visited, with Gosainkunda, Pathibhara, Halesi Mahadev and Barah Kshetra for deeper journeys." },
  { question: "What is included in a Nepal pilgrimage tour?", answer: "Typically accommodation, transport and assistance as per the selected package. Flights, permits, meals and helicopter services depend on the package and are confirmed in writing." },
  { question: "Can I customize my Nepal pilgrimage package?", answer: "Yes. Destinations, duration, hotels, transport and pace can all be tailored." },
  { question: "Can I travel to Nepal for pilgrimage from India?", answer: "Yes. Indian citizens do not need a visa for Nepal; valid photo identification is required. We confirm the documents accepted at the time of travel." },
  { question: "Can I start my pilgrimage from Gorakhpur?", answer: "Yes, many journeys begin in Gorakhpur and cross into Nepal at Sunauli, close to Lumbini. We plan the route to suit your package." },
  { question: "Can I enter Nepal through Sunauli?", answer: "Yes. The Sunauli–Bhairahawa border is a common entry point, especially for Lumbini and western Nepal itineraries." },
  { question: "Can I enter Nepal through Raxaul?", answer: "Yes. The Raxaul–Birgunj border is a common entry point for Kathmandu and Janakpur itineraries." },
  { question: "Is Muktinath suitable for senior citizens?", answer: "Many seniors visit Muktinath, but it lies at around 3,710 m. We recommend a medical check-up first and can plan flight or helicopter options to reduce travel strain." },
  { question: "Is Muktinath accessible by road?", answer: "Yes, via Pokhara, Beni and Jomsom. Road conditions vary with season and weather." },
  { question: "Can Muktinath be reached by flight?", answer: "Yes. Flights operate from Pokhara to Jomsom, followed by a road transfer to Muktinath, subject to weather." },
  { question: "Can I book a Muktinath helicopter tour?", answer: "Yes. Helicopter tours operate from Pokhara or Kathmandu, subject to weather and availability." },
  { question: "What is the best time for Muktinath?", answer: "Spring (March–May) and autumn (September–November) are the most popular; winter can be cold and the monsoon can disrupt roads and flights." },
  { question: "What is the best time for Gosainkunda?", answer: "Gosainkunda is seasonal and weather-sensitive. The Janai Purnima period is the main pilgrimage time; we advise on conditions for your dates." },
  { question: "Is Pathibhara a high-altitude pilgrimage?", answer: "Yes. The shrine lies at around 3,790 m and is reached by a steep walk, so good health and careful planning are essential." },
  { question: "What is the difference between Hindu and Buddhist pilgrimage sites in Nepal?", answer: "Hindu sites centre on temples of Shiva, Vishnu and the goddess; Buddhist sites include stupas, monasteries and places linked to the Buddha. Several, like Muktinath and Swayambhunath, are sacred to both." },
  { question: "Can I combine Pashupatinath, Muktinath and Lumbini?", answer: "Yes — it is one of our most requested circuits, usually over 8–10 days." },
  { question: "Can I visit Janakpur and Lumbini together?", answer: "Yes, by road across the Terai or with domestic flights where suitable." },
  { question: "Are private pilgrimage tours available?", answer: "Yes. Private tours with your own vehicle and schedule are available." },
  { question: "Are group pilgrimage tours available?", answer: "Yes. We arrange journeys for small and large groups." },
  { question: "Can Karvaahh arrange hotels and transportation?", answer: "Yes — hotels, vehicles, domestic flights and helicopter services, as per your package." },
  { question: "Are flights included in pilgrimage packages?", answer: "Only in flight-based packages. Inclusions are confirmed in writing before booking." },
  { question: "Are permits included?", answer: "Applicable permits are arranged where included in your package; requirements vary by destination and nationality." },
  { question: "What happens if weather affects the itinerary?", answer: "Safety comes first. We adjust the plan where possible; costs from weather delays follow the package and operator terms." },
  { question: "Can I customize the duration?", answer: "Yes. Every itinerary can be shortened or extended." },
  { question: "Can I request a senior-friendly itinerary?", answer: "Yes. We plan shorter travel days, comfortable hotels and suitable transport, and advise honestly on high-altitude destinations." },
];

/* ---------- Related links (existing routes only) ---------- */

export const RELATED = [
  { title: "Pashupatinath Pilgrimage", text: "Nepal's most sacred Shiva temple in depth.", href: "/spiritual-journeys/pashupatinath", image: I.pashupatinath },
  { title: "Muktinath Helicopter Tour", text: "Darshan at Muktinath by helicopter.", href: "/activities/helicopter-tours/muktinath-temple", image: I.muktinath },
  { title: "Gosaikunda Helicopter Tour", text: "Fly to the sacred lake from Kathmandu.", href: "/activities/helicopter-tours/gosaikunda", image: I.gosainkunda },
  { title: "Kailash Mansarovar Yatra", text: "The great Himalayan yatra via Nepal.", href: "/activities/helicopter-tours/kailash-mansarovar", image: kailash },
  { title: "Char Dham Yatra", text: "Yamunotri, Gangotri, Kedarnath and Badrinath.", href: "/activities/char-dham-yatra", image: I.pashupatinathAarati },
  { title: "Lumbini Province", text: "Buddhist heritage and western Nepal.", href: "/destinations/lumbini-province", image: I.monasticZone },
  { title: "Madhesh Province", text: "Janakpur and the Mithila heartland.", href: "/destinations/madhesh-province", image: I.janakiTemple },
  { title: "Mountain Scenic Flight", text: "See Everest from the sky in about an hour.", href: "/activities/domestic-flights/mountain-scenic", image: everestSunset },
];

/* ---------- SEO ---------- */

export const SEO = {
  title: "Nepal Pilgrimage Tours & Spiritual Yatra Packages | Karvaahh",
  socialTitle: "Nepal Pilgrimage Tours – Discover the Sacred Soul of Nepal",
  description:
    "Explore Nepal pilgrimage tours covering Pashupatinath, Muktinath, Lumbini, Janakpur, Manakamana, Pathibhara, Gosainkunda and sacred Himalayan destinations. Customize your spiritual journey with Karvaahh.",
  keywords: [
    "Nepal Pilgrimage Tours",
    "Nepal Spiritual Tours",
    "Nepal Religious Tours",
    "Nepal Hindu Pilgrimage Tour",
    "Nepal Buddhist Pilgrimage Tour",
    "Pashupatinath Tour",
    "Muktinath Yatra",
    "Lumbini Buddhist Tour",
    "Janakpur Tour Package",
    "Nepal Yatra Package",
    "Nepal Pilgrimage Package from India",
    "Customized Nepal Pilgrimage Packages",
  ],
  ogImage: I.pashupatinath,
};

/* ---------- Manakamana feature (sample itineraries) ---------- */

export const MANAKAMANA = {
  title: "Manakamana — The Goddess of Wishes",
  intro: "Devotees believe Goddess Manakamana fulfils heartfelt wishes. The temple sits on a ridge above the Trishuli river, reached by cable car from Kurintar where operating — or on foot by the old trail.",
  combos: [
    { id: "ktm", label: "+ Kathmandu", packageId: "manakamana-kathmandu", steps: ["Kathmandu temple darshan", "Drive to Kurintar, cable car to Manakamana", "Darshan and return to Kathmandu"] },
    { id: "pokhara", label: "+ Pokhara", packageId: "manakamana-pokhara", steps: ["Kathmandu to Kurintar", "Manakamana darshan by cable car", "Continue to Pokhara; Taal Barahi and Bindhyabasini"] },
    { id: "chitwan", label: "+ Chitwan", packageId: "manakamana-chitwan", steps: ["Manakamana darshan by cable car", "Devghat confluence", "Chitwan's lowland villages and forests"] },
    { id: "lumbini", label: "+ Lumbini", packageId: "manakamana-lumbini", steps: ["Manakamana darshan by cable car", "Drive through the Terai", "Lumbini: Maya Devi Temple and Monastic Zone"] },
  ],
  note: "Sample itineraries. Cable car operation, timings and road conditions are confirmed for your dates.",
};
