import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion"; // Added for fade-in animation

const heroImages = [
  "https://wahoowaterworld.co.id/cms/lib/images/item/super-bowl-450x675.jpg",
  "https://wahoowaterworld.co.id/cms/lib/images/item/wave-pool-450x675-1.jpg",
  "https://wahoowaterworld.co.id/cms/lib/images/item/splash-zone-450x675.jpg",
  "https://wahoowaterworld.co.id/cms/lib/images/item/rainfortress-450x675-1.jpg",
];
export default function Herosection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextImage = () => {
    setCurrentImageIndex(
      currentImageIndex === heroImages.length - 1 ? 0 : currentImageIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex(
      currentImageIndex === 0 ? heroImages.length - 1 : currentImageIndex - 1
    );
  };

  return (
    <section className="bg-biru text-white py-16 px-8 md:px-24 font-sans">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
              Nikmati Keseruan <br /> di Azguh Waterpark Pekanbaru
            </h1>
            <p className="mb-6 text-lg">
              Temukan berbagai wahana air seru untuk semua umur. Pesan tiketmu
              sekarang dan rasakan petualangan tak terlupakan!
            </p>
            <Link to="/tiket">
              <a class="relative px-6 py-3 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group transition-all hover:bg-birumuda hover:text-white">
                <span class="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-white group-hover:w-full ease"></span>

                <span class="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-white group-hover:w-full ease"></span>

                <span class="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-white group-hover:h-full ease"></span>

                <span class="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-white group-hover:h-full ease"></span>

                <span class="absolute inset-0 w-full h-full duration-300 delay-300 bg-birumuda opacity-0 group-hover:opacity-100"></span>

                <span class="relative transition-colors duration-300 delay-200 group-hover:text-white ease">
                  Pesan Tiket
                </span>
              </a>
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        >
          <div className="relative animate-[fadeIn_1s_ease-out_0.3s_both]">
            <div className="relative w-full max-w-xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
              <div className="relative h-80 md:h-96">
                {heroImages.map((image, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ${
                      index === currentImageIndex ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <img
                      src={image}
                      alt={`Waterpark slide ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}

                <div className="absolute inset-0 bg-gradient-to-t from-biru/20 to-transparent"></div>

                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-2 rounded-full transition-all duration-200 hover:scale-110"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-2 rounded-full transition-all duration-200 hover:scale-110"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {heroImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-200 ${
                      index === currentImageIndex
                        ? "bg-white scale-125"
                        : "bg-white/50 hover:bg-white/75"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
        
      </div>
      
    </section>
    
  );
}
