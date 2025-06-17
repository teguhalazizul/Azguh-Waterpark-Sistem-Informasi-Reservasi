import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { aboutAPI } from "../api/aboutAPI";
import Loading from "../components/Loading";
import Error from "../components/Error";
import EmptyState from "../components/EmptyState";

export default function AboutPage() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);

  useEffect(() => {
    aboutAPI
      .fetchSingle()
      .then(setData)
      .catch(setErr)
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <Loading />;
  if (err) return <Error message={err.message} />;
  if (!data) return <EmptyState message="Informasi belum tersedia." />;

  // Enhanced animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const sectionVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.95 
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.8, 
        ease: [0.25, 0.1, 0.25, 1.0],
        type: "spring",
        stiffness: 100,
        damping: 15
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
        type: "spring",
        stiffness: 120,
        damping: 12
      },
    },
  };

  const decorativeVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        duration: 1.2,
        ease: "easeOut",
        delay: 0.5,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 py-45 px-4">
      <motion.div
        className="max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Decorative background elements */}
        <motion.div
          className="absolute top-10 right-10 w-20 h-20 bg-blue-200 rounded-full opacity-20"
          variants={decorativeVariants}
          animate={{
            y: [0, -20, 0],
            transition: {
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-16 h-16 bg-cyan-200 rounded-full opacity-20"
          variants={decorativeVariants}
          animate={{
            y: [0, 15, 0],
            transition: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            },
          }}
        />

        <motion.div
          className="bg-white/80 shadow-2xl rounded-3xl backdrop-blur-sm border border-white/20 overflow-hidden relative"
          whileHover={{ 
            scale: 1.01,
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)"
          }}
          transition={{ duration: 0.3 }}
        >
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-cyan-500/5 pointer-events-none" />
          
          <div className="relative p-8 md:p-12 space-y-12">
            <motion.div
              className="text-center"
              variants={titleVariants}
            >
              <motion.h1
                className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 relative"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 bg-clip-text text-transparent">
                  Tentang Kami
                </span>
                <motion.div
                  className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: 96 }}
                  transition={{ duration: 1, delay: 0.8 }}
                />
              </motion.h1>
              <motion.div
                className="flex justify-center space-x-2 mt-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
              >
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-3 h-3 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.3,
                    }}
                  />
                ))}
              </motion.div>
            </motion.div>

            <motion.section
              variants={sectionVariants}
              className="group"
            >
              <motion.div
                className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-2xl p-8 relative overflow-hidden"
                whileHover={{ 
                  scale: 1.02,
                  backgroundColor: "rgba(59, 130, 246, 0.08)"
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-300/20 to-cyan-300/20 rounded-full -translate-y-16 translate-x-16"
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
                <motion.h2
                  className="text-2xl md:text-3xl font-semibold text-blue-600 mb-4 flex items-center"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.span
                    className="mr-3 text-3xl"
                    animate={{
                      rotate: [0, 10, -10, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    📚
                  </motion.span>
                  Sejarah
                </motion.h2>
                <motion.p
                  className="text-gray-700 leading-relaxed text-lg relative z-10"
                  initial={{ opacity: 0.8 }}
                  whileHover={{ opacity: 1 }}
                >
                  {data.sejarah}
                </motion.p>
              </motion.div>
            </motion.section>

            <motion.section
              variants={sectionVariants}
              className="group"
            >
              <motion.div
                className="bg-gradient-to-r from-cyan-500/10 to-teal-500/10 rounded-2xl p-8 relative overflow-hidden"
                whileHover={{ 
                  scale: 1.02,
                  backgroundColor: "rgba(6, 182, 212, 0.08)"
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-cyan-300/20 to-teal-300/20 rounded-full translate-y-20 -translate-x-20"
                  animate={{
                    rotate: -360,
                  }}
                  transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
                <motion.h2
                  className="text-2xl md:text-3xl font-semibold text-cyan-600 mb-4 flex items-center"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.span
                    className="mr-3 text-3xl"
                    animate={{
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    👁️
                  </motion.span>
                  Visi
                </motion.h2>
                <motion.p
                  className="text-gray-700 leading-relaxed text-lg relative z-10"
                  initial={{ opacity: 0.8 }}
                  whileHover={{ opacity: 1 }}
                >
                  {data.visi}
                </motion.p>
              </motion.div>
            </motion.section>

            <motion.section
              variants={sectionVariants}
              className="group"
            >
              <motion.div
                className="bg-gradient-to-r from-teal-500/10 to-blue-500/10 rounded-2xl p-8 relative overflow-hidden"
                whileHover={{ 
                  scale: 1.02,
                  backgroundColor: "rgba(20, 184, 166, 0.08)"
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="absolute top-1/2 right-0 w-36 h-36 bg-gradient-to-bl from-teal-300/20 to-blue-300/20 rounded-full translate-x-18 -translate-y-1/2"
                  animate={{
                    rotate: 360,
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    rotate: {
                      duration: 30,
                      repeat: Infinity,
                      ease: "linear",
                    },
                    scale: {
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                  }}
                />
                <motion.h2
                  className="text-2xl md:text-3xl font-semibold text-teal-600 mb-4 flex items-center"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.span
                    className="mr-3 text-3xl"
                    animate={{
                      y: [0, -5, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    🎯
                  </motion.span>
                  Misi
                </motion.h2>
                <motion.p
                  className="text-gray-700 leading-relaxed text-lg whitespace-pre-line relative z-10"
                  initial={{ opacity: 0.8 }}
                  whileHover={{ opacity: 1 }}
                >
                  {data.misi}
                </motion.p>
              </motion.div>
            </motion.section>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}