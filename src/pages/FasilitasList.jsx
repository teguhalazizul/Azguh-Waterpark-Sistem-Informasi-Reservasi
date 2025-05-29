import { Link } from 'react-router-dom';
import fasilitasData from "../JSON/fasilitas.json";

export default function FasilitasList() {
  return (
    <div className="min-h-screen bg-gray-50 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-16 2xl:px-20 py-8 max-w-screen-2xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Fasilitas di Azguh Waterpark</h1>

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {fasilitasData.map((item) => (
          <Link
            key={item.id}
            to={`/fasilitas/${item.id}`}
            className="border rounded-2xl shadow-md bg-white hover:shadow-xl transition duration-300 overflow-hidden block"
          >
            <img
              src={item.gambar}
              alt={item.nama}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800">{item.nama}</h2>
              <p className="text-sm text-gray-600 mt-2">{item.deskripsi}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
