// data/antarctica/seasons.ts
// The Antarctic expedition season (austral summer). Statements are typical
// patterns and deliberately conservative; conditions vary year to year.

import type { AntarcticaImageId } from "./images";

export type SeasonAspect = "penguins" | "whales" | "ice" | "photography" | "daylight" | "access";

export interface PolarSeason {
  id: "early" | "peak" | "late";
  label: string;
  months: string;
  image: AntarcticaImageId;
  summary: string;
  aspects: Record<SeasonAspect, string>;
}

export const SEASON_NOTE =
  "Exact wildlife activity, ice and weather vary from year to year and week to week. There is no single best month for everyone; we help you choose based on what matters most to you.";

export const seasonAspectLabels: Record<SeasonAspect, string> = {
  penguins: "Penguin activity",
  whales: "Whale encounters",
  ice: "Ice conditions",
  photography: "Photography",
  daylight: "Daylight",
  access: "Expedition accessibility",
};

export const polarSeasons: PolarSeason[] = [
  {
    id: "early",
    label: "Early season",
    months: "Typically November",
    image: "sun-snowfield",
    summary: "Pristine snow, dramatic ice and the start of the penguin breeding season.",
    aspects: {
      penguins: "Courtship and nest-building at many colonies.",
      whales: "Whales are typically fewer early on.",
      ice: "More sea ice and snow cover; some sites may be inaccessible.",
      photography: "Clean white landscapes and large icebergs.",
      daylight: "Long days, lengthening quickly.",
      access: "Ice can limit how far south ships can go.",
    },
  },
  {
    id: "peak",
    label: "Peak season",
    months: "Typically December–January",
    image: "penguin-chick",
    summary: "The longest days, generally milder temperatures and penguin chicks appearing.",
    aspects: {
      penguins: "Eggs and young chicks at many colonies.",
      whales: "Whale activity typically increasing.",
      ice: "Melting opens up more channels.",
      photography: "Near-continuous light and active colonies.",
      daylight: "Longest daylight of the year.",
      access: "Most popular period; cabins tend to fill earliest.",
    },
  },
  {
    id: "late",
    label: "Late season",
    months: "Typically February–March",
    image: "humpback-fluke",
    summary: "Often the best chance for whales, growing chicks and southern routes.",
    aspects: {
      penguins: "Older chicks, some starting to fledge.",
      whales: "Often the strongest period for whale encounters.",
      ice: "Less sea ice; colonies can be muddier.",
      photography: "Sunsets and twilight return.",
      daylight: "Days shortening, with more sunrise and sunset light.",
      access: "Antarctic Circle attempts are more common, conditions permitting.",
    },
  },
];
