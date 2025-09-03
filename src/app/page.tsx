"use client";

import { useState, useEffect } from "react";
import { SearchBar } from "@/components/SearchBar";
import { ResultsDisplay } from "@/components/ResultsDisplay";
import { mockTravelData, mockSuggestions } from "@/lib/mockData";
import { TravelData } from "@/types";
import { useDebounce } from "@/lib/useDebounce";


export default function Home() {
  const [query, setQuery] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [error, setError] = useState<string | null>(null);

  // Debounce locally
  const debouncedQuery = useDebounce(query, 300);
  const showSuggestions = query.length > 0 && !selectedLocation;

  // Mock suggestions
  const suggestions = showSuggestions ? mockSuggestions(debouncedQuery) : [];

  // Handle suggestion click
  const handleSuggestionClick = (suggestion: string) => {
    setQuery(suggestion);
    setSelectedLocation(suggestion);
    setError(null);
  };

  // Mock travel data
  const travelData = selectedLocation
    ? mockTravelData(selectedLocation)
    : null;

  // Simulate loading
  const isLoading = false; // No real fetch → instant

  // Simulate retry
  const handleRetry = () => {
    if (selectedLocation) {
      // Re-fetch (just re-render)
      setError(null);
    }
  };

  // Clear search
  const handleClear = () => {
    setQuery("");
    setSelectedLocation("");
    setError(null);
  };

  return (
    <main className="min-h-screen p-4 max-w-5xl mx-auto pt-8">
      <h1 className="text-3xl font-bold text-center mb-6">🌍 Travel Guide</h1>

      <div className="relative mb-8">
        <SearchBar
          value={query}
          onChange={(value) => {
            setQuery(value);
            setSelectedLocation("");
          }}
          placeholder="Try: Srimangal, Sylhet, Cox's Bazar..."
        />

        {/* Suggestions Dropdown */}
        {showSuggestions && suggestions.length > 0 && (
          <div className="absolute top-12 left-0 right-0 z-50 rounded-lg border bg-background shadow-md mt-1">
            <div className="p-2 text-sm text-muted-foreground">Did you mean?</div>
            {suggestions.map((suggestion) => (
              <div
                key={suggestion}
                onClick={() => handleSuggestionClick(suggestion)}
                className="px-4 py-2 hover:bg-accent cursor-pointer"
              >
                <span className="font-medium text-primary">&quot;{suggestion}&quot;</span>
              </div>
            ))}
          </div>
        )}

        {showSuggestions && suggestions.length === 0 && debouncedQuery && (
          <div className="absolute top-12 left-0 right-0 z-50 rounded-lg border bg-background shadow-md mt-1">
            <div className="p-4 text-sm text-muted-foreground">No suggestions found.</div>
          </div>
        )}
      </div>

      {/* Results */}
      <ResultsDisplay
        data={travelData}
        error={error ? new Error(error) : null}
        isLoading={isLoading}
        location={selectedLocation}
        onRetry={handleRetry}
      />

      {/* Debug: Show current state */}
      <div className="mt-8 text-sm text-gray-500">
        <p><strong>Query:</strong> "{query}"</p>
        <p><strong>Selected:</strong> "{selectedLocation}"</p>
        <button
          onClick={handleClear}
          className="text-xs underline mt-1"
        >
          Clear selection
        </button>
      </div>
    </main>
  );
}

