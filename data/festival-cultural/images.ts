/* ============================================================
   NEPAL FESTIVAL & CULTURAL TOURS — IMAGES
   ------------------------------------------------------------
   Existing project photos only, each checked against what it
   actually shows. Several files are named after a different
   place than they depict — the notes below record the truth.

   Festivals without a genuine photo point at the planned paths of
   the Culture & Festival Experiences page
   (public/images/culture-festival/...). `resolveImages` turns a
   missing file into designed artwork, so a real photo appears
   automatically once it is added — no data change needed.
   ============================================================ */

import type { PageImage } from "@/components/activities/experience/types";

const img = (src: string, label: string, alt: string, objectPosition?: string): PageImage => ({ src, label, alt, ...(objectPosition ? { objectPosition } : {}) });

/* ---------- Kathmandu Valley ---------- */
export const krishnaMandir = img("/images/bagmati/patan-durbar-square-newari-heritage-architecture-bagmati-nepal.jpg", "Patan Durbar Square", "The stone Krishna Mandir and tiered pagoda temples of Patan Durbar Square at golden hour", "center 60%");
export const patanPalace = img("/images/home/patan-durbar.jpg", "Patan Durbar Square", "The red-brick royal palace and pagoda temples of Patan Durbar Square");
export const nyatapola = img("/images/bagmati/bhaktapur-durbar-square-nyatapola-temple-heritage-nepal.jpg", "Bhaktapur", "The five-tiered Nyatapola temple rising above Taumadhi Square in Bhaktapur", "center 35%");
/* File name says "bhaktapur"; the photo shows a palace courtyard with a sunken royal stepwell. */
export const palaceCourtyard = img("/images/bagmati/bhaktapur-durbar-square-newar-heritage-temple-courtyard-nepal.jpg", "Newar palace courtyard", "A Newar palace courtyard with carved wooden windows, a pagoda roof and a sunken stone stepwell", "center 55%");
export const swayambhuStupa = img("/images/home/kathmandu-view.jpg", "Swayambhunath", "Swayambhunath Stupa hung with prayer flags above the Kathmandu Valley");
export const swayambhuHill = img("/images/home/swayambhu-view.jpg", "Swayambhunath", "The forested hill of Swayambhunath with the Kathmandu Valley beyond at sunrise");
export const pashupatiAarati = img("/images/home/pashupatinath-aarati.jpg", "Pashupatinath aarati", "Priests raising tiered oil lamps during evening aarati at Pashupatinath");
export const pashupatiShrines = img("/images/home/pashupatinath-history.jpg", "Pashupatinath", "Stone Shiva shrines in the courtyards of Pashupatinath");
export const courtyardDance = img("/images/home/culture-kathmandu.jpg", "Traditional dance", "Performers in traditional dress dancing to drums in a stone courtyard in Kathmandu", "center 40%");

/* ---------- Madhesh / Mithila ---------- */
export const chhath = img("/images/madhesh/chhath.jpg", "Chhath", "Devotees and baskets of Chhath offerings laid out beside a lamp-lit pond at night");
export const janakiNight = img("/images/madhesh/janakpur-night-view.jpg", "Janaki Mandir", "Janaki Mandir in Janakpur illuminated in colour at night and reflected in wet paving");
/* File name says "vivah-mantap"; the photo shows Janaki Mandir by day. */
export const janakiDay = img("/images/madhesh/vivah-mantap.jpg", "Janaki Mandir", "The white domes and arches of Janaki Mandir in Janakpur");
export const mithilaArt = img("/images/madhesh/mithila-painting.jpg", "Mithila art", "Mithila paintings of animals, flowers and a sun face covering the mud walls of a village home", "center 45%");

/* ---------- Lumbini & the Terai ---------- */
export const mayaDevi = img("/images/lumbini/maya-devi-temple-lumbini-rupandehi-nepal.jpg", "Lumbini", "The Maya Devi Temple in Lumbini reflected in the sacred pond at sunrise");
export const monasticZone = img("/images/lumbini/lumbini-monastic-zone-central-canal-monasteries-nepal.jpg", "Lumbini Monastic Zone", "The long central canal of the Lumbini Monastic Zone lined with trees");
export const tharuDance = img("/images/lumbini/tharu-culture-nepal-traditional-village-dance.jpg", "Tharu dance", "Tharu dancers in red and green skirts performing in front of a thatched village house", "center 60%");
export const tansen = img("/images/lumbini/newar-heritage-culture-tansen-palpa-nepal.jpg", "Tansen", "A carved timber pavilion of Newar design in Tansen, Palpa");

/* ---------- Hills & Himalaya ---------- */
export const bandipur = img("/images/gandaki/bandipur-heritage-hill-town-tanahun-gandaki-nepal.jpg", "Bandipur", "The hill town of Bandipur at dawn with Himalayan peaks on the horizon", "center 60%");
export const ghaleGaun = img("/images/gandaki/ghale-gaun-gurung-heritage-village-gandaki-nepal.jpg", "Ghale Gaun", "Slate-roofed stone houses stepping down the hillside in the Gurung village of Ghale Gaun");
export const tamangVillage = img("/images/bagmati/tamang-village-langtang-himalayan-culture-bagmati-nepal.jpg", "Tamang village", "Stone-and-timber houses hung with prayer flags in a Tamang village of the Langtang region");
export const mustangMonastery = img("/images/gandaki/lo-manthang-thakali-tibetan-heritage-mustang-nepal.jpg", "Upper Mustang", "A monastery on an eroded ridge in Upper Mustang beneath snow peaks", "center 60%");

/* ---------- Planned festival photos (render artwork until added) ---------- */
const planned = (file: string, label: string, alt: string): PageImage => img(`/images/culture-festival/${file}`, label, alt);
export const dashain = planned("festivals/dashain.jpg", "Dashain", "A family receiving tika and blessings from an elder during Dashain");
export const tihar = planned("festivals/tihar.jpg", "Tihar", "A house decorated with oil lamps, marigold garlands and rangoli during Tihar");
export const holi = planned("festivals/holi.jpg", "Holi", "People celebrating Holi with coloured powder in a public square");
export const indraJatra = planned("festivals/indra-jatra.jpg", "Indra Jatra", "A ceremonial procession during Indra Jatra in Kathmandu");
export const gaiJatra = planned("festivals/gai-jatra.jpg", "Gai Jatra", "A Gai Jatra procession through the old streets of the Kathmandu Valley");
export const cuisine = planned("experiences/cuisine.jpg", "Nepali cuisine", "A traditional Nepali meal served on leaf plates");
