/* ============================================================
   SPIRITUAL & PILGRIMAGE TOURS — IMAGES
   ------------------------------------------------------------
   Existing project photos only, each checked against what it
   actually shows. Nepal photos are shared with the Nepal
   pilgrimage page; Char Dham photos point at the planned files of
   the Char Dham pages. `resolveImages` turns any missing file into
   a designed placeholder, so a real photo appears automatically
   once it is added — no data change needed.

   No genuine photo exists yet for Boudhanath, Namobuddha,
   Tengboche, Haridwar or Rishikesh: planned paths are used.
   ============================================================ */

import type { PageImage } from "@/components/activities/experience/types";
import * as CD from "@/data/char-dham/images";
import * as P from "@/data/pilgrimage/images";

const img = (src: string, label: string, alt: string, objectPosition?: string): PageImage => ({ src, label, alt, ...(objectPosition ? { objectPosition } : {}) });

/* ---------- Nepal (shared with /packages/nepal/spiritual-pilgrimage-tours) ---------- */
export const {
  pashupatinath,
  pashupatinathAarati,
  swayambhunath,
  muktinath,
  muktinathSpouts,
  mustangMonastery,
  janakiMandir,
  janakiTemple,
  manakamanaCableCar,
  pathibhara,
  swargadwari,
  mayaDevi,
  sacredGarden,
  monasticZone,
  peacePagoda,
  krishnaMandir,
  gosainkunda,
  kathmanduValley,
} = P;

export const swayambhuHill = img("/images/home/swayambhu-view.jpg", "Swayambhunath", "The forested hill of Swayambhunath with the Kathmandu Valley beyond at sunrise");
export const pashupatiShrines = img("/images/home/pashupatinath-history.jpg", "Pashupatinath", "Stone Shiva shrines in the courtyards of Pashupatinath");

/* Planned photos (placeholder until the file is added). */
export const boudhanath = img("/images/spiritual-pilgrimage/boudhanath-stupa-kathmandu.jpg", "Boudhanath Stupa", "The great white dome of Boudhanath Stupa ringed by prayer wheels and monasteries in Kathmandu");
export const namobuddha = img("/images/spiritual-pilgrimage/namobuddha-stupa-kavre.jpg", "Namobuddha", "The hilltop stupa and monastery of Namobuddha above the Kavre hills");
export const tengboche = img("/images/spiritual-pilgrimage/tengboche-monastery-khumbu.jpg", "Tengboche Monastery", "Tengboche Monastery in the Khumbu with Ama Dablam rising behind");

/* ---------- India ---------- */
export const kashiAarti = img("/images/home/kashi.jpg", "Ganga Aarti, Varanasi", "Priests raising tiered brass lamps during the evening Ganga Aarti on the ghats of Varanasi", "center 55%");
export const varanasiGhats = img("/images/home/varanasi.jpg", "Varanasi ghats", "Sandstone palaces and stepped ghats along the Ganga in Varanasi, with pilgrims in a wooden boat");
export const kailash = img("/images/kailash-mansarovar-yatra.webp", "Mount Kailash", "The snow-covered pyramid of Mount Kailash above the Tibetan plateau");
export const haridwar = img("/images/spiritual-journeys/haridwar-rishikesh/hero-har-ki-pauri-ganga-aarti.webp", "Har Ki Pauri, Haridwar", "Evening Ganga Aarti at Har Ki Pauri, Haridwar, with lamps raised over the river");
export const rishikesh = img("/images/spiritual-journeys/haridwar-rishikesh/intro-rishikesh-ganga-foothills.webp", "Rishikesh", "The Ganga flowing through Rishikesh between forested Himalayan foothills");

export const { kedarnathTemple, badrinathTemple, gangotriTemple, yamunotriTemple, heroPanorama: charDhamPanorama, helicopterYatra } = CD;
