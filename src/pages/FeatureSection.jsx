
import { Link } from "react-router-dom";

export default function FeatureSection() {
  return (
    
    <section className="bg-putih py-16 px-4 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Gambar Fasilitas */}
        <div className="md:w-1/2">
          <img
            src="/img/herosection.jpg" // pastikan gambar ini ada di folder public/img
            alt="Fasilitas Azguh Waterpark"
            className="w-full h-auto rounded-2xl shadow-lg"
          />
        </div>

        {/* Konten Teks */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl font-extrabold text-teks leading-snug">
            Lihat Fasilitas <br />
            <span className="relative inline-block">
              Seru Kami
              <span className="absolute -bottom-1 left-0 w-full h-2 bg-kuning -z-10 rounded"></span>
            </span>
          </h2>
          <p className="text-teks-samping mt-4 text-lg">
            Dari kolam ombak, seluncuran ekstrim, hingga area bermain anak – semua ada untuk pengalaman bermain air yang tak terlupakan!
          </p>
          <Link to="/fasilitas">
  <button className="mt-6 bg-birumuda hover:bg-kuning text-white hover:text-black px-6 py-3 rounded-lg transition-all">
    Jelajahi Fasilitas →
  </button>
</Link>
        </div>
      </div>
    </section>
  );
}
