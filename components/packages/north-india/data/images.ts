/**
 * Image registry for /packages/north-india.
 *
 * Only a few North India photos exist in /public today (Varanasi, Delhi,
 * Rajasthan). Everything else is a *planned* file: the page renders a designed
 * placeholder until the photo is saved at that path (resolveImages swaps a
 * missing local file for `src: null`). Where another Karvaahh page already
 * plans a photo of the same place (Char Dham, Haridwar, Kashmir), this page
 * reuses that path so one upload fills both pages.
 *
 * Never point these at unrelated stock photos.
 */

import {
  badrinathTemple,
  gangotriTemple,
  haridwarAarti,
  helicopterYatra,
  kedarnathTemple,
  roadYatra,
  yamunotriTemple,
} from "@/data/char-dham/images";

export type Img = {
  /** `null` once resolved when the planned file is missing → placeholder. */
  src: string | null;
  alt: string;
  /** Shown on the placeholder. */
  label: string;
  focus?: string;
};

const DIR = "/images/north-india";
const HRY = "/images/spiritual-journeys/haridwar-rishikesh";
const AVD = "/images/spiritual-journeys/amarnath-vaishno-devi";

const img = (src: string, label: string, alt: string, focus?: string): Img => ({ src, label, alt, ...(focus ? { focus } : {}) });
const planned = (file: string, label: string, alt: string, focus?: string) => img(`${DIR}/${file}`, label, alt, focus);
const fromCharDham = (p: { src: string | null; label: string; alt: string; objectPosition?: string }) =>
  img(p.src ?? "", p.label, p.alt, p.objectPosition);

export const IMAGES = {
  /* ---------- existing photos ---------- */
  varanasiGhats: img(
    "/images/home/varanasi.jpg",
    "Varanasi",
    "Boats on the Ganga below the sandstone palaces and ghats of Varanasi",
    "50% 60%",
  ),
  varanasiAarti: img(
    "/images/home/kashi.jpg",
    "Ganga Aarti, Varanasi",
    "Priests raising brass lamps during the evening Ganga Aarti on the ghats of Varanasi",
    "60% 55%",
  ),
  redFort: img("/images/home/delhi.jpg", "Red Fort, Delhi", "The red sandstone Lahori Gate of the Red Fort in Delhi", "50% 60%"),
  oldDelhi: img("/images/home/delhi-old-view.jpg", "Old Delhi", "A busy Old Delhi lane with a street-food stall frying kachoris"),
  jaisalmerFort: img(
    "/images/home/kolry-india.jpg",
    "Jaisalmer Fort",
    "Aerial view of the golden sandstone Jaisalmer Fort in Rajasthan at sunset",
  ),
  tharDesert: img(
    "/images/destinations/rajasthan-travel-tour-packages.webp",
    "Thar Desert",
    "Camel handlers leading camels across Thar Desert dunes in Rajasthan at sunset",
  ),

  /* ---------- planned by other Karvaahh pages ---------- */
  haridwar: fromCharDham(haridwarAarti),
  rishikesh: img(`${HRY}/intro-rishikesh-ganga-foothills.webp`, "Rishikesh", "The Ganga flowing past Rishikesh in the Himalayan foothills"),
  mussoorie: img(`${HRY}/mussoorie.webp`, "Mussoorie", "Mussoorie's ridge-top town above the Doon Valley"),
  kedarnath: fromCharDham(kedarnathTemple),
  badrinath: fromCharDham(badrinathTemple),
  gangotri: fromCharDham(gangotriTemple),
  yamunotri: fromCharDham(yamunotriTemple),
  charDhamRoad: fromCharDham(roadYatra),
  charDhamHeli: fromCharDham(helicopterYatra),
  srinagar: img(`${AVD}/srinagar-dal-lake.jpg`, "Srinagar", "Traditional houseboats on Dal Lake in Srinagar"),
  gulmarg: img(`${AVD}/gulmarg-meadows.jpg`, "Gulmarg", "Meadows and mountain slopes at Gulmarg, Kashmir"),
  pahalgam: img(`${AVD}/pahalgam-lidder-valley.jpg`, "Pahalgam", "The Lidder River flowing through the valley near Pahalgam"),
  sonamarg: img(`${AVD}/sonamarg-valley.jpg`, "Sonamarg", "Sonamarg valley with a glacier-fed river and mountain peaks"),
  vaishnoDevi: img(`${AVD}/vaishno-devi-trikuta.jpg`, "Vaishno Devi", "The Mata Vaishno Devi pilgrimage in the Trikuta Hills"),
  amarnath: img(`${AVD}/amarnath-cave.jpg`, "Amarnath", "The Shri Amarnath Cave pilgrimage in the Himalaya"),

  /* ---------- planned for this page: save to /public/images/north-india/ ---------- */
  nainital: planned("nainital-naini-lake.jpg", "Nainital", "Naini Lake ringed by forested hills in Nainital"),
  auli: planned("auli-snow-slopes-nanda-devi.jpg", "Auli", "Snow slopes at Auli with Himalayan peaks on the horizon"),
  adiKailash: planned("adi-kailash-om-parvat.jpg", "Adi Kailash", "Adi Kailash peak above the high valleys of Kumaon"),
  manali: planned("manali-kullu-valley-himachal.jpg", "Manali", "Pine forest and snow peaks above Manali in the Kullu Valley"),
  shimla: planned("shimla-ridge-christ-church.jpg", "Shimla", "Christ Church and the Ridge in Shimla"),
  dharamshala: planned("dharamshala-dhauladhar-range.jpg", "Dharamshala", "Dharamshala below the snow-covered Dhauladhar range"),
  mcleodGanj: planned("mcleod-ganj-tsuglagkhang-monastery.jpg", "McLeod Ganj", "Prayer flags at the Tsuglagkhang complex in McLeod Ganj"),
  dalhousie: planned("dalhousie-pine-hills.jpg", "Dalhousie", "Pine-covered hills around Dalhousie"),
  spiti: planned("spiti-valley-key-monastery.jpg", "Spiti Valley", "Key Monastery on a hill above the high desert of Spiti Valley"),
  kasol: planned("kasol-parvati-valley.jpg", "Kasol", "The Parvati River running through pine forest at Kasol"),
  kullu: planned("kullu-beas-river-valley.jpg", "Kullu", "The Beas River winding through the Kullu Valley"),
  jammu: planned("jammu-raghunath-temple.jpg", "Jammu", "Temple spires in the old city of Jammu"),
  ayodhya: planned("ayodhya-saryu-ghats.jpg", "Ayodhya", "Evening lamps on the ghats of the Saryu river in Ayodhya"),
  mathura: planned("mathura-vishram-ghat.jpg", "Mathura", "Vishram Ghat on the Yamuna in Mathura"),
  vrindavan: planned("vrindavan-prem-mandir.jpg", "Vrindavan", "Temple domes in Vrindavan at dusk"),
  agra: planned("agra-taj-mahal.jpg", "Agra", "The white marble Taj Mahal in Agra seen from its gardens"),
  prayagraj: planned("prayagraj-triveni-sangam.jpg", "Prayagraj", "Boats at the Triveni Sangam in Prayagraj"),
  jaipur: planned("jaipur-hawa-mahal.jpg", "Jaipur", "The pink sandstone facade of Hawa Mahal in Jaipur"),
  amritsar: planned("amritsar-golden-temple.jpg", "Amritsar", "The Golden Temple reflected in its sacred pool in Amritsar"),
  himalayanHills: planned("himalayan-hill-station-view.jpg", "Himalayan hill stations", "A Himalayan hill town on a forested ridge below snow peaks"),
  familyHoliday: planned("north-india-family-holiday.jpg", "Family holidays", "A family looking out over a Himalayan valley"),
} as const;
