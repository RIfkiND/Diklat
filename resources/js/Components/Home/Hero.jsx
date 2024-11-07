import React from "react";
import HeroImage from "../Image/HeroImage";

const Hero = () => {
  return (
    <div className="relative bg-white pb-[110px] pt-[120px] lg:pt-[100px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-5/12">
            <div className="hero-content">
              <h1 className="mb-5 text-4xl font-bold !leading-[1.208] text-slate-700 sm:text-[42px] lg:text-[40px] xl:text-5xl ">
                The Greatest <br />
                Journey Of Online <br />
                Payment.
              </h1>
              <p className="mb-8 max-w-[480px] text-base text-textPrimary">
                With TailGrids, business and students thrive together. Business
                can perfectly match their staffing to changing demand throughout
                the dayed.
              </p>
            </div>
          </div>
          <div className="hidden px-4 lg:block lg:w-1/12"></div>
          <div className="w-full px-4 lg:w-6/12">
            <div className="lg:ml-auto lg:text-right">
              <div className="relative z-10 inline-block pt-11 lg:pt-0">
                <HeroImage />
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
