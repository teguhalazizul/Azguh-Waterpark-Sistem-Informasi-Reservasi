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
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.9 
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1.0],
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50 py-12 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-16 2xl:px-20">
      <motion.div
        className="max-w-screen-2xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        Floating decorative elements
        <motion.div
          className="absolute top-20 right-20 w-32 h-32 bg-cyan-200 rounded-full opacity-10"
          animate={{
            y: [0, -30, 0],
            rotate: [0, 180, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-40 left-20 w-24 h-24 bg-blue-200 rounded-full opacity-10"
          animate={{
            y: [0, 25, 0],
            rotate: [0, -180, -360],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />

        <motion.div
          className="text-center mb-16"
          variants={titleVariants}
        >
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-6 relative"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.2 }}
          >
            <motion.span
              className="text-5xl mr-4"
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
              🏊‍♂️
            </motion.span>
            <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Fasilitas di Azguh Waterpark
            </span>
            <motion.div
              className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-40 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: 160 }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </motion.h1>

          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            Nikmati berbagai fasilitas menarik dan seru yang tersedia untuk pengalaman tak terlupakan
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
        >
          {fasilitasData.map((item, index) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              whileHover={{ y: -15 }}
              transition={{ duration: 0.3 }}
            >
              <Link
                to={`/fasilitas/${item.id}`}
                className="block group"
              >
                <motion.div
                  className="bg-white/90 rounded-3xl shadow-xl backdrop-blur-sm border border-white/30 overflow-hidden relative h-full"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 30px 60px -12px rgba(0, 0, 0, 0.2)",
                    backgroundColor: "rgba(255, 255, 255, 0.95)"
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Gradient overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-blue-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100"
                    transition={{ duration: 0.3 }}
                  />

                  {/* Decorative background shapes */}
                  <motion.div
                    className="absolute top-0 right-0 w-28 h-28 bg-gradient-to-br from-cyan-300/10 to-blue-300/10 rounded-full -translate-y-14 translate-x-14"
                    animate={{
                      rotate: 360,
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />

                  <div className="relative">
                    <motion.div
                      className="relative overflow-hidden"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.4 }}
                    >
                      <img
                        src={item.gambar}
                        alt={item.nama}
                        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100"
                        transition={{ duration: 0.3 }}
                      />
                      
                      {/* Floating icon */}
                      <motion.div
                        className="absolute top-4 right-4 w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-lg"
                        initial={{ scale: 0, rotate: -90 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ 
                          delay: index * 0.1 + 0.5,
                          duration: 0.5,
                          type: "spring",
                          stiffness: 200
                        }}
                      >
                        <motion.span
                          className="text-2xl"
                          animate={{
                            rotate: [0, 10, -10, 0],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: index * 0.3,
                          }}
                        >
                          🎯
                        </motion.span>
                      </motion.div>
                    </motion.div>

                    <motion.div
                      className="p-6 relative"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <motion.h2
                        className="text-xl md:text-2xl font-semibold text-gray-800 mb-3 flex items-center"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        <motion.span
                          className="mr-3 text-2xl"
                          animate={{
                            scale: [1, 1.2, 1],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: index * 0.2,
                          }}
                        >
                          🌊
                        </motion.span>
                        {item.nama}
                      </motion.h2>

                      <motion.p
                        className="text-gray-600 mb-4 leading-relaxed"
                        initial={{ opacity: 0.8 }}
                        whileHover={{ opacity: 1 }}
                      >
                        {item.deskripsi}
                      </motion.p>

                      <motion.div
                        className="flex items-center text-blue-600 font-semibold group-hover:text-blue-700"
                        animate={{
                          x: [0, 5, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >
                        <span className="mr-2">Lihat Detail</span>
                        <motion.svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          animate={{
                            x: [0, 5, 0],
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </motion.svg>
                      </motion.div>
                    </motion.div>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to action */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
        >
          <motion.div
            className="inline-block bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 text-white px-10 py-5 rounded-3xl font-bold text-xl shadow-2xl relative overflow-hidden"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 25px 50px -12px rgba(6, 182, 212, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/0"
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
            />
            <span className="relative z-10 flex items-center space-x-3">
              <motion.span
                className="text-2xl"
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                🎡
              </motion.span>
              <span>Jelajahi Semua Fasilitas Kami!</span>
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
                🏄‍♀️
              </motion.span>
            </span>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}