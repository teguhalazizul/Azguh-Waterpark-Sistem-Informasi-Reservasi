import { useParams,useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  User, Mail, Phone, MessageSquare, MapPin,
  Clock, Briefcase, CheckCircle, Send
} from 'lucide-react';
import jobs from '../JSON/careers.json';

export default function JobDetail() {
  const { id } = useParams();
  const job = jobs.find((job) => job.id.toString() === id);

  const [formData, setFormData] = useState({
    nama: '', email: '', telepon: '', pesan: '',
  });
  const navigate = useNavigate();


  if (!job) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-red-100"
      >
        <div className="text-center p-10 bg-white rounded-2xl shadow-xl">
          <Briefcase className="w-16 h-16 text-red-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-red-600 mb-2">Oops!</h2>
          <p className="text-red-500">Job dengan ID {id} tidak ditemukan.</p>
        </div>
      </motion.div>
    );
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
  e.preventDefault();
  alert(`Terima kasih, ${formData.nama}! Lamaran Anda untuk posisi ${job.title} telah diterima.`);
  setFormData({ nama: '', email: '', telepon: '', pesan: '' });

  // Redirect ke halaman utama setelah 2 detik
 navigate("/");
}

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 py-12">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto px-6"
      >

        {/* Job Header */}
        <motion.div variants={itemVariants} className="bg-white rounded-3xl shadow-2xl overflow-hidden mb-8">
          <div className="bg-gradient-to-r from-birumuda to-blue-600 text-white p-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-white/20 p-3 rounded-2xl">
                <Briefcase className="w-8 h-8" />
              </div>
              <div>
                <h1 className="text-4xl font-bold mb-2">{job.title}</h1>
                <div className="flex items-center gap-4 text-blue-100">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{job.type}</span>
                  </div>
                  <div className="text-sm">
                    Diposting: {new Date(job.posted_at).toLocaleDateString('id-ID', {
                      day: 'numeric', month: 'long', year: 'numeric'
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-8">
            <motion.div variants={itemVariants} className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Deskripsi Pekerjaan</h2>
              <p className="text-gray-700 leading-relaxed">{job.description}</p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Kualifikasi</h2>
              <ul className="space-y-3">
                {job.requirements.map((req, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-start gap-3 p-3 bg-blue-50 rounded-xl"
                  >
                    <CheckCircle className="w-5 h-5 text-birumuda mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{req}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>

        {/* Application Form */}
        <motion.div variants={itemVariants} className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-birumuda text-white p-6">
            <h2 className="text-3xl font-bold mb-2 flex items-center gap-3">
              <Send className="w-8 h-8" />
              Form Pendaftaran
            </h2>
            <p className="text-blue-100">Bergabunglah dengan tim kami dan wujudkan karier impian Anda!</p>
          </div>

          <form onSubmit={handleSubmit} className="p-8 space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <motion.div variants={itemVariants} className="space-y-2">
                <label className="block font-semibold text-gray-800 mb-2 flex items-center gap-2">
                  <User className="w-4 h-4 text-birumuda" />
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  name="nama"
                  value={formData.nama}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-birumuda focus:ring-2 focus:ring-birumuda transition-all duration-300 bg-gray-50 focus:bg-white"
                  placeholder="Masukkan nama lengkap"
                />
              </motion.div>

              <motion.div variants={itemVariants} className="space-y-2">
                <label className="block font-semibold text-gray-800 mb-2 flex items-center gap-2">
                  <Mail className="w-4 h-4 text-birumuda" />
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-birumuda focus:ring-2 focus:ring-birumuda transition-all duration-300 bg-gray-50 focus:bg-white"
                  placeholder="Masukkan email"
                />
              </motion.div>
            </div>

            <motion.div variants={itemVariants} className="space-y-2">
              <label className="block font-semibold text-gray-800 mb-2 flex items-center gap-2">
                <Phone className="w-4 h-4 text-birumuda" />
                Nomor Telepon
              </label>
              <input
                type="tel"
                name="telepon"
                value={formData.telepon}
                onChange={handleChange}
                required
                className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-birumuda focus:ring-2 focus:ring-birumuda transition-all duration-300 bg-gray-50 focus:bg-white"
                placeholder="Masukkan nomor telepon"
              />
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-2">
              <label className="block font-semibold text-gray-800 mb-2 flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-birumuda" />
                Pesan / Motivasi
              </label>
              <textarea
                name="pesan"
                value={formData.pesan}
                onChange={handleChange}
                rows="5"
                className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-birumuda focus:ring-2 focus:ring-birumuda transition-all duration-300 bg-gray-50 focus:bg-white resize-none"
                placeholder="Tulis pesan atau motivasi Anda..."
              ></textarea>
            </motion.div>

            <motion.button
              type="submit"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-gradient-to-r from-birumuda to-blue-600 hover:from-blue-500 hover:to-blue-700 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              <Send className="w-5 h-5" />
              Kirim Lamaran
              <motion.div
                className="ml-1"
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.div>
            </motion.button>
          </form>
        </motion.div>
      </motion.div>
    </div>
  );
}
