/* ============================================================
   CHAR DHAM YATRA — IMAGE PLAN
   ------------------------------------------------------------
   No Char Dham photography exists in the project yet. Every image
   below points to its planned file in /public/images/char-dham/.

   ► To add a photo, save it with the exact file name below.
     It appears automatically on the next build/reload — until
     then, a designed placeholder is shown (never a broken image
     or an unrelated stock photo). See resolve-images.ts.

   Use authentic photographs you have the rights to publish.
   ============================================================ */

import type { PageImage } from "@/components/activities/experience/types";

const DIR = "/images/char-dham";

/** A planned photo: rendered only once the file exists in /public. */
const planned = (file: string, label: string, alt: string, objectPosition?: string): PageImage => ({
  src: `${DIR}/${file}`,
  label,
  alt,
  ...(objectPosition ? { objectPosition } : {}),
});

/* ---------- Circuit ---------- */
export const heroPanorama = planned(
  "char-dham-yatra-uttarakhand.jpg",
  "Char Dham Yatra",
  "Snow-covered Garhwal Himalaya above a sacred temple valley on the Char Dham Yatra in Uttarakhand",
  "center 40%",
);
export const himalayanLandscape = planned("char-dham-himalayan-landscape.jpg", "Garhwal Himalaya", "Terraced villages and forested valleys beneath the snow peaks of the Garhwal Himalaya");
export const sunriseTemple = planned("char-dham-sunrise-temple.jpg", "Himalayan sunrise", "Sunrise lighting a Himalayan temple and the snow peaks behind it in Uttarakhand");
export const roadYatra = planned("char-dham-road-yatra-himalaya.jpg", "Road yatra", "A mountain road winding along a river valley on the Char Dham route in Uttarakhand");
export const helicopterYatra = planned("char-dham-helicopter-yatra.jpg", "Helicopter yatra", "A helicopter flying above the Garhwal Himalaya on a Char Dham helicopter yatra");

/* ---------- Yamunotri ---------- */
export const yamunotriTemple = planned("yamunotri-char-dham-temple.jpg", "Yamunotri Temple", "Yamunotri Temple of Goddess Yamuna beside the river in a narrow Himalayan gorge");
export const yamunaJankiChatti = planned("yamuna-river-janki-chatti.jpg", "Yamuna valley", "The Yamuna river valley near Janki Chatti on the approach to Yamunotri");

/* ---------- Gangotri ---------- */
export const gangotriTemple = planned("gangotri-char-dham-temple.jpg", "Gangotri Temple", "Gangotri Temple of Goddess Ganga on the banks of the Bhagirathi, Uttarakhand");
export const bhagirathiHarsil = planned("bhagirathi-river-harsil.jpg", "Bhagirathi valley", "The Bhagirathi river flowing through the Harsil valley beneath snow peaks");

/* ---------- Kedarnath ---------- */
export const kedarnathTemple = planned("kedarnath-char-dham-temple.jpg", "Kedarnath Temple", "The stone Kedarnath Temple of Lord Shiva against snow-covered Himalayan peaks", "center 45%");
export const mandakiniValley = planned("mandakini-valley-kedarnath.jpg", "Mandakini valley", "The glacial Mandakini valley around Kedarnath");
export const kedarnathHelicopter = planned("kedarnath-helicopter-yatra.jpg", "Kedarnath helicopter", "A helicopter in the Kedarnath valley on a Char Dham helicopter yatra");
export const omkareshwarUkhimath = planned("omkareshwar-temple-ukhimath.jpg", "Omkareshwar Temple, Ukhimath", "Omkareshwar Temple in Ukhimath, the winter seat of Kedarnath worship");

/* ---------- Badrinath ---------- */
export const badrinathTemple = planned("badrinath-char-dham-temple.jpg", "Badrinath Temple", "The colourful facade of Badrinath Temple on the banks of the Alaknanda");
export const alaknandaBadrinath = planned("alaknanda-nar-narayan-badrinath.jpg", "Alaknanda valley", "The Alaknanda river below the Nar and Narayan peaks at Badrinath");
export const badrinathHelicopter = planned("badrinath-helicopter-yatra.jpg", "Badrinath helicopter", "A helicopter near Badrinath on a Char Dham helicopter yatra");
export const manaVillage = planned("mana-village-badrinath.jpg", "Mana village", "Stone houses of Mana village near Badrinath");

/* ---------- People & experiences ---------- */
export const seniorPilgrims = planned("senior-pilgrims-char-dham.jpg", "Senior pilgrims", "Senior pilgrims travelling comfortably on the Char Dham Yatra");
export const familyYatra = planned("family-char-dham-yatra.jpg", "Family yatra", "A family together on the Char Dham Yatra in the Himalaya");
export const haridwarAarti = planned("haridwar-ganga-aarti.jpg", "Haridwar", "Evening Ganga Aarti on the ghats of Haridwar");

/* ---------- Nepal (existing verified photos) ---------- */
export const pashupatinath: PageImage = {
  src: "/images/bagmati/pashupatinath-temple-sacred-pilgrimage-bagmati-nepal.jpg",
  label: "Pashupatinath",
  alt: "Pashupatinath Temple in Kathmandu, Nepal",
};
export const muktinath: PageImage = {
  src: "/images/home/muktinath-temple.jpg",
  label: "Muktinath",
  alt: "Muktinath Temple and its sacred ponds in Mustang, Nepal",
};
export const kathmandu: PageImage = {
  src: "/images/bagmati/kathmandu-valley-swayambhunath-stupa-heritage-newar-culture-nepal.jpg",
  label: "Kathmandu",
  alt: "Swayambhunath Stupa overlooking the Kathmandu valley, Nepal",
};
