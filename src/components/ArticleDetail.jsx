import { useParams } from "react-router-dom";
import articles from "../JSON/articles.json";
import { MdOutlineEmojiPeople } from "react-icons/md";

export default function ArticleDetail() {
  const { id } = useParams();
  const article = articles.find((a) => a.id.toString() === id);

  if (!article) {
    return (
      <div className="p-8 text-center text-red-600 text-xl font-semibold">
        Artikel tidak ditemukan.
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Gambar Utama */}
      <img
        src={article.thumbnail}
        alt={article.title}
        className="w-full h-64 sm:h-80 object-cover rounded-xl shadow-md mb-8"
      />

      {/* Judul Artikel */}
      <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
        {article.title}
      </h1>

      {/* Penulis dan Tanggal */}
      <div className="flex items-center text-sm text-gray-600 mb-8">
        <MdOutlineEmojiPeople className="text-xl mr-2 text-gray-400" />
        <span className="font-medium text-gray-700">{article.author}</span>
        <span className="mx-2">•</span>
        <span>
          {new Date(article.published_at).toLocaleDateString("id-ID", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </span>
      </div>

      {/* Konten Artikel */}
      <article className="prose prose-lg max-w-none text-gray-800 leading-relaxed">
        {article.content?.split("\n").map((paragraph, idx) => (
          <p key={idx}>{paragraph}</p>
        ))}
      </article>
    </div>
  );
} 