import { Link } from "react-router-dom";

export default function Herosection() {
  return (
    <section className="bg-biru text-white py-16 px-8 md:px-24 font-sans">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            Nikmati Keseruan <br /> di Azguh Waterpark Pekanbaru
          </h1>
          <p className="mb-6 text-lg">
            Temukan berbagai wahana air seru untuk semua umur. Pesan tiketmu
            sekarang dan rasakan petualangan tak terlupakan!
          </p>
          <Link to="/tiket">
            <button className="mt-6 bg-birumuda hover:bg-kuning text-white hover:text-black px-6 py-3 rounded-lg transition-all">
              Pesan Tiket →
            </button>
          </Link>
        </div>
        <div>
          <img
            src="img/gurita.png"
            alt="Hero Waterpark"
            className="w-full max-w-xl mx-auto"
          />
        </div>
      </div>
    </section>
  );
}
