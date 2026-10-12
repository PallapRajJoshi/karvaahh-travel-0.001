// data/russia/experiences.ts
// ONE experience/travel-style taxonomy for the Russia page. The quick filter
// bar, the "Russia by Experience" cards, destinations and packages all use
// these ids, so there is no second dataset to keep in sync.

export type RussiaExperienceId =
  | "capitals"
  | "history"
  | "museums"
  | "winter"
  | "northern-lights"
  | "honeymoon"
  | "family"
  | "luxury"
  | "budget"
  | "photography"
  | "architecture"
  | "religious-heritage"
  | "ski"
  | "nature"
  | "baikal"
  | "train"
  | "trans-siberian"
  | "city-break"
  | "private"
  | "beach";

export interface RussiaExperience {
  id: RussiaExperienceId;
  /** Label in the quick filter bar. */
  label: string;
  /** Short label on cards and tags. */
  short: string;
  /** Present when the experience gets a card in "Russia by Experience". */
  /** `image` is an id from ./images.ts. */
  card?: { title: string; text: string; image?: string };
  /** Hidden from the filter bar (used for tagging only). */
  tagOnly?: boolean;
}

export const russiaExperiences: RussiaExperience[] = [
  { id: "capitals", label: "Moscow & Capitals", short: "Capitals" },
  { id: "city-break", label: "City Breaks", short: "City Break", card: { title: "City Break", text: "Moscow or Saint Petersburg in 3–5 days.", image: "moscow" } },
  { id: "history", label: "History & Heritage", short: "Historical", card: { title: "Historical", text: "Kremlins, fortresses and imperial palaces.", image: "moscow-winter" } },
  { id: "museums", label: "Museums & Art", short: "Cultural", card: { title: "Cultural", text: "The Hermitage, ballet, theatre and galleries.", image: "saint-petersburg" } },
  { id: "architecture", label: "Architecture", short: "Architecture", card: { title: "Architecture", text: "Onion domes, baroque palaces and metro halls.", image: "moscow-night" } },
  { id: "religious-heritage", label: "Religious & Cultural Heritage", short: "Heritage" },
  { id: "winter", label: "Winter Holidays", short: "Winter", card: { title: "Winter", text: "Snow-covered cities, frozen lakes and forests.", image: "winter-forest" } },
  { id: "northern-lights", label: "Northern Lights", short: "Northern Lights", card: { title: "Northern Lights", text: "Arctic nights near Murmansk, never guaranteed.", image: "aurora" } },
  { id: "honeymoon", label: "Honeymoon", short: "Honeymoon", card: { title: "Honeymoon", text: "White Nights, palaces and private sightseeing.", image: "spb-bridge" } },
  { id: "family", label: "Family", short: "Family", card: { title: "Family", text: "Flexible pacing, parks, circuses and museums.", image: "red-square" } },
  { id: "luxury", label: "Luxury", short: "Luxury", card: { title: "Luxury", text: "Premium hotels, private guides and transfers.", image: "saint-petersburg" } },
  { id: "budget", label: "Budget", short: "Budget", card: { title: "Budget", text: "Well-located hotels and shared sightseeing.", image: "moscow-domes" } },
  { id: "photography", label: "Photography", short: "Photography", card: { title: "Photography", text: "Golden domes, winter light and Arctic skies.", image: "aurora-hills" } },
  { id: "ski", label: "Ski & Snow", short: "Ski", card: { title: "Ski", text: "Krasnaya Polyana and Rosa Khutor near Sochi.", image: "winter-mountains" } },
  { id: "nature", label: "Nature & Adventure", short: "Nature & Adventure", card: { title: "Nature & Adventure", text: "Baikal, Altai, the Arctic and Kamchatka.", image: "lake-baikal" } },
  { id: "baikal", label: "Lake Baikal", short: "Lake Baikal" },
  { id: "train", label: "Train Journeys", short: "Train Journey", card: { title: "Train Journey", text: "Fast rail between Moscow and Saint Petersburg.", image: "winter-birch" } },
  { id: "trans-siberian", label: "Trans-Siberian", short: "Trans-Siberian", card: { title: "Trans-Siberian", text: "A specialist long-distance rail journey." } },
  { id: "private", label: "Customized Private Tours", short: "Private Tour", card: { title: "Private Tour", text: "Your own guide, car and pace." } },
  { id: "beach", label: "Beach", short: "Beach", tagOnly: true },
];

export const experienceLabel = (id: RussiaExperienceId) => russiaExperiences.find((e) => e.id === id)?.short ?? id;
