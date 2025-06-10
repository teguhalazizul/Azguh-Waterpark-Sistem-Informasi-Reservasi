import { Inbox } from "lucide-react";

export default function EmptyState({ message }) {
  return (
    <div className="flex flex-col items-center justify-center text-center text-gray-500 p-6">
      <Inbox className="w-12 h-12 mb-3 text-gray-400" />
      <p className="text-lg font-semibold">{message}</p>
      <p className="text-sm text-gray-400 mt-1">
        Tidak ada data yang tersedia saat ini.
      </p>
    </div>
  );
}
