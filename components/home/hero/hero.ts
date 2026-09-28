/**
 * types/hero.ts
 * Shared TypeScript interfaces for the Hero Section and its subcomponents.
 */

export interface DestinationImage {
  /** Path under /public, e.g. /images/destinations/pokhara.webp */
  src: string;
  /** Descriptive alt text for accessibility */
  alt: string;
  /** Short caption rendered on the collage tile (e.g. "Pokhara") */
  label: string;
}

export interface FeaturedJourney {
  eyebrow: string; // "FEATURED JOURNEY"
  title: string; // "Nepal Himalayan Escape"
  duration: string; // "9 Nights / 10 Days"
  route: string; // "Kathmandu · Pokhara · Ghandruk · Muktinath"
  ctaLabel: string; // "View Journey"
  href: string;
  images: DestinationImage[]; // exactly 4, rendered as a 2x2 collage
}

export interface TrustIndicator {
  label: string;
  icon: keyof typeof import('lucide-react');
}

export interface HeroStat {
  value: string;
  label: string;
  icon: keyof typeof import('lucide-react');
}

export interface SearchSuggestion {
  label: string;
  href: string;
}

export interface HeroCTAConfig {
  label: string;
  href: string;
}
