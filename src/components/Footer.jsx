import { FaTiktok } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-biru text-white px-8 md:px-24 py-16 font-sans mt-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Ayo Main ke Azguh Waterpark</h2>
        <p className="text-lg mb-4">Pesan tiket online dan nikmati liburan yang seru dan menyegarkan!</p>
        <Link to="/tiket">
          <button className="mt-6 px-6 py-3 rounded-lg transition-all relative overflow-hidden font-medium group bg-birumuda border border-birumuda text-white shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-birumuda focus:ring-opacity-50">
              <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-white group-hover:w-full ease"></span>
              <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-white group-hover:w-full ease"></span>
              <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-white group-hover:h-full ease"></span>
              <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-white group-hover:h-full ease"></span>
              <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-birumuda opacity-0 group-hover:opacity-100"></span>
              <span className="relative transition-colors duration-300 delay-200 group-hover:text-gray-900 ease">
                Pesan Sekarang →
              </span>
            </button>
        </Link>
        <p className="text-sm mb-4 mt-6 px-6">
          Butuh bantuan? Lihat FAQ kami atau hubungi customer service
        </p>
        <div className="flex justify-center gap-6 text-2xl text-white">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <BsWhatsapp className="hover:text-kuning cursor-pointer transition" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <AiFillInstagram className="hover:text-kuning cursor-pointer transition" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaTiktok className="hover:text-kuning cursor-pointer transition" />
          </a>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-sm">
        <div>
          <div className="text-lg font-bold mb-2">Azguh Waterpark</div>
          <p>Wahana air terbaik di kota Anda. Bersih, seru, dan aman untuk keluarga.</p>
        </div>

        <div>
          <div className="font-bold mb-2">Navigasi</div>
          <ul className="space-y-1">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/article">Article</Link></li>
            <li><Link to="/job">Career Page</Link></li>
            <li><Link to="/review">Review</Link></li>
            <li><Link to="/fasilitas">Fasilitas</Link></li>
          </ul>
        </div>

        <div>
          <div className="font-bold mb-2">Reservasi</div>
          <ul className="space-y-1">
            <li><Link to="/tiket">Pesan Tiket</Link></li>
            <li><Link to="/pricing">Harga Tiket</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
          </ul>
        </div>

        <div>
          <div className="font-bold mb-2">Tentang</div>
          <ul className="space-y-1">
            <li><Link to="/about">About</Link></li>
            <li><Link to="/media">Media</Link></li>
            <li><Link to="/team">Team</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <div className="font-bold mb-2">Lainnya</div>
          <ul className="space-y-1">
            <li><Link to="/error400">Error 400</Link></li>
            <li><Link to="/error401">Error 401</Link></li>
            <li><Link to="/error403">Error 403</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white mt-12 pt-6 flex flex-col md:flex-row justify-between text-xs text-gray-300">
        <div className="mb-2 md:mb-0">
          Indonesia &nbsp;&nbsp;|&nbsp;&nbsp; Syarat & Ketentuan &nbsp;&nbsp;|&nbsp;&nbsp; Kebijakan Privasi
        </div>
        <div>
          ©2025 Azguh Waterpark.
        </div>
        <div className="flex space-x-4">
          <a href="#"><i className="fab fa-facebook"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
        </div>
      </div>
    </footer>
  );
}
