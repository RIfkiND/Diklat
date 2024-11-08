import { React, useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import AnalyticsIlustration from "@/Components/Image/AnalyticsIlustration";
import ModalMonitoringPeserta from "@/Components/Ui/Modal/ModalMonitoringPeserta";
import ModalViewPeserta from "@/Components/Ui/Modal/ModalViewPeserta";

const ReportPage = () => {
  const formFields = [
    { label: "Nama", type: "text", width: "w-[23%]" },
    { label: "Sekolah", type: "text", width: "w-[23%]" },
    { label: "Provinsi", type: "text", width: "w-[23%]" },
    { label: "Kabupaten", type: "text", width: "w-[23%]" },
  ];

  const kegiatan = [
    {
      title: "Nama Kegiatan",
      desk: "Membuat Perusaan Yang berfokus pada bidang teknologi",
    },
    {
      title: "Tujuan",
      desk: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, modi beatae iure porro, reiciendis molestiae earum qui, distinctio nostrum doloremque aliquam cumque ea quos? Exercitationem minima natus molestiae blanditiis dolor. ",
    },
    {
      title: "Sasaran",
      desk: "Guru Sejawat",
    },
    {
      title: "Metode",
      desk: "Luring",
    },
    {
      title: "Tempat",
      desk: "FastIncome",
    },
    {
      title: "Waktu Pelaksanaan",
      desk: "20/4/2024",
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
      <Head title="Dashboard" />
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

        <div className="w-full col-span-12 lg:col-span-12 row-span-6 h-full shadow-primaryshadow p-5 rounded-xl gap-3 flex flex-col">
          <p className="text-2xl text-slate-500 font-bold">
            Data Profile Peserta
          </p>

          <div className="flex min-w-[150px] items-center justify-between gap-8">
            {formFields.map((field, index) => (
              <div key={index} className="w-[50%]">
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
          {dataRtl.map((item, index) => (
            <div className="" key={index}>
              <p className="text-primary font-semibold">{item.title}</p>
              <p className="text-textPrimary font-semibold">{item.desk}</p>
            </div>
          ))}
          {dataRtlBuktiDukung.map((item, index) => (
            <div className="" key={index}>
              <p className="text-primary font-semibold">{item.title}</p>
              {item.title === "Link Foto" || item.title === "Link Video" ? (
                <Link
                  href={item.desk}
                  target="_blank"
                  className="text-blue-500 underline"
                >
                  {item.desk}
                </Link>
              ) : (
                <p className="text-textPrimary font-semibold">{item.desk}</p>
              )}
            </div>
          ))}
        </div>
      </div>
      {addModal && <ModalMonitoringPeserta onClose={handleCloseAddData} />}
      {viewRtl && <ModalViewPeserta onClose={handleCloseViewRtl} />}
    </AuthenticatedLayout>
  );
};

export default ReportPage;
