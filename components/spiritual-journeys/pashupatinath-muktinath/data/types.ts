export type IconName =
  | "temple" | "lake" | "town" | "shrine" | "mountain" | "river" | "flame"
  | "drop" | "road" | "plane" | "sun" | "wind" | "snow" | "rain" | "bed"
  | "bowl" | "shield" | "leaf" | "camera" | "users" | "check" | "compass"
  | "prayer" | "backpack" | "document" | "heart" | "clock";

/** An image slot. Set `ready: true` once the file exists in /public. */
export interface ImageAsset {
  src: string;
  alt: string;
  width: number;
  height: number;
  ready: boolean;
  /** Placeholder mood used until the real photo is added. */
  tone: "warm" | "dusk" | "cool" | "stone" | "river";
}

export interface LinkRef {
  label: string;
  href: string;
}

export interface Fact {
  label: string;
  value: string;
  note?: string;
}

export interface TitledText {
  title: string;
  text: string;
  icon?: IconName;
}

export interface RouteStop {
  id: string;
  name: string;
  role: string;
  /** Approximate elevation in metres, used only for the stylised profile. */
  elevationM: number;
  elevationLabel: string;
  icon: IconName;
  summary: string;
  highlights: string[];
  note?: string;
  related?: LinkRef | null;
  image?: ImageAsset;
}

export interface RouteSegment {
  from: string;
  to: string;
  label: string;
  emphasis?: boolean;
}

export interface TransportOption {
  id: "road" | "flight";
  title: string;
  icon: IconName;
  summary: string;
  legs: string[];
  considerations: string[];
}

export interface JourneyStage {
  title: string;
  text: string;
}

export interface WeatherCard {
  region: string;
  icon: IconName;
  intro: string;
  seasons: TitledText[];
}

export interface ChecklistGroup {
  id: string;
  title: string;
  icon: IconName;
  items: string[];
}

export interface StayStop {
  place: string;
  type: string;
  text: string;
  /** 1 = full city comfort, 4 = basic mountain lodge. Drives the visual scale. */
  comfort: 1 | 2 | 3 | 4;
}

export interface Extension {
  title: string;
  text: string;
  current?: boolean;
  /** Only set when the route is confirmed to exist on karvaahh.in. */
  href: string | null;
}

export interface GalleryItem extends ImageAsset {
  caption: string;
}

export interface Faq {
  id: string;
  question: string;
  answer: string;
}
