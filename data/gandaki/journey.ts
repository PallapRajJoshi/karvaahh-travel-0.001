export interface GandakiRoute {
  id: string;
  index: string;
  title: string;
  theme: string;
  /** Stops in travel order — no distances or durations are implied. */
  stops: string[];
  description: string;
  bestFor: string;
  image: string;
  alt: string;
  link: { href: string; label: string };
}

/** Suggested routes; links point only at existing Karvaahh pages or the contact page. */
export const gandakiRoutes: GandakiRoute[] = [
  {
    id: "pokhara-explorer",
    index: "01",
    title: "Pokhara Explorer",
    theme: "Lakes & viewpoints",
    stops: ["Phewa Lake & Tal Barahi", "Sarangkot", "World Peace Pagoda", "Davis Falls & Gupteshwor Cave", "Begnas Lake"],
    description:
      "Row out to the island temple on Phewa, catch sunrise from Sarangkot, then link the Peace Pagoda ridge, the falls and caves south of the city and quieter Begnas Lake.",
    bestFor: "First-time visitors, families, short stays",
    image: "/images/gandaki/phewa-lake-annapurna-mountain-reflection-gandaki-nepal.jpg",
    alt: "Still lake reflecting the Annapurna range above forested hills",
    link: { href: "/activities/adventure/paragliding", label: "Add paragliding" },
  },
  {
    id: "annapurna-cultural-journey",
    index: "02",
    title: "Annapurna Cultural Journey",
    theme: "Gurung villages & teahouse trails",
    stops: ["Pokhara", "Nayapul", "Ghorepani & Poon Hill", "Tadapani", "Ghandruk"],
    description:
      "A short teahouse trek through rhododendron forest to the Poon Hill sunrise, then on to Ghandruk's Gurung stone houses — big mountain views without high altitude.",
    bestFor: "Easy–moderate trekkers, families with older children",
    image: "/images/gandaki/poon-hill-sunrise-dhaulagiri-myagdi-gandaki-nepal.jpg",
    alt: "Lodges at Ghorepani with the Dhaulagiri range rising behind",
    link: { href: "/contact", label: "Plan this trek" },
  },
  {
    id: "mustang-spiritual-journey",
    index: "03",
    title: "Mustang Spiritual Journey",
    theme: "Pilgrimage & high desert",
    stops: ["Pokhara", "Jomsom", "Kagbeni", "Muktinath"],
    description:
      "Fly or drive up the Kali Gandaki between Dhaulagiri and Annapurna, overnight in Jomsom or Kagbeni, then continue to Muktinath for darshan at the 108 water spouts.",
    bestFor: "Pilgrims, families and senior travellers who pace the altitude",
    image: "/images/gandaki/kagbeni-ancient-village-kali-gandaki-mustang-nepal.jpg",
    alt: "Mud-brick houses of Kagbeni on the Kali Gandaki with Nilgiri behind",
    link: { href: "/spiritual-journeys/pashupatinath", label: "Pashupatinath & Muktinath Yatra" },
  },
  {
    id: "annapurna-circuit-adventure",
    index: "04",
    title: "Annapurna Circuit Adventure",
    theme: "High valleys & a 5,416 m pass",
    stops: ["Besisahar", "Chame", "Pisang", "Manang", "Thorong La", "Muktinath"],
    description:
      "Follow the Marsyangdi valley from the Lamjung hills into the rain-shadow villages of Manang, acclimatise, then cross Thorong La and descend to Muktinath and the Kali Gandaki.",
    bestFor: "Fit trekkers prepared for high altitude",
    image: "/images/gandaki/manang-village-annapurna-mountain-wall-gandaki-nepal.jpg",
    alt: "Manang valley village beneath eroded cliffs on the Annapurna Circuit",
    link: { href: "/packages/manang-circuit-trek", label: "Manang Circuit Trek" },
  },
  {
    id: "heritage-and-hills",
    index: "05",
    title: "Heritage & Hills",
    theme: "Temples & hill towns",
    stops: ["Manakamana", "Gorkha Durbar", "Bandipur", "Pokhara"],
    description:
      "Break the Kathmandu–Pokhara drive on the Prithvi Highway: ride the cable car to Manakamana, detour to the palace-fort at Gorkha, then spend a night in Bandipur's car-free bazaar.",
    bestFor: "Culture lovers, road travellers, families",
    image: "/images/gandaki/bandipur-heritage-hill-town-tanahun-gandaki-nepal.jpg",
    alt: "Bandipur hill town at dusk with the Himalaya on the horizon",
    link: { href: "/packages/nepal/spiritual-pilgrimage-tours#packages", label: "Manakamana & Pokhara tours" },
  },
];
