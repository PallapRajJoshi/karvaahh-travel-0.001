// data/australia/packages.ts
// CMS-ready Australia package templates. Every section on the page (Sydney,
// Queensland, Reef, Honeymoon, Popular...) selects from this one list by id or
// by filter, so a package is defined once.
//
// - `price` stays undefined until Karvaahh publishes one → "Price on Request".
//   Never invent prices.
// - `inclusions` lists what the template's quote is built with. Anything not
//   listed (international flights, visas, insurance, attraction and theme-park
//   tickets...) is quoted separately. Never imply an inclusion that isn't here.
// - Highlights describe the typical build; tickets marked "optional" or
//   "on request" are not included unless the quote says so.
// - `active: false` hides a package everywhere.
// - `href` is linked only once listed in LIVE_ROUTES.

import type { AUImageId } from "./images";
import type { AustraliaTravelStyle } from "./travel-styles";

export type Transport =
  | "International flights"
  | "Domestic flights"
  | "Airport transfers"
  | "Private transfers"
  | "Private driver"
  | "Coach tours"
  | "Rental car"
  | "Ferry"
  | "Reef boat"
  | "Scenic rail";

export type Inclusion =
  | "hotel"
  | "breakfast"
  | "airport-transfers"
  | "sightseeing"
  | "domestic-flights"
  | "reef-day"
  | "rental-car"
  | "private-driver"
  | "ferry";

export const inclusionLabel: Record<Inclusion, string> = {
  hotel: "Hotels",
  breakfast: "Daily breakfast",
  "airport-transfers": "Airport transfers",
  sightseeing: "Listed sightseeing",
  "domestic-flights": "Domestic flights",
  "reef-day": "Reef day trip",
  "rental-car": "Rental car",
  "private-driver": "Private driver",
  ferry: "Ferry crossings",
};

/** Always quoted separately unless a quote explicitly lists them. */
export const QUOTED_SEPARATELY = ["International airfare", "Visa charges", "Travel insurance", "Attraction & theme-park tickets", "Meals not listed"];

export interface AustraliaPackage {
  id: string;
  title: string;
  /** e.g. "5N/6D". Free text so "Flexible" works too. */
  duration: string;
  /** Destination ids from ./destinations.ts; first is the primary one. */
  destinations: string[];
  styles: AustraliaTravelStyle[];
  image?: AUImageId;
  highlights: string[];
  /** Short visual route (may include places that are not destinations). */
  route: string[];
  transport?: Transport[];
  inclusions: Inclusion[];
  description: string;
  /** Published starting price text, e.g. "From ₹2,95,000 per person". Never invent. */
  price?: string;
  active: boolean;
  /** Shown in "Popular Australia Tour Packages" by default. */
  popular?: boolean;
  href?: string;
}

const CITY: Inclusion[] = ["hotel", "breakfast", "airport-transfers", "sightseeing"];
const MULTI: Inclusion[] = ["hotel", "breakfast", "airport-transfers", "sightseeing", "domestic-flights"];
const REEF: Inclusion[] = ["hotel", "breakfast", "airport-transfers", "sightseeing", "reef-day"];
const MULTI_REEF: Inclusion[] = [...MULTI, "reef-day"];
const FLY: Transport[] = ["International flights", "Airport transfers"];
const FLY_DOM: Transport[] = ["International flights", "Domestic flights", "Airport transfers"];

export const australiaPackages: AustraliaPackage[] = [
  // ─────────── Sydney ───────────
  {
    id: "syd-4n", title: "4N/5D Sydney Highlights", duration: "4N/5D", destinations: ["sydney"],
    styles: ["city-break", "beach", "budget", "group", "private", "family", "senior-friendly", "shopping"], image: "sydney-harbour",
    highlights: ["Opera House & Circular Quay", "The Rocks walking tour", "Bondi Beach", "Harbour cruise", "Blue Mountains day trip (optional)"],
    route: ["Circular Quay", "The Rocks", "Darling Harbour", "Bondi"], transport: FLY, inclusions: CITY,
    description: "A first taste of Sydney: the harbour, the icons and time at the beach.", active: true, popular: true,
  },
  {
    id: "syd-bm-5n", title: "5N/6D Sydney + Blue Mountains", duration: "5N/6D", destinations: ["sydney", "blue-mountains"],
    styles: ["city-break", "nature", "family", "senior-friendly", "group", "private", "road-trip"], image: "blue-mountains",
    highlights: ["Sydney city & harbour", "Three Sisters & Echo Point", "Wentworth Falls lookout", "Manly ferry", "Scenic World (ticket on request)"],
    route: ["Sydney", "Katoomba", "Leura", "Sydney"], transport: [...FLY, "Private transfers"], inclusions: CITY,
    description: "Harbour city plus a day or overnight in the sandstone and eucalyptus of the Blue Mountains.", active: true, popular: true,
  },
  {
    id: "syd-family", title: "Sydney Family Holiday", duration: "5N/6D", destinations: ["sydney", "blue-mountains"],
    styles: ["family", "city-break", "beach", "wildlife", "educational"], image: "sydney-ferry",
    highlights: ["Ferry rides on the harbour", "Taronga Zoo (ticket on request)", "Beach time at Manly or Bondi", "Blue Mountains day", "Family rooms"],
    route: ["Sydney", "Manly", "Blue Mountains"], transport: [...FLY, "Private transfers"], inclusions: CITY,
    description: "Ferries, beaches and wildlife at an easy pace for children and grandparents.", active: true,
  },
  {
    id: "syd-honeymoon", title: "Sydney Honeymoon", duration: "5N/6D", destinations: ["sydney", "hunter-valley"],
    styles: ["honeymoon", "luxury", "city-break", "food-wine", "private"], image: "sydney-night",
    highlights: ["Harbour-view hotel", "Sunset harbour cruise", "Hunter Valley wine day", "Coastal walk", "Private transfers"],
    route: ["Sydney", "Hunter Valley", "Sydney"], transport: [...FLY, "Private driver"], inclusions: [...CITY, "private-driver"],
    description: "Harbour sunsets, ocean walks and a day among the vines, designed for two.", active: true,
  },
  {
    id: "syd-luxury", title: "Sydney Luxury Escape", duration: "4N/5D", destinations: ["sydney"],
    styles: ["luxury", "private", "honeymoon", "city-break", "cruise"], image: "sydney-aerial",
    highlights: ["Five-star harbour hotel", "Private harbour cruise (on request)", "Private guided city day", "Fine dining (on request)", "BridgeClimb (optional)"],
    route: ["Circular Quay", "The Rocks", "Harbour", "Eastern beaches"], transport: [...FLY, "Private driver"], inclusions: [...CITY, "private-driver"],
    description: "Sydney at its most refined, with private experiences on and around the harbour.", active: true,
  },
  // ─────────── Melbourne + Victoria ───────────
  {
    id: "mel-4n", title: "4N/5D Melbourne", duration: "4N/5D", destinations: ["melbourne"],
    styles: ["city-break", "food-wine", "shopping", "budget", "group", "educational"], image: "flinders-street",
    highlights: ["Laneways & street art", "Federation Square & Flinders Street", "Queen Victoria Market", "Yarra River walk", "St Kilda"],
    route: ["CBD", "Laneways", "Southbank", "St Kilda"], transport: FLY, inclusions: CITY,
    description: "Coffee, culture and food in Australia's most walkable big city.", active: true,
  },
  {
    id: "mel-5n", title: "5N/6D Melbourne Discovery", duration: "5N/6D", destinations: ["melbourne", "phillip-island", "yarra-valley"],
    styles: ["city-break", "food-wine", "wildlife", "family", "private", "group"], image: "melbourne-skyline",
    highlights: ["Melbourne city tour", "Phillip Island Penguin Parade (ticket on request)", "Yarra Valley food & wine day", "Laneway food walk"],
    route: ["Melbourne", "Phillip Island", "Yarra Valley"], transport: [...FLY, "Coach tours"], inclusions: CITY,
    description: "Melbourne plus its two favourite day trips: penguins at dusk and the wine country.", active: true, popular: true,
  },
  {
    id: "mel-gor-5n", title: "5N/6D Melbourne + Great Ocean Road", duration: "5N/6D", destinations: ["melbourne", "great-ocean-road"],
    styles: ["road-trip", "city-break", "nature", "family", "group", "private", "senior-friendly"], image: "twelve-apostles",
    highlights: ["Melbourne city", "Great Ocean Road drive", "Twelve Apostles & Loch Ard Gorge", "Overnight on the coast", "Otway rainforest"],
    route: ["Melbourne", "Torquay", "Lorne", "Twelve Apostles"], transport: [...FLY, "Private driver"], inclusions: CITY,
    description: "City culture and one of the world's great coastal drives, with a night by the sea.", active: true, popular: true,
  },
  {
    id: "mel-pi-4n", title: "Melbourne + Phillip Island", duration: "4N/5D", destinations: ["melbourne", "phillip-island"],
    styles: ["wildlife", "family", "city-break", "educational"], image: "penguins",
    highlights: ["Melbourne highlights", "Phillip Island Penguin Parade (ticket on request)", "Koala Conservation Reserve (ticket on request)", "Coastal boardwalks"],
    route: ["Melbourne", "Phillip Island", "Melbourne"], transport: [...FLY, "Coach tours"], inclusions: CITY,
    description: "City days and an evening watching little penguins come ashore. Sightings vary and are never guaranteed.", active: true,
  },
  {
    id: "vic-road", title: "6N/7D Victoria Road Trip", duration: "6N/7D", destinations: ["melbourne", "great-ocean-road", "phillip-island", "yarra-valley"],
    styles: ["road-trip", "nature", "food-wine", "wildlife", "private", "adventure"], image: "great-ocean-road",
    highlights: ["Great Ocean Road", "Twelve Apostles", "Phillip Island", "Yarra Valley", "Self-drive or private driver"],
    route: ["Melbourne", "Great Ocean Road", "Phillip Island", "Yarra Valley"], transport: [...FLY, "Rental car", "Private driver"], inclusions: ["hotel", "breakfast", "airport-transfers"],
    description: "Victoria's coast, wildlife and wine country by car, with a driver if you prefer not to drive.", active: true,
  },
  {
    id: "syd-mel-7n", title: "7N/8D Sydney + Melbourne", duration: "7N/8D", destinations: ["sydney", "melbourne", "blue-mountains"],
    styles: ["city-break", "family", "honeymoon", "shopping", "food-wine", "group", "private", "senior-friendly"], image: "sydney-harbour-day",
    highlights: ["Sydney Harbour & Bondi", "Blue Mountains day", "Melbourne laneways", "Great Ocean Road day (optional)", "Domestic flight between cities"],
    route: ["Sydney", "Blue Mountains", "Melbourne"], transport: FLY_DOM, inclusions: MULTI,
    description: "Australia's two great cities, linked by a short flight.", active: true, popular: true,
  },
  // ─────────── Queensland ───────────
  {
    id: "gc-5n", title: "5N/6D Gold Coast", duration: "5N/6D", destinations: ["gold-coast"],
    styles: ["beach", "family", "shopping", "budget", "group", "adventure"], image: "gold-coast",
    highlights: ["Surfers Paradise beach stay", "Theme park day (tickets separate)", "Burleigh Heads", "Hinterland day trip", "SkyPoint (ticket on request)"],
    route: ["Surfers Paradise", "Burleigh Heads", "Hinterland"], transport: [...FLY, "Private transfers"], inclusions: CITY,
    description: "Beach days, theme parks and rainforest-clad hinterland on Australia's playground coast.", active: true,
  },
  {
    id: "bne-gc-6n", title: "6N/7D Brisbane + Gold Coast", duration: "6N/7D", destinations: ["brisbane", "gold-coast"],
    styles: ["family", "beach", "city-break", "wildlife", "shopping", "group"], image: "gold-coast-aerial",
    highlights: ["Brisbane South Bank", "Koala sanctuary visit (ticket on request)", "Gold Coast beaches", "Theme park days (tickets separate)"],
    route: ["Brisbane", "Gold Coast"], transport: [...FLY, "Private transfers"], inclusions: CITY,
    description: "A river city and a surf coast about an hour apart by road.", active: true,
  },
  {
    id: "cns-reef-6n", title: "6N/7D Cairns + Great Barrier Reef", duration: "6N/7D", destinations: ["cairns", "great-barrier-reef", "daintree"],
    styles: ["reef", "diving", "nature", "family", "adventure", "island"], image: "reef-aerial",
    highlights: ["Outer reef day trip", "Green or Fitzroy Island day", "Kuranda (operator dependent)", "Daintree day option", "Esplanade Lagoon"],
    route: ["Cairns", "Outer reef", "Kuranda", "Daintree"], transport: [...FLY, "Reef boat"], inclusions: REEF,
    description: "A week in the tropics with time on the reef, in the rainforest and by the lagoon.", active: true, popular: true,
  },
  {
    id: "cns-pd-7n", title: "7N/8D Cairns + Port Douglas", duration: "7N/8D", destinations: ["cairns", "port-douglas", "daintree", "great-barrier-reef"],
    styles: ["reef", "nature", "honeymoon", "luxury", "beach", "road-trip"], image: "port-douglas",
    highlights: ["Captain Cook Highway coastal drive", "Low Isles or outer reef day", "Mossman Gorge", "Daintree & Cape Tribulation", "Four Mile Beach"],
    route: ["Cairns", "Port Douglas", "Daintree", "Cape Tribulation"], transport: [...FLY, "Private transfers", "Reef boat"], inclusions: REEF,
    description: "Where two World Heritage areas meet: reef days and rainforest from a resort village base.", active: true,
  },
  {
    id: "gc-cns-7n", title: "7N/8D Gold Coast + Cairns", duration: "7N/8D", destinations: ["gold-coast", "cairns", "great-barrier-reef"],
    styles: ["family", "beach", "reef", "adventure", "honeymoon"], image: "gold-coast-aerial",
    highlights: ["Gold Coast beaches & theme parks (tickets separate)", "Flight north to Cairns", "Great Barrier Reef day", "Rainforest experiences"],
    route: ["Gold Coast", "Cairns", "Reef"], transport: FLY_DOM, inclusions: MULTI_REEF,
    description: "Surf coast to tropical north: beaches first, then the reef and rainforest.", active: true,
  },
  {
    id: "qld-family", title: "Queensland Family Holiday", duration: "8N/9D", destinations: ["gold-coast", "brisbane", "cairns", "great-barrier-reef"],
    styles: ["family", "beach", "reef", "wildlife", "island"], image: "family",
    highlights: ["Theme parks (tickets separate)", "Koala sanctuary", "Family-friendly reef pontoon", "Island day", "Family rooms"],
    route: ["Brisbane", "Gold Coast", "Cairns", "Reef"], transport: FLY_DOM, inclusions: MULTI_REEF,
    description: "Queensland's greatest hits, paced for children, with pools and downtime built in.", active: true,
  },
  // ─────────── Great Barrier Reef ───────────
  {
    id: "gbr-3n", title: "3N/4D Great Barrier Reef Escape", duration: "3N/4D", destinations: ["cairns", "great-barrier-reef"],
    styles: ["reef", "diving", "adventure", "budget", "island"], image: "reef-boat",
    highlights: ["Outer reef day trip", "Snorkelling (intro dive optional)", "Glass-bottom boat or semi-sub", "Esplanade evening"],
    route: ["Cairns", "Outer reef"], transport: [...FLY, "Reef boat"], inclusions: REEF,
    description: "A short, focused add-on to any Australia trip: one big day on the reef.", active: true,
  },
  {
    id: "cns-reef-5n", title: "5N/6D Cairns Reef Holiday", duration: "5N/6D", destinations: ["cairns", "great-barrier-reef"],
    styles: ["reef", "diving", "family", "island", "nature"], image: "coral-garden",
    highlights: ["Two reef days (outer reef + island)", "Snorkelling & optional diving", "Scenic flight (optional)", "Kuranda (operator dependent)"],
    route: ["Cairns", "Outer reef", "Green Island"], transport: [...FLY, "Reef boat"], inclusions: REEF,
    description: "More time in the water, with two different reef experiences.", active: true,
  },
  {
    id: "cns-daintree-6n", title: "6N/7D Cairns + Daintree", duration: "6N/7D", destinations: ["cairns", "daintree", "great-barrier-reef"],
    styles: ["nature", "reef", "adventure", "wildlife", "educational"], image: "rainforest-coast",
    highlights: ["Reef day trip", "Daintree River cruise", "Cape Tribulation beaches", "Rainforest lodge night", "Indigenous-guided walk where available"],
    route: ["Cairns", "Mossman", "Daintree", "Cape Tribulation"], transport: [...FLY, "Private transfers", "Reef boat"], inclusions: REEF,
    description: "Reef and rainforest in one trip, with a night deep in the Daintree.", active: true,
  },
  {
    id: "whit-reef-7n", title: "7N/8D Whitsundays + Reef", duration: "7N/8D", destinations: ["whitsundays", "hamilton-island", "great-barrier-reef"],
    styles: ["island", "beach", "reef", "honeymoon", "luxury", "cruise", "diving"], image: "whitehaven",
    highlights: ["Whitehaven Beach & Hill Inlet", "Reef pontoon day", "Sailing day", "Hamilton Island stay", "Heart Reef scenic flight (optional)"],
    route: ["Airlie Beach", "Whitehaven", "Hamilton Island", "Outer reef"], transport: [...FLY_DOM, "Ferry", "Reef boat"], inclusions: [...MULTI_REEF, "ferry"],
    description: "Island hopping, silica-white sand and the reef from the heart of the Whitsundays.", active: true,
  },
  {
    id: "gbr-honeymoon", title: "Great Barrier Reef Honeymoon", duration: "6N/7D", destinations: ["port-douglas", "great-barrier-reef", "whitsundays"],
    styles: ["honeymoon", "luxury", "reef", "island", "beach", "private"], image: "heart-reef",
    highlights: ["Romantic resort stays", "Private or small-group reef trip (on request)", "Sunset sail", "Heart Reef scenic flight (optional)", "Private transfers"],
    route: ["Port Douglas", "Outer reef", "Whitsundays"], transport: [...FLY_DOM, "Private transfers", "Reef boat"], inclusions: MULTI_REEF,
    description: "Rainforest-fringed resorts, reef days and island sunsets for two.", active: true,
  },
  // ─────────── Gold Coast family ───────────
  {
    id: "gc-family-5n", title: "5N/6D Gold Coast Family Package", duration: "5N/6D", destinations: ["gold-coast"],
    styles: ["family", "beach", "adventure", "group"], image: "surfers",
    highlights: ["Family apartment or resort stay", "Theme park days (tickets separate)", "Beach & surf-school option", "Wildlife sanctuary (ticket on request)"],
    route: ["Surfers Paradise", "Theme parks", "Broadwater"], transport: [...FLY, "Private transfers"], inclusions: CITY,
    description: "Theme parks, beaches and space to rest between big days out.", active: true,
  },
  {
    id: "syd-gc-family-8n", title: "8N/9D Sydney + Gold Coast Family Tour", duration: "8N/9D", destinations: ["sydney", "gold-coast"],
    styles: ["family", "beach", "city-break", "wildlife"], image: "family",
    highlights: ["Sydney Harbour & ferries", "Taronga Zoo (ticket on request)", "Gold Coast theme parks (tickets separate)", "Beach days", "Family rooms"],
    route: ["Sydney", "Gold Coast"], transport: FLY_DOM, inclusions: MULTI,
    description: "A city start and a long beach finish, with an easy domestic flight between them.", active: true,
  },
  {
    id: "syd-gc-family-7n", title: "7N/8D Sydney + Gold Coast", duration: "7N/8D", destinations: ["sydney", "gold-coast"],
    styles: ["family", "beach", "city-break"], image: "gold-coast",
    highlights: ["Sydney highlights", "Gold Coast beaches", "Theme park day (tickets separate)", "Manageable travel days"],
    route: ["Sydney", "Gold Coast"], transport: FLY_DOM, inclusions: MULTI,
    description: "Our most requested family combination, a night shorter.", active: true,
  },
  {
    id: "mel-gc-family-8n", title: "8N/9D Melbourne + Gold Coast", duration: "8N/9D", destinations: ["melbourne", "phillip-island", "gold-coast"],
    styles: ["family", "beach", "wildlife", "city-break"], image: "penguins",
    highlights: ["Melbourne city", "Phillip Island penguins (ticket on request)", "Gold Coast beaches", "Theme parks (tickets separate)"],
    route: ["Melbourne", "Phillip Island", "Gold Coast"], transport: FLY_DOM, inclusions: MULTI,
    description: "Penguins, trams and theme parks: a family favourite pairing.", active: true,
  },
  {
    id: "au-family-10n", title: "10N/11D Australia Family Highlights", duration: "10N/11D", destinations: ["sydney", "melbourne", "phillip-island", "gold-coast"],
    styles: ["family", "beach", "wildlife", "city-break", "educational"], image: "kangaroo",
    highlights: ["Sydney Harbour", "Melbourne & Phillip Island", "Gold Coast theme parks (tickets separate)", "Wildlife encounters", "Family-friendly pacing"],
    route: ["Sydney", "Melbourne", "Gold Coast"], transport: FLY_DOM, inclusions: MULTI,
    description: "Three very different Australian holidays in one, without rushing.", active: true,
  },
  // ─────────── Western Australia ───────────
  {
    id: "per-4n", title: "4N/5D Perth", duration: "4N/5D", destinations: ["perth"],
    styles: ["city-break", "beach", "budget", "food-wine"], image: "perth",
    highlights: ["Kings Park", "Fremantle heritage port", "Cottesloe Beach", "Swan Valley tastings", "Rottnest day trip (optional)"],
    route: ["Perth", "Fremantle", "Cottesloe", "Swan Valley"], transport: FLY, inclusions: CITY,
    description: "Sunny, easy-going Perth with Fremantle and the Swan Valley close by.", active: true,
  },
  {
    id: "per-rot-5n", title: "5N/6D Perth + Rottnest", duration: "5N/6D", destinations: ["perth", "rottnest-island"],
    styles: ["wildlife", "island", "beach", "family", "city-break"], image: "quokka",
    highlights: ["Ferry to Rottnest Island", "Cycling the island", "Quokka spotting (look, don't touch)", "Fremantle", "Kings Park"],
    route: ["Perth", "Fremantle", "Rottnest Island"], transport: [...FLY, "Ferry"], inclusions: [...CITY, "ferry"],
    description: "City, port and a car-free island with the world's happiest-looking marsupial.", active: true, popular: true,
  },
  {
    id: "per-mr-6n", title: "6N/7D Perth + Margaret River", duration: "6N/7D", destinations: ["perth", "margaret-river"],
    styles: ["food-wine", "road-trip", "honeymoon", "nature", "beach", "luxury"], image: "margaret-river",
    highlights: ["Perth & Fremantle", "Busselton Jetty", "Margaret River wineries", "Limestone caves (ticket on request)", "Cape Leeuwin"],
    route: ["Perth", "Busselton", "Margaret River", "Cape Leeuwin"], transport: [...FLY, "Private driver", "Rental car"], inclusions: CITY,
    description: "Wine, surf and forest in Australia's south-west, about three hours from Perth by road.", active: true,
  },
  {
    id: "ningaloo-7n", title: "7N/8D Ningaloo Reef", duration: "7N/8D", destinations: ["perth", "ningaloo-reef"],
    styles: ["reef", "diving", "adventure", "wildlife", "beach", "nature"], image: "whale-shark",
    highlights: ["Flight to Exmouth (Learmonth)", "Turquoise Bay snorkelling", "Whale shark tour in season (on request)", "Cape Range National Park", "Coral Bay"],
    route: ["Perth", "Exmouth", "Coral Bay"], transport: FLY_DOM, inclusions: MULTI,
    description: "A wild, uncrowded reef. Marine encounters are seasonal and never guaranteed.", active: true,
  },
  {
    id: "wa-road", title: "9N/10D Western Australia Road Trip", duration: "9N/10D", destinations: ["perth", "ningaloo-reef"],
    styles: ["road-trip", "adventure", "nature", "beach", "outback"], image: "pinnacles",
    highlights: ["Pinnacles Desert", "Kalbarri coast", "Shark Bay", "Coral Bay & Ningaloo", "Fly back from Exmouth"],
    route: ["Perth", "Pinnacles", "Kalbarri", "Shark Bay", "Exmouth"], transport: [...FLY_DOM, "Rental car", "Private driver"], inclusions: ["hotel", "breakfast", "airport-transfers", "domestic-flights"],
    description: "The Coral Coast north of Perth: long distances, so we plan short driving days and a flight back.", active: true,
  },
  // ─────────── South Australia ───────────
  {
    id: "adl-bar-4n", title: "4N/5D Adelaide + Barossa", duration: "4N/5D", destinations: ["adelaide", "barossa-valley"],
    styles: ["food-wine", "city-break", "senior-friendly", "luxury"], image: "barossa",
    highlights: ["Adelaide Central Market", "North Terrace culture", "Barossa cellar doors", "Adelaide Hills & Hahndorf"],
    route: ["Adelaide", "Adelaide Hills", "Barossa"], transport: [...FLY, "Private driver"], inclusions: CITY,
    description: "A relaxed capital and the wine country an hour away.", active: true,
  },
  {
    id: "adl-ki-5n", title: "5N/6D Adelaide + Kangaroo Island", duration: "5N/6D", destinations: ["adelaide", "kangaroo-island"],
    styles: ["wildlife", "nature", "food-wine", "island", "road-trip"], image: "kangaroo-island",
    highlights: ["Ferry or short flight to the island", "Seal Bay sea lions (ticket on request)", "Remarkable Rocks & Admirals Arch", "Local produce", "Wildlife spotting (not guaranteed)"],
    route: ["Adelaide", "Cape Jervis", "Kangaroo Island"], transport: [...FLY, "Ferry"], inclusions: [...CITY, "ferry"],
    description: "Wild coast and wildlife on Australia's third-largest island.", active: true,
  },
  {
    id: "sa-luxury", title: "6N/7D South Australia Luxury Escape", duration: "6N/7D", destinations: ["adelaide", "barossa-valley", "mclaren-vale", "kangaroo-island"],
    styles: ["luxury", "food-wine", "honeymoon", "wildlife", "private"], image: "sea-lions",
    highlights: ["Boutique stays", "Private wine touring", "McLaren Vale & Barossa", "Kangaroo Island lodge (on request)", "Private guiding"],
    route: ["Adelaide", "McLaren Vale", "Kangaroo Island", "Barossa"], transport: [...FLY_DOM, "Private driver"], inclusions: [...MULTI, "private-driver"],
    description: "Food, wine and wildlife at an unhurried, private pace.", active: true,
  },
  // ─────────── Tasmania ───────────
  {
    id: "tas-5n", title: "5N/6D Tasmania Highlights", duration: "5N/6D", destinations: ["hobart", "port-arthur", "freycinet"],
    styles: ["nature", "food-wine", "educational", "road-trip", "senior-friendly"], image: "wineglass-bay",
    highlights: ["Hobart & Salamanca", "kunanyi / Mount Wellington", "Port Arthur Historic Site (ticket on request)", "Wineglass Bay lookout", "MONA (optional)"],
    route: ["Hobart", "Port Arthur", "Freycinet"], transport: [...FLY_DOM, "Private driver", "Rental car"], inclusions: MULTI,
    description: "History, food and the east coast's most famous view.", active: true,
  },
  {
    id: "tas-road-7n", title: "7N/8D Tasmania Road Trip", duration: "7N/8D", destinations: ["hobart", "freycinet", "bay-of-fires", "cradle-mountain"],
    styles: ["road-trip", "nature", "adventure", "wildlife", "food-wine"], image: "cradle-mountain",
    highlights: ["Hobart", "Freycinet & Wineglass Bay", "Bay of Fires", "Launceston", "Cradle Mountain lodges"],
    route: ["Hobart", "Freycinet", "Bay of Fires", "Launceston", "Cradle Mountain"], transport: [...FLY_DOM, "Rental car", "Private driver"], inclusions: ["hotel", "breakfast", "domestic-flights", "rental-car"],
    description: "The island loop: wild coast, wilderness lodges and great produce along the way.", active: true, popular: true,
  },
  {
    id: "tas-honeymoon", title: "6N/7D Tasmania Honeymoon", duration: "6N/7D", destinations: ["hobart", "freycinet", "cradle-mountain"],
    styles: ["honeymoon", "nature", "luxury", "food-wine", "private"], image: "cradle-walk",
    highlights: ["Boutique waterfront hotel", "Freycinet luxury lodge (on request)", "Cradle Mountain cabin with fireplace", "Private transfers", "Wine & oyster tastings"],
    route: ["Hobart", "Freycinet", "Cradle Mountain"], transport: [...FLY_DOM, "Private driver"], inclusions: [...MULTI, "private-driver"],
    description: "Wild landscapes by day, fireplaces and fine food by night.", active: true,
  },
  // ─────────── Northern Territory + Outback ───────────
  {
    id: "uluru-4n", title: "4N/5D Uluru Experience", duration: "4N/5D", destinations: ["uluru"],
    styles: ["outback", "nature", "adventure", "educational", "honeymoon"], image: "uluru-dusk",
    highlights: ["Uluru base walk", "Sunrise & sunset viewing", "Kata Tjuta & Valley of the Winds", "Cultural experience where available", "Park pass (on request)"],
    route: ["Ayers Rock Airport", "Uluru", "Kata Tjuta"], transport: FLY_DOM, inclusions: MULTI,
    description: "Time to see Uluru change colour through the day. Usually reached by domestic flight.", active: true,
  },
  {
    id: "drw-kak-5n", title: "5N/6D Darwin + Kakadu", duration: "5N/6D", destinations: ["darwin", "kakadu", "litchfield"],
    styles: ["outback", "nature", "wildlife", "adventure", "educational"], image: "kakadu",
    highlights: ["Darwin waterfront & markets", "Litchfield waterfalls", "Kakadu rock art", "Yellow Water cruise (on request)", "Dry-season departures"],
    route: ["Darwin", "Litchfield", "Kakadu"], transport: [...FLY_DOM, "Private driver", "Coach tours"], inclusions: MULTI,
    description: "The Top End's wetlands, waterfalls and ancient art. Best in the dry season.", active: true,
  },
  {
    id: "red-centre-6n", title: "6N/7D Red Centre Tour", duration: "6N/7D", destinations: ["alice-springs", "kings-canyon", "uluru"],
    styles: ["outback", "adventure", "nature", "road-trip", "educational"], image: "kings-canyon",
    highlights: ["Alice Springs & MacDonnell Ranges", "Kings Canyon Rim Walk", "Uluru & Kata Tjuta", "Outback stars", "Guided or self-drive"],
    route: ["Alice Springs", "Kings Canyon", "Uluru"], transport: [...FLY_DOM, "Coach tours", "Rental car"], inclusions: MULTI,
    description: "The classic outback loop through the heart of Australia.", active: true, popular: true,
  },
  {
    id: "nt-adventure-8n", title: "8N/9D Northern Territory Adventure", duration: "8N/9D", destinations: ["darwin", "kakadu", "katherine", "alice-springs", "uluru"],
    styles: ["outback", "adventure", "nature", "wildlife", "road-trip", "group"], image: "outback-road",
    highlights: ["Kakadu & Litchfield", "Nitmiluk Gorge", "Fly to the Red Centre", "Kings Canyon", "Uluru & Kata Tjuta"],
    route: ["Darwin", "Kakadu", "Katherine", "Alice Springs", "Uluru"], transport: [...FLY_DOM, "Coach tours", "Private driver"], inclusions: MULTI,
    description: "Top End to Red Centre, with a flight across the long middle stretch.", active: true,
  },
  // ─────────── Honeymoon ───────────
  {
    id: "syd-gc-6n", title: "6N/7D Sydney + Gold Coast", duration: "6N/7D", destinations: ["sydney", "gold-coast"],
    styles: ["city-break", "beach", "family", "budget", "group", "shopping"], image: "gold-coast",
    highlights: ["Sydney Harbour", "Bondi & Manly", "Gold Coast beaches", "Theme park option (tickets separate)"],
    route: ["Sydney", "Gold Coast"], transport: FLY_DOM, inclusions: MULTI,
    description: "Harbour city plus surf coast: the classic first Australia trip.", active: true, popular: true,
  },
  {
    id: "syd-gc-honeymoon-6n", title: "6N/7D Sydney + Gold Coast Honeymoon", duration: "6N/7D", destinations: ["sydney", "gold-coast"],
    styles: ["honeymoon", "beach", "city-break", "private"], image: "couple",
    highlights: ["Harbour-view room", "Sunset harbour cruise", "Beachfront Gold Coast stay", "Hinterland day", "Private transfers"],
    route: ["Sydney", "Gold Coast"], transport: [...FLY_DOM, "Private transfers"], inclusions: MULTI,
    description: "City glamour, then barefoot days by the surf.", active: true,
  },
  {
    id: "mel-gor-honeymoon-7n", title: "7N/8D Melbourne + Great Ocean Road", duration: "7N/8D", destinations: ["melbourne", "great-ocean-road", "yarra-valley"],
    styles: ["honeymoon", "road-trip", "food-wine", "private"], image: "twelve-apostles-dusk",
    highlights: ["Boutique Melbourne hotel", "Private Great Ocean Road drive", "Clifftop overnight", "Yarra Valley wine day", "Hot-air balloon (optional)"],
    route: ["Melbourne", "Great Ocean Road", "Yarra Valley"], transport: [...FLY, "Private driver"], inclusions: [...CITY, "private-driver"],
    description: "Laneway dinners, a clifftop sunset and a day among the vines.", active: true,
  },
  {
    id: "cns-whit-honeymoon-7n", title: "7N/8D Cairns + Whitsundays", duration: "7N/8D", destinations: ["cairns", "great-barrier-reef", "whitsundays", "hamilton-island"],
    styles: ["honeymoon", "reef", "island", "beach", "luxury"], image: "whitehaven-long",
    highlights: ["Reef day from Cairns", "Rainforest experience", "Fly to the Whitsundays", "Whitehaven Beach", "Island resort stay"],
    route: ["Cairns", "Reef", "Whitsundays"], transport: [...FLY_DOM, "Reef boat", "Ferry"], inclusions: MULTI_REEF,
    description: "Two faces of the reef: tropical north and the island-studded Whitsundays.", active: true,
  },
  {
    id: "syd-cns-8n", title: "8N/9D Sydney + Cairns", duration: "8N/9D", destinations: ["sydney", "cairns", "great-barrier-reef"],
    styles: ["honeymoon", "family", "city-break", "reef", "group"], image: "sydney-opera",
    highlights: ["Sydney Harbour & beaches", "Blue Mountains day", "Fly north to Cairns (about 3 hours)", "Great Barrier Reef day", "Rainforest experience"],
    route: ["Sydney", "Blue Mountains", "Cairns", "Reef"], transport: FLY_DOM, inclusions: MULTI_REEF,
    description: "Harbour city and tropical reef, linked by a domestic flight.", active: true, popular: true,
  },
  {
    id: "syd-gc-cns-9n", title: "9N/10D Sydney + Gold Coast + Cairns", duration: "9N/10D", destinations: ["sydney", "gold-coast", "cairns", "great-barrier-reef"],
    styles: ["honeymoon", "family", "beach", "reef", "city-break"], image: "whitehaven",
    highlights: ["Sydney icons", "Gold Coast beaches", "Cairns & the reef", "Two domestic flights", "Theme park option (tickets separate)"],
    route: ["Sydney", "Gold Coast", "Cairns"], transport: FLY_DOM, inclusions: MULTI_REEF,
    description: "The east coast's best in ten days: city, surf and reef.", active: true, popular: true,
  },
  {
    id: "au-lux-honeymoon-10n", title: "10N/11D Australia Luxury Honeymoon", duration: "10N/11D", destinations: ["sydney", "uluru", "hamilton-island", "great-barrier-reef"],
    styles: ["honeymoon", "luxury", "private", "island", "outback"], image: "uluru-stars",
    highlights: ["Five-star harbour hotel", "Desert dinner under the stars (on request)", "Luxury island resort", "Heart Reef scenic flight (optional)", "Private transfers throughout"],
    route: ["Sydney", "Uluru", "Hamilton Island"], transport: [...FLY_DOM, "Private transfers"], inclusions: MULTI,
    description: "Harbour, desert and island, each at its most romantic.", active: true,
  },
  // ─────────── Popular multi-city ───────────
  {
    id: "syd-gc-bne-7n", title: "7N/8D Sydney + Gold Coast + Brisbane", duration: "7N/8D", destinations: ["sydney", "gold-coast", "brisbane"],
    styles: ["city-break", "beach", "family", "wildlife", "group"], image: "brisbane",
    highlights: ["Sydney Harbour", "Gold Coast beaches", "Brisbane South Bank", "Koala sanctuary (ticket on request)"],
    route: ["Sydney", "Gold Coast", "Brisbane"], transport: [...FLY_DOM, "Private transfers"], inclusions: MULTI,
    description: "Sydney, then Queensland's two easy-going neighbours, an hour apart by road.", active: true, popular: true,
  },
  {
    id: "syd-mel-gc-9n", title: "9N/10D Sydney + Melbourne + Gold Coast", duration: "9N/10D", destinations: ["sydney", "melbourne", "gold-coast"],
    styles: ["city-break", "beach", "family", "shopping", "food-wine", "group"], image: "melbourne-laneway",
    highlights: ["Sydney Harbour", "Melbourne culture", "Great Ocean Road day (optional)", "Gold Coast beaches", "Two domestic flights"],
    route: ["Sydney", "Melbourne", "Gold Coast"], transport: FLY_DOM, inclusions: MULTI,
    description: "Australia's big three for first-time visitors.", active: true, popular: true,
  },
  {
    id: "grand-10n", title: "10N/11D Sydney + Melbourne + Gold Coast + Cairns", duration: "10N/11D", destinations: ["sydney", "melbourne", "gold-coast", "cairns", "great-barrier-reef"],
    styles: ["city-break", "beach", "reef", "family", "honeymoon"], image: "sydney-aerial",
    highlights: ["Sydney", "Melbourne", "Gold Coast", "Cairns & the reef", "Three domestic flights"],
    route: ["Sydney", "Melbourne", "Gold Coast", "Cairns"], transport: FLY_DOM, inclusions: MULTI_REEF,
    description: "A grand east-coast tour. Fast-paced at 10 nights; we often suggest 12–14.", active: true, popular: true,
  },
  // ─────────── Flexible collections ───────────
  {
    id: "au-honeymoon", title: "Australia Honeymoon Package", duration: "Flexible", destinations: ["sydney", "whitsundays", "melbourne"],
    styles: ["honeymoon", "luxury", "private", "custom"], image: "couple",
    highlights: ["Romantic hotels", "Private transfers", "Sunset experiences", "Island or outback add-ons"],
    route: ["Your choice of places"], transport: FLY_DOM, inclusions: MULTI,
    description: "Designed for two, from harbour views to island sunsets.", active: true, popular: true,
  },
  {
    id: "au-family", title: "Australia Family Package", duration: "Flexible", destinations: ["sydney", "gold-coast", "melbourne"],
    styles: ["family", "custom", "beach", "wildlife"], image: "kangaroo",
    highlights: ["Family rooms", "Manageable travel days", "Wildlife & beaches", "Theme parks on request (tickets separate)"],
    route: ["Your choice of places"], transport: FLY_DOM, inclusions: MULTI,
    description: "Built around your children's ages and your pace.", active: true, popular: true,
  },
  {
    id: "au-luxury", title: "Australia Luxury Package", duration: "Flexible", destinations: ["sydney", "hamilton-island", "uluru"],
    styles: ["luxury", "private", "custom", "honeymoon"], image: "seaplane",
    highlights: ["4-star, 5-star, boutique or luxury resort", "Private guides & drivers", "Scenic flights (optional)", "Luxury lodges"],
    route: ["Your choice of places"], transport: [...FLY_DOM, "Private driver"], inclusions: [...MULTI, "private-driver"],
    description: "Five-star stays and private experiences, end to end.", active: true, popular: true,
  },
  {
    id: "au-road", title: "Australia Road Trip", duration: "Flexible", destinations: ["great-ocean-road", "cradle-mountain", "margaret-river"],
    styles: ["road-trip", "custom", "adventure", "nature"], image: "coastal-drive",
    highlights: ["Self-drive or private chauffeur", "Pre-planned routes & stays", "Great Ocean Road, Tasmania or WA", "Fly the long legs"],
    route: ["Your choice of routes"], transport: [...FLY_DOM, "Rental car", "Private driver"], inclusions: ["hotel", "breakfast"],
    description: "Choose a classic route and how you want to travel it.", active: true, popular: true,
  },
  {
    id: "au-custom", title: "Fully Customized Australia Tour", duration: "Flexible", destinations: ["sydney"],
    styles: ["custom", "private", "family", "honeymoon", "luxury", "budget", "group", "senior-friendly", "educational"], image: "sydney-cruise",
    highlights: ["Your dates & budget", "Any mix of cities, reef, outback & islands", "Flights, hotels & transfers", "Visa guidance where offered"],
    route: ["Your choice of places"], transport: FLY_DOM, inclusions: ["hotel", "airport-transfers"],
    description: "Tell us what you want to see. We'll design the journey around you.", active: true, popular: true,
  },
];

export const activeAustraliaPackages = australiaPackages.filter((p) => p.active);
export const australiaPackageById = (id: string) => australiaPackages.find((p) => p.id === id);
export const pickPackages = (ids: string[]) =>
  ids.map(australiaPackageById).filter((p): p is AustraliaPackage => Boolean(p?.active));

/** Active packages that visit a destination. */
export const australiaPackageCount = (destinationId: string) =>
  activeAustraliaPackages.filter((p) => p.destinations.includes(destinationId)).length;
