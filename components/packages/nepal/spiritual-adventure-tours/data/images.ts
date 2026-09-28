import type { ImageAsset } from "../types";

/**
 * Central image registry for the page.
 *
 * All paths point at /public/images/packages/nepal/spiritual-adventure-tours/.
 * The files shipped with this build are labelled PLACEHOLDERS. To go live, drop
 * a real photo in with the same filename, or change `src` here. No component
 * code changes are needed either way.
 *
 * Remote URLs (e.g. a CDN) also work: add the host to `images.remotePatterns`
 * in next.config.ts first.
 *
 * When you swap in a real photo, set `placeholder: false` (or remove it).
 */
const BASE = "/images/packages/nepal/spiritual-adventure-tours";

const img = (path: string, alt: string, focus?: string): ImageAsset => ({
  src: `${BASE}/${path}`,
  alt,
  focus,
  placeholder: true,
});

export const images = {
  hero: {
    main: img(
      "hero/nepal-himalaya-temple-dawn.jpg",
      "Snow-capped Himalayan peaks at dawn above a pagoda-roofed temple and a terraced valley in Nepal",
      "50% 40%",
    ),
  },
  overview: {
    main: img(
      "overview/annapurna-range-pokhara-valley.jpg",
      "The Annapurna range rising above a green valley and lake near Pokhara",
    ),
    inset: img(
      "overview/prayer-flags-himalayan-pass.jpg",
      "Colourful Buddhist prayer flags fluttering on a Himalayan ridge",
    ),
  },
  spiritual: {
    pashupatinath: img("spiritual/pashupatinath-temple-kathmandu.jpg", "Golden pagoda roofs of Pashupatinath Temple beside the Bagmati River in Kathmandu"),
    muktinath: img("spiritual/muktinath-temple-mustang.jpg", "Muktinath Temple with its sacred water spouts and prayer flags in Mustang"),
    janakiMandir: img("spiritual/janaki-mandir-janakpur.jpg", "The white domed facade of Janaki Mandir in Janakpur"),
    lumbini: img("spiritual/lumbini-maya-devi-temple.jpg", "Maya Devi Temple and the sacred pond at Lumbini, birthplace of the Buddha"),
    gosainkunda: img("spiritual/gosainkunda-lake-langtang.jpg", "The alpine lake of Gosainkunda surrounded by rocky mountain slopes"),
    swayambhunath: img("spiritual/swayambhunath-stupa-kathmandu.jpg", "Swayambhunath Stupa with its painted eyes overlooking the Kathmandu Valley"),
    boudhanath: img("spiritual/boudhanath-stupa-kathmandu.jpg", "The great white dome of Boudhanath Stupa strung with prayer flags"),
    manakamana: img("spiritual/manakamana-temple-gorkha.jpg", "Manakamana Temple on its forested hilltop in Gorkha"),
  },
  adventure: {
    everest: img("adventure/everest-base-camp-trek.jpg", "Trekkers on the trail to Everest Base Camp beneath the Khumbu peaks"),
    annapurnaBaseCamp: img("adventure/annapurna-base-camp-trek.jpg", "Annapurna Base Camp surrounded by a ring of snow peaks"),
    mardiHimal: img("adventure/mardi-himal-trek.jpg", "Mardi Himal ridge trail with Machhapuchhre rising behind"),
    manaslu: img("adventure/manaslu-circuit-trek.jpg", "Stone village and prayer walls on the Manaslu Circuit"),
    upperMustang: img("adventure/upper-mustang-lo-manthang.jpg", "Eroded red cliffs and the walled town of Lo Manthang in Upper Mustang"),
    gokyo: img("adventure/gokyo-lakes-trek.jpg", "Turquoise Gokyo lake below snow peaks in the Everest region"),
    phoksundo: img("adventure/shey-phoksundo-lake-dolpa.jpg", "The deep turquoise water of Phoksundo Lake in Dolpa"),
    langtang: img("adventure/langtang-valley-trek.jpg", "Langtang Valley with Kyanjin Gompa and glaciated peaks"),
  },
  culture: {
    rituals: img("culture/temple-rituals-aarti.jpg", "Evening aarti with oil lamps at a riverside temple in Nepal"),
    monasteries: img("culture/buddhist-monastery-meditation.jpg", "Buddhist monks in maroon robes inside a monastery prayer hall"),
    villages: img("culture/traditional-nepali-village.jpg", "Stone houses and terraced fields of a traditional hill village in Nepal"),
    viewpoints: img("culture/himalayan-sunrise-viewpoint.jpg", "Sunrise lighting Himalayan peaks from a hilltop viewpoint"),
    festivals: img("culture/nepal-festival-heritage.jpg", "A colourful festival procession in a historic Newar square"),
    retreats: img("culture/sacred-lake-nature-retreat.jpg", "Still lake water reflecting forested hills at a quiet nature retreat"),
  },
  packages: {
    kathmanduPokhara: img("packages/kathmandu-pokhara-spiritual-escape.jpg", "Phewa Lake in Pokhara with the Annapurna range at sunrise"),
    muktinathMustang: img("packages/muktinath-mustang-pilgrimage.jpg", "Road winding through the Kali Gandaki valley towards Muktinath"),
    buddhistHeritage: img("packages/nepal-buddhist-heritage-tour.jpg", "Butter lamps glowing before a golden Buddha statue"),
    spiritualHimalayan: img("packages/nepal-spiritual-himalayan-adventure.jpg", "Trekker pausing at a stupa with Himalayan peaks behind"),
    kathmanduPokharaLumbini: img("packages/kathmandu-pokhara-lumbini-tour.jpg", "Monastic zone gardens and temples in Lumbini"),
    customized: img("packages/customized-nepal-tour.jpg", "A handwritten travel map of Nepal with route notes"),
  },
  cta: {
    main: img("cta/himalayan-panorama-evening.jpg", "A wide Himalayan panorama glowing at dusk above layered valleys", "50% 60%"),
  },
  social: {
    /** 1200×630 for Open Graph / Twitter. */
    og: img("social/nepal-spiritual-adventure-og.jpg", "Nepal Spiritual & Adventure Tours by Karvaahh"),
  },
} as const;
