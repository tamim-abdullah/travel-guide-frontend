// src/components/HotelSection.tsx
import { Hotel } from "@/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type HotelsSectionProps = {
  hotels: Hotel[];
};

export function HotelsSection({ hotels }: HotelsSectionProps) {
  if (!hotels || hotels.length === 0) return null;

  return (
    <section>
      <h3 className="text-2xl font-semibold mb-4">Top Hotels</h3>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {hotels.map((hotel) => (
          <Card key={hotel.id} className="overflow-hidden">
            <img
              src={hotel.imageUrl}
              alt={hotel.name}
              className="h-40 w-full object-cover"
            />
            <CardHeader>
              <CardTitle>{hotel.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center">
                <span className="font-medium">{hotel.price}</span>
                <div className="text-yellow-600">
                  {"★".repeat(Math.floor(hotel.rating))}
                  {"☆".repeat(5 - Math.floor(hotel.rating))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}