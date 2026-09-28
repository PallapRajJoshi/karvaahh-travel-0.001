import type { Season } from "../types";

export const seasons: Season[] = [
  {
    id: "spring",
    name: "Spring",
    months: "March to May",
    monthNumbers: [3, 4, 5],
    description:
      "Rhododendrons bloom across the hills, days are warm and the high trails open up. A favourite season for trekking and mountain views.",
    bestFor: ["Trekking", "Rhododendron forests", "Muktinath"],
    consider: "Haze can soften distant views by late May.",
    icon: "lotus",
    tone: "spring",
  },
  {
    id: "monsoon",
    name: "Summer / Monsoon",
    months: "June to August",
    monthNumbers: [6, 7, 8],
    description:
      "The valleys turn lush and green, and rain-shadow Upper Mustang comes into its own. Temples are quieter, and Janai Purnima draws pilgrims to Gosainkunda.",
    bestFor: ["Upper Mustang", "Lumbini & Kathmandu", "Green landscapes"],
    consider: "Rain, leeches and landslides can delay roads and flights. Build in buffer days.",
    icon: "lake",
    tone: "monsoon",
  },
  {
    id: "autumn",
    name: "Autumn",
    months: "September to November",
    monthNumbers: [9, 10, 11],
    description:
      "Rain-washed skies, crystal-clear peaks and the great festivals of Dashain and Tihar. Nepal’s peak season for good reason.",
    bestFor: ["Clear Himalayan views", "Festivals", "High passes"],
    consider: "Busiest season, so book flights and lodges early.",
    icon: "mountain",
    tone: "autumn",
  },
  {
    id: "winter",
    name: "Winter",
    months: "December to February",
    monthNumbers: [12, 1, 2],
    description:
      "Crisp, sunny days and quiet heritage sites. Ideal for Kathmandu, Pokhara, Lumbini and lower-altitude treks with sharp mountain views.",
    bestFor: ["Heritage tours", "Lumbini", "Short, low treks"],
    consider: "Cold nights and snow on high passes; some high routes close.",
    icon: "sunrise",
    tone: "winter",
  },
];

export const monthInitials = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"] as const;
export const monthNames = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
] as const;
