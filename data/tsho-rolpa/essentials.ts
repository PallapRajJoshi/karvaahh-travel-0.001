import type { EssentialItem } from "./types";

export const packingChecklist: EssentialItem[] = [
  { id: "layered-clothing", label: "Warm layered clothing" },
  { id: "insulated-jacket", label: "Insulated jacket and weather protection" },
  { id: "trekking-boots", label: "Waterproof trekking boots" },
  { id: "gloves-sun", label: "Gloves, hat, and sun protection" },
  { id: "medication", label: "Personal medication and first-aid supplies" },
  { id: "water", label: "Reusable water bottle and water purification supplies" },
  { id: "poles", label: "Trekking poles" },
  { id: "power-maps", label: "Power bank and offline maps" },
  { id: "sleeping-bag", label: "Suitable sleeping bag and camping equipment when required" },
  { id: "confirmations", label: "Advance confirmation of accommodation and local support" },
  { id: "awareness", label: "Awareness of altitude, weather, and remote-area conditions" },
];

export const permitPoints: string[] = [
  "Applicable trekking and conservation-area permits must be verified before travel.",
  "Route-specific restrictions and requirements may apply.",
  "Tashi Lapcha Pass may involve additional logistical and regulatory requirements.",
  "Current fees, documentation, and guide requirements must be confirmed through official sources.",
];

export const permitDisclaimer =
  "Permit prices are not listed here, and not all routes carry identical requirements — verify with official sources before travel.";

export const safetyPoints: string[] = [
  "Gradual acclimatization as altitude increases.",
  "Awareness of altitude sickness symptoms and response.",
  "Appropriate physical preparation before departure.",
  "Local guidance from experienced trek operators.",
  "Contingency planning for weather and route changes.",
];

export const safetyDistinction =
  "The standard Tsho Rolpa Lake trek and the Tashi Lapcha Pass expedition carry different demands — the pass crossing requires technical experience, specialized equipment, and experienced support beyond what the lake trek alone requires.";
