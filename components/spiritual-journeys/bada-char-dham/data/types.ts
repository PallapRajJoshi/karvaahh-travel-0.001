/**
 * Bada Char Dham Yatra — content model.
 * Every piece of copy on the page is typed here so editors can change content
 * without touching JSX. Package/commercial data lives in badaCharDhamPackage.ts.
 */

export type Direction = "north" | "west" | "east" | "south";

export interface ImageAsset {
  /** Public path, e.g. /images/spiritual-journeys/bada-char-dham/badrinath-dham-uttarakhand.jpg */
  src: string;
  /** Natural, descriptive alt text. No keyword lists. */
  alt: string;
  /**
   * Set to true once the file actually exists in /public.
   * While false, a designed placeholder renders instead of a broken image.
   */
  available: boolean;
  /** Optional photographer / licence credit shown in the gallery caption. */
  credit?: string;
}

export interface LabelValue {
  label: string;
  value: string;
}

export interface TitledText {
  title: string;
  text: string;
}

export interface TitledList {
  title: string;
  items: string[];
}

export interface Hero {
  eyebrow: string;
  title: string;
  subtitle: string;
  copy: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
}

export interface DirectionCard {
  direction: Direction;
  dhamId: string;
  name: string;
  state: string;
  /** The landscape this direction is known for: Himalayas, Arabian Sea… */
  environment: string;
}

export interface Dham {
  id: string; // also used as the in-page anchor
  direction: Direction;
  directionLabel: string;
  name: string;
  temple: string;
  state: string;
  heading: string; // H2
  lede: string;
  paragraphs: string[];
  circuitNote: string; // the brief's mandated clarifying sentence
  facts: LabelValue[];
  environment: { name: string; text: string };
  gateways: LabelValue[];
  goodToKnow: string[];
  image: ImageAsset;
  secondaryImage: ImageAsset;
}

export interface ComparisonRow {
  dham: string;
  dhamId: string;
  state: string;
  tradition: string;
  direction: string;
  setting: string;
}

export interface TimelineStage {
  title: string;
  text: string;
  dhamId?: string;
}

export interface EtiquetteCard {
  dhamId: string;
  place: string;
  items: string[];
}

export interface RegionSeason {
  direction: Direction;
  title: string;
  place: string;
  text: string;
}

export interface Festival {
  dhamId: string;
  place: string;
  name: string;
  text: string;
}

export interface PackingGroup {
  id: string;
  title: string;
  items: string[];
}

export interface GalleryImage extends ImageAsset {
  id: string;
  group: "Badrinath" | "Dwarka" | "Jagannath Puri" | "Rameswaram" | "Across India";
  caption: string;
  direction: Direction;
  /** Visual weight inside the gallery grid. */
  span?: "wide" | "tall" | "normal";
}

export interface Faq {
  question: string;
  answer: string;
}

export interface InternalLink {
  label: string;
  href: string;
  description: string;
  /**
   * Only links with verified: true are rendered.
   * Flip to true after confirming the route exists in the live project.
   */
  verified: boolean;
}

export interface PageSeo {
  title: string;
  description: string;
  canonicalPath: string;
  siteUrl: string;
  siteName: string;
  ogImageAlt: string;
  keywords: string[];
}
