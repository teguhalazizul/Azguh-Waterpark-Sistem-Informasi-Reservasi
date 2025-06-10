import { FaSwimmer } from "react-icons/fa";
import { Link } from "react-router-dom";
import DropdownMenu from "./DropdownMenu";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex justify-between items-center px-6 py-4 bg-biru text-white shadow-md">
      <div className="flex items-center gap-2 text-2xl font-bold pl-4">
        <FaSwimmer className="text-kuning" />
        <span>Azguh Waterpark</span>
      </div>

      <div className="hidden md:flex space-x-6 text-base font-medium items-center">
  {/* Home dibungkus agar sejajar */}
  <div className="relative group flex items-center space-x-1 cursor-pointer">
    <Link to="/" className="hover:text-kuning transition">
      Home
    </Link>
    {/* Spacer agar sejajar dengan panah lainnya, bisa tambahkan <span className="invisible">▼</span> */}
    <span className="text-sm text-white opacity-0 group-hover:opacity-0">▼</span>
  </div>

  <DropdownMenu
    label="Informasi"
    items={[
      { to: "/about", label: "Tentang Kami" },
      { to: "/contact", label: "Kontak" },
      { to: "/faq", label: "FAQ" },
      { to: "/team", label: "Tim Kami" },
    ]}
  />
  <DropdownMenu
    label="Reservasi"
    items={[
      { to: "/tiket", label: "Pesan Tiket" },
      { to: "/pricing", label: "Harga" },
      { to: "/fasilitas", label: "Fasilitas" },
    ]}
  />
  <DropdownMenu
    label="Media"
    items={[
      { to: "/article", label: "Artikel" },
      { to: "/review", label: "Review" },
      { to: "/media", label: "Media" },
    ]}
  />
  <DropdownMenu
    label="Lainnya"
    items={[
      { to: "/job", label: "Karir" },
      { to: "/error400", label: "Error 400" },
      { to: "/error401", label: "Error 401" },
      { to: "/error403", label: "Error 403" },
    ]}
  />
</div>


      <div className="flex items-center gap-4">
        <Link
          to="/login"
          className="bg-birumuda text-biru px-4 py-2 rounded-lg font-semibold hover:brightness-110 transition"
        >
          Masuk
        </Link>
        <Link
          to="/tiket"
          className="bg-white text-biru px-4 py-2 rounded-lg font-semibold border border-white hover:bg-kuning hover:text-black transition"
        >
          Pesan Tiket →
        </Link>
      </div>
    </nav>
  );
}
