// data/usa/sections.ts
// Editorial content for the regional story sections, kept out of the JSX.
// One layout (USAStorySection) renders every entry; packages and route maps
// are picked by id from ./packages.ts and ./circuits.ts, so nothing is duplicated.

import type { USAImageId } from "./images";

export interface Spotlight {
  title: string;
  tag?: string;
  text: string;
  image?: USAImageId;
  points?: string[];
  /** Destination id: adds a "View packages" filter action. */
  destinationId?: string;
}

export interface StorySection {
  id: string;
  eyebrow: string;
  title: string;
  intro: string;
  /** split: photo mosaic + copy. immersive: full-bleed photo behind the copy. */
  layout: "split" | "immersive";
  tone: "light" | "sand" | "dark" | "desert" | "ocean" | "glacier" | "forest";
  images: USAImageId[];
  highlightsTitle: string;
  highlights: string[];
  spotlights?: Spotlight[];
  spotlightsTitle?: string;
  /** Route journeys from ./circuits.ts, drawn as animated maps. */
  routeIds?: string[];
  routesTitle?: string;
  packageIds: string[];
  packagesTitle: string;
  callout?: { title: string; text: string };
  notes?: string[];
}

const TICKETS_NOTE = "Attraction, observation-deck and show tickets are booked on request and subject to availability.";
const PARK_NOTE = "National park access, road conditions, seasonal closures, reservations and permits vary, and are checked for your dates.";

/** New York flagship: landmarks swap the hero image as you explore them. */
export const newYorkFlagship = {
  id: "new-york",
  eyebrow: "Flagship destination",
  title: "New York — The City That Never Stops",
  intro: "Yellow cabs and Broadway lights, Central Park mornings and skyline sunsets. For most travellers from Nepal and India, a USA story starts in New York.",
  landmarks: [
    { name: "Manhattan Skyline", text: "Midtown towers, downtown's One World Trade Center and the Hudson River waterfront.", image: "nyc-skyline" as USAImageId },
    { name: "Times Square & Broadway", text: "Neon billboards and the Theater District; shows are booked subject to availability.", image: "times-square" as USAImageId },
    { name: "Statue of Liberty", text: "Harbour ferries pass Liberty Island; pedestal and crown access need separate tickets.", image: "liberty" as USAImageId },
    { name: "Central Park", text: "Lakes, lawns and rowing boats in the middle of Manhattan.", image: "central-park" as USAImageId },
    { name: "Empire State Building", text: "The Art Deco icon and one of several major observation decks.", image: "nyc-empire" as USAImageId },
    { name: "Brooklyn Bridge", text: "Walk across to DUMBO for the classic skyline view.", image: "brooklyn-bridge" as USAImageId },
  ],
  highlights: ["Manhattan", "Times Square", "Statue of Liberty", "Central Park", "Empire State Building", "Rockefeller Center", "Fifth Avenue", "Broadway", "One World Trade Center", "9/11 Memorial & Museum", "Brooklyn Bridge", "Wall Street", "Hudson River", "Observation decks"],
  packageIds: ["nyc-4n", "nyc-highlights-5n", "nyc-family", "nyc-shopping", "nyc-luxury"],
  extensions: [
    { label: "Niagara Falls", destinationId: "niagara-falls", text: "1–2 nights by short flight or road" },
    { label: "Washington DC", destinationId: "washington-dc", text: "Approx. 3–3.5 hours by train" },
    { label: "Boston", destinationId: "boston", text: "Approx. 3.5–4.5 hours by train" },
    { label: "Philadelphia", destinationId: "philadelphia", text: "Approx. 1–1.5 hours by train" },
  ],
  note: TICKETS_NOTE,
};

export const storySections: Record<string, StorySection> = {
  "east-coast": {
    id: "east-coast",
    eyebrow: "Washington DC + East Coast",
    title: "Where America's Story Was Written",
    intro: "Monuments on the National Mall, the Liberty Bell in Philadelphia and Boston's Freedom Trail, all linked by one of the country's easiest rail corridors.",
    layout: "split",
    tone: "sand",
    images: ["washington-monument", "capitol", "boston"],
    highlightsTitle: "East Coast experiences",
    highlights: ["National Mall", "U.S. Capitol area", "White House exterior & visitor information", "Smithsonian museums", "Lincoln Memorial", "Washington Monument", "Independence Hall", "Liberty Bell", "Boston Freedom Trail", "Harvard / Cambridge", "New England experiences"],
    spotlightsTitle: "Three cities",
    spotlights: [
      { title: "Washington DC", tag: "The capital", text: "Monuments, memorials and world-class free museums.", image: "lincoln", destinationId: "washington-dc" },
      { title: "Philadelphia", tag: "Birthplace of a nation", text: "Independence Hall, the Liberty Bell and a great food market.", image: "philadelphia", destinationId: "philadelphia" },
      { title: "Boston", tag: "Gateway to New England", text: "The Freedom Trail, Harvard and autumn foliage trips.", image: "boston", destinationId: "boston" },
    ],
    routeIds: ["ny-dc-philly", "ny-boston", "ny-dc-niagara"],
    routesTitle: "East Coast circuits",
    packageIds: ["nyc-dc-philly", "nyc-boston", "nyc-dc-niagara-7n", "nyc-dc-6n"],
    packagesTitle: "East Coast packages",
    notes: ["Access to government buildings depends on security arrangements and advance requests; exterior visits are always possible."],
  },
  niagara: {
    id: "niagara",
    eyebrow: "Niagara Falls",
    title: "Feel the Thunder of Niagara",
    intro: "Experience Niagara Falls from the U.S. side, with optional Canada combinations where legally and operationally suitable.",
    layout: "immersive",
    tone: "ocean",
    images: ["niagara-aerial", "niagara"],
    highlightsTitle: "Experiences",
    highlights: ["Boat sightseeing (seasonal)", "Observation points", "Seasonal viewpoints", "Evening illuminations"],
    packageIds: ["niagara-ext", "nyc-niagara-5n", "nyc-dc-niagara-7n", "nyc-niagara-honeymoon-6n"],
    packagesTitle: "Niagara Falls packages",
    callout: {
      title: "Visiting the Canadian side?",
      text: "Crossing to the Canadian side requires meeting Canada's entry requirements, which depend on your passport and visa status. Canada entry is not automatically included in a USA trip; we can plan a combination only for travellers who are eligible.",
    },
    notes: ["Boat tours and some viewpoints operate seasonally and depend on weather."],
  },
  florida: {
    id: "florida",
    eyebrow: "Florida & the Southeast",
    title: "Sunshine, Theme Parks & Soulful Cities",
    intro: "Orlando's world-famous resorts, Miami's beaches, a road trip down the Florida Keys and the music of New Orleans and Nashville.",
    layout: "split",
    tone: "light",
    images: ["miami-beach", "orlando", "florida-keys"],
    highlightsTitle: "Destinations",
    highlights: ["Orlando", "Miami", "Fort Lauderdale", "Tampa", "Key West", "Atlanta", "New Orleans", "Nashville"],
    spotlightsTitle: "Explore the Southeast",
    spotlights: [
      {
        title: "Orlando", tag: "Family flagship", image: "orlando", destinationId: "orlando",
        text: "Home to several of the world's best-known theme-park resorts.",
        points: ["Walt Disney World Resort", "Universal Orlando Resort", "SeaWorld Orlando", "Water parks & other major attractions"],
      },
      { title: "Miami", tag: "Beach & Art Deco", image: "miami-skyline", destinationId: "miami", text: "South Beach, Art Deco streets, shopping, nightlife and boat excursions." },
      { title: "Key West", tag: "Scenic Florida Keys escape", image: "florida-keys", destinationId: "key-west", text: "Drive the Overseas Highway to sunsets at the southern tip of Florida." },
      { title: "New Orleans", tag: "Music, food & heritage", image: "new-orleans", destinationId: "new-orleans", text: "Jazz clubs, Creole kitchens and French Quarter architecture." },
      { title: "Nashville", tag: "Music City", image: "nashville", destinationId: "nashville", text: "Country music history and live performances every night." },
    ],
    packageIds: ["orlando-family-5n", "orlando-miami-7n", "florida-family", "orlando-themepark", "nyc-orlando-miami-10n"],
    packagesTitle: "Florida packages",
    callout: {
      title: "About theme-park tickets",
      text: "Walt Disney World, Universal Orlando and SeaWorld are independent commercial attractions. Park admission is not automatically included in any package; we advise on tickets and can add them on request.",
    },
    notes: ["Hurricane season runs June to November; we plan with flexibility in mind."],
  },
  southwest: {
    id: "southwest",
    eyebrow: "Las Vegas + the Southwest",
    title: "Neon Nights, Desert Wonders",
    intro: "Start on the Las Vegas Strip, then drive into a landscape of canyons, red rock and endless sky.",
    layout: "split",
    tone: "desert",
    images: ["grand-canyon", "las-vegas", "antelope-canyon"],
    highlightsTitle: "Destinations & experiences",
    highlights: ["Las Vegas", "Grand Canyon", "Hoover Dam", "Antelope Canyon", "Horseshoe Bend", "Zion National Park", "Bryce Canyon", "Monument Valley", "Sedona"],
    spotlightsTitle: "Desert icons",
    spotlights: [
      { title: "Las Vegas", tag: "Entertainment capital", image: "vegas-sign", destinationId: "las-vegas", text: "Resorts, shows and dining; a natural base for canyon trips." },
      { title: "Hoover Dam", tag: "Engineering marvel", image: "hoover-dam", text: "A short drive from Las Vegas on the way to the Grand Canyon." },
      { title: "Antelope Canyon", tag: "Guided tours only", image: "antelope-canyon", text: "Light beams in sculpted slot canyons, visited with authorised guides." },
      { title: "Horseshoe Bend", tag: "Page, Arizona", image: "horseshoe-bend", text: "The famous river loop, a short walk from the car park." },
      { title: "Bryce Canyon", tag: "Hoodoo country", image: "bryce", text: "Orange rock spires best seen at sunrise." },
    ],
    routeIds: ["lv-gc-zion"],
    routesTitle: "The canyon loop",
    packageIds: ["vegas-3n", "vegas-gc-5n", "vegas-gc-zion-7n", "southwest-roadtrip", "gc-southwest-8n"],
    packagesTitle: "Las Vegas & Southwest packages",
    notes: [PARK_NOTE, "Summer temperatures in the desert can be extreme; we plan early starts and shaded breaks."],
  },
  california: {
    id: "california",
    eyebrow: "The California collection",
    title: "California, From Hollywood to the Golden Gate",
    intro: "Movie studios and palm-lined boulevards, wine country and redwoods, and a coastline built for road trips.",
    layout: "split",
    tone: "sand",
    images: ["golden-gate-sunset", "los-angeles", "big-sur"],
    highlightsTitle: "Across California",
    highlights: ["Hollywood", "Beverly Hills", "Santa Monica", "Venice Beach", "Disneyland Resort / Anaheim", "Universal Studios Hollywood", "Golden Gate Bridge", "Fisherman's Wharf", "Alcatraz (when tickets are available)", "Napa / Sonoma", "Monterey", "Big Sur", "San Diego", "Yosemite National Park"],
    spotlightsTitle: "California cities",
    spotlights: [
      { title: "Los Angeles", tag: "Hollywood & beaches", image: "hollywood", destinationId: "los-angeles", text: "Hollywood, Beverly Hills, Santa Monica and Venice Beach, with Disneyland Resort and Universal Studios Hollywood nearby." },
      { title: "San Francisco", tag: "Bay city", image: "san-francisco", destinationId: "san-francisco", text: "Golden Gate Bridge, Fisherman's Wharf and Alcatraz when tickets are available." },
      { title: "Wine country & coast", tag: "Napa · Monterey · Big Sur", image: "napa", destinationId: "napa", text: "Vineyards, coastal drives and the cliffs of Big Sur." },
      { title: "San Diego", tag: "Sun & surf", image: "san-diego", destinationId: "san-diego", text: "Beaches, La Jolla's coast and family attractions." },
      { title: "Yosemite", tag: "National park", image: "yosemite", destinationId: "yosemite", text: "Granite cliffs and waterfalls; seasonal roads and reservations may apply." },
    ],
    routeIds: ["la-lv-sf"],
    routesTitle: "Flagship itinerary: Los Angeles → Las Vegas → San Francisco",
    packageIds: ["la-sf-6n", "california-highlights-8n", "la-lv-sf-9n", "california-family", "california-roadtrip"],
    packagesTitle: "California packages",
    notes: [TICKETS_NOTE],
  },
  hawaii: {
    id: "hawaii",
    eyebrow: "Hawaii",
    title: "Aloha, Island Paradise",
    intro: "Premium honeymoons, luxury resorts and family beach holidays across four very different islands.",
    layout: "immersive",
    tone: "ocean",
    images: ["na-pali", "waikiki"],
    highlightsTitle: "Experiences",
    highlights: ["Honolulu", "Waikiki", "Diamond Head", "Pearl Harbor", "Road to Hana", "Haleakalā", "Na Pali Coast", "Volcanoes National Park", "Island beach resorts"],
    spotlightsTitle: "The islands",
    spotlights: [
      { title: "Oahu", tag: "Waikiki & history", image: "waikiki", destinationId: "honolulu", text: "Waikiki, Diamond Head, Pearl Harbor and the North Shore." },
      { title: "Maui", tag: "Romance & road trips", image: "maui", destinationId: "maui", text: "The Road to Hana, Haleakalā and romantic resorts." },
      { title: "Kauai", tag: "The Garden Isle", image: "na-pali", destinationId: "kauai", text: "The Na Pali Coast and Waimea Canyon." },
      { title: "Big Island", tag: "Volcanoes", destinationId: "big-island", text: "Volcanoes National Park and black-sand beaches." },
    ],
    packageIds: ["oahu-5n", "hawaii-honeymoon-7n", "maui-oahu-8n", "hawaii-hopping-10n", "hawaii-7n"],
    packagesTitle: "Hawaii packages",
    callout: { title: "Premium honeymoon · Luxury · Family", text: "Hawaii suits couples, families and luxury travellers alike. We match the island and the resort to how you want to travel." },
    notes: ["Haleakalā sunrise and some tours need advance reservations; volcanic activity can change access."],
  },
  alaska: {
    id: "alaska",
    eyebrow: "Alaska",
    title: "Alaska, the Last Frontier",
    intro: "Glaciers calving into the sea, bears and whales, rail journeys through the wilderness and Northern Lights in the long nights.",
    layout: "split",
    tone: "glacier",
    images: ["alaska-glacier", "aurora", "denali"],
    highlightsTitle: "Experiences",
    highlights: ["Northern Lights", "Glaciers", "Wildlife", "Cruises", "Scenic rail journeys", "National parks"],
    spotlightsTitle: "Where to go",
    spotlights: [
      { title: "Anchorage & Kenai", tag: "Gateway", image: "alaska-boat", destinationId: "anchorage", text: "Seward glacier cruises and the Kenai Peninsula." },
      { title: "Denali", tag: "Wilderness", image: "denali", destinationId: "denali", text: "North America's highest peak and vast tundra." },
      { title: "Fairbanks", tag: "Aurora base", image: "aurora", destinationId: "fairbanks", text: "Northern Lights viewing in the darker months." },
      { title: "Juneau", tag: "Inside Passage", image: "cruise-port", destinationId: "juneau", text: "Glaciers, whales and cruise ports." },
    ],
    packageIds: ["alaska-highlights-5n", "alaska-nature-7n", "alaska-aurora", "alaska-cruise"],
    packagesTitle: "Alaska packages",
    callout: {
      title: "Alaska is highly seasonal",
      text: "Late May to early September is the main season for cruises, glaciers, wildlife and Denali. Northern Lights trips run in the dark months, roughly late August to April, and sightings depend on weather and solar activity; they are never guaranteed.",
    },
    notes: [PARK_NOTE],
  },
  midwest: {
    id: "midwest",
    eyebrow: "Chicago + the Midwest",
    title: "Chicago, City of Big Shoulders",
    intro: "Landmark architecture, a beach-lined lakefront and museums to rival any in the world, with Great Lakes cities close by.",
    layout: "split",
    tone: "light",
    images: ["chicago", "chicago-bean"],
    highlightsTitle: "Chicago highlights",
    highlights: ["Millennium Park", "Navy Pier", "Art Institute of Chicago", "Willis Tower / Skydeck", "River cruises", "Architecture tours"],
    spotlightsTitle: "Around the Great Lakes",
    spotlights: [
      { title: "Chicago", tag: "Architecture & food", image: "chicago-bean", destinationId: "chicago", text: "City breaks with museums, lakefront and deep-dish." },
      { title: "Milwaukee", tag: "Lakefront festivals", destinationId: "milwaukee", text: "Art, breweries and summer festivals, 90 minutes north." },
      { title: "Detroit", tag: "Motor City", destinationId: "detroit", text: "Automotive history and Motown music." },
    ],
    packageIds: ["chicago-3n", "usa-custom"],
    packagesTitle: "Chicago & Midwest packages",
  },
  texas: {
    id: "texas",
    eyebrow: "Texas + Central USA",
    title: "Everything's Bigger in Texas",
    intro: "Space Center Houston, the River Walk, live music in Austin and Western culture in Fort Worth: customizable city breaks and road trips.",
    layout: "split",
    tone: "sand",
    images: ["san-antonio", "austin", "dallas"],
    highlightsTitle: "Experiences",
    highlights: ["Space Center Houston", "Texas Hill Country", "River Walk", "Alamo historic area", "Live music", "Food", "Western culture"],
    spotlightsTitle: "Texas cities",
    spotlights: [
      { title: "Dallas & Fort Worth", tag: "Arts & cowboys", image: "dallas", destinationId: "dallas", text: "Museums, shopping and the Fort Worth Stockyards." },
      { title: "Houston", tag: "Space City", image: "houston", destinationId: "houston", text: "Space Center Houston and a diverse food scene." },
      { title: "Austin", tag: "Live music", image: "austin", destinationId: "austin", text: "Music venues, barbecue and the Hill Country." },
      { title: "San Antonio", tag: "History & River Walk", image: "san-antonio", destinationId: "san-antonio", text: "The River Walk and the Alamo historic area." },
    ],
    packageIds: ["texas-cities", "texas-hill-country"],
    packagesTitle: "Customizable Texas trips",
  },
  "mountain-states": {
    id: "mountain-states",
    eyebrow: "Pacific Northwest + Mountain States",
    title: "Big Sky, Bigger Landscapes",
    intro: "Volcanoes above Seattle, geysers in Yellowstone, jagged Tetons and the high Rockies: the American West at its wildest.",
    layout: "immersive",
    tone: "forest",
    images: ["teton", "seattle"],
    highlightsTitle: "Experiences",
    highlights: ["Mountains", "National parks", "Scenic drives", "Lakes", "Wildlife", "Outdoor adventure"],
    spotlightsTitle: "Gateways & parks",
    spotlights: [
      { title: "Seattle", tag: "Emerald City", image: "seattle", destinationId: "seattle", text: "Space Needle, Pike Place and Mount Rainier." },
      { title: "Portland", tag: "Gorge & gardens", image: "portland", destinationId: "portland", text: "The Columbia River Gorge and Mount Hood." },
      { title: "Denver & the Rockies", tag: "Mile High City", image: "rocky", destinationId: "denver", text: "Rocky Mountain National Park and ski resorts." },
      { title: "Salt Lake City", tag: "Park gateway", image: "salt-lake-city", destinationId: "salt-lake-city", text: "Gateway to Utah's parks and Yellowstone." },
      { title: "Yellowstone & Grand Teton", tag: "Wildlife & geysers", image: "yellowstone-bison", destinationId: "yellowstone", text: "Geysers, bison and mountain lakes." },
    ],
    packageIds: ["yellowstone-teton", "denver-rockies", "pacific-northwest", "national-parks-10n"],
    packagesTitle: "Mountain & Northwest packages",
    notes: [PARK_NOTE],
  },
};
