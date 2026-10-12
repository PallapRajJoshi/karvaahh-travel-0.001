// data/south-africa/sections.ts
// Content for the regional story sections. One shape renders every region,
// with a layout and tone per section, so a CMS can add or reorder regions.

import type { SAImageId } from "./images";
import type { FeatureItem } from "./types";

export interface StorySection {
  id: string;
  eyebrow: string;
  title: string;
  /** Second line of the headline, set in italic. */
  titleAccent?: string;
  lede: string;
  images: SAImageId[];
  highlights: FeatureItem[];
  facts?: { k: string; v: string }[];
  /** Optional, configurable add-ons (tickets are never assumed included). */
  extras?: { title: string; note?: string }[];
  /** Animated journey line, e.g. Johannesburg → Panorama Route → Kruger. */
  route?: { stop: string; note: string }[];
  /** Two-column sub-sections, e.g. Johannesburg + Pretoria. */
  pair?: { title: string; text: string; image: SAImageId; points: string[] }[];
  notes?: string[];
  packageIds: string[];
  tone: "light" | "sand" | "dark" | "earth";
  layout: "flagship" | "split" | "split-reverse" | "route" | "pair";
}

export const TICKETS_NOTE = "Attraction tickets, cableway rides and boat trips are configurable add-ons and are only included when stated in your quote. Some depend on weather and availability.";

export const storySections = {
  "cape-town": {
    id: "cape-town", eyebrow: "Flagship city · Western Cape", title: "Cape Town", titleAccent: "Where Mountain Meets Ocean",
    lede: "A city wrapped around a mountain, with the Atlantic on one side and vineyards over the hill. Ride up Table Mountain, drive Chapman's Peak to Cape Point, walk Bo-Kaap's painted streets and end the day on Camps Bay at sunset.",
    images: ["ct-tablecloth", "cable-car", "camps-bay-beach", "bo-kaap", "cape-point-lighthouse", "boulders-penguins", "atlantic-coast-sunset"],
    highlights: [
      { id: "table", title: "Table Mountain", text: "Cableway or hike to the flat-topped summit, weather permitting.", image: "cable-car" },
      { id: "peninsula", title: "Cape Peninsula & Cape Point", text: "Chapman's Peak Drive, Boulders penguins and the lighthouse at Cape Point.", image: "cape-point-lighthouse" },
      { id: "robben", title: "Robben Island", text: "Ferry tours to the island's prison museum, subject to sailing conditions and availability.", icon: "landmark" },
      { id: "waterfront", title: "V&A Waterfront", text: "Harbour life, dining, shopping and harbour cruises.", icon: "ship" },
      { id: "beaches", title: "Camps Bay & Clifton", text: "White sand below the Twelve Apostles.", image: "clifton" },
      { id: "bokaap", title: "Bo-Kaap", text: "Colourful houses and Cape Malay heritage and food.", image: "bo-kaap-street" },
      { id: "kirstenbosch", title: "Kirstenbosch", text: "Botanical gardens on the mountain's eastern slopes.", icon: "trees" },
      { id: "chapmans", title: "Chapman's Peak", text: "One of the world's great coastal drives, when open.", icon: "car" },
    ],
    facts: [{ k: "Ideal stay", v: "4–5 nights" }, { k: "Best weather", v: "Typically Oct–Apr" }, { k: "Pairs with", v: "Winelands, Garden Route, Kruger" }],
    extras: [{ title: "Table Mountain Aerial Cableway", note: "Weather-dependent" }, { title: "Cape Peninsula day tour" }, { title: "Robben Island ferry", note: "Subject to availability" }, { title: "Harbour or sunset cruise" }, { title: "Scenic coastal drives" }, { title: "Boulders penguin colony visit" }],
    packageIds: ["ct-4n", "ct-winelands", "ct-honeymoon", "ct-family", "ct-luxury"],
    tone: "light", layout: "flagship",
  },
  winelands: {
    id: "winelands", eyebrow: "Cape Winelands · Food & wine", title: "The Cape Winelands", titleAccent: "Vines, Valleys and Long Lunches",
    lede: "Under an hour from Cape Town, Stellenbosch, Franschhoek and Paarl sit among mountain-ringed vineyards, gabled Cape Dutch homesteads and some of the country's most celebrated kitchens.",
    images: ["vineyard-mountain", "wine-glasses", "cape-dutch-manor", "wine-tram", "vineyard-sunset"],
    highlights: [
      { id: "estates", title: "Wine estates", text: "Tastings and cellar visits at estates chosen to your taste.", icon: "glass" },
      { id: "food", title: "Culinary experiences", text: "Estate restaurants and chef-led dining where offered.", icon: "utensils" },
      { id: "scenic", title: "Scenic vineyards", text: "Mountain views across rows of vines.", icon: "mountain" },
      { id: "stays", title: "Luxury stays", text: "Boutique and estate accommodation.", icon: "hotel" },
      { id: "drives", title: "Scenic drives", text: "Mountain passes between the valleys.", icon: "car" },
      { id: "tram", title: "Franschhoek Wine Tram", text: "Hop-on tram and bus routes between estates, where operating.", icon: "map" },
    ],
    notes: ["Specific estates are suggested once we know your preferences; none are pre-selected or guaranteed.", "Responsible tasting: a private driver or tram is recommended over self-driving."],
    packageIds: ["ct-winelands", "luxury-wine", "ct-safari-winelands"],
    tone: "sand", layout: "split",
  },
  hermanus: {
    id: "hermanus", eyebrow: "Hermanus · Whale coast", title: "Hermanus", titleAccent: "Whales From the Clifftops",
    lede: "On Walker Bay, about 90 minutes from Cape Town, a cliff path follows the shore where southern right whales are typically seen from land in season. Pair it with a coastal drive and continue east along the Garden Route.",
    images: ["whale-breach", "hermanus-cliffs", "whale-tail"],
    highlights: [
      { id: "whales", title: "Seasonal whale watching", text: "Whales are typically present from about June to November; sightings are never guaranteed.", icon: "fish" },
      { id: "coast", title: "Coastal scenery", text: "Cliffs, coves and fynbos along Walker Bay.", icon: "waves" },
      { id: "drive", title: "Scenic drives", text: "Clarence Drive between Gordon's Bay and Hermanus.", icon: "car" },
      { id: "marine", title: "Marine experiences", text: "Boat-based whale watching where licensed operators run it.", icon: "ship" },
    ],
    route: [{ stop: "Cape Town", note: "Start" }, { stop: "Hermanus", note: "~1.5 hrs" }, { stop: "Garden Route", note: "Onward east" }],
    packageIds: ["luxury-wine", "ct-garden-7n", "ct-gr-addo"],
    tone: "light", layout: "split-reverse",
  },
  kruger: {
    id: "kruger", eyebrow: "Safari flagship · Kruger National Park", title: "Kruger", titleAccent: "Into the Heart of the Wild",
    lede: "Nearly two million hectares of bushveld, rivers and granite koppies. Set out on dawn and dusk game drives from a rest camp, a lodge or a private concession, with a ranger reading the tracks.",
    images: ["elephant-road", "lion-golden", "leopard-walk", "rhino-calf", "buffalo-herd", "vehicle-sunset"],
    highlights: [
      { id: "bigfive", title: "Big Five safari", text: "Possible Big Five encounters across varied habitats.", icon: "binoculars" },
      { id: "drives", title: "Game drives", text: "Morning and evening drives; night drives where permitted.", icon: "car" },
      { id: "photo", title: "Wildlife photography", text: "Golden light, waterholes and patient sightings.", icon: "camera" },
      { id: "bush", title: "Bush landscapes", text: "Mopane, marula, rivers and wide skies.", icon: "trees" },
      { id: "lodges", title: "Luxury lodges", text: "From rest camps to five-star private concessions.", icon: "hotel" },
      { id: "family", title: "Family safari", text: "Family-friendly lodges with age policies to check.", icon: "users" },
      { id: "private", title: "Private safari", text: "Your own vehicle and guide, where offered.", icon: "shield" },
    ],
    facts: [{ k: "Ideal stay", v: "3–4 nights" }, { k: "Game viewing", v: "Often best in the dry winter" }, { k: "Getting there", v: "Fly or drive from Johannesburg" }],
    notes: ["Wildlife sightings are naturally unpredictable. No sighting, including the Big Five, can be guaranteed.", "Parts of the Kruger region are malaria areas; consult your doctor before travel."],
    packageIds: ["kruger-5n", "ct-kruger", "ct-safari-8n", "luxury-kruger", "family-safari"],
    tone: "dark", layout: "flagship",
  },
  "sabi-sand": {
    id: "sabi-sand", eyebrow: "Sabi Sand · Private reserve", title: "Sabi Sand", titleAccent: "Luxury in the Wild",
    lede: "A private reserve sharing an unfenced boundary with Kruger. Lodges here typically run their own game drives with a ranger and tracker, and are known for intimate, unhurried sightings.",
    images: ["leopard-tree", "lodge-pool", "lodge-suite"],
    highlights: [
      { id: "lodges", title: "Luxury lodges", text: "Small lodges from luxury to ultra luxury; facilities vary by lodge.", icon: "hotel" },
      { id: "private", title: "Private safari experiences", text: "Smaller vehicles and off-road tracking where reserve rules allow.", icon: "shield" },
      { id: "drives", title: "Game drives", text: "Twice-daily drives are typical; schedules vary by lodge.", icon: "car" },
      { id: "photo", title: "Wildlife photography", text: "Known for leopard encounters, never guaranteed.", icon: "camera" },
      { id: "dining", title: "Premium dining", text: "Lodge dining and bush meals where offered.", icon: "utensils" },
      { id: "romance", title: "Romantic safari", text: "Private decks and sundowners for two.", icon: "heart" },
    ],
    notes: ["Lodge facilities, meal plans and activities differ between lodges and are confirmed per booking."],
    packageIds: ["sabi-luxury", "ct-sabi", "luxury-safari"],
    tone: "earth", layout: "split-reverse",
  },
  panorama: {
    id: "panorama", eyebrow: "Panorama Route · Blyde River Canyon", title: "The Panorama Route", titleAccent: "Canyons on the Way to the Bush",
    lede: "Between Johannesburg and Kruger, the road climbs the escarpment past waterfalls, viewpoints and the forested depths of Blyde River Canyon.",
    images: ["blyde-canyon", "panorama-aerial", "canyon-viewpoint", "blyde-aerial"],
    highlights: [
      { id: "canyon", title: "Blyde River Canyon", text: "Three Rondavels and deep green gorges.", icon: "mountain" },
      { id: "views", title: "Scenic viewpoints", text: "God's Window and Wonder View, when mist allows.", icon: "sun" },
      { id: "falls", title: "Waterfalls", text: "Lisbon, Berlin and other falls near Graskop.", icon: "waves" },
      { id: "potholes", title: "Bourke's Luck Potholes", text: "River-carved rock formations.", icon: "compass" },
    ],
    route: [
      { stop: "Johannesburg / Pretoria", note: "Start" },
      { stop: "Dullstroom", note: "Highlands stop" },
      { stop: "Graskop & God's Window", note: "Escarpment" },
      { stop: "Blyde River Canyon", note: "Three Rondavels" },
      { stop: "Kruger", note: "Safari" },
    ],
    packageIds: ["joburg-panorama-kruger", "kruger-5n", "sa-highlights"],
    tone: "sand", layout: "route",
  },
  johannesburg: {
    id: "johannesburg", eyebrow: "Gauteng · Urban & cultural", title: "Johannesburg & Pretoria", titleAccent: "Cities of History and Heritage",
    lede: "Most safaris start in Gauteng. Give the cities a day or two: museums and neighbourhoods in Johannesburg, heritage architecture and gardens in Pretoria.",
    images: ["joburg-golden", "pretoria-jacaranda"],
    highlights: [],
    pair: [
      { title: "Johannesburg", text: "A fast-moving city of history, culture, food and shopping, and the main gateway to safari.", image: "joburg-aerial", points: ["History and heritage museums", "Neighbourhood food and art", "Shopping and dining", "Gateway to Kruger and Sun City"] },
      { title: "Pretoria", text: "The administrative capital: heritage buildings, gardens and avenues that typically bloom purple with jacaranda in spring.", image: "pretoria-heritage", points: ["Union Buildings", "Heritage architecture", "Gardens", "Cultural experiences"] },
    ],
    packageIds: ["joburg-break", "joburg-pretoria", "joburg-kruger", "joburg-panorama-kruger"],
    tone: "light", layout: "pair",
  },
  "sun-city": {
    id: "sun-city", eyebrow: "North West · Family, luxury & safari", title: "Sun City & Pilanesberg", titleAccent: "Resort Days, Safari Evenings",
    lede: "A few hours from Johannesburg, Sun City's pools and entertainment sit right beside the Pilanesberg, a malaria-free Big Five reserve set in an ancient volcanic crater.",
    images: ["sun-city-palace", "safari-vehicle", "sun-city-elephant"],
    highlights: [],
    pair: [
      { title: "Sun City", text: "A resort complex of pools, entertainment and activities, popular with families.", image: "sun-city-palace", points: ["Resort experiences", "Entertainment", "Family travel", "Luxury stays", "Adventure activities where offered"] },
      { title: "Pilanesberg", text: "A Big Five reserve where possible encounters include elephant, rhino and lion, on guided game drives.", image: "safari-vehicle", points: ["Game drives", "Malaria-free safari", "Family safari", "Waterhole hides"] },
    ],
    notes: ["Resort accommodation, resort facilities and attraction admissions are separate items. Each is only included where your quote says so."],
    packageIds: ["sun-city-family", "sun-city-pilanesberg", "joburg-sun-city", "family-safari"],
    tone: "sand", layout: "pair",
  },
  "garden-route": {
    id: "garden-route", eyebrow: "Garden Route · Road-trip collection", title: "The Garden Route", titleAccent: "South Africa's Great Coastal Drive",
    lede: "Roughly 300 km of lakes, lagoons, indigenous forest and beaches between Mossel Bay and the Tsitsikamma. Drive yourself or travel with a private chauffeur, stopping wherever the view demands.",
    images: ["garden-lagoon", "knysna-heads", "wilderness-lake", "plett-beach", "coastal-boardwalk"],
    highlights: [
      { id: "coast", title: "Scenic coastline", text: "Headlands, lagoons and long bays.", icon: "waves" },
      { id: "forest", title: "Forests", text: "Ancient yellowwood forests and trails.", icon: "trees" },
      { id: "beaches", title: "Beaches", text: "Plettenberg Bay, Wilderness and more.", icon: "palm" },
      { id: "wildlife", title: "Wildlife", text: "Marine life and nearby reserves.", icon: "binoculars" },
      { id: "adventure", title: "Adventure", text: "Hiking, kayaking and canopy activities where offered.", icon: "compass" },
      { id: "food", title: "Food", text: "Oysters, markets and coastal dining.", icon: "utensils" },
    ],
    route: [
      { stop: "Cape Town", note: "Start" },
      { stop: "Hermanus", note: "Whale coast" },
      { stop: "Mossel Bay", note: "Gateway" },
      { stop: "Wilderness", note: "Lakes" },
      { stop: "Knysna", note: "Lagoon" },
      { stop: "Plettenberg Bay", note: "Beaches" },
      { stop: "Addo", note: "Optional safari" },
    ],
    packageIds: ["ct-garden-7n", "garden-road-trip", "ct-gr-safari", "ct-gr-family"],
    tone: "light", layout: "route",
  },
  addo: {
    id: "addo", eyebrow: "Eastern Cape · Malaria-free safari", title: "Addo & Gqeberha", titleAccent: "Elephants by the Sea",
    lede: "At the end of the Garden Route, Addo Elephant National Park offers malaria-free game viewing known for its elephant herds, with beaches and an airport at nearby Gqeberha (Port Elizabeth).",
    images: ["elephant-waterhole", "elephant-approach"],
    highlights: [
      { id: "elephants", title: "Elephant herds", text: "Possible close encounters at waterholes.", icon: "binoculars" },
      { id: "drives", title: "Game drives", text: "Guided or self-drive routes.", icon: "car" },
      { id: "family", title: "Family-friendly", text: "Malaria-free, close to the coast.", icon: "users" },
      { id: "coast", title: "Coastal experiences", text: "Algoa Bay beaches at Gqeberha.", icon: "waves" },
    ],
    notes: ["Wildlife sightings are naturally unpredictable."],
    packageIds: ["addo-safari", "gr-addo", "ct-gr-addo"],
    tone: "earth", layout: "split",
  },
  durban: {
    id: "durban", eyebrow: "KwaZulu-Natal · Coast", title: "Durban", titleAccent: "Warm Indian Ocean Days",
    lede: "Durban pairs warm water and a long beachfront promenade with a multicultural food scene, including its famous curries, and is a short drive from the Drakensberg.",
    images: ["durban-beachfront", "durban-promenade", "durban-pier", "durban-dusk"],
    highlights: [
      { id: "beaches", title: "Beaches", text: "Golden Mile beaches and promenade.", icon: "palm" },
      { id: "ocean", title: "Indian Ocean", text: "Warmer water than the Cape.", icon: "waves" },
      { id: "culture", title: "Cultural experiences", text: "Zulu heritage and Indian South African culture.", icon: "landmark" },
      { id: "food", title: "Food", text: "Bunny chow, curries and markets.", icon: "utensils" },
      { id: "shop", title: "Shopping", text: "Markets and malls.", icon: "wallet" },
      { id: "mountains", title: "Drakensberg connection", text: "Urban-to-mountain in about three to four hours.", icon: "mountain" },
    ],
    route: [{ stop: "Durban", note: "Coast" }, { stop: "Midlands", note: "Optional stop" }, { stop: "Drakensberg", note: "Mountains" }],
    packageIds: ["durban-drakensberg", "kzn-nature"],
    tone: "sand", layout: "split-reverse",
  },
  drakensberg: {
    id: "drakensberg", eyebrow: "Drakensberg · Mountains", title: "The Drakensberg", titleAccent: "The Dragon Mountains",
    lede: "Basalt cliffs, rock-art caves and grassy valleys in a UNESCO World Heritage Site: the place for hiking, photography and cool mountain air.",
    images: ["drakensberg-sunrise", "drakensberg-peaks", "drakensberg-hiker"],
    highlights: [
      { id: "hike", title: "Hiking", text: "Guided day hikes for different fitness levels.", icon: "compass" },
      { id: "landscape", title: "Mountain landscapes", text: "Amphitheatre and Cathedral Peak views.", icon: "mountain" },
      { id: "nature", title: "Nature", text: "Grasslands, streams and birdlife.", icon: "trees" },
      { id: "photo", title: "Photography", text: "Sunrise above the clouds.", icon: "camera" },
      { id: "drives", title: "Scenic drives", text: "Valleys and mountain passes.", icon: "car" },
    ],
    notes: ["Mountain weather changes quickly; hikes are planned with local guides and may be adjusted."],
    packageIds: ["drakensberg-adventure", "durban-drakensberg", "kzn-nature"],
    tone: "dark", layout: "split",
  },
  "northern-cape": {
    id: "northern-cape", eyebrow: "Northern Cape · Remote wilderness", title: "The Northern Cape", titleAccent: "South Africa Off the Usual Path",
    lede: "Red Kalahari dunes, a roaring granite gorge and diamond-rush history. Distances are long and services sparse, which is exactly the appeal for photographers and experienced road-trippers.",
    images: ["kalahari-dunes", "kalahari-vehicle", "meerkat", "springbok"],
    highlights: [
      { id: "kgalagadi", title: "Kgalagadi", text: "Dry riverbed game viewing and desert predators, never guaranteed.", icon: "binoculars" },
      { id: "augrabies", title: "Augrabies", text: "The Orange River plunging into a granite gorge.", icon: "waves" },
      { id: "kimberley", title: "Kimberley", text: "The Big Hole and mining heritage.", icon: "landmark" },
      { id: "bloem", title: "Bloemfontein", text: "A heritage stop on overland routes.", icon: "map" },
      { id: "skies", title: "Desert skies", text: "Remote, dark night skies.", icon: "sparkles" },
      { id: "road", title: "Remote road trips", text: "Long distances; 4x4 recommended in parts.", icon: "car" },
    ],
    packageIds: ["northern-cape"],
    tone: "earth", layout: "split-reverse",
  },
} satisfies Record<string, StorySection>;
