// data/australia/seasons.ts
// Seasonal guidance. Australia's seasons are the reverse of Nepal's and
// India's, and conditions differ sharply between the temperate south and the
// tropical north, so there is no single best month for the whole country.
// Levels are general patterns that vary by year.

import type { SeasonId } from "./destinations";

export type SeasonLevel = "great" | "good" | "limited";
export type ClimateZone = "south" | "tropical-qld" | "west" | "top-end" | "red-centre" | "tasmania";

export const climateZones: { id: ClimateZone; label: string; places: string; destinations: string[] }[] = [
  { id: "south", label: "Sydney, Melbourne & the south", places: "Sydney, Melbourne, Adelaide, Gold Coast, Great Ocean Road", destinations: ["sydney", "melbourne", "adelaide", "gold-coast"] },
  { id: "tropical-qld", label: "Tropical Queensland", places: "Cairns, Port Douglas, Whitsundays, Great Barrier Reef", destinations: ["cairns", "great-barrier-reef", "whitsundays"] },
  { id: "west", label: "Western Australia", places: "Perth, Rottnest, Margaret River (Broome & Ningaloo differ)", destinations: ["perth", "margaret-river", "ningaloo-reef"] },
  { id: "top-end", label: "Northern Territory: Top End", places: "Darwin, Kakadu, Litchfield, Katherine", destinations: ["darwin", "kakadu"] },
  { id: "red-centre", label: "Outback: Red Centre", places: "Uluru, Kata Tjuta, Kings Canyon, Alice Springs", destinations: ["uluru", "alice-springs"] },
  { id: "tasmania", label: "Tasmania", places: "Hobart, Freycinet, Cradle Mountain", destinations: ["hobart", "cradle-mountain"] },
];

export interface SeasonGuide {
  id: SeasonId;
  label: string;
  months: string;
  /** What the same months feel like at home, for travellers from Nepal & India. */
  home: string;
  text: string;
  zones: Record<ClimateZone, { level: SeasonLevel; text: string }>;
}

export const australiaSeasons: SeasonGuide[] = [
  {
    id: "summer", label: "Summer", months: "December – February", home: "Winter in Nepal and North India",
    text: "Long, hot days in the south and Tasmania; wet season and high humidity in the tropical north.",
    zones: {
      south: { level: "great", text: "Warm to hot beach weather. School-holiday peak, so book early." },
      "tropical-qld": { level: "limited", text: "Wet season heat, humidity and heavy rain, plus stinger season. Reef trips run, but conditions vary." },
      west: { level: "good", text: "Hot, dry and sunny around Perth; the far north is in its wet season." },
      "top-end": { level: "limited", text: "Wet season storms; some roads and park sites close." },
      "red-centre": { level: "limited", text: "Extreme heat. Plan early-morning activities; some walks close on hot days." },
      tasmania: { level: "great", text: "Peak season: long days and mild weather, ideal for walking." },
    },
  },
  {
    id: "autumn", label: "Autumn", months: "March – May", home: "Spring and early summer at home",
    text: "Settled, mild weather in the south, the dry season arriving up north and comfortable days in the Red Centre.",
    zones: {
      south: { level: "great", text: "Mild and settled with fewer crowds; vineyard harvest season." },
      "tropical-qld": { level: "good", text: "The wet eases through April and May; stinger season usually continues into May." },
      west: { level: "great", text: "Mild in the south-west. Ningaloo's whale shark season usually begins." },
      "top-end": { level: "good", text: "The dry arrives around May; waterfalls are full and roads reopen gradually." },
      "red-centre": { level: "great", text: "Warm days and cool nights." },
      tasmania: { level: "good", text: "Crisp and colourful, with colder nights." },
    },
  },
  {
    id: "winter", label: "Winter", months: "June – August", home: "Monsoon season at home",
    text: "The best time for the tropics and the outback; cool and sometimes wet in the south; cold in Tasmania.",
    zones: {
      south: { level: "good", text: "Cool, sometimes wet; mild in Sydney. Humpback whales migrate along the coast (roughly June–November)." },
      "tropical-qld": { level: "great", text: "Dry season: warm, sunny and less humid; generally outside stinger season." },
      west: { level: "good", text: "Cool and wetter around Perth; ideal in Broome and the north." },
      "top-end": { level: "great", text: "Peak dry season, the best time for Kakadu and Litchfield." },
      "red-centre": { level: "great", text: "Warm, clear days and very cold desert nights." },
      tasmania: { level: "limited", text: "Cold, short days and snow in the highlands; cosy and quiet." },
    },
  },
  {
    id: "spring", label: "Spring", months: "September – November", home: "Dashain, Tihar and Diwali season",
    text: "Warming days, wildflowers and gardens in bloom; heat and humidity begin to build in the north.",
    zones: {
      south: { level: "great", text: "Warming days, gardens in bloom and outdoor events." },
      "tropical-qld": { level: "good", text: "Mostly dry and warm; humidity builds and stinger season usually starts around November." },
      west: { level: "great", text: "Wildflower season across much of the state; mild in Perth." },
      "top-end": { level: "good", text: "The 'build-up': rising heat and humidity before the wet." },
      "red-centre": { level: "good", text: "Comfortable early in spring, getting hot by November." },
      tasmania: { level: "good", text: "Fresh, green and increasingly mild." },
    },
  },
];

/** Marine and wildlife seasons: approximate, and they shift from year to year. */
export const marineCalendar = [
  { title: "Marine stinger season", months: "Roughly Nov – May", text: "Tropical Queensland waters. Swim in stinger nets or wear a stinger suit." },
  { title: "Humpback whale migration", months: "Roughly Jun – Nov", text: "Along the east and west coasts; cruises operate in season." },
  { title: "Ningaloo whale sharks", months: "Roughly Mar – Jul", text: "Licensed tours from Exmouth and Coral Bay; sightings not guaranteed." },
  { title: "Turtle nesting & hatching", months: "Roughly Nov – Mar", text: "On some Queensland beaches, with ranger-guided viewing in places." },
];

export const SEASON_NOTE =
  "There is no single best month for all of Australia. Weather, marine conditions and park access vary by region and year, so we check conditions for your dates.";
