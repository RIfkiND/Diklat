import React from "react";
import MonitorIlustration from "../../../Components/Image/MonitorIlustration";

const Step3 = ({ nextStep, prevStep, handleChange, values }) => {
  //
  const penyusunanRencana = [
    {
      title: "Adanya Silabus / RPP / Modul Ajar",
      isDropdown: true,
      subInfo: {
        val1: "Ya",
        val2: "Tidak",
      },
    },
    {
      title: "Adanya Bahan Ajar / Media Pembelajaran",
      isDropdown: true,
      subInfo: {
        val1: "Ya",
        val2: "Tidak",
      },
    },
    {
      title: "Adanya Lembar Evaluasi / Asesmen Hasil Belajar",
      isDropdown: true,
      subInfo: {
        val1: "Ya",
        val2: "Tidak",
      },
    },
  ];

  const pelaksanaanPembelajaran = [
    {
      title: "Kesesuaian Metode Dengan Materi",
      isDropdown: true,
      subInfo: {
        val1: "Ya",
        val2: "Tidak",
      },
    },
    {
      title: "Meningkatkan Interaksi Pembelajaran",
      isDropdown: true,
      subInfo: {
        val1: "Ya",
        val2: "Tidak",
      },
    },
    {
      title:
        "Melakukan Kegiatan Pra Pembelajaran ( Kesiapan Ruang, Alat / Media Dan Siswa )",
      isDropdown: true,
      subInfo: {
        val1: "Ya",
        val2: "Tidak",
      },
    },
    {
      title:
        "Melaksanakan Pembelajaran Sesuai Kompetensi Dan Waktu Yang Akan Dicapai",
      isDropdown: true,
      subInfo: {
        val1: "Ya",
        val2: "Tidak",
      },
    },
    {
      title:
        "Menggunakan keterampilan untuk memelihara dan meningkatkan interaksi pembelajaran secara individu dan Memanfaatkan sumber / dan media dalam pembelajaran",
      isDropdown: true,
      subInfo: {
        val1: "Ya",
        val2: "Tidak",
      },
    },
    {
      title: "Melaksanakan refleksi dengan melibatkan siswa",
      isDropdown: true,
      subInfo: {
        val1: "Ya",
        val2: "Tidak",
      },
    },
    {
      title: "Melakukan tindak lanjut pembelajaran dengan tugas pengayaan",
      isDropdown: true,
      subInfo: {
        val1: "Ya",
        val2: "Tidak",
      },
    },
  ];

  const pelaksanaanEval = [
    {
      title: "Kesesuaian pelaksanaan evaluasi dengan disain",
      isDropdown: true,
      subInfo: {
        val1: "Ya",
        val2: "Tidak",
      },
    },
    {
      title: "Adanya nilai hasil belajar",
      isDropdown: true,
      subInfo: {
        val1: "Ya",
        val2: "Tidak",
      },
    },
    {
      title: "Adanya analisis hasil belajar",
      isDropdown: true,
      subInfo: {
        val1: "Ya",
        val2: "Tidak",
      },
    },
    {
      title: "Adanya program tindak lanjut",
      isDropdown: true,
      subInfo: {
        val1: "Ya",
        val2: "Tidak",
      },
    },
  ];

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
        <MonitorIlustration className="absolute bottom-[-20px] right-0 w-[100px] h-[100px]" />
      </div>
      <div className="w-full mt-5">
        <p className="text-2xl font-bold text-slate-700 text-center">
          Komponen Pembelajaran
        </p>

        {/* Sections for "Tampilan Guru", "Komunikasi Dengan Siswa", etc. */}
        {[
          {
            title:
              "Penyusunan Rencana Pembelajaran Sebagai Implementasi Hasil Pelatihan",
            fields: penyusunanRencana,
          },
          {
            title: "Pelaksanaan Pembelajaran",
            fields: pelaksanaanPembelajaran,
          },
          {
            title: "Pelaksanaan Evaluasi Pembelajaran",
            fields: pelaksanaanEval,
          },
        ].map((section, idx) => (
          <div
            key={idx}
            className="w-full shadow-primaryshadow p-5 mt-5 gap-x-10 gap-y-6"
          >
            <p className="text-xl font-semibold text-primary capitalize">
              {section.title}
            </p>
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-6 mt-5">
              {section.fields.map((field, index) => (
                <div
                  key={index}
                  className="flex flex-col justify-between gap-2"
                >
                  <p className="text-slate-700 font-bold capitalize">
                    {field.title}
                  </p>
                  {field.isDropdown ? (
                    <select
                      name={field.name}
                      value={values[field.name] || ""}
                      onChange={handleChange}
                      className="rounded-lg text-sm text-slate-700 scrollbar-none border border-gray-400 focus:border-primary focus:outline-none transition-colors duration-300 focus:ring-0 w-full"
                    >
                      <option value="">{field.subInfo.val1}</option>
                      <option value="">{field.subInfo.val2}</option>
                    </select>
                  ) : (
                    <input
                      name={field.name}
                      type={field.type || "text"}
                      value={values[field.name] || ""}
                      onChange={handleChange}
                      className="rounded-lg text-sm text-slate-700 scrollbar-none border border-gray-400 focus:border-primary focus:outline-none transition-colors duration-300 focus:ring-0 w-full"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="w-full grid grid-cols-2 gap-4 mt-5">
          <button
            onClick={prevStep}
            className="bg-slate-500 col-start-1 py-1 rounded-lg text-white border border-slate-500 hover:text-slate-500 hover:bg-white transition-all duration-300"
          >
            Sebelumnya
          </button>

          <button
            onClick={nextStep}
            className="bg-indigo-500 py-2 px-4 rounded-lg text-white border border-indigo-500 hover:text-indigo-500 hover:bg-white transition-all duration-300"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Step3;
