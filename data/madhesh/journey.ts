export interface MadheshRoute {
  title: string;
  theme: string;
  stops: string[];
  description: string;
  /** How the stops connect in practice — never implies a single direct road. */
  note: string;
  image: string;
  alt: string;
}

export const madheshRoutes: MadheshRoute[] = [
  {
    title: "Janakpur Spiritual Circuit",
    theme: "Ramayana heritage",
    stops: ["Janaki Mandir", "Vivaha Mandap", "Ram Mandir", "Dhanush Sagar", "Ganga Sagar"],
    description:
      "A day exploring the temples and sacred ponds at the heart of Janakpurdham, ending with evening aarti at Janaki Mandir.",
    note: "All within Janakpurdham — on foot or by e-rickshaw.",
    image: "/images/madhesh/janaki-mandir.jpg",
    alt: "Janaki Mandir, the temple of Sita in Janakpurdham",
  },
  {
    title: "Mithila Cultural Journey",
    theme: "Art, food & village life",
    stops: ["Janakpurdham", "Mithila villages", "Painting workshops", "Maithili home kitchens"],
    description:
      "Meet Mithila artists, see painted village walls, try a painting session and share a traditional Maithili meal with local families.",
    note: "Village visits are arranged locally from Janakpurdham.",
    image: "/images/madhesh/mithila-painting.jpg",
    alt: "Traditional Mithila painting",
  },
  {
    title: "Madhesh Pilgrimage Journey",
    theme: "Temples & shrines",
    stops: ["Janakpurdham", "Dhanushadham", "Jaleshwar Mahadev", "Chhinnamasta Bhagwati"],
    description:
      "Link Janakpur's Ramayana sites with the Shiva temple of Jaleshwar and the Shakti shrine of Chhinnamasta in Saptari.",
    note: "Separate road excursions from Janakpurdham, best spread over several days.",
    image: "/images/madhesh/jaleshwar-nath.jpg",
    alt: "Jaleshwar Nath Mahadev temple in Mahottari",
  },
  {
    title: "Wildlife & Culture Journey",
    theme: "Forests & heritage",
    stops: ["Birgunj", "Parsa National Park", "Simraungadh", "Janakpurdham"],
    description:
      "Begin with jungle drives in Parsa's sal forests, explore the medieval ruins of Simraungadh, then travel east to Janakpur's temples.",
    note: "Road journey across the Terai; plan overnight stops between sections.",
    image: "/images/madhesh/parsa-forests-forgotten-gates-india-border-madhesh-nepal.jpg",
    alt: "Safari jeep on a misty forest track in the Terai",
  },
  {
    title: "India–Nepal Heritage Journey",
    theme: "Cross-border",
    stops: ["Raxaul", "Birgunj", "Simraungadh", "Janakpurdham", "Jaynagar"],
    description:
      "Enter Nepal at Raxaul–Birgunj, explore Simraungadh and Janakpurdham, and return to Bihar on the Janakpur–Jaynagar railway.",
    note: "Check border, train and road status before travel — connections vary by season.",
    image: "/images/madhesh/simraungadh-darbar.jpg",
    alt: "Historic Simraungadh in Bara district",
  },
];
