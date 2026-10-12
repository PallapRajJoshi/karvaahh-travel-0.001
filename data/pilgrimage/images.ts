/* ============================================================
   NEPAL PILGRIMAGE — IMAGES
   ------------------------------------------------------------
   Existing project photos only. Destinations without a photo
   show a designed placeholder until one is added.
   NOTE: koshi/pathibhara-temple.jpg carries a third-party
   watermark and is NOT used.
   ============================================================ */

import type { PageImage } from "@/components/activities/experience/types";

const img = (src: string, label: string, alt: string, objectPosition?: string): PageImage => ({ src, label, alt, ...(objectPosition ? { objectPosition } : {}) });

/* ---------- Kathmandu Valley ---------- */
export const pashupatinath = img("/images/bagmati/pashupatinath-temple-bagmati-river-sacred-pilgrimage-nepal.jpg", "Pashupatinath", "The golden-roofed Pashupatinath Temple above the Bagmati river in Kathmandu");
export const pashupatinathAarati = img("/images/home/pashupatinath-aarati.jpg", "Pashupatinath Aarati", "Evening aarati on the banks of the Bagmati at Pashupatinath");
export const swayambhunath = img("/images/bagmati/swayambhunath-stupa-kathmandu-valley-unesco-heritage-nepal.jpg", "Swayambhunath", "The white dome and gilded spire of Swayambhunath Stupa above the Kathmandu Valley");
export const krishnaMandir = img("/images/bagmati/lalitpur-patan-durbar-square-krishna-mandir-heritage-nepal.jpg", "Krishna Mandir", "The stone shikhara of Krishna Mandir in Patan Durbar Square");
export const kathmanduValley = img("/images/bagmati/bagmati-province-kathmandu-valley-himalayan-travel-inspiration-nepal.jpg", "Kathmandu Valley", "The Kathmandu Valley with the Himalaya on the northern horizon");

/* ---------- Central & Madhesh ---------- */
export const gosainkunda = img("/images/bagmati/gosainkunda-lake-langtang-himalayan-trekking-bagmati-nepal.jpg", "Gosainkunda", "The sacred lake of Gosainkunda among high Himalayan ridges");
export const janakiMandir = img("/images/madhesh/janaki-mandir-dron-view.jpg", "Janaki Mandir", "Aerial view of the white domes and towers of Janaki Mandir in Janakpur");
export const janakiTemple = img("/images/madhesh/janaki-mandir.jpg", "Janaki Mandir", "Janaki Mandir, the temple of Sita in Janakpur");
export const dhanushadham = img("/images/madhesh/dhanushadham.jpg", "Dhanushadham", "Dhanushadham, associated in tradition with the bow of Lord Shiva");
export const jaleshwar = img("/images/madhesh/jaleshwar-nath.jpg", "Jaleshwar Mahadev", "Jaleshwar Nath Mahadev temple in Mahottari");

/* ---------- Koshi / East ---------- */
export const pathibhara = img("/koshi/pathibhara.jpg", "Pathibhara", "Prayer flags around the Pathibhara Devi shrine with the Kanchenjunga range beyond", "center 70%");
export const halesi = img("/koshi/haleshi-mahadev.jpg", "Halesi Mahadev", "Pilgrims descending into the sacred cave of Halesi Mahadev");
export const barahakshetra = img("/koshi/barakshetra.jpg", "Barah Kshetra", "Barah Kshetra temple of Lord Vishnu by the Koshi river");

/* ---------- Gandaki ---------- */
export const muktinath = img("/images/home/muktinath-temple.jpg", "Muktinath", "Muktinath Temple and its sacred ponds in Mustang");
export const muktinathSpouts = img("/images/home/muktinath.jpg", "108 water spouts", "The 108 sacred water spouts of Muktinath hung with prayer cloth", "60% center");
export const mustangMonastery = img("/images/home/muktinath-view.jpg", "Mustang", "A Buddhist monastery near Muktinath with Dhaulagiri on the horizon", "45% center");
export const kagbeni = img("/images/gandaki/kagbeni-ancient-village-kali-gandaki-mustang-nepal.jpg", "Kagbeni", "The ancient village of Kagbeni above the Kali Gandaki river");
export const upperMustang = img("/images/gandaki/lo-manthang-thakali-tibetan-heritage-mustang-nepal.jpg", "Upper Mustang", "A monastery on an eroded ridge in Upper Mustang beneath snow peaks", "center 40%");
/* File name says "muktinath-temple"; the photo actually shows Tal Barahi in Pokhara. */
export const taalBarahi = img("/images/gandaki/muktinath-temple-mustang-himalayan-landscape-gandaki-nepal.jpg", "Taal Barahi", "The pagoda of Taal Barahi Temple on its island in Phewa Lake, Pokhara");
/* File name says "kagbeni walled settlement"; the photo actually shows the Manakamana cable car. */
export const manakamanaCableCar = img("/images/gandaki/kagbeni-ancient-walled-settlement-mustang-gandaki-nepal.jpg", "Manakamana cable car", "The Manakamana cable car rising over forested hills towards the temple");
export const pokhara = img("/images/home/pokhara-view.jpg", "Pokhara", "Phewa Lake in Pokhara with the Annapurna range reflected in its waters");

/* ---------- Lumbini & Buddhist ---------- */
export const mayaDevi = img("/images/lumbini/maya-devi-temple-lumbini-rupandehi-nepal.jpg", "Maya Devi Temple", "The Maya Devi Temple in Lumbini, marking the birthplace of the Buddha");
export const sacredGarden = img("/images/lumbini/lumbini-sacred-garden-maya-devi-temple-nepal.jpg", "Sacred Garden", "The Sacred Garden of Lumbini around the Maya Devi Temple");
export const puskarini = img("/images/lumbini/puskarini-sacred-pond-lumbini-rupandehi-nepal.jpg", "Puskarini pond", "The sacred Puskarini pond in Lumbini");
export const ashokaPillar = img("/images/lumbini/ashoka-pillar-lumbini-rupandehi-nepal.jpg", "Ashoka Pillar", "The Ashoka Pillar in Lumbini");
export const peacePagoda = img("/images/lumbini/world-peace-pagoda-lumbini-rupandehi-nepal.jpg", "World Peace Pagoda", "The white World Peace Pagoda in Lumbini");
export const monasticZone = img("/images/lumbini/lumbini-monastic-zone-central-canal-monasteries-nepal.jpg", "Monastic Zone", "Monasteries along the central canal of the Lumbini Monastic Zone");
export const tilaurakot = img("/images/lumbini/tilaurakot-ancient-kapilavastu-ruins-kapilvastu-nepal.jpg", "Tilaurakot", "The ancient ruins of Tilaurakot, Kapilavastu");
export const kudan = img("/images/lumbini/kudan-ancient-buddhist-ruins-kapilvastu-nepal.jpg", "Kudan", "Ancient Buddhist ruins at Kudan, Kapilvastu");
export const ramagrama = img("/images/lumbini/ramgram-stupa-buddhist-pilgrimage-lumbini-nepal.jpg", "Ramagrama", "The Ramagrama Stupa in Nawalparasi West");
export const devdaha = img("/images/lumbini/devdaha-archaeological-site-rupandehi-nepal.jpg", "Devdaha", "The archaeological site of Devdaha in Rupandehi");
export const sagarhawa = img("/images/lumbini/sagarhawa-ancient-buddhist-ruins-kapilvastu-nepal.jpg", "Sagarhawa", "Ancient Buddhist ruins at Sagarhawa, Kapilvastu");
export const gotihawa = img("/images/lumbini/gotihawa-ashoka-pillar-kapilvastu-nepal.jpg", "Gotihawa", "The Ashoka pillar at Gotihawa, Kapilvastu");
export const ridi = img("/images/lumbini/rishikesh-temple-ridi-gulmi-nepal.jpg", "Ridi / Ruru Kshetra", "The Rishikesh temple at Ridi on the Kali Gandaki");
export const resunga = img("/images/lumbini/resunga-gulmi-nepal-forested-hills.jpg", "Resunga", "The forested hill of Resunga in Gulmi");

/* ---------- West ---------- */
export const swargadwari = img("/images/lumbini/swargadwari-pyuthan-nepal-pilgrimage-temple.jpg", "Swargadwari", "The hilltop pilgrimage temple of Swargadwari in Pyuthan");
export const bageshwari = img("/images/lumbini/bageshwori-temple-nepalgunj-banke-nepal.jpg", "Bageshwari Temple", "Bageshwari Temple in Nepalgunj");
