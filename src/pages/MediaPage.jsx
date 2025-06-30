import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { mediaAPI } from "../api/mediaAPI";
import Loading from "../components/Loading";
import Error from "../components/Error";
import EmptyState from "../components/EmptyState";

export default function MediaPage() {
  const [media, setMedia] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);

  useEffect(() => {
    mediaAPI
      .fetchAll()
      .then(setMedia)
      .catch(setErr)
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <Loading />;
  if (err) return <Error message={err.message} />;
  if (media.length === 0)
    return <EmptyState message="Belum ada media yang ditambahkan." />;

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <motion.div
      className="max-w-6xl mx-auto px-6 py-10 space-y-10"
      initial="hidden"
      animate="visible"
      variants={container}
    >
      <motion.h1
        className="text-3xl font-bold text-center text-gray-800 border-b pb-4"
        variants={item}
      >
        📸 Galeri Media
      </motion.h1>

      {/* Foto */}
      <motion.section variants={item}>
        <h2 className="text-2xl font-semibold text-green-600 mb-4">📷 Foto</h2>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
          variants={container}
        >
          {media
            .filter((m) => m.tipe === "foto")
            .map((itemData) => (
              <motion.div
                key={itemData.id}
                className="bg-white rounded-xl shadow transition duration-300 overflow-hidden"
                variants={item}
              >
                <img
                  src={itemData.url}
                  alt={itemData.judul}
                  className="w-full h-48 object-cover"
                />
                <div className="p-3 text-center">
                  <p className="text-gray-700 text-sm font-medium">
                    {itemData.judul}
                  </p>
                  <p className="text-gray-500 text-xs">{itemData.deskripsi}</p>
                </div>
              </motion.div>
            ))}
        </motion.div>
      </motion.section>

      {/* Video */}
      <motion.section variants={item}>
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">🎥 Video</h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={container}
        >
          {media
            .filter((m) => m.tipe === "video")
            .map((itemData) => (
              <motion.div
                key={itemData.id}
                className="bg-white rounded-xl shadow transition duration-300 overflow-hidden"
                variants={item}
              >
                <div className="aspect-video w-full bg-black">
                  <video
                    controls
                    preload="metadata"
                    className="w-full h-full object-contain"
                  >
                    <source src={itemData.url} type="video/mp4" />
                    Browser Anda tidak mendukung tag video.
                  </video>
                </div>
                <div className="p-3 text-center">
                  <p className="text-gray-700 text-sm font-medium">
                    {itemData.judul}
                  </p>
                  <p className="text-gray-500 text-xs">
                    {itemData.deskripsi}
                  </p>
                </div>
              </motion.div>
            ))}
        </motion.div>
      </motion.section>
    </motion.div>
  );
}
