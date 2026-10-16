/* ============================================================
   KATHMANDU (KTM) INTERNATIONAL NONSTOP ROUTES — RESEARCH DATA
   ------------------------------------------------------------
   Last checked: 13 October 2026, against airline websites and
   press releases, Nepali aviation news and published schedule
   data. Route networks change often: re-check before editing.

   CONTENT RULES (keep when editing):
   - Nonstop routes only. Connecting itineraries live in the hubs
     section, never in this list.
   - `confirm: true` = the airline is listed for the route in
     published schedules / airport listings, but current operation
     was not independently re-verified on the last check.
   - `frequency` only when stated in a dated source (cited).
   - `duration` = approximate scheduled flight time; leave it out
     rather than guess. Distances are computed, not quoted.
   - Booking links go to each airline's official website.
   ============================================================ */

import type { KtmRoute } from "@/components/activities/flights/international/types";

/** Official airline websites (booking). */
export const AIRLINES = {
  nepal: { name: "Nepal Airlines", href: "https://www.nepalairlines.com.np" },
  himalaya: { name: "Himalaya Airlines", href: "https://www.himalaya-airlines.com" },
  buddha: { name: "Buddha Air", href: "https://www.buddhaair.com" },
  airIndia: { name: "Air India", href: "https://www.airindia.com" },
  airIndiaExpress: { name: "Air India Express", href: "https://www.airindiaexpress.com" },
  indigo: { name: "IndiGo", href: "https://www.goindigo.in" },
  spicejet: { name: "SpiceJet", href: "https://www.spicejet.com" },
  qatar: { name: "Qatar Airways", href: "https://www.qatarairways.com" },
  flydubai: { name: "flydubai", href: "https://www.flydubai.com" },
  airArabia: { name: "Air Arabia", href: "https://www.airarabia.com" },
  airArabiaAbuDhabi: { name: "Air Arabia Abu Dhabi", href: "https://www.airarabia.com" },
  jazeera: { name: "Jazeera Airways", href: "https://www.jazeeraairways.com" },
  kuwait: { name: "Kuwait Airways", href: "https://www.kuwaitairways.com" },
  salam: { name: "SalamAir", href: "https://www.salamair.com" },
  thai: { name: "Thai Airways", href: "https://www.thaiairways.com" },
  thaiAirAsia: { name: "Thai AirAsia", href: "https://www.airasia.com" },
  thaiLion: { name: "Thai Lion Air", href: "https://www.lionairthai.com" },
  malaysia: { name: "Malaysia Airlines", href: "https://www.malaysiaairlines.com" },
  batik: { name: "Batik Air Malaysia", href: "https://www.batikair.com.my" },
  singapore: { name: "Singapore Airlines", href: "https://www.singaporeair.com" },
  cathay: { name: "Cathay Pacific", href: "https://www.cathaypacific.com" },
  korean: { name: "Korean Air", href: "https://www.koreanair.com" },
  airChina: { name: "Air China", href: "https://www.airchina.com" },
  chinaEastern: { name: "China Eastern Airlines", href: "https://www.ceair.com" },
  chinaSouthern: { name: "China Southern Airlines", href: "https://www.csair.com" },
  biman: { name: "Biman Bangladesh Airlines", href: "https://www.biman-airlines.com" },
  srilankan: { name: "SriLankan Airlines", href: "https://www.srilankan.com" },
  drukair: { name: "Drukair", href: "https://www.drukair.com.bt" },
  bhutanAirlines: { name: "Bhutan Airlines", href: "https://www.bhutanairlines.bt" },
  turkish: { name: "Turkish Airlines", href: "https://www.turkishairlines.com" },
} as const;

type AirlineKey = keyof typeof AIRLINES;
type Carrier = { airline: AirlineKey; confirm?: boolean; frequency?: string; note?: string };

type RouteInput = Omit<KtmRoute, "km" | "carriers"> & { lat: number; lon: number; carriers: Carrier[] };

/** Tribhuvan International Airport, Kathmandu. */
const KTM = { lat: 27.6966, lon: 85.3591 };

/** Great-circle distance from KTM in km, rounded to the nearest 10. */
function kmFromKtm(lat: number, lon: number) {
  const rad = (d: number) => (d * Math.PI) / 180;
  const dLat = rad(lat - KTM.lat);
  const dLon = rad(lon - KTM.lon);
  const a = Math.sin(dLat / 2) ** 2 + Math.cos(rad(KTM.lat)) * Math.cos(rad(lat)) * Math.sin(dLon / 2) ** 2;
  return Math.round((2 * 6371 * Math.asin(Math.sqrt(a))) / 10) * 10;
}

const ROUTES: RouteInput[] = [
  /* ---------- India ---------- */
  {
    city: "Delhi", country: "India", airport: "Indira Gandhi International", iata: "DEL", region: "India", lat: 28.5562, lon: 77.1,
    duration: "≈ 1 h 30 – 1 h 45",
    carriers: [
      { airline: "indigo", frequency: "Several daily (2026 schedules)" },
      { airline: "airIndia" },
      { airline: "nepal" },
      { airline: "spicejet", confirm: true },
    ],
  },
  {
    city: "Mumbai", country: "India", airport: "Chhatrapati Shivaji Maharaj International", iata: "BOM", region: "India", lat: 19.0896, lon: 72.8656,
    duration: "≈ 2 h 45",
    carriers: [{ airline: "indigo", confirm: true }, { airline: "nepal", confirm: true }],
  },
  {
    city: "Bengaluru", country: "India", airport: "Kempegowda International", iata: "BLR", region: "India", lat: 13.1986, lon: 77.7066,
    duration: "≈ 3 h",
    carriers: [{ airline: "nepal" }, { airline: "airIndiaExpress", confirm: true }],
  },
  {
    city: "Kolkata", country: "India", airport: "Netaji Subhas Chandra Bose International", iata: "CCU", region: "India", lat: 22.6547, lon: 88.4467,
    duration: "≈ 1 h 15",
    carriers: [{ airline: "buddha", confirm: true, note: "Route relaunched October 2025" }],
    sources: [{ label: "ShareSansar (2025)", href: "https://www.sharesansar.com/newsdetail/buddha-air-to-resume-direct-kathmandu-kolkata-flights-from-october-19-2025-09-24" }],
  },
  {
    city: "Varanasi", country: "India", airport: "Lal Bahadur Shastri International", iata: "VNS", region: "India", lat: 25.4524, lon: 82.8593,
    duration: "≈ 1 h",
    carriers: [{ airline: "buddha" }],
  },

  /* ---------- Gulf & Middle East ---------- */
  {
    city: "Doha", country: "Qatar", airport: "Hamad International", iata: "DOH", region: "Gulf & Middle East", lat: 25.2731, lon: 51.6081,
    duration: "≈ 4 h 30 – 5 h",
    carriers: [{ airline: "qatar" }, { airline: "nepal", frequency: "3 weekly (Sep 2026 schedule)" }, { airline: "himalaya", confirm: true }],
  },
  {
    city: "Dubai", country: "UAE", airport: "Dubai International", iata: "DXB", region: "Gulf & Middle East", lat: 25.2532, lon: 55.3657,
    duration: "≈ 4 h – 4 h 30",
    carriers: [{ airline: "flydubai" }, { airline: "nepal", frequency: "2 weekly (Sep 2026 schedule)" }, { airline: "himalaya" }],
  },
  {
    city: "Abu Dhabi", country: "UAE", airport: "Zayed International", iata: "AUH", region: "Gulf & Middle East", lat: 24.4331, lon: 54.6511,
    duration: "≈ 4 h 30 – 5 h",
    carriers: [{ airline: "airArabiaAbuDhabi", note: "Also sold by Etihad as a codeshare — confirm the operating airline" }],
  },
  {
    city: "Sharjah", country: "UAE", airport: "Sharjah International", iata: "SHJ", region: "Gulf & Middle East", lat: 25.3286, lon: 55.5172,
    duration: "≈ 4 h – 4 h 30",
    carriers: [{ airline: "airArabia" }],
  },
  {
    city: "Kuwait City", country: "Kuwait", airport: "Kuwait International", iata: "KWI", region: "Gulf & Middle East", lat: 29.2266, lon: 47.9689,
    carriers: [{ airline: "jazeera" }, { airline: "kuwait", confirm: true }, { airline: "himalaya", confirm: true }],
  },
  {
    city: "Muscat", country: "Oman", airport: "Muscat International", iata: "MCT", region: "Gulf & Middle East", lat: 23.5933, lon: 58.2844,
    carriers: [{ airline: "salam", confirm: true }],
  },
  {
    city: "Dammam", country: "Saudi Arabia", airport: "King Fahd International", iata: "DMM", region: "Gulf & Middle East", lat: 26.4712, lon: 49.7979,
    carriers: [{ airline: "nepal", frequency: "1 weekly (Sep 2026 schedule)" }, { airline: "himalaya" }],
  },
  {
    city: "Riyadh", country: "Saudi Arabia", airport: "King Khalid International", iata: "RUH", region: "Gulf & Middle East", lat: 24.9576, lon: 46.6988,
    carriers: [{ airline: "himalaya", confirm: true }],
  },

  /* ---------- Southeast Asia ---------- */
  {
    city: "Bangkok", country: "Thailand", airport: "Suvarnabhumi", iata: "BKK", region: "Southeast Asia", lat: 13.69, lon: 100.7501,
    duration: "≈ 3 h",
    carriers: [{ airline: "thai" }, { airline: "nepal", confirm: true }],
  },
  {
    city: "Bangkok", country: "Thailand", airport: "Don Mueang International", iata: "DMK", region: "Southeast Asia", lat: 13.9126, lon: 100.6068,
    duration: "≈ 3 h",
    carriers: [{ airline: "thaiLion", confirm: true }, { airline: "thaiAirAsia", confirm: true, note: "Service was paused until 31 Jul 2026 — check current status" }],
  },
  {
    city: "Kuala Lumpur", country: "Malaysia", airport: "Kuala Lumpur International", iata: "KUL", region: "Southeast Asia", lat: 2.7456, lon: 101.7099,
    duration: "≈ 4 h 30 – 5 h",
    carriers: [{ airline: "malaysia" }, { airline: "batik" }, { airline: "nepal" }, { airline: "himalaya", confirm: true }],
  },
  {
    city: "Singapore", country: "Singapore", airport: "Changi", iata: "SIN", region: "Southeast Asia", lat: 1.3644, lon: 103.9915,
    duration: "≈ 5 h",
    carriers: [{ airline: "singapore", frequency: "7 weekly (spring 2026)" }],
    sources: [{ label: "The Himalayan Times", href: "https://thehimalayantimes.com/business/singapore-airlines-to-deploy-wide-body-aircraft-on-kathmandu-route-in-spring" }],
  },

  /* ---------- East Asia ---------- */
  {
    city: "Hong Kong", country: "Hong Kong SAR, China", airport: "Hong Kong International", iata: "HKG", region: "East Asia", lat: 22.308, lon: 113.9185,
    duration: "≈ 4 h 30",
    carriers: [{ airline: "cathay" }, { airline: "nepal" }],
  },
  {
    city: "Seoul", country: "South Korea", airport: "Incheon International", iata: "ICN", region: "East Asia", lat: 37.4602, lon: 126.4407,
    duration: "≈ 7 h (to Seoul)",
    carriers: [{ airline: "korean", frequency: "2 weekly (2026 schedules)" }],
  },
  {
    city: "Tokyo", country: "Japan", airport: "Narita International", iata: "NRT", region: "East Asia", lat: 35.772, lon: 140.3929,
    carriers: [{ airline: "nepal", confirm: true }],
  },
  {
    city: "Guangzhou", country: "China", airport: "Baiyun International", iata: "CAN", region: "East Asia", lat: 23.3924, lon: 113.2988,
    carriers: [{ airline: "chinaSouthern" }, { airline: "nepal", confirm: true }],
  },
  {
    city: "Chengdu", country: "China", airport: "Tianfu International", iata: "TFU", region: "East Asia", lat: 30.3197, lon: 104.4451,
    carriers: [{ airline: "airChina" }],
  },
  {
    city: "Kunming", country: "China", airport: "Changshui International", iata: "KMG", region: "East Asia", lat: 25.1019, lon: 102.9292,
    carriers: [{ airline: "chinaEastern" }],
  },
  {
    city: "Lhasa", country: "China (Tibet)", airport: "Gonggar International", iata: "LXA", region: "East Asia", lat: 29.2978, lon: 90.9119,
    carriers: [{ airline: "himalaya" }],
    note: "Travel to Tibet needs special permits arranged through an authorised tour operator, in addition to a Chinese visa.",
  },
  {
    city: "Shanghai", country: "China", airport: "Pudong International", iata: "PVG", region: "East Asia", lat: 31.1443, lon: 121.8083,
    carriers: [{ airline: "himalaya", frequency: "2 weekly (resumed 28 Sep 2026)" }],
    sources: [{ label: "Aviation Week", href: "https://aviationweek.com/air-transport/airports-networks/routes-networks-latest-rolling-daily-updates-wc-sept-28-2026" }],
  },
  {
    city: "Hangzhou", country: "China", airport: "Xiaoshan International", iata: "HGH", region: "East Asia", lat: 30.2295, lon: 120.4344,
    carriers: [{ airline: "himalaya", frequency: "2 weekly (launched 30 Sep 2026)" }],
    sources: [{ label: "Spotlight Nepal", href: "https://www.spotlightnepal.com/2026/10/01/himalaya-airlines-launches-direct-flight-service-on-the-kathmanduhangzhoukathmandu-route/" }],
  },
  {
    city: "Shenzhen", country: "China", airport: "Bao'an International", iata: "SZX", region: "East Asia", lat: 22.6393, lon: 113.8107,
    carriers: [{ airline: "himalaya", frequency: "2 weekly (launched June 2026)" }],
  },
  {
    city: "Beijing", country: "China", airport: "Daxing International", iata: "PKX", region: "East Asia", lat: 39.5098, lon: 116.4105,
    carriers: [{ airline: "himalaya", confirm: true }],
  },
  {
    city: "Chongqing", country: "China", airport: "Jiangbei International", iata: "CKG", region: "East Asia", lat: 29.7192, lon: 106.6417,
    carriers: [{ airline: "himalaya", confirm: true }],
  },

  /* ---------- South Asia ---------- */
  {
    city: "Dhaka", country: "Bangladesh", airport: "Hazrat Shahjalal International", iata: "DAC", region: "South Asia", lat: 23.8433, lon: 90.3978,
    duration: "≈ 1 h 15 – 1 h 30",
    carriers: [{ airline: "biman" }, { airline: "himalaya", confirm: true }],
  },
  {
    city: "Colombo", country: "Sri Lanka", airport: "Bandaranaike International", iata: "CMB", region: "South Asia", lat: 7.1808, lon: 79.8841,
    duration: "≈ 3 h 30",
    carriers: [{ airline: "srilankan", frequency: "4–5 weekly (mid-2026)" }],
    sources: [{ label: "Diplomat Nepal (Jul 2026)", href: "https://diplomatnepal.com/news/srilankan-airlines-adds-airbus-a330-200-to-fleet-eyes-expansion-of-nepal-flights/" }],
  },
  {
    city: "Paro", country: "Bhutan", airport: "Paro International", iata: "PBH", region: "South Asia", lat: 27.4032, lon: 89.4246,
    duration: "≈ 1 h",
    carriers: [{ airline: "drukair" }, { airline: "bhutanAirlines" }],
    note: "Bhutan's own entry rules and fees apply — check with the Department of Tourism, Bhutan.",
  },

  /* ---------- Europe ---------- */
  {
    city: "Istanbul", country: "Türkiye", airport: "Istanbul Airport", iata: "IST", region: "Europe", lat: 41.2753, lon: 28.7519,
    duration: "≈ 7 h to KTM · ≈ 8 h to IST",
    carriers: [{ airline: "turkish", frequency: "5–6 weekly (2026 schedules)" }],
    note: "The only nonstop link between Kathmandu and Europe on the last check.",
  },
];

export const KTM_ROUTES: KtmRoute[] = ROUTES.map(({ lat, lon, carriers, ...r }) => ({
  ...r,
  km: kmFromKtm(lat, lon),
  carriers: carriers.map(({ airline, ...c }) => ({ ...AIRLINES[airline], ...c })),
}));

/** Airlines flying a hub ⇄ KTM nonstop, from the route list above. */
export function carriersFor(...iatas: string[]): string[] {
  return [...new Set(KTM_ROUTES.filter((r) => iatas.includes(r.iata)).flatMap((r) => r.carriers.map((c) => c.name)))];
}

