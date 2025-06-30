import articles from "../JSON/articles.json";
import { Link } from "react-router-dom";

export default function ArticleList() {
  return (
    <div className="min-h-screen bg-[#EAF6FF] py-20 px-4 relative">
      {/* Decorative blue elements */}
      <div className="absolute top-16 right-16 w-24 h-24 bg-[#4D9CFF] rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-32 left-16 w-20 h-20 bg-[#4D9CFF] rounded-full opacity-10 animate-bounce"></div>
      <div className="absolute top-1/3 left-1/3 w-16 h-16 bg-[#4D9CFF] rounded-full opacity-10 animate-ping"></div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 relative text-[#4D9CFF]">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4D9CFF] to-[#4D9CFF]">
              📰 Artikel Terbaru
            </span>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-[#4D9CFF] rounded-full"></div>
          </h1>
          <div className="flex justify-center space-x-2 mt-6">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="w-3 h-3 bg-[#4D9CFF] rounded-full animate-pulse"
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
              className="block group transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="bg-white/90 backdrop-blur-sm border border-[#4D9CFF]/30 rounded-2xl overflow-hidden shadow-md hover:shadow-xl relative transition-all duration-500">
                {/* Hover blue overlay */}
                <div className="absolute inset-0 bg-[#4D9CFF]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

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
                  <h2 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-[#4D9CFF] transition-colors duration-300">
                    {article.title}
                  </h2>

                  {/* Description */}
                  <p className="text-sm text-gray-600 mb-4 line-clamp-3 group-hover:text-gray-700 transition-colors duration-300">
                    {article.description}
                  </p>

                  {/* Author and Date */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100 group-hover:border-[#4D9CFF]/30 transition-colors duration-300">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-[#4D9CFF] rounded-full flex items-center justify-center mr-3 text-white font-bold text-sm">
                        {article.author.charAt(0)}
                      </div>
                      <div className="text-sm">
                        <div className="font-semibold text-gray-800 group-hover:text-gray-900">
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

                    <button className="transition-all duration-300 hover:scale-110 active:scale-95 p-2 rounded-full hover:bg-[#E0F0FF]">
                      <div className="w-5 h-5 bg-[#4D9CFF] rounded-sm flex items-center justify-center">
                        <span className="text-white text-xs">📖</span>
                      </div>
                    </button>
                  </div>

                  {/* Bottom Indicator */}
                  <div className="absolute bottom-0 right-0 w-0 h-0.5 bg-[#4D9CFF] group-hover:w-full transition-all duration-500"></div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
