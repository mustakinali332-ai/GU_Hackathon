export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  coverImage: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  date: string;
  readTime: string;
  category: "Culture" | "Food Tour" | "Offbeat Travel" | "Wildlife" | "Trekking";
  state: string;
}

export const blogs: BlogPost[] = [
  {
    id: "b1",
    slug: "10-offbeat-places-arunachal-pradesh",
    title: "10 Offbeat Places to Visit in Arunachal Pradesh: From Mechuka to Dong Sunrise",
    excerpt: "Lesser-known paradises in India's Land of the Dawn-Lit Mountains where ancient Tibetan Buddhist monasteries meet misty Himalayan valleys.",
    coverImage: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
    author: {
      name: "Tashi Norbu",
      role: "Tawang & Siang Valley Explorer",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&q=80",
    },
    date: "03/01/2025",
    readTime: "7 min read",
    category: "Offbeat Travel",
    state: "Arunachal Pradesh",
    content: [
      "Arunachal Pradesh is far more than just Tawang. For travelers willing to step off the paved tourist trail, this easternmost frontier yields wild valleys and warm tribal hospitality.",
      "**1. Mechuka Valley (Menchukha):** Often called the 'Forbidden Valley of Arunachal', nestled near the Tibet border with 400-year-old Samten Yongcha monastery and Memba wooden hamlets.",
      "**2. Dong Valley:** The earliest place in India to receive the first rays of the rising sun. A 3 AM night hike rewards you with a golden dawn at 1,240 meters.",
      "**3. Ziro Valley (Apatani Culture):** Famous for UNESCO-recognized sustainable paddy-cum-pisciculture farming and the revered Apatani tribe's facial tattoos and nose plugs.",
      "**4. Anini (Dibang Valley):** Pristine pine meadows, cascading waterfalls, and the tranquil settlements of the Idu Mishmi tribe.",
      "**Travel Tip:** Remember that all Indian citizens require an Inner Line Permit (ILP) and foreign nationals require a Protected Area Permit (PAP) to enter Arunachal Pradesh.",
    ],
  },
  {
    id: "b2",
    slug: "10-offbeat-places-to-visit-in-manipur",
    title: "10 Offbeat Places to Visit in Manipur: Beyond Loktak Lake & Phumdis",
    excerpt: "Manipur has a lot to offer to every cultural traveler. From the blooming Siroi Lilies of Ukhrul to the floating biomass islands of Loktak.",
    coverImage: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=800&q=80",
    author: {
      name: "Linthoingambi Devi",
      role: "Imphal Valley Heritage Guide",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&q=80",
    },
    date: "10/11/2025",
    readTime: "6 min read",
    category: "Culture",
    state: "Manipur",
    content: [
      "Manipur—the 'Jeweled Land'—is steeped in rich martial arts, indigenous polo (Sagol Kangjei), and extraordinary freshwater ecosystems.",
      "**1. Keibul Lamjao National Park & Loktak Lake:** The world's only floating national park, home to the endangered Sangai brow-antlered dancing deer on natural phumdi grass islands.",
      "**2. Shirui Peak, Ukhrul:** The exclusive home of the rare Shirui Lily (Lilium mackliniae) which grows nowhere else on planet Earth, revered by the Tangkhul Naga tribe.",
      "**3. Kangla Fort (Imphal):** The historic seat of the Meitei kingdom with sacred ponds, dragon statues, and centuries of royal military architecture.",
      "**4. Andro Cultural Village:** Ancient village preserving traditional coil-pottery techniques without potters' wheels and the sacred sanctum fire burning since the 1st century.",
      "**5. Ima Keithel (Mother's Market):** The largest all-women market in Asia, run entirely by over 5,000 Meitei women in central Imphal for over 500 years.",
    ],
  },
  {
    id: "b3",
    slug: "14-assamese-dishes-and-food-you-must-try",
    title: "14 Assamese Dishes and Traditional Food That You Must Try",
    excerpt: "If you think Northeast food is only about momos, discover the magic of alkaline Khar, sour Masor Tenga, and duck cooked with black sesame and ash gourd.",
    coverImage: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=800&q=80",
    author: {
      name: "Dr. Ananya Baruah",
      role: "Assamese Culinary Anthropologist",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&q=80",
    },
    date: "06/11/2025",
    readTime: "8 min read",
    category: "Food Tour",
    state: "Assam",
    content: [
      "Traditional Assamese cuisine revolves around harmony of tastes: an alkaline start (Khar), aromatic greens (Xaak), comforting dal, and a sour palate cleanser (Tenga).",
      "**1. Omita Khar (Raw Papaya Khar):** A distinctive traditional starter cooked using water filtered through burnt sun-dried banana peels (kola khar).",
      "**2. Masor Tenga (Tangy Fish Curry):** The soul of Assam. Freshwater Rohu or Borali fish gently simmered in a light broth sour with elephant apple (Ou Tenga) or Kaji Nemu (Assam lemon).",
      "**3. Haah Kumura (Duck with Ash Gourd):** A festive winter delicacy seasoned with black pepper, garlic, and fresh crushed ginger, cooked slowly till meat is meltingly tender.",
      "**4. Til Diya Gahori (Pork in Roasted Black Sesame):** Succulent pork pieces braised in an intensely nutty, roasted indigenous black sesame paste.",
      "**5. Dhekia Xaak Bhaja:** Tender fiddlehead fern sautéed with mustard oil, split green chillies, and fried potatoes.",
      "**6. Pitha and Laru:** Handcrafted rice rolls stuffed with grated coconut or roasted black sesame and pure liquid date-palm jaggery (Jolpan tradition).",
    ],
  },
  {
    id: "b4",
    slug: "majuli-island-neo-vaishnavite-monks-mask-making",
    title: "Majuli Island: Living with the World's Largest River Island Mask Makers & Monks",
    excerpt: "A traveler's intimate journey through the Satras of Majuli on the Brahmaputra, where 500-year-old bamboo mask making and celestial Sattriya dance live on.",
    coverImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
    author: {
      name: "Bhaskar Jyoti Mahanta",
      role: "Majuli Cultural Custodian",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&q=80",
    },
    date: "18/10/2025",
    readTime: "6 min read",
    category: "Culture",
    state: "Assam",
    content: [
      "Majuli, cradled within the rushing currents of the mighty Brahmaputra, is the spiritual capital of Assam founded by saint-reformer Srimanta Sankardeva in the 15th century.",
      "**The Art of Mukha Shilpa (Mask Making):**",
      "At Natun Samaguri Satra, craftsmen use local bamboo splints, clay from river banks, cow dung, and vegetable dyes to mold expressive masks of mythological characters like Ravana, Hanuman, and Narasimha.",
      "**Bhaona (Traditional Theater):** Watch theatrical performances where monks speak Brajavali, accompanied by the thunderous rhythm of the Khol drum and Cymbals.",
      "**How to Experience Majuli:** Catch the government Ro-Pax river ferry from Nimati Ghat (Jorhat). Rent a bicycle to ride through Mishing tribal stilt villages (Sang Ghar) and pottery hamlets.",
    ],
  },
  {
    id: "b5",
    slug: "living-root-bridges-nongriat-meghalaya-diary",
    title: "Trekking to the Double Decker Living Root Bridges: A Meghalaya Diary",
    excerpt: "Descending 3,500 stone stairs into the rainforest of Cherrapunji to witness the Khasi tribe's miraculous centuries-old living botanical bridges.",
    coverImage: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=80",
    author: {
      name: "Patricia Kharkongor",
      role: "Khasi Hills Expedition Leader",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&q=80",
    },
    date: "28/09/2025",
    readTime: "7 min read",
    category: "Trekking",
    state: "Meghalaya",
    content: [
      "Deep inside the subtropical valleys beneath Sohra (Cherrapunji) lies the indigenous Khasi village of Nongriat.",
      "Rather than cutting trees for timber, Khasi ancestors guided the aerial roots of Ficus elastica (rubber fig) through hollowed betel nut trunks across raging monsoon rivers.",
      "Over 15 to 20 years, these living roots interlace, take root on the opposite bank, and grow stronger with time. The Jingkieng Nongriat (Double Decker Bridge) can support up to 50 people simultaneously.",
      "**Traveler Note:** Stay overnight in an eco-homestay in Nongriat village to hike further to the pristine turquoise waters of the Rainbow Falls before morning crowds arrive.",
    ],
  },
  {
    id: "b6",
    slug: "hornbill-festival-first-timers-survival-guide",
    title: "Hornbill Festival 2026: First-Timer's Guide to Naga Warrior Traditions",
    excerpt: "How to experience all 17 Naga tribes in Kisama: ceremonial warrior dances, traditional morungs, Naga chilli eating contests, and rice beer.",
    coverImage: "https://images.unsplash.com/photo-1533669955142-6a73332af4db?w=800&q=80",
    author: {
      name: "Imtisunep Ao",
      role: "Naga Cultural Anthropologist",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&q=80",
    },
    date: "15/08/2025",
    readTime: "8 min read",
    category: "Culture",
    state: "Nagaland",
    content: [
      "Every year from December 1st to 10th, the Kisama Heritage Village near Kohima resonates with the war cries, folk songs, and hornbill feather headgear of all Naga tribes.",
      "**Inside the Morungs:** Each tribe builds their traditional morung (youth dormitory) with intricate wood carvings of hornbills and mithun horns.",
      "**Food & Drink:** Savor smoked pork with fermented bamboo shoot or Axone, accompanied by fresh Zutho (fermented rice brew) served in polished bamboo mugs.",
      "**Tips for Travelers:** Carry warm thermals as winter evenings in Kohima drop below 6°C. Always obtain your Nagaland Inner Line Permit (ILP) online prior to arriving at Dimapur.",
    ],
  },
];

export function getBlogBySlug(slug: string): BlogPost | undefined {
  return blogs.find((b) => b.slug === slug || b.id === slug);
}
