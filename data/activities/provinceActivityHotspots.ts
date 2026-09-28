/**
 * Province → adventure hotspot index.
 *
 * Powers the seven Nepal province landing pages via
 * <ProvinceActivityHotspots province="Gandaki" />.
 *
 * An activity carries an optional `key` into ACTIVITY_ROUTES. Activities with
 * a key render as links when that page exists; everything else renders as
 * plain text so no province page ships a dead link.
 */

import type { ActivityKey } from "./activityRoutes";

export type ProvinceName =
  | "Koshi"
  | "Madhesh"
  | "Bagmati"
  | "Gandaki"
  | "Lumbini"
  | "Karnali"
  | "Sudurpashchim";

export interface HotspotActivity {
  name: string;
  key?: ActivityKey;
}

export interface ProvinceHotspot {
  province: ProvinceName;
  location: string;
  activities: HotspotActivity[];
  description?: string;
}

const paragliding: HotspotActivity = { name: "Paragliding", key: "paragliding" };
const zipline: HotspotActivity = { name: "Zipline", key: "zipline" };
const camping: HotspotActivity = { name: "Camping", key: "camping" };
const rafting: HotspotActivity = { name: "Rafting", key: "rafting" };
const boating: HotspotActivity = { name: "Boating", key: "boating" };
const bungee: HotspotActivity = { name: "Bungee", key: "bungee" };
const skydiving: HotspotActivity = { name: "Skydiving", key: "skydiving" };
const balloon: HotspotActivity = {
  name: "Hot Air Balloon",
  key: "hot-air-balloon",
};
const ultraLight: HotspotActivity = {
  name: "Ultra-Light",
  key: "ultra-light",
};

export const provinceActivityHotspots: ProvinceHotspot[] = [
  /* ---------------- KOSHI ---------------- */
  {
    province: "Koshi",
    location: "Bhedetar",
    activities: [paragliding, zipline, camping],
    description: "Ridge-top viewpoint above Dharan with eastern flying terrain.",
  },
  {
    province: "Koshi",
    location: "Antu Danda & Ilam",
    activities: [paragliding, camping, { name: "Tea walks" }],
    description: "Sunrise hill above the Ilam tea gardens.",
  },
  {
    province: "Koshi",
    location: "Tinjure–Milke",
    activities: [camping],
    description: "Rhododendron ridge country in Tehrathum and Sankhuwasabha.",
  },
  {
    province: "Koshi",
    location: "Koshi Tappu",
    activities: [boating, { name: "Birding" }, camping],
    description: "Wetland reserve with boat safaris and wild water buffalo.",
  },
  {
    province: "Koshi",
    location: "Sun Koshi · Tamur · Arun",
    activities: [rafting],
    description: "Eastern Nepal's multi-day expedition rivers.",
  },
  {
    province: "Koshi",
    location: "Chatara",
    activities: [{ name: "Rafting takeout", key: "rafting" }, camping],
    description: "Where the big eastern river journeys come off the water.",
  },
  {
    province: "Koshi",
    location: "Syangboche / Everest Region",
    activities: [skydiving],
    description: "High-altitude jump events in the Khumbu.",
  },
  {
    province: "Koshi",
    location: "Pathibhara",
    activities: [{ name: "Pilgrimage camping", key: "camping" }],
    description: "Taplejung's hilltop shrine, walked in over two days.",
  },

  /* ---------------- MADHESH ---------------- */
  {
    province: "Madhesh",
    location: "Parsa National Park",
    activities: [camping, { name: "Safari" }],
    description: "Quieter sal-forest park on the Chitwan boundary.",
  },
  {
    province: "Madhesh",
    location: "Chure Hills",
    activities: [camping],
    description: "The first ridge north of the plains.",
  },
  {
    province: "Madhesh",
    location: "Janakpur",
    activities: [{ name: "Culture" }, { name: "Pond boating", key: "boating" }],
    description: "Temple city of sacred ponds and Mithila art.",
  },
  {
    province: "Madhesh",
    location: "Dhanushadham",
    activities: [camping],
    description: "Pilgrimage site in the Dhanusha forest belt.",
  },
  {
    province: "Madhesh",
    location: "Mithila Villages",
    activities: [{ name: "Village stays" }],
    description: "Painted-wall villages across the Mithila belt.",
  },

  /* ---------------- BAGMATI ---------------- */
  {
    province: "Bagmati",
    location: "The Last Resort / Bhote Koshi",
    activities: [
      bungee,
      { name: "Swing", key: "bungee" },
      rafting,
      { name: "Canyoning" },
      camping,
    ],
    description: "Nepal's original gorge adventure cluster, three hours east.",
  },
  {
    province: "Bagmati",
    location: "Nagarkot · Chandragiri · Kakani · Shivapuri",
    activities: [camping, zipline],
    description: "The valley-rim viewpoints, all inside a half-day drive.",
  },
  {
    province: "Bagmati",
    location: "Kulekhani",
    activities: [boating, camping],
    description: "Indra Sarovar reservoir, a weekend run from Kathmandu.",
  },
  {
    province: "Bagmati",
    location: "Trishuli · Indrawati",
    activities: [rafting],
    description: "The day-trip rivers on the highway west.",
  },
  {
    province: "Bagmati",
    location: "Chitwan",
    activities: [
      { name: "Canoeing", key: "boating" },
      { name: "Safari" },
      camping,
      { name: "Balloon events", key: "hot-air-balloon" },
    ],
    description: "Dawn canoes on the Rapti and the Narayani floodplain.",
  },
  {
    province: "Bagmati",
    location: "Sailung · Kalinchowk",
    activities: [camping],
    description: "Hundred-hill grassland and the Dolakha shrine ridge.",
  },
  {
    province: "Bagmati",
    location: "Langtang · Gosaikunda",
    activities: [{ name: "Trekking camps", key: "camping" }],
    description: "Lake pilgrimage and valley trekking north of the capital.",
  },
  {
    province: "Bagmati",
    location: "Godavari · Dhulikhel · Namobuddha",
    activities: [zipline, camping],
    description: "Short-hop hill destinations on the valley's eastern edge.",
  },

  /* ---------------- GANDAKI ---------------- */
  {
    province: "Gandaki",
    location: "Sarangkot",
    activities: [paragliding, zipline, camping],
    description: "Nepal's busiest take-off, straight above Phewa Lake.",
  },
  {
    province: "Gandaki",
    location: "Pokhara Airport",
    activities: [ultraLight],
    description: "Fixed-wing mountain flights over the Annapurna skyline.",
  },
  {
    province: "Gandaki",
    location: "Pokhara Valley",
    activities: [balloon],
    description: "Balloon operations over the lake basin.",
  },
  {
    province: "Gandaki",
    location: "Hemja",
    activities: [bungee, { name: "Zipline landing", key: "zipline" }],
    description: "Tower-based jumps on the Pokhara valley floor.",
  },
  {
    province: "Gandaki",
    location: "Kushma, Parbat",
    activities: [
      bungee,
      { name: "Swing", key: "bungee" },
      { name: "Sky Cycling" },
      { name: "Sky Bridge" },
      zipline,
    ],
    description: "The Kali Gandaki gorge bridges and Nepal's tallest jumps.",
  },
  {
    province: "Gandaki",
    location: "Phewa · Begnas · Rupa · Dipang",
    activities: [boating, camping],
    description: "The Pokhara lake chain, from busiest to quietest.",
  },
  {
    province: "Gandaki",
    location: "Seti · Marsyangdi · Kali Gandaki · Madi",
    activities: [rafting],
    description: "Beginner two-day water through to Grade V technical runs.",
  },
  {
    province: "Gandaki",
    location: "Kapuche · Mardi · Khopra · Mohare · Kori",
    activities: [camping],
    description: "Short high-camp treks close to Pokhara.",
  },
  {
    province: "Gandaki",
    location: "Bandipur · Ghalegaun · Sikles",
    activities: [paragliding, camping, { name: "Village stays" }],
    description: "Hilltop bazaars and Gurung village-stay country.",
  },

  /* ---------------- LUMBINI ---------------- */
  {
    province: "Lumbini",
    location: "Bardiya & Karnali Riverbank",
    activities: [
      camping,
      { name: "Dolphin boating", key: "boating" },
      { name: "Safari" },
    ],
    description: "Nepal's largest lowland park, on the Karnali's last bend.",
  },
  {
    province: "Lumbini",
    location: "Babai",
    activities: [rafting, camping],
    description: "Rafting inside the Bardiya park boundary.",
  },
  {
    province: "Lumbini",
    location: "Banke",
    activities: [camping],
    description: "Tiger-corridor forest east of Bardiya.",
  },
  {
    province: "Lumbini",
    location: "Tansen / Srinagar Danda",
    activities: [paragliding, zipline, camping],
    description: "Palpa's hill town and its ridge viewpoint.",
  },
  {
    province: "Lumbini",
    location: "Swargadwari · Resunga · Jaljala",
    activities: [camping, { name: "Pilgrimage" }],
    description: "Mid-hill pilgrimage ridges across Pyuthan and Gulmi.",
  },
  {
    province: "Lumbini",
    location: "Dang",
    activities: [paragliding, { name: "Tharu stays" }],
    description: "Inner-Tarai valley with Tharu village hospitality.",
  },
  {
    province: "Lumbini",
    location: "Jagadishpur",
    activities: [boating, { name: "Birding" }],
    description: "Nepal's largest reservoir and a major bird site.",
  },
  {
    province: "Lumbini",
    location: "Lumbini",
    activities: [
      { name: "Pilgrimage" },
      { name: "Balloon events", key: "hot-air-balloon" },
    ],
    description: "The birthplace of the Buddha and its monastic zone.",
  },

  /* ---------------- KARNALI ---------------- */
  {
    province: "Karnali",
    location: "Rara Lake & Murma Top",
    activities: [camping, boating],
    description: "Nepal's largest lake at about 2,990 m, with a ridge above it.",
  },
  {
    province: "Karnali",
    location: "Shey Phoksundo & Ringmo",
    activities: [camping, boating],
    description: "Dolpa's turquoise lake and the village on its shore.",
  },
  {
    province: "Karnali",
    location: "Jumla · Sinja · Danphe Lekh",
    activities: [camping],
    description: "The old Khas capital and the passes around it.",
  },
  {
    province: "Karnali",
    location: "Limi Valley · Humla",
    activities: [camping, { name: "Kailash transit" }],
    description: "Far-northern valleys on the Tibet border route.",
  },
  {
    province: "Karnali",
    location: "Karnali & Bheri Rivers",
    activities: [rafting, camping],
    description: "The longest wilderness river journeys in the country.",
  },
  {
    province: "Karnali",
    location: "Kanjirowa",
    activities: [{ name: "Expedition camping", key: "camping" }],
    description: "Dolpa's high massif, approached on expedition terms.",
  },

  /* ---------------- SUDURPASHCHIM ---------------- */
  {
    province: "Sudurpashchim",
    location: "Khaptad Patans",
    activities: [camping, { name: "Trekking" }],
    description: "Rolling meadow plateau shared by four districts.",
  },
  {
    province: "Sudurpashchim",
    location: "Badimalika",
    activities: [{ name: "Pilgrimage camping", key: "camping" }],
    description: "High shrine above Bajura, walked in over several days.",
  },
  {
    province: "Sudurpashchim",
    location: "Ramaroshan",
    activities: [camping],
    description: "Achham's lake-and-meadow basin.",
  },
  {
    province: "Sudurpashchim",
    location: "Api Himal Base Camp",
    activities: [camping, { name: "Trekking" }],
    description: "The far-western Himalaya, barely trafficked.",
  },
  {
    province: "Sudurpashchim",
    location: "Shuklaphanta",
    activities: [camping, { name: "Safari" }],
    description: "Grassland park with Nepal's largest swamp-deer herds.",
  },
  {
    province: "Sudurpashchim",
    location: "Ghodaghodi · Jhilmila · Surma Sarovar",
    activities: [boating, camping],
    description: "Ramsar wetland and remote sacred lakes of the far west.",
  },
  {
    province: "Sudurpashchim",
    location: "Mahakali River",
    activities: [rafting, boating],
    description: "The border river with Uttarakhand.",
  },
  {
    province: "Sudurpashchim",
    location: "Dodhara–Chandani Bridge",
    activities: [{ name: "Sightseeing" }],
    description: "One of Asia's longest suspension footbridges.",
  },
];

export const provinceOrder: ProvinceName[] = [
  "Koshi",
  "Madhesh",
  "Bagmati",
  "Gandaki",
  "Lumbini",
  "Karnali",
  "Sudurpashchim",
];

export function hotspotsByProvince(province: ProvinceName): ProvinceHotspot[] {
  return provinceActivityHotspots.filter((h) => h.province === province);
}
