import React, { useState, useEffect, useRef } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import AnalyticsIlustration from "@/Components/Image/AnalyticsIlustration";
import ModalMonitoringPeserta from "@/Components/Ui/Modal/ModalMonitoringPeserta";
import Search from "@/Components/Ui/Input/Search";

const PesertaRtlShow = ({ biodata, Rtls }) => {
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

  useEffect(() => {
    const fetchProvinces = async () => {
      try {
        const response = await fetch(
          "https://www.emsifa.com/api-wilayah-indonesia/api/provinces.json",
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
          `https://www.emsifa.com/api-wilayah-indonesia/api/regencies/${provinceId}.json`,
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
    const province = provinces.find((p) => p.id === String(id));
    return province ? province.name : "Unknown Province";
  };

  const getDistrictName = (provinceId, districtId) => {
    if (!districts[provinceId]) {
      fetchDistricts(provinceId);
      return "Loading...";
    }
    const district = districts[provinceId].find(
      (d) => d.id === String(districtId),
    );
    return district ? district.name : "Unknown District";
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
      .includes(debouncedSearchQuery.toLowerCase()),
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
      value: getProvinceName(biodata.provinsi),
    },
    {
      label: "Kabupaten",
      type: "text",
      value: getDistrictName(biodata.provinsi, biodata.kabupaten),
    },
  ];

  // Step 3: Populate Viewkegiatan based on filteredData
  const Viewkegiatan = filteredData.map((kegiatan) => ({
    top: {
      title: kegiatan.nama_kegiatan, // Ensure this key exists in Rtls entries
      content: "test",
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

  const ViewRtl = [
    {
      top: {
        title: "RTL",
      },
      leftRTL: [
        {
          title: "Realisasi",
          content: "Realisasi content",
        },
        {
          title: "Kendala",
          content: "Kendala content",
        },
      ],
      rightRTL: {
        title: "Solusi",
        content: "Solusi content",
      },
      mid: {
        title: "Bukti Dukung",
      },
      leftBD: [
        {
          title: "Undangan",
          content: "Undangan content",
        },
        {
          title: "Daftar Hadir",
          content: "Daftar content",
        },
      ],
      rightBD: [
        {
          title: "Link Foto",
          content: "Link",
        },
        {
          title: "Link Video",
          content: "Link",
        },
      ],
    },
  ];

  // const [available , setAvailable] = useSttae(false)

  // const isRtlData =

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
  }, []); // Added empty dependency array to avoid unnecessary rerenders

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
              <Search />
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
        <div className="w-full col-span-12 lg:col-span-12 row-span-6 justify-center rounded-xl gap-3 flex flex-col">
          {Viewkegiatan.map((item, index) => (
            <div className="grid grid-cols-12 gap-5 h-full" key={index}>
              {/*  */}
              <div
                onClick={() => handleSelection(index)}
                ref={selectedItem === index ? containerRef : null}
                className={`w-full col-span-12 md:col-span-6 h-full shadow-primaryshadow p-8 rounded-xl gap-3 flex flex-col items-center relative space-y-2 cursor-pointer transition-all duration-300 hover:bg-indigo-50 ${
                  selectedItem === index ? "bg-indigo-50" : ""
                }`}
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
                  {/* Left Section */}
                  <div className="">
                    {item.left.map((leftItem, index) => (
                      <div className="space-y-4" key={index}>
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

                  {/* Right Section */}
                  <div className="">
                    {item.right.map((leftItem, index) => (
                      <div className="space-y-4" key={index}>
                        <div className="">
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

              {/* RTL */}
              {ViewRtl.map((item, index) => (
                <div
                  key={index}
                  className="w-full col-span-6 h-full shadow-primaryshadow p-8 rounded-xl gap-3 flex flex-col items-center relative space-y-2 cursor-pointer transition-all duration-300"
                >
                  <div className="flex items-center justify-center flex-col">
                    <p className="text-xl font-bold text-textPrimary">
                      {item.top.title}
                    </p>
                  </div>

                  <div className="w-full flex justify-between">
                    {/* Left RTL Section */}
                    <div className="">
                      {item.leftRTL.map((leftItem, index) => (
                        <div className="space-y-4" key={index}>
                          <div className="">
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

                    {/* Right RTL Section */}
                    <div className="">
                      <div className="space-y-4">
                        <div className="">
                          <p className="text-base font-bold text-textPrimary">
                            {item.rightRTL.title}
                          </p>
                          <p className="text-sm font-bold text-textSecondary">
                            {item.rightRTL.content}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bukti Dukung Section */}
                  <div className="space-y-4 w-full">
                    <p className="text-base font-bold text-textPrimary">
                      {item.mid.title}
                    </p>
                    <div className="flex justify-between">
                      <div className="">
                        {item.leftBD.map((leftItem, index) => (
                          <div className="space-y-4" key={index}>
                            <div className="">
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
                      <div className="">
                        {item.rightBD.map((RightItem, index) => (
                          <div className="space-y-4" key={index}>
                            <div className="">
                              <p className="text-base font-bold text-textPrimary">
                                {RightItem.title}
                              </p>
                              <p className="text-sm font-bold text-textSecondary">
                                {RightItem.content}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/*  */}
            </div>
          ))}
        </div>
      </div>
      {openModal && (
        <ModalMonitoringPeserta
          onClose={handleCloseModal}
          pesertaId={biodata.id}
        />
      )}
    </AuthenticatedLayout>
  );
};

export default PesertaRtlShow;
