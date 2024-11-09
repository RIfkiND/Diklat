import { React, useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import AnalyticsIlustration from "@/Components/Image/AnalyticsIlustration";
import ModalMonitoringPeserta from "@/Components/Ui/Modal/ModalMonitoringPeserta";
import ModalViewPeserta from "@/Components/Ui/Modal/ModalViewPeserta";

const Show = () => {
  const formFields = [
    { label: "Nama", type: "text" },
    { label: "Sekolah", type: "text" },
    { label: "Kabupaten / Kota", type: "text" },
    { label: "No Whatsapp", type: "text" },
    { label: "Email", type: "text" },
  ];

  const kegiatan = [
    {
      title: "Tamatan Pelatihan",
      desk: "Membuat Perusaan Yang berfokus pada bidang teknologi",
    },
    {
      title: "Pelatihan Yang DIikuti",
      desk: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, modi beatae iure porro, reiciendis molestiae earum qui, distinctio nostrum doloremque aliquam cumque ea quos? Exercitationem minima natus molestiae blanditiis dolor. ",
    },
    {
      title: "Tanggal Dimulai",
      desk: "10/2/2024",
    },
    {
      title: "Tanggal Selesai",
      desk: "10/4/2024",
    },
  ];

  const komponenPelaksanaanPembelajaran = [
    {
      header: "Tampilan Guru",
      body: [
        {
          title: "Tampilan Menarik",
          desk: "YA",
        },
        {
          title: "Sabar",
          desk: "YA",
        },
        {
          title: "Tidak Pilih Kasih",
          desk: "YA",
        },
      ],
    },
    {
      header: "Komunikasi Dengan Siswa",
      body: [
        {
          title: "Sering Membantu Siswa Dalam Kesulitan",
          desk: "YA",
        },
        {
          title: "Praktis Dalam Menjawab Pertanyaan",
          desk: "YA",
        },
        {
          title: "Memberikan Motivasi Untuk Maju",
          desk: "YA",
        },
      ],
    },
    {
      header: "Pengelolaan Kelas",
      body: [
        {
          title: "Pemberian Tugas Secara Jelas",
          desk: "YA",
        },
        {
          title: "Menciptakan Proses Pembelajaran Yang Menyenangkan",
          desk: "YA",
        },
        {
          title: "Tepat Waktu Masuk, Istirahat Dan Belajar",
          desk: "YA",
        },
      ],
    },
    {
      header: "Penguasaan Materi",
      body: [
        {
          title: "Penyampaian Materi Mudah Dipahami",
          desk: "YA",
        },
        {
          title:
            "Penggunaan Alat Pendukung / Media Dan Peralatan Pendukung Dalam Pembelajaran",
          desk: "YA",
        },
        {
          title: "Mengaitkan Materi Dengan Realitas Kehidupan",
          desk: "YA",
        },
      ],
    },
  ];

  const dataRtl = [
    {
      title: "Realisasi",
      desk: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, modi beatae iure porro, reiciendis molestiae earum qui, distinctio nostrum doloremque aliquam cumque ea quos?",
    },
    {
      title: "Kendala",
      desk: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, modi beatae iure porro, reiciendis molestiae earum qui, distinctio nostrum doloremque aliquam cumque ea quos?",
    },
    {
      title: "Solusi",
      desk: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, modi beatae iure porro, reiciendis molestiae earum qui, distinctio nostrum doloremque aliquam cumque ea quos?",
    },
  ];

  const dataRtlBuktiDukung = [
    {
      title: "Undangan",
      desk: "Ya",
    },
    {
      title: "Daftar Hadir",
      desk: "Ya",
    },
    {
      title: "Link Foto",
      desk: "https://example.com/foto",
    },
    {
      title: "Link Video",
      desk: "https://example.com/video",
    },
  ];

  const [addModal, setAddModal] = useState(false);
  const [viewRtl, setViewRtl] = useState(false);

  const handleCloseAddData = () => {
    setAddModal(false);
  };

  const handleCloseViewRtl = () => {
    setViewRtl(false);
  };

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
                  type={field.type}
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
      {addModal && <ModalMonitoringPeserta onClose={handleCloseAddData} />}
      {viewRtl && <ModalViewPeserta onClose={handleCloseViewRtl} />}
    </AuthenticatedLayout>
  );
};

export default Show;
