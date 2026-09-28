import { IMG } from "./config";
import type { GalleryImage } from "./types";

export const gallery: GalleryImage[] = [
  { id: "g-cliffs", src: `${IMG}/gallery/red-sandstone-cliffs.jpg`, alt: "Fluted red sandstone cliffs in Upper Mustang", caption: "Red sandstone cliffs", wide: true },
  { id: "g-canyon", src: `${IMG}/gallery/deep-mountain-canyon.jpg`, alt: "A deep canyon cut through layered rock", caption: "Canyons of the Kali Gandaki" },
  { id: "g-lo", src: `${IMG}/gallery/lo-manthang-architecture.jpg`, alt: "Earthen walls and wooden windows in Lo Manthang", caption: "Lo Manthang’s architecture" },
  { id: "g-marpha", src: `${IMG}/gallery/marpha-streets-orchards.jpg`, alt: "Marpha’s stone lanes with orchards beyond", caption: "Marpha’s streets and orchards", wide: true },
  { id: "g-mukti", src: `${IMG}/gallery/muktinath-surroundings.jpg`, alt: "Muktinath’s temple grounds below snow peaks", caption: "Around Muktinath" },
  { id: "g-caves", src: `${IMG}/gallery/chhosar-cave-cliffs.jpg`, alt: "Cave openings in the cliffs near Chhosar", caption: "Chhosar’s cave cliffs" },
  { id: "g-peaks", src: `${IMG}/gallery/dhaulagiri-nilgiri-panorama.jpg`, alt: "Dhaulagiri and Nilgiri seen from Lower Mustang", caption: "Dhaulagiri and Nilgiri", wide: true },
  { id: "g-golden", src: `${IMG}/gallery/golden-hour-desert.jpg`, alt: "Low evening light on the bare hills of Upper Mustang", caption: "Golden hour in the high desert" },
  { id: "g-flags", src: `${IMG}/gallery/village-prayer-flags.jpg`, alt: "Prayer flags strung above a Mustang village", caption: "Villages and prayer flags" },
];
