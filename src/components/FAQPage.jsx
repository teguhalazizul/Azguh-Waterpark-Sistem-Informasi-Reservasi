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
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95 
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-45 py-50 px-4">
      <motion.div
        className="max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Floating decorative elements */}
        <motion.div
          className="absolute top-20 right-20 w-24 h-24 bg-blue-200 rounded-full opacity-10"
          animate={{
            y: [0, -30, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-32 left-16 w-20 h-20 bg-purple-200 rounded-full opacity-10"
          animate={{
            y: [0, 20, 0],
            rotate: [0, -180, -360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />

        <motion.div
          className="bg-white/90 rounded-3xl shadow-2xl backdrop-blur-sm border border-white/30 overflow-hidden relative"
          whileHover={{ 
            scale: 1.01,
            boxShadow: "0 30px 60px -12px rgba(0, 0, 0, 0.1)"
          }}
          transition={{ duration: 0.3 }}
        >
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-indigo-600/5 to-purple-600/5 pointer-events-none" />
          
          <div className="relative p-8 md:p-12">
            <motion.div
              className="text-center mb-12"
              variants={titleVariants}
            >
              <motion.h1
                className="text-4xl md:text-5xl font-extrabold mb-6 relative"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  FAQ - Pertanyaan Umum
                </span>
                <motion.div
                  className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: 128 }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
              </motion.h1>

              <motion.div
                className="flex justify-center items-center space-x-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
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
                  }}
                >
                  ❓
                </motion.span>
                <span className="text-gray-600 text-lg">Temukan jawaban untuk pertanyaan Anda</span>
                <motion.span
                  className="text-2xl"
                  animate={{
                    rotate: [0, -10, 10, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                >
                  💡
                </motion.span>
              </motion.div>
            </motion.div>

            <motion.div className="space-y-6">
              {faqData.map((item) => (
                <motion.div
                  key={item.id}
                  variants={itemVariants}
                  className="group"
                >
                  <motion.div
                    className="border-2 border-gray-200 rounded-2xl bg-gradient-to-r from-white to-gray-50 overflow-hidden relative cursor-pointer"
                    whileHover={{ 
                      scale: 1.02,
                      borderColor: "#3B82F6",
                      boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.1)"
                    }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                    onClick={() => toggleItem(item.id)}
                  >
                    {/* Decorative background gradient */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100"
                      transition={{ duration: 0.3 }}
                    />
                    
                    <div className="relative p-6">
                      <motion.div
                        className="flex items-center justify-between"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <h3 className="text-lg md:text-xl font-semibold text-gray-900 flex items-center flex-1">
                          <motion.span
                            className="mr-4 text-2xl"
                            animate={{
                              rotate: expandedItems.has(item.id) ? 180 : 0,
                            }}
                            transition={{ duration: 0.3 }}
                          >
                            {expandedItems.has(item.id) ? "📖" : "📝"}
                          </motion.span>
                          {item.question}
                        </h3>
                        <motion.div
                          className="ml-4 flex-shrink-0"
                          animate={{
                            rotate: expandedItems.has(item.id) ? 180 : 0,
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          <svg
                            className="w-6 h-6 text-blue-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </motion.div>
                      </motion.div>

                      <AnimatePresence>
                        {expandedItems.has(item.id) && (
                          <motion.div
                            initial={{ 
                              opacity: 0, 
                              height: 0,
                              y: -10 
                            }}
                            animate={{ 
                              opacity: 1, 
                              height: "auto",
                              y: 0 
                            }}
                            exit={{ 
                              opacity: 0, 
                              height: 0,
                              y: -10 
                            }}
                            transition={{ 
                              duration: 0.4,
                              ease: [0.25, 0.1, 0.25, 1.0]
                            }}
                            className="mt-4 pt-4 border-t border-gray-200"
                          >
                            <motion.div
                              className="bg-gradient-to-r from-blue-50/50 to-indigo-50/50 rounded-xl p-4 relative overflow-hidden"
                              initial={{ opacity: 0, scale: 0.95 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 0.1, duration: 0.3 }}
                            >
                              <motion.div
                                className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-200/20 to-indigo-200/20 rounded-full -translate-y-10 translate-x-10"
                                animate={{
                                  rotate: 360,
                                }}
                                transition={{
                                  duration: 15,
                                  repeat: Infinity,
                                  ease: "linear",
                                }}
                              />
                              <p className="text-gray-700 leading-relaxed relative z-10">
                                <motion.span
                                  className="inline-block mr-2 text-xl"
                                  animate={{
                                    scale: [1, 1.2, 1],
                                  }}
                                  transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                  }}
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
              <motion.div
                className="inline-block bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 40px -10px rgba(59, 130, 246, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <motion.span
                  className="flex items-center space-x-2"
                  animate={{
                    x: [0, 5, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <span>Masih ada pertanyaan?</span>
                  <span className="text-xl">📞</span>
                </motion.span>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}