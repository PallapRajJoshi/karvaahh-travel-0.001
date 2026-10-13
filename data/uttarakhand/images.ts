/* ============================================================
   UTTARAKHAND TOUR PACKAGES — IMAGES
   ------------------------------------------------------------
   No Uttarakhand photography exists in the project yet. Char Dham,
   Haridwar, Rishikesh, Mussoorie and Adi Kailash reuse the planned
   files of their own pages; every other destination has a planned
   file in /public/images/uttarakhand/.

   ► To add a photo, save it with the exact file name below. It
     appears automatically on the next build — until then a designed
     placeholder is shown (never a broken or unrelated stock photo).
     See components/activities/experience/resolve-images.ts.

   Use authentic photographs you have the rights to publish.
   ============================================================ */

import type { PageImage } from "@/components/activities/experience/types";
import * as CD from "@/data/char-dham/images";
import { images as AK } from "@/data/india-pilgrimage/adi-kailash-om-parvat/images";
import { haridwar, rishikesh } from "@/data/spiritual-pilgrimage/images";

const DIR = "/images/uttarakhand";

const planned = (file: string, label: string, alt: string, objectPosition?: string): PageImage => ({
  src: `${DIR}/${file}`,
  label,
  alt,
  ...(objectPosition ? { objectPosition } : {}),
});

/* ---------- Hero & social ---------- */
export const hero = planned(
  "uttarakhand-garhwal-himalaya-hero.jpg",
  "Garhwal Himalaya",
  "Snow peaks of the Garhwal Himalaya above forested river valleys in Uttarakhand at first light",
  "center 40%",
);
export const og = planned("og-uttarakhand-tour-packages.jpg", "Uttarakhand tour packages", "Uttarakhand Tour Packages with Karvaahh Travels");

/* ---------- Char Dham (planned files of /activities/char-dham-yatra) ---------- */
export const { kedarnathTemple, badrinathTemple, gangotriTemple, yamunotriTemple, heroPanorama: charDhamPanorama, helicopterYatra, roadYatra, familyYatra, seniorPilgrims, kedarnathHelicopter, himalayanLandscape } = CD;

/* ---------- River towns ---------- */
export { haridwar, rishikesh };
export const mussoorie: PageImage = {
  src: "/images/spiritual-journeys/haridwar-rishikesh/mussoorie.webp",
  label: "Mussoorie",
  alt: "Mussoorie's ridge-top town with layered Himalayan foothills fading into the distance",
};
export const devprayag = planned("devprayag-alaknanda-bhagirathi-confluence.jpg", "Devprayag", "The Alaknanda and Bhagirathi rivers meeting at Devprayag to form the Ganga");
export const rishikeshYoga = planned("rishikesh-yoga-ganga-riverside.jpg", "Yoga in Rishikesh", "A quiet riverside yoga session on the banks of the Ganga in Rishikesh");

/* ---------- Hill stations ---------- */
export const nainital = planned("nainital-naini-lake-boats.jpg", "Nainital", "Rowing boats on Naini Lake surrounded by the forested hills of Nainital");
export const auli = planned("auli-snow-slopes-nanda-devi.jpg", "Auli", "Snow-covered slopes at Auli with the Garhwal Himalaya on the horizon");
export const chopta = planned("chopta-meadows-tungnath-trail.jpg", "Chopta", "Alpine meadows and rhododendron forest along the Tungnath trail near Chopta");
export const lansdowne = planned("lansdowne-oak-pine-forest.jpg", "Lansdowne", "Oak and pine forest around the quiet hill town of Lansdowne");
export const munsiyari = planned("munsiyari-panchachuli-peaks.jpg", "Munsiyari", "The five Panchachuli peaks rising above Munsiyari in the Kumaon Himalaya");
export const ranikhetAlmora = planned("almora-ranikhet-kumaon-hills.jpg", "Ranikhet & Almora", "Terraced Kumaoni villages and pine ridges near Almora and Ranikhet");

/* ---------- Wildlife & nature ---------- */
export const corbett = planned("jim-corbett-sal-forest-safari.jpg", "Jim Corbett National Park", "A safari track through sal forest and grassland in Jim Corbett National Park");
export const valleyOfFlowers = planned("valley-of-flowers-alpine-meadow.jpg", "Valley of Flowers", "Wildflowers carpeting the alpine meadows of the Valley of Flowers National Park");
export const pangot = planned("pangot-himalayan-forest-birds.jpg", "Pangot", "Oak forest and misty ridges around Pangot near Nainital");

/* ---------- Kumaon pilgrimage (planned files of the Adi Kailash page) ---------- */
export const adiKailash: PageImage = {
  src: AK.hero.src,
  label: "Om Parvat",
  alt: AK.hero.alt,
  objectPosition: AK.hero.focus,
};
