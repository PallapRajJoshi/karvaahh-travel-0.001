// Khaptad National Park — quick facts, highlight copy, and destination metadata.
// Centralized so the page content can be updated without touching components.

export interface QuickFact {
  label: string;
  value: string;
}

export const khaptadQuickFacts: QuickFact[] = [
  { label: "Region", value: "Far-Western Nepal" },
  { label: "Districts", value: "Bajhang, Bajura, Doti & Achham" },
  { label: "Altitude Range", value: "Approximately 1,400–3,300 m" },
  { label: "Landscape", value: "Alpine meadows, oak & rhododendron forests" },
  { label: "Best Seasons", value: "Spring & Autumn" },
];

export const khaptadDestinationHighlight: string =
  "Khaptad National Park, nestled in the far-western region of Nepal across Bajhang, Bajura, Doti, and Achham districts, is a serene Himalayan destination renowned for its vast green meadows, rolling hills, dense forests, and spiritual heritage. Located at an altitude ranging from approximately 1,400 to 3,300 meters, the park offers breathtaking landscapes of alpine grasslands, oak and rhododendron forests, and panoramic Himalayan views. Explore the scenic beauty of Khaptad Baba Ashram, Tribeni Dham, Sahasralinga, Khaptad Daha, Nagdhunga, and the expansive Patans (high-altitude meadows). Discover the spiritual legacy of Khaptad Swami, enjoy peaceful nature walks, trekking, birdwatching, wildlife photography, and meditation amid pristine wilderness. The park is home to diverse wildlife, including musk deer, Himalayan black bears, and numerous bird species. Nearby attractions include Badimalika Temple, Budhitola, and the scenic landscapes of the Seti River region. Accessible via Dhangadhi, Dipayal, or Silgadhi, followed by an overland journey and trekking, Khaptad is an ideal destination for offbeat travelers seeking tranquility, spiritual experiences, and untouched natural beauty, especially during spring and autumn.";

export interface HighlightCard {
  id: string;
  title: string;
  description: string;
}

export const khaptadWhyVisit: HighlightCard[] = [
  {
    id: "meadows",
    title: "Expansive Alpine Meadows",
    description: "Explore the park's vast Patans and rolling grasslands.",
  },
  {
    id: "spiritual",
    title: "Spiritual Heritage",
    description: "Discover Khaptad Baba Ashram and the legacy of Khaptad Swami.",
  },
  {
    id: "landscapes",
    title: "Peaceful Himalayan Landscapes",
    description: "Experience tranquil forests, open meadows, and panoramic mountain views.",
  },
  {
    id: "biodiversity",
    title: "Rich Biodiversity",
    description: "Learn about the park's diverse wildlife and birdlife.",
  },
  {
    id: "trails",
    title: "Forest & Nature Trails",
    description: "Walk through oak and rhododendron forests.",
  },
  {
    id: "landmarks",
    title: "Sacred Natural Landmarks",
    description: "Visit Tribeni Dham, Sahasralinga, and Khaptad Daha.",
  },
  {
    id: "trekking",
    title: "Offbeat Trekking Adventures",
    description: "Explore remote trails and scenic highland landscapes.",
  },
  {
    id: "meditation",
    title: "Meditation & Tranquility",
    description: "Enjoy peaceful surroundings for reflection and mindful travel.",
  },
];

export interface SeasonInfo {
  id: string;
  season: string;
  months: string;
  points: string[];
}

export const khaptadSeasons: SeasonInfo[] = [
  {
    id: "spring",
    season: "Spring",
    months: "March to May",
    points: [
      "Fresh greenery and seasonal rhododendron blooms.",
      "Pleasant opportunities for nature walks and scenic exploration, depending on weather.",
    ],
  },
  {
    id: "summer",
    season: "Summer / Monsoon",
    months: "June to August",
    points: [
      "Lush meadows and forest landscapes.",
      "Rainfall may affect road access, trails, and visibility.",
    ],
  },
  {
    id: "autumn",
    season: "Autumn",
    months: "September to November",
    points: [
      "Popular season for trekking and scenic exploration.",
      "Often favorable conditions for mountain views when weather permits.",
    ],
  },
  {
    id: "winter",
    season: "Winter",
    months: "December to February",
    points: [
      "Cold temperatures and possible snowfall.",
      "Some trails and access routes may become difficult or inaccessible.",
    ],
  },
];

export const khaptadWildlife: string[] = [
  "Musk deer",
  "Himalayan black bear",
  "Diverse bird species",
  "Forest ecosystems and alpine grasslands",
  "Oak and rhododendron forests",
  "Seasonal vegetation and wildflowers",
];

export const khaptadConservationMessage: string =
  "Explore responsibly. Respect wildlife, protect fragile meadows, and follow all national park regulations during your visit.";

export interface CultureItem {
  id: string;
  title: string;
  description: string;
}

export const khaptadCulture: CultureItem[] = [
  {
    id: "swami",
    title: "The Legacy of Khaptad Swami",
    description:
      "Khaptad Baba Ashram carries the spiritual legacy of Khaptad Swami, a revered figure whose presence shaped the site as a place of meditation and pilgrimage.",
  },
  {
    id: "ashram",
    title: "Khaptad Baba Ashram",
    description:
      "A peaceful retreat set within the park's forest surroundings, still visited for meditation and spiritual reflection.",
  },
  {
    id: "sacred-sites",
    title: "Sacred Sites",
    description: "Tribeni Dham and Sahasralinga hold religious significance within the wider Khaptad region.",
  },
  {
    id: "communities",
    title: "Traditional Mountain Communities",
    description:
      "The surrounding districts of Bajhang, Bajura, Doti, and Achham are home to traditional far-western Nepali communities.",
  },
  {
    id: "local-life",
    title: "Local Food & Culture",
    description: "Regional cultural experiences and local hospitality are part of a visit to the wider Khaptad area.",
  },
  {
    id: "community-tourism",
    title: "Community-Based Tourism",
    description: "Local hospitality and community-based tourism initiatives exist in the region where available.",
  },
];

export interface AccessRoute {
  id: string;
  name: string;
  description: string;
}

export const khaptadAccessRoutes: AccessRoute[] = [
  {
    id: "dhangadhi",
    name: "Dhangadhi",
    description: "A common regional gateway for onward overland travel toward the Khaptad region.",
  },
  {
    id: "dipayal",
    name: "Dipayal",
    description: "An alternative approach point for travelers heading toward Khaptad from the far-west.",
  },
  {
    id: "silgadhi",
    name: "Silgadhi",
    description: "A frequently used access point before the final overland and trekking approach to the park.",
  },
];

export interface StartingPoint {
  id: string;
  name: string;
}

export const khaptadStartingPoints: StartingPoint[] = [
  { id: "kathmandu", name: "Kathmandu" },
  { id: "dhangadhi", name: "Dhangadhi" },
  { id: "dipayal", name: "Dipayal" },
  { id: "silgadhi", name: "Silgadhi" },
  { id: "budhitola", name: "Budhitola" },
];

export interface AccommodationOption {
  id: string;
  title: string;
  description: string;
}

export const khaptadAccommodation: AccommodationOption[] = [
  {
    id: "lodges",
    title: "Local Lodges & Guesthouses",
    description: "Basic lodges and guesthouses serving travelers in the wider Khaptad region.",
  },
  {
    id: "access-point-stays",
    title: "Basic Accommodation Near Access Points",
    description: "Simple stays near the park's main access points, useful before or after the trekking approach.",
  },
  {
    id: "homestays",
    title: "Community-Based Homestays",
    description: "Homestays with local communities, where available, offering an authentic regional experience.",
  },
  {
    id: "camping",
    title: "Camping in Authorized Areas",
    description: "Camping is possible within designated and authorized areas of the park.",
  },
  {
    id: "trekking-accommodation",
    title: "Basic Trekking Accommodation",
    description: "Simple trekking-standard accommodation along regional routes, where available.",
  },
];

export const khaptadEssentialsChecklist: string[] = [
  "Warm layered clothing",
  "Waterproof jacket and weather protection",
  "Comfortable trekking shoes",
  "Sun protection and sunglasses",
  "Personal medication and first-aid supplies",
  "Reusable water bottle and water purification supplies",
  "Power bank and offline maps",
  "Cash for remote areas",
  "Suitable camping equipment if camping is planned",
  "Advance confirmation of accommodation and transportation",
  "Awareness of weather, trail conditions, and remote-area limitations",
];

export const khaptadPermitNotes: string[] = [
  "Applicable national park entry permits and fees must be verified before travel.",
  "Visitors should follow current park regulations and designated trail rules.",
  "Camping and other activities may require authorization.",
  "Current permit requirements and fees should be confirmed through official sources.",
];
