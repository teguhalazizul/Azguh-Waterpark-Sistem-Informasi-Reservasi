import { FaQuoteLeft } from "react-icons/fa";
import reviews from '../JSON/reviews.json';

export default function ReviewList() {
  const bgColors = ["bg-white", "bg-blue-100", "bg-blue-200"];

  return (
    <div className="py-12 px-4 text-center">
      <h2 className="text-3xl font-bold mb-10">
        What Our Clients <span className="text-yellow-500 relative">
          Says
          <span className="absolute left-0 right-0 -bottom-1 h-2 bg-yellow-200 opacity-50 -z-10 rounded-full"></span>
        </span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((review, index) => (
          <div
            key={review.id}
            className={`p-6 rounded-2xl shadow-md text-left ${bgColors[index % bgColors.length]}`}
          >
            <FaQuoteLeft className="text-3xl text-blue-500 mb-4" />
            <p className="text-gray-700 mb-6 text-sm">"{review.comment}"</p>

            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold text-gray-800">{review.name}</p>
                <p className="text-xs text-gray-500">
                  Dikirim pada: {new Date(review.date).toLocaleDateString("id-ID")}
                </p>
              </div>
              <div className="text-yellow-500 text-sm">
                {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
