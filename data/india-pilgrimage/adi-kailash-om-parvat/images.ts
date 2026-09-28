import type { ImageAsset } from "./types";

/**
 * Central image registry.
 *
 * Every image on the page is declared once here. To replace a photo, drop the
 * new file at the same path (keeping the name) — or change `src` here — and
 * set `placeholder: false`. Nothing else needs to change.
 *
 * All files currently in /public are generated, clearly labelled placeholders.
 * See README → "Image manifest" for recommended sizes and crop guidance.
 */

const BASE = "/images/destinations/adi-kailash-om-parvat";

type Folder = "hero" | "sacred-sites" | "experiences" | "routes" | "packages";

function img(folder: Folder, file: string, alt: string, focus?: string): ImageAsset {
  return { src: `${BASE}/${folder}/${file}`, alt, focus, placeholder: true };
}

export const images = {
  /* Hero & closing CTA ------------------------------------------------ */
  hero: img(
    "hero",
    "om-parvat-snow-face-hero.jpg",
    "The snow-streaked face of Om Parvat rising above the high Vyas Valley at first light",
    "50% 35%",
  ),
  /** 1200×630 social share image (Open Graph / Twitter). */
  og: img("hero", "og-adi-kailash-om-parvat.jpg", "Adi Kailash & Om Parvat Yatra with Karvaahh", "50% 40%"),
  finalCta: img(
    "hero",
    "adi-kailash-evening-panorama.jpg",
    "Adi Kailash reflected in the still waters of Parvati Sarovar at dusk",
    "50% 40%",
  ),

  /* Overview ----------------------------------------------------------- */
  overviewMain: img(
    "experiences",
    "overview-adi-kailash-peak.jpg",
    "Adi Kailash, the Chhota Kailash, under a clear Himalayan sky",
    "50% 30%",
  ),
  overviewInset: img(
    "experiences",
    "overview-om-parvat-close.jpg",
    "Close view of the ॐ-like snow pattern on Om Parvat",
    "50% 40%",
  ),

  /* Sacred sites -------------------------------------------------------- */
  siteAdiKailash: img("sacred-sites", "adi-kailash.jpg", "Adi Kailash peak above the Jolingkong valley", "50% 30%"),
  siteOmParvat: img("sacred-sites", "om-parvat.jpg", "Om Parvat seen from the Nabidhang viewpoint", "50% 35%"),
  siteParvatiSarovar: img("sacred-sites", "parvati-sarovar.jpg", "Parvati Sarovar, a high-altitude lake at the foot of Adi Kailash"),
  siteGauriKund: img("sacred-sites", "gauri-kund.jpg", "The glacial waters of Gauri Kund beneath snow-covered slopes"),
  siteJolingkong: img("sacred-sites", "jolingkong.jpg", "The wide, open high valley of Jolingkong"),
  siteNabidhang: img("sacred-sites", "nabidhang.jpg", "The Nabidhang viewpoint facing Om Parvat"),
  siteGunji: img("sacred-sites", "gunji-village.jpg", "Stone houses of Gunji village in the Vyas Valley"),
  siteKalapani: img("sacred-sites", "kalapani-kali-temple.jpg", "The Kali temple at Kalapani beside the river's upper reaches"),

  /* Adi Kailash & Om Parvat feature sections ------------------------------ */
  adiKailashFeature: img(
    "experiences",
    "adi-kailash-darshan.jpg",
    "Pilgrims in quiet prayer facing Adi Kailash beside Parvati Sarovar",
    "50% 40%",
  ),
  adiKailashDetail: img(
    "experiences",
    "parvati-sarovar-shrine.jpg",
    "A small shrine with prayer offerings on the shore of Parvati Sarovar",
  ),
  omParvatPanorama: img(
    "experiences",
    "om-parvat-panorama.jpg",
    "Panoramic view of Om Parvat and the surrounding ridges from Nabidhang",
    "60% 40%",
  ),

  /* Cultural experiences -------------------------------------------------- */
  cultureVillages: img("experiences", "culture-himalayan-village.jpg", "Traditional stone-and-timber houses in a Vyas Valley village"),
  cultureHospitality: img("experiences", "culture-kumaoni-hospitality.jpg", "Tea being served in a Kumaoni homestay kitchen"),
  cultureTemples: img("experiences", "culture-village-temple.jpg", "A village shrine decorated with prayer flags and marigolds"),
  cultureRoad: img("experiences", "culture-mountain-road.jpg", "A mountain road winding along a steep river gorge"),
  culturePhotography: img("experiences", "culture-panorama-viewpoint.jpg", "A traveller photographing snow peaks from a ridge viewpoint"),
  cultureNature: img("experiences", "culture-quiet-meadow.jpg", "A quiet high meadow with grazing animals and distant peaks"),
  cultureRiver: img("experiences", "culture-river-valley.jpg", "The river valley below Dharchula with terraced hillsides"),

  /* Route stages ------------------------------------------------------------ */
  routeKathgodam: img("routes", "kathgodam-haldwani.jpg", "The Kumaon foothills near Kathgodam at the start of the ascent"),
  routeDharchula: img("routes", "dharchula.jpg", "Dharchula town on the banks of the river"),
  routeGunji: img("routes", "gunji.jpg", "Gunji village at the confluence of the high valleys"),
  routeJolingkong: img("routes", "jolingkong-adi-kailash.jpg", "Jolingkong with Adi Kailash on the skyline"),
  routeNabidhang: img("routes", "nabidhang-om-parvat.jpg", "The road to Nabidhang with Om Parvat ahead"),
  routeReturn: img("routes", "return-journey.jpg", "The descent through forested Kumaon valleys on the return journey"),

  /* Packages ------------------------------------------------------------------ */
  pkgStandard: img("packages", "standard-yatra.jpg", "Adi Kailash across Parvati Sarovar"),
  pkgExtended: img("packages", "extended-himalayan-journey.jpg", "Layered Himalayan ridges above the Vyas Valley"),
  pkgPrivate: img("packages", "private-customised-tour.jpg", "A private vehicle paused at a high mountain viewpoint"),
  pkgGroup: img("packages", "group-pilgrimage.jpg", "A group of pilgrims walking together toward Adi Kailash"),
  pkgPhotography: img("packages", "spiritual-photography-tour.jpg", "A photographer framing Om Parvat at golden hour"),
} satisfies Record<string, ImageAsset>;

export type ImageKey = keyof typeof images;
