import { useEffect, useState } from "react";
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

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-10 border-b pb-4">
        👨‍💼 Tim Kami
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {data.map((person) => (
          <div
            key={person.id}
            className="bg-white border rounded-2xl shadow hover:shadow-lg transition duration-300 p-6 text-center"
          >
            <img
              src={person.foto_url}
              alt={person.nama}
              className="w-24 h-24 rounded-full mx-auto mb-4 object-cover ring-2 ring-green-500"
            />
            <h2 className="text-lg font-semibold text-gray-800">
              {person.nama}
            </h2>
            <p className="text-sm text-gray-600">{person.jabatan}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
