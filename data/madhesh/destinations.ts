export interface MadheshDistrict {
  slug: string;
  district: string;
  tagline: string;
  image: string;
  places: string[];
}

export const madheshDestinations: MadheshDistrict[] = [
  {
    slug: "saptari",
    district: "Saptari",
    tagline: "Wetlands, river goddesses and the Koshi floodplain",
    image: "/images/madhesh/birt-watching-saptari.jpg",
    places: [
      "Koshi Tappu Wildlife Reserve",
      "Chhinnamasta Bhagwati",
      "Kankalini Bhagwati",
      "Shambhunath",
      "Koshi River landscapes",
      "Chandra Canal",
    ],
  },
  {
    slug: "siraha",
    district: "Siraha",
    tagline: "Salhesh legends and Mithila village life",
    image: "/images/madhesh/siraha-salhesh.jpg",
    places: [
      "Salhesh Phulbari",
      "Salhesh Durbar",
      "Kamala River",
      "Mithila villages",
    ],
  },
  {
    slug: "dhanusha",
    district: "Dhanusha",
    tagline: "Janakpurdham — the sacred heart of Mithila",
    image: "/images/madhesh/janaki-mandir.jpg",
    places: [
      "Janakpurdham",
      "Janaki Mandir",
      "Vivah Mandap",
      "Ram Mandir",
      "Ganga Sagar",
      "Dhanusha Sagar",
      "Dhanushadham",
      "Dhaneshwar Mahadev",
      "Mithila painting centres",
    ],
  },
  {
    slug: "mahottari",
    district: "Mahottari",
    tagline: "Temple towns and rural Mithila settlements",
    image: "/images/madhesh/jaleshwar-nath.jpg",
    places: [
      "Jaleshwar Mahadev",
      "Matihani",
      "Tuteshwar Mahadev",
      "Bardibas",
      "Rural Mithila settlements",
    ],
  },
  {
    slug: "sarlahi",
    district: "Sarlahi",
    tagline: "Lakes, the Bagmati and quiet farmland",
    image: "/images/madhesh/bharat-tal.jpg",
    places: [
      "Bharat Tal",
      "Nadi Lake",
      "Malangawa",
      "Bagmati River",
      "Agricultural villages",
    ],
  },
  {
    slug: "rautahat",
    district: "Rautahat",
    tagline: "Archaeology and the northern Chure foothills",
    image: "/images/madhesh/rautahat-archaeology.jpg",
    places: [
      "Pataura archaeological area",
      "Marghar wetlands",
      "Nuntahar",
      "Bagmati River",
      "Northern Chure surroundings",
    ],
  },
  {
    slug: "bara",
    district: "Bara",
    tagline: "Simraungadh's lost capital and the Gadhimai Mela",
    image: "/images/madhesh/simraungadh-gate.jpg",
    places: [
      "Simraungadh",
      "Gadhimai Temple",
      "Deutal Pond",
      "Kankali Temple",
      "Raniwas",
      "Hariharpur Pillar",
      "Bara-side forest landscapes",
    ],
  },
  {
    slug: "parsa",
    district: "Parsa",
    tagline: "Forests, forgotten gates and the India border",
    image: "/images/madhesh/parsa-forests-forgotten-gates-india-border-madhesh-nepal.jpg",
    places: [
      "Parsa National Park",
      "Thori",
      "Birgunj",
      "Gahawa Mai Temple",
      "Ghantaghar",
      "Shankaracharya Gate",
      "Local markets",
      "Forest and rural landscapes",
    ],
  },
];
