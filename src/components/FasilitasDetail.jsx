import { useParams, useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";
import fasilitasData from "../JSON/fasilitas.json";

export default function FasilitasDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const fasilitas = fasilitasData.find(f => f.id.toString() === id);

  if (!fasilitas) {
    return (
      <motion.div
        className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-pink-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="text-center bg-white rounded-3xl p-12 shadow-2xl"
          initial={{ scale: 0.8, y: 50 }}
          animate={{ scale: 1, y: 0 }}
          transition={{ duration: 0.6, type: "spring" }}
        >
          <motion.div
            className="text-6xl mb-4"
            animate={{
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            😕
          </motion.div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Fasilitas Tidak Ditemukan</h1>
          <p className="text-gray-600">Fasilitas dengan ID {id} tidak ditemukan.</p>
        </motion.div>
      </motion.div>
    );
  }

  const showReservasiButton = ['Loker', 'Gazebo'].includes(fasilitas.nama);

  function handleReservasi() {
    alert(`Anda memilih fasilitas ${fasilitas.nama} untuk reservasi.`);
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 50 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1.0],
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 py-12 px-4">
      <motion.div
        className="max-w-5xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Floating decorative elements */}
        <motion.div
          className="absolute top-20 right-16 w-28 h-28 bg-teal-200 rounded-full opacity-10"
          animate={{
            y: [0, -25, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-32 left-20 w-20 h-20 bg-cyan-200 rounded-full opacity-10"
          animate={{
            y: [0, 20, 0],
            rotate: [0, -360],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />

        <motion.div
          className="bg-white/90 rounded-3xl shadow-2xl backdrop-blur-sm border border-white/30 overflow-hidden relative"
          variants={itemVariants}
          whileHover={{ 
            scale: 1.01,
            boxShadow: "0 30px 60px -12px rgba(0, 0, 0, 0.15)"
          }}
          transition={{ duration: 0.3 }}
        >
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-teal-500/5 via-cyan-500/5 to-blue-500/5 pointer-events-none" />
          
          <div className="relative">
            {/* Back button */}
            <motion.button
              onClick={() => navigate(-1)}
              className="absolute top-6 left-6 z-20 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg backdrop-blur-sm border border-white/30"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.2 }}
            >
              <motion.svg
                className="w-6 h-6 text-gray-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                animate={{
                  x: [0, -3, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </motion.svg>
            </motion.button>

            {/* Image section */}
            <motion.div
              className="relative overflow-hidden"
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1 }}
            >
              <img
                src={fasilitas.gambar}
                alt={fasilitas.nama}
                className="w-full h-80 md:h-96 object-cover"
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
              />
              
              {/* Floating badges */}
              <motion.div
                className="absolute top-6 right-6 bg-gradient-to-r from-teal-500 to-cyan-500 text-white px-6 py-3 rounded-full font-semibold shadow-lg"
                initial={{ scale: 0, rotate: -90 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ 
                  delay: 0.5,
                  duration: 0.6,
                  type: "spring",
                  stiffness: 200
                }}
              >
                <motion.span
                  className="flex items-center space-x-2"
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <span>🏆</span>
                  <span>Premium</span>
                </motion.span>
              </motion.div>

              {/* Title overlay */}
              <motion.div
                className="absolute bottom-6 left-6 right-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                <motion.h1
                  className="text-3xl md:text-4xl font-bold text-white mb-2 flex items-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.span
                    className="mr-4 text-4xl"
                    animate={{
                      rotate: [0, 10, -10, 0],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    🎯
                  </motion.span>
                  {fasilitas.nama}
                </motion.h1>
                <motion.div
                  className="w-24 h-1 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: 96 }}
                  transition={{ duration: 1, delay: 1 }}
                />
              </motion.div>
            </motion.div>

            {/* Content section */}
            <motion.div
              className="p-8 md:p-12 relative"
              variants={itemVariants}
            >
              <motion.div
                className="bg-gradient-to-r from-teal-500/10 to-cyan-500/10 rounded-2xl p-8 mb-8 relative overflow-hidden"
                whileHover={{ 
                  scale: 1.02,
                  backgroundColor: "rgba(20, 184, 166, 0.08)"
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-teal-300/20 to-cyan-300/20 rounded-full -translate-y-16 translate-x-16"
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
                
                <motion.div
                  className="flex items-center mb-6"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.span
                    className="text-4xl mr-4"
                    animate={{
                      rotate: [0, 10, -10, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    📝
                  </motion.span>
                  <h2 className="text-2xl md:text-3xl font-semibold text-teal-600">
                    Deskripsi Fasilitas
                  </h2>
                </motion.div>

                <motion.p
                  className="text-gray-700 text-lg leading-relaxed relative z-10"
                  initial={{ opacity: 0.8 }}
                  whileHover={{ opacity: 1 }}
                >
                  {fasilitas.deskripsi}
                </motion.p>
              </motion.div>

              {/* Features section */}
              <motion.div
                className="grid md:grid-cols-2 gap-6 mb-8"
                variants={containerVariants}
              >
                <motion.div
                  className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-2xl p-6 relative overflow-hidden"
                  variants={itemVariants}
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-cyan-300/20 to-blue-300/20 rounded-full translate-y-12 -translate-x-12"
                    animate={{
                      rotate: -360,
                    }}
                    transition={{
                      duration: 25,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                  <motion.div
                    className="flex items-center mb-4"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.span
                      className="text-3xl mr-3"
                      animate={{
                        scale: [1, 1.2, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      ⭐
                    </motion.span>
                    <h3 className="text-xl font-semibold text-cyan-600">Kualitas Premium</h3>
                  </motion.div>
                  <p className="text-gray-700 relative z-10">
                    Fasilitas dengan standar kualitas terbaik untuk kenyamanan Anda
                  </p>
                </motion.div>

                <motion.div
                  className="bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-2xl p-6 relative overflow-hidden"
                  variants={itemVariants}
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-blue-300/20 to-indigo-300/20 rounded-full -translate-y-10 translate-x-10"
                    animate={{
                      rotate: 360,
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                  <motion.div
                    className="flex items-center mb-4"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.span
                      className="text-3xl mr-3"
                      animate={{
                        y: [0, -5, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      🛡️
                    </motion.span>
                    <h3 className="text-xl font-semibold text-blue-600">Keamanan Terjamin</h3>
                  </motion.div>
                  <p className="text-gray-700 relative z-10">
                    Dilengkapi dengan sistem keamanan dan pengawasan 24 jam
                  </p>
                </motion.div>
              </motion.div>

              {/* Reservation button */}
              {showReservasiButton && (
                <motion.div
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 }}
                >
                  <motion.button
                    onClick={handleReservasi}
                    className="bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500 hover:from-teal-600 hover:via-cyan-600 hover:to-blue-600 text-white font-bold py-5 px-12 rounded-3xl shadow-2xl text-xl relative overflow-hidden"
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 25px 50px -12px rgba(20, 184, 166, 0.4)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/0"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.6 }}
                    />
                    <span className="relative z-10 flex items-center justify-center space-x-3">
                      <motion.span
                        className="text-2xl"
                        animate={{
                          rotate: [0, 360],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      >
                        🎫
                      </motion.span>
                      <span>Reservasi Sekarang</span>
                      <motion.span
                        className="text-2xl"
                        animate={{
                          scale: [1, 1.3, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >
                        ⚡
                      </motion.span>
                    </span>
                  </motion.button>
                </motion.div>
              )}
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}