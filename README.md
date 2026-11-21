# 🌿 TravelMateNE — North East Tourism Explorer

[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Google Gemini](https://img.shields.io/badge/Google_Gemini-2.0_Flash-orange?style=for-the-badge&logo=google)](https://ai.google.dev/)
[![Deployed on Vercel](https://img.shields.io/badge/Vercel-Deployment-black?style=for-the-badge&logo=vercel)](https://vercel.com/)

> **Problem Statement (PS08): TravelMateNE — North East Tourism Explorer**  
> *Domain: Tourism & Culture*  
> Developed for **PromptWars x Code1 Innovators Hackathon @ Gauhati University**.

---

## 🎯 About TravelMateNE

North East India is an unexplored paradise blessed with rich biodiversity, unique cultures, and spectacular landscapes. However, travelers frequently struggle with fragmented information, hidden transport logistics, lack of transparent budgeting, and finding reliable local guides.

**TravelMateNE** is an all-in-one AI-driven tourism discovery and planning platform tailored specifically for the 8 sister and brother states of Northeast India (**Assam, Meghalaya, Nagaland, Manipur, Mizoram, Tripura, Arunachal Pradesh, Sikkim**).

---

## ✨ Key Features

### 1. 🤖 AI Trip Planner (Powered by Google Gemini 2.0 Flash)
- **Personalized Itineraries:** Generates day-by-day travel plans according to your choice of states, duration (1–14 days), budget range, travel style (Solo, Couple, Family, Friends), and personal interests.
- **Cost Estimation:** Instant breakdown of travel, stay, dining, and activity costs.
- **Local Nuance:** Includes authentic food recommendations, safety tips, and travel permits (ILP) guidance.

### 2. 🗺️ State Discovery Hub (All 8 States)
- Deep-dive pages for every state: overview, capital, best travel seasons, average daily budgets, languages spoken, and cultural highlights.
- Curated festivals calendar (Hornbill, Bihu, Sangai, Chapchar Kut, Losar, Ambubachi Mela, etc.).

### 3. 🏔️ Filterable Attractions Directory
- Discover over 30+ handpicked iconic destinations and hidden gems.
- Real-time search & filters across categories: *Nature, Temples & Heritage, Adventure, Lakes & Waterfalls, Wildlife Sanctuaries, Festivals*.
- Detailed visitor insights: timings, entry fees, ratings, and best visit months.

### 4. 🧭 Local Guide Connect
- Verified local tourist guides for each state with transparent pricing, spoken languages, and specialties (wildlife safaris, living root bridge treks, monastery tours).
- **One-click WhatsApp booking** directly connecting tourists to local guides, empowering the regional grassroots economy.

### 5. 💰 Dynamic Budget Estimator
- Interactive calculator that models transportation, dining, stay tiers (Homestays, Hotels, Resorts), and activities.
- Practical money-saving tips for navigating Northeast India smoothly and affordably.

---

## 🛠️ Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router, Server Components & Dynamic API Routes)
- **UI Library:** [React 19](https://react.dev/), [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons & Animations:** [Lucide React](https://lucide.dev/), [Framer Motion](https://www.framer.com/motion/)
- **AI Intelligence:** [Google Generative AI SDK](https://www.npmjs.com/package/@google/generative-ai) (`gemini-2.0-flash`)
- **Deployment:** Vercel

---

## 🚀 Getting Started Locally

### Prerequisites
- Node.js 18+ (tested on Node 24)
- npm or pnpm

### 1. Clone the repository
```bash
git clone https://github.com/mustakinali332-ai/GU_Hackathon.git
cd GU_Hackathon
```

### 2. Install dependencies
```bash
npm install
```

### 3. Configure environment variables
Create a `.env.local` file in the root directory:
```env
GEMINI_API_KEY="your-gemini-api-key"
```

### 4. Run the development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 5. Production Build
```bash
npm run build
npm run start
```

---

## 📱 Responsive & Mobile-First
Built from the ground up to provide a seamless app-like mobile experience on smartphones as well as wide desktop displays.

---

## 👥 Hackathon Team
Developed with ❤️ by **Mustakin Ali** at Gauhati University for **PromptWars x Code1 Innovators**.
