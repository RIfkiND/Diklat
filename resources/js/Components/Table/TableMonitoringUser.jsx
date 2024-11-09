import React, { useState } from "react";
import Search from "@/Components/Ui/Input/Search";
import { MdCancel } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import FilterByEndTime from "@/Components/Filter/FilterByEndTime";
import FilterByStartTime from "@/Components/Filter/FilteraBySrartTime";
import Modal from "@/Components/Ui/Modal/Modal";
import MonitoringUser from "@/Components/Form/Monitoring/Read";

const TableMonitoringUser = ({ data }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [available] = useState("available");
  return (
    <div className="grid grid-cols-12 gap-5">
      <div className="group py-5 h-full col-span-12 row-span-2 rounded-2xl relative flex items-center gap-5 justify-between z-50 flex-wrap w-full">
        <Search />
        <div className="flex items-center gap-5 flex-wrap w-full md:w-auto">
          <FilterByStartTime />
          <FilterByEndTime />
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
                {data.map((user, index) => (
                  <tr
                    key={index}
                    className={`text-gray-700 border-b hover:bg-indigo-50 text-sm cursor-pointer `}
                  >
                    <td className="py-3 px-4">{index + 1}</td>
                    <td className="py-3 px-4">{user.fullname}</td>
                    <td className="py-3 px-4">{user.sekolah}</td>
                    <td className="py-3 px-4">{user.provinsi}</td>
                    <td className="py-3 px-4">{user.kabupaten}</td>
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
