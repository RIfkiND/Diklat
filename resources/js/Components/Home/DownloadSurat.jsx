import React from "react";
import MonitorIlustration from "@/Components/Image/MonitorIlustration";

const DownloadSurat = () => {
  return (
    <div className="w-full h-full rounded-2xl p-8 bg-primary text-white flex justify-between gap-5">
      <div className="w-[500px] flex flex-col justify-between">
        <div className="">
          <p className="text-2xl font-bold capitalize">
            download invitation letter
          </p>
          <p className="text-sm ">
            If you’d like to download the invitation letter, just click the
            button below. Make sure to check the details before downloading!
          </p>
        </div>

        <div className="">
          {/* Link untuk mendownload file gambar */}
          <a
            href="/images/ilustrasi/hero.png" // Path relatif ke file gambar dalam folder public
            download="hero.png" // Nama file yang akan didownload
            className="px-8 py-2 rounded-xl bg-white text-primary border hover:bg-primary hover:text-white font-semibold transition-all duration-300 ease-in-out"
          >
            Download Here
          </a>
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
