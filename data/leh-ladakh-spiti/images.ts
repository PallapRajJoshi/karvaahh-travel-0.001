/* ============================================================
   LEH–LADAKH, ZANSKAR & SPITI CIRCUIT — IMAGES
   ------------------------------------------------------------
   No Ladakh, Zanskar or Spiti photography exists in the project
   yet. Every image below is a planned file in
   /public/images/leh-ladakh-spiti/.

   ► To add a photo, save it with the exact file name below. It
     appears automatically on the next build — until then a designed
     placeholder is shown (never a broken or unrelated stock photo).
     See components/activities/experience/resolve-images.ts.

   Use authentic photographs you have the rights to publish.
   ============================================================ */

import type { PageImage } from "@/components/activities/experience/types";

const DIR = "/images/leh-ladakh-spiti";

const planned = (file: string, label: string, alt: string, objectPosition?: string): PageImage => ({
  src: `${DIR}/${file}`,
  label,
  alt,
  ...(objectPosition ? { objectPosition } : {}),
});

/* ---------- Hero, CTA & social ---------- */
export const hero = planned(
  "pangong-tso-ladakh-hero.jpg",
  "Pangong Tso",
  "Turquoise waters of Pangong Tso beneath bare brown Ladakh mountains under a deep blue sky",
  "center 55%",
);
export const cta = planned(
  "zanskar-valley-road-cta.jpg",
  "Zanskar Valley",
  "A mountain road winding through the wide Zanskar valley below snow-dusted peaks",
);
export const og = planned("og-leh-ladakh-spiti-circuit.jpg", "Leh–Ladakh & Spiti Circuit", "Leh–Ladakh, Zanskar & Spiti Circuit with Karvaahh Tours & Travels");

/* ---------- Ladakh ---------- */
export const pangong = planned("pangong-tso.jpg", "Pangong Tso", "Blue waters of Pangong Tso lake framed by arid Ladakh mountains");
export const leh = planned("leh-shanti-stupa.jpg", "Leh & Shanti Stupa", "White Shanti Stupa on a ridge above Leh town with mountains behind");
export const thiksey = planned("thiksey-monastery.jpg", "Thiksey Monastery", "Tiered white buildings of Thiksey Monastery climbing a hill in the Indus Valley");
export const lamayuru = planned("lamayuru-monastery.jpg", "Lamayuru", "Lamayuru Monastery above eroded moonland formations in western Ladakh");
export const nubra = planned("nubra-valley-hunder.jpg", "Nubra Valley", "Sand dunes of Hunder in Nubra Valley with mountains in the distance");
export const turtuk = planned("turtuk-village.jpg", "Turtuk", "Stone houses and green apricot orchards in Turtuk village in the Shyok valley");
export const tsoMoriri = planned("tso-moriri.jpg", "Tso Moriri", "Still waters of Tso Moriri lake on the Changthang plateau");
export const hanle = planned("hanle-night-sky.jpg", "Hanle", "Star-filled night sky over the high plains of Hanle in Ladakh");

/* ---------- Zanskar ---------- */
export const phugtal = planned("phugtal-monastery.jpg", "Phugtal Monastery", "Phugtal Monastery built into a cliff-face cave above the Tsarap river in Zanskar");
export const karsha = planned("karsha-monastery-padum.jpg", "Padum & Karsha", "Karsha Monastery on a hillside above the Zanskar valley near Padum");
export const drangDrung = planned("drang-drung-glacier.jpg", "Drang-Drung Glacier", "Drang-Drung Glacier flowing down from snow peaks near Pensi La");

/* ---------- Spiti & Lahaul ---------- */
export const keyMonastery = planned("key-monastery-spiti.jpg", "Key Monastery", "Key Monastery on a conical hill above the Spiti valley");
export const chicham = planned("chicham-bridge.jpg", "Chicham Bridge", "Chicham Bridge spanning a deep gorge near Kibber in Spiti");
export const langza = planned("langza-buddha.jpg", "Langza", "Buddha statue overlooking the high village of Langza in Spiti");
export const tabo = planned("tabo-dhankar.jpg", "Dhankar & Tabo", "Dhankar Monastery perched on a cliff above the confluence of the Spiti and Pin rivers");
export const pinValley = planned("pin-valley.jpg", "Pin Valley", "Villages and fields in the Pin Valley below snow-capped peaks");
export const chandratal = planned("chandratal-lake.jpg", "Chandratal", "Crescent-shaped Chandratal lake surrounded by mountains in Lahaul–Spiti");
export const sissu = planned("sissu-lahaul.jpg", "Sissu & Lahaul", "Green fields and a waterfall at Sissu in Lahaul north of the Atal Tunnel");
export const manaliLeh = planned("manali-leh-highway.jpg", "Manali–Leh Highway", "The Manali–Leh Highway winding across high-altitude plains toward distant passes");
