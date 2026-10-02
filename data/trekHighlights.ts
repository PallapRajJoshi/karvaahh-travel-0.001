export interface TrekHighlight {
  id: string;
  text: string;
}

// Source: brief §9 "Highlight These Experiences" — used verbatim as a list.
export const trekHighlights: TrekHighlight[] = [
  { id: "th1", text: "Multi-day trekking through remote Himalayan valleys" },
  { id: "th2", text: "Mountain trails across forests, rugged terrain, and alpine meadows" },
  { id: "th3", text: "Panoramic views of Mount Saipal and surrounding mountain landscapes" },
  { id: "th4", text: "Camping and wilderness experiences where permitted and logistically feasible" },
  { id: "th5", text: "Encounters with traditional mountain settlements" },
  { id: "th6", text: "Landscape and mountain photography" },
  { id: "th7", text: "Exploration of the Seti River region and the wider Bajhang landscape" },
];
