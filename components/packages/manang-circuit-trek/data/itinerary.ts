import type { ItineraryDay } from "./types";

/**
 * 16-day Manang Circuit with Tilicho Lake and Thorong La.
 * Altitudes are approximate (commonly published figures, rounded) — they are
 * for planning, not navigation. Drive times depend heavily on road condition.
 */
export const itinerary: ItineraryDay[] = [
  {
    day: 1,
    title: "Arrive in Kathmandu",
    overnight: "Kathmandu",
    sleepAltitude: 1400,
    mode: "arrival",
    duration: "Airport transfer",
    summary:
      "A Karvaahh representative meets you at Tribhuvan International Airport and transfers you to your hotel. In the evening your trek leader runs a short briefing: kit check, permits, and how the next two weeks will unfold.",
    meals: "—",
    stay: "Hotel",
  },
  {
    day: 2,
    title: "Kathmandu → Besisahar → Dharapani",
    overnight: "Dharapani",
    sleepAltitude: 1860,
    mode: "drive",
    duration: "9–10 hrs drive",
    summary:
      "An early start along the Prithvi Highway to Besisahar, the gateway to Lamjung, then onward by 4×4 up the Marsyangdi valley past waterfalls, terraced fields and suspension bridges to the village of Dharapani.",
    meals: "B · L · D",
    stay: "Teahouse",
  },
  {
    day: 3,
    title: "Dharapani → Chame",
    overnight: "Chame",
    sleepAltitude: 2670,
    mode: "trek",
    duration: "5–6 hrs",
    summary:
      "The trail climbs through pine and fir forest to Timang and Koto, with the first clear views of Manaslu behind you and Annapurna II ahead. Chame, the district headquarters of Manang, has hot springs by the river.",
    meals: "B · L · D",
    stay: "Teahouse",
  },
  {
    day: 4,
    title: "Chame → Upper Pisang",
    overnight: "Upper Pisang",
    sleepAltitude: 3300,
    mode: "trek",
    duration: "5–6 hrs",
    summary:
      "The valley narrows beneath the vast curved rock face of Paungda Danda. You leave the forest behind for drier, open country and climb to Upper Pisang, a stone village with a monastery looking straight across at Annapurna II.",
    meals: "B · L · D",
    stay: "Teahouse",
  },
  {
    day: 5,
    title: "Upper Pisang → Ngawal (via Ghyaru)",
    overnight: "Ngawal",
    sleepAltitude: 3660,
    mode: "trek",
    duration: "5–6 hrs",
    summary:
      "The high route: a steep morning climb to Ghyaru, then a balcony trail along the north side of the valley with uninterrupted views of Annapurna II, III and IV and Gangapurna. Longer than the lower road, and far better for acclimatisation.",
    meals: "B · L · D",
    stay: "Teahouse",
  },
  {
    day: 6,
    title: "Ngawal → Manang",
    overnight: "Manang",
    sleepAltitude: 3519,
    mode: "trek",
    duration: "3–4 hrs",
    summary:
      "A gentle descent through Munchi and Braga, where the old gompa is worth the detour, into Manang: flat-roofed stone houses, prayer walls, and the Gangapurna glacier spilling almost to the edge of the village.",
    meals: "B · L · D",
    stay: "Teahouse",
  },
  {
    day: 7,
    title: "Acclimatisation day in Manang",
    overnight: "Manang",
    sleepAltitude: 3519,
    maxAltitude: 3900,
    maxAltitudeLabel: "Viewpoint hike",
    mode: "rest",
    duration: "3–4 hrs hike",
    summary:
      "Climb high, sleep low: a morning hike to the Gangapurna Lake viewpoint or up to Praken Gompa, then an easy afternoon. Manang's Himalayan Rescue Association post often gives a free talk on altitude sickness.",
    meals: "B · L · D",
    stay: "Teahouse",
    flag: "acclimatise",
  },
  {
    day: 8,
    title: "Manang → Shree Kharka (via Khangsar)",
    overnight: "Shree Kharka",
    sleepAltitude: 4080,
    mode: "trek",
    duration: "5–6 hrs",
    summary:
      "You leave the main circuit and head west to Khangsar, one of the valley's most traditional villages, then climb above it to the grazing pastures of Shree Kharka.",
    meals: "B · L · D",
    stay: "Teahouse",
  },
  {
    day: 9,
    title: "Shree Kharka → Tilicho Base Camp",
    overnight: "Tilicho Base Camp",
    sleepAltitude: 4150,
    mode: "trek",
    duration: "3–4 hrs",
    summary:
      "A short but serious day: the trail crosses a steep scree slope above the gorge, which your guide times for the calmer morning hours. Afternoon rest at base camp.",
    meals: "B · L · D",
    stay: "Teahouse",
  },
  {
    day: 10,
    title: "Tilicho Lake → back to Shree Kharka",
    overnight: "Shree Kharka",
    sleepAltitude: 4080,
    maxAltitude: 4919,
    maxAltitudeLabel: "Tilicho Lake",
    mode: "trek",
    duration: "7–8 hrs",
    summary:
      "A pre-dawn start and a steady zig-zag climb to Tilicho Lake at around 4,919 m: a sheet of glacial blue beneath the ice walls of Tilicho Peak. Time at the shore, then back down to Shree Kharka for the night.",
    meals: "B · L · D",
    stay: "Teahouse",
    flag: "lake",
  },
  {
    day: 11,
    title: "Shree Kharka → Yak Kharka",
    overnight: "Yak Kharka",
    sleepAltitude: 4018,
    mode: "trek",
    duration: "6–7 hrs",
    summary:
      "The trail runs back via Old Khangsar and across the hillside to rejoin the main circuit in the Jarsang Khola valley at Yak Kharka, among grazing yaks and juniper scrub.",
    meals: "B · L · D",
    stay: "Teahouse",
  },
  {
    day: 12,
    title: "Yak Kharka → Thorong Phedi",
    overnight: "Thorong Phedi",
    sleepAltitude: 4450,
    mode: "trek",
    duration: "3–4 hrs",
    summary:
      "A deliberately short day to Thorong Phedi at the foot of the pass. Early dinner, kit laid out, and an early night before the big one. (Groups that are moving well may sleep at High Camp, 4,880 m, instead.)",
    meals: "B · L · D",
    stay: "Teahouse",
  },
  {
    day: 13,
    title: "Cross Thorong La → Muktinath",
    overnight: "Muktinath",
    sleepAltitude: 3800,
    maxAltitude: 5416,
    maxAltitudeLabel: "Thorong La",
    mode: "trek",
    duration: "8–10 hrs",
    summary:
      "Headtorches on around 4 am for the climb to Thorong La (5,416 m). Prayer flags, a sweep of peaks on both sides, and then a long knee-testing descent into the Mustang side to the pilgrimage town of Muktinath, sacred to both Hindus and Buddhists.",
    meals: "B · L · D",
    stay: "Teahouse",
    flag: "pass",
  },
  {
    day: 14,
    title: "Muktinath → Jomsom → Pokhara",
    overnight: "Pokhara",
    sleepAltitude: 822,
    mode: "flight",
    duration: "1.5 hr drive + 20 min flight",
    summary:
      "An early visit to the Muktinath temple, then a drive down the Kali Gandaki to Jomsom and the short mountain flight to Pokhara. Jomsom flights depend on the weather; if they are grounded we drive instead (around 8–9 hrs).",
    meals: "B",
    stay: "Hotel",
  },
  {
    day: 15,
    title: "Pokhara → Kathmandu",
    overnight: "Kathmandu",
    sleepAltitude: 1400,
    mode: "drive",
    duration: "6–7 hrs drive (or 25 min flight)",
    summary:
      "A slow morning by Phewa Lake, then the drive back to Kathmandu. Evening farewell dinner with your trek team.",
    meals: "B · D",
    stay: "Hotel",
  },
  {
    day: 16,
    title: "Departure",
    overnight: "—",
    sleepAltitude: 1400,
    mode: "departure",
    duration: "Airport transfer",
    summary: "Transfer to the airport for your onward flight, or add a few days in Chitwan or the Kathmandu Valley.",
    meals: "B",
    stay: "—",
  },
];

export const TREK_DAYS = itinerary.length;
export const HIGH_POINT = Math.max(...itinerary.map((d) => d.maxAltitude ?? d.sleepAltitude));
