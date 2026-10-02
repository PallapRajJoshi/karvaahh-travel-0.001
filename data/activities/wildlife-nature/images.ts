/**
 * IMAGE MANIFEST — single source of truth for every photo on the page.
 *
 * No verified, licensed wildlife photography was available when this page was built,
 * so images render as labelled placeholders until you flip IMAGE_SOURCE_READY.
 *
 * To go live:
 *   1. Drop licensed photos into /public/images/wildlife-nature/ using the file names below
 *      (AVIF/WebP/JPG all fine — next/image optimises them; keep the extension in `src` in sync).
 *   2. Check each `alt` still describes what the photo actually shows (species + place must be accurate).
 *   3. Set IMAGE_SOURCE_READY = true.
 *
 * Do not use AI-generated wildlife imagery presented as real sightings.
 */
import type { ImageTone } from "./image-types";

export const IMAGE_SOURCE_READY = false;

const dir = "/images/wildlife-nature";

interface Spec {
  src: string;
  alt: string;
  /** What the photographer / editor should supply. Shown on placeholders. */
  brief: string;
  width: number;
  height: number;
  tone: ImageTone;
}

export const IMAGES = {
  hero: {
    src: `${dir}/hero-terai-grassland.jpg`,
    alt: "Greater one-horned rhinoceros grazing in misty Terai grassland at sunrise",
    brief: "Hero: rhino in Terai grassland (or tiger in natural forest), wide 16:9, room for text on left",
    width: 2400,
    height: 1350,
    tone: "grass",
  },
  intro: {
    src: `${dir}/intro-nepal-wilderness.jpg`,
    alt: "Forested river valley in Nepal with mist rising at first light",
    brief: "Intro: atmospheric Nepal landscape or wildlife, portrait 4:5",
    width: 1200,
    height: 1500,
    tone: "forest",
  },
  "exp-safari": {
    src: `${dir}/exp-jungle-safari.jpg`,
    alt: "Safari vehicle crossing open grassland with a rhinoceros in the distance",
    brief: "Safari vehicle in grassland, rhino far in background",
    width: 1600,
    height: 1067,
    tone: "grass",
  },
  "exp-birding": {
    src: `${dir}/exp-birdwatching.jpg`,
    alt: "Colourful birds perched near a wetland or riverbank in Nepal",
    brief: "Colourful birds near wetland / riverbank",
    width: 1600,
    height: 1067,
    tone: "wetland",
  },
  "exp-photography": {
    src: `${dir}/exp-wildlife-photography.jpg`,
    alt: "Photographer with a telephoto lens observing wildlife from a respectful distance",
    brief: "Photographer with long lens at a responsible distance",
    width: 1600,
    height: 1067,
    tone: "dawn",
  },
  "exp-walks": {
    src: `${dir}/exp-forest-trail.jpg`,
    alt: "Quiet forest trail surrounded by lush green vegetation",
    brief: "Forest trail with lush greenery",
    width: 1600,
    height: 1067,
    tone: "trail",
  },
  "exp-canoe": {
    src: `${dir}/exp-canoeing.jpg`,
    alt: "Traditional wooden canoe on a calm river bordered by dense vegetation",
    brief: "Traditional canoe on calm river, lush banks",
    width: 1600,
    height: 1067,
    tone: "wetland",
  },
  "exp-himalaya": {
    src: `${dir}/exp-himalayan-lake.jpg`,
    alt: "Pristine Himalayan lake framed by forested hills and snow mountains",
    brief: "Himalayan lake with forested hills and mountains",
    width: 1600,
    height: 1067,
    tone: "lake",
  },
  "dest-chitwan": {
    src: `${dir}/dest-chitwan.jpg`,
    alt: "One-horned rhinoceros in grassland with lush forest behind, Chitwan National Park",
    brief: "Chitwan: rhino in natural grassland, forest backdrop",
    width: 1800,
    height: 1200,
    tone: "grass",
  },
  "dest-bardia": {
    src: `${dir}/dest-bardia.jpg`,
    alt: "Bengal tiger in natural forest habitat, Bardia National Park",
    brief: "Bardia: tiger in natural forest OR wildlife-rich grassland/riverine landscape (must be genuinely from Bardia)",
    width: 1800,
    height: 1200,
    tone: "forest",
  },
  "dest-koshi-tappu": {
    src: `${dir}/dest-koshi-tappu.jpg`,
    alt: "Flock of migratory birds over a calm wetland at Koshi Tappu Wildlife Reserve",
    brief: "Koshi Tappu: flock of birds over wetland",
    width: 1800,
    height: 1200,
    tone: "wetland",
  },
  "dest-shuklaphanta": {
    src: `${dir}/dest-shuklaphanta.jpg`,
    alt: "Wide open grassland with wildlife in the distance, Shuklaphanta National Park",
    brief: "Shuklaphanta: wide grassland, wildlife in the distance",
    width: 1600,
    height: 1067,
    tone: "grass",
  },
  "dest-sagarmatha": {
    src: `${dir}/dest-sagarmatha.jpg`,
    alt: "Dramatic Himalayan peaks and alpine terrain in Sagarmatha National Park",
    brief: "Sagarmatha: Everest-region peaks and alpine terrain",
    width: 1600,
    height: 1067,
    tone: "alpine",
  },
  "dest-langtang": {
    src: `${dir}/dest-langtang.jpg`,
    alt: "Lush mountain forest opening into the Langtang valley",
    brief: "Langtang: forest opening to Himalayan valley",
    width: 1600,
    height: 1067,
    tone: "forest",
  },
  "dest-rara": {
    src: `${dir}/dest-rara.jpg`,
    alt: "Turquoise water of Rara Lake with forested hills and distant mountains",
    brief: "Rara: turquoise lake, forested hills, distant mountains",
    width: 1600,
    height: 1067,
    tone: "lake",
  },
  "wl-tiger": {
    src: `${dir}/wildlife-bengal-tiger.jpg`,
    alt: "Bengal tiger walking through natural forest",
    brief: "Bengal tiger in natural forest (wild, not captive)",
    width: 1400,
    height: 1750,
    tone: "forest",
  },
  "wl-rhino": {
    src: `${dir}/wildlife-one-horned-rhino.jpg`,
    alt: "Greater one-horned rhinoceros grazing in natural grassland",
    brief: "One-horned rhino grazing in grassland",
    width: 1400,
    height: 1750,
    tone: "grass",
  },
  "wl-elephant": {
    src: `${dir}/wildlife-wild-elephants.jpg`,
    alt: "Wild elephants in natural forest and grassland habitat",
    brief: "Wild elephants in natural habitat (not working/captive elephants)",
    width: 1400,
    height: 1750,
    tone: "trail",
  },
  "wl-red-panda": {
    src: `${dir}/wildlife-red-panda.jpg`,
    alt: "Red panda resting in a Himalayan temperate forest",
    brief: "Red panda in natural forest environment",
    width: 1400,
    height: 1750,
    tone: "alpine",
  },
  "wl-birds": {
    src: `${dir}/wildlife-birds.jpg`,
    alt: "Colourful birds in a natural Nepalese wetland or forest setting",
    brief: "Colourful birds in wetland or forest",
    width: 1400,
    height: 1750,
    tone: "wetland",
  },
  "wl-himalayan": {
    src: `${dir}/wildlife-himalayan.jpg`,
    alt: "Himalayan wildlife in a natural alpine setting",
    brief: "High-altitude wildlife (e.g. tahr, monal) in alpine setting — identify species in alt text",
    width: 1400,
    height: 1750,
    tone: "alpine",
  },
  "traveler-family": {
    src: `${dir}/traveler-family.jpg`,
    alt: "Family walking together along a nature trail with a guide",
    brief: "Family on a guided nature walk",
    width: 1200,
    height: 1500,
    tone: "trail",
  },
  "traveler-nature": {
    src: `${dir}/traveler-nature-lover.jpg`,
    alt: "Traveller looking out over a calm lake surrounded by forested hills",
    brief: "Traveller at a peaceful lake / forest",
    width: 1200,
    height: 1500,
    tone: "lake",
  },
  "traveler-photographer": {
    src: `${dir}/traveler-photographer.jpg`,
    alt: "Wildlife photographer at dawn with a telephoto lens",
    brief: "Photographer at dawn with long lens",
    width: 1200,
    height: 1500,
    tone: "dawn",
  },
  "traveler-adventure": {
    src: `${dir}/traveler-adventure.jpg`,
    alt: "Trekker on a Himalayan trail above the tree line",
    brief: "Trekker on Himalayan trail",
    width: 1200,
    height: 1500,
    tone: "alpine",
  },
  "responsible-bg": {
    src: `${dir}/responsible-forest.jpg`,
    alt: "Sunlight filtering through dense Nepalese forest canopy",
    brief: "Immersive forest canopy background (dark-friendly)",
    width: 2400,
    height: 1350,
    tone: "forest",
  },
  "final-cta": {
    src: `${dir}/final-cta-himalaya.jpg`,
    alt: "Himalayan wilderness at dusk with forest and snow peaks",
    brief: "Closing image: Himalayan wilderness or wildlife landscape, wide",
    width: 2400,
    height: 1350,
    tone: "alpine",
  },
} as const satisfies Record<string, Spec>;

export type ImageKey = keyof typeof IMAGES;

/** Open Graph image (1200×630). Only referenced in metadata once IMAGE_SOURCE_READY is true. */
export const OG_IMAGE = {
  src: `${dir}/og-wildlife-nature.jpg`,
  width: 1200,
  height: 630,
  alt: "Wildlife & Nature in Nepal — Karvaahh",
} as const;
