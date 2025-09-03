// src/components/LocationOverview.tsx
import { Location } from "@/types";

type LocationOverviewProps = {
  data: Location;
};



export function LocationOverview({ data }: LocationOverviewProps) {
    
  return (
    <section className="space-y-6">
      <div>
        <h2 className="text-4xl font-bold">{data.name}</h2>
        <p className="text-muted-foreground mt-2 text-lg">{data.description}</p>
        <p className="mt-4">
          <strong>Best time to visit:</strong> {data.bestTimeToVisit}
        </p>
      </div>
      {data.imageUrl && (
        <img
          src={data.imageUrl}
          alt={data.name}
          className="w-full h-64 object-cover rounded-lg shadow-md"
        />
      )}
    </section>
  );
}