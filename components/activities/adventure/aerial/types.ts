/**
 * Shared content model for Karvaahh aerial activity pages
 * (Paragliding, Ultra-Light Flight, Hot Air Balloon, Mountain Flight).
 * Each page supplies one AerialActivityData object; the template renders it.
 */

export type AerialActivityKey =
  | "paragliding"
  | "ultra-light"
  | "hot-air-balloon"
  | "mountain-flight";

export interface ImageAsset {
  src: string;
  alt: string;
}

export interface LinkCta {
  label: string;
  href: string;
}

export interface Crumb {
  label: string;
  href: string;
}

export interface HeroContent {
  eyebrow: string;
  title: string;
  subtitle: string;
  body: string;
  location: string;
  badges: string[];
  primaryCta: LinkCta;
  secondaryCta: LinkCta;
  image: ImageAsset;
}

export interface IntroContent {
  heading: string;
  body: string;
  /** e.g. "Where it operates" */
  scarcityLabel: string;
  /** e.g. "Pokhara only" */
  scarcityValue: string;
  card: { title: string; body: string };
  image: ImageAsset;
}

export type OptionStatus = "established" | "seasonal";

export interface FlightOption {
  /** Stable id — used in enquiry links (?option=) */
  id: string;
  title: string;
  /** Display text, e.g. "30–60 min" */
  duration: string;
  /** Minutes aloft [min, max] — drives the price-driver chart */
  minutes: [number, number];
  sees: string;
  price: string;
  status: OptionStatus;
  ctaLabel: string;
}

export interface OptionsContent {
  id: string;
  heading: string;
  subheading: string;
  options: FlightOption[];
  note: string;
}

export interface PriceDriverContent {
  heading: string;
  statement: string;
  body: string;
  /** Upper bound of the minutes axis */
  axisMax: number;
}

export interface SeasonMonth {
  name: string;
  open: boolean;
}

export interface SeasonContent {
  heading: string;
  summary: string;
  body: string;
  months: SeasonMonth[];
  openLabel: string;
  closedLabel: string;
  note: string;
}

export interface Sight {
  name: string;
  body: string;
  image: ImageAsset;
}

export interface SightsContent {
  heading: string;
  caveat: string;
  sights: Sight[];
}

export type AudienceIcon = "camera" | "couple" | "family" | "mountain" | "first-flight";

export interface AudienceItem {
  title: string;
  body: string;
  icon: AudienceIcon;
}

export interface AudienceContent {
  heading: string;
  items: AudienceItem[];
}

export interface FactItem {
  label: string;
  value: string;
}

export interface EnquiryContent {
  heading: string;
  body: string;
  primaryLabel: string;
  whatsappLabel: string;
  /** Prefilled WhatsApp message */
  whatsappMessage: string;
  brandLines: string[];
  image: ImageAsset;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface SeoContent {
  title: string;
  description: string;
  /** Route path, e.g. /activities/adventure/ultra-light-flight */
  path: string;
  ogImage: ImageAsset;
  /** Short name used in schema, e.g. "Ultra-Light Flight in Pokhara" */
  schemaName: string;
  /** City / area for TouristAttraction.containedInPlace */
  place: { name: string; country: string };
  /** Emit FAQPage JSON-LD (see README for guideline notes) */
  includeFaqSchema: boolean;
}

export interface AerialActivityData {
  slug: string;
  comparisonKey: AerialActivityKey;
  breadcrumbs: Crumb[];
  hero: HeroContent;
  intro: IntroContent;
  options: OptionsContent;
  priceDriver: PriceDriverContent;
  season: SeasonContent;
  sights: SightsContent;
  audience: AudienceContent;
  facts: { heading: string; items: FactItem[] };
  gallery: { heading: string; images: ImageAsset[] };
  enquiry: EnquiryContent;
  faq: { heading: string; items: FaqItem[] };
  seo: SeoContent;
}
