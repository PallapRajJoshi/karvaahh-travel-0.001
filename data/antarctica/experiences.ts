// data/antarctica/experiences.ts
// Copy and lists for the storytelling sections. Each block is a plain object
// so a CMS can supply it; the components only map over it.

import type { AntarcticaImageId } from "./images";
import type { ExperienceItem, PolarRegion } from "./types";

export const peninsulaExperiences: ExperienceItem[] = [
  { id: "icebergs", title: "Icebergs", text: "Sculpted, blue-banded bergs drifting through the channels.", image: "iceberg-arch" },
  { id: "glaciers", title: "Glaciers", text: "Ice walls that meet the sea in sheltered bays.", image: "glacier-front" },
  { id: "colonies", title: "Penguin colonies", text: "Gentoo, Adélie and chinstrap colonies near permitted landing sites.", image: "adelie-colony" },
  { id: "zodiac", title: "Zodiac landings", text: "Small boats take you ashore and among the ice, weather permitting.", image: "zodiac-arch" },
  { id: "wildlife", title: "Wildlife encounters", text: "Seals resting on floes and seabirds overhead.", image: "weddell-seal" },
  { id: "mountains", title: "Snow-covered mountains", text: "Peaks that rise straight from the water.", image: "alpenglow" },
  { id: "cruising", title: "Scenic cruising", text: "Narrow, ice-lined channels when ice and weather allow.", image: "blue-ice-peaks" },
  { id: "photography", title: "Photography", text: "Long summer light and endless subjects.", image: "mirror-bay" },
  { id: "whales", title: "Whale watching", text: "Possible humpback and minke encounters from deck and Zodiac.", image: "fluke-mountains" },
];

export interface CrossingOption {
  id: "drake" | "air-cruise";
  title: string;
  lede: string;
  points: { label: string; value: string }[];
  goodFor: string[];
  consider: string[];
  image: AntarcticaImageId;
}

/** Drake vs air-cruise comparison. Typical patterns, not operator promises. */
export const crossingOptions: CrossingOption[] = [
  {
    id: "drake",
    title: "Drake Passage Included",
    lede: "Sail from Ushuaia across the Drake: the classic way to reach Antarctica.",
    points: [
      { label: "Gateway", value: "Ushuaia, Argentina" },
      { label: "Crossing", value: "By ship, typically ~2 days each way" },
      { label: "Voyage length", value: "Typically 10+ days" },
      { label: "Availability", value: "The most widely offered option" },
    ],
    goodFor: ["The full expedition experience", "Seabird watching and lectures at sea", "More vessel and cabin choice"],
    consider: ["Seas can be rough; prepare for seasickness", "More travel days in total"],
    image: "berg-open-ocean",
  },
  {
    id: "air-cruise",
    title: "Fly + Cruise / Air-Cruise",
    lede: "Fly over the Drake to the South Shetlands and join your ship there, where operationally available.",
    points: [
      { label: "Gateway", value: "Typically Punta Arenas, Chile" },
      { label: "Crossing", value: "By air, weather-dependent" },
      { label: "Voyage length", value: "Often shorter overall" },
      { label: "Availability", value: "Limited departures and operators" },
    ],
    goodFor: ["Travellers short on time", "Those concerned about rough seas"],
    consider: ["Flights can be delayed by weather, so build in buffer days", "Fewer departures, typically at a higher cost"],
    image: "zodiac-peaks",
  },
];

export interface FeatureRegionContent {
  id: string;
  region: PolarRegion;
  eyebrow: string;
  title: string;
  lede: string;
  images: AntarcticaImageId[];
  highlights: ExperienceItem[];
  wildlife: string[];
  notes: string[];
  /** Expedition ids to show as cards. */
  expeditionIds: string[];
  tone: "light" | "dark" | "sand";
}

export const featureRegions: Record<"south-shetland" | "south-georgia" | "falklands", FeatureRegionContent> = {
  "south-shetland": {
    id: "south-shetland",
    region: "south-shetland-islands",
    eyebrow: "South Shetland Islands",
    title: "First Landfall: The South Shetland Islands",
    lede: "After the Drake, the South Shetlands are often the first Antarctic shores you see: volcanic beaches, glaciated islands, research-station atmosphere and busy wildlife.",
    images: ["fur-seal-chinstraps", "chinstraps", "penguins-floe"],
    highlights: [
      { id: "colonies", title: "Penguin colonies", text: "Chinstrap and gentoo colonies on beaches and slopes.", icon: "binoculars" },
      { id: "seabirds", title: "Seabirds", text: "Skuas, petrels and shags around the islands.", icon: "sparkles" },
      { id: "zodiac", title: "Zodiac excursions", text: "Cruising along ice cliffs and volcanic shorelines.", icon: "waves" },
      { id: "landscapes", title: "Scenic landscapes", text: "Black sand, snow and ice in sharp contrast.", icon: "mountain" },
      { id: "ice", title: "Ice formations", text: "Glacier fronts and drifting floes.", icon: "snowflake" },
      { id: "research", title: "Expedition atmosphere", text: "Several nations operate research stations in the islands.", icon: "compass" },
    ],
    wildlife: ["Chinstrap penguins", "Gentoo penguins", "Fur seals", "Elephant seals", "Seabirds"],
    notes: ["Usually included in Peninsula voyages rather than sold on its own.", "Landing sites are chosen by the expedition team on the day."],
    expeditionIds: ["cruise-10n", "air-cruise"],
    tone: "light",
  },
  "south-georgia": {
    id: "south-georgia",
    region: "south-georgia",
    eyebrow: "South Georgia · Advanced expedition",
    title: "South Georgia: The Wildlife Frontier",
    lede: "Remote mountains and glaciers rising from the Southern Ocean, beaches that can host very large king penguin colonies, and a place deeply tied to the heroic age of polar exploration. This is an advanced expedition, not a sightseeing stop.",
    images: ["king-colony-sunset", "king-colony-beach", "king-egg"],
    highlights: [
      { id: "kings", title: "King penguin colonies", text: "Some of the largest penguin gatherings many travellers will ever see.", icon: "binoculars" },
      { id: "seals", title: "Fur & elephant seals", text: "Busy beaches; the expedition team manages safe distances.", icon: "waves" },
      { id: "birds", title: "Albatrosses & seabirds", text: "Sea days and coastlines rich in birdlife.", icon: "sparkles" },
      { id: "landscapes", title: "Remote landscapes", text: "Glaciers, tussock grass and alpine peaks.", icon: "mountain" },
      { id: "history", title: "Exploration heritage", text: "Historic whaling stations and explorer history, visited where permitted.", icon: "book" },
      { id: "photo", title: "Photography", text: "Colour, scale and soft southern light.", icon: "camera" },
    ],
    wildlife: ["King penguins", "Gentoo and macaroni penguins", "Fur seals", "Elephant seals", "Albatrosses"],
    notes: ["Reached on longer combination voyages with several sea days.", "Biosecurity checks apply before landings, as briefed by the operator."],
    expeditionIds: ["south-georgia", "grand"],
    tone: "dark",
  },
  falklands: {
    id: "falklands",
    region: "falkland-islands",
    eyebrow: "Falkland Islands / Malvinas",
    title: "Falkland Islands / Malvinas: Islands of Wind & Birdlife",
    lede: "Grassland, sea cliffs and pale beaches on the way to the deep south. Included on selected combination voyages, the islands are known above all for their birdlife.",
    images: ["rockhoppers-rocks", "kings-grassland", "falklands-settlement"],
    highlights: [
      { id: "birdlife", title: "Birdlife", text: "Cliffs and coasts where seabirds nest, including albatrosses.", icon: "sparkles" },
      { id: "penguins", title: "Penguin colonies", text: "Rockhopper, gentoo and Magellanic penguins on some islands.", icon: "binoculars" },
      { id: "landscapes", title: "Remote island landscapes", text: "Open grassland and wind-shaped coastlines.", icon: "mountain" },
      { id: "wildlife", title: "Wildlife", text: "Seals and seabirds along the shore.", icon: "waves" },
      { id: "cruising", title: "Expedition cruising", text: "Landings planned around wind and swell.", icon: "ship" },
    ],
    wildlife: ["Rockhopper penguins", "Gentoo penguins", "Magellanic penguins", "Black-browed albatrosses", "Seals"],
    notes: ["Shown only on combination voyages that actually include the islands."],
    expeditionIds: ["grand"],
    tone: "sand",
  },
};

export const circleFacts = [
  { label: "Latitude", value: "≈ 66°33′S" },
  { label: "Typical voyage", value: "12–14+ days" },
  { label: "Crossing", value: "Attempted, never guaranteed" },
];

export const circleFactors = ["Sea ice", "Weather", "Sea conditions", "Expedition operations"];

export const penguinCategories = [
  {
    id: "colonies",
    label: "Penguin colonies",
    title: "Colonies on the edge of the ice",
    text: "Gentoo, Adélie and chinstrap colonies on the Peninsula and South Shetlands; king penguins on South Georgia. What you see depends on the site and the time of season.",
    image: "adelie-colony" as AntarcticaImageId,
  },
  {
    id: "photography",
    label: "Photography",
    title: "Patience, light and a long lens",
    text: "Sit quietly at the edge of a permitted area and let the penguins come and go. Long daylight hours give you time to work the light.",
    image: "chinstraps" as AntarcticaImageId,
  },
  {
    id: "observation",
    label: "Wildlife observation",
    title: "Watching penguin life unfold",
    text: "Courtship and nest-building early in the season, chicks later on. Expedition guides explain behaviour as you watch.",
    image: "penguin-chick" as AntarcticaImageId,
  },
  {
    id: "landing",
    label: "Expedition landing",
    title: "Ashore by Zodiac",
    text: "Landings happen at permitted sites when conditions allow, following distance rules and the expedition team's instructions.",
    image: "ship-gentoos" as AntarcticaImageId,
  },
];

export const whaleSpecies = [
  { name: "Humpback whales", text: "Often seen feeding in Peninsula bays, typically more frequently later in the season." },
  { name: "Antarctic minke whales", text: "Small and curious; often near sea ice." },
  { name: "Orcas", text: "Occasional and unpredictable encounters." },
  { name: "Fin whales & other species", text: "Sometimes seen on sea days, especially on longer voyages." },
];

export const whaleExperiences: ExperienceItem[] = [
  { id: "watching", title: "Whale watching", text: "From the bridge or deck, with the expedition team calling sightings.", icon: "binoculars" },
  { id: "zodiac", title: "Zodiac excursions", text: "Low on the water, following strict approach guidelines.", icon: "waves" },
  { id: "cruising", title: "Scenic cruising", text: "Slow cruising through feeding grounds where conditions allow.", icon: "ship" },
  { id: "photo", title: "Photography", text: "Flukes, blows and surface behaviour.", icon: "camera" },
  { id: "marine", title: "Marine observation", text: "Seals, seabirds and the krill-rich waters that feed them.", icon: "fish" },
];

export const iceStory: { id: string; title: string; text: string; image: AntarcticaImageId }[] = [
  { id: "bergs", title: "Giant icebergs", text: "Tabular bergs calved from ice shelves, some the size of buildings.", image: "tabular-berg" },
  { id: "blue", title: "Blue ice", text: "Dense, ancient ice that absorbs red light and glows blue.", image: "berg-striped" },
  { id: "glaciers", title: "Glaciers", text: "Rivers of ice flowing down to the sea from the mountains.", image: "glacier-front" },
  { id: "mountains", title: "Snow-covered mountains", text: "Peaks plunging into still, reflective water.", image: "alpenglow" },
  { id: "shelves", title: "Ice shelves & cliffs", text: "Sheer ice cliffs where the continent meets the ocean.", image: "ice-cliffs-aerial" },
  { id: "waters", title: "Polar waters", text: "Brash ice, growlers and floes scattered across calm bays.", image: "ice-bay" },
  { id: "arches", title: "Sculpted forms", text: "Arches, caves and towers shaped by wind and water.", image: "iceberg-arch" },
];
