import React, { useState } from "react";
import ticketjson from "../JSON/tickets.json";

const TicketCard = ({ ticket }) => (
  <div className="bg-white rounded-xl shadow-md overflow-hidden max-w-md mx-auto mb-6">
    <img src={ticket.image} alt={ticket.title} className="w-full h-auto" />
    <div className="p-4">
      <h2 className="text-xl font-bold text-gray-800 mb-2">{ticket.title}</h2>
      <p className="text-sm text-gray-600 mb-1">{ticket.ticketInfo}</p>
      <p className="text-sm text-gray-500 mb-1">
        <span className="font-semibold">Validity</span>: {ticket.validity}
      </p>
      <p className="text-sm text-gray-500">
        <span className="font-semibold">Price</span>: {ticket.price}
      </p>
    </div>
  </div>
);

export default function TiketList() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("All");

  const filteredTickets = ticketjson.filter(ticket => {
    const matchesSearch = ticket.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter =
      filter === "All" ||
      (filter === "Weekday" && ticket.title.includes("Weekday")) ||
      (filter === "Weekend" && ticket.title.includes("Weekend"));
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="bg-gray-100 min-h-screen py-10 px-4">
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">
        Azguh Ticket Packages
      </h1>

      <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-10">
        <input
          type="text"
          placeholder="Search ticket..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          className="px-4 py-2 rounded-lg border border-gray-300 w-full md:w-1/3"
        />
        <select
          value={filter}
          onChange={e => setFilter(e.target.value)}
          className="px-4 py-2 rounded-lg border border-gray-300 w-full md:w-1/4"
        >
          <option value="All">All</option>
          <option value="Weekday">Weekday</option>
          <option value="Weekend">Weekend</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTickets.length > 0 ? (
          filteredTickets.map((ticket, index) => <TicketCard key={index} ticket={ticket} />)
        ) : (
          <p className="text-center text-gray-500 col-span-full">No tickets found.</p>
        )}
      </div>
    </div>
  );
}