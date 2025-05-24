export default function ErrorPage({ code, description, image }) {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row items-center justify-center bg-white px-8 py-16 gap-12">
      {/* Left Side */}
      <div className="flex flex-col items-start text-left max-w-lg">
        <h1 className="text-3xl md:text-4xl font-bold text-[#1E3A8A] mb-4">
          Oops, you still haven't found what you looking for?
        </h1>
        <p className="text-gray-500 text-base md:text-lg mb-8">
          {description || "The page you are looking for might have been removed, had its name changed, or is temporarily unavailable."}
        </p>
        <button
          onClick={() => (window.location.href = "/")}
          className="flex items-center gap-2 px-5 py-3 bg-[#2563EB] hover:bg-[#1D4ED8] text-white rounded-md shadow-md transition-all duration-300"
        >
          <span className="text-lg">&#8592;</span> {/* Left arrow */}
          <span>Back to Home Page</span>
        </button>
      </div>

      {/* Right Side */}
      <div className="flex-1 flex justify-center">
        <img
          src={image}
          alt={`Error ${code} Illustration`}
          className="w-full max-w-xl h-auto"
        />
      </div>
    </div>
  );
}
