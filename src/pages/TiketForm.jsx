import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function TicketForm() {
  const location = useLocation();
  const navigate = useNavigate();
  const { ticket } = location.state || {};

  const [jumlah, setJumlah] = useState(1);
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [tanggal, setTanggal] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const button = document.getElementById("cally1");
    if (button) {
      const handler = (e) => {
        setTanggal(e.target.value);
        button.innerText = e.target.value;
      };

      const calendar = document.querySelector("calendar-date");
      if (calendar) {
        calendar.addEventListener("change", handler);
      }

      return () => {
        if (calendar) {
          calendar.removeEventListener("change", handler);
        }
      };
    }
  }, []);

  if (!ticket) {
    return <p className="text-center text-red-500 mt-10">Tiket tidak ditemukan.</p>;
  }

  const hargaNumerik = parseInt(ticket.price.replace(/\D/g, ""), 10);
  const totalHarga = jumlah * hargaNumerik;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nama || !email || jumlah < 1 || !tanggal) {
      setError("Semua field harus diisi dengan benar!");
      return;
    }

    alert(`Terima kasih, ${nama}!\nTanggal: ${tanggal}\nTotal harga: Rp ${totalHarga.toLocaleString("id-ID")}`);
    navigate("/");
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
          <button
            popoverTarget="cally-popover1"
            className="input input-bordered w-full text-left"
            id="cally1"
            style={{ anchorName: "--cally1" }}
            type="button"
          >
            {tanggal || "Pick a date"}
          </button>
          <div
            popover
            id="cally-popover1"
            className="dropdown bg-base-100 rounded-box shadow-lg z-50"
            style={{ positionAnchor: "--cally1" }}
          >
            <calendar-date class="cally">
              <svg aria-label="Previous" className="fill-current size-4" slot="previous" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.75 19.5 8.25 12l7.5-7.5" /></svg>
              <svg aria-label="Next" className="fill-current size-4" slot="next" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="m8.25 4.5 7.5 7.5-7.5 7.5" /></svg>
              <calendar-month></calendar-month>
            </calendar-date>
          </div>
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
