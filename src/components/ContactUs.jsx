import contactData from "../JSON/contact.json";
import { useState } from "react";
import { motion } from "framer-motion";

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

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <motion.div
      className="max-w-4xl mx-auto p-10 bg-white rounded-2xl shadow-xl"
      initial="hidden"
      animate="visible"
      variants={fadeUp}
    >
      <motion.h1
        className="text-4xl font-extrabold mb-10 text-center text-blue-700"
        variants={fadeUp}
        custom={1}
      >
        Contact Us
      </motion.h1>

      <motion.div
        className="mb-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left"
        initial="hidden"
        animate="visible"
      >
        {[contactData.phone, contactData.email, contactData.address].map((item, index) => (
          <motion.div
            key={index}
            className="p-5 bg-blue-50 rounded-lg shadow-inner"
            variants={fadeUp}
            custom={index + 2}
          >
            <h3 className="font-semibold text-blue-700 mb-2">
              {["Phone", "Email", "Address"][index]}
            </h3>
            <p className="text-gray-800">{item}</p>
          </motion.div>
        ))}
      </motion.div>

      <motion.form
        onSubmit={handleSubmit}
        className="space-y-8"
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={fadeUp} custom={5}>
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
        </motion.div>

        <motion.div variants={fadeUp} custom={6}>
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
        </motion.div>

        <motion.div variants={fadeUp} custom={7}>
          <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
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
        </motion.div>

        <motion.button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition duration-300"
          variants={fadeUp}
          custom={8}
        >
          Kirim Pesan
        </motion.button>
      </motion.form>
    </motion.div>
  );
}
