import faqData from "../JSON/faq.json";

export default function FAQPage() {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white rounded-xl shadow-lg">
      <h1 className="text-4xl font-extrabold mb-10 text-center text-blue-700">
        FAQ - Pertanyaan Umum
      </h1>
      <div className="space-y-6">
        {faqData.map(({ id, question, answer }) => (
          <details
            key={id}
            className="border border-gray-300 rounded-lg p-5 bg-gray-50 hover:bg-gray-100 transition duration-300"
          >
            <summary className="cursor-pointer text-lg font-semibold text-gray-900">
              {question}
            </summary>
            <p className="mt-3 text-gray-700 leading-relaxed">{answer}</p>
          </details>
        ))}
      </div>
    </div>
  );
}
