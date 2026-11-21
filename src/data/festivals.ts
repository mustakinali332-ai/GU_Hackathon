export interface Festival {
  id: string;
  name: string;
  stateId: string;
  month: string;
  description: string;
  image: string;
}

export const festivals: Festival[] = [
  { id: "bihu", name: "Bihu", stateId: "assam", month: "January / April / October", description: "Assam's most celebrated festival marking harvest and new year. Features Bihu dance, traditional feasts, and community celebrations across the state.", image: "https://images.unsplash.com/photo-1533669955142-6a73332af4db?w=600&q=80" },
  { id: "ambubachi", name: "Ambubachi Mela", stateId: "assam", month: "June", description: "A grand tantric festival at Kamakhya Temple celebrating the annual menstruation of the goddess. Draws lakhs of devotees and sadhus from across India.", image: "https://images.unsplash.com/photo-1567157577867-05ccb1388e13?w=600&q=80" },
  { id: "shad-suk", name: "Shad Suk Mynsiem", stateId: "meghalaya", month: "April", description: "A thanksgiving dance festival of the Khasi people celebrating the spring harvest. Women in golden silk and men in traditional attire dance in Shillong.", image: "https://images.unsplash.com/photo-1533669955142-6a73332af4db?w=600&q=80" },
  { id: "wangala", name: "Wangala (100 Drums Festival)", stateId: "meghalaya", month: "November", description: "The great harvest festival of the Garo tribe featuring the legendary 100-drum performance, traditional dances, and communal feasting.", image: "https://images.unsplash.com/photo-1533669955142-6a73332af4db?w=600&q=80" },
  { id: "hornbill", name: "Hornbill Festival", stateId: "nagaland", month: "December 1-10", description: "The 'Festival of Festivals' showcasing all 16 Naga tribes at Kisama Heritage Village. A spectacular display of tribal dances, music, crafts, and food.", image: "https://images.unsplash.com/photo-1533669955142-6a73332af4db?w=600&q=80" },
  { id: "sangai", name: "Sangai Festival", stateId: "manipur", month: "November", description: "Named after the endangered Sangai deer, this festival showcases Manipur's arts, culture, cuisine, and adventure sports over 10 days.", image: "https://images.unsplash.com/photo-1533669955142-6a73332af4db?w=600&q=80" },
  { id: "chapchar", name: "Chapchar Kut", stateId: "mizoram", month: "March", description: "Mizoram's biggest and most joyful festival celebrating the completion of jhum (shifting cultivation). Features bamboo dance, folk songs, and feasting.", image: "https://images.unsplash.com/photo-1533669955142-6a73332af4db?w=600&q=80" },
  { id: "kharchi", name: "Kharchi Puja", stateId: "tripura", month: "July", description: "A 7-day festival where 14 gods of the Tripuri royal house are worshipped. Features traditional dances, rituals, and community gatherings.", image: "https://images.unsplash.com/photo-1533669955142-6a73332af4db?w=600&q=80" },
  { id: "losar", name: "Losar (Tibetan New Year)", stateId: "arunachal-pradesh", month: "February/March", description: "Celebrated grandly by the Monpa tribe in Tawang with masked dances, monastery rituals, and community feasting for three days.", image: "https://images.unsplash.com/photo-1533669955142-6a73332af4db?w=600&q=80" },
  { id: "saga-dawa", name: "Saga Dawa", stateId: "sikkim", month: "May/June", description: "The holiest Buddhist festival celebrating Buddha's birth, enlightenment, and nirvana. Devotثes visit monasteries, light butter lamps, and chant prayers.", image: "https://images.unsplash.com/photo-1533669955142-6a73332af4db?w=600&q=80" },
  { id: "losoong", name: "Losoong (Sikkim New Year)", stateId: "sikkim", month: "December", description: "Sikkim's harvest festival celebrating the end of farming season. Features Chaam (masked dance) at monasteries and archery competitions.", image: "https://images.unsplash.com/photo-1533669955142-6a73332af4db?w=600&q=80" },
];

export function getFestivalsByState(stateId: string): Festival[] {
  return festivals.filter((f) => f.stateId === stateId);
}
