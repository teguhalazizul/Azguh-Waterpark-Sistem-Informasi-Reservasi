import { useState } from "react";
import { FaSwimmer } from "react-icons/fa";
import { Link } from "react-router-dom";
import DropdownMenu from "./DropdownMenu";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(null);

  return (
    <nav className="sticky top-0 z-50 flex justify-between items-center px-6 py-4 bg-biru text-white shadow-md">
      <div className="flex items-center gap-2 text-2xl font-bold pl-4">
        <FaSwimmer className="text-kuning" />
        <span>Azguh Waterpark</span>
      </div>

      <div className="hidden md:flex space-x-6 text-base font-medium items-center">
        <div className="relative group flex items-center space-x-1 cursor-pointer">
          <Link to="/" className="hover:text-kuning transition">
            Home
          </Link>
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
          isOpen={openMenu === "informasi"}
          onToggle={() => setOpenMenu(openMenu === "informasi" ? null : "informasi")}
        />

        <DropdownMenu
          label="Reservasi"
          items={[
            { to: "/tiket", label: "Pesan Tiket" },
            { to: "/pricing", label: "Harga" },
            { to: "/fasilitas", label: "Fasilitas" },
          ]}
          isOpen={openMenu === "reservasi"}
          onToggle={() => setOpenMenu(openMenu === "reservasi" ? null : "reservasi")}
        />

        <DropdownMenu
          label="Media"
          items={[
            { to: "/article", label: "Artikel" },
            { to: "/review", label: "Review" },
            { to: "/media", label: "Media" },
          ]}
          isOpen={openMenu === "media"}
          onToggle={() => setOpenMenu(openMenu === "media" ? null : "media")}
        />

        <DropdownMenu
          label="Lainnya"
          items={[
            { to: "/job", label: "Karir" },
            { to: "/error400", label: "Error 400" },
            { to: "/error401", label: "Error 401" },
            { to: "/error403", label: "Error 403" },
          ]}
          isOpen={openMenu === "lainnya"}
          onToggle={() => setOpenMenu(openMenu === "lainnya" ? null : "lainnya")}
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
          className="bg-white text-biru px-4 py-2 rounded-lg font-semibold hover:brightness-110 transition"
        >
          Pesan Tiket →
        </Link>
      </div>
    </nav>
  );
}
