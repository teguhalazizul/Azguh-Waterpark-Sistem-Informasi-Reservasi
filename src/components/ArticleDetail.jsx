import { useParams } from "react-router-dom";
import ticketData from "../JSON/tickets.json";

export default function TicketDetail() {
  const { id } = useParams();
  const ticket = ticketData.find((t) => t.id_tiket.toString() === id);

  if (!ticket) {
    return <div className="p-8 text-center text-red-600">Tiket tidak ditemukan.</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <img
        src={ticket.gambar}
        alt={ticket.nama_kolam}
        className="w-full h-64 object-cover rounded-xl mb-6"
      />

      <h1 className="text-3xl font-bold text-gray-900 mb-2">{ticket.nama_kolam}</h1>

      <p className="text-blue-600 text-lg mb-2">
        {ticket.jenis_tiket} • Rp {ticket.harga.toLocaleString()}
      </p>

      <p className="text-sm text-gray-500 mb-6">
        {ticket.lokasi.alamat}, {ticket.lokasi.kota}
      </p>

      <div className="text-gray-800 leading-relaxed text-justify space-y-4">
        <p>
          Rencanakan kunjunganmu ke <strong>{ticket.nama_kolam}</strong> dan nikmati pengalaman seru bermain air
          di lokasi yang nyaman dan strategis. Tempat ini cocok untuk keluarga, anak-anak, dan juga acara
          komunitas.
        </p>
        <p>
          Kolam ini menyediakan berbagai fasilitas seperti seluncuran air, kolam arus, serta area makan yang
          bersih. Kamu bisa datang saat <strong>{ticket.jadwal_buka.hari}</strong> pukul <strong>{ticket.jadwal_buka.jam}</strong>.
        </p>
        <p>
          Jangan lupa membawa pakaian ganti dan perlengkapan mandi. Gunakan sunblock untuk perlindungan dari
          sinar matahari. Tiket tersedia dengan harga terjangkau dan pelayanan yang ramah.
        </p>

        <div>
          <strong className="block mb-2">Fasilitas yang Tersedia:</strong>
          <ul className="list-disc ml-6">
            {Object.entries(ticket.fasilitas).map(([key, val]) => (
              <li key={key}>
                {key.replace("_", " ")}:{" "}
                <span className={val ? "text-green-600" : "text-red-500"}>
                  {val ? "✓ Tersedia" : "✗ Tidak Tersedia"}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
