import { FaQuoteLeft, FaStar } from "react-icons/fa";
import reviews from '../JSON/reviews.json';

export default function ReviewList() {
  const bgGradients = [
    "bg-gradient-to-br from-white to-blue-50",
    "bg-gradient-to-br from-blue-50 to-blue-100", 
    "bg-gradient-to-br from-blue-100 to-blue-200"
  ];

  // Limit to 6 reviews for cleaner display
  const displayReviews = reviews.slice(0, 6);

  return (
    <div className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
            Kata Mereka Tentang{" "}
            <span className="relative inline-block text-yellow-600">
              Azguh
              <span className="absolute left-0 right-0 -bottom-2 h-3 bg-yellow-200 opacity-60 -z-10 rounded-full"></span>
            </span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Pengalaman tak terlupakan dari pengunjung setia kami
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayReviews.map((review, index) => (
            <div
              key={review.id}
              className={`group p-8 rounded-2xl shadow-lg hover:shadow-2xl text-left transition-all duration-300 hover:scale-105 border border-gray-100 ${bgGradients[index % bgGradients.length]} animate-[fadeInUp_0.6s_ease-out]`}
              style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'both' }}
            >
              <div className="relative">
                <FaQuoteLeft className="text-4xl text-blue-400 mb-6 opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="mb-6 relative">
                  <p className="text-gray-700 text-base leading-relaxed font-medium">
                    "{review.comment}"
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <div className="flex-1">
                    <p className="font-bold text-gray-800 text-lg mb-1">{review.name}</p>
                    <p className="text-sm text-gray-500">
                      {new Date(review.date).toLocaleDateString("id-ID", {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-1 ml-4">
                    {[...Array(5)].map((_, starIndex) => (
                      <FaStar
                        key={starIndex}
                        className={`text-lg transition-colors duration-200 ${
                          starIndex < review.rating 
                            ? 'text-yellow-400 group-hover:text-yellow-500' 
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                </div>
                
                <div className="absolute top-0 right-0 w-20 h-20 bg-blue-200 rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-300 -z-10"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}