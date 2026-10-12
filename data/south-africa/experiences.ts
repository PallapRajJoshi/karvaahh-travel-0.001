// data/south-africa/experiences.ts
// Top experiences for the horizontal explorer. Styles drive filtering.

import type { SAImageId } from "./images";
import type { SouthAfricaTravelStyle } from "./types";

export interface SAExperience {
  id: string;
  title: string;
  where: string;
  text: string;
  image?: SAImageId;
  styles: SouthAfricaTravelStyle[];
  sectionId: string;
}

export const saExperiences: SAExperience[] = [
  { id: "table-mountain", title: "Table Mountain", where: "Cape Town", text: "Cableway or hike to the summit, weather permitting.", image: "cable-car", styles: ["city-tour", "nature", "family", "adventure", "photography", "senior-friendly"], sectionId: "cape-town" },
  { id: "peninsula", title: "Cape Peninsula", where: "Cape Town", text: "Chapman's Peak, penguins and Cape Point.", image: "cape-point-steps", styles: ["road-trip", "nature", "family", "photography", "wildlife"], sectionId: "cape-town" },
  { id: "robben", title: "Robben Island", where: "Cape Town", text: "Ferry and prison-museum tours, subject to availability.", styles: ["culture", "city-tour"], sectionId: "cape-town" },
  { id: "winelands", title: "Cape Winelands", where: "Stellenbosch & Franschhoek", text: "Estates, tastings and mountain views.", image: "vineyard-peak", styles: ["food-wine", "honeymoon", "luxury", "senior-friendly"], sectionId: "winelands" },
  { id: "big-five", title: "Big Five Safari", where: "Kruger, Sabi Sand, Pilanesberg", text: "Possible encounters with lion, leopard, elephant, rhino and buffalo.", image: "lion-pride", styles: ["safari", "wildlife", "family", "photography"], sectionId: "safari" },
  { id: "kruger", title: "Kruger Wildlife", where: "Kruger", text: "Dawn and dusk game drives in the bushveld.", image: "zebras", styles: ["safari", "wildlife", "photography", "group"], sectionId: "kruger" },
  { id: "sabi", title: "Sabi Sand Luxury Safari", where: "Sabi Sand", text: "Private-reserve lodges and tracker-led drives.", image: "leopard-portrait", styles: ["safari", "luxury", "honeymoon", "private"], sectionId: "sabi-sand" },
  { id: "garden-route", title: "Garden Route", where: "Western Cape", text: "Lagoons, forests and beaches on the open road.", image: "knysna-mist", styles: ["road-trip", "nature", "beach", "adventure"], sectionId: "garden-route" },
  { id: "blyde", title: "Blyde River Canyon", where: "Mpumalanga", text: "Three Rondavels and escarpment viewpoints.", image: "blyde-dam", styles: ["nature", "road-trip", "photography", "adventure"], sectionId: "panorama" },
  { id: "sun-city", title: "Sun City", where: "North West", text: "Resort pools and family entertainment.", image: "sun-city-palace", styles: ["family", "luxury"], sectionId: "sun-city" },
  { id: "pilanesberg", title: "Pilanesberg Safari", where: "North West", text: "Malaria-free Big Five game drives.", image: "safari-vehicle", styles: ["safari", "wildlife", "family"], sectionId: "sun-city" },
  { id: "addo", title: "Addo Safari", where: "Eastern Cape", text: "Elephant herds in a malaria-free park.", image: "elephant-herd-road", styles: ["safari", "wildlife", "family"], sectionId: "addo" },
  { id: "drakensberg", title: "Drakensberg Mountains", where: "KwaZulu-Natal", text: "Hikes, rock art and big mountain views.", image: "drakensberg-valley", styles: ["adventure", "nature", "photography"], sectionId: "drakensberg" },
  { id: "beaches", title: "Cape Town Beaches", where: "Atlantic seaboard", text: "Camps Bay, Clifton and Muizenberg.", image: "muizenberg-huts", styles: ["beach", "family", "honeymoon"], sectionId: "cape-town" },
  { id: "whales", title: "Whale Watching", where: "Hermanus & Cape coast", text: "Seasonal, land- or boat-based; never guaranteed.", image: "whale-tail", styles: ["wildlife", "nature", "photography"], sectionId: "hermanus" },
  { id: "wine-food", title: "Wine & Food", where: "Winelands, Cape Town, Durban", text: "Estate lunches, Cape Malay and Durban curry.", image: "wine-pour", styles: ["food-wine", "culture", "honeymoon"], sectionId: "winelands" },
  { id: "photo", title: "Wildlife Photography", where: "Safari regions", text: "Golden-hour drives with patient guides.", image: "leopard-walk", styles: ["photography", "safari", "wildlife"], sectionId: "photography" },
  { id: "lodges", title: "Luxury Safari Lodges", where: "Kruger & Sabi Sand", text: "Pool decks, suites and bush dining.", image: "tented-camp", styles: ["luxury", "honeymoon", "safari"], sectionId: "luxury" },
  { id: "road-trips", title: "Scenic Road Trips", where: "Nationwide", text: "Self-drive or chauffeured at your pace.", image: "plett-rocks", styles: ["road-trip", "adventure", "nature"], sectionId: "road-trips" },
  { id: "culture", title: "South African Culture", where: "Cape Town, Johannesburg, Durban", text: "Heritage, history, music and food.", image: "bo-kaap", styles: ["culture", "city-tour", "food-wine"], sectionId: "johannesburg" },
];
