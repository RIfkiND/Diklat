import DownloadSurat from "@/Components/Home/DownloadSurat";
import FAQ from "@/Components/Home/FAQ";
import Hero from "@/Components/Home/Hero";
import Navbar from "@/Components/Home/Navbar";
import Services from "@/Components/Home/Services";
import Circle from "@/Components/Image/Circle";
import { Head } from "@inertiajs/react";
import React from "react";

const Landingpage = () => {
  return (
    <div className="overflow-x-hidden w-screen relative md:px-0 px-10">
      <Head title="Home" />
      <Circle className="absolute top-[-40rem] left-[-20rem] z-[-999] opacity-50" />
      <Circle className="absolute top-[35rem] right-[-25rem] z-[-999] opacity-70" />
      <Circle className="absolute top-[75rem] left-[-20rem] z-[-999] opacity-60" />
      <div className="h-full w-full mx-auto scroll-smooth md:max-w-[80%]">
        <Navbar />
        <Hero />
        <Services />
        <DownloadSurat />
        <FAQ />
      </div>
    </div>
  );
};

export default Landingpage;
