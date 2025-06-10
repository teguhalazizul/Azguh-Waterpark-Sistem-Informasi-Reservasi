import { useEffect, useState } from "react";
import { pricingAPI } from "../api/pricingAPI";
import Loading from "../components/Loading";
import Error from "../components/Error";
import EmptyState from "../components/EmptyState";

export default function PricingPage() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);

  useEffect(() => {
    pricingAPI
      .fetchAll()
      .then(setData)
      .catch(setErr)
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <Loading />;
  if (err) return <Error message={err.message} />;
  if (data.length === 0)
    return <EmptyState message="Tidak ada paket harga tersedia." />;

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-10 border-b pb-4">
        💰 Paket Harga
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((item) => (
          <div
            key={item.id}
            className="border rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-6 bg-white flex flex-col justify-between"
          >
            <h2 className="text-xl font-semibold text-green-600 mb-2">
              {item.nama}
            </h2>
            <p className="text-2xl font-bold text-blue-500 mb-4">
              Rp{item.harga.toLocaleString("id-ID")}
            </p>
            <p className="text-gray-700 whitespace-pre-line">{item.fitur}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
