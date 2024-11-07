import Hero from "@/Components/Home/Hero";
import Navbar from "@/Components/Home/Navbar";
import Services from "@/Components/Home/Services";
import React from "react";

const Landingpage = () => {
  return (
    <div className="h-full w-full mx-auto px-10 scroll-smooth">
      <Navbar />
      <Hero />
      <Services />
    </div>
  );
};

export default Landingpage;
