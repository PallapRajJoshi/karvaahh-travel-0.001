/* ============================================================
   NEPAL HISTORICAL & HERITAGE TOURS — IMAGES
   ------------------------------------------------------------
   Existing project photos only, each checked against what it
   actually shows. NOT used, because the photo does not match the
   file name:
   - bagmati/kathmandu-durbar-square-heritage-city-...jpg shows
     Swayambhunath hill above the city, not the Durbar Square.
   - gandaki/gorkha-durbar-palace-hilltop-...jpg shows a ruined
     hilltop fort with a flag, not the Gorkha Durbar palace.

   Sites without a genuine photo point at planned paths under
   public/images/historical-heritage/. `resolveImages` turns a
   missing file into designed artwork, so a real photo appears
   automatically once it is added — no data change needed.
   ============================================================ */

import type { PageImage } from "@/components/activities/experience/types";

const img = (src: string, label: string, alt: string, objectPosition?: string): PageImage => ({ src, label, alt, ...(objectPosition ? { objectPosition } : {}) });

/* ---------- Kathmandu Valley ---------- */
export const patanSquare = img("/images/bagmati/lalitpur-patan-durbar-square-krishna-mandir-heritage-nepal.jpg", "Patan Durbar Square", "The stone Krishna Mandir and tiered pagoda temples of Patan Durbar Square in evening light", "center 45%");
export const patanGolden = img("/images/bagmati/patan-durbar-square-newari-heritage-architecture-bagmati-nepal.jpg", "Patan Durbar Square", "Pagoda temples and the stone Krishna Mandir of Patan Durbar Square at golden hour", "center 60%");
export const patanPalace = img("/images/home/patan-durbar.jpg", "Patan royal palace", "The red-brick royal palace and pagoda temples of Patan Durbar Square");
export const nyatapola = img("/images/bagmati/bhaktapur-durbar-square-nyatapola-temple-heritage-nepal.jpg", "Bhaktapur", "The five-tiered Nyatapola temple rising above Taumadhi Square in Bhaktapur", "center 35%");
/* File name says "bhaktapur"; the photo shows a palace courtyard with a sunken royal stepwell. */
export const palaceCourtyard = img("/images/bagmati/bhaktapur-durbar-square-newar-heritage-temple-courtyard-nepal.jpg", "Newar palace courtyard", "A Newar palace courtyard with carved wooden windows, a pagoda roof and a sunken stone stepwell", "center 55%");
export const swayambhunath = img("/images/bagmati/swayambhunath-stupa-kathmandu-valley-unesco-heritage-nepal.jpg", "Swayambhunath", "The white dome and gilded spire of Swayambhunath Stupa above the Kathmandu Valley");
export const pashupatinath = img("/images/bagmati/pashupatinath-temple-bagmati-river-sacred-pilgrimage-nepal.jpg", "Pashupatinath", "The golden-roofed Pashupatinath Temple and its shrines above the Bagmati River in Kathmandu");
export const courtyardDance = img("/images/home/culture-kathmandu.jpg", "Traditional dance", "Performers in traditional dress dancing to drums in a stone courtyard in Kathmandu", "center 40%");
export const nuwakot = img("/images/bagmati/nuwakot-durbar-square-historic-palace-heritage-nepal.jpg", "Nuwakot Durbar", "The seven-storey brick palace tower of Nuwakot Durbar with carved wooden windows above the Trishuli valley", "center 45%");

/* ---------- Lumbini & the Terai ---------- */
export const mayaDevi = img("/images/lumbini/maya-devi-temple-lumbini-rupandehi-nepal.jpg", "Lumbini", "The Maya Devi Temple in Lumbini reflected in the sacred pond at sunrise");
export const ashokaPillar = img("/images/lumbini/ashoka-pillar-lumbini-rupandehi-nepal.jpg", "Ashoka Pillar", "The inscribed Ashoka Pillar beside the Maya Devi Temple in Lumbini, hung with Buddhist flags");
export const lumbiniMuseum = img("/images/lumbini/lumbini-museum-buddhist-heritage-rupandehi-nepal.jpg", "Lumbini Museum", "The brick vaulted facade of the Lumbini Museum among palm trees");
export const tilaurakot = img("/images/lumbini/tilaurakot-ancient-kapilavastu-ruins-kapilvastu-nepal.jpg", "Tilaurakot", "Excavated brick foundations at Tilaurakot, the archaeological site associated with ancient Kapilavastu");
export const monasticZone = img("/images/lumbini/lumbini-monastic-zone-central-canal-monasteries-nepal.jpg", "Lumbini Monastic Zone", "The long central canal of the Lumbini Monastic Zone lined with trees");
export const tansen = img("/images/lumbini/newar-heritage-culture-tansen-palpa-nepal.jpg", "Tansen", "A carved timber pavilion of Newar design in Tansen, Palpa");
export const raniMahal = img("/images/lumbini/rani-mahal-palpa-nepal-kali-gandaki.jpg", "Rani Mahal", "The white-and-blue Rani Mahal palace on a forested bank above the Kali Gandaki in Palpa");

/* ---------- Madhesh ---------- */
export const janakiMandir = img("/images/madhesh/janaki-mandir-dron-view.jpg", "Janaki Mandir", "Aerial view of the white domes and towers of Janaki Mandir in Janakpur");
export const janakiNight = img("/images/madhesh/janakpur-night-view.jpg", "Janaki Mandir", "Janaki Mandir in Janakpur illuminated at night and reflected in wet paving");

/* ---------- Planned photos (render designed artwork until added) ---------- */
const planned = (file: string, label: string, alt: string): PageImage => img(`/images/historical-heritage/${file}`, label, alt);
export const kathmanduDurbar = planned("kathmandu-durbar-square.jpg", "Kathmandu Durbar Square", "Pagoda temples and the old royal palace of Kathmandu Durbar Square (Hanuman Dhoka)");
export const boudhanath = planned("boudhanath-stupa.jpg", "Boudhanath Stupa", "The great white dome of Boudhanath Stupa hung with prayer flags");
export const changuNarayan = planned("changu-narayan-temple.jpg", "Changu Narayan", "The two-tiered pagoda of Changu Narayan Temple with carved roof struts");
export const gorkhaDurbar = planned("gorkha-durbar.jpg", "Gorkha Durbar", "The hilltop palace complex of Gorkha Durbar above Gorkha bazaar");
export const licchavi = planned("licchavi-stone-sculpture.jpg", "Licchavi stone sculpture", "An ancient carved stone sculpture in the Kathmandu Valley");
export const crafts = planned("newar-woodcarving-workshop.jpg", "Woodcarving workshop", "A Newar woodcarver shaping a lattice window panel");
export const marketplace = planned("asan-bazaar-kathmandu.jpg", "Historic marketplace", "Stalls and shrines in a historic marketplace of old Kathmandu");
export const newariFood = planned("newari-food.jpg", "Newari food", "A Newari meal of beaten rice and side dishes served on a leaf plate");
