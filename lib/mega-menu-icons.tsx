// lib/mega-menu-icons.tsx
import {
  Landmark,
  Mountain,
  Compass,
  Flower2,
  Backpack,
  Globe2,
  Tent,
  Plane,
  PawPrint,
  PlaneTakeoff,
  Briefcase,
  type LucideIcon,
} from "lucide-react";

// Keyed by exact MegaMenuColumn.title — falls back to Compass if a title isn't mapped,
// so a future column added to navigation-data.ts never renders with a missing icon.
const iconByColumnTitle: Record<string, LucideIcon> = {
  "Central Nepal": Landmark,
  "Western Nepal": Mountain,
  "Himalayan Region": Compass,
  "Spiritual & Far West": Flower2,
  "Nepal Packages": Backpack,
  "India Pilgrimage": Flower2,
  "International Pilgrimage": Globe2,
  "Adventure Activities": Tent,
  "Helicopter Tours": Plane,
  "Wildlife & Nature": PawPrint,
  "Yoga & Wellness": Flower2,
  "Domestic Flights": PlaneTakeoff,
  "Educational & Corporate": Briefcase,
};

export function getColumnIcon(title: string): LucideIcon {
  return iconByColumnTitle[title] ?? Compass;
}
