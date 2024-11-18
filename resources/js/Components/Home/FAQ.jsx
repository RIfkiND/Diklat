import { Link } from "@inertiajs/react";
import React from "react";

const faqs = [
  {
    question: "Apa itu BBPPMPV BMTI ?",
    answer:
      "BBPPMPV BMTI merupakan unit kerja yang tugas utamanya adalah meningkatkan kompetensi guru dan tenaga kependidikan vokasi.",
  },
  {
    question: "Apakah pelatihan di BMTI mendapat sertifikat ?",
    answer:
      "Ya, peserta yang menyelesaikan pelatihan di BBPPMPV BMTI akan menerima sertifikat sebagai pengakuan atas keterampilan dan ilmu yang diperoleh.",
  },
  {
    question: "Apa keuntungan pelatihan di BBPPMPV BMTI ?",
    answer:
      "Program pelatihan dirancang untuk mencakup berbagai keterampilan dan pengetahuan yang sangat relevan dengan kebutuhan industri saat ini.",
  },
  {
    question: "Apakah pelatihan di BBPPMPV BMTI gratis?",
    answer:
      "Pelatihan di BBPPMPV BMTI sepenuhnya gratis. Tidak ada biaya yang dikenakan untuk berpartisipasi.",
  },
];

const FAQ = () => {
  return (
    <section className="py-10 sm:py-16 lg:py-24" id="faq">
      <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-primary sm:text-4xl lg:text-5xl">
            Pertanyaan & Jawaban
          </h2>
          <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-textPrimary">
            Jelajahi pertanyaan dan jawaban umum tentang Perayaan
          </p>
        </div>

        <div className="grid grid-cols-1 mt-12 md:mt-20 md:grid-cols-2 gap-y-16 gap-x-20">
          {faqs.map((faq, index) => (
            <div key={index} className="flex items-start">
              <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-primary rounded-full">
                <span className="text-lg font-semibold text-white">?</span>
              </div>
              <div className="ml-4">
                <p className="text-xl font-semibold text-slate-700">
                  {faq.question}
                </p>
                <p className="mt-4 text-base text-textPrimary">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center mt-12 md:mt-20">
          <div className="px-8 py-4 text-center bg-primary rounded-full">
            <p className="text-gray-50">
              Tidak menemukan jawaban yang Anda cari ?{" "}
              <a
                href="mailto:bbppmpv.bmti@kemdikbud.go.id"
                className="text-yellow-300 transition-all duration-200 hover:text-yellow-400 focus:text-yellow-400 hover:underline"
              >
                Hubungi dukungan kami
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
