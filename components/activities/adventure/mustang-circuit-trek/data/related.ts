import type { RelatedLink } from "./types";

/**
 * Internal links. Verify each slug exists on the live site before deploy —
 * a wrong slug is a 404 (see the Sudurpaschim lesson).
 */
export const related: RelatedLink[] = [
  { label: "Gandaki Province", href: "/destinations/gandaki-province", note: "Mustang’s home province — Pokhara, Annapurna and beyond" },
  { label: "Paragliding in Nepal", href: "/activities/adventure/paragliding", note: "Fly over Phewa Lake on your way through Pokhara" },
  { label: "Ultralight Flight", href: "/activities/adventure/ultra-light-flight", note: "See the Annapurna range from the air" },
  { label: "Camping in Nepal", href: "/activities/adventure/camping", note: "Nights under Himalayan skies" },
];
