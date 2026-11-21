export interface CuisineItem {
  id: string;
  state: string;
  stateSlug: string;
  dishName: string;
  flavorProfile: string;
  tagline: string;
  description: string;
  keyIngredients: string[];
  cookingStyle: string;
  image: string;
}

export const cuisineHighlights: CuisineItem[] = [
  {
    id: "f-assam",
    state: "Assam",
    stateSlug: "assam",
    dishName: "Masor Tenga & Omita Khar",
    flavorProfile: "Tangy & Naturally Alkaline",
    tagline: "Tangy Rohu in Elephant Apple Broth & Sun-Dried Banana Peel Khar",
    description: "The crown jewels of an authentic Assamese meal. Omita Khar is an alkaline palate cleanser cooked using filtered water of burnt sun-dried banana peels. Masor Tenga is a light, sour fish stew simmered with elephant apple (Ou Tenga) and aromatic Kaji Nemu lemon.",
    keyIngredients: ["Freshwater Rohu Fish", "Ou Tenga (Elephant Apple)", "Kola Khar (Banana Ash Water)", "Kaji Nemu (Assam Lemon)", "Raw Papaya"],
    cookingStyle: "Slow simmer with minimal spices & zero turmeric in Khar",
    image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=800&q=80", // Assamese traditional thali with fish curry
  },
  {
    id: "f-meghalaya",
    state: "Meghalaya",
    stateSlug: "meghalaya",
    dishName: "Dohneiiong & Jadoh",
    flavorProfile: "Nutty, Earthy & Savory",
    tagline: "Pork Braised in Roasted Black Sesame & Meat-Broth Hill Rice",
    description: "The signature feast of the Khasi community. Dohneiiong features tender pieces of pork braised gently in an intensely aromatic, nutty paste of roasted indigenous black sesame seeds (Neiiong). Served alongside Jadoh—aromatic red hill rice cooked in savory meat broth.",
    keyIngredients: ["Country Pork", "Roasted Black Sesame (Neiiong)", "Khasi Red Hill Rice", "Fresh Ginger", "Green Chillies"],
    cookingStyle: "Slow braising with stone-ground roasted sesame paste",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80", // Roasted sesame meat & savory rice bowl
  },
  {
    id: "f-nagaland",
    state: "Nagaland",
    stateSlug: "nagaland",
    dishName: "Smoked Pork with Axone & Raja Mircha",
    flavorProfile: "Smoky, Pungent & Fiery",
    tagline: "Hearth-Smoked Pork with Fermented Soya Beans & Bhut Jolokia",
    description: "The definitive taste of Naga tribal heritage. Pork is smoked over the traditional family wood hearth for days, then slow-stewed with pungent fermented organic soya beans (Axone), wild Sichuan peppercorns, and the world-renowned fiery Raja Mircha (Ghost Pepper).",
    keyIngredients: ["Hearth-Smoked Pork", "Axone (Fermented Soya)", "Raja Mircha (King Chilli)", "Wild Sichuan Peppercorns", "Fresh Ginger"],
    cookingStyle: "Clay pot boiling with fermented organic mash",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80", // Smoky glazed meat roasted with fiery chillies
  },
  {
    id: "f-arunachal",
    state: "Arunachal Pradesh",
    stateSlug: "arunachal-pradesh",
    dishName: "Pika Pila & Lukter with Bamboo Shoot",
    flavorProfile: "Savory, Aromatic & Piquant",
    tagline: "Apatani Bamboo Shoot Chutney & Sun-Dried Meat with Flake Spices",
    description: "Arunachal tribal cuisine celebrates the bounty of subtropical rainforests. Pika Pila is a traditional Apatani relish made from tender bamboo shoots, pork fat, and wild chillies. Lukter combines shredded sun-dried meat with fiery king chilli flakes and toasted mountain herbs.",
    keyIngredients: ["Tender Bamboo Shoots", "Sun-Dried Roast Meat", "Apatani Pork Fat Relish", "Wild Mountain Peppercorns", "Organic Rice Beer Mash"],
    cookingStyle: "Sun-drying, natural fermentation & open-fire roasting",
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=800&q=80", // Fresh organic shoots, greens, and mountain spices
  },
  {
    id: "f-manipur",
    state: "Manipur",
    stateSlug: "manipur",
    dishName: "Kangshoi & Singju Lotus Stem Salad",
    flavorProfile: "Light, Herbal, Fresh & Zesty",
    tagline: "Herbal Vegetable Stew with Fermented Ngari & Spicy Lotus Salad",
    description: "Manipuri cuisine is revered for its purity and zero-oil herbal broths. Kangshoi is a clean seasonal stew of garden vegetables, dried peas, and wild herbs infused with sun-dried fermented fish (Ngari). Accompanied by crisp Singju salad made of lotus stem, cabbage, and roasted perilla seeds.",
    keyIngredients: ["Ngari (Fermented Fish)", "Lotus Stem & Roots", "Seasonal Wild Herbs", "Roasted Perilla Seeds", "Dried Green Peas"],
    cookingStyle: "Zero-oil steaming and cold crushed herbal salad dressing",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80", // Crisp organic herbal salad with roasted seeds
  },
  {
    id: "f-sikkim",
    state: "Sikkim",
    stateSlug: "sikkim",
    dishName: "Gundruk Jhol, Tingmo & Crispy Sel Roti",
    flavorProfile: "Fermented, Comforting & Crispy",
    tagline: "Sun-Dried Mustard Leaf Broth with Steamed Flower Buns & Rice Bread",
    description: "High in the Eastern Himalayas, Sikkimese winter food warms the soul. Gundruk is prepared by fermenting and sun-drying leafy mustard greens, cooked into a nourishing savory broth. Paired with soft steamed flower rolls (Tingmo) and crispy ring-shaped festive Sel Roti.",
    keyIngredients: ["Gundruk (Fermented Greens)", "Steamed Tingmo Buns", "Stone-Ground Rice (Sel Roti)", "Cardamom Pods", "Dalle Khursani (Round Chillies)"],
    cookingStyle: "Himalayan pot simmering and wok shallow-frying",
    image: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=800&q=80", // Steamed Himalayan dumplings & buns in bamboo steamer
  },
  {
    id: "f-mizoram",
    state: "Mizoram",
    stateSlug: "mizoram",
    dishName: "Mizo Bai & Savory Sawhchiar",
    flavorProfile: "Wholesome, Mild & Herbaceous",
    tagline: "Steamed Jungle Greens with Bamboo Shoots & Chicken-Rice Porridge",
    description: "Mizo food emphasizes simple, clean eating without heavy frying. Bai is a wholesome stew of local jungle greens, tender bamboo shoots, and pork fat, cooked with traditional cooking soda. Sawhchiar is a hearty comforting rice and meat porridge spiced with local bay leaves.",
    keyIngredients: ["Jungle Greens & Beans", "Tender Bamboo Shoots", "Free-Range Chicken or Pork", "Indigenous Sticky Rice", "Wild Spring Herbs"],
    cookingStyle: "Natural water boiling with zero oil and fresh garden produce",
    image: "https://images.unsplash.com/photo-1547496502-affa22d38842?w=800&q=80", // Wholesome hot broth stew with green garden produce
  },
  {
    id: "f-tripura",
    state: "Tripura",
    stateSlug: "tripura",
    dishName: "Mui Borok & Berma Chakhwi",
    flavorProfile: "Traditional, Organic & Oil-Free",
    tagline: "Fermented Berma Fish Stew with Bamboo Shoots & Traditional Soda",
    description: "Tripuri cuisine is virtually oil-free and intensely medicinal. Mui Borok centers around Berma—indigenous sun-fermented freshwater fish cooked with bamboo shoots, jackfruit seeds, green chillies, and Chakhwi (traditional alkaline water made from burnt bamboo ash).",
    keyIngredients: ["Berma (Fermented Fish)", "Fresh Bamboo Shoots", "Jackfruit Seeds", "Chakhwi (Bamboo Ash Soda)", "Green Birds Eye Chillies"],
    cookingStyle: "Oil-free boiling with alkaline bamboo extract",
    image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=800&q=80", // Simmered indigenous fish stew with herbs
  },
];
