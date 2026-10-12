export type DestinationCategory =
  | "Spiritual"
  | "Heritage"
  | "Wildlife"
  | "Culture"
  | "Nature"
  | "Adventure";

export const destinationCategories: DestinationCategory[] = [
  "Spiritual",
  "Heritage",
  "Wildlife",
  "Culture",
  "Nature",
  "Adventure",
];

export interface SudurpaschimDestination {
  slug: string;
  name: string;
  district: string;
  /** Short label shown above the title. */
  kicker: string;
  categories: DestinationCategory[];
  description: string;
  tags: string[];
  image: string;
  alt: string;
  /** Existing detail page. Destinations without one link to an enquiry instead. */
  href?: string;
}

// Image slots live in /public/sudurpaschim/. Several are shared with other
// sections on this page; never substitute photos of other regions.
export const sudurpaschimDestinations: SudurpaschimDestination[] = [
  {
    slug: "khaptad",
    name: "Khaptad National Park",
    district: "Bajhang · Doti · Achham · Bajura",
    kicker: "National Park",
    categories: ["Nature", "Spiritual", "Adventure"],
    description:
      "A rolling highland plateau of alpine meadows (patans) and oak and rhododendron forest shared by four districts. The Khaptad Baba Ashram, Tribeni Dham and Sahasralinga give the park a quiet spiritual heart.",
    tags: ["Trekking", "Birdwatching", "Spiritual retreat"],
    image: "/sudurpaschim/khaptad.jpg",
    alt: "Highland meadows of Khaptad National Park",
    href: "/offbeat-unexplored/khaptad-national-park",
  },
  {
    slug: "badimalika",
    name: "Badimalika",
    district: "Bajura",
    kicker: "Sacred Peak",
    categories: ["Spiritual", "Adventure", "Nature"],
    description:
      "Badimalika Temple crowns a high ridge above Martadi, reached across vast open grasslands with sweeping Himalayan views. The main pilgrimage gathers around Janai Purnima, when the meadows are green and alive with devotees.",
    tags: ["Pilgrimage trek", "Grasslands", "Remote Himalaya"],
    image: "/sudurpaschim/badimalika.jpg",
    alt: "Badimalika Temple in the Bajura highlands",
  },
  {
    slug: "api-nampa",
    name: "Api Himal & Api Nampa",
    district: "Darchula",
    kicker: "Conservation Area",
    categories: ["Adventure", "Nature"],
    description:
      "Api Himal (7,132 m) rises over the Api Nampa Conservation Area, where rugged valleys hold remote mountain villages and the Mahakali River marks the western frontier. Base camp treks here see only a handful of outside visitors each season.",
    tags: ["Trekking", "Mountaineering", "Wilderness"],
    image: "/sudurpaschim/api-himal.jpg",
    alt: "Api Himal seen from the Darchula approach trail",
    href: "/adventure/api-nampa-base-camp-trek",
  },
  {
    slug: "saipal",
    name: "Saipal Himal",
    district: "Bajhang",
    kicker: "Himalayan Expedition",
    categories: ["Adventure", "Nature"],
    description:
      "A striking 7,000 m-class massif above Bajhang's Bungal and Chainpur valleys. Long, self-sufficient approaches suit experienced trekkers, expedition teams and mountain photographers.",
    tags: ["Base camp trek", "Expedition", "Photography"],
    image: "/sudurpaschim/bajhang.jpg",
    alt: "Himalayan village below the Saipal range in Bajhang",
    href: "/offbeat-unexplored/saipal-base-camp",
  },
  {
    slug: "ramaroshan",
    name: "Ramaroshan",
    district: "Achham",
    kicker: "Lakes & Meadows",
    categories: ["Nature", "Culture", "Adventure"],
    description:
      "A cluster of lakes, green hills and open meadows above Mangalsen, framed by pine forest and traditional settlements. It is one of the province's best spots for easy camping and landscape photography.",
    tags: ["Nature walks", "Camping", "Rural life"],
    image: "/sudurpaschim/ramaroshan.jpg",
    alt: "Highland lakes of the Ramaroshan area, Achham",
  },
  {
    slug: "ghodaghodi",
    name: "Ghodaghodi Lake",
    district: "Kailali",
    kicker: "Ramsar Wetland",
    categories: ["Wildlife", "Nature"],
    description:
      "A Ramsar-listed complex of forest-fringed oxbow lakes on the East–West Highway, a short drive from Tikapur. Its waters support resident and migratory birds, turtles and the Tharu communities who live around them.",
    tags: ["Birdwatching", "Wetlands", "Photography"],
    image: "/sudurpaschim/ghodaghodi.jpg",
    alt: "Still waters of Ghodaghodi Lake wetland",
  },
  {
    slug: "shuklaphanta",
    name: "Shuklaphanta National Park",
    district: "Kanchanpur",
    kicker: "National Park",
    categories: ["Wildlife", "Nature"],
    description:
      "Vast phanta grasslands bordering the Mahakali River shelter one of the world's largest herds of swamp deer, along with grassland birds and big-cat habitat. Rani Tal and Bedkot Lake sit close by.",
    tags: ["Jeep safari", "Swamp deer", "Birdwatching"],
    image: "/sudurpaschim/shuklaphanta.jpg",
    alt: "Open grasslands of Shuklaphanta National Park",
  },
  {
    slug: "surma-sarovar",
    name: "Surma Sarovar",
    district: "Bajhang",
    kicker: "Sacred Lake",
    categories: ["Spiritual", "Adventure", "Nature"],
    description:
      "A remote high-altitude lake beneath Surma Devi, reached on multi-day trails through Bajhang's mountain villages. Pilgrims and trekkers share the route through some of the quietest Himalayan country in Nepal.",
    tags: ["Pilgrimage", "High-altitude trek", "Alpine lake"],
    image: "/sudurpaschim/surma-sarovar.jpg",
    alt: "Surma Sarovar lake surrounded by mountains in Bajhang",
  },
  {
    slug: "budhinanda",
    name: "Budhinanda",
    district: "Bajura",
    kicker: "High-Altitude Shrine",
    categories: ["Spiritual", "Adventure"],
    description:
      "A sacred shrine and lake high in Bajura's mountains, often paired with the Badimalika pilgrimage. Dramatic ridgelines and seasonal meadows make the walk as memorable as the destination.",
    tags: ["Pilgrimage", "Trekking", "Mountain views"],
    image: "/sudurpaschim/budhinanda.jpg",
    alt: "High mountain landscape around Budhinanda in Bajura",
  },
  {
    slug: "jhilmila",
    name: "Jhilmila Lake",
    district: "Kanchanpur",
    kicker: "Hill Lake",
    categories: ["Nature"],
    description:
      "A peaceful lake in the forested Chure hills above the Kanchanpur plains. Quiet trails, birdsong and soft morning light make it a gentle day trip from Mahendranagar.",
    tags: ["Nature walks", "Photography", "Day trip"],
    image: "/sudurpaschim/jhilmila.jpg",
    alt: "Jhilmila Lake among forested hills in Kanchanpur",
  },
  {
    slug: "ugratara",
    name: "Ugratara Temple",
    district: "Dadeldhura",
    kicker: "Temple",
    categories: ["Spiritual", "Heritage"],
    description:
      "One of the far west's most revered Bhagwati shrines, set on the hill road through Dadeldhura. Its fairs offer a window into regional pilgrimage traditions and local devotional music.",
    tags: ["Pilgrimage", "Temple fair", "Local culture"],
    image: "/sudurpaschim/ugratara.jpg",
    alt: "Ugratara Temple in Dadeldhura district",
  },
  {
    slug: "shaileshwari",
    name: "Shaileshwari Temple",
    district: "Doti",
    kicker: "Temple Town",
    categories: ["Spiritual", "Heritage", "Culture"],
    description:
      "The guardian goddess of Doti, worshipped in the temple town of Silgadhi above the Seti River. Together with the old Doti Durbar area, it anchors the Doteli identity of the hills.",
    tags: ["Pilgrimage", "Doteli culture", "Heritage walk"],
    image: "/sudurpaschim/doti.jpg",
    alt: "Shaileshwari Temple area in Doti district",
  },
  {
    slug: "tripura-sundari",
    name: "Tripura Sundari Temple",
    district: "Baitadi",
    kicker: "Temple",
    categories: ["Spiritual", "Heritage"],
    description:
      "A notable pilgrimage site in Baitadi, reflecting the stone temple traditions of the Mahakali hills. Nearby Melauli Bhagwati and Baitadeli villages round out a slow cultural circuit.",
    tags: ["Pilgrimage", "Temple architecture", "Village life"],
    image: "/sudurpaschim/baitadi.jpg",
    alt: "Temple village landscape in Baitadi district",
  },
  {
    slug: "godawari-dham",
    name: "Godawari Dham",
    district: "Kailali",
    kicker: "Forest Shrine",
    categories: ["Spiritual", "Nature"],
    description:
      "A forest pilgrimage site near Attariya where springs and shrines sit at the foot of the Chure hills. Its seasonal fairs mix devotion, picnics and an easy taste of far-western community life.",
    tags: ["Pilgrimage", "Forest walk", "Festivals"],
    image: "/sudurpaschim/godawari-dham.jpg",
    alt: "Shrine among forest at Godawari Dham near Attariya",
  },
  {
    slug: "dadeldhura",
    name: "Dadeldhura",
    district: "Dadeldhura",
    kicker: "Hill Town",
    categories: ["Heritage", "Culture", "Nature"],
    description:
      "A cool ridge-top town with Mahabharat hill viewpoints, Amargadhi Fort and Ajaymeru close by. It is a natural stopover on the road from the plains into Baitadi, Doti and the Himalayan districts.",
    tags: ["Viewpoints", "Forts", "Hill culture"],
    image: "/sudurpaschim/dadeldhura.jpg",
    alt: "Hilltop fort and temple landscape in Dadeldhura",
  },
  {
    slug: "dhangadhi-mahendranagar",
    name: "Dhangadhi & Mahendranagar",
    district: "Kailali · Kanchanpur",
    kicker: "Gateway Cities",
    categories: ["Culture"],
    description:
      "The province's two Terai gateways: Dhangadhi with its airport and Mahendranagar (Bhimdatta) near the Mahakali border. Both are well placed for Tharu villages, Shuklaphanta and the highways climbing into the hills.",
    tags: ["Tharu culture", "Markets", "Trip base"],
    image: "/sudurpaschim/dhangadhi.jpg",
    alt: "Riverside landscape near Dhangadhi in Kailali district",
  },
];
