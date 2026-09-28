export type DestinationSize = "lg" | "md" | "sm";

export interface SudurpaschimDestination {
  number: string;
  name: string;
  district: string;
  location: string;
  category: string;
  description: string;
  image: string;
  alt: string;
  size: DestinationSize;
}

export const sudurpaschimDestinations: SudurpaschimDestination[] = [
  {
    number: "01",
    name: "Dhangadhi & the Mohana Wetlands",
    district: "Kailali",
    location: "Kailali District",
    category: "Gateway & Wetlands",
    description:
      "The province's aviation gateway, ringed by the Mohana River, Chisapani's forested bends and the Geruwa River landscapes on the fringe of Bardiya, with Tharu villages close by.",
    image: "/sudurpaschim/dhangadhi.jpg",
    alt: "Riverside landscape near Dhangadhi in Kailali district",
    size: "lg",
  },
  {
    number: "02",
    name: "Tikapur & Jokhar Lake",
    district: "Kailali",
    location: "Kailali District",
    category: "Lakes & Parkland",
    description:
      "Tikapur Park's open lawns lead to Jokhar Lake and the Karnali Bridge crossing, with Ghodaghodi Lake's wetlands a short journey beyond — a quiet counterpoint of water and grassland.",
    image: "/sudurpaschim/kailali.jpg",
    alt: "Jokhar Lake and parkland near Tikapur, Kailali",
    size: "md",
  },
  {
    number: "03",
    name: "Shuklaphanta Grasslands",
    district: "Kanchanpur",
    location: "Kanchanpur District",
    category: "National Park",
    description:
      "Vast phanta grasslands bordering the Mahakali River, with Bedkot Lake and Rani Tal nearby, and Mahendranagar (Bhimdatta) and the Dodhara–Chandani suspension bridges close at hand.",
    image: "/sudurpaschim/shuklaphanta.jpg",
    alt: "Open grasslands of Shuklaphanta National Park",
    size: "lg",
  },
  {
    number: "04",
    name: "Mahendranagar & the Mahakali Frontier",
    district: "Kanchanpur",
    location: "Kanchanpur District",
    category: "Border Town & River",
    description:
      "Tharu settlements line the Mahakali River near Mahendranagar, close to the Dodhara–Chandani crossing and the Gaddachauki border point, subject to current border and immigration regulations.",
    image: "/sudurpaschim/mahakali.jpg",
    alt: "Mahakali River near Mahendranagar, Kanchanpur",
    size: "sm",
  },
  {
    number: "05",
    name: "Amargadhi & the Dadeldhura Ridgeline",
    district: "Dadeldhura",
    location: "Dadeldhura District",
    category: "Heritage & Hills",
    description:
      "Amargadhi Fort and Ajaymeru overlook the Mahabharat hills, with Ugratara Temple, Sahasralinga and Aalital Lake tracing a heritage circuit around Dadeldhura Bazaar and Ganyapdhura.",
    image: "/sudurpaschim/dadeldhura.jpg",
    alt: "Hilltop fort and temple landscape in Dadeldhura",
    size: "md",
  },
  {
    number: "06",
    name: "Dipayal Silgadhi & the Seti Valley",
    district: "Doti",
    location: "Doti District",
    category: "Temple Town",
    description:
      "Shaileshwari and Bhagwati temples anchor Dipayal Silgadhi and the old Doti Durbar area, with the Seti River below and Doteli villages framing the access routes toward Khaptad.",
    image: "/sudurpaschim/doti.jpg",
    alt: "Shaileshwari Temple area in Doti district",
    size: "sm",
  },
  {
    number: "07",
    name: "Baitadi's Temple Villages",
    district: "Baitadi",
    location: "Baitadi District",
    category: "Pilgrimage & Village Life",
    description:
      "Tripura Sundari Temple and Melauli Bhagwati Temple sit above the Surnaya River, with Patan, Dasharathchand, Ningsal and Dilashaini keeping Baitadeli village traditions alive.",
    image: "/sudurpaschim/baitadi.jpg",
    alt: "Temple village landscape in Baitadi district",
    size: "md",
  },
  {
    number: "08",
    name: "Bungal Valley & the Saipal Approach",
    district: "Bajhang",
    location: "Bajhang District",
    category: "Himalayan Villages",
    description:
      "Chainpur and the Bungal Valley open onto routes toward Saipal Himal, Khaptad and the still waters of Surma Sarovar, through remote Bajhangi mountain villages.",
    image: "/sudurpaschim/bajhang.jpg",
    alt: "Himalayan village in the Bungal Valley, Bajhang",
    size: "lg",
  },
  {
    number: "09",
    name: "Khaptad National Park",
    district: "Bajhang / Doti / Achham / Bajura",
    location: "Khaptad Plateau",
    category: "Sacred Wilderness",
    description:
      "A rolling highland plateau of meadows and forest shared across four districts, revered as a pilgrimage site and treasured for high-altitude trekking and camping.",
    image: "/sudurpaschim/khaptad.jpg",
    alt: "Highland meadows of Khaptad National Park",
    size: "lg",
  },
  {
    number: "10",
    name: "Badimalika & the Bajura Highlands",
    district: "Bajura",
    location: "Bajura District",
    category: "Sacred Peak",
    description:
      "Badimalika Temple crowns a remote ridge above Martadi and Budhinanda, with Triveni, Kolti and the Budhi Ganga valley leading deeper into Himalayan Bajura.",
    image: "/sudurpaschim/badimalika.jpg",
    alt: "Badimalika Temple in the Bajura highlands",
    size: "md",
  },
  {
    number: "11",
    name: "Ramaroshan's Highland Lakes",
    district: "Achham",
    location: "Achham District",
    category: "Lakes & Meadows",
    description:
      "A cluster of glacial lakes and open meadows above Mangalsen, with Panchadeval Binayak and Baidyanath Dham nearby, and the Seti River tracing the valley below.",
    image: "/sudurpaschim/ramaroshan.jpg",
    alt: "Highland lakes of the Ramaroshan area, Achham",
    size: "lg",
  },
  {
    number: "12",
    name: "Api Himal & Api Base Camp",
    district: "Darchula",
    location: "Darchula District",
    category: "Himalayan Expedition",
    description:
      "The province's highest sentinel, approached through Gokuleshwar, Duhu and the Byas Valley, with Malikarjun Temple and the Mahakali River marking the way toward Khalanga and the Kalapani–Lipulekh region.",
    image: "/sudurpaschim/api-himal.jpg",
    alt: "Api Himal seen from the Darchula approach trail",
    size: "lg",
  },
];
