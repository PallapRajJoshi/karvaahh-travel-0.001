export interface NatureHighlight {
  id: string;
  label: string;
  imageLabel: string;
}

// Source: brief §11. No specific wildlife species are named — the brief
// requires only verified-for-the-region species and no promise of sightings,
// so this list stays at the landscape-feature level.
export const natureHighlights: NatureHighlight[] = [
  { id: "n1", label: "Snow-capped mountain peaks", imageLabel: "Snow-capped peaks, Saipal region" },
  { id: "n2", label: "Alpine meadows and high-altitude valleys", imageLabel: "Alpine meadow, high valley" },
  { id: "n3", label: "Forested slopes and remote wilderness", imageLabel: "Forested slope, Bajhang" },
  { id: "n4", label: "Pristine rivers and mountain streams", imageLabel: "Mountain stream, Seti River region" },
  { id: "n5", label: "Rugged ridgelines and dramatic Himalayan terrain", imageLabel: "Ridgeline, Himalayan terrain" },
  { id: "n6", label: "Landscape photography and quiet wilderness experiences", imageLabel: "Wide wilderness panorama" },
];
