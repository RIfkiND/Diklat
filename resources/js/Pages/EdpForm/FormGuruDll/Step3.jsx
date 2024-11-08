import React from "react";
import MonitorIlustration from "../../../Components/Image/MonitorIlustration";

const Step3 = ({ nextStep, prevStep, handleChange, values }) => {
  //
  const penyusunanRencana = [
    {
      title: "Adanya Silabus / RPP / Modul Ajar",
      name: "adanya_silabus",
      isDropdown: true,
      subInfo: {
        val1: "ya",
        val2: "tidak",
      },
    },
    {
      title: "Adanya Bahan Ajar / Media Pembelajaran",
      isDropdown: true,
      name: "adanya_bahan_ajar",
      subInfo: {
        val1: "ya",
        val2: "tidak",
      },
    },
    {
      title: "Adanya Lembar Evaluasi / Asesmen Hasil Belajar",
      isDropdown: true,
      name: "adanya_lembar_evaluasi",
      subInfo: {
        val1: "ya",
        val2: "tidak",
      },
    },
  ];

  const pelaksanaanPembelajaran = [
    {
      title: "Kesesuaian Metode Dengan Materi",
      isDropdown: true,
      name: "kesesuaian_metode_materi",
      subInfo: {
        val1: "ya",
        val2: "tidak",
      },
    },
    {
      title: "Meningkatkan Interaksi Pembelajaran",
      isDropdown: true,
      name: "meningkatkan_interaksi",
      subInfo: {
        val1: "ya",
        val2: "tidak",
      },
    },
    {
      title:
        "Melakukan Kegiatan Pra Pembelajaran ( Kesiapan Ruang, Alat / Media Dan Siswa )",
      isDropdown: true,
      name: "melakukan_kegiatan_pra_pembelajaran",
      subInfo: {
        val1: "ya",
        val2: "tidak",
      },
    },
    {
      title:
        "Melaksanakan Pembelajaran Sesuai Kompetensi Dan Waktu Yang Akan Dicapai",
      isDropdown: true,
      name: "melaksanakan_pemebelajaran",

      subInfo: {
        val1: "ya",
        val2: "tidak",
      },
    },
    {
      title:
        "Menggunakan keterampilan untuk memelihara dan meningkatkan interaksi pembelajaran secara individu dan Memanfaatkan sumber / dan media dalam pembelajaran",
      isDropdown: true,
      subInfo: {
        val1: "ya",
        val2: "tidak",
      },
    },
    {
      title: "Melaksanakan refleksi dengan melibatkan siswa",
      isDropdown: true,
      name: "melaksanakan_refleksi",

      subInfo: {
        val1: "ya",
        val2: "tidak",
      },
    },
    {
      title: "Melakukan tindak lanjut pembelajaran dengan tugas pengayaan",
      isDropdown: true,
      name: "melakukan_tindak_lanjut",
      subInfo: {
        val1: "ya",
        val2: "tidak",
      },
    },
  ];

  const pelaksanaanEval = [
    {
      title: "Kesesuaian pelaksanaan evaluasi dengan disain",
      isDropdown: true,
      name: "kesesuaian_pelaksanaan_evaluasi",
      subInfo: {
        val1: "ya",
        val2: "tidak",
      },
    },
    {
      title: "Adanya nilai hasil belajar",
      isDropdown: true,
      name: "adanya_nilai_hasil_belajar",
      subInfo: {
        val1: "ya",
        val2: "tidak",
      },
    },
    {
      title: "Adanya analisis hasil belajar",
      name: "adanya_analisis_belajar",
      isDropdown: true,
      subInfo: {
        val1: "ya",
        val2: "tidak",
      },
    },
    {
      title: "Adanya program tindak lanjut",
      isDropdown: true,
      name: "adanyan_program_tindak_lanjut",
      subInfo: {
        val1: "ya",
        val2: "tidak",
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
                      <option value="ya">{field.subInfo.val1}</option>
                      <option value="tidak">{field.subInfo.val2}</option>
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
