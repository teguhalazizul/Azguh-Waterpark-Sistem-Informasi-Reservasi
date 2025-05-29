import { FaSwimmer } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import NavItem from "./NavItem";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-biru text-white shadow-md">
      <div className="flex items-center gap-2 text-2xl font-bold pl-4">
        <FaSwimmer className="text-kuning" />
        <span>Azguh Waterpark</span>
      </div>
      <div className="hidden md:flex space-x-6 text-base font-medium">
        <nav className="flex gap-4">
          <NavItem id="home" to="/">
            Home
          </NavItem>
          <NavItem id="article" to="/article">
            Article
          </NavItem>
          <NavItem id="job" to="/job">
            Career Page
          </NavItem>
          <NavItem id="review" to="/review">
            Review
          </NavItem>
          <NavItem id="fasilitas" to="/fasilitas">
            Fasilitas
          </NavItem>
          <NavItem id="Tiket" to="/tiket">
            Tiket
          </NavItem>
          <NavItem id="faq" to="/faq">
            FAQ
          </NavItem>
          <NavItem id="contact" to="/contact">
            Contact
          </NavItem>
          <NavItem id="error400" to="/error400">
            Error 400
          </NavItem>
          <NavItem id="error401" to="/error401">
            Error 401
          </NavItem>
          <NavItem id="error403" to="/error403">
            Error 403
          </NavItem>
        </nav>
      </div>
      <div className="flex space-x-3">
        <Link to="/login" className="bg-birumuda text-biru px-4 py-2 rounded-lg font-semibold hover:brightness-110 transition">
          <button >
            Masuk
          </button>
        </Link>

        <button className="bg-white text-biru px-4 py-2 rounded-lg font-semibold border border-white hover:bg-kuning hover:text-black transition">
          Pesan Tiket →
        </button>
      </div>
    </nav>
  );
}
