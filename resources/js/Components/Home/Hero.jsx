import React from "react";
import HeroImage from "../Image/HeroImage";
const Hero = () => {
  return (
    <div className="relative pb-[110px] mt-[50px]" id="home">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-col md:flex-row items-center justify-center md:justify-between">
          <div className="w-full px-4 lg:w-5/12 text-center md:text-left">
            <div className="hero-content">
              <h1 className="mb-2 text-4xl font-bold !leading-[1.208] text-slate-700 sm:text-[42px] lg:text-[40px] xl:text-5xl">
                Memantau, Mengevaluasi, Meraih Keunggulan
              </h1>
              <p className="mb-8 max-w-[480px] text-base text-textPrimary italic mx-auto md:mx-0">
                Solusi pemantauan komprehensif untuk evaluasi berkelanjutan dan
                hasil yang lebih tinggi.
              </p>
            </div>

            <a
              href="/pdf/Buku Panduan RTL dan EDP BBPPMPV BMTI tahun 2024.pdf"
              download="Buku Panduan RTL dan EDP BBPPMPV BMTI tahun 2024.pdf"
              className="px-8 py-3 bg-primary border border-primary text-white rounded-3xl hover:bg-white hover:text-primary transition-all duration-300 ease-in-out"
            >
              Unduh Buku Panduan
            </a>
          </div>

          <div className="w-full px-4 lg:w-6/12 flex justify-center md:justify-end">
            <div className="lg:ml-auto lg:text-right">
              <div className="relative z-10 inline-block pt-11 lg:pt-0">
                <div className="w-[350px] h-[450px] rounded-lg overflow-hidden object-cover rounded-tl-[100px] absolute bg-slate-600 opacity-10"></div>
                <div className="w-[350px] h-[450px] rounded-lg overflow-hidden object-cover rounded-tl-[100px]">
                  <HeroImage />
                </div>

                <span className="absolute -bottom-8 -left-8 z-[-1]">
                  <svg
                    width="93"
                    height="93"
                    viewBox="0 0 93 93"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="2.5" cy="2.5" r="2.5" fill="#4f46e5" />
                    <circle cx="2.5" cy="24.5" r="2.5" fill="#4f46e5" />
                    <circle cx="2.5" cy="46.5" r="2.5" fill="#4f46e5" />
                    <circle cx="2.5" cy="68.5" r="2.5" fill="#4f46e5" />
                    <circle cx="2.5" cy="90.5" r="2.5" fill="#4f46e5" />
                    <circle cx="24.5" cy="2.5" r="2.5" fill="#4f46e5" />
                    <circle cx="24.5" cy="24.5" r="2.5" fill="#4f46e5" />
                    <circle cx="24.5" cy="46.5" r="2.5" fill="#4f46e5" />
                    <circle cx="24.5" cy="68.5" r="2.5" fill="#4f46e5" />
                    <circle cx="24.5" cy="90.5" r="2.5" fill="#4f46e5" />
                    <circle cx="46.5" cy="2.5" r="2.5" fill="#4f46e5" />
                    <circle cx="46.5" cy="24.5" r="2.5" fill="#4f46e5" />
                    <circle cx="46.5" cy="46.5" r="2.5" fill="#4f46e5" />
                    <circle cx="46.5" cy="68.5" r="2.5" fill="#4f46e5" />
                    <circle cx="46.5" cy="90.5" r="2.5" fill="#4f46e5" />
                    <circle cx="68.5" cy="2.5" r="2.5" fill="#4f46e5" />
                    <circle cx="68.5" cy="24.5" r="2.5" fill="#4f46e5" />
                    <circle cx="68.5" cy="46.5" r="2.5" fill="#4f46e5" />
                    <circle cx="68.5" cy="68.5" r="2.5" fill="#4f46e5" />
                    <circle cx="68.5" cy="90.5" r="2.5" fill="#4f46e5" />
                    <circle cx="90.5" cy="2.5" r="2.5" fill="#4f46e5" />
                    <circle cx="90.5" cy="24.5" r="2.5" fill="#4f46e5" />
                    <circle cx="90.5" cy="46.5" r="2.5" fill="#4f46e5" />
                    <circle cx="90.5" cy="68.5" r="2.5" fill="#4f46e5" />
                    <circle cx="90.5" cy="90.5" r="2.5" fill="#4f46e5" />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
