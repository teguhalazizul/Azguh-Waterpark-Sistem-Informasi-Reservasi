import { Link } from 'react-router-dom';
import jobs from '../JSON/careers.json';
import { motion } from 'framer-motion';

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: i * 0.2,
      ease: 'easeOut',
    },
  }),
};

export default function JobList() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#EAF6FF] via-[#D6EDFF] to-[#B3DFFF] py-12 px-4 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-16 right-16 w-28 h-28 bg-[#4D9CFF] rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-32 left-16 w-24 h-24 bg-[#4D9CFF] rounded-full opacity-20 animate-bounce"></div>
      <div className="absolute top-1/3 right-1/3 w-20 h-20 bg-[#4D9CFF] rounded-full opacity-10 animate-ping"></div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 relative">
            <span className="bg-gradient-to-r from-[#4D9CFF] to-[#2563EB] bg-clip-text text-transparent">
              💼 Lowongan Kerja
            </span>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-[#4D9CFF] rounded-full"></div>
          </h1>
          <div className="flex justify-center space-x-2 mt-6">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-3 h-3 bg-[#4D9CFF] rounded-full animate-pulse"
                style={{ animationDelay: `${i * 0.3}s` }}
              ></div>
            ))}
          </div>
        </div>

        {/* Jobs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {jobs.map((job, index) => (
            <motion.div
              key={job.id}
              className="bg-white/90 backdrop-blur-sm border border-[#4D9CFF]/10 rounded-2xl overflow-hidden shadow-lg transition-all duration-500"
              variants={fadeUpVariant}
              initial="hidden"
              animate="visible"
              custom={index}
            >
              <div className="p-6 flex flex-col h-full relative z-10">
                {/* Job Title */}
                <div className="mb-4">
                  <h2 className="text-xl font-bold text-gray-900 mb-2">{job.title}</h2>
                  <div className="w-0 h-0.5 bg-[#4D9CFF]"></div>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                  {job.description}
                </p>

                {/* Requirements */}
                <div className="mb-6 flex-grow">
                  <p className="font-semibold text-gray-800 mb-3 flex items-center">
                    <span className="mr-2">✅</span>Kualifikasi:
                  </p>
                  <ul className="space-y-2">
                    {job.requirements.slice(0, 3).map((req, idx) => (
                      <li key={idx} className="text-sm text-gray-700 flex items-start">
                        <span className="mr-2 text-[#4D9CFF] font-bold">•</span>
                        <span>{req}</span>
                      </li>
                    ))}
                    {job.requirements.length > 3 && (
                      <li className="text-sm text-[#4D9CFF] font-medium">
                        +{job.requirements.length - 3} persyaratan lainnya
                      </li>
                    )}
                  </ul>
                </div>

                {/* Divider */}
                <hr className="border-dashed border-gray-300 my-4" />

                {/* Job Details */}
                <div className="text-sm text-gray-500 space-y-2 mb-6">
                  <p className="flex items-center">
                    <span className="mr-2">📍</span>
                    <span className="font-semibold text-gray-700">Lokasi:</span>
                    <span className="ml-1">{job.location}</span>
                  </p>
                  <p className="flex items-center">
                    <span className="mr-2">💼</span>
                    <span className="font-semibold text-gray-700">Tipe:</span>
                    <span className="ml-1">{job.type}</span>
                  </p>
                  <p className="text-xs text-gray-400 flex items-center">
                    <span className="mr-2">📅</span>
                    Diposting: {new Date(job.posted_at).toLocaleDateString('id-ID', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric',
                    })}
                  </p>
                </div>

                {/* Apply Button */}
                <Link
                  to={`/jobs/${job.id}`}
                  className="mt-auto block text-center bg-[#4D9CFF] text-white font-semibold py-3 rounded-xl transition-all duration-300 shadow-md"
                >
                  <span className="flex items-center justify-center">
                    <span className="mr-2">🚀</span>Lamar Sekarang
                  </span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
