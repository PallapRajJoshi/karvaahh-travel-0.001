/* ============================================================
   EXCLUSIVE FAR-WEST NEPAL CIRCUIT — IMAGES
   ------------------------------------------------------------
   Only two real Far-West photos exist in the project today (Upper
   Dolpo and Nepalgunj). Rara Lake, Khaptad and Api Nampa point at
   the paths their own destination pages already plan to use, so one
   upload serves every page. Everything else has a planned file in
   /public/images/far-west-nepal/.

   ► To add a photo, save it with the exact file name below. It
     appears automatically on the next build — until then a designed
     placeholder renders (never a broken or unrelated stock photo).
     See components/activities/experience/resolve-images.ts.

   Use authentic photographs you have the rights to publish.
   ============================================================ */

import type { PageImage } from "@/components/activities/experience/types";

const DIR = "/images/far-west-nepal";

const img = (src: string, label: string, alt: string, objectPosition?: string): PageImage => ({
  src,
  label,
  alt,
  ...(objectPosition ? { objectPosition } : {}),
});

/* ---------- Shared with existing destination pages ---------- */
export const rara = img("/images/destinations/rara-lake/hero-rara-lake.jpg", "Rara Lake", "Turquoise waters of Rara Lake framed by pine forest and Himalayan peaks in Mugu, Karnali");
export const khaptad = img("/images/destinations/khaptad/hero/khaptad-meadows-hero.jpg", "Khaptad National Park", "The open meadows of Khaptad National Park in far-western Nepal");
export const apiHimal = img("/images/destinations/api-nampa-base-camp/hero/api-nampa-base-camp-hero.webp", "Api Himal", "Mount Api above the remote valleys of Darchula in far-western Nepal");

/* ---------- Real project photos ---------- */
export const dolpo = img("/images/home/upper-dolpo-nepal-himalayan.jpg", "Dolpo", "High, open trans-Himalayan landscape in the Dolpo region of Karnali Province");
export const nepalgunj = img("/images/lumbini/nepalgunj-banke-nepal-city-landscape.jpg", "Nepalgunj", "The city of Nepalgunj in Banke, western Nepal's main air and road gateway");

/* ---------- Planned files in /public/images/far-west-nepal/ ---------- */
export const jumla = img(`${DIR}/jumla-valley-karnali-nepal.jpg`, "Jumla", "Terraced fields and traditional houses in the Jumla valley, Karnali");
export const sinja = img(`${DIR}/sinja-valley-jumla-nepal.jpg`, "Sinja Valley", "The historic Sinja Valley in Jumla, seat of the medieval Khasa Malla kingdom");
export const kolti = img(`${DIR}/kolti-bajura-nepal.jpg`, "Kolti, Bajura", "Hillside settlement of Kolti in Bajura district, far-western Nepal");
export const martadi = img(`${DIR}/martadi-bajura-nepal.jpg`, "Martadi", "Martadi, the district headquarters of Bajura, among forested hills");
export const badimalika = img(`${DIR}/badimalika-temple-bajura-nepal.jpg`, "Badimalika Temple", "The high-altitude Badimalika Temple on its open ridge in Bajura");
export const shuklaphanta = img(`${DIR}/shuklaphanta-national-park-nepal.jpg`, "Shuklaphanta National Park", "Open grassland and wetland in Shuklaphanta National Park, Kanchanpur");
export const mahakali = img(`${DIR}/mahakali-river-western-nepal.jpg`, "Mahakali River", "The Mahakali River along Nepal's western border with India");
