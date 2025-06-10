// NavItem.jsx (untuk dropdown di navbar)
import { NavLink } from "react-router-dom";

export default function NavItem({ to, children }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `block px-4 py-2 text-sm rounded-md transition ${
          isActive
            ? "bg-birumuda text-white font-semibold"
            : "text-biru hover:bg-gray-100 hover:text-biru"
        }`
      }
    >
      {children}
    </NavLink>
  );
}
