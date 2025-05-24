import contactData from "../JSON/contact.json";
import { useState } from "react";

export default function ContactUs() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Terima kasih, ${form.name}! Pesan Anda telah terkirim.`);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="max-w-4xl mx-auto p-10 bg-white rounded-2xl shadow-xl">
      <h1 className="text-4xl font-extrabold mb-10 text-center text-blue-700">
        Contact Us
      </h1>

      <div className="mb-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        <div className="p-5 bg-blue-50 rounded-lg shadow-inner">
          <h3 className="font-semibold text-blue-700 mb-2">Phone</h3>
          <p className="text-gray-800">{contactData.phone}</p>
        </div>
        <div className="p-5 bg-blue-50 rounded-lg shadow-inner">
          <h3 className="font-semibold text-blue-700 mb-2">Email</h3>
          <p className="text-gray-800">{contactData.email}</p>
        </div>
        <div className="p-5 bg-blue-50 rounded-lg shadow-inner">
          <h3 className="font-semibold text-blue-700 mb-2">Address</h3>
          <p className="text-gray-800">{contactData.address}</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        <div>
          <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
            Nama
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-4 focus:ring-blue-400 transition"
            placeholder="Masukkan nama Anda"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-4 focus:ring-blue-400 transition"
            placeholder="Masukkan email Anda"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-gray-700 font-semibold mb-2"
          >
            Pesan
          </label>
          <textarea
            id="message"
            name="message"
            rows="6"
            value={form.message}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-4 focus:ring-blue-400 transition resize-none"
            placeholder="Tulis pesan Anda di sini"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition duration-300"
        >
          Kirim Pesan
        </button>
      </form>
    </div>
  );
}
