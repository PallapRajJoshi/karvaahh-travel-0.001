import {
  Anchor,
  Binoculars,
  BookOpen,
  Camera,
  Compass,
  Fish,
  Heart,
  Hotel,
  Map,
  Mountain,
  Plane,
  Sailboat,
  ShieldCheck,
  Ship,
  Snowflake,
  Sparkles,
  Sun,
  Users,
  UtensilsCrossed,
  Waves,
  Wine,
  type LucideIcon,
} from "lucide-react";
import type { IconKey } from "@/data/antarctica/types";

const ICONS: Record<IconKey, LucideIcon> = {
  anchor: Anchor,
  binoculars: Binoculars,
  book: BookOpen,
  camera: Camera,
  compass: Compass,
  fish: Fish,
  glass: Wine,
  heart: Heart,
  hotel: Hotel,
  map: Map,
  mountain: Mountain,
  plane: Plane,
  sailboat: Sailboat,
  ship: Ship,
  shield: ShieldCheck,
  snowflake: Snowflake,
  sparkles: Sparkles,
  sun: Sun,
  users: Users,
  utensils: UtensilsCrossed,
  waves: Waves,
};

/** Data-driven icon: data files name an icon by key, never import components. */
export default function PolarIcon({ name = "snowflake", size = 20 }: { name?: IconKey; size?: number }) {
  const Icon = ICONS[name];
  return <Icon size={size} aria-hidden="true" />;
}
