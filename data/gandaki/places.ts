export type GandakiPlaceCategory =
  | "lakes-nature"
  | "trekking"
  | "spiritual"
  | "heritage"
  | "culture"
  | "adventure";

export const gandakiPlaceCategories: { id: GandakiPlaceCategory; label: string }[] = [
  { id: "lakes-nature", label: "Lakes & Nature" },
  { id: "trekking", label: "Trekking" },
  { id: "spiritual", label: "Spiritual" },
  { id: "heritage", label: "Heritage" },
  { id: "culture", label: "Culture" },
  { id: "adventure", label: "Adventure" },
];

export interface GandakiPlace {
  id: string;
  name: string;
  district: string;
  description: string;
  categories: GandakiPlaceCategory[];
  tags: string[];
  image: string;
  alt: string;
  /** Existing Karvaahh page for this place; falls back to a tailor-made enquiry. */
  link: { href: string; label: string };
}

const PLAN_A_VISIT = { href: "/contact", label: "Plan a visit" };

/**
 * Destination highlights for the Gandaki Province page. Links only point at
 * routes that exist in the app; places without a dedicated page fall back to
 * the contact page rather than an invented URL.
 *
 * Several files in /images/gandaki are named after a different place than the
 * photo shows — images here were chosen by what is actually pictured.
 */
export const gandakiPlaces: GandakiPlace[] = [
  {
    id: "pokhara",
    name: "Pokhara",
    district: "Kaski",
    description:
      "Gandaki's lakeside capital, where Phewa Lake mirrors Machhapuchhre and the Annapurna range on clear mornings. Around the city lie the Sarangkot sunrise viewpoint, the World Peace Pagoda, Davis Falls and Gupteshwor Mahadev Cave. It is also the launch point for paragliding and most Annapurna treks.",
    categories: ["lakes-nature", "adventure"],
    tags: ["Phewa Lake", "Sarangkot", "Peace Pagoda", "Paragliding"],
    image: "/images/gandaki/pokhara-phewa-lake-annapurna-mountains-gandaki-nepal.jpg",
    alt: "Tal Barahi Temple island on Phewa Lake with Annapurna peaks behind",
    link: { href: "/activities/adventure/paragliding", label: "Paragliding in Pokhara" },
  },
  {
    id: "annapurna-conservation-area",
    name: "Annapurna Conservation Area",
    district: "Kaski · Lamjung · Manang · Mustang · Myagdi",
    description:
      "Nepal's largest protected area runs from subtropical forest to the trans-Himalayan desert of Mustang and Manang. Managed together with local communities, it shelters snow leopard, blue sheep, red panda and the danphe pheasant alongside hundreds of mountain villages and the region's classic trekking routes.",
    categories: ["lakes-nature", "trekking"],
    tags: ["Biodiversity", "Annapurna Sanctuary", "Conservation", "Mountain villages"],
    image: "/images/gandaki/dhorpatan-hunting-reserve-alpine-meadows-gandaki-nepal.jpg",
    alt: "Wild mountain sheep on a rocky outcrop below a snow peak",
    link: { href: "/activities/helicopter-tours/annapurna", label: "Annapurna helicopter tour" },
  },
  {
    id: "ghandruk",
    name: "Ghandruk",
    district: "Kaski",
    description:
      "One of the largest Gurung settlements, built of slate-roofed stone houses on a ridge facing Annapurna South, Hiunchuli and Machhapuchhre. Homestays, a small Gurung museum and stone-paved trails make it an easy cultural stop on the Poon Hill and Annapurna Base Camp routes.",
    categories: ["culture", "trekking"],
    tags: ["Gurung culture", "Homestays", "Stone houses", "Annapurna views"],
    image: "/images/gandaki/ghale-gaun-gurung-heritage-village-gandaki-nepal.jpg",
    alt: "Slate-roofed stone houses of a traditional Gurung hill village",
    link: PLAN_A_VISIT,
  },
  {
    id: "poon-hill",
    name: "Poon Hill & Ghorepani",
    district: "Myagdi",
    description:
      "A short teahouse trek through rhododendron forest leads to Ghorepani and the Poon Hill viewpoint at about 3,210 m. At sunrise the Dhaulagiri and Annapurna ranges light up across the horizon, making it one of Nepal's most rewarding low-altitude treks.",
    categories: ["trekking", "lakes-nature"],
    tags: ["Sunrise viewpoint", "Rhododendron forest", "Teahouse trek"],
    image: "/images/gandaki/poon-hill-sunrise-dhaulagiri-myagdi-gandaki-nepal.jpg",
    alt: "Lodges at Ghorepani with the Dhaulagiri range rising behind",
    link: PLAN_A_VISIT,
  },
  {
    id: "muktinath",
    name: "Muktinath",
    district: "Mustang",
    description:
      "At around 3,700 m below the Thorong La pass, Muktinath is sacred to Hindus as Mukti Kshetra, one of the 108 Divya Desams of Vishnu, and to Buddhists as Chumig Gyatsa. Pilgrims bathe beneath the 108 water spouts and visit the Jwala Mai shrine, where natural gas flames burn beside a spring.",
    categories: ["spiritual"],
    tags: ["108 water spouts", "Hindu & Buddhist", "Pilgrimage", "High altitude"],
    image: "/images/home/muktinath-temple.jpg",
    alt: "Muktinath Temple and its sacred ponds in Mustang",
    link: { href: "/spiritual-journeys/pashupatinath", label: "Pashupatinath & Muktinath Yatra" },
  },
  {
    id: "jomsom-kagbeni",
    name: "Jomsom & Kagbeni",
    district: "Mustang",
    description:
      "Mustang's district headquarters sits in the wind-scoured Kali Gandaki valley between Dhaulagiri and Nilgiri, with an airstrip served from Pokhara. Nearby Marpha is known for apple orchards and whitewashed Thakali lanes, while Kagbeni's mud-brick settlement marks the threshold of Upper Mustang.",
    categories: ["heritage", "culture"],
    tags: ["Kali Gandaki valley", "Thakali culture", "Gateway to Mustang"],
    image: "/images/gandaki/kagbeni-ancient-village-kali-gandaki-mustang-nepal.jpg",
    alt: "Mud-brick houses of Kagbeni on the Kali Gandaki with Nilgiri behind",
    link: { href: "/packages/nepal/spiritual-pilgrimage-tours#packages", label: "Muktinath tours via Jomsom" },
  },
  {
    id: "upper-mustang",
    name: "Upper Mustang",
    district: "Mustang",
    description:
      "Beyond Kagbeni lies the former Kingdom of Lo, a trans-Himalayan desert of eroded cliffs, sky caves and centuries-old gompas in the rain shadow of the Annapurna and Dhaulagiri ranges. Its walled capital, Lo Manthang, keeps a Tibetan-influenced culture; entry requires a restricted-area permit and a licensed guide.",
    categories: ["heritage", "culture", "trekking"],
    tags: ["Lo Manthang", "Sky caves", "Tibetan Buddhism", "Restricted area"],
    image: "/images/gandaki/lo-manthang-walled-city-upper-mustang-gandaki-nepal.jpg",
    alt: "Whitewashed houses and chortens inside the walled town of Lo Manthang",
    link: { href: "/adventure/mustang-circuit-trek", label: "Mustang Circuit Trek" },
  },
  {
    id: "manang",
    name: "Manang",
    district: "Manang",
    description:
      "A high valley at about 3,500 m on the dry northern side of the Annapurna range, with flat-roofed stone villages, gompas and the Nyeshang people's distinctive culture. Trekkers pause here to acclimatise, with side trips to Ice Lake, Gangapurna Lake and Tilicho Lake before crossing Thorong La.",
    categories: ["trekking", "culture"],
    tags: ["Annapurna Circuit", "Tilicho Lake", "Acclimatisation", "Alpine villages"],
    image: "/images/gandaki/manang-village-annapurna-mountain-wall-gandaki-nepal.jpg",
    alt: "Manang valley village beneath eroded cliffs on the Annapurna Circuit",
    link: { href: "/packages/manang-circuit-trek", label: "Manang Circuit Trek" },
  },
  {
    id: "bandipur",
    name: "Bandipur",
    district: "Tanahun",
    description:
      "A former Newar trading town on the old India–Tibet route, its car-free bazaar is lined with brick houses, carved windows and small shrines. Viewpoints such as Thani Mai look across the Marsyangdi valley to the Himalaya, and the town makes an easy overnight between Kathmandu and Pokhara.",
    categories: ["heritage", "culture"],
    tags: ["Newar architecture", "Car-free bazaar", "Himalayan viewpoint"],
    image: "/images/gandaki/bandipur-heritage-hill-town-tanahun-gandaki-nepal.jpg",
    alt: "Bandipur hill town at dusk with the Himalaya on the horizon",
    link: PLAN_A_VISIT,
  },
  {
    id: "gorkha",
    name: "Gorkha",
    district: "Gorkha",
    description:
      "The hilltop Gorkha Durbar was the seat of King Prithvi Narayan Shah, who launched the 18th-century campaign that unified Nepal. The palace-fort combines Newar woodcarving with the Gorakhnath cave shrine, and the district also leads to the Manaslu and Tsum Valley trekking regions.",
    categories: ["heritage"],
    tags: ["Gorkha Durbar", "Unification history", "Manaslu gateway"],
    image: "/images/gandaki/gorkha-durbar-palace-hilltop-gorkha-gandaki-nepal.jpg",
    alt: "Aerial view of the Gorkha Durbar palace complex on its hilltop",
    link: { href: "/adventure/tsum-valley-trek", label: "Tsum Valley Trek" },
  },
  {
    id: "manakamana",
    name: "Manakamana Temple",
    district: "Gorkha",
    description:
      "Perched on a ridge above the Trishuli River, this pagoda temple of Goddess Bhagwati is believed to fulfil the wishes of devotees. A cable car from Kurintar on the Prithvi Highway climbs to the temple in minutes, making it a popular stop between Kathmandu and Pokhara.",
    categories: ["spiritual"],
    tags: ["Cable car", "Hindu pilgrimage", "Wish-fulfilling goddess"],
    image: "/images/gandaki/kagbeni-ancient-walled-settlement-mustang-gandaki-nepal.jpg",
    alt: "The Manakamana cable car rising over forested hills towards the temple",
    link: { href: "/packages/nepal/spiritual-pilgrimage-tours#packages", label: "Manakamana darshan tours" },
  },
  {
    id: "kushma",
    name: "Kushma",
    district: "Parbat",
    description:
      "Parbat's headquarters stands above the deep gorge where the Modi Khola meets the Kali Gandaki. Its high suspension bridges host one of the world's highest bungee jumps and a canyon swing, an easy drive from Pokhara.",
    categories: ["adventure"],
    tags: ["Bungee jump", "Canyon swing", "River gorge"],
    image: "/images/gandaki/kushma-suspension-bridge-modi-river-gorge-parbat-nepal.jpg",
    alt: "Aerial view of a suspension bridge spanning the river gorge at Kushma",
    link: { href: "/activities/adventure/bungee-jumping", label: "Bungee jumping in Kushma" },
  },
  {
    id: "dhorpatan",
    name: "Dhorpatan Hunting Reserve",
    district: "Baglung · Myagdi",
    description:
      "Nepal's only hunting reserve protects high pastures and forested valleys beneath the Dhaulagiri Himal on Gandaki's western edge. Blue sheep, Himalayan tahr and red panda share the alpine meadows, and its remote trails see only a handful of trekkers each season.",
    categories: ["lakes-nature", "adventure", "trekking"],
    tags: ["Alpine meadows", "Wildlife", "Remote trekking"],
    image: "/images/gandaki/dhorpatan-valley-himalayan-landscape-baglung-gandaki-nepal.jpg",
    alt: "Wildflowers and rolling alpine meadows in the Dhorpatan valley",
    link: { href: "/offbeat-unexplored/dhorpatan-hunting-reserve", label: "Explore Dhorpatan" },
  },
];
