import React, { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  User,
  Mail,
  Hash,
  Calendar,
  CreditCard,
  Calculator,
  ArrowRight,
  Ticket,
} from "lucide-react";
import Pikaday from "pikaday";

export default function TicketForm() {
  const myDatepicker = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();
  const { ticket } = location.state || {};
  const [jumlah, setJumlah] = useState(1);
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [tanggal, setTanggal] = useState("");
  const [metodeBayar, setMetodeBayar] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const picker = new Pikaday({
      field: myDatepicker.current,
      format: "YYYY-MM-DD",
      onSelect: (date) => setTanggal(date.toLocaleDateString("id-ID")),
    });

    return () => picker.destroy();
  }, []);

  if (!ticket) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-red-100"
      >
        <div className="text-center p-10 bg-white rounded-2xl shadow-xl">
          <Ticket className="w-16 h-16 text-red-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-red-600 mb-2">Oops!</h2>
          <p className="text-red-500">Tiket tidak ditemukan.</p>
        </div>
      </motion.div>
    );
  }

  const hargaNumerik = parseInt(ticket.price.replace(/\D/g, ""), 10);
  const totalHarga = jumlah * hargaNumerik;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!nama || !email || jumlah < 1 || !tanggal || !metodeBayar) {
      setError("Semua field harus diisi dengan benar!");
      return;
    }

    alert(
      `Terima kasih, ${nama}!\nTanggal: ${tanggal}\nJumlah: ${jumlah}\nMetode Pembayaran: ${metodeBayar}\nTotal harga: Rp ${totalHarga.toLocaleString(
        "id-ID"
      )}`
    );

    navigate("/");
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 py-12">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-2xl mx-auto px-4"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-8">
          <div className="bg-gradient-to-r from-birumuda to-blue-600 text-white p-6 rounded-t-3xl">
            <Ticket className="w-12 h-12 mx-auto mb-3" />
            <h1 className="text-3xl font-bold mb-2">Form Pemesanan Tiket</h1>
            <p className="text-blue-100 text-lg">{ticket.title}</p>
            <div className="bg-white/20 inline-block px-4 py-2 rounded-full mt-2">
              <span className="text-sm">Harga per tiket: </span>
              <span className="font-bold">{ticket.price}</span>
            </div>
          </div>
        </motion.div>

        {/* Form */}
        <motion.div
          variants={itemVariants}
          className="bg-white rounded-3xl shadow-2xl overflow-hidden"
        >
          <form onSubmit={handleSubmit} className="p-8 space-y-6">
            {/* Informasi Pribadi */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800 border-b pb-2 flex items-center gap-2">
                <User className="w-5 h-5 text-birumuda" />
                Informasi Pribadi
              </h3>

              <div className="relative group">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 group-focus-within:text-birumuda transition-colors" />
                <input
                  type="text"
                  value={nama}
                  onChange={(e) => setNama(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-birumuda focus:ring-2 focus:ring-birumuda transition-all duration-300 bg-gray-50 focus:bg-white"
                  placeholder="Masukkan nama lengkap"
                  required
                />
              </div>

              <div className="relative group">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 group-focus-within:text-birumuda transition-colors" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-birumuda focus:ring-2 focus:ring-birumuda transition-all duration-300 bg-gray-50 focus:bg-white"
                  placeholder="Masukkan email"
                  required
                />
              </div>
            </motion.div>

            {/* Detail Pemesanan */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800 border-b pb-2 flex items-center gap-2">
                <Ticket className="w-5 h-5 text-birumuda" />
                Detail Pemesanan
              </h3>

              <div className="relative group">
                <Hash className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 group-focus-within:text-birumuda transition-colors" />
                <input
                  type="number"
                  value={jumlah}
                  onChange={(e) => setJumlah(parseInt(e.target.value))}
                  className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-birumuda focus:ring-2 focus:ring-birumuda transition-all duration-300 bg-gray-50 focus:bg-white"
                  placeholder="Jumlah tiket"
                  min={1}
                  required
                />
              </div>

              <div className="relative group">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 group-focus-within:text-birumuda transition-colors" />
                <input
                  type="text"
                  className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-birumuda focus:ring-2 focus:ring-birumuda transition-all duration-300 bg-gray-50 focus:bg-white cursor-pointer"
                  defaultValue="Pilih tanggal"
                  ref={myDatepicker}
                  readOnly
                />
              </div>
            </motion.div>

            {/* Metode Pembayaran */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800 border-b pb-2 flex items-center gap-2">
                <CreditCard className="w-5 h-5 text-birumuda" />
                Metode Pembayaran
              </h3>

              <div className="relative group">
                <CreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 group-focus-within:text-birumuda transition-colors" />
                <select
                  value={metodeBayar}
                  onChange={(e) => setMetodeBayar(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-birumuda focus:ring-2 focus:ring-birumuda transition-all duration-300 bg-gray-50 focus:bg-white appearance-none"
                  required
                >
                  <option value="">-- Pilih Metode Pembayaran --</option>
                  <option value="Transfer Bank">🏦 Transfer Bank</option>
                  <option value="QRIS">📱 QRIS</option>
                  <option value="e-Wallet">💳 e-Wallet</option>
                </select>
              </div>
            </motion.div>

            {/* Total Harga */}
            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-2xl border-2 border-blue-200"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-gray-700">
                  <Calculator className="w-6 h-6 text-birumuda" />
                  <span className="font-semibold text-lg">Total Harga:</span>
                </div>
                <motion.div
                  className="text-3xl font-bold text-birumuda"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  Rp {totalHarga.toLocaleString("id-ID")}
                </motion.div>
              </div>
            </motion.div>

            {/* Error */}
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-red-50 border-l-4 border-red-500 p-4 rounded-xl"
              >
                <p className="text-red-700 font-medium">{error}</p>
              </motion.div>
            )}

            {/* Tombol Submit */}
            <motion.button
              type="submit"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-gradient-to-r from-birumuda to-blue-600 hover:from-blue-500 hover:to-blue-700 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              Kirim Pesanan
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </form>
        </motion.div>
      </motion.div>
    </div>
  );
}
