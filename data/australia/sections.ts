// data/australia/sections.ts
// Editorial content for the destination sections, kept out of the JSX.
// One layout (AustraliaStorySection) renders the regional stories; packages and
// route maps are picked by id from ./packages.ts and ./circuits.ts, so nothing
// is duplicated. Sydney and Queensland have their own layouts but are
// configured here too.

import type { AUImageId } from "./images";

export interface Spotlight {
  title: string;
  tag?: string;
  text: string;
  image?: AUImageId;
  points?: string[];
  /** Destination id: adds a "View packages" filter action. */
  destinationId?: string;
}

export type StoryTone = "light" | "sand" | "dark" | "desert" | "ocean" | "forest" | "dusk" | "wine";

export interface StorySection {
  id: string;
  eyebrow: string;
  title: string;
  intro: string;
  /** split: photo mosaic + copy. immersive: full-bleed photo behind the copy. */
  layout: "split" | "immersive";
  tone: StoryTone;
  images: AUImageId[];
  /** Big editorial keywords ("Food · Coffee · Art"). */
  pillars?: string[];
  highlightsTitle: string;
  highlights: string[];
  spotlights?: Spotlight[];
  spotlightsTitle?: string;
  /** Route journeys from ./circuits.ts, drawn as animated maps. */
  routeIds?: string[];
  routesTitle?: string;
  packageIds: string[];
  packagesTitle: string;
  callout?: { title: string; text: string; points?: string[] };
  notes?: string[];
}

export const TICKETS_NOTE = "Attraction tickets, cruises and climbs are optional extras, booked on request and subject to availability. They are not included unless your quote lists them.";

/** Sydney flagship: choosing a landmark swaps the hero photo. */
export const sydneyFlagship = {
  id: "sydney",
  eyebrow: "Flagship destination · New South Wales",
  title: "Sydney — Where the City Meets the Harbour",
  intro:
    "Ferries cutting across blue water, the Opera House glowing at dusk, surf beaches twenty minutes from the city. For most travellers from Nepal and India, an Australian story starts in Sydney.",
  landmarks: [
    { name: "Sydney Opera House", text: "Jørn Utzon's sail roofs on Bennelong Point. Guided tours and performances are booked on request.", image: "sydney-opera" as AUImageId },
    { name: "Sydney Harbour Bridge", text: "Walk the bridge for free, or climb its arch with BridgeClimb (optional, ticket extra).", image: "harbour-bridge" as AUImageId },
    { name: "Circular Quay & Harbour Ferries", text: "The ferry hub between the Bridge and the Opera House; Manly is a scenic ride away.", image: "sydney-ferry" as AUImageId },
    { name: "The Rocks", text: "Sandstone laneways, weekend markets and the city's oldest pubs below the Bridge.", image: "the-rocks" as AUImageId },
    { name: "Bondi Beach", text: "Australia's most famous surf beach, and the start of the Bondi to Coogee coastal walk.", image: "bondi" as AUImageId },
    { name: "Manly Beach", text: "Pine-lined surf beach and village across the harbour.", image: "manly" as AUImageId },
    { name: "Harbour Cruises", text: "Daytime sightseeing, sunset or dinner cruises on one of the world's great harbours.", image: "sydney-cruise" as AUImageId },
    { name: "Blue Mountains", text: "The Three Sisters and eucalyptus valleys, about two hours west by road.", image: "blue-mountains" as AUImageId },
  ],
  highlights: [
    "Sydney Opera House", "Sydney Harbour Bridge", "Circular Quay", "The Rocks", "Darling Harbour", "Bondi Beach", "Manly Beach",
    "Taronga Zoo", "Royal Botanic Garden", "Blue Mountains", "Harbour cruises",
  ],
  packageIds: ["syd-4n", "syd-bm-5n", "syd-family", "syd-honeymoon", "syd-luxury"],
  experiences: [
    { label: "BridgeClimb", text: "Climb the arch of the Harbour Bridge with a guide. Age, height and health conditions apply.", tag: "Optional · ticket extra" },
    { label: "Harbour cruises", text: "Sightseeing, sunset and dinner cruises; private charters on request.", tag: "Optional" },
    { label: "Coastal walks", text: "Bondi to Coogee, or Spit Bridge to Manly, at your own pace or with a guide.", tag: "Free / guided on request" },
    { label: "Wildlife experiences", text: "Taronga Zoo by ferry, or a wildlife park visit to meet koalas and kangaroos.", tag: "Optional · ticket extra" },
  ],
  note: TICKETS_NOTE,
};

/** Queensland split: Gold Coast vs Tropical North. */
export const queenslandSplit = {
  id: "queensland",
  eyebrow: "Queensland",
  title: "Two Queenslands, One Sunshine State",
  intro: "Down south, the high-rise surf coast and theme parks of the Gold Coast. Up north, a tropical world where ancient rainforest meets the Great Barrier Reef. Most first trips include both, linked by a domestic flight.",
  panels: [
    {
      id: "gold-coast-panel",
      title: "Gold Coast",
      tagline: "Surf, theme parks & family fun",
      image: "gold-coast" as AUImageId,
      focus: ["Surfers Paradise", "Long surf beaches", "Theme parks (tickets separate)", "Shopping", "Family entertainment", "Rainforest hinterland"],
      destinations: ["gold-coast", "brisbane", "sunshine-coast"],
      sectionLink: { label: "Gold Coast family holidays", href: "#gold-coast" },
    },
    {
      id: "tropical-north-panel",
      title: "Tropical North Queensland",
      tagline: "Reef meets rainforest",
      image: "rainforest-coast" as AUImageId,
      focus: ["Great Barrier Reef", "Daintree Rainforest", "Cape Tribulation", "Cairns", "Port Douglas", "Whitsunday Islands"],
      destinations: ["cairns", "port-douglas", "daintree", "whitsundays", "hamilton-island"],
      sectionLink: { label: "Dive into the Great Barrier Reef", href: "#reef" },
    },
  ],
  packageIds: ["gc-5n", "bne-gc-6n", "cns-reef-6n", "cns-pd-7n", "gc-cns-7n", "qld-family"],
  note: "Tropical north Queensland has a wet season (roughly November–April) and a marine stinger season (usually about November–May). We plan swims, reef days and stinger-suit advice around both.",
};

export const storySections = {
  melbourne: {
    id: "melbourne",
    eyebrow: "Melbourne + Victoria",
    title: "Melbourne — Laneways, Coffee & the Open Coast",
    intro:
      "Australia's culture capital rewards the curious: hidden laneway cafés, street art, galleries, markets and big-ticket sport. Beyond the city, Victoria packs a world-famous coastal drive, penguins and wine country within a few hours.",
    layout: "split",
    tone: "sand",
    images: ["melbourne-laneway", "flinders-street", "yarra-river"],
    pillars: ["Food", "Coffee", "Art", "Culture", "Sports", "Shopping", "City life"],
    highlightsTitle: "In and around Melbourne",
    highlights: ["Melbourne CBD", "Federation Square", "Flinders Street Station", "Yarra River", "Great Ocean Road", "Twelve Apostles", "Phillip Island", "Yarra Valley", "Mornington Peninsula", "Regional Victoria"],
    spotlightsTitle: "Beyond the city",
    spotlights: [
      { title: "Great Ocean Road", tag: "Signature road trip", text: "Surf beaches, rainforest and the Twelve Apostles. Best with an overnight on the coast.", image: "twelve-apostles", destinationId: "great-ocean-road" },
      { title: "Phillip Island", tag: "Wildlife", text: "Little penguins return to shore at dusk. Numbers vary and sightings are never guaranteed.", image: "penguins", destinationId: "phillip-island" },
      { title: "Yarra Valley", tag: "Food & wine", text: "Cool-climate wineries and produce an hour from the city; balloon flights where operating.", image: "balloon", destinationId: "yarra-valley" },
      { title: "Mornington Peninsula", tag: "Coast & countryside", text: "Beaches, hot springs and wineries south-east of Melbourne." },
    ],
    routeIds: ["mel-gor-syd"],
    routesTitle: "Great Ocean Road journey",
    packageIds: ["mel-4n", "mel-5n", "mel-gor-5n", "mel-pi-4n", "syd-mel-7n", "vic-road"],
    packagesTitle: "Melbourne & Victoria packages",
    callout: { title: "Four seasons in one day", text: "Melbourne's weather is famously changeable. Pack layers at any time of year, even in summer." },
  },
  goldCoast: {
    id: "gold-coast",
    eyebrow: "Gold Coast + family holidays",
    title: "Sun, Surf & Theme Parks",
    intro:
      "Fifty-odd kilometres of surf beaches, the towers of Surfers Paradise and Australia's biggest cluster of theme parks. The Gold Coast is built for families, and for anyone who likes long days in the sun.",
    layout: "split",
    tone: "light",
    images: ["surfers", "theme-park", "gold-coast-aerial"],
    highlightsTitle: "What families love",
    highlights: ["Surfers Paradise", "Theme parks", "Patrolled surf beaches", "Shopping", "Wildlife sanctuaries", "Family entertainment", "Hinterland rainforest"],
    spotlightsTitle: "Gold Coast theme parks",
    spotlights: [
      { title: "Warner Bros. Movie World", tag: "Movies & rides", text: "Rides, stunt shows and characters. Admission is separate." },
      { title: "Sea World", tag: "Marine park", text: "Marine displays, rides and shows. Admission is separate." },
      { title: "Wet'n'Wild", tag: "Water park", text: "Slides and pools; seasonal operating hours. Admission is separate." },
      { title: "Dreamworld", tag: "Thrill rides", text: "Rides and attractions for all ages. Admission is separate." },
    ],
    packageIds: ["gc-family-5n", "bne-gc-6n", "syd-gc-family-8n", "gc-5n"],
    packagesTitle: "Gold Coast family packages",
    callout: {
      title: "Attraction tickets are separate unless explicitly included in the package.",
      text: "Theme parks are independent businesses with their own prices, opening days and ride restrictions. We advise on passes and add tickets on request.",
    },
  },
  westernAustralia: {
    id: "western-australia",
    eyebrow: "Western Australia",
    title: "The Wild West Coast",
    intro:
      "A state the size of Western Europe, facing the Indian Ocean. Sunny Perth and heritage Fremantle, quokkas on Rottnest, Margaret River's wine country, Ningaloo's reef and the red cliffs of Broome.",
    layout: "split",
    tone: "dusk",
    images: ["rottnest", "perth", "broome"],
    highlightsTitle: "Western Australia at a glance",
    highlights: ["Perth", "Fremantle", "Rottnest Island", "Margaret River", "Broome", "Ningaloo Reef", "Coral Coast"],
    spotlightsTitle: "Signature experiences",
    spotlights: [
      { title: "Rottnest Island", tag: "Quokkas & cycling", text: "A car-free island of bays and bike paths, a short ferry ride from Perth or Fremantle.", image: "quokka", points: ["Quokka experiences (look, never touch or feed)", "Island cycling", "Beaches & snorkelling bays"], destinationId: "rottnest-island" },
      { title: "Margaret River", tag: "Food & wine", text: "About three hours south of Perth.", image: "margaret-river", points: ["Food", "Wine", "Scenic coast & forest"], destinationId: "margaret-river" },
      { title: "Ningaloo Reef", tag: "Marine life", text: "A fringing reef you can reach from the beach.", image: "whale-shark", points: ["Seasonal whale shark tours", "Reef snorkelling", "Manta rays and turtles (not guaranteed)"], destinationId: "ningaloo-reef" },
      { title: "Broome", tag: "Cable Beach", text: "Sunset camel trains and the gateway to the Kimberley.", image: "broome", points: ["Cable Beach", "Kimberley landscapes", "Dry-season travel"], destinationId: "broome" },
      { title: "Perth & Fremantle", tag: "City & port", text: "Kings Park views, river life and a historic port town.", image: "perth", destinationId: "perth" },
      { title: "Coral Coast", tag: "Road trip", text: "The Pinnacles, Kalbarri and Shark Bay on the long road north.", image: "pinnacles" },
    ],
    routeIds: ["per-mr-rot"],
    routesTitle: "South-west journey",
    packageIds: ["per-4n", "per-rot-5n", "per-mr-6n", "ningaloo-7n", "wa-road"],
    packagesTitle: "Western Australia packages",
    notes: [
      "Perth is roughly 4–5 hours by air from Sydney. Western Australia works best as its own trip, or as a fly-in add-on.",
      "Touching or feeding quokkas is not allowed on Rottnest Island.",
    ],
  },
  southAustralia: {
    id: "south-australia",
    eyebrow: "South Australia",
    title: "Food, Wine & Wild Places",
    intro:
      "Refined and relaxed: a festival city with a famous market, world-class wine regions within an hour, and Kangaroo Island's wildlife a short hop away.",
    layout: "split",
    tone: "wine",
    images: ["barossa", "kangaroo-island", "adelaide"],
    pillars: ["Food", "Wine", "Wildlife", "Nature", "Scenic drives", "Premium experiences"],
    highlightsTitle: "Where to go",
    highlights: ["Adelaide", "Barossa Valley", "McLaren Vale", "Kangaroo Island", "Flinders Ranges"],
    spotlights: [
      { title: "Barossa Valley", tag: "Wine country", text: "Historic cellar doors and long lunches.", image: "barossa", destinationId: "barossa-valley" },
      { title: "McLaren Vale", tag: "Vines by the sea", text: "Wineries rolling towards the coast south of Adelaide.", image: "wine-food", destinationId: "mclaren-vale" },
      { title: "Kangaroo Island", tag: "Wildlife", text: "Sea lions at Seal Bay and Remarkable Rocks. Sightings are never guaranteed.", image: "sea-lions", destinationId: "kangaroo-island" },
      { title: "Flinders Ranges", tag: "Outback", text: "Ancient ranges and Ikara–Wilpena Pound.", image: "flinders-ranges", destinationId: "flinders-ranges" },
    ],
    routeIds: ["adl-ki"],
    routesTitle: "Island journey",
    packageIds: ["adl-bar-4n", "adl-ki-5n", "sa-luxury"],
    packagesTitle: "South Australia packages",
  },
  tasmania: {
    id: "tasmania",
    eyebrow: "Tasmania",
    title: "Tasmania — Wild, Pure, Unhurried",
    intro:
      "An island of mountains, empty beaches and some of the cleanest air on earth. More than 40 percent of Tasmania is protected in national parks and reserves, and its food and wine are among the country's best.",
    layout: "immersive",
    tone: "forest",
    images: ["cradle-mountain", "wineglass-bay", "bay-of-fires"],
    pillars: ["Wilderness", "Hiking", "Wildlife", "Food", "Wine", "Scenic roads"],
    highlightsTitle: "Tasmania's highlights",
    highlights: ["Hobart", "Port Arthur", "Freycinet National Park", "Wineglass Bay", "Cradle Mountain", "Bay of Fires"],
    spotlights: [
      { title: "Hobart", tag: "Harbour city", text: "Salamanca, MONA and kunanyi / Mount Wellington.", image: "hobart", destinationId: "hobart" },
      { title: "Port Arthur", tag: "World Heritage", text: "A haunting convict settlement on the Tasman Peninsula.", image: "port-arthur", destinationId: "port-arthur" },
      { title: "Wineglass Bay", tag: "Freycinet", text: "The lookout walk rewards you with Tasmania's most famous view.", image: "wineglass-bay", destinationId: "freycinet" },
      { title: "Cradle Mountain", tag: "Wilderness", text: "Dove Lake, alpine walks and wombats (often seen, never guaranteed).", image: "wombat", destinationId: "cradle-mountain" },
      { title: "Bay of Fires", tag: "Coast", text: "Orange-lichen boulders and white sand.", image: "bay-of-fires", destinationId: "bay-of-fires" },
    ],
    routeIds: ["tas-circuit"],
    routesTitle: "Tasmania by road",
    packageIds: ["tas-5n", "tas-road-7n", "tas-honeymoon"],
    packagesTitle: "Tasmania packages",
    notes: ["Tasmania is cooler than the mainland. Summer is peak season; highland walks can see snow in winter."],
  },
  outback: {
    id: "outback",
    eyebrow: "Northern Territory + Outback",
    title: "The Red Heart of Australia",
    intro:
      "Red earth to every horizon, ancient gorges and some of the oldest living cultures on earth. From the tropical Top End to Uluru in the Red Centre, the Northern Territory is Australia at its most elemental.",
    layout: "immersive",
    tone: "desert",
    images: ["uluru-dusk", "kata-tjuta", "kings-canyon"],
    highlightsTitle: "Top End & Red Centre",
    highlights: ["Darwin", "Kakadu National Park", "Litchfield National Park", "Katherine", "Alice Springs", "Uluru / Kata Tjuta", "Kings Canyon"],
    spotlightsTitle: "Places to know",
    spotlights: [
      { title: "Kata Tjuta", tag: "Red Centre", text: "Thirty-six great domes and the Valley of the Winds walk, near Uluru.", image: "kata-tjuta", destinationId: "uluru" },
      { title: "Kings Canyon", tag: "Watarrka", text: "The Rim Walk circles sheer sandstone walls.", image: "kings-canyon", destinationId: "kings-canyon" },
      { title: "Alice Springs", tag: "Outback town", text: "MacDonnell Ranges, the Flying Doctor and School of the Air.", image: "macdonnell", destinationId: "alice-springs" },
      { title: "Kakadu", tag: "Top End", text: "Wetlands, escarpments and ancient rock art.", image: "kakadu", destinationId: "kakadu" },
      { title: "Litchfield", tag: "Waterfalls", text: "Plunge pools and termite mounds near Darwin.", image: "litchfield", destinationId: "litchfield" },
      { title: "Katherine & Nitmiluk", tag: "Gorges", text: "Cruise or canoe between sandstone walls.", image: "gorge", destinationId: "katherine" },
    ],
    routeIds: ["alice-uluru-kings", "drw-kak-kat"],
    routesTitle: "Outback journeys",
    packageIds: ["uluru-4n", "drw-kak-5n", "red-centre-6n", "nt-adventure-8n"],
    packagesTitle: "Northern Territory packages",
    callout: {
      title: "Plan outback travel carefully",
      text: "The outback is beautiful and genuinely remote. We build itineraries with realistic driving days, flights for the longest legs, and the right season.",
      points: ["Long distances between towns", "Remote conditions with limited mobile coverage", "Extreme heat in summer; cold desert nights in winter", "Limited fuel, food and medical services", "Seasonal road and site closures in the Top End"],
    },
    notes: ["Uluru is sacred to its Anangu traditional owners. Climbing is not permitted, and some sensitive sites ask visitors not to take photographs."],
  },
} satisfies Record<string, StorySection>;
