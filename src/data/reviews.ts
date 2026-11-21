export interface Review {
  id: string;
  author: string;
  location: string;
  avatar: string;
  rating: number;
  date: string;
  tripTaken: string;
  comment: string;
  verified: boolean;
}

export const initialReviews: Review[] = [
  {
    id: "r1",
    author: "Rohan & Sneha Kulkarni",
    location: "Mumbai, Maharashtra",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&q=80",
    rating: 5,
    date: "November 2026",
    tripTaken: "Assam & Meghalaya (6 Days)",
    comment: "TravelMateNE saved our family vacation! The permit navigator cleared all our confusion about Meghalaya e-invites, and booking our Kaziranga Western Range gypsy through the platform was seamless. Saw 7 rhinos before breakfast!",
    verified: true,
  },
  {
    id: "r2",
    author: "Vikramaditya Sengupta",
    location: "Kolkata, West Bengal",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&q=80",
    rating: 5,
    date: "October 2026",
    tripTaken: "Tawang & Sela Pass Circuit",
    comment: "The pro-tip warning that army checkposts reject Aadhaar cards for border permits literally saved our trip at Bhalukpong! We carried our physical Voter IDs and breezed through. Best travel tool for Northeast India.",
    verified: true,
  },
  {
    id: "r3",
    author: "Elena Rostova",
    location: "Berlin, Germany",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&q=80",
    rating: 5,
    date: "October 2026",
    tripTaken: "Majuli River Island & Nagaland",
    comment: "Connecting directly with local guide Akum in Nagaland via WhatsApp without an agency middleman gave us a genuinely authentic experience. We stayed in an indigenous Angami village and ate authentic smoked pork.",
    verified: true,
  },
  {
    id: "r4",
    author: "Pooja Hegde",
    location: "Bengaluru, Karnataka",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=120&q=80",
    rating: 5,
    date: "September 2026",
    tripTaken: "Nongriat & Dawki Solo Backpacking",
    comment: "As a solo female traveler, the detailed cost breakdown and local guide verification gave me total peace of mind. The AI trip planner created an itinerary that respected my budget down to the rupee.",
    verified: true,
  },
];
