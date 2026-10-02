export interface RegionSpot {
  id: string;
  name: string;
  description: string;
  /** Optional extra caveat rendered as a small note — used where the brief
   * requires a destination to be presented as a separate excursion rather
   * than implying it sits on the main trekking trail. */
  note?: string;
  size: "lg" | "md" | "sm";
}

// Source: brief §8 "Explore the Saipal Region" — descriptions kept close to
// the brief's wording; no distances, travel times, or route connections
// invented between these places, per the explicit instruction.
export const regionSpots: RegionSpot[] = [
  {
    id: "saipal-base-camp",
    name: "Saipal Base Camp",
    description: "The remote mountain destination that offers access to dramatic alpine scenery and views of the Saipal Himal region.",
    size: "lg",
  },
  {
    id: "saipal-himal",
    name: "Saipal Himal",
    description: "A striking Himalayan mountain landscape dominated by rugged peaks and high-altitude terrain.",
    size: "md",
  },
  {
    id: "talkot",
    name: "Talkot",
    description: "A settlement in Bajhang that can be included in regional travel planning, subject to the selected route.",
    size: "sm",
  },
  {
    id: "chainpur",
    name: "Chainpur",
    description: "The district headquarters of Bajhang and a potential access point for arranging onward travel into the region.",
    size: "md",
  },
  {
    id: "rilu",
    name: "Rilu",
    description: "A remote locality associated with the wider Bajhang region.",
    note: "Only verified location-specific information and imagery is included here.",
    size: "sm",
  },
  {
    id: "seti-river-region",
    name: "Seti River Region",
    description: "Explore river valleys, forested landscapes, and mountain terrain associated with the Seti River region.",
    size: "md",
  },
  {
    id: "surma-sarovar",
    name: "Surma Sarovar",
    description: "A sacred high-altitude lake in Bajhang known for its natural setting and religious significance.",
    note: "Presented as a separate excursion or regional extension — route to be verified before inclusion in any itinerary.",
    size: "sm",
  },
  {
    id: "khaptad-national-park",
    name: "Khaptad National Park",
    description: "A protected landscape known for its meadows, forests, and cultural significance.",
    note: "A separate regional destination — not implied to lie directly along the Saipal Base Camp trekking trail.",
    size: "lg",
  },
];
