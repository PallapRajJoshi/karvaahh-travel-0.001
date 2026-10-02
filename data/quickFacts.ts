export interface QuickFact {
  id: string;
  label: string;
  value: string;
  icon: "mountain" | "map-pin" | "compass" | "route" | "tent" | "calendar" | "users" | "clock";
}

// Source: brief §6 "Saipal Base Camp at a Glance". No figures invented beyond
// what the brief specified.
export const quickFacts: QuickFact[] = [
  { id: "destination", label: "Destination", value: "Saipal Base Camp", icon: "map-pin" },
  { id: "district", label: "District", value: "Bajhang", icon: "compass" },
  { id: "province", label: "Province", value: "Sudurpashchim Province, Nepal", icon: "map-pin" },
  { id: "mountain", label: "Featured Mountain", value: "Mount Saipal", icon: "mountain" },
  { id: "elevation", label: "Mountain Elevation", value: "7,031 m", icon: "mountain" },
  {
    id: "type",
    label: "Destination Type",
    value: "Remote Trekking, Wilderness, Camping, Mountain Photography",
    icon: "tent",
  },
  { id: "style", label: "Trek Style", value: "Challenging, multi-day Himalayan expedition", icon: "route" },
  {
    id: "access",
    label: "Starting Access",
    value: "Dhangadhi or Nepalgunj, followed by overland travel to Bajhang",
    icon: "compass",
  },
  {
    id: "nearby",
    label: "Nearby Destinations",
    value: "Khaptad National Park, Surma Sarovar, Api-Saipal Himalayan region",
    icon: "map-pin",
  },
  {
    id: "season",
    label: "Recommended Seasons",
    value: "Spring and autumn, subject to weather and trail conditions",
    icon: "calendar",
  },
];
