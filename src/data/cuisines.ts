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
    dishName: "Masor Tenga, Omita Khar & Traditional Thali",
    flavorProfile: "Tangy & Naturally Alkaline",
    tagline: "Grand Assamese Kasa Thali with Fish Tenga, Dal, Xaak & Khar",
    description: "The crown jewel of Assam's culinary heritage. A grand bell-metal (Kasa) platter featuring Omita Khar (alkaline raw papaya starter filtered through banana ash), sour Masor Tenga fish stew, Dhekia Xaak, roasted duck, and aromatic Joha rice.",
    keyIngredients: ["Freshwater Rohu Fish", "Ou Tenga (Elephant Apple)", "Kola Khar (Banana Ash Water)", "Kaji Nemu Lemon", "Raw Papaya & Joha Rice"],
    cookingStyle: "Slow simmer with minimal spices & zero turmeric in Khar",
    image: "/images/cuisines/assam.jpg", // Authentic Assamese grand bell-metal thali
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
    image: "/images/cuisines/meghalaya.jpg", // Authentic Khasi curry & traditional meat dishes
  },
  {
    id: "f-nagaland",
    state: "Nagaland",
    stateSlug: "nagaland",
    dishName: "Smoked Pork with Axone & Raja Mircha",
    flavorProfile: "Smoky, Pungent & Fiery",
    tagline: "Traditional Naga Platter with Hearth-Smoked Pork, Axone & Beans",
    description: "The definitive taste of Naga tribal heritage served in a hand-carved wooden platter. Hearth-smoked pork cooked with pungent fermented organic soya beans (Axone), indigenous beans, wild mountain greens, and fiery Raja Mircha (Ghost Pepper).",
    keyIngredients: ["Hearth-Smoked Pork", "Axone (Fermented Soya)", "Raja Mircha (King Chilli)", "Wild Mountain Herbs", "Local Beans"],
    cookingStyle: "Clay pot boiling with fermented organic mash",
    image: "/images/cuisines/nagaland.jpg", // Authentic traditional Naga feast wooden platter
  },
  {
    id: "f-arunachal",
    state: "Arunachal Pradesh",
    stateSlug: "arunachal-pradesh",
    dishName: "Pika Pila & Tender Bamboo Shoot Fry",
    flavorProfile: "Savory, Aromatic & Piquant",
    tagline: "Apatani Fermented Bamboo Shoot Strips with Wild Mountain Chillies",
    description: "Arunachal tribal cuisine celebrates the bounty of subtropical rainforests. Freshly harvested tender bamboo shoot strips stir-cooked with fiery local chillies and mountain seasonings for an intensely piquant, savory delicacy.",
    keyIngredients: ["Fresh Tender Bamboo Shoots", "Mountain Chillies", "Apatani Seasonings", "Wild Sichuan Peppercorns"],
    cookingStyle: "Natural fermentation & wok tossing with forest chillies",
    image: "/images/cuisines/arunachal-pradesh.jpg", // Authentic fermented bamboo shoot strips dish
  },
  {
    id: "f-manipur",
    state: "Manipur",
    stateSlug: "manipur",
    dishName: "Chak-Hao Black Rice & Kangshoi Thali",
    flavorProfile: "Light, Herbal, Fresh & Aromatic",
    tagline: "Organic Banana Leaf Feast with Royal Black Rice & Herbal Bowls",
    description: "Manipuri cuisine is revered for its organic purity. Served on fresh banana leaves: aromatic indigenous Chak-Hao (nutty black rice), clean Kangshoi vegetable broth, fermented fish relish, fresh Singju salad, and sweet black rice kheer.",
    keyIngredients: ["Chak-Hao (Organic Black Rice)", "Ngari (Fermented Fish)", "Lotus Stem & Roots", "Seasonal Wild Herbs", "Singju Greens"],
    cookingStyle: "Zero-oil steaming and cold crushed herbal salad dressing",
    image: "/images/cuisines/manipur.jpg", // Authentic Manipuri banana leaf feast with black rice
  },
  {
    id: "f-sikkim",
    state: "Sikkim",
    stateSlug: "sikkim",
    dishName: "Flavours of Sikkim: Sel Roti & Gundruk",
    flavorProfile: "Fermented, Comforting & Crispy",
    tagline: "Traditional Kasa Thali with Crispy Sel Roti, Gundruk & Dal",
    description: "The authentic Himalayan feast of Sikkim. Handcrafted crispy ring-shaped festive Sel Roti served on brass thali with nourishing sun-dried fermented mustard greens broth (Gundruk), seasonal mountain vegetables, fresh radish pickle, and steamed rice.",
    keyIngredients: ["Gundruk (Fermented Mustard Greens)", "Sel Roti (Crispy Rice Bread)", "Cardamom Pods", "Dalle Khursani Chillies", "Mountain Lentils"],
    cookingStyle: "Himalayan pot simmering and shallow ring frying",
    image: "/images/cuisines/sikkim.png", // Authentic Flavours of Sikkim brass thali with Sel Roti
  },
  {
    id: "f-mizoram",
    state: "Mizoram",
    stateSlug: "mizoram",
    dishName: "Mizo Bai & Tender Pork Greens",
    flavorProfile: "Wholesome, Mild & Herbaceous",
    tagline: "Steamed Jungle Greens with Succulent Pork & Bamboo Shoots",
    description: "Mizo food emphasizes simple, clean eating without heavy frying. Bai is a wholesome stew of freshly picked jungle greens, tender bamboo shoots, and country pork chunks, cooked gently with traditional cooking soda for rich natural flavor.",
    keyIngredients: ["Jungle Mustard Greens", "Tender Bamboo Shoots", "Country Pork Chunks", "Traditional Soda", "Wild Spring Herbs"],
    cookingStyle: "Natural boiling with zero oil and fresh garden produce",
    image: "/images/cuisines/mizoram.jpg", // Authentic Mizo Bai with pork chunks and tender greens
  },
  {
    id: "f-tripura",
    state: "Tripura",
    stateSlug: "tripura",
    dishName: "Mui Borok & Traditional Earthen Feast",
    flavorProfile: "Traditional, Organic & Oil-Free",
    tagline: "Earthen Clay Bowls with Fermented Berma Fish, Chakhwi & Herbs",
    description: "Tripuri cuisine is virtually oil-free and intensely medicinal. Served in traditional earthen clay bowls: Mui Borok made with Berma (sun-fermented freshwater fish), bamboo shoots, spicy local chutneys, fresh coriander, and steamed aromatic rice.",
    keyIngredients: ["Berma (Fermented Fish)", "Fresh Bamboo Shoots", "Jackfruit Seeds", "Chakhwi (Bamboo Ash Soda)", "Green Birds Eye Chillies"],
    cookingStyle: "Oil-free boiling in earthen clay pots",
    image: "/images/cuisines/tripura.jpg", // Authentic Tripuri traditional clay bowls feast with rice
  },
];
