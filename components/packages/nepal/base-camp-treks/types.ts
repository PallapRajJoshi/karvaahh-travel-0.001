export interface ImageAsset {
  src: string;
  alt: string;
  /** CSS object-position, e.g. "40% 30%". */
  focus?: string;
}

export type TrekCategory = "classic" | "remote" | "moderate" | "challenging" | "high-altitude";

export interface Trek {
  id: string;
  name: string;
  region: string;
  summary: string;
  tags: string[];
  duration: string;
  difficulty: string;
  maxAltitude: string;
  /** Clarifies which point the altitude refers to. */
  altitudeNote?: string;
  experience: string;
  idealFor: string;
  categories: TrekCategory[];
  /** Dedicated Karvaahh page for this trek, when one exists. */
  href?: string;
  /** Destination text for the pre-filled enquiry when there is no dedicated page. */
  enquiryLabel?: string;
  related?: { label: string; href: string };
  image: ImageAsset;
}

export interface TrekFilter {
  id: "all" | TrekCategory;
  label: string;
}

export interface Faq {
  q: string;
  a: string;
}
