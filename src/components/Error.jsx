import { AlertTriangle } from "lucide-react";

export default function Error({ message }) {
  return (
    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-md flex items-center gap-2 max-w-md mx-auto mt-4">
      <AlertTriangle className="w-5 h-5 text-red-500" />
      <span className="font-medium">Error:</span>
      <span>{message}</span>
    </div>
  );
}
