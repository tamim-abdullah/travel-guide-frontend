// src/components/SearchBar.tsx
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

type SearchBarProps = {
  value: string;
  onChange: (value: string) => void;
  onFocus?: () => void;
  placeholder?: string;
};

export function SearchBar({ value, onChange, onFocus, placeholder = "Try: Srimangal, Sylhet..." }: SearchBarProps) {
  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground pointer-events-none" />
      <Input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={onFocus}
        placeholder={placeholder}
        className="pl-10 h-12 text-base"
      />
    </div>
  );
}