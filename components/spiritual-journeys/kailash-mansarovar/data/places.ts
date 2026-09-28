import type { ImageAsset } from "./types";
import { IMAGES } from "./images";

export interface Place {
  name: string;
  label: string;
  text: string;
  image: ImageAsset;
}

export const PLACES: Place[] = [
  { name: "Kathmandu", label: "Gateway city", image: IMAGES.kathmandu, text: "Where journeys from Nepal begin, with briefings, permits and final preparation." },
  { name: "Nepal–Tibet border", label: "Border crossing", image: IMAGES.border, text: "Formalities are completed here before the journey continues into Tibet." },
  { name: "Saga", label: "Plateau town", image: IMAGES.saga, text: "An overnight base on the long drive west across the Tibetan Plateau." },
  { name: "Lake Mansarovar", label: "Sacred lake", image: IMAGES.mansarovar, text: "A high freshwater lake for prayer, reflection and wide mountain views." },
  { name: "Darchen", label: "Kora base town", image: IMAGES.darchen, text: "The small town at the foot of Kailash where the Kora starts and ends." },
  { name: "Yamadwar", label: "Kora gateway", image: IMAGES.yamadwar, text: "The prayer-flag gateway traditionally marking the start of the Parikrama." },
  { name: "Dirapuk", label: "Kora overnight", image: IMAGES.dirapuk, text: "Close views of the north face of Kailash when the skies are clear." },
  { name: "Dolma La Pass", label: "Highest point, about 5,630 m", image: IMAGES.dolmaLa, text: "The steep, cold high pass that is the spiritual climax of the Kora." },
  { name: "Zuthulpuk", label: "Kora overnight", image: IMAGES.zuthulpuk, text: "A valley monastery associated with the yogi-poet Milarepa." },
  { name: "Mount Kailash", label: "Sacred mountain", image: IMAGES.kailashDarshan, text: "The solitary peak at the centre of the whole pilgrimage." },
];
