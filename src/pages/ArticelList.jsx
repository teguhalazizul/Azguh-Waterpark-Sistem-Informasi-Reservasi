import { MdOutlineEmojiPeople } from "react-icons/md";
import { BiBookmarkAlt } from "react-icons/bi";
import articles from "../JSON/articles.json";
import { Link } from "react-router-dom";

export default function ArticleList() {
  return (
    <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {articles.map((article) => (
        <Link to={`/article/${article.id}`} key={article.id} className="block">
          <div
            key={article.id}
            className="border border-gray-200 p-4 rounded-2xl bg-white flex flex-col transition-transform hover:shadow-lg hover:-translate-y-1"
          >
            {/* Thumbnail */}
            <img
              src={article.thumbnail}
              alt={article.title}
              className="w-full h-48 object-cover rounded-xl mb-4"
            />

            {/* Title */}
            <h2 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
              {article.title}
            </h2>

            {/* Description */}
            <p className="text-sm text-gray-600 mb-4 line-clamp-2">
              {article.description}
            </p>

            {/* Author and Bookmark */}
            <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
              <div className="flex items-center">
                <MdOutlineEmojiPeople className="w-8 h-8 rounded-full mr-3 text-gray-400" />
                <div className="text-sm">
                  <div className="font-semibold text-gray-800">
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

              <button>
                <BiBookmarkAlt
                  size={22}
                  className="text-gray-400 hover:text-blue-500 transition-colors"
                />
              </button>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
