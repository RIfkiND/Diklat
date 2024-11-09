import { React, useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, usePage } from "@inertiajs/react";
import AnalyticsIlustration from "@/Components/Image/AnalyticsIlustration";

const Show = () => {
  const { selectedData } = usePage().props;

  const formFields = [
    { label: "Nama", value: selectedData.nama_responden },
    { label: "Sekolah", value: selectedData.nama_institusi_sekolah },
    { label: "Kabupaten / Kota", value: selectedData.kabupaten_kota },
    { label: "No Whatsapp", value: selectedData.no_whatsapp },
    { label: "Email", value: selectedData.email },
  ];

  const kegiatan = [
    {
      title: "Tamatan Pelatihan",
      desk: selectedData.nama_tamatan_pelatihan,
    },
    {
      title: "Pelatihan Yang DIikuti",
      desk: selectedData.nama_jenis_pelatihan,
    },
    {
      title: "Tanggal Dimulai",
      desk: selectedData.formatted_tanggal_dimulai,
    },
    {
      title: "Tanggal Selesai",
      desk: selectedData.formatted_tanggal_selesai,
    },
  ];

  const komponenPengimbasan = [
    {
      header: "Program Pengimbasan",
      body: [
        {
          title: "Adanya Dokumen / Rencana Program Pengimbasan",
          desk: selectedData.adanya_dokumen ? "YA" : "TIDAK",
        },
        {
          title: "Kesesuaian Program Pengimbasan dengan Materi Pelatihan",
          desk: selectedData.kesesuaian_program ? "YA" : "TIDAK",
        },
        {
          title:
            "Adanya Dukungan Pihak terkait dalam Penyusunan Program Pengimbasan",
          desk: selectedData.adanya_dukungan ? "YA" : "TIDAK",
        },
      ],
    },
    {
      header: "Pelaksanaan Pengimbasan",
      body: [
        {
          title: "Ada Jadwal dengan Pelaksanaan Pengimbasan",
          desk: selectedData.adanya_jadwal_pelaksanaan ? "YA" : "TIDAK",
        },
        {
          title: "Dukungan Pihak Terkait dalam Pelaksanaan Pengimbasan",
          desk: selectedData.dukungan_pihak_terkait ? "YA" : "TIDAK",
        },
        {
          title: "Ketersediaan Perangkat dan Fasilitas Pengimbasan",
          desk: selectedData.ketersidaan_perangkat_fasilitas ? "YA" : "TIDAK",
        },
      ],
    },
  ];

  const komponenPembelajaran = [
    {
      header:
        "Penyusunan Rencana Pembelajaran Sebagai Implementasi Hasil Pelatihan",
      body: [
        {
          title: "Adanya Silabus / RPP / Modul Ajar",
          desk: selectedData.adanya_silabus ? "YA" : "TIDAK",
        },
        {
          title: "Adanya Bahan Ajar / Media Pembelajaran",
          desk: selectedData.adanya_bahan_ajar ? "YA" : "TIDAK",
        },
        {
          title: "Adanya Lembar Evaluasi / Asesmen Hasil Belajar",
          desk: selectedData.adanya_lembar_evaluasi ? "YA" : "TIDAK",
        },
      ],
    },
    {
      header: "Pelaksanaan Pembelajaran",
      body: [
        {
          title: "Kesesuaian Metode Dengan Materi",
          desk: selectedData.kesesuaian_metode_materi ? "YA" : "TIDAK",
        },
        {
          title: "Meningkatkan Interaksi Pembelajaran",
          desk: selectedData.meningkatkan_interaksi ? "YA" : "TIDAK",
        },
        {
          title:
            "Melakukan Kegiatan Pra Pembelajaran ( Kesiapan Ruang, Alat / Media Dan Siswa )",
          desk: selectedData.melakukan_kegiatan_pra_pembelajaran
            ? "YA"
            : "TIDAK",
        },
        {
          title:
            "Melaksanakan Pembelajaran Sesuai Kompetensi Dan Waktu Yang Akan Dicapai",
          desk: selectedData.melaksanakan_pemebelajaran ? "YA" : "TIDAK",
        },
        {
          title:
            "Menggunakan keterampilan untuk memelihara dan meningkatkan interaksi pembelajaran secara individu dan Memanfaatkan sumber / dan media dalam pembelajaran",
          desk: selectedData.menggunakan_keterampilan ? "YA" : "TIDAK",
        },
        {
          title: "Melaksanakan refleksi dengan melibatkan siswa",
          desk: selectedData.melaksanakan_refleksi ? "YA" : "TIDAK",
        },
        {
          title: "Melakukan tindak lanjut pembelajaran dengan tugas pengayaan",
          desk: selectedData.melakukan_tindak_lanjut ? "YA" : "TIDAK",
        },
      ],
    },
    {
      header: "Pelaksanaan Evaluasi Pembelajaran",
      body: [
        {
          title: "Kesesuaian pelaksanaan evaluasi dengan disain",
          desk: selectedData.kesesuaian_pelaksanaan_evaluasi ? "YA" : "TIDAK",
        },
        {
          title: "Adanya nilai hasil belajar",
          desk: selectedData.adanya_nilai_hasil_belajar ? "YA" : "TIDAK",
        },
        {
          title: "Adanya analisis hasil belajar",
          desk: selectedData.adanya_analisis_belajar ? "YA" : "TIDAK",
        },
        {
          title: "Adanya program tindak lanjut",
          desk: selectedData.adanyan_program_tindak_lanjut ? "YA" : "TIDAK",
        },
      ],
    },
  ];

  const komponenPengembanganKeprofesianBerkelanjutan = [
    {
      header: "PROGRAM PENGEMBANGAN",
      body: [
        {
          title: "Adanya Program Pengembangan diri",
          desk: selectedData.adanya_program_pengembangan_diri ? "YA" : "TIDAK",
        },
        {
          title:
            "Adanya proposal pembuatan Karya Tulis Ilmiah / Inovatif / bukti karya",
          desk: selectedData.adanya_proposal_pembuatan_karya_tulis
            ? "YA"
            : "TIDAK",
        },
        {
          title: "Adanya dukungan pihak terkait",
          desk: selectedData.adanya_dukungan_pihak_terkait ? "YA" : "TIDAK",
        },
      ],
    },
    {
      header: "PELAKSANAAN PENGEMBANGAN",
      body: [
        {
          title: "Adanya Laporan Pelaksanaan Program Pengembangan Diri",
          desk: selectedData.adanya_laporan_pelaksanaan_program
            ? "YA"
            : "TIDAK",
        },
        {
          title: "Adanya Karya Tulis Ilmiah",
          desk: selectedData.adanya_karya_tulis_ilmiah ? "YA" : "TIDAK",
        },
        {
          title: "Adanya Karya Inovatif",
          desk: selectedData.adanya_karya_inovatif ? "YA" : "TIDAK",
        },
      ],
    },
  ];

  const saranDanMasukan = [
    {
      header: "Saran Dan Masukan",
      desk: selectedData.saran_masukan,
    },
  ];

  return (
    <AuthenticatedLayout
      header={
        <h2 className="text-xl font-semibold leading-tight text-gray-800">
          Dashboard
        </h2>
      }
    >
      <Head title="Dashboard" />
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 pb-12 w-full h-full grid grid-cols-12 gap-5">
        <div className="bg-indigo-400 text-white shadow-xl pt-5 px-5 col-span-12 row-span-2 rounded-2xl flex justify-between h-[150px] overflow-hidden">
          <div className="">
            <p className="text-lg lg:text-2xl font-bold">
              Reporting Data RTL Peserta
            </p>
            <p className="text-base lg:text-sm text-slate-200">
              Pantau Perkembangan, Wujudkan Keberhasilan!
            </p>
          </div>

          <div className="relative w-[200px]">
            <div className="w-[200px] h-[200px] absolute bottom-[-40px] right-0 md:right-5">
              <AnalyticsIlustration />
            </div>
          </div>
        </div>

        <div className="w-full h-full col-span-12 lg:col-span-12 row-span-6 shadow-primaryshadow p-5 rounded-xl gap-3 flex flex-col">
          <p className="text-2xl text-slate-500 font-bold">
            Data Profile Peserta
          </p>

          <div className="grid grid-cols-4 gap-5 w-full">
            {formFields.map((field, index) => (
              <div key={index} className="col-span-2 md:col-span-1">
                <p className="text-base text-textPrimary font-bold pl-1">
                  {field.label}
                </p>
                <input
                  type="text"
                  value={field.value}
                  disabled
                  className="rounded-lg text-sm text-textPrimary scrollbar-none bg-slate-50 border border-gray-400 focus:border-primary focus:outline-none transition-colors duration-300 focus:ring-0 w-full"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="w-full col-span-12 lg:col-span-6 row-span-6 h-full shadow-primaryshadow p-5 rounded-xl gap-3 flex flex-col">
          {kegiatan.map((item, index) => (
            <div className="" key={index}>
              <p className="text-primary font-semibold">{item.title}</p>
              <p className="text-textPrimary font-semibold">{item.desk}</p>
            </div>
          ))}
        </div>
        <div className="w-full col-span-12 lg:col-span-6 row-span-6 h-full shadow-primaryshadow p-5 rounded-xl gap-3 flex flex-col">
          {komponenPengimbasan.map((item, index) => (
            <div key={index}>
              <p className="text-primary font-semibold text-xl">
                {item.header}
              </p>

              {item.body.map((bodyItem, bodyIndex) => (
                <div key={bodyIndex} className="flex w-full p-2">
                  <div className="flex-1 p-2 mr-2">
                    <p className="text-slate-700 font-semibold">
                      {bodyItem.title}
                    </p>
                  </div>
                  <div className="flex-1 p-2">
                    <p className="text-textPrimary font-semibold">
                      {bodyItem.desk}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="w-full col-span-12 lg:col-span-6 row-span-6 h-full shadow-primaryshadow p-5 rounded-xl gap-3 flex flex-col">
          {komponenPembelajaran.map((item, index) => (
            <div key={index}>
              <p className="text-primary font-semibold text-xl">
                {item.header}
              </p>

              {item.body.map((bodyItem, bodyIndex) => (
                <div key={bodyIndex} className="flex w-full p-2">
                  <div className="flex-1 p-2 mr-2">
                    <p className="text-slate-700 font-semibold">
                      {bodyItem.title}
                    </p>
                  </div>
                  <div className="flex-1 p-2">
                    <p className="text-textPrimary font-semibold">
                      {bodyItem.desk}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="w-full col-span-12 lg:col-span-6 row-span-6 h-full shadow-primaryshadow p-5 rounded-xl gap-3 flex flex-col">
          {komponenPengembanganKeprofesianBerkelanjutan.map((item, index) => (
            <div key={index}>
              <p className="text-primary font-semibold text-xl">
                {item.header}
              </p>

              {item.body.map((bodyItem, bodyIndex) => (
                <div key={bodyIndex} className="flex w-full p-2">
                  <div className="flex-1 p-2 mr-2">
                    <p className="text-slate-700 font-semibold">
                      {bodyItem.title}
                    </p>
                  </div>
                  <div className="flex-1 p-2">
                    <p className="text-textPrimary font-semibold">
                      {bodyItem.desk}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="w-full col-span-12 lg:col-span-6 row-span-6 h-full shadow-primaryshadow p-5 rounded-xl gap-3 flex flex-col">
          {saranDanMasukan.map((item, index) => (
            <div className="" key={index}>
              <p className="text-primary font-semibold text-xl">
                {item.header}
              </p>
              <p className="text-textPrimary font-semibold">{item.desk}</p>
            </div>
          ))}
        </div>
      </div>
    </AuthenticatedLayout>
  );
};

export default Show;
