export interface State {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  description: string;
  image: string;
  capital: string;
  language: string[];
  bestTime: string;
  avgBudgetPerDay: number;
  attractionCount: number;
  highlights: string[];
}

export const states: State[] = [
  {
    id: "assam",
    name: "Assam",
    slug: "assam",
    tagline: "The Gateway to Northeast India",
    description:
      "Assam, the land of red river and blue hills, is known for its tea gardens, silk, wildlife sanctuaries, and rich Assamese culture. Home to the mighty Brahmaputra and the one-horned rhinoceros, Assam offers a perfect blend of nature and heritage.",
    image: "https://images.unsplash.com/photo-1578128178001-23a5a8e7b5b4?w=800&q=80",
    capital: "Dispur",
    language: ["Assamese", "Bengali", "Bodo"],
    bestTime: "October to April",
    avgBudgetPerDay: 1500,
    attractionCount: 8,
    highlights: ["Kaziranga National Park", "Tea Gardens", "Majuli Island", "Kamakhya Temple"],
  },
  {
    id: "meghalaya",
    name: "Meghalaya",
    slug: "meghalaya",
    tagline: "The Abode of Clouds",
    description:
      "Meghalaya, meaning 'abode of clouds', is famous for its living root bridges, stunning waterfalls, limestone caves, and the wettest place on Earth — Mawsynram. The Khasi, Garo, and Jaintia hills offer breathtaking landscapes and unique tribal culture.",
    image: "https://images.unsplash.com/photo-1597735881932-d9664c9bbcea?w=800&q=80",
    capital: "Shillong",
    language: ["Khasi", "Garo", "English"],
    bestTime: "September to May",
    avgBudgetPerDay: 1800,
    attractionCount: 7,
    highlights: ["Living Root Bridges", "Dawki River", "Cherrapunji", "Shillong Peak"],
  },
  {
    id: "nagaland",
    name: "Nagaland",
    slug: "nagaland",
    tagline: "The Land of Festivals",
    description:
      "Nagaland is a vibrant state known for its colorful tribal festivals, especially the Hornbill Festival. With 16 major tribes, each with distinct traditions, Nagaland offers a unique cultural tapestry set against misty mountains and lush green valleys.",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&q=80",
    capital: "Kohima",
    language: ["English", "Nagamese"],
    bestTime: "October to May",
    avgBudgetPerDay: 2000,
    attractionCount: 5,
    highlights: ["Hornbill Festival", "Kohima War Cemetery", "Dzukou Valley", "Mon Village"],
  },
  {
    id: "manipur",
    name: "Manipur",
    slug: "manipur",
    tagline: "The Jewel of India",
    description:
      "Manipur, the 'Jewel of India', is famous for Loktak Lake — the only floating lake in the world with its unique phumdis (floating islands). Known for Manipuri dance, polo (which originated here), and stunning natural beauty.",
    image: "https://images.unsplash.com/photo-1625048544867-4acee7898069?w=800&q=80",
    capital: "Imphal",
    language: ["Meiteilon", "English"],
    bestTime: "October to March",
    avgBudgetPerDay: 1600,
    attractionCount: 5,
    highlights: ["Loktak Lake", "Kangla Fort", "INA Memorial", "Shirui Lily Festival"],
  },
  {
    id: "mizoram",
    name: "Mizoram",
    slug: "mizoram",
    tagline: "The Land of the Highlanders",
    description:
      "Mizoram, the land of rolling hills and pleasant climate, is known for its breathtaking landscapes, vibrant Mizo culture, and one of the highest literacy rates in India. The Chapchar Kut festival and bamboo dance are iconic cultural expressions.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    capital: "Aizawl",
    language: ["Mizo", "English"],
    bestTime: "October to March",
    avgBudgetPerDay: 1700,
    attractionCount: 4,
    highlights: ["Phawngpui Peak", "Tam Dil Lake", "Vantawng Falls", "Aizawl City"],
  },
  {
    id: "tripura",
    name: "Tripura",
    slug: "tripura",
    tagline: "The Land of Fourteen Gods",
    description:
      "Tripura, one of the smallest states in India, packs a punch with its royal heritage, ancient temples, and the stunning Neermahal — India's only water palace. The Ujjayanta Palace and rock carvings of Unakoti are must-visit attractions.",
    image: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=800&q=80",
    capital: "Agartala",
    language: ["Bengali", "Kokborok"],
    bestTime: "September to February",
    avgBudgetPerDay: 1200,
    attractionCount: 5,
    highlights: ["Neermahal", "Ujjayanta Palace", "Unakoti", "Jampui Hills"],
  },
  {
    id: "arunachal-pradesh",
    name: "Arunachal Pradesh",
    slug: "arunachal-pradesh",
    tagline: "The Land of the Dawn-Lit Mountains",
    description:
      "Arunachal Pradesh, the 'Land of the Rising Sun', is India's northeasternmost state. Home to the majestic Tawang Monastery (largest in India), snow-capped peaks, pristine valleys like Ziro, and over 26 indigenous tribes with rich cultural heritage.",
    image: "https://images.unsplash.com/photo-1626714100232-dee66e3e6b74?w=800&q=80",
    capital: "Itanagar",
    language: ["English", "Hindi", "tribal languages"],
    bestTime: "March to October",
    avgBudgetPerDay: 2500,
    attractionCount: 6,
    highlights: ["Tawang Monastery", "Ziro Valley", "Sela Pass", "Namdapha National Park"],
  },
  {
    id: "sikkim",
    name: "Sikkim",
    slug: "sikkim",
    tagline: "The Hidden Paradise of the Himalayas",
    description:
      "Sikkim, nestled in the Eastern Himalayas, is a land of breathtaking mountain landscapes, ancient monasteries, and pristine lakes. With views of Kanchenjunga, the world's third-highest peak, Sikkim offers adventure, spirituality, and natural beauty.",
    image: "https://images.unsplash.com/photo-1626686010641-1296da2d943e?w=800&q=80",
    capital: "Gangtok",
    language: ["Nepali", "Sikkimese", "English"],
    bestTime: "March to June, October to December",
    avgBudgetPerDay: 2200,
    attractionCount: 6,
    highlights: ["Gurudongmar Lake", "Nathula Pass", "Tsomgo Lake", "Rumtek Monastery"],
  },
];

export function getStateBySlug(slug: string): State | undefined {
  return states.find((s) => s.slug === slug);
}
