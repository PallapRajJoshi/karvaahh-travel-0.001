import type { InquiryPrefill } from "../types";

export const PERFORMANCES = {
  eyebrow: "Music, Dance & Performance",
  heading: "Feel the Rhythm of Nepal",
  intro:
    "Nepal’s music and dance traditions differ from community to community: drums and cymbals in Newar streets, stick dances in the Terai, song and dance in the hills, and monastery ritual in the Himalaya.",
  highlights: [
    "Newari traditional music and dance",
    "Tharu folk dance",
    "Gurung cultural performances",
    "Sherpa cultural traditions",
    "Traditional musical instruments and folk performances",
    "Community celebrations and cultural gatherings",
  ],
  note:
    "Some dances, such as monastery ritual dances, are religious observances rather than staged shows. Visitors watch quietly, and where a performance is arranged for visitors we will tell you which kind it is.",
  cta: "Explore Cultural Performances",
  prefill: {
    interest: "music-dance",
    message: "I’d like to see traditional music and dance performances.",
    label: "cultural performances",
  } satisfies InquiryPrefill,
  media: "performance",
} as const;
