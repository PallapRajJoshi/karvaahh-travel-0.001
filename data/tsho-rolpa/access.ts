export interface StartingPoint {
  id: string;
  name: string;
}

/**
 * Section 12 — How to Reach. Route-planning selector with starting points
 * only; no distances, travel times, or guaranteed transport connections
 * are stated, per brief.
 */
export const startingPoints: StartingPoint[] = [
  { id: "kathmandu", name: "Kathmandu" },
  { id: "charikot", name: "Charikot" },
  { id: "chetchet", name: "Chetchet" },
];

export const accessNotes: string[] = [
  "Road conditions may vary.",
  "Travel times depend on the starting point and current road conditions.",
  "Remote sections may have limited services.",
  "Local transport arrangements should be confirmed in advance.",
];

export const accessRouteSummary =
  "Kathmandu → Charikot → Chetchet → Rolwaling Valley trekking route. From Chetchet, the journey continues on foot through mountain trails and settlements toward the lake.";
