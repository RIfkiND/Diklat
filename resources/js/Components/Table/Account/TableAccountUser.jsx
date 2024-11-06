import React, { useEffect, useRef, useState } from "react";
import { FaEdit, FaEllipsisV, FaEye, FaTrash } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import Search from "@/Components/Search";
import PrimaryButton from "@/Components/PrimaryButton";
import Modal from "@/Components/Modal";
import CreateAccount from "@/Components/Form/CreateAccountUser";
import ReadAccount from "@/Components/Form/User/Read";
import EditAccount from "@/Components/Form/User/Edit";
const TableAccountUser = () => {
  const [available] = useState("available");
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mode, setMode] = useState("create");
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

  const handleDelete = (userId) => {
    if (confirm("Are you sure you want to delete this user?")) {
      console.log("Deleted user with ID:", userId);
    }
  };

  const data = [
    {
      id: 1,
      nama: "Nama Contoh",
      email: "Sekolah Contoh",
      no_hp: "Provinsi Contoh",
      password: "Kabupaten Contoh",
    },
    {
      id: 2,
      nama: "Nama Contoh",
      email: "Sekolah Contoh",
      no_hp: "Provinsi Contoh",
      password: "Kabupaten Contoh",
    },
    {
      id: 3,
      nama: "Nama Contoh",
      email: "Sekolah Contoh",
      no_hp: "Provinsi Contoh",
      password: "Kabupaten Contoh",
    },
    {
      id: 4,
      nama: "Nama Contoh",
      email: "Sekolah Contoh",
      no_hp: "Provinsi Contoh",
      password: "Kabupaten Contoh",
    },
    {
      id: 5,
      nama: "Nama Contoh",
      email: "Sekolah Contoh",
      no_hp: "Provinsi Contoh",
      password: "Kabupaten Contoh",
    },
    {
      id: 6,
      nama: "Nama Contoh",
      email: "Sekolah Contoh",
      no_hp: "Provinsi Contoh",
      password: "Kabupaten Contoh",
    },
    {
      id: 7,
      nama: "Nama Contoh",
      email: "Sekolah Contoh",
      no_hp: "Provinsi Contoh",
      password: "Kabupaten Contoh",
    },
    {
      id: 8,
      nama: "Nama Contoh",
      email: "Sekolah Contoh",
      no_hp: "Provinsi Contoh",
      password: "Kabupaten Contoh",
    },
    {
      id: 9,
      nama: "Nama Contoh",
      email: "Sekolah Contoh",
      no_hp: "Provinsi Contoh",
      password: "Kabupaten Contoh",
    },
    {
      id: 10,
      nama: "Nama Contoh",
      email: "Sekolah Contoh",
      no_hp: "Provinsi Contoh",
      password: "Kabupaten Contoh",
    },
  ];
  return (
    <>
      <div className="group py-5 h-full col-span-12 row-span-2 rounded-2xl relative gap-5 z-50 w-full">
        <div className="flex gap-5 justify-between w-full flex-wrap">
          <Search />
          <PrimaryButton
            className="rounded-xl flex items-center md:justify-center justify-start tracking-tight capitalize w-full md:w-auto "
            onClick={() => {
              setIsModalOpen(!isModalOpen);
              setMode("create");
            }}
          >
            Create Account
          </PrimaryButton>
        </div>
        <Modal
          show={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          maxWidth="xl"
          className="w-full"
        >
          <div className="p-6">
            {mode === "create" && <CreateAccount />}
            {mode === "read" && <ReadAccount />}
            {mode === "edit" && <EditAccount />}
          </div>
        </Modal>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full rounded-lg text-center">
          <thead>
            <tr className="text-primary text-sm font-semibold">
              <th className="py-3 px-4">No</th>
              <th className="py-3 px-4">Nama</th>
              <th className="py-3 px-4">Email</th>
              <th className="py-3 px-4">No HP</th>
              <th className="py-3 px-4">Password</th>
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
                <td className="py-3 px-4">{user.email}</td>
                <td className="py-3 px-4">{user.no_hp}</td>
                <td className="py-3 px-4">{user.password}</td>
                <td className="py-3 px-4 relative flex justify-center ">
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
                            onClick={() => {
                              setMode("read");
                              setIsModalOpen(true);
                            }}
                          >
                            <FaEye className="text-teal-600" />
                            <span>View</span>
                          </button>
                          <button
                            className="w-full flex items-center gap-2 px-4 py-2 hover:bg-gray-100 text-gray-700"
                            onClick={() => {
                              setMode("edit");
                              setIsModalOpen(true);
                            }}
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

export default TableAccountUser;
