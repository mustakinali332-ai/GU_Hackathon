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
    image: "/images/states/assam.jpg",
  },
  {
    id: "c-meghalaya",
    state: "Meghalaya",
    stateSlug: "meghalaya",
    traditionName: "Khasi Shad Suk Mynsiem & Living Bridges",
    category: "Folk Dance",
    tagline: "The Dance of Peaceful Hearts & Bio-Engineered Living Bridges",
    description: "Meghalaya follows one of the world's last surviving matrilineal societies where lineage passes through women. In dense rainforests beneath Cherrapunji, Khasi ancestors engineered the world-famous double-decker living root bridges across mountain rivers.",
    highlights: ["Matrilineal Kinship Heritage", "Gold Crown (Pansngiat)", "Living Root Bio-Architecture", "Whistling Village of Kongthong"],
    image: "/images/states/meghalaya.jpg",
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
    image: "/images/states/nagaland.jpg",
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
    image: "/images/states/arunachal-pradesh.jpg",
  },
  {
    id: "c-manipur",
    state: "Manipur",
    stateSlug: "manipur",
    traditionName: "Loktak Phumdi Heritage & Raas Leela",
    category: "Living Heritage",
    tagline: "Floating Freshwater Biomass Islands & Modern Polo's Birthplace",
    description: "Manipur is crowned by Loktak Lake—the only floating lake on Earth featuring circular vegetative phumdis and the dancing Sangai deer. Known as the birthplace of modern polo (Sagol Kangjei) and celestial classical dance.",
    highlights: ["Floating Phumdi Villages", "Sagol Kangjei (Original Polo)", "500-Yr All-Women Ima Keithel", "Keibul Lamjao Park"],
    image: "/images/states/manipur.jpg",
  },
  {
    id: "c-sikkim",
    state: "Sikkim",
    stateSlug: "sikkim",
    traditionName: "Losoong Festival & Rumtek Monastic Chams",
    category: "Monastic Sacred Art",
    tagline: "Sikkimese Buddhist Harvest & Sacred Black Hat Warrior Chams",
    description: "Losoong marks the Sikkimese New Year across the misty monasteries of Rumtek, Pemayangtse, and Enchey. Monks perform the mystical Black Hat dance alongside sacred lake rituals with decorated yaks against Mt. Kanchenjunga.",
    highlights: ["Tibetan Buddhist Thangkas", "Snow Lion & Black Hat Chams", "High Altitude Sacred Lakes", "Rumtek Monastery Rituals"],
    image: "/images/states/sikkim.jpg",
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
    image: "/images/states/mizoram.jpg",
  },
  {
    id: "c-tripura",
    state: "Tripura",
    stateSlug: "tripura",
    traditionName: "Unakoti Rock Art & Sacred Garia Rituals",
    category: "Tribal Festival",
    tagline: "Colossal Rock-Cut Sculptures & Royal 14-Deity Cleansing Rituals",
    description: "Unakoti is an ancient Shaivite pilgrimage featuring colossal rock-cut bas-reliefs carved directly into forest ravines. During Garia Puja, indigenous Tripuri and Reang tribes dance carrying sacred decorated green bamboo poles.",
    highlights: ["Unakoti Rock-Cut Bas Reliefs", "14 Royal Deities of Tripura", "Sacred Garia Bamboo Dance", "Neermahal Water Palace"],
    image: "/images/states/tripura.jpg",
  },
];
