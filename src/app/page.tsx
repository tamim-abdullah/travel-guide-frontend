// src/app/page.tsx
"use client";


import { useState, useEffect } from "react";
import useSWR from "swr";

// Components
import { SearchBar } from "@/components/SearchBar"; 
import { SuggestionsList } from "@/components/SuggestionsList";



export default function Home() {
  const [query, setQuery] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const debouncedQuery = useDebounce(query, 300);
  const showSuggestions = query.length > 0 && !selectedLocation;

  // Mock suggestion API (simulate delay)
  const { data: suggestionsData } = useSWR(
    showSuggestions ? `/suggest/${debouncedQuery}` : null,
    async () => {
      await new Promise((r) => setTimeout(r, 600));
      const q = debouncedQuery.toLowerCase();
      if (q.includes("srimangal") || q.includes("sylhet") || q.includes("cox")) {
        return { suggestions: ["Srimangal", "Sylhet", "Cox's Bazar"] };
      }
      return { suggestions: [] };
    }
  );

  const handleSuggestionClick = (suggestion: string) => {
    setQuery(suggestion);
    setSelectedLocation(suggestion);
  };

  return (
    <main className="min-h-screen p-4 max-w-4xl mx-auto pt-8">
      <h1 className="text-2xl font-bold text-center mb-6">Travel Guide</h1>
      <div className="relative">
        <SearchBar value={query} onChange={setQuery} />
        <SuggestionsList
          query={debouncedQuery}
          onSelect={handleSuggestionClick}
          isVisible={showSuggestions}
        />
      </div>

      {selectedLocation && (
        <div className="mt-6 p-4 bg-green-50 border rounded">
          <p>
            <strong>Selected:</strong> {selectedLocation}
          </p>
        </div>
      )}
    </main>
  );
}

// Temporary: move useDebounce here until file is imported properly
function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);
  useEffect(() => {
    const handler = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(handler);
  }, [value, delay]);
  return debouncedValue;
}