// data/usa/packages.ts
// CMS-ready USA package templates. Every section on the page (New York,
// Florida, California, Honeymoon, Popular...) selects from this one list by id
// or by filter, so a package is defined once.
//
// - `price` stays undefined until Karvaahh publishes one → "Price on Request".
//   Never invent prices.
// - Highlights describe the typical build; hotels, flights, transfers and
//   tickets are customizable and confirmed in the quote. Theme-park, national
//   park and attraction tickets are only included when a quote says so.
// - `active: false` hides a package everywhere.
// - `href` is linked only once listed in LIVE_ROUTES.

import type { USAImageId } from "./images";
import type { TravelStyle } from "./travel-styles";

export type Transport =
  | "International flights"
  | "Domestic flights"
  | "Intercity rail"
  | "Private transfers"
  | "Airport transfers"
  | "Rental car"
  | "Chauffeur"
  | "Coach"
  | "Cruise"
  | "Scenic rail";

export interface USATourPackage {
  id: string;
  title: string;
  /** e.g. "5N/6D". Free text so "Flexible" works too. */
  duration: string;
  /** Destination ids from ./destinations.ts; first is the primary one. */
  destinations: string[];
  styles: TravelStyle[];
  image?: USAImageId;
  highlights: string[];
  /** Short visual route (may include places that are not destinations). */
  route: string[];
  transport?: Transport[];
  description: string;
  /** Published starting price text, e.g. "From ₹3,25,000 per person". Never invent. */
  price?: string;
  active: boolean;
  /** Shown in "Popular USA Tour Packages" by default. */
  popular?: boolean;
  href?: string;
}

const FLY: Transport[] = ["International flights", "Airport transfers"];
const MULTI: Transport[] = ["International flights", "Domestic flights", "Airport transfers"];

export const usaPackages: USATourPackage[] = [
  // ─────────── New York ───────────
  {
    id: "nyc-4n", title: "4N/5D New York City", duration: "4N/5D", destinations: ["new-york"],
    styles: ["city-break", "shopping", "family", "budget", "group", "private", "photography", "winter", "summer"], image: "nyc-skyline",
    highlights: ["Manhattan sightseeing", "Statue of Liberty ferry area", "Times Square & Broadway district", "Observation deck (ticket on request)"],
    route: ["Midtown", "Lower Manhattan", "Brooklyn Bridge", "Central Park"], transport: FLY,
    description: "A first taste of New York: the skyline, the icons and time to wander.", active: true, popular: true,
  },
  {
    id: "nyc-highlights-5n", title: "5N/6D New York Highlights", duration: "5N/6D", destinations: ["new-york"],
    styles: ["city-break", "photography", "private", "senior-friendly", "group"], image: "nyc-empire",
    highlights: ["Guided Manhattan tour", "9/11 Memorial & Museum", "Central Park", "Brooklyn & DUMBO"],
    route: ["Midtown", "Downtown", "Brooklyn", "Upper West Side"], transport: FLY,
    description: "An unhurried week in the city with time for museums, neighbourhoods and a Broadway night.", active: true,
  },
  {
    id: "nyc-family", title: "New York Family Holiday", duration: "5N/6D", destinations: ["new-york"],
    styles: ["family", "city-break", "summer", "winter"], image: "central-park",
    highlights: ["Family rooms", "Museum of Natural History", "Central Park", "Shorter sightseeing days"],
    route: ["Central Park", "Museums", "Liberty ferry area", "Times Square"], transport: FLY,
    description: "Paced for children, with family rooms and attractions all ages enjoy.", active: true,
  },
  {
    id: "nyc-shopping", title: "New York Shopping Tour", duration: "4N/5D", destinations: ["new-york"],
    styles: ["shopping", "city-break", "luxury"], image: "times-square",
    highlights: ["Fifth Avenue", "SoHo boutiques", "Outlet day trip", "Central hotel"],
    route: ["Fifth Avenue", "SoHo", "Outlets", "Midtown"], transport: FLY,
    description: "Flagship stores, boutiques and outlets, with a hotel close to the action.", active: true,
  },
  {
    id: "nyc-luxury", title: "New York Luxury Escape", duration: "5N/6D", destinations: ["new-york"],
    styles: ["luxury", "private", "honeymoon", "city-break"], image: "nyc-empire",
    highlights: ["Five-star stay", "Private guide & car", "Fine dining", "Broadway premium seats (subject to availability)"],
    route: ["Upper East Side", "Midtown", "Hudson River", "Downtown"], transport: ["International flights", "Chauffeur"],
    description: "Premium hotels, private touring and evenings worth dressing up for.", active: true,
  },
  // ─────────── East Coast + Niagara ───────────
  {
    id: "nyc-niagara-5n", title: "5N/6D New York + Niagara Falls", duration: "5N/6D", destinations: ["new-york", "niagara-falls"],
    styles: ["family", "city-break", "photography", "senior-friendly", "group", "summer"], image: "niagara",
    highlights: ["Manhattan sightseeing", "Niagara Falls (U.S. side)", "Boat sightseeing (seasonal)", "Domestic flight or road transfer"],
    route: ["New York", "Niagara Falls"], transport: MULTI,
    description: "The city and the falls in one trip, the most-requested East Coast combination.", active: true, popular: true,
  },
  {
    id: "nyc-dc-6n", title: "6N/7D New York + Washington DC", duration: "6N/7D", destinations: ["new-york", "washington-dc"],
    styles: ["city-break", "family", "senior-friendly", "group", "private"], image: "capitol",
    highlights: ["Manhattan sightseeing", "National Mall & memorials", "Smithsonian museums", "Train or road between cities"],
    route: ["New York", "Washington DC"], transport: ["International flights", "Intercity rail", "Airport transfers"],
    description: "Two capitals of American life: the energy of New York and the monuments of DC.", active: true, popular: true,
  },
  {
    id: "nyc-dc-niagara-7n", title: "7N/8D New York + Washington + Niagara", duration: "7N/8D", destinations: ["new-york", "washington-dc", "niagara-falls"],
    styles: ["family", "city-break", "senior-friendly", "group", "photography"], image: "washington-monument",
    highlights: ["New York icons", "Washington DC monuments", "Niagara Falls (U.S. side)", "Domestic connections arranged"],
    route: ["New York", "Washington DC", "Niagara Falls"], transport: ["International flights", "Intercity rail", "Domestic flights", "Airport transfers"],
    description: "The classic East Coast circuit with Niagara Falls to finish.", active: true, popular: true,
  },
  {
    id: "nyc-dc-philly", title: "New York → Washington → Philadelphia", duration: "6N/7D", destinations: ["new-york", "philadelphia", "washington-dc"],
    styles: ["city-break", "senior-friendly", "group", "family"], image: "philadelphia",
    highlights: ["Independence Hall & Liberty Bell", "National Mall", "Manhattan", "Rail-friendly route"],
    route: ["New York", "Philadelphia", "Washington DC"], transport: ["International flights", "Intercity rail", "Airport transfers"],
    description: "America's founding story along one of the country's easiest rail corridors.", active: true,
  },
  {
    id: "nyc-boston", title: "New York → Boston", duration: "5N/6D", destinations: ["new-york", "boston"],
    styles: ["city-break", "photography", "private", "senior-friendly"], image: "boston",
    highlights: ["Freedom Trail", "Harvard / Cambridge", "Manhattan", "Autumn foliage option"],
    route: ["New York", "Boston"], transport: ["International flights", "Intercity rail", "Airport transfers"],
    description: "Skyscrapers to cobbled streets, with New England's autumn colour as an add-on.", active: true,
  },
  {
    id: "niagara-ext", title: "Niagara Falls Day Trip / Extension", duration: "1–2 Nights", destinations: ["niagara-falls"],
    styles: ["family", "photography", "honeymoon", "summer"], image: "niagara-aerial",
    highlights: ["U.S. side viewpoints", "Boat sightseeing (seasonal)", "Evening illuminations", "Add to any East Coast trip"],
    route: ["New York", "Niagara Falls"], transport: ["Domestic flights", "Private transfers"],
    description: "Add the falls to a New York or East Coast holiday.", active: true,
  },
  // ─────────── Florida ───────────
  {
    id: "orlando-family-5n", title: "5N/6D Orlando Family Holiday", duration: "5N/6D", destinations: ["orlando"],
    styles: ["family", "theme-parks", "summer", "winter"], image: "orlando",
    highlights: ["Hotel near the parks", "Theme-park ticket advice (tickets on request)", "Water park day", "Flexible rest days"],
    route: ["Orlando", "Theme-park resorts", "Water parks"], transport: FLY,
    description: "A family base in Orlando with park days planned around your children.", active: true,
  },
  {
    id: "orlando-themepark", title: "Orlando Theme Park Package", duration: "4N/5D", destinations: ["orlando"],
    styles: ["theme-parks", "family", "group", "budget"], image: "florida-palms",
    highlights: ["Park-day planning", "Tickets quoted separately", "Hotel with park access options", "Airport transfers"],
    route: ["Orlando", "Theme parks"], transport: FLY,
    description: "Built around the parks you choose; admission is quoted only when you ask.", active: true,
  },
  {
    id: "orlando-miami-7n", title: "7N/8D Orlando + Miami", duration: "7N/8D", destinations: ["orlando", "miami"],
    styles: ["family", "beach", "theme-parks", "winter"], image: "miami-beach",
    highlights: ["Orlando park days", "South Beach", "Art Deco district", "Road transfer or short flight"],
    route: ["Orlando", "Miami"], transport: ["International flights", "Private transfers", "Airport transfers"],
    description: "Theme parks first, then beach time in Miami.", active: true,
  },
  {
    id: "florida-family", title: "Florida Family Vacation", duration: "8N/9D", destinations: ["orlando", "miami", "key-west"],
    styles: ["family", "beach", "theme-parks", "road-trip"], image: "florida-keys",
    highlights: ["Orlando parks", "Miami beaches", "Overseas Highway to Key West", "Family-friendly pace"],
    route: ["Orlando", "Miami", "Key West"], transport: ["International flights", "Private transfers", "Rental car"],
    description: "Parks, beaches and a drive down the Florida Keys.", active: true,
  },
  {
    id: "nyc-orlando-8n", title: "8N/9D New York + Orlando", duration: "8N/9D", destinations: ["new-york", "orlando"],
    styles: ["family", "theme-parks", "city-break"], image: "nyc-skyline",
    highlights: ["Manhattan sightseeing", "Orlando park days", "Domestic flight", "Family rooms"],
    route: ["New York", "Orlando"], transport: MULTI,
    description: "The big-city sights, then the theme-park capital of the world.", active: true, popular: true,
  },
  {
    id: "nyc-orlando-miami-10n", title: "10N/11D New York + Orlando + Miami", duration: "10N/11D", destinations: ["new-york", "orlando", "miami"],
    styles: ["family", "theme-parks", "beach", "city-break"], image: "miami-skyline",
    highlights: ["New York icons", "Orlando parks", "Miami Beach", "Domestic flights arranged"],
    route: ["New York", "Orlando", "Miami"], transport: MULTI,
    description: "City, parks and beach in one well-paced East Coast journey.", active: true, popular: true,
  },
  {
    id: "nyc-miami-8n", title: "8N/9D New York + Miami", duration: "8N/9D", destinations: ["new-york", "miami"],
    styles: ["honeymoon", "beach", "city-break", "luxury"], image: "miami-skyline",
    highlights: ["Manhattan evenings", "Hudson River cruise", "Miami beach hotel", "Sunset experiences"],
    route: ["New York", "Miami"], transport: MULTI,
    description: "Skyline nights followed by slow beach days.", active: true,
  },
  // ─────────── Southwest ───────────
  {
    id: "vegas-3n", title: "3N/4D Las Vegas", duration: "3N/4D", destinations: ["las-vegas"],
    styles: ["city-break", "group", "shopping", "budget"], image: "las-vegas",
    highlights: ["Strip hotel", "Evening show (on request)", "Fremont Street", "Hoover Dam option"],
    route: ["Las Vegas", "The Strip", "Fremont Street"], transport: FLY,
    description: "Shows, dining and desert day trips from the entertainment capital.", active: true,
  },
  {
    id: "vegas-gc-5n", title: "5N/6D Las Vegas + Grand Canyon", duration: "5N/6D", destinations: ["las-vegas", "grand-canyon"],
    styles: ["national-parks", "road-trip", "photography", "family", "honeymoon"], image: "grand-canyon",
    highlights: ["Las Vegas Strip", "Grand Canyon South Rim", "Hoover Dam", "Sunset viewpoint"],
    route: ["Las Vegas", "Hoover Dam", "Grand Canyon"], transport: ["International flights", "Chauffeur", "Coach"],
    description: "Bright lights, then the scale of the canyon.", active: true,
  },
  {
    id: "vegas-gc-zion-7n", title: "7N/8D Las Vegas + Grand Canyon + Zion", duration: "7N/8D", destinations: ["las-vegas", "grand-canyon", "zion"],
    styles: ["national-parks", "road-trip", "adventure", "photography"], image: "zion",
    highlights: ["Grand Canyon South Rim", "Horseshoe Bend", "Zion Canyon", "Antelope Canyon (permit tours where available)"],
    route: ["Las Vegas", "Grand Canyon", "Page", "Zion"], transport: ["International flights", "Chauffeur", "Rental car"],
    description: "The great canyons of the Southwest in one loop.", active: true,
  },
  {
    id: "southwest-roadtrip", title: "Southwest USA Road Trip", duration: "9N/10D", destinations: ["las-vegas", "grand-canyon", "zion"],
    styles: ["road-trip", "national-parks", "adventure", "photography", "private"], image: "monument-road",
    highlights: ["Monument Valley", "Bryce Canyon", "Antelope Canyon", "Self-drive or chauffeur"],
    route: ["Las Vegas", "Zion", "Bryce", "Page", "Monument Valley", "Grand Canyon"], transport: ["International flights", "Rental car", "Chauffeur"],
    description: "The classic desert loop, driven yourself or with a driver.", active: true,
  },
  {
    id: "gc-southwest-8n", title: "8N/9D Grand Canyon & Southwest", duration: "8N/9D", destinations: ["las-vegas", "grand-canyon", "phoenix"],
    styles: ["national-parks", "road-trip", "photography", "family", "senior-friendly"], image: "horseshoe-bend",
    highlights: ["Grand Canyon", "Sedona", "Horseshoe Bend", "Antelope Canyon"],
    route: ["Las Vegas", "Grand Canyon", "Page", "Sedona", "Phoenix"], transport: ["International flights", "Chauffeur", "Coach"],
    description: "Red-rock Arizona at a comfortable pace.", active: true, popular: true,
  },
  // ─────────── California ───────────
  {
    id: "la-sf-6n", title: "6N/7D Los Angeles + San Francisco", duration: "6N/7D", destinations: ["los-angeles", "san-francisco"],
    styles: ["city-break", "family", "honeymoon", "photography"], image: "golden-gate",
    highlights: ["Hollywood & Beverly Hills", "Santa Monica", "Golden Gate Bridge", "Fisherman's Wharf"],
    route: ["Los Angeles", "San Francisco"], transport: MULTI,
    description: "California's two great cities, connected by a short flight or the coast road.", active: true,
  },
  {
    id: "california-highlights-8n", title: "8N/9D California Highlights", duration: "8N/9D", destinations: ["los-angeles", "san-diego", "san-francisco", "yosemite"],
    styles: ["road-trip", "national-parks", "family", "photography"], image: "yosemite",
    highlights: ["Los Angeles", "San Diego", "Yosemite (seasonal access)", "San Francisco"],
    route: ["San Diego", "Los Angeles", "Yosemite", "San Francisco"], transport: ["International flights", "Domestic flights", "Chauffeur"],
    description: "Beaches, Hollywood, granite valleys and the Golden Gate.", active: true,
  },
  {
    id: "la-lv-sf-8n", title: "8N/9D Los Angeles + Las Vegas + San Francisco", duration: "8N/9D", destinations: ["los-angeles", "las-vegas", "san-francisco"],
    styles: ["city-break", "family", "honeymoon", "group", "photography"], image: "las-vegas",
    highlights: ["Hollywood & Santa Monica", "Las Vegas Strip", "Golden Gate Bridge", "Domestic flights arranged"],
    route: ["Los Angeles", "Las Vegas", "San Francisco"], transport: MULTI,
    description: "The West Coast classic in a little over a week.", active: true, popular: true,
  },
  {
    id: "la-lv-sf-9n", title: "9N/10D Los Angeles + Las Vegas + San Francisco", duration: "9N/10D", destinations: ["los-angeles", "las-vegas", "san-francisco", "grand-canyon"],
    styles: ["city-break", "national-parks", "family", "photography"], image: "golden-gate-sunset",
    highlights: ["Universal Studios Hollywood option", "Las Vegas + Grand Canyon day", "Golden Gate Bridge", "Alcatraz (when tickets are available)"],
    route: ["Los Angeles", "Las Vegas", "Grand Canyon", "San Francisco"], transport: MULTI,
    description: "The flagship West Coast route with a Grand Canyon day built in.", active: true,
  },
  {
    id: "california-family", title: "California Family Tour", duration: "7N/8D", destinations: ["los-angeles", "san-diego"],
    styles: ["family", "theme-parks", "beach"], image: "santa-monica",
    highlights: ["Disneyland Resort option (tickets on request)", "Universal Studios Hollywood option", "San Diego beaches", "Family rooms"],
    route: ["Los Angeles", "Anaheim", "San Diego"], transport: ["International flights", "Private transfers"],
    description: "Southern California's parks and beaches, paced for families.", active: true,
  },
  {
    id: "california-roadtrip", title: "California Road Trip", duration: "8N/9D", destinations: ["san-francisco", "los-angeles"],
    styles: ["road-trip", "photography", "honeymoon", "adventure"], image: "big-sur",
    highlights: ["Monterey & Carmel", "Big Sur coast (road status varies)", "Santa Barbara", "Self-drive or chauffeur"],
    route: ["San Francisco", "Monterey", "Big Sur", "Santa Barbara", "Los Angeles"], transport: ["International flights", "Rental car", "Chauffeur"],
    description: "The Pacific coast at your own pace.", active: true,
  },
  {
    id: "california-lv-10n", title: "10N/11D California + Las Vegas", duration: "10N/11D", destinations: ["san-francisco", "los-angeles", "las-vegas", "yosemite"],
    styles: ["road-trip", "national-parks", "city-break", "family"], image: "hollywood",
    highlights: ["San Francisco", "Yosemite (seasonal access)", "Los Angeles", "Las Vegas"],
    route: ["San Francisco", "Yosemite", "Los Angeles", "Las Vegas"], transport: MULTI,
    description: "California's highlights with Las Vegas to finish.", active: true, popular: true,
  },
  {
    id: "la-lv-honeymoon-7n", title: "7N/8D Los Angeles + Las Vegas", duration: "7N/8D", destinations: ["los-angeles", "las-vegas"],
    styles: ["honeymoon", "luxury", "city-break"], image: "santa-monica",
    highlights: ["Beachfront stay", "Sunset at Santa Monica", "Las Vegas show (on request)", "Private transfers"],
    route: ["Los Angeles", "Las Vegas"], transport: ["International flights", "Private transfers", "Domestic flights"],
    description: "Pacific sunsets and desert nights.", active: true,
  },
  {
    id: "california-honeymoon-8n", title: "8N/9D California Honeymoon", duration: "8N/9D", destinations: ["san-francisco", "napa", "los-angeles"],
    styles: ["honeymoon", "luxury", "road-trip", "private"], image: "napa",
    highlights: ["Wine country stay", "Big Sur drive", "Romantic dinners", "Private transfers"],
    route: ["San Francisco", "Napa", "Big Sur", "Los Angeles"], transport: ["International flights", "Chauffeur"],
    description: "Wine country, the coast road and the city of angels.", active: true,
  },
  // ─────────── Multi-region ───────────
  {
    id: "usa-highlights-12n", title: "12N/13D USA Highlights", duration: "12N/13D", destinations: ["new-york", "washington-dc", "niagara-falls", "las-vegas", "los-angeles", "san-francisco"],
    styles: ["city-break", "family", "group", "senior-friendly", "photography"], image: "liberty",
    highlights: ["New York & Washington DC", "Niagara Falls", "Las Vegas", "Los Angeles & San Francisco"],
    route: ["New York", "Washington DC", "Niagara Falls", "Las Vegas", "Los Angeles", "San Francisco"], transport: MULTI,
    description: "East Coast to West Coast in under two weeks.", active: true, popular: true,
  },
  {
    id: "usa-romantic-10n", title: "10N/11D USA Romantic Escape", duration: "10N/11D", destinations: ["new-york", "las-vegas", "honolulu"],
    styles: ["honeymoon", "luxury", "beach", "private"], image: "couple",
    highlights: ["New York skyline evenings", "Grand Canyon flight option", "Hawaii beach resort", "Private transfers"],
    route: ["New York", "Las Vegas", "Honolulu"], transport: MULTI,
    description: "City lights, desert drama and island sunsets.", active: true,
  },
  {
    id: "nyc-niagara-honeymoon-6n", title: "6N/7D New York + Niagara", duration: "6N/7D", destinations: ["new-york", "niagara-falls"],
    styles: ["honeymoon", "luxury", "photography"], image: "niagara",
    highlights: ["Central hotel", "Hudson River dinner cruise", "Falls-view stay", "Private transfers"],
    route: ["New York", "Niagara Falls"], transport: MULTI,
    description: "A romantic East Coast honeymoon with a falls-view finale.", active: true,
  },
  // ─────────── Hawaii ───────────
  {
    id: "oahu-5n", title: "5N/6D Oahu", duration: "5N/6D", destinations: ["honolulu"],
    styles: ["beach", "family", "honeymoon", "winter", "summer"], image: "waikiki",
    highlights: ["Waikiki beach hotel", "Diamond Head", "Pearl Harbor", "North Shore drive"],
    route: ["Waikiki", "Diamond Head", "Pearl Harbor", "North Shore"], transport: MULTI,
    description: "Beaches, history and the North Shore from a Waikiki base.", active: true,
  },
  {
    id: "hawaii-7n", title: "7N/8D Hawaii", duration: "7N/8D", destinations: ["honolulu", "maui"],
    styles: ["beach", "family", "honeymoon", "photography"], image: "hawaii-beach",
    highlights: ["Oahu & Maui", "Inter-island flight", "Road to Hana", "Beach resorts"],
    route: ["Oahu", "Maui"], transport: MULTI,
    description: "Two islands, two very different sides of Hawaii.", active: true, popular: true,
  },
  {
    id: "hawaii-honeymoon-7n", title: "7N/8D Hawaii Honeymoon", duration: "7N/8D", destinations: ["maui", "honolulu"],
    styles: ["honeymoon", "luxury", "beach", "private"], image: "maui",
    highlights: ["Maui resort stay", "Haleakalā sunrise (reservation may apply)", "Sunset cruise", "Private transfers"],
    route: ["Maui", "Oahu"], transport: MULTI,
    description: "Resort time, sunsets and island drives for two.", active: true,
  },
  {
    id: "hawaii-honeymoon-8n", title: "8N/9D Hawaii Honeymoon", duration: "8N/9D", destinations: ["kauai", "maui"],
    styles: ["honeymoon", "luxury", "beach", "adventure"], image: "na-pali",
    highlights: ["Na Pali Coast boat or air tour", "Maui resort", "Romantic dinners", "Inter-island flight"],
    route: ["Kauai", "Maui"], transport: MULTI,
    description: "The dramatic Na Pali Coast, then slow days on Maui.", active: true, popular: true,
  },
  {
    id: "maui-oahu-8n", title: "8N/9D Maui + Oahu", duration: "8N/9D", destinations: ["maui", "honolulu"],
    styles: ["beach", "family", "luxury", "road-trip"], image: "waikiki",
    highlights: ["Waikiki", "Pearl Harbor", "Road to Hana", "Haleakalā"],
    route: ["Oahu", "Maui"], transport: MULTI,
    description: "Waikiki's energy and Maui's landscapes.", active: true,
  },
  {
    id: "hawaii-hopping-10n", title: "10N/11D Hawaii Island Hopping", duration: "10N/11D", destinations: ["honolulu", "maui", "big-island", "kauai"],
    styles: ["beach", "adventure", "national-parks", "photography", "luxury"], image: "na-pali",
    highlights: ["Oahu, Maui, Big Island, Kauai", "Volcanoes National Park", "Na Pali Coast", "Inter-island flights"],
    route: ["Oahu", "Maui", "Big Island", "Kauai"], transport: MULTI,
    description: "Four islands, from volcanoes to sea cliffs.", active: true,
  },
  // ─────────── Alaska ───────────
  {
    id: "alaska-highlights-5n", title: "5N/6D Alaska Highlights", duration: "5N/6D", destinations: ["anchorage", "denali"],
    styles: ["wildlife", "adventure", "summer", "photography"], image: "alaska-glacier",
    highlights: ["Anchorage", "Kenai Fjords glacier cruise (seasonal)", "Denali", "Scenic rail"],
    route: ["Anchorage", "Seward", "Denali"], transport: ["International flights", "Scenic rail", "Coach"],
    description: "Glaciers, wildlife and the great peak in a short summer trip.", active: true,
  },
  {
    id: "alaska-nature-7n", title: "7N/8D Alaska Nature Tour", duration: "7N/8D", destinations: ["anchorage", "denali", "fairbanks"],
    styles: ["wildlife", "national-parks", "adventure", "summer", "photography"], image: "denali",
    highlights: ["Kenai Peninsula", "Denali National Park", "Alaska Railroad", "Fairbanks"],
    route: ["Anchorage", "Kenai", "Denali", "Fairbanks"], transport: ["International flights", "Scenic rail", "Coach"],
    description: "Alaska's classic summer route by road and rail.", active: true, popular: true,
  },
  {
    id: "alaska-aurora", title: "Alaska Northern Lights", duration: "5N/6D", destinations: ["fairbanks"],
    styles: ["winter", "photography", "adventure"], image: "aurora",
    highlights: ["Fairbanks base", "Night-time aurora viewing", "Hot springs", "Winter activities"],
    route: ["Anchorage", "Fairbanks"], transport: ["International flights", "Domestic flights"],
    description: "Long nights for aurora watching. Sightings depend on weather and solar activity.", active: true,
  },
  {
    id: "alaska-cruise", title: "Alaska Cruise + Land Extensions", duration: "Flexible", destinations: ["juneau", "anchorage", "denali"],
    styles: ["cruise", "wildlife", "senior-friendly", "luxury", "summer"], image: "cruise-port",
    highlights: ["Inside Passage cruise", "Glacier viewing", "Denali land extension", "Seasonal sailings"],
    route: ["Seattle", "Juneau", "Glacier viewing", "Anchorage", "Denali"], transport: ["International flights", "Cruise", "Scenic rail"],
    description: "Sail the coast, then add Denali by land. Sailings are seasonal.", active: true,
  },
  // ─────────── National parks + Mountain ───────────
  {
    id: "national-parks-10n", title: "10N/11D National Parks", duration: "10N/11D", destinations: ["las-vegas", "zion", "grand-canyon", "yellowstone"],
    styles: ["national-parks", "road-trip", "adventure", "wildlife", "photography", "family"], image: "yellowstone",
    highlights: ["Zion & Bryce", "Grand Canyon", "Yellowstone", "Grand Teton"],
    route: ["Las Vegas", "Zion", "Grand Canyon", "Salt Lake City", "Yellowstone"], transport: ["International flights", "Domestic flights", "Rental car", "Chauffeur"],
    description: "Canyons to geysers: a grand tour of the western parks.", active: true, popular: true,
  },
  {
    id: "yellowstone-teton", title: "Yellowstone & Grand Teton Road Trip", duration: "6N/7D", destinations: ["salt-lake-city", "yellowstone"],
    styles: ["national-parks", "wildlife", "road-trip", "summer", "photography"], image: "teton",
    highlights: ["Old Faithful", "Grand Prismatic Spring", "Lamar Valley wildlife", "Grand Teton"],
    route: ["Salt Lake City", "Jackson", "Grand Teton", "Yellowstone"], transport: ["International flights", "Rental car", "Chauffeur"],
    description: "Wildlife, geysers and mountain lakes in summer.", active: true,
  },
  {
    id: "denver-rockies", title: "Denver & the Rockies", duration: "5N/6D", destinations: ["denver"],
    styles: ["adventure", "national-parks", "road-trip", "winter", "summer"], image: "rocky",
    highlights: ["Rocky Mountain National Park", "Red Rocks", "Mountain towns", "Ski option in winter"],
    route: ["Denver", "Estes Park", "Rocky Mountain NP", "Boulder"], transport: ["International flights", "Rental car", "Chauffeur"],
    description: "Mountain air, alpine roads and, in winter, the slopes.", active: true,
  },
  {
    id: "pacific-northwest", title: "Seattle & Pacific Northwest", duration: "6N/7D", destinations: ["seattle", "portland"],
    styles: ["city-break", "road-trip", "national-parks", "summer"], image: "seattle",
    highlights: ["Seattle", "Mount Rainier", "Olympic National Park", "Portland & Columbia Gorge"],
    route: ["Seattle", "Olympic NP", "Mount Rainier", "Portland"], transport: ["International flights", "Rental car", "Chauffeur"],
    description: "Forests, volcanoes and coastline between two creative cities.", active: true,
  },
  // ─────────── Midwest + Texas ───────────
  {
    id: "chicago-3n", title: "3N/4D Chicago City Break", duration: "3N/4D", destinations: ["chicago"],
    styles: ["city-break", "shopping", "family", "photography", "summer"], image: "chicago-bean",
    highlights: ["Architecture river cruise", "Millennium Park", "Art Institute of Chicago", "Willis Tower Skydeck"],
    route: ["The Loop", "Riverwalk", "Navy Pier", "Magnificent Mile"], transport: FLY,
    description: "Architecture, art and the lakefront.", active: true,
  },
  {
    id: "texas-cities", title: "Texas City Break", duration: "6N/7D", destinations: ["dallas", "austin", "san-antonio", "houston"],
    styles: ["city-break", "family", "road-trip", "customized"], image: "san-antonio",
    highlights: ["Dallas & Fort Worth", "Austin live music", "San Antonio River Walk", "Space Center Houston"],
    route: ["Dallas", "Austin", "San Antonio", "Houston"], transport: ["International flights", "Rental car", "Chauffeur"],
    description: "A customizable loop through Texas' big four cities.", active: true,
  },
  {
    id: "texas-hill-country", title: "Texas Hill Country Road Trip", duration: "4N/5D", destinations: ["austin", "san-antonio"],
    styles: ["road-trip", "customized", "photography"], image: "austin",
    highlights: ["Austin", "Hill Country towns", "Wineries & barbecue", "San Antonio"],
    route: ["Austin", "Fredericksburg", "San Antonio"], transport: ["Rental car", "Chauffeur"],
    description: "Small towns, rolling hills and live music.", active: true,
  },
  // ─────────── Collections ───────────
  {
    id: "usa-family", title: "USA Family Package", duration: "Flexible", destinations: ["orlando", "new-york", "los-angeles"],
    styles: ["family", "theme-parks", "customized"], image: "family",
    highlights: ["Family-friendly hotels", "Manageable itineraries", "Theme parks & attractions", "Flexible pacing"],
    route: ["Your choice of cities"], transport: MULTI,
    description: "Any USA itinerary, re-paced for children and grandparents.", active: true, popular: true,
  },
  {
    id: "usa-honeymoon", title: "USA Honeymoon Package", duration: "Flexible", destinations: ["new-york", "honolulu", "san-francisco"],
    styles: ["honeymoon", "luxury", "customized", "private"], image: "couple",
    highlights: ["Romantic hotels", "Private transfers", "Sunset experiences", "Premium dining where applicable"],
    route: ["Your choice of places"], transport: MULTI,
    description: "Designed for two, from New York nights to Hawaiian beaches.", active: true, popular: true,
  },
  {
    id: "usa-luxury", title: "USA Luxury Package", duration: "Flexible", destinations: ["new-york", "las-vegas", "honolulu"],
    styles: ["luxury", "private", "customized"], image: "nyc-empire",
    highlights: ["Premium, Luxury or Ultra Luxury tiers", "Private guides & cars", "Premium cruises", "Private park experiences"],
    route: ["Your choice of places"], transport: ["International flights", "Domestic flights", "Chauffeur"],
    description: "Five-star stays and private experiences, end to end.", active: true, popular: true,
  },
  {
    id: "usa-custom", title: "Fully Customized USA Tour", duration: "Flexible", destinations: ["new-york"],
    styles: ["customized", "private", "family", "honeymoon", "luxury", "budget", "group", "senior-friendly"], image: "road-trip",
    highlights: ["Your dates & budget", "Any mix of cities, parks & islands", "Flights, hotels & transfers", "Visa guidance where offered"],
    route: ["Your choice of places"], transport: MULTI,
    description: "Tell us what you want to see. We'll design the journey around you.", active: true, popular: true,
  },
];

export const activeUSAPackages = usaPackages.filter((p) => p.active);
export const usaPackageById = (id: string) => usaPackages.find((p) => p.id === id);
export const pickPackages = (ids: string[]) =>
  ids.map(usaPackageById).filter((p): p is USATourPackage => Boolean(p?.active));

/** Active packages that visit a destination. */
export const usaPackageCount = (destinationId: string) =>
  activeUSAPackages.filter((p) => p.destinations.includes(destinationId)).length;
