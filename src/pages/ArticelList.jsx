import articles from "../JSON/articles.json";
import { Link } from "react-router-dom";

export default function ArticleList() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-50 px-4">
      {/* Decorative background elements */}
      <div className="absolute top-16 right-16 w-24 h-24 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-32 left-16 w-20 h-20 bg-purple-200 rounded-full opacity-20 animate-bounce"></div>
      <div className="absolute top-1/3 left-1/3 w-16 h-16 bg-indigo-200 rounded-full opacity-20 animate-ping"></div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 relative">
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              📰 Artikel Terbaru
            </span>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-fade-in" style={{ animationDelay: '0.8s' }}></div>
          </h1>
          <div className="flex justify-center space-x-2 mt-6">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse"
                style={{ animationDelay: `${i * 0.2}s` }}
              ></div>
            ))}
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {articles.map((article, index) => (
            <Link 
              to={`/article/${article.id}`} 
              key={article.id} 
              className="block animate-fade-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-white/80 backdrop-blur-sm border border-white/20 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group relative">
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                
                {/* Thumbnail */}
                <div className="overflow-hidden rounded-t-2xl relative">
                  <img
                    src={article.thumbnail}
                    alt={article.title}
                    className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <div className="p-6 relative z-10">
                  {/* Title */}
                  <h2 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 transition-colors duration-300 group-hover:text-blue-600">
                    {article.title}
                  </h2>

                  {/* Description */}
                  <p className="text-sm text-gray-600 mb-4 line-clamp-3 transition-colors duration-300 group-hover:text-gray-700">
                    {article.description}
                  </p>

                  {/* Author and Date */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100 group-hover:border-blue-100 transition-colors duration-300">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center mr-3 transition-transform duration-300 group-hover:scale-110">
                        <span className="text-white text-sm font-medium">
                          {article.author.charAt(0)}
                        </span>
                      </div>
                      <div className="text-sm">
                        <div className="font-semibold text-gray-800 transition-colors duration-300 group-hover:text-gray-900">
                          {article.author}
                        </div>
                        <div className="text-gray-400 text-xs">
                          {new Date(article.published_at).toLocaleDateString(
                            "id-ID",
                            { day: "numeric", month: "long", year: "numeric" }
                          )}
                        </div>
                      </div>
                    </div>

                    <button className="transition-all duration-300 hover:scale-110 active:scale-95 p-2 rounded-full hover:bg-blue-50">
                      <div className="w-5 h-5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-sm flex items-center justify-center">
                        <span className="text-white text-xs">📖</span>
                      </div>
                    </button>
                  </div>

                  {/* Read More Indicator */}
                  <div className="absolute bottom-0 right-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-500"></div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}