import React, { useState, useEffect } from "react";
import Search from "@/Components/Ui/Input/Search";
import { MdCancel } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import Modal from "@/Components/Ui/Modal/Modal";
import MonitoringUser from "@/Components/Form/Monitoring/Read";

const TableMonitoringUser = ({ data }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [available] = useState("available");
  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [fetchingDistricts, setFetchingDistricts] = useState(false);

  // Fetch provinces once on mount
  // Fetch provinces once on mount
  useEffect(() => {
    const fetchProvinces = async () => {
      try {
        const response = await fetch(
          "https://www.emsifa.com/api-wilayah-indonesia/api/provinces.json",
        );
        const data = await response.json();
        setProvinces(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching provinces:", error);
        setLoading(false);
      }
    };

    fetchProvinces();
  }, []);

  // Fetch districts for a specific province ID if not already loaded
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
          [provinceId]: data, // Cache districts by province ID
        }));
      } catch (error) {
        console.error("Error fetching districts:", error);
      } finally {
        setFetchingDistricts(false);
      }
    }
  };

  // Get province name by ID
  const getProvinceName = (id) => {
    const province = provinces.find((p) => p.id === String(id));
    return province ? province.name : "Unknown Province";
  };

  // Get district name by ID and province ID
  const getDistrictName = (provinceId, districtId) => {
    if (!districts[provinceId]) {
      fetchDistricts(provinceId); // Trigger fetch if not cached
      return "Loading...";
    }
    const district = districts[provinceId].find(
      (d) => d.id === String(districtId),
    );
    return district ? district.name : "Unknown District";
  };

  if (loading) {
    return <p>Loading data...</p>;
  }

  return (
    <div className="grid grid-cols-12 gap-5">
      <div className="group py-5 h-full col-span-12 row-span-2 rounded-2xl relative flex items-center gap-5 justify-between z-50 flex-wrap w-full">
        <Search />
        <div className="flex items-center gap-5 flex-wrap w-full md:w-auto">
          <Modal
            show={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            maxWidth="2xl"
            className="w-full"
          >
            <div className="p-6">
              <MonitoringUser />
            </div>
          </Modal>
        </div>
      </div>

      <div className="group bg-white h-full col-span-12 lg:col-span-12 row-span-6 rounded-2xl relative">
        <div className="relative">
          <div className="overflow-x-auto scrollbar-none h-full">
            <table className="w-full rounded-lg text-center">
              <thead>
                <tr className="text-primary text-sm font-semibold">
                  <th className="py-3 px-4">No</th>
                  <th className="py-3 px-4">Nama</th>
                  <th className="py-3 px-4">Sekolah</th>
                  <th className="py-3 px-4">Provinsi</th>
                  <th className="py-3 px-4">Kabupaten</th>
                  <th className="py-3 px-4">Nama Pelatihan</th>
                  <th className="py-3 px-4">Periode Mulai</th>
                  <th className="py-3 px-4">Periode Akhir</th>
                  <th className="py-3 px-4">Selengkapnya</th>
                </tr>
              </thead>
              <tbody>
                {data.data.map((user, index) => (
                  <tr
                    key={index}
                    className={`text-gray-700 border-b hover:bg-indigo-50 text-sm cursor-pointer `}
                  >
                    <td className="py-3 px-4">{index + 1}</td>
                    <td className="py-3 px-4">{user.fullname}</td>
                    <td className="py-3 px-4">{user.sekolah}</td>
                    <td className="py-3 px-4">
                      {getProvinceName(user.provinsi)}
                    </td>
                    <td className="py-3 px-4">
                      {getDistrictName(user.provinsi, user.kabupaten)}
                    </td>
                    <td className="py-3 px-4">{user.pelatihan.name}</td>
                    <td className="py-3 px-4">
                      {user.formatted_periode_mulai}
                    </td>
                    <td className="py-3 px-4">
                      {user.formatted_periode_akhir}
                    </td>
                    <td className="py-3 px-4 ">
                      {available === "available" ? (
                        <button
                          onClick={() => setIsModalOpen(true)}
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableMonitoringUser;
