import jobs from '../JSON/careers.json';

export default function JobList() {
  return (
    <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {jobs.map((job) => (
        <div
          key={job.id}
          className="border border-gray-200 p-6 rounded-2xl bg-white flex flex-col justify-between transition-transform hover:shadow-lg hover:-translate-y-1"
        >
          {/* Job Title */}
          <h2 className="text-xl font-bold text-gray-900 mb-2">{job.title}</h2>

          {/* Description */}
          <p className="text-sm text-gray-600 mb-6">{job.description}</p>

          {/* Requirements */}
          <div className="mb-6">
            <p className="font-semibold text-gray-800 mb-2">Kualifikasi:</p>
            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
              {job.requirements.map((req, idx) => (
                <li key={idx}>{req}</li>
              ))}
            </ul>
          </div>

          {/* Divider */}
          <hr className="border-dashed border-gray-300 my-4" />

          {/* Location, Type, and Posted Date */}
          <div className="text-sm text-gray-500 space-y-1 mb-6">
            <p><span className="font-semibold text-gray-700">Lokasi:</span> {job.location}</p>
            <p><span className="font-semibold text-gray-700">Tipe:</span> {job.type}</p>
            <p className="text-xs text-gray-400">Diposting pada: {new Date(job.posted_at).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
          </div>

          {/* Apply Button */}
          <button
            className="mt-auto w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition-colors"
          >
            Lamar Sekarang
          </button>
        </div>
      ))}
    </div>
  );
}
