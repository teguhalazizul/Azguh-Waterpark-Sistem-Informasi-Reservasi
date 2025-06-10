import { useEffect, useState } from "react";
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

  return (
    <div className="max-w-6xl mx-auto px-6 py-10 space-y-10">
      <h1 className="text-3xl font-bold text-center text-gray-800 border-b pb-4">
        📸 Galeri Media
      </h1>

      {/* Foto */}
      <section>
        <h2 className="text-2xl font-semibold text-green-600 mb-4">📷 Foto</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {media
            .filter((m) => m.jenis === "foto")
            .map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl shadow hover:shadow-lg transition duration-300 overflow-hidden"
              >
                <img
                  src={item.url}
                  alt={item.judul}
                  className="w-full h-48 object-cover"
                />
                <div className="p-3 text-center">
                  <p className="text-gray-700 text-sm font-medium">
                    {item.judul}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </section>

      {/* Video - kalau nanti aktif */}
      <section>
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">🎥 Video</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {media
            .filter((m) => m.jenis === "video")
            .map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl shadow hover:shadow-lg transition duration-300 overflow-hidden"
              >
                <video controls className="w-full rounded-t">
                  <source src={item.url} type="video/mp4" />
                  Browser Anda tidak mendukung tag video.
                </video>
                <div className="p-3 text-center">
                  <p className="text-gray-700 text-sm font-medium">
                    {item.judul}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </section>
    </div>
  );
}
