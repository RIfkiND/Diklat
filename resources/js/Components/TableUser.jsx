import React, { useEffect, useRef, useState } from "react";
import { FaEdit, FaEllipsisV, FaEye, FaTrash } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import { router } from "@inertiajs/react";
import FilterByStartTime from "./FilteraBySrartTime";
import FilterByEndTime from "./FilterByEndTime";
import Search from "./Search";
const TableUser = () => {
  const [available] = useState("available");
  const [openDropdown, setOpenDropdown] = useState(null);
  const dropdownRef = useRef(null);

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

  const handleView = () => {
    router.visit(route("admin.users.view"));
  };

  const handleEdit = () => {
    router.visit(route("admin.users.edit"));
  };

  const handleDelete = (userId) => {
    if (confirm("Are you sure you want to delete this user?")) {
      console.log("Deleted user with ID:", userId);
    }
  };

  const data = [
    {
      id: 1,
      nama: "Nama Contoh",
      sekolah: "Sekolah Contoh",
      provinsi: "Provinsi Contoh",
      kabupaten: "Kabupaten Contoh",
      pelatihan: "Pelatihan Contoh",
      periode: "2023",
    },
    {
      id: 2,
      nama: "Nama Contoh",
      sekolah: "Sekolah Contoh",
      provinsi: "Provinsi Contoh",
      kabupaten: "Kabupaten Contoh",
      pelatihan: "Pelatihan Contoh",
      periode: "2023",
    },
    {
      id: 3,
      nama: "Nama Contoh",
      sekolah: "Sekolah Contoh",
      provinsi: "Provinsi Contoh",
      kabupaten: "Kabupaten Contoh",
      pelatihan: "Pelatihan Contoh",
      periode: "2023",
    },
    {
      id: 4,
      nama: "Nama Contoh",
      sekolah: "Sekolah Contoh",
      provinsi: "Provinsi Contoh",
      kabupaten: "Kabupaten Contoh",
      pelatihan: "Pelatihan Contoh",
      periode: "2023",
    },
    {
      id: 5,
      nama: "Nama Contoh",
      sekolah: "Sekolah Contoh",
      provinsi: "Provinsi Contoh",
      kabupaten: "Kabupaten Contoh",
      pelatihan: "Pelatihan Contoh",
      periode: "2023",
    },
    {
      id: 6,
      nama: "Nama Contoh",
      sekolah: "Sekolah Contoh",
      provinsi: "Provinsi Contoh",
      kabupaten: "Kabupaten Contoh",
      pelatihan: "Pelatihan Contoh",
      periode: "2023",
    },
    {
      id: 7,
      nama: "Nama Contoh",
      sekolah: "Sekolah Contoh",
      provinsi: "Provinsi Contoh",
      kabupaten: "Kabupaten Contoh",
      pelatihan: "Pelatihan Contoh",
      periode: "2023",
    },
    {
      id: 8,
      nama: "Nama Contoh",
      sekolah: "Sekolah Contoh",
      provinsi: "Provinsi Contoh",
      kabupaten: "Kabupaten Contoh",
      pelatihan: "Pelatihan Contoh",
      periode: "2023",
    },
    {
      id: 9,
      nama: "Nama Contoh",
      sekolah: "Sekolah Contoh",
      provinsi: "Provinsi Contoh",
      kabupaten: "Kabupaten Contoh",
      pelatihan: "Pelatihan Contoh",
      periode: "2023",
    },
    {
      id: 10,
      nama: "Nama Contoh",
      sekolah: "Sekolah Contoh",
      provinsi: "Provinsi Contoh",
      kabupaten: "Kabupaten Contoh",
      pelatihan: "Pelatihan Contoh",
      periode: "2023",
    },
  ];
  return (
    <>
      <div className="group py-5 h-full col-span-12 row-span-2 rounded-2xl relative flex items-center gap-5 justify-between z-50 flex-wrap w-full">
        <Search />
        <div className="flex items-center gap-5 flex-wrap w-full md:w-auto">
          <FilterByStartTime />
          <FilterByEndTime />
        </div>
      </div>
      <div className="overflow-x-auto">
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
            {data.map((user, index) => (
              <tr
                key={index}
                className="text-gray-700 border-b hover:bg-indigo-50 text-sm cursor-pointer"
              >
                <td className="py-3 px-4">{index + 1}</td>
                <td className="py-3 px-4">{user.nama}</td>
                <td className="py-3 px-4">{user.sekolah}</td>
                <td className="py-3 px-4">{user.provinsi}</td>
                <td className="py-3 px-4">{user.kabupaten}</td>
                <td className="py-3 px-4">{user.pelatihan}</td>
                <td className="py-3 px-4">{user.periode}</td>
                <td className="py-3 px-4 relative ">
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
                          className="absolute right-0  top-0 mt-2 w-32 bg-white border rounded-lg shadow-lg z-10"
                          ref={dropdownRef}
                        >
                          <button
                            className="w-full flex items-center gap-2 px-4 py-2 hover:bg-gray-100 text-gray-700"
                            onClick={() => handleView(user.id)}
                          >
                            <FaEye className="text-teal-600" />
                            <span>View</span>
                          </button>
                          <button
                            className="w-full flex items-center gap-2 px-4 py-2 hover:bg-gray-100 text-gray-700"
                            onClick={() => handleEdit(user.id)}
                          >
                            <FaEdit className="text-blue-600" />
                            <span>Edit</span>
                          </button>
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

export default TableUser;
