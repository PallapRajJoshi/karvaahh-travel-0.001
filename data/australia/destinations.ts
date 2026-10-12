// data/australia/destinations.ts
// CMS-ready Australia destinations. Every list, map marker, filter, season view
// and route on the page reads from here, so a destination is added once.
//
// - `active: false` hides a destination everywhere.
// - `href` is the future destination page. It is only linked once listed in
//   LIVE_ROUTES (lib/international/config.ts); until then "Explore" opens the
//   destination's details in place.
// - `idealSeason` is general guidance written as text; conditions vary by year.
// - Package counts are derived from ./packages.ts, never typed in here.
// - Wildlife and marine life are described as possible, never promised.

import type { AUImageId } from "./images";
import type { AustraliaRegion } from "./regions";
import type { AustraliaTravelStyle } from "./travel-styles";

export type SeasonId = "summer" | "autumn" | "winter" | "spring";
export type DestinationKind = "city" | "nature" | "island" | "reef" | "outback" | "wine";

export interface AustraliaDestination {
  id: string;
  name: string;
  /** Short label for maps and routes, e.g. "Uluru". */
  shortName?: string;
  region: AustraliaRegion;
  kind: DestinationKind;
  image?: AUImageId;
  description: string;
  attractions: string[];
  travelStyles: AustraliaTravelStyle[];
  /** Suggested time on the ground. */
  duration?: string;
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

const BASE = "/packages/international/australia";
const ALL: SeasonId[] = ["summer", "autumn", "winter", "spring"];

export const australiaDestinations: AustraliaDestination[] = [
  // ─────────── New South Wales ───────────
  {
    id: "sydney", name: "Sydney", region: "new-south-wales", kind: "city", image: "sydney-harbour",
    description: "The Opera House and Harbour Bridge, ferries across a glittering harbour, and surf beaches minutes from the city. For most first-time visitors, Australia starts here.",
    attractions: ["Sydney Opera House", "Sydney Harbour Bridge", "Circular Quay", "The Rocks", "Darling Harbour", "Bondi Beach", "Manly Beach", "Taronga Zoo", "Royal Botanic Garden", "Harbour cruises"],
    travelStyles: ["city-break", "beach", "family", "honeymoon", "luxury", "budget", "shopping", "cruise", "private", "group", "senior-friendly", "food-wine", "educational", "custom"],
    duration: "4–5 days", idealSeason: "Year-round; spring (Sep–Nov) and autumn (Mar–May) are especially comfortable", seasons: ALL,
    active: true, featured: true, coords: [-33.87, 151.21], labelSide: "right", sectionId: "sydney", href: `${BASE}/sydney`,
  },
  {
    id: "blue-mountains", name: "Blue Mountains", region: "new-south-wales", kind: "nature", image: "blue-mountains",
    description: "Sandstone cliffs, eucalyptus valleys and the Three Sisters, about two hours west of Sydney by road.",
    attractions: ["Three Sisters & Echo Point", "Scenic World", "Wentworth Falls", "Leura & Katoomba villages", "Bushwalks"],
    travelStyles: ["nature", "adventure", "family", "senior-friendly", "road-trip", "private", "group", "honeymoon"],
    duration: "Day trip or 1–2 nights", idealSeason: "Year-round; mild in spring and autumn, cool and crisp in winter", seasons: ALL,
    active: true, coords: [-33.71, 150.31], labelSide: "left", sectionId: "sydney",
  },
  {
    id: "byron-bay", name: "Byron Bay", region: "new-south-wales", kind: "nature", image: "byron-bay",
    description: "A relaxed surf town at Australia's most easterly mainland point, with a lighthouse headland walk and green hinterland.",
    attractions: ["Cape Byron Lighthouse", "Cape Byron walking track", "Main Beach & The Pass", "Hinterland villages", "Seasonal whale watching"],
    travelStyles: ["beach", "honeymoon", "nature", "road-trip", "food-wine", "adventure"],
    duration: "2–3 days", idealSeason: "Spring to autumn; whales may pass the headland in winter and spring", seasons: ["spring", "summer", "autumn"],
    active: true, coords: [-28.64, 153.61], labelSide: "right",
  },
  {
    id: "hunter-valley", name: "Hunter Valley", region: "new-south-wales", kind: "wine", image: "hunter-valley",
    description: "One of Australia's oldest wine regions, with cellar doors, restaurants and countryside stays a short drive north of Sydney.",
    attractions: ["Cellar doors", "Gourmet producers", "Vineyard stays", "Hot-air ballooning (operator dependent)"],
    travelStyles: ["food-wine", "honeymoon", "luxury", "road-trip", "private"],
    duration: "1–2 days", idealSeason: "Year-round; vintage is usually late summer to early autumn", seasons: ALL,
    active: true, minor: true, coords: [-32.78, 151.29], labelSide: "left",
  },
  // ─────────── Australian Capital Territory ───────────
  {
    id: "canberra", name: "Canberra", region: "australian-capital-territory", kind: "city", image: "canberra",
    description: "The planned national capital, home to Parliament House and many of Australia's major museums and galleries.",
    attractions: ["Parliament House", "Australian War Memorial", "National Gallery of Australia", "National Museum of Australia", "Questacon", "Lake Burley Griffin"],
    travelStyles: ["educational", "city-break", "family", "senior-friendly", "group"],
    duration: "1–2 days", idealSeason: "Spring and autumn; winters are cold", seasons: ["spring", "autumn", "summer"],
    active: true, coords: [-35.28, 149.13], labelSide: "left",
  },
  // ─────────── Victoria ───────────
  {
    id: "melbourne", name: "Melbourne", region: "victoria", kind: "city", image: "melbourne-skyline",
    description: "Australia's culture capital: laneway cafés and street art, galleries, markets, major sport and some of the country's best food.",
    attractions: ["Federation Square", "Flinders Street Station", "Yarra River", "Laneways & street art", "Queen Victoria Market", "Royal Botanic Gardens", "Melbourne Cricket Ground", "St Kilda"],
    travelStyles: ["city-break", "food-wine", "shopping", "family", "honeymoon", "educational", "luxury", "budget", "private", "group", "senior-friendly", "custom"],
    duration: "3–4 days", idealSeason: "Year-round; spring and autumn are the most comfortable, and the weather can change quickly", seasons: ALL,
    active: true, featured: true, coords: [-37.81, 144.96], labelSide: "top", sectionId: "melbourne", href: `${BASE}/melbourne`,
  },
  {
    id: "great-ocean-road", name: "Great Ocean Road", region: "victoria", kind: "nature", image: "twelve-apostles",
    description: "One of the world's great coastal drives: surf beaches, rainforest and the limestone stacks of the Twelve Apostles.",
    attractions: ["Twelve Apostles", "Loch Ard Gorge", "Lorne", "Apollo Bay", "Great Otway National Park", "Surf Coast"],
    travelStyles: ["road-trip", "nature", "honeymoon", "family", "adventure", "private", "group", "senior-friendly"],
    duration: "1–3 days", idealSeason: "Year-round; summer and early autumn usually bring the most settled weather", seasons: ALL,
    active: true, featured: true, coords: [-38.66, 143.1], labelSide: "left", sectionId: "melbourne",
  },
  {
    id: "phillip-island", name: "Phillip Island", region: "victoria", kind: "nature", image: "penguins",
    description: "Home of the Penguin Parade, where little penguins return to shore at dusk, plus koalas and coastal boardwalks.",
    attractions: ["Penguin Parade", "Koala Conservation Reserve", "The Nobbies", "Coastal boardwalks"],
    travelStyles: ["wildlife", "family", "nature", "educational", "senior-friendly"],
    duration: "Day trip or 1 night", idealSeason: "Year-round; penguin numbers vary through the year", seasons: ALL,
    active: true, coords: [-38.49, 145.23], labelSide: "right", sectionId: "melbourne",
  },
  {
    id: "yarra-valley", name: "Yarra Valley", region: "victoria", kind: "wine", image: "vineyard",
    description: "Cool-climate wineries, produce stores and countryside an hour from Melbourne.",
    attractions: ["Cellar doors", "Healesville Sanctuary", "Gourmet producers", "Hot-air ballooning (operator dependent)"],
    travelStyles: ["food-wine", "honeymoon", "luxury", "wildlife", "private"],
    duration: "Day trip or 1 night", idealSeason: "Year-round; autumn colours are a highlight", seasons: ALL,
    active: true, minor: true, coords: [-37.65, 145.52], labelSide: "right", sectionId: "melbourne",
  },
  // ─────────── Queensland ───────────
  {
    id: "brisbane", name: "Brisbane", region: "queensland", kind: "city", image: "brisbane",
    description: "Queensland's sunny river capital, with South Bank parklands, a lively food scene and koala sanctuaries nearby.",
    attractions: ["South Bank Parklands", "Story Bridge", "Brisbane River cruises", "Lone Pine Koala Sanctuary", "Mount Coot-tha lookout"],
    travelStyles: ["city-break", "family", "wildlife", "shopping", "budget", "senior-friendly"],
    duration: "2–3 days", idealSeason: "Year-round; spring and autumn avoid the summer humidity", seasons: ALL,
    active: true, coords: [-27.47, 153.03], labelSide: "left", sectionId: "queensland",
  },
  {
    id: "gold-coast", name: "Gold Coast", region: "queensland", kind: "city", image: "gold-coast",
    description: "High-rise Surfers Paradise, long surf beaches, theme parks and green hinterland: Australia's favourite family playground.",
    attractions: ["Surfers Paradise", "Theme parks (tickets separate)", "Burleigh Heads", "SkyPoint observation deck", "Gold Coast hinterland", "Shopping"],
    travelStyles: ["beach", "family", "shopping", "adventure", "honeymoon", "budget", "group", "nature", "city-break"],
    duration: "4–5 days", idealSeason: "Year-round; most beach-friendly from spring to autumn", seasons: ALL,
    active: true, featured: true, coords: [-28.0, 153.43], labelSide: "right", sectionId: "gold-coast", href: `${BASE}/gold-coast`,
  },
  {
    id: "sunshine-coast", name: "Sunshine Coast & Noosa", shortName: "Noosa", region: "queensland", kind: "nature", image: "noosa",
    description: "Relaxed beaches, Noosa National Park's coastal walks and family wildlife parks north of Brisbane.",
    attractions: ["Noosa National Park", "Noosa Main Beach", "Mooloolaba", "Glass House Mountains", "Australia Zoo"],
    travelStyles: ["beach", "family", "nature", "wildlife", "honeymoon"],
    duration: "2–3 days", idealSeason: "Year-round; spring and autumn are especially pleasant", seasons: ALL,
    active: true, minor: true, coords: [-26.39, 153.09], labelSide: "right", sectionId: "queensland",
  },
  {
    id: "cairns", name: "Cairns", region: "queensland", kind: "city", image: "cairns",
    description: "Tropical gateway to the Great Barrier Reef and the Daintree, with a lagoon-front esplanade and reef boats leaving daily.",
    attractions: ["Reef trips from the marina", "Esplanade Lagoon", "Kuranda (rail / cableway, operator dependent)", "Atherton Tablelands", "Green & Fitzroy islands"],
    travelStyles: ["reef", "diving", "nature", "family", "adventure", "wildlife", "budget", "group", "island"],
    duration: "3–5 days", idealSeason: "Dry season (roughly May–Oct) is generally most comfortable; marine stinger season usually runs about Nov–May", seasons: ["autumn", "winter", "spring"],
    active: true, featured: true, coords: [-16.92, 145.77], labelSide: "left", sectionId: "reef", href: `${BASE}/cairns`,
  },
  {
    id: "port-douglas", name: "Port Douglas", region: "queensland", kind: "nature", image: "port-douglas",
    description: "A palm-lined resort village between two World Heritage areas: the reef and the rainforest.",
    attractions: ["Four Mile Beach", "Low Isles & outer reef trips", "Macrossan Street", "Mossman Gorge", "Daintree gateway"],
    travelStyles: ["reef", "honeymoon", "luxury", "beach", "nature", "diving", "family"],
    duration: "3–4 days", idealSeason: "Dry season (roughly May–Oct); stinger season usually about Nov–May", seasons: ["autumn", "winter", "spring"],
    active: true, coords: [-16.48, 145.46], labelSide: "left", sectionId: "queensland",
  },
  {
    id: "daintree", name: "Daintree Rainforest", shortName: "Daintree", region: "queensland", kind: "nature", image: "daintree",
    description: "Ancient tropical rainforest that meets the reef at Cape Tribulation. River cruises, boardwalks and guided walks.",
    attractions: ["Cape Tribulation", "Daintree River cruises", "Mossman Gorge", "Rainforest boardwalks", "Indigenous-guided walks where available"],
    travelStyles: ["nature", "adventure", "wildlife", "educational", "road-trip"],
    duration: "1–2 days", idealSeason: "Dry season (roughly May–Oct); some roads and tours are affected in the wet", seasons: ["autumn", "winter", "spring"],
    active: true, minor: true, coords: [-16.17, 145.42], labelSide: "right", sectionId: "queensland",
  },
  {
    id: "whitsundays", name: "Whitsunday Islands", shortName: "Whitsundays", region: "queensland", kind: "island", image: "whitehaven",
    description: "Seventy-four islands in turquoise water, Whitehaven Beach's silica sand and sailing days on the Great Barrier Reef.",
    attractions: ["Whitehaven Beach", "Hill Inlet lookout", "Airlie Beach", "Sailing & reef pontoons", "Scenic flights (operator dependent)"],
    travelStyles: ["island", "beach", "reef", "honeymoon", "luxury", "diving", "cruise", "adventure", "family"],
    duration: "3–4 days", idealSeason: "Year-round; winter is generally drier and milder; stinger season usually about Nov–May", seasons: ALL,
    active: true, featured: true, coords: [-20.27, 148.72], labelSide: "right", sectionId: "reef",
  },
  {
    id: "hamilton-island", name: "Hamilton Island", region: "queensland", kind: "island", image: "hamilton-island",
    description: "A car-free resort island in the Whitsundays with its own airport, beaches and easy access to the reef.",
    attractions: ["Island resorts", "Catseye Beach", "Whitehaven Beach trips", "Reef pontoons", "Scenic flights (operator dependent)"],
    travelStyles: ["island", "luxury", "honeymoon", "family", "reef", "beach"],
    duration: "3–4 days", idealSeason: "Year-round; winter is generally drier and milder", seasons: ALL,
    active: true, minor: true, coords: [-20.35, 148.96], labelSide: "right", sectionId: "reef",
  },
  {
    id: "great-barrier-reef", name: "Great Barrier Reef", shortName: "The Reef", region: "queensland", kind: "reef", image: "reef-aerial",
    description: "The world's largest coral reef system, explored by snorkelling, diving, glass-bottom boats, scenic flights and island stays.",
    attractions: ["Snorkelling", "Introductory & certified diving", "Glass-bottom boats", "Reef cruises & pontoons", "Scenic flights", "Island stays"],
    travelStyles: ["reef", "diving", "island", "family", "honeymoon", "luxury", "adventure", "nature", "wildlife", "cruise", "educational"],
    duration: "1–3 reef days", idealSeason: "Year-round; conditions vary daily and calm, clear water is never guaranteed", seasons: ALL,
    active: true, featured: true, coords: [-18.3, 147.7], labelSide: "right", sectionId: "reef", href: `${BASE}/great-barrier-reef`,
  },
  // ─────────── Western Australia ───────────
  {
    id: "perth", name: "Perth", region: "western-australia", kind: "city", image: "perth",
    description: "A sunny river city on the Indian Ocean, with Kings Park, Fremantle's heritage port and beaches close to town.",
    attractions: ["Kings Park", "Elizabeth Quay", "Swan River", "Fremantle", "Cottesloe Beach", "Swan Valley"],
    travelStyles: ["city-break", "beach", "food-wine", "family", "budget", "nature", "senior-friendly"],
    duration: "3–4 days", idealSeason: "Spring (Sep–Nov) for wildflowers and mild weather; summers are hot and dry", seasons: ALL,
    active: true, featured: true, coords: [-31.95, 115.86], labelSide: "right", sectionId: "western-australia", href: `${BASE}/perth`,
  },
  {
    id: "rottnest-island", name: "Rottnest Island", shortName: "Rottnest", region: "western-australia", kind: "island", image: "quokka",
    description: "A car-free island of quiet bays, reached by ferry from Perth or Fremantle, and home to the quokka.",
    attractions: ["Quokka spotting (look, never touch or feed)", "Island cycling", "The Basin", "Snorkelling bays", "Wadjemup Lighthouse"],
    travelStyles: ["wildlife", "island", "beach", "family", "adventure", "nature"],
    duration: "Day trip or 1–2 nights", idealSeason: "Spring to autumn; summer for swimming", seasons: ["spring", "summer", "autumn"],
    active: true, coords: [-32.0, 115.52], labelSide: "left", sectionId: "western-australia",
  },
  {
    id: "margaret-river", name: "Margaret River", region: "western-australia", kind: "wine", image: "margaret-river",
    description: "Wineries, farm-gate food, surf beaches, limestone caves and coastal walks in Australia's south-west.",
    attractions: ["Wineries & cellar doors", "Gourmet producers", "Cape Leeuwin", "Limestone caves", "Surf beaches", "Cape to Cape coast"],
    travelStyles: ["food-wine", "honeymoon", "luxury", "road-trip", "nature", "beach"],
    duration: "2–3 days", idealSeason: "Spring to autumn; whale-watching along the coast is seasonal", seasons: ["spring", "summer", "autumn"],
    active: true, coords: [-33.95, 115.07], labelSide: "left", sectionId: "western-australia",
  },
  {
    id: "ningaloo-reef", name: "Ningaloo Reef", shortName: "Ningaloo", region: "western-australia", kind: "reef", image: "ningaloo",
    description: "A fringing reef you can snorkel from the beach, with licensed whale shark and manta ray tours in season.",
    attractions: ["Whale shark tours (seasonal)", "Turquoise Bay snorkelling", "Coral Bay", "Cape Range National Park", "Exmouth"],
    travelStyles: ["reef", "diving", "adventure", "wildlife", "beach", "nature"],
    duration: "3–4 days", idealSeason: "Whale shark season is roughly March–July and varies; sightings are never guaranteed", seasons: ["autumn", "winter"],
    active: true, coords: [-21.93, 114.13], labelSide: "right", sectionId: "western-australia",
  },
  {
    id: "broome", name: "Broome", region: "western-australia", kind: "nature", image: "broome",
    description: "Pearling town on red-cliffed Cable Beach and the gateway to the Kimberley's remote landscapes.",
    attractions: ["Cable Beach", "Sunset camel rides", "Gantheaume Point", "Staircase to the Moon (select nights)", "Kimberley gateway"],
    travelStyles: ["beach", "adventure", "outback", "honeymoon", "nature", "road-trip"],
    duration: "3–4 days", idealSeason: "Dry season, roughly May–October", seasons: ["autumn", "winter", "spring"],
    active: true, coords: [-17.96, 122.24], labelSide: "right", sectionId: "western-australia",
  },
  // ─────────── South Australia ───────────
  {
    id: "adelaide", name: "Adelaide", region: "south-australia", kind: "city", image: "adelaide",
    description: "A relaxed, walkable capital known for festivals, its Central Market and some of Australia's best wine regions on the doorstep.",
    attractions: ["Adelaide Central Market", "North Terrace museums & galleries", "Glenelg", "Adelaide Hills & Hahndorf", "McLaren Vale"],
    travelStyles: ["city-break", "food-wine", "educational", "budget", "senior-friendly", "family"],
    duration: "2–3 days", idealSeason: "Spring and autumn; summers can be very hot", seasons: ["spring", "autumn", "winter"],
    active: true, coords: [-34.93, 138.6], labelSide: "left", sectionId: "south-australia",
  },
  {
    id: "barossa-valley", name: "Barossa Valley", shortName: "Barossa", region: "south-australia", kind: "wine", image: "barossa",
    description: "Historic wine country an hour from Adelaide: cellar doors, heritage villages and long lunches.",
    attractions: ["Cellar doors", "Heritage villages", "Local produce", "Vineyard lunches"],
    travelStyles: ["food-wine", "luxury", "honeymoon", "road-trip", "private", "senior-friendly"],
    duration: "1–2 days", idealSeason: "Year-round; vintage is usually late summer to autumn", seasons: ALL,
    active: true, minor: true, coords: [-34.53, 138.95], labelSide: "right", sectionId: "south-australia",
  },
  {
    id: "mclaren-vale", name: "McLaren Vale", region: "south-australia", kind: "wine", image: "wine-food",
    description: "Vineyards that roll down towards the sea, about 45 minutes south of Adelaide.",
    attractions: ["Cellar doors", "Coastal views", "Restaurants"],
    travelStyles: ["food-wine", "luxury", "honeymoon", "road-trip"],
    duration: "Day trip", idealSeason: "Year-round", seasons: ALL,
    active: true, minor: true, coords: [-35.22, 138.54], labelSide: "right", sectionId: "south-australia",
  },
  {
    id: "kangaroo-island", name: "Kangaroo Island", region: "south-australia", kind: "island", image: "kangaroo-island",
    description: "Wild coastlines, sea lions on the beach and native wildlife, reached by ferry from Cape Jervis or a short flight from Adelaide.",
    attractions: ["Remarkable Rocks", "Admirals Arch", "Seal Bay", "Flinders Chase National Park", "Local produce"],
    travelStyles: ["wildlife", "nature", "island", "food-wine", "adventure", "road-trip", "luxury"],
    duration: "2–3 days", idealSeason: "Year-round; spring and autumn are especially pleasant", seasons: ALL,
    active: true, coords: [-35.8, 137.2], labelSide: "left", sectionId: "south-australia",
  },
  {
    id: "flinders-ranges", name: "Flinders Ranges", region: "south-australia", kind: "outback", image: "flinders-ranges",
    description: "Ancient ranges and the vast natural amphitheatre of Ikara–Wilpena Pound, an accessible taste of the outback.",
    attractions: ["Ikara–Wilpena Pound", "Scenic flights", "Gorge drives", "Outback stations"],
    travelStyles: ["outback", "nature", "adventure", "road-trip"],
    duration: "2–3 days", idealSeason: "Autumn to spring; summer is very hot", seasons: ["autumn", "winter", "spring"],
    active: true, coords: [-31.53, 138.6], labelSide: "right", sectionId: "south-australia",
  },
  // ─────────── Tasmania ───────────
  {
    id: "hobart", name: "Hobart", region: "tasmania", kind: "city", image: "hobart",
    description: "A harbour city under kunanyi / Mount Wellington, with sandstone warehouses, Salamanca Market and MONA.",
    attractions: ["Salamanca Place & Saturday market", "Battery Point", "kunanyi / Mount Wellington", "MONA", "Waterfront dining", "Bruny Island day trips"],
    travelStyles: ["city-break", "food-wine", "nature", "honeymoon", "educational", "senior-friendly"],
    duration: "2–3 days", idealSeason: "Summer (Dec–Feb) and early autumn are most popular; winters are cold", seasons: ["summer", "autumn", "spring"],
    active: true, featured: true, coords: [-42.88, 147.33], labelSide: "left", sectionId: "tasmania", href: `${BASE}/tasmania`,
  },
  {
    id: "port-arthur", name: "Port Arthur", region: "tasmania", kind: "nature", image: "port-arthur",
    description: "A UNESCO-listed convict site on the dramatic Tasman Peninsula.",
    attractions: ["Port Arthur Historic Site", "Tasman Arch", "Devils Kitchen", "Coastal cruises"],
    travelStyles: ["educational", "nature", "family", "road-trip", "senior-friendly"],
    duration: "Day trip", idealSeason: "Year-round", seasons: ALL,
    active: true, minor: true, coords: [-43.15, 147.85], labelSide: "right", sectionId: "tasmania",
  },
  {
    id: "freycinet", name: "Freycinet & Wineglass Bay", shortName: "Freycinet", region: "tasmania", kind: "nature", image: "wineglass-bay",
    description: "Pink granite peaks above the perfect curve of Wineglass Bay, on Tasmania's sunny east coast.",
    attractions: ["Wineglass Bay lookout", "The Hazards", "Coles Bay", "Sea kayaking", "Local oysters"],
    travelStyles: ["nature", "honeymoon", "adventure", "beach", "road-trip", "luxury"],
    duration: "1–2 nights", idealSeason: "Spring to autumn", seasons: ["spring", "summer", "autumn"],
    active: true, coords: [-42.13, 148.29], labelSide: "right", sectionId: "tasmania",
  },
  {
    id: "bay-of-fires", name: "Bay of Fires", region: "tasmania", kind: "nature", image: "bay-of-fires",
    description: "White beaches and granite boulders splashed with orange lichen in Tasmania's north-east.",
    attractions: ["Binalong Bay", "Coastal walks", "Lichen-covered boulders"],
    travelStyles: ["nature", "beach", "road-trip", "honeymoon"],
    duration: "1 night", idealSeason: "Summer and early autumn", seasons: ["summer", "autumn"],
    active: true, minor: true, coords: [-41.25, 148.31], labelSide: "right", sectionId: "tasmania",
  },
  {
    id: "cradle-mountain", name: "Cradle Mountain", region: "tasmania", kind: "nature", image: "cradle-mountain",
    description: "Alpine lakes, ancient pines and wilderness walks in the World Heritage-listed Cradle Mountain–Lake St Clair National Park.",
    attractions: ["Dove Lake circuit", "Wilderness walks", "Wombat spotting (not guaranteed)", "Mountain lodges"],
    travelStyles: ["nature", "adventure", "wildlife", "honeymoon", "road-trip"],
    duration: "1–2 nights", idealSeason: "Summer and autumn for walking; winter can bring cold and snow", seasons: ["summer", "autumn", "spring"],
    active: true, coords: [-41.68, 145.95], labelSide: "left", sectionId: "tasmania",
  },
  // ─────────── Northern Territory ───────────
  {
    id: "darwin", name: "Darwin", region: "northern-territory", kind: "city",
    description: "A tropical harbour city with sunset markets, multicultural food and easy access to Kakadu and Litchfield.",
    attractions: ["Mindil Beach Sunset Market (dry season)", "Waterfront", "Museum & Art Gallery of the NT", "Crocodile attractions", "Litchfield & Kakadu gateway"],
    travelStyles: ["city-break", "outback", "adventure", "educational", "wildlife"],
    duration: "2–3 days", idealSeason: "Dry season, roughly May–October", seasons: ["autumn", "winter", "spring"],
    active: true, coords: [-12.46, 130.84], labelSide: "left", sectionId: "outback",
  },
  {
    id: "kakadu", name: "Kakadu National Park", shortName: "Kakadu", region: "northern-territory", kind: "outback", image: "kakadu",
    description: "World Heritage wetlands, escarpments and some of the world's most significant rock art sites.",
    attractions: ["Ubirr rock art", "Burrungkuy (Nourlangie)", "Yellow Water wetland cruises", "Seasonal waterfalls", "Cultural experiences where available"],
    travelStyles: ["nature", "outback", "wildlife", "adventure", "educational"],
    duration: "2–3 days", idealSeason: "Dry season, roughly May–October; some roads and sites close in the wet season", seasons: ["autumn", "winter", "spring"],
    active: true, coords: [-12.67, 132.84], labelSide: "right", sectionId: "outback",
  },
  {
    id: "litchfield", name: "Litchfield National Park", shortName: "Litchfield", region: "northern-territory", kind: "nature", image: "litchfield",
    description: "Waterfalls, rock holes and giant termite mounds within a day trip of Darwin.",
    attractions: ["Wangi Falls", "Florence Falls", "Buley Rockhole", "Magnetic termite mounds"],
    travelStyles: ["nature", "outback", "adventure", "family"],
    duration: "Day trip", idealSeason: "Dry season; swimming areas open or close with safety checks", seasons: ["autumn", "winter", "spring"],
    active: true, minor: true, coords: [-13.15, 130.7], labelSide: "left", sectionId: "outback",
  },
  {
    id: "katherine", name: "Katherine & Nitmiluk", shortName: "Katherine", region: "northern-territory", kind: "outback", image: "gorge",
    description: "Sandstone gorges explored by boat or canoe in Nitmiluk National Park.",
    attractions: ["Nitmiluk Gorge cruises", "Canoeing", "Leliyn (Edith Falls)", "Scenic flights"],
    travelStyles: ["outback", "nature", "adventure", "road-trip"],
    duration: "1–2 days", idealSeason: "Dry season, roughly May–October", seasons: ["autumn", "winter", "spring"],
    active: true, minor: true, coords: [-14.47, 132.26], labelSide: "right", sectionId: "outback",
  },
  {
    id: "alice-springs", name: "Alice Springs", region: "northern-territory", kind: "outback", image: "macdonnell",
    description: "The heart of the Red Centre, framed by the MacDonnell Ranges and rich in outback history.",
    attractions: ["MacDonnell Ranges (Tjoritja)", "Alice Springs Desert Park", "Royal Flying Doctor Service", "School of the Air", "Larapinta Trail sections"],
    travelStyles: ["outback", "adventure", "educational", "nature", "road-trip"],
    duration: "2 days", idealSeason: "Roughly April–September; summer is very hot and winter nights can be cold", seasons: ["autumn", "winter", "spring"],
    active: true, coords: [-23.7, 133.88], labelSide: "right", sectionId: "outback",
  },
  {
    id: "uluru", name: "Uluru (Ayers Rock)", shortName: "Uluru", region: "northern-territory", kind: "outback", image: "uluru",
    description: "The great sandstone monolith at the spiritual heart of Australia, sacred to its Anangu traditional owners. Climbing Uluru is not permitted.",
    attractions: ["Uluru base walk", "Sunrise & sunset viewing areas", "Kata Tjuta & Valley of the Winds", "Anangu-led cultural experiences where available", "Desert dining experiences"],
    travelStyles: ["outback", "nature", "honeymoon", "luxury", "adventure", "educational"],
    duration: "2–3 days", idealSeason: "Roughly April–September for milder days; summer heat can be extreme", seasons: ["autumn", "winter", "spring"],
    active: true, featured: true, coords: [-25.34, 131.04], labelSide: "left", sectionId: "outback", href: `${BASE}/uluru`,
  },
  {
    id: "kings-canyon", name: "Kings Canyon", region: "northern-territory", kind: "outback", image: "kings-canyon",
    description: "Sheer sandstone walls in Watarrka National Park, best known for the Rim Walk.",
    attractions: ["Kings Canyon Rim Walk", "Kings Creek Walk", "Watarrka National Park"],
    travelStyles: ["outback", "adventure", "nature", "road-trip"],
    duration: "1–2 days", idealSeason: "Roughly April–September; hot-weather walking restrictions can apply", seasons: ["autumn", "winter", "spring"],
    active: true, minor: true, coords: [-24.25, 131.57], labelSide: "right", sectionId: "outback",
  },
];

export const visibleAustraliaDestinations = australiaDestinations.filter((d) => d.active);
export const australiaDestinationById = (id: string) => australiaDestinations.find((d) => d.id === id);
export const australiaDestinationName = (id: string) => australiaDestinationById(id)?.name ?? id;

const SEASON_LABEL: Record<SeasonId, string> = { summer: "Summer", autumn: "Autumn", winter: "Winter", spring: "Spring" };
export const seasonLabel = (s: SeasonId) => SEASON_LABEL[s];
