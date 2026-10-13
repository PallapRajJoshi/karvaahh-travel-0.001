/* ============================================================
   SPIRITUAL & PILGRIMAGE TOURS (NEPAL + INDIA) — PAGE CONTENT
   ------------------------------------------------------------
   Content for /packages/spiritual-pilgrimage, the umbrella page
   for Karvaahh's sacred journeys in Nepal and India.

   ACCURACY RULES (keep when editing):
   - Links point only at pages that exist in this project.
   - Nepal packages are reused from data/pilgrimage; India packages
     mirror the facts already published on their own pages. No
     package, price, duration or inclusion is invented here.
   - Beliefs are described as tradition, not fact.
   - No opening dates, permit rules or access are guaranteed.
   ============================================================ */

import type { RelatedTour } from "@/components/activities/experience/product-types";
import { itineraryOptions } from "@/data/char-dham/content";
import type { Circuit, Experience, Faq, GuideBlock, ItineraryPreview, NepalPackageRef, SacredCategoryId, SacredPlace } from "./types";
import * as I from "./images";

export const PAGE_PATH = "/packages/spiritual-pilgrimage";
export const PAGE_TITLE = "Spiritual & Pilgrimage Tours";

export const SEO = {
  title: "Spiritual & Pilgrimage Tours in Nepal & India | Pashupatinath, Muktinath, Lumbini, Char Dham | Karvaahh",
  socialTitle: "Spiritual & Pilgrimage Tours — Karvaahh Travels",
  description:
    "Sacred journeys across Nepal and India with Karvaahh: Pashupatinath, Muktinath, Lumbini, Janakpur and Manakamana, the Char Dham, Haridwar, Rishikesh and Varanasi. Customised pilgrimage tours for families, seniors and groups.",
  keywords: [
    "spiritual tours Nepal India",
    "pilgrimage tour packages",
    "Nepal pilgrimage tour",
    "Pashupatinath Muktinath tour",
    "Lumbini Buddhist pilgrimage",
    "Char Dham Yatra package",
    "Kedarnath Badrinath yatra",
    "Haridwar Rishikesh yatra",
    "Buddhist heritage tour Nepal",
  ],
  ogImage: { src: I.mustangMonastery.src, alt: I.mustangMonastery.alt },
};

const NEPAL_HUB = "/packages/nepal/spiritual-pilgrimage-tours";
const CHAR_DHAM = "/activities/char-dham-yatra";

/* ============================================================
   CATEGORY FILTERS (labels; membership lives on each place)
   ============================================================ */

export const CATEGORIES: { id: SacredCategoryId | "all"; label: string }[] = [
  { id: "all", label: "All Pilgrimages" },
  { id: "hindu", label: "Hindu Sacred Sites" },
  { id: "buddhist", label: "Buddhist Heritage" },
  { id: "himalayan", label: "Himalayan Shrines" },
  { id: "temple-circuit", label: "Temple Circuits" },
  { id: "meditation", label: "Meditation & Monasteries" },
  { id: "nepal", label: "Nepal Pilgrimage" },
  { id: "india", label: "India Pilgrimage" },
];

/* ============================================================
   SACRED PLACES
   ============================================================ */

const place = (x: Omit<SacredPlace, "active">): SacredPlace => ({ active: true, ...x });

export const PLACES: SacredPlace[] = [
  /* ---------- Nepal: Hindu ---------- */
  place({
    id: "pashupatinath",
    name: "Pashupatinath Temple",
    location: "Kathmandu, Nepal",
    country: "Nepal",
    text: "Nepal's most important Shiva temple stands on the banks of the Bagmati River in the heart of the Kathmandu Valley. Its riverside ghats, stone shrines and evening aarati draw devotees from across Nepal and India throughout the year.",
    significance: "Dedicated to Lord Shiva as Pashupati and part of the Kathmandu Valley World Heritage Site.",
    tags: ["Hindu Pilgrimage", "Temple Visit", "Evening Aarati"],
    categories: ["hindu", "temple-circuit", "nepal"],
    image: I.pashupatinath,
    link: { href: "/spiritual-journeys/pashupatinath", label: "Explore Pashupatinath" },
    note: "Entry to the main temple courtyard is restricted to Hindus; visitors of all faiths can view the complex from across the river.",
  }),
  place({
    id: "muktinath",
    name: "Muktinath Temple",
    location: "Mustang, Nepal",
    country: "Nepal",
    text: "High in the Mustang region at approximately 3,710 m, Muktinath is revered by both Hindus and Buddhists. Pilgrims bathe beneath its 108 water spouts and visit the shrine of the eternal flame, with the Himalaya all around.",
    significance: "A Vishnu temple for Hindus and a sacred site of Guru Rinpoche for Buddhists.",
    tags: ["Hindu Pilgrimage", "Buddhist Heritage", "Himalayan Shrine"],
    categories: ["hindu", "buddhist", "himalayan", "nepal"],
    image: I.muktinath,
    link: { href: "/activities/helicopter-tours/muktinath-temple", label: "Explore Muktinath" },
    note: "High altitude and weather-dependent; reached by road, flight + road, or helicopter.",
  }),
  place({
    id: "janaki-mandir",
    name: "Janaki Mandir",
    location: "Janakpur, Nepal",
    country: "Nepal",
    text: "The grand white temple of Goddess Sita rises over the historic city of Janakpur in the Terai. Together with Vivah Mandap and the city's sacred ponds, it is at the heart of the Ramayana and Mithila tradition.",
    significance: "Associated in tradition with the birthplace of Sita and her marriage to Lord Rama.",
    tags: ["Hindu Pilgrimage", "Temple Visit", "Ramayana Heritage"],
    categories: ["hindu", "temple-circuit", "nepal"],
    image: I.janakiMandir,
    link: { href: "/destinations/madhesh-province", label: "Explore Madhesh" },
  }),
  place({
    id: "manakamana",
    name: "Manakamana Temple",
    location: "Gorkha District, Nepal",
    country: "Nepal",
    text: "On a forested ridge above the Trishuli River, the temple of Goddess Bhagwati is loved as the goddess who fulfils wishes. Most pilgrims arrive by cable car where it is operating, with sweeping views of the hills.",
    significance: "A much-loved Devi temple, traditionally visited to make and fulfil vows.",
    tags: ["Hindu Pilgrimage", "Temple Visit", "Cable Car"],
    categories: ["hindu", "temple-circuit", "nepal"],
    image: I.manakamanaCableCar,
    link: { href: "/destinations/gandaki-province", label: "Explore Gandaki" },
  }),
  place({
    id: "pathibhara",
    name: "Pathibhara Devi Temple",
    location: "Taplejung, eastern Nepal",
    country: "Nepal",
    text: "A hilltop shrine at approximately 3,790 m in the Kanchenjunga foothills, sacred to Hindus and the Limbu (Kirat) community. Reaching it requires a steep walk, rewarded with prayer flags and mountain views.",
    significance: "A revered Devi shrine where devotees pray to Goddess Pathibhara.",
    tags: ["Hindu Pilgrimage", "Himalayan Shrine", "Hilltop Temple"],
    categories: ["hindu", "himalayan", "nepal"],
    image: I.pathibhara,
    link: { href: "/destinations/koshi-province", label: "Explore Koshi" },
    note: "High altitude with a steep walk; suited to fit travellers.",
  }),
  place({
    id: "swargadwari",
    name: "Swargadwari",
    location: "Pyuthan, western Nepal",
    country: "Nepal",
    text: "Known as the 'gate to heaven', this hilltop ashram and temple sits amid the forested hills of western Nepal. It is a major pilgrimage of the region, especially around full-moon observances.",
    significance: "An important Hindu pilgrimage and ashram of western Nepal.",
    tags: ["Hindu Pilgrimage", "Hilltop Temple", "Ashram"],
    categories: ["hindu", "nepal"],
    image: I.swargadwari,
    link: { href: "/destinations/lumbini-province", label: "Explore Lumbini Province" },
    note: "Remote road access followed by a walk; planned on request.",
  }),

  /* ---------- Nepal: Buddhist ---------- */
  place({
    id: "lumbini",
    name: "Lumbini",
    location: "Rupandehi, Nepal",
    country: "Nepal",
    text: "The birthplace of Siddhartha Gautama, the Buddha, and a UNESCO World Heritage Site. Pilgrims visit the Mayadevi Temple, the Sacred Garden and Puskarini pond, the Ashoka Pillar and the monasteries of the international Monastic Zone.",
    significance: "One of the most sacred places in the Buddhist world.",
    tags: ["Buddhist Heritage", "World Heritage", "Monasteries"],
    categories: ["buddhist", "meditation", "nepal"],
    image: I.mayaDevi,
    link: { href: "/destinations/lumbini-province", label: "Explore Lumbini" },
  }),
  place({
    id: "boudhanath",
    name: "Boudhanath Stupa",
    location: "Kathmandu, Nepal",
    country: "Nepal",
    text: "One of the largest stupas in Nepal, its great white dome is circled at dawn and dusk by pilgrims turning prayer wheels. Monasteries ring the square, making it a living centre of Tibetan Buddhist practice.",
    significance: "A major Buddhist pilgrimage site and part of the Kathmandu Valley World Heritage Site.",
    tags: ["Buddhist Heritage", "Stupa", "Prayer Wheels"],
    categories: ["buddhist", "meditation", "temple-circuit", "nepal"],
    image: I.boudhanath,
    link: { href: "/destinations/bagmati-province", label: "Explore Kathmandu Valley" },
  }),
  place({
    id: "swayambhunath",
    name: "Swayambhunath Stupa",
    location: "Kathmandu, Nepal",
    country: "Nepal",
    text: "An ancient hilltop stupa watching over the Kathmandu Valley, reached by a long stone stairway. Its shrines are honoured by Buddhists and Hindus alike, reflecting traditions shared across communities.",
    significance: "One of the valley's oldest sacred complexes and part of the World Heritage Site.",
    tags: ["Buddhist Heritage", "Stupa", "Heritage Walk"],
    categories: ["buddhist", "hindu", "temple-circuit", "nepal"],
    image: I.swayambhunath,
    link: { href: "/destinations/bagmati-province", label: "Explore Kathmandu Valley" },
    note: "Many steep steps; a vehicle can reach an upper entrance.",
  }),
  place({
    id: "namobuddha",
    name: "Namo Buddha",
    location: "Kavrepalanchok, Nepal",
    country: "Nepal",
    text: "A peaceful hilltop stupa and monastery a short drive beyond the Kathmandu Valley. It is a quiet place for reflection, with forest walks and Himalayan views on clear days.",
    significance: "Associated with the Jataka story of a prince who offered his body to a starving tigress.",
    tags: ["Buddhist Heritage", "Monastery", "Day Trip"],
    categories: ["buddhist", "meditation", "nepal"],
    image: I.namobuddha,
    link: { href: "/destinations/bagmati-province", label: "Explore Bagmati" },
  }),
  place({
    id: "tengboche",
    name: "Tengboche Monastery",
    location: "Khumbu, Nepal",
    country: "Nepal",
    text: "The great Sherpa monastery of the Khumbu stands at approximately 3,870 m on the Everest trail, facing Ama Dablam and Everest. Visitors usually reach it on a multi-day trek, pausing for its prayers and mountain silence.",
    significance: "The spiritual centre of the Sherpa community in the Everest region.",
    tags: ["Buddhist Heritage", "Monastery", "Himalayan Shrine"],
    categories: ["buddhist", "himalayan", "meditation", "nepal"],
    image: I.tengboche,
    link: { href: "/destinations/koshi-province", label: "Explore Koshi" },
    note: "Reached on a high-altitude trek; acclimatisation required.",
  }),

  /* ---------- India ---------- */
  place({
    id: "kedarnath",
    name: "Kedarnath",
    location: "Rudraprayag, Uttarakhand, India",
    country: "India",
    text: "The stone temple of Lord Shiva stands at approximately 3,580 m at the head of the Mandakini valley. Pilgrims reach it on foot, by pony or palanquin, or by helicopter service where available.",
    significance: "One of the twelve Jyotirlingas and one of the four Char Dham shrines of Uttarakhand.",
    tags: ["Hindu Pilgrimage", "Himalayan Shrine", "Char Dham"],
    categories: ["hindu", "himalayan", "temple-circuit", "india"],
    image: I.kedarnathTemple,
    link: { href: `${CHAR_DHAM}/kedarnath`, label: "Explore Kedarnath" },
    note: "Seasonal: the shrine closes each winter; dates are announced yearly.",
  }),
  place({
    id: "badrinath",
    name: "Badrinath",
    location: "Chamoli, Uttarakhand, India",
    country: "India",
    text: "Dedicated to Lord Vishnu as Badrinarayan, the temple stands on the Alaknanda between the Nar and Narayan ranges. Pilgrims bathe at the Tapt Kund hot spring before darshan.",
    significance: "Traditionally the final Dham of the Char Dham Yatra.",
    tags: ["Hindu Pilgrimage", "Himalayan Shrine", "Char Dham"],
    categories: ["hindu", "himalayan", "temple-circuit", "india"],
    image: I.badrinathTemple,
    link: { href: `${CHAR_DHAM}/badrinath`, label: "Explore Badrinath" },
    note: "Seasonal: the shrine closes each winter; dates are announced yearly.",
  }),
  place({
    id: "gangotri",
    name: "Gangotri",
    location: "Uttarkashi, Uttarakhand, India",
    country: "India",
    text: "The temple of Goddess Ganga stands on the banks of the Bhagirathi among the Garhwal Himalaya. It is reached by road through the beautiful Harsil valley.",
    significance: "Revered as the shrine of the Ganga's source region and the second Dham.",
    tags: ["Hindu Pilgrimage", "Himalayan Shrine", "Char Dham"],
    categories: ["hindu", "himalayan", "temple-circuit", "india"],
    image: I.gangotriTemple,
    link: { href: `${CHAR_DHAM}/gangotri`, label: "Explore Gangotri" },
    note: "Seasonal: the shrine closes each winter; dates are announced yearly.",
  }),
  place({
    id: "yamunotri",
    name: "Yamunotri",
    location: "Uttarkashi, Uttarakhand, India",
    country: "India",
    text: "Set in a narrow Himalayan gorge, the temple of Goddess Yamuna is traditionally the first Dham. Pilgrims walk, ride a pony or take a palanquin from Janki Chatti.",
    significance: "The shrine of the Yamuna and the first stop of the Char Dham Yatra.",
    tags: ["Hindu Pilgrimage", "Himalayan Shrine", "Char Dham"],
    categories: ["hindu", "himalayan", "temple-circuit", "india"],
    image: I.yamunotriTemple,
    link: { href: `${CHAR_DHAM}/yamunotri`, label: "Explore Yamunotri" },
    note: "Seasonal: the shrine closes each winter; dates are announced yearly.",
  }),
  place({
    id: "haridwar",
    name: "Haridwar",
    location: "Uttarakhand, India",
    country: "India",
    text: "Where the Ganga leaves the mountains for the plains, Haridwar's ghats fill each evening for the Ganga Aarti at Har Ki Pauri. It is the traditional gateway to the Char Dham and a pilgrimage in its own right.",
    significance: "One of Hinduism's holiest cities on the Ganga.",
    tags: ["Hindu Pilgrimage", "Ganga Aarti", "Sacred Ghats"],
    categories: ["hindu", "temple-circuit", "india"],
    image: I.haridwar,
    link: { href: "/spiritual-journeys/haridwar-rishikesh-yatra", label: "Explore Haridwar" },
  }),
  place({
    id: "rishikesh",
    name: "Rishikesh",
    location: "Uttarakhand, India",
    country: "India",
    text: "Set in the forested foothills on the Ganga, Rishikesh is known for its ashrams, riverside aarti at Triveni Ghat and quiet places for reflection. Many visitors combine it with Haridwar.",
    significance: "A centre of ashrams, yoga and meditation traditions in the Himalayan foothills.",
    tags: ["Ashrams", "Meditation", "Sacred Ghats"],
    categories: ["hindu", "meditation", "india"],
    image: I.rishikesh,
    link: { href: "/spiritual-journeys/haridwar-rishikesh-yatra", label: "Explore Rishikesh" },
  }),
  place({
    id: "varanasi",
    name: "Varanasi (Kashi)",
    location: "Uttar Pradesh, India",
    country: "India",
    text: "One of India's oldest and most important pilgrimage cities, where life unfolds along the stepped ghats of the Ganga. Darshan at Kashi Vishwanath and the evening Ganga Aarti are central to most visits.",
    significance: "Home of the Kashi Vishwanath Jyotirlinga, part of Karvaahh's 12 Jyotirlinga Yatra.",
    tags: ["Hindu Pilgrimage", "Jyotirlinga", "Sacred Ghats"],
    categories: ["hindu", "temple-circuit", "india"],
    image: I.kashiAarti,
    link: { href: "/spiritual-journeys/12-jyotirlinga-yatra", label: "Explore 12 Jyotirlinga Yatra" },
    note: "Temple approaches are busy; security checks and current temple rules apply.",
  }),
];

/* ============================================================
   CIRCUITS & SACRED TRAILS (themes; status says if packages exist)
   ============================================================ */

export const CIRCUITS: Circuit[] = [
  {
    id: "nepal-hindu",
    title: "Nepal Hindu Pilgrimage Circuit",
    text: "Kathmandu's Shiva temple, the wish-fulfilling goddess of Manakamana, the high sanctuary of Muktinath and the city of Sita in Janakpur — in combinations from five to ten days.",
    stops: ["Pashupatinath", "Manakamana", "Muktinath", "Janaki Mandir"],
    image: I.pashupatiShrines,
    link: { href: `${NEPAL_HUB}#packages`, label: "View Nepal packages" },
    status: "packages",
  },
  {
    id: "buddhist",
    title: "Buddhist Heritage Journey",
    text: "From the great stupas of Kathmandu to Namo Buddha and the Buddha's birthplace at Lumbini, with time for monasteries and quiet reflection.",
    stops: ["Boudhanath", "Swayambhunath", "Namo Buddha", "Lumbini"],
    image: I.monasticZone,
    link: { href: `${NEPAL_HUB}#packages`, label: "View Buddhist packages" },
    status: "packages",
  },
  {
    id: "muktinath",
    title: "Muktinath Pilgrimage",
    text: "Reach the sacred Muktinath region by road, by Pokhara–Jomsom flight and road, or by helicopter. Altitude and mountain weather shape every plan.",
    stops: ["Pokhara", "Jomsom", "Kagbeni", "Muktinath"],
    image: I.muktinathSpouts,
    link: { href: "/activities/helicopter-tours/muktinath-temple", label: "Explore Muktinath tours" },
    status: "packages",
  },
  {
    id: "char-dham",
    title: "Char Dham Yatra",
    text: "The four Himalayan shrines of Uttarakhand — Yamunotri, Gangotri, Kedarnath and Badrinath — by road or helicopter, with sample itineraries to start from.",
    stops: ["Yamunotri", "Gangotri", "Kedarnath", "Badrinath"],
    image: I.charDhamPanorama,
    link: { href: CHAR_DHAM, label: "Explore Char Dham Yatra" },
    status: "packages",
  },
  {
    id: "do-dham",
    title: "Kedarnath & Badrinath Yatra",
    text: "A shorter Do Dham pilgrimage to the abodes of Lord Shiva and Lord Vishnu, with helicopter options for Kedarnath where available.",
    stops: ["Haridwar", "Guptkashi", "Kedarnath", "Badrinath"],
    image: I.kedarnathTemple,
    link: { href: `${CHAR_DHAM}/do-dham`, label: "Explore Do Dham Yatra" },
    status: "packages",
  },
  {
    id: "kathmandu",
    title: "Kathmandu Sacred Heritage Tour",
    text: "The valley's great Hindu and Buddhist sites in an easy, unhurried stay — ideal for seniors, families and first-time visitors.",
    stops: ["Pashupatinath", "Swayambhunath", "Boudhanath", "Patan"],
    image: I.swayambhuHill,
    link: { href: `${NEPAL_HUB}#packages`, label: "View Kathmandu tours" },
    status: "packages",
  },
];

/* ============================================================
   EXPERIENCES BEYOND SIGHTSEEING
   ============================================================ */

export const EXPERIENCES: Experience[] = [
  {
    id: "aarati",
    title: "Evening Aarati by Sacred Rivers",
    text: "Lamps, bells and chanting at dusk. Visitors watch respectfully from the ghats and riverbanks open to the public.",
    where: "Pashupatinath, Haridwar, Rishikesh, Varanasi",
    image: I.kashiAarti,
  },
  {
    id: "stupas",
    title: "Stupas, Prayer Wheels & Sacred Architecture",
    text: "Walk clockwise around great stupas, turn prayer wheels and admire centuries of Newar and Himalayan craftsmanship.",
    where: "Boudhanath, Swayambhunath, Kathmandu Valley",
    image: I.swayambhuHill,
  },
  {
    id: "monasteries",
    title: "Monastery Visits",
    text: "Visit monasteries where visitors are welcome, and where possible observe prayers quietly from the back of the hall.",
    where: "Lumbini, Boudhanath, Mustang, Khumbu",
    image: I.mustangMonastery,
  },
  {
    id: "heritage-walks",
    title: "Heritage Walks in Temple Towns",
    text: "Slow walks through squares, courtyards and lanes where daily worship still shapes the rhythm of life.",
    where: "Patan, Bhaktapur, Janakpur, Varanasi",
    image: I.krishnaMandir,
  },
  {
    id: "nature",
    title: "Peaceful Nature Near Sacred Places",
    text: "Mountain views from Muktinath, forest ridges around Manakamana and lakeside temples in Pokhara bring a quieter kind of reflection.",
    where: "Mustang, Gorkha, Pokhara, Garhwal Himalaya",
    image: I.gosainkunda,
  },
  {
    id: "meditation",
    title: "Meditation & Retreat Experiences",
    text: "Ashram stays and guided meditation are arranged where established centres offer them, as part of our yoga and wellness journeys.",
    where: "Rishikesh, Kathmandu Valley, Lumbini",
    image: I.sacredGarden,
  },
  {
    id: "festivals",
    title: "Religious Festivals & Traditions",
    text: "Maha Shivaratri, Teej, Vivah Panchami and Buddha Jayanti bring sacred places to life. Dates follow the lunar calendar and change every year.",
    where: "Pashupatinath, Janakpur, Lumbini",
    image: I.pashupatinathAarati,
  },
  {
    id: "food",
    title: "Simple Vegetarian Food",
    text: "Many pilgrimage towns serve sattvic and vegetarian meals; we can plan vegetarian meals where your package includes them.",
    where: "Haridwar, Rishikesh, Janakpur, temple towns",
    image: I.janakiTemple,
  },
];

/* ============================================================
   FEATURED PACKAGES
   ------------------------------------------------------------
   Nepal: ids from data/pilgrimage/packages.ts (resolved on the page).
   India: facts as published on each product page.
   ============================================================ */

export const NEPAL_PACKAGES: NepalPackageRef[] = [
  { id: "pashupatinath-darshan", highlights: ["Darshan at Pashupatinath", "Evening aarati on the Bagmati", "Guhyeshwari Temple nearby"], tourType: "Hindu pilgrimage" },
  { id: "ktm-pokhara-muktinath-5n6d", highlights: ["Pashupatinath darshan", "Pokhara's lakeside Taal Barahi", "Muktinath's 108 water spouts"], tourType: "Muktinath yatra" },
  { id: "muktinath-helicopter", highlights: ["Fly to Muktinath, weather permitting", "Ideal when time or mobility is limited", "Same-day or custom itineraries"], tourType: "Muktinath yatra" },
  { id: "pashupati-janakpur-lumbini-7n8d", highlights: ["Shiva at Pashupatinath", "Sita's city of Janakpur", "The Buddha's birthplace at Lumbini"], tourType: "Multi-destination yatra" },
  { id: "buddhist-tour", highlights: ["Boudhanath & Swayambhunath", "Namo Buddha and Pharping", "Lumbini & Tilaurakot"], tourType: "Buddhist pilgrimage" },
  { id: "ktm-spiritual-2n3d", highlights: ["Shiva, Vishnu & Devi temples", "Great stupas of the valley", "Gentle, senior-friendly pace"], tourType: "Hindu pilgrimage" },
];

export const INDIA_PACKAGES = [
  {
    id: "char-dham-road",
    country: "India" as const,
    title: "Char Dham Yatra by Road",
    destinations: ["Haridwar", "Yamunotri", "Gangotri", "Kedarnath", "Badrinath"],
    highlights: ["All four Dhams of Uttarakhand", "Ganga Aarti in Haridwar", "Customised pace and stops"],
    duration: "Sample 9N / 10D",
    transport: "Road (helicopter service at Kedarnath optional)",
    accommodation: "As per selected package",
    meals: "As per selected package",
    image: I.charDhamPanorama,
    href: `${CHAR_DHAM}/by-road`,
    tourType: "Char Dham Yatra",
  },
  {
    id: "char-dham-helicopter",
    country: "India" as const,
    title: "Char Dham Yatra by Helicopter",
    destinations: ["Dehradun", "Yamunotri", "Gangotri", "Kedarnath", "Badrinath"],
    highlights: ["Four Dhams with far less road travel", "Sample circuit from Dehradun", "Availability on request"],
    duration: "Sample 5N / 6D",
    transport: "Helicopter + ground transfers",
    accommodation: "As per selected package",
    meals: "As per selected package",
    image: I.helicopterYatra,
    href: `${CHAR_DHAM}/helicopter`,
    tourType: "Char Dham Yatra",
  },
  {
    id: "do-dham",
    country: "India" as const,
    title: "Do Dham Yatra — Kedarnath & Badrinath",
    destinations: ["Haridwar", "Kedarnath", "Badrinath"],
    highlights: ["The abodes of Shiva and Vishnu", "Shorter Himalayan pilgrimage", "Helicopter options for Kedarnath"],
    duration: "Sample 4N / 5D",
    transport: "Road or helicopter options",
    accommodation: "As per selected package",
    meals: "As per selected package",
    image: I.kedarnathTemple,
    href: `${CHAR_DHAM}/do-dham`,
    tourType: "Do Dham Yatra",
  },
  {
    id: "haridwar-rishikesh",
    country: "India" as const,
    title: "Haridwar & Rishikesh Yatra",
    destinations: ["Haridwar", "Rishikesh"],
    highlights: ["Ganga Aarti at Har Ki Pauri", "Triveni Ghat & ashrams", "Neelkanth Mahadev Temple"],
    duration: "Customisable",
    transport: "Private vehicle",
    accommodation: "Selected hotels, twin or triple sharing",
    meals: "Breakfast and dinner as per selected package",
    image: I.haridwar,
    href: "/spiritual-journeys/haridwar-rishikesh-yatra",
    tourType: "Haridwar & Rishikesh",
  },
];

/* ============================================================
   TRAVEL PLANNING & PILGRIMAGE GUIDE
   ============================================================ */

export const GUIDE: GuideBlock[] = [
  {
    id: "best-time",
    title: "Best Time to Visit",
    icon: "calendar",
    intro: "The right time depends on the destination, season, elevation, weather and the religious calendar.",
    points: [
      "Lower-altitude temples and heritage sites — Kathmandu, Janakpur, Lumbini, Haridwar, Varanasi — are visited throughout the year.",
      "Autumn (Sept–Nov) and spring (Mar–May) usually bring the clearest mountain weather for Muktinath and the Himalaya.",
      "The Char Dham shrines operate seasonally and close each winter; opening dates are announced every year.",
      "Monsoon rain (roughly June–September) can disrupt mountain roads and flights.",
      "Festival dates follow lunar calendars and change annually — we confirm them for your year.",
    ],
  },
  {
    id: "preparation",
    title: "Travel Preparation",
    icon: "luggage",
    intro: "A little preparation makes a pilgrimage calmer and safer.",
    points: [
      "Comfortable walking shoes that slip on and off easily at temples.",
      "Layered, weather-appropriate clothing — mountain shrines are cold even in summer.",
      "Modest clothing covering shoulders and knees for religious sites.",
      "Personal medication, prescriptions and essential travel documents.",
      "Awareness of altitude and physical demands, especially above 3,000 m.",
      "Travel insurance appropriate to your itinerary, including any helicopter or high-altitude travel.",
      "Flexible plans for mountain journeys, which can change with the weather.",
    ],
  },
  {
    id: "etiquette",
    title: "Religious Etiquette",
    icon: "heart",
    intro: "Sacred places are first of all places of worship. Simple courtesies are warmly appreciated.",
    points: [
      "Remove shoes where asked, and sometimes hats and leather items.",
      "Walk clockwise around stupas, prayer wheels and many temples.",
      "Photography is prohibited inside many sanctums — follow signs and ask first.",
      "Some temples admit only followers of the faith to inner areas, such as Pashupatinath's main courtyard; please respect these rules.",
      "Speak quietly, avoid pointing feet towards shrines and do not touch offerings.",
    ],
  },
  {
    id: "permits",
    title: "Permits & Access",
    icon: "file",
    intro: "Requirements depend on the destination, route, protected area and current local regulations.",
    points: [
      "Some regions, such as parts of Mustang and the Everest region, need area or conservation permits.",
      "The Char Dham Yatra may require pilgrim registration set by the Uttarakhand authorities.",
      "Rules change from season to season — we confirm current requirements from official guidance when planning.",
      "Indian nationals do not need a visa for Nepal; other nationalities should check current visa rules.",
    ],
  },
  {
    id: "accessibility",
    title: "Senior Travellers & Accessibility",
    icon: "users",
    intro: "Many older pilgrims travel with us. Terrain, stairs, altitude, walking distances and vehicle access vary by destination.",
    points: [
      "City temples like Pashupatinath and Janaki Mandir are generally easier, though crowds and steps can be tiring.",
      "Manakamana is reached by cable car where operating; Swayambhunath has many steps.",
      "Muktinath, Kedarnath and Pathibhara involve high altitude, and some require walking, pony or palanquin.",
      "Helicopter options can shorten some journeys but depend on weather and operator rules.",
      "Tell us about mobility or health needs and we will suggest a realistic pace — we cannot guarantee accessibility at every site.",
    ],
  },
];

/* ============================================================
   ITINERARY PREVIEWS
   ------------------------------------------------------------
   Char Dham & Do Dham: Karvaahh's published sample itineraries.
   Nepal: suggested outlines built from existing packages' routes,
   clearly labelled as needing confirmation.
   ============================================================ */

const toSteps = (steps: { title: string; text: string }[]) => steps.map((s) => ({ title: s.title.replace(/^Day \d+ · /, ""), text: s.text }));

export const ITINERARIES: ItineraryPreview[] = [
  {
    id: "kathmandu-sacred",
    title: "Kathmandu Temple & Buddhist Heritage",
    status: "suggested",
    duration: "2N / 3D",
    summary: "Based on our Kathmandu Spiritual Tour: the valley's great Hindu and Buddhist sites at a gentle pace.",
    steps: [
      { title: "Arrival in Kathmandu", text: "Hotel check-in; evening aarati at Pashupatinath where time allows." },
      { title: "Pashupatinath, Guhyeshwari & Boudhanath", text: "Morning darshan, then the great stupa of Boudhanath in the afternoon." },
      { title: "Swayambhunath & Budhanilkantha", text: "The hilltop stupa and the reclining Vishnu, then departure." },
    ],
    notice: "Suggested itinerary — the daily plan, hotels and timings are confirmed with you before booking.",
    link: { href: `${NEPAL_HUB}#packages`, label: "View Kathmandu tours" },
  },
  {
    id: "muktinath",
    title: "Kathmandu – Pokhara – Muktinath",
    status: "suggested",
    duration: "5N / 6D",
    summary: "Based on our 5N / 6D package: Pashupatinath, Pokhara's lakeside temples and Muktinath by road or flight + road.",
    steps: [
      { title: "Kathmandu", text: "Arrival and Pashupatinath darshan." },
      { title: "Kathmandu → Pokhara", text: "By road or flight; Taal Barahi on Phewa Lake." },
      { title: "Pokhara → Jomsom", text: "Flight or road into the Kali Gandaki valley, weather permitting." },
      { title: "Muktinath", text: "Darshan at the temple and the 108 water spouts; Kagbeni where time allows." },
      { title: "Return towards Pokhara", text: "Back down the valley by flight or road." },
      { title: "Departure", text: "Onward travel to Kathmandu or the border." },
    ],
    notice: "Suggested itinerary — mountain flights and roads depend on weather; travel times and overnight stops are confirmed for your dates.",
    link: { href: `${NEPAL_HUB}#packages`, label: "View Muktinath packages" },
  },
  {
    id: "do-dham",
    title: "Do Dham — Kedarnath & Badrinath",
    status: "sample",
    duration: "Sample 4N / 5D",
    summary: itineraryOptions.doDham.summary,
    steps: toSteps(itineraryOptions.doDham.steps),
    notice: itineraryOptions.doDham.notice ?? "",
    link: { href: `${CHAR_DHAM}/do-dham`, label: "Full Do Dham details" },
  },
  {
    id: "char-dham-road",
    title: "Char Dham by Road",
    status: "sample",
    duration: "Sample 9N / 10D",
    summary: itineraryOptions.road.summary,
    steps: toSteps(itineraryOptions.road.steps),
    notice: itineraryOptions.road.notice ?? "",
    link: { href: `${CHAR_DHAM}/by-road`, label: "Full Char Dham details" },
  },
];

/* ============================================================
   FAQ
   ============================================================ */

export const FAQS: Faq[] = [
  {
    question: "What are the most important pilgrimage destinations in Nepal?",
    answer:
      "Pashupatinath in Kathmandu, Muktinath in Mustang, Janaki Mandir in Janakpur and Manakamana in Gorkha are among the most visited Hindu sites. Lumbini, Boudhanath and Swayambhunath are the great Buddhist sites. Pathibhara, Swargadwari, Halesi and Gosainkunda are also important regional pilgrimages.",
  },
  {
    question: "Which Buddhist heritage sites can I visit in Nepal?",
    answer:
      "Lumbini, the birthplace of the Buddha, with the Mayadevi Temple, Sacred Garden, Ashoka Pillar and Monastic Zone; Boudhanath and Swayambhunath stupas in Kathmandu; Namo Buddha near the valley; Kapilavastu sites such as Tilaurakot; and monasteries in Mustang and the Khumbu, including Tengboche.",
  },
  {
    question: "Can I combine Hindu and Buddhist pilgrimage destinations?",
    answer:
      "Yes. Many of our Nepal journeys do exactly that — for example Pashupatinath, Janakpur and Lumbini together. Muktinath and Swayambhunath are themselves revered by both Hindus and Buddhists.",
  },
  {
    question: "What is the best time to visit Muktinath?",
    answer:
      "Spring (March–May) and autumn (September–November) usually offer the most settled weather. Muktinath is at approximately 3,710 m, so mountain weather can affect flights and roads at any time. Winter is cold and the monsoon can disrupt travel; we plan around current conditions.",
  },
  {
    question: "Are Himalayan pilgrimage destinations open throughout the year?",
    answer:
      "Not all of them. Kedarnath, Badrinath, Gangotri and Yamunotri close each winter, with opening and closing dates announced every year. Muktinath is visited most of the year but weather can limit access. Lower-altitude temples in Kathmandu, Janakpur, Lumbini, Haridwar and Varanasi are visited year-round.",
  },
  {
    question: "Can senior citizens join pilgrimage tours?",
    answer:
      "Yes, many of our travellers are senior pilgrims. City temples and easier circuits suit most travellers, while high-altitude shrines need more care. We plan a comfortable pace, suggest helicopter or cable-car options where they exist, and recommend consulting a doctor before high-altitude travel.",
  },
  {
    question: "What should I wear when visiting temples and monasteries?",
    answer:
      "Modest clothing that covers shoulders and knees, and shoes that are easy to remove. Some temples ask visitors to remove leather items. Carry warm layers for mountain shrines.",
  },
  {
    question: "Are customized pilgrimage itineraries available?",
    answer:
      "Yes. Every journey can be tailored — destinations, pace, hotels, transport (road, flight or helicopter where available) and dates around festivals or family occasions.",
  },
  {
    question: "Can Nepal and India pilgrimage destinations be combined in one trip?",
    answer:
      "Yes, on request. Common combinations include Janakpur or Lumbini with sites across the border, or a Nepal yatra before or after the Char Dham. Cross-border routes, travel times and documents are planned for your specific itinerary.",
  },
  {
    question: "How can I enquire about a spiritual tour with Karvaahh Travels?",
    answer:
      "Use the Enquire button on any package, message us on WhatsApp, or send your details through our contact page. Share your preferred destinations, dates, number of travellers and any mobility needs, and we will suggest an itinerary and quote.",
  },
];

/* ============================================================
   RELATED
   ============================================================ */

export const RELATED: RelatedTour[] = [
  { title: "Nepal Spiritual & Pilgrimage Tours", text: "Every Nepal sacred site and package, region by region.", href: NEPAL_HUB, image: I.pashupatinath },
  { title: "Char Dham Yatra", text: "Yamunotri, Gangotri, Kedarnath and Badrinath by road or helicopter.", href: CHAR_DHAM, image: I.charDhamPanorama },
  { title: "Kailash Mansarovar Yatra", text: "Mount Kailash and Lake Mansarovar via Nepal.", href: "/spiritual-journeys/kailash-mansarovar", image: I.kailash },
  { title: "Yoga & Wellness Retreats", text: "Meditation and wellness journeys in Nepal and India.", href: "/activities/wellness/yoga-wellness", image: I.sacredGarden },
];
