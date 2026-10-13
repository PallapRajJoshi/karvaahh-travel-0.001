/**
 * Image registry for /packages/northeast-india.
 *
 * No Northeast India photos exist in /public yet, so every entry is a
 * *planned* file under /public/images/northeast-india/. Until a file is saved
 * at its path, resolveImages swaps it for `src: null` and the page renders a
 * designed placeholder (misty ridge art + place name) instead of a broken
 * image. Drop the photo in with the exact file name and it appears on the next
 * build — no data change needed.
 *
 * Never point these at unrelated stock photos or at photos of other regions
 * (e.g. Ilam tea gardens in Nepal are not Assam).
 */

export type Img = {
  /** `null` once resolved when the planned file is missing → placeholder. */
  src: string | null;
  alt: string;
  /** Shown on the placeholder. */
  label: string;
  focus?: string;
};

const DIR = "/images/northeast-india";

const planned = (file: string, label: string, alt: string, focus?: string): Img => ({
  src: `${DIR}/${file}`,
  label,
  alt,
  ...(focus ? { focus } : {}),
});

export const IMAGES = {
  /* ---------- hero + closing ---------- */
  hero: planned(
    "northeast-india-misty-mountain-valley.jpg",
    "Northeast India",
    "Mist drifting over forested ridges and a winding mountain road in Northeast India",
    "50% 55%",
  ),
  closing: planned("meghalaya-green-valley-clouds.jpg", "Meghalaya", "Clouds rolling over the green valleys of Meghalaya"),

  /* ---------- states ---------- */
  arunachal: planned("arunachal-tawang-monastery.jpg", "Arunachal Pradesh", "Tawang Monastery on a ridge above the Tawang valley in Arunachal Pradesh"),
  assam: planned("assam-tea-garden.jpg", "Assam", "Rows of tea bushes stretching across an estate in Upper Assam"),
  meghalaya: planned("meghalaya-sohra-waterfall.jpg", "Meghalaya", "A waterfall plunging from forested cliffs near Sohra (Cherrapunji), Meghalaya"),
  nagaland: planned("nagaland-kohima-hills.jpg", "Nagaland", "Hill town of Kohima spread across green ridges in Nagaland"),
  manipur: planned("manipur-loktak-lake-phumdis.jpg", "Manipur", "Circular floating phumdis on Loktak Lake in Manipur"),
  mizoram: planned("mizoram-aizawl-ridge.jpg", "Mizoram", "Aizawl's houses climbing a steep green ridge in Mizoram"),
  tripura: planned("tripura-neermahal-palace.jpg", "Tripura", "Neermahal water palace on Rudrasagar Lake in Tripura"),
  sikkim: planned("sikkim-kanchenjunga-view.jpg", "Sikkim", "Kanchenjunga rising above forested ridges in Sikkim"),

  /* ---------- destinations ---------- */
  tawang: planned("tawang-sela-pass.jpg", "Tawang & Sela Pass", "Prayer flags at Sela Pass on the mountain road to Tawang"),
  ziro: planned("ziro-valley-rice-fields.jpg", "Ziro Valley", "Rice fields and pine-covered hills in Ziro Valley, Arunachal Pradesh"),
  kaziranga: planned("kaziranga-one-horned-rhino.jpg", "Kaziranga", "A greater one-horned rhinoceros grazing in the grasslands of Kaziranga National Park"),
  manas: planned("manas-national-park-river.jpg", "Manas", "The Manas River flowing past forest in Manas National Park, Assam"),
  majuli: planned("majuli-brahmaputra-river-island.jpg", "Majuli", "Country boats on the Brahmaputra beside Majuli river island"),
  guwahati: planned("guwahati-kamakhya-brahmaputra.jpg", "Guwahati", "Kamakhya Temple on Nilachal Hill above Guwahati and the Brahmaputra"),
  shillong: planned("shillong-umiam-lake.jpg", "Shillong", "Umiam Lake surrounded by pine hills on the road to Shillong"),
  sohra: planned("sohra-cherrapunji-cliffs.jpg", "Sohra (Cherrapunji)", "Waterfalls pouring over the cliffs and gorges of Sohra in Meghalaya"),
  rootBridge: planned("meghalaya-living-root-bridge.jpg", "Living root bridge", "A living root bridge woven from rubber-fig roots over a forest stream in Meghalaya"),
  dawki: planned("dawki-umngot-river-boats.jpg", "Dawki & Umngot", "Wooden boats on the clear Umngot River at Dawki, Meghalaya"),
  loktak: planned("loktak-lake-keibul-lamjao.jpg", "Loktak Lake", "Phumdis floating on Loktak Lake near Keibul Lamjao National Park"),
  kohima: planned("kohima-war-cemetery.jpg", "Kohima", "Terraced memorials at the Kohima War Cemetery in Nagaland"),
  aizawl: planned("aizawl-hill-city.jpg", "Aizawl", "Aizawl built along a ridge above deep green valleys"),
  unakoti: planned("unakoti-rock-carvings.jpg", "Unakoti", "Large rock-cut relief carvings in the forest at Unakoti, Tripura"),
  agartala: planned("agartala-ujjayanta-palace.jpg", "Agartala", "The white facade of Ujjayanta Palace in Agartala"),
  gangtok: planned("gangtok-tsomgo-lake.jpg", "Gangtok & Tsomgo", "Tsomgo Lake in a high mountain basin near Gangtok, Sikkim"),
  pelling: planned("pelling-pemayangtse-monastery.jpg", "Pelling", "Pemayangtse Monastery near Pelling with the Kanchenjunga range behind"),
  northSikkim: planned("north-sikkim-yumthang-valley.jpg", "North Sikkim", "Yumthang Valley with a river running through high meadows in North Sikkim"),

  /* ---------- experiences ---------- */
  mountainRoad: planned("arunachal-mountain-road.jpg", "Mountain escapes", "A mountain road winding through Himalayan valleys in Arunachal Pradesh"),
  monastery: planned("sikkim-rumtek-monastery.jpg", "Monasteries", "Prayer wheels and painted eaves at Rumtek Monastery, Sikkim"),
  craft: planned("northeast-handloom-weaving.jpg", "Handloom traditions", "Hands weaving a patterned textile on a traditional loom"),
  brahmaputra: planned("brahmaputra-river-sunset.jpg", "Brahmaputra", "Sunset over the wide braided channels of the Brahmaputra in Assam"),
} as const;
