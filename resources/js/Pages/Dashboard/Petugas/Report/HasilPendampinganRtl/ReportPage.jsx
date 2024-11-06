import { React, useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import AnalyticsIlustration from "@/Components/AnalyticsIlustration";
import { MdCancel } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import ModalMonitoringPeserta from "@/Components/ModalMonitoringPeserta";
import ModalViewPeserta from "@/Components/ModalViewPeserta";
import Pagination from "./../../../../../Components/Pagination";

const ReportPage = () => {
  const formFields = [
    { label: "Nama", type: "text", width: "w-[23%]" },
    { label: "Sekolah", type: "text", width: "w-[23%]" },
    { label: "Provinsi", type: "text", width: "w-[23%]" },
    { label: "Kabupaten", type: "text", width: "w-[23%]" },
  ];

  const [available] = useState("available");
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
        <div className="bg-indigo-400 text-white shadow-xl pt-5 px-5 col-span-12 row-span-2 rounded-2xl flex justify-between h-[150px] overflow-hidden">
          <div className="">
            <p className="text-sm lg:text-2xl font-bold">Monitoring Data EDP</p>
            <p className="text-xs lg:text-sm text-slate-200">
              Pantau Perkembangan, Wujudkan Keberhasilan!
            </p>
          </div>

          <div className="relative w-[200px]  ">
            <div className="w-[100px] h-[100px] md:w-[200px] md:h-[200px] absolute bottom-0 md:bottom-[-40px] right-0 md:right-5">
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
        <div className="w-full col-span-12 lg:col-span-9 row-span-6 h-full shadow-primaryshadow p-5 rounded-xl gap-3 flex flex-col">
          <div className="overflow-x-auto scrollbar-none h-full">
            <table className="w-full rounded-lg">
              <thead>
                <tr className="text-primary text-sm font-semibold">
                  <th className="py-3 px-4">No</th>
                  <th className="py-3 px-4">Nama Kegiatan</th>
                  <th className="py-3 px-4">Tujuan</th>
                  <th className="py-3 px-4">Sasaran</th>
                  <th className="py-3 px-4">Metode</th>
                  <th className="py-3 px-4">Tempat</th>
                  <th className="py-3 px-4">Waktu Pelaksanaan</th>
                  <th className="py-3 px-4">RTL</th>
                </tr>
              </thead>
              <tbody>
                {[...Array(10)].map((_, index) => (
                  <tr
                    key={index}
                    className={`text-gray-700 border-b hover:bg-indigo-50 text-sm cursor-pointer `}
                  >
                    <td className="py-3 px-4">{index + 1}</td>
                    <td className="py-3 px-4">Nama Kegiatan</td>
                    <td className="py-3 px-4">Tujuan Contoh</td>
                    <td className="py-3 px-4">Sasaran Contoh</td>
                    <td className="py-3 px-4">Metode Contoh</td>
                    <td className="py-3 px-4">Tempat Contoh</td>
                    <td className="py-3 px-4">11/2/2024</td>
                    <td className="py-3 px-4 ">
                      {available === "available" ? (
                        <button className="py-3 px-4 flex items-center gap-3 hover:bg-slate-200 rounded-xl">
                          <FaEye className="text-xl text-teal-600" />
                          <span className="text-sm">View</span>
                        </button>
                      ) : (
                        <div className="flex items-center gap-3">
                          <MdCancel className="text-xl text-red-500" />
                          <span className="text-sm">Not Available</span>
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="sticky left-0 right-0 bottom-0 mt-5 flex justify-center">
              <Pagination />
            </div>
          </div>
        </div>
      </div>
      {addModal && <ModalMonitoringPeserta onClose={handleCloseAddData} />}
      {viewRtl && <ModalViewPeserta onClose={handleCloseViewRtl} />}
    </AuthenticatedLayout>
  );
};

export default ReportPage;
