export interface GalleryImage {
  id: string;
  label: string;
  category: string;
}

// Source: brief §18 "Cinematic Photo Gallery" — category list from the brief.
// All entries are placeholders pending verified Saipal-region photography;
// see README image manifest. Do not fill with unrelated Himalayan stock imagery.
export const galleryImages: GalleryImage[] = [
  { id: "g1", label: "Mount Saipal panorama", category: "Mountain" },
  { id: "g2", label: "Alpine meadow, remote valley", category: "Landscape" },
  { id: "g3", label: "Mountain river, forest landscape", category: "Landscape" },
  { id: "g4", label: "Traditional settlement, Bajhang", category: "Culture" },
  { id: "g5", label: "Trekking trail, expedition camp", category: "Trekking" },
  { id: "g6", label: "Seti River region landscape", category: "Landscape" },
  { id: "g7", label: "Local culture and wilderness scene", category: "Culture" },
  { id: "g8", label: "Mount Saipal, alternate angle", category: "Mountain" },
];
