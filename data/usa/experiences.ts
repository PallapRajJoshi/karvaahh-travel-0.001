// data/usa/experiences.ts
// "Top USA Experiences" carousel. Each card can point to a destination,
// a region or a travel style, which the page turns into a filter.

import type { USAImageId } from "./images";
import type { USRegion } from "./regions";
import type { TravelStyle } from "./travel-styles";

export interface USAExperience {
  id: string;
  title: string;
  place: string;
  text: string;
  image?: USAImageId;
  /** Filter applied by "See packages". */
  filter: { region?: USRegion; destination?: string; style?: TravelStyle };
}

export const usaExperiences: USAExperience[] = [
  { id: "skyline", title: "New York Skyline", place: "New York", text: "Sunset from an observation deck or the Brooklyn waterfront.", image: "nyc-skyline", filter: { destination: "new-york" } },
  { id: "liberty", title: "Statue of Liberty", place: "New York Harbor", text: "Ferry views of Lady Liberty and the harbour (tickets on request).", image: "liberty", filter: { destination: "new-york" } },
  { id: "broadway", title: "Broadway", place: "New York", text: "A show in the Theater District, booked subject to availability.", image: "times-square", filter: { destination: "new-york" } },
  { id: "niagara", title: "Niagara Falls", place: "New York State", text: "Mist, spray and the thunder of the falls from the U.S. side.", image: "niagara-aerial", filter: { destination: "niagara-falls" } },
  { id: "dc", title: "Washington DC Monuments", place: "National Mall", text: "Memorials, monuments and free Smithsonian museums.", image: "washington-monument", filter: { destination: "washington-dc" } },
  { id: "orlando", title: "Orlando Theme Parks", place: "Florida", text: "World-famous resorts; admission quoted separately.", image: "orlando", filter: { style: "theme-parks" } },
  { id: "miami", title: "Miami Beaches", place: "Florida", text: "South Beach sand, Art Deco and ocean breezes.", image: "miami-beach", filter: { destination: "miami" } },
  { id: "vegas", title: "Las Vegas Entertainment", place: "Nevada", text: "Shows, resorts and fountains on the Strip.", image: "las-vegas", filter: { destination: "las-vegas" } },
  { id: "gc", title: "Grand Canyon", place: "Arizona", text: "Rim-side sunrise over a mile of layered rock.", image: "grand-canyon", filter: { destination: "grand-canyon" } },
  { id: "hollywood", title: "Hollywood", place: "Los Angeles", text: "The sign, the Walk of Fame and the studios.", image: "hollywood", filter: { destination: "los-angeles" } },
  { id: "golden-gate", title: "Golden Gate Bridge", place: "San Francisco", text: "Walk, cycle or cruise beneath the famous span.", image: "golden-gate-sunset", filter: { destination: "san-francisco" } },
  { id: "disneyland", title: "Disneyland Resort", place: "Anaheim, California", text: "Southern California's theme-park classic; tickets on request.", filter: { style: "theme-parks", region: "west-coast" } },
  { id: "yosemite", title: "Yosemite", place: "California", text: "Granite giants and waterfalls in the Sierra Nevada.", image: "yosemite", filter: { destination: "yosemite" } },
  { id: "yellowstone", title: "Yellowstone", place: "Wyoming", text: "Geysers, hot springs and roaming bison.", image: "yellowstone-bison", filter: { destination: "yellowstone" } },
  { id: "hawaii", title: "Hawaii Beaches", place: "Hawaii", text: "Warm water, island resorts and volcanic coastlines.", image: "hawaii-beach", filter: { region: "hawaii" } },
  { id: "aurora", title: "Alaska Northern Lights", place: "Fairbanks", text: "Aurora season in the dark months; never guaranteed.", image: "aurora", filter: { destination: "fairbanks" } },
  { id: "parks-road", title: "National Park Road Trips", place: "The American West", text: "Canyon to canyon on open desert roads.", image: "monument-road", filter: { style: "national-parks" } },
  { id: "shopping", title: "Luxury Shopping", place: "New York, Las Vegas, Los Angeles", text: "Fifth Avenue, Rodeo Drive and outlet days.", image: "nyc-empire", filter: { style: "shopping" } },
  { id: "food", title: "American Food Experiences", place: "Across the USA", text: "Diners, barbecue, Creole kitchens and food halls.", image: "diner", filter: { style: "city-break" } },
  { id: "road", title: "USA Road Trips", place: "Coast to coast", text: "Self-drive, with a chauffeur or as part of a group.", image: "desert-highway", filter: { style: "road-trip" } },
];
