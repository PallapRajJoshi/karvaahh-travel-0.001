// data/antarctica/timeline.ts
// The nine-stage expedition story used by the scroll timeline.

import type { AntarcticaImageId } from "./images";

export interface TimelineStage {
  n: string;
  title: string;
  sub: string;
  text: string;
  image: AntarcticaImageId;
  optional?: boolean;
}

export const expeditionTimeline: TimelineStage[] = [
  { n: "01", title: "Prepare", sub: "Travel planning and equipment", text: "Choose your voyage and cabin, sort documents and insurance, and assemble your polar kit.", image: "landing-view" },
  { n: "02", title: "Reach South America", sub: "International journey", text: "Fly from Nepal or India via international hubs to Buenos Aires or Santiago.", image: "buenos-aires" },
  { n: "03", title: "Arrive at Ushuaia", sub: "Gateway experience", text: "Fly to the end of the world and rest a night beside the Beagle Channel.", image: "ushuaia-waterfront" },
  { n: "04", title: "Embark", sub: "Join the expedition vessel", text: "Board your ship, settle in and attend the safety briefing as you sail out.", image: "ushuaia-harbour" },
  { n: "05", title: "Cross the Drake Passage", sub: "Ocean journey", text: "Albatrosses, lectures and the first icebergs on the horizon.", image: "berg-open-ocean" },
  { n: "06", title: "Enter Antarctica", sub: "Icebergs and landscapes", text: "Snow-covered islands, glaciers and drifting ice appear.", image: "mirror-bay" },
  { n: "07", title: "Zodiac Exploration", sub: "Wildlife and shore experiences", text: "Cruise among the ice and land at permitted sites, conditions allowing.", image: "zodiac-arch" },
  { n: "08", title: "Expedition Return", sub: "Return voyage", text: "Recross the Drake, share photos and disembark in Ushuaia.", image: "ship-deck" },
  { n: "09", title: "South America Extension", sub: "Optional post-expedition travel", text: "Patagonia's glaciers, Buenos Aires or Chile before heading home.", image: "perito-moreno", optional: true },
];
