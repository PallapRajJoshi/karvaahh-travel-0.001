// data/south-africa/packages.ts
// Package templates. Each is a configurable starting point: Karvaahh quotes
// real hotels, lodges, flights and activities on enquiry. No prices, dates or
// availability are published until confirmed. Add `price` only with real
// data; the cards and JSON-LD render it when set. Add new packages by
// appending to this array; every section reads from here.

import type { SouthAfricaPackage, SouthAfricaTravelStyle } from "./types";

const STD_INCLUSIONS = "Hotels, daily breakfast, private or shared transfers and listed sightseeing, as quoted. Flights, visas, insurance and tickets are itemised separately.";
const SAFARI_INCLUSIONS = "Lodge or camp stay, meals and game drives as offered by the chosen lodge, plus transfers. Park fees, flights and extras are confirmed in the quote.";

export const saPackages: SouthAfricaPackage[] = [
  // ── Cape Town ─────────────────────────────────────────────
  {
    id: "ct-4n", title: "Cape Town Escape", duration: "4N/5D", nights: 4,
    destinations: ["cape-town"], styles: ["city-tour", "beach", "culture", "nature", "senior-friendly", "group", "private"], image: "ct-tablecloth",
    summary: "Table Mountain, the Cape Peninsula and the Atlantic seaboard in an easy first taste of South Africa.",
    highlights: ["Table Mountain (weather permitting)", "Cape Peninsula & Cape Point", "V&A Waterfront", "Bo-Kaap"],
    accommodationCategory: "4★ or 5★ city / seaside", transport: "Private or shared transfers", inclusionsSummary: STD_INCLUSIONS,
    outline: ["Arrive Cape Town, transfer to hotel", "Table Mountain and city highlights", "Cape Peninsula and Cape Point", "Free day: Waterfront, beaches or optional tours", "Depart"],
    kind: "template", popular: true, active: true,
  },
  {
    id: "ct-winelands", title: "Cape Town + Winelands", duration: "5N/6D", nights: 5,
    destinations: ["cape-town", "stellenbosch", "franschhoek"], styles: ["food-wine", "honeymoon", "luxury", "culture", "senior-friendly", "private"], image: "vineyard-mountain",
    summary: "The flagship pairing: Cape Town's mountain and ocean, then wine estates and long lunches in Stellenbosch and Franschhoek.",
    highlights: ["Table Mountain", "Cape Peninsula", "Winelands tastings", "Franschhoek valley"],
    accommodationCategory: "4★ / 5★ or boutique estate", transport: "Private transfers or self-drive", inclusionsSummary: STD_INCLUSIONS,
    outline: ["Arrive Cape Town", "Table Mountain and city", "Cape Peninsula", "Transfer to the Winelands, estate visit", "Franschhoek and tastings", "Depart"],
    kind: "template", popular: true, active: true,
  },
  {
    id: "ct-honeymoon", title: "Cape Town Honeymoon", duration: "5N/6D", nights: 5,
    destinations: ["cape-town"], styles: ["honeymoon", "luxury", "beach", "food-wine", "private"], image: "twelve-apostles-sunset",
    summary: "Ocean-view stays, sunset spots and a private Peninsula day for two.",
    highlights: ["Sea-view hotel", "Sunset experiences", "Private Peninsula drive", "Romantic dining where offered"],
    accommodationCategory: "5★ or boutique", transport: "Private transfers", inclusionsSummary: STD_INCLUSIONS, kind: "template", active: true,
  },
  {
    id: "ct-family", title: "Cape Town Family Holiday", duration: "5N/6D", nights: 5,
    destinations: ["cape-town"], styles: ["family", "beach", "nature", "city-tour"], image: "boulders-penguins",
    summary: "Penguins, beaches, the cableway and easy days built around children's pace.",
    highlights: ["African penguins at Boulders", "Table Mountain cableway", "Beaches", "Waterfront aquarium"],
    accommodationCategory: "Family rooms / apartments", transport: "Private transfers", inclusionsSummary: STD_INCLUSIONS, kind: "template", active: true,
  },
  {
    id: "ct-luxury", title: "Cape Town Luxury Escape", duration: "5N/6D", nights: 5,
    destinations: ["cape-town", "franschhoek"], styles: ["luxury", "honeymoon", "food-wine", "private"], image: "camps-bay-beach",
    summary: "Five-star Atlantic seaboard stays, private guiding and a Winelands day.",
    highlights: ["5★ or boutique hotel", "Private guide", "Winelands day", "Chef-led dining where offered"],
    accommodationCategory: "5★ / Ultra luxury", transport: "Private chauffeur", inclusionsSummary: STD_INCLUSIONS, kind: "template", active: true,
  },
  {
    id: "luxury-wine", title: "South Africa Luxury Wine Journey", duration: "6N/7D", nights: 6,
    destinations: ["cape-town", "stellenbosch", "franschhoek", "hermanus"], styles: ["food-wine", "luxury", "honeymoon", "private"], image: "wine-glasses",
    summary: "Estate stays, tastings and Cape cuisine, with a coastal day in Hermanus.",
    highlights: ["Estate accommodation", "Private tastings", "Hermanus coast", "Cape Town finale"],
    accommodationCategory: "Boutique estate / 5★", transport: "Private chauffeur", inclusionsSummary: STD_INCLUSIONS, kind: "template", active: true,
  },

  // ── Safari ───────────────────────────────────────────────
  {
    id: "kruger-5n", title: "Kruger Safari", duration: "5N/6D", nights: 5,
    destinations: ["johannesburg", "panorama-route", "kruger"], styles: ["safari", "wildlife", "photography", "family", "group"], image: "elephant-road",
    summary: "Johannesburg, the Panorama Route and three nights in the Kruger area with morning and evening game drives.",
    highlights: ["Possible Big Five encounters", "Morning and evening game drives", "Panorama Route", "Bush dinners where offered"],
    accommodationCategory: "Lodge or rest camp", safariType: "Kruger game drives (shared or private)", transport: "Road transfer or domestic flight", inclusionsSummary: SAFARI_INCLUSIONS,
    outline: ["Arrive Johannesburg", "Drive the Panorama Route", "Kruger game drives", "Kruger game drives", "Morning drive, return", "Depart"],
    kind: "template", popular: true, active: true,
  },
  {
    id: "ct-kruger", title: "Cape Town + Kruger", duration: "6N/7D", nights: 6,
    destinations: ["cape-town", "kruger"], styles: ["safari", "wildlife", "city-tour", "beach", "honeymoon", "family", "group"], image: "vehicle-lion-sunset",
    summary: "The classic contrast: Table Mountain and the Atlantic, then a domestic flight to the bush.",
    highlights: ["Table Mountain", "Cape Peninsula", "Kruger game drives", "Possible Big Five encounters"],
    accommodationCategory: "4★ city + safari lodge", safariType: "Lodge-based game drives", transport: "Domestic flight + transfers", inclusionsSummary: SAFARI_INCLUSIONS,
    outline: ["Arrive Cape Town", "Table Mountain and city", "Cape Peninsula", "Fly to the Kruger area", "Game drives", "Game drives", "Depart"],
    kind: "template", popular: true, active: true,
  },
  {
    id: "ct-safari-8n", title: "Cape Town + Safari", duration: "8N/9D", nights: 8,
    destinations: ["cape-town", "kruger"], styles: ["safari", "wildlife", "city-tour", "beach", "family", "photography"], image: "lion-pride",
    summary: "More time at both ends: a full Cape Town stay and an unhurried safari.",
    highlights: ["Cape Town and Peninsula", "4 nights on safari", "Possible Big Five encounters", "Optional Winelands day"],
    accommodationCategory: "4★ / 5★ + safari lodge", safariType: "Lodge-based game drives", transport: "Domestic flight + transfers", inclusionsSummary: SAFARI_INCLUSIONS, kind: "template", active: true,
  },
  {
    id: "luxury-kruger", title: "Luxury Kruger Safari", duration: "4N/5D", nights: 4,
    destinations: ["kruger"], styles: ["safari", "luxury", "wildlife", "honeymoon", "private", "photography"], image: "lodge-pool",
    summary: "A luxury lodge in a private concession or reserve, with ranger-and-tracker game drives.",
    highlights: ["Luxury lodge", "Ranger and tracker drives", "Bush walks where offered", "Possible Big Five encounters"],
    accommodationCategory: "Luxury Lodge", safariType: "Private-reserve lodge safari", transport: "Domestic or charter flight", inclusionsSummary: SAFARI_INCLUSIONS, kind: "template", active: true,
  },
  {
    id: "sabi-luxury", title: "Sabi Sand Luxury Safari", duration: "3N/4D", nights: 3,
    destinations: ["sabi-sand"], styles: ["safari", "luxury", "honeymoon", "wildlife", "photography", "private"], image: "lodge-suite",
    summary: "Three nights in a Sabi Sand lodge: game drives, sundowners and quiet afternoons at the lodge.",
    highlights: ["Sabi Sand lodge", "Twice-daily game drives", "Possible leopard encounters", "Sundowners where offered"],
    accommodationCategory: "Luxury Lodge / Ultra luxury", safariType: "Private reserve, lodge vehicles", transport: "Flight to the nearest airstrip or airport + transfer", inclusionsSummary: SAFARI_INCLUSIONS, kind: "template", popular: true, active: true,
  },
  {
    id: "ct-sabi", title: "Cape Town + Sabi Sand", duration: "7N/8D", nights: 7,
    destinations: ["cape-town", "sabi-sand"], styles: ["luxury", "safari", "honeymoon", "wildlife", "private"], image: "leopard-tree",
    summary: "A five-star Cape Town stay followed by a private-reserve safari.",
    highlights: ["Cape Town luxury stay", "Sabi Sand lodge", "Private game drives", "Possible Big Five encounters"],
    accommodationCategory: "5★ + Luxury Lodge", safariType: "Private reserve", transport: "Domestic flights + private transfers", inclusionsSummary: SAFARI_INCLUSIONS, kind: "template", active: true,
  },
  {
    id: "luxury-safari", title: "South Africa Luxury Safari", duration: "9N/10D", nights: 9,
    destinations: ["cape-town", "franschhoek", "sabi-sand"], styles: ["luxury", "safari", "food-wine", "honeymoon", "private"], image: "lodge-pool",
    summary: "Cape Town, a Winelands estate and a private-reserve lodge, joined by private transfers.",
    highlights: ["Atlantic seaboard hotel", "Winelands estate", "Sabi Sand lodge", "Private guiding"],
    accommodationCategory: "5★ / Luxury Lodge / Ultra luxury", safariType: "Private reserve", transport: "Domestic flights + private chauffeur", inclusionsSummary: SAFARI_INCLUSIONS, kind: "template", popular: true, active: true,
  },
  {
    id: "family-safari", title: "Family Safari", duration: "5N/6D", nights: 5,
    destinations: ["johannesburg", "pilanesberg", "sun-city"], styles: ["family", "safari", "wildlife", "senior-friendly"], image: "safari-vehicle",
    summary: "A malaria-free Big Five safari in the Pilanesberg, paired with Sun City's pools and activities.",
    highlights: ["Malaria-free reserve", "Family-friendly game drives", "Sun City resort", "Short transfer from Johannesburg"],
    accommodationCategory: "Family lodge / resort", safariType: "Pilanesberg game drives", transport: "Road transfers", inclusionsSummary: SAFARI_INCLUSIONS, kind: "template", popular: true, active: true,
  },

  // ── Combinations ───────────────────────────────────────
  {
    id: "ct-garden-7n", title: "Cape Town + Garden Route", duration: "7N/8D", nights: 7,
    destinations: ["cape-town", "hermanus", "mossel-bay", "knysna", "plettenberg-bay"], styles: ["road-trip", "nature", "beach", "family", "honeymoon", "photography"], image: "garden-lagoon",
    summary: "Cape Town, then the coast: Hermanus, lagoons, forests and Plettenberg Bay.",
    highlights: ["Cape Peninsula", "Hermanus coast", "Knysna lagoon", "Plettenberg Bay beaches"],
    accommodationCategory: "4★ / boutique guesthouses", transport: "Self-drive or private chauffeur", inclusionsSummary: STD_INCLUSIONS,
    outline: ["Arrive Cape Town", "Table Mountain and city", "Cape Peninsula", "Drive via Hermanus", "Wilderness and Knysna", "Knysna lagoon", "Plettenberg Bay", "Fly home from George or Gqeberha"],
    kind: "template", popular: true, active: true,
  },
  {
    id: "ct-safari-winelands", title: "Cape Town + Safari + Winelands", duration: "8N/9D", nights: 8,
    destinations: ["cape-town", "stellenbosch", "kruger"], styles: ["safari", "food-wine", "honeymoon", "luxury", "wildlife"], image: "estate-avenue",
    summary: "The three pillars in one: city, wine country and the bush.",
    highlights: ["Cape Town", "Winelands estate", "Kruger safari", "Possible Big Five encounters"],
    accommodationCategory: "4★ / 5★ + safari lodge", safariType: "Lodge-based game drives", transport: "Domestic flight + transfers", inclusionsSummary: SAFARI_INCLUSIONS, kind: "template", popular: true, active: true,
  },
  {
    id: "sa-highlights", title: "South Africa Highlights", duration: "9N/10D", nights: 9,
    destinations: ["cape-town", "stellenbosch", "johannesburg", "panorama-route", "kruger"], styles: ["safari", "city-tour", "nature", "culture", "family", "group", "senior-friendly"], image: "ct-aerial-wide",
    summary: "Cape Town, the Winelands, the Panorama Route and Kruger: the country's greatest hits.",
    highlights: ["Cape Town", "Winelands", "Panorama Route", "Kruger safari"],
    accommodationCategory: "4★ + safari lodge", safariType: "Lodge or rest camp", transport: "Domestic flight + road", inclusionsSummary: SAFARI_INCLUSIONS, kind: "template", popular: true, active: true,
  },
  {
    id: "family-highlights", title: "South Africa Family Highlights", duration: "9N/10D", nights: 9,
    destinations: ["cape-town", "plettenberg-bay", "addo"], styles: ["family", "beach", "safari", "wildlife", "road-trip"], image: "elephant-waterhole",
    summary: "Penguins, beaches, the Garden Route and a malaria-free elephant safari at Addo.",
    highlights: ["Cape Town", "Garden Route beaches", "Addo elephants", "Manageable driving days"],
    accommodationCategory: "Family rooms / lodges", safariType: "Addo game drives", transport: "Self-drive or chauffeur", inclusionsSummary: STD_INCLUSIONS, kind: "template", active: true,
  },
  {
    id: "ct-gr-family", title: "Cape Town + Garden Route Family Tour", duration: "8N/9D", nights: 8,
    destinations: ["cape-town", "knysna", "plettenberg-bay"], styles: ["family", "road-trip", "beach", "nature"], image: "plett-beach",
    summary: "City, beaches and forest walks with short drives between stops.",
    highlights: ["Boulders penguins", "Knysna lagoon", "Plettenberg Bay", "Forest walks"],
    accommodationCategory: "Family rooms / apartments", transport: "Self-drive or chauffeur", inclusionsSummary: STD_INCLUSIONS, kind: "template", active: true,
  },
  {
    id: "ct-safari-family", title: "Cape Town + Safari Family Package", duration: "7N/8D", nights: 7,
    destinations: ["cape-town", "pilanesberg"], styles: ["family", "safari", "beach", "wildlife"], image: "boulders-penguins",
    summary: "Cape Town's penguins and beaches with a malaria-free Pilanesberg safari.",
    highlights: ["Cape Town", "Penguins", "Pilanesberg game drives", "Malaria-free safari"],
    accommodationCategory: "Family rooms + lodge", safariType: "Pilanesberg game drives", transport: "Domestic flight + road", inclusionsSummary: SAFARI_INCLUSIONS, kind: "template", active: true,
  },

  // ── Honeymoon ──────────────────────────────────────────
  {
    id: "honeymoon-ct-safari", title: "Cape Town + Safari Honeymoon", duration: "7N/8D", nights: 7,
    destinations: ["cape-town", "sabi-sand"], styles: ["honeymoon", "safari", "luxury", "beach"], image: "lodge-pool",
    summary: "Ocean sunsets in Cape Town, then a lodge in the bush for two.",
    highlights: ["Sea-view stay", "Safari lodge", "Sundowners where offered", "Private transfers"],
    accommodationCategory: "5★ + Luxury Lodge", safariType: "Lodge-based game drives", transport: "Domestic flight + private transfers", inclusionsSummary: SAFARI_INCLUSIONS, kind: "template", popular: true, active: true,
  },
  {
    id: "honeymoon-ct-wine-safari", title: "Cape Town + Winelands + Safari Honeymoon", duration: "8N/9D", nights: 8,
    destinations: ["cape-town", "franschhoek", "kruger"], styles: ["honeymoon", "food-wine", "safari", "luxury"], image: "vineyard-sunset",
    summary: "City, a Winelands estate and the bush, paced for two.",
    highlights: ["Cape Town", "Franschhoek estate", "Kruger lodge", "Romantic dining where offered"],
    accommodationCategory: "5★ / boutique + lodge", safariType: "Lodge-based game drives", transport: "Domestic flight + private transfers", inclusionsSummary: SAFARI_INCLUSIONS, kind: "template", active: true,
  },
  {
    id: "honeymoon-gr-safari", title: "Cape Town + Garden Route + Safari Honeymoon", duration: "9N/10D", nights: 9,
    destinations: ["cape-town", "knysna", "plettenberg-bay", "kruger"], styles: ["honeymoon", "road-trip", "safari", "beach"], image: "knysna-heads",
    summary: "A coastal drive for two, finished with a safari lodge.",
    highlights: ["Cape Town", "Garden Route drive", "Plettenberg Bay", "Safari lodge"],
    accommodationCategory: "Boutique + lodge", safariType: "Lodge-based game drives", transport: "Self-drive or chauffeur + flight", inclusionsSummary: SAFARI_INCLUSIONS, kind: "template", active: true,
  },
  {
    id: "luxury-honeymoon", title: "South Africa Luxury Honeymoon", duration: "10N/11D", nights: 10,
    destinations: ["cape-town", "franschhoek", "hermanus", "sabi-sand"], styles: ["honeymoon", "luxury", "safari", "food-wine", "private"], image: "lodge-suite",
    summary: "The full romance: Atlantic seaboard, Winelands estate, coast and a private-reserve lodge.",
    highlights: ["Ultra-luxury stays", "Private guiding", "Whale coast", "Sabi Sand lodge"],
    accommodationCategory: "Ultra luxury", safariType: "Private reserve", transport: "Private chauffeur + flights", inclusionsSummary: SAFARI_INCLUSIONS, kind: "template", active: true,
  },

  // ── Gauteng + North West ───────────────────────────────
  {
    id: "joburg-break", title: "Johannesburg City Break", duration: "3N/4D", nights: 3,
    destinations: ["johannesburg"], styles: ["city-tour", "culture", "group"], image: "joburg-sunset",
    summary: "History, neighbourhoods, food and shopping in South Africa's largest city.",
    highlights: ["Heritage and history sites", "Neighbourhood food tour", "Shopping", "Guided city touring"],
    accommodationCategory: "4★ / 5★", transport: "Private transfers", inclusionsSummary: STD_INCLUSIONS, kind: "template", active: true,
  },
  {
    id: "joburg-pretoria", title: "Johannesburg + Pretoria", duration: "4N/5D", nights: 4,
    destinations: ["johannesburg", "pretoria"], styles: ["city-tour", "culture", "senior-friendly"], image: "pretoria-heritage",
    summary: "Two cities, an hour apart: history, heritage architecture and gardens.",
    highlights: ["Johannesburg heritage", "Union Buildings", "Pretoria gardens", "Jacaranda season (spring)"],
    accommodationCategory: "4★", transport: "Private transfers", inclusionsSummary: STD_INCLUSIONS, kind: "template", active: true,
  },
  {
    id: "joburg-kruger", title: "Johannesburg + Kruger", duration: "5N/6D", nights: 5,
    destinations: ["johannesburg", "kruger"], styles: ["safari", "wildlife", "city-tour", "group"], image: "elephant-herd-road",
    summary: "A night in the city, then straight to the bush.",
    highlights: ["Johannesburg", "Kruger game drives", "Possible Big Five encounters"],
    accommodationCategory: "4★ + lodge", safariType: "Kruger game drives", transport: "Domestic flight or road", inclusionsSummary: SAFARI_INCLUSIONS, kind: "template", active: true,
  },
  {
    id: "joburg-panorama-kruger", title: "Johannesburg + Panorama Route + Kruger", duration: "6N/7D", nights: 6,
    destinations: ["johannesburg", "panorama-route", "blyde-river-canyon", "kruger"], styles: ["road-trip", "safari", "nature", "photography"], image: "blyde-canyon",
    summary: "Escarpment viewpoints, Blyde River Canyon and then the bush.",
    highlights: ["Blyde River Canyon", "God's Window", "Waterfalls", "Kruger safari"],
    accommodationCategory: "4★ + lodge", safariType: "Kruger game drives", transport: "Self-drive or private road transfer", inclusionsSummary: SAFARI_INCLUSIONS, kind: "template", popular: true, active: true,
  },
  {
    id: "sun-city-family", title: "Sun City Family Holiday", duration: "3N/4D", nights: 3,
    destinations: ["sun-city"], styles: ["family", "luxury", "adventure"], image: "sun-city-palace",
    summary: "Pools, entertainment and activities at the resort, a few hours from Johannesburg.",
    highlights: ["Resort stay", "Family activities", "Optional Pilanesberg drive"],
    accommodationCategory: "Resort hotel", transport: "Road transfers",
    inclusionsSummary: "Resort accommodation and transfers as quoted. Resort facilities, attraction admissions and activities are confirmed separately and only included where stated.",
    kind: "template", active: true,
  },
  {
    id: "sun-city-pilanesberg", title: "Sun City + Pilanesberg Safari", duration: "4N/5D", nights: 4,
    destinations: ["sun-city", "pilanesberg"], styles: ["family", "safari", "wildlife", "luxury"], image: "sun-city-elephant",
    summary: "Resort days and malaria-free game drives next door.",
    highlights: ["Sun City resort", "Pilanesberg game drives", "Malaria-free safari"],
    accommodationCategory: "Resort hotel / lodge", safariType: "Pilanesberg game drives", transport: "Road transfers",
    inclusionsSummary: "Accommodation, transfers and game drives as quoted. Resort attraction admissions are separate unless stated.",
    kind: "template", active: true,
  },
  {
    id: "joburg-sun-city", title: "Johannesburg + Sun City + Pilanesberg", duration: "5N/6D", nights: 5,
    destinations: ["johannesburg", "sun-city", "pilanesberg"], styles: ["family", "safari", "city-tour"], image: "bushveld-sunset",
    summary: "City, resort and safari in one easy loop.",
    highlights: ["Johannesburg", "Sun City", "Pilanesberg game drives"],
    accommodationCategory: "4★ + resort / lodge", safariType: "Pilanesberg game drives", transport: "Road transfers", inclusionsSummary: SAFARI_INCLUSIONS, kind: "template", active: true,
  },

  // ── Garden Route + Eastern Cape ───────────────────────
  {
    id: "garden-road-trip", title: "Garden Route Road Trip", duration: "6N/7D", nights: 6,
    destinations: ["mossel-bay", "oudtshoorn", "knysna", "plettenberg-bay"], styles: ["road-trip", "nature", "adventure", "beach", "photography"], image: "coastal-boardwalk",
    summary: "Lagoons, forests, mountain passes and a Klein Karoo detour.",
    highlights: ["Mossel Bay", "Klein Karoo detour", "Knysna", "Tsitsikamma coast"],
    accommodationCategory: "Boutique guesthouses", transport: "Self-drive or private chauffeur", inclusionsSummary: STD_INCLUSIONS, kind: "template", active: true,
  },
  {
    id: "ct-gr-safari", title: "Cape Town + Garden Route + Safari", duration: "10N/11D", nights: 10,
    destinations: ["cape-town", "knysna", "plettenberg-bay", "addo"], styles: ["road-trip", "safari", "family", "nature", "beach"], image: "elephant-approach",
    summary: "City, coast and a malaria-free safari, ending at Addo.",
    highlights: ["Cape Town", "Garden Route", "Addo elephants", "Fly home from Gqeberha"],
    accommodationCategory: "4★ + lodge", safariType: "Addo game drives", transport: "Self-drive or chauffeur", inclusionsSummary: STD_INCLUSIONS, kind: "template", popular: true, active: true,
  },
  {
    id: "addo-safari", title: "Addo Safari", duration: "2N/3D", nights: 2,
    destinations: ["gqeberha", "addo"], styles: ["safari", "wildlife", "family", "senior-friendly"], image: "elephant-waterhole",
    summary: "A short, malaria-free elephant safari from Gqeberha.",
    highlights: ["Addo game drives", "Elephant herds", "Malaria-free park"],
    accommodationCategory: "Lodge", safariType: "Addo game drives", transport: "Road transfers", inclusionsSummary: SAFARI_INCLUSIONS, kind: "template", active: true,
  },
  {
    id: "gr-addo", title: "Garden Route + Addo", duration: "5N/6D", nights: 5,
    destinations: ["knysna", "plettenberg-bay", "addo"], styles: ["road-trip", "safari", "nature", "family"], image: "knysna-aerial",
    summary: "The eastern Garden Route, then elephants at Addo.",
    highlights: ["Knysna", "Plettenberg Bay", "Addo game drives"],
    accommodationCategory: "4★ + lodge", safariType: "Addo game drives", transport: "Self-drive or chauffeur", inclusionsSummary: STD_INCLUSIONS, kind: "template", active: true,
  },
  {
    id: "ct-gr-addo", title: "Cape Town + Garden Route + Addo", duration: "9N/10D", nights: 9,
    destinations: ["cape-town", "hermanus", "knysna", "addo"], styles: ["road-trip", "safari", "nature", "family", "photography"], image: "river-mouth",
    summary: "The full southern coast, from Table Mountain to Addo's elephants.",
    highlights: ["Cape Town", "Hermanus", "Knysna", "Addo"],
    accommodationCategory: "4★ / boutique + lodge", safariType: "Addo game drives", transport: "Self-drive or chauffeur", inclusionsSummary: STD_INCLUSIONS, kind: "template", active: true,
  },

  // ── KwaZulu-Natal + Northern Cape ──────────────────────
  {
    id: "durban-drakensberg", title: "Durban + Drakensberg", duration: "5N/6D", nights: 5,
    destinations: ["durban", "drakensberg"], styles: ["beach", "nature", "adventure", "culture", "road-trip"], image: "drakensberg-peaks",
    summary: "Indian Ocean beaches and curry, then the mountains.",
    highlights: ["Durban beachfront", "Durban food", "Drakensberg hikes", "Mountain scenery"],
    accommodationCategory: "4★ + mountain lodge", transport: "Road transfers or self-drive", inclusionsSummary: STD_INCLUSIONS, kind: "template", active: true,
  },
  {
    id: "drakensberg-adventure", title: "Drakensberg Adventure", duration: "4N/5D", nights: 4,
    destinations: ["drakensberg"], styles: ["adventure", "nature", "photography"], image: "drakensberg-hiker",
    summary: "Guided hikes and big views in the Dragon Mountains.",
    highlights: ["Guided hikes", "Amphitheatre views", "Rock art sites", "Mountain lodges"],
    accommodationCategory: "Mountain lodge", transport: "Road transfers", inclusionsSummary: STD_INCLUSIONS, kind: "template", active: true,
  },
  {
    id: "kzn-nature", title: "KwaZulu-Natal Nature Escape", duration: "6N/7D", nights: 6,
    destinations: ["durban", "drakensberg"], styles: ["nature", "beach", "senior-friendly", "photography"], image: "drakensberg-sunrise",
    summary: "A slower pace: coast, valleys and mountain air.",
    highlights: ["Durban coast", "Drakensberg valleys", "Scenic drives"],
    accommodationCategory: "4★ / lodge", transport: "Private chauffeur or self-drive", inclusionsSummary: STD_INCLUSIONS, kind: "template", active: true,
  },
  {
    id: "northern-cape", title: "Northern Cape Wilderness", duration: "8N/9D", nights: 8,
    destinations: ["kimberley", "augrabies", "kgalagadi"], styles: ["adventure", "road-trip", "photography", "wildlife", "safari"], image: "kalahari-dunes",
    summary: "Diamond heritage, a roaring gorge and the red Kalahari: South Africa off the usual path.",
    highlights: ["Kimberley's Big Hole", "Augrabies Falls", "Kgalagadi game viewing", "Desert night skies"],
    accommodationCategory: "Park camps / lodges", safariType: "Self-drive or guided park drives", transport: "Self-drive (4x4 recommended in parts) or guided", inclusionsSummary: STD_INCLUSIONS, kind: "template", active: true,
  },

  // ── Custom ─────────────────────────────────────────────
  {
    id: "custom", title: "Customized South Africa Tour", duration: "Flexible",
    destinations: ["cape-town", "kruger"], styles: ["safari", "wildlife", "honeymoon", "family", "luxury", "adventure", "beach", "nature", "culture", "road-trip", "city-tour", "food-wine", "photography", "senior-friendly", "private", "group"],
    image: "acacia-sunset",
    summary: "Tell us how you want to travel. We'll combine cities, coast and safari into one journey.",
    highlights: ["Any destinations", "Any hotel or lodge category", "Flights and transfers coordinated"],
    transport: "Matched to your route", kind: "custom", active: true,
  },
];

export const activeSAPackages = saPackages.filter((p) => p.active);
export const saPackageById = (id: string) => saPackages.find((p) => p.id === id);
export const packagesForDestination = (id: string) => activeSAPackages.filter((p) => p.kind === "template" && p.destinations.includes(id));
export const packagesWithStyle = (s: SouthAfricaTravelStyle) => activeSAPackages.filter((p) => p.styles.includes(s));
