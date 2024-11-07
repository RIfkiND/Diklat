import React, { useEffect, useRef, useState } from "react";
import { FaEdit, FaEllipsisV, FaEye, FaTrash } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import Search from "@/Components/Ui/Input/Search";
import PrimaryButton from "@/Components/Ui/Button/PrimaryButton";
import Modal from "@/Components/Ui/Modal/Modal";
import CreateAccountPetugas from "@/Components/Form/CreateAccountPetugas";
import ReadAccountPetugas from "@/Components/Form/Petugas/Read";
import EditAccountPetugas from "@/Components/Form/Petugas/Edit";
import { router } from "@inertiajs/react";
const TableAccountPetugas = ({ data }) => {
  const [available] = useState("available");
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mode, setMode] = useState("create");
  const [selectedPetugas, setSelectedPetugas] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedSearchQuery, setDebouncedSearchQuery] = useState(searchQuery);
  const [timer, setTimer] = useState(null);
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
  const filteredData = data.data.filter((peserta) => {
    const query = debouncedSearchQuery.toLowerCase();

    if (!isNaN(query)) {
      return peserta.NIP.toString().includes(query);
    } else {
      return peserta.name.toLowerCase().includes(query);
    }
  });
  const handleDelete = (petugasId) => {
    if (confirm("Yakin Ingin Delete Petugas ?")) {
      router.delete(route("admin.delete.petugas", petugasId), {
        onSuccess: () => {
          console.log("Deleted Petugas :", petugasId);
        },
        onError: (error) => {
          console.error("Error deleting Petugas:", error);
          alert("Gagal Menghapus Petugas");
        },
      });
    }
  };

  const handleSearchChange = (query) => {
    setSearchQuery(query);
  };

  // const data = [
  //   {
  //     id: 1,
  //     nip: "1923456789",
  //     nama: "Nama Contoh",
  //     password: "Kabupaten Contoh",
  //   },
  //   {
  //     id: 2,
  //     nip: "1923456789",
  //     nama: "Nama Contoh",
  //     password: "Kabupaten Contoh",
  //   },
  //   {
  //     id: 3,
  //     nip: "1923456789",
  //     nama: "Nama Contoh",
  //     password: "Kabupaten Contoh",
  //   },
  //   {
  //     id: 4,
  //     nip: "1923456789",
  //     nama: "Nama Contoh",
  //     password: "Kabupaten Contoh",
  //   },
  //   {
  //     id: 5,
  //     nip: "1923456789",
  //     nama: "Nama Contoh",
  //     password: "Kabupaten Contoh",
  //   },
  //   {
  //     id: 6,
  //     nip: "1923456789",
  //     nama: "Nama Contoh",
  //     password: "Kabupaten Contoh",
  //   },
  //   {
  //     id: 7,
  //     nip: "1923456789",
  //     nama: "Nama Contoh",
  //     password: "Kabupaten Contoh",
  //   },
  //   {
  //     id: 8,
  //     nip: "1923456789",
  //     nama: "Nama Contoh",
  //     password: "Kabupaten Contoh",
  //   },
  //   {
  //     id: 9,
  //     nip: "1923456789",
  //     nama: "Nama Contoh",
  //     password: "Kabupaten Contoh",
  //   },
  //   {
  //     id: 10,
  //     nip: "1923456789",
  //     nama: "Nama Contoh",
  //     password: "Kabupaten Contoh",
  //   },
  // ];
  return (
    <div className="grid grid-cols-12 gap-5">
      <div className="group py-5 h-full col-span-12 row-span-2 rounded-2xl relative gap-5 z-50 w-full">
        <div className="flex gap-5 justify-between w-full flex-wrap">
          <Search onSearchChange={handleSearchChange} />
          <PrimaryButton
            className="rounded-xl flex items-center md:justify-center justify-start tracking-tight capitalize w-full md:w-auto "
            onClick={() => {
              setIsModalOpen(!isModalOpen);
              setMode("create");
              setSelectedPetugas(null);
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
            {mode === "create" && <CreateAccountPetugas />}
            {mode === "read" && (
              <ReadAccountPetugas petugas={selectedPetugas} />
            )}
            {mode === "edit" && (
              <EditAccountPetugas petugas={selectedPetugas} />
            )}
          </div>
        </Modal>
      </div>
      <div className="group bg-white h-full col-span-12 lg:col-span-12 row-span-6 rounded-2xl relative">
        <div className="relative">
          <div className="overflow-x-auto">
            <table className="w-full rounded-lg text-center">
              <thead>
                <tr className="text-primary text-sm font-semibold">
                  <th className="py-3 px-4">No</th>
                  <th className="py-3 px-4">NIP</th>
                  <th className="py-3 px-4">Nama</th>
                  <th className="py-3 px-4">No HP</th>
                  <th className="py-3 px-4">Selengkapnya</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((petugas, index) => (
                  <tr
                    key={index}
                    className="text-gray-700 border-b hover:bg-indigo-50 text-sm cursor-pointer"
                  >
                    <td className="py-3 px-4">{index + 1}</td>
                    <td className="py-3 px-4">{petugas.NIP}</td>
                    <td className="py-3 px-4">{petugas.name}</td>
                    <td className="py-3 px-4">{petugas.no_hp}</td>
                    <td className="py-3 px-4 relative flex justify-center ">
                      {available === "available" ? (
                        <>
                          <button
                            className="py-3 px-4 flex items-center gap-3 hover:bg-slate-200 rounded-xl"
                            onClick={() =>
                              setOpenDropdown(
                                openDropdown === petugas.id ? null : petugas.id,
                              )
                            }
                          >
                            <FaEllipsisV className="text-xl text-gray-600" />
                          </button>
                          {openDropdown === petugas.id && (
                            <div
                              className="absolute right-0  top-0 mt-2 w-32 bg-white border rounded-lg shadow-lg z-50"
                              ref={dropdownRef}
                            >
                              <button
                                className="w-full flex items-center gap-2 px-4 py-2 hover:bg-gray-100 text-gray-700"
                                onClick={() => {
                                  setMode("read");
                                  setIsModalOpen(true);
                                  setSelectedPetugas(petugas);
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
                                  setSelectedPetugas(petugas);
                                }}
                              >
                                <FaEdit className="text-blue-600" />
                                <span>Edit</span>
                              </button>
                              <button
                                className="w-full flex items-center gap-2 px-4 py-2 hover:bg-gray-100 text-gray-700"
                                onClick={() => handleDelete(petugas.id)}
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
        </div>
      </div>
    </div>
  );
};

export default TableAccountPetugas;
