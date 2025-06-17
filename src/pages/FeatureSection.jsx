import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // Added for fade-in animation

export default function FeatureSection() {
  return (
    <motion.section
      className="bg-putih py-16 px-4 md:px-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Gambar Fasilitas */}
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          <img
            src="/img/herosection.jpg"
            alt="Fasilitas Azguh Waterpark"
            className="w-full h-auto rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300"
          />
        </motion.div>

        {/* Konten Teks */}
        <motion.div
          className="md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        >
          <h2 className="text-4xl font-extrabold text-teks leading-snug">
            Lihat Fasilitas <br />
            <span className="relative inline-block">
              Seru Kami
              <span className="absolute -bottom-1 left-0 w-full h-2 bg-kuning -z-10 rounded"></span>
            </span>
          </h2>
          <p className="text-teks-samping mt-4 text-lg max-w-md mx-auto md:mx-0">
            Dari kolam ombak, seluncuran ekstrim, hingga area bermain anak –
            semua ada untuk pengalaman bermain air yang tak terlupakan!
          </p>
          <Link to="/fasilitas">
            <button className="mt-6 px-6 py-3 rounded-lg transition-all relative overflow-hidden font-medium group bg-birumuda border border-birumuda text-white shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-birumuda focus:ring-opacity-50">
              <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-white group-hover:w-full ease"></span>
              <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-white group-hover:w-full ease"></span>
              <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-white group-hover:h-full ease"></span>
              <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-white group-hover:h-full ease"></span>
              <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-birumuda opacity-0 group-hover:opacity-100"></span>
              <span className="relative transition-colors duration-300 delay-200 group-hover:text-gray-900 ease">
                Jelajahi Fasilitas →
              </span>
            </button>
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
}