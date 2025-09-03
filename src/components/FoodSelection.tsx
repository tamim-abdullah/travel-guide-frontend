// src/components/FoodSection.tsx
import { Food } from "@/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type FoodSectionProps = {
  food: Food[];
};

export function FoodSection({ food }: FoodSectionProps) {
  if (!food || food.length === 0) return null;

  return (
    <section>
      <h3 className="text-2xl font-semibold mb-4">Local Food to Try</h3>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {food.map((item, i) => (
          <Card key={i} className="overflow-hidden">
            {item.imageUrl && (
              <img
                src={item.imageUrl}
                alt={item.name}
                className="h-40 w-full object-cover"
              />
            )}
            <CardHeader>
              <CardTitle>{item.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}