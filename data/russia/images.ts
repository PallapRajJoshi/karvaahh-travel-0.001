// data/russia/images.ts
// Every photo on the Russia page, defined once and referenced by id.
// Each was checked by eye; alt text only claims what the photo shows.
// Destinations without a verified photo render a designed fallback, so add
// real Karvaahh photography here (local /public paths work too).

export interface RussiaImage {
  src: string;
  alt: string;
}

const unsplash = (id: string, alt: string): RussiaImage => ({
  src: `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1600&q=75`,
  alt,
});

export const russiaImages = {
  moscow: unsplash("1513326738677-b964603b136d", "Saint Basil's Cathedral on Red Square, Moscow"),
  "moscow-winter": unsplash("1547448415-e9f5b28e570d", "The Kremlin and Saint Basil's Cathedral in winter snow, Moscow"),
  "moscow-night": unsplash("1520106212299-d99c443e4568", "Saint Basil's Cathedral lit up on a winter night in Moscow"),
  "moscow-domes": unsplash("1512495039889-52a3b799c9bc", "Onion domes of Saint Basil's Cathedral at night, Moscow"),
  "red-square": unsplash("1596484552834-6a58f850e0a1", "Saint Basil's Cathedral and a neighbouring church on Red Square, Moscow"),
  "saint-petersburg": unsplash("1548834925-e48f8a27ae6f", "Kazan Cathedral colonnade lit up at night, Saint Petersburg"),
  "spb-bridge": unsplash("1556610961-2fecc5927173", "A raised Neva drawbridge at dusk with the Peter and Paul Fortress spire, Saint Petersburg"),
  "lake-baikal": unsplash("1551845041-63e8e76836ea", "Clear winter ice along the rocky shore of Lake Baikal"),
  aurora: unsplash("1483347756197-71ef80e95f73", "Green Northern Lights above a snowy forest"),
  "aurora-hills": unsplash("1531366936337-7c912a4589a7", "Northern Lights over snowy hills at night"),
  "aurora-sky": unsplash("1579033461380-adb47c3eb938", "Northern Lights reflected above a mountain lake"),
  "winter-forest": unsplash("1491002052546-bf38f186af56", "Snow-covered forest at the edge of a frozen lake"),
  "winter-birch": unsplash("1516431883659-655d41c09bf9", "Snow-covered birch trees lining a winter path"),
  "winter-mountains": unsplash("1418985991508-e47386d96a71", "Snowy mountain slopes under a winter sky"),
} satisfies Record<string, RussiaImage>;

export type RussiaImageId = keyof typeof russiaImages;

export const russiaImage = (id?: string): RussiaImage | undefined =>
  id && id in russiaImages ? russiaImages[id as RussiaImageId] : undefined;
