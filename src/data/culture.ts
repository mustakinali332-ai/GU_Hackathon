export interface CultureItem {
  id: string;
  state: string;
  stateSlug: string;
  traditionName: string;
  category: "Folk Dance" | "Living Heritage" | "Tribal Festival" | "Monastic Sacred Art" | "Traditional Craft";
  tagline: string;
  description: string;
  highlights: string[];
  image: string;
}

export const cultureHighlights: CultureItem[] = [
  {
    id: "c-assam",
    state: "Assam",
    stateSlug: "assam",
    traditionName: "Rongali Bihu & Majuli Mask Making",
    category: "Living Heritage",
    tagline: "Spring Agricultural Harvest Dance & 500-Year Sacred Masks",
    description: "Assam's cultural soul beats to the rhythm of the Pepa (buffalo horn flute) and Dhol during Rongali Bihu. At Majuli's ancient Vaishnavite Satras, artisans handcraft sacred mythological masks from bamboo, cow dung, and river clay for celestial Bhaona theater.",
    highlights: ["Muga Silk Mekhela Chadors", "Pepa Buffalo Horn Music", "Majuli Bamboo Mask Art", "Sattriya Classical Dance"],
    image: "https://images.unsplash.com/photo-1533669955142-6a73332af4db?w=800&q=80",
  },
  {
    id: "c-meghalaya",
    state: "Meghalaya",
    stateSlug: "meghalaya",
    traditionName: "Khasi Shad Suk Mynsiem & Matrilineal Roots",
    category: "Folk Dance",
    tagline: "The Dance of Peaceful Hearts & Bio-Engineered Living Bridges",
    description: "Meghalaya follows one of the world's last surviving matrilineal societies where lineage passes through women. During Shad Suk Mynsiem, maidens in solid gold crowns (Pansngiat) and silver quivers dance to Tangmuri folk flutes thanking nature.",
    highlights: ["Matrilineal Kinship Heritage", "Gold Crown (Pansngiat)", "Living Root Bio-Architecture", "Whistling Village of Kongthong"],
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=80",
  },
  {
    id: "c-nagaland",
    state: "Nagaland",
    stateSlug: "nagaland",
    traditionName: "Hornbill Festival & 17 Naga Tribal Morungs",
    category: "Tribal Festival",
    tagline: "Festival of Festivals Celebrating Indigenous Warrior Heritage",
    description: "Every December, the Kisama Heritage Village near Kohima roars with the warrior chants, indigenous archery, and log drums of all 17 Naga tribes. Each tribe constructs their traditional wooden youth dormitory (Morung) with carved hornbills and mithun horns.",
    highlights: ["17 Naga Tribal Morungs", "Hornbill Feather Regalia", "Traditional Log Drumming", "Ancient Warrior Chants"],
    image: "https://images.unsplash.com/photo-1575550959106-5a7defe28b56?w=800&q=80",
  },
  {
    id: "c-arunachal",
    state: "Arunachal Pradesh",
    stateSlug: "arunachal-pradesh",
    traditionName: "Tawang Torgya & Monpa Cham Dances",
    category: "Monastic Sacred Art",
    tagline: "Sacred Cham Mask Dances at 400-Year-Old Himalayan Monasteries",
    description: "In the shadow of snow-clad Himalayan passes, Buddhist lamas at Tawang Monastery don vibrant yak and snow lion masks, twirling to monastic horns and cymbals during Torgya to banish malevolent spirits and usher in peace for humanity.",
    highlights: ["400-Year Tawang Monastery", "Sacred Cham Mask Rituals", "Apatani Sustainable Agriculture", "Monpa Handmade Woodcraft"],
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
  },
  {
    id: "c-manipur",
    state: "Manipur",
    stateSlug: "manipur",
    traditionName: "Classical Raas Leela & Ancient Polo Roots",
    category: "Living Heritage",
    tagline: "Ethereal Cylindrical Potloi Dance & Modern Polo's Birthplace",
    description: "Manipuri Raas Leela is a celestial classical dance where gopis glide gracefully in ornate tubular embroidered skirts (Potloi). Manipur is also the ancient birthplace of modern polo (Sagol Kangjei) and home to Asia's 500-year-old all-women market (Ima Keithel).",
    highlights: ["Embroidered Potloi Costumes", "Sagol Kangjei (Original Polo)", "500-Yr All-Women Ima Keithel", "Thang-Ta Martial Arts"],
    image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=800&q=80",
  },
  {
    id: "c-sikkim",
    state: "Sikkim",
    stateSlug: "sikkim",
    traditionName: "Losoong Festival & Rumtek Monastic Chams",
    category: "Monastic Sacred Art",
    tagline: "Sikkimese Buddhist Harvest & Sacred Black Hat Warrior Chams",
    description: "Losoong marks the Sikkimese New Year across the misty monasteries of Rumtek, Pemayangtse, and Enchey. Monks perform the mystical Black Hat dance alongside vibrant theatrical pantomimes of Padmasambhava subduing negative worldly forces.",
    highlights: ["Tibetan Buddhist Thangkas", "Snow Lion & Black Hat Chams", "Ancient Chogyal Royal Heritage", "Rumtek Monastery Rituals"],
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&q=80",
  },
  {
    id: "c-mizoram",
    state: "Mizoram",
    stateSlug: "mizoram",
    traditionName: "Cheraw Bamboo Dance & Chapchar Kut",
    category: "Folk Dance",
    tagline: "Acrobatic Bamboo Rhythm Celebrating Harvest & Spring Rebirth",
    description: "Cheraw is the most graceful and iconic folk dance of Mizoram. Dancers in vibrant Puan shawls step with astonishing agility in and out of rhythmic clapping bamboo staves, accompanied by tribal gongs to celebrate the arrival of spring.",
    highlights: ["Precision Bamboo Clapping", "Traditional Puan Shawls", "Khuang Folk Drumming", "Chapchar Kut Spring Carnival"],
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
  },
  {
    id: "c-tripura",
    state: "Tripura",
    stateSlug: "tripura",
    traditionName: "Kharchi Puja & Sacred Garia Bamboo Rituals",
    category: "Tribal Festival",
    tagline: "Royal 14-Deity Cleansing Rituals & Tripuri Bamboo Arts",
    description: "Kharchi Puja is celebrated at the ancient Fourteen Gods Temple in Old Agartala, cleansing the Mother Earth with chants and royal rites. During Garia Puja, indigenous Tripuri and Reang tribes dance carrying sacred decorated green bamboo poles.",
    highlights: ["14 Royal Deities of Tripura", "Sacred Garia Bamboo Dance", "Ujjayanta Royal Palace Legacy", "Indigenous Cane & Bamboo Weaving"],
    image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=800&q=80",
  },
];
