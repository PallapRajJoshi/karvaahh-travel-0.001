// data/usa/destinations.ts
// CMS-ready USA destinations. Every list, map marker, filter and season view on
// the page reads from here, so a destination is added once.
//
// - `active: false` hides a destination everywhere.
// - `href` is the future destination page. It is only linked once listed in
//   LIVE_ROUTES (lib/international/config.ts); until then "Explore" opens the
//   destination's details in place.
// - `idealSeason` is general guidance written as text; conditions vary by year.
// - Package counts are derived from ./packages.ts, never typed in here.

import type { USAImageId } from "./images";
import type { USRegion } from "./regions";
import type { TravelStyle } from "./travel-styles";

export type SeasonId = "spring" | "summer" | "autumn" | "winter";
export type DestinationKind = "city" | "nature" | "island" | "park";

export interface USADestination {
  id: string;
  name: string;
  state?: string;
  region: USRegion;
  kind: DestinationKind;
  image?: USAImageId;
  description: string;
  attractions: string[];
  travelStyles: TravelStyle[];
  recommendedDuration?: string;
  idealSeason?: string;
  /** Seasons this destination is usually suggested for (season explorer). */
  seasons?: SeasonId[];
  active: boolean;
  featured?: boolean;
  /** [latitude, longitude]; omit to keep it off the map. */
  coords?: [number, number];
  /** Small marker whose label only shows on hover / selection. */
  minor?: boolean;
  labelSide?: "top" | "left" | "right";
  /** Section on this page that tells the destination's full story. */
  sectionId?: string;
  href?: string;
}

const BASE = "/packages/international/usa";
const ALL: SeasonId[] = ["spring", "summer", "autumn", "winter"];

export const usaDestinations: USADestination[] = [
  // ─────────── Northeast ───────────
  {
    id: "new-york", name: "New York City", state: "New York", region: "northeast", kind: "city", image: "nyc-skyline",
    description: "Manhattan's skyline, Broadway, world-class museums, Central Park and the Statue of Liberty: the classic first stop in the USA.",
    attractions: ["Times Square", "Statue of Liberty", "Central Park", "Empire State Building", "Brooklyn Bridge", "Broadway", "9/11 Memorial & Museum", "Fifth Avenue"],
    travelStyles: ["city-break", "shopping", "family", "honeymoon", "luxury", "budget", "photography", "private", "group", "senior-friendly", "winter", "summer", "customized"],
    recommendedDuration: "4–5 days", idealSeason: "Year-round; spring and autumn are especially comfortable", seasons: ALL,
    active: true, featured: true, coords: [40.71, -74.01], labelSide: "right", sectionId: "new-york", href: `${BASE}/new-york`,
  },
  {
    id: "washington-dc", name: "Washington DC", state: "District of Columbia", region: "northeast", kind: "city", image: "capitol",
    description: "The nation's capital: the National Mall, monuments, memorials and the Smithsonian museums.",
    attractions: ["National Mall", "Lincoln Memorial", "Washington Monument", "U.S. Capitol area", "Smithsonian museums", "White House exterior"],
    travelStyles: ["city-break", "family", "senior-friendly", "photography", "group", "private", "budget"],
    recommendedDuration: "2–3 days", idealSeason: "Spring (cherry blossom season varies each year) and autumn", seasons: ["spring", "summer", "autumn"],
    active: true, featured: true, coords: [38.9, -77.04], labelSide: "left", sectionId: "east-coast",
  },
  {
    id: "boston", name: "Boston", state: "Massachusetts", region: "northeast", kind: "city", image: "boston",
    description: "Revolutionary history on the Freedom Trail, Harvard and Cambridge, and the gateway to New England.",
    attractions: ["Freedom Trail", "Harvard / Cambridge", "Charles River", "Faneuil Hall", "Beacon Hill"],
    travelStyles: ["city-break", "family", "photography", "senior-friendly", "private"],
    recommendedDuration: "2–3 days", idealSeason: "Late spring to autumn; autumn foliage nearby", seasons: ["spring", "summer", "autumn"],
    active: true, coords: [42.36, -71.06], labelSide: "right", sectionId: "east-coast",
  },
  {
    id: "philadelphia", name: "Philadelphia", state: "Pennsylvania", region: "northeast", kind: "city", image: "philadelphia",
    description: "Where the Declaration of Independence was signed: Independence Hall, the Liberty Bell and a lively food scene.",
    attractions: ["Independence Hall", "Liberty Bell", "City Hall", "Reading Terminal Market"],
    travelStyles: ["city-break", "family", "senior-friendly", "budget"],
    recommendedDuration: "1–2 days", idealSeason: "Spring and autumn", seasons: ["spring", "autumn"],
    active: true, minor: true, coords: [39.95, -75.17], labelSide: "left", sectionId: "east-coast",
  },
  {
    id: "niagara-falls", name: "Niagara Falls", state: "New York", region: "northeast", kind: "nature", image: "niagara",
    description: "The roar of the falls from the U.S. side, with boat sightseeing and observation points; Canada combinations are possible for eligible travelers.",
    attractions: ["Boat sightseeing (seasonal)", "Observation points", "Niagara Falls State Park", "Seasonal viewpoints"],
    travelStyles: ["family", "honeymoon", "photography", "senior-friendly", "summer", "group"],
    recommendedDuration: "1–2 days", idealSeason: "Late spring to early autumn; some boat tours are seasonal", seasons: ["spring", "summer", "autumn"],
    active: true, featured: true, coords: [43.09, -79.07], labelSide: "top", sectionId: "niagara",
  },
  // ─────────── Southeast ───────────
  {
    id: "orlando", name: "Orlando", state: "Florida", region: "southeast", kind: "city", image: "orlando",
    description: "The family flagship: major theme-park resorts, water parks and easy add-ons to Florida's beaches.",
    attractions: ["Walt Disney World Resort", "Universal Orlando Resort", "SeaWorld Orlando", "Water parks", "Kennedy Space Center (day trip)"],
    travelStyles: ["theme-parks", "family", "group", "private", "summer", "winter", "budget"],
    recommendedDuration: "4–6 days", idealSeason: "Year-round; winter and spring are milder", seasons: ALL,
    active: true, featured: true, coords: [28.54, -81.38], labelSide: "left", sectionId: "florida",
  },
  {
    id: "miami", name: "Miami", state: "Florida", region: "southeast", kind: "city", image: "miami-beach",
    description: "South Beach, Art Deco architecture, Latin flavours, shopping, nightlife and boat excursions.",
    attractions: ["South Beach", "Art Deco Historic District", "Wynwood", "Biscayne Bay cruises", "Everglades excursions"],
    travelStyles: ["beach", "honeymoon", "shopping", "luxury", "city-break", "winter", "photography"],
    recommendedDuration: "3–4 days", idealSeason: "November to April is drier and milder", seasons: ["winter", "spring"],
    active: true, featured: true, coords: [25.76, -80.19], labelSide: "right", sectionId: "florida",
  },
  {
    id: "fort-lauderdale", name: "Fort Lauderdale", state: "Florida", region: "southeast", kind: "city", image: "florida-palms",
    description: "Canals, beaches and a relaxed pace, and a common port for Caribbean cruises.",
    attractions: ["Las Olas Boulevard", "Beaches", "Water taxi canals", "Cruise port"],
    travelStyles: ["beach", "cruise", "family", "winter"],
    recommendedDuration: "2–3 days", idealSeason: "November to April", seasons: ["winter", "spring"],
    active: true, minor: true, coords: [26.12, -80.14], labelSide: "right",
  },
  {
    id: "tampa", name: "Tampa", state: "Florida", region: "southeast", kind: "city",
    description: "Gulf Coast city with a riverwalk, nearby beaches and easy links to Orlando.",
    attractions: ["Tampa Riverwalk", "Ybor City", "Gulf beaches", "Busch Gardens"],
    travelStyles: ["beach", "family", "theme-parks"],
    recommendedDuration: "2–3 days", idealSeason: "Winter and spring", seasons: ["winter", "spring"],
    active: true, minor: true, coords: [27.95, -82.46], labelSide: "left",
  },
  {
    id: "key-west", name: "Key West", state: "Florida", region: "southeast", kind: "island", image: "florida-keys",
    description: "A scenic Florida Keys escape at the end of the Overseas Highway: sunsets, colourful streets and the sea.",
    attractions: ["Overseas Highway", "Mallory Square sunsets", "Duval Street", "Snorkelling trips"],
    travelStyles: ["beach", "road-trip", "honeymoon", "photography", "winter"],
    recommendedDuration: "2–3 days", idealSeason: "December to April", seasons: ["winter", "spring"],
    active: true, coords: [24.56, -81.78], labelSide: "left", sectionId: "florida",
  },
  {
    id: "atlanta", name: "Atlanta", state: "Georgia", region: "southeast", kind: "city", image: "atlanta",
    description: "A major air hub with civil rights history, museums and Southern food.",
    attractions: ["Martin Luther King Jr. National Historical Park", "Georgia Aquarium", "World of Coca-Cola", "BeltLine"],
    travelStyles: ["city-break", "family"],
    recommendedDuration: "2 days", idealSeason: "Spring and autumn", seasons: ["spring", "autumn"],
    active: true, minor: true, coords: [33.75, -84.39], labelSide: "left",
  },
  {
    id: "new-orleans", name: "New Orleans", state: "Louisiana", region: "southeast", kind: "city", image: "new-orleans",
    description: "Jazz, Creole food, French Quarter architecture and a cultural heritage unlike anywhere else in the USA.",
    attractions: ["French Quarter", "Live jazz", "Garden District", "Mississippi riverboats", "Creole & Cajun food"],
    travelStyles: ["city-break", "photography", "honeymoon", "group"],
    recommendedDuration: "2–3 days", idealSeason: "February to May and autumn", seasons: ["spring", "autumn", "winter"],
    active: true, coords: [29.95, -90.07], labelSide: "left", sectionId: "florida",
  },
  {
    id: "nashville", name: "Nashville", state: "Tennessee", region: "southeast", kind: "city", image: "nashville",
    description: "Music City: country music history, live performances every night and honky-tonks on Broadway.",
    attractions: ["Broadway honky-tonks", "Country Music Hall of Fame", "Grand Ole Opry", "Live music venues"],
    travelStyles: ["city-break", "group", "photography"],
    recommendedDuration: "2–3 days", idealSeason: "Spring and autumn", seasons: ["spring", "autumn"],
    active: true, coords: [36.16, -86.78], labelSide: "top", sectionId: "florida",
  },
  // ─────────── Midwest ───────────
  {
    id: "chicago", name: "Chicago", state: "Illinois", region: "midwest", kind: "city", image: "chicago",
    description: "Landmark architecture, a lakefront skyline, great museums and a serious food scene.",
    attractions: ["Millennium Park", "Navy Pier", "Art Institute of Chicago", "Willis Tower / Skydeck", "Architecture river cruises"],
    travelStyles: ["city-break", "family", "shopping", "photography", "summer", "private"],
    recommendedDuration: "2–4 days", idealSeason: "Late spring to early autumn", seasons: ["spring", "summer", "autumn"],
    active: true, featured: true, coords: [41.88, -87.63], labelSide: "left", sectionId: "midwest",
  },
  {
    id: "milwaukee", name: "Milwaukee", state: "Wisconsin", region: "midwest", kind: "city",
    description: "A relaxed lakefront city with museums, festivals and breweries, an easy add-on from Chicago.",
    attractions: ["Milwaukee Art Museum", "Lakefront", "Historic Third Ward", "Summer festivals"],
    travelStyles: ["city-break", "summer"],
    recommendedDuration: "1–2 days", idealSeason: "Summer", seasons: ["summer"],
    active: true, minor: true, coords: [43.04, -87.91], labelSide: "top", sectionId: "midwest",
  },
  {
    id: "detroit", name: "Detroit", state: "Michigan", region: "midwest", kind: "city",
    description: "Motor City: automotive history, Motown music and a revitalised riverfront.",
    attractions: ["Henry Ford Museum", "Motown Museum", "Detroit Riverwalk", "Detroit Institute of Arts"],
    travelStyles: ["city-break", "family"],
    recommendedDuration: "1–2 days", idealSeason: "Late spring to autumn", seasons: ["spring", "summer", "autumn"],
    active: true, minor: true, coords: [42.33, -83.05], labelSide: "right", sectionId: "midwest",
  },
  // ─────────── Southwest (incl. Texas) ───────────
  {
    id: "las-vegas", name: "Las Vegas", state: "Nevada", region: "southwest", kind: "city", image: "las-vegas",
    description: "Entertainment capital of the desert: resort hotels, shows and dining, and the gateway to the canyons.",
    attractions: ["The Strip", "Shows & entertainment", "Fremont Street", "Hoover Dam (day trip)", "Grand Canyon (day trip)"],
    travelStyles: ["city-break", "honeymoon", "luxury", "shopping", "group", "photography", "budget", "road-trip"],
    recommendedDuration: "3–4 days", idealSeason: "Spring and autumn; summer is very hot", seasons: ["spring", "autumn", "winter"],
    active: true, featured: true, coords: [36.17, -115.14], labelSide: "left", sectionId: "southwest",
  },
  {
    id: "grand-canyon", name: "Grand Canyon", state: "Arizona", region: "southwest", kind: "park", image: "grand-canyon",
    description: "One of the world's great landscapes. Most visitors see the South Rim; the North Rim is seasonal.",
    attractions: ["South Rim viewpoints", "Desert View Drive", "Scenic flights (where operating)", "Sunrise & sunset points"],
    travelStyles: ["national-parks", "road-trip", "adventure", "photography", "family", "honeymoon"],
    recommendedDuration: "1–2 days", idealSeason: "Spring and autumn; check seasonal access", seasons: ["spring", "summer", "autumn"],
    active: true, featured: true, coords: [36.06, -112.14], labelSide: "right", sectionId: "southwest",
  },
  {
    id: "zion", name: "Zion National Park", state: "Utah", region: "southwest", kind: "park", image: "zion",
    description: "Towering sandstone cliffs and canyon hikes; shuttles and permits apply to some areas.",
    attractions: ["Zion Canyon Scenic Drive", "Riverside Walk", "Canyon Overlook", "Guided hikes"],
    travelStyles: ["national-parks", "adventure", "road-trip", "photography"],
    recommendedDuration: "1–2 days", idealSeason: "Spring and autumn", seasons: ["spring", "autumn"],
    active: true, minor: true, coords: [37.3, -113.03], labelSide: "top", sectionId: "southwest",
  },
  {
    id: "phoenix", name: "Phoenix", state: "Arizona", region: "southwest", kind: "city",
    description: "Desert city of resorts and golf, and a gateway to Sedona and the Grand Canyon.",
    attractions: ["Desert Botanical Garden", "Resort spas", "Sedona (day trip)", "Camelback Mountain"],
    travelStyles: ["luxury", "road-trip", "winter"],
    recommendedDuration: "2–3 days", idealSeason: "October to April", seasons: ["autumn", "winter", "spring"],
    active: true, coords: [33.45, -112.07], labelSide: "left",
  },
  {
    id: "dallas", name: "Dallas", state: "Texas", region: "southwest", kind: "city", image: "dallas",
    description: "A big, modern Texas city with arts, shopping and Western culture next door in Fort Worth.",
    attractions: ["Dallas Arts District", "Sixth Floor Museum", "Reunion Tower", "Fort Worth Stockyards"],
    travelStyles: ["city-break", "shopping", "family"],
    recommendedDuration: "2 days", idealSeason: "Spring and autumn", seasons: ["spring", "autumn"],
    active: true, coords: [32.78, -96.8], labelSide: "top", sectionId: "texas",
  },
  {
    id: "fort-worth", name: "Fort Worth", state: "Texas", region: "southwest", kind: "city",
    description: "Cowboy heritage, the Stockyards and fine art museums.",
    attractions: ["Fort Worth Stockyards", "Kimbell Art Museum", "Sundance Square"],
    travelStyles: ["city-break", "family"],
    recommendedDuration: "1 day", idealSeason: "Spring and autumn", seasons: ["spring", "autumn"],
    active: true, minor: true, coords: [32.76, -97.33], labelSide: "left", sectionId: "texas",
  },
  {
    id: "houston", name: "Houston", state: "Texas", region: "southwest", kind: "city", image: "houston",
    description: "Space Center Houston, a museum district and one of the most diverse food scenes in the country.",
    attractions: ["Space Center Houston", "Museum District", "Buffalo Bayou", "Diverse food scene"],
    travelStyles: ["city-break", "family"],
    recommendedDuration: "2 days", idealSeason: "Autumn to spring", seasons: ["autumn", "winter", "spring"],
    active: true, coords: [29.76, -95.37], labelSide: "right", sectionId: "texas",
  },
  {
    id: "austin", name: "Austin", state: "Texas", region: "southwest", kind: "city", image: "austin",
    description: "Live music, barbecue and the Texas Hill Country on the doorstep.",
    attractions: ["Live music venues", "Texas State Capitol", "Lady Bird Lake", "Texas Hill Country"],
    travelStyles: ["city-break", "road-trip", "group"],
    recommendedDuration: "2 days", idealSeason: "Spring and autumn", seasons: ["spring", "autumn"],
    active: true, coords: [30.27, -97.74], labelSide: "left", sectionId: "texas",
  },
  {
    id: "san-antonio", name: "San Antonio", state: "Texas", region: "southwest", kind: "city", image: "san-antonio",
    description: "The River Walk, the Alamo historic area and Spanish mission heritage.",
    attractions: ["River Walk", "The Alamo historic area", "Mission trail", "Market Square"],
    travelStyles: ["city-break", "family", "senior-friendly"],
    recommendedDuration: "1–2 days", idealSeason: "Spring and autumn", seasons: ["spring", "autumn"],
    active: true, minor: true, coords: [29.42, -98.49], labelSide: "left", sectionId: "texas",
  },
  // ─────────── West Coast ───────────
  {
    id: "los-angeles", name: "Los Angeles", state: "California", region: "west-coast", kind: "city", image: "los-angeles",
    description: "Hollywood, Beverly Hills, Santa Monica and Venice Beach, with Disneyland Resort and Universal Studios Hollywood nearby.",
    attractions: ["Hollywood", "Beverly Hills", "Santa Monica", "Venice Beach", "Disneyland Resort (Anaheim)", "Universal Studios Hollywood"],
    travelStyles: ["city-break", "theme-parks", "family", "beach", "shopping", "honeymoon", "luxury", "road-trip", "photography"],
    recommendedDuration: "3–4 days", idealSeason: "Year-round", seasons: ALL,
    active: true, featured: true, coords: [34.05, -118.24], labelSide: "left", sectionId: "california",
  },
  {
    id: "san-francisco", name: "San Francisco", state: "California", region: "west-coast", kind: "city", image: "golden-gate",
    description: "The Golden Gate Bridge, cable cars, Fisherman's Wharf and day trips to wine country and Yosemite.",
    attractions: ["Golden Gate Bridge", "Fisherman's Wharf", "Alcatraz (when tickets are available)", "Cable cars", "Napa / Sonoma (day trip)"],
    travelStyles: ["city-break", "honeymoon", "family", "photography", "road-trip", "luxury"],
    recommendedDuration: "3 days", idealSeason: "Year-round; September and October are often clearest", seasons: ALL,
    active: true, featured: true, coords: [37.77, -122.42], sectionId: "california",
  },
  {
    id: "san-diego", name: "San Diego", state: "California", region: "west-coast", kind: "city", image: "san-diego",
    description: "Beaches, a mild climate, La Jolla's coastline and family attractions.",
    attractions: ["La Jolla Cove", "Balboa Park", "Gaslamp Quarter", "San Diego Zoo"],
    travelStyles: ["beach", "family", "road-trip"],
    recommendedDuration: "2–3 days", idealSeason: "Year-round", seasons: ALL,
    active: true, coords: [32.72, -117.16], labelSide: "left", sectionId: "california",
  },
  {
    id: "napa", name: "Napa & Sonoma", state: "California", region: "west-coast", kind: "nature", image: "napa",
    description: "California wine country: vineyards, tasting rooms and long lunches.",
    attractions: ["Winery visits", "Wine train", "Hot-air balloon flights (where operating)"],
    travelStyles: ["honeymoon", "luxury", "road-trip"],
    recommendedDuration: "1–2 days", idealSeason: "Late summer to autumn harvest", seasons: ["summer", "autumn"],
    active: true, minor: true, coords: [38.3, -122.29], labelSide: "top", sectionId: "california",
  },
  {
    id: "yosemite", name: "Yosemite National Park", state: "California", region: "west-coast", kind: "park", image: "yosemite",
    description: "Granite cliffs, waterfalls and giant sequoias; some roads close seasonally and reservations may apply.",
    attractions: ["Yosemite Valley", "El Capitan & Half Dome views", "Waterfalls", "Mariposa Grove"],
    travelStyles: ["national-parks", "adventure", "photography", "road-trip", "family"],
    recommendedDuration: "1–3 days", idealSeason: "Late spring to autumn; check road status", seasons: ["spring", "summer", "autumn"],
    active: true, coords: [37.75, -119.59], labelSide: "right", sectionId: "national-parks",
  },
  {
    id: "seattle", name: "Seattle", state: "Washington", region: "west-coast", kind: "city", image: "seattle",
    description: "The Space Needle, Pike Place Market, coffee culture and mountains on the horizon.",
    attractions: ["Space Needle", "Pike Place Market", "Waterfront", "Mount Rainier (day trip)"],
    travelStyles: ["city-break", "photography", "summer", "cruise"],
    recommendedDuration: "2–3 days", idealSeason: "June to September", seasons: ["summer"],
    active: true, coords: [47.61, -122.33], labelSide: "right", sectionId: "mountain-states",
  },
  {
    id: "portland", name: "Portland", state: "Oregon", region: "west-coast", kind: "city", image: "portland",
    description: "Gardens, food carts and the Columbia River Gorge, with Mount Hood in view.",
    attractions: ["Columbia River Gorge", "Washington Park", "Food carts", "Mount Hood (day trip)"],
    travelStyles: ["city-break", "road-trip", "summer"],
    recommendedDuration: "2 days", idealSeason: "Summer to early autumn", seasons: ["summer", "autumn"],
    active: true, minor: true, coords: [45.52, -122.68], labelSide: "right", sectionId: "mountain-states",
  },
  // ─────────── Mountain States ───────────
  {
    id: "denver", name: "Denver", state: "Colorado", region: "mountain-states", kind: "city", image: "denver",
    description: "The Mile High City and gateway to Rocky Mountain National Park and Colorado's ski resorts.",
    attractions: ["Rocky Mountain National Park", "Red Rocks", "Ski resorts (winter)", "LoDo"],
    travelStyles: ["city-break", "adventure", "national-parks", "winter", "road-trip"],
    recommendedDuration: "2–4 days", idealSeason: "Summer for the Rockies; winter for skiing", seasons: ["summer", "winter", "autumn"],
    active: true, coords: [39.74, -104.99], labelSide: "right", sectionId: "mountain-states",
  },
  {
    id: "salt-lake-city", name: "Salt Lake City", state: "Utah", region: "mountain-states", kind: "city", image: "salt-lake-city",
    description: "Mountain-ringed city, a gateway to Utah's national parks, Yellowstone road trips and winter skiing.",
    attractions: ["Temple Square", "Great Salt Lake", "Ski resorts (winter)", "Utah parks road trips"],
    travelStyles: ["road-trip", "national-parks", "winter", "adventure"],
    recommendedDuration: "1–2 days", idealSeason: "Summer and winter", seasons: ["summer", "winter"],
    active: true, minor: true, coords: [40.76, -111.89], labelSide: "top", sectionId: "mountain-states",
  },
  {
    id: "yellowstone", name: "Yellowstone", state: "Wyoming", region: "mountain-states", kind: "park", image: "yellowstone",
    description: "Geysers, hot springs and wildlife in America's first national park; most roads are open to cars only in the warmer months.",
    attractions: ["Old Faithful", "Grand Prismatic Spring", "Lamar Valley wildlife", "Grand Canyon of the Yellowstone"],
    travelStyles: ["national-parks", "wildlife", "road-trip", "family", "photography", "adventure", "summer"],
    recommendedDuration: "2–4 days", idealSeason: "Late spring to early autumn", seasons: ["summer", "autumn"],
    active: true, featured: true, coords: [44.43, -110.59], labelSide: "right", sectionId: "mountain-states",
  },
  // ─────────── Hawaii ───────────
  {
    id: "honolulu", name: "Honolulu & Oahu", state: "Hawaii", region: "hawaii", kind: "island", image: "waikiki",
    description: "Waikiki Beach, Diamond Head, Pearl Harbor and the North Shore, with the widest range of hotels in Hawaii.",
    attractions: ["Waikiki", "Diamond Head", "Pearl Harbor", "North Shore", "Island beach resorts"],
    travelStyles: ["beach", "honeymoon", "family", "luxury", "photography", "winter", "summer"],
    recommendedDuration: "4–5 days", idealSeason: "Year-round", seasons: ALL,
    active: true, featured: true, coords: [21.31, -157.86], labelSide: "right", sectionId: "hawaii",
  },
  {
    id: "maui", name: "Maui", state: "Hawaii", region: "hawaii", kind: "island", image: "maui",
    description: "The Road to Hana, sunrise at Haleakalā and some of Hawaii's most romantic resorts.",
    attractions: ["Road to Hana", "Haleakalā (sunrise reservations may apply)", "Kaanapali & Wailea beaches", "Snorkelling"],
    travelStyles: ["beach", "honeymoon", "luxury", "road-trip", "photography", "wildlife"],
    recommendedDuration: "3–5 days", idealSeason: "Year-round; winter is whale-watching season", seasons: ALL,
    active: true, coords: [20.8, -156.33], labelSide: "right", sectionId: "hawaii",
  },
  {
    id: "kauai", name: "Kauai", state: "Hawaii", region: "hawaii", kind: "island", image: "na-pali",
    description: "The Garden Isle: the Na Pali Coast, Waimea Canyon and quiet beaches.",
    attractions: ["Na Pali Coast (boat or air tours)", "Waimea Canyon", "Hanalei Bay"],
    travelStyles: ["beach", "honeymoon", "adventure", "photography"],
    recommendedDuration: "3–4 days", idealSeason: "Year-round; summer seas are calmer on the north shore", seasons: ALL,
    active: true, minor: true, coords: [22.07, -159.5], labelSide: "top", sectionId: "hawaii",
  },
  {
    id: "big-island", name: "Big Island", state: "Hawaii", region: "hawaii", kind: "island",
    description: "Volcanoes National Park, black-sand beaches and stargazing.",
    attractions: ["Hawaiʻi Volcanoes National Park", "Black-sand beaches", "Kona coffee farms", "Stargazing"],
    travelStyles: ["adventure", "national-parks", "beach", "photography"],
    recommendedDuration: "3–4 days", idealSeason: "Year-round; volcanic activity and access vary", seasons: ALL,
    active: true, minor: true, coords: [19.6, -155.5], labelSide: "right", sectionId: "hawaii",
  },
  // ─────────── Alaska ───────────
  {
    id: "anchorage", name: "Anchorage", state: "Alaska", region: "alaska", kind: "city", image: "alaska-boat",
    description: "Alaska's main gateway for the Kenai Peninsula, Seward glacier cruises and the rail line to Denali.",
    attractions: ["Kenai Peninsula", "Seward & Kenai Fjords cruises", "Alaska Railroad", "Wildlife centres"],
    travelStyles: ["wildlife", "adventure", "cruise", "photography", "summer"],
    recommendedDuration: "2–3 days", idealSeason: "Late May to early September", seasons: ["summer"],
    active: true, featured: true, coords: [61.22, -149.9], labelSide: "right", sectionId: "alaska",
  },
  {
    id: "denali", name: "Denali", state: "Alaska", region: "alaska", kind: "park", image: "denali",
    description: "North America's highest peak and a vast wilderness park; road access and bus services are seasonal.",
    attractions: ["Denali National Park", "Wildlife viewing", "Flightseeing (where operating)", "Scenic rail"],
    travelStyles: ["national-parks", "wildlife", "adventure", "photography", "summer"],
    recommendedDuration: "2–3 days", idealSeason: "June to August", seasons: ["summer"],
    active: true, minor: true, coords: [63.33, -150.5], labelSide: "top", sectionId: "alaska",
  },
  {
    id: "fairbanks", name: "Fairbanks", state: "Alaska", region: "alaska", kind: "city", image: "aurora",
    description: "Interior Alaska and one of the best-known bases for Northern Lights viewing in the darker months.",
    attractions: ["Northern Lights viewing", "Chena Hot Springs", "Dog sledding (winter)"],
    travelStyles: ["winter", "photography", "adventure"],
    recommendedDuration: "3–4 days", idealSeason: "Late August to April for aurora; sightings are never guaranteed", seasons: ["autumn", "winter", "spring"],
    active: true, minor: true, coords: [64.84, -147.72], labelSide: "right", sectionId: "alaska",
  },
  {
    id: "juneau", name: "Juneau", state: "Alaska", region: "alaska", kind: "city", image: "cruise-port",
    description: "Alaska's capital, reached by sea or air: glaciers, whale watching and Inside Passage cruises.",
    attractions: ["Mendenhall Glacier", "Whale watching (seasonal)", "Inside Passage cruises"],
    travelStyles: ["cruise", "wildlife", "photography", "summer"],
    recommendedDuration: "1–2 days", idealSeason: "May to September", seasons: ["summer"],
    active: true, minor: true, coords: [58.3, -134.42], labelSide: "left", sectionId: "alaska",
  },
];

export const visibleUSADestinations = usaDestinations.filter((d) => d.active);
export const usaDestinationById = (id: string) => usaDestinations.find((d) => d.id === id);
export const usaDestinationName = (id: string) => usaDestinationById(id)?.name ?? id;

const SEASON_LABEL: Record<SeasonId, string> = { spring: "Spring", summer: "Summer", autumn: "Autumn", winter: "Winter" };
export const seasonLabel = (s: SeasonId) => SEASON_LABEL[s];
