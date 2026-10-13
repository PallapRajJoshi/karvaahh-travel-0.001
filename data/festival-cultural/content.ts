/* ============================================================
   NEPAL FESTIVAL & CULTURAL TOURS — PAGE CONTENT
   ------------------------------------------------------------
   Destinations, experiences, packages, itinerary concepts,
   etiquette, seasons, FAQ, related links and SEO for
   /packages/nepal/festival-cultural-tours.

   Destination links point only at pages that exist. Packages are
   reused from the Nepal pilgrimage collection (data/pilgrimage)
   — none are invented here. Itineraries are customisable
   concepts, not products: no durations or transport are implied.
   ============================================================ */

import type { RelatedTour } from "@/components/activities/experience/product-types";
import type { CulturalDestination, CulturalExperience, FeaturedPackageRef, ItineraryConcept } from "./types";
import * as I from "./images";

export const PAGE_PATH = "/packages/nepal/festival-cultural-tours";
export const PAGE_TITLE = "Nepal Festival & Cultural Tours";

export const SEO = {
  title: "Nepal Festival & Cultural Tours | Dashain, Tihar, Indra Jatra & Heritage Journeys | Karvaahh",
  socialTitle: "Nepal Festival & Cultural Tours — Karvaahh Travels",
  description:
    "Experience Nepal's festivals and living heritage with Karvaahh: Dashain, Tihar, Indra Jatra and Bisket Jatra, Kathmandu Valley's Durbar Squares, Lumbini, Janakpur, Tharu villages and customised cultural tours.",
  keywords: [
    "Nepal festival tours",
    "Nepal cultural tours",
    "Dashain Tihar tour Nepal",
    "Indra Jatra Kathmandu",
    "Bisket Jatra Bhaktapur",
    "Kathmandu Valley heritage tour",
    "Newar culture tour",
    "Lumbini Buddhist heritage tour",
    "Janakpur Mithila culture",
    "Tharu cultural experience",
  ],
  ogImage: { src: I.krishnaMandir.src, alt: I.krishnaMandir.alt },
};

/* ---------- Living cultural heritage (existing destination pages only) ---------- */

const BAGMATI = "/destinations/bagmati-province";
const d = (x: Omit<CulturalDestination, "active" | "linkLabel"> & { linkLabel?: string }): CulturalDestination => ({ linkLabel: "Explore Destination", active: true, ...x });

export const DESTINATIONS: CulturalDestination[] = [
  d({
    id: "kathmandu",
    name: "Kathmandu & Swayambhunath",
    region: "Kathmandu Valley",
    text: "Kathmandu's old royal square hosts Indra Jatra and the home of the living goddess Kumari. Above the city, Swayambhunath's stupa has watched over the valley for centuries; Boudhanath, one of the world's largest stupas, sits to the east.",
    tags: ["Durbar Square", "Stupas", "Indra Jatra"],
    image: I.swayambhuStupa,
    href: BAGMATI,
  }),
  d({
    id: "patan",
    name: "Patan Durbar Square",
    region: "Lalitpur, Kathmandu Valley",
    text: "A city of artisans, where the stone Krishna Mandir stands among palace courtyards and metalworkers' workshops. Patan is home to the Rato Machhindranath chariot festival.",
    tags: ["Newar crafts", "Krishna Mandir", "Chariot festival"],
    image: I.krishnaMandir,
    href: BAGMATI,
  }),
  d({
    id: "bhaktapur",
    name: "Bhaktapur Durbar Square",
    region: "Bhaktapur, Kathmandu Valley",
    text: "Brick lanes, potters' squares and the five-tiered Nyatapola temple make Bhaktapur the valley's best-preserved old town. It is the stage for Bisket Jatra each spring.",
    tags: ["Pottery Square", "Nyatapola", "Bisket Jatra"],
    image: I.nyatapola,
    href: BAGMATI,
  }),
  d({
    id: "pashupatinath",
    name: "Pashupatinath Temple",
    region: "Kathmandu",
    text: "Nepal's most sacred Hindu temple on the banks of the Bagmati. Evening aarati is open to all to watch, while the main temple is entered by Hindus only.",
    tags: ["Evening aarati", "Shiva temple", "Teej & Shivaratri"],
    image: I.pashupatiAarati,
    href: "/spiritual-journeys/pashupatinath",
    linkLabel: "Explore Pashupatinath",
  }),
  d({
    id: "lumbini",
    name: "Lumbini",
    region: "Rupandehi, Lumbini Province",
    text: "The birthplace of the Buddha, with the Maya Devi Temple, the Ashoka Pillar and a monastic zone built by Buddhist communities from many countries.",
    tags: ["Buddhist heritage", "Monasteries", "Buddha Jayanti"],
    image: I.mayaDevi,
    href: "/destinations/lumbini-province",
  }),
  d({
    id: "janakpur",
    name: "Janakpur",
    region: "Dhanusha, Madhesh Province",
    text: "The city of Sita and the heart of Mithila culture. Janaki Mandir glows at night, homes carry Mithila wall art, and the ponds come alive during Chhath.",
    tags: ["Janaki Mandir", "Mithila art", "Chhath"],
    image: I.janakiNight,
    href: "/destinations/madhesh-province",
  }),
  d({
    id: "bandipur",
    name: "Bandipur",
    region: "Tanahun, Gandaki Province",
    text: "A traffic-free Newar trading town on a ridge, with old merchant houses, a lively bazaar street and wide Himalayan views at dawn.",
    tags: ["Hill town", "Newar houses", "Himalayan views"],
    image: I.bandipur,
    href: "/destinations/gandaki-province",
  }),
  d({
    id: "tansen",
    name: "Tansen",
    region: "Palpa, Lumbini Province",
    text: "A hill town of Newar heritage known for its carved temples, steep lanes, Rani Mahal and the traditional dhaka weaving of Palpa.",
    tags: ["Newar heritage", "Dhaka weaving", "Hill town"],
    image: I.tansen,
    href: "/destinations/lumbini-province",
  }),
  d({
    id: "tharu",
    name: "Tharu Villages",
    region: "Bardiya, Dang & Chitwan, Terai",
    text: "Meet Tharu communities in the western and central Terai: mud-walled homes, community dances, traditional food and Maghi, the Tharu New Year.",
    tags: ["Tharu dance", "Village life", "Maghi"],
    image: I.tharuDance,
    href: "/destinations/lumbini-province",
  }),
  d({
    id: "himalayan-villages",
    name: "Himalayan Villages & Monasteries",
    region: "Gandaki & the high Himalaya",
    text: "Stone villages of Gurung and Thakali communities, monasteries in Mustang, and Losar celebrations in the mountains. Some areas, such as Upper Mustang, need special permits.",
    tags: ["Gurung villages", "Monasteries", "Losar"],
    image: I.mustangMonastery,
    href: "/destinations/gandaki-province",
  }),
];

/* ---------- Cultural experiences beyond festivals ---------- */

export const EXPERIENCES: CulturalExperience[] = [
  { id: "heritage-walks", title: "Heritage Walks", text: "Explore courtyards, historic squares, temples, stupas and old neighbourhoods with a local guide.", where: "Kathmandu, Patan, Bhaktapur, Bandipur", image: I.patanPalace, art: "royal" },
  { id: "architecture", title: "Traditional Architecture", text: "Discover Newar woodcarving, pagoda temples, royal palaces, stepwells and traditional town planning.", where: "Kathmandu Valley, Tansen, Bandipur", image: I.palaceCourtyard, art: "ochre" },
  { id: "monasteries", title: "Monastery & Spiritual Experiences", text: "Learn about Buddhist monasteries, prayer rituals and meditation traditions, always following the community's guidance.", where: "Boudhanath, Lumbini, Mustang", image: I.mustangMonastery, art: "monastery" },
  { id: "food", title: "Local Food Experiences", text: "Dal bhat, momos, Newari feasts, Thakali meals, sel roti and regional specialties, plus visits to local markets.", where: "Across Nepal — dishes vary by region", image: I.cuisine, art: "saffron" },
  { id: "music-dance", title: "Music & Traditional Dance", text: "Hear local drums and folk songs, and watch masked dances or community performances where they are being held.", where: "Where and when communities perform", image: I.courtyardDance, art: "crimson" },
  { id: "handicrafts", title: "Traditional Handicrafts", text: "Pottery, woodcarving, metalwork, dhaka weaving, paubha and thangka painting, and Mithila art.", where: "Bhaktapur, Patan, Tansen, Janakpur", image: I.mithilaArt, art: "holi" },
  { id: "homestays", title: "Village & Homestay Experiences", text: "Stay with local families, share home-cooked meals and see daily life and regional customs first-hand.", where: "Selected hill, Himalayan and Terai villages", image: I.tamangVillage, art: "forest" },
  { id: "photography", title: "Photography & Storytelling", text: "Capture architecture, crafts, landscapes and public celebrations — asking permission before photographing people.", where: "Everywhere, with sensitivity", image: I.nyatapola, art: "dusk" },
];

/* ---------- Featured packages (reused from the pilgrimage collection) ---------- */

export const FEATURED_PACKAGES: FeaturedPackageRef[] = [
  { id: "ktm-spiritual-3n4d", highlights: ["Krishna Mandir & Kumbheshwar in Patan", "Changu Narayan's ancient temple", "Namobuddha monastery"], tourType: "Kathmandu Valley heritage" },
  { id: "ktm-buddhist-lumbini", highlights: ["Swayambhunath & Boudhanath stupas", "Kopan Monastery", "The Buddha's birthplace"], tourType: "Buddhist heritage" },
  { id: "lumbini-circuit", highlights: ["Maya Devi Temple & Monastic Zone", "Ancient Kapilavastu at Tilaurakot", "Ramagrama & Devdaha"], tourType: "Buddhist heritage" },
  { id: "janakpur-darshan", highlights: ["Janaki Mandir", "Vivah Mandap", "Mithila town life"], tourType: "Mithila & Janakpur culture" },
  { id: "pashupati-janakpur-lumbini-7n8d", highlights: ["Hindu & Buddhist heritage in one trip", "Kathmandu, Mithila & the Terai"], tourType: "Custom cultural journey" },
];

/* Tour types offered in the enquiry form. */
export const TOUR_TYPES = [
  "Festival tour",
  "Kathmandu Valley heritage",
  "Buddhist heritage",
  "Mithila & Janakpur culture",
  "Tharu culture & nature",
  "Himalayan villages & monasteries",
  "Custom cultural journey",
];

/* ---------- Customisable itinerary concepts (not products) ---------- */

export const ITINERARIES: ItineraryConcept[] = [
  {
    id: "valley-heritage",
    title: "Kathmandu Valley Heritage Journey",
    theme: "Newar cities, stupas and temples",
    stops: [
      { name: "Kathmandu Durbar Square", note: "Old royal square & Kumari Ghar" },
      { name: "Swayambhunath", note: "Hilltop stupa above the valley" },
      { name: "Patan", note: "Krishna Mandir & artisan workshops" },
      { name: "Bhaktapur", note: "Nyatapola & Pottery Square" },
      { name: "Boudhanath", note: "Evening kora around the stupa" },
    ],
    image: I.palaceCourtyard,
    tourType: "Kathmandu Valley heritage",
  },
  {
    id: "buddhist-trail",
    title: "Buddhist Heritage Trail",
    theme: "Kathmandu's stupas to the Buddha's birthplace",
    stops: [
      { name: "Swayambhunath", note: "One of the valley's oldest stupas" },
      { name: "Boudhanath", note: "Monasteries & butter lamps" },
      { name: "Lumbini", note: "Maya Devi Temple & Sacred Garden" },
      { name: "Monastic Zone", note: "Monasteries from many nations" },
      { name: "Tilaurakot", note: "Ruins of ancient Kapilavastu" },
    ],
    image: I.monasticZone,
    tourType: "Buddhist heritage",
  },
  {
    id: "mithila",
    title: "Mithila Culture & Janakpur",
    theme: "Ramayana heritage and living folk art",
    stops: [
      { name: "Janaki Mandir", note: "Temple of Sita, lit at night" },
      { name: "Vivah Mandap", note: "Site linked to Ram and Sita's wedding" },
      { name: "Mithila art", note: "Painting traditions of the region" },
      { name: "Dhanushadham", note: "Ramayana pilgrimage site" },
    ],
    image: I.janakiDay,
    tourType: "Mithila & Janakpur culture",
  },
  {
    id: "festival-season",
    title: "Festival Season in the Kathmandu Valley",
    theme: "Timed around Dashain, Tihar or a valley jatra",
    stops: [
      { name: "Kathmandu", note: "Festival-day atmosphere in the old city" },
      { name: "Patan", note: "Courtyards & temple rituals" },
      { name: "Bhaktapur", note: "Old-town celebrations" },
      { name: "Pashupatinath", note: "Evening aarati" },
    ],
    image: I.pashupatiAarati,
    tourType: "Festival tour",
  },
  {
    id: "village-food",
    title: "Village Culture & Traditional Food",
    theme: "Hill towns, homestays and regional cooking",
    stops: [
      { name: "Bandipur", note: "Newar merchant town" },
      { name: "Gurung villages", note: "Homestay & local hospitality" },
      { name: "Tansen", note: "Dhaka weaving & Newar lanes" },
      { name: "Tharu villages", note: "Terai food & dance" },
    ],
    image: I.ghaleGaun,
    tourType: "Custom cultural journey",
  },
];

/* ---------- Etiquette ---------- */

export type EtiquetteIcon = "shirt" | "footprints" | "camera" | "ban" | "users" | "quiet" | "store" | "recycle" | "greet" | "guide";

export const ETIQUETTE: { icon: EtiquetteIcon; title: string; text: string }[] = [
  { icon: "shirt", title: "Dress modestly", text: "Cover shoulders and knees at temples, monasteries and religious ceremonies." },
  { icon: "footprints", title: "Remove footwear", text: "Take off shoes where asked, and leather items at some Hindu temples." },
  { icon: "camera", title: "Ask before photographing", text: "Always ask before photographing people, rituals or ceremonies — and accept a no." },
  { icon: "ban", title: "Respect restricted areas", text: "Some inner sanctums are open only to followers of the faith. Follow the signs." },
  { icon: "users", title: "Follow local guidance", text: "Crowds can be dense during festivals. Keep to the routes stewards and police indicate." },
  { icon: "quiet", title: "Don't interrupt worship", text: "Give worshippers space, keep your voice low and walk clockwise around stupas." },
  { icon: "store", title: "Support local hands", text: "Choose local guides, artisans, homestays and community-run businesses." },
  { icon: "recycle", title: "Leave no trace", text: "Reduce plastic, carry your waste and respect shared public spaces." },
  { icon: "greet", title: "Learn a greeting", text: "A warm “Namaste” with palms together opens doors everywhere." },
  { icon: "guide", title: "Heed event arrangements", text: "Organisers set timings, barriers and safety rules — they always come first." },
];

/* ---------- Best time (festivals are matched by month from the festival data) ---------- */

export const SEASONS: { id: string; name: string; months: number[]; window: string; text: string; tone: "autumn" | "winter" | "spring" | "monsoon" }[] = [
  { id: "autumn", name: "Autumn", months: [9, 10, 11], window: "September – November", text: "Nepal's main festival season in most years, with Dashain and Tihar, clear skies and comfortable weather. Book early: families travel home and hotels fill.", tone: "autumn" },
  { id: "winter", name: "Winter", months: [12, 1, 2], window: "December – February", text: "Cool, dry days that suit heritage walks. Maghi in the Terai and several Losar celebrations fall in this window; Himalayan villages get cold.", tone: "winter" },
  { id: "spring", name: "Spring", months: [3, 4, 5], window: "March – May", text: "Holi, Nepali New Year, Bisket Jatra, Buddha Jayanti and Patan's chariot festival — depending on the calendar — with warm days and rhododendrons in the hills.", tone: "spring" },
  { id: "monsoon", name: "Monsoon", months: [6, 7, 8], window: "June – August", text: "Gai Jatra and Teej often fall at the end of the monsoon. Rain can disrupt roads and flights, but the valley's festivals continue.", tone: "monsoon" },
];

/* ---------- FAQ ---------- */

export const FAQS = [
  {
    question: "What are the most important festivals celebrated in Nepal?",
    answer:
      "Dashain and Tihar are the most widely celebrated nationwide. Holi, Teej, Chhath and Buddha Jayanti are also major, alongside Newar festivals such as Indra Jatra, Bisket Jatra, Gai Jatra and Rato Machhindranath Jatra, Maghi for the Tharu community and the Losar New Years of Himalayan communities.",
  },
  {
    question: "When is the best time to experience Nepal's festivals?",
    answer:
      "Autumn (September–November) is the main festival season in most years, with Dashain, Tihar and Chhath. Spring brings Holi, Bisket Jatra and Buddha Jayanti, and the late monsoon brings Teej, Gai Jatra and Indra Jatra. The best time depends on the festival you want to see.",
  },
  {
    question: "Do festival dates change every year?",
    answer:
      "Yes. Most festivals follow the lunar calendar and others the Nepali solar calendar, so their Gregorian dates move each year. We confirm the current year's dates with you before planning.",
  },
  {
    question: "Which destinations are best for cultural tours?",
    answer:
      "The Kathmandu Valley — Kathmandu, Patan and Bhaktapur — is the richest starting point. Lumbini, Janakpur, Bandipur, Tansen, Tharu villages in the Terai and Himalayan villages with monasteries each add a distinct culture.",
  },
  {
    question: "Can travelers experience Buddhist and Hindu heritage in one trip?",
    answer:
      "Yes. In the Kathmandu Valley, Hindu temples and Buddhist stupas stand within a few kilometres of each other, and journeys such as Kathmandu – Janakpur – Lumbini combine both traditions.",
  },
  {
    question: "What should visitors know before attending a religious ceremony?",
    answer:
      "Dress modestly, remove footwear where asked, keep your voice low, ask before taking photos and never enter restricted areas. Some temples admit only followers of the faith to their inner sanctums. Your guide will explain local customs.",
  },
  {
    question: "Can I book a customized festival tour?",
    answer:
      "Yes. Tell us which festival or region interests you, your dates and travel style, and we will design a journey around it. Festival activities are public events, so we cannot guarantee access to specific ceremonies.",
  },
  {
    question: "Are traditional food and handicraft experiences available?",
    answer:
      "Yes, in many places — for example Newari food in the Kathmandu Valley, pottery in Bhaktapur, metalwork in Patan, dhaka weaving in Palpa and Mithila art around Janakpur. Availability depends on the destination and season.",
  },
  {
    question: "Can families participate in cultural tours?",
    answer:
      "Yes. Heritage walks, craft visits and food experiences suit all ages. During large festivals crowds can be dense, so we plan pace, viewpoints and rest stops with children and seniors in mind.",
  },
  {
    question: "How can I enquire about a festival or cultural package with Karvaahh Travels?",
    answer:
      "Use the enquiry button on this page, message us on WhatsApp or call our Nepal team. Share your travel dates, group size and interests, and we will reply with a suggested plan and quote.",
  },
];

/* ---------- Related ---------- */

export const RELATED: RelatedTour[] = [
  { title: "Culture & Festival Experiences", text: "Festivals, communities and hands-on cultural activities across Nepal.", href: "/activities/culture-festival-experiences", image: I.courtyardDance },
  { title: "Nepal Spiritual & Pilgrimage Tours", text: "Temples, stupas and sacred sites from Pashupatinath to Muktinath.", href: "/packages/nepal/spiritual-pilgrimage-tours", image: I.pashupatiShrines },
  { title: "Madhesh Province", text: "Janakpur, Mithila art and the culture of the eastern Terai.", href: "/destinations/madhesh-province", image: I.mithilaArt },
  { title: "Lumbini Province", text: "The Buddha's birthplace, Tansen and Tharu villages of the west.", href: "/destinations/lumbini-province", image: I.monasticZone },
];
