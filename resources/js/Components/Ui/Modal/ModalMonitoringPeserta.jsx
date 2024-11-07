import React, { useState } from "react";

const ModalMonitoringPeserta = ({ onClose }) => {
  const [fotoSelected, setFotoSelected] = useState("tidak");
  const [videoSelected, setVideoSelected] = useState("tidak");

  const textAreas = [
    { label: "Realisasi", rows: 1 },
    { label: "Kendala", rows: 1 },
    { label: "Solusi", rows: 1 },
  ];

  const selectOptions = [
    { label: "Undangan", options: ["Tidak", "Ada"] },
    { label: "Daftar Hadir", options: ["Tidak", "Ada"] },
    { label: "Foto", options: ["Tidak", "Ada"], setter: setFotoSelected },
    { label: "Video", options: ["Tidak", "Ada"], setter: setVideoSelected },
  ];

  return (
    <div className="absolute bg-slate-800 top-0 left-0 right-0 bottom-0 w-full h-full z-[999] flex items-center justify-center mx-auto my-auto bg-opacity-35">
      <button
        onClick={onClose}
        className="z-30 w-full h-full absolute"
      ></button>
      <div className="w-[80%] md:w-[50%] h-[80%] bg-white rounded-2xl p-5 overflow-y-auto scrollbar-none z-40">
        <p className="text-2xl text-slate-700 font-bold">Tambah Data RTL</p>
        <form className="gap-4 max-w-full mx-auto p-6 rounded-lg">
          {textAreas.map((textarea, index) => (
            <div key={index}>
              <p className="text-base text-slate-700 font-bold pl-1">
                {textarea.label}
              </p>
              <textarea
                rows={textarea.rows}
                className="rounded-lg text-sm text-slate-700 scrollbar-none border border-gray-400 focus:border-primary focus:outline-none transition-colors duration-300 focus:ring-0 w-full"
              ></textarea>
            </div>
          ))}
          <div className="mt-5 space-y-3">
            <p className="text-xl text-slate-700 font-bold pl-1">
              Bukti Dukung
            </p>
            <div className="flex gap-5 w-full">
              {selectOptions
                .reduce((acc, select, index) => {
                  const colIndex = Math.floor(index / 2);
                  if (!acc[colIndex]) acc[colIndex] = [];
                  acc[colIndex].push(select);
                  return acc;
                }, [])
                .map((selectGroup, colIndex) => (
                  <div key={colIndex} className="w-[50%] flex flex-col gap-3">
                    {selectGroup.map((select, index) => (
                      <div key={index} className="w-full">
                        <p className="text-base text-slate-700 font-bold pl-1">
                          {select.label}
                        </p>
                        <select
                          className="rounded-lg text-sm text-slate-700 scrollbar-none border border-gray-400 focus:border-primary focus:outline-none transition-colors duration-300 focus:ring-0 w-full cursor-pointer"
                          onChange={(e) => {
                            if (select.label === "Foto") {
                              setFotoSelected(e.target.value.toLowerCase());
                            } else if (select.label === "Video") {
                              setVideoSelected(e.target.value.toLowerCase());
                            }
                          }}
                        >
                          {select.options.map((option, idx) => (
                            <option key={idx} value={option.toLowerCase()}>
                              {option}
                            </option>
                          ))}
                        </select>
                      </div>
                    ))}
                  </div>
                ))}
            </div>
          </div>
          {/* Input fields for Foto and Video links */}
          {fotoSelected === "ada" && (
            <input
              type="text"
              name="fotoLink"
              id="fotoLink"
              placeholder="Masukan Link Foto"
              className="rounded-lg text-sm text-slate-700 scrollbar-none border border-gray-400 focus:border-primary focus:outline-none transition-colors duration-300 focus:ring-0 w-full mt-4"
            />
          )}
          {videoSelected === "ada" && (
            <input
              type="text"
              name="videoLink"
              id="videoLink"
              placeholder="Masukan Link Video"
              className="rounded-lg text-sm text-slate-700 scrollbar-none border border-gray-400 focus:border-primary focus:outline-none transition-colors duration-300 focus:ring-0 w-full mt-4"
            />
          )}

          <button className="w-full text-center bg-indigo-600 rounded-lg border border-indigo-600 text-white font-semibold mt-3 hover:bg-white hover:text-indigo-600 py-1 transition-all duration-300 ease-in-out">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ModalMonitoringPeserta;
