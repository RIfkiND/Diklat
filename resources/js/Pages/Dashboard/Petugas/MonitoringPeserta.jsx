  import React, { useState, useEffect } from "react";
  import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
  import { Head, router } from "@inertiajs/react";
  import MonitorIlustration from "@/Components/Image/MonitorIlustration";
  import Pagination from "@/Components/Ui/Pagination";
  import Search from "@/Components/Ui/Input/Search";
  import { FaEye } from "react-icons/fa";

  const MonitoringPeserta = ({ biodata, search }) => {
    const [searchQuery, setSearchQuery] = useState(search || "");
    const [debouncedSearchQuery, setDebouncedSearchQuery] = useState(searchQuery);
    const [timer, setTimer] = useState(null);
    const [provinces, setProvinces] = useState([]);
    const [districts, setDistricts] = useState({});
    const [fetchingDistricts, setFetchingDistricts] = useState(false);

    // Debounced search effect
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

    // useEffect(() => {
    //   const fetchProvinces = async () => {
    //     try {
    //       const response = await fetch(
    //         "https://www.emsifa.com/api-wilayah-indonesia/api/provinces.json"
    //       );
    //       const data = await response.json();
    //       setProvinces(data);
    //     } catch (error) {
    //       console.error("Error fetching provinces:", error);
    //     }
    //   };

    //   fetchProvinces();
    // }, []);

    // const fetchDistricts = async (provinceId) => {
    //   if (!districts[provinceId] && !fetchingDistricts) {
    //     setFetchingDistricts(true);
    //     try {
    //       const response = await fetch(
    //         `https://www.emsifa.com/api-wilayah-indonesia/api/regencies/${provinceId}.json`
    //       );
    //       const data = await response.json();
    //       setDistricts((prevDistricts) => ({
    //         ...prevDistricts,
    //         [provinceId]: data,
    //       }));
    //     } catch (error) {
    //       console.error("Error fetching districts:", error);
    //     } finally {
    //       setFetchingDistricts(false);
    //     }
    //   }
    // };

    // const getProvinceName = (id) => {
    //   const province = provinces.find((p) => p.id === String(id));
    //   return province ? province.name : "Unknown Province";
    // };

    // const getDistrictName = (provinceId, districtId) => {
    //   if (!districts[provinceId]) {
    //     fetchDistricts(provinceId);
    //     return "Loading...";
    //   }
    //   const district = districts[provinceId].find(
    //     (d) => d.id === String(districtId)
    //   );
    //   return district ? district.name : "Unknown District";
    // };

    const handleSearchChange = (query) => {
      setSearchQuery(query); 
      router.visit(route("search.monitoring", { search: query }), {
        preserveState: true,
        replace: true,
      });
    };

    const filteredData = biodata.data.filter((peserta) =>
      peserta.fullname.toLowerCase().includes(debouncedSearchQuery.toLowerCase())
    );

    const handleView = (id) => {
      router.visit(route("petugas.show-rtl-peserta", { id }));
    };

    return (
      <AuthenticatedLayout
        header={
          <h2 className="text-xl font-semibold leading-tight text-gray-800">
            Dashboard
          </h2>
        }
      >
        <Head title="Dashboard Monitoring Peserta" />
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 pb-12 w-full h-full grid grid-cols-12 gap-5">
          <div className="bg-indigo-400 text-white shadow-xl pt-2 px-5 col-span-12 row-span-2 rounded-2xl flex justify-between h-[150px] overflow-hidden">
            <div>
              <p className="text-lg lg:text-2xl font-bold">Monitoring Peserta</p>
              <p className="text-base lg:text-sm text-slate-200">
                Pantau Perkembangan, Wujudkan Keberhasilan!
              </p>
            </div>
            <div className="relative w-[200px] ">
              <div className="w-[120px] h-[120px] md:w-[200px] md:h-[200px] absolute md:bottom-[-40px] bottom-0 right-0 md:right-5">
                <MonitorIlustration
                  images={"/images/ilustrasi/Monitor-bro.svg"}
                />
              </div>
            </div>
          </div>

          <div className="group py-5 h-full col-span-12 row-span-2 rounded-2xl relative flex items-center gap-5 justify-between z-50 flex-wrap w-full">
            <Search onSearchChange={handleSearchChange} />
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
                      <th className="py-3 px-4">Data RTL</th>
                    </tr>
                  </thead>
                  <tbody>
                    {biodata.data.length > 0 ? (
                      biodata.data.map((peserta, index) => (
                        <tr
                          key={peserta.id}
                          className="text-gray-700 border-b hover:bg-indigo-50 text-sm cursor-pointer"
                        >
                          <td className="py-3 px-4">{index + 1}</td>
                          <td className="py-3 px-4">{peserta.fullname}</td>
                          <td className="py-3 px-4">
                            {peserta.sekolah || "tidak ada"}
                          </td>
                          <td className="py-3 px-4">
                            {peserta.provinsi || "tidak ada"}
                          </td>
                          <td className="py-3 px-4">
                            {
                             peserta.kabupaten
                            }
                          </td>
                          <td className="py-3 px-4">
                            {peserta.pelatihan.name || "tidak ada"}
                          </td>
                          <td className="py-3 px-4">
                            {peserta.periode_mulai || "tidak ada"}
                          </td>
                          <td className="py-3 px-4">
                            <button
                              onClick={() => handleView(peserta.id)}
                              className="py-3 px-4 flex items-center gap-3 hover:bg-slate-200 rounded-xl"
                            >
                              <FaEye className="text-xl text-teal-600" />
                              <span className="text-sm">View</span>
                            </button>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td
                          colSpan="8"
                          className="text-center py-5 text-gray-500 text-lg font-bold "
                        >
                          Tidak ada data
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
                <div className="sticky left-0 right-0 bottom-0 mt-5 flex justify-center">
                  <Pagination paginateItems={biodata} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </AuthenticatedLayout>
    );
  };

  export default MonitoringPeserta;
