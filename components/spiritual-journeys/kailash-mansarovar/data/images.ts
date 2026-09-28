import type { ImageAsset } from "./types";

const img = (file: string, alt: string, ready = false): ImageAsset => ({ file, alt, ready });

/**
 * Single image manifest for the page. Adding real photography means dropping
 * files into /public/images/spiritual-journeys/kailash-mansarovar/ and setting
 * ready: true on the matching entry.
 */
export const IMAGES = {
  hero: img(
    "kailash-mansarovar-yatra-nepal.jpg",
    "Mount Kailash rising above the Tibetan Plateau in early morning light",
  ),
  kailashDarshan: img(
    "mount-kailash-darshan-tibet.jpg",
    "The snow-streaked face of Mount Kailash seen on the approach to Darchen",
  ),
  mansarovar: img(
    "lake-mansarovar-kailash-yatra.jpg",
    "The turquoise waters of Lake Mansarovar with snow peaks on the horizon",
  ),
  kora: img("kailash-kora-yatra.jpg", "Pilgrims walking the Kailash Kora trail through a high valley"),
  dolmaLa: img(
    "dolma-la-pass-kailash.jpg",
    "Prayer flags covering the rocks of Dolma La Pass on the Kailash Kora",
  ),
  darchen: img("darchen-kailash-yatra.jpg", "Darchen town at the foot of Mount Kailash"),
  plateau: img(
    "tibetan-plateau-kailash-yatra.jpg",
    "A road crossing the open Tibetan Plateau toward distant mountains",
  ),
  kathmandu: img(
    "kathmandu-kailash-yatra-briefing.jpg",
    "Kathmandu, where Kailash Mansarovar journeys from Nepal usually begin",
  ),
  border: img("nepal-tibet-border-kailash-route.jpg", "Mountain road approaching the Nepal–Tibet border"),
  saga: img("saga-tibet-kailash-route.jpg", "Saga town on the Tibetan Plateau"),
  yamadwar: img(
    "yamadwar-kailash-parikrama.jpg",
    "The Yamadwar gateway hung with prayer flags at the start of the Kailash Parikrama",
  ),
  dirapuk: img("dirapuk-north-face-kailash.jpg", "The north face of Mount Kailash seen from Dirapuk"),
  zuthulpuk: img("zuthulpuk-monastery-kailash-kora.jpg", "Zuthulpuk Monastery in the valley below Dolma La"),
  monastery: img("tibetan-monastery-kailash-region.jpg", "A Tibetan monastery in the Kailash region"),
  prayerFlags: img("prayer-flags-kailash-kora.jpg", "Strings of prayer flags moving in the wind on the Kailash Kora"),
  himalayanRoad: img(
    "himalayan-road-tibet-kailash.jpg",
    "A high Himalayan road winding across the plateau toward Kailash",
  ),
  og: img("kailash-mansarovar-yatra-og.jpg", "Kailash Mansarovar Yatra from Nepal with Karvaahh"),
} satisfies Record<string, ImageAsset>;
