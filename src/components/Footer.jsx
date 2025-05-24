import { FaTiktok } from "react-icons/fa"; 
import { AiFillInstagram } from "react-icons/ai"; 
import { BsWhatsapp } from "react-icons/bs"; 
export default function Footer() {
  return (
    <footer className="bg-biru text-white px-8 md:px-24 py-16 font-sans">
      <div className="text-center mb-12">
      <h2 className="text-4xl font-bold mb-4">Ayo Main ke Azguh Waterpark</h2>
      <p className="text-lg mb-4">Pesan tiket online dan nikmati liburan yang seru dan menyegarkan!</p>
      <button className="bg-birumuda hover:bg-kuning text-white font-semibold px-6 py-2 rounded-lg mb-4 transition">
        Pesan Sekarang →
      </button>
      <p className="text-sm mb-4">
        Butuh bantuan? Lihat FAQ kami atau hubungi customer service
      </p>
      <div className="flex justify-center gap-6 text-2xl text-white">
        <BsWhatsapp className="hover:text-kuning cursor-pointer transition" />
        <AiFillInstagram className="hover:text-kuning cursor-pointer transition" />
        <FaTiktok className="hover:text-kuning cursor-pointer transition" />
      </div>
    </div>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-sm">
        <div>
          <div className="text-lg font-bold mb-2">Azguh Waterpark</div>
          <p>Wahana air terbaik di kota Anda. Bersih, seru, dan aman untuk keluarga.</p>
        </div>
        <div>
          <div className="font-bold mb-2">Informasi</div>
          <ul>
            <li><a href="#">Tentang Kami</a></li>
            <li><a href="#">Peta Lokasi</a></li>
            <li><a href="#">Jam Operasional</a></li>
          </ul>
        </div>
        <div>
          <div className="font-bold mb-2">Reservasi</div>
          <ul>
            <li><a href="#">Pesan Tiket</a></li>
            <li><a href="#">Harga Tiket</a></li>
            <li><a href="#">Promo</a></li>
          </ul>
        </div>
        <div>
          <div className="font-bold mb-2">Layanan</div>
          <ul>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Kontak Kami</a></li>
            <li><a href="#">Kebijakan Refund</a></li>
          </ul>
        </div>
        <div>
          <div className="font-bold mb-2">Gabung Sekarang</div>
          <p className="mb-2">Beli tiket lebih mudah dan cepat. Mulai liburan serumu hari ini!</p>
          <button className="bg-birumuda hover:bg-kuning text-white font-semibold px-4 py-2 rounded">
            Mulai Pesan →
          </button>
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
