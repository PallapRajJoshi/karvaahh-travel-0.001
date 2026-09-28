import type { LucideIcon } from "lucide-react";
import { Compass, Flame, Landmark, MountainSnow, Users } from "lucide-react";

export type CategoryId =
  | "best-sellers"
  | "nepal-experiences"
  | "spiritual-journeys"
  | "himalayan-adventures"
  | "family-escapes";

export type Category = {
  id: CategoryId;
  label: string;
  icon: LucideIcon;
};

export const CATEGORIES: Category[] = [
  { id: "best-sellers", label: "Best Sellers", icon: Flame },
  { id: "nepal-experiences", label: "Nepal Experiences", icon: Compass },
  { id: "spiritual-journeys", label: "Spiritual Journeys", icon: Landmark },
  { id: "himalayan-adventures", label: "Himalayan Adventures", icon: MountainSnow },
  { id: "family-escapes", label: "Family Escapes", icon: Users },
];

export type Journey = {
  slug: string;
  /** Full product name. Used for the link's accessible name and image alt. */
  title: string;
  /** The headline place shown large on the card. */
  destination: string;
  /** One short line. Never a paragraph. */
  descriptor: string;
  /** Compact meta, e.g. "6N / 7D". */
  duration: string;
  /** Whole rupees, formatted at render time. */
  priceFrom: number;
  badge?: string;
  image: string;
  imageAlt: string;
  categories: CategoryId[];
};

export const JOURNEYS: Journey[] = [
  {
    slug: "nepal-himalayan-escape",
    title: "Nepal Himalayan Escape",
    destination: "Ghandruk",
    descriptor: "Mountain villages & Annapurna views",
    duration: "6N / 7D",
    priceFrom: 89000,
    badge: "Best Seller",
    image: "/images/home/ghandruk-village.jpg",
    imageAlt:
      "Stone houses of Ghandruk village with the snow-capped Annapurna range behind",
    categories: ["best-sellers", "nepal-experiences", "himalayan-adventures"],
  },
  {
    slug: "nepal-spiritual-journey",
    title: "Nepal Spiritual Journey",
    destination: "Muktinath",
    descriptor: "Sacred Himalayan pilgrimage",
    duration: "7N / 8D",
    priceFrom: 72000,
    badge: "Spiritual",
    image: "/images/home/muktinath-temple.jpg",
    imageAlt: "The Muktinath temple complex high in the Nepali Himalaya",
    categories: ["best-sellers", "nepal-experiences", "spiritual-journeys"],
  },
  {
    slug: "kathmandu-pokhara-escape",
    title: "Kathmandu & Pokhara Escape",
    destination: "Pokhara",
    descriptor: "Lakeside escapes & mountain views",
    duration: "5N / 6D",
    priceFrom: 49000,
    badge: "Popular",
    image: "/images/home/pokhara-phewa-lake.jpg",
    imageAlt: "Wooden boats on Phewa Lake in Pokhara at first light",
    categories: ["best-sellers", "nepal-experiences", "family-escapes"],
  },
  {
    slug: "grand-nepal-experience",
    title: "Grand Nepal Experience",
    destination: "Chitwan",
    descriptor: "Wildlife & jungle adventure",
    duration: "9N / 10D",
    priceFrom: 95000,
    badge: "Signature",
    image: "/images/home/chitwan-wild-life.jpg",
    imageAlt: "A one-horned rhino in the grasslands of Chitwan National Park",
    categories: [
      "best-sellers",
      "nepal-experiences",
      "spiritual-journeys",
      "family-escapes",
    ],
  },
  
];

const rupees = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0,
});

export function formatFromPrice(amount: number): string {
  return rupees.format(amount);
}
