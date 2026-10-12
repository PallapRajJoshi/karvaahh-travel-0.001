// data/asia-packages.ts
// CMS-ready Asia journeys for the "Popular Asia Journeys" carousel.
//
// - `price` stays undefined until Karvaahh publishes a real price. The UI then
//   shows "Price on Request" instead of inventing a number.
// - `href` is the package's future URL; it is only linked once the route is
//   listed in LIVE_ROUTES (lib/asia/config.ts). Until then the card offers a
//   "Customize Your Trip" enquiry instead.
// - `durationDays` is a suggested length, shown as such, and is fully customisable.

import type { AsiaImage } from "./asia-destinations";
import type { TravelStyleId } from "./travel-styles";

export interface AsiaPackage {
  id: string;
  name: string;
  slug: string;
  /** Destination ids, first one is the primary country. */
  destinations: string[];
  /** Display label, e.g. "Singapore + Malaysia". */
  countryLabel: string;
  /** Stops for the compact route line. */
  route: string[];
  durationDays: [number, number];
  travelStyles: TravelStyleId[];
  description: string;
  image?: AsiaImage;
  /** Starting price per person in INR. Leave undefined unless published. */
  price?: number;
  featured?: boolean;
  active: boolean;
  href: string;
}

const unsplash = (id: string, alt: string): AsiaImage => ({
  src: `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1000&q=75`,
  alt,
});

const BASE = "/packages/international/asia";

export const asiaPackages: AsiaPackage[] = [
  {
    id: "bangkok-pattaya",
    name: "Bangkok – Pattaya Escape",
    slug: "bangkok-pattaya",
    destinations: ["thailand"],
    countryLabel: "Thailand",
    route: ["Bangkok", "Pattaya", "Coral Island"],
    durationDays: [5, 6],
    travelStyles: ["family", "shopping", "group"],
    description: "City temples and markets in Bangkok, then beach time and island trips from Pattaya.",
    image: unsplash("1508009603885-50cf7c579365", "Thailand Bangkok Pattaya tour: Bangkok street lights at night"),
    featured: true,
    active: true,
    href: `${BASE}/thailand/bangkok-pattaya`,
  },
  {
    id: "phuket-krabi",
    name: "Phuket – Krabi Holiday",
    slug: "phuket-krabi",
    destinations: ["thailand"],
    countryLabel: "Thailand",
    route: ["Phuket", "Phi Phi", "Krabi"],
    durationDays: [6, 7],
    travelStyles: ["beach", "honeymoon", "adventure"],
    description: "Andaman Sea islands, longtail boats and limestone bays at an unhurried pace.",
    image: unsplash("1552465011-b4e21bf6e79a", "Phuket Krabi holiday: longtail boats on a Krabi beach"),
    featured: true,
    active: true,
    href: `${BASE}/thailand/phuket-krabi`,
  },
  {
    id: "bali-honeymoon",
    name: "Bali Honeymoon",
    slug: "bali-honeymoon",
    destinations: ["indonesia"],
    countryLabel: "Indonesia",
    route: ["Ubud", "Nusa Penida", "Seminyak"],
    durationDays: [6, 7],
    travelStyles: ["honeymoon", "luxury", "beach"],
    description: "Private pool villas, rice-terrace mornings and sunset temples by the sea.",
    image: unsplash("1518548419970-58e3b4079ab2", "Bali honeymoon package: Tanah Lot sea temple at sunset"),
    featured: true,
    active: true,
    href: `${BASE}/indonesia/bali-honeymoon`,
  },
  {
    id: "singapore-malaysia",
    name: "Singapore – Malaysia",
    slug: "singapore-malaysia",
    destinations: ["singapore", "malaysia"],
    countryLabel: "Singapore + Malaysia",
    route: ["Singapore", "Kuala Lumpur", "Genting"],
    durationDays: [6, 8],
    travelStyles: ["family", "shopping", "city", "group"],
    description: "Sentosa and Gardens by the Bay, then the Petronas Towers and cool Genting Highlands.",
    image: unsplash("1565967511849-76a60a516170", "Singapore Malaysia package: the Merlion and Marina Bay at night"),
    featured: true,
    active: true,
    href: `${BASE}/singapore/singapore-malaysia`,
  },
  {
    id: "vietnam-north-south",
    name: "Hanoi – Da Nang – Ho Chi Minh",
    slug: "hanoi-da-nang-ho-chi-minh",
    destinations: ["vietnam"],
    countryLabel: "Vietnam",
    route: ["Hanoi", "Ha Long Bay", "Da Nang", "Hoi An", "Ho Chi Minh City"],
    durationDays: [8, 10],
    travelStyles: ["cultural", "adventure", "group"],
    description: "North to south: a Ha Long Bay cruise, the Golden Bridge and lantern-lit Hoi An.",
    image: unsplash("1559592413-7cec4d0cae2b", "Vietnam tour package: the Golden Bridge held by stone hands near Da Nang"),
    featured: true,
    active: true,
    href: `${BASE}/vietnam/hanoi-da-nang-ho-chi-minh`,
  },
  {
    id: "dubai-abu-dhabi",
    name: "Dubai – Abu Dhabi",
    slug: "dubai-abu-dhabi",
    destinations: ["uae"],
    countryLabel: "UAE",
    route: ["Dubai", "Desert Safari", "Abu Dhabi"],
    durationDays: [5, 6],
    travelStyles: ["family", "shopping", "luxury", "city"],
    description: "Burj Khalifa views, a desert safari evening and a day in Abu Dhabi.",
    image: unsplash("1518684079-3c830dcef090", "Dubai tour package: Burj Al Arab on the Dubai coastline"),
    featured: true,
    active: true,
    href: `${BASE}/uae/dubai-abu-dhabi`,
  },
  {
    id: "maldives-luxury",
    name: "Maldives Luxury Escape",
    slug: "maldives-luxury-escape",
    destinations: ["maldives"],
    countryLabel: "Maldives",
    route: ["Malé", "Resort island"],
    durationDays: [4, 5],
    travelStyles: ["honeymoon", "luxury", "beach"],
    description: "An overwater villa, seaplane or speedboat transfer and slow days on the reef.",
    image: unsplash("1573843981267-be1999ff37cd", "Maldives luxury resort: overwater pavilion on a turquoise lagoon"),
    featured: true,
    active: true,
    href: `${BASE}/maldives/maldives-luxury-escape`,
  },
  {
    id: "sri-lanka-culture-beach",
    name: "Sri Lanka Cultural & Beach Tour",
    slug: "sri-lanka-cultural-beach",
    destinations: ["sri-lanka"],
    countryLabel: "Sri Lanka",
    route: ["Sigiriya", "Kandy", "Ella", "Bentota"],
    durationDays: [7, 9],
    travelStyles: ["cultural", "beach", "family"],
    description: "Rock fortresses, tea-country trains and a finish on the southern beaches.",
    image: unsplash("1566296314736-6eaac1ca0cb9", "Sri Lanka tour package: train on the Nine Arch Bridge in Ella"),
    featured: true,
    active: true,
    href: `${BASE}/sri-lanka/sri-lanka-cultural-beach`,
  },
  {
    id: "baku-gabala",
    name: "Baku – Gabala",
    slug: "baku-gabala",
    destinations: ["azerbaijan"],
    countryLabel: "Azerbaijan",
    route: ["Baku", "Shamakhi", "Gabala"],
    durationDays: [5, 6],
    travelStyles: ["city", "honeymoon", "family"],
    description: "Baku's walled old city and Flame Towers, then mountain air and cable cars in Gabala.",
    image: unsplash("1596306499398-8d88944a5ec4", "Azerbaijan tour package: the Flame Towers in Baku"),
    featured: true,
    active: true,
    href: `${BASE}/azerbaijan/baku-gabala`,
  },
  {
    id: "tbilisi-kazbegi",
    name: "Tbilisi – Kazbegi",
    slug: "tbilisi-kazbegi",
    destinations: ["georgia"],
    countryLabel: "Georgia",
    route: ["Tbilisi", "Ananuri", "Gudauri", "Kazbegi"],
    durationDays: [5, 7],
    travelStyles: ["honeymoon", "adventure", "cultural"],
    description: "Old Tbilisi and wine country, then the Military Highway to the peaks of Kazbegi.",
    featured: true,
    active: true,
    href: `${BASE}/georgia/tbilisi-kazbegi`,
  },
  {
    id: "tokyo-kyoto-osaka",
    name: "Tokyo – Kyoto – Osaka",
    slug: "tokyo-kyoto-osaka",
    destinations: ["japan"],
    countryLabel: "Japan",
    route: ["Tokyo", "Mount Fuji", "Kyoto", "Osaka"],
    durationDays: [7, 9],
    travelStyles: ["cultural", "family", "city", "honeymoon"],
    description: "Japan's classic route by bullet train, with a day near Mount Fuji.",
    image: unsplash("1490806843957-31f4c9a91c65", "Japan Tokyo Kyoto travel: Mount Fuji framed by cherry blossom"),
    featured: true,
    active: true,
    href: `${BASE}/japan/tokyo-kyoto-osaka`,
  },
  {
    id: "seoul-busan",
    name: "Seoul – Busan",
    slug: "seoul-busan",
    destinations: ["south-korea"],
    countryLabel: "South Korea",
    route: ["Seoul", "Gyeongju", "Busan"],
    durationDays: [6, 7],
    travelStyles: ["city", "shopping", "cultural", "family"],
    description: "Palaces and K-culture in Seoul, ancient Gyeongju and Busan's coastline.",
    image: unsplash("1534274867514-d5b47ef89ed7", "South Korea tour: Seoul skyline reflected in the Han River"),
    featured: true,
    active: true,
    href: `${BASE}/south-korea/seoul-busan`,
  },
  {
    id: "paro-thimphu-punakha",
    name: "Paro – Thimphu – Punakha",
    slug: "paro-thimphu-punakha",
    destinations: ["bhutan"],
    countryLabel: "Bhutan",
    route: ["Paro", "Thimphu", "Dochula", "Punakha"],
    durationDays: [5, 7],
    travelStyles: ["spiritual", "cultural", "luxury"],
    description: "Tiger's Nest hike, Dochula pass and the riverside Punakha Dzong.",
    featured: true,
    active: true,
    href: `${BASE}/bhutan/paro-thimphu-punakha`,
  },
  {
    id: "tashkent-samarkand-bukhara",
    name: "Tashkent – Samarkand – Bukhara",
    slug: "tashkent-samarkand-bukhara",
    destinations: ["uzbekistan"],
    countryLabel: "Uzbekistan",
    route: ["Tashkent", "Samarkand", "Bukhara"],
    durationDays: [6, 8],
    travelStyles: ["cultural", "spiritual", "group"],
    description: "Silk Road cities by high-speed train, from Registan Square to Bukhara's old town.",
    featured: true,
    active: true,
    href: `${BASE}/uzbekistan/tashkent-samarkand-bukhara`,
  },
];

export const activePackages = asiaPackages.filter((p) => p.active);

/** Number of active packages that include a destination. */
export const packageCountFor = (destinationId: string) =>
  activePackages.filter((p) => p.destinations.includes(destinationId)).length;
