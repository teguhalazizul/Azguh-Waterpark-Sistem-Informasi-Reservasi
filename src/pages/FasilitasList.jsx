import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import fasilitasData from "../JSON/fasilitas.json";

export default function FasilitasList() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50 py-12 px-6">
      <motion.div
        className="max-w-screen-2xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-5xl mr-3">🏊‍♂️</span>
            <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Fasilitas di Azguh Waterpark
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nikmati berbagai fasilitas menarik dan seru yang tersedia untuk pengalaman tak terlupakan
          </p>
        </div>

        <motion.div
          className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
        >
          {fasilitasData.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
            >
              <Link to={`/fasilitas/${item.id}`} className="block group">
                <div className="bg-white rounded-3xl shadow-xl border overflow-hidden">
                  <div className="relative overflow-hidden">
                    <img
                      src={item.gambar}
                      alt={item.nama}
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-6">
                    <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
                      <span className="mr-3 text-2xl">🌊</span>
                      {item.nama}
                    </h2>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {item.deskripsi}
                    </p>
                    <div className="flex items-center text-blue-600 font-semibold group-hover:text-blue-700 transition-colors">
                      <span className="mr-2">Lihat Detail</span>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 text-white px-10 py-5 rounded-3xl font-bold text-xl shadow-lg">
            <span className="flex items-center space-x-3">
              <span className="text-2xl">🎡</span>
              <span>Jelajahi Semua Fasilitas Kami!</span>
              <span className="text-2xl">🏄‍♀️</span>
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
