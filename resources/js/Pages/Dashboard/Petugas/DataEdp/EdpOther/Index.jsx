import React, { useState, useEffect, useRef } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, router } from "@inertiajs/react";
import Pagination from "@/Components/Ui/Pagination";
import Search from "@/Components/Ui/Input/Search";
import AnalyticsIlustration from "@/Components/Image/AnalyticsIlustration";
import { RiFile2Line2, RiMore2Fill } from "react-icons/ri";
import Modal from "@/Components/Ui/Modal/Modal";
import EditOtherEdp from "@/Components/Form/Edp/EdpOther/Edit";
import { FaEdit, FaEllipsisV, FaEye } from "react-icons/fa";

const Index = ({ EdpOther, search }) => {
  const [selectedRow, setSelectedRow] = useState(null); // Track selected row
  const [selectForm, setSelectForm] = useState(null); // Track selected form data
  const tableRef = useRef(null);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState(search || "");
  const [debouncedSearchQuery, setDebouncedSearchQuery] = useState(searchQuery);
  const [timer, setTimer] = useState(null);

  useEffect(() => {
    if (timer) {
      clearTimeout(timer);
    }

    const newTimer = setTimeout(() => {
      setDebouncedSearchQuery(searchQuery);
    }, 500);

    setTimer(newTimer);

    return () => clearTimeout(newTimer);
  }, [searchQuery]);

  const handleSearchChange = (query) => {
    setSearchQuery(query);
    router.visit(route("search.edpother", { search: query }), {
      preserveState: true,
      replace: true,
    });
  };

  const handleShowData = (index) => {
    const selectedData = EdpOther.data[index];
    router.visit(route("petugas.data.edp-other.show"), {
      method: "get",
      data: { selectedData },
    });
  };

  const handleModalEdit = (index) => {
    const selectedData = EdpOther.data[index];
    setSelectForm(selectedData);
    setIsOpenModal(true);
  };

  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const [openMenuIndex, setOpenMenuIndex] = useState(null); // Simpan indeks menu yang terbuka

  // Fungsi untuk membuka/menutup menu berdasarkan indeks
  const handleOpenMenu = (index) => {
    if (openMenuIndex === index) {
      setOpenMenuIndex(null); // Tutup menu jika yang sama di-klik lagi
    } else {
      setOpenMenuIndex(index); // Buka menu untuk indeks tertentu
    }
  };

  return (
    <AuthenticatedLayout
      header={
        <h2 className="text-xl font-semibold leading-tight text-gray-800">
          Dashboard
        </h2>
      }
    >
      <Head title="Dashboard Rekap Edp" />
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 pb-12 w-full h-full grid grid-cols-12 gap-5">
        <div className="bg-indigo-400 text-white shadow-xl pt-2 px-5 col-span-12 row-span-2 rounded-2xl flex justify-between h-[150px] overflow-hidden">
          <div className="">
            <p className="text-lg lg:text-2xl font-bold">
              Monitoring Data Kolega, Tamatan, Pimpinan
            </p>
            <p className="text-base lg:text-sm text-slate-200">
              Pantau Perkembangan, Wujudkan Keberhasilan!
            </p>
          </div>

          <div className="relative w-[200px] ">
            <div className="w-[120px] h-[120px] md:w-[200px] md:h-[200px] absolute bottom-[-10px] md:bottom-[-40px] right-0 md:right-5">
              <AnalyticsIlustration />
            </div>
          </div>
        </div>

        <div className="group py-5 h-full col-span-12 row-span-2 rounded-2xl relative flex items-center gap-5 justify-between z-50 flex-wrap w-full">
          <Search onSearchChange={handleSearchChange} />
          <div className="flex items-center gap-5 flex-wrap w-full md:w-auto"></div>
        </div>

        <div
          ref={tableRef}
          className="group bg-white shadow-primaryshadow p-5 h-full col-span-12 row-span-6 rounded-2xl relative"
        >
          <div className="relative">
            <div className="overflow-x-auto scrollbar-none h-full">
              <table className="w-full rounded-lg">
                <thead>
                  <tr className="text-primary text-sm font-semibold">
                    <th className="py-3 px-4">No</th>
                    <th className="py-3 px-4">Nama</th>
                    <th className="py-3 px-4">Sekolah</th>
                    <th className="py-3 px-4">Kabupaten / Kota</th>
                    <th className="py-3 px-4">No Whatsapp</th>
                    <th className="py-3 px-4">Tamatan Pelatihan</th>
                    <th className="py-3 px-4">Pelatihan Yang DIikuti</th>
                    <th className="py-3 px-4">Tanggal Dimulai</th>
                    <th className="py-3 px-4">Tanggal Selesai</th>
                    <th className="py-3 px-4">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {EdpOther.data.map((user, index) => (
                    <tr
                      key={index}
                      className="text-gray-700 border-b hover:bg-indigo-50 text-sm cursor-pointer"
                    >
                      <td className="py-3 px-4">{index + 1}</td>
                      <td className="py-3 px-4">{user.nama_responden}</td>
                      <td className="py-3 px-4">
                        {user.nama_institusi_sekolah}
                      </td>
                      <td className="py-3 px-4">{user.kabupaten_kota}</td>
                      <td className="py-3 px-4">{user.no_whatsapp}</td>
                      <td className="py-3 px-4">
                        {user.nama_tamatan_pelatihan}
                      </td>
                      <td className="py-3 px-4">{user.nama_jenis_pelatihan}</td>
                      <td className="py-3 px-4">
                        {user.formatted_tanggal_dimulai}
                      </td>
                      <td className="py-3 px-4">
                        {user.formatted_tanggal_selesai}
                      </td>
                      <td className="">
                        <button
                          onClick={() => handleOpenMenu(index)}
                          className="hover:bg-primary transition-all duration-500 ease-in-out text-gray-600 hover:text-white p-2 rounded-full group"
                        >
                          <FaEllipsisV className="text-xl" />
                        </button>

                        {openMenuIndex === index && (
                          <div className="menu-container absolute z-10 space-y-2 bg-white border rounded shadow-lg">
                            <button
                              onClick={() => handleShowData(index)}
                              className="w-full flex items-center gap-2 px-7 py-2 hover:bg-gray-100 text-gray-700"
                            >
                              <FaEye className="text-teal-600" />
                              <span>View</span>
                            </button>
                            <button
                              onClick={() => handleModalEdit(index)}
                              className="w-full flex items-center gap-2 px-7 py-2 hover:bg-gray-100 text-gray-700"
                            >
                              <FaEdit className="text-blue-600" />
                              <span>Edit</span>
                            </button>
                          </div>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="sticky left-0 right-0 bottom-0 mt-5 flex justify-center">
                <Pagination paginateItems={EdpOther} />
              </div>
            </div>
          </div>
        </div>

        <Modal
          show={isOpenModal}
          onClose={() => setIsOpenModal(false)}
          maxWidth="xl"
          className="w-full"
        >
          <div className="p-6">
            <EditOtherEdp
              Edp={selectForm}
              EdpId={selectForm?.id}
              onCloseModal={() => setIsOpenModal(false)}
            />
          </div>
        </Modal>
      </div>
    </AuthenticatedLayout>
  );
};

export default Index;
