import React from "react";
import MonitorIlustration from "../../../Components/Image/MonitorIlustration";
import { Head } from "@inertiajs/react";

const Step2 = ({ prevStep, handleSubmit, handleChange, values }) => {
  const tampilanGuru = [
    { title: "Tampilan Menarik", name: "tampilan_menarik" },
    { title: "Sabar", name: "sabar" },
    { title: "Tidak Pilih Kasih", name: "pilih_kasih" },
  ];

  const komunikasiDgSiswa = [
    {
      title: "Sering Membantu Siswa Dalam Kesulitan",
      name: "sering_membantu_siswa",
    },
    {
      title: "Praktis Dalam Menjawab Pertanyaan",
      name: "praktis_dalam_menjawab",
    },
    { title: "Memberikan Motivasi Untuk Maju", name: "memberikan_motivasi" },
  ];

  const pengelolaanKelas = [
    { title: "Pemberian Tugas Secara Jelas", name: "pemberian_tugas" },
    {
      title: "Menciptakan Proses Pembelajaran Yang Menyenangkan",
      name: "menciptakan_pembelajaran",
    },
    { title: "Tepat Waktu Masuk, Istirahat Dan Belajar", name: "tepat_waktu" },
  ];

  const penguasaanMateri = [
    {
      title: "Penyampaian Materi Mudah Dipahami",
      name: "penyampaian_materi",
    },
    {
      title:
        "Penggunaan Alat Pendukung / Media Dan Peralatan Pendukung Dalam Pembelajaran",
      name: "penggunaan_media",
    },
    {
      title: "Mengaitkan Materi Dengan Realitas Kehidupan",
      name: "mengaitkan_materi",
    },
  ];

  const renderDropdown = (field) => (
    <select
      name={field.name}
      value={values[field.name] || ""}
      onChange={handleChange}
      className="rounded-lg text-sm text-slate-700 scrollbar-none border border-gray-400 focus:border-primary focus:outline-none transition-colors duration-300 focus:ring-0 w-full"
    >
      <option value="">Pilih</option>
      <option value="ya">Ya</option>
      <option value="tidak">Tidak</option>
    </select>
  );

  return (
    <div className="w-full max-w-[700px] mx-auto h-full p-5">
      <Head title="Form Edp" />
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
          Komponen Pelaksanaan Pembelajaran
        </p>

        <div className="w-full shadow-primaryshadow p-5 mt-5 gap-x-10 gap-y-6">
          <p className="text-xl font-semibold text-primary">
            PETUNJUK PENGISIAN
          </p>
          <div className="w-full">
            <p className="text-sm text-textPrimary pt-3">
              Dalam rangka memperoleh gambaran yang tepat mengenai Dampak
              terhadap Peningkatan Kualitas dan Kompetensi Pendidik dan Tenaga
              Kependidikan melalui pelatihan, mohon kiranya Anda dapat
              memberikan jawaban atas pertanyaan/pernyataan di bawah ini sesuai
              dengan pendapat Anda.
            </p>
            <p className="text-sm text-textPrimary pt-3">
              Instrumen ini bukan alat untuk mengukur prestasi kerja Anda, akan
              tetapi hanya digunakan untuk pengumpulan data monitoring dan
              evaluasi dampak diklat.
            </p>
          </div>
        </div>

        {[
          { title: "Tampilan Guru", fields: tampilanGuru },
          { title: "Komunikasi Dengan Siswa", fields: komunikasiDgSiswa },
          { title: "Pengelolaan Kelas", fields: pengelolaanKelas },
          { title: "Penguasaan Materi", fields: penguasaanMateri },
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
                <div
                  key={index}
                  className="flex flex-col justify-between gap-2"
                >
                  <p className="text-slate-700 font-bold">{field.title}</p>
                  {renderDropdown(field)}
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="w-full shadow-primaryshadow p-5 mt-5">
          <p className="text-primary font-bold">Saran Dan Masukan</p>

          <textarea
            name="saran_dan_masukan"
            value={values.saran_dan_masukan || ""}
            onChange={handleChange}
            className="rounded-lg text-sm text-slate-700 scrollbar-none border border-gray-400 focus:border-primary focus:outline-none transition-colors duration-300 focus:ring-0 w-full"
          ></textarea>
        </div>

        <div className="w-full grid grid-cols-2 gap-4 mt-5">
          <button
            onClick={prevStep}
            className="bg-slate-500 col-start-1 py-3 text-white font-semibold text-sm rounded-lg"
          >
            Kembali
          </button>
          <button
            onClick={handleSubmit}
            className="bg-primary col-start-2 py-3 text-white font-semibold text-sm rounded-lg"
          >
            Lanjut
          </button>
        </div>
      </div>
    </div>
  );
};

export default Step2;
