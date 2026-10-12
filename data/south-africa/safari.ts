// data/south-africa/safari.ts
// Big Five, safari-destination comparison and wildlife photography subjects.
// All wildlife copy describes possible encounters; nothing is guaranteed.

import type { SAImageId } from "./images";

export const SIGHTINGS_NOTE = "Wildlife sightings are naturally unpredictable. No sighting, including any of the Big Five, can be guaranteed.";

export const bigFive: { id: string; name: string; image: SAImageId; text: string }[] = [
  { id: "lion", name: "Lion", image: "lion-portrait", text: "Often resting by day; drives at dawn and dusk give the best chances." },
  { id: "leopard", name: "Leopard", image: "leopard-rock", text: "Elusive and solitary; private reserves are known for sightings, never guaranteed." },
  { id: "elephant", name: "Elephant", image: "elephant-tusks", text: "Frequently seen in Kruger and Addo, especially near water." },
  { id: "rhino", name: "Rhino", image: "rhino-mother", text: "Locations are often kept discreet to protect them." },
  { id: "buffalo", name: "Buffalo", image: "buffalo-close", text: "Herds and solitary old bulls, often near water and grassland." },
];

export type SafariFilter = "big-five" | "luxury" | "family" | "photography" | "private" | "group" | "short" | "extended";

export const safariFilters: { id: SafariFilter; label: string }[] = [
  { id: "big-five", label: "Big Five" },
  { id: "luxury", label: "Luxury" },
  { id: "family", label: "Family" },
  { id: "photography", label: "Photography" },
  { id: "private", label: "Private" },
  { id: "group", label: "Group" },
  { id: "short", label: "Short Safari" },
  { id: "extended", label: "Extended Safari" },
];

export interface SafariDestination {
  id: string;
  name: string;
  destinationId: string;
  region: string;
  image: SAImageId;
  safariType: string;
  accommodation: string;
  gameDrives: string;
  wildlifeFocus: string;
  duration: string;
  malaria: string;
  tags: SafariFilter[];
  sectionId: string;
  active: boolean;
}

export const safariDestinations: SafariDestination[] = [
  {
    id: "kruger", name: "Kruger National Park", destinationId: "kruger", region: "Mpumalanga & Limpopo", image: "elephant-road",
    safariType: "National park: rest camps, lodges and private concessions",
    accommodation: "Rest camps to luxury lodges", gameDrives: "Guided or self-drive; morning, evening and night drives where permitted",
    wildlifeFocus: "Big Five, wild dog, extensive birdlife", duration: "3–4 nights", malaria: "Malaria area (consult your doctor)",
    tags: ["big-five", "family", "photography", "group", "private", "extended", "luxury"], sectionId: "kruger", active: true,
  },
  {
    id: "sabi-sand", name: "Sabi Sand", destinationId: "sabi-sand", region: "Mpumalanga", image: "leopard-tree",
    safariType: "Private reserve, lodge-based", accommodation: "Luxury and ultra-luxury lodges",
    gameDrives: "Lodge vehicles with ranger and tracker; off-road where permitted", wildlifeFocus: "Big Five; known for leopard",
    duration: "2–4 nights", malaria: "Malaria area (consult your doctor)",
    tags: ["big-five", "luxury", "photography", "private", "short", "extended"], sectionId: "sabi-sand", active: true,
  },
  {
    id: "pilanesberg", name: "Pilanesberg", destinationId: "pilanesberg", region: "North West", image: "safari-vehicle",
    safariType: "Big Five reserve near Johannesburg", accommodation: "Lodges and resort hotels",
    gameDrives: "Guided drives or self-drive", wildlifeFocus: "Big Five in a volcanic crater landscape",
    duration: "1–2 nights", malaria: "Malaria-free",
    tags: ["big-five", "family", "group", "short"], sectionId: "sun-city", active: true,
  },
  {
    id: "addo", name: "Addo Elephant National Park", destinationId: "addo", region: "Eastern Cape", image: "elephant-waterhole",
    safariType: "National park near the coast", accommodation: "Rest camp and lodges",
    gameDrives: "Guided or self-drive", wildlifeFocus: "Elephants; several other large mammals present",
    duration: "1–2 nights", malaria: "Malaria-free",
    tags: ["family", "group", "short", "photography"], sectionId: "addo", active: true,
  },
  {
    id: "kgalagadi", name: "Kgalagadi Transfrontier Park", destinationId: "kgalagadi", region: "Northern Cape", image: "kalahari-vehicle",
    safariType: "Remote desert park", accommodation: "Park camps and wilderness camps",
    gameDrives: "Mainly self-drive; limited guided options", wildlifeFocus: "Desert predators, raptors, gemsbok",
    duration: "3–4 nights", malaria: "Generally malaria-free (check current advice)",
    tags: ["photography", "extended"], sectionId: "northern-cape", active: true,
  },
];

export const photographySubjects: { id: string; name: string; image?: SAImageId; where: string }[] = [
  { id: "lion", name: "Lions", image: "lion-golden", where: "Kruger, Sabi Sand, Pilanesberg, Kgalagadi" },
  { id: "leopard", name: "Leopards", image: "leopard-portrait", where: "Sabi Sand, Kruger" },
  { id: "elephant", name: "Elephants", image: "elephant-approach", where: "Kruger, Addo, Pilanesberg" },
  { id: "rhino", name: "Rhinos", image: "rhinos-bush", where: "Kruger, Pilanesberg, private reserves" },
  { id: "buffalo", name: "Buffalo", image: "buffalo-oxpecker", where: "Kruger, Sabi Sand" },
  { id: "giraffe", name: "Giraffes", image: "giraffe-dry", where: "Kruger, Pilanesberg" },
  { id: "zebra", name: "Zebras", image: "zebras", where: "Kruger, Pilanesberg, Addo" },
  { id: "birds", name: "Birds", image: "buffalo-oxpecker", where: "Kruger in summer, across the country" },
  { id: "marine", name: "Marine wildlife", image: "whale-breach", where: "Hermanus, Cape coast, Plettenberg Bay" },
];

export const photographyPrinciples = [
  "Never ask a guide to approach closer than is safe or permitted.",
  "No calling, baiting or flash on animals.",
  "Stay inside the vehicle unless the guide says otherwise.",
  "Keep sensitive locations (especially rhino) off social media geotags.",
];
