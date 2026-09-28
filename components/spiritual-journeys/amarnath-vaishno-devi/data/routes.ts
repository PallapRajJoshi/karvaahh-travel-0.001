import type { ComparisonRow, PilgrimageRoute } from "../types";

export const AMARNATH_ROUTES: PilgrimageRoute[] = [
  {
    id: "pahalgam",
    name: "Pahalgam route",
    character: "Longer traditional pilgrimage experience",
    summary:
      "The traditional pilgrimage path, passing through wide Himalayan valleys, high lakes and passes before reaching the cave. It is usually undertaken over more than one day.",
    points: [
      "The traditional route followed by generations of pilgrims",
      "A longer trekking experience through changing Himalayan landscapes",
      "Camps and route facilities are provided under official arrangements",
      "Calls for preparation for sustained high-altitude walking",
    ],
    waypoints: ["Pahalgam", "Chandanwari", "Sheshnag", "Panchtarni", "Amarnath Cave"],
  },
  {
    id: "baltal",
    name: "Baltal route",
    character: "More compact but potentially steeper pilgrimage route",
    summary:
      "The major alternative access route. It is traditionally shorter in distance than the Pahalgam route, with steeper and physically demanding sections along the way.",
    points: [
      "A shorter trekking distance than the Pahalgam route",
      "Steeper, physically demanding sections may be encountered",
      "Route conditions can vary with weather and crowd management",
      "Current accessibility is subject to official arrangements",
    ],
    waypoints: ["Baltal", "Domail", "Brari Marg", "Sangam", "Amarnath Cave"],
  },
];

export const ROUTE_COMPARISON: ComparisonRow[] = [
  { feature: "Starting area", a: "Pahalgam", b: "Baltal" },
  { feature: "General character", a: "Longer pilgrimage route", b: "More compact route" },
  { feature: "Terrain", a: "Mountain trails", b: "Steeper mountain terrain in sections" },
  { feature: "Scenery", a: "Valleys and Himalayan landscapes", b: "Alpine mountain environment" },
  { feature: "Physical demand", a: "Significant", b: "Significant" },
  { feature: "Best for", a: "Travellers seeking a longer traditional trek", b: "Travellers seeking a shorter route" },
  { feature: "Availability", a: "Subject to official arrangements", b: "Subject to official arrangements" },
];

export const PILGRIMAGE_COMPARISON: ComparisonRow[] = [
  { feature: "Main shrine", a: "Shri Amarnath Cave Temple", b: "Shri Mata Vaishno Devi Temple" },
  { feature: "Main deity / tradition", a: "Lord Shiva", b: "Mata Vaishno Devi" },
  { feature: "Region", a: "High Himalayas", b: "Trikuta Hills" },
  { feature: "Approx. elevation", a: "3,888 m", b: "1,580 m" },
  { feature: "Main base", a: "Pahalgam / Baltal", b: "Katra" },
  { feature: "Journey character", a: "High-altitude pilgrimage", b: "Mountain pilgrimage" },
  { feature: "Registration", a: "Required under current official rules", b: "Registration / authorisation as currently applicable" },
  { feature: "Medical considerations", a: "High-altitude conditions", b: "Walking and mountain terrain" },
  { feature: "Seasonal factors", a: "Strongly seasonal", b: "Year-round, subject to conditions" },
  { feature: "Transport options", a: "Route-dependent", b: "Walking plus additional services, subject to availability" },
];
