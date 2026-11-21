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
      "Assam, the land of red river and blue hills, is celebrated for its sprawling tea estates, rich Assamese heritage, and pristine wildlife sanctuaries. Home to the mighty Brahmaputra river and the iconic one-horned rhinoceros, Assam seamlessly blends wilderness with vibrant riverine culture.",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&q=80", // Lush green hills & tea gardens
    capital: "Dispur",
    language: ["Assamese", "Bodo", "Bengali"],
    bestTime: "October to April",
    avgBudgetPerDay: 1500,
    attractionCount: 8,
    highlights: ["Kaziranga National Park", "Majuli River Island", "Kamakhya Temple", "Tea Garden Estates"],
  },
  {
    id: "meghalaya",
    name: "Meghalaya",
    slug: "meghalaya",
    tagline: "The Abode of Clouds",
    description:
      "Meghalaya is world-renowned for its mystical bio-engineered Living Root Bridges, thunderous waterfalls, limestone caverns, and the cleanest villages in Asia. From the misty cliffs of Cherrapunji to the crystal-clear waters of Dawki, Meghalaya is an adventurer's dream.",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=80", // Misty canyon waterfall
    capital: "Shillong",
    language: ["Khasi", "Garo", "English"],
    bestTime: "September to May",
    avgBudgetPerDay: 1800,
    attractionCount: 7,
    highlights: ["Living Root Bridges", "Dawki Clear River", "Nohkalikai Falls", "Mawlynnong Village"],
  },
  {
    id: "nagaland",
    name: "Nagaland",
    slug: "nagaland",
    tagline: "The Land of Festivals & Warrior Heritage",
    description:
      "Nagaland is an extraordinary cultural tapestry nestled amid rolling mountains. Home to 16 major indigenous tribes, each with distinct handlooms, folklore, and traditions, Nagaland comes alive with the world-famous Hornbill Festival, high-altitude treks, and lush terrace cultivation.",
    image: "https://images.unsplash.com/photo-1571536802807-30451e3955d8?w=800&q=80", // Misty mountain village
    capital: "Kohima",
    language: ["English", "Nagamese"],
    bestTime: "October to May",
    avgBudgetPerDay: 2000,
    attractionCount: 5,
    highlights: ["Hornbill Festival", "Dzükou Valley Trek", "Kohima War Memorial", "Khonoma Green Village"],
  },
  {
    id: "manipur",
    name: "Manipur",
    slug: "manipur",
    tagline: "The Jewel of India",
    description:
      "Manipur is crowned by the extraordinary Loktak Lake—the only floating lake on Earth featuring circular vegetative phumdis and the dancing Sangai deer. Known as the birthplace of modern polo and rich classical Manipuri dance, it offers enchanting hill ranges and serene water expanses.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&q=80", // Serene lake landscape
    capital: "Imphal",
    language: ["Meiteilon", "English"],
    bestTime: "October to March",
    avgBudgetPerDay: 1600,
    attractionCount: 5,
    highlights: ["Loktak Floating Lake", "Keibul Lamjao Park", "Kangla Fort", "Ima Keithel Market"],
  },
  {
    id: "mizoram",
    name: "Mizoram",
    slug: "mizoram",
    tagline: "The Land of the Highlanders",
    description:
      "Mizoram is a serene mountain state characterized by steep rolling hills, deep emerald valleys, and pristine bamboo forests. Boasting one of India's highest literacy rates and a warm, close-knit community culture, Mizoram is the ideal destination for slow travel and peaceful trekking.",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80", // Blue mountain ridges
    capital: "Aizawl",
    language: ["Mizo", "English"],
    bestTime: "October to March",
    avgBudgetPerDay: 1700,
    attractionCount: 4,
    highlights: ["Phawngpui Blue Mountain", "Vantawng Falls", "Reiek Heritage Peak", "Solomon's Temple"],
  },
  {
    id: "tripura",
    name: "Tripura",
    slug: "tripura",
    tagline: "The Land of Royal Water Palaces & Rock Carvings",
    description:
      "Tripura is a jewel of royal heritage and ancient art. It houses Neermahal—India's only floating water palace in eastern India, the classical Ujjayanta Palace, and the colossal, mysterious rock-cut bas-relief sculptures of Lord Shiva at Unakoti dating back over a thousand years.",
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=800&q=80", // Historic Indian palace on water
    capital: "Agartala",
    language: ["Bengali", "Kokborok", "English"],
    bestTime: "September to February",
    avgBudgetPerDay: 1200,
    attractionCount: 5,
    highlights: ["Neermahal Water Palace", "Unakoti Rock Art", "Ujjayanta Palace", "Jampui Hills"],
  },
  {
    id: "arunachal-pradesh",
    name: "Arunachal Pradesh",
    slug: "arunachal-pradesh",
    tagline: "The Land of the Dawn-Lit Mountains",
    description:
      "Arunachal Pradesh is India's wild eastern frontier, where snow-draped Himalayan crests meet ancient Tibetan monasteries. From the majestic Tawang Monastery at 10,000 ft and the frozen Sela Pass to the tranquil pine valleys of Ziro, Arunachal is an awe-inspiring realm of nature and spirituality.",
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&q=80", // Snow peaks & prayer flag mountain
    capital: "Itanagar",
    language: ["English", "Hindi"],
    bestTime: "March to October",
    avgBudgetPerDay: 2500,
    attractionCount: 6,
    highlights: ["Tawang Monastery", "Sela Pass & Lake", "Ziro Valley Pine Groves", "Namdapha Tiger Reserve"],
  },
  {
    id: "sikkim",
    name: "Sikkim",
    slug: "sikkim",
    tagline: "The Sanctuary of the Himalayas",
    description:
      "Sikkim is a magical Himalayan wonderland watched over by Mt. Kanchenjunga—the world's third-highest peak. Famous as India's first 100% organic state, Sikkim delights travelers with high-altitude sacred lakes like Gurudongmar, centuries-old Buddhist monasteries, and roaring mountain passes.",
    image: "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?w=800&q=80", // Himalayan mountain lake & snow peaks
    capital: "Gangtok",
    language: ["Nepali", "Sikkimese", "English"],
    bestTime: "March to June, October to December",
    avgBudgetPerDay: 2200,
    attractionCount: 6,
    highlights: ["Gurudongmar Sacred Lake", "Nathula Border Pass", "Tsomgo Glacial Lake", "Rumtek Monastery"],
  },
];

export function getStateBySlug(slug: string): State | undefined {
  return states.find((s) => s.slug === slug);
}
