import { Link } from "@inertiajs/react";
import React from "react";

const faqs = [
  {
    question: "Does training at BMTI receive a certificate?",
    answer:
      "Yes, participants who complete the training at BBPPMPV BMTI will receive a certificate as recognition of the skills and knowledge gained.",
  },
  {
    question: "What is BBPPMPV BMTI ?",
    answer:
      "BBPPMPV BMTI is a work unit whose main task is to improve the competence of teachers and vocational education personnel.",
  },
  {
    question: "What are the advantages of training at BBPPMPV BMTI ?",
    answer:
      "The training programs are designed to cover a wide range of skills and knowledge that are highly relevant to current industry needs.",
  },
  {
    question: "Is training at BBPPMPV BMTI free?",
    answer:
      "Training at BBPPMPV BMTI is completely free of charge. There are no fees required for participation.",
  },
];

const FAQ = () => {
  return (
    <section className="py-10 sm:py-16 lg:py-24">
      <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-primary sm:text-4xl lg:text-5xl">
            Questions & Answers
          </h2>
          <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-textPrimary">
            Explore the common questions and answers about Celebration
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
              Didn’t find the answer you are looking for?{" "}
              <a
                href="mailto:bbppmpv.bmti@kemdikbud.go.id"
                className="text-yellow-300 transition-all duration-200 hover:text-yellow-400 focus:text-yellow-400 hover:underline"
              >
                Contact our support
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
