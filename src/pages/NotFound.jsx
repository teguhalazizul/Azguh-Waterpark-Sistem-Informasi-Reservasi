export default function NotFound({ code = 404, description = "Oops! Halaman yang Anda cari tidak ditemukan.", image }) {
    return (
      <div className="relative min-h-screen flex flex-col items-center justify-center bg-white overflow-hidden px-4 text-center">
        {/* Background Shapes */}
        <div className="absolute top-0 left-0 w-[60%] h-[60%] rounded-br-full bg-[#6fffd6] opacity-30 -z-10"></div>
        <div className="absolute bottom-0 right-0 w-[60%] h-[60%] rounded-tl-full bg-[#6fffd6] opacity-30 -z-10"></div>
  
        {/* Code */}
        <h1 className="text-6xl md:text-7xl font-extrabold text-[#374151] mb-3 drop-shadow-lg">
          {code}
        </h1>
  
        {/* Description */}
        <p className="text-lg md:text-xl text-[#6b7280] mb-6 max-w-lg mx-auto">
          {description}
        </p>
  
        {/* Image */}
        {/* Opsional, jika kamu ingin menampilkan gambar untuk error 404, bisa digunakan */}
        {/* <img
          src={image || '/path-to-your-404-image.png'}
          alt={`Error ${code} Illustration`}
          className="w-64 md:w-80 lg:w-96 h-auto mb-6 animate-fade-in"
        /> */}
  
        {/* Button */}
        <button
  onClick={() => (window.location.href = "/")}
  className="px-6 py-3 rounded-full border-2 border-[#1D4ED8] text-[#1D4ED8] hover:bg-[#1D4ED8] hover:text-white transition-all duration-300 shadow-md font-semibold"
>
  Kembali ke Beranda
</button>

      </div>
    );
  }
  