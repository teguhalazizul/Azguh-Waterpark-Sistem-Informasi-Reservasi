import { useParams } from "react-router-dom";
import articles from "../JSON/articles.json";

export default function ArticleDetail() {
  const { id } = useParams();
  const article = articles.find((a) => a.id.toString() === id);

  if (!article) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 to-[#FFBABA] flex items-center justify-center">
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl animate-fade-in">
          <div className="text-center">
            <div className="text-6xl mb-4 animate-bounce">😔</div>
            <p className="text-[#EF4444] text-xl font-semibold">
              Artikel tidak ditemukan.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#EAF6FF] via-[#D6EDFF] to-[#B3DFFF] relative">
      {/* Background blue bubbles */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-[#4D9CFF] rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-40 left-20 w-24 h-24 bg-[#4D9CFF] rounded-full opacity-10 animate-bounce"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 animate-fade-in">
        {/* Main Image */}
        <div className="overflow-hidden rounded-2xl shadow-2xl mb-8 group animate-scale-in">
          <img
            src={article.thumbnail}
            alt={article.title}
            className="w-full h-64 sm:h-80 object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>

        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-[#4D9CFF]/20 relative overflow-hidden animate-fade-in">
          {/* Blue overlay */}
          <div className="absolute inset-0 bg-[#4D9CFF]/5 pointer-events-none" />

          <div className="relative z-10">
            {/* Title */}
            <h1 className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#4D9CFF] to-[#4D9CFF] mb-6 animate-scale-in">
              {article.title}
            </h1>

            {/* Author and Date */}
            <div className="flex items-center text-sm text-gray-600 mb-8 animate-fade-in bg-white/50 rounded-xl p-4 shadow-sm border border-[#4D9CFF]/10">
              <div className="w-10 h-10 bg-[#4D9CFF] rounded-full flex items-center justify-center mr-4 text-white font-medium text-lg animate-pulse">
                {article.author.charAt(0)}
              </div>
              <div>
                <span className="font-medium text-gray-700 block">{article.author}</span>
                <span className="text-gray-500 text-xs">
                  📅{" "}
                  {new Date(article.published_at).toLocaleDateString("id-ID", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </span>
              </div>
            </div>

            {/* Content */}
            <article className="prose prose-lg max-w-none text-gray-800 leading-relaxed">
              {article.content?.split("\n").map((paragraph, idx) => (
                <div
                  key={idx}
                  className="mb-6 animate-fade-in bg-[#F2F9FF] hover:bg-[#E0F2FF] rounded-lg p-4 transition-all duration-300 shadow-sm hover:shadow-md"
                  style={{ animationDelay: `${0.6 + idx * 0.1}s` }}
                >
                  <p className="text-justify leading-relaxed">{paragraph}</p>
                </div>
              ))}
            </article>

            {/* Back Button */}
            <div className="mt-12 pt-8 border-t border-gray-200 animate-fade-in" style={{ animationDelay: "1s" }}>
              <button
                onClick={() => window.history.back()}
                className="bg-[#4D9CFF] hover:bg-[#3B8CEB] text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
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
