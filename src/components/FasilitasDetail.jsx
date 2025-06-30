import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import fasilitasData from "../JSON/fasilitas.json";

export default function FasilitasDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const fasilitas = fasilitasData.find((f) => f.id.toString() === id);
  const handleReservasi = () => {
    if (showReservasiButton) {
      navigate(`/pembayaran-fasilitas/${fasilitas.id}`);
    }
  };
  if (!fasilitas) {
    return (
      <motion.div
        className="min-h-screen flex items-center justify-center bg-red-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="text-center bg-white rounded-3xl p-12 shadow-2xl"
          initial={{ scale: 0.9, y: 40 }}
          animate={{ scale: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-6xl mb-4">😕</div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            Fasilitas Tidak Ditemukan
          </h1>
          <p className="text-gray-600">
            Fasilitas dengan ID {id} tidak ditemukan.
          </p>
        </motion.div>
      </motion.div>
    );
  }

  const showReservasiButton = ["Loker", "Gazebo"].includes(fasilitas.nama);

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 py-12 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="max-w-5xl mx-auto"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden relative">
          {/* Tombol kembali */}
          <button
            onClick={() => navigate(-1)}
            className="absolute top-6 left-6 z-20 bg-white hover:bg-gray-100 p-3 rounded-full shadow-lg"
          >
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Gambar dan Judul */}
          <motion.div
            className="relative"
            initial={{ scale: 1.05 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={fasilitas.gambar}
              alt={fasilitas.nama}
              className="w-full h-80 md:h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            <motion.div
              className="absolute bottom-6 left-6 right-6"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 flex items-center">
                <span className="mr-4 text-4xl">🎯</span>
                {fasilitas.nama}
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full" />
            </motion.div>
          </motion.div>

          {/* Konten */}
          <motion.div
            className="p-8 md:p-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            {/* Deskripsi */}
            <motion.div
              className="bg-gradient-to-r from-teal-100 to-cyan-100 rounded-2xl p-8 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <div className="flex items-center mb-6">
                <span className="text-4xl mr-4">📝</span>
                <h2 className="text-2xl md:text-3xl font-semibold text-teal-600">
                  Deskripsi Fasilitas
                </h2>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                {fasilitas.deskripsi}
              </p>
            </motion.div>

            {/* Fitur */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {[
                {
                  icon: "⭐",
                  title: "Kualitas Premium",
                  color: "text-cyan-600",
                  text: "Fasilitas dengan standar kualitas terbaik untuk kenyamanan Anda",
                },
                {
                  icon: "🛡️",
                  title: "Keamanan Terjamin",
                  color: "text-blue-600",
                  text: "Dilengkapi dengan sistem keamanan dan pengawasan 24 jam",
                },
              ].map((feat, i) => (
                <motion.div
                  key={i}
                  className="bg-cyan-50 rounded-2xl p-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + i * 0.3 }}
                >
                  <div className="flex items-center mb-4">
                    <span className="text-3xl mr-3">{feat.icon}</span>
                    <h3 className={`text-xl font-semibold ${feat.color}`}>
                      {feat.title}
                    </h3>
                  </div>
                  <p className="text-gray-700">{feat.text}</p>
                </motion.div>
              ))}
            </div>

            {/* Tombol Reservasi */}
            {showReservasiButton && (
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6 }}
              >
                <button
                  onClick={handleReservasi}
                  className="bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500 hover:brightness-110 text-white font-bold py-4 px-10 rounded-full text-xl shadow-xl"
                >
                  🎫 Reservasi Sekarang ⚡
                </button>
              </motion.div>
            )}
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}
