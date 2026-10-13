/* ============================================================
   JAMMU & KASHMIR TOUR PACKAGES — IMAGES
   ------------------------------------------------------------
   No Jammu & Kashmir photography exists in the project yet.
   Srinagar, Gulmarg, Pahalgam, Sonamarg, Katra and Vaishno Devi
   reuse the planned files of the Amarnath & Vaishno Devi Yatra
   page, so one upload fills both pages. Every other image has a
   planned file in /public/images/jammu-kashmir/.

   ► To add a photo, save it with the exact file name below. It
     appears automatically on the next build — until then a designed
     placeholder is shown (never a broken or unrelated stock photo).
     See components/activities/experience/resolve-images.ts.

   Use authentic photographs you have the rights to publish.
   ============================================================ */

import type { PageImage } from "@/components/activities/experience/types";
import { IMAGES as AVD } from "@/components/spiritual-journeys/amarnath-vaishno-devi/data/images";

const DIR = "/images/jammu-kashmir";

const planned = (file: string, label: string, alt: string, objectPosition?: string): PageImage => ({
  src: `${DIR}/${file}`,
  label,
  alt,
  ...(objectPosition ? { objectPosition } : {}),
});

const fromAvd = (image: { src: string; alt: string }, label: string): PageImage => ({ src: image.src, alt: image.alt, label });

/* ---------- Hero & social ---------- */
export const hero = planned(
  "dal-lake-houseboats-snow-peaks-hero.jpg",
  "Dal Lake, Srinagar",
  "Wooden houseboats and a shikara on Dal Lake in Srinagar beneath snow-covered Himalayan peaks",
  "center 55%",
);
export const og = planned("og-jammu-kashmir-tour-packages.jpg", "Jammu & Kashmir tour packages", "Jammu & Kashmir Tour Packages with Karvaahh");

/* ---------- Kashmir Valley (planned files of the Amarnath & Vaishno Devi page) ---------- */
export const srinagar = fromAvd(AVD.srinagar, "Srinagar");
export const gulmarg = fromAvd(AVD.gulmarg, "Gulmarg");
export const pahalgam = fromAvd(AVD.pahalgam, "Pahalgam");
export const sonamarg = fromAvd(AVD.sonamarg, "Sonamarg");
export const amarnath = fromAvd(AVD.amarnath, "Amarnath");

/* ---------- Jammu region (planned files of the Amarnath & Vaishno Devi page) ---------- */
export const vaishnoDevi = fromAvd(AVD.vaishnoDevi, "Vaishno Devi");
export const katra = fromAvd(AVD.katra, "Katra");

/* ---------- Planned for this page ---------- */
export const jammu = planned("jammu-raghunath-temple.jpg", "Jammu", "Temple spires rising above the old city of Jammu");
export const patnitop = planned("patnitop-deodar-forest-views.jpg", "Patnitop", "Deodar forest and layered mountain ridges at Patnitop");
export const doodhpathri = planned("doodhpathri-meadows-stream.jpg", "Doodhpathri", "A clear stream winding through the open meadows of Doodhpathri");
export const shikara = planned("shikara-ride-dal-lake.jpg", "Shikara on Dal Lake", "A shikara gliding across Dal Lake in the soft evening light");
export const mughalGardens = planned("mughal-gardens-srinagar-terraces.jpg", "Mughal Gardens", "Terraced lawns, fountains and chinar trees in a Mughal garden in Srinagar");
export const gulmargWinter = planned("gulmarg-winter-snow-slopes.jpg", "Gulmarg in winter", "Snow-covered slopes and pine forest at Gulmarg in winter");
export const kashmiriWazwan = planned("kashmiri-kahwa-wazwan.jpg", "Kashmiri cuisine", "Kashmiri kahwa served from a traditional samovar beside local dishes");
export const autumnChinar = planned("kashmir-autumn-chinar-leaves.jpg", "Autumn in Kashmir", "Golden and red chinar leaves in a Kashmir garden in autumn");
export const couple = planned("kashmir-couple-houseboat-sunset.jpg", "Kashmir for couples", "A quiet houseboat veranda overlooking Dal Lake at sunset");
export const family = planned("kashmir-family-meadow-holiday.jpg", "Family holiday in Kashmir", "A family walking through a green meadow below pine-covered mountains in Kashmir");
