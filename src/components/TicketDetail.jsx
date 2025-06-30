
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, MapPin, Clock, Star, CheckCircle, XCircle } from "lucide-react";
import ticketData from "../JSON/tickets.json";

export default function TicketDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const ticket = ticketData.find((t) => t.id_tiket?.toString() === id);

  if (!ticket) {
    return (
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-red-100"
      >
        <div className="text-center p-10 bg-white rounded-2xl shadow-xl">
          <div className="text-red-500 text-6xl mb-4">😞</div>
          <h2 className="text-2xl font-bold text-red-600 mb-2">Oops!</h2>
          <p className="text-red-500">Tiket tidak ditemukan.</p>
        </div>
      </motion.div>
    );
  }

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-8">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto p-6"
      >
        {/* Back Button */}
        <motion.button
          variants={itemVariants}
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-6 bg-white px-4 py-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300 group"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Kembali
        </motion.button>

        {/* Main Card */}
        <motion.div 
          variants={itemVariants}
          className="bg-white rounded-3xl shadow-2xl overflow-hidden"
        >
          {/* Hero Image */}
          <motion.div 
            className="relative overflow-hidden"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={ticket.image}
              alt={ticket.title}
              className="w-full h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </motion.div>

          <div className="p-8">
            {/* Title and Price */}
            <motion.div 
              variants={itemVariants}
              className="flex justify-between items-start mb-6"
            >
              <h1 className="text-4xl font-bold text-gray-800 leading-tight">
                {ticket.title}
              </h1>
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="bg-gradient-to-r from-blue-500 to-birumuda text-white px-6 py-3 rounded-2xl font-bold text-xl shadow-lg"
              >
                {ticket.price}
              </motion.div>
            </motion.div>

            {/* Description */}
            <motion.div 
              variants={itemVariants}
              className="mb-6 p-6 bg-gray-50 rounded-2xl"
            >
              <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-500" />
                Deskripsi
              </h3>
              <p className="text-gray-700 leading-relaxed">{ticket.ticketInfo}</p>
            </motion.div>

            {/* Validity */}
            <motion.div 
              variants={itemVariants}
              className="mb-8 p-4 bg-green-50 border-l-4 border-green-500 rounded-r-xl"
            >
              <div className="flex items-center gap-2 text-green-700">
                <Clock className="w-5 h-5" />
                <span className="font-semibold">Masa Berlaku:</span>
                <span>{ticket.validity}</span>
              </div>
            </motion.div>

            {/* Location */}
            {ticket.lokasi && (
              <motion.div 
                variants={itemVariants}
                className="mb-6 p-6 bg-blue-50 rounded-2xl"
              >
                <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-blue-500" />
                  Lokasi
                </h3>
                <p className="text-gray-700">
                  {ticket.lokasi.alamat}, {ticket.lokasi.kota}
                </p>
              </motion.div>
            )}

            {/* Facilities */}
            {ticket.fasilitas && (
              <motion.div 
                variants={itemVariants}
                className="mb-6 p-6 bg-purple-50 rounded-2xl"
              >
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Fasilitas</h3>
                <div className="grid grid-cols-2 gap-3">
                  {Object.entries(ticket.fasilitas).map(([key, val]) => (
                    <motion.div
                      key={key}
                      className="flex items-center gap-2 p-3 bg-white rounded-xl shadow-sm"
                      whileHover={{ scale: 1.02 }}
                    >
                      {val ? (
                        <CheckCircle className="w-5 h-5 text-green-500" />
                      ) : (
                        <XCircle className="w-5 h-5 text-red-500" />
                      )}
                      <span className="text-sm font-medium capitalize">
                        {key.replace("_", " ")}
                      </span>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        val ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                      }`}>
                        {val ? "Tersedia" : "Tidak tersedia"}
                      </span>
                    </motion.div>
                  ))}
                </div>4
              </motion.div>
            )}

            {/* Reviews */}
            {ticket.review && (
              <motion.div 
                variants={itemVariants}
                className="border-t border-gray-200 pt-6"
              >
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Ulasan Pengunjung</h3>
                {ticket.review.length > 0 ? (
                  <div className="space-y-4">
                    {ticket.review.map((rev, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-gradient-to-r from-gray-50 to-gray-100 p-4 rounded-xl border-l-4 border-blue-400"
                      >
                        <p className="font-semibold text-gray-800 mb-1">{rev.nama}</p>
                        <p className="text-gray-600 text-sm leading-relaxed">{rev.komentar}</p>
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8 text-gray-500">
                    <div className="text-4xl mb-2">💭</div>
                    <p>Belum ada ulasan untuk tiket ini.</p>
                  </div>
                )}
              </motion.div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
