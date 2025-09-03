// src/components/ResultsDisplay.tsx
import { TravelData } from "@/types";
import { LocationOverview } from "./LocationOverview";
import { HotelsSection } from "./HotelsSelection";
import { FoodSection } from "./FoodSelection";
import { AttractionsSection } from "./AttractionSelection";
import { ImageGallery } from "./ImageGallery";
import { LoadingSpinner } from "./LoadingSpinner";
import { ErrorUI } from "./ErrorUI";

type ResultsDisplayProps = {
  data: TravelData | null;
  error: Error | null;
  isLoading: boolean;
  location: string;
  onRetry: () => void;
};

export function ResultsDisplay({
  data,
  error,
  isLoading,
  location,
  onRetry,
}: ResultsDisplayProps) {
  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <ErrorUI message={error.message} onRetry={onRetry} />;
  }

  if (!data || !location) {
    return null; // No location selected → show nothing
  }

  return (
    <div className="mt-8 space-y-10 animate-in fade-in-50 duration-300">
      <LocationOverview data={data.location} />
      <HotelsSection hotels={data.hotels} />
      <FoodSection food={data.food} />
      <AttractionsSection attractions={data.attractions} />
      <ImageGallery images={data.images} />
    </div>
  );
}