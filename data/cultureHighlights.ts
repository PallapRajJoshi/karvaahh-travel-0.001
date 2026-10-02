export interface CultureHighlight {
  id: string;
  text: string;
}

// Source: brief §12 "Culture and Local Heritage".
export const cultureHighlights: CultureHighlight[] = [
  { id: "c1", text: "Traditional Himalayan settlements" },
  { id: "c2", text: "Local customs, food traditions, and community life where verified" },
  { id: "c3", text: "Regional cultural heritage and religious traditions" },
  { id: "c4", text: "Respectful cultural interaction and responsible travel" },
  { id: "c5", text: "The importance of supporting local communities and guides" },
];
