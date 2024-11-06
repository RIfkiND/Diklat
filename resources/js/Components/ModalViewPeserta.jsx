import React from "react";

const ModalViewPeserta = ({ onClose }) => {
  const textareaFields = [
    { label: "Realisasi", width: "w-[50%]" },
    { label: "Kendala", width: "w-[50%]" },
  ];

  const supportFields = [
    { label: "Undangan", type: "text", width: "w-[46.50%] md:w-[23.27%]" },
    { label: "Daftar Hadir", type: "text", width: "w-[46.50%] md:w-[23.27%]" },
    { label: "Link Foto", type: "text", width: "w-[46.50%] md:w-[23.27%]" },
    { label: "Link Video", type: "text", width: "w-[46.50%] md:w-[23.27%]" },
  ];

  return (
    <div className="absolute bg-slate-800 top-0 left-0 right-0 bottom-0 w-full h-full z-[999] flex items-center justify-center mx-auto my-auto bg-opacity-35">
      <button
        onClick={onClose}
        className="z-30 w-full h-full absolute"
      ></button>
      <div className="w-[80%] md:w-[70%] h-[80%] bg-white rounded-2xl p-10 overflow-y-auto scrollbar-none z-40 flex flex-col gap-3">
        <p className="text-2xl text-slate-500 font-bold">Informasi</p>

        <div className="w-full flex gap-5">
          {textareaFields.map((field, index) => (
            <div key={index} className={field.width}>
              <p className="text-base text-slate-700 font-bold pl-1">
                {field.label}
              </p>
              <textarea className="rounded-lg text-sm text-slate-700 scrollbar-none border border-gray-400 focus:border-primary focus:outline-none transition-colors duration-300 focus:ring-0 w-full"></textarea>
            </div>
          ))}
        </div>

        <div className="w-full">
          <p className="text-base text-slate-700 font-bold pl-1">Solusi</p>
          <textarea className="rounded-lg text-sm text-slate-700 scrollbar-none border border-gray-400 focus:border-primary focus:outline-none transition-colors duration-300 focus:ring-0 w-full"></textarea>
        </div>

        <p className="text-2xl text-slate-500 font-bold">Bukti Dukung</p>

        <div className="w-full flex gap-5 items-center flex-wrap">
          {supportFields.map((field, index) => (
            <div key={index} className={field.width}>
              <p className="text-base text-slate-700 font-bold pl-1">
                {field.label}
              </p>
              <input
                type={field.type}
                className="rounded-lg text-sm text-slate-700 scrollbar-none border border-gray-400 focus:border-primary focus:outline-none transition-colors duration-300 focus:ring-0 w-full"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ModalViewPeserta;
