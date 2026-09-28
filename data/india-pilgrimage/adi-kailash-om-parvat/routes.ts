import { images } from "./images";
import type { RouteMapConfig, RouteStage } from "./types";

/**
 * Illustrative route stages. Verify against the itinerary you actually sell.
 *
 * - No distances, drive times or road conditions are stated anywhere.
 * - `travelMode` / `duration` null → "Confirmed with your itinerary".
 * - `mapPoint` coordinates are APPROXIMATE, used only to place markers on the
 *   schematic map. They are not for navigation.
 */

export const routeStages: RouteStage[] = [
  {
    id: "kathgodam",
    name: "Kathgodam / Haldwani",
    role: "Gateway to the Kumaon hills",
    description:
      "The railhead at the edge of the plains, where the road leaves the foothills and begins its long climb into Kumaon.",
    image: images.routeKathgodam,
    travelMode: "By road",
    duration: null,
    highlights: ["Rail and road access from the plains", "Start of the hill ascent"],
    mapPoint: { lat: 29.27, lng: 79.54 },
    labelSide: "right",
  },
  {
    id: "dharchula",
    name: "Dharchula",
    role: "Permit town on the river",
    description:
      "A bustling border town on the river. Inner Line Permit formalities are completed here before travelling into the restricted high valleys.",
    image: images.routeDharchula,
    travelMode: "By road",
    duration: null,
    highlights: ["Inner Line Permit formalities", "Last large town before the high valleys"],
    mapPoint: { lat: 29.85, lng: 80.54 },
    labelSide: "right",
  },
  {
    id: "gunji",
    name: "Gunji",
    role: "Village at the fork of the valleys",
    description:
      "A traditional Vyas Valley village where the routes toward Adi Kailash and Om Parvat divide. A natural place to pause and acclimatise.",
    image: images.routeGunji,
    travelMode: "By road",
    duration: null,
    highlights: ["Acclimatisation stop", "Traditional village architecture"],
    mapPoint: { lat: 30.18, lng: 80.86 },
    labelSide: "bottom",
  },
  {
    id: "jolingkong",
    name: "Jolingkong / Adi Kailash",
    role: "Darshan of Chhota Kailash",
    description:
      "The high valley at the foot of Adi Kailash, with Parvati Sarovar and the approach to Gauri Kund — the spiritual heart of the yatra.",
    image: images.routeJolingkong,
    travelMode: "By road, with short walks at altitude",
    duration: null,
    highlights: ["Adi Kailash darshan", "Parvati Sarovar", "Gauri Kund (conditions permitting)"],
    mapPoint: { lat: 30.33, lng: 80.66 },
    labelSide: "left",
  },
  {
    id: "nabidhang",
    name: "Nabidhang / Om Parvat",
    role: "Darshan of the sacred ॐ",
    description:
      "The route toward the upper valley passes Kalapani and its Kali temple before reaching the viewpoint that faces Om Parvat.",
    image: images.routeNabidhang,
    travelMode: "By road",
    duration: null,
    highlights: ["Om Parvat viewpoint", "Kali Temple at Kalapani"],
    mapPoint: { lat: 30.24, lng: 81.0 },
    labelSide: "top",
  },
  {
    id: "return",
    name: "Return Journey",
    role: "Descent through Kumaon",
    description:
      "The descent retraces the valleys back toward the foothills — time to let the journey settle. Return routing is confirmed with your itinerary.",
    image: images.routeReturn,
    travelMode: null,
    duration: null,
    highlights: ["Return toward Kathgodam or your chosen end point"],
    mapPoint: null,
  },
];

/** Schematic map configuration. */
export const routeMap: RouteMapConfig = {
  // Out to Jolingkong, back to Gunji, then the spur toward Nabidhang.
  path: ["kathgodam", "dharchula", "gunji", "jolingkong", "gunji", "nabidhang"],
  landmarks: [
    { id: "adi-kailash-peak", name: "Adi Kailash", point: { lat: 30.37, lng: 80.62 }, kind: "peak", labelSide: "top" },
    { id: "om-parvat-peak", name: "Om Parvat", point: { lat: 30.2, lng: 81.05 }, kind: "peak", labelSide: "bottom" },
  ],
  padding: { lat: 0.2, lng: 0.32 },
  caption: "Schematic — marker positions are approximate and not for navigation.",
};
