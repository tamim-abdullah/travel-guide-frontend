// src/components/ErrorUI.tsx
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle, RefreshCw } from "lucide-react";

type ErrorUIProps = {
  message: string;
  onRetry: () => void;
};

export function ErrorUI({ message, onRetry }: ErrorUIProps) {
  return (
    <Alert variant="destructive" className="max-w-2xl mx-auto">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>
        <p>{message}</p>
        <button
          onClick={onRetry}
          className="mt-2 flex items-center gap-1 text-sm underline"
        >
          <RefreshCw className="h-3 w-3" /> Try again
        </button>
      </AlertDescription>
    </Alert>
  );
}