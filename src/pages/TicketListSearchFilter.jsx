import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, Filter } from "lucide-react";
import ticketjson from "../JSON/tickets.json";
import { Info } from "lucide-react";

export default function TicketListSearchFilter() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("All");
  const navigate = useNavigate();

  const filteredTickets = ticketjson
    .filter((ticket) => {
      const matchesSearch = ticket.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesFilter =
        filter === "All" ||
        (filter === "Weekday" && ticket.title.includes("Weekday")) ||
        (filter === "Weekend" && ticket.title.includes("Weekend"));
      return matchesSearch && matchesFilter;
    })
    .slice(0, 6); // Limit to 6 tickets for cleaner display

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-4">
            Paket Tiket
            <span className="relative inline-block ml-2">
              Azguh
              <span className="absolute -bottom-2 left-0 w-full h-3 bg-kuning -z-10 rounded"></span>
            </span>
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Pilih paket tiket yang sesuai dengan kebutuhan liburan Anda
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-12 animate-[slideInUp_0.6s_ease-out_0.2s_both]">
          <div className="relative w-full md:w-1/3">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Cari paket tiket..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-3 rounded-xl border border-gray-200 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm hover:shadow-md transition-all duration-200"
            />
          </div>

          <div className="relative w-full md:w-1/4">
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="pl-10 pr-4 py-3 rounded-xl border border-gray-200 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm hover:shadow-md transition-all duration-200 appearance-none bg-white"
            >
              <option value="All">Semua Paket</option>
              <option value="Weekday">Weekday</option>
              <option value="Weekend">Weekend</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTickets.length > 0 ? (
            filteredTickets.map((ticket, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden transition-all duration-300 hover:scale-105 animate-[fadeInUp_0.6s_ease-out] border border-gray-100"
                style={{
                  animationDelay: `${index * 0.1}s`,
                  animationFillMode: "both",
                }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={ticket.image}
                    alt={ticket.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-700 transition-colors duration-200">
                    {ticket.title}
                  </h3>

                  <div className="space-y-2 text-sm text-gray-600">
                    <p className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      {ticket.ticketInfo}
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      <span className="font-medium">Berlaku:</span>{" "}
                      {ticket.validity}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div>
                      <span className="text-2xl font-bold text-blue-700">
                        {ticket.price}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      {/* Tombol Detail */}
                      <button
                        onClick={() =>
                          navigate(`/tiket/${ticket.id_tiket}`)
                        }
                        className="p-2 rounded-full hover:bg-gray-100 transition"
                        title="Lihat detail tiket"
                      >
                        <Info className="w-5 h-5 text-gray-600 hover:text-blue-600" />
                      </button>

                      {/* Tombol Pesan */}
                      <button
                        onClick={() =>
                          navigate("/order", { state: { ticket } })
                        }
                        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transform hover:scale-105 transition-all duration-200 shadow-md hover:shadow-lg font-medium"
                      >
                        Pesan
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <div className="text-gray-400 text-6xl mb-4">🎫</div>
              <p className="text-gray-500 text-lg">
                Tidak ada tiket yang ditemukan
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
