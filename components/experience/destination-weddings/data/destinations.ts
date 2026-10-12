import type { Region, RegionId, WeddingDestination } from "./types";

export const regions: Region[] = [
  {
    id: "nepal",
    label: "Nepal",
    kicker: "Home ground",
    intro:
      "Himalayan light, living heritage and warm hospitality — the country Karvaahh knows best, and the one that turns a wedding into a once-in-a-lifetime journey for every guest.",
  },
  {
    id: "uttarakhand",
    label: "Uttarakhand",
    kicker: "Devbhumi",
    intro:
      "Sacred rivers, hill stations and the temple where tradition places the divine marriage — for couples who want their vows to carry spiritual meaning.",
  },
  {
    id: "india",
    label: "India",
    kicker: "Palaces to beaches",
    intro:
      "Royal forts, backwaters, mountain resorts and island shores — classic Indian wedding destinations with Karvaahh coordinating the journey around them.",
  },
  {
    id: "international",
    label: "International",
    kicker: "Customisable concepts",
    intro:
      "Island, coastal and cosmopolitan escapes, shaped around your guest list and traditions.",
    note: "Subject to destination feasibility, venue availability, documentation and local regulations.",
  },
];

const img = (file: string, alt: string) => ({ file, alt });

export const weddingDestinations: WeddingDestination[] = [
  /* ───────────── NEPAL ───────────── */
  {
    slug: "pokhara",
    name: "Pokhara",
    region: "nepal",
    title: "Himalayan Lake Wedding",
    description:
      "Celebrate beside Phewa Lake with mountain views, resort hospitality, dramatic sunsets and extraordinary opportunities for wedding photography.",
    highlights: [
      "Phewa Lake",
      "Mountain views",
      "Resort weddings",
      "Outdoor celebrations",
      "Sunset experiences",
      "Pre-wedding photography",
      "Honeymoon extensions",
    ],
    mood: ["Romantic", "Scenic", "Relaxed"],
    styles: ["mountain", "lake", "luxury", "boutique", "intimate"],
    image: img(
      "nepal-pokhara.jpg",
      "Lakeside wedding setting at Phewa Lake, Pokhara, with the Annapurna range at sunset",
    ),
    href: "/destinations/gandaki-province",
    hrefLabel: "Explore Gandaki & Pokhara",
    featured: true,
  },
  {
    slug: "kathmandu",
    name: "Kathmandu",
    region: "nepal",
    title: "Royal Heritage Wedding",
    description:
      "Temples, heritage architecture, luxury hospitality and Newari culture create a distinctive setting for sophisticated destination celebrations.",
    highlights: [
      "Heritage hotels",
      "Temples",
      "Culture",
      "Luxury hospitality",
      "Cultural evenings",
    ],
    mood: ["Regal", "Cultural", "Spiritual"],
    styles: ["heritage", "royal", "luxury", "spiritual"],
    image: img(
      "nepal-kathmandu.jpg",
      "Carved Newari courtyard in the Kathmandu Valley dressed with marigolds for a wedding evening",
    ),
    href: "/destinations/bagmati-province",
    hrefLabel: "Explore Bagmati & Kathmandu",
    featured: true,
  },
  {
    slug: "janakpur",
    name: "Janakpur",
    region: "nepal",
    title: "Sacred Mithila Wedding",
    description:
      "The city of Janaki Mandir, honoured in tradition as the birthplace of Sita — where Mithila art, music and food give a wedding deep cultural roots.",
    highlights: [
      "Janaki Mandir",
      "Mithila culture",
      "Traditional art",
      "Cultural performances",
      "Traditional cuisine",
    ],
    mood: ["Sacred", "Traditional", "Colourful"],
    styles: ["spiritual", "heritage"],
    image: img(
      "nepal-janakpur.jpg",
      "Janaki Mandir in Janakpur with Mithila-painted wedding decor in the foreground",
    ),
    href: "/destinations/madhesh-province",
    hrefLabel: "Explore Madhesh & Janakpur",
  },
  {
    slug: "lumbini",
    name: "Lumbini",
    region: "nepal",
    title: "Wedding of Peace & Spirituality",
    description:
      "The birthplace of the Buddha offers a calm, reflective backdrop — especially meaningful for Buddhist-influenced and international celebrations.",
    highlights: [
      "Heritage",
      "Peace",
      "Buddhist culture",
      "International guest experience",
    ],
    mood: ["Peaceful", "Spiritual", "Cultural"],
    styles: ["spiritual", "heritage", "intimate"],
    image: img(
      "nepal-lumbini.jpg",
      "Prayer flags and a calm garden walkway in Lumbini at golden hour",
    ),
    href: "/destinations/lumbini-province",
    hrefLabel: "Explore Lumbini",
  },
  {
    slug: "ghandruk",
    name: "Ghandruk",
    region: "nepal",
    title: "Himalayan Village Wedding",
    description:
      "A stone-built Gurung village facing Annapurna South and Machhapuchhre — for small, experiential celebrations that feel truly of the mountains.",
    highlights: [
      "Mountain setting",
      "Gurung culture",
      "Intimate celebrations",
      "Experiential wedding",
    ],
    mood: ["Authentic", "Intimate", "Himalayan"],
    styles: ["mountain", "intimate"],
    image: img(
      "nepal-ghandruk.jpg",
      "Stone houses of Ghandruk village with snow peaks behind and a small outdoor wedding table",
    ),
    href: "/destinations/gandaki-province",
    hrefLabel: "Explore Gandaki",
    note: "Road and trail access suits smaller guest groups; logistics are planned around the season.",
  },
  {
    slug: "chitwan",
    name: "Chitwan",
    region: "nepal",
    title: "Jungle & Resort Celebration",
    description:
      "Riverside resorts on the edge of the national park — a wedding that doubles as a nature holiday for your guests.",
    highlights: [
      "Resort experiences",
      "Nature",
      "Jungle experiences",
      "Cultural experiences",
      "Wedding + holiday",
    ],
    mood: ["Nature", "Resort", "Experience"],
    styles: ["nature", "boutique", "luxury"],
    image: img(
      "nepal-chitwan.jpg",
      "Riverside resort lawn near Chitwan National Park prepared for an evening reception",
    ),
    href: "/destinations/bagmati-province",
    hrefLabel: "Explore Bagmati & Chitwan",
  },

  /* ───────────── UTTARAKHAND ───────────── */
  {
    slug: "triyuginarayan",
    name: "Triyuginarayan",
    region: "uttarakhand",
    title: "Sacred Himalayan Wedding",
    description:
      "A spiritually meaningful destination associated with the traditional account of the divine marriage of Shiva and Parvati.",
    highlights: [
      "Sacred temple experience",
      "Himalayan setting",
      "Hindu wedding atmosphere",
      "Family pilgrimage journey",
      "Kedarnath extension",
      "Uttarakhand sightseeing",
    ],
    mood: ["Sacred", "Himalayan", "Devotional"],
    styles: ["spiritual", "mountain", "intimate"],
    image: img(
      "uttarakhand-triyuginarayan.jpg",
      "Stone temple at Triyuginarayan in the Garhwal Himalaya under morning light",
    ),
    note: "Temple ceremonies, décor, photography, guest capacity and event activities are subject to temple management, local authorities, religious practices and site regulations.",
    featured: true,
  },
  {
    slug: "rishikesh",
    name: "Rishikesh",
    region: "uttarakhand",
    title: "Sacred River Wedding",
    description:
      "Ganga-side calm, yoga and meditation — a wedding with a wellness rhythm for the whole family.",
    highlights: [
      "Spiritual experience",
      "Wellness",
      "Yoga",
      "Meditation",
      "River surroundings where permitted",
    ],
    mood: ["Spiritual", "Serene", "Wellness"],
    styles: ["spiritual", "boutique", "intimate"],
    image: img(
      "uttarakhand-rishikesh.jpg",
      "The Ganga at Rishikesh at dusk with diyas floating on the water",
    ),
    href: "/spiritual-journeys/haridwar-rishikesh-yatra",
    hrefLabel: "See the Haridwar & Rishikesh Yatra",
  },
  {
    slug: "mussoorie",
    name: "Mussoorie",
    region: "uttarakhand",
    title: "Queen of Hills Wedding",
    description:
      "Colonial-era charm and resort hospitality on a ridge facing the snow line.",
    highlights: ["Luxury resorts", "Mountain views", "Intimate celebrations"],
    mood: ["Elegant", "Misty", "Classic"],
    styles: ["mountain", "luxury", "intimate"],
    image: img(
      "uttarakhand-mussoorie.jpg",
      "Hillside resort terrace in Mussoorie overlooking layered blue ridges",
    ),
  },
  {
    slug: "nainital",
    name: "Nainital",
    region: "uttarakhand",
    title: "Lake & Mountain Wedding",
    description:
      "A lake ringed by forested hills — ideal for boutique celebrations with a classic hill-station feel.",
    highlights: ["Lake surroundings", "Boutique celebrations", "Mountain setting"],
    mood: ["Romantic", "Classic", "Lakeside"],
    styles: ["mountain", "lake", "boutique"],
    image: img(
      "uttarakhand-nainital.jpg",
      "Naini Lake surrounded by forested hills in soft evening light",
    ),
  },

  /* ───────────── INDIA ───────────── */
  {
    slug: "rajasthan",
    name: "Rajasthan",
    region: "india",
    title: "Royal Palace Wedding",
    description:
      "Palaces, forts and desert light — the grandest stage for a royal celebration and a baraat to remember.",
    highlights: ["Palaces", "Forts", "Heritage", "Royal décor", "Grand baraat"],
    places: ["Jaipur", "Udaipur", "Jodhpur", "Jaisalmer"],
    mood: ["Royal", "Grand", "Heritage"],
    styles: ["royal", "heritage", "luxury"],
    image: img(
      "india-rajasthan.jpg",
      "Palace courtyard in Rajasthan lit with lanterns for a wedding reception",
    ),
    featured: true,
  },
  {
    slug: "goa",
    name: "Goa",
    region: "india",
    title: "Beach Wedding",
    description:
      "Sunset vows, barefoot cocktails and resort pools by the Arabian Sea.",
    highlights: ["Sunset", "Cocktail", "Pool party", "Beach ceremony where permitted"],
    mood: ["Sunlit", "Festive", "Relaxed"],
    styles: ["beach", "boutique", "luxury"],
    image: img(
      "india-goa.jpg",
      "Beach wedding aisle in Goa with white florals at sunset",
    ),
  },
  {
    slug: "kerala",
    name: "Kerala",
    region: "india",
    title: "Backwater Romance",
    description:
      "Palm-fringed backwaters, heritage resorts and a celebrated culinary tradition.",
    highlights: ["Resort", "Backwaters", "Traditional culture", "Culinary experience"],
    mood: ["Lush", "Calm", "Traditional"],
    styles: ["beach", "nature", "boutique"],
    image: img(
      "india-kerala.jpg",
      "Kerala backwaters with a decorated houseboat and coconut palms",
    ),
  },
  {
    slug: "himachal-pradesh",
    name: "Himachal Pradesh",
    region: "india",
    title: "Mountain Romance",
    description: "Pine forests, apple orchards and mountain resorts in Shimla and Manali.",
    highlights: ["Shimla", "Manali", "Luxury resorts"],
    places: ["Shimla", "Manali"],
    mood: ["Alpine", "Cosy", "Scenic"],
    styles: ["mountain", "luxury", "intimate"],
    image: img(
      "india-himachal.jpg",
      "Mountain resort lawn in Himachal Pradesh with deodar forest and snow peaks",
    ),
  },
  {
    slug: "andaman-nicobar",
    name: "Andaman & Nicobar",
    region: "india",
    title: "Island Wedding",
    description: "Clear water, quiet beaches and a honeymoon that begins the morning after.",
    highlights: ["Beach", "Island experience", "Honeymoon"],
    mood: ["Tropical", "Secluded", "Romantic"],
    styles: ["beach", "intimate"],
    image: img(
      "india-andaman.jpg",
      "Turquoise water and white sand beach in the Andaman Islands",
    ),
  },

  /* ───────────── INTERNATIONAL ───────────── */
  ...(
    [
      ["bali", "Bali", "Island & Temple Wedding", "Cliff-top villas, rice terraces and Balinese ceremony arts.", ["beach", "luxury", "boutique"]],
      ["thailand", "Thailand", "Tropical Resort Wedding", "Beach resorts and island hospitality with easy guest connections.", ["beach", "luxury"]],
      ["maldives", "Maldives", "Private Island Wedding", "Over-water villas and the most intimate island celebrations.", ["beach", "intimate", "luxury"]],
      ["sri-lanka", "Sri Lanka", "Coast & Tea-Country Wedding", "Colonial forts, beaches and highland tea estates in one journey.", ["beach", "heritage", "boutique"]],
      ["dubai-uae", "Dubai / UAE", "Desert Luxury Wedding", "Grand ballrooms, desert evenings and seamless connectivity.", ["luxury", "royal"]],
      ["malaysia", "Malaysia", "Rainforest & City Wedding", "Island resorts, rainforest retreats and modern city venues.", ["beach", "nature", "boutique"]],
      ["vietnam", "Vietnam", "Coastal Heritage Wedding", "Lantern-lit old towns and long, quiet beaches.", ["beach", "heritage", "boutique"]],
      ["greece", "Greece", "Aegean Island Wedding", "Whitewashed villages, sea views and long summer evenings.", ["beach", "luxury", "intimate"]],
    ] as const
  ).map(
    ([slug, name, title, description, styles]): WeddingDestination => ({
      slug,
      name,
      region: "international",
      title,
      description,
      highlights: [],
      mood: ["Customisable", "Concept", "International"],
      styles: [...styles],
      image: img(`intl-${slug}.jpg`, `${name} destination wedding setting`),
    }),
  ),
];

export const destinationsByRegion = (region: RegionId) =>
  weddingDestinations.filter((d) => d.region === region);

/** Destination strip shown in the hero. */
export const heroRegions = ["Nepal", "Uttarakhand", "India", "International"];

export const heroStyles = [
  "Mountain Weddings",
  "Sacred Weddings",
  "Beach Weddings",
  "Heritage Weddings",
  "Royal Weddings",
];
