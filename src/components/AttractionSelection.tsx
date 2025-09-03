// src/components/AttractionSection.tsx
import { Attraction } from "@/types";
import { GiMountainRoad, GiForest } from "react-icons/gi";
import { MdOutlineAttractions } from "react-icons/md"; // ✅ From 'md', not 'gi'

type AttractionIconMap = {
  [key: string]: React.ComponentType;
};

const iconMap: AttractionIconMap = {
  forest: GiForest,
  mountain: GiMountainRoad,
  default: MdOutlineAttractions,
};

function getIcon(name: string) {
  const lower = name.toLowerCase();
  if (lower.includes("forest")) return GiForest;
  if (lower.includes("mountain") || lower.includes("hill")) return GiMountainRoad;
  return MdOutlineAttractions;
}

type AttractionsSectionProps = {
  attractions: Attraction[];
};

export function AttractionsSection({ attractions }: AttractionsSectionProps) {
  if (!attractions || attractions.length === 0) return null;

  return (
    <section>
      <h3 className="text-2xl font-semibold mb-4">Top Attractions</h3>
      <div className="space-y-4">
        {attractions.map((attraction, i) => {
          const Icon = getIcon(attraction.name);
          return (
            <div
              key={i}
              className="flex items-start gap-4 p-4 border rounded-lg bg-background"
            >
              <Icon className="h-8 w-8 text-primary mt-1" />
              <div>
                <h4 className="font-medium text-lg">{attraction.name}</h4>
                <p className="text-muted-foreground">{attraction.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}