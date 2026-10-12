export interface GandakiExperience {
  id: string;
  index: string;
  title: string;
  description: string;
  image: string;
  alt: string;
}

export const gandakiExperiences: GandakiExperience[] = [
  {
    id: "himalayan-trekking",
    index: "01",
    title: "Himalayan Trekking",
    description:
      "Annapurna Circuit, Annapurna Base Camp, Manaslu, Mustang, Dhaulagiri and a network of high-altitude trails through Nepal's most storied mountain terrain.",
    image: "/images/gandaki/annapurna-circuit-trekking-trail-gandaki-nepal.jpg",
    alt: "Trekkers on a trail beneath the Annapurna range",
  },
  {
    id: "lakes-and-mountain-views",
    index: "02",
    title: "Lakes & Mountain Views",
    description:
      "Phewa, Begnas, Rupa, Tilicho and Gangapurna — still waters that hold the Himalaya in reflection, framed by some of the province's finest viewpoints.",
    image: "/images/gandaki/phewa-lake-annapurna-mountain-reflection-gandaki-nepal.jpg",
    alt: "Phewa Lake reflecting the Annapurna range at dawn",
  },
  {
    id: "adventure",
    index: "03",
    title: "Adventure",
    description:
      "Paragliding over Pokhara, whitewater rafting, canyoning, bungee jumping, ziplining, mountain biking and camping across Gandaki's varied terrain.",
    image: "/images/gandaki/kushma-bungee-bridge-adventure-gandaki-nepal.jpg",
    alt: "Mountain biker on a dry trail in the Mustang highlands",
  },
  {
    id: "mountain-culture",
    index: "04",
    title: "Mountain Culture",
    description:
      "Gurung, Magar, Thakali and Tibetan-influenced communities — living traditions found in villages, monasteries and homestays across the highlands.",
    image: "/images/gandaki/ghale-gaun-gurung-heritage-village-gandaki-nepal.jpg",
    alt: "Slate-roofed stone houses of a traditional Gurung village",
  },
  {
    id: "pilgrimage",
    index: "05",
    title: "Pilgrimage",
    description:
      "Muktinath, Manakamana, the Kalika temples, Bindhyabasini and Tal Barahi — sacred sites set against dramatic Himalayan landscapes.",
    image: "/images/gandaki/muktinath-temple-mustang-himalayan-landscape-gandaki-nepal.jpg",
    alt: "Tal Barahi Temple on its island in Phewa Lake, Pokhara",
  },
  {
    id: "wildlife-and-nature",
    index: "06",
    title: "Wildlife & Nature",
    description:
      "From Dhorpatan Hunting Reserve to the conservation areas of Annapurna and Manaslu, and the buffer-zone forests near Chitwan, Gandaki holds a wide range of habitats.",
    image: "/images/gandaki/dhorpatan-hunting-reserve-alpine-meadows-gandaki-nepal.jpg",
    alt: "Wild mountain sheep on a rocky outcrop below a snow peak",
  },
];
