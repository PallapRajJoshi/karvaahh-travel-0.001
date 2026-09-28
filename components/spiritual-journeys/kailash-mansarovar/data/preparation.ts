import type { IconItem } from "./types";

export const DIFFICULTY_SCALE = ["Gentle", "Moderate", "Challenging", "High-altitude / physically demanding"];
export const DIFFICULTY_LEVEL = 3;

export const DIFFICULTY_FACTORS: IconItem[] = [
  { icon: "bus", title: "Long road journeys", text: "Many hours in vehicles on remote, sometimes rough roads." },
  { icon: "mountain", title: "High altitude", text: "Most of the journey is spent above 4,500 m." },
  { icon: "thermometer", title: "Cold conditions", text: "Cold nights throughout, and colder still on the Kora." },
  { icon: "footprints", title: "Uneven terrain", text: "Rocky, loose trail sections on the Kora." },
  { icon: "pass", title: "Steep sections", text: "Especially the climb to and descent from Dolma La." },
  { icon: "bed", title: "Limited facilities", text: "Basic lodging, toilets and washing in remote places." },
  { icon: "cloud", title: "Unpredictable weather", text: "Wind, snow and storms can arrive quickly." },
  { icon: "route", title: "Changing plans", text: "Itineraries can shift with conditions and regulations." },
];

export const ACCLIMATISATION: string[] = [
  "Gain altitude gradually and keep the planned acclimatisation days.",
  "Drink water steadily through the day.",
  "Rest properly, especially on arrival at a new altitude.",
  "Avoid heavy exertion in the first days at altitude.",
  "Consult a doctor before travel about altitude and your health.",
  "Carry any prescribed medicines, with enough to spare.",
  "Tell your operator about relevant medical conditions before departure.",
  "Follow your guide’s and operator’s instructions on pace and rest.",
  "Report symptoms early; do not push through them.",
  "Report severe symptoms immediately so that help can be arranged.",
];

export const MEDICAL_SAFETY: string[] = [
  "A medical consultation before any high-altitude travel.",
  "A gradual acclimatisation schedule, kept even when you feel well.",
  "Steady hydration and proper rest.",
  "Sun protection for skin, lips and eyes.",
  "Layered clothing suited to cold and wind.",
  "Travel insurance that covers the altitudes and activities involved.",
  "Knowing the group’s emergency procedures before leaving Kathmandu.",
  "Following guide and operator instructions at all times.",
  "Accepting weather-related changes to the plan.",
];

export const PREPARE_CAREFULLY: string[] = [
  "Existing medical conditions",
  "Previous altitude-related problems",
  "Reduced physical fitness",
  "Ongoing medication requirements",
  "Any concerns about high-altitude exposure",
];
