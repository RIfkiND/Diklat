import MonitorIlustration from "@/Components/Image/MonitorIlustration";
import React from "react";

const EdpFinish = () => {
  return (
    <div className="w-full max-w-[700px] mx-auto h-full p-5">
      <div className="w-full h-[150px] bg-primary rounded-xl relative overflow-hidden pt-5 pl-5">
        <div>
          <p className="text-2xl font-bold text-white">
            Evaluasi Dampak Pelatihan - EDP
          </p>
          <p className="text-xs text-slate-100 max-w-[500px] leading-4">
            Kami menjamin mutu pelatihan dengan mengevaluasi dampak peningkatan
            kualitas dan kompetensi tenaga pendidik melalui berbagai metode
            pelatihan.
          </p>
        </div>
        <MonitorIlustration
          images={"/images/ilustrasi/Monitor-bro.svg"}
          className="absolute bottom-[-20px] right-0 w-[100px] h-[100px]"
        />
      </div>

      <div className="w-full flex justify-center mt-[-50px] flex-col items-center">
        <MonitorIlustration
          images={"/images/ilustrasi/people.svg"}
          className=" w-[600px]"
        />

        <p className="text-4xl font-bold text-primary">TERIMAKASIH </p>
      </div>
    </div>
  );
};

export default EdpFinish;
