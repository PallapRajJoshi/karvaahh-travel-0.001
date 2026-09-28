import { campingImages, type ImageTone } from "./campingImages";
import type { CategoryId, Difficulty, RegionFilterId } from "./campingDestinations";

export const PAGE_PATH = "/activities/adventure/camping";
export const PAGE_URL = `https://karvaahh.in${PAGE_PATH}`;

/**
 * Enquiry targets. /contact was assumed in earlier builds and is still
 * unverified — change these two constants if the route differs.
 */
export const PLAN_HREF = "/contact?interest=camping";
export const TALK_HREF = "/contact";

/* ------------------------------------------------------------------ */
/* Hero                                                                 */
/* ------------------------------------------------------------------ */

export const heroStats = [
  { value: 40, suffix: "+", label: "Camping destinations" },
  { value: 14, suffix: "", label: "Camping experiences" },
  { value: 7, suffix: "", label: "Major Himalayan regions" },
  { value: 365, suffix: "", label: "Days of adventure" },
];

/* ------------------------------------------------------------------ */
/* Intro trail                                                          */
/* ------------------------------------------------------------------ */

export const introTrail = [
  "Kathmandu", "Pokhara", "Annapurna", "Everest", "Langtang",
  "Mustang", "Manaslu", "Rara", "Dolpo", "Kanchenjunga",
];

/* ------------------------------------------------------------------ */
/* Categories                                                           */
/* ------------------------------------------------------------------ */

export type CampingCategory = {
  id: CategoryId;
  name: string;
  description: string;
  image: string;
  tone: ImageTone;
};

const categorySeeds: Omit<CampingCategory, "image">[] = [
  { id: "weekend", name: "Weekend & easy camping", description: "Short drives, gentle walks, a night away from the city.", tone: "forest" },
  { id: "hilltop", name: "Hilltop & sunrise camping", description: "Ridges where the first light hits the Himalaya.", tone: "dusk" },
  { id: "lakeside", name: "Lakeside camping", description: "From Pokhara's shores to remote alpine water.", tone: "lake" },
  { id: "himalayan", name: "Himalayan view camping", description: "Pitch within sight of the high peaks.", tone: "snow" },
  { id: "village", name: "Village & cultural camping", description: "Stone villages, local food and mountain hospitality.", tone: "earth" },
  { id: "forest", name: "Forest & nature camping", description: "Pine, oak and rhododendron under a quiet sky.", tone: "forest" },
  { id: "jungle", name: "Jungle & wildlife camping", description: "Grasslands and riverine forest in the Terai.", tone: "forest" },
  { id: "glamping", name: "Luxury glamping", description: "Comfort-focused camp setups where available.", tone: "dusk" },
  { id: "adventure", name: "Adventure camping", description: "Remote trails, high passes and long days out.", tone: "snow" },
  { id: "romantic", name: "Romantic & couple camping", description: "Quiet nights and slow sunsets for two.", tone: "dusk" },
  { id: "family", name: "Family camping", description: "Accessible, comfortable and easy to enjoy together.", tone: "forest" },
  { id: "group", name: "Youth & group camping", description: "Campfires, games and space for everyone.", tone: "night" },
  { id: "photography", name: "Photography camping", description: "Sites chosen for light, reflections and night skies.", tone: "night" },
  { id: "wellness", name: "Spiritual & wellness camping", description: "Sacred lakes, monasteries and slow mornings.", tone: "earth" },
];

export const campingCategories: CampingCategory[] = categorySeeds.map((c) => ({
  ...c,
  image: campingImages.category(c.id),
}));

/* ------------------------------------------------------------------ */
/* Map regions (Leaflet)                                                */
/* ------------------------------------------------------------------ */

export type MapRegion = {
  id: string;
  name: string;
  coords: [number, number];
  places: string[];
  filter: RegionFilterId;
  anchor: string;
};

export const mapRegions: MapRegion[] = [
  { id: "kathmandu", name: "Kathmandu Valley", coords: [27.7, 85.32], filter: "kathmandu", anchor: "weekend",
    places: ["Nagarkot", "Kakani", "Chitlang", "Markhu", "Dhulikhel", "Shivapuri", "Champadevi"] },
  { id: "gandaki", name: "Gandaki hills", coords: [28.02, 84.3], filter: "midhills", anchor: "village",
    places: ["Bandipur", "Ghalegaun", "Sirubari", "Begnas Lake", "Rupa Lake"] },
  { id: "annapurna", name: "Annapurna Region", coords: [28.53, 83.88], filter: "annapurna", anchor: "annapurna",
    places: ["Pokhara", "Ghandruk", "Australian Camp", "Mardi Himal", "ABC", "Manang", "Jomsom"] },
  { id: "everest", name: "Everest Region", coords: [27.99, 86.83], filter: "everest", anchor: "everest",
    places: ["Namche Bazaar", "Tengboche", "Dingboche", "Everest Base Camp", "Gokyo Lakes"] },
  { id: "langtang", name: "Langtang & Helambu", coords: [28.21, 85.56], filter: "langtang", anchor: "langtang",
    places: ["Langtang Village", "Kyanjin Gompa", "Gosaikunda", "Helambu", "Panch Pokhari"] },
  { id: "manaslu", name: "Manaslu & Tsum", coords: [28.55, 84.56], filter: "manaslu", anchor: "manaslu",
    places: ["Jagat", "Namrung", "Samagaun", "Samdo", "Tsum Valley"] },
  { id: "mustang", name: "Mustang", coords: [29.18, 83.96], filter: "mustang", anchor: "mustang",
    places: ["Jomsom", "Kagbeni", "Muktinath", "Lo Manthang", "Ghami", "Tsarang"] },
  { id: "makalu", name: "Makalu Region", coords: [27.89, 87.09], filter: "makalu", anchor: "makalu",
    places: ["Tumlingtar", "Num", "Tashigaon", "Yangle Kharka", "Makalu Base Camp"] },
  { id: "kanchenjunga", name: "Kanchenjunga Region", coords: [27.66, 87.93], filter: "kanchenjunga", anchor: "kanchenjunga",
    places: ["Taplejung", "Ghunsa", "Khangpachen", "Pangpema", "Oktang"] },
  { id: "karnali", name: "Karnali: Rara, Dolpo & Humla", coords: [29.53, 82.09], filter: "farwest", anchor: "farwest",
    places: ["Rara Lake", "Phoksundo Lake", "Shey Gompa", "Simikot", "Limi Valley"] },
  { id: "farwest", name: "Far West", coords: [29.38, 81.13], filter: "farwest", anchor: "farwest",
    places: ["Khaptad National Park", "Khaptad Lake", "Api Base Camp", "Saipal Region"] },
  { id: "eastern", name: "Eastern Nepal", coords: [26.91, 87.93], filter: "eastern", anchor: "eastern",
    places: ["Ilam", "Antu Danda", "Sandakpur", "Mai Pokhari", "Pathibhara", "Tinjure"] },
];

/* ------------------------------------------------------------------ */
/* Weekend escapes                                                      */
/* ------------------------------------------------------------------ */

export type Escape = { name: string; tags: string[] };

export const weekendEscapes: Escape[] = [
  { name: "Nagarkot", tags: ["Hilltop", "Sunrise"] },
  { name: "Kakani", tags: ["Forest", "Hilltop"] },
  { name: "Chitlang", tags: ["Village", "Farmland"] },
  { name: "Markhu", tags: ["Lake"] },
  { name: "Daman", tags: ["Hilltop", "Panorama"] },
  { name: "Dhulikhel", tags: ["Hilltop", "Sunrise"] },
  { name: "Namobuddha", tags: ["Monastery", "Village"] },
  { name: "Shivapuri", tags: ["Forest", "National park"] },
  { name: "Sundarijal", tags: ["Forest", "Waterfall"] },
  { name: "Tarebhir", tags: ["Cliff", "Sunset"] },
  { name: "Lakuri Bhanjyang", tags: ["Hilltop", "Sunset"] },
  { name: "Champadevi", tags: ["Hilltop", "Hike"] },
  { name: "Pharping", tags: ["Monastery", "Forest"] },
  { name: "Nagarjun", tags: ["Forest", "Viewpoint"] },
  { name: "Godavari", tags: ["Forest", "Garden"] },
  { name: "Lapsiphedi", tags: ["Village", "Hilltop"] },
];

/* ------------------------------------------------------------------ */
/* Lakes                                                                */
/* ------------------------------------------------------------------ */

export type Lake = { name: string; slug: string; area: string; note: string };

export const lakes: Lake[] = [
  { name: "Phewa Lake", slug: "phewa", area: "Pokhara", note: "Mountain reflections beside the city." },
  { name: "Begnas Lake", slug: "begnas", area: "Pokhara", note: "Quieter shores, farmland and forest." },
  { name: "Rupa Lake", slug: "rupa", area: "Pokhara", note: "A small, calm lake with a community feel." },
  { name: "Markhu / Indrasarovar", slug: "indrasarovar", area: "Makwanpur", note: "The closest lake camp to Kathmandu." },
  { name: "Rara Lake", slug: "rara", area: "Mugu", note: "Deep blue water in a ring of pine." },
  { name: "Phoksundo Lake", slug: "phoksundo", area: "Dolpo", note: "Turquoise, still and remote." },
  { name: "Tilicho Lake", slug: "tilicho", area: "Manang", note: "Glacial water at very high altitude." },
  { name: "Gosaikunda", slug: "gosaikunda", area: "Rasuwa", note: "A sacred lake among bare peaks." },
  { name: "Panch Pokhari", slug: "panch-pokhari", area: "Sindhupalchok", note: "Five holy lakes on an old pilgrim route." },
  { name: "Mai Pokhari", slug: "mai-pokhari", area: "Ilam", note: "A forested wetland in tea country." },
  { name: "Tingbong Pokhari", slug: "tingbong", area: "Taplejung", note: "A hidden lake in the eastern hills." },
  { name: "Khaptad Lake", slug: "khaptad", area: "Far West", note: "A small pool on the Khaptad plateau." },
];

/* ------------------------------------------------------------------ */
/* Simple collection sections                                           */
/* ------------------------------------------------------------------ */

export const himalayanPlaces = [
  "Kalinchowk", "Sailung", "Panch Pokhari", "Ama Yangri", "Helambu", "Gosaikunda",
  "Langtang", "Ganesh Himal", "Mardi Himal", "Australian Camp", "Ghandruk", "Ghalegaun",
  "Sikles", "Manang", "Mustang", "Rara", "Khaptad", "Kanchenjunga",
];

export const villagePlaces = [
  "Ghandruk", "Ghalegaun", "Ghanpokhara", "Sikles", "Dhampus", "Bandipur",
  "Chitlang", "Lwang", "Sirubari", "Bhujung", "Tarkeghyang", "Sermathang",
  "Namobuddha", "Tansen", "Palpa", "Nuwakot",
];

export const junglePlaces = [
  { name: "Chitwan National Park", note: "Grasslands, sal forest and river edges." },
  { name: "Bardiya National Park", note: "Remote riverine forest in the west." },
  { name: "Koshi Tappu Wildlife Reserve", note: "Wetlands on the Sapta Koshi floodplain." },
  { name: "Shuklaphanta National Park", note: "Open phanta grasslands in the far west." },
  { name: "Banke National Park", note: "Hills and forest beside Bardiya." },
  { name: "Parsa National Park", note: "Sal forest bordering Chitwan to the east." },
];

/* ------------------------------------------------------------------ */
/* Region spotlights                                                    */
/* ------------------------------------------------------------------ */

export type SpotlightVisual = "route" | "altitude" | "vertical" | "expedition" | "split" | "groups";
export type SpotlightTheme = "night" | "snow" | "earth" | "forest" | "ice";

export type RegionSpotlight = {
  id: string;
  kicker: string;
  heading: string;
  intro: string;
  image: string;
  imageAlt: string;
  tone: ImageTone;
  theme: SpotlightTheme;
  visual: SpotlightVisual;
  groups: { title?: string; places: string[] }[];
  route?: string[];
  altitude?: { from: number; to: number; label: string };
  note?: string;
};

const REGULATION_NOTE =
  "Camping here follows local rules and permitted campsite arrangements. We confirm current requirements when planning your route.";

export const regionSpotlights: RegionSpotlight[] = [
  {
    id: "annapurna", kicker: "Annapurna region", heading: "Camp Through the Annapurna Himalaya",
    intro: "Lake city to high desert in one mountain range. Start with a ridge camp above Pokhara, walk into Gurung villages, and follow the trail over Thorong La into Mustang.",
    image: campingImages.sections.annapurna, imageAlt: "Tents below Machhapuchhre in the Annapurna region",
    tone: "snow", theme: "snow", visual: "route",
    route: ["Pokhara", "Australian Camp", "Ghandruk", "Mardi / ABC", "Manang", "Thorong La", "Jomsom", "Muktinath"],
    groups: [{ places: ["Pokhara", "Sarangkot", "Australian Camp", "Dhampus", "Ghandruk", "Chhomrong", "Annapurna Base Camp", "Mardi Himal", "Forest Camp", "Low Camp", "High Camp", "Manang", "Tilicho Lake", "Nar Phu Valley", "Thorong La", "Jomsom", "Marpha", "Tukuche", "Kagbeni", "Muktinath"] }],
    note: REGULATION_NOTE,
  },
  {
    id: "everest", kicker: "Everest region", heading: "Sleep Beneath Everest",
    intro: "Sherpa villages, monasteries and glacier valleys climbing toward the highest ground on Earth. Most nights here are spent in teahouses; camping is arranged only where it is permitted.",
    image: campingImages.sections.everest, imageAlt: "Night sky over tents in the Khumbu with Everest silhouetted",
    tone: "night", theme: "night", visual: "altitude",
    altitude: { from: 2860, to: 5364, label: "Lukla to Everest Base Camp" },
    groups: [{ places: ["Lukla", "Phakding", "Namche Bazaar", "Tengboche", "Dingboche", "Lobuche", "Gorak Shep", "Everest Base Camp", "Gokyo", "Gokyo Lakes", "Chhukung", "Kongma La", "Cho La", "Renjo La"] }],
    note: REGULATION_NOTE,
  },
  {
    id: "langtang", kicker: "Langtang & Helambu", heading: "Into the Langtang Wilderness",
    intro: "The nearest high Himalaya to Kathmandu. Climb from river forest to yak pastures and glacier views, or loop through Helambu's villages to the sacred lakes at Gosaikunda.",
    image: campingImages.sections.langtang, imageAlt: "Langtang valley with a camp beside prayer flags",
    tone: "snow", theme: "ice", visual: "vertical",
    groups: [
      { title: "Langtang valley", places: ["Syabrubesi", "Lama Hotel", "Langtang Village", "Kyanjin Gompa", "Kyanjin Ri", "Tserko Ri"] },
      { title: "Helambu", places: ["Sundarijal", "Chisapani", "Kutumsang", "Thadepati", "Tarkeghyang", "Sermathang"] },
      { title: "Gosaikunda", places: ["Dhunche", "Lauribina", "Gosaikunda"] },
    ],
    note: REGULATION_NOTE,
  },
  {
    id: "manaslu", kicker: "Manaslu & Tsum Valley", heading: "Remote Trails. Raw Wilderness.",
    intro: "Deep river gorges, Nubri villages and a high pass below the eighth-highest mountain. A restricted area, so trips are planned as organised treks with the right permits.",
    image: campingImages.sections.manaslu, imageAlt: "Expedition tents below Manaslu",
    tone: "snow", theme: "night", visual: "expedition",
    groups: [
      { title: "Manaslu circuit", places: ["Soti Khola", "Machha Khola", "Jagat", "Deng", "Namrung", "Lho", "Samagaun", "Samdo", "Larkya La"] },
      { title: "Tsum Valley", places: ["Lokpa", "Chumling", "Chhokangparo", "Nile", "Mu Gompa", "Gumba Lungdang"] },
    ],
    note: REGULATION_NOTE,
  },
  {
    id: "mustang", kicker: "Mustang", heading: "Camp Beneath the Trans-Himalayan Sky",
    intro: "North of the main range, the land turns to ochre cliffs and wind-cut canyons. Much of Mustang sits in a rain shadow, which makes it one of the few areas worth considering outside the classic seasons.",
    image: campingImages.sections.mustang, imageAlt: "Tents in an ochre canyon in Upper Mustang",
    tone: "earth", theme: "earth", visual: "split",
    groups: [
      { title: "Lower Mustang", places: ["Jomsom", "Marpha", "Tukuche", "Kalopani", "Kagbeni", "Muktinath", "Lupra", "Chhusang"] },
      { title: "Upper Mustang", places: ["Lo Manthang", "Ghami", "Tsarang", "Dhakmar", "Yara", "Tangya", "Choser", "Charang"] },
    ],
    note: "Upper Mustang is a restricted area that requires a special permit arranged through a registered agency.",
  },
  {
    id: "makalu", kicker: "Makalu region", heading: "Beyond the Crowds",
    intro: "A long approach through the Makalu Barun National Park, from terraced hills to high kharkas below one of the most striking peaks in the Himalaya.",
    image: campingImages.sections.makalu, imageAlt: "High camp in the upper Barun valley below Makalu",
    tone: "snow", theme: "night", visual: "expedition",
    route: ["Tumlingtar", "Num", "Seduwa", "Tashigaon", "Khongma Danda", "Dobate", "Yangle Kharka", "Makalu Base Camp"],
    groups: [{ places: ["Tumlingtar", "Num", "Seduwa", "Tashigaon", "Khongma Danda", "Dobate", "Yangle Kharka", "Makalu Base Camp"] }],
    note: REGULATION_NOTE,
  },
  {
    id: "kanchenjunga", kicker: "Kanchenjunga region", heading: "Into the Eastern Himalaya",
    intro: "Nepal's far eastern wilderness: cardamom forest, Tibetan-influenced villages and two base camps on either side of the world's third-highest mountain.",
    image: campingImages.sections.kanchenjunga, imageAlt: "Remote camp on glacier moraine in the Kanchenjunga region",
    tone: "snow", theme: "ice", visual: "expedition",
    groups: [
      { title: "North base camp", places: ["Taplejung", "Mitlung", "Chirwa", "Sekathum", "Amjilosa", "Gyabla", "Ghunsa", "Khangpachen", "Lhonak", "Pangpema", "Kanchenjunga North Base Camp"] },
      { title: "South base camp", places: ["Oktang", "Kanchenjunga South Base Camp"] },
    ],
    note: REGULATION_NOTE,
  },
];

/* ------------------------------------------------------------------ */
/* Far West & Eastern groups                                            */
/* ------------------------------------------------------------------ */

export type PlaceGroup = { title: string; places: string[]; image?: string; imageAlt?: string };

export const farWestGroups: PlaceGroup[] = [
  { title: "Dolpo", image: campingImages.sections.dolpo, imageAlt: "Shey Gompa in the high valleys of Dolpo",
    places: ["Dunai", "Tarakot", "Dho Tarap", "Numa La", "Baga La", "Shey Gompa", "Saldang", "Phoksundo Lake", "Ringmo", "Juphal"] },
  { title: "Rara & Mugu", image: campingImages.sections.rara, imageAlt: "Rara Lake from Murma Top",
    places: ["Rara Lake", "Murma Top", "Talcha", "Mugu", "Chankheli"] },
  { title: "Humla", image: campingImages.sections.humla, imageAlt: "The Limi valley trail in Humla",
    places: ["Simikot", "Hilsa", "Limi Valley", "Yari", "Muchu"] },
  { title: "Khaptad & Far West", image: campingImages.sections.khaptad, imageAlt: "Meadows of Khaptad National Park",
    places: ["Khaptad National Park", "Khaptad Baba Ashram", "Khaptad Lake", "Silgadhi", "Chainpur", "Bajura", "Api Base Camp", "Saipal Region"] },
];

export const easternGroups: PlaceGroup[] = [
  { title: "Ilam", places: ["Kanyam", "Fikkal", "Antu Danda", "Mai Pokhari", "Sandakpur"] },
  { title: "Panchthar", places: ["Phidim", "Falelung", "Falot"] },
  { title: "Taplejung", places: ["Pathibhara", "Kanchenjunga", "Tingbong Pokhari", "Fungfung Jharna"] },
  { title: "Tehrathum & Sankhuwasabha", places: ["Basantapur", "Tinjure", "Milke Danda", "Jaljale", "Makalu Region"] },
];

/* ------------------------------------------------------------------ */
/* Travel styles                                                        */
/* ------------------------------------------------------------------ */

export const travelStyles = [
  { id: "romantic", title: "Romantic camping", tagline: "Quiet nights, mountain sunsets and unforgettable moments.",
    places: ["Pokhara", "Begnas Lake", "Sarangkot", "Nagarkot", "Markhu", "Bandipur", "Ghandruk", "Ghalegaun", "Chitlang", "Daman", "Ilam", "Antu Danda"] },
  { id: "family", title: "Family camping", tagline: "Easy, scenic and memorable outdoor experiences.",
    places: ["Nagarkot", "Chitlang", "Markhu", "Kakani", "Dhulikhel", "Daman", "Pokhara", "Begnas Lake", "Bandipur", "Ghandruk", "Ghalegaun", "Chitwan", "Sarangkot"] },
  { id: "group", title: "Group & youth camping", tagline: "Adventure, campfires and unforgettable group memories.",
    places: ["Chitlang", "Markhu", "Nagarkot", "Kakani", "Daman", "Dhulikhel", "Pokhara", "Sarangkot", "Bandipur", "Ghandruk", "Ghalegaun", "Sikles", "Kalinchowk", "Sailung", "Panch Pokhari"] },
  { id: "photography", title: "Photography camping", tagline: "Wake up to landscapes worth remembering.",
    places: ["Rara Lake", "Phoksundo Lake", "Tilicho Lake", "Gosaikunda", "Mardi Himal", "Ghandruk", "Upper Mustang", "Kanchenjunga", "Kalinchowk", "Panch Pokhari", "Sailung", "Sandakpur", "Antu Danda", "Nagarkot", "Sarangkot", "Australian Camp", "Bandipur"] },
].map((s) => ({ ...s, image: campingImages.style(s.id) }));

/* ------------------------------------------------------------------ */
/* Difficulty                                                           */
/* ------------------------------------------------------------------ */

export const difficultyLevels: { level: Difficulty; summary: string; detail: string; altitude: string }[] = [
  { level: "Easy", summary: "Weekend escapes and accessible camps.",
    detail: "Road access or short walks, lower altitudes and comfortable nights. A good first camp for families and beginners.",
    altitude: "Mostly below 2,500 m" },
  { level: "Moderate", summary: "Hill and trekking-based camping.",
    detail: "Several hours of walking a day on hill trails, colder nights and some altitude. Basic fitness helps.",
    altitude: "Roughly 2,000 – 4,000 m" },
  { level: "Challenging", summary: "High-altitude and remote wilderness camping.",
    detail: "Multi-day treks, high passes and remote terrain. Needs good fitness, acclimatisation days and experienced support.",
    altitude: "Often above 4,000 m" },
];

/* ------------------------------------------------------------------ */
/* Seasons                                                              */
/* ------------------------------------------------------------------ */

export const seasons = [
  { id: "spring", name: "Spring", months: "March – May", monthIdx: [2, 3, 4],
    text: "Flowers, clear mountain views and comfortable trekking conditions in many regions. Rhododendron forests bloom on the mid hills." },
  { id: "monsoon", name: "Monsoon", months: "June – September", monthIdx: [5, 6, 7, 8],
    text: "Rain across most of the country, with leeches, landslides and cloud on the hills. Rain-shadow areas such as Upper Mustang, Dolpo and parts of Humla can be options, but weather and trail conditions vary significantly." },
  { id: "autumn", name: "Autumn", months: "October – November", monthIdx: [9, 10],
    text: "Clear skies, mountain views and excellent trekking and camping conditions in many regions. The busiest time on popular trails." },
  { id: "winter", name: "Winter", months: "December – February", monthIdx: [11, 0, 1],
    text: "Cold nights and clear days. Lower-altitude camps near Kathmandu, Pokhara and the Terai suit this season best, depending on conditions." },
];

/* ------------------------------------------------------------------ */
/* Night-at-camp scenes                                                 */
/* ------------------------------------------------------------------ */

export const campScenes = [
  { id: "arrive", title: "Arrive", text: "The last stretch of trail opens onto a flat, sheltered spot with water nearby and a view worth the walk." },
  { id: "setup", title: "Set up camp", text: "Tents go up facing the morning light. Mats down, bags out, a kettle on before the air turns cold." },
  { id: "sunset", title: "Watch the sunset", text: "Snow peaks turn gold, then pink, then grey. For a few minutes, nobody says much." },
  { id: "fire", title: "Gather around the fire", text: "Dinner, tea and stories where fires are allowed — a warm stove and headlamps where they aren't." },
  { id: "stars", title: "Sleep under the stars", text: "Far from city light, the Milky Way is bright enough to trace across the ridge." },
  { id: "morning", title: "Wake up to the mountains", text: "Frost on the tent, sun on the summits, and a whole valley waking up below you." },
].map((s) => ({ ...s, image: campingImages.scene(s.id) }));

/* ------------------------------------------------------------------ */
/* Why Karvaahh                                                         */
/* ------------------------------------------------------------------ */

export const whyKarvaahh = [
  { icon: "compass", title: "Local knowledge", text: "Travel with practical on-ground knowledge of Nepal." },
  { icon: "route", title: "Flexible trips", text: "Build camping experiences around your time, interests and travel style." },
  { icon: "map", title: "Multiple regions", text: "From Kathmandu hills to remote Himalayan wilderness." },
  { icon: "tent", title: "Personalised planning", text: "Transport, stays, permits and experiences planned around your journey." },
  { icon: "mountain", title: "Adventure expertise", text: "Explore Nepal beyond the usual tourist routes." },
  { icon: "support", title: "Local support", text: "Get assistance throughout your journey." },
] as const;

/* ------------------------------------------------------------------ */
/* FAQ                                                                  */
/* ------------------------------------------------------------------ */

export const campingFaqs = [
  { q: "Where are the best places for camping in Nepal?",
    a: "It depends on the experience you want. Nagarkot, Chitlang and Markhu suit short trips from Kathmandu; Sarangkot, Australian Camp and Ghandruk are popular around Pokhara; Mardi Himal, Gosaikunda, Rara Lake and Upper Mustang are standouts for longer journeys." },
  { q: "What is the best season for camping in Nepal?",
    a: "Autumn (October–November) and spring (March–May) generally bring the most settled weather and clearest views. Winter suits lower-altitude camps, while the monsoon is best limited to rain-shadow areas. Conditions vary by region and year." },
  { q: "Can beginners go camping in Nepal?",
    a: "Yes. Easy camps near Kathmandu and Pokhara need no trekking experience and have road access nearby. Start there before moving on to multi-day or high-altitude trips." },
  { q: "Where can I go camping near Kathmandu?",
    a: "Popular choices include Nagarkot, Kakani, Chitlang, Markhu, Daman, Dhulikhel, Namobuddha, Shivapuri, Champadevi and Lakuri Bhanjyang. Travel time depends on road and traffic conditions." },
  { q: "Which Nepal camping destinations are best for families?",
    a: "Nagarkot, Chitlang, Markhu, Kakani, Dhulikhel, Pokhara, Begnas Lake, Bandipur and Chitwan are easy to reach and comfortable for mixed ages." },
  { q: "Which places are best for Himalayan camping?",
    a: "For close mountain views, consider Kalinchowk, Mardi Himal, Gosaikunda, the Langtang valley and Annapurna Base Camp. Remote options include Makalu, Kanchenjunga and Upper Mustang." },
  { q: "Can camping be combined with trekking?",
    a: "Yes. Many routes combine teahouse nights with camp nights, and remote regions such as Dolpo, Makalu and Kanchenjunga are often done as full camping treks, subject to local rules." },
  { q: "Do I need permits for Himalayan camping?",
    a: "Usually, yes. Most Himalayan areas require national park or conservation area permits, and places such as Upper Mustang, Manaslu, Dolpo and Humla have restricted-area requirements. Rules change, so we confirm the current requirements for your route when planning." },
  { q: "Can Karvaahh arrange customised camping trips?",
    a: "Yes. Tell us your dates, group, fitness level and interests, and we will suggest destinations and plan transport, stays, permits and camping arrangements around them." },
  { q: "What should I pack for camping in Nepal?",
    a: "Layered clothing, a warm jacket, a sleeping bag rated for the altitude, sturdy footwear, a headlamp, sun protection, a water bottle with purification, and a basic first-aid kit. We share a detailed list once your route is set." },
];

export const seoParagraph =
  "Explore camping in Nepal with Karvaahh Tours & Travels. Discover hilltop camping, lakeside camping, Himalayan camping, village camping, jungle experiences, glamping and adventure camping across destinations including Nagarkot, Pokhara, Ghandruk, Mardi Himal, Annapurna Base Camp, Everest, Langtang, Mustang, Manaslu, Rara, Dolpo, Kanchenjunga and more.";
