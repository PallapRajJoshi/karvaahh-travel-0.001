// data/australia/wildlife.ts
// Australian wildlife. Places are where an animal is commonly seen or cared
// for; wild sightings are never guaranteed. Encounters favour observation
// from a distance and accredited sanctuaries.

import type { AUImageId } from "./images";

export interface Animal {
  id: string;
  name: string;
  image?: AUImageId;
  text: string;
  /** Where travellers commonly see it. */
  where: string[];
  /** Destination ids that open the matching packages. */
  destinations: string[];
  kind: "land" | "marine";
}

export const animals: Animal[] = [
  { id: "kangaroo", name: "Kangaroos", image: "kangaroo", kind: "land", text: "Often seen grazing at dawn and dusk in open country and national parks.", where: ["Kangaroo Island", "Wildlife sanctuaries", "Rural roadsides at dusk"], destinations: ["kangaroo-island"] },
  { id: "koala", name: "Koalas", image: "koala", kind: "land", text: "Sleepy and hard to spot in the wild; sanctuaries are the reliable way to see them.", where: ["Phillip Island Koala Reserve", "Brisbane sanctuaries", "Great Ocean Road (wild, not guaranteed)"], destinations: ["phillip-island", "brisbane", "great-ocean-road"] },
  { id: "wallaby", name: "Wallabies", image: "wallaby", kind: "land", text: "Smaller cousins of the kangaroo, including the yellow-footed rock-wallaby of the Flinders Ranges.", where: ["Tasmania", "Flinders Ranges", "Queensland parks"], destinations: ["flinders-ranges", "cradle-mountain"] },
  { id: "wombat", name: "Wombats", image: "wombat", kind: "land", text: "Sturdy burrowers, often seen grazing around Cradle Mountain in the late afternoon.", where: ["Cradle Mountain", "Tasmanian reserves", "Wildlife parks"], destinations: ["cradle-mountain"] },
  { id: "quokka", name: "Quokkas", image: "quokka", kind: "land", text: "The famously photogenic marsupial of Rottnest Island. Look, but never touch or feed.", where: ["Rottnest Island"], destinations: ["rottnest-island"] },
  { id: "devil", name: "Tasmanian devils", image: "tas-devil", kind: "land", text: "Endangered in the wild and rarely seen; conservation sanctuaries offer the best chance.", where: ["Tasmanian conservation sanctuaries"], destinations: ["hobart", "cradle-mountain"] },
  { id: "penguin", name: "Little penguins", image: "penguins", kind: "marine", text: "The world's smallest penguin, returning to shore at dusk.", where: ["Phillip Island Penguin Parade", "Parts of Tasmania"], destinations: ["phillip-island"] },
  { id: "dolphin", name: "Dolphins", image: "dolphins", kind: "marine", text: "Seen from cruises and coastal headlands in many places.", where: ["Byron Bay", "Western Australian coast", "Cruise departures"], destinations: ["byron-bay"] },
  { id: "marine", name: "Marine wildlife", image: "turtle", kind: "marine", text: "Turtles, reef fish, sea lions, seasonal whale sharks and migrating whales.", where: ["Great Barrier Reef", "Ningaloo Reef", "Seal Bay, Kangaroo Island"], destinations: ["great-barrier-reef", "ningaloo-reef", "kangaroo-island"] },
];

export const wildlifeDestinations = [
  { label: "Phillip Island", destination: "phillip-island" },
  { label: "Kangaroo Island", destination: "kangaroo-island" },
  { label: "Rottnest Island", destination: "rottnest-island" },
  { label: "Tasmania", destination: "cradle-mountain" },
  { label: "Great Barrier Reef", destination: "great-barrier-reef" },
  { label: "Ningaloo Reef", destination: "ningaloo-reef" },
];

export const responsibleWildlife = [
  { title: "Observe, don't disturb", text: "Watch from a distance and let animals behave naturally." },
  { title: "Never feed wildlife", text: "Human food harms animals; on Rottnest, touching or feeding quokkas is not allowed." },
  { title: "Choose ethical operators", text: "We prefer accredited sanctuaries and licensed marine operators." },
  { title: "Drive with care", text: "Animals are most active on roads at dawn and dusk, especially in rural areas." },
];

export const WILDLIFE_NOTE = "Wildlife is wild. Sightings depend on season, weather and the animals themselves, and are never guaranteed.";
