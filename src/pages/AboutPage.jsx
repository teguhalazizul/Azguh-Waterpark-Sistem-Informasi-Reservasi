import { useEffect, useState } from "react";
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

  return (
    <div className="max-w-3xl mx-auto px-6 py-10 bg-white shadow-lg rounded-2xl space-y-8">
      <h1 className="text-3xl font-bold text-center text-gray-800 border-b pb-4">
        Tentang Kami
      </h1>

      <section>
        <h2 className="text-xl font-semibold text-green-600 mb-2">Sejarah</h2>
        <p className="text-gray-700 leading-relaxed">{data.sejarah}</p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-green-600 mb-2">Visi</h2>
        <p className="text-gray-700 leading-relaxed">{data.visi}</p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-green-600 mb-2">Misi</h2>
        <p className="text-gray-700 leading-relaxed whitespace-pre-line">{data.misi}</p>
      </section>
    </div>
  );
}
