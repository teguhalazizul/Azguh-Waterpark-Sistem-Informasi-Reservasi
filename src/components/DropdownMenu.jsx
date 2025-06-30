import { Link } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";

export default function DropdownMenu({ label, items, isOpen, onToggle }) {
  return (
    <div className="relative">
      <button
        onClick={onToggle}
        className="flex items-center gap-1 px-4 py-2 font-medium hover:text-kuning transition"
      >
        {label}
        <FaChevronDown
          className={`transform transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      <div
        className={`absolute right-0 mt-2 w-48 bg-white text-biru rounded-md shadow-lg overflow-hidden transition-all duration-300 origin-top-right ${
          isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0 pointer-events-none"
        }`}
      >
        {items.map(({ to, label }, index) => (
          <Link
            key={index}
            to={to}
            onClick={onToggle} // Close menu when item clicked
            className="block px-4 py-2 hover:bg-birumuda hover:text-white transition"
          >
            {label}
          </Link>
        ))}
      </div>
    </div>
  );
}
