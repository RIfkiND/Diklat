import { React, useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import MonitorIlustration from "./../../Components/MonitorIlustration";
import { IoIosAddCircleOutline } from "react-icons/io";
import Pagination from "./../../Components/Pagination";
import ModalMonitoringPeserta from "@/Components/ModalMonitoringPeserta";
import Search from "@/Components/Search";
import { MdCancel } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import FilterByEndTime from "@/Components/FilterByEndTime";
import FilterByStartTime from "@/Components/FilteraBySrartTime";
import ModalViewPeserta from "@/Components/ModalViewPeserta";

const MonitoringPeserta = () => {
  const [modalAddOpen, setmodalAddOpen] = useState(false);
  const [modalViewOpen, setmodalViewOpen] = useState(false);

  const handleOpenModalAdd = () => {
    setmodalAddOpen(true);
  };

  const handleCloseModalAdd = () => {
    setmodalAddOpen(false);
  };

  const handleOpenModalView = () => {
    setmodalViewOpen(true);
  };

  const handleCloseModalView = () => {
    setmodalViewOpen(false);
  };

  const [available] = useState("available");

  return (
    <AuthenticatedLayout
      header={
        <h2 className="text-xl font-semibold leading-tight text-gray-800">
          Dashboard
        </h2>
      }
    >
      <Head title="Dashboard" />
      <div className="p-12 w-full h-full grid grid-cols-12 gap-5">
        <div className="bg-indigo-400 text-white shadow-xl pt-5 px-5 col-span-12 row-span-2 rounded-2xl flex justify-between h-[150px]">
          <div className="">
            <p className="text-2xl font-bold">Monitoring Peserta</p>
            <p className="text-sm text-slate-200">
              Pantau Perkembangan, Wujudkan Keberhasilan!
            </p>
          </div>

          <div className="relative w-[200px] overflow-hidden ">
            <div className="w-[200px] h-[200px] absolute bottom-[-40px] right-5">
              <MonitorIlustration />
            </div>
          </div>
        </div>
        {/*  */}
        <div className="group py-5 h-full col-span-12 row-span-2 rounded-2xl relative flex items-center justify-between z-50">
          <Search />
          <div className="flex items-center gap-5">
            <FilterByStartTime />
            <FilterByEndTime />
          </div>
        </div>

        {/*  */}
        <div className="group bg-white shadow-primaryshadow p-5 h-full col-span-9 row-span-6 rounded-2xl relative">
          <div className="relative">
            <div className="overflow-x-auto scrollbar-none h-full">
              <table className="w-full rounded-lg">
                <thead>
                  <tr className="text-primary text-sm font-semibold">
                    <th className="py-3 px-4">No</th>
                    <th className="py-3 px-4">Nama</th>
                    <th className="py-3 px-4">Sekolah</th>
                    <th className="py-3 px-4">Provinsi</th>
                    <th className="py-3 px-4">Kabupaten</th>
                    <th className="py-3 px-4">Nama Pelatihan</th>
                    <th className="py-3 px-4">Periode</th>
                    <th className="py-3 px-4">Selengkapnya</th>
                  </tr>
                </thead>
                <tbody>
                  {[...Array(10)].map((_, index) => (
                    <tr
                      key={index}
                      className="text-gray-700 border-b hover:bg-indigo-50 text-sm cursor-pointer"
                    >
                      <td className="py-3 px-4">{index + 1}</td>
                      <td className="py-3 px-4">Nama Contoh</td>
                      <td className="py-3 px-4">Sekolah Contoh</td>
                      <td className="py-3 px-4">Provinsi Contoh</td>
                      <td className="py-3 px-4">Kabupaten Contoh</td>
                      <td className="py-3 px-4">Pelatihan Contoh</td>
                      <td className="py-3 px-4">2023</td>
                      <td className="py-3 px-4 ">
                        {available === "available" ? (
                          <button
                            className="py-3 px-4 flex items-center gap-3 hover:bg-slate-200 rounded-xl"
                            onClick={handleOpenModalView}
                          >
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
              <div className="absolute left-0 right-0 bottom-0 mt-5 flex justify-center">
                <Pagination />
              </div>

              {/* space for pagination */}
              <div className="mt-5">
                <div className="p-5"></div>
              </div>
            </div>
          </div>
        </div>

        <div
          onClick={handleOpenModalAdd} // Open modal on click
          className="sticky top-5 bg-indigo-400 shadow-xl p-5 h-16 col-span-3 rounded-2xl flex items-center justify-center cursor-pointer row-span-1 hover:bg-indigo-700 transition-all duration-300 ease-in-out z-10"
        >
          <span className="flex items-center font-bold text-white gap-2">
            <IoIosAddCircleOutline className="text-2xl text-white " />
            Tambah Data RTL
          </span>
        </div>
      </div>
      {modalAddOpen && <ModalMonitoringPeserta onClose={handleCloseModalAdd} />}
      {modalViewOpen && <ModalViewPeserta onClose={handleCloseModalView} />}
    </AuthenticatedLayout>
  );
};

export default MonitoringPeserta;
