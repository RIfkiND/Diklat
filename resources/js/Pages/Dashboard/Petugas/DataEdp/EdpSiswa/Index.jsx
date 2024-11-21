import React, { useState, useEffect, useRef } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, router } from "@inertiajs/react";
import Pagination from "@/Components/Ui/Pagination";
import Search from "@/Components/Ui/Input/Search";
import AnalyticsIlustration from "@/Components/Image/AnalyticsIlustration";
import { RiFile2Line2 } from "react-icons/ri";
import Modal from "@/Components/Ui/Modal/Modal";
import EditEdpPeserta from "@/Components/Form/Edp/EdpPeserta/Edit";

const Index = ({ Edp, search }) => {
  const [selectedRow, setSelectedRow] = useState(null); // Track selected row
  const [selectForm, setSelectForm] = useState(null); // Track selected row
  const tableRef = useRef(null);
  const buttonRef = useRef(null);
  const buttonReff = useRef(null);
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
    router.visit(route("search.edpsiswa", { search: query }), {
      preserveState: true,
      replace: true,
    });
  };

  const filteredData = Edp.data.filter((edp) =>
    edp.nama_responden
      .toLowerCase()
      .includes(debouncedSearchQuery.toLowerCase()),
  );

  const handleShowData = () => {
    if (selectedRow !== null) {
      const selectedData = Edp[selectedRow];
      router.visit(route("petugas.dataedp-edp-siswa.show"), {
        method: "get",
        data: { selectedData },
      });
    }
  };

  const handleModal = () => {
    if (selectForm !== null) {
      const selectedData = Edp[selectedRow];
      router.visit(route("petugas.dataedp-edp-siswa.show"), {
        method: "get",
        data: { selectedData },
      });
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        tableRef.current &&
        !tableRef.current.contains(event.target) &&
        !buttonRef.current.contains(event.target) &&
        !buttonReff.current.contains(event.target)
      ) {
        setSelectedRow(null);
        setSelectForm(null);
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
      <Head title="Dashboard Monitoring Edp Peserta" />
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 pb-12 w-full h-full grid grid-cols-12 gap-5">
        <div className="bg-indigo-400 text-white shadow-xl pt-2 px-5 col-span-12 row-span-2 rounded-2xl flex justify-between h-[150px] overflow-hidden">
          <div className="">
            <p className="text-lg lg:text-2xl font-bold">
              Monitoring Data EDP Peserta
            </p>
            <p className="text-base lg:text-sm text-slate-200">
              Pantau Perkembangan, Wujudkan Keberhasilan!
            </p>
          </div>

          <div className="relative w-[200px]  ">
            <div className="w-[120px] h-[120px] md:w-[200px] md:h-[200px] absolute bottom-[-10px] md:bottom-[-40px] right-0 md:right-5">
              <AnalyticsIlustration />
            </div>
          </div>
        </div>

        <div className="group py-5 h-full col-span-12 row-span-2 rounded-2xl relative flex items-center gap-5 justify-between z-50 flex-wrap w-full">
          <Search onSearchChange={handleSearchChange}/>
          <div className="flex items-center gap-5 flex-wrap w-full md:w-auto"></div>
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
                    <th className="py-3 px-4">Kabupaten / Kota</th>
                    <th className="py-3 px-4">No Whatsapp</th>
                    <th className="py-3 px-4">Email</th>
                    <th className="py-3 px-4">Tamatan Pelatihan</th>
                    <th className="py-3 px-4">Pelatihan Yang DIikuti</th>
                    <th className="py-3 px-4">Tanggal Dimulai</th>
                    <th className="py-3 px-4">Tanggal Selesai</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredData.map((user, index) => (
                    <tr
                      key={index}
                      className={`text-gray-700 border-b hover:bg-indigo-50 text-sm cursor-pointer ${
                        selectedRow === index ? "bg-indigo-100" : ""
                      }`}
                      onClick={() => setSelectedRow(index)}
                    >
                      <td className="py-3 px-4">{index + 1}</td>
                      <td className="py-3 px-4">{user.nama_responden}</td>
                      <td className="py-3 px-4">
                        {user.nama_institusi_sekolah}
                      </td>
                      <td className="py-3 px-4">{user.kabupaten_kota}</td>
                      <td className="py-3 px-4">{user.no_whatsapp}</td>
                      <td className="py-3 px-4">{user.email}</td>
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
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="sticky left-0 right-0 bottom-0 mt-5 flex justify-center">
              <Pagination paginateItems={Edp} />
              </div>
            </div>
          </div>
        </div>

        <button
          ref={buttonReff}
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
        <button
          ref={buttonRef}
          onClick={() => {
            handleModal;
            setIsOpenModal(!isOpenModal);
          }}
          className={`absolute lg:sticky bottom-5 right-5 lg:top-5 bg-indigo-400 ${
            selectedRow !== null
              ? " hover:bg-indigo-700 cursor-pointer"
              : "opacity-50 cursor-not-allowed"
          } shadow-xl p-5 h-6 lg:h-16 col-span-3 rounded-2xl flex items-center justify-center transition-all duration-300 ease-in-out z-10`}
        >
          <span className={`flex items-center font-bold gap-2 text-white `}>
            <RiFile2Line2 className="text-2xl" />
            Edit Peserta
          </span>
        </button>
        <Modal
          show={isOpenModal}
          onClose={() => setIsOpenModal(false)}
          maxWidth="xl"
          className="w-full"
        >
          <div className="p-6">
            <EditEdpPeserta />
          </div>
        </Modal>
      </div>
    </AuthenticatedLayout>
  );
};

export default Index;
