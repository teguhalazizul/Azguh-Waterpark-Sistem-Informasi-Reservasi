import { useState } from "react";
import InputField from "./components/InputField";

export default function FormPesanTiket() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    ticketType: "",
    quantity: 1,
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    ticketType: "",
  });

  const ticketPrices = {
    anak: 50000,
    dewasa: 80000,
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: name === "quantity" ? Math.max(1, parseInt(value, 10)) : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let formErrors = { name: "", email: "", ticketType: "" };

    if (!formData.name) {
      formErrors.name = "Nama harus diisi.";
    }
    if (!formData.email) {
      formErrors.email = "Email harus diisi.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = "Email tidak valid.";
    }
    if (!formData.ticketType) {
      formErrors.ticketType = "Jenis tiket harus dipilih.";
    }

    setErrors(formErrors);

    if (!Object.values(formErrors).some((error) => error !== "")) {
      const totalPrice = formData.quantity * (ticketPrices[formData.ticketType] || 0);
      alert(`Tiket berhasil dipesan! Total harga: Rp ${totalPrice.toLocaleString()}`);
    }
  };

  const isFormValid = Object.values(errors).every((error) => error === "");
  const totalPrice = formData.quantity * (ticketPrices[formData.ticketType] || 0);

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4">Form Pemesanan Tiket Kolam Renang</h2>

      <InputField
        label="Nama"
        type="text"
        placeholder="Masukkan nama Anda"
        name="name"
        value={formData.name}
        onChange={handleChange}
        error={errors.name}
      />

      <InputField
        label="Email"
        type="email"
        placeholder="Masukkan email Anda"
        name="email"
        value={formData.email}
        onChange={handleChange}
        error={errors.email}
      />

      <div className="mb-4">
        <label className="block text-gray-700">Jenis Tiket</label>
        <select
          name="ticketType"
          className="w-full p-2 border border-gray-300 rounded"
          value={formData.ticketType}
          onChange={handleChange}
        >
          <option value="">Pilih Jenis Tiket</option>
          <option value="anak">Anak-anak - Rp 50.000</option>
          <option value="dewasa">Dewasa - Rp 80.000</option>
        </select>
        {errors.ticketType && <p className="text-red-500 text-sm">{errors.ticketType}</p>}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Jumlah Tiket</label>
        <input
          type="number"
          name="quantity"
          className="w-full p-2 border border-gray-300 rounded"
          value={formData.quantity}
          min="1"
          onChange={handleChange}
        />
      </div>

      <p className="text-lg font-bold">Total Harga: Rp {totalPrice.toLocaleString()}</p>

      <button
        onClick={handleSubmit}
        className={`w-full bg-blue-500 text-white p-2 rounded mt-4 ${!isFormValid ? "opacity-50 cursor-not-allowed" : ""}`}
        disabled={!isFormValid}
      >
        Pesan Tiket
      </button>
    </div>
  );
}
