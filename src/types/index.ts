// src/types/index.ts

export type Location = {
  name: string;
  description: string;
  bestTimeToVisit: string;
  imageUrl?: string;
};

export type Hotel = {
  id: string;
  name: string;
  price: string;
  rating: number;
  imageUrl?: string;
};

export type Food = {
  name: string;
  description: string;
  imageUrl?: string;
};

export type Attraction = {
  name: string;
  description: string;
};

export type TravelData = {
  location: Location;
  hotels: Hotel[];
  food: Food[];
  attractions: Attraction[];
  images: string[];
};