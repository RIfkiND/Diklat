import React from "react";
import MonitorIlustration from "./../../../Components/MonitorIlustration";

const Step2 = ({ nextStep, prevStep, handleChange, values }) => {
  const tampilanProgram = [
    {
      title: "Adanya Dokumen / Rencana Program Pengimbasan",
      isDropdown: true,
      subInfo: {
        val1: "Ya",
        val2: "Tidak",
      },
    },
    {
      title: "Kesesuaian Program Pengimbasan dengan Materi Pelatihan",
      isDropdown: true,
      subInfo: {
        val1: "Ya",
        val2: "Tidak",
      },
    },
    {
      title:
        "Adanya Dukungan Pihak terkait dalam Penyusunan Program Pengimbasan",
      isDropdown: true,
      subInfo: {
        val1: "Ya",
        val2: "Tidak",
      },
    },
  ];

  const komunikasiDgPelaksanaan = [
    {
      title: "Ada Jadwal dengan Pelaksanaan Pengimbasan",
      isDropdown: true,
      subInfo: {
        val1: "Ya",
        val2: "Tidak",
      },
    },
    {
      title: "Dukungan Pihak Terkait dalam Pelaksanaan Pengimbasan",
      isDropdown: true,
      subInfo: {
        val1: "Ya",
        val2: "Tidak",
      },
    },
    {
      title: "Ketersediaan Perangkat dan Fasilitas Pengimbasan",
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
          Komponen Pengimbasan ( Kolega )
        </p>

        <div className="w-full shadow-primaryshadow p-5 mt-5 gap-x-10 gap-y-6">
          <p className="text-xl font-semibold text-primary">
            PETUNJUK PENGISIAN
          </p>
          <div className="w-full">
            <p className="text-sm text-textPrimary pt-3">
              Dalam rangka memperoleh gambaran yang tepat mengenai Dampak
              terhadap Peningkatan Kualitas dan Kompetensi Pendidik dan Tenaga
              Kependidikan melalui Pelatihan, mohon kiranya Bapak/Ibu/Saudara
              dapat memberikan jawaban atas pertanyaan / pernyataan di bawah ini
              sesuai dengan pendapat
            </p>
            <p className="text-sm text-textPrimary pt-3">Bapak/Ibu/Saudara</p>
            <p className="text-sm text-textPrimary pt-3">
              Perhatikan, pada setiap aspek terdapat tiga (3) indikator atau
              lebih. Anda dapat memilih jawaban "Ya" (jika sesuai dengan
              kenyataan/buktinya) dan atau jawaban "Tidak" (jika tidak sesuai
              dengan kenyataan/buktinya) masing-masing indikator. Pemberian
              tanda check harus disertai dengan bukti fisik.
            </p>
            <p className="text-sm text-textPrimary pt-3">
              Instrumen ini bukan alat untuk mengukur prestasi kerja Anda, akan
              tetapi hanya digunakan untuk pengumpulan data monitoring dan
              evaluasi dampak diklat.
            </p>
          </div>
        </div>

        {/* Sections for "Tampilan Guru", "Komunikasi Dengan Siswa", etc. */}
        {[
          {
            title: "Program Pengimbasan",
            fields: tampilanProgram,
          },
          {
            title: "Pelaksanaan Pengimbasan",
            fields: komunikasiDgPelaksanaan,
          },
        ].map((section, idx) => (
          <div
            key={idx}
            className="w-full shadow-primaryshadow p-5 mt-5 gap-x-10 gap-y-6"
          >
            <p className="text-xl font-semibold text-primary">
              {section.title}
            </p>
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-6 mt-5">
              {section.fields.map((field, index) => (
                <div key={index} className="flex flex-col justify-between">
                  <p className="text-primary font-bold">{field.title}</p>
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
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Step2;
