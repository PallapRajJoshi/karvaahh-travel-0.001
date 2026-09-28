/**
 * Kailash Parikrama (Kora) — three-day stage data.
 *
 * ⚠ Distances, elevations and walking times below are the figures most
 *   commonly published by operators and guidebooks, rounded and marked "≈".
 *   They vary by source and by where a group starts walking. Verify against
 *   your ground operator each season. Set any field to `null` to show
 *   "To be confirmed" instead.
 */
import type { ParikramaContent } from "../types";
import { IMG } from "./content";

const P = `${IMG}/parikrama`;

export const parikrama: ParikramaContent = {
  eyebrow: "The Kora",
  heading: "Experience the Sacred Kailash Parikrama",
  subtitle:
    "Undertake the revered circumambulation of Mount Kailash through dramatic Himalayan landscapes and sacred pilgrimage landmarks.",
  totalDistance: "≈ 52 km",
  highestPoint: "≈ 5,630 m",
  direction: "Clockwise (Hindu, Buddhist, Jain) · Bon pilgrims walk anticlockwise",
  figuresNote:
    "Distances and elevations are indicative, vary between sources and depend on where your group starts walking. Your final itinerary confirms them.",
  safetyNote:
    "The Parikrama is physically demanding high-altitude trekking in cold, fast-changing weather. It goes ahead only with valid permits and subject to weather and local operating conditions. Pilgrims who are unwell or not acclimatised may be advised to wait at Darchen — a decision made for your safety.",
  stages: [
    {
      id: "stage-day-1",
      day: 1,
      title: "Darchen to Dirapuk",
      from: "Darchen",
      to: "Dirapuk",
      summary:
        "A gradual walk up the broad Lha Chu valley, beneath red cliffs and waterfalls, to the first sight of Kailash's north face.",
      highlights: [
        "Begin the sacred journey from Darchen",
        "Pass through the Yam Dwar area and Tarboche flagpole",
        "Walk the scenic Lha Chu Valley",
        "Reach Dirapuk Monastery, facing the north face of Mount Kailash",
      ],
      image: { src: `${P}/day-1-lha-chu-valley.jpg`, alt: "Pilgrims walking along the Lha Chu river valley on the western Kora" },
      distance: "≈ 12–20 km",
      maxElevation: "≈ 5,000 m",
      overnightElevation: "≈ 4,900–5,000 m (Dirapuk)",
      walkingTime: "≈ 6–7 hours",
      difficulty: "Moderate",
      mapSegment: ["darchen", "yam-dwar", "lha-chu", "dirapuk"],
    },
    {
      id: "stage-day-2",
      day: 2,
      title: "Dirapuk to Zuthulpuk",
      from: "Dirapuk",
      to: "Zuthulpuk",
      summary:
        "The longest and most demanding day: a steep climb over Dolma La, past Gauri Kund, then a long descent into the eastern valley.",
      highlights: [
        "Cross the high-altitude Dolma La Pass",
        "Pause at the sacred Gauri Kund area below the pass",
        "Descend through rugged Himalayan terrain",
        "Reach Zuthulpuk Monastery",
      ],
      image: { src: `${P}/day-2-dolma-la.jpg`, alt: "Pilgrims climbing towards the prayer-flag-covered Dolma La pass" },
      distance: "≈ 18–22 km",
      maxElevation: "≈ 5,630 m (Dolma La)",
      overnightElevation: "≈ 4,790 m (Zuthulpuk)",
      walkingTime: "≈ 9–12 hours",
      difficulty: "Very strenuous",
      caution:
        "Early start before dawn. Cold, wind and thin air make the climb slow — go at your own pace and descend if you feel unwell.",
      mapSegment: ["dirapuk", "dolma-la", "gauri-kund", "zuthulpuk"],
    },
    {
      id: "stage-day-3",
      day: 3,
      title: "Zuthulpuk to Darchen",
      from: "Zuthulpuk",
      to: "Darchen",
      summary:
        "A gentle final stretch out of the valley and onto the plain, closing the circle where the journey began.",
      highlights: [
        "Continue the final stretch of the pilgrimage",
        "Walk through open valley landscapes",
        "Complete the Kailash Parikrama and return to Darchen",
      ],
      image: { src: `${P}/day-3-eastern-valley.jpg`, alt: "Trail through the eastern valley opening onto the Barkha plain" },
      distance: "≈ 11–14 km",
      maxElevation: "≈ 4,790 m",
      overnightElevation: null,
      walkingTime: "≈ 3–4 hours",
      difficulty: "Moderate",
      mapSegment: ["zuthulpuk", "east-valley", "darchen"],
    },
  ],
  map: {
    caption: "Schematic route — not to scale. For orientation only.",
    summit: { x: 50, y: 46, label: "Mount Kailash" },
    waypoints: [
      { id: "darchen", label: "Darchen", x: 50, y: 88, kind: "base" },
      { id: "yam-dwar", label: "Yam Dwar", x: 27, y: 78, kind: "gate" },
      { id: "lha-chu", label: "Lha Chu valley", x: 17, y: 48, kind: "gate" },
      { id: "dirapuk", label: "Dirapuk", x: 38, y: 13, kind: "monastery" },
      { id: "dolma-la", label: "Dolma La", x: 68, y: 14, kind: "pass" },
      { id: "gauri-kund", label: "Gauri Kund", x: 79, y: 27, kind: "lake" },
      { id: "zuthulpuk", label: "Zuthulpuk", x: 85, y: 55, kind: "monastery" },
      { id: "east-valley", label: "", x: 73, y: 79, kind: "gate" },
    ],
  },
};
