import { useParams } from "react-router-dom";
import ticketData from "../JSON/tickets.json";

export default function TicketDetail() {
  const { id } = useParams();
  const ticket = ticketData.find((t) => t.id_tiket.toString() === id);

  if (!ticket) {
    return (
      <div className="p-10 text-center text-red-600 font-semibold">
        Tiket tidak ditemukan.
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-lg">
      {/* Gambar */}
      <img
        src={ticket.gambar}
        alt={ticket.nama_kolam}
        className="w-full h-64 object-cover rounded-lg mb-6"
      />

      {/* Nama & Harga */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold text-gray-800">{ticket.nama_kolam}</h1>
        <span className="text-blue-600 font-semibold text-xl">
          Rp {ticket.harga.toLocaleString()}
        </span>
      </div>

      {/* Deskripsi & Info Dasar */}
      <p className="text-gray-700 mb-4">
        Tiket jenis <strong>{ticket.jenis_tiket}</strong> tersedia untuk pengunjung
        yang ingin menikmati pengalaman bermain air di{" "}
        <strong>{ticket.nama_kolam}</strong>. Lokasinya berada di{" "}
        {ticket.lokasi.alamat}, <strong>{ticket.lokasi.kota}</strong>.
      </p>

      <p className="text-gray-600 text-sm mb-6">
        <strong>Jam buka:</strong> {ticket.jadwal_buka.hari} ({ticket.jadwal_buka.jam})
      </p>

      {/* Fasilitas */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-2">Fasilitas</h2>
        <ul className="list-disc ml-6 text-sm space-y-1">
          {Object.entries(ticket.fasilitas).map(([key, val]) => (
            <li key={key}>
              {key.replace("_", " ")}:{" "}
              <span className={val ? "text-green-600" : "text-red-500"}>
                {val ? "Tersedia" : "Tidak tersedia"}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Review */}
      <div className="border-t pt-4">
        <h2 className="text-lg font-semibold text-gray-800 mb-2">Ulasan Pengunjung</h2>
        {ticket.review?.length > 0 ? (
          <ul className="space-y-3">
            {ticket.review.map((rev, index) => (
              <li key={index} className="bg-gray-100 p-3 rounded-lg text-sm">
                <p className="font-semibold text-gray-700">{rev.nama}</p>
                <p className="text-gray-600">{rev.komentar}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500 text-sm">Belum ada ulasan untuk tiket ini.</p>
        )}
      </div>
    </div>
  );
}
