export interface Guide {
  id: string;
  name: string;
  stateId: string;
  photo: string;
  languages: string[];
  speciality: string;
  experience: string;
  rating: number;
  reviews: number;
  pricePerDay: number;
  phone: string;
  bio: string;
}

export const guides: Guide[] = [
  {
    id: "g1",
    name: "Ranjit Borah",
    stateId: "assam",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
    languages: ["Assamese", "English", "Hindi"],
    speciality: "Wildlife Safari & Tea Gardens",
    experience: "8 years",
    rating: 4.9,
    reviews: 142,
    pricePerDay: 1500,
    phone: "919876543210",
    bio: "Born and raised near Kaziranga, I know every trail in the park. I'll show you rhinos, elephants, and the best tea estates in Upper Assam.",
  },
  {
    id: "g2",
    name: "Banskhem Lyngdoh",
    stateId: "meghalaya",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",
    languages: ["Khasi", "English", "Hindi"],
    speciality: "Trekking & Root Bridges",
    experience: "12 years",
    rating: 4.8,
    reviews: 230,
    pricePerDay: 1800,
    phone: "919876543211",
    bio: "I've trekked to every living root bridge in the Khasi hills. From Nongriat double-decker to hidden gems tourists never see — I know them all.",
  },
  {
    id: "g3",
    name: "Akum Longchar",
    stateId: "nagaland",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
    languages: ["Nagamese", "English", "Ao"],
    speciality: "Tribal Culture & Hornbill Festival",
    experience: "6 years",
    rating: 4.7,
    reviews: 89,
    pricePerDay: 2000,
    phone: "919876543212",
    bio: "I'm from the Ao tribe and can take you into authentic Naga villages, share warrior stories, and serve you the best smoked pork you've ever had.",
  },
  {
    id: "g4",
    name: "Laikhuram Tomba",
    stateId: "manipur",
    photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&q=80",
    languages: ["Meiteilon", "English", "Hindi"],
    speciality: "Cultural Tours & Loktak Lake",
    experience: "10 years",
    rating: 4.6,
    reviews: 76,
    pricePerDay: 1400,
    phone: "919876543213",
    bio: "Experience Manipur through the eyes of a local — from the floating islands of Loktak Lake to the ancient Kangla Fort and the vibrant Ima Keithel market.",
  },
  {
    id: "g5",
    name: "Tenzin Dorji",
    stateId: "sikkim",
    photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&q=80",
    languages: ["Nepali", "Sikkimese", "English", "Hindi"],
    speciality: "Mountain Treks & Monastery Tours",
    experience: "15 years",
    rating: 4.9,
    reviews: 310,
    pricePerDay: 2500,
    phone: "919876543214",
    bio: "I've summited peaks across Sikkim and can guide you to Gurudongmar Lake, through the Goechala trek, and into ancient Buddhist monasteries.",
  },
  {
    id: "g6",
    name: "Lobsang Pema",
    stateId: "arunachal-pradesh",
    photo: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=200&q=80",
    languages: ["Monpa", "English", "Hindi"],
    speciality: "Tawang & Monastery Heritage",
    experience: "9 years",
    rating: 4.8,
    reviews: 125,
    pricePerDay: 2200,
    phone: "919876543215",
    bio: "From Tawang monastery to Ziro Valley's Apatani villages, I bring the hidden stories and sacred traditions of Arunachal Pradesh alive.",
  },
  {
    id: "g7",
    name: "Lalremruata",
    stateId: "mizoram",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",
    languages: ["Mizo", "English", "Hindi"],
    speciality: "Hill Treks & Village Stays",
    experience: "7 years",
    rating: 4.5,
    reviews: 54,
    pricePerDay: 1600,
    phone: "919876543216",
    bio: "Experience Mizoram's rolling hills, bamboo forests, and warm Mizo hospitality. I'll take you to Phawngpui Peak and hidden village homestays.",
  },
  {
    id: "g8",
    name: "Sudip Debbarma",
    stateId: "tripura",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
    languages: ["Bengali", "Kokborok", "English", "Hindi"],
    speciality: "Royal Heritage & Rock Art",
    experience: "11 years",
    rating: 4.6,
    reviews: 95,
    pricePerDay: 1200,
    phone: "919876543217",
    bio: "Tripura's history comes alive with me — from the water palace Neermahal to the mysterious rock carvings of Unakoti and the royal Ujjayanta Palace.",
  },
];
