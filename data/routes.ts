export interface RouteOption {
  id: string;
  gateway: string;
  steps: string[];
}

// Source: brief §14. No road distances, driving durations, flight schedules,
// trailhead names, or coordinates are invented — steps are the generic
// stages named in the brief only.
export const routeOptions: RouteOption[] = [
  {
    id: "via-dhangadhi",
    gateway: "Via Dhangadhi",
    steps: ["Dhangadhi", "Overland Journey Toward Bajhang", "Verified Trekking Trailhead", "Saipal Base Camp Region"],
  },
  {
    id: "via-nepalgunj",
    gateway: "Via Nepalgunj",
    steps: ["Nepalgunj", "Overland Journey Toward Bajhang", "Verified Trekking Trailhead", "Saipal Base Camp Region"],
  },
];
