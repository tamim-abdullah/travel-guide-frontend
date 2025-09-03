// src/components/SuggestionsList.tsx
import { Command, CommandEmpty, CommandGroup, CommandItem, CommandList } from "@/components/ui/command";
import { useEffect, useState } from "react";
import { fetcher } from "@/lib/fetcher";

type SuggestionsListProps = {
  query: string;
  onSelect: (suggestion: string) => void;
  isVisible: boolean;
};

export function SuggestionsList({ query, onSelect, isVisible }: SuggestionsListProps) {
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!query || !isVisible) {
      setSuggestions([]);
      return;
    }

    setLoading(true);
    fetcher(`/api/suggest?q=${encodeURIComponent(query)}`)
      .then((data) => {
        setSuggestions(data.suggestions || []);
      })
      .catch(() => {
        setSuggestions([]);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [query, isVisible]);

  if (!isVisible || (!suggestions.length && !loading)) return null;

  return (
    <Command className="absolute top-12 left-0 right-0 z-50 rounded-lg border shadow-md mt-1">
      <CommandList>
        {loading ? (
          <CommandEmpty>Searching...</CommandEmpty>
        ) : null}
        {!loading && suggestions.length === 0 ? (
          <CommandEmpty>No suggestions found.</CommandEmpty>
        ) : null}
        <CommandGroup heading="Did you mean?">
          {suggestions.map((suggestion) => (
            <CommandItem
              key={suggestion}
              onSelect={() => onSelect(suggestion)}
              className="cursor-pointer"
            >
              <span className="font-medium text-primary">&quot;{suggestion}&quot;</span>
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </Command>
  );
}