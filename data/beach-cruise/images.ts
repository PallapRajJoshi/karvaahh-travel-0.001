/* ============================================================
   BEACH & CRUISE HOLIDAYS — IMAGES
   ------------------------------------------------------------
   Only photos already used elsewhere in the project, each with
   alt text describing what the photo actually shows. Places with
   no genuine photo yet (Mauritius, Seychelles, Goa, Andaman,
   Sri Lanka's coast) use `src: null`, which renders a designed
   ocean placeholder instead of a misleading stock image.
   ============================================================ */

import type { PageImage } from "@/components/activities/experience/types";

const unsplash = (id: string, label: string, alt: string, w = 1400, objectPosition?: string): PageImage => ({
  src: `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=75`,
  label,
  alt,
  ...(objectPosition ? { objectPosition } : {}),
});

const planned = (label: string, alt: string): PageImage => ({ src: null, label, alt });

/* ---------- Hero & closing ---------- */
export const heroMaldives = unsplash("1514282401047-d79a71a590e8", "Maldives", "Overwater villas above a turquoise lagoon in the Maldives", 2400, "center 60%");
export const reefAerial = unsplash("1547079631-442498027a07", "Reef and lagoon", "Aerial view of waves breaking on a reef edge beside a lagoon", 2000);

/* ---------- Destinations ---------- */
export const maldivesPavilion = unsplash("1573843981267-be1999ff37cd", "Maldives", "An overwater pavilion on a turquoise lagoon in the Maldives");
export const baliTanahLot = unsplash("1518548419970-58e3b4079ab2", "Bali", "Tanah Lot sea temple on its rock off the Bali coast at sunset");
export const krabiLongtails = unsplash("1552465011-b4e21bf6e79a", "Phuket & Krabi", "Longtail boats below limestone cliffs on a Thailand beach");
export const santoriniOia = unsplash("1570077188670-e3a8d69ac5ff", "Greek Islands", "Whitewashed houses of Oia stepping down the cliffs of Santorini");
export const haLongBay = unsplash("1528127269322-539801943592", "Ha Long Bay", "Boats among the limestone islands of Ha Long Bay, Vietnam");
export const dubaiCoast = unsplash("1518684079-3c830dcef090", "Dubai", "The Burj Al Arab on the Dubai coastline");
export const singaporeBay = unsplash("1525625293386-3f8f99389edd", "Singapore", "Marina Bay Sands and the Singapore waterfront");

export const mauritius = planned("Mauritius", "Mauritius — photo coming soon");
export const seychelles = planned("Seychelles", "Seychelles — photo coming soon");
export const goa = planned("Goa", "Goa — photo coming soon");
export const andaman = planned("Andaman Islands", "Andaman Islands — photo coming soon");
export const sriLankaCoast = planned("Sri Lanka", "Sri Lanka's south coast — photo coming soon");

/* ---------- Experiences ---------- */
export const goldenBeach = unsplash("1507525428034-b723cf961d3e", "Beach at golden hour", "Gentle waves on a sandy beach at golden hour");
export const boatOverReef = unsplash("1650754620047-c607e36fb00e", "Boat over reef", "A boat anchored above a shallow turquoise reef");
export const cruiseHarbour = unsplash("1563829467124-e97ae7f229fd", "Cruise ship", "A cruise ship docked in a mountain-ringed harbour, seen from above");
export const couplesShore = unsplash("1575388104683-e076ee9ccaa0", "Sunset walk", "A couple holding hands while walking along the shore at sunset");
export const coralReef = unsplash("1580696499419-84ca9688f947", "Coral reef", "Green and brown corals on a reef dive site");
export const familySea = unsplash("1475503572774-15a45e5d60b9", "Family by the sea", "Two adults and a child holding hands at the edge of the sea");
export const seafood = unsplash("1515443961218-a51367888e4b", "Seafood", "Seafood paella served straight from the pan");
