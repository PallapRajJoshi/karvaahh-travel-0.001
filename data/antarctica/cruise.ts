// data/antarctica/cruise.ts
// The expedition-vessel experience and cabin categories. Facilities differ by
// ship and operator, so everything here is phrased as typical and is meant to
// be replaced per vessel once a departure is confirmed.

import type { CabinCategory, ExperienceItem } from "./types";

export const VESSEL_NOTE =
  "Facilities, cabin layouts and activities vary by vessel and operator. We confirm exactly what your ship offers before you book.";

export const vesselExperience: ExperienceItem[] = [
  { id: "ship", title: "The expedition ship", text: "Ice-strengthened vessels sized for landings, usually far smaller than conventional cruise ships.", image: "ship-gentoos", icon: "ship" },
  { id: "deck", title: "Observation decks", text: "Open decks and bridge visits (where permitted) for icebergs, seabirds and whales.", image: "ship-deck", icon: "binoculars" },
  { id: "zodiac", title: "Zodiac operations", text: "Small inflatable boats carry you ashore and cruise among ice, weather permitting.", image: "zodiac-towers", icon: "waves" },
  { id: "landings", title: "Shore landings", text: "Guided landings at permitted sites, with visitor numbers managed under polar tourism guidelines.", image: "landing-view", icon: "compass" },
  { id: "briefings", title: "Briefings & lectures", text: "Daily briefings and talks on wildlife, ice and history, typically led by the expedition team.", icon: "book" },
  { id: "naturalists", title: "Expedition team", text: "Guides and naturalists who lead landings and interpret what you see, where the operator provides them.", icon: "users" },
  { id: "lounge", title: "Lounge & library", text: "Shared spaces for sea days, often with panoramic windows.", icon: "glass" },
  { id: "dining", title: "Dining", text: "Restaurant dining on board; style and menus vary by vessel.", icon: "utensils" },
];

export const cabinCategories: CabinCategory[] = [
  {
    id: "standard",
    name: "Standard",
    summary: "Comfortable, practical cabins, often with a porthole or window.",
    typical: ["Twin or triple configurations", "Private bathroom on most expedition ships", "Window or porthole on many vessels"],
  },
  {
    id: "superior",
    name: "Superior",
    summary: "More space and usually a larger window, often on higher decks.",
    typical: ["Larger floor area", "Picture window", "Seating area on some ships"],
  },
  {
    id: "balcony",
    name: "Balcony",
    summary: "A private balcony for icebergs and wildlife from your cabin.",
    typical: ["Private balcony", "Double or twin beds", "Higher deck positions"],
  },
  {
    id: "suite",
    name: "Suite",
    summary: "Separate living space, more storage and premium amenities.",
    typical: ["Separate lounge area", "Balcony on many ships", "Premium amenities"],
  },
  {
    id: "luxury",
    name: "Luxury Expedition",
    summary: "Top suites on premium expedition vessels.",
    typical: ["Largest suites on board", "Butler or enhanced service on some vessels", "Inclusions vary by operator"],
  },
];

export const cabinById = (id: string) => cabinCategories.find((c) => c.id === id);
