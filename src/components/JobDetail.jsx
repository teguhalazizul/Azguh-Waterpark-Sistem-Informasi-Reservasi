import { useParams } from 'react-router-dom';
import { useState } from 'react';
import jobs from '../JSON/careers.json';

export default function JobDetail() {
  const { id } = useParams();
  const job = jobs.find((job) => job.id.toString() === id);

  const [formData, setFormData] = useState({
    nama: '',
    email: '',
    telepon: '',
    pesan: '',
  });

  if (!job) {
    return <p>Job dengan ID {id} tidak ditemukan.</p>;
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    // Disini bisa lakukan submit ke backend atau API
    alert(`Terima kasih, ${formData.nama}! Lamaran Anda untuk posisi ${job.title} telah diterima.`);
    // Reset form
    setFormData({ nama: '', email: '', telepon: '', pesan: '' });
  }

  return (
    <div className="max-w-3xl mx-auto p-8 bg-white rounded-xl shadow-md mt-10">
      <h1 className="text-3xl font-bold mb-4">{job.title}</h1>
      <p className="mb-6 text-gray-700">{job.description}</p>

      <div className="mb-6">
        <p className="font-semibold text-gray-800 mb-2">Kualifikasi:</p>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          {job.requirements.map((req, idx) => (
            <li key={idx}>{req}</li>
          ))}
        </ul>
      </div>

      <div className="text-sm text-gray-600 mb-8">
        <p><strong>Lokasi:</strong> {job.location}</p>
        <p><strong>Tipe:</strong> {job.type}</p>
        <p><small>Diposting pada: {new Date(job.posted_at).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}</small></p>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Form Pendaftaran</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium mb-1" htmlFor="nama">Nama Lengkap</label>
          <input
            type="text"
            id="nama"
            name="nama"
            value={formData.nama}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded px-3 py-2"
            placeholder="Masukkan nama lengkap"
          />
        </div>

        <div>
          <label className="block font-medium mb-1" htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded px-3 py-2"
            placeholder="Masukkan email"
          />
        </div>

        <div>
          <label className="block font-medium mb-1" htmlFor="telepon">Nomor Telepon</label>
          <input
            type="tel"
            id="telepon"
            name="telepon"
            value={formData.telepon}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded px-3 py-2"
            placeholder="Masukkan nomor telepon"
          />
        </div>

        <div>
          <label className="block font-medium mb-1" htmlFor="pesan">Pesan / Motivasi</label>
          <textarea
            id="pesan"
            name="pesan"
            value={formData.pesan}
            onChange={handleChange}
            rows="4"
            className="w-full border border-gray-300 rounded px-3 py-2"
            placeholder="Tulis pesan atau motivasi Anda"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded transition-colors"
        >
          Kirim Lamaran
        </button>
      </form>
    </div>
  );
}
