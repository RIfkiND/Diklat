import { React, useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import MonitorIlustration from "./../../Components/MonitorIlustration";
import { IoIosAddCircleOutline } from "react-icons/io";
import Pagination from "./../../Components/Pagination";
import ModalMonitoringPeserta from "@/Components/ModalMonitoringPeserta";

const MonitoringPeserta = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
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
        <div className="group bg-white shadow-2xl p-5 h-full col-span-9 row-span-6 rounded-2xl relative">
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
                    <th className="py-3 px-4">Realisasi</th>
                    <th className="py-3 px-4">Kendala</th>
                    <th className="py-3 px-4">Solusi</th>
                    <th className="py-3 px-4">Bukti Dukung</th>
                  </tr>
                </thead>
                <tbody>
                  {[...Array(20)].map((_, index) => (
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
                      <td className="py-3 px-4"></td>
                      <td className="py-3 px-4"></td>
                      <td className="py-3 px-4"></td>
                      <td className="py-3 px-4"></td>
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
          onClick={handleOpenModal} // Open modal on click
          className="sticky top-5 bg-indigo-400 shadow-xl p-5 h-16 col-span-3 rounded-2xl flex items-center justify-center cursor-pointer row-span-1 hover:bg-indigo-700 transition-all duration-300 ease-in-out z-10"
        >
          <span className="flex items-center font-bold text-white gap-2">
            <IoIosAddCircleOutline className="text-2xl text-white " />
            Tambah Data RTL
          </span>
        </div>
      </div>
      {modalOpen && <ModalMonitoringPeserta onClose={handleCloseModal} />}
    </AuthenticatedLayout>
  );
};

export default MonitoringPeserta;
