import React, { useState } from "react";
import MonitorIlustration from "@/Components/Image/MonitorIlustration";
import { IoIosArrowDown } from "react-icons/io";

const DownloadSurat = () => {
  const [openDrop, setOpenDrop] = useState(false);

  return (
    <div
      className="w-full h-full rounded-2xl p-8 bg-primary text-white flex justify-between gap-5 flex-wrap"
      id="downloadSurat"
    >
      <div className="w-[500px] md:w-[690px] flex flex-col justify-between gap-5">
        <div>
          <p className="text-2xl font-bold capitalize">
            unduh surat undangan dan panduan
          </p>
          <p className="text-sm">
            Jika Anda ingin mengunduh surat undangan, cukup klik tombol di bawah
            ini. Pastikan untuk memeriksa detailnya sebelum mengunduh!
          </p>
        </div>

        <div className="relative flex items-center z-0">
          <button onClick={() => setOpenDrop(!openDrop)} className="z-20">
            <span className="px-8 py-2 rounded-xl bg-white text-primary border hover:bg-primary hover:text-white font-semibold transition-all duration-300 ease-in-out flex items-center gap-5">
              Unduh Disini
              <IoIosArrowDown
                className={`transition-transform duration-300 ease-in-out transform ${openDrop ? "rotate-180" : "md:-rotate-90"}`}
              />
            </span>
          </button>

          <div
            className={`duration-300 ease-in-out transition-all translate-y-[0px] opacity-0 z-20 flex md:items-center flex-col top-12 left-0 gap-1 md:gap-3 md:hidden absolute ${openDrop ? "translate-y-3 opacity-100" : ""}`}
          >
            <a
              href="/pdf/Panduan Pendampingan RTL dan EDD 2024.pdf"
              download="Panduan Pendampingan RTL dan EDD 2024.pdf"
              className="px-8 py-2 rounded-xl bg-white text-primary border hover:bg-primary hover:text-white font-semibold transition-all duration-300 ease-in-out capitalize"
            >
              Unduh surat undangan
            </a>
            <a
              href="/pdf/Surat Pengantar RTL & EDP Guru.pdf"
              download="Surat Pengantar RTL & EDP Guru.pdf"
              className="px-8 py-2 rounded-xl bg-white text-primary border hover:bg-primary hover:text-white font-semibold transition-all duration-300 ease-in-out capitalize"
            >
              Unduh panduan
            </a>
          </div>
          <div
            className={`duration-300 ease-in-out transition-all opacity-0 z-10 md:flex items-center gap-3 hidden pl-2 ${openDrop ? " opacity-100" : ""}`}
          >
            <a
              href="/pdf/Panduan Pendampingan RTL dan EDD 2024.pdf"
              download="Panduan Pendampingan RTL dan EDD 2024.pdf"
              className="px-8 py-2 rounded-xl bg-white text-primary border hover:bg-primary hover:text-white font-semibold transition-all duration-300 ease-in-out capitalize"
            >
              Unduh surat undangan
            </a>
            <a
              href="/pdf/Surat Pengantar RTL & EDP Guru.pdf"
              download="Surat Pengantar RTL & EDP Guru.pdf"
              className="px-8 py-2 rounded-xl bg-white text-primary border hover:bg-primary hover:text-white font-semibold transition-all duration-300 ease-in-out capitalize"
            >
              Unduh panduan
            </a>
          </div>
        </div>
      </div>
      <div className="w-[250px] h-[200px]">
        <MonitorIlustration
          images="/images/ilustrasi/Emails-bro.svg"
          className=""
        />
      </div>
    </div>
  );
};

export default DownloadSurat;
