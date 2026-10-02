export interface ItineraryDay {
  day: number;
  title: string;
  description: string;
}

// Source: brief §10 — explicitly an "illustrative itinerary framework only",
// NOT a confirmed route. Rendered with a prominent disclaimer in the
// ItineraryTimeline component; do not remove that disclaimer if this data
// changes.
export const itinerary: ItineraryDay[] = [
  {
    day: 1,
    title: "Arrival in Dhangadhi or Nepalgunj",
    description: "Arrive at the selected gateway and prepare for the onward journey.",
  },
  {
    day: 2,
    title: "Overland Journey Toward Bajhang",
    description: "Travel toward the Bajhang region, depending on road conditions and the selected access route.",
  },
  {
    day: 3,
    title: "Reach the Trekking Starting Area",
    description: "Continue to the verified trailhead and organize expedition supplies.",
  },
  {
    day: 4,
    title: "Begin the Trek",
    description: "Start trekking through the selected route, with overnight arrangements based on local conditions.",
  },
  {
    day: 5,
    title: "Continue Through Remote Mountain Terrain",
    description: "Trek through valleys, forests, and alpine landscapes while allowing for acclimatization.",
  },
  {
    day: 6,
    title: "Reach the Saipal Base Camp Region",
    description: "Continue toward the verified base camp location, subject to route conditions and the expedition plan.",
  },
  {
    day: 7,
    title: "Explore the Surrounding Landscape",
    description: "Explore the area and mountain viewpoints where safe and accessible.",
  },
  {
    day: 8,
    title: "Begin the Return Trek",
    description: "Descend along the selected route.",
  },
  {
    day: 9,
    title: "Return Toward Bajhang",
    description: "Continue toward the road-accessible region.",
  },
  {
    day: 10,
    title: "Travel Back to Dhangadhi or Nepalgunj",
    description: "Complete the overland return journey.",
  },
];
