import { CgProfile } from "react-icons/cg"; 
import reviews from '../JSON/reviews.json';

export default function ReviewList() {
  return (
    <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {reviews.map((review) => (
        <div
          key={review.id}
          className="border p-6 rounded-2xl shadow-md bg-white"
        >
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center">
              {/* Ikon Profil */}
              <CgProfile                 className="w-10 h-10 rounded-full mr-3"
  />
              
              <h3 className="text-lg font-semibold text-gray-800">{review.name}</h3>
            </div>
            <span className="text-yellow-500">
              {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
            </span>
          </div>
          <p className="text-sm text-gray-600 italic mb-2">"{review.comment}"</p>
          <p className="text-xs text-gray-400">Dikirim pada: {new Date(review.date).toLocaleDateString()}</p>
        </div>
      ))}
    </div>
  );
}
