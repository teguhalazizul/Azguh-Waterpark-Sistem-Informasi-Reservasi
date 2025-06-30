import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { teamAPI } from "../api/teamAPI";
import Loading from "../components/Loading";
import Error from "../components/Error";
import EmptyState from "../components/EmptyState";

export default function TeamPage() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);

  useEffect(() => {
    teamAPI
      .fetchAll()
      .then(setData)
      .catch(setErr)
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <Loading />;
  if (err) return <Error message={err.message} />;
  if (data.length === 0) return <EmptyState message="Tim belum tersedia." />;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-25"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header Section */}
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <h1 className="text-5xl font-extrabold text-gray-800 mb-4">
            Meet Our{" "}
            <span className="relative inline-block ml-2">
              Team
              <span className="absolute -bottom-2 left-0 w-full h-3 bg-kuning opacity-60 -z-10 rounded"></span>
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Tim profesional yang berdedikasi memberikan pengalaman terbaik untuk Anda
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-biru to-birumuda mx-auto mt-6 rounded-full"></div>
        </motion.div>

        {/* Team Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          {data.map((person, index) => (
            <motion.div
              key={person.id}
              className="group bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 p-8 text-center transform hover:-translate-y-2 border border-gray-100"
              variants={itemVariants}
            >
              {/* Profile Image */}
              <div className="relative mb-6">
                <div className="w-32 h-32 mx-auto relative">
                  <img
                    src={person.foto_url}
                    alt={person.nama}
                    className="w-full h-full rounded-full object-cover ring-4 ring-white shadow-lg group-hover:ring-birumuda transition-all duration-300"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-biru/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-r from-biru to-birumuda rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
              </div>

              {/* Name and Position */}
              <div className="space-y-2">
                <h2 className="text-xl font-bold text-gray-800 group-hover:text-biru transition-colors duration-300">
                  {person.nama}
                </h2>
                <p className="text-sm text-gray-600 font-medium px-4 py-2 bg-gray-50 rounded-full inline-block group-hover:bg-birumuda group-hover:text-white transition-all duration-300">
                  {person.jabatan}
                </p>
              </div>

              {/* Decorative Element */}
              <div className="mt-6 flex justify-center space-x-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-2 h-2 bg-biru rounded-full animate-pulse"></div>
                <div
                  className="w-2 h-2 bg-birumuda rounded-full animate-pulse"
                  style={{ animationDelay: "0.2s" }}
                ></div>
                <div
                  className="w-2 h-2 bg-kuning rounded-full animate-pulse"
                  style={{ animationDelay: "0.4s" }}
                ></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Decoration */}
        <motion.div className="text-center mt-16" variants={itemVariants}>
          <div className="inline-flex items-center space-x-2 text-gray-500">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-gray-300"></div>
            <span className="text-sm font-medium">Tim Azguh Waterpark</span>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-gray-300"></div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
