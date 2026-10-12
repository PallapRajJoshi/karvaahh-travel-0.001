export const bagmatiCategories = [
  "Heritage",
  "Spiritual",
  "Trekking",
  "Nature",
  "Wildlife",
  "Culture",
  "Adventure",
] as const;

export type BagmatiCategory = (typeof bagmatiCategories)[number];

export interface BagmatiHighlight {
  id: string;
  name: string;
  district: string;
  description: string;
  tags: string[];
  categories: BagmatiCategory[];
  /** Omitted where the project has no matching photo — the card shows a styled fallback. */
  image?: string;
  alt?: string;
  /** Must be an EXISTING route. Destinations without a dedicated page link to related tours or the planner. */
  href: string;
  linkLabel: string;
}

const VALLEY_TOURS = "/packages/nepal/spiritual-pilgrimage-tours#packages";
const PLAN = "/contact?province=bagmati";

export const bagmatiHighlights: BagmatiHighlight[] = [
  {
    id: "kathmandu",
    name: "Kathmandu",
    district: "Kathmandu",
    description:
      "Nepal's capital wraps palaces, pagodas and bazaars around Kathmandu Durbar Square, the old royal heart of the valley. Wander Asan and Indra Chowk markets, spot the Kumari's residence and slip into hidden Newar courtyards.",
    tags: ["Durbar Square", "Markets", "Newar culture"],
    categories: ["Heritage", "Culture"],
    image: "/images/bagmati/kathmandu-durbar-square-heritage-city-bagmati-nepal.jpg",
    alt: "Pagoda temples of Kathmandu Durbar Square",
    href: VALLEY_TOURS,
    linkLabel: "View Kathmandu tours",
  },
  {
    id: "pashupatinath",
    name: "Pashupatinath",
    district: "Kathmandu",
    description:
      "A UNESCO-listed temple complex on the Bagmati River and one of the holiest Shiva shrines in the Hindu world. Evening aarati on the ghats and the great Maha Shivaratri festival draw pilgrims from across Nepal and India.",
    tags: ["Lord Shiva", "Aarati", "Pilgrimage"],
    categories: ["Spiritual", "Heritage"],
    image: "/images/bagmati/pashupatinath-temple-sacred-pilgrimage-bagmati-nepal.jpg",
    alt: "Pashupatinath Temple on the banks of the Bagmati River",
    href: "/spiritual-journeys/pashupatinath",
    linkLabel: "Explore destination",
  },
  {
    id: "boudhanath",
    name: "Boudhanath",
    district: "Kathmandu",
    description:
      "One of the largest stupas in the world, its great white dome is circled by prayer wheels, butter lamps and dozens of Tibetan Buddhist monasteries. Join the clockwise kora at dusk, when the whole neighbourhood walks in devotion.",
    tags: ["Stupa", "Tibetan Buddhism", "Monasteries"],
    categories: ["Spiritual", "Heritage", "Culture"],
    href: VALLEY_TOURS,
    linkLabel: "View valley tours",
  },
  {
    id: "swayambhunath",
    name: "Swayambhunath",
    district: "Kathmandu",
    description:
      "An ancient hilltop stupa whose painted Buddha eyes gaze over the whole Kathmandu Valley. The climb up its eastern stairway rewards you with shrines, prayer flags and one of the best city panoramas at sunset.",
    tags: ["Stupa", "Valley views", "UNESCO"],
    categories: ["Spiritual", "Heritage"],
    image: "/images/bagmati/swayambhunath-stupa-kathmandu-valley-unesco-heritage-nepal.jpg",
    alt: "Swayambhunath Stupa above the Kathmandu Valley",
    href: VALLEY_TOURS,
    linkLabel: "View valley tours",
  },
  {
    id: "patan",
    name: "Patan",
    district: "Lalitpur",
    description:
      "The 'city of fine arts' is famed for Patan Durbar Square, the stone Krishna Mandir and the gilded Golden Temple. Its lanes still ring with metalworkers and woodcarvers practising centuries-old Newar crafts.",
    tags: ["Newar architecture", "Craftsmanship", "Courtyards"],
    categories: ["Heritage", "Culture"],
    image: "/images/bagmati/lalitpur-patan-durbar-square-krishna-mandir-heritage-nepal.jpg",
    alt: "Krishna Mandir in Patan Durbar Square",
    href: VALLEY_TOURS,
    linkLabel: "View valley tours",
  },
  {
    id: "bhaktapur",
    name: "Bhaktapur",
    district: "Bhaktapur",
    description:
      "A remarkably preserved medieval city of red brick, carved windows and the five-tiered Nyatapola Temple. Watch potters at work in Pottery Square and taste juju dhau, the city's famous 'king of curds'.",
    tags: ["Medieval city", "Pottery", "Nyatapola"],
    categories: ["Heritage", "Culture"],
    image: "/images/bagmati/bhaktapur-durbar-square-nyatapola-temple-heritage-nepal.jpg",
    alt: "Nyatapola Temple in Bhaktapur's Taumadhi Square",
    href: VALLEY_TOURS,
    linkLabel: "View valley tours",
  },
  {
    id: "kirtipur",
    name: "Kirtipur",
    district: "Kathmandu",
    description:
      "A hilltop Newar town on the valley's southwestern edge, with cobbled streets, the Bagh Bhairab and Uma Maheshwar temples and sweeping valley views. Its quiet lanes and local eateries offer an unhurried taste of traditional life.",
    tags: ["Newar town", "Viewpoints", "Local food"],
    categories: ["Heritage", "Culture"],
    href: PLAN,
    linkLabel: "Plan a visit",
  },
  {
    id: "nagarkot-dhulikhel",
    name: "Nagarkot & Dhulikhel",
    district: "Bhaktapur · Kavrepalanchok",
    description:
      "Ridge-top viewpoints on the valley rim with sunrise panoramas stretching from Langtang toward the eastern Himalaya on clear days. Easy hikes link the two, passing farms, forests and small temples.",
    tags: ["Sunrise", "Mountain views", "Day hikes"],
    categories: ["Nature", "Adventure"],
    image: "/images/bagmati/nagarkot-sunrise-himalayan-mountains-hill-escapes-bagmati-nepal.jpg",
    alt: "Sunrise over the Himalaya from Nagarkot",
    href: PLAN,
    linkLabel: "Plan a visit",
  },
  {
    id: "namo-buddha",
    name: "Namo Buddha",
    district: "Kavrepalanchok",
    description:
      "A revered Buddhist pilgrimage site where, according to legend, a prince offered his body to a starving tigress. The hilltop Thrangu Tashi Yangtse Monastery and a walking trail from Dhulikhel make it a peaceful half-day journey.",
    tags: ["Buddhist pilgrimage", "Monastery", "Hiking"],
    categories: ["Spiritual", "Nature"],
    image: "/images/bagmati/dhulikhel-kavrepalanchok-himalayan-mountain-panorama-bagmati-nepal.jpg",
    alt: "Himalayan panorama over the Kavrepalanchok hills near Namo Buddha",
    href: VALLEY_TOURS,
    linkLabel: "View valley tours",
  },
  {
    id: "langtang",
    name: "Langtang",
    district: "Rasuwa",
    description:
      "The closest major Himalayan trekking region to Kathmandu, climbing through rhododendron forest to the glacier-carved Langtang Valley. Kyanjin Gompa, yak pastures and Tamang villages sit beneath Langtang Lirung.",
    tags: ["Trekking", "Glaciers", "Tamang villages"],
    categories: ["Trekking", "Nature", "Adventure"],
    image: "/images/bagmati/langtang-valley-rasuwa-himalayan-mountains-trekking-nepal.jpg",
    alt: "Trekkers in the Langtang Valley beneath snow peaks",
    href: "/adventure/langtang-valley-trek",
    linkLabel: "Explore destination",
  },
  {
    id: "gosaikunda",
    name: "Gosaikunda",
    district: "Rasuwa",
    description:
      "A sacred alpine lake at about 4,380 m, believed to have been created by Lord Shiva and visited by thousands of pilgrims at Janai Purnima. Trekkers combine it with Langtang or cross the Lauribina La toward Helambu.",
    tags: ["Sacred lake", "High altitude", "Pilgrimage"],
    categories: ["Spiritual", "Trekking", "Nature"],
    image: "/images/bagmati/gosainkunda-lake-langtang-himalayan-trekking-bagmati-nepal.jpg",
    alt: "Gosaikunda Lake surrounded by Himalayan ridges",
    href: "/activities/helicopter-tours/gosaikunda",
    linkLabel: "Explore destination",
  },
  {
    id: "rasuwa",
    name: "Rasuwa & Tamang Heritage",
    district: "Rasuwa",
    description:
      "Syabrubesi is the gateway to Langtang and the Tamang Heritage Trail, which links stone villages such as Gatlang and Thuman. Expect homestays, monasteries, hot springs and Tamang song and dance.",
    tags: ["Tamang Heritage Trail", "Homestays", "Villages"],
    categories: ["Culture", "Trekking"],
    image: "/images/bagmati/tamang-village-langtang-himalayan-culture-bagmati-nepal.jpg",
    alt: "Traditional Tamang village in the Langtang region",
    href: "/activities/helicopter-tours/langtang",
    linkLabel: "Explore Langtang",
  },
  {
    id: "helambu",
    name: "Helambu",
    district: "Sindhupalchok",
    description:
      "A gentle, lower-altitude trek north of Kathmandu through Hyolmo villages, apple orchards and old monasteries. It pairs well with Gosaikunda or the high lakes of Panch Pokhari.",
    tags: ["Hyolmo culture", "Short trek", "Monasteries"],
    categories: ["Trekking", "Culture"],
    href: "/offbeat-unexplored/panch-pokhari",
    linkLabel: "Explore Panch Pokhari",
  },
  {
    id: "panch-pokhari",
    name: "Panch Pokhari",
    district: "Sindhupalchok",
    description:
      "Five sacred high-altitude lakes in the Jugal Himal, reached on a remote trek with few other travellers. A major pilgrimage site during Janai Purnima.",
    tags: ["Sacred lakes", "Offbeat", "Trekking"],
    categories: ["Trekking", "Spiritual", "Nature"],
    image: "/images/bagmati/panch-pokhari-sindhupalchok-high-altitude-lake-himalayan-nepal.jpg",
    alt: "High-altitude lake at Panch Pokhari, Sindhupalchok",
    href: "/offbeat-unexplored/panch-pokhari",
    linkLabel: "Explore destination",
  },
  {
    id: "tsho-rolpa",
    name: "Tsho Rolpa",
    district: "Dolakha",
    description:
      "One of Nepal's largest glacial lakes, high in the Rolwaling Valley beneath Gaurishankar. An off-the-beaten-path trek through Sherpa villages such as Beding and Na.",
    tags: ["Glacial lake", "Rolwaling", "Offbeat"],
    categories: ["Trekking", "Adventure", "Nature"],
    image: "/images/bagmati/tsho-rolpa-lake-rolwaling-valley-dolakha-himalayan-adventure-nepal.jpg",
    alt: "Tsho Rolpa glacial lake in the Rolwaling Valley",
    href: "/offbeat-unexplored/tsho-rolpa-lake",
    linkLabel: "Explore destination",
  },
  {
    id: "nuwakot",
    name: "Nuwakot",
    district: "Nuwakot",
    description:
      "A historic hill district where Prithvi Narayan Shah built the seven-storey Nuwakot Durbar before unifying Nepal. Terraced valleys, the Trishuli River and quiet heritage stays make it an easy escape from Kathmandu.",
    tags: ["Palace", "History", "River valleys"],
    categories: ["Heritage", "Nature"],
    image: "/images/bagmati/nuwakot-durbar-square-historic-palace-heritage-nepal.jpg",
    alt: "Nuwakot Durbar palace overlooking the hills",
    href: PLAN,
    linkLabel: "Plan a visit",
  },
  {
    id: "chitwan",
    name: "Chitwan",
    district: "Chitwan",
    description:
      "Chitwan National Park, a UNESCO World Heritage Site, protects one-horned rhinos, Bengal tigers, gharials and over 500 bird species. Base yourself in Sauraha for jeep safaris, canoe rides on the Rapti and Tharu village visits.",
    tags: ["Jungle safari", "Birdwatching", "Tharu culture"],
    categories: ["Wildlife", "Nature", "Culture"],
    image: "/images/bagmati/one-horned-rhinoceros-chitwan-national-park-wildlife-nepal.jpg",
    alt: "One-horned rhinoceros in Chitwan National Park",
    href: "/activities/wildlife-nature",
    linkLabel: "Explore wildlife tours",
  },
  {
    id: "hetauda-makwanpur",
    name: "Hetauda & Makwanpur",
    district: "Makwanpur",
    description:
      "Southern Bagmati's forested hill country, from the Himalayan viewpoint of Daman to the Newar village of Chitlang and the Kulekhani (Indrasarovar) reservoir. Hetauda, the provincial capital, is a natural stop between Kathmandu and the Terai.",
    tags: ["Daman views", "Chitlang", "Lakes"],
    categories: ["Nature", "Culture", "Adventure"],
    image: "/images/bagmati/daman-makwanpur-himalayan-mountain-panorama-bagmati-nepal.jpg",
    alt: "Himalayan panorama from Daman in Makwanpur",
    href: PLAN,
    linkLabel: "Plan a visit",
  },
];
