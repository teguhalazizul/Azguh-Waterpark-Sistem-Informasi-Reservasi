import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { pricingAPI } from "../api/pricingAPI";
import Loading from "../components/Loading";
import Error from "../components/Error";
import EmptyState from "../components/EmptyState";

export default function PricingPage() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);

  useEffect(() => {
    pricingAPI
      .fetchAll()
      .then(setData)
      .catch(setErr)
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <Loading />;
  if (err) return <Error message={err.message} />;
  if (data.length === 0)
    return <EmptyState message="Tidak ada paket harga tersedia." />;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
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
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 py-12 px-4">
      <motion.div
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Floating decorative elements */}
        <motion.div
          className="absolute top-16 left-16 w-28 h-28 bg-green-200 rounded-full opacity-10"
          animate={{
            y: [0, -25, 0],
            x: [0, 10, 0],
            rotate: [0, 90, 180, 270, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-32 right-12 w-20 h-20 bg-emerald-200 rounded-full opacity-10"
          animate={{
            y: [0, 20, 0],
            rotate: [0, -360],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
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
              className="text-6xl mr-4"
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
              💰
            </motion.span>
            <span className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Paket Harga
            </span>
            <motion.div
              className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: 128 }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </motion.h1>

          <motion.p
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            Pilih paket yang sesuai dengan kebutuhan Anda untuk pengalaman terbaik di waterpark
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          {data.map((item, index) => (
            <motion.div
              key={item.id}
              variants={cardVariants}
              className="group relative"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="bg-white/90 rounded-3xl shadow-xl backdrop-blur-sm border border-white/30 overflow-hidden relative h-full"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.2)",
                  backgroundColor: "rgba(255, 255, 255, 0.95)"
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Popular badge for middle item */}
                {index === Math.floor(data.length / 2) && (
                  <motion.div
                    className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                  >
                    <motion.div
                      className="bg-gradient-to-r from-orange-400 to-red-500 text-white px-6 py-2 rounded-full font-semibold text-sm shadow-lg"
                      animate={{
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      ⭐ Paling Populer
                    </motion.div>
                  </motion.div>
                )}

                {/* Gradient overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-emerald-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                />

                {/* Decorative background shapes */}
                <motion.div
                  className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-300/10 to-emerald-300/10 rounded-full -translate-y-16 translate-x-16"
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
                  className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-teal-300/10 to-emerald-300/10 rounded-full translate-y-12 -translate-x-12"
                  animate={{
                    rotate: -360,
                  }}
                  transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />

                <div className="relative p-8 flex flex-col h-full">
                  <motion.div
                    className="text-center mb-6"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.h2
                      className="text-2xl md:text-3xl font-semibold text-green-600 mb-4 flex items-center justify-center"
                      animate={{
                        x: [0, 5, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.5,
                      }}
                    >
                      <motion.span
                        className="mr-3 text-3xl"
                        animate={{
                          rotate: [0, 360],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "linear",
                          delay: index * 0.8,
                        }}
                      >
                        🎟️
                      </motion.span>
                      {item.nama}
                    </motion.h2>

                    <motion.div
                      className="relative"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <motion.p
                        className="text-3xl md:text-4xl font-bold text-blue-500 mb-2"
                        animate={{
                          scale: [1, 1.05, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: index * 0.3,
                        }}
                      >
                        Rp{item.harga.toLocaleString("id-ID")}
                      </motion.p>
                      <motion.div
                        className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-20 h-0.5 bg-gradient-to-r from-green-400 to-blue-400 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: 80 }}
                        transition={{ duration: 0.8, delay: index * 0.2 + 0.5 }}
                      />
                    </motion.div>
                  </motion.div>

                  <motion.div
                    className="flex-1 bg-gradient-to-br from-gray-50/80 to-gray-100/80 rounded-2xl p-6 relative overflow-hidden"
                    whileHover={{ 
                      backgroundColor: "rgba(249, 250, 251, 0.9)"
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-green-200/20 to-blue-200/20 rounded-full -translate-y-10 translate-x-10"
                      animate={{
                        rotate: 360,
                        scale: [1, 1.2, 1],
                      }}
                      transition={{
                        rotate: {
                          duration: 15,
                          repeat: Infinity,
                          ease: "linear",
                        },
                        scale: {
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                        },
                      }}
                    />
                    <motion.div
                      className="relative z-10"
                      initial={{ opacity: 0.8 }}
                      whileHover={{ opacity: 1 }}
                    >
                      <motion.div
                        className="flex items-center mb-3"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <motion.span
                          className="text-2xl mr-3"
                          animate={{
                            rotate: [0, 10, -10, 0],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        >
                          ✨
                        </motion.span>
                        <span className="font-semibold text-gray-800">Fitur Paket:</span>
                      </motion.div>
                      <motion.p
                        className="text-gray-700 whitespace-pre-line leading-relaxed"
                        initial={{ opacity: 0.8 }}
                        whileHover={{ opacity: 1 }}
                      >
                        {item.fitur}
                      </motion.p>
                    </motion.div>
                  </motion.div>

                  <motion.div
                    className="mt-6"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.button
                      className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-semibold py-4 px-6 rounded-2xl shadow-lg transition-all duration-300 relative overflow-hidden"
                      whileHover={{
                        boxShadow: "0 20px 40px -10px rgba(34, 197, 94, 0.3)",
                      }}
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/0"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "100%" }}
                        transition={{ duration: 0.6 }}
                      />
                      <span className="relative z-10 flex items-center justify-center">
                        <motion.span
                          className="mr-2 text-xl"
                          animate={{
                            scale: [1, 1.2, 1],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        >
                          🎫
                        </motion.span>
                        Pilih Paket Ini
                      </span>
                    </motion.button>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to action */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
        >
          <motion.div
            className="inline-block bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white px-10 py-5 rounded-3xl font-bold text-xl shadow-2xl relative overflow-hidden"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/0"
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{
                duration: 2,
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
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                🎉
              </motion.span>
              <span>Dapatkan Pengalaman Terbaik!</span>
              <motion.span
                className="text-2xl"
                animate={{
                  rotate: [0, -360],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                  delay: 1.5,
                }}
              >
                🌊
              </motion.span>
            </span>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}