import React, { useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, router } from "@inertiajs/react";
import Search from "@/Components/Ui/Input/Search";
import { MdCancel } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import FilterByEndTime from "@/Components/Filter/FilterByEndTime";
import FilterByStartTime from "@/Components/Filter/FilteraBySrartTime";
import MonitorIlustration from "@/Components/Image/MonitorIlustration";
import Pagination from "@/Components/Ui/Pagination";

const SelectUser = () => {
  const handleView = () => {
    router.visit(route("Petugas.report-pendampingan-rtl-slug"));
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
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 pb-12 w-full h-full grid grid-cols-12 gap-5">
        <div className="bg-indigo-400 text-white shadow-xl pt-5 px-5 col-span-12 row-span-2 rounded-2xl flex justify-between h-[150px]">
          <div className="">
            <p className="text-sm lg:text-2xl font-bold">Monitoring Peserta</p>
            <p className="text-xs lg:text-sm text-slate-200">
              Pantau Perkembangan, Wujudkan Keberhasilan!
            </p>
          </div>

          <div className="relative w-[200px] overflow-hidden ">
            <div className="w-[100px] h-[100px] md:w-[200px] md:h-[200px] absolute bottom-0 md:bottom-[-40px] right-0 md:right-5">
              <MonitorIlustration />
            </div>
          </div>
        </div>

        <div className="group py-5 h-full col-span-12 row-span-2 rounded-2xl relative flex items-center gap-5 justify-between z-50 flex-wrap w-full">
          <Search />
          <div className="flex items-center gap-5 flex-wrap w-full md:w-auto">
            <FilterByStartTime />
            <FilterByEndTime />
          </div>
        </div>

        <div className="group bg-white shadow-primaryshadow p-5 h-full col-span-12 lg:col-span-12 row-span-6 rounded-2xl relative">
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
                      className={`text-gray-700 border-b hover:bg-indigo-50 text-sm cursor-pointer `}
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
                            onClick={handleView}
                            className="py-3 px-4 flex items-center gap-3 hover:bg-slate-200 rounded-xl"
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
              <div className="sticky left-0 right-0 bottom-0 mt-5 flex justify-center">
                <Pagination />
              </div>
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
};

export default SelectUser;
