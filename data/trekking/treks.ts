import * as I from "./images";
import type { Trek, TrekCategory } from "./types";

const GANDAKI = "/destinations/gandaki-province";
const BAGMATI = "/destinations/bagmati-province";
const KOSHI = "/destinations/koshi-province";

/**
 * Treks shown in the destination explorer. Every `href` is an existing route.
 *
 * Facts come from the trek's own Karvaahh page/data (sources noted inline);
 * anything not stated there is left out rather than estimated.
 * Categories are editorial groupings for browsing, not difficulty grades.
 */
export const TREKS: Trek[] = [
  {
    id: "everest-base-camp",
    name: "Everest Base Camp",
    region: "Khumbu · Koshi Province",
    description:
      "The classic teahouse trail from Lukla through Namche Bazaar and Tengboche to the foot of the world's highest mountain. Acclimatisation days, Sherpa villages and the Khumbu Glacier make it Nepal's best-known trek.",
    tags: ["Sherpa culture", "Kala Patthar", "Teahouse trek"],
    categories: ["classic", "high-altitude"],
    // components/adventure/everest-base-camp-trek/data/packages.ts
    difficulty: "Strenuous",
    maxAltitude: "≈ 5,364 m",
    image: I.everestBaseCamp,
    href: "/adventure/everest-base-camp-trek",
    dedicated: true,
  },
  {
    id: "everest-three-passes",
    name: "Everest Three Passes",
    region: "Khumbu · Koshi Province",
    description:
      "A demanding circuit over Kongma La, Cho La and Renjo La that links Everest Base Camp with the Gokyo Lakes. Best for experienced trekkers who want the whole Khumbu in one journey.",
    tags: ["Gokyo Lakes", "High passes", "Glaciers"],
    categories: ["high-altitude", "remote"],
    // data/adventure/everest-three-passes-trek/content.ts
    duration: "17 days (sample)",
    difficulty: "Challenging",
    image: I.gokyoRi,
    href: "/adventure/everest-three-passes-trek",
    dedicated: true,
  },
  {
    id: "langtang-valley",
    name: "Langtang Valley",
    region: "Rasuwa · Bagmati Province",
    description:
      "Close to Kathmandu, this valley climbs from forest to glacier through Tamang villages to Kyanjin Gompa. A rewarding first Himalayan trek for walkers who prepare well.",
    tags: ["Tamang villages", "Kyanjin Gompa", "Glacier views"],
    categories: ["beginner", "cultural", "classic"],
    // data/adventure/langtang-valley-trek.ts
    duration: "7–10 days",
    difficulty: "Moderate",
    image: I.langtang,
    href: "/adventure/langtang-valley-trek",
    dedicated: true,
  },
  {
    id: "manang-circuit",
    name: "Manang Circuit with Tilicho",
    region: "Annapurna · Gandaki Province",
    description:
      "The Manang side of the Annapurna Circuit through Chame and Pisang, with a detour to Tilicho Lake and the crossing of Thorong La to Muktinath. An acclimatisation day in Manang is built in.",
    tags: ["Tilicho Lake", "Thorong La", "Annapurna Circuit"],
    categories: ["classic", "high-altitude", "cultural"],
    // components/packages/manang-circuit-trek/data/content.ts
    duration: "16 days",
    difficulty: "Challenging",
    maxAltitude: "5,416 m",
    image: I.manang,
    href: "/packages/manang-circuit-trek",
    dedicated: true,
  },
  {
    id: "poon-hill",
    name: "Ghorepani Poon Hill",
    region: "Annapurna · Gandaki Province",
    description:
      "A short teahouse trek through rhododendron forest to Ghorepani and the Poon Hill viewpoint. At sunrise the Dhaulagiri and Annapurna ranges light up — big mountain views without high altitude.",
    tags: ["Sunrise viewpoint", "Rhododendrons", "Short trek"],
    categories: ["short", "beginner", "cultural"],
    // data/gandaki/places.ts
    maxAltitude: "≈ 3,210 m",
    image: I.poonHill,
    href: GANDAKI,
    dedicated: false,
  },
  {
    id: "ghandruk",
    name: "Ghandruk",
    region: "Annapurna · Gandaki Province",
    description:
      "One of the largest Gurung settlements, with slate-roofed stone houses facing Annapurna South and Machhapuchhre. Homestays and stone-paved trails make it an easy cultural walk, often paired with Poon Hill.",
    tags: ["Gurung village", "Homestays", "Easy walking"],
    categories: ["short", "beginner", "cultural"],
    image: I.ghandruk,
    href: GANDAKI,
    dedicated: false,
  },
  {
    id: "annapurna-base-camp",
    name: "Annapurna Base Camp",
    region: "Annapurna · Gandaki Province",
    description:
      "Through Gurung villages and bamboo forest into the Annapurna Sanctuary, an amphitheatre of peaks around the base camp. One of the region's best-loved classic treks.",
    tags: ["Annapurna Sanctuary", "Machhapuchhre", "Teahouse trek"],
    categories: ["classic", "high-altitude"],
    image: I.annapurna,
    href: GANDAKI,
    dedicated: false,
  },
  {
    id: "mustang-circuit",
    name: "Mustang Circuit",
    region: "Mustang · Gandaki Province",
    description:
      "A trans-Himalayan journey through wind-carved canyons, ancient cave dwellings and the walled city of Lo Manthang. A restricted area with a distinctly Tibetan culture.",
    tags: ["Lo Manthang", "Restricted area", "Tibetan culture"],
    categories: ["cultural", "remote"],
    image: I.loManthang,
    href: "/adventure/mustang-circuit-trek",
    dedicated: true,
  },
  {
    id: "manaslu-circuit",
    name: "Manaslu Circuit",
    region: "Gorkha · Gandaki Province",
    description:
      "A quieter circuit around the world's eighth-highest mountain, following the Budhi Gandaki valley through Nubri villages. It lies in a restricted area that requires a special permit and licensed guide.",
    tags: ["Restricted area", "Mountain villages", "Quieter trails"],
    categories: ["classic", "high-altitude", "remote"],
    image: I.manaslu,
    href: GANDAKI,
    dedicated: false,
  },
  {
    id: "tsum-valley",
    name: "Tsum Valley",
    region: "Gorkha · Gandaki Province",
    description:
      "A hidden Buddhist valley near the Tibetan border, with monasteries, mani walls and village life that has changed little. A restricted-area trek rich in culture rather than altitude.",
    tags: ["Monasteries", "Mu Gompa", "Restricted area"],
    categories: ["cultural", "remote"],
    // data/destinations/tsum-valley/content.ts
    duration: "13 days",
    difficulty: "Moderate",
    maxAltitude: "≈ 3,700 m",
    image: I.tsumValley,
    href: "/adventure/tsum-valley-trek",
    dedicated: true,
  },
  {
    id: "gosaikunda",
    name: "Gosaikunda Lake",
    region: "Langtang · Bagmati Province",
    description:
      "A climb to the sacred alpine lakes of Gosaikunda, a pilgrimage site as well as a trek. It combines well with Langtang for fit trekkers with extra days to acclimatise.",
    tags: ["Sacred lakes", "Pilgrimage", "Alpine"],
    categories: ["high-altitude", "cultural"],
    // data/bagmati/faqs.ts
    maxAltitude: "≈ 4,380 m",
    image: I.gosaikunda,
    href: BAGMATI,
    dedicated: false,
  },
  {
    id: "panch-pokhari",
    name: "Panch Pokhari",
    region: "Sindhupalchok · Bagmati Province",
    description:
      "Five sacred alpine lakes beneath the Jugal Himal, reached on quiet trails north-east of Kathmandu. Remote, spiritual and far from the crowds.",
    tags: ["Five sacred lakes", "Jugal Himal", "Off the beaten path"],
    categories: ["remote", "cultural"],
    // data/panch-pokhari/quickFacts.ts
    maxAltitude: "≈ 4,100 m",
    image: I.panchPokhari,
    href: "/offbeat-unexplored/panch-pokhari",
    dedicated: true,
  },
  {
    id: "tsho-rolpa",
    name: "Tsho Rolpa & Rolwaling",
    region: "Dolakha · Bagmati Province",
    description:
      "One of Nepal's largest glacial lakes, hidden in the remote Rolwaling Valley with its Sherpa villages. A true wilderness trek for experienced walkers.",
    tags: ["Glacial lake", "Sherpa villages", "Wilderness"],
    categories: ["remote", "high-altitude"],
    image: I.tshoRolpa,
    href: "/offbeat-unexplored/tsho-rolpa-lake",
    dedicated: true,
  },
  {
    id: "kanchenjunga",
    name: "Kanchenjunga Region",
    region: "Taplejung · Koshi Province",
    description:
      "The far-eastern wilderness around the world's third-highest mountain, with long valleys, glaciers and Limbu and Sherpa villages. A remote, restricted-area adventure.",
    tags: ["Restricted area", "Glaciers", "Remote valleys"],
    categories: ["remote", "high-altitude"],
    image: I.kanchenjunga,
    href: KOSHI,
    dedicated: false,
  },
  {
    id: "makalu-base-camp",
    name: "Makalu Base Camp",
    region: "Makalu Barun · Koshi Province",
    description:
      "A rugged route through the biodiverse Makalu Barun region to the base camp beneath the world's fifth-highest mountain. Challenging, remote and rarely crowded.",
    tags: ["Makalu Barun", "Biodiversity", "Wilderness"],
    categories: ["remote", "high-altitude"],
    image: I.makalu,
    href: KOSHI,
    dedicated: false,
  },
  {
    id: "api-nampa",
    name: "Api Nampa Base Camp",
    region: "Darchula · Sudurpaschim Province",
    description:
      "A remote far-western trek into the Api Nampa Conservation Area, beneath peaks on the borders of Nepal, India and Tibet. Few trekkers and genuine wilderness.",
    tags: ["Far west", "Conservation area", "Wilderness"],
    categories: ["remote", "high-altitude"],
    // components/activities/adventure/api-nampa-base-camp/data/content.ts
    duration: "≈ 12 days",
    difficulty: "Challenging",
    maxAltitude: "≈ 4,100 m",
    image: I.apiNampa,
    href: "/adventure/api-nampa-base-camp-trek",
    dedicated: true,
  },
  {
    id: "shey-phoksundo",
    name: "Dolpo & Shey Phoksundo",
    region: "Dolpa · Karnali Province",
    description:
      "Turquoise Phoksundo Lake and the Bon and Buddhist culture of Dolpo, in Shey Phoksundo National Park. One of Nepal's most remote and spectacular trekking regions.",
    tags: ["Phoksundo Lake", "Dolpo culture", "National park"],
    categories: ["remote", "cultural"],
    image: I.dolpo,
    href: "/offbeat-unexplored/shey-phoksundo",
    dedicated: true,
  },
  {
    id: "rara-lake",
    name: "Rara Lake",
    region: "Mugu · Karnali Province",
    description:
      "Nepal's largest lake, ringed by pine forest in Rara National Park. Lake-shore trails and the Murma Top viewpoint reward the long journey west.",
    tags: ["Largest lake", "Murma Top", "National park"],
    categories: ["remote"],
    image: I.raraLake,
    href: "/offbeat-unexplored/rara-lake",
    dedicated: true,
  },
  {
    id: "khaptad",
    name: "Khaptad National Park",
    region: "Far West · Sudurpaschim Province",
    description:
      "A high plateau of rolling meadows and forest, home to the Khaptad Baba Ashram and sacred sites. Gentle, peaceful walking in one of Nepal's least-visited corners.",
    tags: ["Alpine meadows", "Khaptad Baba Ashram", "Forest trails"],
    categories: ["remote", "cultural"],
    image: I.khaptad,
    href: "/offbeat-unexplored/khaptad-national-park",
    dedicated: true,
  },
  {
    id: "saipal-base-camp",
    name: "Saipal Base Camp",
    region: "Bajhang · Sudurpaschim Province",
    description:
      "An expedition-style journey to the foot of Mount Saipal in remote Bajhang. Alpine wilderness for trekkers comfortable with long days and basic facilities.",
    tags: ["Expedition style", "Alpine wilderness", "Far west"],
    categories: ["remote", "high-altitude"],
    image: I.saipal,
    href: "/offbeat-unexplored/saipal-base-camp",
    dedicated: true,
  },
];

export const TREK_CATEGORIES: { id: TrekCategory | "all"; label: string; hint: string }[] = [
  { id: "all", label: "All Adventures", hint: "Every trail on this page" },
  { id: "short", label: "Short Hikes", hint: "A few days, lower altitude" },
  { id: "beginner", label: "Beginner-Friendly", hint: "Good first Himalayan treks" },
  { id: "cultural", label: "Cultural Trails", hint: "Villages, monasteries, sacred sites" },
  { id: "classic", label: "Classic Himalayan", hint: "Nepal's best-known routes" },
  { id: "high-altitude", label: "High-Altitude", hint: "Routes reaching high camps and passes" },
  { id: "remote", label: "Remote Wilderness", hint: "Quiet, far-flung regions" },
];
