import FAQ from "@/Components/Home/FAQ";
import Hero from "@/Components/Home/Hero";
import Navbar from "@/Components/Home/Navbar";
import Services from "@/Components/Home/Services";
import Circle from "@/Components/Image/Circle";
import React from "react";

const Landingpage = () => {
  return (
    <div className="overflow-x-hidden w-screen relative">
      <Circle className="absolute top-[-40rem] left-[-20rem] z-[-999] opacity-50" />
      <Circle className="absolute top-[35rem] right-[-25rem] z-[-999] opacity-70" />
      <Circle className="absolute top-[75rem] left-[-20rem] z-[-999] opacity-60" />
      <div className="h-full w-full mx-auto px-10 scroll-smooth md:max-w-[80%]">
        <Navbar />
        <Hero />
        <Services />
        <FAQ />
      </div>
    </div>
  );
};

export default Landingpage;
