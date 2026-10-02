export interface LogisticsItem {
  id: string;
  title: string;
  description: string;
  icon: "tent" | "droplet" | "users" | "wifi-off" | "clock" | "map-pin";
}

// Source: brief §15 "Accommodation and Expedition Logistics". No hotel
// names, campsite facilities, or availability are invented.
export const logisticsItems: LogisticsItem[] = [
  {
    id: "accommodation",
    title: "Accommodation in Accessible Areas",
    description: "Basic accommodation options in accessible towns and settlements, subject to availability.",
    icon: "map-pin",
  },
  {
    id: "camping",
    title: "Camping Arrangements",
    description: "Camping arrangements during remote trekking sections where permitted.",
    icon: "tent",
  },
  {
    id: "supplies",
    title: "Food, Water & Supply Planning",
    description: "Food, drinking water, and supply planning for the length of the expedition.",
    icon: "droplet",
  },
  {
    id: "support",
    title: "Porter, Guide & Support Arrangements",
    description: "Porter, guide, and support arrangements where available and appropriate.",
    icon: "users",
  },
  {
    id: "communication",
    title: "Communication Limitations",
    description: "Communication limitations should be expected in remote areas.",
    icon: "wifi-off",
  },
  {
    id: "planning",
    title: "Advance Planning",
    description: "Advance planning for transport, equipment, and emergency contingencies.",
    icon: "clock",
  },
];
