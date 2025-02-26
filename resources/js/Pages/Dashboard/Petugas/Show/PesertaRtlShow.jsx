import React, { useState, useEffect, useRef } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import AnalyticsIlustration from "@/Components/Image/AnalyticsIlustration";
import ModalMonitoringPeserta from "@/Components/Ui/Modal/ModalMonitoringPeserta";
import Search from "@/Components/Ui/Input/Search";
import { CiMenuKebab } from "react-icons/ci";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { router } from "@inertiajs/react";
import ModalMonitoringPesertaEdit from "@/Components/Ui/Modal/ModalMonitoringPesertaEdit";

const PesertaRtlShow = ({ biodata, Rtls, hasilMonitorings }) => {
  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState({});
  const [fetchingDistricts, setFetchingDistricts] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [buttonTambah, setButtonTambah] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const containerRef = useRef(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedSearchQuery, setDebouncedSearchQuery] = useState(searchQuery);
  const [timer, setTimer] = useState(null);
  const buttonRef = useRef(null);
  const [openEditModal, setOpenEditModal] = useState(false);

  const [rtlIdss, setRtlIds] = useState([]);
  const [monitoringRtlIdss, setMonitoringRtlIds] = useState([]);

  const handleOpenEditMonitoring = () => {
    setOpenEditModal(true);
  };

  useEffect(() => {
    const rtlIds = Rtls;
    console.log("Rtls (IDs only):", rtlIds);
    setRtlIds(rtlIds);

    const monitoringRtlIds = hasilMonitorings;
    console.log("HasilMonitorings (RTL IDs only):", monitoringRtlIds);
    setMonitoringRtlIds(monitoringRtlIds);
  }, [Rtls, hasilMonitorings]);

  useEffect(() => {
    const fetchProvinces = async () => {
      try {
        const response = await fetch(
          "https://www.emsifa.com/api-wilayah-indonesia/api/provinces.json"
        );
        const data = await response.json();
        setProvinces(data);
      } catch (error) {
        console.error("Error fetching provinces:", error);
      }
    };
    fetchProvinces();
  }, []);

  const fetchDistricts = async (provinceId) => {
    if (!districts[provinceId] && !fetchingDistricts) {
      setFetchingDistricts(true);
      try {
        const response = await fetch(
          `https://www.emsifa.com/api-wilayah-indonesia/api/regencies/${provinceId}.json`
        );
        const data = await response.json();
        setDistricts((prevDistricts) => ({
          ...prevDistricts,
          [provinceId]: data,
        }));
      } catch (error) {
        console.error("Error fetching districts:", error);
      } finally {
        setFetchingDistricts(false);
      }
    }
  };

  const getProvinceName = (id) => {
    if (id) {
      const province = provinces.find((p) => p.id === String(id));
      return province ? province.name : id; // If no province found, show the ID itself
    }
    return id; // Just return the ID if no matching province found
  };

  const getDistrictName = (provinceId, districtId) => {
    if (districtId) {
      const district = districts[provinceId]?.find((d) => d.id === String(districtId));
      return district ? district.name : districtId; // If district found, show the name, otherwise show the ID
    }
    return districtId; // If no districtId, return the districtId itself
  };

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

  const filteredData = Rtls.filter((kegiatan) =>
    kegiatan.nama_kegiatan
      .toLowerCase()
      .includes(debouncedSearchQuery.toLowerCase())
  );

  const handleSearchChange = (query) => {
    setSearchQuery(query);
  };

  const formFields = [
    { label: "Nama", type: "text", value: biodata.fullname },
    { label: "Sekolah", type: "text", value: biodata.sekolah },
    {
      label: "Provinsi",
      type: "text",
      value: biodata.provinsi ? getProvinceName(biodata.provinsi) : biodata.provinsi, // show biodata.provinsi directly
    },
    {
      label: "Kabupaten",
      type: "text",
      value: biodata.kabupaten
        ? getDistrictName(biodata.provinsi, biodata.kabupaten) // show biodata.kabupaten directly
        : biodata.kabupaten, // directly show biodata.kabupaten if available
    },
  ];
  

  const Viewkegiatan = filteredData.map((kegiatan) => ({
    top: {
      title: "Kegiatan",
      content: kegiatan.nama_kegiatan,
    },
    left: [
      {
        title: "tujuan",
        content: kegiatan.tujuan,
      },
      {
        title: "metode",
        content: kegiatan.metode,
      },
    ],
    right: [
      {
        title: "sasaran",
        content: kegiatan.sasaran,
      },
      {
        title: "tempat",
        content: kegiatan.tempat,
      },
    ],
    date: {
      date: kegiatan.formatted_waktu_pelaksanaan,
    },
  }));

  const ViewRtl = hasilMonitorings.map((monitoring) => ({
    id: monitoring.id, // Ensure id is included here
    top: {
      title: "RTL",
    },
    leftRTL: [
      {
        title: "Realisasi",
        content: monitoring.realisasi,
      },
      {
        title: "Kendala",
        content: monitoring.kendala,
      },
    ],
    rightRTL: {
      title: "Solusi",
      content: monitoring.solusi,
    },
    mid: {
      title: "Bukti Dukung",
    },
    leftBD: [
      {
        title: "Undangan",
        content: monitoring.undangan,
      },
      {
        title: "Daftar Hadir",
        content: monitoring.daftar_hadir,
      },
    ],
    rightBD: [
      {
        title: "Link Foto",
        content: monitoring.link_foto,
      },
      {
        title: "Link Video",
        content: monitoring.link_vidio,
      },
    ],
  }));

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleSelection = (index) => {
    setSelectedItem(index);
    setButtonTambah(true);
  };

  const handleClickOutside = (event) => {
    if (
      containerRef.current &&
      !containerRef.current.contains(event.target) &&
      buttonRef.current &&
      !buttonRef.current.contains(event.target)
    ) {
      setSelectedItem(null);
      setButtonTambah(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const [openMenu, setOpenMenu] = useState(null);
  const handleOpenMenu = (index) => {
    setOpenMenu(openMenu === index ? null : index);
  };

  const handleDelete = (id) => {
    console.log("Deleting item with id:", id); // Debugging statement
    router.delete(route("petugas.delete-rtl-peserta", { id }));
  };

  return (
    <AuthenticatedLayout
      header={
        <h2 className="text-xl font-semibold leading-tight text-gray-800">
          Dashboard
        </h2>
      }
    >
      <Head title="Dashboard Reporting Monitoring" />
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 pb-12 w-full h-full grid grid-cols-12 gap-5">
        <div className="bg-indigo-400 text-white shadow-xl pt-2 px-5 col-span-12 row-span-2 rounded-2xl flex justify-between h-[150px] overflow-hidden">
          <div className="">
            <p className="text-lg lg:text-2xl font-bold">Monitoring Data EDP</p>
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
          <div className="flex w-full items-center justify-between gap-2 flex-wrap">
            {formFields.map((field, index) => (
              <div key={index} className="w-full md:w-[200px] flex flex-col ">
                <p className="text-base text-textPrimary font-bold pl-1">
                  {field.label}
                </p>
                <input
                  type={field.type}
                  value={field.value}
                  disabled
                  className="rounded-lg text-sm text-textPrimary scrollbar-none bg-slate-50 border border-gray-400 focus:border-primary focus:outline-none transition-colors duration-300 focus:ring-0 w-full"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="w-full col-span-12 lg:col-span-12 row-span-6 justify-center rounded-xl gap-3 flex flex-col">
          <div className="grid grid-cols-10 gap-5">
            <div className="col-span-4 lg:col-span-3">
              <Search onChange={handleSearchChange} />
            </div>
            <div className="col-span-1 lg:col-span-5"></div>
            <button
              ref={buttonRef}
              onClick={selectedItem !== null ? handleOpenModal : null}
              className={`bg-primary text-white rounded-lg px-8 py-2 col-span-5 lg:col-span-2 border border-primary transition-all duration-300 ${
                buttonTambah
                  ? "cursor-pointer hover:bg-white hover:text-primary"
                  : "cursor-not-allowed opacity-70"
              }`}
              disabled={!buttonTambah}
            >
              Tambah Data Monitoring
            </button>
          </div>
        </div>
        <p className="col-span-12 py-2 text-center text-white font-bold bg-slate-400 opacity-80 rounded-xl">
          TOLONG PASTIKAN MENGISI HASIL MONITORING HANYA SATU KALI!
        </p>

        <div className="w-full col-span-12 grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="space-y-5">
            {Viewkegiatan.map((item, index) => (
              <div
                key={index}
                onClick={() => {
                  if (!monitoringRtlIdss.includes(item.id)) {
                    handleSelection(index);
                  }
                }}
                ref={selectedItem === index ? containerRef : null}
                className={`w-full h-[450px] shadow-primaryshadow p-8 rounded-xl gap-3 flex flex-col items-center relative space-y-2 transition-all duration-300 hover:bg-indigo-50
                ${rtlIdss.some((id) => monitoringRtlIdss.includes(id)) ? "cursor-not-allowed" : "cursor-pointer"}
                ${selectedItem === index ? "bg-indigo-50" : ""}`}
              >
                <div className="flex items-center justify-center flex-col">
                  <p className="text-xl font-bold text-textPrimary">
                    {item.top.title}
                  </p>
                  <p className="text-sm font-bold text-textSecondary">
                    {item.top.content}
                  </p>
                </div>
                <div className="w-full flex justify-between">
                  <div className="space-y-4">
                    {item.left.map((leftItem, index) => (
                      <div key={index}>
                        <div className="flex flex-col">
                          <p className="text-base font-bold text-textPrimary">
                            {leftItem.title}
                          </p>
                          <p className="text-sm font-bold text-textSecondary">
                            {leftItem.content}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-4">
                    {item.right.map((leftItem, index) => (
                      <div key={index}>
                        <div>
                          <p className="text-base font-bold text-textPrimary">
                            {leftItem.title}
                          </p>
                          <p className="text-sm font-bold text-textSecondary">
                            {leftItem.content}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <p className="absolute right-5 top-3 text-sm font-semibold text-textSecondary">
                  {item.date.date}
                </p>
              </div>
            ))}
          </div>
          <div className="space-y-5">
            {ViewRtl.map((item, index) => (
              <div
                key={index}
                className="w-full h-[450px] shadow-primaryshadow p-8 rounded-xl gap-3 flex flex-col items-center relative space-y-2 cursor-pointer transition-all duration-300"
              >
                <div className="absolute right-3 top-3">
                  <div className="relative">
                    <div className="group w-[40px] h-[40px] rounded-full hover:bg-primary transition-all ease-in-out duration-300 flex justify-center items-center">
                      <button
                        onClick={() => handleOpenMenu(index)}
                        className="text-2xl group-hover:text-white transition-all ease-in-out duration-300"
                      >
                        <CiMenuKebab />
                      </button>
                    </div>

                    {openMenu === index && (
                      <div
                        onClick={handleOpenEditMonitoring}
                        className="flex flex-col items-start bg-white absolute top-12 right-3 border rounded w-[120px]"
                      >
                        <button className="text-sm capitalize hover:bg-slate-200 transition-all duration-300 ease-in-out runded w-full py-3 text-start pl-5 flex items-center gap-3">
                          <FaEdit className="text-blue-500 text-lg" />
                          edit
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleDelete(item.id);
                          }}
                          className="text-sm capitalize hover:bg-slate-200 transition-all duration-300 ease-in-out runded w-full py-3 text-start pl-5 flex items-center gap-3"
                        >
                          <MdDelete className="text-red-500 text-lg" />
                          delete
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex items-center justify-center flex-col">
                  <p className="text-xl font-bold text-textPrimary">
                    {item.top.title}
                  </p>
                </div>
                <div className="w-full flex justify-between">
                  <div className="space-y-4">
                    {item.leftRTL.length ? (
                      item.leftRTL.map((leftItem, index) => (
                        <div className="" key={index}>
                          <p className="text-base font-bold text-textPrimary">
                            {leftItem.title}
                          </p>
                          <p className="text-sm font-bold text-textSecondary">
                            {leftItem.content}
                          </p>
                        </div>
                      ))
                    ) : (
                      <p className="text-sm text-gray-500">
                        No Monitoring Data
                      </p>
                    )}
                  </div>
                  <div className="space-y-4">
                    {item.rightRTL ? (
                      <div className="">
                        <p className="text-base font-bold text-textPrimary">
                          {item.rightRTL.title}
                        </p>
                        <p className="text-sm font-bold text-textSecondary">
                          {item.rightRTL.content}
                        </p>
                      </div>
                    ) : (
                      <p className="text-sm text-gray-500">
                        No Monitoring Data
                      </p>
                    )}
                  </div>
                </div>
                <div className="space-y-4 w-full">
                  <p className="text-xl font-bold text-textPrimary">
                    {item.mid.title}
                  </p>
                  <div className="flex justify-between">
                    <div className="space-y-4">
                      {item.leftBD.map((leftItem, index) => (
                        <div key={index}>
                          <p className="text-base font-bold text-textPrimary">
                            {leftItem.title}
                          </p>
                          <p className="text-sm font-bold text-textSecondary">
                            {leftItem.content}
                          </p>
                        </div>
                      ))}
                    </div>
                    <div className="space-y-4">
                      {item.rightBD.map((RightItem, index) => (
                        <div key={index}>
                          <p className="text-base font-bold text-textPrimary">
                            {RightItem.title}
                          </p>
                          <p className="text-sm font-bold text-textSecondary">
                            {RightItem.content}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {openModal && (
        <ModalMonitoringPeserta
          onClose={handleCloseModal}
          pesertaId={biodata.id}
        />
      )}

      {openEditModal && hasilMonitorings && (
        <ModalMonitoringPesertaEdit
          onClose={handleCloseModal}
          pesertaId={biodata.id}
          hasilMonitorings={hasilMonitorings} // Pass hasilMonitorings to the component
        />
      )}
    </AuthenticatedLayout>
  );
};

export default PesertaRtlShow;
