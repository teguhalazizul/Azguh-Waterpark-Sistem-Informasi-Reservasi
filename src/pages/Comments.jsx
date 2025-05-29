import { useState, useEffect } from "react";
import axios from "axios";
import { CgProfile } from "react-icons/cg";

export default function CommentList() {
  const [comments, setComments] = useState([]);
  const [filteredComments, setFilteredComments] = useState([]);
  const [search, setSearch] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/comments")
      .then((res) => {
        if (res.status !== 200) {
          setError("Gagal mengambil data komentar");
          return;
        }

        const enriched = res.data.comments.map((comment) => ({
          ...comment,
          rating: Math.floor(Math.random() * 3) + 3, // rating antara 3-5
          date: new Date(
            Date.now() - Math.random() * 10000000000
          ).toISOString(), // tanggal acak
        }));

        setComments(enriched);
        setFilteredComments(enriched);
      })
      .catch((err) => {
        setError(err.message || "Terjadi kesalahan");
      });
  }, []);

  useEffect(() => {
    const keyword = search.toLowerCase();
    const filtered = comments.filter(
      (c) =>
        c.user.fullName.toLowerCase().includes(keyword) ||
        c.body.toLowerCase().includes(keyword)
    );
    setFilteredComments(filtered);
  }, [search, comments]);

  if (error) {
    return <div className="text-red-600 p-4 rounded bg-red-100">{error}</div>;
  }

  return (
    <div className="p-8">
      {/* Input Search */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Cari komentar atau nama..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-1/2 px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* List Komentar */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredComments.map((comment) => (
          <div
            key={comment.id}
            className="border p-6 rounded-2xl shadow-md bg-white"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <CgProfile className="w-10 h-10 rounded-full mr-3" />
                <h3 className="text-lg font-semibold text-gray-800">
                  {comment.user.fullName}
                </h3>
              </div>
              <span className="text-yellow-500">
                {"★".repeat(comment.rating)}
                {"☆".repeat(5 - comment.rating)}
              </span>
            </div>
            <p className="text-sm text-gray-600 italic mb-2">"{comment.body}"</p>
            <p className="text-xs text-gray-400">
              Dikirim pada: {new Date(comment.date).toLocaleDateString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
