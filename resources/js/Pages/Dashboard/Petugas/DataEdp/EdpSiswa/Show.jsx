import { React, useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, usePage } from "@inertiajs/react";
import AnalyticsIlustration from "@/Components/Image/AnalyticsIlustration";

const Show = () => {
  const { selectedData } = usePage().props;

  const convertToYesNo = (value) => (value ? "YA" : "TIDAK");

  const formFields = [
    { label: "Nama", value: selectedData.nama_responden },
    { label: "Sekolah", value: selectedData.nama_institusi_sekolah },
    { label: "Kabupaten / Kota", value: selectedData.kabupaten_kota },
    { label: "No Whatsapp", value: selectedData.no_whatsapp },
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

  const komponenPelaksanaanPembelajaran = [
    {
      header: "Tampilan Guru",
      body: [
        {
          title: "Tampilan Menarik",
          desk: convertToYesNo(selectedData.tampilan_menarik),
        },
        {
          title: "Sabar",
          desk: convertToYesNo(selectedData.sabar),
        },
        {
          title: "Tidak Pilih Kasih",
          desk: convertToYesNo(selectedData.pilih_kasih),
        },
      ],
    },
    {
      header: "Komunikasi Dengan Siswa",
      body: [
        {
          title: "Sering Membantu Siswa Dalam Kesulitan",
          desk: convertToYesNo(selectedData.sering_membantu_siswa),
        },
        {
          title: "Praktis Dalam Menjawab Pertanyaan",
          desk: convertToYesNo(selectedData.praktis_dalam_menjawab),
        },
        {
          title: "Memberikan Motivasi Untuk Maju",
          desk: convertToYesNo(selectedData.memberikan_motivasi),
        },
      ],
    },
    {
      header: "Pengelolaan Kelas",
      body: [
        {
          title: "Pemberian Tugas Secara Jelas",
          desk: convertToYesNo(selectedData.pemberian_tugas),
        },
        {
          title: "Menciptakan Proses Pembelajaran Yang Menyenangkan",
          desk: convertToYesNo(selectedData.menciptakan_pembelajaran),
        },
        {
          title: "Tepat Waktu Masuk, Istirahat Dan Belajar",
          desk: convertToYesNo(selectedData.tepat_waktu),
        },
      ],
    },
    {
      header: "Penguasaan Materi",
      body: [
        {
          title: "Penyampaian Materi Mudah Dipahami",
          desk: convertToYesNo(selectedData.penyampaian_materi),
        },
        {
          title:
            "Penggunaan Alat Pendukung / Media Dan Peralatan Pendukung Dalam Pembelajaran",
          desk: convertToYesNo(selectedData.penggunaan_media),
        },
        {
          title: "Mengaitkan Materi Dengan Realitas Kehidupan",
          desk: convertToYesNo(selectedData.mengaitkan_materi),
        },
      ],
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
      <Head title="Dashboard Reporting Data RTL" />
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 pb-12 w-full h-full grid grid-cols-12 gap-5">
        <div className="bg-indigo-400 text-white shadow-xl pt-2 px-5 col-span-12 row-span-2 rounded-2xl flex justify-between h-[150px] overflow-hidden">
          <div className="">
            <p className="text-lg lg:text-2xl font-bold">
              Reporting Data RTL Peserta
            </p>
            <p className="text-base lg:text-sm text-slate-200">
              Pantau Perkembangan, Wujudkan Keberhasilan!
            </p>
          </div>

          <div className="relative w-[200px]">
            <div className="w-[120px] h-[120px] md:w-[200px] md:h-[200px] absolute bottom-[-10px] md:bottom-[-40px] right-0 md:right-5">
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
          {komponenPelaksanaanPembelajaran.map((item, index) => (
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
      </div>
    </AuthenticatedLayout>
  );
};

export default Show;
