import React, { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Pikaday from "pikaday";

export default function TicketForm() {
  const myDatepicker = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();
  const { ticket } = location.state || {};
  const [jumlah, setJumlah] = useState(1);
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [tanggal, setTanggal] = useState(""); // Store selected date
  const [error, setError] = useState("");

  // Initialize Pikaday date picker
  useEffect(() => {
    const picker = new Pikaday({
      field: myDatepicker.current,
      format: "YYYY-MM-DD", // Format date
      onSelect: (date) => setTanggal(date.toLocaleDateString("id-ID")), // Update tanggal state when date is selected
    });

    return () => picker.destroy(); // Clean up on unmount
  }, []);

  if (!ticket) {
    return <p className="text-center text-red-500 mt-10">Tiket tidak ditemukan.</p>;
  }

  const hargaNumerik = parseInt(ticket.price.replace(/\D/g, ""), 10);
  const totalHarga = jumlah * hargaNumerik;

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validation check
    if (!nama || !email || jumlah < 1 || !tanggal || tanggal === "Pick a date") {
      setError("Semua field harus diisi dengan benar!");
      return;
    }

    alert(`Terima kasih, ${nama}!\nTanggal: ${tanggal}\nTotal harga: Rp ${totalHarga.toLocaleString("id-ID")}`);
    navigate("/"); // Redirect after submission
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-bold text-blue-700 mb-4">Form Pemesanan Tiket</h2>
      <p className="mb-2 font-semibold">Tiket: {ticket.title}</p>
      <p className="mb-4 text-gray-600">Harga per tiket: {ticket.price}</p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Nama Lengkap</label>
          <input
            type="text"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            placeholder="Type here"
            className="input input-bordered w-full"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Type here"
            className="input input-bordered w-full"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Jumlah Tiket</label>
          <input
            type="number"
            value={jumlah}
            onChange={(e) => setJumlah(parseInt(e.target.value))}
            min={1}
            placeholder="Type here"
            className="input input-bordered w-full"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Tanggal Pemesanan</label>
          <input
            type="text"
            className="input pika-single"
            defaultValue="Pick a date"
            ref={myDatepicker}
            readOnly // Prevent manual input
          />
        </div>

        <div className="font-semibold text-gray-700">
          Total Harga: <span className="text-green-600">Rp {totalHarga.toLocaleString("id-ID")}</span>
        </div>

        {error && <p className="text-red-500">{error}</p>}

        <button
          type="submit"
          className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600"
        >
          Kirim Pesanan
        </button>
      </form>
    </div>
  );
}
