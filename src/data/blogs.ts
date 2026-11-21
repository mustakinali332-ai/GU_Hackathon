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
  category: "Wildlife" | "Trekking" | "Culture" | "Permits" | "Food";
  state: string;
}

export const blogs: BlogPost[] = [
  {
    id: "b1",
    slug: "kaziranga-safari-complete-guide",
    title: "The Ultimate Guide to Kaziranga National Park: Elephant vs Jeep Safari & Best Zones",
    excerpt: "Everything you need to know about spotting the Great Indian One-Horned Rhinoceros: booking Kohora vs Bagori ranges, timings, and photography tips.",
    coverImage: "https://images.unsplash.com/photo-1575550959106-5a7defe28b56?w=800&q=80",
    author: {
      name: "Pranjal Saikia",
      role: "Wildlife Naturalist & Safari Guide",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&q=80",
    },
    date: "November 14, 2026",
    readTime: "6 min read",
    category: "Wildlife",
    state: "Assam",
    content: [
      "Kaziranga National Park spans over 430 sq km across the fertile floodplains of the Brahmaputra River. It shelters over 2,600 one-horned rhinos, making it one of the greatest conservation success stories on the planet.",
      "**Which Range Should You Choose?**",
      "• **Bagori (Western Range):** Highest rhino density and best for elephant rides and close-up views of wild buffalo.",
      "• **Kohora (Central Range):** Best balance of grasslands, water bodies, and pelicans. Ideal for first-time visitors.",
      "• **Agoratoli (Eastern Range):** Paradise for birdwatchers and tiger trackers with dense forest cover.",
      "**Pro Tip for Travelers:** Book early morning 6:30 AM slots for peak mist and animal activity. Carry your physical photo ID, as forest rangers cross-verify vehicle permits at the entry barrier.",
    ],
  },
  {
    id: "b2",
    slug: "living-root-bridges-nongriat-trek",
    title: "Trekking to the Double Decker Living Root Bridge of Nongriat, Meghalaya",
    excerpt: "Conquering the 3,500 stone stairs through lush subtropical rainforest to witness nature's most astounding living bio-architecture.",
    coverImage: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=80",
    author: {
      name: "Patricia Kharkongor",
      role: "Khasi Hills Expedition Leader",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&q=80",
    },
    date: "October 28, 2026",
    readTime: "7 min read",
    category: "Trekking",
    state: "Meghalaya",
    content: [
      "Deep inside the rainforest valleys beneath Cherrapunji lies the village of Nongriat. Here, ancient Khasi tribes trained the flexible aerial roots of rubber fig trees over generations to span roaring mountain torrents.",
      "**The Journey Down:**",
      "Starting at Tyrna village, you descend over 3,500 mossy stone steps, cross two swaying iron suspension bridges above turquoise waters, and reach the world-famous double-decker living bridge.",
      "**What to Pack:** Sturdy anti-slip trail shoes, bamboo walking stick (rented for ₹20 at Tyrna), quick-dry clothes, and plenty of water with electrolytes.",
    ],
  },
  {
    id: "b3",
    slug: "hornbill-festival-first-timers-survival-guide",
    title: "Hornbill Festival 2026: First-Timer's Survival & Cultural Etiquette Guide",
    excerpt: "How to experience all 16 Naga tribes in Kisama: homestays in Kohima, ceremonial warrior dances, traditional morungs, and Naga cuisine.",
    coverImage: "https://images.unsplash.com/photo-1533669955142-6a73332af4db?w=800&q=80",
    author: {
      name: "Imtisunep Ao",
      role: "Cultural Anthropologist & Storyteller",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&q=80",
    },
    date: "September 19, 2026",
    readTime: "8 min read",
    category: "Culture",
    state: "Nagaland",
    content: [
      "Every year from December 1st to 10th, the Kisama Heritage Village near Kohima transforms into a thunderous carnival of song, dance, archery, and tribal feasting.",
      "**Cultural Etiquette:**",
      "1. Always ask permission before photographing tribal elders in traditional attire inside their Morungs.",
      "2. Taste the local food: smoked pork with Axone (fermented soya beans) and fresh rice beer (Zutho) are traditional delicacies.",
      "3. Book accommodations in Kohima or Kisama at least 2 to 3 months in advance as homestays fill up across the entire state.",
    ],
  },
  {
    id: "b4",
    slug: "northeast-food-guide-indigenous-dishes",
    title: "Beyond Momos: 8 Must-Try Indigenous Dishes Across the 8 Northeast States",
    excerpt: "A culinary journey exploring fermented bamboo shoots, smoked meats, black sesame gravies, and aromatic organic rice varieties.",
    coverImage: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=800&q=80",
    author: {
      name: "Ananya Baruah",
      role: "Culinary Historian",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&q=80",
    },
    date: "August 12, 2026",
    readTime: "5 min read",
    category: "Food",
    state: "Regional",
    content: [
      "Northeast Indian cuisine is one of the world's least understood culinary treasures—relying on minimal oil, seasonal forest herbs, wild chillies, and natural fermentation.",
      "• **Assam - Masor Tenga:** Light tangy fish curry prepared with elephant apple (Ou Tenga) or lemon.",
      "• **Meghalaya - Dohneiiong:** Succulent pork braised in roasted black sesame paste.",
      "• **Nagaland - Smoked Pork with Axone:** Rich earthy flavors infused with fiery Bhut Jolokia chillies.",
      "• **Manipur - Kangshoi:** Light herbal vegetable stew served with fresh Singju lotus salad.",
      "• **Mizoram - Bai:** Wholesome steamed organic greens with pork and tender bamboo shoots.",
    ],
  },
];
