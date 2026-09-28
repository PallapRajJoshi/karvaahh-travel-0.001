import type { IconName } from "../shared/Icon";

export interface RouteOption {
  id: string;
  label: string;
  name: string;
  icon: IconName;
  path: string[];
  summary: string;
  points: string[];
  notice: string;
}

export const ROUTES: RouteOption[] = [
  {
    id: "overland",
    label: "Route A",
    name: "Overland via the Nepal–Tibet border",
    icon: "bus",
    path: ["Kathmandu", "Nepal–Tibet border", "Saga", "Lake Mansarovar", "Darchen", "Kailash Kora", "Return"],
    summary:
      "The commonly used overland Kailash Yatra from Nepal drives north from Kathmandu to the Nepal–Tibet border, then continues across the Tibetan Plateau to Lake Mansarovar and Darchen.",
    points: [
      "Long road days across remote, high country.",
      "Altitude rises over several days, which allows for gradual acclimatisation.",
      "Road conditions, the crossing point in use and overnight stops can all vary.",
    ],
    notice:
      "The exact route, border crossing point, accommodation, road conditions and itinerary may change depending on regulations, weather and operational conditions.",
  },
  {
    id: "helicopter",
    label: "Route B",
    name: "Helicopter-assisted via Simikot and Hilsa",
    icon: "helicopter",
    path: ["Kathmandu", "Nepalgunj", "Simikot", "Hilsa", "Tibet", "Mansarovar", "Darchen", "Kora"],
    summary:
      "Where operationally available, this route flies from Kathmandu to Nepalgunj and on to Simikot in far-western Nepal, then uses a helicopter to reach Hilsa at the border before continuing by road into Tibet.",
    points: [
      "Fewer long road days on the Nepal side.",
      "Altitude is gained faster, so planned acclimatisation days matter.",
      "Mountain flights are highly weather-dependent and delays are common.",
    ],
    notice:
      "Helicopter operations and border arrangements are subject to weather, government regulations, aviation conditions and local operational availability. Schedules are never fixed in advance.",
  },
];

export const ROUTE_COMPARISON: { aspect: string; overland: string; helicopter: string }[] = [
  {
    aspect: "Getting to the border",
    overland: "Road journey north from Kathmandu",
    helicopter: "Flights to Nepalgunj and Simikot, then helicopter to Hilsa",
  },
  {
    aspect: "Pace of altitude gain",
    overland: "Gradual, over several days",
    helicopter: "Faster; acclimatisation stops are important",
  },
  {
    aspect: "Main dependencies",
    overland: "Road and border conditions, permits",
    helicopter: "Mountain weather, aviation operations, border arrangements",
  },
  {
    aspect: "Character",
    overland: "Long drives with wide views of the plateau",
    helicopter: "Remote far-western Nepal and a shorter road approach",
  },
];
