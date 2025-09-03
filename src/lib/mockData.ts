// src/lib/mockData.ts
import { TravelData } from "@/types";

export const mockTravelData = (location: string): TravelData | null => {
  const data: Record<string, TravelData> = {
    "Srimangal": {
      location: {
        name: "Srimangal",
        description: "The tea capital of Bangladesh, known for lush tea gardens, forests, and birdwatching.",
        bestTimeToVisit: "November to March",
        imageUrl: "https://source.unsplash.com/random/800x400/?tea,garden,hills",
      },
      hotels: [
        {
          id: "1",
          name: "Green View Resort",
          price: "BDT 3,500/night",
          rating: 4.5,
          imageUrl: "https://source.unsplash.com/random/300x200/?resort",
        },
        {
          id: "2",
          name: "Tea Garden Inn",
          price: "BDT 2,200/night",
          rating: 4.0,
          imageUrl: "https://source.unsplash.com/random/300x200/?hotel",
        },
      ],
      food: [
        {
          name: "Srimangal Tea",
          description: "World-famous black tea grown in the highlands.",
          imageUrl: "https://source.unsplash.com/random/300x200/?tea",
        },
        {
          name: "Wild Honey",
          description: "Harvested from the forests, rich in flavor and nutrients.",
          imageUrl: "https://source.unsplash.com/random/300x200/?honey",
        },
      ],
      attractions: [
        {
          name: "Lawachara National Park",
          description: "Home to diverse wildlife and scenic forest trails.",
        },
        {
          name: "Tea Garden Tour",
          description: "Walk through endless tea plantations and learn about tea production.",
        },
      ],
      images: [
        "https://source.unsplash.com/random/800x400/?forest",
        "https://source.unsplash.com/random/800x400/?tea-plantation",
      ],
    },
    "Sylhet": {
      location: {
        name: "Sylhet",
        description: "A vibrant city surrounded by hills, rivers, and shrines, popular for religious tourism and nature.",
        bestTimeToVisit: "October to February",
        imageUrl: "https://source.unsplash.com/random/800x400/?sylhet,city,hills",
      },
      hotels: [
        {
          id: "3",
          name: "Alif Hotel",
          price: "BDT 2,800/night",
          rating: 4.2,
          imageUrl: "https://source.unsplash.com/random/300x200/?hotel,sylhet",
        },
      ],
      food: [
        {
          name: "Chotpoti",
          description: "Spicy street food made with boiled chickpeas, tamarind, and chili.",
          imageUrl: "https://source.unsplash.com/random/300x200/?chotpoti,street,food",
        },
      ],
      attractions: [
        {
          name: "Shah Jalal Dargah",
          description: "One of the most important Sufi shrines in South Asia.",
        },
      ],
      images: [
        "https://source.unsplash.com/random/800x400/?dargah",
      ],
    },
    "Cox's Bazar": {
      location: {
        name: "Cox's Bazar",
        description: "Home to the world’s longest natural sea beach, ideal for sunsets and water sports.",
        bestTimeToVisit: "November to February",
        imageUrl: "https://source.unsplash.com/random/800x400/?beach,sea",
      },
      hotels: [
        {
          id: "4",
          name: "Sea Breeze Resort",
          price: "BDT 4,000/night",
          rating: 4.6,
          imageUrl: "https://source.unsplash.com/random/300x200/?resort,beach",
        },
      ],
      food: [
        {
          name: "Fresh Seafood",
          description: "Grilled fish, prawns, and crabs from the Bay of Bengal.",
          imageUrl: "https://source.unsplash.com/random/300x200/?seafood,grill",
        },
      ],
      attractions: [
        {
          name: "Inani Beach",
          description: "A quieter, scenic beach with rocky outcrops and clear water.",
        },
      ],
      images: [
        "https://source.unsplash.com/random/800x400/?cox,bazar",
      ],
    },
  };

  const normalized = Object.keys(data).find(
    (key) => key.toLowerCase().includes(location.toLowerCase()) ||
             location.toLowerCase().includes(key.toLowerCase())
  );

  return normalized ? data[normalized] : null;
};

// Suggest locations based on query
export const mockSuggestions = (query: string): string[] => {
  const all = ["Srimangal", "Sylhet", "Cox's Bazar"];
  const q = query.toLowerCase();
  return all.filter(loc => loc.toLowerCase().includes(q));
};