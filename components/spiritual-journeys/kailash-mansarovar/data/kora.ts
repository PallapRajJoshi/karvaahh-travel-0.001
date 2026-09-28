export interface KoraNode {
  id: string;
  label: string;
  sublabel?: string;
  /** Position on the schematic loop in degrees (SVG convention: 90 = bottom/south, 270 = top/north). */
  angle: number;
  highlight?: boolean;
}

export interface KoraStage {
  id: string;
  name: string;
  /** Which diagram node this stage lights up. */
  nodeId: string;
  /** Progress around the loop in degrees, measured from Darchen (90) clockwise; 450 = full circle. */
  progressAngle: number;
  elevation?: string;
  summary: string;
  landscape: string;
  challenge: string;
  significance?: string;
  highlight?: boolean;
}

export const KORA_NODES: KoraNode[] = [
  { id: "darchen", label: "Darchen", sublabel: "start & finish", angle: 90 },
  { id: "yamadwar", label: "Yamadwar", angle: 128 },
  { id: "dirapuk", label: "Dirapuk", angle: 232 },
  { id: "dolma-la", label: "Dolma La", sublabel: "about 5,630 m", angle: 300, highlight: true },
  { id: "zuthulpuk", label: "Zuthulpuk", angle: 18 },
];

export const KORA_STAGES: KoraStage[] = [
  {
    id: "darchen",
    name: "Darchen",
    nodeId: "darchen",
    progressAngle: 90,
    elevation: "About 4,575 m",
    summary:
      "The small town below Mount Kailash where most Kora journeys begin and end. Time here usually goes to rest, final kit checks and arranging porters or ponies where they are available.",
    landscape: "A high, open plain beneath the mountain’s southern face.",
    challenge: "Resting well and adjusting to the altitude before walking.",
  },
  {
    id: "yamadwar",
    name: "Yamadwar",
    nodeId: "yamadwar",
    progressAngle: 128,
    summary:
      "A short drive from Darchen, this prayer-flag-hung gateway is traditionally treated as the threshold of the Parikrama. Pilgrims usually begin walking here, heading north into the Lha Chu valley.",
    landscape: "The mouth of a broad valley framed by red rock walls.",
    challenge: "Gentle to begin with; pace yourself for the long day ahead.",
    significance:
      "Associated in Hindu tradition with Yama; many pilgrims see passing through it as the formal start of the circuit.",
  },
  {
    id: "dirapuk",
    name: "Dirapuk",
    nodeId: "dirapuk",
    progressAngle: 232,
    elevation: "About 4,900 m",
    summary:
      "After a long, gradual walk up the Lha Chu valley, commonly the first day of the Kora, the trail reaches Dirapuk. On clear days it offers close views of Kailash’s north face, with Dirapuk Monastery across the river.",
    landscape: "Cliffs, waterfalls and a widening valley beneath the north face.",
    challenge: "A long day with a steady gain in altitude; nights are cold.",
    significance: "The north face view here is, for many pilgrims, the most moving darshan of the Kora.",
  },
  {
    id: "dolma-la",
    name: "Dolma La Pass",
    nodeId: "dolma-la",
    progressAngle: 300,
    elevation: "About 5,630 m",
    highlight: true,
    summary:
      "The highest and hardest point of the Kora. A slow, steep climb over rocky ground leads to a pass draped in prayer flags, dedicated in Tibetan tradition to the goddess Dolma (Tara). The descent beyond is also steep, passing the small sacred lake of Gauri Kund.",
    landscape: "Boulder fields, snow patches in many seasons, and a sea of prayer flags.",
    challenge: "Very high, steep and cold, with thin air and weather that can turn quickly.",
    significance: "Crossing the pass is widely regarded as the spiritual climax of the Parikrama.",
  },
  {
    id: "zuthulpuk",
    name: "Zuthulpuk",
    nodeId: "zuthulpuk",
    progressAngle: 378,
    elevation: "About 4,790 m",
    summary:
      "The trail descends from the pass into a long valley to Zuthulpuk, where the monastery is associated with the Tibetan yogi-poet Milarepa and his meditation cave.",
    landscape: "A broad river valley, easier underfoot after the pass.",
    challenge: "A long descent on tired legs after the hardest day.",
    significance: "Linked in Tibetan tradition to Milarepa’s time in the Kailash region.",
  },
  {
    id: "return",
    name: "Return to Darchen",
    nodeId: "darchen",
    progressAngle: 450,
    summary:
      "A shorter, easier final walk out of the valley back to Darchen, closing the circuit around the mountain.",
    landscape: "Open valley opening out onto the plain.",
    challenge: "Comparatively gentle; fatigue from the previous days is the main factor.",
  },
];

export const KORA_FACTS = [
  { label: "Distance", value: "About 52 km, commonly walked over three days" },
  { label: "Direction", value: "Clockwise for most pilgrims; anticlockwise in the Bon tradition" },
  { label: "Highest point", value: "Dolma La Pass, about 5,630 m" },
];
