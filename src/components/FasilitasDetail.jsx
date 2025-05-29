import { useParams, useNavigate } from 'react-router-dom';
import fasilitasData from "../JSON/fasilitas.json";

export default function FasilitasDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const fasilitas = fasilitasData.find(f => f.id.toString() === id);

  if (!fasilitas) {
    return <p>Fasilitas dengan ID {id} tidak ditemukan.</p>;
  }

  // Cek jika nama fasilitas adalah 'Loker' atau 'Gazebo'
  const showReservasiButton = ['Loker', 'Gazebo'].includes(fasilitas.nama);

  function handleReservasi() {
    // Logika atau routing ke halaman reservasi bisa disesuaikan di sini
    alert(`Anda memilih fasilitas ${fasilitas.nama} untuk reservasi.`);
    // Contoh navigasi ke halaman reservasi
    // navigate('/reservasi'); // jika ada halaman reservasi terpisah
  }

  return (
    <div className="max-w-3xl mx-auto p-8 bg-white rounded-xl shadow-md mt-10">
      <img
        src={fasilitas.gambar}
        alt={fasilitas.nama}
        className="w-full h-64 object-cover rounded-lg mb-6"
      />
      <h1 className="text-3xl font-bold mb-4">{fasilitas.nama}</h1>
      <p className="text-gray-700 mb-6">{fasilitas.deskripsi}</p>

      {showReservasiButton && (
        <button
          onClick={handleReservasi}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
        >
          Reservasi Sekarang
        </button>
      )}
    </div>
  );
}
