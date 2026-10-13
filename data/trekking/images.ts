import type { PageImage } from "@/components/activities/experience/types";

/**
 * Photos already in /public. `src: null` renders the shared labelled
 * placeholder until a real photo of that place is added.
 */
const img = (src: string | null, alt: string, label: string, objectPosition?: string): PageImage => ({ src, alt, label, objectPosition });

export const hero = img(
  "/images/gandaki/annapurna-circuit-high-mountain-trail-pass-gandaki-nepal.jpg",
  "Trekkers on a high mountain trail in the Annapurna region, with snow peaks at the head of the valley",
  "Annapurna trail",
  "40% 60%",
);

export const everestBaseCamp = img("/koshi/everest-base-camp.jpg", "Everest, Nuptse and the Khumbu Glacier at dawn above Everest Base Camp", "Everest Base Camp", "30% center");
export const gokyoRi = img("/koshi/gokyori.jpg", "Sunrise over a sea of cloud from a high ridge near Gokyo in the Everest region", "Gokyo, Everest region");
export const langtang = img("/images/bagmati/langtang-valley-trekking-himalayan-mountains-bagmati-nepal.jpg", "Trekking trail through the Langtang Valley beneath Himalayan peaks", "Langtang Valley");
export const tamangVillage = img("/images/bagmati/tamang-village-langtang-himalayan-culture-bagmati-nepal.jpg", "Tamang village in the Langtang region", "Tamang village");
export const manang = img("/images/gandaki/manang-village-annapurna-mountain-wall-gandaki-nepal.jpg", "Manang village below the Annapurna mountain wall", "Manang");
export const annapurnaTrail = img("/images/gandaki/annapurna-circuit-trekking-trail-gandaki-nepal.jpg", "Trekking trail on the Annapurna Circuit", "Annapurna Circuit");
export const loManthang = img("/images/gandaki/lo-manthang-walled-city-upper-mustang-gandaki-nepal.jpg", "The walled city of Lo Manthang in Upper Mustang", "Lo Manthang, Mustang");
export const loManthangHeritage = img("/images/gandaki/lo-manthang-thakali-tibetan-heritage-mustang-nepal.jpg", "Tibetan-influenced heritage of Lo Manthang in Mustang", "Mustang heritage");
export const poonHill = img("/images/gandaki/poon-hill-sunrise-dhaulagiri-myagdi-gandaki-nepal.jpg", "Sunrise over the Dhaulagiri range from Poon Hill", "Poon Hill sunrise");
export const ghandruk = img("/images/gandaki/ghandruk-gurung-village-mountain-culture-gandaki-nepal.jpg", "Stone houses of the Gurung village of Ghandruk facing the Annapurna range", "Ghandruk");
export const annapurna = img("/images/home/annapurna-view.jpg", "The Annapurna range and Machhapuchhre rising above the Pokhara valley", "Annapurna range", "center 30%");
export const manaslu = img("/images/gandaki/manaslu-circuit-trekking-mountain-massif-gorkha-nepal.jpg", "The Manaslu massif above the Manaslu Circuit trekking route in Gorkha", "Manaslu");
export const gosaikunda = img("/images/bagmati/gosainkunda-lake-langtang-himalayan-trekking-bagmati-nepal.jpg", "Gosaikunda Lake surrounded by Himalayan ridges", "Gosaikunda");
export const tshoRolpa = img("/images/bagmati/tsho-rolpa-lake-rolwaling-valley-dolakha-himalayan-adventure-nepal.jpg", "Tsho Rolpa glacial lake in the Rolwaling Valley", "Tsho Rolpa");
export const panchPokhari = img("/images/bagmati/panch-pokhari-sindhupalchok-high-altitude-lake-himalayan-nepal.jpg", "High-altitude lakes of Panch Pokhari in Sindhupalchok", "Panch Pokhari");
export const kanchenjunga = img("/koshi/kanchenjunga.jpg", "Kanchenjunga in far-eastern Nepal", "Kanchenjunga");
export const makalu = img("/koshi/makalu-base-camp.jpg", "Makalu Base Camp in the Makalu Barun region", "Makalu Base Camp");
export const dolpo = img("/images/home/upper-dolpo-nepal-himalayan.jpg", "Himalayan landscape of Upper Dolpo", "Dolpo");
export const kushmaBridge = img("/images/gandaki/kushma-suspension-bridge-modi-river-gorge-parbat-nepal.jpg", "Long suspension bridge over the Modi River gorge at Kushma", "Suspension bridge");
export const dhorpatanMeadows = img("/images/gandaki/dhorpatan-alpine-meadows-himalayan-wilderness-gandaki-nepal.jpg", "Alpine meadows and Himalayan wilderness at Dhorpatan", "Alpine meadows");
export const trekkingGear = img("/images/home/treakking.jpg", "Trekking gear laid out: backpack, boots, poles, layers and a map", "Trekking gear");

export const tsumValley = img(null, "Tsum Valley in the northern Gorkha Himalaya", "Tsum Valley");
export const apiNampa = img(null, "Api Nampa region in far-western Nepal", "Api Nampa");
export const raraLake = img(null, "Rara Lake in the Karnali region", "Rara Lake");
export const khaptad = img(null, "Khaptad plateau in far-western Nepal", "Khaptad");
export const saipal = img(null, "Mount Saipal in Bajhang, far-western Nepal", "Saipal");
