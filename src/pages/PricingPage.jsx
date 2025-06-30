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
    hidden: { opacity: 0, y: 60, scale: 0.9 },
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
    <div className="min-h-screen bg-[#E6F3FF] py-12 px-4">
      <motion.div
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="text-center mb-16" variants={titleVariants}>
          <motion.h1 className="text-4xl md:text-5xl font-bold mb-6 relative">
            <motion.span className="text-6xl mr-4">💰</motion.span>
            <span className="text-[#4D9CFF]">Paket Harga</span>
            <motion.div
              className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-[#4D9CFF] rounded-full"
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
            <motion.div key={item.id} variants={cardVariants} className="group relative">
              <motion.div className="bg-white/90 rounded-3xl shadow-xl backdrop-blur-sm border border-white/30 overflow-hidden relative h-full">
                <div className="relative p-8 flex flex-col h-full">
                  <motion.div className="text-center mb-6">
                    <motion.h2 className="text-2xl md:text-3xl font-semibold text-[#4D9CFF] mb-4 flex items-center justify-center">
                      <motion.span className="mr-3 text-3xl">🎟️</motion.span>
                      {item.nama}
                    </motion.h2>

                    <motion.p className="text-3xl md:text-4xl font-bold text-[#4D9CFF] mb-2">
                      Rp{item.harga.toLocaleString("id-ID")}
                    </motion.p>
                    <motion.div
                      className="w-20 h-0.5 bg-[#4D9CFF] rounded-full mx-auto"
                      initial={{ width: 0 }}
                      animate={{ width: 80 }}
                      transition={{ duration: 0.8, delay: index * 0.2 + 0.5 }}
                    />
                  </motion.div>

                  <motion.div className="flex-1 bg-[#F0F8FF] rounded-2xl p-6 relative overflow-hidden">
                    <motion.div className="relative z-10">
                      <motion.div className="flex items-center mb-3">
                        <motion.span className="text-2xl mr-3">✨</motion.span>
                        <span className="font-semibold text-gray-800">Fitur Paket:</span>
                      </motion.div>
                      <motion.p className="text-gray-700 whitespace-pre-line leading-relaxed">
                        {item.fitur}
                      </motion.p>
                    </motion.div>
                  </motion.div>

                  <motion.div className="mt-6">
                    <motion.button
                      className="w-full bg-[#4D9CFF] text-white font-semibold py-4 px-6 rounded-2xl shadow-lg"
                    >
                      <span className="flex items-center justify-center">
                        <span className="mr-2 text-xl">🎫</span>
                        Pilih Paket Ini
                      </span>
                    </motion.button>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
        >
          <motion.div
            className="inline-block bg-[#4D9CFF] text-white px-10 py-5 rounded-3xl font-bold text-xl shadow-2xl"
          >
            <span className="flex items-center space-x-3">
              <span className="text-2xl">🎉</span>
              <span>Dapatkan Pengalaman Terbaik!</span>
              <span className="text-2xl">🌊</span>
            </span>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
