import type { ReactNode } from "react";

/** Colour family of the built-in mountain illustration used when a photo is missing. */
export type ArtTone = "dawn" | "ice" | "dusk" | "gold" | "forest" | "night";

export type IconName =
  | "compass"
  | "route"
  | "layers"
  | "eye"
  | "person"
  | "flag"
  | "mountain"
  | "shield"
  | "heart"
  | "flex"
  | "search"
  | "leaf"
  | "arrow"
  | "star";

/** One entry of the image manifest (lib/about/images.ts). */
export interface ImageSpec {
  /** File name inside public/images/about/ */
  file: string;
  /** Real alt text, used when the photo exists and is not purely decorative. */
  alt: string;
  /** CSS object-position, so the subject survives responsive cropping. */
  focal?: string;
  /** Illustration palette used until the photo is supplied. */
  art: ArtTone;
  /** Changes the ridge shapes of the illustration so tiles don't look identical. */
  seed: number;
  /** Art-direction note shown in the README manifest. */
  note: string;
}

export interface ResolvedImage {
  src: string;
  alt: string;
  focal: string;
}

export interface ArtRef {
  tone: ArtTone;
  seed: number;
}

export interface TimelineStep {
  id: string;
  title: string;
  text: string;
}

export interface Pillar {
  id: string;
  title: string;
  text: string;
}

export interface Feature {
  id: string;
  title: string;
  text: string;
  icon: IconName;
}

export interface JourneyStep {
  id: string;
  title: string;
  text: string;
}

export interface TrustItem {
  id: string;
  /** "figure" renders a large number; "statement" renders a large word. */
  kind: "figure" | "statement";
  value: string;
  label: string;
}

export interface ValueItem {
  id: string;
  title: string;
  text: string;
  icon: IconName;
}

export interface ExperienceCard {
  id: string;
  title: string;
  category: string;
  text: string;
  href: string;
  /** Link affordance, e.g. "Explore" or "Plan this". */
  cta: string;
  imageKey: ExperienceImageKey;
  /** Column span on the 6-column desktop grid (2, 3 or 4). */
  span: 2 | 3 | 4;
}

export type ExperienceImageKey =
  | "exp-nepal"
  | "exp-india"
  | "exp-international"
  | "exp-spiritual"
  | "exp-adventure"
  | "exp-trekking"
  | "exp-family"
  | "exp-honeymoon"
  | "exp-corporate"
  | "exp-educational"
  | "exp-wedding"
  | "exp-wellness"
  | "exp-luxury"
  | "exp-custom";

export interface Region {
  id: string;
  label: string;
  tagline: string;
  places: string[];
  /** Appends "and more" after the last place. */
  andMore: boolean;
  imageKey: "region-nepal" | "region-india" | "region-asia" | "region-europe" | "region-international";
  ctaLabel: string;
  ctaHref: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  /** Path under /public, e.g. "/images/team/jane.jpg". */
  photo?: string;
  email?: string;
  linkedin?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  destination: string;
  quote: string;
  /** 1-5 */
  rating: number;
  photo?: string;
}

export interface HeadingCopy {
  eyebrow: string;
  title: ReactNode;
  sub?: string;
}
