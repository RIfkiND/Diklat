import React from "react";
import MonitorIlustration from "./../../../Components/MonitorIlustration";

const Step4 = ({ nextStep, prevStep, handleChange, values }) => {
  //
  const programPengembangan = [
    {
      title: "Adanya Program Pengembangan diri",
      isDropdown: true,
      subInfo: {
        val1: "Ya",
        val2: "Tidak",
      },
    },
    {
      title:
        "Adanya proposal pembuatan Karya Tulis Ilmiah / Inovatif / bukti karya",
      isDropdown: true,
      subInfo: {
        val1: "Ya",
        val2: "Tidak",
      },
    },
    {
      title: "Adanya dukungan pihak terkait",
      isDropdown: true,
      subInfo: {
        val1: "Ya",
        val2: "Tidak",
      },
    },
  ];

  const pelaksanaanPengembangan = [
    {
      title: "Adanya Laporan Pelaksanaan Program Pengembangan Diri",
      isDropdown: true,
      subInfo: {
        val1: "Ya",
        val2: "Tidak",
      },
    },
    {
      title: "Adanya Karya Tulis Ilmiah",
      isDropdown: true,
      subInfo: {
        val1: "Ya",
        val2: "Tidak",
      },
    },
    {
      title: "Adanya Karya  Inovatif",
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
          KOMPONEN PENGEMBANGAN KEPROFESIAN BERKELANJUTAN
        </p>

        {/* Sections for "Tampilan Guru", "Komunikasi Dengan Siswa", etc. */}
        {[
          {
            title: "PROGRAM PENGEMBANGAN",
            fields: programPengembangan,
          },
          {
            title: "PELAKSANAAN PENGEMBANGAN",
            fields: pelaksanaanPengembangan,
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

        <div className="w-full shadow-primaryshadow p-5 mt-5">
          <p className="text-primary font-bold">Saran Dan Masukan</p>

          <textarea className="rounded-lg text-sm text-slate-700 scrollbar-none border border-gray-400 focus:border-primary focus:outline-none transition-colors duration-300 focus:ring-0 w-full"></textarea>
        </div>

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
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Step4;
