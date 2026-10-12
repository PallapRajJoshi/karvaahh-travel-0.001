export const koshiCategories = [
  "All",
  "Trekking",
  "Nature",
  "Wildlife",
  "Culture",
  "Heritage",
  "Pilgrimage",
  "Adventure",
] as const;

export type KoshiCategory = Exclude<(typeof koshiCategories)[number], "All">;

export type KoshiDestination = {
  name: string;
  location: string;
  description: string;
  tags: string[];
  categories: KoshiCategory[];
  image: string;
  alt: string;
  /**
   * Only set when a matching page already exists in the project.
   * Destinations without one fall back to a trip enquiry.
   */
  link?: { href: string; label: string };
};

const PILGRIMAGE_PAGE = "/packages/nepal/spiritual-pilgrimage-tours#destinations";

export const koshiDestinations: KoshiDestination[] = [
  {
    name: "Everest Region",
    location: "Solukhumbu",
    description:
      "Home to Mount Everest (8,849 m) and Sagarmatha National Park, a UNESCO World Heritage Site. Trails climb past the Khumbu Glacier to Everest Base Camp and viewpoints such as Kala Patthar, through Sherpa villages rich in mountain culture.",
    tags: ["Everest Base Camp", "Glaciers", "Sherpa culture", "Viewpoints"],
    categories: ["Trekking", "Adventure", "Nature"],
    image: "/koshi/everest-base-camp.jpg",
    alt: "Mount Everest, Nuptse and the Khumbu Glacier at dawn, seen from the Kala Patthar area",
    link: { href: "/adventure/everest-base-camp-trek", label: "Everest Base Camp Trek" },
  },
  {
    name: "Namche Bazaar & Tengboche",
    location: "Solukhumbu",
    description:
      "Namche Bazaar is the bustling Sherpa trading town and acclimatisation stop of the Khumbu. A day's walk on, Tengboche Monastery sits on a forested ridge facing Ama Dablam and Everest, and hosts the Mani Rimdu festival.",
    tags: ["Sherpa villages", "Monasteries", "Trekking trails", "Ama Dablam views"],
    categories: ["Trekking", "Culture", "Heritage"],
    image: "/koshi/gokyori.jpg",
    alt: "Sunrise breaking over Himalayan peaks above a sea of cloud in the Khumbu region",
    link: { href: "/adventure/everest-three-passes-trek", label: "Everest Three Passes Trek" },
  },
  {
    name: "Ilam & Kanyam",
    location: "Ilam",
    description:
      "Nepal's tea capital, where manicured tea gardens roll over green hills near the Indian border. Kanyam and Fikkal are easy stops for tea tasting, short walks and quiet countryside stays.",
    tags: ["Tea gardens", "Tea tasting", "Green hills", "Slow travel"],
    categories: ["Nature", "Culture"],
    image: "/koshi/illam-tea-hill.jpg",
    alt: "Green tea gardens in the hills of Ilam",
  },
  {
    name: "Antu Danda",
    location: "Ilam",
    description:
      "A ridge-top viewpoint near the Nepal–India border, famous for sunrise over a sea of cloud and views towards Kanchenjunga on clear mornings. Tea estates and homestays make it an easy overnight from Ilam.",
    tags: ["Sunrise", "Tea gardens", "Homestays", "Hill views"],
    categories: ["Nature"],
    image: "/koshi/antu.jpg",
    alt: "Sun setting through haze over tea gardens and pine trees in the eastern hills of Ilam",
  },
  {
    name: "Pathibhara Devi Temple",
    location: "Taplejung",
    description:
      "A revered Devi shrine at around 3,790 m, sacred to Hindus and the Limbu (Kirat) community. Pilgrims walk a steep forest trail above Taplejung, rewarded with views of the Kanchenjunga range.",
    tags: ["Pilgrimage", "Mountain trail", "Kanchenjunga views", "Kirat heritage"],
    categories: ["Pilgrimage", "Culture", "Trekking"],
    image: "/koshi/pathibhara.jpg",
    alt: "Prayer flags around the Pathibhara Devi shrine with the Kanchenjunga range beyond",
    link: { href: PILGRIMAGE_PAGE, label: "Pilgrimage tours" },
  },
  {
    name: "Koshi Tappu Wildlife Reserve",
    location: "Sunsari · Saptari · Udayapur",
    description:
      "A Ramsar-listed wetland on the Sapta Koshi floodplain and one of South Asia's key bird areas. It shelters Nepal's last wild water buffalo (arna) and hundreds of resident and migratory bird species, best seen in winter.",
    tags: ["Migratory birds", "Wild water buffalo", "Boat safari", "Photography"],
    categories: ["Wildlife", "Nature"],
    image: "/koshi/toppu.jpg",
    alt: "Wetland landscape of Koshi Tappu",
    link: { href: "/activities/adventure/boating#wildlife-boating", label: "Koshi Tappu boat safari" },
  },
  {
    name: "Bhedetar & Dhankuta",
    location: "Sunsari · Dhankuta",
    description:
      "A short drive up the Koshi Highway from Dharan, Bhedetar is a breezy hill station with views over the Terai. Further on, Dhankuta and Hile offer orange orchards, Newar-style bazaars and cool ridgeline air.",
    tags: ["Hill station", "Viewpoints", "Road trip", "Local bazaars"],
    categories: ["Nature", "Culture"],
    image: "/koshi/bhedetar.jpg",
    alt: "Hilltop town wrapped in forest and drifting cloud above the plains in eastern Nepal",
  },
  {
    name: "Halesi Mahadev",
    location: "Khotang",
    description:
      "A sacred limestone cave complex revered by Hindus as an abode of Shiva and by Buddhists as Maratika, linked to Guru Padmasambhava. Pilgrims crowd its caverns during Shivaratri.",
    tags: ["Sacred caves", "Hindu & Buddhist", "Shivaratri", "Spiritual travel"],
    categories: ["Pilgrimage", "Heritage", "Culture"],
    image: "/koshi/haleshi-mahadev.jpg",
    alt: "Pilgrims descending into the sacred cave of Halesi Mahadev",
    link: { href: PILGRIMAGE_PAGE, label: "Pilgrimage tours" },
  },
  {
    name: "Mai Pokhari",
    location: "Ilam",
    description:
      "A sacred, Ramsar-listed lake, said to have nine corners, set in mossy forest above Ilam bazaar. Its quiet trails are good for birdwatching, nature walks and seeing rhododendrons in spring.",
    tags: ["Sacred lake", "Forests", "Birdwatching", "Nature walks"],
    categories: ["Nature", "Pilgrimage"],
    image: "/koshi/ilam.jpg",
    alt: "Sunrise over cloud-filled valleys and rolling green hills in Ilam district",
  },
  {
    name: "Kanchenjunga Region",
    location: "Taplejung",
    description:
      "Remote trails lead to the north and south base camps of Kanchenjunga (8,586 m), the world's third-highest mountain. The route passes Limbu and Sherpa villages and requires restricted-area permits and a registered guide.",
    tags: ["Remote trekking", "Base camps", "Mountain panoramas", "Traditional villages"],
    categories: ["Trekking", "Adventure", "Nature"],
    image: "/koshi/kanchenjunga.jpg",
    alt: "Kanchenjunga mountain landscape in eastern Nepal",
  },
  {
    name: "Makalu–Barun National Park",
    location: "Sankhuwasabha · Solukhumbu",
    description:
      "A protected wilderness rising from subtropical forest to the foot of Makalu (8,485 m), the world's fifth-highest peak. Its isolated valleys hold exceptional biodiversity and a demanding base camp trek.",
    tags: ["Wilderness", "Biodiversity", "Makalu Base Camp", "Challenging routes"],
    categories: ["Trekking", "Adventure", "Wildlife"],
    image: "/koshi/barun-valley.jpg",
    alt: "Wild Himalayan landscape of the Makalu-Barun region",
  },
  {
    name: "Dharan & Baraha Kshetra",
    location: "Sunsari",
    description:
      "Barah Kshetra is an ancient Vishnu temple near the Koshi confluence, one of Nepal's great pilgrimage sites. Nearby Dharan adds the Budhasubba, Dantakali and Pindeshwor temples and a lively Kirat food scene.",
    tags: ["Temples", "Pilgrimage", "Local culture", "River landscapes"],
    categories: ["Pilgrimage", "Heritage", "Culture"],
    image: "/koshi/barakshetra.jpg",
    alt: "Barah Kshetra temple of Lord Vishnu by the Koshi river",
    link: { href: PILGRIMAGE_PAGE, label: "Pilgrimage tours" },
  },
  {
    name: "Arun Valley",
    location: "Sankhuwasabha · Bhojpur",
    description:
      "A deep, warm river valley carved by the Arun as it cuts between Makalu and the eastern hills. Tumlingtar, Khandbari and traditional Rai villages are the gateway to offbeat treks and river adventures.",
    tags: ["River valleys", "Rai villages", "Offbeat trails", "Rafting"],
    categories: ["Adventure", "Culture", "Trekking"],
    image: "/koshi/tamur-river.jpg",
    alt: "Rafts running whitewater through a rocky river gorge in eastern Nepal",
  },
];
