
import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import { User, Mail, Hash, CreditCard, Calculator, ArrowRight } from "lucide-react";
import fasilitasData from "../JSON/fasilitas.json";

export default function FormPembayaranFasilitas() {
  const { id } = useParams();
  const fasilitas = fasilitasData.find((f) => f.id.toString() === id);
  const [jumlah, setJumlah] = useState(1);
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [nomorTerpilih, setNomorTerpilih] = useState("");
  const [metodeBayar, setMetodeBayar] = useState("");
  const navigate = useNavigate();

  if (!fasilitas) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-red-100"
      >
        <div className="text-center p-10 bg-white rounded-2xl shadow-xl">
          <div className="text-red-500 text-6xl mb-4">🏢</div>
          <h2 className="text-2xl font-bold text-red-600 mb-2">Oops!</h2>
          <p className="text-red-500">Fasilitas tidak ditemukan.</p>
        </div>
      </motion.div>
    );
  }

  const isGazebo = fasilitas.nama.toLowerCase() === "gazebo";
  const isLoker = fasilitas.nama.toLowerCase() === "loker";
  const harga = fasilitas.harga || 0;
  const totalHarga = harga * jumlah;

  const handleSubmit = (e) => {
    e.preventDefault();
    const detailNomor = (isGazebo || isLoker)
      ? `Nomor ${fasilitas.nama}: ${nomorTerpilih}`
      : "";

    alert(
      `Reservasi ${jumlah} ${fasilitas.nama} atas nama ${nama} telah dicatat.\n${detailNomor}\nMetode Pembayaran: ${metodeBayar}\nTotal: Rp${totalHarga.toLocaleString()}`
    );
    navigate("/");
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-100 py-12">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-2xl mx-auto px-4"
      >
        {/* Header */}
        <motion.div 
          variants={itemVariants}
          className="text-center mb-8"
        >
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6 rounded-t-3xl">
            <h1 className="text-3xl font-bold mb-2">Form Pembayaran</h1>
            <p className="text-blue-100 text-lg">{fasilitas.nama}</p>
          </div>
        </motion.div>

        {/* Main Form Card */}
        <motion.div 
          variants={itemVariants}
          className="bg-white rounded-3xl shadow-2xl overflow-hidden"
        >
          <form onSubmit={handleSubmit} className="p-8 space-y-6">
            {/* Personal Information */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800 border-b pb-2">Informasi Pribadi</h3>
              
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  value={nama}
                  onChange={(e) => setNama(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 bg-gray-50 focus:bg-white"
                  placeholder="Nama Lengkap"
                  required
                />
              </div>

              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 bg-gray-50 focus:bg-white"
                  placeholder="Email Address"
                  required
                />
              </div>
            </motion.div>

            {/* Facility Details */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800 border-b pb-2">Detail Pemesanan</h3>
              
              {(isGazebo || isLoker) ? (
                <>
                  <div className="relative">
                    <Hash className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="number"
                      value={jumlah}
                      onChange={(e) => setJumlah(Number(e.target.value))}
                      className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 bg-gray-50 focus:bg-white"
                      placeholder={`Jumlah ${fasilitas.nama}`}
                      min={1}
                      max={30}
                      required
                    />
                  </div>

                  <select
                    value={nomorTerpilih}
                    onChange={(e) => setNomorTerpilih(e.target.value)}
                    className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 bg-gray-50 focus:bg-white"
                    required
                  >
                    <option value="">-- Pilih Nomor {fasilitas.nama} --</option>
                    {Array.from({ length: 30 }, (_, i) => i + 1).map((num) => (
                      <option key={num} value={num}>
                        {fasilitas.nama} {num}
                      </option>
                    ))}
                  </select>
                </>
              ) : (
                <div className="relative">
                  <Hash className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="number"
                    value={jumlah}
                    onChange={(e) => setJumlah(Number(e.target.value))}
                    className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 bg-gray-50 focus:bg-white"
                    placeholder={`Jumlah ${fasilitas.nama}`}
                    min={1}
                    required
                  />
                </div>
              )}
            </motion.div>

            {/* Payment Method */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800 border-b pb-2">Metode Pembayaran</h3>
              
              <div className="relative">
                <CreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <select
                  value={metodeBayar}
                  onChange={(e) => setMetodeBayar(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 bg-gray-50 focus:bg-white appearance-none"
                  required
                >
                  <option value="">-- Pilih Metode Pembayaran --</option>
                  <option value="Transfer Bank">🏦 Transfer Bank</option>
                  <option value="QRIS">📱 QRIS</option>
                  <option value="e-Wallet">💳 e-Wallet</option>
                </select>
              </div>
            </motion.div>

            {/* Total Price */}
            {harga > 0 && (
              <motion.div 
                variants={itemVariants}
                className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-2xl border-2 border-green-200"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-gray-700">
                    <Calculator className="w-5 h-5" />
                    <span className="font-medium">Total Harga:</span>
                  </div>
                  <div 
                    className="text-2xl font-bold text-green-600"
                    
                  >
                    Rp{totalHarga.toLocaleString()}
                  </div>
                </div>
              </motion.div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              Lanjutkan Pembayaran
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </motion.div>
      </motion.div>
    </div>
  );
}
