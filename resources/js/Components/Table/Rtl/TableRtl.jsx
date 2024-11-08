import React, { useEffect, useRef, useState } from "react";
import { FaEllipsisV, FaEye, FaTrash } from "react-icons/fa"; // add faEdit
import { MdCancel } from "react-icons/md";
import FilterByStartTime from "@/Components/Filter/FilteraBySrartTime";
import FilterByEndTime from "@/Components/Filter/FilterByEndTime";
import Search from "@/Components/Ui/Input/Search";
import PrimaryButton from "@/Components/Ui/Button/PrimaryButton";
import Modal from "@/Components/Ui/Modal/Modal";
import DaptarRtl from "@/Components/Form/Rtl/Daftar";
// import EditRtl from "@/Components/Form/Rtl/Edit";
import ReadRtl from "@/Components/Form/Rtl/Read";
import { router } from "@inertiajs/react";

const TableRtlUser = ({ data }) => {
  const [available] = useState("available");
  const [openDropdown, setOpenDropdown] = useState(null);
  const dropdownRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [ismode, setIsMode] = useState("create");

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "2-digit", day: "2-digit" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleDelete = (userId) => {
    if (confirm("Yakin Ingin Delete ?")) {
      router.delete(route("user.register.delete", userId), {
        onSuccess: () => {
          console.log("Deleted Peserta with ID:", userId);
        },
        onError: (error) => {
          console.error("Error deleting user:", error);
          alert("There was an error deleting the user.");
        },
      });
    }
  };

  return (
    <>
      <div className="group py-5 h-full col-span-12 row-span-2 rounded-2xl relative flex items-center gap-5 justify-between z-50 flex-wrap w-full">
        <Search />
        <div className="flex items-center gap-5 flex-wrap w-full md:w-auto">
          <FilterByStartTime />
          <FilterByEndTime />
          <PrimaryButton
            className="w-full md:w-auto rounded-xl tracking-tight capitalize"
            onClick={() => {
              setIsModalOpen(!isModalOpen);
              setIsMode("create");
            }}
          >
            Daptar RTL
          </PrimaryButton>
          <Modal
            show={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            maxWidth="2xl"
            className="w-full"
          >
            <div className="p-6">
              {ismode === "create" && <DaptarRtl />}
              {/* {ismode === "edit" && <EditRtl />} */}
              {ismode === "read" && <ReadRtl />}
            </div>
          </Modal>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full rounded-lg text-center">
          <thead>
            <tr className="text-primary text-sm font-semibold">
              <th className="py-3 px-4">No</th>
              <th className="py-3 px-4">Nama Kegiatan</th>
              <th className="py-3 px-4">Sasaran</th>
              <th className="py-3 px-4">Metode</th>
              <th className="py-3 px-4">Tempat</th>
              <th className="py-3 px-4">Waktu Pelaksanaan</th>
              <th className="py-3 px-4">Selengkapnya</th>
            </tr>
          </thead>
          <tbody>
            {data.map((user, index) => (
              <tr
                key={user.id}
                className="text-gray-700 border-b hover:bg-indigo-50 text-sm cursor-pointer"
              >
                <td className="py-3 px-4">{index + 1}</td>
                <td className="py-3 px-4">{user.nama_kegiatan}</td>
                <td className="py-3 px-4">{user.sasaran}</td>
                <td className="py-3 px-4">{user.metode}</td>
                <td className="py-3 px-4">{user.tempat}</td>
                <td className="py-3 px-4">
                  {formatDate(user.waktu_pelaksanaan)}
                </td>
                <td className="py-3 px-4 relative flex justify-center">
                  {available === "available" ? (
                    <>
                      <button
                        className="py-3 px-4 flex items-center gap-3 hover:bg-slate-200 rounded-xl"
                        onClick={() =>
                          setOpenDropdown(
                            openDropdown === user.id ? null : user.id,
                          )
                        }
                      >
                        <FaEllipsisV className="text-xl text-gray-600" />
                      </button>
                      {openDropdown === user.id && (
                        <div
                          className="absolute right-0 top-0 mt-2 w-32 bg-white border rounded-lg shadow-lg z-50"
                          ref={dropdownRef}
                        >
                          <button
                            className="w-full flex items-center gap-2 px-4 py-2 hover:bg-gray-100 text-gray-700"
                            onClick={() => {
                              setIsMode("read");
                              setIsModalOpen(true);
                            }}
                          >
                            <FaEye className="text-teal-600" />
                            <span>View</span>
                          </button>
                          {/* <button
                            className="w-full flex items-center gap-2 px-4 py-2 hover:bg-gray-100 text-gray-700"
                            onClick={() => {
                              setIsMode("edit");
                              setIsModalOpen(true);
                            }}
                          >
                            <FaEdit className="text-blue-600" />
                            <span>Edit</span>
                          </button> */}
                          <button
                            className="w-full flex items-center gap-2 px-4 py-2 hover:bg-gray-100 text-gray-700"
                            onClick={() => handleDelete(user.id)}
                          >
                            <FaTrash className="text-red-600" />
                            <span>Delete</span>
                          </button>
                        </div>
                      )}
                    </>
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
    </>
  );
};

export default TableRtlUser;
