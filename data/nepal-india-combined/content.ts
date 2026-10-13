/* ============================================================
   NEPAL–INDIA COMBINED TOURS — CONTENT
   ------------------------------------------------------------
   Existing project photos only. Places without a genuine photo
   yet (Bodh Gaya, Rishikesh) use a planned path; `resolveImages`
   turns a missing file into a designed placeholder, so the photo
   appears automatically once it is saved at that path.
   No prices, ratings or testimonials — none are confirmed.
   ============================================================ */

import type { IconName, PageImage } from "@/components/activities/experience/types";

export const PAGE_PATH = "/packages/nepal-india-combined-tours";
export const PAGE_TITLE = "Nepal–India Combined Tours";
/** Booking-form tour type for open-ended enquiries (must be in the form's options). */
export const CUSTOM_JOURNEY = "Custom India–Nepal journey";

export const SEO = {
  title: "Nepal–India Combined Tour Packages | Karvaahh",
  socialTitle: "Nepal–India Combined Tours — Karvaahh Tours & Travels",
  description:
    "Explore Nepal–India combined tour packages featuring Buddhist pilgrimage, Hindu temples, yoga retreats, wildlife safaris and Himalayan adventures with Karvaahh Tours & Travels.",
  keywords: [
    "Nepal India combined tour",
    "India Nepal tour package",
    "Buddhist circuit India Nepal",
    "Bodh Gaya Lumbini tour",
    "Varanasi Kathmandu tour",
    "India Nepal pilgrimage tour",
    "Chitwan Corbett wildlife tour",
  ],
};

const img = (src: string, label: string, alt: string, objectPosition?: string): PageImage => ({ src, label, alt, ...(objectPosition ? { objectPosition } : {}) });

/* ---------- Images ---------- */
export const IMAGES = {
  hero: img(
    "/images/bagmati/bagmati-province-kathmandu-valley-heritage-himalayan-mountains.jpg",
    "Kathmandu Valley",
    "A great white stupa and pagoda temple roofs in the Kathmandu Valley, with snow-capped Himalayan peaks on the horizon",
    "center 40%",
  ),
  closing: img("/images/home/annapurna-view.jpg", "Annapurna range", "The Annapurna range and the peak of Machhapuchhre rising above the Pokhara valley at sunrise"),
  bodhGaya: img("/images/nepal-india-combined/bodh-gaya-mahabodhi-temple.jpg", "Bodh Gaya", "The tall stone spire of the Mahabodhi Temple in Bodh Gaya"),
  lumbini: img("/images/lumbini/maya-devi-temple-lumbini-rupandehi-nepal.jpg", "Lumbini", "The Maya Devi Temple in Lumbini, marking the birthplace of the Buddha"),
  lumbiniGarden: img("/images/lumbini/lumbini-sacred-garden-pond-bodhi-tree-nepal.jpg", "Sacred Garden, Lumbini", "The sacred pond and Bodhi tree in the Sacred Garden at Lumbini"),
  varanasi: img("/images/home/varanasi.jpg", "Varanasi", "Sandstone palaces and stepped ghats along the Ganga in Varanasi, with pilgrims in a wooden boat", "50% 60%"),
  kathmandu: img("/images/bagmati/swayambhunath-stupa-kathmandu-valley-unesco-heritage-nepal.jpg", "Kathmandu", "The white dome and gilded spire of Swayambhunath Stupa above the Kathmandu Valley"),
  pashupatinath: img("/images/bagmati/pashupatinath-temple-bagmati-river-sacred-pilgrimage-nepal.jpg", "Pashupatinath", "The golden-roofed Pashupatinath Temple above the Bagmati river in Kathmandu"),
  pokhara: img("/images/home/pokhara-view.jpg", "Pokhara", "Phewa Lake in Pokhara with the Annapurna range reflected in its waters"),
  sarangkot: img("/images/gandaki/sarangkot-sunrise-annapurna-mountain-view-kaski-nepal.jpg", "Sarangkot", "Sunrise over the Annapurna range seen from Sarangkot above Pokhara"),
  chitwan: img("/images/bagmati/one-horned-rhinoceros-chitwan-national-park-wildlife-nepal.jpg", "Chitwan", "A one-horned rhinoceros in the grasslands of Chitwan National Park"),
  bardia: img("/images/lumbini/bardiya-national-park-nepal-wildlife-safari.jpg", "Bardia National Park", "A wildlife safari in the forests of Bardia National Park, western Nepal"),
  rishikesh: img("/images/spiritual-journeys/haridwar-rishikesh/intro-rishikesh-ganga-foothills.webp", "Rishikesh", "The Ganga flowing through Rishikesh between forested Himalayan foothills"),
};

/* ---------- Circuits ---------- */
export type ThemeId = "spiritual" | "buddhist" | "wellness" | "wildlife" | "adventure";

export type Circuit = {
  id: string;
  title: string;
  duration: string;
  destinations: string[];
  text: string;
  image: PageImage;
  themes: ThemeId[];
  related?: { href: string; label: string };
};

export const CIRCUITS: Circuit[] = [
  {
    id: "buddhist",
    title: "Buddhist Heritage & Nepal Pilgrimage",
    duration: "12–16 days",
    destinations: ["Bodh Gaya", "Rajgir", "Nalanda", "Sarnath", "Kushinagar", "Lumbini", "Kathmandu"],
    text: "Follow Buddha's footsteps through sacred pilgrimage sites, ancient monasteries and historic Buddhist learning centres across India and Nepal.",
    image: IMAGES.lumbiniGarden,
    themes: ["buddhist", "spiritual"],
    related: { href: "/destinations/lumbini-province", label: "Lumbini Province" },
  },
  {
    id: "hindu",
    title: "Hindu Spiritual & Himalayan Pilgrimage",
    duration: "14–21 days",
    destinations: ["Haridwar", "Rishikesh", "Varanasi", "Ayodhya", "Janakpur", "Pashupatinath", "Muktinath"],
    text: "Connect India's sacred cities with Nepal's revered temples and Himalayan pilgrimage destinations.",
    image: IMAGES.pashupatinath,
    themes: ["spiritual"],
    related: { href: "/packages/spiritual-pilgrimage", label: "Spiritual & pilgrimage tours" },
  },
  {
    id: "wellness",
    title: "Yoga, Wellness & Himalayan Adventure",
    duration: "12–18 days",
    destinations: ["Rishikesh", "Kathmandu", "Pokhara", "Annapurna foothill villages (optional)"],
    text: "Combine yoga, meditation, Himalayan viewpoints, lakeside relaxation and optional outdoor adventures.",
    image: IMAGES.rishikesh,
    themes: ["wellness", "adventure"],
    related: { href: "/activities/wellness/yoga-wellness", label: "Yoga & wellness" },
  },
  {
    id: "wildlife",
    title: "Wildlife & Conservation Expedition",
    duration: "15–21 days",
    destinations: ["Jim Corbett", "Chitwan", "Bardia", "Banke or Kaziranga (optional)"],
    text: "Discover contrasting wildlife habitats, guided safaris, conservation experiences and natural landscapes.",
    image: IMAGES.bardia,
    themes: ["wildlife"],
    related: { href: "/activities/wildlife-nature", label: "Wildlife & nature" },
  },
  {
    id: "hills",
    title: "Himalayan Beauty & Hill Stations",
    duration: "18–25 days",
    destinations: ["Shimla", "Manali", "Nainital", "Almora", "Kathmandu", "Pokhara"],
    text: "Experience forested hill stations, traditional mountain villages, lakes and Himalayan panoramas.",
    image: IMAGES.sarangkot,
    themes: ["adventure"],
    related: { href: "/packages/north-india", label: "North India packages" },
  },
];

/* ---------- Interactive themes ---------- */
export const THEMES: { id: ThemeId; label: string; icon: IconName; note: string }[] = [
  { id: "spiritual", label: "Spiritual & Pilgrimage", icon: "landmark", note: "Sacred rivers, temple towns and Himalayan shrines, paced around darshan times and festivals." },
  { id: "buddhist", label: "Buddhist Heritage", icon: "sparkles", note: "The sites of the Buddha's life — enlightenment, first sermon, birthplace and parinirvana — in one route." },
  { id: "wellness", label: "Yoga & Wellness", icon: "leaf", note: "Retreat days in Rishikesh, then slower mornings by the lakes and viewpoints of Nepal." },
  { id: "wildlife", label: "Wildlife & Nature", icon: "footprints", note: "Terai grasslands and sal forests on both sides of the border, with guided safaris." },
  { id: "adventure", label: "Himalayan Adventure", icon: "mountainSnow", note: "Hill stations, foothill villages and mountain viewpoints, with optional hikes and outdoor activities." },
];

/* ---------- Grand tour ---------- */
export const GRAND_TOUR = {
  title: "India to Nepal: The Grand Discovery",
  duration: "28–30 days",
  intro:
    "One unhurried journey that joins India's Buddhist heartland with Nepal's sacred sites — the Buddha's birthplace region, selected wildlife in Chitwan, the living heritage of the Kathmandu Valley and the Himalayan landscapes around Pokhara.",
  stages: [
    { place: "Delhi", text: "International arrival and travel orientation." },
    { place: "Bodh Gaya", text: "Mahabodhi Temple and Buddhist heritage." },
    { place: "Rajgir & Nalanda", text: "Sacred hills and ancient learning centres." },
    { place: "Varanasi & Sarnath", text: "Spiritual traditions and Buddha's first sermon site." },
    { place: "Kushinagar", text: "Buddhist pilgrimage heritage." },
    { place: "Sunauli–Bhairahawa border", text: "Immigration and Nepal entry.", border: true },
    { place: "Lumbini & Tilaurakot", text: "Buddha's birthplace region and archaeological heritage." },
    { place: "Chitwan", text: "Wildlife experiences and Tharu cultural encounters." },
    { place: "Kathmandu Valley", text: "Boudhanath, Swayambhunath, Patan and Pashupatinath." },
    { place: "Pokhara & Annapurna foothills", text: "Phewa Lake, mountain viewpoints and optional adventure." },
    { place: "Kathmandu", text: "Final sightseeing and international departure." },
  ] as { place: string; text: string; border?: boolean }[],
  extensions: ["Janakpur", "Kaziranga", "Shimla & Manali", "Kedarnath–Badrinath circuit"],
  note: "This is a customizable itinerary framework, not a fixed departure. Actual duration and route depend on flights, ground transfers, border procedures and the destinations you select.",
};

/* ---------- Destinations ---------- */
export type Destination = { name: string; country: "India" | "Nepal"; text: string; image: PageImage; href?: string };

export const DESTINATIONS: Destination[] = [
  { name: "Bodh Gaya", country: "India", text: "The Mahabodhi Temple, the Bodhi tree and quiet hours of meditation where the Buddha attained enlightenment.", image: IMAGES.bodhGaya },
  { name: "Lumbini", country: "Nepal", text: "The Maya Devi Temple, the Sacred Garden and a monastic zone of monasteries built by nations from across the world.", image: IMAGES.lumbini, href: "/destinations/lumbini-province" },
  { name: "Varanasi", country: "India", text: "Centuries-old ghats, temple lanes and the living rituals of the Ganga at dawn and dusk.", image: IMAGES.varanasi },
  { name: "Kathmandu", country: "Nepal", text: "Boudhanath, Swayambhunath and the Durbar Squares of a valley rich in UNESCO-listed heritage.", image: IMAGES.kathmandu, href: "/destinations/bagmati-province" },
  { name: "Pokhara", country: "Nepal", text: "Phewa Lake, sunrise from Sarangkot and the Annapurna range filling the northern sky.", image: IMAGES.pokhara, href: "/destinations/gandaki-province" },
  { name: "Chitwan", country: "Nepal", text: "Protected grasslands and forests, guided safaris and the culture of the Tharu communities.", image: IMAGES.chitwan, href: "/destinations/bagmati-province" },
];

/* ---------- Practical information ---------- */
export const PRACTICAL: { id: string; title: string; icon: IconName; body: string[] }[] = [
  {
    id: "documents",
    title: "Cross-Border Documentation",
    icon: "passport",
    body: [
      "Passport, visa and border-crossing eligibility depend on your nationality, and rules for land borders can differ from those at airports.",
      "Please check the current official immigration rules of both India and Nepal before booking. We share the documents your route needs, but entry decisions rest with the authorities.",
    ],
  },
  {
    id: "transport",
    title: "Flights & Transportation",
    icon: "plane",
    body: [
      "Delhi and Kathmandu are the main international gateways. Regional airports such as Gaya, Varanasi, Gorakhpur, Bhairahawa and Nepalgunj are considered where they suit the route.",
      "Road, rail and domestic-flight combinations depend on schedules and geography, so we confirm each leg when your dates are set.",
    ],
  },
  {
    id: "season",
    title: "Best Time to Travel",
    icon: "calendar",
    body: [
      "October–November: generally favourable for many cultural and Himalayan journeys.",
      "March–May: suitable for many sightseeing and trekking itineraries, with heat and visibility considerations.",
      "December–February: often suitable for cultural and lower-altitude destinations; mountain weather may limit access.",
      "June–September: monsoon conditions may affect roads, trekking, flights and outdoor activities.",
      "Seasonal suitability varies by destination — we advise on timing for your exact route.",
    ],
  },
  {
    id: "stay",
    title: "Accommodation",
    icon: "bed",
    body: [
      "Choose from standard hotels, premium stays, boutique heritage properties, wellness retreats and wildlife lodges, depending on what is available along your itinerary.",
    ],
  },
  {
    id: "permits",
    title: "Permits & Safety",
    icon: "shield",
    body: [
      "National park entry, trekking, activity and route-specific permits apply where relevant, and we coordinate them as part of planning.",
      "High-altitude destinations and adventure activities need additional planning for acclimatisation, weather and fitness.",
    ],
  },
];

/* ---------- Inclusions ---------- */
export const INCLUSIONS = [
  "Airport and designated border transfers",
  "Accommodation in your selected category",
  "Private or shared ground transportation as quoted",
  "Sightseeing and local guides where specified",
  "Selected meals according to the package",
  "Domestic flights when explicitly included",
  "Wildlife safari arrangements when specified",
  "Assistance with travel documentation and permit coordination",
];

export const EXCLUSIONS = [
  "International airfare unless specified",
  "Visa fees and personal documentation costs",
  "Travel insurance",
  "Personal expenses and gratuities",
  "Optional activities",
  "Unspecified meals and services",
];

/* ---------- Benefits ---------- */
export const BENEFITS: { title: string; icon: IconName; text: string }[] = [
  { title: "Customized India–Nepal Itineraries", icon: "route", text: "Routes built around your dates, interests and pace." },
  { title: "Thoughtful Route Planning", icon: "compass", text: "Sensible sequencing of flights, roads and the border crossing." },
  { title: "Flexible Accommodation Categories", icon: "bed", text: "From comfortable standard hotels to premium and boutique stays." },
  { title: "Cultural, Spiritual & Adventure Experiences", icon: "sparkles", text: "Temples, monasteries, safaris and Himalayan viewpoints in one trip." },
  { title: "Dedicated Trip Coordination", icon: "headset", text: "One team coordinating your journey on both sides of the border." },
];
