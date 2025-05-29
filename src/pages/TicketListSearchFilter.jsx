import { Link } from "react-router-dom";
import ticketData from "../JSON/tickets.json";
import { useState } from "react";

export default function TicketListSearchFilter() {
  const [dataForm, setDataForm] = useState({
    searchTerm: "",
    jenisTiket: "",
    kota: "",
  });

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setDataForm({
      ...dataForm,
      [name]: value,
    });
  };

  const _searchTerm = dataForm.searchTerm.toLowerCase();

  const filteredTickets = ticketData.filter((ticket) => {
    const matchesSearch =
      ticket.nama_kolam.toLowerCase().includes(_searchTerm) ||
      ticket.lokasi.kota.toLowerCase().includes(_searchTerm);

    const matchesJenisTiket = dataForm.jenisTiket
      ? ticket.jenis_tiket === dataForm.jenisTiket
      : true;

    const matchesKota = dataForm.kota
      ? ticket.lokasi.kota === dataForm.kota
      : true;

    return matchesSearch && matchesJenisTiket && matchesKota;
  });

  const allJenisTiket = [...new Set(ticketData.map((t) => t.jenis_tiket))];
  const allKota = [...new Set(ticketData.map((t) => t.lokasi.kota))];

  return (
    <div className="min-h-screen bg-gray-50 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-16 2xl:px-20 py-8 max-w-screen-2xl mx-auto">
      {/* Filter Panel */}
      <div className="grid md:grid-cols-3 gap-4 mb-8">
        <input
          type="text"
          name="searchTerm"
          placeholder="🔍 Cari kolam atau kota..."
          value={dataForm.searchTerm}
          onChange={handleChange}
          className="p-3 border border-gray-300 rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <select
          name="jenisTiket"
          value={dataForm.jenisTiket}
          onChange={handleChange}
          className="p-3 border border-gray-300 rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="">🎟 Semua Jenis Tiket</option>
          {allJenisTiket.map((jenis, index) => (
            <option key={index} value={jenis}>
              {jenis}
            </option>
          ))}
        </select>
        <select
          name="kota"
          value={dataForm.kota}
          onChange={handleChange}
          className="p-3 border border-gray-300 rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="">🏙 Semua Kota</option>
          {allKota.map((kota, index) => (
            <option key={index} value={kota}>
              {kota}
            </option>
          ))}
        </select>
      </div>

      {/* Ticket Cards */}
      {/* Ticket Cards */}
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {filteredTickets.map((item) => (
          <Link to={`/tiket/${item.id_tiket}`} key={item.id_tiket}>
            <div className="border rounded-2xl shadow-md bg-white hover:shadow-xl transition duration-300 overflow-hidden">
              <img
                src={item.gambar}
                alt={item.nama_kolam}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800">
                  {item.nama_kolam}
                </h2>
                <p className="text-sm text-blue-500 font-medium mt-1">
                  {item.jenis_tiket} • Rp {item.harga.toLocaleString()}
                </p>
                <p className="text-sm text-gray-600 mt-1">
                  {item.lokasi.alamat}, {item.lokasi.kota}
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  <strong>Jam buka:</strong> {item.jadwal_buka.hari} (
                  {item.jadwal_buka.jam})
                </p>
                <div className="mt-3 text-sm">
                  <strong>Fasilitas:</strong>
                  <ul className="list-disc ml-5 mt-1 space-y-1">
                    {Object.entries(item.fasilitas).map(([key, val]) => (
                      <li key={key}>
                        {key.replace("_", " ")}:{" "}
                        <span
                          className={val ? "text-green-600" : "text-red-500"}
                        >
                          {val ? "✓" : "✗"}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Empty State */}
      {filteredTickets.length === 0 && (
        <div className="text-center text-gray-500 mt-10">
          Tidak ada tiket yang sesuai dengan pencarian atau filter.
        </div>
      )}
    </div>
  );
}
