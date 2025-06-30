import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import faqData from "../JSON/faq.json";

export default function FAQPage() {
  const [expandedItems, setExpandedItems] = useState(new Set());

  const toggleItem = (id) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedItems(newExpanded);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1.0] },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
  <div className="min-h-screen bg-[#E6F2FF] py-20 px-4"> {/* Ganti background halaman */}
  <motion.div className="max-w-4xl mx-auto" variants={containerVariants} initial="hidden" animate="visible">
    
    {/* Elemen dekorasi mengambang */}
    <motion.div
      className="absolute top-20 right-20 w-24 h-24 bg-[#4D9CFF] rounded-full opacity-10"
      animate={{ y: [0, -30, 0], rotate: [0, 180, 360] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.div
      className="absolute bottom-32 left-16 w-20 h-20 bg-[#4D9CFF] rounded-full opacity-10"
      animate={{ y: [0, 20, 0], rotate: [0, -180, -360] }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
    />

    {/* Kontainer utama */}
    <motion.div
      className="bg-white/90 rounded-3xl shadow-2xl backdrop-blur-sm border border-white/30 overflow-hidden relative"
      transition={{ duration: 0.3 }}
    >
      {/* Overlay gradient biru muda */}
      <div className="absolute inset-0 bg-[#4D9CFF]/10 pointer-events-none" />

      <div className="relative p-8 md:p-12">
        {/* Judul halaman */}
        <motion.div className="text-center mb-12" variants={titleVariants}>
          <motion.h1 className="text-4xl md:text-5xl font-extrabold mb-6 relative">
            <span className="text-[#4D9CFF]">FAQ - Pertanyaan Umum</span>
            <motion.div
              className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-[#4D9CFF] rounded-full"
              initial={{ width: 0 }}
              animate={{ width: 128 }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </motion.h1>
        </motion.div>

        {/* Isi FAQ */}
        <motion.div className="space-y-6">
          {faqData.map((item) => (
            <motion.div key={item.id} variants={itemVariants} className="group">
              <motion.div
                className="border-2 border-[#4D9CFF]/40 rounded-2xl bg-white overflow-hidden relative cursor-pointer"
                onClick={() => toggleItem(item.id)}
              >
                <div className="relative p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg md:text-xl font-semibold text-gray-900 flex items-center flex-1">
                      <motion.span
                        className="mr-4 text-2xl"
                        animate={{ rotate: expandedItems.has(item.id) ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        {expandedItems.has(item.id) ? "📖" : "📝"}
                      </motion.span>
                      {item.question}
                    </h3>
                    <motion.div
                      className="ml-4 flex-shrink-0"
                      animate={{ rotate: expandedItems.has(item.id) ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <svg className="w-6 h-6 text-[#4D9CFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </motion.div>
                  </div>

                  <AnimatePresence>
                    {expandedItems.has(item.id) && (
                      <motion.div
                        initial={{ opacity: 0, height: 0, y: -10 }}
                        animate={{ opacity: 1, height: "auto", y: 0 }}
                        exit={{ opacity: 0, height: 0, y: -10 }}
                        transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1.0] }}
                        className="mt-4 pt-4 border-t border-gray-200"
                      >
                        <motion.div
                          className="bg-[#D9ECFF] rounded-xl p-4 relative overflow-hidden"
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.1, duration: 0.3 }}
                        >
                          <motion.div
                            className="absolute top-0 right-0 w-20 h-20 bg-[#4D9CFF]/20 rounded-full -translate-y-10 translate-x-10"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                          />
                          <p className="text-gray-700 leading-relaxed relative z-10">
                            <motion.span
                              className="inline-block mr-2 text-xl"
                              animate={{ scale: [1, 1.2, 1] }}
                              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            >
                              💬
                            </motion.span>
                            {item.answer}
                          </p>
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to action */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <div className="inline-block bg-[#4D9CFF] text-white px-8 py-4 rounded-2xl font-semibold shadow-lg">
            <div className="flex items-center space-x-2">
              <span>Masih ada pertanyaan?</span>
              <span className="text-xl">📞</span>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  </motion.div>
</div>
  );
}
