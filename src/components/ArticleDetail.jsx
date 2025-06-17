import { useParams } from "react-router-dom";
import articles from "../JSON/articles.json";

export default function ArticleDetail() {
  const { id } = useParams();
  const article = articles.find((a) => a.id.toString() === id);

  if (!article) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 to-pink-50 flex items-center justify-center">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl animate-fade-in">
          <div className="text-center">
            <div className="text-6xl mb-4 animate-bounce">😔</div>
            <p className="text-red-600 text-xl font-semibold">
              Artikel tidak ditemukan.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Decorative background elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-40 left-20 w-24 h-24 bg-purple-200 rounded-full opacity-20 animate-bounce"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 animate-fade-in">
        {/* Main Image */}
        <div className="overflow-hidden rounded-2xl shadow-2xl mb-8 group animate-scale-in">
          <img
            src={article.thumbnail}
            alt={article.title}
            className="w-full h-64 sm:h-80 object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20 relative overflow-hidden animate-fade-in" style={{ animationDelay: '0.2s' }}>
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-indigo-500/5 to-purple-500/5 pointer-events-none"></div>
          
          <div className="relative z-10">
            {/* Article Title */}
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight mb-6 animate-scale-in bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {article.title}
            </h1>

            {/* Author and Date */}
            <div className="flex items-center text-sm text-gray-600 mb-8 animate-fade-in bg-gradient-to-r from-gray-50/50 to-blue-50/50 rounded-xl p-4" style={{ animationDelay: '0.4s' }}>
              <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center mr-4 transition-transform duration-300 hover:scale-110 animate-pulse">
                <span className="text-white font-medium text-lg">
                  {article.author.charAt(0)}
                </span>
              </div>
              <div>
                <span className="font-medium text-gray-700 block">{article.author}</span>
                <span className="text-gray-500 text-xs">
                  📅 {new Date(article.published_at).toLocaleDateString("id-ID", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </span>
              </div>
            </div>

            {/* Article Content */}
            <article className="prose prose-lg max-w-none text-gray-800 leading-relaxed">
              {article.content?.split("\n").map((paragraph, idx) => (
                <div 
                  key={idx} 
                  className="mb-6 animate-fade-in transition-all duration-300 hover:text-gray-900 bg-gradient-to-r from-transparent via-blue-50/20 to-transparent rounded-lg p-4 hover:shadow-sm"
                  style={{ animationDelay: `${0.6 + idx * 0.1}s` }}
                >
                  <p className="text-justify leading-relaxed">
                    {paragraph}
                  </p>
                </div>
              ))}
            </article>

            {/* Back to Articles */}
            <div className="mt-12 pt-8 border-t border-gray-200 animate-fade-in" style={{ animationDelay: '1s' }}>
              <button 
                onClick={() => window.history.back()}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
              >
                <span className="flex items-center">
                  <span className="mr-2">←</span>
                  Kembali ke Artikel
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}