import { IMG } from "./config";
import type { CultureItem, Highlight } from "./types";

/** "Experience the Adventure of Mustang" — the trail itself. */
export const highlights: Highlight[] = [
  {
    id: "terrain",
    title: "Rugged Trans-Himalayan terrain",
    text: "Wide gravel valleys, high ridges and wind-sculpted slopes north of the main Himalayan range.",
  },
  {
    id: "cliffs",
    title: "Red cliffs and deep canyons",
    text: "Sandstone walls in rust, ochre and grey, cut by rivers into fluted towers and gorges.",
  },
  {
    id: "desert",
    title: "High-altitude desert",
    text: "A dry rain-shadow landscape where every green field is the work of careful irrigation.",
  },
  {
    id: "villages",
    title: "Tibetan-influenced villages",
    text: "Flat-roofed homes, prayer flags, chortens and monasteries in villages linked by old trade routes.",
  },
  {
    id: "passes",
    title: "Scenic trails and passes",
    text: "Days of steady walking between villages, crossing ridges with long views up and down the valley.",
  },
  {
    id: "peaks",
    title: "Dhaulagiri, Nilgiri and Annapurna",
    text: "Big snow peaks line the southern horizon, especially from Lower Mustang and the early passes.",
  },
  {
    id: "discovery",
    title: "Culture and spiritual exploration",
    text: "Pilgrimage at Muktinath, monastery visits, and time in villages where traditions are still lived.",
  },
];

/** "Discover the Timeless Culture of Mustang". Keep claims modest and respectful. */
export const culture: CultureItem[] = [
  {
    id: "walled-city",
    title: "The walled city of Lo Manthang",
    text: "A compact medieval town enclosed by earthen walls, still home to families who farm the surrounding fields.",
    image: { src: `${IMG}/culture/lo-manthang-city-wall.jpg`, alt: "The earthen outer wall and gate of Lo Manthang" },
  },
  {
    id: "monasteries",
    title: "Centuries-old monasteries",
    text: "Painted assembly halls, statues and murals, cared for by local monastic communities. Ask before photographing inside.",
    image: { src: `${IMG}/culture/monastery-prayer-hall.jpg`, alt: "Butter lamps and painted pillars inside a Mustang monastery prayer hall" },
  },
  {
    id: "architecture",
    title: "Tibetan-influenced homes",
    text: "Flat roofs edged with stacked firewood, small windows against the wind, and courtyards built for long winters.",
    image: { src: `${IMG}/culture/traditional-flat-roof-houses.jpg`, alt: "Flat-roofed village houses with firewood stacked along the roof edges" },
  },
  {
    id: "sky-caves",
    title: "The sky caves of Chhosar",
    text: "Caves carved high into cliff faces, used over the centuries as dwellings, shrines and storage. Many remain unexplained.",
    image: { src: `${IMG}/culture/chhosar-cave-dwellings.jpg`, alt: "Multi-level cave openings in the cliffs near Chhosar" },
  },
  {
    id: "communities",
    title: "Local communities",
    text: "Farming, herding and hospitality shape daily life. Staying in family-run lodges keeps your spending in the valley.",
    image: { src: `${IMG}/culture/mustang-village-life.jpg`, alt: "Villagers working in a barley field below a Mustang village" },
  },
  {
    id: "sacred-sites",
    title: "Prayer walls and chortens",
    text: "Mani walls and painted chortens line the trail. Pass them on the left, clockwise, as locals do.",
    image: { src: `${IMG}/culture/chorten-prayer-flags.jpg`, alt: "A red, white and grey painted chorten with prayer flags on a ridge" },
  },
  {
    id: "festivals-crafts",
    title: "Festivals and craftsmanship",
    text: "Seasonal festivals such as Tiji in Lo Manthang follow the lunar calendar — ask us for this year’s dates. Look out for local weaving and woodwork.",
    image: { src: `${IMG}/culture/festival-masked-dance.jpg`, alt: "Masked monastic dancers in a courtyard during a festival in Lo Manthang" },
  },
];
