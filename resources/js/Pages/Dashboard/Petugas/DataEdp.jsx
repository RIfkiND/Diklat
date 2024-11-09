import React, { useState, useEffect, useRef } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, router } from "@inertiajs/react";
// import Pagination from "@/Components/Ui/Pagination";
import Search from "@/Components/Ui/Input/Search";
// import FilterByEndTime from "@/Components/Filter/FilterByEndTime";
// import FilterByStartTime from "@/Components/Filter/FilteraBySrartTime";
import AnalyticsIlustration from "@/Components/Image/AnalyticsIlustration";
import { RiFile2Line2 } from "react-icons/ri";

const DataEdp = () => {
  const [selectedRow, setSelectedRow] = useState(null); // Track selected row
  const tableRef = useRef(null);
  const buttonRef = useRef(null);

  const handleShowData = () => {
    if (selectedRow !== null) {
      router.visit(route("petugas.data-edp-show"));
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        tableRef.current &&
        !tableRef.current.contains(event.target) &&
        !buttonRef.current.contains(event.target)
      ) {
        setSelectedRow(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <AuthenticatedLayout
      header={
        <h2 className="text-xl font-semibold leading-tight text-gray-800">
          Dashboard
        </h2>
      }
    >
      <Head title="Dashboard Monitoring" />
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 pb-12 w-full h-full grid grid-cols-12 gap-5">
        <div className="bg-indigo-400 text-white shadow-xl pt-2 px-5 col-span-12 row-span-2 rounded-2xl flex justify-between h-[150px] overflow-hidden">
          <div className="">
            <p className="text-lg lg:text-2xl font-bold">Monitoring Data EDP</p>
            <p className="text-base lg:text-sm text-slate-200">
              Pantau Perkembangan, Wujudkan Keberhasilan!
            </p>
          </div>

          <div className="relative w-[200px]  ">
            <div className="w-[120px] h-[120px] md:w-[200px] md:h-[200px] absolute md:bottom-[-40px] bottom-0 right-0 md:right-5">
              <AnalyticsIlustration />
            </div>
          </div>
        </div>

        <div className="group py-5 h-full col-span-12 row-span-2 rounded-2xl relative flex items-center gap-5 justify-between z-50 flex-wrap w-full">
          <Search />
          <div className="flex items-center gap-5 flex-wrap w-full md:w-auto">
            {/* <FilterByStartTime />
            <FilterByEndTime /> */}
          </div>
        </div>

        <div
          ref={tableRef}
          className="group bg-white shadow-primaryshadow p-5 h-full col-span-12 lg:col-span-9 row-span-6 rounded-2xl relative"
        >
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
                  </tr>
                </thead>
                <tbody>
                  {[...Array(10)].map((_, index) => (
                    <tr
                      key={index}
                      className={`text-gray-700 border-b hover:bg-indigo-50 text-sm cursor-pointer ${
                        selectedRow === index ? "bg-indigo-100" : ""
                      }`}
                      onClick={() => setSelectedRow(index)}
                    >
                      <td className="py-3 px-4">{index + 1}</td>
                      <td className="py-3 px-4">Nama Contoh</td>
                      <td className="py-3 px-4">Sekolah Contoh</td>
                      <td className="py-3 px-4">Provinsi Contoh</td>
                      <td className="py-3 px-4">Kabupaten Contoh</td>
                      <td className="py-3 px-4">Pelatihan Contoh</td>
                      <td className="py-3 px-4">2023</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="sticky left-0 right-0 bottom-0 mt-5 flex justify-center">
                {/* <Pagination /> */}
              </div>
            </div>
          </div>
        </div>

        <button
          ref={buttonRef}
          onClick={handleShowData}
          className={`absolute lg:sticky bottom-5 right-5 lg:top-5 bg-indigo-400 ${
            selectedRow !== null
              ? " hover:bg-indigo-700 cursor-pointer"
              : "opacity-50 cursor-not-allowed"
          } shadow-xl p-5 h-6 lg:h-16 col-span-3 rounded-2xl flex items-center justify-center transition-all duration-300 ease-in-out z-10`}
        >
          <span className={`flex items-center font-bold gap-2 text-white `}>
            <RiFile2Line2 className="text-2xl" />
            Tampilkan Rekap
          </span>
        </button>
      </div>
    </AuthenticatedLayout>
  );
};

export default DataEdp;
