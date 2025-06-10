import { Link } from "react-router-dom";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Contoh validasi login (dummy)
    if (email === "admin@example.com" && password === "password123") {
      // Redirect ke halaman eksternal setelah login sukses
      window.location.href = "https://reservasi-kolam-renang.vercel.app/";
    } else {
      alert("Login gagal. Email atau password salah.");
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold text-blue-700 mb-6 text-center">
        Welcome Back 👋
      </h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-5">
          <label className="block text-sm font-medium text-blue-700 mb-1">
            Email Address
          </label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 bg-blue-50 border border-blue-300 rounded-lg shadow-sm
              placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-500"
            placeholder="you@example.com"
          />
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium text-blue-700 mb-1">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 bg-blue-50 border border-blue-300 rounded-lg shadow-sm
              placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-500"
            placeholder="********"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4
            rounded-lg transition duration-300"
        >
          Login
        </button>
      </form>

      <div className="mt-4 text-center">
        <Link to="/forgot" className="text-sm text-blue-500 hover:text-blue-700">
          <button>Forgot Password?</button>
        </Link>
      </div>

      <div className="mt-2 text-center">
        <p className="text-sm text-gray-600">
          Don't have an account?{" "}
          <Link to="/register">
            <button className="text-blue-500 hover:text-blue-700">Sign Up</button>
          </Link>
        </p>
      </div>
    </div>
  );
}
