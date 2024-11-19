import { React, useState } from "react";
import MonitorIlustration from "../../Components/Image/MonitorIlustration";
import { Head } from "@inertiajs/react";

const SendLink = () => {
  const [selectedOption, setSelectedOption] = useState("");

  // Fungsi untuk menyalin link ke clipboard
  const handleCopyLink = () => {
    const link =
      selectedOption === "Siswa"
        ? "https://form-edp-siswa"
        : "https://form-edp";
    navigator.clipboard
      .writeText(link)
      .then(() => {
        alert("Link berhasil disalin ke clipboard!");
      })
      .catch(() => {
        alert("Gagal menyalin link.");
      });
  };

  return (
    <div className="w-full max-w-[700px] mx-auto h-full p-5">
      <Head title="Form Evaluasi" />
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
      <div className="w-full mt-5">
        <p className="text-2xl font-bold text-slate-700 text-center">
          Send Link EDP
        </p>

        <div className="w-full shadow-primaryshadow p-5 mt-5 grid grid-cols-1 gap-x-10 gap-y-6">
          <div className="grid grid-cols-2 w-full gap-5">
            {/* Dropdown */}
            <select
              value={selectedOption}
              onChange={(e) => setSelectedOption(e.target.value)}
              className="rounded-lg text-sm text-slate-700 scrollbar-none border border-gray-400 focus:border-primary focus:outline-none transition-colors duration-300 focus:ring-0 w-full cursor-pointer col-span-1"
            >
              <option value="" disabled>
                Select an option
              </option>
              <option value="Siswa">Siswa</option>
              <option value="Guru Kolega / Teman Sejawat">
                Guru Kolega / Teman Sejawat
              </option>
              <option value="Guru Tamatan Pelatihan">
                Guru Tamatan Pelatihan
              </option>
              <option value="Pimpinan / Kepala Sekolah">
                Pimpinan / Kepala Sekolah
              </option>
            </select>

            {/* Button */}
            <button
              onClick={handleCopyLink}
              className="col-span-1 bg-indigo-500 py-2 px-4 rounded-lg text-white border border-indigo-500 hover:text-indigo-500 hover:bg-white transition-all duration-300"
            >
              {selectedOption === "Siswa"
                ? "Salin Link Siswa"
                : "Salin Link EDP"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SendLink;
