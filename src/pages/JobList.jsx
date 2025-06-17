import { Link } from 'react-router-dom';
import jobs from '../JSON/careers.json';

export default function JobList() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-indigo-50 py-12 px-4">
      {/* Decorative background elements */}
      <div className="absolute top-16 right-16 w-28 h-28 bg-green-200 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-32 left-16 w-24 h-24 bg-blue-200 rounded-full opacity-20 animate-bounce"></div>
      <div className="absolute top-1/3 right-1/3 w-20 h-20 bg-indigo-200 rounded-full opacity-20 animate-ping"></div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 relative">
            <span className="bg-gradient-to-r from-green-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
              💼 Lowongan Kerja
            </span>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-green-500 to-blue-500 rounded-full animate-fade-in" style={{ animationDelay: '0.8s' }}></div>
          </h1>
          <div className="flex justify-center space-x-2 mt-6">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-3 h-3 bg-gradient-to-r from-green-400 to-blue-400 rounded-full animate-pulse"
                style={{ animationDelay: `${i * 0.3}s` }}
              ></div>
            ))}
          </div>
        </div>

        {/* Jobs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {jobs.map((job, index) => (
            <div
              key={job.id}
              className="bg-white/80 backdrop-blur-sm border border-white/20 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group animate-fade-in relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-blue-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              
              <div className="p-6 flex flex-col h-full relative z-10">
                {/* Job Title */}
                <div className="mb-4">
                  <h2 className="text-xl font-bold text-gray-900 mb-2 transition-colors duration-300 group-hover:text-blue-600">
                    {job.title}
                  </h2>
                  <div className="w-0 h-0.5 bg-gradient-to-r from-green-500 to-blue-500 group-hover:w-16 transition-all duration-500"></div>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-600 mb-6 transition-colors duration-300 group-hover:text-gray-700 leading-relaxed">
                  {job.description}
                </p>

                {/* Requirements */}
                <div className="mb-6 flex-grow">
                  <p className="font-semibold text-gray-800 mb-3 flex items-center">
                    <span className="mr-2">✅</span>
                    Kualifikasi:
                  </p>
                  <ul className="space-y-2">
                    {job.requirements.slice(0, 3).map((req, idx) => (
                      <li key={idx} className="text-sm text-gray-700 flex items-start transition-colors duration-300 group-hover:text-gray-800">
                        <span className="mr-2 text-blue-500 font-bold">•</span>
                        <span>{req}</span>
                      </li>
                    ))}
                    {job.requirements.length > 3 && (
                      <li className="text-sm text-blue-600 font-medium">
                        +{job.requirements.length - 3} persyaratan lainnya
                      </li>
                    )}
                  </ul>
                </div>

                {/* Divider */}
                <hr className="border-dashed border-gray-300 my-4 transition-colors duration-300 group-hover:border-blue-300" />

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
                      year: 'numeric' 
                    })}
                  </p>
                </div>

                {/* Apply Button */}
                <Link
                  to={`/jobs/${job.id}`}
                  className="mt-auto block text-center bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white font-semibold py-3 rounded-xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg active:scale-[0.98] group-hover:shadow-xl"
                >
                  <span className="flex items-center justify-center">
                    <span className="mr-2">🚀</span>
                    Lamar Sekarang
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}